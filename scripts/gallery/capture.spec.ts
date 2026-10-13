// Gallery capture (G2 item 4): one screenshot per shot of the game file named by SEA_GALLERY_DIST, into
// SEA_GALLERY_OUT. Run by scripts/gallery.ts, never by `npm run e2e`.
import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { guardNetwork, withGpu, withoutWebgl } from '../../tests/e2e/helpers.ts';
import { confirmDialog, studentJoin } from '../../tests/e2e/roles.ts';
import * as I from '../../source/domain/instructor.ts';
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

/** Owner FIX 4: a student on a phone, planning with every section open or tracking after one purchase; or the troop
 *  carrier with the catalogue's farthest-reaching parts in 3D, at its opening angle, turned, or zoomed in. */
async function phoneOrKit(page: Page, shot: Shot, kind: Extract<Shot['kind'], { type: 'phone' | 'kit' }>): Promise<void> {
  if (kind.type === 'kit') { await withGpu(page); await page.emulateMedia({ reducedMotion: 'reduce' }); } else await withoutWebgl(page);
  await page.goto(DIST + query(shot, { role: 'student' }));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, kind.type === 'kit' ? 'TROOP' : 'COMBAT');
  const path = join(OUT, `${shot.id}.png`);
  if (kind.type === 'phone' && kind.view === 'planning') {
    await page.evaluate(() => document.querySelectorAll('details').forEach(d => { d.open = true; }));
    await settle(page);
    return void await page.screenshot({ path, fullPage: true, ...SHOT });
  }
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  const wins = kind.type === 'kit' ? [[1, 7, 'ACC-B'], [1, 5, 'COM-E'], [2, 7, 'ACC-C'], [2, 6, 'SA-D']] as const : [[1, 1, 'CAP-A']] as const;
  for (const [round, lot, card] of wins) {
    await page.selectOption('#pos-round', String(round));
    await page.selectOption('#pos-lot', String(lot));
    await page.fill('#card-id', card); await page.click('#load-card'); await page.fill('#paid', '900000');
    await page.click('#record-win');
  }
  if (kind.type === 'phone') {
    await settle(page);
    return void await page.screenshot({ path, fullPage: true, ...SHOT });
  }
  const stage = page.locator('#showcase [role="img"]');
  await expect(stage).toHaveAttribute('data-layers', 'ACC-B ACC-C COM-E SA-D', { timeout: 60_000 });
  await expect(page.locator('#showcase [data-mode="3d"][data-ready="true"]')).toBeVisible({ timeout: 60_000 });
  const presses = kind.view === 'turned' ? ['Turn left', 6] as const : kind.view === 'zoomed' ? ['Zoom in', 2] as const : null;
  if (presses) for (let i = 0; i < presses[1]; i++) await page.locator('#showcase').getByRole('button', { name: presses[0], exact: true }).click();
  await page.waitForTimeout(1500);
  await page.locator('#showcase').screenshot({ path, ...SHOT });
}

/** An instructor session, 3 teams, played with the domain commands: each team wins 2 lots of round 1 at the start
 *  price, then the close is offered ('round-full') or taken ('round-closed'). */
function scenario(name: 'round-full' | 'round-closed', lang: 'en' | 'fr'): I.InstructorState {
  const at = Date.parse('2026-10-10T09:00:00Z');
  let s = I.generateSession(I.instructorShell(lang), { teamCount: 3, revealMode: 'JIT', timingMode: 'TIMED', bidSeconds: 30, token: '0123456789ABCDEF', seed: '0123456789ABCDEF0123456789ABCDEF' });
  s = I.startPractice(s);
  for (const step of ['reveal', 'open', 'accept', 'close'] as const) s = I.practiceStep(s, step);
  s = I.openPlanning(s);
  for (const [id, mission] of [[1, 'TROOP'], [2, 'RECCE'], [3, 'COMBAT']] as const) s = I.selectMission(s, id, mission);
  s = I.startAuction(s);
  for (const team of [1, 1, 2, 2, 3, 3]) {
    if (I.currentOutcome(s)) s = I.advance(s);
    const open = I.openBidding(s, at), offer = I.nextOffer(open)!;
    s = I.commitSale(I.acceptBid(open, team, offer, at), team, offer);
  }
  return name === 'round-full' ? s : I.closeRound(s);
}

test.describe.configure({ mode: 'parallel' });
for (const shot of shots()) {
  test(shot.id, async ({ page }) => {
    guardNetwork(page);
    await page.setViewportSize({ width: shot.display.width, height: shot.display.height });
    const path = join(OUT, `${shot.id}.png`);
    const kind = shot.kind;
    if (kind.type === 'showcase') return showcase(page, shot, kind.mission, kind.view);
    if (kind.type === 'phone' || kind.type === 'kit') return phoneOrKit(page, shot, kind);
    if (kind.type === 'fixture' || kind.type === 'scenario') {
      await page.clock.install({ time: new Date('2026-10-10T09:00:00Z') });
      const role = kind.type === 'fixture' ? kind.role : 'instructor';
      // The saved state carries its own language, which the game prefers to the query: set it to the shot's.
      const state = kind.type === 'fixture' ? JSON.parse(readFileSync(`tests/fixtures/legacy/${kind.fixture}.json`, 'utf8')).state : scenario(kind.scenario, shot.lang);
      const raw = JSON.stringify({ ...state, lang: shot.lang });
      await page.addInitScript(([k, value]) => { if (!sessionStorage.getItem(k!)) sessionStorage.setItem(k!, value!); }, [KEYS[role], raw]);
      await page.goto(DIST + query(shot, { role }));
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
