#!/usr/bin/env node
import { chromium } from 'playwright';

const sections = [
  ['banner', '.home-banner-section'],
  ['about', '.about-content'],
  ['collab', ':is(section,div):has(h2:text-matches("COLLABORATIONS"))'],
  ['start-learning', '.start-learning-container'],
  ['part-time', '.part-time-section'],
  ['courses', '.courses-area'],
  ['portfolio', '.portfolio-section'],
  ['discover', '.discover-offer-section'],
  ['fact', '.fact-area-section'],
  ['faq', '.faq-section'],
  ['features', '.features__area'],
  ['testimonial', '.testimonial__area'],
  ['contact', '.blog__post-area'],
];

const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, url, v2] of [
  ['ref', 'http://localhost:3001/', false],
  ['v2', 'http://localhost:3000/v2', true],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const out = {};
  for (const [name, sel] of sections) {
    const el = await page.locator(sel).first().elementHandle().catch(() => null);
    if (el) out[name] = Math.round((await el.boundingBox()).height);
  }
  out._doc = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(label, out);
  await page.close();
}
await browser.close();
