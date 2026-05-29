#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REF = process.env.REF_BASE ?? 'http://localhost:3001/';
const V2 = process.env.V2_BASE ?? 'http://localhost:3000/v2';
const VP = { width: 1440, height: 900 };

const SECTIONS = [
  { slug: 'dropdown', selector: 'header .dropdown-content', hover: true },
  { slug: 'hero-banner-content', selector: '.hero-banner-content' },
  { slug: 'about-content', selector: '.about-content' },
  { slug: 'courses-container', selector: '.courses-container' },
];

async function stabilize(page) {
  await page.waitForLoadState('load');
  await page.evaluate(async () => {
    window.scrollTo(0, 0);
    await document.fonts?.ready;
  });
  await page.waitForTimeout(500);
}

async function shot(page, sel, hover) {
  if (hover) {
    const item = page.locator('header .dropdown').first();
    await item.hover();
    await page.waitForTimeout(300);
  } else {
    const loc = page.locator(sel).first();
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
  }
  const loc = page.locator(sel).first();
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
  return { pct: ((n / (w * h)) * 100).toFixed(3), refC, v2C, diff, ref: [ref.width, ref.height], v2: [v2.width, v2.height] };
}

const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const ctx = await browser.newContext({ viewport: VP });
const refPage = await ctx.newPage();
const v2Page = await ctx.newPage();
await refPage.goto(REF, { waitUntil: 'load', timeout: 120_000 });
await v2Page.goto(V2, { waitUntil: 'load', timeout: 120_000 });
await stabilize(refPage);
await stabilize(v2Page);
await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));

const waitCoursesReady = async (page) => {
  await page.waitForSelector('.courses-container .swiper-slide', { timeout: 30_000 });
  await page.waitForFunction(
    () => {
      const slide = document.querySelector('.courses-container .swiper-slide');
      return slide && slide.getBoundingClientRect().height >= 500;
    },
    { timeout: 30_000 }
  ).catch(() => {});
  await page.waitForTimeout(400);
};
await waitCoursesReady(refPage);
await waitCoursesReady(v2Page);

for (const s of SECTIONS) {
  const dir = path.join(__dirname, 'output', 'sections', s.slug);
  fs.mkdirSync(dir, { recursive: true });
  const refBuf = await shot(refPage, s.selector, s.hover);
  const v2Buf = await shot(v2Page, s.selector, s.hover);
  const { pct, refC, v2C, diff, ref, v2 } = diffPng(refBuf, v2Buf);
  fs.writeFileSync(path.join(dir, 'reference.png'), PNG.sync.write(refC));
  fs.writeFileSync(path.join(dir, 'v2.png'), PNG.sync.write(v2C));
  fs.writeFileSync(path.join(dir, 'diff.png'), PNG.sync.write(diff));
  const pass = parseFloat(pct) <= 1.0;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${s.slug}: ${pct}%  ref ${ref[0]}x${ref[1]}  v2 ${v2[0]}x${v2[1]}`);
}
await browser.close();
