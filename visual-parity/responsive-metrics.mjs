#!/usr/bin/env node
import { chromium } from 'playwright';

const w = Number(process.argv[2]) || 390;
const sel = process.argv[3] || '.about-content';
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
  const m = await page.evaluate((s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      h: Math.round(r.height),
      w: Math.round(r.width),
      display: cs.display,
      flexDir: cs.flexDirection,
      gap: cs.gap,
      pad: cs.padding,
    };
  }, sel);
  console.log(`${label} @ ${w}`, m);
}
await browser.close();
