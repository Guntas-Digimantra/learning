#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/v2', { waitUntil: 'load', timeout: 120_000 });
const d = await page.evaluate(() =>
  ['portfolio-section', 'features__area', 'testimonial__area', 'start-learning-container'].map((s) => {
    const el = document.querySelector(s);
    const cs = getComputedStyle(el);
    return { s, pad: cs.padding, h: Math.round(el.getBoundingClientRect().height) };
  })
);
console.log(d);
await browser.close();
