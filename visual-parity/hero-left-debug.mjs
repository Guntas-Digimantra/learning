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
  const d = await page.evaluate(() => {
    const left = document.querySelector('.hero-left');
    const h1 = left?.querySelector('h1');
    const p = left?.querySelector('p');
    const btn = left?.querySelector('a');
    const cs = (e) => (e ? getComputedStyle(e) : null);
    const b = left?.getBoundingClientRect();
    return {
      box: b && { w: Math.round(b.width), h: Math.round(b.height) },
      flex: left && cs(left).paddingRight,
      h1: h1 && {
        fs: cs(h1).fontSize,
        lh: cs(h1).lineHeight,
        fw: cs(h1).fontWeight,
        ff: cs(h1).fontFamily,
        color: cs(h1).color,
      },
      p: p && {
        fs: cs(p).fontSize,
        lh: cs(p).lineHeight,
        pad: cs(p).padding,
        color: cs(p).color,
        ff: cs(p).fontFamily,
      },
      btn: btn && {
        pad: cs(btn).padding,
        fs: cs(btn).fontSize,
        bg: cs(btn).backgroundColor,
        radius: cs(btn).borderRadius,
      },
    };
  });
  console.log(label, JSON.stringify(d, null, 2));
  await page.close();
}
await browser.close();
