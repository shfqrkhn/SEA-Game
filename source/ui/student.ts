// Student companion (MPES §7.3).
import { Controller } from '../app/controller.ts';
import type { StoragePort } from '../app/ports.ts';
import { costPerPointCents } from '../domain/award.ts';
import { CARDS, CATEGORIES, CAPABILITIES, LOTS, MISSIONS, ROUNDS, isMissionId, type Category, type MissionId } from '../domain/data.ts';
import { DomainError } from '../domain/errors.ts';
import { compliant, score, sumEffects } from '../domain/missions.ts';
import { add } from '../domain/money.ts';
import { validateStudent } from '../domain/saves.ts';
import * as S from '../domain/student.ts';
import { cardDetails, complianceText, gapMeter, missionName, missionTable, purchasesTable } from './components.ts';
import { h, type Child } from './dom.ts';
import { labelled, money, signed } from './format.ts';
import type { Language, StringKey } from './i18n.ts';
import { practiceCard } from './instructor.ts';
import { RoleView } from './view.ts';
import { VehicleBay } from '../bay/bay.ts';
import { hasShowcase, Showcase } from '../showcase/showcase.ts';
import { hudEnabled } from './hud.ts';
import { vehicleArt } from './art.ts';

let bay: VehicleBay | null = null;
/** One persistent bay per page; re-attached on every render so its WebGL context survives. */
function bayFor(v: View, mission: MissionId): Child {
  const s = joined(v);
  const text = { unavailable: v.t('bay.unavailable'), hint: v.t('bay.hint'), fallback: () => vehicleArt(mission, missionName(mission, v.lang)) };
  if (bay) bay.setText(text); else bay = new VehicleBay(text);
  bay.update({ mission, parts: s.team.purchases.map(p => ({ id: p.id, category: p.cat })) },
    v.t('bay.summary', { mission: missionName(mission, v.lang), n: s.team.purchases.length }));
  return h('section', { class: 'panel stack', 'aria-labelledby': 'bay-heading' }, h('h2', { id: 'bay-heading', text: v.t('bay.title') }), bay.element);
}

let showcase: Showcase | null = null;
/** HUD prototype (MPES §17 V1): the pre-rendered showcase replaces the bay where renders exist. */
function showcaseFor(v: View, mission: MissionId): Child | null {
  if (!hudEnabled() || !hasShowcase(mission)) return null;
  const s = joined(v), t = v.t;
  showcase ??= new Showcase();
  return showcase.update(mission, s.team.purchases.map(p => ({ id: p.id, title: p.title[v.lang] })),
    t('showcase.summary', { mission: missionName(mission, v.lang), n: s.team.purchases.length }), {
      title: t('showcase.title'), view: t('showcase.view'), front: t('showcase.front'), rear: t('showcase.rear'),
      turntable: t('showcase.turntable'), rotate: t('showcase.rotate'), installed: t('showcase.installed'), none: t('showcase.none'),
    });
}

type View = RoleView<S.StudentState>;
export const STUDENT_KEY = 'SEA_STUDENT_V300';
const joined = (v: View) => v.state as S.JoinedStudent;

function joinView(v: View): Child {
  const t = v.t;
  const mission = v.draft('join-mission', '');
  return h('section', { class: 'stack narrow' },
    h('h1', { text: t('join.title') }),
    h('div', { class: 'field' },
      h('label', { for: 'join-code', text: t('join.code') }),
      v.input('join-code', { autocomplete: 'off', autocapitalize: 'characters', spellcheck: 'false', maxlength: '32', 'aria-describedby': 'join-code-hint', class: 'mono' }),
      h('span', { class: 'hint', id: 'join-code-hint', text: t('join.codeHint') }),
    ),
    h('div', { class: 'field' },
      h('label', { for: 'join-team', text: t('join.team') }),
      h('select', { id: 'join-team', on: { change: e => v.drafts.set('join-team', (e.target as HTMLSelectElement).value) } },
        Array.from({ length: 10 }, (_, i) => h('option', { value: String(i + 1), text: String(i + 1), selected: v.draft('join-team', '1') === String(i + 1) }))),
    ),
    h('div', { class: 'field' },
      h('label', { for: 'join-mission', text: t('join.mission') }),
      h('select', { id: 'join-mission', on: { change: e => { v.drafts.set('join-mission', (e.target as HTMLSelectElement).value); v.render(); } } },
        h('option', { value: '', text: t('planning.choose'), selected: mission === '' }),
        MISSIONS.map(m => h('option', { value: m.id, text: m.title[v.lang], selected: mission === m.id }))),
    ),
    h('button', { type: 'button', class: 'btn primary', id: 'join', text: t('join.start'), on: { click: () => {
      if (!isMissionId(mission)) { v.say(t('error.mission'), 'bad'); return; }
      v.run(state => S.join(state, v.draft('join-code'), Number(v.draft('join-team', '1')), mission), () => v.drafts.clear());
    } } }),
  );
}

