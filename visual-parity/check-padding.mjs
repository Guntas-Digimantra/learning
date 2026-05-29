#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, url, v2] of [
  ['v2', 'http://localhost:3000/v2', true],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const d = await page.evaluate(() => {
    const cs = (s) => getComputedStyle(document.querySelector(s));
    return ['portfolio-section', 'features__area', 'testimonial__area'].map((s) => ({
      s,
      pad: cs(s).padding,
      h: Math.round(document.querySelector(s).getBoundingClientRect().height),
    }));
  });
  console.log(d);
  await page.close();
}
await browser.close();
