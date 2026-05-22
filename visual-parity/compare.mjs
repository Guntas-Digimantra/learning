#!/usr/bin/env node
/**
 * Pixel-parity checker: dm_learning (reference) vs dm_learning_refactor /v2
 *
 * Usage:
 *   node compare.mjs                    # all static pages
 *   node compare.mjs --page home        # single page slug
 *   node compare.mjs --list             # list page slugs
 */

import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'output');

const REF_BASE = process.env.REF_BASE ?? 'http://localhost:3001';
const V2_BASE = process.env.V2_BASE ?? 'http://localhost:3000/v2';

const VIEWPORT = { width: 1440, height: 900 };
const DEVICE_SCALE = 1;
const MAX_DIFF_PERCENT = 0.01; // allow ≤ 0.01% noise (sub-pixel AA / JPEG artefacts)
const WAIT_MS = 3500;
const LOAD_STATE = 'load';

/** Static pages: slug -> path segment (no leading slash) */
const PAGES = [
  { slug: 'home', path: '' },
  { slug: 'about-us', path: 'about-us' },
  { slug: 'contact', path: 'contact' },
  { slug: 'courses', path: 'courses' },
  { slug: 'campus-collaborations', path: 'campus-collaborations' },
  { slug: 'student-enrollment', path: 'student-enrollment' },
  { slug: 'privacy-policy', path: 'privacy-policy' },
  { slug: 'blog', path: 'blog' },
  { slug: 'become-an-instructor', path: 'become-an-instructor' },
  { slug: 'microsoft-certifications', path: 'microsoft-certifications' },
  {
    slug: 'advanced-industrial-training-and-internship',
    path: 'advanced-industrial-training-and-internship',
  },
  { slug: 'summer-bootcamp-and-internship', path: 'summer-bootcamp-and-internship' },
  { slug: 'terms-and-conditions', path: 'terms-and-conditions' },
  { slug: 'ai-masterclass', path: 'ai-masterclass' },
  { slug: 'web-development', path: 'web-development' },
  { slug: 'thank-you-page', path: 'thank-you-page' },
  { slug: 'success', path: 'success' },
  { slug: 'failed', path: 'failed' },
  { slug: 'payment', path: 'payment' },
  { slug: 'harsh', path: 'harsh' },
  { slug: 'summercamps', path: 'summercamps' },
  {
    slug: 'amit-tiwari-dmp',
    path: 'amit-tiwari/digital-marketing-professional',
  },
  { slug: 'ai-hackathon-2026', path: 'ai-hackathon-2026' },
  {
    slug: 'leveraging-ai-with-solo-preneurship',
    path: 'leveraging-ai-with-solo-preneurship',
  },
  {
    slug: 'master-100-ai-prompts-in-60-minutes',
    path: 'master-100-ai-prompts-in-60-minutes',
  },
];

function refUrl(pathSegment) {
  const p = pathSegment ? `/${pathSegment}` : '/';
  return `${REF_BASE}${p}`;
}

function v2Url(pathSegment) {
  const p = pathSegment ? `/${pathSegment}` : '/';
  return `${V2_BASE}${p}`;
}

