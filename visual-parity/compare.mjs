#!/usr/bin/env node
/**
 * Pixel-parity checker: dm_learning (reference) vs dm_learning_refactor /v2
 *
 * Usage:
 *   node compare.mjs                         # all static pages, laptop viewport
 *   node compare.mjs --viewport all          # mobile + tablet + laptop per page
 *   node compare.mjs --page home             # single page slug
 *   node compare.mjs --page home --viewport mobile
 *   node compare.mjs --list                  # list page slugs
 */

import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  loadCourseSlugs,
  loadMicrosoftSlugs,
  loadWebinarSlugs,
  BLOG_SAMPLE_SLUG,
} from './load-pages.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'output');

const REF_BASE = process.env.REF_BASE ?? 'http://localhost:3001';
const V2_BASE = process.env.V2_BASE ?? 'http://localhost:3000/v2';

const VIEWPORTS = {
  mobile: { width: 390, height: 844, label: 'mobile' },
  tablet: { width: 768, height: 1024, label: 'tablet' },
  laptop: { width: 1440, height: 900, label: 'laptop' },
};

const DEVICE_SCALE = 1;
const MAX_DIFF_PERCENT = 0.01;
const WAIT_MS = 3500;
const LOAD_STATE = 'load';

/** Static pages: slug -> path segment (no leading slash) */
const STATIC_PAGES = [
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
  { slug: 'thankyou', path: 'thankyou' },
  { slug: 'success', path: 'success' },
  { slug: 'failed', path: 'failed' },
  { slug: 'payment', path: 'payment' },
  { slug: 'harsh', path: 'harsh' },
  { slug: 'summercamps', path: 'summercamps' },
  {
    slug: 'amit-tiwari-dmp',
    path: 'amit-tiwari/digital-marketing-professional',
  },
  {
    slug: 'leveraging-ai-with-solo-preneurship',
    path: 'leveraging-ai-with-solo-preneurship',
  },
  {
    slug: 'master-100-ai-prompts-in-60-minutes',
    path: 'master-100-ai-prompts-in-60-minutes',
  },
];

function buildAllPages() {
  const courseSlugs = loadCourseSlugs();
  const microsoftSlugs = loadMicrosoftSlugs();
  const webinarSlugs = loadWebinarSlugs();

  const dynamic = [
    ...courseSlugs.map((slug) => ({
      slug: `course-${slug}`,
      path: `courses/${slug}`,
    })),
    ...microsoftSlugs.map((slug) => ({
      slug: `ms-${slug}`,
      path: `microsoft-certifications/${slug}`,
    })),
    ...webinarSlugs.map((slug) => ({
      slug: `webinar-${slug}`,
      path: slug,
    })),
    { slug: `blog-${BLOG_SAMPLE_SLUG}`, path: `blog/${BLOG_SAMPLE_SLUG}` },
  ];
  return [...STATIC_PAGES, ...dynamic];
}

const ALL_PAGES = buildAllPages();

function refUrl(pathSegment) {
  const p = pathSegment ? `/${pathSegment}` : '/';
  return `${REF_BASE}${p}`;
}

function v2Url(pathSegment) {
  const p = pathSegment ? `/${pathSegment}` : '/';
  return `${V2_BASE}${p}`;
}

async function capturePage(page, url, viewportWidth) {
  const response = await page.goto(url, { waitUntil: LOAD_STATE, timeout: 120000 });
  const status = response?.status() ?? 0;
  if (status >= 400) {
    return { status, buffer: null, height: 0 };
  }
  await page.waitForTimeout(WAIT_MS);
  await page.evaluate(async () => {
    const totalHeight = document.documentElement.scrollHeight;
    const step = window.innerHeight;
    for (let y = 0; y < totalHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
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
    document.querySelectorAll('iframe').forEach((el) => {
      const div = document.createElement('div');
      div.style.cssText = `width:${el.offsetWidth}px;height:${el.offsetHeight}px;background:#ccc;`;
      el.replaceWith(div);
    });
  });
  const { height } = await page.evaluate(() => ({
    height: document.documentElement.scrollHeight,
    width: Math.min(document.documentElement.clientWidth, document.documentElement.scrollWidth),
  }));
  const clipHeight = Math.min(height, 16000);
  const clipWidth = viewportWidth;
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

function compareBuffers(refBuf, v2Buf, outDir) {
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

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'reference.png'), PNG.sync.write(refPad));
  fs.writeFileSync(path.join(outDir, 'v2.png'), PNG.sync.write(v2Pad));
  fs.writeFileSync(path.join(outDir, 'diff.png'), PNG.sync.write(diff));

  return {
    refSize: { w: ref.width, h: ref.height },
    v2Size: { w: v2.width, h: v2.height },
    padded: { w: width, h: height },
    numDiff,
    totalPixels,
    diffPercent,
  };
}

async function runPage(browser, pageDef, viewportKey) {
  const { slug, path: pathSegment } = pageDef;
  const viewport = VIEWPORTS[viewportKey];
  const ref = refUrl(pathSegment);
  const v2 = v2Url(pathSegment);
  const resultSlug = `${slug}__${viewportKey}`;

  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: DEVICE_SCALE,
    locale: 'en-US',
    colorScheme: 'light',
    reducedMotion: 'reduce',
    forcedColors: 'none',
  });

  const refPage = await context.newPage();
  const v2Page = await context.newPage();

  let result = {
    slug: resultSlug,
    pageSlug: slug,
    viewport: viewportKey,
    ref,
    v2,
    refStatus: 0,
    v2Status: 0,
    pass: false,
    error: null,
    compare: null,
  };

  try {
    const refCap = await capturePage(refPage, ref, viewport.width);
    const v2Cap = await capturePage(v2Page, v2, viewport.width);

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

    const outDir = path.join(OUT_DIR, slug, viewportKey);
    result.compare = compareBuffers(refCap.buffer, v2Cap.buffer, outDir);
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
  const vpIdx = args.indexOf('--viewport');
  const staticOnly = args.includes('--static');
  return {
    page: pageIdx >= 0 ? args[pageIdx + 1] : null,
    viewport: vpIdx >= 0 ? args[vpIdx + 1] : 'laptop',
    staticOnly,
  };
}

