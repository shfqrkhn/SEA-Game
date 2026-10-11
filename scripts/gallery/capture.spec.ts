// Gallery capture (G2 item 4): one screenshot per shot of the game file named by SEA_GALLERY_DIST, into
// SEA_GALLERY_OUT. Run by scripts/gallery.ts, never by `npm run e2e`.
import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { guardNetwork, withGpu, withoutWebgl } from '../../tests/e2e/helpers.ts';
import { confirmDialog, studentJoin } from '../../tests/e2e/roles.ts';
import { shots, type Shot } from './shots.ts';

const DIST = pathToFileURL(resolve(process.env.SEA_GALLERY_DIST ?? 'dist/index.html')).href;
const OUT = resolve(process.env.SEA_GALLERY_OUT ?? '.artifacts/gallery/after');
const SHOT = { animations: 'disabled', caret: 'hide' } as const;
const KEYS = { instructor: 'SEA_INSTRUCTOR_V300', student: 'SEA_STUDENT_V300' } as const;

const query = (shot: Shot, params: Record<string, string>) =>
  `?${new URLSearchParams({ ...params, lang: shot.lang, ...(shot.display.theme === 'light' ? { theme: 'light' } : {}) }).toString()}`;

async function settle(page: Page): Promise<void> {
  await page.waitForLoadState('load');
  await page.evaluate(() => Promise.all([...document.images].map(img => img.decode().catch(() => undefined))));
}

async function showcase(page: Page, shot: Shot, mission: string, view: string): Promise<void> {
  // Reduced motion keeps the model still at its opening angle, so every capture of a version frames it alike.
  if (view === '3d') { await withGpu(page); await page.emulateMedia({ reducedMotion: 'reduce' }); } else await withoutWebgl(page);
  await page.goto(DIST + query(shot, { role: 'student' }));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, mission);
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  // One part in each of seven slots, as in the visual baselines (tests/e2e/visual.spec.ts).
  const wins = [[1, 1, 'CAP-E', 350000], [1, 3, 'FP-B', 500000], [2, 6, 'SA-B', 600000], [2, 4, 'PRO-C', 350000],
    [3, 5, 'COM-B', 450000], [3, 2, 'MOB-D', 500000], [4, 7, 'ACC-G', 400000]] as const;
  for (const [round, lot, card, paid] of wins) {
    await page.selectOption('#pos-round', String(round));
    await page.selectOption('#pos-lot', String(lot));
    await page.fill('#card-id', card); await page.click('#load-card'); await page.fill('#paid', String(paid));
    await page.click('#record-win');
  }
  const stage = page.locator('#showcase [role="img"]');
  if (view === '3d') {
    await expect(page.locator('#showcase [data-mode="3d"][data-ready="true"]')).toBeVisible({ timeout: 60_000 });
    await page.waitForTimeout(500);
  } else {
    await page.check(`#showcase-view-${view}`);
    await page.evaluate(() => Promise.all([...document.querySelectorAll<HTMLImageElement>('#showcase img')].map(img => img.decode())));
  }
  await stage.screenshot({ path: join(OUT, `${shot.id}.png`), ...SHOT });
}

test.describe.configure({ mode: 'parallel' });
for (const shot of shots()) {
  test(shot.id, async ({ page }) => {
    guardNetwork(page);
    await page.setViewportSize({ width: shot.display.width, height: shot.display.height });
    const path = join(OUT, `${shot.id}.png`);
    const kind = shot.kind;
    if (kind.type === 'showcase') return showcase(page, shot, kind.mission, kind.view);
    if (kind.type === 'fixture') {
      await page.clock.install({ time: new Date('2026-10-10T09:00:00Z') });
      const raw = JSON.stringify(JSON.parse(readFileSync(`tests/fixtures/legacy/${kind.fixture}.json`, 'utf8')).state);
      await page.addInitScript(([k, value]) => { if (!sessionStorage.getItem(k!)) sessionStorage.setItem(k!, value!); }, [KEYS[kind.role], raw]);
      await page.goto(DIST + query(shot, { role: kind.role }));
    } else {
      await page.goto(DIST + query(shot, {}));
    }
    await settle(page);
    if (kind.type === 'about') {
      await page.locator('main button', { hasText: /about|propos/i }).click();
      const dialog = page.locator('dialog[open]');
      for (const summary of await dialog.locator('summary').all()) await summary.click();
      // The open dialog scrolls; a window as tall as its content (same width, same wrapping) shows all of it.
      const tall = await dialog.evaluate(d => d.scrollHeight + 2 * d.getBoundingClientRect().top + 64);
      await page.setViewportSize({ width: shot.display.width, height: Math.max(shot.display.height, Math.ceil(tall)) });
      await expect.poll(() => dialog.evaluate(d => d.scrollHeight <= d.clientHeight + 1)).toBe(true);
      await dialog.screenshot({ path, ...SHOT });
      return;
    }
    await page.screenshot({ path, fullPage: true, ...SHOT });
  });
}
