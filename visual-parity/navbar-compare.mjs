#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, 'output', 'section-00-navbar');

const REF = process.env.REF_BASE ?? 'http://localhost:3001/';
const V2 = process.env.V2_BASE ?? 'http://localhost:3000/v2';

const VIEWPORTS = {
  'desktop-1440': { width: 1440, height: 900 },
  'nav-991': { width: 991, height: 900 },
  'laptop-1280': { width: 1280, height: 900 },
};

async function stabilize(page) {
  await page.waitForLoadState('load');
  await page.evaluate(async () => {
    window.scrollTo(0, 0);
    await document.fonts?.ready;
  });
  await page.waitForTimeout(600);
}

async function shotNav(page) {
  const loc = page.locator('header .sticky-header nav').first();
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

async function styles(page, label) {
  return page.evaluate(() => {
    const menu = document.querySelector('header nav ul.menu');
    const nav = document.querySelector('header .sticky-header nav');
    const navbar = document.querySelector('header .navbar');
    const link = document.querySelector('header .navLink');
    const pick = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        display: s.display,
        visibility: s.visibility,
        color: s.color,
        fs: s.fontSize,
        pad: s.padding,
        fw: s.fontWeight,
        flex: s.flex,
        flexGrow: s.flexGrow,
        w: Math.round(r.width),
        h: Math.round(r.height),
      };
    };
    return {
      menu: pick(menu),
      nav: pick(nav),
      navbar: pick(navbar),
      navLink: pick(link),
      menuDisplay: menu ? getComputedStyle(menu).display : 'missing',
      menuCount: menu?.children.length ?? 0,
    };
  });
}

async function runOne(name, vp) {
  const dir = path.join(OUT, name);
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const ctx = await browser.newContext({ viewport: vp });
  const refPage = await ctx.newPage();
  const v2Page = await ctx.newPage();
  await refPage.goto(REF, { waitUntil: 'load', timeout: 120_000 });
  await v2Page.goto(V2, { waitUntil: 'load', timeout: 120_000 });
  await stabilize(refPage);
  await stabilize(v2Page);
  await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));

  console.log(`\n--- ${name} styles ---`);
  console.log('ref', JSON.stringify(await styles(refPage), null, 2));
  console.log('v2 ', JSON.stringify(await styles(v2Page), null, 2));

  const refBuf = await shotNav(refPage);
  const v2Buf = await shotNav(v2Page);
  const { pct, ref, v2, diff, refC, v2C } = diffPng(refBuf, v2Buf);
  fs.writeFileSync(path.join(dir, 'reference.png'), PNG.sync.write(refC));
  fs.writeFileSync(path.join(dir, 'v2.png'), PNG.sync.write(v2C));
  fs.writeFileSync(path.join(dir, 'diff.png'), PNG.sync.write(diff));
  const pass = parseFloat(pct) <= 2;
  console.log(
    `${pass ? 'PASS' : 'FAIL'}  navbar @ ${name}: ${pct}%  ref ${ref.w}x${ref.h}  v2 ${v2.w}x${v2.h}`,
  );
  await browser.close();
  return pass;
}

const arg = process.argv[2] ?? 'all';
for (const k of arg === 'all' ? Object.keys(VIEWPORTS) : [arg]) {
  await runOne(k, VIEWPORTS[k]);
}
