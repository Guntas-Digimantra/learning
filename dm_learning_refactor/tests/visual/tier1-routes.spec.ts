import { test, expect } from '@playwright/test';

import { maskVolatile, referenceUrl, stabilizePage, v2Url, VIEWPORTS } from './helpers';

const TIER1_ROUTES = [
  { ref: '/courses', name: 'courses' },
  { ref: '/contact', name: 'contact' },
  { ref: '/about-us', name: 'about-us' },
] as const;

test.describe('Tier-1 routes — reference vs v2', () => {
  for (const route of TIER1_ROUTES) {
    for (const viewport of VIEWPORTS) {
      test(`${route.name} @ ${viewport.name}`, async ({ browser }) => {
        const context = await browser.newContext({
          viewport: { width: viewport.width, height: viewport.height },
        });

        const referencePage = await context.newPage();
        const v2Page = await context.newPage();

        await referencePage.goto(referenceUrl(route.ref));
        await v2Page.goto(v2Url(route.ref));

        await stabilizePage(referencePage);
        await stabilizePage(v2Page);
        await maskVolatile(referencePage);
        await maskVolatile(v2Page);

        const refBuffer = await referencePage.screenshot({ fullPage: true });
        const v2Buffer = await v2Page.screenshot({ fullPage: true });

        expect(v2Buffer).toMatchSnapshot(`${route.name}-${viewport.name}-v2.png`);
        expect(refBuffer).toMatchSnapshot(`${route.name}-${viewport.name}-reference.png`);

        await context.close();
      });
    }
  }
});
