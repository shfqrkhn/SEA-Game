// Deterministic market deal (MPES §6.3). Bit-exact with schema-3 saves; do not "improve".
import { CARDS, LOTS, ROUND_SLOTS, ROUNDS, card as cardDef, categoryOfLot, type Category, type CardDef, type Effects, type Bilingual } from './data.ts';
import { fail } from './errors.ts';

/** Schema-3 card shape stored in saves. */
export interface MarketCard {
  readonly id: string;
  readonly title: Bilingual;
  readonly start: number;
  readonly e: Effects;
  readonly cat: Category;
  readonly round: number;
  readonly lot: number;
  readonly instance: string;
}

export function instanceId(round: number, lot: number, id: string): string {
  return `R${round}-L${lot}-${id}`;
}

/** The card as it appears in a given slot; rejects a card whose category does not fit the slot. */
export function slotCard(id: string, round: number, lot: number): MarketCard {
  const def = cardDef(id);
  if (!def || !Number.isInteger(round) || round < 1 || round > ROUNDS || !Number.isInteger(lot) || lot < 1 || lot > LOTS
    || def.category !== categoryOfLot(lot)) fail('card');
  return {
    id: def.id, title: { en: def.title.en, fr: def.title.fr }, start: def.startCents, e: { ...def.effects },
    cat: def.category, round, lot, instance: instanceId(round, lot, def.id),
  };
}

function hashStream(text: string): () => number {
  let h = 1779033703 ^ text.length;
  for (let i = 0; i < text.length; i++) {
    h = Math.imul(h ^ text.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^ (h >>> 16)) >>> 0;
  };
}

function sfc32(text: string): () => number {
  const next = hashStream(text);
  let a = next(), b = next(), c = next(), d = next();
  return () => {
    const t = (((a + b) | 0) + d) | 0;
    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}

export const SEED_PATTERN = /^[0-9A-F]{32}$/;

export function deal(seed: string): MarketCard[][] {
  if (!SEED_PATTERN.test(seed)) fail('invalid-state', 'seed');
  const random = sfc32('MARKET|' + seed);
  const pools = new Map<Category, CardDef[]>();
  for (const category of new Set(ROUND_SLOTS)) {
    const pool = CARDS.filter(c => c.category === category);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [pool[i], pool[j]] = [pool[j]!, pool[i]!];
    }
    pools.set(category, pool);
  }
  const used = new Map<Category, number>();
  return Array.from({ length: ROUNDS }, (_, r) => ROUND_SLOTS.map((category, l) => {
    const index = used.get(category) ?? 0;
    used.set(category, index + 1);
    return slotCard(pools.get(category)![index]!.id, r + 1, l + 1);
  }));
}
