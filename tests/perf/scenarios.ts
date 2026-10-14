// The MPES §14 scenarios, run the same way by the CI gate (tests/e2e/perf.spec.ts, software graphics) and by the
// reference-laptop proxy (`npm run perf:ref`, the real Intel UHD 770). Each scenario opens its pages through a Lab,
// which sets the screen profile, throttling, network guard and vitals, and returns its numbers; the caller asserts
// (CI) or reports against the budgets (proxy). Timing follows tests/perf/measure.ts.
import type { Browser, BrowserContextOptions, Page } from '@playwright/test';
import { readFileSync, statSync } from 'node:fs';
import { collectConsoleErrors, gameUrl, guardNetwork, withoutWebgl } from '../e2e/helpers.ts';
import { confirmDialog, instructorSetup } from '../e2e/roles.ts';
import {
  MB, MIN_SAMPLES, PURCHASES, TRACKER_OK, beforeTracker, inputToPaint, loadPurchase, memoryMB, openTracker, p95, press,
  processMB, round, throttle,
} from './measure.ts';

export type Values = Record<string, number | null>;
export interface Measured { values: Values; notes: Record<string, string> }

interface Vitals { cls: number; lcp: number | null; long: { s: number; d: number }[]; inter: number[]; loaded: number | null }

/** Runs in every page before its scripts: layout shift, LCP, long tasks and interaction durations (MPES §14). */
function installVitals(): void {
  const sea: Vitals = { cls: 0, lcp: null, long: [], inter: [], loaded: null };
  (globalThis as unknown as { __seaVitals: Vitals }).__seaVitals = sea;
  const watch = (type: string, handle: (entry: PerformanceEntry) => void, extra: Record<string, unknown> = {}) => {
    try { new PerformanceObserver(list => list.getEntries().forEach(handle)).observe({ type, buffered: true, ...extra } as PerformanceObserverInit); } catch { /* entry type not supported here */ }
  };
  watch('layout-shift', entry => { const shift = entry as unknown as { value: number; hadRecentInput: boolean }; if (!shift.hadRecentInput) sea.cls += shift.value; });
  watch('largest-contentful-paint', entry => { sea.lcp = entry.startTime; });
  watch('longtask', entry => { sea.long.push({ s: entry.startTime, d: entry.duration }); });
  watch('event', entry => { const timing = entry as unknown as { interactionId?: number }; if (timing.interactionId) sea.inter.push(entry.duration); }, { durationThreshold: 16 });
  addEventListener('load', () => requestAnimationFrame(() => { sea.loaded = performance.now(); }));
}

/**
 * GPU time of each showcase draw, where the browser offers a GPU timer (EXT_disjoint_timer_query_webgl2): a query runs
 * from one draw's end to the next, and the showcase is the only WebGL user on the page, so each result is one draw.
 */
function installGpuTimer(): void {
  const times: number[] = [];
  const sea = { times, available: false };
  (globalThis as unknown as { __seaGpu: typeof sea }).__seaGpu = sea;
  const original = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type: string, ...rest: unknown[]) {
    const gl = (original as (...args: unknown[]) => unknown).call(this, type, ...rest) as WebGL2RenderingContext | null;
    if (type !== 'webgl2' || !gl || (this as unknown as { seaTimed?: boolean }).seaTimed) return gl;
    (this as unknown as { seaTimed: boolean }).seaTimed = true;
    const ext = gl.getExtension('EXT_disjoint_timer_query_webgl2') as { TIME_ELAPSED_EXT: number; GPU_DISJOINT_EXT: number } | null;
    if (!ext) return gl;
    sea.available = true;
    const pending: WebGLQuery[] = [];
    let open: WebGLQuery | null = null;
    this.addEventListener('sea-draw', () => {
      if (open) { gl.endQuery(ext.TIME_ELAPSED_EXT); pending.push(open); }
      while (pending.length && gl.getQueryParameter(pending[0]!, gl.QUERY_RESULT_AVAILABLE)) {
        const query = pending.shift()!;
        if (!gl.getParameter(ext.GPU_DISJOINT_EXT)) times.push(gl.getQueryParameter(query, gl.QUERY_RESULT) / 1e6);
        gl.deleteQuery(query);
      }
      open = gl.createQuery();
      if (open) gl.beginQuery(ext.TIME_ELAPSED_EXT, open);
    });
    return gl;
  } as typeof original;
}

