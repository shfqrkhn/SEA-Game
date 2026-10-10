// Reusable views: cards, effects, mission minimums, gap meter, purchases (MPES §7.4).
import { CAPABILITIES, MISSIONS, mission as missionDef, type Capability, type MissionId, type Totals, type Effects } from '../domain/data.ts';
import type { MarketCard } from '../domain/market.ts';
import { compliant, score, shortfalls, sumEffects } from '../domain/missions.ts';
import type { Purchase } from '../domain/team.ts';
import { cardArt } from './art.ts';
import { h, type Child } from './dom.ts';
import { labelled, list, money, signed } from './format.ts';
import { translate, type Language, type StringKey } from './i18n.ts';

const tr = (lang: Language) => (key: StringKey, vars?: Readonly<Record<string, string | number>>) => translate(lang, key, vars);

export function missionName(id: MissionId, lang: Language): string {
  return missionDef(id).title[lang];
}

export function effectsList(effects: Effects, lang: Language): Child {
  const t = tr(lang);
  return h('ul', { class: 'effects' }, CAPABILITIES.filter(k => effects[k] !== undefined).map(k =>
    h('li', { class: (effects[k] ?? 0) < 0 ? 'penalty' : 'gain' },
      h('span', { class: 'num', text: signed(effects[k]!) }), ' ', `${t(`unit.${k}` as StringKey)} · ${t(`cap.${k}` as StringKey)}`)));
}

export function cardDetails(card: MarketCard, lang: Language, headingLevel: 'h2' | 'h3' = 'h3'): HTMLElement {
  const t = tr(lang);
  return h('figure', { class: 'card-figure', 'data-card': card.id },
    cardArt(card.id, card.cat, `${card.id} · ${card.title[lang]}`),
    h('figcaption', { class: 'stack' },
      h('p', { class: 'muted small', text: `${t(`cat.${card.cat}` as StringKey)} · ${card.id}` }),
      h(headingLevel, { text: card.title[lang] }),
      h('p', {}, labelled(t('common.startPrice'), lang), h('strong', { class: 'num', text: money(card.start, lang) })),
      effectsList(card.e, lang),
    ),
  );
}

export function missionTable(lang: Language, highlight?: MissionId | null): HTMLElement {
  const t = tr(lang);
  const keys: Capability[] = ['CAP', 'MOB', 'FP', 'PRO', 'COM', 'SA', 'REC', 'MC'];
  return h('div', { class: 'table-wrap' }, h('table', {},
    h('caption', { class: 'visually-hidden', text: t('planning.requirements') }),
    h('thead', {}, h('tr', {}, h('th', { scope: 'col', text: t('common.mission') }), keys.map(k => h('th', { scope: 'col', class: 'num', title: t(`cap.${k}` as StringKey), text: k })))),
    h('tbody', {}, MISSIONS.map(m => h('tr', { class: m.id === highlight ? 'highlight' : '' },
      h('th', { scope: 'row', text: m.title[lang] }),
      keys.map(k => h('td', { class: 'num', text: m.minimums[k] === undefined ? t('common.empty') : String(m.minimums[k]) })),
    ))),
  ));
}

