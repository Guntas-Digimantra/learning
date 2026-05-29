#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const path = process.argv[2] || 'courses/full-stack-development-mern';
const width = Number(process.argv[3]) || 390;

const SELECTORS = [
  '.course-hero-banner',
  '.stats-bar-container',
  '.skills-matter-section',
  '.course-included-section',
  '.roadmap-section',
  '.discover-courses-section',
  '.certification-section',
  '.faq-section-details',
  '.cta-section',
  'footer.footer-section',
];

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const ctx = await browser.newContext({
  viewport: { width, height: 844 },
  reducedMotion: 'reduce',
});
const refP = await ctx.newPage();
const v2P = await ctx.newPage();

async function prep(page, url, isV2) {
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(3500);
  if (isV2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
    document.querySelectorAll('.roadmap-steps').forEach((el) => {
      el.scrollLeft = 0;
    });
    await new Promise((r) => setTimeout(r, 2500));
  });
}

await prep(refP, `http://localhost:3001/${path}`, false);
await prep(v2P, `http://localhost:3000/v2/${path}`, true);

const sh = await Promise.all([
  refP.evaluate(() => document.documentElement.scrollHeight),
  v2P.evaluate(() => document.documentElement.scrollHeight),
]);
console.log(`scrollHeight ref=${sh[0]} v2=${sh[1]}\n`);

for (const sel of SELECTORS) {
  const refLoc = refP.locator(sel).first();
  const v2Loc = v2P.locator(sel).first();
  const rc = await refLoc.count();
  const vc = await v2Loc.count();
  if (!rc || !vc) {
    console.log(`${sel} MISSING rc=${rc} vc=${vc}`);
    continue;
  }
  const refBuf = await refLoc.screenshot({ timeout: 15000 });
  const v2Buf = await v2Loc.screenshot({ timeout: 15000 });
  const ref = PNG.sync.read(refBuf);
  const v2 = PNG.sync.read(v2Buf);
  const w = Math.max(ref.width, v2.width);
  const h = Math.max(ref.height, v2.height);
  const refC = new PNG({ width: w, height: h });
  const v2C = new PNG({ width: w, height: h });
  const diff = new PNG({ width: w, height: h });
  PNG.bitblt(ref, refC, 0, 0, ref.width, ref.height, 0, 0);
  PNG.bitblt(v2, v2C, 0, 0, v2.width, v2.height, 0, 0);
  const n = pixelmatch(refC.data, v2C.data, diff.data, w, h, {
    threshold: 0.12,
    includeAA: false,
  });
  const pct = ((n / (w * h)) * 100).toFixed(2);
  const dim =
    ref.height !== v2.height || ref.width !== v2.width
      ? ` (${ref.width}x${ref.height} vs ${v2.width}x${v2.height})`
      : '';
  console.log(`${pct.padStart(6)}% ${sel}${dim}`);
}

await browser.close();
