// RQ-26 (MPES §14): startup, command response and memory budgets, measured in Chromium on this machine.
// Numbers are attached to the report and copied into docs/verification for the release.
import { expect, test } from '@playwright/test';
import { readFileSync, statSync } from 'node:fs';
import { gameUrl, guardNetwork } from './helpers.ts';
import { instructorSetup } from './roles.ts';

// Hardware GPU where the machine has one (Windows locally); CI runners fall back to software rendering.
test.use({ launchOptions: { args: ['--js-flags=--expose-gc', ...(process.platform === 'win32' ? ['--enable-gpu', '--use-angle=d3d11', '--ignore-gpu-blocklist'] : [])] } });

test('performance budgets', async ({ page }, info) => {
  test.skip(info.project.name !== 'chromium', 'Budgets are calibrated in Chromium.');
  guardNetwork(page);
  const results: Record<string, number> = {};
  results.htmlBytes = statSync('dist/index.html').size;

  // First contentful paint: when the chooser (title and role buttons) is on screen. The 3D hero starts after it.
  // (file:// pages report no paint timing, so a test-side observer records the first frame showing the heading.)
  const chooser = await page.context().newPage();
  guardNetwork(chooser);
  await chooser.addInitScript(() => {
    new MutationObserver((_, observer) => {
      if (!document.querySelector('h1')) return;
      observer.disconnect();
      requestAnimationFrame(() => { (window as unknown as { seaPainted: number }).seaPainted = performance.now(); });
    }).observe(document, { childList: true, subtree: true });
  });
  await chooser.goto(gameUrl('?lang=en'));
  await chooser.waitForFunction(() => (window as unknown as { seaPainted?: number }).seaPainted !== undefined);
  results.chooserMs = Math.round(await chooser.evaluate(() => (window as unknown as { seaPainted: number }).seaPainted));
  await chooser.close();

  // Largest valid instructor save: 210 ledger entries, all 70 lots, build phase.
  const state = JSON.parse(readFileSync('tests/fixtures/legacy/instructor-max-ledger.json', 'utf8')).state;
  await page.addInitScript(raw => { if (!sessionStorage.getItem('SEA_INSTRUCTOR_V300')) sessionStorage.setItem('SEA_INSTRUCTOR_V300', raw); }, JSON.stringify(state));
  const t1 = Date.now();
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await page.getByRole('heading', { name: 'Results to reconcile' }).waitFor();
  results.maxStateStartMs = Date.now() - t1;

  // Command response: a fresh timed auction, measured inside the page around synchronous dispatch + render.
  const fresh = await page.context().newPage(); // no seeding script, empty tab storage
  guardNetwork(fresh);
  await fresh.goto(gameUrl('?role=instructor&lang=en'));
  await instructorSetup(fresh, { teams: 10, reveal: 'JIT', timed: true, missions: ['TROOP', 'RECCE', 'COMBAT', 'COMMAND', 'RECOVERY', 'MINE', 'TROOP', 'RECCE', 'COMBAT', 'COMMAND'] });
  await fresh.click('#open-bidding');
  const timings = await fresh.evaluate(() => {
    const out: number[] = [];
    for (let i = 0; i < 40; i++) {
      const team = (i % 10) + 1;
      const button = document.querySelector<HTMLButtonElement>(`#bid-${team}`);
      if (!button || button.disabled) continue;
      const start = performance.now();
      button.click();
      out.push(performance.now() - start);
    }
    return out.sort((a, b) => a - b);
  });
  results.commandP95Ms = timings[Math.floor(timings.length * 0.95)]!;

  // Memory: repeated full re-renders must not grow the heap.
  const heap = await fresh.evaluate(async () => {
    const gc = (globalThis as unknown as { gc?: () => void }).gc;
    const measure = () => { gc?.(); return (performance as unknown as { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize; };
    const before = measure();
    for (let i = 0; i < 200; i++) document.querySelector<HTMLButtonElement>('#lang-toggle')!.click();
    await new Promise(r => setTimeout(r, 50));
    return { before, after: measure() };
  });
  results.heapMB = Math.round(heap.after / 1e5) / 10;
  results.heapGrowthMB = Math.round((heap.after - heap.before) / 1e5) / 10;

  // Vehicle bay: time from entering the auction to the first drawn canvas.
  const student = await page.context().newPage();
  guardNetwork(student);
  await student.goto(gameUrl('?role=student&lang=en'));
  await student.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await student.selectOption('#join-mission', 'COMBAT');
  await student.click('#join');
  await student.click('#record-practice');
  await student.click('#student-planning');
  await student.check('#plan-confirm');
  await student.click('#student-start-auction');
  const t2 = Date.now();
  await student.locator('dialog button[data-value="ok"]').click();
  await student.locator('#vehicle-bay canvas').waitFor();
  results.bayFirstRenderMs = Date.now() - t2;
  const renderer = await student.evaluate(() => { const gl = document.createElement('canvas').getContext('webgl2'); const ext = gl?.getExtension('WEBGL_debug_renderer_info'); return ext ? String(gl!.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : 'unknown'; });
  const hardware = !/SwiftShader|llvmpipe|software/i.test(renderer);
  info.annotations.push({ type: 'renderer', description: renderer });

  await info.attach('performance.json', { body: JSON.stringify(results, null, 2), contentType: 'application/json' });
  console.log(JSON.stringify(results));
  expect(results.htmlBytes).toBeLessThanOrEqual(6 * 1024 * 1024);
  expect(results.chooserMs).toBeLessThanOrEqual(1500);
  expect(results.maxStateStartMs).toBeLessThanOrEqual(3000);
  expect(results.commandP95Ms).toBeLessThanOrEqual(100);
  expect(results.heapMB).toBeLessThanOrEqual(300);
  expect(results.heapGrowthMB).toBeLessThanOrEqual(5);
  // MPES §10.3: enforced on hardware GPUs only; software rendering is recorded as residual risk.
  if (hardware) expect(results.bayFirstRenderMs).toBeLessThanOrEqual(1000);
});
