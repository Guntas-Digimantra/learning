#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

async function shot(url, v2) {
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const buf = await page.locator('.hero-left').first().screenshot();
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
console.log(`${parseFloat(pct) <= 2 ? 'PASS' : 'FAIL'}  hero-left: ${pct}%  ref ${ref.width}x${ref.height}  v2 ${v2.width}x${v2.height}`);
await browser.close();
