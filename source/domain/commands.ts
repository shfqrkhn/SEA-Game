import { cardForSlot, LOTS_PER_ROUND, ROUNDS, type SlottedCard } from './catalog';
import { validatePurchasePrice, type Cents } from './money';
import { type MissionId } from './missions';
import { type MarketCard } from './market';
import { MAX_INSTRUCTOR_LEDGER_ENTRIES, type Schema3LedgerEntry } from './role-saves';
import { type Phase } from './session';
import { acquirePurchase, removePurchase } from './transactions';
import { dataRecord, invalidState, type Team, validateTeamSnapshot } from './teams';

export type LedgerEntry = Schema3LedgerEntry;
export type SaleEntry = Extract<LedgerEntry,{kind:'SALE'}>;
export type UnsoldEntry = Extract<LedgerEntry,{kind:'UNSOLD'}>;
export type VoidEntry = Extract<LedgerEntry,{kind:'VOID'}>;
export type MarketSlot = Pick<MarketCard,'id' | 'round' | 'lot' | 'instance'>;

/** Only command-consumed live fields; schema/privacy/recovery validation is a separate boundary. */
export interface InstructorCommandState {
  readonly phase: Phase;
  readonly round: number;
  readonly lot: number;
  readonly open: boolean;
  readonly pausedRemaining: number | null;
  readonly leader: number | null;
  readonly currentBid: number | null;
  readonly teams: readonly Team[];
  readonly market: readonly (readonly MarketSlot[])[];
  readonly ledger: readonly LedgerEntry[];
  readonly seq: number;
}
export interface InstructorOutcomePatch {
  readonly phase: 'auction';
  readonly teams: readonly Team[];
  readonly ledger: readonly LedgerEntry[];
  readonly seq: number;
  readonly leader: number | null;
  readonly currentBid: Cents | null;
  readonly open: false;
  readonly pausedRemaining: null;
  readonly resultDraft: null;
}
export interface StudentRecordState {
  readonly phase: Phase;
  readonly round: number;
  readonly lot: number;
  readonly lockedMission: MissionId | null;
  readonly team: Team;
  readonly currentCard: MarketSlot | null;
}
export interface StudentRecordPatch {
  readonly phase: 'auction' | 'build';
  readonly round: number;
  readonly lot: number;
  readonly team: Team;
  readonly currentCard: null;
}

