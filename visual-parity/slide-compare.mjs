#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(6000);
  const data = await page.evaluate(() => {
    const slide = document.querySelector('section.courses-area .swiper-slide');
    if (!slide) return null;
    const walk = (el, depth = 0) => {
      if (depth > 4) return [];
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const row = {
        tag: el.tagName,
        cls: String(el.className || '').slice(0, 60),
        h: Math.round(r.height),
        fs: cs.fontSize,
        lh: cs.lineHeight,
        pad: cs.padding,
      };
      return [
        row,
        ...[...el.children].flatMap((c) => walk(c, depth + 1)),
      ];
    };
    return walk(slide);
  });
  console.log(`\n=== ${label} first slide tree ===`);
  for (const r of data || []) {
    console.log(`  ${r.h}px ${r.tag}.${r.cls} fs=${r.fs} lh=${r.lh}`);
  }
  await page.close();
}
await browser.close();
