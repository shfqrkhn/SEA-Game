// J2 + J7 (MPES §16.3): full French session, 10 teams, UNTIMED, MANUAL reveal, all 70 lots, ending in a
// shared award. The session starts from an imported planning backup with a fixed seed so the purchase plan
// (tests/fixtures/j2-plan.json, found offline) produces two compliant teams with equal scores.
import { expect, test, type Page } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import { makeBackup } from '../../source/domain/backup.ts';
import * as I from '../../source/domain/instructor.ts';
import { instructorForSave } from '../../source/domain/saves.ts';
import { collectConsoleErrors, expectAccessible, gameUrl, guardNetwork } from './helpers.ts';
import { score, totals, winners, type OracleTeam } from './oracle.ts';
import { act, confirmDialog } from './roles.ts';

test.setTimeout(900_000);
const PLAN = JSON.parse(readFileSync(new URL('../fixtures/j2-plan.json', import.meta.url), 'utf8')) as
  { seed: string; missions: Record<string, string>; score: number; lots: { round: number; lot: number; card: string; team: number }[] };
const MISSIONS = [PLAN.missions['1']!, PLAN.missions['2']!, 'COMBAT', 'COMMAND', 'RECOVERY', 'MINE', 'TROOP', 'RECCE', 'COMBAT', 'MINE'];
const frMoney = (text: string) => Math.round(Number(text.replace(/[\s $]/g, '').replace(',', '.')) * 100);

async function outcome(page: Page): Promise<{ team: number; cents: number } | null> {
  const text = (await page.locator('#outcome').textContent())!;
  const match = /équipe (\d+) pour ([\d\s ,]+ \$)/.exec(text);
  return match ? { team: Number(match[1]), cents: frMoney(match[2]!) } : null;
}

test('J2: French 10-team MANUAL untimed session with a shared award', async ({ page }, info) => {
  const net = guardNetwork(page), errors = collectConsoleErrors(page);
  // Planning-phase backup with the plan's seed, created with the domain commands (setup, not oracle).
  let s = I.generateSession(I.instructorShell('fr'), { teamCount: 10, revealMode: 'MANUAL', timingMode: 'UNTIMED', bidSeconds: 30, token: 'F00DFACE12345678', seed: PLAN.seed });
  s = I.startPractice(s);
  for (const step of ['reveal', 'open', 'accept', 'close'] as const) s = I.practiceStep(s, step);
  s = I.openPlanning(s);
  const file = info.outputPath('planning.json');
  writeFileSync(file, makeBackup('INSTRUCTOR', instructorForSave(s), 'test'));

  await page.goto(gameUrl('?role=instructor&lang=fr'));
  await page.click('#menu-button');
  const chooser = page.waitForEvent('filechooser');
  await page.locator('dialog button[data-value="import"]').click();
  await (await chooser).setFiles(file);
  await confirmDialog(page);
  await expect(page.getByRole('heading', { name: 'Attribuer les missions' })).toBeVisible();
  for (const [i, mission] of MISSIONS.entries()) await page.selectOption(`#mission-${i + 1}`, mission);
  await expectAccessible(page, 'planning FR');
  await page.click('#start-auction');
  await confirmDialog(page);

  const owner = new Map(PLAN.lots.map(l => [`${l.round}-${l.lot}`, l]));
  const teams: Record<number, OracleTeam> = Object.fromEntries(MISSIONS.map((m, i) => [i + 1, { mission: m, cards: [], paidCents: 0, profitCents: 0, submitted: false }]));
  const winsThisRound = new Map<number, number>();
  for (let round = 1; round <= 7; round++) {
    winsThisRound.clear();
    // MANUAL: nothing of the new round is visible before reveal.
    await expect(page.locator('.market li .mono')).toHaveCount(0);
    for (let lot = 1; lot <= 10; lot++) {
      await expect(page.locator('#lot-heading')).toHaveText(`Ronde ${round} · Lot ${lot} sur 10`);
      await page.click('#reveal');
      const card = (await page.locator('.card-figure[data-card]').getAttribute('data-card'))!;
      const planned = owner.get(`${round}-${lot}`);
      if (planned) expect(card).toBe(planned.card);
      // Lots outside the plan go to teams 3–10 now and then, never beyond their round limit.
      const extra = 3 + ((round * 10 + lot) % 8);
      const buyer = planned?.team ?? (lot % 3 === 0 && (winsThisRound.get(extra) ?? 0) < 2 ? extra : 0);
      await page.click('#open-bidding');
      if (buyer) {
        await page.click(`#bid-${buyer}`);
        await act(page, '#sell');
        winsThisRound.set(buyer, (winsThisRound.get(buyer) ?? 0) + 1);
      } else {
        await act(page, '#unsold');
      }
      const result = await outcome(page);
      expect(result?.team ?? 0).toBe(buyer);
      if (result) { teams[result.team]!.cards.push(card); teams[result.team]!.paidCents += result.cents; }
      await act(page, '#next-lot');
    }
  }

  // Equal scores per the plan; equalise bids with profit so the award is shared.
  const t1 = teams[1]!, t2 = teams[2]!;
  expect(score(t1.mission, totals(t1.cards))).toBe(PLAN.score);
  expect(score(t2.mission, totals(t2.cards))).toBe(PLAN.score);
  const target = Math.max(t1.paidCents, t2.paidCents) + 10_000_000;
  await page.click('#open-submissions');
  await page.click('#enter-private');
  for (let id = 1; id <= 9; id++) {
    const team = teams[id]!;
    team.profitCents = id <= 2 ? target - team.paidCents : 0;
    await page.fill(`#profit-${id}`, (team.profitCents / 100).toFixed(2).replace('.', ','));
    await page.locator(`#profit-${id}`).blur();
    await page.check(`#submitted-${id}`);
    team.submitted = true;
  }
  await page.click('#close-submissions');
  await expect(page.locator('dialog[open]')).toContainText('10'); // Team 10 has not submitted
  await confirmDialog(page);

  const expected = winners(teams);
  expect(expected).toEqual([1, 2]);
  await expect(page.locator('#award')).toHaveText('Prix partagé : équipes 1, 2');
  await expectAccessible(page, 'debrief FR');
  expect(net).toEqual([]);
  expect(errors).toEqual([]);
});
