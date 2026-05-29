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
    const sw = c?.querySelector('.swiper');
    const prev = c?.querySelector('.courses-button-prev');
    const slides = c?.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)');
    const visible = [...(slides || [])].filter((s) => {
      const r = s.getBoundingClientRect();
      return r.width > 50 && r.left < window.innerWidth && r.right > 0;
    });
    return {
      container: c && { w: Math.round(c.getBoundingClientRect().width), pad: getComputedStyle(c).padding },
      swiper: sw && { w: Math.round(sw.getBoundingClientRect().width), overflow: getComputedStyle(sw).overflow },
      prev: prev && { left: getComputedStyle(prev).left, pos: getComputedStyle(prev).position },
      visibleSlides: visible.length,
      slideW: visible[0] ? Math.round(visible[0].getBoundingClientRect().width) : null,
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