function practiceView(v: View): Child {
  const s = joined(v), t = v.t;
  return h('section', { class: 'split' },
    h('div', { class: 'stack' },
      h('h1', { text: t('practice.title') }),
      h('p', { text: t('practice.student') }),
      s.practiceWon
        ? [h('p', { class: 'ok', text: t('practice.recorded') }),
          h('div', { class: 'cluster' },
            h('button', { type: 'button', class: 'btn primary', id: 'student-planning', text: t('practice.studentNext'), on: { click: () => v.run(S.openPlanning) } }),
            h('button', { type: 'button', class: 'btn', id: 'student-practice-reset', text: t('practice.reset'), on: { click: () => v.run(S.resetPractice) } }))]
        : h('button', { type: 'button', class: 'btn primary', id: 'record-practice', text: t('practice.record'), on: { click: () => v.run(S.recordPracticeWin) } }),
    ),
    practiceCard(v.lang),
  );
}

/** For each category: the range of each capability effect across its cards (planning aid). */
function categoryGuide(lang: Language, t: View['t']): Child {
  const rows = CATEGORIES.map(category => {
    const cards = CARDS.filter(c => c.category === category);
    const ranges = CAPABILITIES.flatMap(k => {
      const values = cards.map(c => c.effects[k]).filter((x): x is number => x !== undefined);
      if (values.length === 0) return [];
      const min = Math.min(...values), max = Math.max(...values);
      return [`${k} ${min === max ? signed(min) : t('splan.range', { min: signed(min), max: signed(max) })}`];
    });
    const prices = cards.map(c => c.startCents);
    return h('tr', {},
      h('th', { scope: 'row', text: t(`cat.${category}` as StringKey) }),
      h('td', { class: 'small', text: ranges.join(' · ') }),
      h('td', { class: 'num small', text: `${money(Math.min(...prices), lang)} – ${money(Math.max(...prices), lang)}` }),
    );
  });
  return h('div', { class: 'table-wrap' }, h('table', {},
    h('thead', {}, h('tr', {}, h('th', { scope: 'col', text: t('common.card') }), h('th', { scope: 'col', text: t('common.effects') }), h('th', { scope: 'col', class: 'num', text: t('common.startPrice') }))),
    h('tbody', {}, rows)));
}

