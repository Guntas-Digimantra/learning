#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';

const outDir = path.join(import.meta.dirname, 'output', 'sections');
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

async function shot(url, v2) {
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120_000 });
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  await page.locator('.courses-container').scrollIntoViewIfNeeded();
  await page.waitForSelector('.courses-container .swiper-slide', { timeout: 30_000 });
  await page.waitForTimeout(2000);
  const buf = await page.locator('.courses-container').screenshot();
  await page.close();
  return buf;
}

const refBuf = await shot('http://localhost:3001/', false);
const v2Buf = await shot('http://localhost:3000/v2', true);
const ref = PNG.sync.read(refBuf);
const v2 = PNG.sync.read(v2Buf);
const w = Math.min(ref.width, v2.width);
const h = Math.min(ref.height, v2.height);
const refC = new PNG({ width: w, height: h });
const v2C = new PNG({ width: w, height: h });
const diff = new PNG({ width: w, height: h });
PNG.bitblt(ref, refC, 0, 0, w, h, 0, 0);
PNG.bitblt(v2, v2C, 0, 0, w, h, 0, 0);
const n = pixelmatch(refC.data, v2C.data, diff.data, w, h, { threshold: 0.12 });
const pct = ((n / (w * h)) * 100).toFixed(3);
fs.writeFileSync(path.join(outDir, 'courses-ref.png'), PNG.sync.write(refC));
fs.writeFileSync(path.join(outDir, 'courses-v2.png'), PNG.sync.write(v2C));
fs.writeFileSync(path.join(outDir, 'courses-diff.png'), PNG.sync.write(diff));

const bands = [
  ['top', 0, 0.25],
  ['upper-mid', 0.25, 0.5],
  ['lower-mid', 0.5, 0.75],
  ['bottom', 0.75, 1],
];
for (const [name, y0f, y1f] of bands) {
  let bandDiff = 0;
  let bandTotal = 0;
  const y0 = Math.floor(h * y0f);
  const y1 = Math.floor(h * y1f);
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < w; x++) {
      const i = (w * y + x) * 4;
      const r1 = refC.data[i];
      const g1 = refC.data[i + 1];
      const b1 = refC.data[i + 2];
      const r2 = v2C.data[i];
      const g2 = v2C.data[i + 1];
      const b2 = v2C.data[i + 2];
      bandTotal++;
      if (Math.abs(r1 - r2) > 30 || Math.abs(g1 - g2) > 30 || Math.abs(b1 - b2) > 30) bandDiff++;
    }
  }
  console.log(`${name}: ~${((bandDiff / bandTotal) * 100).toFixed(2)}% rough`);
}
console.log(`total: ${pct}%`);
await browser.close();
