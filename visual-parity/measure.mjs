#!/usr/bin/env node
import { chromium } from 'playwright';

const slug = process.argv[2] || 'home';
const pages = {
  home: ['http://localhost:3001/', 'http://localhost:3000/v2'],
  contact: ['http://localhost:3001/contact', 'http://localhost:3000/v2/contact'],
  'amit-tiwari-dmp': [
    'http://localhost:3001/amit-tiwari/digital-marketing-professional',
    'http://localhost:3000/v2/amit-tiwari/digital-marketing-professional',
  ],
};

const [refUrl, v2Url] = pages[slug] || pages.home;

const browser = await chromium.launch({ headless: true });

for (const [label, url] of [
  ['ref', refUrl],
  ['v2', v2Url],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(2500);
  await page.evaluate(() => {
    const s = document.createElement('style');
    s.textContent =
      'html,body{overflow-x:hidden!important;max-width:100vw!important}::-webkit-scrollbar{display:none!important}';
    document.head.appendChild(s);
  });
  const scrollBefore = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.setViewportSize({ width: 1440, height: Math.min(scrollBefore, 16000) });
  const scrollAfter = await page.evaluate(() => document.documentElement.scrollHeight);
  const shot = await page.screenshot({ fullPage: true, animations: 'disabled' });
  const { PNG } = await import('pngjs');
  const img = PNG.sync.read(shot);

  const data = await page.evaluate(() => {
    const els = [...document.querySelectorAll('body > *')];
    return {
      scrollHeight: document.documentElement.scrollHeight,
      children: els.map((el) => ({
        tag: el.tagName,
        cls: String(el.className || '').slice(0, 80),
        h: Math.round(el.getBoundingClientRect().height),
      })),
    };
  });
  console.log(`\n=== ${label} ${url} ===`);
  console.log('scrollBefore:', scrollBefore, 'scrollAfter:', scrollAfter, 'png:', img.width, 'x', img.height);
  console.log('scrollHeight:', data.scrollHeight);
  for (const c of data.children) {
    console.log(`  ${c.tag}.${c.cls} → ${c.h}px`);
  }
  await page.close();
}

await browser.close();
