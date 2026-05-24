#!/usr/bin/env node
import { chromium } from 'playwright';

const vp = { width: Number(process.argv[2]) || 390, height: 844 };
const browser = await chromium.launch({ headless: true });
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: vp });
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(4000);
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 2000));
  });
  const sh = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`${label} ${vp.width}px scroll=${sh}`);
  await page.close();
}
await browser.close();
