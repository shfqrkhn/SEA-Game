// G3 `npm run perf:ref` (MPES §14, §17): every §14 gate measured on the reference-laptop proxy, i.e. Chromium and
// Edge on this PC's Intel UHD 770 (launch flags in playwright.perf-ref.config.ts), 4x CPU throttling, three screen
// profiles. It first proves the GPU, then measures, then writes one run file per browser and profile; the teardown
// merges this run's files into report.json and report.md (one row per KPI of §1.4).
//
// The scenarios and the protocol are the CI gate's own (tests/perf/scenarios.ts, tests/perf/measure.ts: input to
// painted result, nearest-rank p95 of at least 30 samples). Differences: no GPU spoofing (the real GPU is the point),
// idle windows, and no budget assertion: a baseline must be recordable before any change, so budgets are only
// reported (report.ts).
import { test, type Browser, type Page } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { THROTTLE, round } from '../perf/measure.ts';
import { Lab, commands, model, startUp, stills, type Measured } from '../perf/scenarios.ts';
import { PROFILES, type RunFile, type RunMeta } from './report.ts';

const REQUIRED_RENDERER = 'UHD Graphics 770';
const IDLE_SECONDS = Number(process.env.PERF_REF_IDLE_SECONDS ?? 60);
const OUT = process.env.PERF_REF_DIR ?? path.resolve('.artifacts/perf-ref', 'manual');
const RUN_ID = process.env.PERF_REF_STAMP ?? 'manual';
const IDLE_IDS = { Chooser: 'idleCpuChooserPct', Instructor: 'idleCpuInstructorPct', Tracker: 'idleCpuTrackerPct' } as const;

/** Browser CPU over a quiet window: all processes (GPU included) in % of one core, and the page's main-thread busy share. */
async function idle(browser: Browser, page: Page, id: string, out: Measured): Promise<void> {
  if (IDLE_SECONDS <= 0) { out.notes[id] = 'idle window switched off (PERF_REF_IDLE_SECONDS=0)'; return; }
  try {
    const browserCdp = await browser.newBrowserCDPSession();
    const pageCdp = await page.context().newCDPSession(page);
    const cpu = async () => {
      const { processInfo } = await browserCdp.send('SystemInfo.getProcessInfo') as { processInfo: { cpuTime: number }[] };
      return processInfo.reduce((sum, p) => sum + p.cpuTime, 0);
    };
    const task = async () => {
      const { metrics } = await pageCdp.send('Performance.getMetrics') as { metrics: { name: string; value: number }[] };
      return metrics.find(m => m.name === 'TaskDuration')?.value ?? 0;
    };
    await pageCdp.send('Performance.enable');
    await page.waitForTimeout(3000); // let start-up work finish before the window opens
    const [cpu0, task0, t0] = [await cpu(), await task(), Date.now()];
    await page.waitForTimeout(IDLE_SECONDS * 1000);
    const [cpu1, task1, t1] = [await cpu(), await task(), Date.now()];
    const wall = (t1 - t0) / 1000;
    out.values[id] = round((cpu1 - cpu0) / wall * 100);
    const busy = round((task1 - task0) / wall * 100), old = out.values.idleMainThreadMaxPct;
    out.values.idleMainThreadMaxPct = old === null || old === undefined ? busy : Math.max(old, busy);
    await pageCdp.detach();
    await browserCdp.detach();
  } catch (error) {
    out.notes[id] = `idle CPU could not be read: ${String(error).slice(0, 120)}`;
  }
}

for (const profile of PROFILES) {
  test(`reference proxy ${profile.id}`, async ({ browser }, info) => {
    test.setTimeout(1_200_000);
    const engine = info.project.name.replace('perf-ref-', '');
    const first = profile === PROFILES[0];
    const out: Measured = { values: {}, notes: {} };
    const meta: RunMeta = {
      runId: RUN_ID, browser: engine, browserVersion: browser.version(), profile: profile.id,
      viewport: { width: profile.width, height: profile.height, scale: profile.scale },
      cpuThrottle: THROTTLE, gpu: { vendor: 'unknown', renderer: 'unknown' }, idleSeconds: first ? IDLE_SECONDS : 0,
    };
    mkdirSync(OUT, { recursive: true });
    const write = (runState: RunFile['state'], message?: string) => writeFileSync(path.join(OUT, `${engine}-${profile.id}.run.json`),
      JSON.stringify({ meta, state: runState, ...(message ? { message } : {}), values: out.values, notes: out.notes } satisfies RunFile, null, 2) + '\n');

    // Gate 0, before anything is measured: the unmasked WebGL renderer must be the UHD 770 or nothing else counts.
    const probe = await browser.newPage();
    const gpu = await probe.evaluate(() => {
      const gl = document.createElement('canvas').getContext('webgl2') ?? document.createElement('canvas').getContext('webgl');
      const ext = gl?.getExtension('WEBGL_debug_renderer_info');
      return { vendor: String(gl && ext ? gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) : 'no WebGL'), renderer: String(gl && ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'no WebGL') };
    });
    await probe.close();
    meta.gpu = gpu;
    if (!gpu.renderer.includes(REQUIRED_RENDERER)) {
      write('GPU_CHECK_FAILED', `unmasked renderer "${gpu.renderer}" does not contain "${REQUIRED_RENDERER}"`);
      throw new Error(`perf:ref needs "${REQUIRED_RENDERER}"; ${engine} reports "${gpu.renderer}" (vendor "${gpu.vendor}"). Nothing was measured.`);
    }

    try {
      // The real GPU: no spoofing (the CI gate passes withGpu here).
      const lab = new Lab(browser, { viewport: { width: profile.width, height: profile.height }, deviceScaleFactor: profile.scale });
      const merge = (part: Measured) => { Object.assign(out.values, part.values); Object.assign(out.notes, part.notes); };
      merge(await startUp(lab, first ? (page, view) => idle(browser, page, IDLE_IDS[view as 'Chooser' | 'Instructor'], out) : undefined));
      merge(await commands(lab));
      merge(await model(lab, first ? page => idle(browser, page, IDLE_IDS.Tracker, out) : undefined));
      merge(await stills(lab));
      lab.tally();
      merge(lab.measured);
      out.values.modelMemoryTargetMB = out.values.modelProcessMB ?? null;
      if (out.values.modelMemoryTargetMB === null) out.notes.modelMemoryTargetMB = out.notes.modelProcessMB ?? 'renderer and GPU process memory not reported';
      if (!first) for (const id of [...Object.values(IDLE_IDS), 'idleMainThreadMaxPct']) out.notes[id] = 'idle windows run on the first profile only';
      write('OK');
      console.log(`${engine} ${profile.id} on ${gpu.renderer}: ${JSON.stringify(out.values)}`);
    } catch (error) {
      write('ERROR', String(error).slice(0, 500));
      throw error;
    }
  });
}
