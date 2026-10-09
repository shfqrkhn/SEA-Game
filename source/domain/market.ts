import { CARDS, ROUND_SLOTS, ROUNDS, type CardCategory, type CardDefinition } from './catalog';
import { type Effects } from './capabilities';
import { type Cents } from './money';

/** Schema-3 role-facing card shape; shared canonical catalog supplies all metadata. */
export interface MarketCard {
  readonly id: string;
  readonly title: Readonly<{ en: string; fr: string }>;
  readonly start: Cents;
  readonly e: Effects;
  readonly cat: CardCategory;
  readonly round: number;
  readonly lot: number;
  readonly instance: string;
}

// Retain the established UTF-16 hash and 32-bit PRNG sequence. In particular,
// category order consumes the random stream before round/lot placement.
function hashWords(text: string): () => number {
  let hash = 1779033703 ^ text.length;
  for (let index=0;index<text.length;index++) {
    hash = Math.imul(hash ^ text.charCodeAt(index),3432918353);
    hash = hash << 13 | hash >>> 19;
  }
  return () => {
    hash = Math.imul(hash ^ hash >>> 16,2246822507);
    hash = Math.imul(hash ^ hash >>> 13,3266489909);
    return (hash ^ hash >>> 16) >>> 0;
  };
}
function randomStream(text: string): () => number {
  const next = hashWords(text);
  let a=next(), b=next(), c=next(), d=next();
  return () => {
    const result = (a+b | 0)+d | 0;
    d=d+1 | 0;
    a=b ^ b >>> 9;
    b=c+(c << 3) | 0;
    c=c << 21 | c >>> 11;
    c=c+result | 0;
    return (result >>> 0)/4294967296;
  };
}
function shuffled(pool: readonly CardDefinition[], random: () => number): CardDefinition[] {
  const result=[...pool];
  for (let index=result.length-1;index>0;index--) {
    const selected=Math.floor(random()*(index+1));
    const current=result[index], replacement=result[selected];
    if (!current || !replacement) throw new Error('invalid-state');
    result[index]=replacement;
    result[selected]=current;
  }
  return result;
}

/** Pure deterministic deal. Import validators separately enforce 32 uppercase hex seeds. */
export function marketFromSeed(seed: unknown): MarketCard[][] {
  // No coercion hooks, allocations from unbounded input, or normalization that
  // would silently change the accepted seed's established sequence.
  if (typeof seed !== 'string' || seed.length > 256) throw new Error('invalid-state');
  const random=randomStream('MARKET|'+seed);
  const pools=new Map<CardCategory,CardDefinition[]>();
  for (const category of new Set(ROUND_SLOTS)) {
    pools.set(category,shuffled(CARDS.filter(card=>card.category===category),random));
  }
  const used=new Map<CardCategory,number>();
  return Array.from({length:ROUNDS},(_,roundIndex)=>ROUND_SLOTS.map((category,lotIndex)=>{
    const index=used.get(category) ?? 0;
    const card=pools.get(category)?.[index];
    if (!card) throw new Error('invalid-state');
    used.set(category,index+1);
    const round=roundIndex+1, lot=lotIndex+1;
    return {
      id:card.id, title:{...card.title}, start:card.startCents,
      e:{...card.effects}, cat:category, round, lot,
      instance:'R'+round+'-L'+lot+'-'+card.id,
    };
  }));
}
