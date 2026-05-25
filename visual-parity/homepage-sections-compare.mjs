#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const THRESHOLD = 0.5;
const VP = { width: 1440, height: 900 };
const REF = process.env.REF_BASE ?? 'http://localhost:3001/';
const V2 = process.env.V2_BASE ?? 'http://localhost:3000/v2';

const SECTIONS = [
  { slug: 'header', selector: 'header.sticky-header, header' },
  { slug: 'hero-banner-content', selector: '.hero-banner-content' },
  { slug: 'about-content', selector: '.about-content' },
  { slug: 'collaborations', selector: '.home-collaborations-section' },
  { slug: 'start-learning', selector: '.start-learning-container' },
  { slug: 'part-time', selector: '.part-time-section' },
  { slug: 'courses-container', selector: '.courses-container', wait: 'courses' },
  { slug: 'portfolio', selector: '.portfolio-section' },
  { slug: 'discover-offer', selector: '.discover-offer-section' },
  { slug: 'fact-area', selector: '.fact-area-section' },
  { slug: 'faq-section', selector: '.faq-section' },
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
  return {
    pct: ((n / (w * h)) * 100).toFixed(3),
    numDiff: n,
    ref: [ref.width, ref.height],
    v2: [v2.width, v2.height],
  };
}

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: VP });
const refPage = await ctx.newPage();
const v2Page = await ctx.newPage();
const pauseMotion = async (page) => {
  await page.addStyleTag({
    content:
      '.animate-collab-scroll,.collab-track,[class*="collab-scroll"],.home-collaborations-section [class*="track"]{animation:none!important;transform:translateX(0)!important;}',
  });
};

await refPage.goto(REF, { waitUntil: 'load', timeout: 120_000 });
await v2Page.goto(V2, { waitUntil: 'load', timeout: 120_000 });
await pauseMotion(refPage);
await pauseMotion(v2Page);
await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));

const waitCourses = async (page) => {
  await page.waitForSelector('.courses-container .swiper-slide', { timeout: 30_000 });
  await page.waitForTimeout(500);
};

let failed = 0;
for (const s of SECTIONS) {
  if (s.wait === 'courses') {
    await waitCourses(refPage);
    await waitCourses(v2Page);
  }
  const refLoc = refPage.locator(s.selector).first();
  const v2Loc = v2Page.locator(s.selector).first();
  try {
    await refLoc.scrollIntoViewIfNeeded();
    await v2Loc.scrollIntoViewIfNeeded();
    const waitMs = s.slug === 'contact' ? 2500 : 400;
    await refPage.waitForTimeout(waitMs);
    await v2Page.waitForTimeout(waitMs);
    if (s.slug === 'contact') {
      const hideMaps = () => {
        document.querySelectorAll('.digi-map').forEach((el) => {
          el.style.visibility = 'hidden';
        });
      };
      await refPage.evaluate(hideMaps);
      await v2Page.evaluate(hideMaps);
    }
    const refBuf = await refLoc.screenshot({ timeout: 15_000 });
    const v2Buf = await v2Loc.screenshot({ timeout: 15_000 });
    const { pct, numDiff, ref, v2 } = diffPng(refBuf, v2Buf);
    const heightTol = 2;
    const heightMatch = Math.abs(ref[1] - v2[1]) <= heightTol;
    const pass =
      ref[0] === v2[0] && heightMatch && parseFloat(pct) < THRESHOLD;
    if (!pass) failed++;
    console.log(`${pass ? 'PASS' : 'FAIL'}  ${s.slug}: ${pct}%  ref ${ref[0]}x${ref[1]}  v2 ${v2[0]}x${v2[1]}`);
  } catch (e) {
    failed++;
    console.log(`FAIL  ${s.slug}: ${e.message}`);
  }
}
await browser.close();
process.exit(failed > 0 ? 1 : 0);
