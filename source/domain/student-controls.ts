import { cardForSlot, LOTS_PER_ROUND, ROUNDS } from './catalog';
import { type MarketCard } from './market';
import { studentLiveSnapshot } from './live-state';
import { addCents, cents, parseAmount, parsePercentBps, profitFromBps, type Cents } from './money';
import { passiveSnapshot } from './recovery';
import { type StudentSave } from './role-saves';
import { studentPhaseAllowed, type Phase } from './session';
import { dataRecord, invalidState } from './teams';

export type StudentProfitMode = StudentSave['profitMode'];
export interface StudentPositionPatch {
  readonly phase: 'auction' | 'build'; readonly round:number; readonly lot:number; readonly currentCard:null;
}
export interface StudentCardPatch { readonly currentCard:MarketCard }
export interface StudentPhasePatch { readonly phase:'submit'|'debrief'|'closed'; readonly currentCard:null }
export interface StudentProfitPatch { readonly profitCents:Cents }
export interface StudentProfitModePatch extends StudentProfitPatch {
  readonly profitMode:StudentProfitMode; readonly profitInput:string;
}
/** Captured private intent stays inside the student context; never publish or log this snapshot. */
export interface StudentAuctionFinishIntent { readonly snapshot:string }

/** Freeze owned canonical copies only, never the caller's live state or purchase identities. */
function immutable<T>(value:T):T {
  if (value && typeof value==='object') {
    for (const child of Object.values(value)) immutable(child);
    Object.freeze(value);
  }
  return value;
}
function atPhase(raw:unknown,phase:Phase):StudentSave {
  const state=studentLiveSnapshot(raw);
  if (state.phase!==phase) throw new Error('phase');
  return state;
}
function handoff(state:StudentSave,phase:'build'|'submit'|'debrief'|'closed'):void {
  if (!studentPhaseAllowed(state.phase,phase,{lockedMission:state.lockedMission})) throw new Error('phase');
}
function position(value:unknown,maximum:number):number {
  if (typeof value!=='number' || !Number.isInteger(value) || value<1 || value>maximum) return invalidState();
  return value-1;
}
function text(value:unknown,maximum:number):string {
  if (typeof value!=='string' || value.length>maximum) return invalidState();
  return value;
}
function amountInput(value:Cents):string {
  const n=BigInt(value),fraction=n%100n;
  return (n/100n).toString()+(fraction?'.'+fraction.toString().padStart(2,'0'):'');
}
function draftProfit(state:StudentSave,mode:StudentProfitMode,input:string):Cents {
  const profit=mode==='AMOUNT'?parseAmount(input):profitFromBps(state.team.cost,parsePercentBps(input));
  addCents(state.team.cost,profit);
  return profit;
}

/** Only a manually announced ID is known; no seed, market order or other team's state is used. */
export function studentLoadAnnouncedCard(raw:unknown,id:unknown):StudentCardPatch {
  const state=atPhase(raw,'auction'),announced=text(id,20).trim().toUpperCase();
  const card=cardForSlot(announced,state.round+1,state.lot+1);
  return immutable({currentCard:{id:card.id,title:{...card.title},start:card.startCents,e:{...card.effects},cat:card.category,round:card.round,lot:card.lot,instance:card.instance}});
}

/** Manual position matching intentionally permits backward and skipped lots, without instructor effects. */
export function studentSetManualPosition(raw:unknown,round:unknown,lot:unknown):StudentPositionPatch {
  atPhase(raw,'auction');
  return immutable({phase:'auction',round:position(round,ROUNDS),lot:position(lot,LOTS_PER_ROUND),currentCard:null});
}

export function studentAdvanceLocal(raw:unknown):StudentPositionPatch {
  const state=atPhase(raw,'auction'),index=state.round*LOTS_PER_ROUND+state.lot;
  if (index===ROUNDS*LOTS_PER_ROUND-1) {
    handoff(state,'build');
    return immutable({phase:'build',round:state.round,lot:state.lot,currentCard:null});
  }
  return immutable({phase:'auction',round:Math.floor((index+1)/LOTS_PER_ROUND),lot:(index+1)%LOTS_PER_ROUND,currentCard:null});
}

/** Prepare before the UI confirmation; apply only after the adapter verifies its state/team identities. */
export function studentPrepareAuctionFinish(raw:unknown):StudentAuctionFinishIntent {
  return immutable({snapshot:JSON.stringify(atPhase(raw,'auction'))});
}
export function studentFinishAuction(raw:unknown,intent:unknown):StudentPositionPatch {
  const state=atPhase(raw,'auction'),approved=dataRecord(passiveSnapshot(intent),['snapshot']);
  if (approved.snapshot!==JSON.stringify(state)) throw new Error('changed');
  handoff(state,'build');
  return immutable({phase:'build',round:state.round,lot:state.lot,currentCard:null});
}

export function studentOpenSubmit(raw:unknown):StudentPhasePatch {
  const state=atPhase(raw,'build');handoff(state,'submit');
  return immutable({phase:'submit',currentCard:null});
}

/** Editable drafts may temporarily be invalid. No calculated money is committed by this text command. */
export function studentEditProfitInput(raw:unknown,input:unknown):Readonly<{profitInput:string}> {
  atPhase(raw,'submit');return immutable({profitInput:text(input,20)});
}
export function studentCalculateProfit(raw:unknown):StudentProfitPatch {
  const state=atPhase(raw,'submit');
  return immutable({profitCents:draftProfit(state,state.profitMode,state.profitInput)});
}
export function studentChangeProfitMode(raw:unknown,mode:unknown):StudentProfitModePatch {
  const state=atPhase(raw,'submit');
  if (mode!=='AMOUNT' && mode!=='PERCENT') return invalidState();
  if (mode===state.profitMode) return immutable({profitMode:mode,profitInput:state.profitInput,profitCents:state.profitCents});
  let input:string;
  if (mode==='AMOUNT') input=amountInput(cents(state.profitCents));
  else {
    if (state.team.cost===0 && state.profitCents!==0) throw new Error('zero-cost');
    const cost=BigInt(state.team.cost),bps=cost===0n?0n:(BigInt(state.profitCents)*10000n+cost/2n)/cost;
    input=(bps/100n).toString()+'.'+(bps%100n).toString().padStart(2,'0');
  }
  text(input,20);
  return immutable({profitMode:mode,profitInput:input,profitCents:draftProfit(state,mode,input)});
}

/** Local handoff records the private estimate; only the instructor can register an official submission. */
export function studentFinishSubmit(raw:unknown):StudentPhasePatch & StudentProfitPatch {
  const state=atPhase(raw,'submit'),profitCents=draftProfit(state,state.profitMode,state.profitInput);
  handoff(state,'debrief');return immutable({phase:'debrief',currentCard:null,profitCents});
}
export function studentClose(raw:unknown):StudentPhasePatch {
  const state=atPhase(raw,'debrief');handoff(state,'closed');
  return immutable({phase:'closed',currentCard:null});
}
