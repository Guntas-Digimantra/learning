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
  const d = await page.evaluate(() => {
    const row = document.querySelector('.blog-post-content');
    const left = document.querySelector('.connect-anywhere-container');
    const right = row?.children[1];
    const form = document.querySelector('.contact-form-wrap');
    return {
      row: row && { w: Math.round(row.getBoundingClientRect().width), flex: getComputedStyle(row).display },
      left: left && { w: Math.round(left.getBoundingClientRect().width), flex: getComputedStyle(left).flex },
      right: right && { w: Math.round(right.getBoundingClientRect().width), flex: getComputedStyle(right).flex },
      form: form && { w: Math.round(form.getBoundingClientRect().width) },
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
