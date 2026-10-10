// J4 + RQ-15, RQ-16, RQ-28 (MPES §8, §9): storage denied, unreadable save, bad imports, legacy
// imports and a refused download, each with a designed message and no loss of the current game.
import { expect, test } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { collectConsoleErrors, gameUrl, guardNetwork } from './helpers.ts';
import { confirmDialog } from './roles.ts';

const legacy = (name: string) => new URL(`../fixtures/legacy/${name}.json`, import.meta.url);

async function importFile(page: import('@playwright/test').Page, file: string): Promise<void> {
  await page.click('#menu-button');
  const chooser = page.waitForEvent('filechooser');
  await page.locator('dialog button[data-value="import"]').click();
  await (await chooser).setFiles(file);
}

async function startNewSession(page: import('@playwright/test').Page): Promise<void> {
  await page.click('#menu-button');
  await page.locator('dialog button[data-value="new"]').click();
  await confirmDialog(page);
}

test('new session survives a reload in both roles', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await page.click('#generate');
  await expect(page.locator('.session-code')).toBeVisible();
  await startNewSession(page);
  await page.reload();
  await expect(page.locator('#generate')).toBeVisible();
  await expect(page.locator('.session-code')).toHaveCount(0);

  await page.goto(gameUrl('?role=student&lang=en'));
  await page.fill('#join-code', 'SEA3-T4-0A1B2C3D4E5F6071');
  await page.selectOption('#join-mission', 'TROOP');
  await page.click('#join');
  await expect(page.locator('#record-practice')).toBeVisible();
  await startNewSession(page);
  await page.reload();
  await expect(page.locator('#join-code')).toBeVisible();
});

test('storage denied: play continues in memory with a clear warning', async ({ page }) => {
  guardNetwork(page);
  await page.addInitScript(() => {
    Object.defineProperty(window, 'sessionStorage', { get() { throw new DOMException('denied', 'SecurityError'); } });
  });
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await expect(page.locator('main')).toContainText('cannot save automatically');
  await page.click('#generate');
  await expect(page.locator('.session-code')).toBeVisible();
});

test('unreadable save: starts empty, keeps the data and offers it for download', async ({ page }) => {
  guardNetwork(page);
  const errors = collectConsoleErrors(page);
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('seeded')) {
      sessionStorage.setItem('seeded', '1');
      sessionStorage.setItem('SEA_STUDENT_V300', '{"schema":3,"phase":"auction","broken":true}');
    }
  });
  await page.goto(gameUrl('?role=student&lang=en'));
  await expect(page.locator('main')).toContainText('could not be read');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download unreadable data' }).click();
  const path = await (await download).path();
  expect(readFileSync(path!, 'utf8')).toContain('"broken":true');
  expect(await page.evaluate(() => sessionStorage.getItem('SEA_STUDENT_V300'))).toContain('broken');
  expect(errors).toEqual([]);
});

test('bad imports are refused with a reason and change nothing', async ({ page }, info) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  const cases: [string, string, string][] = [
    ['not-json.json', '{oops', 'not readable JSON'],
    ['wrong-role.json', readFileSync(legacy('instructor-planning'), 'utf8'), 'belongs to the other role'],
    ['future.json', readFileSync(legacy('student-closed'), 'utf8').replace('"version":1', '"version":2'), 'not a SEA Game backup'],
    ['tampered.json', readFileSync(legacy('student-auction'), 'utf8').replace('"paid":', '"paid":1+'), 'not readable JSON'],
    ['too-big.json', ' '.repeat(1_600_000), 'too large'],
  ];
  for (const [name, content, message] of cases) {
    const file = info.outputPath(name);
    writeFileSync(file, content);
    await importFile(page, file);
    await expect(page.locator('#status')).toContainText(message);
    await expect(page.locator('#join-code')).toBeVisible();
  }
});

test('legacy 4.1 instructor backup imports; an open lot is paused for review', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await importFile(page, fileURLToPath(legacy('instructor-auction-open-paused')));
  await confirmDialog(page);
  await expect(page.locator('#status')).toContainText('Backup imported');
  await expect(page.locator('#resume')).toBeVisible();
  await expect(page.locator('#lot-heading')).toHaveText('Round 3 · Lot 6 of 10');
  await page.click('#resume');
  await expect(page.locator('#sell')).toBeEnabled();
});

test('a refused download falls back to copyable backup text', async ({ page }) => {
  guardNetwork(page);
  await page.addInitScript(() => { URL.createObjectURL = () => { throw new Error('blocked'); }; });
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await page.click('#generate');
  await page.click('#menu-button');
  await page.locator('dialog button[data-value="export"]').click();
  const dialog = page.getByRole('dialog', { name: 'Backup text' });
  await expect(dialog).toBeVisible();
  const text = await dialog.locator('textarea').inputValue();
  expect(JSON.parse(text)).toMatchObject({ format: 'SEA-GAME-BACKUP', role: 'INSTRUCTOR' });
});

test('WebGL context loss: the bay falls back, then returns when the context is restored (MPES §9)', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?lang=en'));
  const canvas = page.locator('#vehicle-bay canvas');
  const holder = page.locator('#vehicle-bay .bay-canvas');
  // Wait for the bay to choose WebGL or the fallback; engines without WebGL are covered by the next test.
  await expect(holder.locator('canvas, svg').first()).toBeAttached();
  test.skip(await canvas.count() === 0, 'No WebGL in this engine.');
  // Keep the extension handle on window: the bay must not depend on the test finding the canvas again.
  const lose = (restore: boolean) => page.evaluate(restore => {
    const w = window as unknown as { seaLose?: WEBGL_lose_context };
    if (!w.seaLose) {
      const gl = document.querySelector<HTMLCanvasElement>('#vehicle-bay canvas')!.getContext('webgl2') ?? document.querySelector<HTMLCanvasElement>('#vehicle-bay canvas')!.getContext('webgl');
      w.seaLose = gl!.getExtension('WEBGL_lose_context')!;
    }
    if (restore) w.seaLose.restoreContext(); else w.seaLose.loseContext();
  }, restore);
  await lose(false);
  await expect(holder).toHaveClass(/unavailable/);
  await expect(page.locator('#vehicle-bay svg')).toBeVisible();
  await lose(true);
  await expect(holder).not.toHaveClass(/unavailable/);
  await expect(canvas).toBeVisible();
  await expect(page.locator('#vehicle-bay svg')).toHaveCount(0);
});

test('no WebGL: the vehicle bay shows a message and the game keeps working', async ({ page }) => {
  guardNetwork(page);
  const errors = collectConsoleErrors(page);
  await page.addInitScript(() => { HTMLCanvasElement.prototype.getContext = () => null; });
  await page.goto(gameUrl('?role=student&lang=en'));
  await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await page.selectOption('#join-mission', 'COMBAT');
  await page.click('#join');
  await page.click('#record-practice');
  await page.click('#student-planning');
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  await expect(page.locator('#vehicle-bay')).toContainText('3D view unavailable');
  await page.fill('#card-id', 'NOPE');
  await page.click('#load-card');
  await expect(page.locator('#status')).toContainText('does not belong to this lot');
  expect(errors).toEqual([]);
});
