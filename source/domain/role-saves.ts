import { cardForSlot } from './catalog';
import { type MarketCard, marketFromSeed } from './market';
import { addCents, cents, type Cents, validatePurchasePrice } from './money';
import { type MissionId } from './missions';
import { passiveSnapshot } from './recovery';
import { type Language, type Phase, type RevealMode, validateBase } from './session';
import { dataRecord, invalidState, normalizeTeam, type Team } from './teams';
import { acquirePurchase } from './transactions';

export const MAX_INSTRUCTOR_LEDGER_ENTRIES = 210;
export interface LedgerBase { readonly seq:number; readonly round:number; readonly lot:number; readonly card:string }
export type Schema3LedgerEntry =
  | (LedgerBase & { readonly kind:'SALE'; readonly team:number; readonly price:Cents; readonly reason?:string })
  | (LedgerBase & { readonly kind:'UNSOLD'; readonly team:null; readonly price:null })
  | (LedgerBase & { readonly kind:'VOID'; readonly team:number|null; readonly price:Cents|null; readonly ref:number; readonly reason:string });
export interface PracticeState { readonly revealed:boolean; readonly open:boolean; readonly leader:boolean; readonly closed:boolean }
export interface ResultDraft { readonly team:string; readonly price:string; readonly reason:string }
export interface SaveBase { readonly schema:3; readonly phase:Phase; readonly lang:Language; readonly sessionCode:string; readonly teamCount:number; readonly round:number; readonly lot:number }
export interface InstructorSave extends SaveBase {
  readonly vehiclesLocked:boolean; readonly marketSeed:string; readonly market:readonly (readonly MarketCard[])[];
  readonly teams:readonly Team[]; readonly revealMode:RevealMode; readonly timingMode:'TIMED'|'UNTIMED'; readonly bidSeconds:number;
  readonly revealed:boolean; readonly open:boolean; readonly pausedRemaining:number|null; readonly deadline:number|null;
  readonly leader:number|null; readonly currentBid:Cents|null; readonly ledger:readonly Schema3LedgerEntry[]; readonly seq:number;
  readonly practice:PracticeState; readonly privateEntry:false; readonly resultDraft:ResultDraft|null; readonly finalCallAnnounced?:boolean;
}
export interface ScratchEntry { readonly wtp:string; readonly note:string }
export interface StudentSave extends SaveBase {
  readonly vehicleConfirmed:boolean; readonly lockedMission:MissionId|null; readonly teamId:number; readonly team:Team;
  readonly currentCard:MarketCard|null; readonly plan:string; readonly planBaseline:string|null; readonly risks:string;
  readonly maxWtpCents:Cents; readonly scratch:Readonly<Record<string,ScratchEntry>>;
  readonly profitMode:'AMOUNT'|'PERCENT'; readonly profitInput:string; readonly profitCents:Cents;
  readonly practiceWon:boolean; readonly vehicleChangeNotice:boolean;
}
const INSTRUCTOR_KEYS=['schema','phase','lang','vehiclesLocked','sessionCode','marketSeed','market','teams','teamCount','revealMode','timingMode','bidSeconds','round','lot','revealed','open','pausedRemaining','deadline','leader','currentBid','ledger','seq','practice','privateEntry','resultDraft','finalCallAnnounced'];
const STUDENT_KEYS=['schema','phase','lang','vehicleConfirmed','lockedMission','sessionCode','teamCount','teamId','team','round','lot','currentCard','plan','planBaseline','risks','maxWtpCents','scratch','profitMode','profitInput','profitCents','practiceWon','vehicleChangeNotice'];
const POST_PLANNING=['auction','build','submit','debrief','closed'];
const AFTER_AUCTION=['build','submit','debrief','closed'];
function ensure(value:unknown):asserts value { if(!value)invalidState(); }
function integer(value:unknown,minimum:number,maximum:number):number { ensure(typeof value==='number'&&Number.isInteger(value)&&value>=minimum&&value<=maximum);return value; }
function text(value:unknown,maximum:number):string { ensure(typeof value==='string'&&value.length<=maximum);return value; }
function bool(value:unknown):boolean { ensure(typeof value==='boolean');return value; }
function nullableFinite(value:unknown):number|null { ensure(value===null||(typeof value==='number'&&Number.isFinite(value)));return value; }
function record(value:unknown,allowed:readonly string[]):Record<string,unknown> { return dataRecord(value,allowed); }
function array(value:unknown,maximum:number):unknown[] { ensure(Array.isArray(value)&&value.length<=maximum);return value; }
function card(id:unknown,round:number,lot:number):MarketCard {
  ensure(typeof id==='string');const c=cardForSlot(id,round,lot);
  return {id:c.id,title:{...c.title},start:c.startCents,e:{...c.effects},cat:c.category,round:c.round,lot:c.lot,instance:c.instance};
}
/** Passive semantic equality accepts JSON property-order variations without relaxing content. */
function same(left:unknown,right:unknown):boolean {
  if(left===right)return true;
  if(!left||!right||typeof left!=='object'||typeof right!=='object')return false;
  if(Array.isArray(left)||Array.isArray(right))return Array.isArray(left)&&Array.isArray(right)&&left.length===right.length&&left.every((v,i)=>same(v,right[i]));
  const a=left as Record<string,unknown>,b=right as Record<string,unknown>,keys=Object.keys(a);
  return keys.length===Object.keys(b).length&&keys.every(k=>Object.hasOwn(b,k)&&same(a[k],b[k]));
}