/** Read own data descriptors, never getters, coercion hooks or an input array's methods. */
function field(value: unknown, key: string): unknown {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return invalidState();
  const descriptor = Object.getOwnPropertyDescriptor(value,key);
  if (!descriptor || !Object.hasOwn(descriptor,'value')) return invalidState();
  return descriptor.value;
}
function denseArray(value: unknown, maximum: number): unknown[] {
  if (!Array.isArray(value) || value.length > maximum) return invalidState();
  const descriptors = Object.getOwnPropertyDescriptors(value), output: unknown[] = [];
  for (const key of Reflect.ownKeys(descriptors)) {
    if (key === 'length') continue;
    if (typeof key !== 'string' || !/^(0|[1-9]\d*)$/.test(key) || Number(key) >= value.length) return invalidState();
  }
  for (let index=0;index<value.length;index++) {
    const descriptor = descriptors[String(index)];
    if (!descriptor || !Object.hasOwn(descriptor,'value')) return invalidState();
    output.push(descriptor.value);
  }
  return output;
}
function integer(value: unknown, minimum: number, maximum: number): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < minimum || value > maximum) return invalidState();
  return value;
}
function position(state: unknown): {round:number;lot:number;index:number} {
  const round = integer(field(state,'round'),0,ROUNDS-1), lot = integer(field(state,'lot'),0,LOTS_PER_ROUND-1);
  return {round,lot,index:round*LOTS_PER_ROUND+lot};
}
function reasonText(reason: unknown): string {
  if (typeof reason !== 'string' || reason.length > 120 || reason.trim().length === 0) throw new Error('reason');
  return reason;
}
function canonicalSlot(value: unknown, round: number, lot: number): SlottedCard {
  const id = field(value,'id');
  if (typeof id !== 'string' || field(value,'round') !== round || field(value,'lot') !== lot) return invalidState();
  let card: SlottedCard;
  try { card = cardForSlot(id,round,lot); } catch { return invalidState(); }
  if (field(value,'instance') !== card.instance) return invalidState();
  return card;
}
interface ValidInstructor {
  readonly teams: Team[];
  readonly ledger: LedgerEntry[];
  readonly current: SaleEntry | UnsoldEntry | null;
  readonly card: SlottedCard;
  readonly position: number;
  readonly seq: number;
  readonly open: boolean;
  readonly pausedRemaining: number | null;
  readonly leader: number | null;
  readonly currentBid: Cents | null;
}
function instructorSnapshot(state: InstructorCommandState): ValidInstructor {
  if (field(state,'phase') !== 'auction') throw new Error('phase');
  const at = position(state), inputTeams = denseArray(field(state,'teams'),10);
  if (inputTeams.length < 2) return invalidState();
  const teams = inputTeams.map((raw,index) => {
    const team = validateTeamSnapshot(raw);
    if (team.id !== index+1) return invalidState();
    return team;
  });
  const inputMarket = denseArray(field(state,'market'),ROUNDS);
  if (inputMarket.length !== ROUNDS) return invalidState();
  const market: SlottedCard[][] = [], ids = new Set<string>();
  for (let round=0;round<ROUNDS;round++) {
    const inputRow = denseArray(inputMarket[round],LOTS_PER_ROUND);
    if (inputRow.length !== LOTS_PER_ROUND) return invalidState();
    const row: SlottedCard[] = [];
    for (let lot=0;lot<LOTS_PER_ROUND;lot++) {
      const card = canonicalSlot(inputRow[lot],round+1,lot+1);
      if (ids.has(card.id)) return invalidState();
      ids.add(card.id); row.push(card);
    }
    market.push(row);
  }
  const card = market[at.round]![at.lot]!, inputLedger = denseArray(field(state,'ledger'),MAX_INSTRUCTOR_LEDGER_ENTRIES);
  const seq = integer(field(state,'seq'),0,MAX_INSTRUCTOR_LEDGER_ENTRIES);
  if (seq !== inputLedger.length) return invalidState();
  const ledger: LedgerEntry[] = [], active = new Map<number,SaleEntry | UnsoldEntry>();
  for (let index=0;index<inputLedger.length;index++) {
    const raw = inputLedger[index], kind = field(raw,'kind');
    const allowed = kind === 'VOID' ? ['seq','kind','round','lot','card','team','price','ref','reason']
      : kind === 'SALE' ? ['seq','kind','round','lot','card','team','price','reason'] : ['seq','kind','round','lot','card','team','price'];
    const record = dataRecord(raw,allowed);
    if (kind !== 'SALE' && kind !== 'UNSOLD' && kind !== 'VOID' || field(raw,'seq') !== index+1) return invalidState();
    const round = integer(field(raw,'round'),1,ROUNDS), lot = integer(field(raw,'lot'),1,LOTS_PER_ROUND), slot = (round-1)*LOTS_PER_ROUND+lot-1;
    const canonical = market[round-1]![lot-1]!;
    if (slot > at.index || field(raw,'card') !== canonical.id) return invalidState();
    const prior = active.get(slot), team = field(raw,'team'), price = field(raw,'price');
    let entry: LedgerEntry;
    if (kind === 'VOID') {
      const ref = field(raw,'ref'), reason = reasonText(field(raw,'reason'));
      if (!prior || ref !== prior.seq || team !== prior.team || price !== prior.price) return invalidState();
      entry = {seq:index+1,kind,round,lot,card:canonical.id,team:prior.team,price:prior.price,ref:prior.seq,reason};
      active.delete(slot);
    } else {
      if (prior) return invalidState();
      if (kind === 'SALE') {
        const winner = integer(team,1,teams.length), paid = validatePurchasePrice(canonical.startCents,price as number);
        const reason = Object.hasOwn(record,'reason') ? reasonText(field(raw,'reason')) : undefined;
        entry = {seq:index+1,kind,round,lot,card:canonical.id,team:winner,price:paid,...(reason === undefined ? {} : {reason})};
      } else {
        if (team !== null || price !== null) return invalidState();
        entry = {seq:index+1,kind,round,lot,card:canonical.id,team:null,price:null};
      }
      active.set(slot,entry);
    }
    ledger.push(Object.freeze(entry));
  }
  for (let prior=0;prior<at.index;prior++) if (!active.has(prior)) return invalidState();
  for (const team of teams) {
    const expected = [...active.values()].filter((entry): entry is SaleEntry => entry.kind === 'SALE' && entry.team === team.id);
    if (expected.length !== team.purchases.length) return invalidState();
    for (let index=0;index<expected.length;index++) {
      const entry = expected[index]!, purchase = team.purchases[index]!;
      if (purchase.id !== entry.card || purchase.round !== entry.round || purchase.lot !== entry.lot || purchase.paid !== entry.price) return invalidState();
    }
  }
  const open = field(state,'open'), pausedRemaining = field(state,'pausedRemaining'), leader = field(state,'leader'), bid = field(state,'currentBid');
  if (typeof open !== 'boolean' || pausedRemaining !== null && (typeof pausedRemaining !== 'number' || !Number.isFinite(pausedRemaining) || pausedRemaining < 0)) return invalidState();
  const current = active.get(at.index) ?? null;
  let currentBid: Cents | null = null;
  if (leader === null) { if (bid !== null) return invalidState(); }
  else { integer(leader,1,teams.length); currentBid = validatePurchasePrice(card.startCents,bid as number); }
  if (current && open || !open && (current?.kind === 'SALE' ? leader !== current.team || bid !== current.price : leader !== null || bid !== null)) return invalidState();
  return {teams,ledger,current,card,position:at.index,seq,open,pausedRemaining:pausedRemaining as number | null,leader:leader as number | null,currentBid};
}
export function ledgerHasCapacity(round: unknown, lot: unknown, length: unknown, kind: unknown): boolean {
  if (typeof round !== 'number' || !Number.isInteger(round) || round < 0 || round >= ROUNDS
    || typeof lot !== 'number' || !Number.isInteger(lot) || lot < 0 || lot >= LOTS_PER_ROUND
    || typeof length !== 'number' || !Number.isInteger(length) || length < 0
    || !['SALE','UNSOLD','VOID'].includes(kind as string)) return false;
  const remaining = ROUNDS*LOTS_PER_ROUND-1-(round*LOTS_PER_ROUND+lot);
  return length+1+remaining+(kind === 'VOID' ? 1 : 0) <= MAX_INSTRUCTOR_LEDGER_ENTRIES;
}
function reserve(snapshot: ValidInstructor, kind: 'SALE' | 'UNSOLD' | 'VOID'): void {
  if (!ledgerHasCapacity(Math.floor(snapshot.position/LOTS_PER_ROUND),snapshot.position%LOTS_PER_ROUND,snapshot.ledger.length,kind)) throw new Error('ledger-limit');
}
function liveClosing(snapshot: ValidInstructor): void {
  // A timed-out lot can still close. Deadline checks belong to bidding, never final outcome commands.
  if (!snapshot.open || snapshot.current !== null || snapshot.pausedRemaining !== null) throw new Error('phase');
}
function outcome(snapshot: ValidInstructor, teams: readonly Team[], entry: LedgerEntry, leader: number | null, bid: Cents | null): InstructorOutcomePatch {
  return {phase:'auction',teams,ledger:[...snapshot.ledger,Object.freeze(entry)],seq:entry.seq,leader,currentBid:bid,open:false,pausedRemaining:null,resultDraft:null};
}

