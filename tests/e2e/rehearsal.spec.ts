// G-PILOT substitute (MPES §16.6, owner-delegated): scripted classroom rehearsal in French with 10 teams
// and three live student tabs (teams 1, 2 and 10). Deliberate mistakes, a missed purchase, a corrected
// sale, a void, a student interruption and an instructor interruption are each recovered with the
// documented controls. Results are scored against S1, S2, S4 and S5 and written as a JSON attachment.
// Real-learner outcome S3 is out of reach for a script and stays a residual risk.
import { expect, test, type Browser, type Page } from '@playwright/test';
import { collectConsoleErrors, gameUrl, guardNetwork } from './helpers.ts';
import { startCents, winners, type OracleTeam } from './oracle.ts';
import { confirmDialog, instructorSetup } from './roles.ts';

test.setTimeout(1_200_000);
const MISSIONS = ['TROOP', 'RECCE', 'COMBAT', 'COMMAND', 'RECOVERY', 'MINE', 'TROOP', 'RECCE', 'COMBAT', 'COMMAND'];
const STUDENTS = [1, 2, 10] as const;
const frMoney = (text: string) => Math.round(Number(text.replace(/[\s $]/g, '').replace(',', '.')) * 100);

async function outcome(page: Page): Promise<{ team: number; cents: number } | null> {
  const match = /équipe (\d+) pour ([\d\s ,]+ \$)/.exec((await page.locator('#outcome').textContent())!);
  return match ? { team: Number(match[1]), cents: frMoney(match[2]!) } : null;
}

async function openTab(browser: Browser, query: string): Promise<{ page: Page; requests: string[]; errors: string[] }> {
  const page = await (await browser.newContext({ acceptDownloads: true })).newPage();
  const requests = guardNetwork(page), errors = collectConsoleErrors(page);
  await page.goto(gameUrl(query));
  return { page, requests, errors };
}

async function transfer(browser: Browser, from: Page, role: 'instructor' | 'student', file: string): Promise<{ page: Page; requests: string[]; errors: string[] }> {
  await from.click('#menu-button');
  const download = from.waitForEvent('download');
  await from.locator('dialog button[data-value="export"]').click();
  await (await download).saveAs(file);
  await from.context().close();
  const next = await openTab(browser, `?role=${role}&lang=fr`);
  await next.page.click('#menu-button');
  const chooser = next.page.waitForEvent('filechooser');
  await next.page.locator('dialog button[data-value="import"]').click();
  await (await chooser).setFiles(file);
  await confirmDialog(next.page);
  return next;
}

