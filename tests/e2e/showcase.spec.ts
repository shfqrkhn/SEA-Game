// War-room HUD and vehicle showcase (MPES §7.1, §10, §11): the default look of every view. The live lot shows the
// card's photoreal render; the student tracker shows the team's vehicle with its real purchases, as a slowly turning
// 3D model where WebGL works and as stacked still renders where it does not.
import { expect, type Locator } from '@playwright/test';
import sharp from 'sharp';
import { collectConsoleErrors, expectAccessible, gameUrl, guardNetwork, test, withGpu, withoutWebgl } from './helpers.ts';
import { confirmDialog, instructorSetup, studentJoin } from './roles.ts';

async function record(page: import('@playwright/test').Page, round: number, lot: number, card: string, paid: number): Promise<void> {
  await page.selectOption('#pos-round', String(round));
  await page.selectOption('#pos-lot', String(lot));
  await page.fill('#card-id', card);
  await page.click('#load-card');
  await page.fill('#paid', String(paid));
  await page.click('#record-win');
}

/** Lowest still contrast of the brighter vehicle pixels allowed until G4 (see the per-mission tests). */
const STILLS_CONTRAST_FLOOR = 2.1;
/**
 * Lowest whole-vehicle contrast (the vehicle's silhouette, see vehicleContrast) allowed until G4 lifts the stills to 3
 * (MPES §10.5). Measured on 2026-10-14 on Chromium, Firefox and Edge: 3D 3.16 to 3.72, stills 1.56 to 1.66. These floors
 * may only rise: the 3D floor already holds the whole vehicle to WCAG 3:1.
 */
const WHOLE_CONTRAST_FLOOR = { live: 3, stills: 1.5 };
/**
 * Lowest contrast allowed in the turntable stills until G4: the frames that show the side turned from the render's key
 * light are darker than the front and rear views (least 1.60 bright, 1.32 whole on all three engines on 2026-10-16,
 * docs/verification/0.6.0.0.md; the floor is that, rounded down). An open
 * G4 item lifts every frame to 3 (MPES §10.5). This floor may only rise.
 */
const TURNTABLE_FLOOR = { bright: 1.55, whole: 1.3 };

/**
 * The vehicle's luminance contrast with its stage (WCAG 1.4.11 asks 3:1 of a graphic that carries meaning). A dim
 * laptop panel scales vehicle and stage alike, so the ratios survive it (G3 panel safety).
 * - `bright`: the median of the pixels at least 2.5 times as bright as the brightest corner, against that corner.
 * - `whole`: the vehicle's silhouette, found without looking at its brightness: the stage is shot on black and on
 *   white, and a pixel that stays the same is opaque vehicle (its soft shadow and the stage change). Its median
 *   luminance is compared with the same pixels of the stage shot with the vehicle (`vehicle`: the canvas or the still
 *   layers) hidden. Codex (G3 review) showed `bright` alone, and then a mask of the pixels that differ from the stage,
 *   passing a vehicle mostly as dark as its stage; the silhouette counts those pixels too.
 * - `share`: the part of the stage the silhouette covers.
 */
