#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/v2', { waitUntil: 'load', timeout: 120_000 });
await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
const out = await page.evaluate(() => {
  const el = document.querySelector('.right-aboutus-content .about__content h2');
  const cs = getComputedStyle(el);
  const matched = [];
  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of rules) {
      if (!rule.selectorText || !el.matches(rule.selectorText)) continue;
      if (rule.style?.fontSize) {
        matched.push({
          sel: rule.selectorText,
          fontSize: rule.style.fontSize,
          href: sheet.href?.split('/').pop()?.slice(0, 40),
        });
      }
    }
  }
  return { computed: cs.fontSize, matched: matched.slice(0, 15) };
});
console.log(JSON.stringify(out, null, 2));
await browser.close();