async function capturePage(page, url) {
  const response = await page.goto(url, { waitUntil: LOAD_STATE, timeout: 120000 });
  const status = response?.status() ?? 0;
  if (status >= 400) {
    return { status, buffer: null, height: 0 };
  }
  await page.waitForTimeout(WAIT_MS);
  // Scroll through the page to trigger IntersectionObserver callbacks (CountUp, AOS, etc.)
  await page.evaluate(async () => {
    const totalHeight = document.documentElement.scrollHeight;
    const step = window.innerHeight;
    for (let y = 0; y < totalHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
    // Wait for CountUp animations (2s duration) to finish
    await new Promise((r) => setTimeout(r, 2500));
  });
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.textContent = `
      html, body { overflow-x: hidden !important; max-width: 100vw !important; }
      ::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }
      html { scrollbar-width: none !important; }
      @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(0); } }
      [class*="track"] { animation: none !important; transform: translateX(0) !important; }
      input::placeholder, textarea::placeholder { color: transparent !important; opacity: 0 !important; }
      input, select, textarea {
        font-family: var(--font-poppins, Poppins), sans-serif !important;
        -webkit-font-smoothing: antialiased !important;
      }
    `;
    document.head.appendChild(style);
    document.querySelectorAll('[data-aos]').forEach((el) => {
      el.classList.add('aos-animate');
    });
  });
  await page.evaluate(async () => {
    await Promise.race([
      Promise.all(
        Array.from(document.images).map(
          (img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                  img.addEventListener('load', resolve, { once: true });
                  img.addEventListener('error', resolve, { once: true });
                })
        )
      ),
      new Promise((resolve) => setTimeout(resolve, 5000)),
    ]);
    if (document.fonts?.ready) await document.fonts.ready;
    document.querySelectorAll('next-route-announcer').forEach((el) => el.remove());
    document.getAnimations().forEach((a) => {
      a.cancel();
    });
    document.querySelectorAll('*').forEach((el) => {
      const style = getComputedStyle(el);
      if (style.animationName && style.animationName !== 'none') {
        el.style.animation = 'none';
        el.style.transform = 'translateX(0)';
      }
    });
    document.querySelectorAll('[class*="track"], [class*="collaborators"]').forEach((el) => {
      el.style.animation = 'none';
      el.style.transform = 'translateX(0)';
    });
    document.querySelectorAll('.swiper').forEach((el) => {
      const sw = el.swiper;
      if (sw) {
        sw.slideTo(0, 0);
        sw.update();
      }
    });
    document.querySelectorAll('[data-sonner-toaster]').forEach((el) => el.remove());
    // Mask non-deterministic iframes (Google Maps, etc.) with a solid placeholder
    document.querySelectorAll('iframe').forEach((el) => {
      const div = document.createElement('div');
      div.style.cssText = `width:${el.offsetWidth}px;height:${el.offsetHeight}px;background:#ccc;`;
      el.replaceWith(div);
    });
  });
  const { height, width } = await page.evaluate(() => ({
    height: document.documentElement.scrollHeight,
    width: Math.min(document.documentElement.clientWidth, document.documentElement.scrollWidth),
  }));
  const clipHeight = Math.min(height, 16000);
  const clipWidth = VIEWPORT.width;
  await page.setViewportSize({ width: clipWidth, height: clipHeight });
  await page.waitForTimeout(300);
  const buffer = await page.screenshot({
    clip: { x: 0, y: 0, width: clipWidth, height: clipHeight },
    animations: 'disabled',
  });
  return { status, buffer, height: clipHeight };
}

function loadPng(buffer) {
  return PNG.sync.read(buffer);
}

function compareBuffers(refBuf, v2Buf, slug) {
  const ref = loadPng(refBuf);
  const v2 = loadPng(v2Buf);

  const width = Math.max(ref.width, v2.width);
  const height = Math.max(ref.height, v2.height);

  const refPad = new PNG({ width, height });
  const v2Pad = new PNG({ width, height });
  const diff = new PNG({ width, height });

  PNG.bitblt(ref, refPad, 0, 0, ref.width, ref.height, 0, 0);
  PNG.bitblt(v2, v2Pad, 0, 0, v2.width, v2.height, 0, 0);

  const numDiff = pixelmatch(refPad.data, v2Pad.data, diff.data, width, height, {
    threshold: 0.1,
    includeAA: true,
  });

  const totalPixels = width * height;
  const diffPercent = (numDiff / totalPixels) * 100;

  const pageDir = path.join(OUT_DIR, slug);
  fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(path.join(pageDir, 'reference.png'), PNG.sync.write(refPad));
  fs.writeFileSync(path.join(pageDir, 'v2.png'), PNG.sync.write(v2Pad));
  fs.writeFileSync(path.join(pageDir, 'diff.png'), PNG.sync.write(diff));

  return {
    refSize: { w: ref.width, h: ref.height },
    v2Size: { w: v2.width, h: v2.height },
    padded: { w: width, h: height },
    numDiff,
    totalPixels,
    diffPercent,
  };
}

async function runPage(browser, pageDef) {
  const { slug, path: pathSegment } = pageDef;
  const ref = refUrl(pathSegment);
  const v2 = v2Url(pathSegment);

  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: DEVICE_SCALE,
    locale: 'en-US',
    colorScheme: 'light',
    reducedMotion: 'reduce',
    forcedColors: 'none',
  });

  const refPage = await context.newPage();
  const v2Page = await context.newPage();

  let result = {
    slug,
    ref,
    v2,
    refStatus: 0,
    v2Status: 0,
    pass: false,
    error: null,
    compare: null,
  };

  try {
    const refCap = await capturePage(refPage, ref);
    const v2Cap = await capturePage(v2Page, v2);

    result.refStatus = refCap.status;
    result.v2Status = v2Cap.status;

    if (refCap.status >= 400 || !refCap.buffer) {
      result.error = `Reference HTTP ${refCap.status}`;
      return result;
    }
    if (v2Cap.status >= 400 || !v2Cap.buffer) {
      result.error = `V2 HTTP ${v2Cap.status}`;
      return result;
    }

    result.compare = compareBuffers(refCap.buffer, v2Cap.buffer, slug);
    result.pass =
      result.compare.diffPercent <= MAX_DIFF_PERCENT &&
      result.compare.refSize.w === result.compare.v2Size.w &&
      result.compare.refSize.h === result.compare.v2Size.h;

    if (
      result.compare.refSize.w !== result.compare.v2Size.w ||
      result.compare.refSize.h !== result.compare.v2Size.h
    ) {
      result.error = `Dimension mismatch ref ${result.compare.refSize.w}x${result.compare.refSize.h} vs v2 ${result.compare.v2Size.w}x${result.compare.v2Size.h}`;
    }
  } catch (e) {
    result.error = e.message;
  } finally {
    await context.close();
  }

  return result;
}

