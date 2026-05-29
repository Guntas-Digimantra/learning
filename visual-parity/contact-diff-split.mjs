#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const refPage = await ctx.newPage();
const v2Page = await ctx.newPage();
await refPage.goto('http://localhost:3001/', { waitUntil: 'load' });
await v2Page.goto('http://localhost:3000/v2', { waitUntil: 'load' });
await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));
const sel = '.blog-post-content';
for (const page of [refPage, v2Page]) {
  await page.locator(sel).first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
}
const ref = PNG.sync.read(await refPage.locator(sel).first().screenshot());
const v2 = PNG.sync.read(await v2Page.locator(sel).first().screenshot());
console.log('sizes', ref.width, ref.height, v2.width, v2.height);
const w = Math.min(ref.width, v2.width);
const h = Math.min(ref.height, v2.height);
const refC = new PNG({ width: w, height: h });
const v2C = new PNG({ width: w, height: h });
const diff = new PNG({ width: w, height: h });
PNG.bitblt(ref, refC, 0, 0, w, h, 0, 0);
PNG.bitblt(v2, v2C, 0, 0, w, h, 0, 0);
pixelmatch(refC.data, v2C.data, diff.data, w, h, { threshold: 0.12, includeAA: false });
const mid = Math.floor(w / 2);
let left = 0,
  right = 0;
for (let y = 0; y < h; y++)
  for (let x = 0; x < w; x++) {
    const i = (w * y + x) * 4;
    if (diff.data[i] > 0 || diff.data[i + 1] > 0) {
      if (x < mid) left++;
      else right++;
    }
  }
console.log('contact diff left', left, 'right', right, 'pct', (((left + right) / (w * h)) * 100).toFixed(3));
await browser.close();
