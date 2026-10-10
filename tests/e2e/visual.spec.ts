// Screenshot baselines (MPES §16.3): every view of both roles in each phase a legacy fixture reaches, both themes
// on the first screen, and the showcase for every vehicle and angle. Chromium only: the baselines are pixels.
// Update deliberately with `npx playwright test tests/e2e/visual.spec.ts --update-snapshots` and review the diff.
import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { gameUrl, guardNetwork, withoutWebgl } from './helpers.ts';
import { confirmDialog, studentJoin } from './roles.ts';

test.skip(({ browserName }) => browserName !== 'chromium', 'pixel baselines are recorded in Chromium');

const SHOT = { maxDiffPixelRatio: 0.01, animations: 'disabled', caret: 'hide' } as const;
const fixture = (name: string) => JSON.stringify(JSON.parse(readFileSync(`tests/fixtures/legacy/${name}.json`, 'utf8')).state);

async function seeded(page: Page, key: string, name: string, query: string): Promise<void> {
  guardNetwork(page);
  await page.clock.install({ time: new Date('2026-10-10T09:00:00Z') });
  await page.addInitScript(([k, raw]) => { if (!sessionStorage.getItem(k!)) sessionStorage.setItem(k!, raw!); }, [key, fixture(name)]);
  await page.goto(gameUrl(query));
  await page.waitForLoadState('load');
  await page.evaluate(() => Promise.all([...document.images].map(img => img.decode().catch(() => undefined))));
}

for (const theme of ['dark', 'light'] as const) {
  test(`first screen, ${theme} theme`, async ({ page }) => {
    guardNetwork(page);
    await page.goto(gameUrl(`?lang=en${theme === 'light' ? '&theme=light' : ''}`));
    await page.evaluate(() => Promise.all([...document.images].map(img => img.decode())));
    await expect(page).toHaveScreenshot(`chooser-${theme}.png`, SHOT);
  });
}

for (const name of ['instructor-setup', 'instructor-planning', 'instructor-auction-open-paused', 'instructor-build', 'instructor-closed']) {
  test(`instructor view: ${name}`, async ({ page }) => {
    await seeded(page, 'SEA_INSTRUCTOR_V300', name, '?role=instructor&lang=en');
    await expect(page).toHaveScreenshot(`${name}.png`, { ...SHOT, fullPage: true, mask: [page.locator('.session-code, #timer')] });
  });
}

for (const name of ['student-practice', 'student-planning-fr', 'student-auction', 'student-build', 'student-closed']) {
  test(`student view: ${name}`, async ({ page }) => {
    await seeded(page, 'SEA_STUDENT_V300', name, '?role=student');
    await expect(page).toHaveScreenshot(`${name}.png`, { ...SHOT, fullPage: true });
  });
}

for (const mission of ['COMBAT', 'RECCE', 'TROOP', 'COMMAND', 'RECOVERY', 'MINE']) {
  test(`showcase stills: ${mission}, every angle`, async ({ page }) => {
    guardNetwork(page);
    await withoutWebgl(page);
    await page.goto(gameUrl('?role=student&lang=en'));
    await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, mission);
    await page.check('#plan-confirm');
    await page.click('#student-start-auction');
    await confirmDialog(page);
    // One part in each of seven slots, so every vehicle shows a representative build (at most two wins a round).
    const wins = [[1, 1, 'CAP-E', 350000], [1, 3, 'FP-B', 500000], [2, 6, 'SA-B', 600000], [2, 4, 'PRO-C', 350000],
      [3, 5, 'COM-B', 450000], [3, 2, 'MOB-D', 500000], [4, 7, 'ACC-G', 400000]] as const;
    for (const [round, lot, card, paid] of wins) {
      await page.selectOption('#pos-round', String(round));
      await page.selectOption('#pos-lot', String(lot));
      await page.fill('#card-id', card); await page.click('#load-card'); await page.fill('#paid', String(paid));
      await page.click('#record-win');
    }
    const stage = page.locator('#showcase [role="img"]');
    for (const view of ['front', 'rear', 'turntable'] as const) {
      await page.check(`#showcase-view-${view}`);
      await page.evaluate(() => Promise.all([...document.querySelectorAll<HTMLImageElement>('#showcase img')].map(img => img.decode())));
      await expect(stage).toHaveScreenshot(`showcase-${mission.toLowerCase()}-${view}.png`, SHOT);
    }
  });
}
