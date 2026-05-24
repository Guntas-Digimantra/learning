#!/usr/bin/env node
import { chromium } from 'playwright';

const width = Number(process.argv[2]) || 390;
const SELECTORS = [
  'header',
  'section.home-banner-section',
  'section.about-section',
  'section.start-learning-container',
  'section.part-time-section',
  'section.courses-area',
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
  const page = await browser.newPage({ viewport: { width, height: 844 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(4000);
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 2000));
  });
  const rows = await page.evaluate((sels) => {
    return sels.map((sel) => {
      const el = document.querySelector(sel);
      return { sel, h: el ? Math.round(el.getBoundingClientRect().height) : null };
    });
  }, SELECTORS);
  const sh = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`\n=== ${label} ${width}px scroll=${sh} ===`);
  for (const r of rows) console.log(`  ${r.h ?? '—'}px ${r.sel}`);
  await page.close();
}
await browser.close();
