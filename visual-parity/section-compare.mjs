#!/usr/bin/env node
import { chromium } from 'playwright';

const SELECTORS = [
  'header',
  'section.home-banner-section',
  'section.about-section',
  'section.start-learning-container',
  'section.part-time-section',
  'section.courses-area',
  'section.portfolio-section',
  'section.discover-offer-section',
  'section.fact-area-section',
  'section.faq-section',
  'section.features__area',
  'section.testimonial__area',
  'section.blog__post-area',
  'footer.footer-section',
];

const browser = await chromium.launch({ headless: true });
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(3500);
  await page.evaluate(async () => {
    const totalHeight = document.documentElement.scrollHeight;
    const step = window.innerHeight;
    for (let y = 0; y < totalHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 2500));
  });
  const rows = await page.evaluate((sels) => {
    return sels.map((sel) => {
      const el = document.querySelector(sel);
      if (!el) return { sel, h: null };
      const r = el.getBoundingClientRect();
      return { sel, h: Math.round(r.height) };
    });
  }, SELECTORS);
  console.log(`\n=== ${label} scroll=${await page.evaluate(() => document.documentElement.scrollHeight)} ===`);
  for (const r of rows) console.log(`  ${r.h ?? 'MISSING'}px  ${r.sel}`);
  await page.close();
}
await browser.close();
