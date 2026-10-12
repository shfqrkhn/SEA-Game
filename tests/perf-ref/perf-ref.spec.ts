// G3 `npm run perf:ref` (MPES §14, §17): every §14 gate measured on the reference-laptop proxy, i.e. Chromium and
// Edge on this PC's Intel UHD 770 (launch flags in playwright.perf-ref.config.ts), 4x CPU throttling, three screen
// profiles. It first proves the GPU, then measures, then writes one run file per browser and profile; the teardown
// merges them into report.json and report.md (one row per KPI of §1.4).
//
// The scenarios repeat tests/e2e/perf.spec.ts on purpose (that file is the enforcing gate and stays as it is; a test
// file cannot be imported). Differences: no GPU spoofing (the real GPU is the point), real clicks for INP, and no
// budget assertion: a baseline must be recordable before any change, so budgets are only reported (report.ts).
import { test, type Browser, type CDPSession, type Page } from '@playwright/test';
import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { collectConsoleErrors, gameUrl, guardNetwork, withoutWebgl } from '../e2e/helpers.ts';
import { instructorSetup } from '../e2e/roles.ts';
import type { RunFile, RunMeta } from './report.ts';

const MB = 1024 * 1024;
const REQUIRED_RENDERER = 'UHD Graphics 770';
const THROTTLE = 4;
const IDLE_SECONDS = Number(process.env.PERF_REF_IDLE_SECONDS ?? 60);
const OUT = process.env.PERF_REF_DIR ?? path.resolve('.artifacts/perf-ref', 'manual');

/** The three screens of MPES §14. Idle windows run on the first only (they are 60 s each). */
const PROFILES = [
  { id: '1366x768at1', width: 1366, height: 768, scale: 1 },
  { id: '1536x864at1.25', width: 1536, height: 864, scale: 1.25 },
  { id: '1280x720at1.5', width: 1280, height: 720, scale: 1.5 },
] as const;
type Profile = typeof PROFILES[number];

interface Vitals { cls: number; lcp: number | null; long: { s: number; d: number }[]; inter: number[]; loaded: number | null }

/** Runs in every page before its scripts: records layout shift, LCP, long tasks and interaction durations. */
function installVitals(): void {
  const sea: Vitals = { cls: 0, lcp: null, long: [], inter: [], loaded: null };
  (globalThis as unknown as { __sea: Vitals }).__sea = sea;
  const watch = (type: string, handle: (entry: PerformanceEntry) => void, extra: Record<string, unknown> = {}) => {
    try { new PerformanceObserver(list => list.getEntries().forEach(handle)).observe({ type, buffered: true, ...extra } as PerformanceObserverInit); } catch { /* entry type not supported here */ }
  };
  watch('layout-shift', entry => { const shift = entry as unknown as { value: number; hadRecentInput: boolean }; if (!shift.hadRecentInput) sea.cls += shift.value; });
  watch('largest-contentful-paint', entry => { sea.lcp = entry.startTime; });
  watch('longtask', entry => { sea.long.push({ s: entry.startTime, d: entry.duration }); });
  watch('event', entry => { const timing = entry as unknown as { interactionId?: number }; if (timing.interactionId) sea.inter.push(entry.duration); }, { durationThreshold: 16 });
  addEventListener('load', () => requestAnimationFrame(() => { sea.loaded = performance.now(); }));
}

const p95 = (values: number[]) => [...values].sort((a, b) => a - b)[Math.floor(values.length * 0.95)] ?? 0;
const round = (value: number, places = 1) => Math.round(value * 10 ** places) / 10 ** places;

interface Scene { page: Page; cdp: CDPSession; errors: string[]; egress: string[] }

const state = { values: {} as Record<string, number | null>, notes: {} as Record<string, string>, errors: [] as string[], egress: [] as string[] };
const worst = (id: string, value: number) => { const old = state.values[id]; state.values[id] = old === null || old === undefined ? value : Math.max(old, value); };

async function open(browser: Browser, profile: Profile, prepare?: (page: Page) => Promise<unknown>): Promise<Scene> {
  const context = await browser.newContext({ viewport: { width: profile.width, height: profile.height }, deviceScaleFactor: profile.scale });
  const page = await context.newPage();
  const egress = guardNetwork(page);
  const errors = collectConsoleErrors(page);
  const cdp = await context.newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: THROTTLE });
  await page.addInitScript(installVitals);
  await prepare?.(page);
  return { page, cdp, errors, egress };
}