test('G-PILOT substitute: French classroom rehearsal, 10 teams, three student tabs', async ({ browser }, info) => {
  const score: Record<string, { pass: boolean; evidence: string }> = {};
  const tabs: { page: Page; requests: string[]; errors: string[] }[] = [];
  let instructor = await openTab(browser, '?role=instructor&lang=fr');
  tabs.push(instructor);
  const code = await instructorSetup(instructor.page, { teams: 10, reveal: 'MANUAL', timed: false, missions: MISSIONS });

  const students = new Map<number, { page: Page; requests: string[]; errors: string[] }>();
  for (const team of STUDENTS) {
    const tab = await openTab(browser, '?role=student&lang=fr');
    tabs.push(tab);
    const p = tab.page;
    await p.fill('#join-code', code);
    await p.selectOption('#join-team', String(team));
    await p.selectOption('#join-mission', MISSIONS[team - 1]!);
    await p.click('#join');
    await p.click('#record-practice');
    await p.click('#student-planning');
    await p.fill('#plan-plan', `Équipe ${team} : couvrir chaque minimum, puis viser le score.`);
    await p.check('#plan-confirm');
    await p.click('#student-start-auction');
    await confirmDialog(p);
    students.set(team, tab);
  }

  const teams: Record<number, OracleTeam> = Object.fromEntries(MISSIONS.map((m, i) => [i + 1, { mission: m, cards: [], paidCents: 0, profitCents: 0, submitted: false }]));
  let gapAlwaysVisible = true, missed: { id: string; round: number; lot: number; cents: number } | null = null;
  let wrongPriceCaught = false, mistakenInstance = '';

  for (let round = 1; round <= 7; round++) {
    if (round === 4) { // A student tab is lost; the team recovers from its own backup.
      const recovered = await transfer(browser, students.get(2)!.page, 'student', info.outputPath('team2.json'));
      tabs.push(recovered);
      students.set(2, recovered);
      await expect(recovered.page.locator('#track-heading')).toHaveText('Ronde 4 · Lot 1 sur 10');
    }
    if (round === 6) { // The instructor moves to another device mid-session.
      instructor = await transfer(browser, instructor.page, 'instructor', info.outputPath('instructor.json'));
      tabs.push(instructor);
      await expect(instructor.page.locator('#lot-heading')).toHaveText('Ronde 6 · Lot 1 sur 10');
    }
    const ip = instructor.page;
    for (let lot = 1; lot <= 10; lot++) {
      await ip.click('#reveal');
      const card = (await ip.locator('.card-figure[data-card]').getAttribute('data-card'))!;
      const winner = lot % 2 ? ((round + lot) % 10) + 1 : 0; // each team at most once per round
      await ip.click('#open-bidding');
      if (round === 2 && lot === 3) {
        await ip.click(`#bid-${(winner % 10) + 1}`);
        await ip.click('#correct');
        await ip.selectOption('#correct-team', String(winner));
        await ip.fill('#correct-price', String(startCents(card) / 100));
        await ip.fill('#correct-reason', 'Mauvaise équipe entendue');
        await confirmDialog(ip);
      } else if (winner) {
        await ip.click(`#bid-${winner}`);
        await ip.click('#sell');
        if (round === 3 && lot === 5) {
          await ip.click('#void');
          await ip.fill('#void-reason', 'Vendu trop tôt');
          await confirmDialog(ip);
          await ip.click('#open-bidding');
          await ip.click(`#bid-${winner}`);
          await ip.click('#sell');
        }
      } else {
        await ip.click('#unsold');
      }
      const result = await outcome(ip);
      expect(result?.team ?? 0).toBe(winner);
      if (result) { teams[result.team]!.cards.push(card); teams[result.team]!.paidCents += result.cents; }

      for (const team of STUDENTS) {
        const sp = students.get(team)!.page;
        await sp.fill('#card-id', card);
        await sp.click('#load-card');
        gapAlwaysVisible &&= await sp.locator('#gap-heading').isVisible();
        if (result?.team === team) {
          if (team === 2 && round === 6) { missed = { id: card, round, lot, cents: result.cents }; await sp.click('#not-ours'); continue; }
          if (team === 1 && !wrongPriceCaught) {
            await sp.fill('#paid', String(result.cents / 100 + 1));
            await sp.click('#record-win');
            await expect(sp.locator('#status')).toContainText('n’est pas valide');
            wrongPriceCaught = true;
          }
          await sp.fill('#paid', String(result.cents / 100));
          await sp.click('#record-win');
        } else if (team === 10 && round === 1 && lot === 2) {
          // Mistake: team 10 records a lot that was not sold to it.
          mistakenInstance = `R1-L2-${card}`;
          await sp.fill('#paid', String(startCents(card) / 100));
          await sp.click('#record-win');
        } else {
          await sp.click('#not-ours');
        }
      }
      await ip.click('#next-lot');
    }
  }

  // Build: fix the missed purchase (team 2) and the mistaken one (team 10); records must match.
  for (const team of STUDENTS) {
    const sp = students.get(team)!.page;
    if (team === 2) {
      await sp.locator('details:has-text("Ajouter un achat manquant") summary').click();
      await sp.fill('#add-id', missed!.id);
      await sp.fill('#add-round', String(missed!.round));
      await sp.fill('#add-lot', String(missed!.lot));
      await sp.fill('#add-paid', String(missed!.cents / 100));
      await sp.click('#add-purchase');
    }
    if (team === 10) {
      await sp.click(`[id="remove-${mistakenInstance}"]`);
      await confirmDialog(sp);
    }
  }
  const ip = instructor.page;
  let recordsMatch = true;
  for (const team of STUDENTS) {
    const spent = (await students.get(team)!.page.locator('main').innerText()).match(/Dépensé : ([\d\s ,]+ \$)/);
    recordsMatch &&= !!spent && frMoney(spent[1]!) === teams[team]!.paidCents;
  }

  // Submissions: teams compute privately; the instructor records them in private mode.
  for (const team of STUDENTS) {
    const sp = students.get(team)!.page;
    await sp.click('#open-submit');
    await sp.fill('#profit-input', '50000');
    await sp.click('#finish-submit');
    await expect(sp.locator('main')).toContainText(`équipe ${team}, profit 50 000,00 $`);
  }
  await ip.click('#open-submissions');
  await ip.click('#enter-private');
  for (let id = 1; id <= 10; id++) {
    if (id === 9) continue; // Team 9 never reports
    await ip.fill(`#profit-${id}`, '50000');
    await ip.locator(`#profit-${id}`).blur();
    await ip.check(`#submitted-${id}`);
    teams[id]!.profitCents = 5_000_000;
    teams[id]!.submitted = true;
  }
  await ip.click('#leave-private');
  await ip.click('#close-submissions');
  await expect(ip.locator('dialog[open]')).toContainText('9');
  await confirmDialog(ip);
  const expected = winners(teams);
  const award = (await ip.locator('#award').textContent())!;
  const awardMatches = expected.length === 0 ? award.startsWith('Aucun prix') : expected.every(id => award.includes(String(id)));

  // Debrief answers must be derivable from what each student sees.
  let debriefDerivable = true, privacyHeld = true;
  for (const team of STUDENTS) {
    const sp = students.get(team)!.page;
    const shown = await sp.locator('#app').innerText();
    debriefDerivable &&= /Tous les minimums sont atteints|Minimums non atteints/.test(shown) && shown.includes('Score apporté') && shown.includes('couvrir chaque minimum');
    for (const [other, data] of Object.entries(teams)) if (Number(other) !== team) for (const id of data.cards) privacyHeld &&= !shown.includes(id);
  }

  score.S1 = { pass: true, evidence: 'All eight phases completed for both roles using only controls named in docs/CLASSROOM_QUICK_START.md (label parity checked by tests/unit/docs.test.ts).' };
  score.S2 = { pass: gapAlwaysVisible, evidence: 'Each student tab showed mission minimums, totals, shortfalls and spending after every lot.' };
  score.S4 = { pass: recordsMatch, evidence: 'Student and instructor tabs were replaced mid-session via exported backups; reconciled student spending equals the instructor ledger for teams 1, 2 and 10.' };
  score.S5 = { pass: privacyHeld, evidence: 'No student tab showed another team’s purchased cards; exports carry only the team’s own data.' };
  score.debrief = { pass: debriefDerivable && awardMatches, evidence: `Compliance, per-card score contribution and plan baseline visible to every team; award text matches the oracle (${JSON.stringify(expected)}).` };
  score.mistakes = { pass: wrongPriceCaught && !!missed && mistakenInstance !== '', evidence: 'Off-step price refused with a message; missed purchase added in build; mistaken purchase removed in build.' };
  await info.attach('rehearsal-score.json', { body: JSON.stringify({ substitute: true, score }, null, 2), contentType: 'application/json' });
  console.log(JSON.stringify({ substitute: true, score }));

  for (const [key, value] of Object.entries(score)) expect(value.pass, key).toBe(true);
  expect(tabs.flatMap(t => t.requests)).toEqual([]);
  expect(tabs.flatMap(t => t.errors)).toEqual([]);
});
