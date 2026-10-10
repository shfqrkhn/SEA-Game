// Instructor console (MPES §7.2).
import { Controller } from '../app/controller.ts';
import { randomHex, systemClock, type Clock, type StoragePort } from '../app/ports.ts';
import { costPerPointCents, rankAwards, standing } from '../domain/award.ts';
import { LOTS, MISSIONS, PRACTICE_CARD, isMissionId, type MissionId } from '../domain/data.ts';
import * as I from '../domain/instructor.ts';
import { lotIndex } from '../domain/ledger.ts';
import { parseAmount } from '../domain/money.ts';
import { instructorForSave, validateInstructor } from '../domain/saves.ts';
import { lotVisible, REVEAL_MODES, MIN_BID_SECONDS, MAX_BID_SECONDS, type RevealMode, type TimingMode } from '../domain/session.ts';
import { cardArt } from './art.ts';
import { cardDetails, complianceText, missionName, missionTable, purchasesTable } from './components.ts';
import { h, type Child } from './dom.ts';
import { labelled, money, seconds } from './format.ts';
import type { Language, StringKey } from './i18n.ts';
import { RoleView } from './view.ts';

type View = RoleView<I.InstructorState>;
export const INSTRUCTOR_KEY = 'SEA_INSTRUCTOR_V300';

function setupView(v: View): Child {
  const s = v.state, t = v.t;
  if (s.sessionCode) {
    return h('section', { class: 'stack' },
      h('h1', { text: t('setup.codeTitle') }),
      h('p', { class: 'session-code mono', text: s.sessionCode }),
      h('p', { text: t('setup.codeHint') }),
      h('p', { class: 'muted', text: t('setup.summary', { teams: s.teamCount, reveal: t(`setup.reveal.${s.revealMode}` as StringKey), timing: s.timingMode === 'TIMED' ? `${t('setup.timing.TIMED')} (${s.bidSeconds} s)` : t('setup.timing.UNTIMED') }) }),
      h('p', { text: t('setup.next') }),
      h('div', { class: 'cluster' },
        h('button', { type: 'button', class: 'btn primary', id: 'start-practice', text: t('setup.startPractice'), on: { click: () => v.run(I.startPractice) } }),
        h('button', { type: 'button', class: 'btn', id: 'regenerate', text: t('setup.regenerate'), on: {
          click: e => void v.confirm({ title: t('setup.regenerateTitle'), body: h('p', { text: t('setup.regenerateBody') }), confirm: t('setup.regenerate'), opener: e.currentTarget as HTMLElement },
            state => I.generateSession(I.newSession(state), sessionOptions(v, state.teamCount, state.revealMode, state.timingMode, state.bidSeconds))),
        } }),
      ),
    );
  }
  const teams = v.draft('setup-teams', String(s.teamCount));
  const reveal = v.draft('setup-reveal', s.revealMode) as RevealMode;
  const timing = v.draft('setup-timing', s.timingMode) as TimingMode;
  const radio = (name: string, value: string, checked: boolean, label: string, hint?: string) => h('label', { class: 'choice' },
    h('input', { type: 'radio', name, id: `${name}-${value}`, value, checked, on: { change: () => { v.drafts.set(name, value); v.render(); } } }),
    h('span', {}, h('span', { text: label }), hint ? h('span', { class: 'hint', text: hint }) : null),
  );
  return h('section', { class: 'stack' },
    h('h1', { text: t('setup.title') }),
    h('div', { class: 'field' },
      h('label', { for: 'setup-teams', text: t('setup.teams') }),
      h('select', { id: 'setup-teams', value: teams, on: { change: e => v.drafts.set('setup-teams', (e.target as HTMLSelectElement).value) } },
        Array.from({ length: 9 }, (_, i) => h('option', { value: String(i + 2), text: String(i + 2), selected: String(i + 2) === teams }))),
    ),
    h('fieldset', { class: 'stack' }, h('legend', { text: t('setup.reveal') }),
      REVEAL_MODES.map(mode => radio('setup-reveal', mode, mode === reveal, t(`setup.reveal.${mode}` as StringKey), t(`setup.reveal.${mode}.hint` as StringKey)))),
    h('fieldset', { class: 'stack' }, h('legend', { text: t('setup.timing') }),
      (['TIMED', 'UNTIMED'] as const).map(mode => radio('setup-timing', mode, mode === timing, t(`setup.timing.${mode}` as StringKey)))),
    timing === 'TIMED' ? h('div', { class: 'field' },
      h('label', { for: 'setup-seconds', text: t('setup.seconds') }),
      v.input('setup-seconds', { type: 'number', min: String(MIN_BID_SECONDS), max: String(MAX_BID_SECONDS), step: '1', inputmode: 'numeric', value: String(s.bidSeconds), 'aria-describedby': 'setup-seconds-hint' }),
      h('span', { class: 'hint', id: 'setup-seconds-hint', text: t('setup.secondsHint') }),
    ) : null,
    h('button', { type: 'button', class: 'btn primary', id: 'generate', text: t('setup.generate'), on: { click: () => {
      // Read the inputs at click time: drafts change without re-rendering.
      const secondsValue = Number(v.draft('setup-seconds', String(v.state.bidSeconds)));
      v.run(state => I.generateSession(state, sessionOptions(v, Number(v.draft('setup-teams', String(state.teamCount))),
        v.draft('setup-reveal', state.revealMode) as RevealMode, v.draft('setup-timing', state.timingMode) as TimingMode,
        Number.isInteger(secondsValue) ? secondsValue : NaN)));
    } } }),
  );
}

