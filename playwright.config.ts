import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';

// Keep downloaded browsers inside the project root (MPES C-13) unless CI provides its own.
if (!process.env.CI && !process.env.PLAYWRIGHT_BROWSERS_PATH) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = path.resolve('.artifacts/ms-playwright');
}

// Support is Windows 11 only (MPES §4.3): Chrome and Edge (Chromium) and Firefox. `msedge` drives the
// Edge installed with Windows rather than a downloaded build.
const engines = (process.env.SEA_ENGINES ?? 'chromium,firefox,msedge').split(',');
const all = [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'msedge', use: { ...devices['Desktop Edge'], channel: 'msedge' } },
];

const browsers = all.filter(project => engines.includes(project.name)).map(project => ({ ...project, testIgnore: /perf\.spec\.ts/ }));
// RQ-26 budgets are measured in Chromium, alone, after every other project has finished.
const perf = engines.includes('chromium')
  ? [{ name: 'perf', use: { ...devices['Desktop Chrome'] }, testMatch: /perf\.spec\.ts/, dependencies: browsers.map(project => project.name) }]
  : [];

export default defineConfig({
  testDir: 'tests/e2e',
  outputDir: '.artifacts/test-results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['list'], ['github']] : [['list']],
  timeout: 120_000,
  use: { viewport: { width: 1280, height: 720 }, trace: 'retain-on-failure' },
  projects: [...browsers, ...perf],
});
