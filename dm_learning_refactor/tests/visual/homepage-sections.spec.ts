import fs from 'fs';
import path from 'path';

import { test, expect, type Page } from '@playwright/test';
import { PNG } from 'pngjs';

import {
  alignAndDiff,
  decodePng,
  maskVolatile,
  referenceUrl,
  screenshotHeaderAndHero,
  stabilizePage,
  v2Url,
} from './helpers';
import { VIEWPORTS } from './config';

const MAX_DIFF_RATIO = Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.02');
const OUT_ROOT = path.join(process.cwd(), '.parity-screenshots', 'homepage-sections');

async function scrollToSection(page: Page, selector: string) {
  if (selector === '.home-banner-section') {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(100);
    return;
  }
  const loc = page.locator(selector).first();
  if ((await loc.count()) > 0) {
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
  }
}

async function scrollToCollaborations(page: Page) {
  const loc = page.locator('.home-collaborations-section').or(
    page.getByRole('heading', { name: /collaborations/i }),
  );
  await loc.first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
}

async function screenshotLocator(page: Page, selector: string) {
  const loc = page.locator(selector).first();
  await loc.waitFor({ state: 'visible', timeout: 15_000 });
  return loc.screenshot();
}

async function compareSection(
  referencePage: Page,
  v2Page: Page,
  getShot: (page: Page) => Promise<Buffer>,
  label: string,
  viewportName: string,
) {
  const refBuf = await getShot(referencePage);
  const v2Buf = await getShot(v2Page);
  const { diffPixels, total, diff, refAligned, v2Aligned } = alignAndDiff(
    decodePng(refBuf),
    decodePng(v2Buf),
  );
  const ratio = diffPixels / total;
  const base = path.join(OUT_ROOT, `${label}-${viewportName}`);

  fs.writeFileSync(`${base}-reference.png`, PNG.sync.write(refAligned));
  fs.writeFileSync(`${base}-v2.png`, PNG.sync.write(v2Aligned));
  fs.writeFileSync(`${base}-diff.png`, PNG.sync.write(diff));

  expect(
    ratio,
    `${label} ${viewportName}: ${(ratio * 100).toFixed(3)}% differ. See ${OUT_ROOT}`,
  ).toBeLessThanOrEqual(MAX_DIFF_RATIO);
}

test.describe('Homepage — banner + collaborations', () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT_ROOT, { recursive: true });
    expect(process.env.REFERENCE_BASE_URL).toBeTruthy();
  });

  for (const viewport of VIEWPORTS) {
    test(`header + hero @ ${viewport.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const referencePage = await context.newPage();
      const v2Page = await context.newPage();

      await referencePage.goto(referenceUrl('/'), { waitUntil: 'domcontentloaded' });
      await v2Page.goto(v2Url('/'), { waitUntil: 'domcontentloaded' });
      await stabilizePage(referencePage);
      await stabilizePage(v2Page);
      await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));
      await maskVolatile(referencePage);
      await maskVolatile(v2Page);

      await compareSection(
        referencePage,
        v2Page,
        (p) => screenshotHeaderAndHero(p),
        'chrome-hero',
        viewport.name,
      );

      await context.close();
    });

    test(`banner @ ${viewport.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const referencePage = await context.newPage();
      const v2Page = await context.newPage();

      await referencePage.goto(referenceUrl('/'), { waitUntil: 'domcontentloaded' });
      await v2Page.goto(v2Url('/'), { waitUntil: 'domcontentloaded' });
      await stabilizePage(referencePage);
      await stabilizePage(v2Page);
      await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));
      await maskVolatile(referencePage);
      await maskVolatile(v2Page);

      await compareSection(
        referencePage,
        v2Page,
        async (p) => {
          await scrollToSection(p, '.home-banner-section');
          return screenshotLocator(p, '.hero-banner-content');
        },
        'banner',
        viewport.name,
      );

      await context.close();
    });

    test(`about @ ${viewport.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const referencePage = await context.newPage();
      const v2Page = await context.newPage();

      await referencePage.goto(referenceUrl('/'), { waitUntil: 'domcontentloaded' });
      await v2Page.goto(v2Url('/'), { waitUntil: 'domcontentloaded' });
      await stabilizePage(referencePage);
      await stabilizePage(v2Page);
      await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));
      await maskVolatile(referencePage);
      await maskVolatile(v2Page);

      await compareSection(
        referencePage,
        v2Page,
        async (p) => {
          await scrollToSection(p, '.about-section');
          return screenshotLocator(p, '.about-section');
        },
        'about',
        viewport.name,
      );

      await context.close();
    });

    test(`collaborations @ ${viewport.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const referencePage = await context.newPage();
      const v2Page = await context.newPage();

      await referencePage.goto(referenceUrl('/'), { waitUntil: 'domcontentloaded' });
      await v2Page.goto(v2Url('/'), { waitUntil: 'domcontentloaded' });
      await stabilizePage(referencePage);
      await stabilizePage(v2Page);
      await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));
      await maskVolatile(referencePage);
      await maskVolatile(v2Page);

      await compareSection(
        referencePage,
        v2Page,
        async (p) => {
          await scrollToCollaborations(p);
          const v2 = await p.locator('.home-collaborations-section').count();
          if (v2 > 0) {
            return screenshotLocator(p, '.home-collaborations-section');
          }
          const heading = p.getByRole('heading', { name: /collaborations/i });
          return heading.locator('xpath=ancestor::div[1]').screenshot();
        },
        'collaborations',
        viewport.name,
      );

      await context.close();
    });
  }
});