/** Current totals against every minimum, with the shortfall in words (never colour alone). */
export function gapMeter(id: MissionId, totals: Totals, lang: Language, preview?: Totals): HTMLElement {
  const t = tr(lang);
  const minimums = missionDef(id).minimums;
  const rows = CAPABILITIES.filter(k => minimums[k] !== undefined).map(k => {
    const required = minimums[k]!, value = totals[k], after = preview?.[k];
    const scale = Math.max(required * 2, value, after ?? 0, 1);
    const fill = h('span', { class: 'fill' }), mark = h('span', { class: 'mark' });
    fill.style.width = `${Math.max(0, Math.min(100, (value / scale) * 100))}%`;
    mark.style.left = `${(required / scale) * 100}%`;
    const met = value >= required;
    return h('div', { class: `meter ${met ? '' : 'short'}`, role: 'group', 'aria-label': t(`cap.${k}` as StringKey) },
      h('span', { class: 'small', title: t(`cap.${k}` as StringKey), text: k }),
      h('span', { class: 'bar', 'aria-hidden': 'true' }, fill, mark),
      h('span', { class: 'small num' },
        `${value} / ${required} `,
        h('span', { class: met ? 'ok' : 'warn', text: met ? t('common.met') : t('common.short', { n: required - value }) }),
        after !== undefined && after !== value ? h('span', { class: 'muted', text: ` → ${after}` }) : null,
      ),
    );
  });
  const missing = shortfalls(id, totals).map(s => t(`cap.${s.capability}` as StringKey));
  return h('section', { class: 'stack', 'aria-label': t('strack.gap') },
    rows,
    h('p', { class: missing.length ? 'warn' : 'ok', text: missing.length ? t('common.notCompliant', { list: list(missing, lang) }) : t('common.compliant') }),
    h('p', {}, labelled(t('common.score'), lang), h('strong', { class: 'num', text: String(score(id, totals)) })),
  );
}

export interface PurchasesOptions {
  readonly action?: (p: Purchase) => Child;
  /** Adds "score it adds" per card: score with all purchases minus score without that card. */
  readonly mission?: MissionId;
}

export function purchasesTable(purchases: readonly Purchase[], lang: Language, options: PurchasesOptions = {}): HTMLElement {
  const t = tr(lang), { action, mission } = options;
  if (purchases.length === 0) return h('p', { class: 'muted', text: t('common.noPurchases') });
  const all = sumEffects(purchases.map(p => p.e));
  const value = (p: Purchase): Child => {
    if (!mission) return null;
    const without = sumEffects(purchases.filter(x => x !== p).map(x => x.e));
    const points = score(mission, all) - score(mission, without);
    const needed = compliant(mission, all) && !compliant(mission, without);
    return h('td', { class: 'num' }, signed(points), needed ? h('span', { class: 'small warn', text: ` · ${t('value.needed')}` }) : null);
  };
  return h('div', { class: 'table-wrap' }, h('table', {},
    h('caption', { class: 'visually-hidden', text: t('common.purchases') }),
    h('thead', {}, h('tr', {},
      h('th', { scope: 'col', text: t('strack.round') }), h('th', { scope: 'col', text: t('strack.lot') }),
      h('th', { scope: 'col', text: t('common.card') }), h('th', { scope: 'col', text: t('common.effects') }),
      h('th', { scope: 'col', class: 'num', text: t('common.price') }),
      mission ? h('th', { scope: 'col', class: 'num', text: t('value.points') }) : null,
      action ? h('th', { scope: 'col' }, h('span', { class: 'visually-hidden', text: t('sbuild.remove') })) : null,
    )),
    h('tbody', {}, purchases.map(p => h('tr', {},
      h('td', { class: 'num', text: String(p.round) }), h('td', { class: 'num', text: String(p.lot) }),
      h('td', {}, h('span', { class: 'mono small', text: p.id }), ' ', p.title[lang]),
      h('td', { class: 'small', text: CAPABILITIES.filter(k => p.e[k] !== undefined).map(k => `${k} ${signed(p.e[k]!)}`).join(', ') }),
      h('td', { class: 'num', text: money(p.paid, lang) }),
      value(p),
      action ? h('td', {}, action(p)) : null,
    ))),
  ), mission ? h('p', { class: 'muted small', text: t('value.hint') }) : null);
}

export function complianceText(id: MissionId, totals: Totals, lang: Language): string {
  const t = tr(lang);
  if (compliant(id, totals)) return t('common.compliant');
  return t('common.notCompliant', { list: list(shortfalls(id, totals).map(s => t(`cap.${s.capability}` as StringKey)), lang) });
}
