#!/usr/bin/env node
import { chromium } from 'playwright';

const w = Number(process.argv[2]) || 991;
const REF = 'http://localhost:3001/';
const V2 = 'http://localhost:3000/v2';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const [label, url, isV2] of [
  ['ref', REF, false],
  ['v2', V2, true],
]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (isV2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const m = await page.evaluate(() => {
    const h = document.querySelector('.hero-banner-content');
    const l = document.querySelector('.hero-left');
    const r = document.querySelector('.hero-right');
    const hs = h && getComputedStyle(h);
    const h1 = document.querySelector('.hero-left h1');
    const p = document.querySelector('.hero-left p');
    const btn = document.querySelector('.hero-left .dml-button, .hero-left a');
    return {
      hero: Math.round(h?.getBoundingClientRect().height ?? 0),
      left: Math.round(l?.getBoundingClientRect().height ?? 0),
      right: Math.round(r?.getBoundingClientRect().height ?? 0),
      leftW: Math.round(l?.getBoundingClientRect().width ?? 0),
      gap: hs?.gap,
      flexDir: hs?.flexDirection,
      h1h: Math.round(h1?.getBoundingClientRect().height ?? 0),
      h1fs: h1 && getComputedStyle(h1).fontSize,
      h1lh: h1 && getComputedStyle(h1).lineHeight,
      ph: Math.round(p?.getBoundingClientRect().height ?? 0),
      pPad: p && getComputedStyle(p).padding,
      btnh: Math.round(btn?.getBoundingClientRect().height ?? 0),
      imgH: Math.round(
        document.querySelector('.hero-right img')?.getBoundingClientRect().height ?? 0,
      ),
    };
  });
  console.log(`${label} @ ${w}px`, m);
}
await browser.close();
