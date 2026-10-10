// V1 HUD prototype (MPES §7.1, §10, §17): behind ?hud=1, the instructor live lot shows the photoreal card
// render and the student tracker shows the pre-rendered showcase, driven by the real domain.
import { expect, test } from '@playwright/test';
import { expectAccessible, gameUrl, guardNetwork } from './helpers.ts';
import { confirmDialog, instructorSetup, studentJoin } from './roles.ts';

test('HUD prototype: showcase layers follow recorded purchases', async ({ browser }) => {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await ip.goto(gameUrl('?role=instructor&lang=en&hud=1'));
  await expect(ip.locator('html')).toHaveAttribute('data-hud', 'on');
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['RECOVERY', 'TROOP'] });

  await sp.goto(gameUrl('?role=student&lang=en&hud=1'));
  await studentJoin(sp, code, 1, 'RECOVERY');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);

  const showcase = sp.locator('#showcase');
  await expect(showcase).toBeVisible();
  await expect(showcase.locator('img[data-layer="base"]')).toHaveCount(1);
  await expect(showcase.locator('img[data-layer="ACC-F"]')).toHaveCount(0);
  await expect(showcase.locator('[role="img"]')).toHaveAttribute('aria-label', 'Recovery vehicle. Installed parts: 0');

  // Record the winch at round 1, lot 7 (ACCESSORIES slot).
  await sp.selectOption('#pos-lot', '7');
  await sp.fill('#card-id', 'ACC-F');
  await sp.click('#load-card');
  await sp.fill('#paid', '350000');
  await sp.click('#record-win');
  await expect(showcase.locator('img[data-layer="ACC-F"]')).toHaveCount(1);
  await expect(showcase.locator('[role="img"]')).toHaveAttribute('aria-label', 'Recovery vehicle. Installed parts: 1');
  await expect(showcase).toContainText('Recovery Winch Package');

  // Rear angle and turntable.
  await showcase.getByRole('radio', { name: 'Rear' }).check();
  await expect(showcase.locator('img[data-layer="base"]')).toHaveAttribute('data-angle', 'rear');
  await showcase.getByRole('radio', { name: 'Turntable' }).check();
  // The turntable shows the base vehicle only: its text alternative and a visible note must say so.
  await expect(showcase.locator('[role="img"]')).toHaveAttribute('aria-label', 'Recovery vehicle. Turntable: base vehicle without installed parts.');
  await expect(showcase).toContainText('Turntable: base vehicle without installed parts.');
  const scrub = showcase.getByRole('slider');
  await scrub.focus();
  await sp.keyboard.press('ArrowRight');
  await expect(scrub).toHaveValue('1');
  await expect(showcase.locator('img[data-frame="1"]')).toHaveCount(1);
  await expectAccessible(sp, 'HUD tracker');

  await expectAccessible(ip, 'HUD auction');
});

test('HUD prototype: the live lot shows the photoreal card render when one exists', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en&hud=1'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'RECOVERY');
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  await page.selectOption('#pos-lot', '5');
  await page.fill('#card-id', 'COM-E');
  await page.click('#load-card');
  await expect(page.locator('figure[data-card="COM-E"] img.card-render')).toBeVisible();
  await page.selectOption('#pos-lot', '1');
  await page.fill('#card-id', 'CAP-A');
  await page.click('#load-card');
  await expect(page.locator('figure[data-card="CAP-A"] svg')).toBeVisible(); // no render yet: SVG fallback
});

test('HUD chooser: the hero still is described truthfully (only the parts it shows)', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?lang=en&hud=1'));
  await expect(page.locator('img.hero-still')).toHaveAttribute('alt', 'Recovery vehicle with a carrier module, long-range radios and a recovery winch');
  await expect(page.locator('a[data-role="student"]')).toHaveAttribute('href', /hud=1/);
});

test('without the flag, the current interface is unchanged', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await expect(page.locator('html')).not.toHaveAttribute('data-hud', /.*/);
});