function sessionOptions(_v: View, teamCount: number, revealMode: RevealMode, timingMode: TimingMode, bidSeconds: number): I.SessionOptions {
  return { teamCount, revealMode, timingMode, bidSeconds, token: randomHex(16), seed: randomHex(32) };
}

function practiceView(v: View): Child {
  const p = v.state.practice, t = v.t;
  const step = (action: I.PracticeAction, label: StringKey, enabled: boolean, done: boolean) =>
    h('li', {}, h('button', { type: 'button', class: `btn ${enabled ? 'primary' : ''}`, id: `practice-${action}`, disabled: !enabled, 'aria-pressed': done ? 'true' : undefined,
      text: t(label), on: { click: () => v.run(state => I.practiceStep(state, action)) } }));
  return h('section', { class: 'split' },
    h('div', { class: 'stack' },
      h('h1', { text: t('practice.title') }),
      h('p', { text: t('practice.desc') }),
      h('ol', { class: 'steps stack' },
        step('reveal', 'practice.reveal', !p.revealed, p.revealed),
        step('open', 'practice.open', p.revealed && !p.open && !p.closed, p.open || p.closed),
        step('accept', 'practice.accept', p.open && !p.leader, p.leader),
        step('close', 'practice.close', p.open && p.leader, p.closed),
      ),
      p.closed ? h('p', { class: 'ok', text: t('practice.done') }) : null,
      h('div', { class: 'cluster' },
        h('button', { type: 'button', class: `btn ${p.closed ? 'primary' : ''}`, id: 'open-planning', disabled: !p.closed, text: t('practice.openPlanning'), on: { click: () => v.run(I.openPlanning) } }),
        h('button', { type: 'button', class: 'btn', id: 'practice-reset', text: t('practice.reset'), on: { click: () => v.run(state => I.practiceStep(state, 'reset')) } }),
      ),
    ),
    h('div', {}, p.revealed ? practiceCard(v.lang) : h('p', { class: 'hidden-card', text: v.t('auction.hidden') })),
  );
}

export function practiceCard(lang: Language): Child {
  return h('figure', { class: 'card-figure' },
    cardArt(PRACTICE_CARD.id, 'PRACTICE', PRACTICE_CARD.title[lang]),
    h('figcaption', {}, h('h2', { text: PRACTICE_CARD.title[lang] }), h('p', { class: 'mono small', text: PRACTICE_CARD.id })));
}

