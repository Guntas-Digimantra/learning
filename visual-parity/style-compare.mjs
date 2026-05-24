#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(5000);
  const data = await page.evaluate(() => {
    const section = document.querySelector('section.courses-area');
    const swiper = section?.querySelector('.swiper');
    const slide = section?.querySelector('.swiper-slide');
    const card = section?.querySelector('.courses__item');
    const pick = (el) =>
      el
        ? {
            h: Math.round(el.getBoundingClientRect().height),
            fontSize: getComputedStyle(el).fontSize,
            lineHeight: getComputedStyle(el).lineHeight,
            padding: getComputedStyle(el).padding,
          }
        : null;
    return {
      section: pick(section),
      swiper: pick(swiper),
      slide: pick(slide),
      card: pick(card),
      slideCount: section?.querySelectorAll('.swiper-slide').length,
    };
  });
  console.log(`\n=== ${label} ===`, JSON.stringify(data, null, 2));
  await page.close();
}
await browser.close();
