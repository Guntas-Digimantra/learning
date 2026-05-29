#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';

const FAILING = [
  ['about-content', '.about-content'],
  ['part-time', '.part-time-section'],
  ['portfolio', '.portfolio-section'],
  ['discover-offer', '.discover-offer-section'],
  ['features', '.features__area'],
  ['testimonial', '.testimonial__area'],
  ['contact', '.blog-post-content'],
];

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const refPage = await ctx.newPage();
const v2Page = await ctx.newPage();
await refPage.goto('http://localhost:3001/', { waitUntil: 'load', timeout: 120_000 });
await v2Page.goto('http://localhost:3000/v2', { waitUntil: 'load', timeout: 120_000 });
await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));
await refPage.addStyleTag({
  content:
    '.animate-collab-scroll,.collab-track,[class*="collab-scroll"],.home-collaborations-section [class*="track"]{animation:none!important;transform:translateX(0)!important;}',
});
await v2Page.addStyleTag({
  content:
    '.animate-collab-scroll,.collab-track,[class*="collab-scroll"],.home-collaborations-section [class*="track"]{animation:none!important;transform:translateX(0)!important;}',
});
fs.mkdirSync('output/sections', { recursive: true });

for (const [slug, sel] of FAILING) {
  for (const page of [refPage, v2Page]) {
    const loc = page.locator(sel).first();
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
  }
  const refBuf = await refPage.locator(sel).first().screenshot();
  const v2Buf = await v2Page.locator(sel).first().screenshot();
  const ref = PNG.sync.read(refBuf);
  const v2 = PNG.sync.read(v2Buf);
  const w = Math.min(ref.width, v2.width);
  const h = Math.min(ref.height, v2.height);
  const diff = new PNG({ width: w, height: h });
  const refC = new PNG({ width: w, height: h });
  const v2C = new PNG({ width: w, height: h });
  PNG.bitblt(ref, refC, 0, 0, w, h, 0, 0);
  PNG.bitblt(v2, v2C, 0, 0, w, h, 0, 0);
  const n = pixelmatch(refC.data, v2C.data, diff.data, w, h, { threshold: 0.12, includeAA: false });
  fs.writeFileSync(`output/sections/${slug}-diff.png`, PNG.sync.write(diff));
  let minX = w,
    minY = h,
    maxX = 0,
    maxY = 0;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = (w * y + x) * 4;
      if (diff.data[i] > 0 || diff.data[i + 1] > 0) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  console.log(
    slug,
    `${((n / (w * h)) * 100).toFixed(3)}%`,
    `ref ${ref.width}x${ref.height} v2 ${v2.width}x${v2.height}`,
    `hotspot y=${minY}-${maxY} x=${minX}-${maxX}`
  );
}
await browser.close();
