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
import { ROUTE_LABELS, ROUTE_MAP, VIEWPORTS } from './config';

const MAX_DIFF_RATIO = Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.02');
const OUT_ROOT = path.join(process.cwd(), '.parity-screenshots', 'routes');

const ROUTES = Object.keys(ROUTE_MAP);

test.describe('dm_learning vs /v2 — all mapped routes', () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT_ROOT, { recursive: true });
    expect(
      process.env.REFERENCE_BASE_URL,
      'Set REFERENCE_BASE_URL (e.g. http://localhost:3001)',
    ).toBeTruthy();
  });

  for (const refPath of ROUTES) {
    const label = ROUTE_LABELS[refPath] ?? refPath.replace(/\//g, '-').slice(1);
    for (const viewport of VIEWPORTS) {
      test(`${label} @ ${viewport.name}`, async ({ browser }) => {
        const context = await browser.newContext({
          viewport: { width: viewport.width, height: viewport.height },
        });
        const referencePage = await context.newPage();
        const v2Page = await context.newPage();

        await referencePage.goto(referenceUrl(refPath), { waitUntil: 'domcontentloaded' });
        await v2Page.goto(v2Url(refPath), { waitUntil: 'domcontentloaded' });
        await stabilizePage(referencePage);
        await stabilizePage(v2Page);
        await maskVolatile(referencePage);
        await maskVolatile(v2Page);

        const refBuf = await referencePage.screenshot({ fullPage: true });
        const v2Buf = await v2Page.screenshot({ fullPage: true });
        const aligned = alignAndDiff(decodePng(refBuf), decodePng(v2Buf));
        const { diffPixels, total, diff, refAligned, v2Aligned, refSize, v2Size } = aligned;
        const ratio = diffPixels / total;

        const outDir = path.join(OUT_ROOT, label);
        fs.mkdirSync(outDir, { recursive: true });
        const base = path.join(outDir, `${viewport.name}`);

        fs.writeFileSync(`${base}-reference.png`, PNG.sync.write(refAligned));
        fs.writeFileSync(`${base}-v2.png`, PNG.sync.write(v2Aligned));
        fs.writeFileSync(`${base}-diff.png`, PNG.sync.write(diff));

        expect(
          ratio,
          `${label} @ ${viewport.name}: ${(ratio * 100).toFixed(3)}% differ (${diffPixels}/${total}). ` +
            `Crop ${refAligned.width}x${refAligned.height}; full ref ${refSize.width}x${refSize.height} v2 ${v2Size.width}x${v2Size.height}. See ${outDir}`,
        ).toBeLessThanOrEqual(MAX_DIFF_RATIO);

        await context.close();
      });
    }
  }
});
