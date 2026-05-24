import { test, expect } from '@playwright/test';

import { maskVolatile, referenceUrl, stabilizePage, v2Url, VIEWPORTS } from './helpers';

test.describe('Home — reference vs v2', () => {
  for (const viewport of VIEWPORTS) {
    test(`parity @ ${viewport.name}`, async ({ browser }) => {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });

      const referencePage = await context.newPage();
      const v2Page = await context.newPage();

      await referencePage.goto(referenceUrl('/'));
      await v2Page.goto(v2Url('/'));

      await stabilizePage(referencePage);
      await stabilizePage(v2Page);
      await maskVolatile(referencePage);
      await maskVolatile(v2Page);

      const refBuffer = await referencePage.screenshot({ fullPage: true });
      const v2Buffer = await v2Page.screenshot({ fullPage: true });

      expect(v2Buffer).toMatchSnapshot(`home-${viewport.name}-v2.png`);
      expect(refBuffer).toMatchSnapshot(`home-${viewport.name}-reference.png`);

      await context.close();
    });
  }
});