function planningView(v: View): Child {
  const s = v.state, t = v.t;
  const missing = s.teams.filter(team => team.mission === null).length;
  return h('section', { class: 'stack' },
    h('h1', { text: t('planning.title') }),
    h('p', { text: t('planning.hint') }),
    h('div', { class: 'table-wrap' }, h('table', {},
      h('thead', {}, h('tr', {}, h('th', { scope: 'col', text: t('common.teams') }), h('th', { scope: 'col', text: t('common.mission') }))),
      h('tbody', {}, s.teams.map(team => h('tr', {},
        h('th', { scope: 'row' }, h('label', { for: `mission-${team.id}`, text: t('common.team', { n: team.id }) })),
        h('td', {}, h('select', { id: `mission-${team.id}`, on: { change: e => {
          const value = (e.target as HTMLSelectElement).value;
          v.run(state => I.selectMission(state, team.id, isMissionId(value) ? value : null));
        } } },
          h('option', { value: '', text: t('planning.choose'), selected: team.mission === null }),
          MISSIONS.map(m => h('option', { value: m.id, text: m.title[v.lang], selected: team.mission === m.id })))),
      ))),
    )),
    h('p', { class: missing ? 'warn' : 'ok', text: missing ? t('planning.missing', { n: missing }) : t('planning.ready') }),
    h('button', { type: 'button', class: 'btn primary', id: 'start-auction', disabled: missing > 0, text: t('planning.start'), on: {
      click: e => void v.confirm({ title: t('planning.startTitle'), body: h('p', { text: t('planning.startBody') }), confirm: t('planning.start'), opener: e.currentTarget as HTMLElement }, I.startAuction),
    } }),
    h('details', {}, h('summary', { text: t('planning.requirements') }), missionTable(v.lang)),
  );
}

// ---- Auction ----
function liveLot(v: View, clock: Clock): Child {
  const s = v.state, t = v.t, card = I.currentCard(s), now = clock();
  const status = I.auctionStatus(s, now);
  const visible = lotVisible(s.revealMode, s.lot, s.revealed, s.lot);
  const outcome = status.outcome;
  const controls: Child[] = [];
  if (!visible && !outcome) {
    controls.push(h('button', { type: 'button', class: 'btn primary', id: 'reveal', text: t('auction.reveal'), on: { click: () => v.run(I.reveal) } }));
  } else if (!s.open && !outcome) {
    controls.push(h('button', { type: 'button', class: 'btn primary', id: 'open-bidding', text: t('auction.open'), on: { click: () => v.run(state => I.openBidding(state, clock())) } }));
  }
  if (s.open && !outcome) {
    const offer = status.nextOffer!;
    controls.push(
      h('p', { class: 'lead' }, h('strong', { class: 'num', id: 'next-offer', text: t('auction.nextOffer', { amount: money(offer, v.lang) }) })),
      h('p', { id: 'leader-line', text: s.leader ? t('auction.leader', { n: s.leader, amount: money(s.currentBid!, v.lang) }) : t('auction.noLeader') }),
      s.timingMode === 'TIMED' ? h('div', { class: 'cluster timer' },
        h('span', { class: 'muted', text: t('auction.timer') }),
        h('strong', { class: 'num big-number', id: 'timer', 'aria-live': 'off', text: status.timedOut ? t('auction.timeUp') : seconds(status.remainingMs ?? 0) }),
        s.pausedRemaining !== null ? h('span', { class: 'warn', text: t('auction.paused') }) : null,
        s.pausedRemaining !== null
          ? h('button', { type: 'button', class: 'btn', id: 'resume', text: t('auction.resume'), on: { click: () => v.run(state => I.resume(state, clock())) } })
          : h('button', { type: 'button', class: 'btn', id: 'pause', text: t('auction.pause'), on: { click: () => v.run(state => I.pause(state, clock())) } }),
        h('button', { type: 'button', class: 'btn', id: 'extend', text: t('auction.extend'), on: { click: () => v.run(state => I.extend(state, clock())) } }),
      ) : null,
      h('p', { class: 'muted small', text: t('auction.bidHint') }),
      h('p', { class: 'muted small', id: 'auction-keys', text: t('auction.keys') }),
      h('div', { class: 'bid-grid' }, s.teams.map(team => {
        const atLimit = (team.purchasesByRound[s.round] ?? 0) >= 2;
        const leading = s.leader === team.id;
        const disabled = !status.biddingActive || atLimit || leading;
        return h('button', { type: 'button', class: `btn ${leading ? 'leading' : ''}`, id: `bid-${team.id}`, disabled,
          'aria-label': atLimit ? t('auction.atLimit', { n: team.id }) : t('auction.bidTeam', { n: team.id, amount: money(offer, v.lang) }),
          on: { click: () => v.run(state => I.acceptBid(state, team.id, offer, clock())) } },
          h('span', { text: t('common.team', { n: team.id }) }),
          h('span', { class: 'small', text: atLimit ? '2/2' : leading ? '★' : '' }));
      })),
      h('div', { class: 'cluster' },
        s.leader ? h('button', { type: 'button', class: 'btn primary', id: 'sell', disabled: s.pausedRemaining !== null,
          text: t('auction.sell', { n: s.leader, amount: money(s.currentBid!, v.lang) }), on: { click: () => v.run(state => I.commitSale(state, state.leader!, state.currentBid!)) } }) : null,
        h('button', { type: 'button', class: 'btn', id: 'unsold', disabled: s.pausedRemaining !== null, text: t('auction.unsold'), on: { click: e => {
          if (s.leader === null) { v.run(I.commitUnsold); return; }
          void v.confirm({ title: t('auction.unsoldTitle'), body: h('p', { text: t('auction.unsoldBody', { n: s.leader, amount: money(s.currentBid!, v.lang) }) }), confirm: t('auction.unsold'), opener: e.currentTarget as HTMLElement }, I.commitUnsold);
        } } }),
        h('button', { type: 'button', class: 'btn ghost', id: 'correct', disabled: s.pausedRemaining !== null, text: t('auction.correct'), on: { click: e => void correctDialog(v, e.currentTarget as HTMLElement) } }),
      ),
    );
  }
  if (outcome) {
    controls.push(
      h('p', { class: 'lead', id: 'outcome', text: outcome.kind === 'SALE' ? t('auction.outcomeSale', { n: outcome.team, amount: money(outcome.price, v.lang) }) : t('auction.outcomeUnsold') }),
      h('div', { class: 'cluster' },
        h('button', { type: 'button', class: 'btn primary', id: 'next-lot', text: s.round === 6 && s.lot === 9 ? t('auction.finish') : t('auction.next'), on: { click: () => v.run(I.advance) } }),
        h('button', { type: 'button', class: 'btn ghost', id: 'void', text: t('auction.void'), on: { click: e => void voidDialog(v, e.currentTarget as HTMLElement) } }),
      ),
    );
  }
  return h('section', { class: 'panel stack', 'aria-labelledby': 'lot-heading' },
    h('h1', { id: 'lot-heading', text: t('common.roundLot', { round: s.round + 1, lot: s.lot + 1 }) }),
    visible || outcome ? [cardDetails(card, v.lang, 'h2'), h('p', { class: 'muted small', text: t('auction.announce', { round: s.round + 1, lot: s.lot + 1, id: card.id }) })]
      : h('p', { class: 'hidden-card', text: t('auction.hidden') }),
    controls,
  );
}

