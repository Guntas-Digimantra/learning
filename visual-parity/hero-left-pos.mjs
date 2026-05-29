#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (label === 'v2') await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const d = await page.evaluate(() => {
    const left = document.querySelector('.hero-left');
    const h1 = left?.querySelector('h1');
    const lb = left.getBoundingClientRect();
    const h1b = h1.getBoundingClientRect();
    return {
      leftDisplay: getComputedStyle(left).display,
      leftJustify: getComputedStyle(left).justifyContent,
      h1TopOffset: Math.round(h1b.top - lb.top),
      h1H: Math.round(h1b.height),
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
