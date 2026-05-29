#!/usr/bin/env node
import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const keys = [
  'h3', 'h5', 'p', 'course-tag', 'rating-display', 'start-learning-link', 'top', 'foot', 'left',
];
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
    const pick = (sel) => {
      const e = card?.querySelector(sel);
      if (!e) return null;
      const s = cs(e);
      return {
        fs: s.fontSize,
        fw: s.fontWeight,
        lh: s.lineHeight,
        mb: s.marginBottom,
        col: s.color,
        ff: s.fontFamily.slice(0, 35),
        pad: s.padding,
        bg: s.background?.slice?.(0, 50) || s.backgroundColor,
      };
    };
    return {
      h3: pick('h3'),
      h5: pick('h5'),
      p: pick('p'),
      tag: pick('.course-tag'),
      rating: pick('.rating-display'),
      link: pick('.start-learning-link'),
      top: card?.children[0] && {
        h: cs(card.children[0]).height,
        br: cs(card.children[0]).borderRadius,
        bgImg: cs(card.children[0]).backgroundImage.slice(0, 40),
      },
      foot: card?.children[1] && { pad: cs(card.children[1]).padding, bg: cs(card.children[1]).backgroundColor },
    };
  });
  console.log(label, JSON.stringify(d, null, 0));
  await page.close();
}
await browser.close();