async function correctDialog(v: View, opener: HTMLElement): Promise<void> {
  const t = v.t, s = v.state;
  const team = h('select', { id: 'correct-team' }, s.teams.map(x => h('option', { value: String(x.id), text: t('common.team', { n: x.id }), selected: x.id === (s.leader ?? 1) })));
  const price = h('input', { id: 'correct-price', inputmode: 'decimal', autocomplete: 'off', value: s.currentBid ? String(s.currentBid / 100) : String(I.currentCard(s).start / 100) });
  const reason = h('input', { id: 'correct-reason', maxlength: '120', autocomplete: 'off' });
  await v.confirm({
    title: t('auction.correctTitle'), opener, confirm: t('auction.correctConfirm'),
    body: [
      h('p', { text: t('auction.correctHint') }),
      h('div', { class: 'field' }, h('label', { for: 'correct-team', text: t('auction.correctTeam') }), team),
      h('div', { class: 'field' }, h('label', { for: 'correct-price', text: t('auction.correctPrice') }), price),
      h('div', { class: 'field' }, h('label', { for: 'correct-reason', text: t('common.reason') }), reason),
    ],
  }, state => I.commitSale(state, Number(team.value), parseAmount(price.value), reason.value));
}

async function voidDialog(v: View, opener: HTMLElement): Promise<void> {
  const t = v.t;
  const reason = h('input', { id: 'void-reason', maxlength: '120', autocomplete: 'off' });
  await v.confirm({
    title: t('auction.voidTitle'), opener, confirm: t('auction.voidConfirm'), danger: true,
    body: [h('p', { text: t('auction.voidBody') }), h('div', { class: 'field' }, h('label', { for: 'void-reason', text: t('common.reason') }), reason)],
  }, state => I.voidCurrent(state, reason.value));
}

