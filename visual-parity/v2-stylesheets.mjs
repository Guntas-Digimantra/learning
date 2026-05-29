#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/v2', { waitUntil: 'load', timeout: 120_000 });
const out = await page.evaluate(() => ({
  sheets: [...document.styleSheets].map((s) => s.href).filter(Boolean),
  aboutDisplay: getComputedStyle(document.querySelector('.about-content')).display,
  aboutPadding: getComputedStyle(document.querySelector('.about-section')).paddingTop,
}));
console.log(JSON.stringify(out, null, 2));
await browser.close();
