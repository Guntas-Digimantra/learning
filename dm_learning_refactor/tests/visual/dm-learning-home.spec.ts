import fs from 'fs';
import path from 'path';

import fs from 'fs';
import path from 'path';

import { test, expect } from '@playwright/test';
import { PNG } from 'pngjs';

import {
  alignAndDiff,
  decodePng,
  maskVolatile,
  referenceUrl,
  stabilizePage,
  v2Url,
} from './helpers';
import { VIEWPORTS } from './config';

const MAX_DIFF_RATIO = Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.005');
const OUT_DIR = path.join(process.cwd(), '.parity-screenshots', 'home');

test.describe('dm_learning (reference) vs /v2 — homepage', () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    expect(
      process.env.REFERENCE_BASE_URL,
      'Set REFERENCE_BASE_URL (e.g. http://localhost:3001) to dm_learning dev server',
    ).toBeTruthy();
    expect(process.env.V2_BASE_URL ?? 'http://localhost:3000').toBeTruthy();
  });

  for (const viewport of VIEWPORTS) {
    test(`homepage @ ${viewport.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const referencePage = await context.newPage();
      const v2Page = await context.newPage();

      await referencePage.goto(referenceUrl('/'), { waitUntil: 'domcontentloaded' });
      await v2Page.goto(v2Url('/'), { waitUntil: 'domcontentloaded' });
      await stabilizePage(referencePage);
      await stabilizePage(v2Page);
      await maskVolatile(referencePage);
      await maskVolatile(v2Page);

      const refBuf = await referencePage.screenshot({ fullPage: true });
      const v2Buf = await v2Page.screenshot({ fullPage: true });
      const aligned = alignAndDiff(decodePng(refBuf), decodePng(v2Buf));
      const { diffPixels, total, diff, refAligned, v2Aligned, refSize, v2Size } = aligned;
      const ratio = diffPixels / total;
      const base = path.join(OUT_DIR, `home-${viewport.name}`);

      fs.writeFileSync(`${base}-reference.png`, PNG.sync.write(refAligned));
      fs.writeFileSync(`${base}-v2.png`, PNG.sync.write(v2Aligned));
      fs.writeFileSync(`${base}-diff.png`, PNG.sync.write(diff));

      expect(
        ratio,
        `Homepage: ${(ratio * 100).toFixed(3)}% differ (${diffPixels}/${total}). ` +
          `Crop ${refAligned.width}x${refAligned.height}; ref full ${refSize.width}x${refSize.height}, v2 ${v2Size.width}x${v2Size.height}. See ${OUT_DIR}`,
      ).toBeLessThanOrEqual(MAX_DIFF_RATIO);

      await context.close();
    });
  }
});
