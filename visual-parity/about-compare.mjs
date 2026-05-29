#!/usr/bin/env node
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });

async function metrics(page, v2) {
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  await page.locator('.about-content').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  return page.evaluate(() => {
    const cs = (e) => (e ? getComputedStyle(e) : null);
    const root = document.querySelector('.about-content');
    const h2 = document.querySelector('.about__content h2');
    const li = document.querySelector('.about__content li');
    const chev = document.querySelector('.chevron-circle');
    const enrolled = document.querySelector('.about-enrolled');
    const img = document.querySelector('.aboutus-image img');
    const content = document.querySelector('.about__content');
    return {
      rootH: root && Math.round(root.getBoundingClientRect().height),
      h2: h2 && { fs: cs(h2).fontSize, fw: cs(h2).fontWeight, lh: cs(h2).lineHeight, col: cs(h2).color },
      li: li && { fs: cs(li).fontSize, lh: cs(li).lineHeight, mb: cs(li).marginBottom, ff: cs(li).fontFamily.slice(0, 30) },
      chev: chev && { w: cs(chev).width, h: cs(chev).height, bg: cs(chev).backgroundColor, shadow: cs(chev).boxShadow.slice(0, 50) },
      enrolled: enrolled && { pad: cs(enrolled).padding, left: cs(enrolled).left, bottom: cs(enrolled).bottom },
      content: content && { ml: cs(content).marginLeft, mr: cs(content).marginRight },
      img: img && { w: Math.round(img.getBoundingClientRect().width), h: Math.round(img.getBoundingClientRect().height) },
    };
  });
}

const refPage = await ctx.newPage();
const v2Page = await ctx.newPage();
await refPage.goto('http://localhost:3001/', { waitUntil: 'load', timeout: 120_000 });
await v2Page.goto('http://localhost:3000/v2', { waitUntil: 'load', timeout: 120_000 });
console.log('ref', await metrics(refPage, false));
console.log('v2', await metrics(v2Page, true));

const refBuf = await refPage.locator('.about-content').screenshot();
const v2Buf = await v2Page.locator('.about-content').screenshot();
const ref = PNG.sync.read(refBuf);
const v2 = PNG.sync.read(v2Buf);
const w = Math.min(ref.width, v2.width);
const h = Math.min(ref.height, v2.height);
const refC = new PNG({ width: w, height: h });
const v2C = new PNG({ width: w, height: h });
const diff = new PNG({ width: w, height: h });
PNG.bitblt(ref, refC, 0, 0, w, h, 0, 0);
PNG.bitblt(v2, v2C, 0, 0, w, h, 0, 0);
const n = pixelmatch(refC.data, v2C.data, diff.data, w, h, { threshold: 0.12 });
console.log(`diff: ${((n / (w * h)) * 100).toFixed(3)}%`);
await browser.close();