/** Read the page's vitals, fold them into the run, and close it. */
async function finish(scene: Scene): Promise<void> {
  const vitals = await scene.page.evaluate(() => (globalThis as unknown as { __sea: Vitals }).__sea);
  worst('clsScore', round(vitals.cls, 3));
  worst('longTaskMaxMs', Math.round(Math.max(0, ...vitals.long.filter(task => task.s >= (vitals.loaded ?? 0)).map(task => task.d))));
  if (vitals.inter.length) worst('inpMs', Math.round(Math.max(...vitals.inter)));
  state.errors.push(...scene.errors);
  state.egress.push(...scene.egress);
  await scene.page.context().close();
}

/** JS heap plus the decoded pixels of every image on screen (4 bytes per pixel), as tests/e2e/perf.spec.ts. */
async function memoryMB(page: Page): Promise<number> {
  return page.evaluate(() => {
    (globalThis as unknown as { gc?: () => void }).gc?.();
    const heap = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize;
    const pixels = [...document.images].reduce((n, img) => n + img.naturalWidth * img.naturalHeight * 4, 0);
    return (heap + pixels) / MB;
  });
}

/** Browser CPU over a quiet window: all processes (incl. GPU) in % of one core, and the page's main-thread busy share. */
async function idle(browser: Browser, scene: Scene, id: string): Promise<void> {
  if (IDLE_SECONDS <= 0) { state.notes[id] = 'idle window switched off (PERF_REF_IDLE_SECONDS=0)'; return; }
  try {
    const browserCdp = await browser.newBrowserCDPSession();
    const cpu = async () => {
      const { processInfo } = await browserCdp.send('SystemInfo.getProcessInfo') as { processInfo: { cpuTime: number }[] };
      return processInfo.reduce((sum, p) => sum + p.cpuTime, 0);
    };
    const task = async () => {
      const { metrics } = await scene.cdp.send('Performance.getMetrics') as { metrics: { name: string; value: number }[] };
      return metrics.find(m => m.name === 'TaskDuration')?.value ?? 0;
    };
    await scene.cdp.send('Performance.enable');
    await scene.page.waitForTimeout(3000); // let start-up work finish before the window opens
    const [cpu0, task0, t0] = [await cpu(), await task(), Date.now()];
    await scene.page.waitForTimeout(IDLE_SECONDS * 1000);
    const [cpu1, task1, t1] = [await cpu(), await task(), Date.now()];
    const wall = (t1 - t0) / 1000;
    state.values[id] = round((cpu1 - cpu0) / wall * 100);
    worst('idleMainThreadMaxPct', round((task1 - task0) / wall * 100));
    await browserCdp.detach();
  } catch (error) {
    state.notes[id] = `idle CPU could not be read: ${String(error).slice(0, 120)}`;
  }
}