function planningView(v: View): Child {
  const s = joined(v), t = v.t, mission = s.team.mission as MissionId;
  const area = (field: 'plan' | 'risks', label: StringKey, hint: StringKey) => h('div', { class: 'field' },
    h('label', { for: `plan-${field}`, text: t(label) }),
    h('span', { class: 'hint', id: `plan-${field}-hint`, text: t(hint) }),
    h('textarea', { id: `plan-${field}`, maxlength: String(S.PLAN_MAX), 'aria-describedby': `plan-${field}-hint`, value: s[field],
      on: { input: e => v.run(state => S.setPlanText(state, field, (e.target as HTMLTextAreaElement).value)) } }),
  );
  return h('section', { class: 'split' },
    h('div', { class: 'stack' },
      h('h1', { text: t('splan.title') }),
      h('div', { class: 'field' },
        h('label', { for: 'plan-mission', text: t('common.mission') }),
        h('select', { id: 'plan-mission', on: { change: e => { const value = (e.target as HTMLSelectElement).value; if (isMissionId(value)) v.run(state => S.selectMission(state, value)); } } },
          MISSIONS.map(m => h('option', { value: m.id, text: m.title[v.lang], selected: m.id === mission }))),
      ),
      s.vehicleChangeNotice ? h('p', { class: 'warn', text: t('splan.changed') }) : null,
      h('label', { class: 'choice' },
        h('input', { type: 'checkbox', id: 'plan-confirm', checked: s.vehicleConfirmed, on: { change: e => v.run(state => S.confirmVehicle(state, (e.target as HTMLInputElement).checked)) } }),
        h('span', { text: t('splan.confirm') })),
      area('plan', 'splan.plan', 'splan.planHint'),
      area('risks', 'splan.risks', 'splan.risksHint'),
      h('div', { class: 'field' },
        h('label', { for: 'plan-wtp', text: t('splan.wtp') }),
        h('span', { class: 'hint', id: 'plan-wtp-hint', text: t('splan.wtpHint') }),
        v.savingInput('plan-wtp', String(s.maxWtpCents / 100), S.setMaxWtp, { inputmode: 'numeric', autocomplete: 'off', 'aria-describedby': 'plan-wtp-hint' }),
      ),
      h('button', { type: 'button', class: 'btn primary', id: 'student-start-auction', disabled: !s.vehicleConfirmed, text: t('splan.started'), on: {
        click: e => void v.confirm({ title: t('splan.startedTitle'), body: h('p', { text: t('splan.startedBody') }), confirm: t('splan.started'), opener: e.currentTarget as HTMLElement }, S.startAuction),
      } }),
    ),
    h('div', { class: 'stack' },
      h('section', { class: 'panel stack' }, h('h2', { text: t('splan.minimums', { mission: missionName(mission, v.lang) }) }), gapMeter(mission, s.team.totals, v.lang)),
      h('details', { class: 'panel' }, h('summary', { text: t('splan.guide') }), categoryGuide(v.lang, t)),
      h('details', { class: 'panel' }, h('summary', { text: t('planning.requirements') }), missionTable(v.lang, mission)),
    ),
  );
}

