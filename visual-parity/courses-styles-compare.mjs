#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
for (const [label, url, v2] of [
  ['ref', 'http://localhost:3001/', false],
  ['v2', 'http://localhost:3000/v2', true],
]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120_000 });
  if (v2) await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  await page.locator('.courses-container').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2500);
  const d = await page.evaluate(() => {
    const cs = (e) => (e ? getComputedStyle(e) : null);
    const card = document.querySelector('.courses-page-cards');
    const top = card?.children[0];
    const prev = document.querySelector('.courses-button-prev');
    const btn = card?.querySelector('.dml-button-slider');
    const link = card?.querySelector('.start-learning-link');
    const h3 = card?.querySelector('h3');
    const h5 = card?.querySelector('h5');
    return {
      prevTop: prev && cs(prev).top,
      prevTransform: prev && cs(prev).transform,
      prevLeft: prev && cs(prev).left,
      topBR: top && `${cs(top).borderTopLeftRadius} / ${cs(top).borderTopRightRadius}`,
      topH: top && cs(top).height,
      topMinH: top && cs(top).minHeight,
      topGap: top && cs(top).gap,
      btnRadius: btn && cs(btn).borderRadius,
      btnH: btn && cs(btn).height,
      linkGap: link && cs(link).gap,
      bottomGap: card?.querySelector('.courses__item-bottom') && cs(card.querySelector('.courses__item-bottom')).gap,
      h3FF: h3 && cs(h3).fontFamily.slice(0, 40),
      h5FF: h5 && cs(h5).fontFamily.slice(0, 40),
      cardShadow: card && cs(card).boxShadow.slice(0, 60),
    };
  });
  console.log(label, d);
  await page.close();
}
await browser.close();
