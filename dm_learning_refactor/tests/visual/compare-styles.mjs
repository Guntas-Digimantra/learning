/**
 * Compare computed styles on reference vs v2 homepage (run with both dev servers up).
 * node tests/visual/compare-styles.mjs
 */
import { chromium } from '@playwright/test';

const REF = process.env.REFERENCE_BASE_URL ?? 'http://localhost:3001';
const V2 = process.env.V2_BASE_URL ?? 'http://localhost:3000';

const SELECTORS = [
  'header .contact-btn, header .v2-header-contact',
  'header .header-top',
  '.home-banner-section h1, section:first-of-type h1',
  '.home-banner-section .dml-button, .v2-cta-black',
];

async function styles(page, sel) {
  return page.evaluate((s) => {
    const el = document.querySelector(s.split(',')[0].trim());
    if (!el) return null;
    const c = getComputedStyle(el);
    return {
      color: c.color,
      backgroundColor: c.backgroundColor,
      fontSize: c.fontSize,
      fontWeight: c.fontWeight,
      padding: c.padding,
    };
  }, sel);
}

const browser = await chromium.launch();
const ref = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const v2 = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await ref.goto(`${REF}/`, { waitUntil: 'domcontentloaded' });
await v2.goto(`${V2}/v2`, { waitUntil: 'domcontentloaded' });
await ref.waitForTimeout(1500);
await v2.waitForTimeout(1500);

for (const sel of SELECTORS) {
  const a = await styles(ref, sel);
  const b = await styles(v2, sel);
  console.log('\n', sel);
  console.log('  ref:', a);
  console.log('  v2: ', b);
}

await browser.close();
