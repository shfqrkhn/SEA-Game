// The MPES §14 measurement protocol, shared by the CI gate (tests/e2e/perf.spec.ts) and the reference-laptop proxy
// (tests/perf-ref/perf-ref.spec.ts) so both measure the same thing the same way:
// - an update is timed from the trusted input event (a real click through the browser) until the frame that shows
//   its result has been painted, never from a script call until a promise settles;
// - a budget stated as p95 is checked on the nearest-rank p95 of enough samples (MIN_SAMPLES), and a run with fewer
//   samples fails instead of passing on an empty or tiny set; the maximum is reported alongside;
// - memory is the JS heap plus every decoded image on screen (an estimate), and, where the operating system can
//   report it, the private memory of the page's renderer and the GPU process (the real figure).
import type { Browser, Locator, Page } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

export const MB = 1024 * 1024;
/** The CPU slowdown that stands in for a reference laptop's processor (D-11). */
export const THROTTLE = 4;
/** Samples behind every p95: with 30, the p95 is the second-worst sample, so one stray stall cannot decide it. */
export const MIN_SAMPLES = 30;

export const round = (value: number, places = 1): number => Math.round(value * 10 ** places) / 10 ** places;

/** Nearest-rank p95 (the smallest value at or above 95% of the samples); throws below `minimum` samples. */
export function p95(values: readonly number[], minimum = MIN_SAMPLES): number {
  if (values.length < minimum || values.some(value => !Number.isFinite(value))) {
    throw new Error(`p95 needs at least ${minimum} finite samples, got ${values.length}`);
  }
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.ceil(sorted.length * 0.95) - 1]!;
}

/** Applies the reference CPU throttling to a page. */
export async function throttle(page: Page, rate = THROTTLE): Promise<void> {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate });
}

/** What the result of an input looks like once it is on screen. */
export type Shown =
  /** The click has been handled (every listener on its path, the page's own delegation included); the next painted
   *  frame shows it. Waiting for the click, not only the press, keeps a slow release from ending the timing on a frame
   *  painted before the command ran (Codex G3 review). */
  | { kind: 'paint' }
  /** Images matching `selector` exist and are all decoded; then painted. */
  | { kind: 'image'; selector: string }
  /** The element's attribute lists `token` (space-separated), or merely exists when `token` is left out; it is set
   *  during a frame (a canvas draw), and that frame has been painted. */
  | { kind: 'drawn'; selector: string; attribute: string; token?: string };

/**
 * Milliseconds from the input event that `act` causes (pointer down, key down or click, whichever comes first) until
 * the first frame showing `shown` has been painted. `act` must give a trusted input (a Playwright click or key press).
 */
export async function inputToPaint(page: Page, act: () => Promise<unknown>, shown: Shown, timeout = 10_000): Promise<number> {
  await page.evaluate(({ shown, timeout }) => {
    type Probe = { start: number | null; done: Promise<number> };
    const probe = { start: null } as unknown as Probe;
    (globalThis as unknown as { __seaInput: Probe }).__seaInput = probe;
    const first = (event: Event) => { if (probe.start === null) probe.start = event.timeStamp; };
    for (const type of ['pointerdown', 'keydown', 'click']) addEventListener(type, first, { capture: true, once: true });
    // On the window, bubbling: the last listener a click reaches, so every handler of the command has run.
    const clicked = shown.kind !== 'paint' ? null : new Promise<void>(resolve => addEventListener('click', () => resolve(), { once: true }));
    // A message posted during a frame runs after that frame is painted; outside a frame, the next frame comes first.
    const afterPaint = (inFrame: boolean) => new Promise<number>(resolve => {
      const post = () => { const channel = new MessageChannel(); channel.port1.onmessage = () => resolve(performance.now()); channel.port2.postMessage(0); };
      if (inFrame) post(); else requestAnimationFrame(post);
    });
    const started = () => new Promise<void>(resolve => {
      const check = () => (probe.start !== null ? resolve() : setTimeout(check, 0));
      check();
    });
    const deadline = <T>(work: Promise<T>) => Promise.race([work, new Promise<never>((_, reject) => setTimeout(() => reject(new Error(`not shown within ${timeout} ms: ${JSON.stringify(shown)}`)), timeout))]);
    // Watched from before the input, so a draw in the first frame after it cannot be missed.
    const drawn = shown.kind !== 'drawn' ? null : new Promise<void>(resolve => {
      const lists = () => {
        const value = document.querySelector(shown.selector)?.getAttribute(shown.attribute);
        return value != null && (shown.token === undefined || value.split(' ').includes(shown.token));
      };
      const observer = new MutationObserver(() => { if (lists()) { observer.disconnect(); resolve(); } });
      observer.observe(document, { subtree: true, attributes: true, attributeFilter: [shown.attribute] });
    });
    probe.done = deadline((async () => {
      await started();
      if (drawn) { await drawn; return afterPaint(true); }
      if (shown.kind === 'image') {
        let images = [...document.querySelectorAll<HTMLImageElement>(shown.selector)];
        while (!images.length) { await new Promise(requestAnimationFrame); images = [...document.querySelectorAll<HTMLImageElement>(shown.selector)]; }
        await Promise.all(images.map(img => img.decode()));
      }
      if (clicked) await clicked;
      return afterPaint(false);
    })());
  }, { shown, timeout });
  await act();
  return page.evaluate(async () => {
    const probe = (globalThis as unknown as { __seaInput: { start: number | null; done: Promise<number>; end?: number } }).__seaInput;
    const end = probe.end = await probe.done;
    return end - probe.start!;
  });
}

