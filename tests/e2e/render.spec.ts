// MPES §14 command response: a command, a saved field or a status message rebuilds the view once, never twice (G3: each
// command used to render through the controller's subscription and again in the view, doubling the click-to-paint time).
import { expect, type Page } from '@playwright/test';
import { build } from 'esbuild';
import { gameUrl, guardNetwork, test } from './helpers.ts';
import { confirmDialog, instructorLot, instructorSetup, studentJoin } from './roles.ts';
import { TRACKER_OK } from '../perf/measure.ts';

/** Counts re-renders: the view announces each one on the document (RENDERED, source/ui/dom.ts). */
async function countRenders(page: Page): Promise<void> {
  await page.evaluate(() => {
    const w = window as unknown as { seaRenders: number };
    w.seaRenders = 0;
    document.addEventListener('sea-rendered', () => { w.seaRenders++; });
  });
}
const renders = (page: Page) => page.evaluate(() => { const w = window as unknown as { seaRenders: number }; const n = w.seaRenders; w.seaRenders = 0; return n; });

test('each command, saved field and message renders the view once', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await countRenders(page);
  await page.click('#generate');
  expect(await renders(page), 'command').toBe(1);
  await page.click('#start-practice');
  expect(await renders(page), 'command').toBe(1);
  await page.click('#lang-toggle');
  expect(await renders(page), 'language').toBe(1);

  await page.goto(gameUrl('?role=student&lang=en'));
  await countRenders(page);
  await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await page.selectOption('#join-mission', 'RECOVERY');
  await renders(page);
  await page.click('#join');
  expect(await renders(page), 'join').toBe(1);
  await page.click('#record-practice'); await page.click('#student-planning');
  await renders(page);
  // A field that saves as you type: one render per committed value.
  await page.locator('#plan-wtp').pressSequentially('5');
  expect(await renders(page), 'saved field').toBe(1);
});

// G3 CI run 39508660281: every render replaced the whole page, so the browser restyled and laid out all of it after
// each command (about 10 ms of a purchase at 4x CPU locally, 30 on the CI runner, over the 100 ms budget). A render
// now changes only what changed: an element that is the same before and after is the same element, keeps its focus
// and its scroll, and costs no new layout.
test('a render keeps every unchanged element, its focus and its scroll', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  // The elements on the page now; afterwards, those of them that were replaced (no longer on the page).
  const tag = () => page.evaluate(() => {
    const els = [...document.querySelectorAll('.topbar .brand, #lang-toggle, #menu-button, #card-id, #main h1')];
    (window as unknown as { seaTagged: Element[] }).seaTagged = els;
    return els.length;
  });
  const replaced = () => page.evaluate(() => (window as unknown as { seaTagged: Element[] }).seaTagged
    .filter(el => !el.isConnected).map(el => el.id || el.className || el.tagName));
  expect(await tag()).toBe(5);
  await page.fill('#card-id', 'CAP-A');
  await page.click('#load-card');
  expect(await replaced(), 'after loading a card').toEqual([]);
  await page.fill('#paid', '400000');
  await page.click('#record-win');
  await expect(page.locator('td', { hasText: 'CAP-A' })).toHaveCount(1);
  expect(await replaced(), 'after recording a purchase').toEqual([]);

  // A scrolled table keeps its scroll, and a focused button its focus, through the next command.
  const wrap = page.locator('.table-wrap').filter({ has: page.locator('td', { hasText: 'CAP-A' }) });
  await page.evaluate(() => document.styleSheets[0]!.insertRule('.table-wrap table { min-width: 3000px; }', document.styleSheets[0]!.cssRules.length));
  await expect(wrap).toHaveAttribute('tabindex', '0');
  await wrap.evaluate(w => { w.scrollLeft = 200; });
  await page.fill('#card-id', 'CAP-B');
  await page.click('#load-card'); // not this lot's card: the view renders with a message
  await expect(page.locator('.status-line')).toContainText('does not belong');
  expect(await wrap.evaluate(w => w.scrollLeft), 'the table scrolled').toBe(200);
  await page.locator('#lang-toggle').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#lang-toggle'), 'the button pressed').toBeFocused();
  expect(await replaced(), 'after a language change').toEqual([]);
});

// Codex on the morph (G3): a field that saves as you type kept the listeners of the render that built it, with that
// render's value, so on the next lot a value equal to the last lot's was taken as unchanged and never saved.
test('a kept field saves against the current value, not the one it was built with', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  await page.locator('details:has(#scratch-wtp) > summary').click();
  await page.locator('#scratch-wtp').pressSequentially('42');
  await page.fill('#card-id', 'CAP-A');
  await page.click('#load-card');
  await page.fill('#paid', '400000');
  await page.click('#record-win');
  await expect(page.locator('#track-heading')).toHaveText('Round 1 · Lot 2 of 10');
  await expect(page.locator('#scratch-wtp')).toHaveValue('');
  await page.locator('#scratch-wtp').fill('42'); // one input event, as a paste
  await page.reload();
  await expect(page.locator('#track-heading')).toHaveText('Round 1 · Lot 2 of 10');
  await expect(page.locator('#scratch-wtp'), 'lot 2 note saved').toHaveValue('42');
});