/** Prepare a complete sale before any team, ledger, timer, UI or storage side effect can commit. */
export function instructorCommitSale(state: InstructorCommandState, teamId: number, price: number, reason = ''): InstructorOutcomePatch {
  const snapshot = instructorSnapshot(state);
  liveClosing(snapshot); reserve(snapshot,'SALE');
  const winner = integer(teamId,1,snapshot.teams.length), corrected = snapshot.leader !== winner || snapshot.currentBid !== price;
  if (corrected) reasonText(reason);
  const team = acquirePurchase(snapshot.teams[winner-1],snapshot.card,price), teams = snapshot.teams.map((prior,index) => index === winner-1 ? team : prior);
  const entry: SaleEntry = {seq:snapshot.seq+1,kind:'SALE',round:snapshot.card.round,lot:snapshot.card.lot,card:snapshot.card.id,team:winner,price:team.purchases[team.purchases.length-1]!.paid,...(corrected ? {reason} : {})};
  return outcome(snapshot,teams,entry,winner,entry.price);
}

export function instructorCommitUnsold(state: InstructorCommandState): InstructorOutcomePatch {
  const snapshot = instructorSnapshot(state);
  liveClosing(snapshot); reserve(snapshot,'UNSOLD');
  return outcome(snapshot,snapshot.teams,{seq:snapshot.seq+1,kind:'UNSOLD',round:snapshot.card.round,lot:snapshot.card.lot,card:snapshot.card.id,team:null,price:null},null,null);
}

/** VOID is append-only and references the unique current effective outcome, preserving its history. */
export function instructorVoidCurrent(state: InstructorCommandState, reason: string): InstructorOutcomePatch {
  const snapshot = instructorSnapshot(state), prior = snapshot.current;
  if (!prior) throw new Error('phase');
  reasonText(reason); reserve(snapshot,'VOID');
  let teams = snapshot.teams;
  if (prior.kind === 'SALE') {
    const team = removePurchase(teams[prior.team-1],snapshot.card.instance);
    teams = teams.map((value,index) => index === prior.team-1 ? team : value);
  }
  return outcome(snapshot,teams,{seq:snapshot.seq+1,kind:'VOID',round:prior.round,lot:prior.lot,card:prior.card,team:prior.team,price:prior.price,ref:prior.seq,reason},null,null);
}

/** Student records only its own manually handed-off win and advances exactly one classroom position. */
export function studentRecordWin(state: StudentRecordState, paid: number): StudentRecordPatch {
  if (field(state,'phase') !== 'auction') throw new Error('phase');
  const at = position(state), team = validateTeamSnapshot(field(state,'team')), lock = field(state,'lockedMission');
  if (lock === null || lock !== team.mission || team.lockedMission !== lock) return invalidState();
  const card = canonicalSlot(field(state,'currentCard'),at.round+1,at.lot+1), next = acquirePurchase(team,card,paid);
  if (at.index === ROUNDS*LOTS_PER_ROUND-1) return {phase:'build',round:at.round,lot:at.lot,team:next,currentCard:null};
  const index = at.index+1;
  return {phase:'auction',round:Math.floor(index/LOTS_PER_ROUND),lot:index%LOTS_PER_ROUND,team:next,currentCard:null};
}
