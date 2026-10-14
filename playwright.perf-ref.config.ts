// G3 `npm run perf:ref`: the MPES §14 reference-laptop proxy. Chromium and Edge forced onto this PC's Intel UHD 770
// with 4x CPU throttling (set inside the spec). Separate from playwright.config.ts on purpose: it is not part of
// `npm run verify`, and the existing `perf` project is untouched. The run refuses to measure unless the unmasked
// WebGL renderer says "UHD Graphics 770". Reports land in .artifacts/perf-ref/<timestamp>/.
import { defineConfig } from '@playwright/test';
import path from 'node:path';

if (!process.env.CI && !process.env.PLAYWRIGHT_BROWSERS_PATH) {
  process.env.PLAYWRIGHT_BROWSERS_PATH = path.resolve('.artifacts/ms-playwright');
}

// One timestamp for the whole run, shared with the workers and the teardown through the environment.
const pad = (n: number) => String(n).padStart(2, '0');
const now = new Date();
process.env.PERF_REF_STAMP ??= `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}T${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
process.env.PERF_REF_DIR ??= path.resolve('.artifacts/perf-ref', process.env.PERF_REF_STAMP);

/** The owner's launch flags, verbatim (the underscore form of the last one is Chromium's own spelling). */
const GPU_ARGS = ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--force_low_power_gpu', '--js-flags=--expose-gc'];

const engines = (process.env.SEA_ENGINES ?? 'chromium,msedge').split(',');
const launch = {
  args: GPU_ARGS,
  // Playwright's own defaults must not undo the flags above.
  ignoreDefaultArgs: ['--disable-gpu', '--disable-gpu-compositing', '--disable-software-rasterizer'],
  headless: !process.env.PERF_REF_HEADED,
};
const all = [
  // channel 'chromium' is the full Chromium in its new headless mode; the default headless shell has no real GPU path.
  { name: 'perf-ref-chromium', use: { channel: 'chromium', launchOptions: launch }, engine: 'chromium' },
  { name: 'perf-ref-msedge', use: { channel: 'msedge', launchOptions: launch }, engine: 'msedge' },
];

export default defineConfig({
  testDir: 'tests/perf-ref',
  testMatch: /perf-ref\.spec\.ts/,
  outputDir: '.artifacts/test-results-perf-ref',
  // One browser at a time, one test at a time: timings must not compete with each other.
  fullyParallel: false,
  workers: 1,
  // Stop at the first failure: a wrong GPU makes every later number meaningless.
  maxFailures: 1,
  forbidOnly: true,
  retries: 0,
  reporter: [['list']],
  // Three viewport profiles plus idle windows per browser; generous because the run is slow by design.
  timeout: 1_200_000,
  globalTeardown: './tests/perf-ref/teardown.ts',
  use: { actionTimeout: 60_000, trace: 'off' },
  projects: all.filter(project => engines.includes(project.engine)).map(project => ({ name: project.name, use: project.use })),
});