async function vehicleContrast(stage: Locator, vehicle: string, stageOnly?: { data?: Buffer }): Promise<{ bright: number; whole: number; share: number }> {
  const shoot = async () => sharp(await stage.screenshot()).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const style = (css: Record<string, string>, selector?: string) => (selector ? stage.locator(selector) : stage)
    .evaluateAll((els, c) => els.forEach(e => Object.assign((e as HTMLElement).style, c)), css);
  const { data: shown, info } = await shoot();
  await style({ background: '#000' });
  const { data: black } = await shoot();
  await style({ background: '#fff' });
  const { data: white } = await shoot();
  await style({ background: '' });
  // The bare stage does not change as the vehicle turns or the frames step: a caller measuring many poses passes
  // `stageOnly` and it is shot once (sixteen poses in one test outran their time on a loaded machine, 2026-10-16).
  let bare = stageOnly?.data;
  if (!bare) {
    await style({ visibility: 'hidden' }, vehicle);
    bare = (await shoot()).data;
    await style({ visibility: '' }, vehicle);
    if (stageOnly) stageOnly.data = bare;
  }
  const linear = (c: number) => (c /= 255) <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  const at = (data: Buffer, i: number) => 0.2126 * linear(data[i]!) + 0.7152 * linear(data[i + 1]!) + 0.0722 * linear(data[i + 2]!);
  const median = (values: number[]) => values.sort((a, b) => a - b)[values.length >> 1] ?? 0;
  const { width: w, height: h } = info;
  const corner = Math.max(...[[4, 4], [w - 5, 4], [4, h - 5], [w - 5, h - 5]].map(([x, y]) => at(shown, (y! * w + x!) * 3)));
  const lit: number[] = [], front: number[] = [], back: number[] = [];
  for (let i = 0; i < shown.length; i += 3) {
    const l = at(shown, i);
    if (l > corner * 2.5) lit.push(l);
    // Opaque: black and white behind it move the pixel by at most a tenth of the way.
    if (Math.max(white[i]! - black[i]!, white[i + 1]! - black[i + 1]!, white[i + 2]! - black[i + 2]!) > 25) continue;
    front.push(l); back.push(at(bare, i));
  }
  const [f, b] = [median(front), median(back)];
  return { bright: (median(lit) + 0.05) / (corner + 0.05), whole: (Math.max(f, b) + 0.05) / (Math.min(f, b) + 0.05), share: front.length / (w * h) };
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

for (const viewport of [{ width: 1280, height: 720 }, { width: 360, height: 740 }]) {
  test(`3D showcase at ${viewport.width} px: framed on the full kit at every turn, zooms, and has compact symbol controls`, async ({ browser }) => {
    // Owner FIX 2026-10-12: the fully kitted model fits the view; zoom in and out; short controls marked by signs.
    const { sp } = await trackerFor(browser, 'TROOP');
    await sp.setViewportSize(viewport);
    const showcase = sp.locator('#showcase'), stage = showcase.locator('[role="img"]');
    await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
    // The far ends of the catalogue: a rear trailer, a front blade, the tallest mast and sensor.
    for (const [round, lot, card] of [[1, 7, 'ACC-B'], [1, 5, 'COM-E'], [2, 7, 'ACC-C'], [2, 6, 'SA-D']] as const) await record(sp, round, lot, card, 900000);
    await expect(stage).toHaveAttribute('data-layers', 'ACC-B ACC-C COM-E SA-D');
    const button = (name: string) => showcase.getByRole('button', { name, exact: true });
    const signs = { 'Pause turning': '‖', 'Turn left': '↺', 'Turn right': '↻', 'Zoom out': '−', 'Zoom in': '+' };
    for (const [name, sign] of Object.entries(signs)) {
      await expect(button(name)).toHaveText(sign);
      await expect(button(name)).toHaveAttribute('title', name);
      const box = (await button(name).boundingBox())!;
      expect(box.width, name).toBeGreaterThanOrEqual(44);
      expect(box.x + box.width, name).toBeLessThanOrEqual(viewport.width);
    }
    await button('Pause turning').click();
    await expect(button('Pause turning')).toHaveText('▷');
    await expect(button('Pause turning')).toHaveAttribute('title', 'Resume turning');
    // Pause stops the model where it is: no coasting on, which on a slow renderer lasted many seconds.
    const held = await stage.getAttribute('data-azimuth');
    await sp.waitForTimeout(600);
    expect(await stage.getAttribute('data-azimuth'), 'paused means still').toBe(held);
    // The extent is the farthest corner of the full kit's bounding box from the frame centre (1 = the frame edge).
    const extent = async () => Number(await stage.getAttribute('data-extent'));
    // A turn eases over several frames, its tail long and slight: read the view once it has all but come to rest.
    const settled = async () => {
      let last = NaN;
      await expect.poll(async () => { const now = Number(await stage.getAttribute('data-azimuth')), moved = Math.abs(now - last); last = now; return moved; }, { intervals: [150], timeout: 10_000 }).toBeLessThan(0.01);
      return extent();
    };
    const extents: number[] = [];
    for (let i = 0; i < 16; i++) {
      const before = await stage.getAttribute('data-azimuth');
      await button('Turn left').click();
      await expect(stage).not.toHaveAttribute('data-azimuth', before ?? '');
      extents.push(await settled());
      expect(extents.at(-1), `turn ${i}`).toBeLessThanOrEqual(1);
    }
    expect(Math.max(...extents), 'the widest view fills the frame, not a speck in it').toBeGreaterThan(0.85);
    const zoom = async () => Number(await stage.getAttribute('data-zoom'));
    const start = await zoom(), framed = await settled();
    await button('Zoom in').click();
    await expect.poll(zoom).toBeLessThan(start);
    expect(await settled(), 'zooming in enlarges the vehicle').toBeGreaterThan(framed * 1.15);
    for (let i = 0; i < 12; i++) await button('Zoom out').click();
    const farthest = await zoom();
    expect(farthest).toBeGreaterThan(start);
    await button('Zoom out').click();
    expect(await zoom(), 'zoom out stops at its limit').toBe(farthest);
  });
}

// G3 touchpad and touch safety (MPES §10.2): the page scrolls past the stage, by wheel, touchpad or finger; only a drag turns it.
test('3D showcase never traps the page scroll: wheel and vertical swipes scroll the page, a drag turns the vehicle', async ({ browser }) => {
  const { sp } = await trackerFor(browser, 'RECOVERY');
  await sp.setViewportSize({ width: 360, height: 740 });
  const showcase = sp.locator('#showcase'), stage = showcase.locator('[role="img"]'), canvas = stage.locator('canvas');
  await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  await showcase.getByRole('button', { name: 'Pause turning', exact: true }).click();
  await canvas.scrollIntoViewIfNeeded();
  expect(await canvas.evaluate(c => getComputedStyle(c).touchAction), 'a vertical swipe on the stage scrolls the page').toBe('pan-y');
  const box = (await canvas.boundingBox())!, zoom = await stage.getAttribute('data-zoom');
  await sp.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  // Towards whichever end of the page has room.
  const top = await sp.evaluate(() => scrollY), up = top > 0;
  await sp.mouse.wheel(0, up ? -200 : 200);
  await expect.poll(async () => Math.abs(await sp.evaluate(() => scrollY) - top), 'a wheel or two-finger touchpad scroll over the stage scrolls the page').toBeGreaterThan(50);
  expect(await stage.getAttribute('data-zoom'), 'the wheel never zooms').toBe(zoom);
  const after = (await canvas.boundingBox())!, azimuth = await stage.getAttribute('data-azimuth');
  await sp.mouse.move(after.x + after.width * 0.3, after.y + after.height / 2);
  await sp.mouse.down();
  await sp.mouse.move(after.x + after.width * 0.7, after.y + after.height / 2, { steps: 8 });
  await sp.mouse.up();
  await expect(stage).not.toHaveAttribute('data-azimuth', azimuth ?? '');
});

// G3 (MPES §10.3): a driver reset, a GPU switch or sleep loses the graphics context; the stage must come back by itself.
test('3D showcase recovers a lost graphics context: it stops drawing, then draws the next purchase once restored', async ({ browser }) => {
  const { sp } = await trackerFor(browser, 'RECOVERY');
  const errors = collectConsoleErrors(sp);
  const stage = sp.locator('#showcase [role="img"]');
  await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  await sp.evaluate(() => {
    const gl = document.querySelector<HTMLCanvasElement>('#showcase canvas')!.getContext('webgl2')!;
    (window as unknown as { seaLose: WEBGL_lose_context }).seaLose = gl.getExtension('WEBGL_lose_context')!;
    (window as unknown as { seaLose: WEBGL_lose_context }).seaLose.loseContext();
  });
  await sp.waitForFunction(() => document.querySelector<HTMLCanvasElement>('#showcase canvas')!.getContext('webgl2')!.isContextLost());
  await record(sp, 1, 7, 'ACC-F', 350000);
  await expect(stage).toHaveAttribute('data-layers', 'ACC-F');
  await expect(stage).not.toHaveAttribute('data-drawn', 'ACC-F');
  await sp.evaluate(() => (window as unknown as { seaLose: WEBGL_lose_context }).seaLose.restoreContext());
  await expect(stage).toHaveAttribute('data-drawn', 'ACC-F', { timeout: 30_000 });
  // Again, as Firefox on a software renderer did in CI run 38577929333: a restore announced while the context is still
  // lost, then the real restore without a word. The stage must not take the announcement for a context, nor miss the return.
  await sp.evaluate(() => {
    const canvas = document.querySelector<HTMLCanvasElement>('#showcase canvas')!;
    (window as unknown as { seaLose: WEBGL_lose_context }).seaLose.loseContext();
    canvas.dispatchEvent(new Event('webglcontextrestored'));
  });
  await record(sp, 2, 7, 'ACC-E', 600000);
  await expect(stage).toHaveAttribute('data-layers', 'ACC-E');
  await sp.waitForTimeout(1000);
  await expect(stage, 'nothing is drawn on a context still lost').toHaveAttribute('data-drawn', 'ACC-F');
  await sp.evaluate(() => {
    const canvas = document.querySelector<HTMLCanvasElement>('#showcase canvas')!;
    // Silenced before the stage hears it: window listeners in the capture phase run before the canvas's own.
    window.addEventListener('webglcontextrestored', event => { if (event.target === canvas && event.isTrusted) event.stopImmediatePropagation(); }, { capture: true, once: true });
    (window as unknown as { seaLose: WEBGL_lose_context }).seaLose.restoreContext();
  });
  await expect(stage).toHaveAttribute('data-drawn', 'ACC-E', { timeout: 30_000 });
  expect(errors).toEqual([]);
});

// Verify of fe4df5d (Firefox, 12 workers): the stage's visibility observer reported the canvas hidden, before it was
// on the page, and never again once it was, so a stage in plain view drew nothing for a minute. Here every observation
// reports once, its first state, and never again: the worst a loaded browser did. The stage must still draw.
test('3D showcase draws though the browser reports its visibility only once', async ({ page }) => {
  guardNetwork(page);
  await withGpu(page);
  await page.addInitScript(() => {
    const Native = window.IntersectionObserver;
    // A plain function: the test compiler turns class private fields into helpers the page does not have.
    window.IntersectionObserver = function (this: IntersectionObserver, report: IntersectionObserverCallback) {
      const watching = new Map<Element, IntersectionObserver>();
      const unobserve = (target: Element) => { watching.get(target)?.disconnect(); watching.delete(target); };
      return Object.assign(this, {
        observe: (target: Element) => {
          unobserve(target);
          const once = new Native(entries => { unobserve(target); report(entries, this); });
          watching.set(target, once);
          once.observe(target);
        },
        unobserve,
        disconnect: () => { for (const target of [...watching.keys()]) unobserve(target); },
        takeRecords: () => [],
      });
    } as unknown as typeof IntersectionObserver;
  });
  await page.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  const stage = page.locator('#showcase [role="img"]');
  await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  await expect(stage, 'the stage in view has drawn').toHaveAttribute('data-drawn', /.*/, { timeout: 15_000 });
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

// G3, CI run 38958721130: on a machine without a graphics card the browser reads every new canvas frame back before it
// shows it, waiting for the whole draw, and a purchase's draw also redrew the sun's shadow map: about twice a turning
// draw (2-core trace: 14 ms against 7), so the purchase took 133 ms to appear (budget 100). The part is drawn first;
// its shadow follows on the next paced draw. The shadow pass is the draw into the 1024 px shadow map (its viewport).
test('3D showcase: a purchase is drawn at once without redrawing the shadow, which follows in the next draw', async ({ browser }) => {
  const sp = await (await browser.newContext({ reducedMotion: 'reduce' })).newPage();
  guardNetwork(sp);
  await withGpu(sp);
  await sp.addInitScript(() => {
    const draws: { layers: string; shadow: boolean }[] = [];
    (window as unknown as { seaDraws: typeof draws }).seaDraws = draws;
    let shadow = false;
    const viewport = WebGL2RenderingContext.prototype.viewport;
    WebGL2RenderingContext.prototype.viewport = function (this: WebGL2RenderingContext, x: number, y: number, w: number, h: number) {
      if (w === 1024 && h === 1024) shadow = true;
      return viewport.call(this, x, y, w, h);
    };
    document.addEventListener('sea-drawing', () => { shadow = false; }, { capture: true });
    document.addEventListener('sea-draw', event => {
      const layers = (event.target as Element).closest('[data-layers]')?.getAttribute('data-layers') ?? '';
      draws.push({ layers, shadow });
    }, { capture: true });
  });
  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, 'SEA3-T2-0123456789ABCDEF', 1, 'RECOVERY');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  const stage = sp.locator('#showcase [role="img"]');
  await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  const draws = () => sp.evaluate(() => (window as unknown as { seaDraws: { layers: string; shadow: boolean }[] }).seaDraws);
  await expect.poll(async () => (await draws()).length, { timeout: 30_000 }).toBeGreaterThan(0);
  await sp.waitForTimeout(1000);
  const before = (await draws()).length;
  await record(sp, 1, 7, 'ACC-F', 350000);
  await expect(stage).toHaveAttribute('data-drawn', 'ACC-F', { timeout: 30_000 });
  await sp.waitForTimeout(1500);
  const after = (await draws()).slice(before);
  const first = after.findIndex(d => d.layers === 'ACC-F');
  expect(after[first], 'the draw that first shows the purchase').toEqual({ layers: 'ACC-F', shadow: false });
  expect(after.slice(first + 1).filter(d => d.shadow), 'the shadow, in a later draw').toHaveLength(1);
  expect(after.length - first, 'then the still stage stops drawing').toBeLessThanOrEqual(2);
});

// G3, CI run 39484500911: a purchase took 121 ms to appear (budget 100). Its draw began only in the next animation frame,
// after the browser had laid out the rebuilt page, and without a graphics card the browser then waited for the whole
// draw; it also sent the new part's geometry and textures to the graphics card, which compiling its shader had not.
// Now the parts are sent once, before any purchase, and a purchase is drawn inside its own click.
test('3D showcase: a purchase is drawn inside its click and sends nothing new to the graphics card', async ({ browser }) => {
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(sp);
  await withGpu(sp);
  await sp.addInitScript(() => {
    const draws: { layers: string; inClick: boolean; sent: number }[] = [];
    (window as unknown as { seaDraws: typeof draws }).seaDraws = draws;
    let clicking = false, sent = 0;
    document.addEventListener('click', () => { clicking = true; }, { capture: true });
    addEventListener('click', () => { clicking = false; });
    const proto = WebGL2RenderingContext.prototype as unknown as Record<string, (...args: unknown[]) => unknown>;
    for (const name of ['bufferData', 'texImage2D', 'texSubImage2D', 'texStorage2D', 'compressedTexImage2D']) {
      const original = proto[name]!;
      proto[name] = function (this: unknown, ...args: unknown[]) { sent++; return original.apply(this, args); };
    }
    document.addEventListener('sea-drawing', () => { sent = 0; }, { capture: true });
    document.addEventListener('sea-draw', event => {
      const layers = (event.target as Element).closest('[data-layers]')?.getAttribute('data-layers') ?? '';
      draws.push({ layers, inClick: clicking, sent });
    }, { capture: true });
  });
  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, 'SEA3-T2-0123456789ABCDEF', 1, 'RECOVERY');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  const stage = sp.locator('#showcase [role="img"]');
  await expect(stage).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
  const draws = () => sp.evaluate(() => (window as unknown as { seaDraws: { layers: string; inClick: boolean; sent: number }[] }).seaDraws);
  await expect.poll(async () => (await draws()).length, { timeout: 30_000 }).toBeGreaterThan(3);
  await sp.waitForTimeout(1000);
  const before = (await draws()).length;
  await record(sp, 1, 7, 'ACC-F', 350000);
  await expect(stage).toHaveAttribute('data-drawn', 'ACC-F', { timeout: 30_000 });
  const first = (await draws()).slice(before).find(d => d.layers === 'ACC-F');
  expect(first, 'the draw that first shows the purchase').toEqual({ layers: 'ACC-F', inClick: true, sent: 0 });
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

// Every vehicle has its showcase in 3D and in stills, and (G3 panel safety) on a dim laptop panel it still stands out
// from its stage in both, at every angle the player can see. One test a vehicle and a renderer: six in one test outran
// its time on a loaded CI runner (run 38577929333). Every angle: one sample at wherever the pause landed passed and
// failed by timing, because the far side of the vehicle was dark for half of every turn (run 38609311138).
async function joinMission(page: import('@playwright/test').Page, mission: string): Promise<void> {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, mission);
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
}

/** The 3D showcase turns in sixteen steps (TURN_STEP, a sixteenth of a turn); each test measures half a turn. */
const TURN_STEPS = 16, HALF = TURN_STEPS / 2;

/** How far `to` lies from `from` round the turn, in sixteenths (0 to 15.99). */
const sixteenths = (from: number, to: number) => ((((to - from) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) / (Math.PI / 8);

/** The stills turntable has 24 frames; each test checks a third of them (the first also the front and rear views). */
const STILL_FRAMES = 24, FRAMES_PER_TEST = 8;

for (const mission of ['COMBAT', 'RECCE', 'TROOP', 'COMMAND', 'RECOVERY', 'MINE']) {
  for (const half of [0, 1]) test(`${mission} vehicle in 3D stands out from its stage on a dim panel at turn steps ${half * HALF} to ${half * HALF + HALF - 1}`, async ({ page }, info) => {
    // Under reduced motion the vehicle does not turn by itself, so every test starts from the same opening pose and the
    // two halves together cover all sixteen steps; sixteen in one test outran its time on a loaded machine (2026-10-16).
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await withGpu(page);
    await joinMission(page, mission);
    const model = page.locator('#showcase [role="img"]');
    await expect(model).toHaveAttribute('data-ready', 'true', { timeout: 30_000 });
    // Ready means the scene is set, not drawn (verify of fe4df5d, Firefox, 12 workers): the shots wait for a draw.
    await expect(model).toHaveAttribute('data-drawn');
    const canvas = model.locator('canvas');
    await canvas.evaluate(c => { c.addEventListener('sea-draw', () => { c.dataset['draws'] = String(Number(c.dataset['draws'] ?? 0) + 1); }); });
    const pose = async () => Number(await model.getAttribute('data-azimuth'));
    const opening = await pose();
    const turn = async () => {
      const drawn = Number(await canvas.getAttribute('data-draws') ?? 0);
      await page.getByRole('button', { name: 'Turn right', exact: true }).click();
      await expect.poll(async () => Number(await canvas.getAttribute('data-draws') ?? 0)).toBeGreaterThan(drawn);
    };
    for (let step = 0; step < half * HALF; step++) await turn();
    const steps: string[] = [], bare = {};
    for (let step = half * HALF; step < half * HALF + HALF; step++) {
      // A draw alone does not prove a new pose (Codex D11: a turn by nothing still draws): each shot must be the
      // vehicle turned by exactly `step` sixteenths from the opening pose.
      const at = sixteenths(opening, await pose());
      expect.soft(Math.min(Math.abs(at - step), TURN_STEPS - Math.abs(at - step)), `pose of step ${step}`).toBeLessThan(0.01);
      const live = await vehicleContrast(model, 'canvas', bare);
      steps.push(`${step}:${live.bright.toFixed(2)}/${live.whole.toFixed(2)}`);
      expect.soft(live.share, `3D vehicle covers its stage, step ${step}`).toBeGreaterThan(0.05);
      expect.soft(live.bright, `3D, step ${step}`).toBeGreaterThanOrEqual(3);
      expect.soft(live.whole, `3D whole vehicle, step ${step}`).toBeGreaterThanOrEqual(WHOLE_CONTRAST_FLOOR.live);
      if (step < half * HALF + HALF - 1) await turn();
    }
    info.annotations.push({ type: 'contrast', description: `${mission} 3D from ${opening.toFixed(3)} bright/whole by step: ${steps.join(' ')}` });
  });

  for (let part = 0; part < STILL_FRAMES / FRAMES_PER_TEST; part++) test(`${mission} vehicle in stills stands out from its stage on a dim panel${part === 0 ? ' in the front and rear views and' : ' at'} turntable frames ${part * FRAMES_PER_TEST} to ${part * FRAMES_PER_TEST + FRAMES_PER_TEST - 1}`, async ({ page }, info) => {
    // Every view and all 24 frames in one test outran its time on a slow runner (run 38921636256, Edge, frame 23 of
    // 24 at 121 s): the parts together cover them all.
    await withoutWebgl(page);
    await joinMission(page, mission);
    const stage = page.locator('#showcase .showcase-stage').first();
    const shown = async (selector: string) => {
      const base = page.locator(`#showcase img[data-layer="base"]${selector}`);
      await expect(base).toHaveCount(1);
      await expect.poll(() => base.evaluate(i => (i as HTMLImageElement).complete && (i as HTMLImageElement).naturalWidth > 0)).toBe(true);
    };
    const views: string[] = [], bare = {};
    // The Cycles stills are darker than the real-time model (front and rear 2.11 to 2.24 on 2026-10-14): held there
    // until the G4 re-render lifts them to 3 (MPES §10.5). These floors may only rise.
    for (const view of part === 0 ? ['front', 'rear'] : []) {
      await page.locator(`#showcase-view-${view}`).check();
      await shown(`[data-angle="${view}"]`);
      const still = await vehicleContrast(stage, 'img', bare);
      views.push(`${view}:${still.bright.toFixed(2)}/${still.whole.toFixed(2)}`);
      expect.soft(still.share, `still vehicle covers its stage, ${view}`).toBeGreaterThan(0.05);
      expect.soft(still.bright, `stills, ${view}`).toBeGreaterThanOrEqual(STILLS_CONTRAST_FLOOR);
      expect.soft(still.whole, `stills whole vehicle, ${view}`).toBeGreaterThanOrEqual(WHOLE_CONTRAST_FLOOR.stills);
    }
    await page.locator('#showcase-view-turntable').check();
    const turn = page.locator('#showcase-turn');
    // The parts cover every frame only while the turntable has exactly STILL_FRAMES of them.
    expect(Number(await turn.getAttribute('max')) + 1, 'turntable frames').toBe(STILL_FRAMES);
    for (let frame = part * FRAMES_PER_TEST; frame < (part + 1) * FRAMES_PER_TEST; frame++) {
      await turn.fill(String(frame));
      await shown(`[data-frame="${frame}"]`);
      const still = await vehicleContrast(stage, 'img', bare);
      views.push(`t${frame}:${still.bright.toFixed(2)}/${still.whole.toFixed(2)}`);
      expect.soft(still.share, `still vehicle covers its stage, turntable ${frame}`).toBeGreaterThan(0.05);
      expect.soft(still.bright, `stills, turntable ${frame}`).toBeGreaterThanOrEqual(TURNTABLE_FLOOR.bright);
      expect.soft(still.whole, `stills whole vehicle, turntable ${frame}`).toBeGreaterThanOrEqual(TURNTABLE_FLOOR.whole);
    }
    info.annotations.push({ type: 'contrast', description: `${mission} stills bright/whole by view: ${views.join(' ')}` });
  });
}

test('a software renderer gets the stills, and every lot its card render', async ({ page }) => {
  guardNetwork(page);
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
