import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';

// Keep downloaded browsers inside the project root (MPES C-13) unless CI provides its own.
if (!process.env.CI && !process.env.PLAYWRIGHT_BROWSERS_PATH) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = path.resolve('.artifacts/ms-playwright');
}

const engines = (process.env.SEA_ENGINES ?? 'chromium,firefox,webkit').split(',');
const all = [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
];

export default defineConfig({
  testDir: 'tests/e2e',
  outputDir: '.artifacts/test-results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['list'], ['github']] : [['list']],
  timeout: 120_000,
  use: { viewport: { width: 1280, height: 720 }, trace: 'retain-on-failure' },
  projects: all.filter(project => engines.includes(project.name)),
});
