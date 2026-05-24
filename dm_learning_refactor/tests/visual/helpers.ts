import { expect, type Page } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

import { referenceBase, ROUTE_MAP, v2Base, VIEWPORTS } from './config';

/** Crop both images to shared top-left region (avoids inflated diff from height mismatch). */
export function alignAndDiff(ref: PNG, v2: PNG) {
  const width = Math.min(ref.width, v2.width);
  const height = Math.min(ref.height, v2.height);
  const refCrop = new PNG({ width, height });
  const v2Crop = new PNG({ width, height });
  const diff = new PNG({ width, height });
  for (let i = 0; i < refCrop.data.length; i += 4) {
    refCrop.data[i] = 255;
    refCrop.data[i + 1] = 255;
    refCrop.data[i + 2] = 255;
    refCrop.data[i + 3] = 255;
    v2Crop.data[i] = 255;
    v2Crop.data[i + 1] = 255;
    v2Crop.data[i + 2] = 255;
    v2Crop.data[i + 3] = 255;
  }
  PNG.bitblt(ref, refCrop, 0, 0, width, height, 0, 0);
  PNG.bitblt(v2, v2Crop, 0, 0, width, height, 0, 0);
  const diffPixels = pixelmatch(refCrop.data, v2Crop.data, diff.data, width, height, {
    threshold: Number(process.env.VISUAL_PIXELMATCH_THRESHOLD ?? '0.12'),
  });
  return {
    diffPixels,
    total: width * height,
    diff,
    refAligned: refCrop,
    v2Aligned: v2Crop,
    comparedWidth: width,
    comparedHeight: height,
    refSize: { width: ref.width, height: ref.height },
    v2Size: { width: v2.width, height: v2.height },
  };
}

export function decodePng(buffer: Buffer) {
  return PNG.sync.read(buffer);
}

export type ViewportName = (typeof VIEWPORTS)[number]['name'];

export function referenceUrl(path: string): string {
  const base = referenceBase.replace(/\/$/, '');
  return `${base}${path}`;
}

export function v2Url(path: string): string {
  const v2Path = ROUTE_MAP[path] ?? `/v2${path === '/' ? '' : path}`;
  const base = v2Base.replace(/\/$/, '');
  return `${base}${v2Path}`;
}

/** Stabilize page before screenshots (fonts, lazy content). */
export async function stabilizePage(page: Page) {
  await page.waitForLoadState('load');
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    return document.fonts?.ready;
  });
  await page.waitForTimeout(400);
}

/** Screenshot full site header (top bar + sticky nav). Works when sticky row is position:fixed. */
export async function screenshotHeaderChrome(page: Page): Promise<Buffer> {
  const clip = await page.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;

    const parts = [
      '.header-top',
      '.sticky-header',
      'nav',
    ];

    let top = Infinity;
    let bottom = -Infinity;
    let found = false;

    const visit = (el: Element) => {
      const html = el as HTMLElement;
      const style = getComputedStyle(html);
      if (style.display === 'none' || style.visibility === 'hidden') return;
      const r = html.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) return;
      top = Math.min(top, r.top);
      bottom = Math.max(bottom, r.bottom);
      found = true;
    };

    parts.forEach((sel) => header.querySelectorAll(sel).forEach(visit));
    if (!found) return null;

    return {
      x: 0,
      y: Math.max(0, Math.floor(top)),
      width: Math.ceil(window.innerWidth),
      height: Math.ceil(bottom - top),
    };
  });

  if (!clip || clip.width < 1 || clip.height < 1) {
    throw new Error('Could not resolve visible header chrome bounds');
  }

  return page.screenshot({ clip });
}

/** Screenshot site header + homepage hero (what users see above the fold). */
export async function screenshotHeaderAndHero(page: Page): Promise<Buffer> {
  const clip = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.home-banner-section');
    if (!header || !hero) return null;

    const hr = header.getBoundingClientRect();
    const gr = hero.getBoundingClientRect();
    const top = Math.min(hr.top, gr.top);
    const bottom = Math.max(hr.bottom, gr.bottom);

    if (bottom - top < 1) return null;

    return {
      x: 0,
      y: Math.max(0, Math.floor(top)),
      width: Math.ceil(window.innerWidth),
      height: Math.ceil(bottom - top),
    };
  });

  if (!clip || clip.width < 1 || clip.height < 1) {
    throw new Error('Could not resolve header + hero bounds');
  }

  return page.screenshot({ clip });
}

/** Mask volatile regions (counters, dates). Extend per route as needed. */

/** Pause CSS animations so marquee/counters do not skew pixel diffs. */
export async function freezeMotion(page: Page) {
  await page.evaluate(() => {
    document.querySelectorAll('*').forEach((el) => {
      const html = el as HTMLElement;
      const { animationName } = getComputedStyle(html);
      if (animationName && animationName !== 'none') {
        html.style.animation = 'none';
        html.style.transform = 'translateX(0)';
      }
    });
  });
}

export async function maskVolatile(page: Page) {
  await freezeMotion(page);

  const counter = page.locator('.counter-item, .count, [data-testid="stat-counter"]');
  if ((await counter.count()) > 0) {
    await counter.evaluateAll((nodes) => {
      nodes.forEach((n) => {
        (n as HTMLElement).style.visibility = 'hidden';
      });
    });
  }
}

export async function screenshotPage(page: Page, name: string) {
  await stabilizePage(page);
  await maskVolatile(page);
  await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
}

export async function compareRoutePair(
  referencePage: Page,
  v2Page: Page,
  refPath: string,
  snapshotName: string,
) {
  await referencePage.goto(referenceUrl(refPath));
  await v2Page.goto(v2Url(refPath));
  await stabilizePage(referencePage);
  await stabilizePage(v2Page);
  await maskVolatile(referencePage);
  await maskVolatile(v2Page);

  const refShot = await referencePage.screenshot({ fullPage: true });
  const v2Shot = await v2Page.screenshot({ fullPage: true });

  expect(v2Shot).toMatchSnapshot(`${snapshotName}-v2.png`);
  expect(refShot).toMatchSnapshot(`${snapshotName}-reference.png`);
}

export { VIEWPORTS, ROUTE_MAP };
