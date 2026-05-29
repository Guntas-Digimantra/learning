#!/usr/bin/env node
import { chromium } from 'playwright';

const VP = { width: 1440, height: 900 };
const REF = process.env.REF_BASE ?? 'http://localhost:3001/';
const V2 = process.env.V2_BASE ?? 'http://localhost:3000/v2';

const SECTIONS = [
  'about-content',
  'part-time-section',
  'portfolio-section',
  'discover-offer-section',
  'features__area',
  'testimonial__area',
  'blog-post-content',
];

const SELECTORS = {
  'about-content': '.about-content',
  'part-time-section': '.part-time-section',
  'portfolio-section': '.portfolio-section',
  'discover-offer-section': '.discover-offer-section',
  features__area: '.features__area',
  testimonial__area: '.testimonial__area',
  'blog-post-content': '.blog-post-content',
};

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({ viewport: VP });
const refPage = await ctx.newPage();
const v2Page = await ctx.newPage();
await refPage.goto(REF, { waitUntil: 'load', timeout: 120_000 });
await v2Page.goto(V2, { waitUntil: 'load', timeout: 120_000 });
await v2Page.evaluate(() => document.body.classList.add('v2-has-site-header'));

for (const slug of SECTIONS) {
  const sel = SELECTORS[slug];
  console.log(`\n=== ${slug} ===`);
  for (const [label, page] of [
    ['ref', refPage],
    ['v2', v2Page],
  ]) {
    const data = await page.evaluate((selector) => {
      const root = document.querySelector(selector);
      if (!root) return { error: 'missing' };
      const pick = (el, keys) => {
        if (!el) return null;
        const cs = getComputedStyle(el);
        const o = {};
        for (const k of keys) o[k] = cs[k];
        o._h = el.getBoundingClientRect().height;
        return o;
      };
      const keys = [
        'fontFamily',
        'fontSize',
        'fontWeight',
        'lineHeight',
        'color',
        'padding',
        'margin',
        'border',
        'boxShadow',
        'backgroundColor',
        'letterSpacing',
      ];
      const out = { rootH: root.getBoundingClientRect().height };
      if (selector.includes('about'))
        out.chevron = pick(root.querySelector('.chevron-circle'), keys);
      if (selector.includes('part-time'))
        out.th = pick(root.querySelector('th'), keys);
      if (selector.includes('portfolio'))
        out.li = pick(root.querySelector('.portfolio-list li'), keys);
      if (selector.includes('discover'))
        out.input = pick(root.querySelector('.discover-input'), keys);
      if (selector.includes('features'))
        out.p = pick(root.querySelector('.features__content p'), keys);
      if (selector.includes('testimonial'))
        out.p = pick(root.querySelector('.testimonial__content p'), keys);
      if (selector.includes('blog-post'))
        out.unlock = pick(root.querySelector('.unlock-content'), keys);
      return out;
    }, sel);
    console.log(label, JSON.stringify(data, null, 2));
  }
}
await browser.close();
