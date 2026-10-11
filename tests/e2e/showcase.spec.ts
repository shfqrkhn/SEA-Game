// War-room HUD and vehicle showcase (MPES §7.1, §10, §11): the default look of every view. The live lot shows the
// card's photoreal render; the student tracker shows the team's vehicle with its real purchases, as a slowly turning
// 3D model where WebGL works and as stacked still renders where it does not.
import { expect, test } from '@playwright/test';
import { collectConsoleErrors, expectAccessible, gameUrl, guardNetwork, withGpu, withoutWebgl } from './helpers.ts';
import { confirmDialog, instructorSetup, studentJoin } from './roles.ts';

async function record(page: import('@playwright/test').Page, round: number, lot: number, card: string, paid: number): Promise<void> {
  await page.selectOption('#pos-round', String(round));
  await page.selectOption('#pos-lot', String(lot));
  await page.fill('#card-id', card);
  await page.click('#load-card');
  await page.fill('#paid', String(paid));
  await page.click('#record-win');
}

async function trackerFor(browser: import('@playwright/test').Browser, mission: string) {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await withGpu(sp);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: [mission, 'TROOP'] });
  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 1, mission);
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  return { ip, sp };
}

test('3D showcase: the model turns by itself, follows recorded purchases, and can be paused and turned by keyboard', async ({ browser }) => {
  const { sp } = await trackerFor(browser, 'RECOVERY');
  const errors = collectConsoleErrors(sp);
  const showcase = sp.locator('#showcase');
  const stage = showcase.locator('[role="img"]');
  await expect(stage).toHaveAttribute('data-mode', '3d');
  await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  await expect(stage.locator('canvas')).toHaveCount(1);
  await expect(stage).toHaveAttribute('aria-label', 'Recovery vehicle. Installed parts: 0');
  await expect(stage).toHaveAttribute('data-layers', '');
  await expect(showcase.getByRole('radio')).toHaveCount(0);
  await expect(showcase).toContainText('Drag to turn the vehicle, or use the buttons.');

  await record(sp, 1, 7, 'ACC-F', 350000);
  await expect(stage).toHaveAttribute('data-layers', 'ACC-F');
  await expect(stage).toHaveAttribute('aria-label', 'Recovery vehicle. Installed parts: 1');
  // One part per mount: the dozer blade replaces the winch on the model; both stay listed.
  await record(sp, 2, 7, 'ACC-E', 600000);
  await expect(stage).toHaveAttribute('data-layers', 'ACC-E');
  await expect(showcase).toContainText('Recovery Winch Package');
  await expect(showcase).toContainText('Each mount shows its most recently recorded part');
  await record(sp, 3, 8, 'SE-G', 200000);
  await expect(showcase.locator('.badge')).toContainText('Validation Planning');
  await expect(stage).toHaveAttribute('data-layers', 'ACC-E');
  await expect(stage.locator('canvas')).toHaveCount(1);

  // WCAG 2.2.2: the turning can be paused, and the vehicle turned without a pointer.
  const pause = showcase.getByRole('button', { name: 'Pause turning' });
  await expect(pause).toHaveAttribute('aria-pressed', 'false');
  await pause.click();
  await expect(pause).toHaveAttribute('aria-pressed', 'true');
  const before = await stage.getAttribute('data-azimuth');
  await showcase.getByRole('button', { name: 'Turn left' }).click();
  await expect(stage).not.toHaveAttribute('data-azimuth', before ?? '');
  await expect(pause).toHaveAttribute('aria-pressed', 'true');
  await expectAccessible(sp, 'student tracker, 3D showcase');
  expect(errors).toEqual([]);
});

test('3D showcase: the confirmed vehicle is prepared during planning, and only then, so the tracker opens with it ready', async ({ browser }) => {
  const prepared = (page: import('@playwright/test').Page) => page.evaluate(() => performance.getEntriesByType('mark').map(m => m.name).filter(n => n.startsWith('sea-model:')));
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await withGpu(sp);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['MINE', 'TROOP'] });
  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 1, 'MINE');
  // Browsing missions decodes nothing; confirming one prepares that vehicle alone.
  await sp.selectOption('#plan-mission', 'RECCE');
  await sp.selectOption('#plan-mission', 'MINE');
  await sp.waitForTimeout(1000);
  expect(await prepared(sp)).toEqual([]);
  await sp.check('#plan-confirm');
  await expect.poll(() => prepared(sp), { timeout: 30_000 }).toEqual(['sea-model:mine-clearing']);
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  await expect(sp.locator('#showcase [role="img"]')).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  expect(await prepared(sp)).toEqual(['sea-model:mine-clearing']);
});

