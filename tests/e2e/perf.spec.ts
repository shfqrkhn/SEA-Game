// RQ-26 (MPES §14, §10.3): every performance budget, measured in Chromium on the reference profile (4x CPU
// throttling, D-11). Numbers are attached to the report and copied into docs/verification for the release. This
// file runs in its own project after every other suite has finished (playwright.config.ts), so timings are not
// skewed by parallel work.
import { expect, test, type Page } from '@playwright/test';
import { readFileSync, statSync } from 'node:fs';
import { gameUrl, guardNetwork, withGpu, withoutWebgl } from './helpers.ts';
import { instructorSetup } from './roles.ts';

test.use({ launchOptions: { args: ['--js-flags=--expose-gc'] } });
test.setTimeout(240_000);

const MB = 1024 * 1024;

/** The reference profile: Chromium with 4x CPU throttling stands in for an integrated-graphics laptop (D-11). */
async function reference(page: Page): Promise<Page> {
  guardNetwork(page);
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  return page;
}

/** JS heap plus the decoded pixels of every image on screen (4 bytes per pixel). */
async function memoryMB(page: Page): Promise<number> {
  return page.evaluate(() => {
    (globalThis as unknown as { gc?: () => void }).gc?.();
    const heap = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory.usedJSHeapSize;
    const pixels = [...document.images].reduce((n, img) => n + img.naturalWidth * img.naturalHeight * 4, 0);
    return (heap + pixels) / 1048576;
  });
}

const p95 = (values: number[]) => [...values].sort((a, b) => a - b)[Math.floor(values.length * 0.95)]!;