function roundMarket(v: View): Child {
  const s = v.state, t = v.t;
  const outcomes = new Map<number, I.InstructorState['ledger'][number]>();
  for (const entry of s.ledger) {
    const key = lotIndex(entry.round, entry.lot);
    if (entry.kind === 'VOID') outcomes.delete(key); else outcomes.set(key, entry);
  }
  return h('section', { class: 'panel stack', 'aria-labelledby': 'market-heading' },
    h('h2', { id: 'market-heading', text: `${t('auction.marketTitle')} · ${t('common.round', { n: s.round + 1 })}` }),
    h('ol', { class: 'market' }, s.market[s.round]!.map((card, lot) => {
      const visible = lotVisible(s.revealMode, s.lot, s.revealed, lot);
      const result = outcomes.get(s.round * LOTS + lot);
      return h('li', { class: lot === s.lot ? 'current' : '', 'aria-current': lot === s.lot ? 'true' : undefined },
        h('span', { class: 'muted small', text: t('common.lot', { n: lot + 1 }) }), ' ',
        visible ? [h('span', { class: 'mono small', text: card.id }), ' ', card.title[v.lang]] : h('span', { class: 'muted', text: t('auction.hidden') }),
        result ? h('span', { class: 'small result', text: result.kind === 'SALE' ? ` · ${t('common.team', { n: result.team })} ${money(result.price, v.lang)}` : ` · ${t('common.unsold')}` }) : null,
      );
    })),
  );
}

function teamsPanel(v: View): Child {
  const s = v.state, t = v.t;
  return h('section', { class: 'panel', 'aria-labelledby': 'teams-heading' },
    h('h2', { id: 'teams-heading', text: t('auction.teamsTitle') }),
    h('div', { class: 'table-wrap' }, h('table', {},
      h('thead', {}, h('tr', {},
        h('th', { scope: 'col', text: t('common.teams') }), h('th', { scope: 'col', text: t('common.mission') }),
        h('th', { scope: 'col', class: 'num', text: t('common.wins') }), h('th', { scope: 'col', class: 'num', text: t('common.purchases') }),
        h('th', { scope: 'col', class: 'num', text: t('common.cost') }))),
      h('tbody', {}, s.teams.map(team => h('tr', {},
        h('th', { scope: 'row', text: t('common.team', { n: team.id }) }),
        h('td', { text: team.mission ? missionName(team.mission, v.lang) : t('common.empty') }),
        h('td', { class: 'num', text: `${team.purchasesByRound[s.round] ?? 0}/2` }),
        h('td', { class: 'num', text: String(team.purchases.length) }),
        h('td', { class: 'num', text: money(team.cost, v.lang) }),
      ))),
    )),
  );
}

export function ledgerPanel(v: View, open = false): Child {
  const s = v.state, t = v.t;
  const rounds = [...new Set(s.ledger.map(e => e.round))].sort((a, b) => b - a);
  return h('details', { class: 'panel', open: open || undefined },
    h('summary', {}, h('h2', { class: 'inline-heading', text: `${t('auction.ledgerTitle')} (${s.ledger.length})` })),
    rounds.length === 0 ? h('p', { class: 'muted', text: t('auction.ledgerEmpty') }) : rounds.map(round => h('section', { 'aria-label': t('common.round', { n: round }) },
      h('h3', { text: t('common.round', { n: round }) }),
      h('ol', { class: 'ledger', reversed: true }, s.ledger.filter(e => e.round === round).reverse().map(e => h('li', { value: String(e.seq) },
        h('span', { class: 'muted small', text: `#${e.seq} · ${t('common.lot', { n: e.lot })} · ` }),
        h('span', { class: 'mono small', text: e.card }), ' ',
        e.kind === 'SALE' ? t('auction.outcomeSale', { n: e.team, amount: money(e.price, v.lang) })
          : e.kind === 'UNSOLD' ? t('auction.outcomeUnsold') : t('auction.ledgerVoid', { ref: e.ref }),
        'reason' in e && e.reason ? h('span', { class: 'muted small', text: ` · ${e.reason}` }) : null,
      ))),
    )),
  );
}

function auctionView(v: View, clock: Clock): Child {
  return h('div', { class: 'split' },
    h('div', { class: 'stack' }, liveLot(v, clock), ledgerPanel(v)),
    h('div', { class: 'stack' }, roundMarket(v), teamsPanel(v)),
  );
}

