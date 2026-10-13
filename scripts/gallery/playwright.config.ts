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
  use: { ...devices['Desktop Chrome'], actionTimeout: 60_000 },
});