test('performance budgets (MPES §14, §10.3)', async ({ page }, info) => {
  const results: Record<string, number> = {};
  results.htmlMB = Math.round(statSync('dist/index.html').size / MB * 10) / 10;

  // Time to interactive, chooser: the first frame showing the heading and the role buttons.
  // (file:// pages report no paint timing, so a test-side observer records it.)
  const chooser = await reference(await page.context().newPage());
  await chooser.addInitScript(() => {
    new MutationObserver((_, observer) => {
      if (!document.querySelector('h1') || !document.querySelector('a[data-role]')) return;
      observer.disconnect();
      requestAnimationFrame(() => { (window as unknown as { seaPainted: number }).seaPainted = performance.now(); });
    }).observe(document, { childList: true, subtree: true });
  });
  await chooser.goto(gameUrl('?lang=en'));
  await chooser.waitForFunction(() => (window as unknown as { seaPainted?: number }).seaPainted !== undefined);
  results.chooserMs = Math.round(await chooser.evaluate(() => (window as unknown as { seaPainted: number }).seaPainted));
  await chooser.close();

  // Time to interactive with the largest valid instructor save: 210 ledger entries, all 70 lots, 10 teams.
  await reference(page);
  const state = JSON.parse(readFileSync('tests/fixtures/legacy/instructor-max-ledger.json', 'utf8')).state;
  await page.addInitScript(raw => { if (!sessionStorage.getItem('SEA_INSTRUCTOR_V300')) sessionStorage.setItem('SEA_INSTRUCTOR_V300', raw); }, JSON.stringify(state));
  const t1 = Date.now();
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await page.getByRole('heading', { name: 'Results to reconcile' }).waitFor();
  results.maxStateStartMs = Date.now() - t1;
  results.maxStateMemoryMB = Math.round(await memoryMB(page));

  // Command response: click to rendered result in a 10-team timed auction, inside the page.
  const fresh = await reference(await page.context().newPage());
  await fresh.goto(gameUrl('?role=instructor&lang=en'));
  await instructorSetup(fresh, { teams: 10, reveal: 'JIT', timed: true, missions: ['TROOP', 'RECCE', 'COMBAT', 'COMMAND', 'RECOVERY', 'MINE', 'TROOP', 'RECCE', 'COMBAT', 'COMMAND'] });
  await fresh.click('#open-bidding');
  const bids = await fresh.evaluate(() => {
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
  results.commandP95Ms = Math.round(p95(bids) * 10) / 10;

  // No growth: ten full re-render cycles (language round trips re-render every view) leave the heap flat.
  const before = await memoryMB(fresh);
  for (let cycle = 0; cycle < 10; cycle++) await fresh.evaluate(() => { for (let i = 0; i < 20; i++) document.querySelector<HTMLButtonElement>('#lang-toggle')!.click(); });
  results.memoryGrowthMB = Math.round((await memoryMB(fresh) - before) * 10) / 10;

  // 3D showcase (MPES §10.3): from opening the tracker until the model is drawn; then record a purchase until the
  // model shows it.
  const tracker = async (page: Page) => {
    await page.goto(gameUrl('?role=student&lang=en'));
    await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
    await page.selectOption('#join-mission', 'RECOVERY');
    await page.click('#join'); await page.click('#record-practice'); await page.click('#student-planning');
    await page.check('#plan-confirm'); await page.click('#student-start-auction');
  };
  const model = await reference(await page.context().newPage());
  await withGpu(model);
  await tracker(model);
  const opened = await model.evaluate(() => performance.now());
  await model.locator('dialog button[data-value="ok"]').click();
  await model.locator('#showcase [data-mode="3d"][data-ready="true"]').waitFor();
  results.modelReadyMs = Math.round(await model.evaluate(() => performance.now()) - opened);
  const modelUpdates: number[] = [];
  for (const [round, lot, card, paid] of [[1, 5, 'COM-E', 600000], [1, 7, 'ACC-F', 350000], [2, 1, 'CAP-B', 450000]] as const) {
    if (round > 1) await model.selectOption('#pos-round', String(round));
    await model.selectOption('#pos-lot', String(lot));
    await model.fill('#card-id', card); await model.click('#load-card'); await model.fill('#paid', String(paid));
    modelUpdates.push(await model.evaluate(async id => {
      const start = performance.now();
      document.querySelector<HTMLButtonElement>('#record-win')!.click();
      if (!document.querySelector('#showcase [data-mode="3d"]')!.getAttribute('data-layers')!.split(' ').includes(id)) throw new Error(`model lacks ${id}`);
      await new Promise(requestAnimationFrame);
      return performance.now() - start;
    }, card));
  }
  results.modelUpdateMaxMs = Math.round(Math.max(...modelUpdates));
  results.modelMemoryMB = Math.round(await memoryMB(model));
  await model.close();

  // Stills showcase without WebGL (MPES §10.3): record a purchase until its layer is decoded; change angle; scrub
  // the turntable.
  const student = await reference(await page.context().newPage());
  await withoutWebgl(student);
  await tracker(student);
  await student.locator('dialog button[data-value="ok"]').click();
  await student.locator('#showcase img[data-layer="base"]').waitFor();
  const updates: number[] = [];
  for (const [round, lot, card, paid] of [[1, 5, 'COM-E', 600000], [1, 7, 'ACC-F', 350000], [2, 1, 'CAP-B', 450000]] as const) {
    if (round > 1) await student.selectOption('#pos-round', String(round));
    await student.selectOption('#pos-lot', String(lot));
    await student.fill('#card-id', card); await student.click('#load-card'); await student.fill('#paid', String(paid));
    updates.push(await student.evaluate(async id => {
      const start = performance.now();
      document.querySelector<HTMLButtonElement>('#record-win')!.click();
      await document.querySelector<HTMLImageElement>(`#showcase img[data-layer="${id}"]`)!.decode();
      return performance.now() - start;
    }, card));
  }
  results.showcaseUpdateMaxMs = Math.round(Math.max(...updates));
  results.angleChangeMs = Math.round(await student.evaluate(async () => {
    const start = performance.now();
    document.querySelector<HTMLInputElement>('#showcase-view-rear')!.click();
    await Promise.all([...document.querySelectorAll<HTMLImageElement>('#showcase img')].map(img => img.decode()));
    return performance.now() - start;
  }));
  await student.check('#showcase-view-turntable');
  await student.locator('#showcase-turn').waitFor();
  await student.waitForTimeout(300); // neighbouring frames pre-decode while a person pauses
  const scrub: number[] = [];
  for (let i = 0; i < 6; i++) {
    scrub.push(await student.evaluate(async () => {
      const input = document.querySelector<HTMLInputElement>('#showcase-turn')!;
      const start = performance.now();
      input.value = String((Number(input.value) + 1) % (Number(input.max) + 1));
      input.dispatchEvent(new Event('input', { bubbles: true }));
      await document.querySelector<HTMLImageElement>('#showcase img[data-frame]')!.decode();
      return performance.now() - start;
    }));
    await student.waitForTimeout(120);
  }
  results.turntableStepMaxMs = Math.round(Math.max(...scrub));
  results.studentMemoryMB = Math.round(await memoryMB(student));

  await info.attach('performance.json', { body: JSON.stringify(results, null, 2), contentType: 'application/json' });
  console.log(JSON.stringify(results));
  expect(results.htmlMB).toBeLessThanOrEqual(50);
  expect(results.chooserMs).toBeLessThanOrEqual(2000);
  expect(results.maxStateStartMs).toBeLessThanOrEqual(3000);
  expect(results.commandP95Ms).toBeLessThanOrEqual(100);
  expect(results.maxStateMemoryMB).toBeLessThanOrEqual(400);
  expect(results.studentMemoryMB).toBeLessThanOrEqual(400);
  expect(results.memoryGrowthMB).toBeLessThanOrEqual(5);
  expect(results.showcaseUpdateMaxMs).toBeLessThanOrEqual(100);
  expect(results.modelReadyMs).toBeLessThanOrEqual(3000);
  expect(results.modelUpdateMaxMs).toBeLessThanOrEqual(100);
  expect(results.modelMemoryMB).toBeLessThanOrEqual(400);
  expect(results.angleChangeMs).toBeLessThanOrEqual(50);
  expect(results.turntableStepMaxMs).toBeLessThanOrEqual(50);
});