/** Clicks a control as a person would (trusted events) after centring it, so the press cannot land elsewhere. */
export async function press(target: Locator): Promise<void> {
  await target.evaluate(element => element.scrollIntoView({ block: 'center' }));
  await target.click();
}

/** Estimate: JS heap after a full collection plus the decoded pixels of every image on screen (4 bytes per pixel). */
export async function memoryMB(page: Page): Promise<number> {
  return page.evaluate(mb => {
    (globalThis as unknown as { gc?: () => void }).gc?.();
    const heap = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize;
    const pixels = [...document.images].reduce((n, img) => n + img.naturalWidth * img.naturalHeight * 4, 0);
    return (heap + pixels) / mb;
  }, MB);
}

/** Private memory of one process in bytes, from the operating system, or null where it cannot be read. */
function privateBytes(pid: number): number | null {
  try {
    if (process.platform === 'linux') {
      const rollup = readFileSync(`/proc/${pid}/smaps_rollup`, 'utf8');
      const kb = [...rollup.matchAll(/^Private_(?:Clean|Dirty):\s+(\d+) kB/gm)].reduce((n, m) => n + Number(m[1]), 0);
      return kb * 1024;
    }
    if (process.platform === 'win32') {
      const out = execFileSync('powershell', ['-NoProfile', '-NonInteractive', '-Command', `(Get-Process -Id ${pid}).PrivateMemorySize64`], { encoding: 'utf8', timeout: 20_000 });
      const bytes = Number(out.trim());
      return Number.isFinite(bytes) ? bytes : null;
    }
  } catch { /* the process ended or the platform hides it */ }
  return null;
}

/**
 * The browser's renderer and GPU processes, in MB of private memory (what the page costs the machine, decoded images
 * and GPU uploads included). Every renderer counts, so close other pages first; null where the OS cannot report it.
 */
export async function processMB(browser: Browser): Promise<{ renderer: number; gpu: number } | null> {
  const cdp = await browser.newBrowserCDPSession();
  try {
    const { processInfo } = await cdp.send('SystemInfo.getProcessInfo') as { processInfo: { type: string; id: number }[] };
    const sum = (type: string) => {
      const sizes = processInfo.filter(p => p.type === type).map(p => privateBytes(p.id));
      return sizes.length && sizes.every(size => size !== null) ? (sizes as number[]).reduce((a, b) => a + b, 0) / MB : null;
    };
    // No GPU process at all (software drawing in the renderer) is zero; a GPU process that cannot be read is unmeasured,
    // never zero, or a renderer-only total would pass the memory gates (Codex G3 review).
    const renderer = sum('renderer'), gpu = processInfo.some(p => p.type === 'GPU') ? sum('GPU') : 0;
    return renderer === null || gpu === null ? null : { renderer: round(renderer), gpu: round(gpu) };
  } finally {
    await cdp.detach();
  }
}

/** A RECOVERY team at the dialog that opens its auction tracker; the tracker opens on `TRACKER_OK`. */
export async function beforeTracker(page: Page, url: string): Promise<void> {
  await page.goto(url);
  await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await page.selectOption('#join-mission', 'RECOVERY');
  await page.click('#join'); await page.click('#record-practice'); await page.click('#student-planning');
  await page.check('#plan-confirm'); await page.click('#student-start-auction');
}

/** The button that opens the tracker from `beforeTracker`. */
export const TRACKER_OK = 'dialog button[data-value="ok"]';

/** The student tracker on the auction step for a RECOVERY team, ready to record purchases. */
export async function openTracker(page: Page, url: string): Promise<void> {
  await beforeTracker(page, url);
  await page.locator(TRACKER_OK).click();
}

/** Three purchases a RECOVERY team can record in a row: round, lot, card, price paid. */
export const PURCHASES = [[1, 5, 'COM-E', 600000], [1, 7, 'ACC-F', 350000], [2, 1, 'CAP-B', 450000]] as const;

/** Loads a purchase into the tracker's form, ready for #record-win. */
export async function loadPurchase(page: Page, [round_, lot, card, paid]: typeof PURCHASES[number]): Promise<void> {
  if (round_ > 1) await page.selectOption('#pos-round', String(round_));
  await page.selectOption('#pos-lot', String(lot));
  await page.fill('#card-id', card); await page.click('#load-card'); await page.fill('#paid', String(paid));
}
