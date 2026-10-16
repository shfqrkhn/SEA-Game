// Owner request 2026-10-11 (MPES §6.5): when every team has its 2 wins in a round, one click records the rest of the
// round unsold and opens the next; a student whose team has its 2 wins skips to the next round's tracker.
import { expect, type Locator, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { gameUrl, guardNetwork, test } from './helpers.ts';
import { confirmDialog, instructorLot, instructorSetup, studentJoin, studentRecord } from './roles.ts';

// Owner FIX 2 (2026-10-12): each listed card shows its effects on one line, so a team can re-plan for what left the
// game. Expected text from the content, in the order of the capabilities: value, unit, capability; no start price.
const CAPS = ['CAP', 'MOB', 'FP', 'PRO', 'COM', 'SA', 'REC', 'MC'];
const CARD_LIST = JSON.parse(readFileSync('content/cards.json', 'utf8')) as { id: string; category: string; startCents: number; effects: Record<string, number> }[];
const CARDS = new Map(CARD_LIST.map(c => [c.id, c]));
const STRINGS = { en: JSON.parse(readFileSync('content/strings.en.json', 'utf8')), fr: JSON.parse(readFileSync('content/strings.fr.json', 'utf8')) } as Record<'en' | 'fr', Record<string, string>>;
function effectsLine(id: string, lang: 'en' | 'fr'): string {
  const e = CARDS.get(id)!.effects;
  return CAPS.filter(k => e[k] !== undefined).map(k => `${e[k]! > 0 ? '+' : e[k]! < 0 ? '−' : ''}${Math.abs(e[k]!)} ${STRINGS[lang][`unit.${k}`]} ${STRINGS[lang][`cap.${k}`]}`).join(', ');
}
const signed = (n: number) => `${n > 0 ? '+' : n < 0 ? '−' : ''}${Math.abs(n)}`;
// The planning guide's effects cell for a category: each capability's range in words, joined by " · ".
function guideLine(category: string, lang: 'en' | 'fr'): string {
  const cards = CARD_LIST.filter(c => c.category === category);
  return CAPS.flatMap(k => {
    const values = cards.map(c => c.effects[k]).filter((x): x is number => x !== undefined);
    if (!values.length) return [];
    const min = Math.min(...values), max = Math.max(...values);
    const range = min === max ? signed(min) : STRINGS[lang]['splan.range']!.replace('{min}', signed(min)).replace('{max}', signed(max));
    return [`${range} ${STRINGS[lang][`unit.${k}`]} ${STRINGS[lang][`cap.${k}`]}`];
  }).join(' · ');
}
// A card ID never breaks at its hyphen ("SA-" then "F" once did in the narrow card column): one line box each.
async function expectIdsWhole(page: Page) {
  const boxes = await page.locator('span.mono, .nowrap').evaluateAll(els => els.map(e => [e.textContent, e.getClientRects().length] as const));
  expect(boxes.length).toBeGreaterThan(0);
  for (const [text, n] of boxes) expect(n, `${text}`).toBe(1);
}
async function expectOnScreen(page: Page, selectors: string[]) {
  await page.evaluate(() => window.scrollTo(0, 0));
  for (const selector of selectors) await expect(page.locator(selector)).toBeInViewport({ ratio: 1 });
}
async function expectEffects(list: Locator, lang: 'en' | 'fr') {
  for (const item of await list.locator('li').all()) {
    const id = (await item.locator('.mono').textContent())!.trim();
    await expect(item.locator('.effects-line')).toHaveText(effectsLine(id, lang));
    await expect(item).not.toContainText('$');
    // Gains green and penalties red, as on the live lot: the class follows the sign.
    for (const part of await item.locator('.effects-line > span').all()) {
      const negative = (await part.locator('.num').textContent())!.startsWith('−');
      await expect(part).toHaveClass(negative ? 'penalty' : 'gain');
    }
  }
  // Each card's effects on one compact line under its title at 1280×720 (owner FIX 2): never split across lines,
  // below the ID and title, and inside the list item (no overflow out of the controls column).
  const boxes = await list.locator('li').evaluateAll(els => els.map(li => {
    const line = li.querySelector('.effects-line')!, id = li.querySelector('.mono')!;
    const range = document.createRange(); range.selectNodeContents(line);
    const text = range.getBoundingClientRect(), box = li.getBoundingClientRect();
    return { lines: line.getBoundingClientRect().height / parseFloat(getComputedStyle(line).lineHeight),
      below: line.getBoundingClientRect().top >= id.getBoundingClientRect().bottom - 1,
      inside: text.left >= box.left - 0.5 && text.right <= box.right + 0.5 };
  }));
  for (const b of boxes) expect(b).toEqual({ lines: expect.any(Number), below: true, inside: true });
  for (const b of boxes) expect(b.lines).toBeLessThan(1.5);
}

test('the instructor closes a full round in one click and the student skips to the next round', async ({ browser }) => {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['TROOP', 'RECCE'] });
  const cards: string[] = [];
  const prices: number[] = [];
  for (const team of [1, 1, 2, 2]) {
    await expect(ip.locator('#close-round')).toHaveCount(0);
    if (await ip.locator('#reveal').count()) await ip.click('#reveal');
    cards.push((await ip.locator('.card-figure[data-card]').getAttribute('data-card'))!);
    prices.push(Number((await ip.locator('.card-figure strong.num').first().textContent())!.replace(/[$,]/g, '')));
    await instructorLot(ip, [team], 'sell');
    if (cards.length < 4) await ip.click('#next-lot');
  }
  // The sale that used the last win offers the close at once; Next lot stays as the slower path.
  await expect(ip.locator('#round-full')).toContainText('round 1');
  await expect(ip.locator('#close-round')).toHaveText('Go to round 2, the rest unsold');
  await expect(ip.locator('#next-lot')).toBeVisible();
  // Owner, 2026-10-11: the room must still learn which cards leave the game. Listed before the close, shown in the
  // round's market list although the reveal is lot by lot, and listed again on the next round's first lot.
  const gone = ip.locator('#close-cards li');
  await expect(gone).toHaveCount(6);
  const goneIds = (await ip.locator('#close-cards li .mono').allTextContents()).map(id => id.trim());
  expect(new Set([...cards, ...goneIds]).size).toBe(10);
  for (const id of goneIds) await expect(ip.locator('.market')).toContainText(id);
  await expectEffects(ip.locator('#close-cards'), 'en');
  await expectIdsWhole(ip);
  await ip.click('#lang-toggle');
  await expect(ip.locator('#close-heading')).toHaveText(STRINGS.fr['auction.closeCards']!);
  await expectEffects(ip.locator('#close-cards'), 'fr');
  await expectIdsWhole(ip);
  // The lists stay below the lot actions, so the close and Next lot are wholly on screen at 1280×720 from the top
  // of the page (MPES §7.1), and the list starts on screen too, so the instructor can read it out without scrolling.
  // In both languages: French is the longer.
  await expectOnScreen(ip, ['#close-round', '#next-lot', '#close-cards li >> nth=0']);
  await ip.click('#lang-toggle');
  await expectOnScreen(ip, ['#close-round', '#next-lot', '#close-cards li >> nth=0']);
  await ip.keyboard.press('n');
  await expect(ip.locator('#lot-heading')).toContainText('Round 2');
  await expect(ip.locator('#lot-heading')).toContainText('Lot 1 of');
  await expect(ip.locator('#close-round')).toHaveCount(0);
  await ip.reload();
  await expect(ip.locator('#lot-heading')).toContainText('Round 2');
  await expect(ip.locator('#gone-heading')).toHaveText('Not sold in round 1, so out of the game:');
  expect((await ip.locator('#gone-cards li .mono').allTextContents()).map(id => id.trim())).toEqual(goneIds);
  await expectEffects(ip.locator('#gone-cards'), 'en');
  await expectOnScreen(ip, ['#open-bidding', '#gone-cards li >> nth=0']);
  await ip.click('#lang-toggle');
  await expect(ip.locator('#gone-heading')).toHaveText('Non vendues à la ronde 1, donc hors jeu :');
  await expectEffects(ip.locator('#gone-cards'), 'fr');
  await expectIdsWhole(ip);
  await expectOnScreen(ip, ['#open-bidding', '#gone-cards li >> nth=0']);

  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 2, 'RECCE');
  // Sibling of FIX 2: the planning guide gives each kind of card's effects in words (it showed codes such as "MOB +2").
  const categories = [...new Set(CARD_LIST.map(c => c.category))];
  for (const lang of ['en', 'fr'] as const) {
    if (lang === 'fr') await sp.click('#lang-toggle');
    const summary = sp.locator('summary', { hasText: STRINGS[lang]['splan.guide']! });
    if (!await summary.evaluate(el => (el.parentElement as HTMLDetailsElement).open)) await summary.click();
    const guide = sp.locator('details[open] table tbody tr');
    await expect(guide).toHaveCount(categories.length);
    for (const [i, category] of categories.entries()) {
      await expect(guide.nth(i).locator('th')).toHaveText(STRINGS[lang][`cat.${category}`]!);
      await expect(guide.nth(i).locator('td').first()).toHaveText(guideLine(category, lang));
    }
  }
  await sp.click('#lang-toggle');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  await studentRecord(sp, cards[0]!, null);
  await studentRecord(sp, cards[1]!, null);
  await expect(sp.locator('#next-round')).toHaveCount(0);
  await studentRecord(sp, cards[2]!, prices[2]!);
  await expect(sp.locator('#next-round')).toHaveCount(0);
  await studentRecord(sp, cards[3]!, prices[3]!);
  await expect(sp.locator('#next-round')).toHaveText('Skip to round 2');
  // Sibling of FIX 2: the purchases table shows effects the same way (it showed untranslated codes such as "MOB +2").
  for (const lang of ['en', 'fr'] as const) {
    if (lang === 'fr') await sp.click('#lang-toggle');
    const rows = sp.locator('table:has(caption) tbody tr');
    await expect(rows).toHaveCount(2);
    for (const [i, id] of [cards[2]!, cards[3]!].entries()) await expect(rows.nth(i).locator('.effects-line')).toHaveText(effectsLine(id, lang));
    await expectIdsWhole(sp);
  }
  await sp.click('#lang-toggle');
  await sp.click('#next-round');
  await expect(sp.locator('#track-heading')).toHaveText('Round 2 · Lot 1 of 10');
  await expect(sp.locator('#next-round')).toHaveCount(0);
});
