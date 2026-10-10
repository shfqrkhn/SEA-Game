// V1 spike measurements (MPES §14, §17): time to interactive and showcase update of the built file and of a
// 40 MB stress variant (the embedded renders replicated to full-production size), on the reference profile
// (Chromium, 4x CPU throttling) and with GPU disabled (software compositing, the WARP stand-in).
//   node art/tools/measure-spike.ts <report.json>
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium, type Page } from '@playwright/test';

process.env.PLAYWRIGHT_BROWSERS_PATH ??= resolve('.artifacts/ms-playwright');
const TARGET_BYTES = 40 * 1024 * 1024;
const RUNS = 3;

function stressFile(): string {
  const html = readFileSync('dist/index.html', 'utf8');
  const match = /(<script type="application\/json" id="sea-renders">)([^<]*)(<\/script>)/.exec(html);
  if (!match) throw new Error('renders block not found');
  const entries = Object.entries(JSON.parse(match[2]!) as Record<string, unknown>);
  const out: Record<string, unknown> = Object.fromEntries(entries);
  for (let copy = 1; Buffer.byteLength(html) + Buffer.byteLength(JSON.stringify(out)) - match[2]!.length < TARGET_BYTES; copy++) {
    for (const [id, value] of entries) out[`${id}~${copy}`] = value;
  }
  const stressed = html.replace(match[0], () => match[1] + JSON.stringify(out) + match[3]);
  const path = resolve('.artifacts/perf/stress-40mb.html');
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, stressed);
  return path;
}

async function throttled(page: Page, rate: number): Promise<void> {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate });
}

async function chooserMs(page: Page, url: string): Promise<number> {
  await page.addInitScript(() => {
    new MutationObserver((_, observer) => {
      if (!document.querySelector('h1')) return;
      observer.disconnect();
      requestAnimationFrame(() => { (window as unknown as { seaPainted: number }).seaPainted = performance.now(); });
    }).observe(document, { childList: true, subtree: true });
  });
  await page.goto(url + '?lang=en&hud=1');
  await page.waitForFunction(() => (window as unknown as { seaPainted?: number }).seaPainted !== undefined);
  return Math.round(await page.evaluate(() => (window as unknown as { seaPainted: number }).seaPainted));
}

/** Join as RECOVERY, enter the auction, then time "record win" until the new showcase layer is decoded. */
async function showcaseMs(page: Page, url: string): Promise<{ startMs: number; updateMs: number; heapMB: number; scrubMs: number; decodedMB: number }> {
  const t0 = Date.now();
  await page.goto(url + '?role=student&lang=en&hud=1');
  await page.locator('#join-code').waitFor();
  const startMs = Date.now() - t0;
  await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await page.selectOption('#join-mission', 'RECOVERY');
  await page.click('#join'); await page.click('#record-practice'); await page.click('#student-planning');
  await page.check('#plan-confirm'); await page.click('#student-start-auction');
  await page.locator('dialog button[data-value="ok"]').click();
  await page.locator('#showcase img[data-layer="base"]').waitFor();
  await page.selectOption('#pos-lot', '7'); await page.fill('#card-id', 'ACC-F'); await page.click('#load-card'); await page.fill('#paid', '350000');
  const updateMs = await page.evaluate(async () => {
    const start = performance.now();
    document.querySelector<HTMLButtonElement>('#record-win')!.click();
    const img = document.querySelector<HTMLImageElement>('#showcase img[data-layer="ACC-F"]');
    if (!img) throw new Error('layer missing');
    await img.decode();
    return performance.now() - start;
  });
  const heapMB = await page.evaluate(() => (performance as unknown as { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize / 1048576);
  // Turntable: time from a scrub step to the new frame being decoded (budget 50 ms, MPES §10.3).
  await page.check('#showcase-view-turntable');
  await page.locator('#showcase-turn').waitFor();
  await page.waitForTimeout(300); // let the neighbour pre-decode settle, as a person pausing would
  const scrub: number[] = [];
  for (let i = 0; i < 6; i++) {
    scrub.push(await page.evaluate(async () => {
      const input = document.querySelector<HTMLInputElement>('#showcase-turn')!;
      const start = performance.now();
      input.value = String((Number(input.value) + 1) % (Number(input.max) + 1));
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await document.querySelector<HTMLImageElement>('#showcase img[data-frame]')!.decode();
      return performance.now() - start;
    }));
    await page.waitForTimeout(120);
  }
  // Decoded pixels currently shown (estimate: width × height × 4 bytes per image in the showcase).
  const decodedMB = await page.evaluate(() => [...document.querySelectorAll<HTMLImageElement>('#showcase img, .card-render, .hero-still')]
    .reduce((n, img) => n + img.naturalWidth * img.naturalHeight * 4, 0) / 1048576);
  return { startMs, updateMs: Math.round(updateMs), heapMB: Math.round(heapMB), scrubMs: Math.round(Math.max(...scrub)), decodedMB: Math.round(decodedMB * 10) / 10 };
}

const median = (values: number[]) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)]!;

const files = { built: resolve('dist/index.html'), stress40: stressFile() };
const profiles = [{ name: 'reference (4x CPU)', args: [] as string[] }, { name: 'reference, GPU disabled', args: ['--disable-gpu'] }];
const results: Record<string, unknown>[] = [];
for (const profile of profiles) {
  const browser = await chromium.launch({ args: profile.args });
  for (const [label, path] of Object.entries(files)) {
    const url = pathToFileURL(path).href;
    const runs: { chooser: number; start: number; update: number; heap: number; scrub: number; decoded: number }[] = [];
    for (let i = 0; i < RUNS; i++) {
      const a = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
      await throttled(a, 4);
      const chooser = await chooserMs(a, url);
      const b = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
      await throttled(b, 4);
      const s = await showcaseMs(b, url);
      runs.push({ chooser, start: s.startMs, update: s.updateMs, heap: s.heapMB, scrub: s.scrubMs, decoded: s.decodedMB });
      await a.context().close(); await b.context().close();
    }
    results.push({
      profile: profile.name, file: label, bytes: readFileSync(path).length,
      chooserMs: median(runs.map(r => r.chooser)), studentStartMs: median(runs.map(r => r.start)),
      showcaseUpdateMs: median(runs.map(r => r.update)), heapMB: median(runs.map(r => r.heap)), turntableScrubMaxMs: median(runs.map(r => r.scrub)), decodedImageMB: median(runs.map(r => r.decoded)), runs: RUNS,
    });
  }
  await browser.close();
}
writeFileSync(resolve(process.argv[2] ?? '.artifacts/perf/spike-measure.json'), JSON.stringify(results, null, 2) + '\n');
console.table(results);