// ---- Build, submit, debrief ----
function resultsTable(v: View, withMoney: boolean): Child {
  const s = v.state, t = v.t;
  return h('div', { class: 'table-wrap' }, h('table', {},
    h('thead', {}, h('tr', {},
      h('th', { scope: 'col', text: t('common.teams') }), h('th', { scope: 'col', text: t('common.mission') }),
      h('th', { scope: 'col', class: 'num', text: t('common.purchases') }), h('th', { scope: 'col', class: 'num', text: t('common.cost') }),
      h('th', { scope: 'col', text: t('common.status') }), h('th', { scope: 'col', class: 'num', text: t('common.score') }),
      withMoney ? [h('th', { scope: 'col', class: 'num', text: t('common.profit') }), h('th', { scope: 'col', class: 'num', text: t('common.bid') })] : null,
    )),
    h('tbody', {}, s.teams.map(team => {
      const st = standing(team), mission = team.lockedMission as MissionId;
      return h('tr', {},
        h('th', { scope: 'row', text: t('common.team', { n: team.id }) }),
        h('td', { text: missionName(mission, v.lang) }),
        h('td', { class: 'num', text: String(team.purchases.length) }),
        h('td', { class: 'num', text: money(team.cost, v.lang) }),
        h('td', { class: st.compliant ? 'ok' : 'warn', text: complianceText(mission, team.totals, v.lang) }),
        h('td', { class: 'num', text: String(st.score) }),
        withMoney ? [h('td', { class: 'num', text: money(team.profit, v.lang, true) }), h('td', { class: 'num', text: money(st.bid, v.lang, true) })] : null,
      );
    })),
  ));
}

function teamPurchases(v: View): Child {
  return v.state.teams.map(team => h('details', { class: 'panel' },
    h('summary', { text: `${v.t('common.team', { n: team.id })} · ${v.t('common.purchases')} (${team.purchases.length})` }),
    purchasesTable(team.purchases, v.lang, team.lockedMission ? { mission: team.lockedMission } : {})));
}

function buildView(v: View): Child {
  const t = v.t;
  return h('section', { class: 'stack' },
    h('h1', { text: t('build.title') }),
    h('p', { text: t('build.hint') }),
    resultsTable(v, false),
    teamPurchases(v),
    h('button', { type: 'button', class: 'btn primary', id: 'open-submissions', text: t('build.openSubmit'), on: { click: () => v.run(I.openSubmissions) } }),
    ledgerPanel(v),
  );
}

function submitView(v: View): Child {
  const s = v.state, t = v.t;
  const submitted = s.teams.filter(team => team.submitted).length;
  const close = h('button', { type: 'button', class: 'btn primary', id: 'close-submissions', text: t('submit.close'), on: { click: e => {
    const pending = I.pendingSubmissions(v.state);
    void v.confirm({
      title: t('submit.closeTitle'), opener: e.currentTarget as HTMLElement, confirm: t('submit.close'), danger: pending.length > 0,
      body: h('p', { text: pending.length ? t('submit.closeBody', { teams: pending.join(', ') }) : t('submit.closeAll') }),
    }, I.closeSubmissions);
  } } });
  if (!s.privateEntry) {
    return h('section', { class: 'stack' },
      h('h1', { text: t('submit.title') }),
      h('p', { text: t('submit.publicHint') }),
      h('p', { class: 'lead', text: t('submit.count', { n: submitted, total: s.teams.length }) }),
      h('div', { class: 'cluster' },
        h('button', { type: 'button', class: 'btn primary', id: 'enter-private', text: t('submit.enterPrivate'), on: { click: () => v.run(state => I.setPrivateEntry(state, true)) } }),
        close,
      ),
    );
  }
  return h('section', { class: 'stack' },
    h('p', { class: 'banner-private', role: 'alert', text: t('submit.privateBanner') }),
    h('h1', { text: t('submit.title') }),
    h('div', { class: 'table-wrap' }, h('table', {},
      h('thead', {}, h('tr', {},
        h('th', { scope: 'col', text: t('common.teams') }), h('th', { scope: 'col', class: 'num', text: t('common.cost') }),
        h('th', { scope: 'col', text: t('common.profit') }), h('th', { scope: 'col', class: 'num', text: t('common.bid') }),
        h('th', { scope: 'col', text: t('submit.submitted') }))),
      h('tbody', {}, s.teams.map(team => {
        const id = `profit-${team.id}`;
        return h('tr', {},
          h('th', { scope: 'row', text: t('common.team', { n: team.id }) }),
          h('td', { class: 'num', text: money(team.cost, v.lang) }),
          h('td', {},
            h('label', { for: id, class: 'visually-hidden', text: t('submit.profitLabel', { n: team.id }) }),
            v.input(id, { inputmode: 'decimal', autocomplete: 'off', size: '12', value: String(team.profit / 100) }),
            h('button', { type: 'button', class: 'btn', id: `save-profit-${team.id}`, text: '✓', 'aria-label': t('submit.profitLabel', { n: team.id }), on: {
              click: () => v.run(state => I.setProfit(state, team.id, v.draft(id, String(team.profit / 100))), () => v.drafts.delete(id)),
            } }),
          ),
          h('td', { class: 'num', text: money(standing(team).bid, v.lang, true) }),
          h('td', {}, h('label', { class: 'choice' },
            h('input', { type: 'checkbox', id: `submitted-${team.id}`, checked: team.submitted, on: { change: e => v.run(state => I.setSubmitted(state, team.id, (e.target as HTMLInputElement).checked)) } }),
            h('span', { text: t('submit.submitted') }))),
        );
      })),
    )),
    h('div', { class: 'cluster' },
      h('button', { type: 'button', class: 'btn', id: 'leave-private', text: t('submit.leavePrivate'), on: { click: () => v.run(state => I.setPrivateEntry(state, false)) } }),
      close,
    ),
  );
}