/** Pages on one screen profile with throttling and a network guard; it collects vitals, errors and egress as pages close. */
export class Lab {
  readonly errors: string[] = [];
  readonly egress: string[] = [];
  readonly measured: Measured = { values: {}, notes: {} };
  readonly #pages = new Map<Page, { errors: string[]; egress: string[] }>();

  readonly browser: Browser;
  readonly context: BrowserContextOptions;
  readonly gpu: ((page: Page) => Promise<void>) | undefined;

  /** `gpu` makes WebGL count as a graphics card where there is none (CI); on the reference laptop it is left out. */
  constructor(browser: Browser, context: BrowserContextOptions = {}, gpu?: (page: Page) => Promise<void>) {
    this.browser = browser;
    this.context = context;
    this.gpu = gpu;
  }

  /** A fresh page in its own context; `prepare` runs before its first navigation. */
  async open(prepare?: (page: Page) => Promise<unknown>): Promise<Page> {
    const page = await (await this.browser.newContext(this.context)).newPage();
    this.#pages.set(page, { egress: guardNetwork(page), errors: collectConsoleErrors(page) });
    await throttle(page);
    await page.addInitScript(installVitals);
    await page.addInitScript(installGpuTimer);
    await prepare?.(page);
    return page;
  }

  /** The page's vitals (layout shift, longest task after load, slowest interaction), folded into the worst so far. */
  async close(page: Page): Promise<void> {
    const vitals = await page.evaluate(() => (globalThis as unknown as { __seaVitals: Vitals }).__seaVitals);
    this.#worst('clsScore', round(vitals.cls, 3));
    this.#worst('longTaskMaxMs', Math.round(Math.max(0, ...vitals.long.filter(task => task.s >= (vitals.loaded ?? 0)).map(task => task.d))));
    if (vitals.inter.length) this.#worst('inpMs', Math.round(Math.max(...vitals.inter)));
    const seen = this.#pages.get(page);
    if (seen) { this.errors.push(...seen.errors); this.egress.push(...seen.egress); this.#pages.delete(page); }
    await page.context().close();
  }

  /** Every error and request so far, as counts (with the first few as notes). */
  tally(): void {
    const { values, notes } = this.measured;
    values.pageErrors = this.errors.length;
    if (this.errors.length) notes.pageErrors = this.errors.slice(0, 3).join(' | ').slice(0, 300);
    values.egressAttempts = this.egress.length;
    if (this.egress.length) notes.egressAttempts = this.egress.slice(0, 3).join(' | ').slice(0, 300);
  }

  #worst(id: string, value: number): void {
    const old = this.measured.values[id];
    this.measured.values[id] = old === null || old === undefined ? value : Math.max(old, value);
  }
}

/** The renderer and GPU processes' private memory, under `prefix`; null with a note where the OS cannot report it. */
async function machine(lab: Lab, prefix: string, out: Measured): Promise<void> {
  const mb = await processMB(lab.browser);
  out.values[`${prefix}RendererMB`] = mb?.renderer ?? null;
  out.values[`${prefix}GpuProcessMB`] = mb?.gpu ?? null;
  if (!mb) out.notes[`${prefix}RendererMB`] = 'the operating system did not report the process memory';
}

export const TEN_TEAMS = { teams: 10, reveal: 'JIT' as const, timed: true, missions: ['TROOP', 'RECCE', 'COMBAT', 'COMMAND', 'RECOVERY', 'MINE', 'TROOP', 'RECCE', 'COMBAT', 'COMMAND'] };

