import fs from 'fs';
import path from 'path';

import { test, expect } from '@playwright/test';
import { PNG } from 'pngjs';

import {
  alignAndDiff,
  decodePng,
  maskVolatile,
  referenceUrl,
  screenshotHeaderChrome,
  stabilizePage,
  v2Url,
} from './helpers';
import { VIEWPORTS } from './config';

const MAX_DIFF_RATIO = Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.02');
const OUT_DIR = path.join(process.cwd(), '.parity-screenshots', 'header');

test.describe('Header chrome — reference vs /v2', () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    expect(process.env.REFERENCE_BASE_URL).toBeTruthy();
  });

  for (const viewport of VIEWPORTS) {
    test(`header @ ${viewport.name}`, async ({ browser }) => {
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

      await referencePage.locator('header nav').first().waitFor({ state: 'attached', timeout: 30_000 });
      await v2Page.locator('header nav').first().waitFor({ state: 'attached', timeout: 30_000 });

      const refBuf = await screenshotHeaderChrome(referencePage);
      const v2Buf = await screenshotHeaderChrome(v2Page);
      const { diffPixels, total, diff, refAligned, v2Aligned } = alignAndDiff(
        decodePng(refBuf),
        decodePng(v2Buf),
      );
      const ratio = diffPixels / total;
      const base = path.join(OUT_DIR, `header-${viewport.name}`);

      fs.writeFileSync(`${base}-reference.png`, PNG.sync.write(refAligned));
      fs.writeFileSync(`${base}-v2.png`, PNG.sync.write(v2Aligned));
      fs.writeFileSync(`${base}-diff.png`, PNG.sync.write(diff));

      expect(
        ratio,
        `Header ${viewport.name}: ${(ratio * 100).toFixed(3)}% differ. See ${OUT_DIR}`,
      ).toBeLessThanOrEqual(MAX_DIFF_RATIO);

      await context.close();
    });
  }
});