function auctionView(v: View): Child {
  const s = joined(v), t = v.t, mission = s.lockedMission as MissionId, lang = v.lang;
  const round = s.round + 1, lot = s.lot + 1, key = S.scratchKey(round, lot), scratch = s.scratch[key] ?? { wtp: '', note: '' };
  const winsLeft = 2 - (s.team.purchasesByRound[s.round] ?? 0);
  const card = s.currentCard;
  const preview = card ? sumEffects([...s.team.purchases.map(p => p.e), card.e]) : undefined;
  const position = h('div', { class: 'cluster' },
    h('label', { for: 'pos-round', text: t('strack.round') }),
    h('select', { id: 'pos-round', on: { change: e => v.run(state => S.setPosition(state, Number((e.target as HTMLSelectElement).value), state.lot + 1)) } },
      Array.from({ length: ROUNDS }, (_, i) => h('option', { value: String(i + 1), text: String(i + 1), selected: i === s.round }))),
    h('label', { for: 'pos-lot', text: t('strack.lot') }),
    h('select', { id: 'pos-lot', on: { change: e => v.run(state => S.setPosition(state, state.round + 1, Number((e.target as HTMLSelectElement).value))) } },
      Array.from({ length: LOTS }, (_, i) => h('option', { value: String(i + 1), text: String(i + 1), selected: i === s.lot }))),
  );
  return h('div', { class: 'split' },
    h('section', { class: 'stack panel', 'aria-labelledby': 'track-heading' },
      h('h1', { id: 'track-heading', text: t('common.roundLot', { round, lot }) }),
      h('fieldset', {}, h('legend', { text: t('strack.position') }), position),
      h('div', { class: 'field' },
        h('label', { for: 'card-id', text: t('strack.cardId') }),
        h('div', { class: 'cluster' },
          v.input('card-id', { autocomplete: 'off', autocapitalize: 'characters', spellcheck: 'false', maxlength: '20', class: 'mono', size: '8',
            value: card?.id ?? '' }),
          h('button', { type: 'button', class: 'btn', id: 'load-card', text: t('strack.load'), on: { click: () => v.run(state => S.loadCard(state, v.draft('card-id', card?.id ?? ''))) } }),
        ),
      ),
      card ? [
        cardDetails(card, lang, 'h2'),
        h('section', { class: 'stack', 'aria-labelledby': 'impact-heading' },
          h('h3', { id: 'impact-heading', text: t('strack.impact') }),
          h('p', {}, `${labelled(t('common.score'), lang)}${score(mission, s.team.totals)} → `, h('strong', { text: String(score(mission, preview!)) }),
            ` · ${complianceText(mission, preview!, lang)}`),
        ),
        h('div', { class: 'field' },
          h('label', { for: 'paid', text: t('strack.paid') }),
          h('div', { class: 'cluster' },
            v.input('paid', { inputmode: 'numeric', autocomplete: 'off', value: String(card.start / 100), size: '10' }),
            h('button', { type: 'button', class: 'btn primary', id: 'record-win', disabled: winsLeft <= 0, text: t('strack.record'), on: {
              click: () => v.run(state => S.recordWin(state, v.draft('paid', String(card.start / 100))), () => { v.drafts.delete('paid'); v.drafts.delete('card-id'); }),
            } }),
          ),
        ),
      ] : h('p', { class: 'muted', text: t('strack.noCard') }),
      h('p', { class: 'small', text: t('strack.winsLeft', { n: Math.max(0, winsLeft) }) }),
      h('div', { class: 'cluster' },
        h('button', { type: 'button', class: 'btn', id: 'not-ours', text: t('strack.notOurs'), on: { click: () => v.run(S.notOurs, () => { v.drafts.delete('card-id'); v.drafts.delete('paid'); }) } }),
        h('button', { type: 'button', class: 'btn ghost', id: 'finish-early', text: t('strack.finish'), on: {
          click: e => void v.confirm({ title: t('strack.finishTitle'), body: h('p', { text: t('strack.finishBody') }), confirm: t('strack.finish'), opener: e.currentTarget as HTMLElement }, S.finishAuction),
        } }),
      ),
      h('details', { class: 'stack' }, h('summary', { text: t('strack.notes') }),
        h('div', { class: 'field' }, h('label', { for: 'scratch-wtp', text: t('strack.wtp') }),
          v.savingInput('scratch-wtp', scratch.wtp, (state, value) => S.editScratch(state, 'wtp', value), { inputmode: 'numeric', autocomplete: 'off' })),
        h('div', { class: 'field' }, h('label', { for: 'scratch-note', text: t('strack.notes') }),
          h('textarea', { id: 'scratch-note', maxlength: String(S.NOTE_MAX), value: scratch.note, on: { input: e => v.run(state => S.editScratch(state, 'note', (e.target as HTMLTextAreaElement).value)) } })),
      ),
    ),
    h('div', { class: 'stack' },
      h('section', { class: 'panel stack', 'aria-labelledby': 'gap-heading' },
        h('h2', { id: 'gap-heading', text: `${t('strack.gap')} · ${missionName(mission, lang)}` }),
        gapMeter(mission, s.team.totals, lang, preview),
        h('p', { text: t('strack.spent', { amount: money(s.team.cost, lang) }) }),
      ),
      showcaseFor(v, mission) ?? bayFor(v, mission),
      h('section', { class: 'panel' }, h('h2', { text: t('common.purchases') }), purchasesTable(s.team.purchases, lang)),
    ),
  );
}