// Codex on the morph (G3): a kept field given back its saved value tidied (0123 saved as 123) lost its caret to the
// end, so the next digit went in the wrong place; a select given a new chosen option kept the old one.
test('a kept field keeps its caret when its saved value is tidied', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
  const field = page.locator('#plan-wtp');
  await field.fill('123');
  await field.press('Home');
  await page.keyboard.type('0');
  await expect(field).toHaveValue('123');
  expect(await field.evaluate((f: HTMLInputElement) => [f.selectionStart, f.selectionEnd])).toEqual([1, 1]);
  await page.keyboard.type('4');
  await expect(field).toHaveValue('1423');
});

test('morph keeps a select on the option the new page chose, when that option is new', async ({ page }) => {
  const { outputFiles } = await build({ entryPoints: ['source/ui/dom.ts'], bundle: true, format: 'iife', globalName: 'seaDom', write: false });
  await page.setContent('<div id="live"></div>');
  await page.addScriptTag({ content: outputFiles[0]!.text });
  expect(await page.evaluate(() => {
    const { h, morph } = (window as unknown as { seaDom: typeof import('../../source/ui/dom.ts') }).seaDom;
    const page = (chosen: string, ...values: string[]) => {
      const next = document.createElement('div');
      next.append(h('select', { id: 'pick' }, ...values.map(value => h('option', { value, text: value, selected: value === chosen }))));
      return next;
    };
    const live = document.getElementById('live')!;
    morph(live, page('A', 'A'));
    const select = live.querySelector('select')!;
    morph(live, page('B', 'A', 'B'));
    return [live.querySelector('select') === select, select.value];
  })).toEqual([true, 'B']);
});

/** Opens every closed panel the reader can see, nested ones as they appear; returns how many are open. */
async function openAll(page: Page): Promise<number> {
  const closed = page.locator('details:not([open]) > summary').filter({ visible: true });
  while (await closed.count()) await closed.first().click();
  return page.locator('details[open]').count();
}

// G3: a render rebuilt every panel closed, so typing in the tracker's scratch notes hid the field after the first
// character (it saves as you type), and an opened guide, ledger or team list shut on the next click elsewhere.
// A panel the reader opened stays open across renders; only the reader closes it.
test('a panel the reader opened stays open through every render, on every page with panels', async ({ page, browser }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await page.selectOption('#join-mission', 'RECOVERY');
  await page.click('#join'); await page.click('#record-practice'); await page.click('#student-planning');
  const planning = await openAll(page);
  expect(planning, 'planning panels').toBeGreaterThanOrEqual(2);
  await page.locator('#plan-wtp').pressSequentially('5');
  await expect(page.locator('details[open]'), 'planning, after a saved field').toHaveCount(planning);

  await page.check('#plan-confirm'); await page.click('#student-start-auction');
  await page.locator(TRACKER_OK).click();
  await page.locator('details:has(#scratch-wtp) > summary').click();
  await page.locator('#scratch-wtp').pressSequentially('42');
  await expect(page.locator('#scratch-wtp'), 'the field typed in').toBeVisible();
  await expect(page.locator('#scratch-wtp')).toBeFocused();
  await expect(page.locator('#scratch-wtp')).toHaveValue('42');
  await page.click('#lang-toggle');
  await expect(page.locator('details:has(#scratch-wtp)'), 'after a language change').toHaveAttribute('open', '');

  const ip = await (await browser.newContext()).newPage();
  guardNetwork(ip);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['RECOVERY', 'TROOP'] });
  const auction = await openAll(ip);
  expect(auction, 'auction panels').toBeGreaterThanOrEqual(1);
  await instructorLot(ip, [1], 'sell');
  await expect(ip.locator('details[open]'), 'auction, after a sale').toHaveCount(auction);
});

// WCAG 2.1.1: a table wider than its frame is a labelled, focusable region, so it scrolls by keyboard; one that fits is
// not a tab stop. The view checks once the page is laid out (no width read inside a click, G3 CI run 39484500911), so
// a table that widens or narrows later is marked or unmarked too.
test('a table wider than its frame scrolls by keyboard, and only while it is wider', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
  await page.check('#plan-confirm');
  await page.click('#student-start-auction');
  await confirmDialog(page);
  await page.fill('#card-id', 'CAP-A');
  await page.click('#load-card');
  await page.fill('#paid', '400000');
  await page.click('#record-win');
  const wrap = page.locator('.table-wrap').filter({ has: page.locator('td', { hasText: 'CAP-A' }) });
  await expect(wrap).toHaveCount(1);
  await expect(wrap).not.toHaveAttribute('tabindex');
  await wrap.locator('table').evaluate(table => { (table as HTMLElement).style.minWidth = '3000px'; });
  await expect(wrap).toHaveAttribute('tabindex', '0');
  await expect(wrap).toHaveAttribute('role', 'region');
  await expect(wrap).toHaveAttribute('aria-label', /\S/);
  await wrap.focus();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => wrap.evaluate(w => w.scrollLeft)).toBeGreaterThan(0);
  await wrap.locator('table').evaluate(table => { (table as HTMLElement).style.minWidth = ''; });
  await expect(wrap).not.toHaveAttribute('tabindex');
  await expect(wrap).not.toHaveAttribute('role', 'region');
});
