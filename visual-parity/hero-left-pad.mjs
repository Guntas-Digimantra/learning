#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3001/', { waitUntil: 'load', timeout: 120_000 });
const r = await page.evaluate(() => {
  const l = document.querySelector('.hero-left');
  const c = document.querySelector('.hero-banner-content');
  const d = document.querySelector('.home-banner-section .dml-container');
  const cs = (e) => getComputedStyle(e);
  return {
    left: { pad: cs(l).padding, margin: cs(l).margin },
    banner: { align: cs(c).alignItems, pad: cs(c).padding, minH: cs(c).minHeight },
    container: { pad: cs(d).padding },
  };
});
console.log(JSON.stringify(r, null, 2));
await browser.close();