function buildView(v: View): Child {
  const s = joined(v), t = v.t, mission = s.lockedMission as MissionId, lang = v.lang;
  const field = (id: string, label: StringKey, props: Record<string, unknown>) => h('div', { class: 'field' }, h('label', { for: id, text: t(label) }), v.input(id, props));
  return h('div', { class: 'split' },
    h('section', { class: 'stack' },
      h('h1', { text: t('sbuild.title') }),
      h('p', { text: t('sbuild.hint') }),
      purchasesTable(s.team.purchases, lang, { action: p => h('button', { type: 'button', class: 'btn danger', id: `remove-${p.instance}`, 'aria-label': `${t('sbuild.remove')} ${p.id}`, text: t('sbuild.remove'), on: {
        click: e => void v.confirm({ title: t('sbuild.removeTitle'), body: h('p', { text: `${p.id} · ${p.title[lang]} · ${money(p.paid, lang)}. ${t('sbuild.removeBody')}` }), confirm: t('sbuild.remove'), danger: true, opener: e.currentTarget as HTMLElement },
          state => S.removeOwnPurchase(state, p.instance)),
      } }) }),
      h('details', { class: 'panel stack' }, h('summary', { text: t('sbuild.add') }),
        h('div', { class: 'cluster' },
          field('add-id', 'common.cardId', { autocomplete: 'off', class: 'mono', size: '8', maxlength: '20' }),
          field('add-round', 'strack.round', { type: 'number', min: '1', max: '7', inputmode: 'numeric', size: '3' }),
          field('add-lot', 'strack.lot', { type: 'number', min: '1', max: '10', inputmode: 'numeric', size: '3' }),
          field('add-paid', 'strack.paid', { inputmode: 'numeric', autocomplete: 'off', size: '10' }),
        ),
        h('button', { type: 'button', class: 'btn', id: 'add-purchase', text: t('sbuild.addButton'), on: { click: () => v.run(
          state => S.addMissingPurchase(state, v.draft('add-id'), Number(v.draft('add-round')), Number(v.draft('add-lot')), v.draft('add-paid')),
          () => ['add-id', 'add-round', 'add-lot', 'add-paid'].forEach(k => v.drafts.delete(k))) } }),
      ),
      h('button', { type: 'button', class: 'btn primary', id: 'open-submit', text: t('sbuild.done'), on: { click: () => v.run(S.openSubmit) } }),
    ),
    h('section', { class: 'panel stack' }, h('h2', { text: `${t('strack.gap')} · ${missionName(mission, lang)}` }), gapMeter(mission, s.team.totals, lang),
      h('p', { text: t('strack.spent', { amount: money(s.team.cost, lang) }) })),
  );
}

function submitView(v: View): Child {
  const s = joined(v), t = v.t, mission = s.lockedMission as MissionId, lang = v.lang;
  let profit: number | null = null;
  try { profit = S.draftProfit(s); } catch (e) { if (!(e instanceof DomainError)) throw e; }
  const points = score(mission, s.team.totals), ok = compliant(mission, s.team.totals);
  const bid = profit === null ? null : add(s.team.cost, profit);
  const cpp = bid === null ? null : costPerPointCents({ bid, score: points });
  return h('section', { class: 'stack narrow' },
    h('h1', { text: t('ssubmit.title') }),
    h('p', {}, labelled(t('common.cost'), lang), h('strong', { class: 'num', text: money(s.team.cost, lang) }), ` · ${labelled(t('common.score'), lang)}`, h('strong', { class: 'num', text: String(points) })),
    !ok ? h('p', { class: 'warn', text: t('ssubmit.notCompliant') }) : points === 0 ? h('p', { class: 'warn', text: t('ssubmit.noScore') }) : null,
    h('fieldset', { class: 'cluster' }, h('legend', { text: t('ssubmit.mode') }),
      (['AMOUNT', 'PERCENT'] as const).map(mode => h('label', { class: 'choice' },
        h('input', { type: 'radio', name: 'profit-mode', id: `mode-${mode}`, checked: s.profitMode === mode, on: { change: () => v.run(state => S.setProfitMode(state, mode)) } }),
        h('span', { text: t(mode === 'AMOUNT' ? 'ssubmit.amount' : 'ssubmit.percent') })))),
    h('div', { class: 'field' },
      h('label', { for: 'profit-input', text: `${t('ssubmit.value')} (${t(s.profitMode === 'AMOUNT' ? 'ssubmit.amount' : 'ssubmit.percent')})` }),
      h('input', { id: 'profit-input', inputmode: 'decimal', autocomplete: 'off', maxlength: '20', value: s.profitInput, 'aria-invalid': profit === null ? 'true' : undefined,
        on: { input: e => v.run(state => S.setProfitInput(state, (e.target as HTMLInputElement).value)) } }),
      profit === null ? h('span', { class: 'error', text: t(s.profitMode === 'AMOUNT' ? 'error.money' : 'error.percent') }) : null,
    ),
    bid !== null ? h('p', { class: 'lead', id: 'bid-preview' }, t('ssubmit.bid', { amount: money(bid, lang, true) }),
      cpp !== null ? h('span', { class: 'muted', text: ` · ${t('ssubmit.cpp', { amount: money(cpp, lang, true) })}` }) : null) : null,
    h('button', { type: 'button', class: 'btn primary', id: 'finish-submit', disabled: profit === null, text: t('ssubmit.finish'), on: { click: () => v.run(S.finishSubmit) } }),
  );
}

