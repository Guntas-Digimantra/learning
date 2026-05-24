import { defineConfig, devices } from '@playwright/test';

import { v2Base, VIEWPORTS } from './tests/visual/config';

/**
 * Visual parity: reference (dm_learning or v1 `/`) vs v2 routes.
 *
 * In-repo: `pnpm dev` then `pnpm test:visual` (compares `/` vs `/v2`).
 * Full reference: REFERENCE_BASE_URL=http://localhost:3001 V2_BASE_URL=http://localhost:3000
 */
export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    ...devices['Desktop Chrome'],
    actionTimeout: 15_000,
    navigationTimeout: 60_000,
    screenshot: 'only-on-failure',
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: Number(process.env.VISUAL_MAX_DIFF_RATIO ?? '0.02'),
      animations: 'disabled',
    },
  },
  projects: [{ name: 'visual-parity', use: { baseURL: v2Base } }],
  webServer: process.env.PLAYWRIGHT_SKIP_WEBSERVER
    ? undefined
    : {
        command: 'npm run dev',
        url: v2Base,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
      },
});

// Re-export for tests that need viewport list in config metadata
export { VIEWPORTS };