for (const profile of PROFILES) {
  test(`reference proxy ${profile.id}`, async ({ browser }, info) => {
    test.setTimeout(1_200_000);
    const engine = info.project.name.replace('perf-ref-', '');
    const first = profile === PROFILES[0];
    state.values = {}; state.notes = {}; state.errors = []; state.egress = [];
    const meta: RunMeta = {
      browser: engine, browserVersion: browser.version(), profile: profile.id,
      viewport: { width: profile.width, height: profile.height, scale: profile.scale },
      cpuThrottle: THROTTLE, gpu: { vendor: 'unknown', renderer: 'unknown' }, idleSeconds: first ? IDLE_SECONDS : 0,
    };
    mkdirSync(OUT, { recursive: true });
    const write = (runState: RunFile['state'], message?: string) => writeFileSync(path.join(OUT, `${engine}-${profile.id}.run.json`),
      JSON.stringify({ meta, state: runState, ...(message ? { message } : {}), values: state.values, notes: state.notes } satisfies RunFile, null, 2) + '\n');

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
      state.values.htmlMB = round(statSync('dist/index.html').size / MB);

      // Chooser: first frame with the heading and role buttons (file:// pages report no paint timing, so a test-side observer).
      const chooser = await open(browser, profile, page => page.addInitScript(() => {
        new MutationObserver((_, observer) => {
          if (!document.querySelector('h1') || !document.querySelector('a[data-role]')) return;
          observer.disconnect();
          requestAnimationFrame(() => { (window as unknown as { seaPainted: number }).seaPainted = performance.now(); });
        }).observe(document, { childList: true, subtree: true });
      }));
      await chooser.page.goto(gameUrl('?lang=en'));
      await chooser.page.waitForFunction(() => (window as unknown as { seaPainted?: number }).seaPainted !== undefined);
      state.values.chooserMs = Math.round(await chooser.page.evaluate(() => (window as unknown as { seaPainted: number }).seaPainted));
      const lcp = await chooser.page.evaluate(() => (globalThis as unknown as { __sea: Vitals }).__sea.lcp);
      if (lcp !== null) state.values.lcpMs = Math.round(lcp);
      else { state.values.lcpMs = state.values.chooserMs; state.notes.lcpMs = 'no LCP entry on file://; chooserMs (heading and buttons painted) used as the proxy'; }
      if (first) await idle(browser, chooser, 'idleCpuChooserPct');
      await finish(chooser);

      // Largest valid instructor save: 210 ledger entries, all 70 lots, 10 teams.
      const saved = JSON.parse(readFileSync('tests/fixtures/legacy/instructor-max-ledger.json', 'utf8')).state;
      const big = await open(browser, profile, page => page.addInitScript(raw => { if (!sessionStorage.getItem('SEA_INSTRUCTOR_V300')) sessionStorage.setItem('SEA_INSTRUCTOR_V300', raw); }, JSON.stringify(saved)));
      const t1 = Date.now();
      await big.page.goto(gameUrl('?role=instructor&lang=en'));
      await big.page.getByRole('heading', { name: 'Results to reconcile' }).waitFor();
      state.values.maxStateStartMs = Date.now() - t1;
      state.values.maxStateMemoryMB = Math.round(await memoryMB(big.page));
      if (first) await idle(browser, big, 'idleCpuInstructorPct');
      await finish(big);

      // Command response in a 10-team timed auction, then real clicks (trusted events) for INP.
      const fresh = await open(browser, profile);
      await fresh.page.goto(gameUrl('?role=instructor&lang=en'));
      await instructorSetup(fresh.page, { teams: 10, reveal: 'JIT', timed: true, missions: ['TROOP', 'RECCE', 'COMBAT', 'COMMAND', 'RECOVERY', 'MINE', 'TROOP', 'RECCE', 'COMBAT', 'COMMAND'] });
      await fresh.page.click('#open-bidding');
      const bids = await fresh.page.evaluate(() => {
        const out: number[] = [];
        for (let i = 0; i < 40; i++) {
          const button = document.querySelector<HTMLButtonElement>(`#bid-${(i % 10) + 1}`);
          if (!button || button.disabled) continue;
          const start = performance.now();
          button.click();
          out.push(performance.now() - start);
        }
        return out;
      });
      state.values.commandP95Ms = round(p95(bids));
      for (let i = 1; i <= 10; i++) { // real clicks; a bid button that is not live is skipped, not waited for
        const button = fresh.page.locator(`#bid-${i}`);
        if (await button.count() && await button.isEnabled()) await button.click();
      }
      const before = await memoryMB(fresh.page);
      for (let cycle = 0; cycle < 10; cycle++) await fresh.page.evaluate(() => { for (let i = 0; i < 20; i++) document.querySelector<HTMLButtonElement>('#lang-toggle')!.click(); });
      state.values.memoryGrowthMB = round(await memoryMB(fresh.page) - before);
      await finish(fresh);

      const tracker = async (page: Page) => {
        await page.goto(gameUrl('?role=student&lang=en'));
        await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
        await page.selectOption('#join-mission', 'RECOVERY');
        await page.click('#join'); await page.click('#record-practice'); await page.click('#student-planning');
        await page.check('#plan-confirm'); await page.click('#student-start-auction');
      };
      const purchases = [[1, 5, 'COM-E', 600000], [1, 7, 'ACC-F', 350000], [2, 1, 'CAP-B', 450000]] as const;

      // 3D showcase on the real GPU: ready, three purchases, frame cadence, memory.
      const model = await open(browser, profile);
      await tracker(model.page);
      const opened = await model.page.evaluate(() => performance.now());
      await model.page.locator('dialog button[data-value="ok"]').click();
      // Ready is budgeted at 3 s; a baseline must record a slower value rather than abort, so wait up to 30 s.
      await model.page.locator('#showcase [data-mode="3d"][data-ready="true"]').waitFor({ timeout: 30_000 });
      state.values.modelReadyMs = Math.round(await model.page.evaluate(() => performance.now()) - opened);
      const modelUpdates: number[] = [];
      for (const [round_, lot, card, paid] of purchases) {
        if (round_ > 1) await model.page.selectOption('#pos-round', String(round_));
        await model.page.selectOption('#pos-lot', String(lot));
        await model.page.fill('#card-id', card); await model.page.click('#load-card'); await model.page.fill('#paid', String(paid));
        modelUpdates.push(await model.page.evaluate(async id => {
          const start = performance.now();
          document.querySelector<HTMLButtonElement>('#record-win')!.click();
          if (!document.querySelector('#showcase [data-mode="3d"]')!.getAttribute('data-layers')!.split(' ').includes(id)) throw new Error(`model lacks ${id}`);
          await new Promise(requestAnimationFrame);
          return performance.now() - start;
        }, card));
      }
      state.values.modelUpdateMaxMs = Math.round(Math.max(...modelUpdates));
      state.values.modelMemoryMB = Math.round(await memoryMB(model.page));
      state.values.modelMemoryTargetMB = state.values.modelMemoryMB;
      const gaps = await model.page.evaluate(() => new Promise<number[]>(resolve => {
        const out: number[] = [];
        let last = performance.now();
        const end = last + 5000;
        const tick = (now: number) => { out.push(now - last); last = now; if (now < end) requestAnimationFrame(tick); else resolve(out); };
        requestAnimationFrame(tick);
      }));
      state.values.frameP95Ms = round(p95(gaps));
      state.values.gpuFrameMs = null;
      state.notes.gpuFrameMs = 'not measured: the page cannot reach the showcase GPU timer; frameP95Ms is the animation-frame gap only';
      if (first) await idle(browser, model, 'idleCpuTrackerPct');
      await finish(model);

      // Stills showcase without WebGL.
      const student = await open(browser, profile, withoutWebgl);
      await tracker(student.page);
      await student.page.locator('dialog button[data-value="ok"]').click();
      await student.page.locator('#showcase img[data-layer="base"]').waitFor();
      const updates: number[] = [];
      for (const [round_, lot, card, paid] of purchases) {
        if (round_ > 1) await student.page.selectOption('#pos-round', String(round_));
        await student.page.selectOption('#pos-lot', String(lot));
        await student.page.fill('#card-id', card); await student.page.click('#load-card'); await student.page.fill('#paid', String(paid));
        updates.push(await student.page.evaluate(async id => {
          const start = performance.now();
          document.querySelector<HTMLButtonElement>('#record-win')!.click();
          await document.querySelector<HTMLImageElement>(`#showcase img[data-layer="${id}"]`)!.decode();
          return performance.now() - start;
        }, card));
      }
      state.values.showcaseUpdateMaxMs = Math.round(Math.max(...updates));
      state.values.angleChangeMs = Math.round(await student.page.evaluate(async () => {
        const start = performance.now();
        document.querySelector<HTMLInputElement>('#showcase-view-rear')!.click();
        await Promise.all([...document.querySelectorAll<HTMLImageElement>('#showcase img')].map(img => img.decode()));
        return performance.now() - start;
      }));
      await student.page.check('#showcase-view-turntable');
      await student.page.locator('#showcase-turn').waitFor();
      await student.page.waitForTimeout(300); // neighbouring frames pre-decode while a person pauses
      const scrub: number[] = [];
      for (let i = 0; i < 6; i++) {
        scrub.push(await student.page.evaluate(async () => {
          const input = document.querySelector<HTMLInputElement>('#showcase-turn')!;
          const start = performance.now();
          input.value = String((Number(input.value) + 1) % (Number(input.max) + 1));
          input.dispatchEvent(new Event('input', { bubbles: true }));
          await document.querySelector<HTMLImageElement>('#showcase img[data-frame]')!.decode();
          return performance.now() - start;
        }));
        await student.page.waitForTimeout(120);
      }
      state.values.turntableStepMaxMs = Math.round(Math.max(...scrub));
      state.values.studentMemoryMB = Math.round(await memoryMB(student.page));
      await finish(student);

      state.values.pageErrors = state.errors.length;
      if (state.errors.length) state.notes.pageErrors = state.errors.slice(0, 3).join(' | ').slice(0, 300);
      state.values.egressAttempts = state.egress.length;
      if (state.egress.length) state.notes.egressAttempts = state.egress.slice(0, 3).join(' | ').slice(0, 300);
      if (!first) for (const id of ['idleCpuChooserPct', 'idleCpuInstructorPct', 'idleCpuTrackerPct', 'idleMainThreadMaxPct']) state.notes[id] = 'idle windows run on the first profile only';
      write('OK');
      console.log(`${engine} ${profile.id} on ${gpu.renderer}: ${JSON.stringify(state.values)}`);
    } catch (error) {
      write('ERROR', String(error).slice(0, 500));
      throw error;
    }
  });
}
