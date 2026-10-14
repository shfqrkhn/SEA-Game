// Gallery capture only (scripts/gallery.ts); the test suite's config is playwright.config.ts.
import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';

if (!process.env.CI && !process.env.PLAYWRIGHT_BROWSERS_PATH) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = path.resolve('.artifacts/ms-playwright');
}

export default defineConfig({
  testDir: '.',
  testMatch: /capture\.spec\.ts/,
  outputDir: '../../.artifacts/gallery/test-results',
  // Four at a time, so the machine stays usable while it runs.
  workers: 4,
  retries: 0,
  reporter: [['line']],
  timeout: 180_000,
  // The 3D shots show what a laptop's integrated GPU draws (the full-quality tier), not the software renderer's cheapest
  // tier: the browser runs on this PC's Intel GPU with npm run perf:ref's flags (G3).
  use: {
    ...devices['Desktop Chrome'], channel: 'chromium', actionTimeout: 60_000,
    launchOptions: {
      args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--force_low_power_gpu'],
      ignoreDefaultArgs: ['--disable-gpu', '--disable-gpu-compositing', '--disable-software-rasterizer'],
    },
  },
});