/** Rebuild instructor inventory from the append-only effective ledger, never trusted totals. */
export function validateInstructorSave(raw:unknown):InstructorSave {
  const x=record(passiveSnapshot(raw),INSTRUCTOR_KEYS),cfg=validateBase(x);
  const phase=x.phase as Phase,round=integer(x.round,0,6),lot=integer(x.lot,0,9),locked=bool(x.vehiclesLocked);
  const revealMode=x.revealMode,timingMode=x.timingMode;
  ensure(revealMode==='ROUND'||revealMode==='JIT'||revealMode==='MANUAL');ensure(timingMode==='TIMED'||timingMode==='UNTIMED');
  const bidSeconds=integer(x.bidSeconds,10,120),marketSeed=text(x.marketSeed,32);ensure(/^[A-F0-9]{32}$/.test(marketSeed));
  const expected=marketFromSeed(marketSeed);ensure(same(x.market,expected));
  const inputTeams=array(x.teams,10);ensure(inputTeams.length===cfg.teamCount);
  let rebuilt=inputTeams.map((value,index)=>{const tm=record(value,['id','mission','lockedMission','totals','cost','purchases','purchasesByRound','profit','submitted']);ensure(tm.id===index+1);return normalizeTeam({...tm,purchases:[]},!locked);});
  const inputLedger=array(x.ledger,MAX_INSTRUCTOR_LEDGER_ENTRIES);ensure(x.seq===inputLedger.length);
  if(locked){ensure(POST_PLANNING.includes(phase));for(const tm of rebuilt)ensure(tm.mission!==null&&tm.mission===tm.lockedMission);}
  else{ensure(!POST_PLANNING.includes(phase)&&inputLedger.length===0);for(const tm of rebuilt)ensure(tm.lockedMission===null);}
  const ledger:Schema3LedgerEntry[]=[],active=new Map<string,Schema3LedgerEntry>();
  for(let index=0;index<inputLedger.length;index++){
    const untyped=record(inputLedger[index],['seq','kind','round','lot','card','team','price','ref','reason']),kind=untyped.kind;
    ensure(kind==='SALE'||kind==='UNSOLD'||kind==='VOID');
    const e=record(untyped,kind==='VOID'?['seq','kind','round','lot','card','team','price','ref','reason']:kind==='SALE'?['seq','kind','round','lot','card','team','price','reason']:['seq','kind','round','lot','card','team','price']);
    ensure(e.seq===index+1);const er=integer(e.round,1,7),el=integer(e.lot,1,10),c=card(e.card,er,el);ensure(expected[er-1]![el-1]!.id===c.id);
    const key=er+'-'+el,prior=active.get(key),base={seq:index+1,round:er,lot:el,card:c.id};let entry:Schema3LedgerEntry;
    if(kind==='VOID'){
      ensure(prior&&e.ref===prior.seq&&e.team===prior.team&&e.price===prior.price);const reason=text(e.reason,120);ensure(reason.trim().length>0);
      entry={...base,kind,team:prior.team,price:prior.price,ref:prior.seq,reason};active.delete(key);
    }else if(kind==='SALE'){
      ensure(!prior);const team=integer(e.team,1,cfg.teamCount),price=validatePurchasePrice(c.start,e.price as number);
      if(e.reason!==undefined){const reason=text(e.reason,120);ensure(reason.trim().length>0);entry={...base,kind,team,price,reason};}else entry={...base,kind,team,price};active.set(key,entry);
    }else{ensure(!prior&&e.team===null&&e.price===null);entry={...base,kind,team:null,price:null};active.set(key,entry);}
    ledger.push(entry);
  }
  for(const e of active.values())if(e.kind==='SALE')rebuilt[e.team-1]=acquirePurchase(rebuilt[e.team-1],expected[e.round-1]![e.lot-1],e.price);
  inputTeams.forEach((tm,index)=>ensure(same(normalizeTeam(tm,!locked).purchases,rebuilt[index]!.purchases)));
  const position=round*10+lot;
  if(POST_PLANNING.includes(phase))for(let index=0;index<position;index++)ensure(active.has((Math.floor(index/10)+1)+'-'+(index%10+1)));
  if(AFTER_AUCTION.includes(phase))ensure(active.size===70);
  if(phase==='auction')for(const e of active.values())ensure((e.round-1)*10+e.lot-1<=position);
  const leader=x.leader===null?null:integer(x.leader,1,cfg.teamCount),currentBid=x.currentBid===null?null:cents(x.currentBid);
  if(leader!==null){ensure(currentBid!==null);validatePurchasePrice(expected[round]![lot]!.start,currentBid);}else ensure(currentBid===null);
  const open=bool(x.open),revealed=bool(x.revealed),deadline=nullableFinite(x.deadline),pausedRemaining=nullableFinite(x.pausedRemaining);
  if(phase==='auction'&&!open){const e=active.get((round+1)+'-'+(lot+1));if(e?.kind==='SALE')ensure(leader===e.team&&currentBid===e.price);else ensure(leader===null&&currentBid===null);}
  if(open){ensure(phase==='auction'&&revealed&&!active.has((round+1)+'-'+(lot+1)));if(timingMode==='TIMED')ensure(deadline!==null);ensure(pausedRemaining===null||pausedRemaining>=0);}
  const p=record(x.practice,['revealed','open','leader','closed']),practice={revealed:bool(p.revealed),open:bool(p.open),leader:bool(p.leader),closed:bool(p.closed)};
  if(practice.open)ensure(practice.revealed&&!practice.closed);if(practice.leader)ensure(practice.revealed&&(practice.open||practice.closed));if(practice.closed)ensure(practice.revealed&&practice.leader&&!practice.open);
  if(phase!=='practice')ensure(!practice.revealed&&!practice.open&&!practice.leader&&!practice.closed);
  let resultDraft:ResultDraft|null=null;
  if(x.resultDraft!==undefined&&x.resultDraft!==null){const draft=record(x.resultDraft,['team','price','reason']);ensure(Object.keys(draft).length===3);resultDraft={team:text(draft.team,10),price:text(draft.price,20),reason:text(draft.reason,120)};}
  ensure(x.finalCallAnnounced===undefined||typeof x.finalCallAnnounced==='boolean');
  const output:InstructorSave={schema:3,phase,lang:x.lang as Language,sessionCode:cfg.code,teamCount:cfg.teamCount,round,lot,vehiclesLocked:locked,marketSeed,market:expected,teams:rebuilt,revealMode,timingMode,bidSeconds,revealed,open,pausedRemaining,deadline,leader,currentBid,ledger,seq:ledger.length,practice,privateEntry:false,resultDraft};
  return x.finalCallAnnounced===undefined?output:{...output,finalCallAnnounced:x.finalCallAnnounced};
}

