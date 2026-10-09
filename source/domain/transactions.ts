import { cardForSlot, MAX_WINS_PER_ROUND } from './catalog';
import { addCents, validatePurchasePrice } from './money';
import { canonicalPurchase, dataRecord, invalidState, normalizeTeam, type Team, validateTeamSnapshot } from './teams';

/** Pure acquisition: construct the entire result before a role adapter can commit it. */
export function acquirePurchase(value: unknown, cardValue: unknown, paid: number): Team {
  const team = validateTeamSnapshot(value);
  const candidate = dataRecord(cardValue,['id','title','start','e','cat','round','lot','instance','paid','category','startCents','effects']);
  if (!['id','round','lot'].every(key=>Object.hasOwn(candidate,key)) || typeof candidate.id !== 'string' || typeof candidate.round !== 'number' || typeof candidate.lot !== 'number') return invalidState();
  let card;
  try { card = cardForSlot(candidate.id,candidate.round,candidate.lot); }
  catch { return invalidState(); }
  if (team.mission === null) throw new Error('money');
  const price = validatePurchasePrice(card.startCents,paid);
  if (team.purchases.some(p=>p.id === card.id || p.round === card.round && p.lot === card.lot)) throw new Error('duplicate');
  if (team.purchasesByRound[card.round-1]! >= MAX_WINS_PER_ROUND) throw new Error('limit');
  addCents(addCents(team.cost,price),team.profit);
  const purchase = canonicalPurchase({id:card.id,round:card.round,lot:card.lot,instance:card.instance,paid:price});
  return normalizeTeam({...team,purchases:[...team.purchases,purchase]});
}

/** Stable unique identity removal cannot retarget after an earlier row disappears. */
export function removePurchase(value: unknown, instance: string): Team {
  if (typeof instance !== 'string' || instance.length > 64) return invalidState();
  const team = validateTeamSnapshot(value);
  if (team.purchases.filter(p=>p.instance === instance).length !== 1) return invalidState();
  return normalizeTeam({...team,purchases:team.purchases.filter(p=>p.instance !== instance)},true);
}