/** Size, the chooser's first painted frame and LCP, and the largest valid instructor save: start time and memory. */
export async function startUp(lab: Lab, after?: (page: Page, view: string) => Promise<void>): Promise<Measured> {
  const out: Measured = { values: {}, notes: {} };
  out.values.htmlMB = round(statSync('dist/index.html').size / MB);
  // file:// pages report no paint timing, so a page-side observer records the first frame with the heading and buttons.
  const chooser = await lab.open(page => page.addInitScript(() => {
    new MutationObserver((_, observer) => {
      if (!document.querySelector('h1') || !document.querySelector('a[data-role]')) return;
      observer.disconnect();
      requestAnimationFrame(() => { (window as unknown as { seaPainted: number }).seaPainted = performance.now(); });
    }).observe(document, { childList: true, subtree: true });
  }));
  await chooser.goto(gameUrl('?lang=en'));
  await chooser.waitForFunction(() => (window as unknown as { seaPainted?: number }).seaPainted !== undefined);
  out.values.chooserMs = Math.round(await chooser.evaluate(() => (window as unknown as { seaPainted: number }).seaPainted));
  const lcp = await chooser.evaluate(() => (globalThis as unknown as { __seaVitals: Vitals }).__seaVitals.lcp);
  out.values.lcpMs = lcp === null ? out.values.chooserMs : Math.round(lcp);
  if (lcp === null) out.notes.lcpMs = 'no LCP entry on file://; the first frame with the heading and buttons stands in';
  await after?.(chooser, 'Chooser');
  await lab.close(chooser);

  // 210 ledger entries, all 70 lots, 10 teams.
  const saved = JSON.parse(readFileSync('tests/fixtures/legacy/instructor-max-ledger.json', 'utf8')).state;
  const big = await lab.open(page => page.addInitScript(raw => { if (!sessionStorage.getItem('SEA_INSTRUCTOR_V300')) sessionStorage.setItem('SEA_INSTRUCTOR_V300', raw); }, JSON.stringify(saved)));
  const t1 = Date.now();
  await big.goto(gameUrl('?role=instructor&lang=en'));
  await big.getByRole('heading', { name: 'Results to reconcile' }).waitFor();
  out.values.maxStateStartMs = Date.now() - t1;
  out.values.maxStateMemoryMB = Math.round(await memoryMB(big));
  await machine(lab, 'maxState', out);
  await after?.(big, 'Instructor');
  await lab.close(big);
  return out;
}

/** Real clicks on the bid buttons of a 10-team timed auction, each until painted; then ten full phase cycles. */
export async function commands(lab: Lab): Promise<Measured> {
  const out: Measured = { values: {}, notes: {} };
  const page = await lab.open();
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await instructorSetup(page, TEN_TEAMS);
  await page.click('#open-bidding');
  const bids: number[] = [];
  for (let i = 0; i < 40; i++) {
    const button = page.locator(`#bid-${(i % 10) + 1}`);
    if (!await button.isEnabled()) continue;
    bids.push(await inputToPaint(page, () => button.click(), { kind: 'paint' }));
  }
  out.values.commandSamples = bids.length;
  out.values.commandP95Ms = round(p95(bids));
  out.values.commandMaxMs = round(Math.max(...bids));

  // No growth across 10 phase cycles: a new session from the menu, setup, practice, planning and a live auction.
  const cycle = async () => {
    await press(page.locator('#menu-button'));
    await page.locator('dialog[open] button[data-value="new"]').click();
    await confirmDialog(page);
    await instructorSetup(page, TEN_TEAMS);
    await page.click('#open-bidding');
  };
  await cycle();
  const before = await memoryMB(page);
  for (let i = 0; i < 10; i++) await cycle();
  out.values.memoryGrowthMB = round(await memoryMB(page) - before);
  await lab.close(page);
  return out;
}

const MODEL = '#showcase [data-mode="3d"]';

/**
 * The 3D showcase: fresh trackers, one at a time (an open one keeps turning and would load the GPU of the next), until
 * there are enough purchases. Ready: a real click on the button that opens the tracker until the first draw is painted;
 * every tracker counts. Update: a real click on "record" until the draw showing the new part is painted. Then, on the
 * last tracker, five seconds of turning: each draw's main-thread time in its frame, the gap between draws, and its GPU
 * time where the browser can time it.
 */
