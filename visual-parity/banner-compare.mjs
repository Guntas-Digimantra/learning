#!/usr/bin/env node
/**
 * Section 1 — Banner hero only (@ hero-banner-content)
 * Usage: node banner-compare.mjs [desktop-1440|nav-991|tablet-768|mobile-480|all]
 */
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'output', 'section-01-banner');

const REF = process.env.REF_BASE ?? 'http://localhost:3001/';
const V2 = process.env.V2_BASE ?? 'http://localhost:3000/v2';

const VIEWPORTS = {
  'desktop-1440': { width: 1440, height: 900 },
  'nav-991': { width: 991, height: 900 },
  'tablet-768': { width: 768, height: 900 },
  'mobile-480': { width: 480, height: 900 },
};

async function stabilize(page) {
  await page.waitForLoadState('load');
  await page.evaluate(async () => {
    window.scrollTo(0, 0);
    await document.fonts?.ready;
  });
  await page.waitForTimeout(500);
}

async function shot(page, isV2) {
  if (isV2) {
    await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  }
  const loc = page.locator('.hero-banner-content').first();
  await loc.waitFor({ state: 'visible', timeout: 30_000 });
  return loc.screenshot();
}

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
  const n = pixelmatch(refC.data, v2C.data, diff.data, w, h, { threshold: 0.12 });
  return {
    pct: ((n / (w * h)) * 100).toFixed(3),
    ref: { w: ref.width, h: ref.height },
    v2: { w: v2.width, h: v2.height },
    diff,
    refC,
    v2C,
  };
}

async function runOne(name, vp) {
  const dir = path.join(OUT, name);
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PW_CHANNEL ?? 'chrome',
  });
  const ctx = await browser.newContext({ viewport: vp });
  const refPage = await ctx.newPage();
  const v2Page = await ctx.newPage();
  await refPage.goto(REF, { waitUntil: 'load', timeout: 120_000 });
  await v2Page.goto(V2, { waitUntil: 'load', timeout: 120_000 });
  await stabilize(refPage);
  await stabilize(v2Page);
  const refBuf = await shot(refPage, false);
  const v2Buf = await shot(v2Page, true);
  const { pct, ref, v2, diff, refC, v2C } = diffPng(refBuf, v2Buf);
  fs.writeFileSync(path.join(dir, 'reference.png'), PNG.sync.write(refC));
  fs.writeFileSync(path.join(dir, 'v2.png'), PNG.sync.write(v2C));
  fs.writeFileSync(path.join(dir, 'diff.png'), PNG.sync.write(diff));
  const pass = parseFloat(pct) < 0.5;
  console.log(
    `${pass ? 'PASS' : 'FAIL'}  banner @ ${name}: ${pct}%  ref ${ref.w}x${ref.h}  v2 ${v2.w}x${v2.h}`,
  );
  await browser.close();
  return pass;
}

const arg = process.argv[2] ?? 'all';
const keys = arg === 'all' ? Object.keys(VIEWPORTS) : [arg];
let ok = true;
for (const k of keys) {
  if (!VIEWPORTS[k]) {
    console.error('Unknown viewport:', k);
    process.exit(1);
  }
  const p = await runOne(k, VIEWPORTS[k]);
  if (!p) ok = false;
}
process.exit(ok ? 0 : 1);
