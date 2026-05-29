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
  await page.locator('.courses-container').first().scrollIntoViewIfNeeded();
  await page.waitForSelector('.courses-container .swiper', { timeout: 30_000 }).catch(() => {});
  await page.waitForTimeout(3000);
  const d = await page.evaluate(() => {
    const c = document.querySelector('.courses-container');
    const sw = c?.querySelector('.swiper');
    const slide = c?.querySelector('.swiper-slide');
    const card = slide?.querySelector('.relative');
    return {
      containerH: c ? Math.round(c.getBoundingClientRect().height) : null,
      swiperH: sw ? Math.round(sw.getBoundingClientRect().height) : null,
      slideH: slide ? Math.round(slide.getBoundingClientRect().height) : null,
      cardH: card ? Math.round(card.getBoundingClientRect().height) : null,
      slideCount: c?.querySelectorAll('.swiper-slide').length ?? 0,
      hasSwiperWrapper: !!c?.querySelector('.swiper-wrapper'),
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
