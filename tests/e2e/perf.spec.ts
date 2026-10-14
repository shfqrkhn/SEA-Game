// RQ-26 (MPES §14, §10.3): every performance budget, measured in Chromium on the reference profile (4x CPU
// throttling, D-11). Numbers are attached to the report and copied into docs/verification for the release. This
// file runs in its own project after every other suite has finished (playwright.config.ts), so timings are not
// skewed by parallel work; its tests run one after another in one worker. The scenarios and the protocol (input to
// painted result, nearest-rank p95 of at least 30 samples) are tests/perf/, shared with `npm run perf:ref`, which
// measures them on the reference GPU; here the runner's software renderer stands in for it (withGpu).
import { expect, test, type TestInfo } from '@playwright/test';
import { MIN_SAMPLES, inputToPaint } from '../perf/measure.ts';
import { Lab, commands, model, startUp, stills, type Measured } from '../perf/scenarios.ts';
import { withGpu } from './helpers.ts';

test.use({ launchOptions: { args: ['--js-flags=--expose-gc'] } });
test.describe.configure({ mode: 'default' });
test.setTimeout(240_000);

/** Each test reports its numbers; the release's verification record copies them. */
async function report(info: TestInfo, measured: Measured): Promise<Measured['values']> {
  await info.attach('performance.json', { body: JSON.stringify(measured, null, 2), contentType: 'application/json' });
  console.log(JSON.stringify(measured.values));
  return measured.values;
}

test('start-up, size and memory (MPES §14)', async ({ browser }, info) => {
  const v = await report(info, await startUp(new Lab(browser)));
  expect(v.htmlMB).toBeLessThanOrEqual(50);
  expect(v.chooserMs).toBeLessThanOrEqual(2000);
  expect(v.maxStateStartMs).toBeLessThanOrEqual(3000);
  expect(v.maxStateMemoryMB).toBeLessThanOrEqual(400);
});

test('command response and memory growth (MPES §14)', async ({ browser }, info) => {
  const v = await report(info, await commands(new Lab(browser)));
  expect(v.commandSamples).toBeGreaterThanOrEqual(MIN_SAMPLES);
  expect(v.commandP95Ms).toBeLessThanOrEqual(100);
  expect(v.memoryGrowthMB).toBeLessThanOrEqual(5);
});

test('3D showcase (MPES §14, §10.3)', async ({ browser }, info) => {
  const v = await report(info, await model(new Lab(browser, {}, withGpu)));
  expect(v.modelReadyMs).toBeLessThanOrEqual(3000);
  expect(v.modelUpdateSamples).toBeGreaterThanOrEqual(MIN_SAMPLES);
  expect(v.modelUpdateP95Ms).toBeLessThanOrEqual(100);
  expect(v.modelMemoryMB).toBeLessThanOrEqual(400);
});

test('stills showcase (MPES §14, §10.3)', async ({ browser }, info) => {
  const v = await report(info, await stills(new Lab(browser)));
  expect(v.showcaseUpdateSamples).toBeGreaterThanOrEqual(MIN_SAMPLES);
  expect(v.showcaseUpdateP95Ms).toBeLessThanOrEqual(100);
  expect(v.angleChangeMs).toBeLessThanOrEqual(50);
  expect(v.turntableStepMaxMs).toBeLessThanOrEqual(50);
  expect(v.studentMemoryMB).toBeLessThanOrEqual(400);
});

// The protocol itself (Codex G3 review): a click timed to the next paint must include the command, however late the
// button is released; before the fix a 200 ms press measured 33 ms, the command never inside the timing.
test('a command timing includes the command, even when the button is released late', async ({ page }) => {
  await page.setContent('<button id="b">Bid</button><output id="o"></output>');
  await page.evaluate(() => document.querySelector('#b')!.addEventListener('click', () => { document.querySelector('#o')!.textContent = 'done'; }));
  const ms = await inputToPaint(page, () => page.click('#b', { delay: 200 }), { kind: 'paint' });
  await expect(page.locator('#o')).toHaveText('done');
  expect(ms).toBeGreaterThanOrEqual(200);
});
