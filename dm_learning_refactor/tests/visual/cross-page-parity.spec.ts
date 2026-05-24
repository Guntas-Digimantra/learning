import { test, expect } from '@playwright/test';

import { alignAndDiff, decodePng, maskVolatile, referenceUrl, stabilizePage, v2Url } from './helpers';
import { ROUTE_MAP, VIEWPORTS } from './config';

const MAX_DIFF_RATIO = Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.02');

const ROUTES = Object.keys(ROUTE_MAP);

test.describe('Live pixel diff — reference route vs v2', () => {
  for (const refPath of ROUTES) {
    for (const viewport of VIEWPORTS) {
      test(`${refPath} @ ${viewport.name}`, async ({ browser }) => {
        const context = await browser.newContext({
          viewport: { width: viewport.width, height: viewport.height },
        });
        const referencePage = await context.newPage();
        const v2Page = await context.newPage();

        await referencePage.goto(referenceUrl(refPath));
        await v2Page.goto(v2Url(refPath));
        await stabilizePage(referencePage);
        await stabilizePage(v2Page);
        await maskVolatile(referencePage);
        await maskVolatile(v2Page);

        const refPng = decodePng(await referencePage.screenshot({ fullPage: true }));
        const v2Png = decodePng(await v2Page.screenshot({ fullPage: true }));
        const { diffPixels, total } = alignAndDiff(refPng, v2Png);
        const ratio = diffPixels / total;

        expect(
          ratio,
          `${refPath} vs v2: ${(ratio * 100).toFixed(2)}% pixels differ at ${viewport.name}`,
        ).toBeLessThanOrEqual(MAX_DIFF_RATIO);

        await context.close();
      });
    }
  }
});