export function awardSection(v: View): Child {
  const s = v.state, t = v.t, lang = v.lang;
  const result = rankAwards(s.teams);
  const rank = new Map(result.ranked.map((st, i) => [st.team, i + 1]));
  const headline = result.winners.length === 0 ? t('debrief.noAward')
    : result.winners.length === 1 ? t('debrief.winner', { teams: result.winners[0]! }) : t('debrief.shared', { teams: result.winners.join(', ') });
  return h('section', { class: 'stack' },
    h('p', { class: 'award', id: 'award', text: headline }),
    h('p', { class: 'muted', text: t('debrief.why') }),
    h('div', { class: 'table-wrap' }, h('table', {},
      h('thead', {}, h('tr', {},
        h('th', { scope: 'col', text: t('debrief.rank') }), h('th', { scope: 'col', text: t('common.teams') }), h('th', { scope: 'col', text: t('common.mission') }),
        h('th', { scope: 'col', text: t('common.status') }), h('th', { scope: 'col', class: 'num', text: t('common.score') }),
        h('th', { scope: 'col', class: 'num', text: t('common.cost') }), h('th', { scope: 'col', class: 'num', text: t('common.profit') }),
        h('th', { scope: 'col', class: 'num', text: t('common.bid') }), h('th', { scope: 'col', class: 'num', text: t('common.costPerPoint') }))),
      h('tbody', {}, [...s.teams].sort((a, b) => (rank.get(a.id) ?? 99) - (rank.get(b.id) ?? 99) || a.id - b.id).map(team => {
        const st = standing(team), mission = team.lockedMission as MissionId, cpp = costPerPointCents(st);
        const status = !team.submitted ? t('debrief.notSubmitted') : !st.eligible ? labelled(t('debrief.notEligible'), lang) + complianceText(mission, team.totals, lang) : complianceText(mission, team.totals, lang);
        return h('tr', { class: result.winners.includes(team.id) ? 'highlight' : '' },
          h('td', { class: 'num', text: rank.has(team.id) ? String(rank.get(team.id)) : t('common.empty') }),
          h('th', { scope: 'row', text: t('common.team', { n: team.id }) }),
          h('td', { text: missionName(mission, lang) }),
          h('td', { class: st.eligible ? 'ok' : 'warn', text: status }),
          h('td', { class: 'num', text: String(st.score) }),
          h('td', { class: 'num', text: money(team.cost, lang) }),
          h('td', { class: 'num', text: money(team.profit, lang, true) }),
          h('td', { class: 'num', text: money(st.bid, lang, true) }),
          h('td', { class: 'num', text: cpp === null ? t('common.empty') : money(cpp, lang, true) }),
        );
      })),
    )),
  );
}

function debriefView(v: View): Child {
  const t = v.t;
  return h('section', { class: 'stack' },
    h('h1', { text: t('debrief.title') }),
    awardSection(v),
    teamPurchases(v),
    h('button', { type: 'button', class: 'btn primary', id: 'close-room', text: t('debrief.closeRoom'), on: {
      click: e => void v.confirm({ title: t('debrief.closeTitle'), body: h('p', { text: t('debrief.closeBody') }), confirm: t('debrief.closeRoom'), opener: e.currentTarget as HTMLElement }, I.closeRoom),
    } }),
    ledgerPanel(v),
  );
}

