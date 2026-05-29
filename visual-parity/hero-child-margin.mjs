#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const [label, url, isV2] of [
  ['ref', 'http://localhost:3001/', false],
  ['v2', 'http://localhost:3000/v2', true],
]) {
  const page = await browser.newPage({ viewport: { width: 991, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (isV2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const rows = await page.evaluate(() => {
    const left = document.querySelector('.hero-left');
    return [...left.children].map((el) => {
      const s = getComputedStyle(el);
      return {
        tag: el.tagName,
        h: Math.round(el.getBoundingClientRect().height),
        mb: s.marginBottom,
        mt: s.marginTop,
        display: s.display,
      };
    });
  });
  console.log(label, rows);
}
await browser.close();
