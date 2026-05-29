#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, url, v2] of [
  ['ref', 'http://localhost:3001/', false],
  ['v2', 'http://localhost:3000/v2', true],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  const d = await page.evaluate(() => {
    const h2 = document.querySelector('.about__content h2');
    const btn = document.querySelector('.about__content a.dml-button, .about__content .dml-button');
    const cs = (e) => getComputedStyle(e);
    const hr = h2.getBoundingClientRect();
    const br = btn?.getBoundingClientRect();
    return {
      h2: { w: Math.round(hr.width), h: Math.round(hr.height), fs: cs(h2).fontSize, lh: cs(h2).lineHeight, fw: cs(h2).fontWeight },
      btn: btn && {
        w: Math.round(br.width),
        h: Math.round(br.height),
        top: Math.round(br.top),
        left: Math.round(br.left),
        pad: cs(btn).padding,
        bg: cs(btn).backgroundColor,
        shadow: cs(btn).boxShadow,
        classes: btn.className,
      },
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
