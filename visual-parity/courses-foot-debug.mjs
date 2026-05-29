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
    const foot = document.querySelector('.courses-page-cards')?.children[1];
    const h5 = foot?.querySelector('h5');
    const p = foot?.querySelector('p');
    const bottom = foot?.querySelector('.courses__item-bottom');
    const btn = foot?.querySelector('.dml-button-slider');
    const b = (e) => e.getBoundingClientRect();
    return {
      footH: Math.round(b(foot).height),
      h5H: Math.round(b(h5).height),
      pH: Math.round(b(p).height),
      bottomH: Math.round(b(bottom).height),
      btnH: Math.round(b(btn).height),
      footPad: getComputedStyle(foot).padding,
      footGap: getComputedStyle(foot).gap,
      bottomGap: bottom && getComputedStyle(bottom).gap,
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
