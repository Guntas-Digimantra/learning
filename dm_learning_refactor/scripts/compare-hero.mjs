import { chromium } from 'playwright';

const browser = await chromium.launch();
for (const [label, url] of [
  ['ref', 'http://localhost:3001/'],
  ['v2', 'http://localhost:3000/v2'],
]) {
  const page = await browser.newPage({ viewport: { width: 991, height: 900 } });
  await page.goto(url, { waitUntil: 'load' });
  if (label === 'v2') {
    await page.evaluate(() => document.body.classList.add('v2-has-site-header'));
  }
  const info = await page.evaluate(() => {
    const hero = document.querySelector('.hero-banner-content');
    const img = document.querySelector('.hero-right img');
    const shape = document.querySelector('.line-shape');
    const h1 = document.querySelector('.hero-left h1');
    return {
      hero: hero
        ? { w: hero.getBoundingClientRect().width, h: hero.getBoundingClientRect().height }
        : null,
      img: img
        ? {
            w: img.getBoundingClientRect().width,
            h: img.getBoundingClientRect().height,
            src: img.getAttribute('src')?.slice(0, 100),
          }
        : null,
      shape: shape
        ? { w: shape.getBoundingClientRect().width, h: shape.getBoundingClientRect().height }
        : null,
      h1Size: h1 ? getComputedStyle(h1).fontSize : null,
    };
  });
  console.log(label, JSON.stringify(info, null, 2));
  await page.close();
}
await browser.close();
