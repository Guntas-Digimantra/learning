#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(6000);
  const rows = await page.evaluate(() => {
    const section = document.querySelector('section.courses-area');
    if (!section) return [];
    return [...section.children].map((el) => ({
      tag: el.tagName,
      cls: String(el.className || '').slice(0, 80),
      h: Math.round(el.getBoundingClientRect().height),
    }));
  });
  console.log(`\n=== ${label} courses-area children ===`);
  for (const r of rows) console.log(`  ${r.h}px ${r.tag}.${r.cls}`);
  await page.close();
}
await browser.close();
