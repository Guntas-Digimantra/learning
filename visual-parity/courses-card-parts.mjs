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
  await page.waitForTimeout(2500);
  const d = await page.evaluate(() => {
    const card = document.querySelector('.courses-page-cards');
    const top = card?.children[0];
    const foot = card?.children[1];
    const p = card?.querySelector('p');
    return {
      cardH: Math.round(card.getBoundingClientRect().height),
      outerPad: getComputedStyle(card).padding,
      topH: Math.round(top.getBoundingClientRect().height),
      footH: Math.round(foot.getBoundingClientRect().height),
      pH: Math.round(p.getBoundingClientRect().height),
      pFF: getComputedStyle(p).fontFamily.slice(0, 30),
      pLH: getComputedStyle(p).lineHeight,
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