test('3D showcase does not turn by itself when the player prefers reduced motion', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const sp = await context.newPage();
  guardNetwork(sp);
  await withGpu(sp);
  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  const stage = sp.locator('#showcase [role="img"]');
  await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  await expect(sp.getByRole('button', { name: 'Pause turning' })).toHaveAttribute('aria-pressed', 'true');
  const azimuth = await stage.getAttribute('data-azimuth');
  await sp.waitForTimeout(1500);
  await expect(stage).toHaveAttribute('data-azimuth', azimuth ?? '');
});

test('stills fallback without WebGL: layers follow recorded purchases; one part per mount; process cards are badges', async ({ browser }) => {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await withoutWebgl(sp);
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
  await record(sp, 3, 8, 'SE-G', 200000);
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

// MPES §10.3 stills budgets on slow machines (CI root cause, 2026-10-10): image decoding runs off the main thread,
// so CPU throttling does not show its cost; the guard is that no decoded layer is ever decoded again. Every image
// element is stamped with its creation time: after a purchase only the new part is a new element; an angle change
// and a turntable step show only elements prepared in advance.
test('stills fallback decodes each layer once: purchases, angle changes and turntable steps reuse decoded images', async ({ browser }) => {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await withoutWebgl(sp);
  await sp.addInitScript(() => {
    const stamp = <T extends object>(el: T): T => Object.assign(el, { seaBorn: performance.now() });
    const create = Document.prototype.createElement;
    Document.prototype.createElement = function (this: Document, ...args: Parameters<Document['createElement']>) {
      return stamp(create.apply(this, args));
    } as typeof create;
    const NativeImage = window.Image;
    window.Image = function (width?: number, height?: number) { return stamp(new NativeImage(width, height)); } as unknown as typeof Image;
    // Background decodes (images not on screen) in flight at once: each competes with what the player is waiting
    // for (CI run 38133130929: four at once made a purchase take 117 ms, budget 100).
    let background = 0;
    const decode = HTMLImageElement.prototype.decode;
    HTMLImageElement.prototype.decode = function (this: HTMLImageElement) {
      if (this.isConnected) return decode.call(this);
      const w = window as unknown as { seaBackgroundMax: number };
      w.seaBackgroundMax = Math.max(w.seaBackgroundMax ?? 0, ++background);
      return decode.call(this).finally(() => { background--; });
    };
    // A machine that is never idle, like the CI runner of run 38106258905: idle callbacks run only at their timeout.
    window.requestIdleCallback = (callback, options) => window.setTimeout(() => callback({ didTimeout: true, timeRemaining: () => 0 }), options?.timeout ?? 2 ** 31 - 1);
  });
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['RECOVERY', 'TROOP'] });
  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 1, 'RECOVERY');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  const showcase = sp.locator('#showcase');
  await expect(showcase.locator('img[data-layer="base"]')).toHaveCount(1);
  const fresh = (since: number) => sp.evaluate(t => [...document.querySelectorAll<HTMLImageElement & { seaBorn: number }>('#showcase img')]
    .filter(img => img.seaBorn >= t).map(img => img.dataset.layer ?? '?'), since);
  const now = () => sp.evaluate(() => performance.now());

  await record(sp, 1, 7, 'ACC-F', 350000);
  await expect(showcase.locator('img[data-layer="ACC-F"]')).toHaveCount(1);
  // A loaded card is the part most likely recorded next: its layer decodes before the purchase, so recording one
  // never waits for a decode (CI run 38135172580: fresh layers took up to 190 ms, budget 100).
  await sp.selectOption('#pos-lot', '5');
  await sp.fill('#card-id', 'COM-E');
  await sp.click('#load-card');
  await expect(showcase).toHaveAttribute('data-prepared', 'true');
  let t = await now();
  await sp.fill('#paid', '600000');
  await sp.click('#record-win');
  await expect(showcase.locator('img[data-layer="COM-E"]')).toHaveCount(1);
  expect(await fresh(t), 'the loaded card was decoded before it was recorded').toEqual([]);

  await expect(showcase).toHaveAttribute('data-prepared', 'true');
  t = await now();
  await showcase.getByRole('radio', { name: 'Rear' }).check();
  await expect(showcase.locator('img[data-layer="base"]')).toHaveAttribute('data-angle', 'rear');
  expect(await fresh(t), 'the rear angle was decoded in advance').toEqual([]);

  // A person may scrub the moment the turntable opens and keep going (CI run 38106258905: the frames either side were
  // still waiting for idle time and two steps took 410 and 720 ms). No pause between steps.
  await expect(showcase).toHaveAttribute('data-prepared', 'true');
  t = await now();
  await showcase.getByRole('radio', { name: 'Turntable' }).check();
  await expect(showcase.locator('img[data-frame="0"]')).toHaveCount(1);
  expect(await fresh(t), 'the turntable frame was prepared in advance').toEqual([]);
  const scrub = showcase.getByRole('slider');
  await scrub.focus();
  const last = Number(await scrub.getAttribute('max'));
  for (const [key, frame] of [['ArrowRight', 1], ['ArrowRight', 2], ['ArrowLeft', 1], ['ArrowLeft', 0], ['End', last]] as const) {
    t = await now();
    await sp.keyboard.press(key);
    await expect(showcase.locator(`img[data-frame="${frame}"]`)).toHaveCount(1);
    expect(await fresh(t), `turntable frame ${frame} was prepared in advance`).toEqual([]);
  }
  expect(await sp.evaluate(() => (window as unknown as { seaBackgroundMax: number }).seaBackgroundMax),
    'background decodes run one at a time').toBe(1);
});