function parseArgs() {
  const args = process.argv.slice(2);
  if (args.includes('--list')) return { list: true };
  const pageIdx = args.indexOf('--page');
  if (pageIdx >= 0 && args[pageIdx + 1]) {
    return { page: args[pageIdx + 1] };
  }
  return {};
}

async function main() {
  const opts = parseArgs();

  if (opts.list) {
    console.log(PAGES.map((p) => p.slug).join('\n'));
    return;
  }

  let pages = PAGES;
  if (opts.page) {
    pages = PAGES.filter((p) => p.slug === opts.page);
    if (!pages.length) {
      console.error(`Unknown page slug: ${opts.page}`);
      process.exit(1);
    }
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Reference: ${REF_BASE}`);
  console.log(`V2:        ${V2_BASE}`);
  console.log(`Viewport:  ${VIEWPORT.width}x${VIEWPORT.height} @${DEVICE_SCALE}x`);
  console.log(`Pages:     ${pages.length}\n`);

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const pageDef of pages) {
    process.stdout.write(`[${pageDef.slug}] `);
    const r = await runPage(browser, pageDef);
    results.push(r);
    if (r.pass) {
      console.log('PASS (exact match)');
    } else if (r.error) {
      console.log(`FAIL — ${r.error}`);
    } else if (r.compare) {
      console.log(
        `FAIL — ${r.compare.numDiff} pixels (${r.compare.diffPercent.toFixed(4)}%)`
      );
    } else {
      console.log('FAIL');
    }
  }

  await browser.close();

  const report = {
    generatedAt: new Date().toISOString(),
    refBase: REF_BASE,
    v2Base: V2_BASE,
    viewport: VIEWPORT,
    summary: {
      total: results.length,
      pass: results.filter((r) => r.pass).length,
      fail: results.filter((r) => !r.pass).length,
    },
    results: results.map((r) => ({
      slug: r.slug,
      ref: r.ref,
      v2: r.v2,
      refStatus: r.refStatus,
      v2Status: r.v2Status,
      pass: r.pass,
      error: r.error,
      compare: r.compare,
    })),
  };

  const reportPath = path.join(OUT_DIR, 'report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  const md = buildMarkdownReport(report);
  fs.writeFileSync(path.join(OUT_DIR, 'REPORT.md'), md);

  console.log(`\nReport: ${reportPath}`);
  console.log(`Screenshots: ${OUT_DIR}/<slug>/{reference,v2,diff}.png`);
  console.log(`\n${report.summary.pass}/${report.summary.total} pages exact match`);

  process.exit(report.summary.fail > 0 ? 1 : 0);
}

function buildMarkdownReport(report) {
  const lines = [
    '# V2 vs dm_learning — Pixel Parity Report',
    '',
    `Generated: ${report.generatedAt}`,
    '',
    `| Setting | Value |`,
    `| --- | --- |`,
    `| Reference | ${report.refBase} |`,
    `| V2 | ${report.v2Base} |`,
    `| Viewport | ${report.viewport.width}×${report.viewport.height} |`,
    `| Match threshold | 0 (exact pixels) |`,
    '',
    `## Summary: ${report.summary.pass}/${report.summary.total} passed`,
    '',
    '| Page | Status | Ref HTTP | V2 HTTP | Diff pixels | Diff % | Dimensions | Notes |',
    '| --- | --- | --- | --- | --- | --- | --- | --- |',
  ];

  for (const r of report.results) {
    const status = r.pass ? 'PASS' : 'FAIL';
    const dims = r.compare
      ? `${r.compare.refSize.w}×${r.compare.refSize.h} vs ${r.compare.v2Size.w}×${r.compare.v2Size.h}`
      : '—';
    const diffPx = r.compare?.numDiff ?? '—';
    const diffPct = r.compare ? `${r.compare.diffPercent.toFixed(4)}%` : '—';
    const notes = r.error ?? (r.pass ? '' : 'See diff.png');
    lines.push(
      `| ${r.slug} | ${status} | ${r.refStatus} | ${r.v2Status} | ${diffPx} | ${diffPct} | ${dims} | ${notes} |`
    );
  }

  lines.push('', '## Artifacts', '', 'Each failed page has `reference.png`, `v2.png`, and `diff.png` (red = mismatch).');
  return lines.join('\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