function spendingByCategory(s: S.JoinedStudent, lang: Language, t: View['t']): Child {
  const totals = new Map<Category, number>();
  for (const p of s.team.purchases) totals.set(p.cat, (totals.get(p.cat) ?? 0) + p.paid);
  return h('ul', {}, CATEGORIES.filter(c => totals.has(c)).map(c => h('li', {}, labelled(t(`cat.${c}` as StringKey), lang), h('span', { class: 'num', text: money(totals.get(c)!, lang) }))));
}

function debriefView(v: View, closed: boolean): Child {
  const s = joined(v), t = v.t, mission = s.lockedMission as MissionId, lang = v.lang;
  const points = score(mission, s.team.totals), bid = add(s.team.cost, s.profitCents), cpp = costPerPointCents({ bid, score: points });
  return h('div', { class: 'split' },
    h('section', { class: 'stack' },
      h('h1', { text: closed ? t('closed.title') : t('sdebrief.title') }),
      h('p', { class: 'lead', text: t('ssubmit.tell', { n: s.teamId, amount: money(s.profitCents, lang, true) }) }),
      h('p', {}, t('ssubmit.bid', { amount: money(bid, lang, true) }), cpp !== null ? ` · ${t('ssubmit.cpp', { amount: money(cpp, lang, true) })}` : ''),
      h('section', { class: 'panel stack' }, h('h2', { text: t('sdebrief.plan') }),
        s.planBaseline ? h('p', { class: 'prewrap', text: s.planBaseline }) : h('p', { class: 'muted', text: t('sdebrief.noPlan') })),
      h('section', { class: 'panel stack' }, h('h2', { text: t('sdebrief.spend') }), spendingByCategory(s, lang, t)),
      closed ? h('button', { type: 'button', class: 'btn primary', id: 'export-final', text: t('shell.export'), on: { click: () => v.exportBackup() } })
        : h('button', { type: 'button', class: 'btn primary', id: 'student-close', text: t('sdebrief.close'), on: {
          click: e => void v.confirm({ title: t('sdebrief.closeTitle'), body: h('p', { text: t('sdebrief.closeBody') }), confirm: t('sdebrief.close'), opener: e.currentTarget as HTMLElement }, S.closeStudent),
        } }),
    ),
    h('section', { class: 'stack' },
      h('section', { class: 'panel stack' }, h('h2', { text: `${t('sdebrief.outcome')} · ${missionName(mission, lang)}` }), gapMeter(mission, s.team.totals, lang)),
      h('section', { class: 'panel' }, h('h2', { text: t('common.purchases') }), purchasesTable(s.team.purchases, lang, { mission })),
    ),
  );
}

export function studentBody(v: View): Child {
  if (v.state.team === null) return joinView(v);
  switch (v.state.phase) {
    case 'setup': return joinView(v);
    case 'practice': return practiceView(v);
    case 'planning': return planningView(v);
    case 'auction': return auctionView(v);
    case 'build': return buildView(v);
    case 'submit': return submitView(v);
    case 'debrief': return debriefView(v, false);
    case 'closed': return debriefView(v, true);
  }
}

export function startStudent(root: HTMLElement, lang: Language, storage: StoragePort): View {
  const loaded = storage.available() ? storage.read(STUDENT_KEY) : { ok: false as const };
  let initial: S.StudentState = S.studentShell(lang), unreadable: string | null = null;
  if (loaded.ok && loaded.raw) {
    try { initial = validateStudent(JSON.parse(loaded.raw)); } catch { unreadable = loaded.raw; }
  }
  const controller = new Controller<S.StudentState>(initial, {
    key: STUDENT_KEY, storage,
    validate: state => { if (state.team !== null) validateStudent(JSON.parse(JSON.stringify(state))); },
    serialize: state => state.team === null ? null : JSON.stringify(state),
  });
  const view: View = new RoleView(root, {
    role: 'STUDENT', controller, storageAvailable: storage.available(), unreadableSave: unreadable,
    brand: v => v.state.teamId ? v.t('shell.student', { n: v.state.teamId }) : v.t('shell.studentNoTeam'),
    setLanguage: S.setLanguage,
    newSession: S.newSession,
    validateImport: validateStudent,
    forExport: state => state,
    body: studentBody,
  });
  view.render();
  return view;
}

