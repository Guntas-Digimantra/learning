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
  await page.locator('header .dropdown').first().hover();
  await page.waitForTimeout(400);
  const d = await page.evaluate(() => {
    const menu = document.querySelector('header .dropdown-content');
    const li = menu?.querySelector('li');
    const sub = menu?.querySelector('.sublink');
    const cs = (e) => (e ? getComputedStyle(e) : null);
    const b = menu?.getBoundingClientRect();
    return {
      w: b ? Math.round(b.width) : null,
      h: b ? Math.round(b.height) : null,
      liPad: li && cs(li).padding,
      sub: sub && {
        fontSize: cs(sub).fontSize,
        lineHeight: cs(sub).lineHeight,
        fontWeight: cs(sub).fontWeight,
        fontFamily: cs(sub).fontFamily,
        display: cs(sub).display,
      },
      menu: menu && {
        boxShadow: cs(menu).boxShadow,
        borderRadius: cs(menu).borderRadius,
        left: cs(menu).left,
      },
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