function closedView(v: View): Child {
  const t = v.t;
  return h('section', { class: 'stack' },
    h('h1', { text: t('closed.title') }),
    h('p', { text: t('closed.hint') }),
    h('button', { type: 'button', class: 'btn primary', id: 'export-final', text: t('shell.export'), on: { click: () => v.exportBackup() } }),
    awardSection(v),
    teamPurchases(v),
    ledgerPanel(v),
  );
}

export function instructorBody(v: View, clock: Clock): Child {
  switch (v.state.phase) {
    case 'setup': return setupView(v);
    case 'practice': return practiceView(v);
    case 'planning': return planningView(v);
    case 'auction': return auctionView(v, clock);
    case 'build': return buildView(v);
    case 'submit': return submitView(v);
    case 'debrief': return debriefView(v);
    case 'closed': return closedView(v);
  }
}

/** An imported or restored open lot comes back paused for review (MPES §8.7). */
export function pauseOpenLot(state: I.InstructorState, now: number): I.InstructorState {
  if (state.phase !== 'auction' || !state.open || state.pausedRemaining !== null) return state;
  const remaining = state.timingMode === 'TIMED' && state.deadline !== null ? Math.max(0, state.deadline - now) : 0;
  return { ...state, pausedRemaining: remaining };
}

export function startInstructor(root: HTMLElement, lang: Language, storage: StoragePort, clock: Clock = systemClock): View {
  const loaded = storage.available() ? storage.read(INSTRUCTOR_KEY) : { ok: false as const };
  let initial = I.instructorShell(lang), unreadable: string | null = null;
  if (loaded.ok && loaded.raw) {
    try { initial = pauseOpenLot(validateInstructor(JSON.parse(loaded.raw)), clock()); }
    catch { unreadable = loaded.raw; }
  }
  const controller = new Controller<I.InstructorState>(initial, {
    key: INSTRUCTOR_KEY, storage,
    validate: state => { if (state.sessionCode !== null) validateInstructor(JSON.parse(JSON.stringify(instructorForSave(state)))); },
    serialize: state => state.sessionCode === null ? null : JSON.stringify(instructorForSave(state)),
  });
  const view: View = new RoleView(root, {
    role: 'INSTRUCTOR', controller, storageAvailable: storage.available(), unreadableSave: unreadable,
    brand: v => v.t('shell.instructor'),
    setLanguage: I.setLanguage,
    newSession: I.newSession,
    validateImport: validateInstructor,
    afterImport: state => {
      const paused = pauseOpenLot(state, clock());
      return { state: paused, notice: paused !== state ? 'backup.importedPaused' : 'backup.imported' };
    },
    forExport: instructorForSave,
    body: v => instructorBody(v, clock),
  });
  view.render();
  startTimer(view, clock);
  document.addEventListener('keydown', auctionKeys);
  return view;
}

/** Live-auction shortcuts (MPES §7.1): each key presses the matching visible, enabled button. */
const KEY_TARGETS: Record<string, string[]> = {
  s: ['#sell'], u: ['#unsold'], o: ['#open-bidding'], r: ['#reveal'], n: ['#next-lot'], p: ['#pause', '#resume'], e: ['#extend'],
};
function auctionKeys(event: KeyboardEvent): void {
  if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) return;
  const target = event.target as HTMLElement | null;
  if (target?.closest('input, textarea, select, [contenteditable], dialog') || document.querySelector('dialog[open]')) return;
  const key = event.key.toLowerCase();
  const ids = /^[0-9]$/.test(key) ? [`#bid-${key === '0' ? 10 : key}`] : KEY_TARGETS[key];
  for (const id of ids ?? []) {
    const button = document.querySelector<HTMLButtonElement>(id);
    if (button && !button.disabled) { event.preventDefault(); button.click(); return; }
  }
}

/** Updates only the countdown text while a timed lot is open; re-renders once when time runs out. */
function startTimer(view: View, clock: Clock): void {
  let wasTimedOut = false;
  setInterval(() => {
    const s = view.state;
    if (s.phase !== 'auction' || !s.open || s.timingMode !== 'TIMED') { wasTimedOut = false; return; }
    const status = I.auctionStatus(s, clock());
    const element = document.getElementById('timer');
    if (element) element.textContent = status.timedOut ? view.t('auction.timeUp') : seconds(status.remainingMs ?? 0);
    if (status.timedOut !== wasTimedOut) { wasTimedOut = status.timedOut; view.render(); }
  }, 250);
}
