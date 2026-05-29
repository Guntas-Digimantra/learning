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
  await page.waitForSelector('.courses-container .swiper', { timeout: 30_000 }).catch(() => {});
  await page.waitForTimeout(1200);
  const d = await page.evaluate(() => {
    const hero = document.querySelector('.hero-banner-content');
    const about = document.querySelector('.about-content');
    const courses = document.querySelector('.courses-container');
    const h1 = hero?.querySelector('h1');
    const h2 = about?.querySelector('h2');
    return {
      heroH: hero ? Math.round(hero.getBoundingClientRect().height) : null,
      h1fs: h1 ? getComputedStyle(h1).fontSize : null,
      h1lh: h1 ? getComputedStyle(h1).lineHeight : null,
      heroFlex: hero ? getComputedStyle(hero).flexDirection : null,
      aboutH: about ? Math.round(about.getBoundingClientRect().height) : null,
      h2fs: h2 ? getComputedStyle(h2).fontSize : null,
      aboutFlex: about ? getComputedStyle(about).flexDirection : null,
      coursesH: courses ? Math.round(courses.getBoundingClientRect().height) : null,
      swiperH: courses?.querySelector('.swiper')
        ? Math.round(courses.querySelector('.swiper').getBoundingClientRect().height)
        : null,
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
