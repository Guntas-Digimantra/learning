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
  await page.waitForTimeout(3000);
  const d = await page.evaluate(() => {
    const counts = [...document.querySelectorAll('.fact__item .count')].map((el) => el.textContent?.trim());
    const before = document.querySelector('.counter-number::before');
    return { counts, firstDivider: getComputedStyle(document.querySelector('.counter-number'), '::before').content };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
