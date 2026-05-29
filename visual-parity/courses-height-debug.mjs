#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120_000 });
  if (label === 'v2') await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  await page.locator('.courses-container').scrollIntoViewIfNeeded();
  await page.waitForSelector('.courses-container .swiper', { timeout: 30_000 });
  await page.waitForTimeout(2000);
  const d = await page.evaluate(() => {
    const c = document.querySelector('.courses-container');
    const slide = document.querySelector('.courses-container .swiper-slide-active, .courses-container .swiper-slide');
    const card = slide?.querySelector('.course-item, .courses-page-cards, [class*="course-item"]');
    return {
      containerH: c ? Math.round(c.getBoundingClientRect().height) : null,
      slideH: slide ? Math.round(slide.getBoundingClientRect().height) : null,
      cardH: card ? Math.round(card.getBoundingClientRect().height) : null,
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
