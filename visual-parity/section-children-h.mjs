#!/usr/bin/env node
import { chromium } from 'playwright';

const w = Number(process.argv[2]) || 390;
const sel = process.argv[3];
const browser = await chromium.launch({ channel: 'chrome', headless: true });
for (const [label, url, isV2] of [
  ['ref', 'http://localhost:3001/', false],
  ['v2', 'http://localhost:3000/v2', true],
]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (isV2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const rows = await page.evaluate((s) => {
    const root = document.querySelector(s);
    if (!root) return [];
    return [...root.querySelectorAll('*')].slice(0, 40).map((el) => ({
      tag: el.tagName,
      cls: el.className?.toString?.().slice(0, 40) || '',
      h: Math.round(el.getBoundingClientRect().height),
    })).filter((r) => r.h > 0);
  }, sel);
  const total = await page.evaluate(
    (s) => Math.round(document.querySelector(s)?.getBoundingClientRect().height ?? 0),
    sel,
  );
  console.log(`\n${label} ${sel} total=${total}`);
  rows.forEach((r) => console.log(`  ${r.h}px ${r.tag} ${r.cls}`));
}
await browser.close();
