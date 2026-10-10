// War-room HUD and pre-rendered showcase (MPES §7.1, §10, §11): the default look of every view. The live lot
// shows the card's photoreal render; the student tracker stacks the layers of the team's real purchases.
import { expect, test } from '@playwright/test';
import { expectAccessible, gameUrl, guardNetwork } from './helpers.ts';
import { confirmDialog, instructorSetup, studentJoin } from './roles.ts';

async function record(page: import('@playwright/test').Page, round: number, lot: number, card: string, paid: number): Promise<void> {
  await page.selectOption('#pos-round', String(round));
  await page.selectOption('#pos-lot', String(lot));
  await page.fill('#card-id', card);
  await page.click('#load-card');
  await page.fill('#paid', String(paid));
  await page.click('#record-win');
}

test('showcase layers follow recorded purchases; one part per mount; process cards are badges', async ({ browser }) => {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  await expect(ip.locator('html')).toHaveAttribute('data-theme', 'dark');
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['RECOVERY', 'TROOP'] });
  await expect(ip.locator('.card-figure img.card-render')).toBeVisible();

  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 1, 'RECOVERY');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);

  const showcase = sp.locator('#showcase');
  const stage = showcase.locator('[role="img"]');
  await expect(showcase.locator('img[data-layer="base"]')).toHaveCount(1);
  await expect(stage).toHaveAttribute('aria-label', 'Recovery vehicle. Installed parts: 0');
  await expect(sp.locator('canvas')).toHaveCount(0);

  await record(sp, 1, 7, 'ACC-F', 350000);
  await expect(showcase.locator('img[data-layer="ACC-F"]')).toHaveCount(1);
  await expect(stage).toHaveAttribute('aria-label', 'Recovery vehicle. Installed parts: 1');
  await expect(showcase).toContainText('Recovery Winch Package');

  // A second winch-mount part (dozer blade) replaces the winch in the picture; both stay listed.
  await record(sp, 2, 7, 'ACC-E', 600000);
  await expect(showcase.locator('img[data-layer="ACC-E"]')).toHaveCount(1);
  await expect(showcase.locator('img[data-layer="ACC-F"]')).toHaveCount(0);
  await expect(showcase).toContainText('Recovery Winch Package');
  await expect(showcase).toContainText('Each mount shows its most recently recorded part');

  // A process card has no geometry: it shows as a badge.
  await record(sp, 3, 2, 'SE-G', 200000);
  await expect(showcase.locator('.badge')).toContainText('Validation Planning');
  await expect(showcase.locator('img[data-layer="SE-G"]')).toHaveCount(0);

  // Rear angle and turntable.
  await showcase.getByRole('radio', { name: 'Rear' }).check();
  await expect(showcase.locator('img[data-layer="base"]')).toHaveAttribute('data-angle', 'rear');
  await showcase.getByRole('radio', { name: 'Turntable' }).check();
  await expect(stage).toHaveAttribute('aria-label', 'Recovery vehicle. Turntable: base vehicle without installed parts.');
  await expect(showcase).toContainText('Turntable: base vehicle without installed parts.');
  const scrub = showcase.getByRole('slider');
  await scrub.focus();
  await sp.keyboard.press('ArrowRight');
  await expect(scrub).toHaveValue('1');
  await expect(showcase.locator('img[data-frame="1"]')).toHaveCount(1);
  await expectAccessible(sp, 'student tracker');
  await expectAccessible(ip, 'instructor auction');
});

test('every vehicle has its showcase, and every lot its card render', async ({ page }) => {
  guardNetwork(page);
  for (const mission of ['COMBAT', 'RECCE', 'TROOP', 'COMMAND', 'RECOVERY', 'MINE']) {
    await page.goto(gameUrl('?role=student&lang=en'));
    await page.evaluate(() => sessionStorage.clear());
    await page.reload();
    await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, mission);
    await page.check('#plan-confirm');
    await page.click('#student-start-auction');
    await confirmDialog(page);
    await expect(page.locator('#showcase img[data-layer="base"]'), mission).toHaveCount(1);
  }
  for (const card of ['CAP-A', 'MOB-G', 'FP-C', 'PRO-E', 'COM-D', 'SA-F', 'ACC-B', 'SE-U']) {
    await page.fill('#card-id', card);
    await page.click('#load-card');
    await expect(page.locator(`figure[data-card="${card}"] img.card-render`), card).toBeVisible();
  }
});

test('chooser: pre-rendered hero still, truthfully described, and no 3D on the first screen (D-08)', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?lang=en'));
  await expect(page.locator('img.hero-still')).toHaveAttribute('alt', 'Recovery vehicle with a carrier module, long-range radios and a recovery winch');
  await page.waitForTimeout(300);
  await expect(page.locator('canvas')).toHaveCount(0);
});

test('projector theme: switched by hand, kept on navigation, and accessible (MPES §7.1)', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?lang=en'));
  await page.click('#theme-toggle');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page).toHaveURL(/theme=light/);
  await expectAccessible(page, 'chooser, projector theme');
  await page.click('a[data-role="student"]');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.click('#menu-button');
  await page.locator('dialog button[data-value="theme"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page).not.toHaveURL(/theme=light/);
});
