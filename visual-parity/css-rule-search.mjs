#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/v2', { waitUntil: 'load', timeout: 120_000 });
const out = await page.evaluate(() => {
  const hits = [];
  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    const walk = (list, depth = 0) => {
      for (const rule of list) {
        if (rule.cssRules) walk(rule.cssRules, depth + 1);
        const text = rule.cssText || '';
        if (
          text.includes('about__content') ||
          text.includes('hero-banner-content h1') ||
          text.includes('hero-left p')
        ) {
          hits.push({
            href: sheet.href?.slice(-60) || 'inline',
            depth,
            snippet: text.slice(0, 200),
          });
        }
      }
    };
    walk(rules);
  }
  return hits;
});
console.log('hits', out.length);
for (const h of out.slice(0, 20)) console.log(h.href, h.snippet.slice(0, 150));
await browser.close();
