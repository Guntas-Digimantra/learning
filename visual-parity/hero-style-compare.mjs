#!/usr/bin/env node
import { chromium } from 'playwright';

const vpArg = process.argv[2] ?? '1440';
const VIEWPORTS = {
  1440: { width: 1440, height: 900 },
  991: { width: 991, height: 900 },
  768: { width: 768, height: 900 },
  480: { width: 480, height: 900 },
};
const vp = VIEWPORTS[vpArg] ?? VIEWPORTS[1440];

const browser = await chromium.launch({ headless: true, channel: 'chrome' });

for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: vp });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  await page.waitForTimeout(800);
  if (label === 'v2') {
    await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  }
  const data = await page.evaluate(() => {
    const hero = document.querySelector('.hero-banner-content');
    const pick = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        display: s.display,
        flexDirection: s.flexDirection,
        fs: s.fontSize,
        lh: s.lineHeight,
        w: Math.round(r.width),
        h: Math.round(r.height),
      };
    };
    return {
      hero: pick(hero),
      h1: pick(hero?.querySelector('h1')),
      p: pick(hero?.querySelector('p')),
      img: pick(hero?.querySelector('img')),
    };
  });
  console.log(`\n=== ${label} @ ${vpArg} ===`, JSON.stringify(data, null, 2));
  await page.close();
}
await browser.close();
