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
  await page.locator('.fact-area-section').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);
  const d = await page.evaluate(() => {
    const wrap = document.querySelector('.fact__inner-wrap');
    const cn = document.querySelector('.counter-number');
    const cs = (e) => getComputedStyle(e);
    return {
      wrapBg: cs(wrap).backgroundColor,
      wrapShadow: cs(wrap).boxShadow.slice(0, 80),
      cnBefore: cn && cs(cn, '::before').width,
      countFF: cs(document.querySelector('.count')).fontFamily.slice(0, 30),
      titleFS: cs(document.querySelector('.fact-area-section .title')).fontSize,
      subFS: cs(document.querySelector('.fact-area-section .sub-title')).fontSize,
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
