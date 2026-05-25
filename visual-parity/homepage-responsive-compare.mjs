#!/usr/bin/env node
/**
 * Homepage sections @ mobile/tablet/nav/laptop — 0.5% pixel-diff gate.
 * Usage: node homepage-responsive-compare.mjs [mobile|tablet|nav|laptop|all]
 */
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const THRESHOLD = 0.5;
const REF = process.env.REF_BASE ?? 'http://localhost:3001/';
const V2 = process.env.V2_BASE ?? 'http://localhost:3000/v2';

const VIEWPORTS = {
  mobile: { width: 390, height: 844 },
  tablet: { width: 768, height: 1024 },
  nav: { width: 991, height: 900 },
  laptop: { width: 1440, height: 900 },
};

const SECTIONS = [
  { slug: 'header', type: 'header' },
  { slug: 'hero', selector: '.hero-banner-content' },
  { slug: 'about', selector: '.about-content' },
  { slug: 'start-learning', selector: '.start-learning-container' },
  { slug: 'part-time', selector: '.part-time-section' },
  { slug: 'courses', selector: '.courses-container', wait: 'courses' },
  { slug: 'faq', selector: '.faq-section' },
  { slug: 'features', selector: '.features__area' },
  { slug: 'testimonial', selector: '.testimonial__area' },
  { slug: 'contact', selector: '.blog-post-content' },
];

function diffPng(refBuf, v2Buf) {
  const ref = PNG.sync.read(refBuf);
  const v2 = PNG.sync.read(v2Buf);
  const w = Math.min(ref.width, v2.width);
  const h = Math.min(ref.height, v2.height);
  const refC = new PNG({ width: w, height: h });
  const v2C = new PNG({ width: w, height: h });
  const diff = new PNG({ width: w, height: h });
  PNG.bitblt(ref, refC, 0, 0, w, h, 0, 0);
  PNG.bitblt(v2, v2C, 0, 0, w, h, 0, 0);
  const n = pixelmatch(refC.data, v2C.data, diff.data, w, h, {
    threshold: 0.12,
    includeAA: false,
  });
  const dimMismatch =
    ref.width !== v2.width || ref.height !== v2.height;
  return {
    pct: ((n / (w * h)) * 100).toFixed(3),
    numDiff: n,
    ref: [ref.width, ref.height],
    v2: [v2.width, v2.height],
    dimMismatch,
    diff,
  };
}

async function headerShot(page) {
  const clip = await page.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    let top = Infinity;
    let bottom = 0;
    for (const sel of ['.header-top', '.sticky-header']) {
      header.querySelectorAll(sel).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.height > 0) {
          top = Math.min(top, r.top);
          bottom = Math.max(bottom, r.bottom);
        }
      });
    }
    if (!Number.isFinite(top) || bottom - top < 1) {
      const r = header.getBoundingClientRect();
      top = r.top;
      bottom = r.bottom;
    }
    return {
      x: 0,
      y: Math.max(0, Math.floor(top)),
      width: Math.ceil(window.innerWidth),
      height: Math.ceil(bottom - top),
    };
  });
  if (!clip?.height) throw new Error('header clip missing');
  return page.screenshot({ clip });
}

async function runViewport(name, vp) {
  console.log(`\n## ${name} (${vp.width}px)`);
  const outBase = path.join(__dirname, 'output', 'responsive', name);
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const ctx = await browser.newContext({ viewport: vp });
  const refPage = await ctx.newPage();
  const v2Page = await ctx.newPage();
  await refPage.goto(REF, { waitUntil: 'load', timeout: 120_000 });
  await v2Page.goto(V2, { waitUntil: 'load', timeout: 120_000 });
  await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));

  const waitCourses = async (page) => {
    await page.waitForSelector('.courses-container .swiper-slide', { timeout: 30_000 });
    await page.waitForTimeout(500);
  };
  await waitCourses(refPage);
  await waitCourses(v2Page);

  await refPage.evaluate(() => window.scrollTo(0, 0));
  await v2Page.evaluate(() => window.scrollTo(0, 0));
  await refPage.waitForTimeout(600);
  await v2Page.waitForTimeout(600);

  let failed = 0;
  for (const s of SECTIONS) {
    try {
      let refBuf;
      let v2Buf;
      if (s.type === 'header') {
        refBuf = await headerShot(refPage);
        v2Buf = await headerShot(v2Page);
      } else {
        const refLoc = refPage.locator(s.selector).first();
        const v2Loc = v2Page.locator(s.selector).first();
        await refLoc.scrollIntoViewIfNeeded();
        await v2Loc.scrollIntoViewIfNeeded();
        await refPage.waitForTimeout(350);
        await v2Page.waitForTimeout(350);
        refBuf = await refLoc.screenshot({ timeout: 15_000 });
        v2Buf = await v2Loc.screenshot({ timeout: 15_000 });
      }
      const result = diffPng(refBuf, v2Buf);
      const pass = parseFloat(result.pct) < THRESHOLD;
      if (!pass) {
        failed++;
        const dir = path.join(outBase, s.slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'reference.png'), refBuf);
        fs.writeFileSync(path.join(dir, 'v2.png'), v2Buf);
        if (result.diff) {
          fs.writeFileSync(path.join(dir, 'diff.png'), PNG.sync.write(result.diff));
        }
      }
      const dimNote =
        result.ref[1] !== result.v2[1] || result.ref[0] !== result.v2[0]
          ? ` Δ${result.v2[0] - result.ref[0]}x${result.v2[1] - result.ref[1]}`
          : '';
      const dimFlag = result.dimMismatch ? ' [DIM]' : '';
      console.log(
        `  ${pass ? 'PASS' : 'FAIL'}  ${s.slug}: ${result.pct}%${dimFlag}  ref ${result.ref[0]}x${result.ref[1]}  v2 ${result.v2[0]}x${result.v2[1]}${dimNote}`,
      );
    } catch (e) {
      failed++;
      console.log(`  FAIL  ${s.slug}: ${e.message}`);
    }
  }
  await browser.close();
  return failed;
}

const arg = process.argv[2] ?? 'all';
const keys = arg === 'all' ? Object.keys(VIEWPORTS) : [arg];
if (keys.length === 1 && !VIEWPORTS[keys[0]]) {
  console.error('Use: mobile | tablet | nav | laptop | all');
  process.exit(1);
}

let totalFail = 0;
for (const k of keys) {
  totalFail += await runViewport(k, VIEWPORTS[k]);
}
console.log(`\n${totalFail === 0 ? 'ALL PASS' : `${totalFail} check(s) failed`} @ <${THRESHOLD}%`);
process.exit(totalFail > 0 ? 1 : 0);