test('every vehicle has its showcase, in 3D and in stills, and every lot its card render', async ({ page, browser }) => {
  guardNetwork(page);
  for (const mission of ['COMBAT', 'RECCE', 'TROOP', 'COMMAND', 'RECOVERY', 'MINE']) {
    const context = await browser.newContext();
    const sp = await context.newPage();
    guardNetwork(sp);
    await withGpu(sp);
    await sp.goto(gameUrl('?role=student&lang=en'));
    await studentJoin(sp, 'SEA3-T2-0123456789ABCDEF', 1, mission);
    await sp.check('#plan-confirm');
    await sp.click('#student-start-auction');
    await confirmDialog(sp);
    await expect(sp.locator('#showcase [role="img"]'), mission).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
    await context.close();
  }
  // A software WebGL renderer (no GPU) gets the still renders, as a browser without WebGL does.
  await page.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  const software = await page.evaluate(() => {
    const gl = document.createElement('canvas').getContext('webgl2');
    const info = gl?.getExtension('WEBGL_debug_renderer_info');
    return !gl || /swiftshader|llvmpipe|basic render|software/i.test(String(gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER)));
  });
  if (software) await expect(page.locator('#showcase [role="img"]')).toHaveAttribute('data-mode', 'stills');
  await withoutWebgl(page);
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
  // Each card loads in a lot of its own category (lots 1-8: CAP, MOB, FP, PRO, COM, SA, ACC, SE).
  for (const [lot, card] of ['CAP-A', 'MOB-G', 'FP-C', 'PRO-E', 'COM-D', 'SA-F', 'ACC-B', 'SE-U'].entries()) {
    await page.selectOption('#pos-lot', String(lot + 1));
    await page.fill('#card-id', card);
    await page.click('#load-card');
    await expect(page.locator(`figure[data-card="${card}"] img.card-render`), card).toBeVisible();
  }
});

test('chooser: pre-rendered hero stills, truthfully described, and no 3D on the first screen (D-08)', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?lang=en'));
  const described = {
    Combat: 'Combat vehicle: eight-wheeled armoured vehicle with a gun turret',
    RECCE: 'RECCE vehicle with a raised sensor mast and a remote weapon station',
    'Troop Carrier': 'Troop carrier with a carrier module, slat armour and a remote weapon station',
    'Command Post': 'Command post with tall radio masts, a roof equipment rack and a sensor mast',
    Recovery: 'Recovery vehicle with a crane, a carrier module and a recovery winch',
    'Mine Clearing': 'Mine clearing vehicle with a front mine roller and a remote weapon station',
  };
  for (const [name, alt] of Object.entries(described)) {
    await page.getByRole('button', { name, exact: true }).click();
    await expect(page.locator('img.hero-still')).toHaveAttribute('alt', alt);
  }
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