function resolveViewportKeys(viewportArg) {
  if (viewportArg === 'all') return Object.keys(VIEWPORTS);
  if (VIEWPORTS[viewportArg]) return [viewportArg];
  console.error(`Unknown viewport: ${viewportArg}. Use mobile|tablet|laptop|all`);
  process.exit(1);
}

async function main() {
  const opts = parseArgs();

  if (opts.list) {
    console.log(ALL_PAGES.map((p) => p.slug).join('\n'));
    return;
  }

  let pages = opts.staticOnly ? STATIC_PAGES : ALL_PAGES;
  if (opts.page) {
    pages = pages.filter((p) => p.slug === opts.page || p.slug.startsWith(opts.page));
    if (!pages.length) {
      console.error(`Unknown page slug: ${opts.page}`);
      process.exit(1);
    }
  }

  const viewportKeys = resolveViewportKeys(opts.viewport);

  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Reference: ${REF_BASE}`);
  console.log(`V2:        ${V2_BASE}`);
  console.log(`Viewports: ${viewportKeys.join(', ')}`);
  console.log(`Pages:     ${pages.length}\n`);

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const pageDef of pages) {
    for (const vp of viewportKeys) {
      process.stdout.write(`[${pageDef.slug}@${vp}] `);
      const r = await runPage(browser, pageDef, vp);
      results.push(r);
      if (r.pass) {
        console.log('PASS');
      } else if (r.error) {
        console.log(`FAIL — ${r.error}`);
      } else if (r.compare) {
        console.log(`FAIL — ${r.compare.numDiff} px (${r.compare.diffPercent.toFixed(4)}%)`);
      } else {
        console.log('FAIL');
      }
    }
  }

  await browser.close();

  const report = {
    generatedAt: new Date().toISOString(),
    refBase: REF_BASE,
    v2Base: V2_BASE,
    viewports: viewportKeys,
    summary: {
      total: results.length,
      pass: results.filter((r) => r.pass).length,
      fail: results.filter((r) => !r.pass).length,
    },
    results: results.map((r) => ({
      slug: r.slug,
      pageSlug: r.pageSlug,
      viewport: r.viewport,
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
  fs.writeFileSync(path.join(__dirname, 'parity-checklist.md'), buildChecklistMd(report));

  console.log(`\nReport: ${reportPath}`);
  console.log(`Screenshots: ${OUT_DIR}/<slug>/<viewport>/{reference,v2,diff}.png`);
  console.log(`\n${report.summary.pass}/${report.summary.total} checks passed`);

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
    `| Viewports | ${report.viewports.join(', ')} |`,
    `| Match threshold | ≤ ${MAX_DIFF_PERCENT}% |`,
    '',
    `## Summary: ${report.summary.pass}/${report.summary.total} passed`,
    '',
    '| Page | Viewport | Status | Ref HTTP | V2 HTTP | Diff % | Dimensions | Notes |',
    '| --- | --- | --- | --- | --- | --- | --- | --- |',
  ];

  for (const r of report.results) {
    const status = r.pass ? 'PASS' : 'FAIL';
    const dims = r.compare
      ? `${r.compare.refSize.w}×${r.compare.refSize.h} vs ${r.compare.v2Size.w}×${r.compare.v2Size.h}`
      : '—';
    const diffPct = r.compare ? `${r.compare.diffPercent.toFixed(4)}%` : '—';
    const notes = r.error ?? (r.pass ? '' : 'See diff.png');
    lines.push(
      `| ${r.pageSlug} | ${r.viewport} | ${status} | ${r.refStatus} | ${r.v2Status} | ${diffPct} | ${dims} | ${notes} |`
    );
  }

  lines.push('', '## Artifacts', '', 'Failed checks: `output/<slug>/<viewport>/diff.png`');
  return lines.join('\n');
}

function buildChecklistMd(report) {
  const byPage = new Map();
  for (const r of report.results) {
    if (!byPage.has(r.pageSlug)) byPage.set(r.pageSlug, {});
    byPage.get(r.pageSlug)[r.viewport] = r.pass ? 'PASS' : 'FAIL';
  }
  const lines = [
    '# V2 pixel parity checklist',
    '',
    `> Auto-generated from compare run · ${report.generatedAt}`,
    `> Reference: ${report.refBase} · V2: ${report.v2Base} · threshold ≤ ${MAX_DIFF_PERCENT}%`,
    '',
    `**Summary:** ${report.summary.pass}/${report.summary.total} checks passed`,
    '',
    '| Page | mobile | tablet | laptop |',
    '| --- | --- | --- | --- |',
  ];
  for (const [page, vps] of [...byPage.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(
      `| ${page} | ${vps.mobile ?? '—'} | ${vps.tablet ?? '—'} | ${vps.laptop ?? '—'} |`
    );
  }
  lines.push(
    '',
    '## Run',
    '',
    '```bash',
    'cd dm_learning && pnpm dev -p 3001',
    'cd dm_learning_refactor && pnpm dev -p 3000',
    'cd visual-parity && node compare.mjs --viewport all',
    '```',
    ''
  );
  return lines.join('\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
