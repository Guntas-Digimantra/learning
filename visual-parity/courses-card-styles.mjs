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
    const left = card?.querySelector('.course-item-left');
    const foot = card?.children[1];
    const h3 = card?.querySelector('h3');
    const h5 = card?.querySelector('h5');
    const p = card?.querySelector('p');
    const btn = card?.querySelector('.dml-button-slider');
    const cs = (e) => (e ? getComputedStyle(e) : null);
    return {
      cardH: card ? Math.round(card.getBoundingClientRect().height) : null,
      topH: top ? Math.round(top.getBoundingClientRect().height) : null,
      topMinH: top && cs(top).minHeight,
      footPad: foot && cs(foot).padding,
      leftPad: left && cs(left).padding,
      h3fs: h3 && cs(h3).fontSize,
      h5mb: h5 && cs(h5).marginBottom,
      pmb: p && cs(p).marginBottom,
      btnBg: btn && cs(btn).backgroundColor,
      hoverY: cs(card).transform,
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