/** Team companion saves contain no hidden class market/ledger or other-team state. */
export function validateStudentSave(raw:unknown):StudentSave {
  const x=record(passiveSnapshot(raw),STUDENT_KEYS),cfg=validateBase(x),phase=x.phase as Phase,round=integer(x.round,0,6),lot=integer(x.lot,0,9);
  const team=normalizeTeam(x.team),teamId=integer(x.teamId,1,cfg.teamCount);ensure(team.id===teamId);
  let lockedMission:MissionId|null=null;
  if(POST_PLANNING.includes(phase)){ensure(x.lockedMission===team.mission&&team.lockedMission===team.mission);lockedMission=team.mission;}
  else ensure(x.lockedMission===null&&team.purchases.length===0);
  const vehicleConfirmed=bool(x.vehicleConfirmed),practiceWon=bool(x.practiceWon);ensure(phase==='practice'||!practiceWon);
  const plan=text(x.plan,1200),risks=text(x.risks,1200),planBaseline=x.planBaseline===null?null:text(x.planBaseline,1200);
  const maxWtpCents=cents(x.maxWtpCents),profitCents=cents(x.profitCents);addCents(team.cost,profitCents);
  const profitMode=x.profitMode;ensure(profitMode==='AMOUNT'||profitMode==='PERCENT');const profitInput=text(x.profitInput,20);
  ensure(x.scratch&&typeof x.scratch==='object'&&!Array.isArray(x.scratch));const inputScratch=x.scratch as Record<string,unknown>;ensure(Object.keys(inputScratch).length<=70);
  const scratch:Record<string,ScratchEntry>={};
  for(const [key,value]of Object.entries(inputScratch)){ensure(/^[1-7]-(10|[1-9])$/.test(key));const entry=record(value,['wtp','note']);ensure(Object.keys(entry).length===2);scratch[key]={wtp:text(entry.wtp,20),note:text(entry.note,600)};}
  let currentCard:MarketCard|null=null;
  if(x.currentCard!==null){const input=record(x.currentCard,['id','title','start','e','cat','round','lot','instance','paid']);currentCard=card(input.id,round+1,lot+1);ensure(input.instance===currentCard.instance);}
  ensure(x.vehicleChangeNotice===undefined||typeof x.vehicleChangeNotice==='boolean');
  return {schema:3,phase,lang:x.lang as Language,sessionCode:cfg.code,teamCount:cfg.teamCount,round,lot,vehicleConfirmed,lockedMission,teamId,team,currentCard,plan,planBaseline,risks,maxWtpCents,scratch,profitMode,profitInput,profitCents,practiceWon,vehicleChangeNotice:x.vehicleChangeNotice===true};
}
