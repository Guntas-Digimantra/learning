#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, url, v2] of [
  ['ref', 'http://localhost:3001/', false],
  ['v2', 'http://localhost:3000/v2', true],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  await page.locator('.about-content').scrollIntoViewIfNeeded();
  const d = await page.evaluate(() => {
    const h2 = document.querySelector('.about__content h2');
    const img = document.querySelector('.aboutus-image > img');
    const badge = document.querySelector('.about-enrolled');
    const r = (e) => e.getBoundingClientRect();
    return {
      h2w: Math.round(r(h2).width),
      img: img && { l: Math.round(r(img).left), w: Math.round(r(img).width) },
      badge: badge && { l: Math.round(r(badge).left), b: Math.round(r(badge).bottom) },
      content: document.querySelector('.about-content') && {
        w: Math.round(r(document.querySelector('.about-content')).width),
      },
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