export async function model(lab: Lab, after?: (page: Page) => Promise<void>): Promise<Measured> {
  const out: Measured = { values: {}, notes: {} };
  const readies: number[] = [], updates: number[] = [];
  for (let n = 0; ; n++) {
    const page = await lab.open(lab.gpu);
    await beforeTracker(page, gameUrl('?role=student&lang=en'));
    readies.push(await inputToPaint(page, () => page.locator(TRACKER_OK).click(), { kind: 'drawn', selector: MODEL, attribute: 'data-drawn' }));
    for (const purchase of PURCHASES) {
      await loadPurchase(page, purchase);
      updates.push(await inputToPaint(page, () => page.click('#record-win'), { kind: 'drawn', selector: MODEL, attribute: 'data-drawn', token: purchase[2] }));
    }
    if (n === 0) {
      out.values.modelMemoryMB = Math.round(await memoryMB(page));
      await machine(lab, 'model', out);
    }
    if (updates.length < MIN_SAMPLES) { await lab.close(page); continue; }

    await page.locator(MODEL).scrollIntoViewIfNeeded();
    const turning = await page.evaluate(() => new Promise<{ costs: number[]; gaps: number[] }>(resolve => {
      const canvas = document.querySelector('#showcase canvas')!;
      const costs: number[] = [], gaps: number[] = [];
      let last: number | null = null;
      const draw = () => {
        const now = performance.now(), frame = document.timeline.currentTime as number;
        costs.push(now - frame);
        if (last !== null) gaps.push(now - last);
        last = now;
      };
      canvas.addEventListener('sea-draw', draw);
      setTimeout(() => { canvas.removeEventListener('sea-draw', draw); resolve({ costs, gaps }); }, 5000);
    }));
    const gpu = await page.evaluate(() => (globalThis as unknown as { __seaGpu: { times: number[]; available: boolean } }).__seaGpu);
    out.values.turningDraws = turning.costs.length;
    // The adaptive tier the stage settled on: 0 is full resolution (source/showcase/pace.ts SCALES).
    out.values.modelTier = Number(await page.locator('#showcase canvas').getAttribute('data-tier') ?? 0);
    out.values.frameP95Ms = turning.costs.length >= MIN_SAMPLES ? round(p95(turning.costs)) : null;
    out.values.drawGapP95Ms = turning.gaps.length >= MIN_SAMPLES ? round(p95(turning.gaps)) : null;
    if (out.values.frameP95Ms === null) out.notes.frameP95Ms = `only ${turning.costs.length} draws in 5 s of turning`;
    out.values.gpuFrameMs = gpu.available && gpu.times.length >= MIN_SAMPLES ? round(p95(gpu.times)) : null;
    if (out.values.gpuFrameMs === null) out.notes.gpuFrameMs = gpu.available ? `only ${gpu.times.length} timed draws` : 'this browser offers no WebGL GPU timer (EXT_disjoint_timer_query_webgl2)';
    await after?.(page);
    await lab.close(page);
    break;
  }
  out.values.modelReadyMs = round(Math.max(...readies));
  out.values.modelReadyFirstMs = round(readies[0]!);
  out.values.modelUpdateSamples = updates.length;
  out.values.modelUpdateP95Ms = round(p95(updates));
  out.values.modelUpdateMaxMs = round(Math.max(...updates));
  return out;
}

/**
 * Without WebGL: a real click on "record" until the new layer is decoded and painted, on fresh trackers until there are
 * enough samples; then, on the first tracker, a real click on another angle and real key presses on the turntable.
 */
export async function stills(lab: Lab): Promise<Measured> {
  const out: Measured = { values: {}, notes: {} };
  const updates: number[] = [];
  const first = await lab.open(withoutWebgl);
  for (let n = 0; updates.length < MIN_SAMPLES; n++) {
    const page = n === 0 ? first : await lab.open(withoutWebgl);
    await openTracker(page, gameUrl('?role=student&lang=en'));
    await page.locator('#showcase img[data-layer="base"]').waitFor();
    for (const purchase of PURCHASES) {
      await loadPurchase(page, purchase);
      updates.push(await inputToPaint(page, () => page.click('#record-win'), { kind: 'image', selector: `#showcase img[data-layer="${purchase[2]}"]` }));
    }
    if (n > 0) await lab.close(page);
  }
  out.values.showcaseUpdateSamples = updates.length;
  out.values.showcaseUpdateP95Ms = round(p95(updates));
  out.values.showcaseUpdateMaxMs = round(Math.max(...updates));

  out.values.angleChangeMs = Math.round(await inputToPaint(first, () => first.click('#showcase-view-rear'), { kind: 'image', selector: '#showcase img[data-angle="rear"]' }));
  await first.check('#showcase-view-turntable');
  await first.locator('#showcase-turn').waitFor();
  await first.waitForTimeout(300); // neighbouring frames pre-decode while a person pauses
  await first.focus('#showcase-turn');
  const scrub: number[] = [];
  for (let i = 0; i < 6; i++) {
    const next = await first.evaluate(() => { const input = document.querySelector<HTMLInputElement>('#showcase-turn')!; return Math.min(Number(input.value) + 1, Number(input.max)); });
    scrub.push(await inputToPaint(first, () => first.keyboard.press('ArrowRight'), { kind: 'image', selector: `#showcase img[data-frame="${next}"]` }));
    await first.waitForTimeout(120);
  }
  out.values.turntableStepMaxMs = Math.round(Math.max(...scrub));
  out.values.studentMemoryMB = Math.round(await memoryMB(first));
  await lab.close(first);
  return out;
}
