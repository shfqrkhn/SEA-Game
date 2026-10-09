// Independent classroom transitions, immutable negative inputs and retained controller defect probes.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';

const root=fileURLToPath(new URL('../',import.meta.url));
const compiled=await build({stdin:{contents:"export * from './source/domain/auction-controls'; export * from './source/domain/commands'; export * from './source/domain/role-saves'; export * from './source/domain/money';",resolveDir:root,loader:'ts'},bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const d=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const engine=readFileSync(new URL('../source/shared/engine.js',import.meta.url),'utf8');
const marketFactory=runInNewContext(engine+';marketFromSeed');
const seed='0123456789ABCDEF0123456789ABCDEF';
const market=JSON.parse(JSON.stringify(marketFactory(seed)));
const rules=JSON.parse(readFileSync(new URL('../docs/evidence/rules-baseline.json',import.meta.url),'utf8'));
const definitions=Object.values(rules.pools).flat();
const start=id=>definitions.find(row=>row[0]===id)[2]*100;
const blank=()=>({CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0});
const team=id=>({id,mission:'TROOP',lockedMission:'TROOP',totals:blank(),cost:0,purchases:[],purchasesByRound:[0,0,0,0,0,0,0],profit:0,submitted:false});
const fresh=()=>({schema:3,phase:'auction',lang:'en',vehiclesLocked:true,sessionCode:'SEA3-T2-0123456789ABCDEF',marketSeed:seed,market:structuredClone(market),teams:[team(1),team(2)],teamCount:2,revealMode:'MANUAL',timingMode:'TIMED',bidSeconds:30,round:0,lot:0,revealed:false,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,practice:{revealed:false,open:false,leader:false,closed:false},privateEntry:false,resultDraft:null,finalCallAnnounced:false});
const apply=(s,p)=>({...s,...p});
const deepFreeze=value=>{if(value&&typeof value==='object'){for(const child of Object.values(value))deepFreeze(child);Object.freeze(value)}return value};
const reject=(state,call,pattern=/invalid-state|phase|time|money|expired|paused|stale|leader|limit|team/)=>{
 const before=JSON.stringify(state);assert.throws(call,pattern);assert.equal(JSON.stringify(state),before,'Rejected command must not change input');
};

// Exact isolated pre-rebuild functions from source/instructor.js at 5bb85ecdc2190f3f800ef6357a144d0103223e72.
// These remain test-only historical probes after the runtime adapter is rebuilt.
const retainedOpen=`function openAuction(){
 if(state.phase!=="auction"||!state.vehiclesLocked||!allChosen()||state.open||committed())return false;
 state.revealed=true;state.open=true;state.pausedRemaining=null;state.finalCallAnnounced=false;
 if(state.timingMode==="TIMED")startTimer(state.bidSeconds*1000);renderAuction();return true;
}`;
const retainedStartTimer=`function startTimer(ms){
 stopTimer();if(state.timingMode!=='TIMED')return;state.deadline=Date.now()+Math.max(0,ms);state.pausedRemaining=null;
 timerHandle=setInterval(()=>{if(!state.open||state.phase!=='auction'){stopTimer();return}const rem=state.deadline-Date.now();if(rem<=0){stopTimer();$('#timerAnnouncement').textContent=t('auction.windowEnded');renderAuction();return}if(rem<=5000&&!state.finalCallAnnounced){state.finalCallAnnounced=true;$('#timerAnnouncement').textContent=t('auction.finalCall')}$('#timerValue').textContent=timerText()},250);
}`;
const retainedBid=`function acceptTeamBid(id,intended){
 if(!biddingActive())return false;const tm=state.teams.find(x=>x.id===id),amount=nextOffer();
 if(!tm||!validMission(tm.mission)||!SEA_AUCTION.canWin(tm.purchasesByRound[state.round])||state.leader===id||amount===null)return false;
 if(intended!==amount){seaNotify(t('errors.stale'));return false}
 try{addCents(tm.cost,amount)}catch{seaNotify(t('errors.moneyRange'));return false}
 state.currentBid=amount;state.leader=id;state.resultDraft=null;renderAuction();return true;
}`;
if(process.argv.includes('--legacy-red-clock')){
 const state=fresh();
 const open=runInNewContext(retainedOpen+retainedStartTimer+';openAuction',{state,allChosen:()=>true,committed:()=>false,Date:{now:()=>NaN},stopTimer:()=>{},setInterval:()=>1,timerHandle:null,renderAuction:()=>{}});
 assert.throws(()=>open(),/time/,'Opening a timed lot must reject a NaN clock before setting open');
 assert.equal(state.open,false);process.exit(0);
}
if(process.argv.includes('--legacy-red-bid')){
 const state=apply(fresh(),{open:true,revealed:true,deadline:31000});state.teams[0].profit=Number.MAX_SAFE_INTEGER-start(market[0][0].id)+1;
 const accept=runInNewContext(retainedBid+';acceptTeamBid',{state,biddingActive:()=>true,nextOffer:()=>start(market[0][0].id),validMission:()=>true,SEA_AUCTION:{canWin:used=>used<2},addCents:d.addCents,renderAuction:()=>{},seaNotify:()=>{},t:x=>x});
 assert.equal(accept(1,start(market[0][0].id)),false,'Bid acceptance must reserve safe eventual cost plus profit');
 assert.equal(state.leader,null);process.exit(0);
}

const original=deepFreeze(fresh()),originalBytes=JSON.stringify(original);
assert.deepEqual(d.instructorRevealAuction(original),{revealed:true});
assert.equal(JSON.stringify(original),originalBytes);
const revealed=apply(original,d.instructorRevealAuction(original));
reject(revealed,()=>d.instructorRevealAuction(revealed));
assert.deepEqual(d.instructorOpenAuction(original,1000),{revealed:true,open:true,pausedRemaining:null,deadline:31000,finalCallAnnounced:false});
let live=apply(original,d.instructorOpenAuction(original,1000));
assert.equal(JSON.stringify(original),originalBytes,'Successful command also never changes input');
reject(live,()=>d.instructorOpenAuction(live,2000));
const first=start(market[0][0].id);
assert.deepEqual(d.instructorAcceptBid(deepFreeze(live),1,first,1000),{leader:1,currentBid:first,resultDraft:null});
live=apply(live,d.instructorAcceptBid(live,1,first,1000));
reject(live,()=>d.instructorAcceptBid(live,1,first,1001),/leader/);
reject(live,()=>d.instructorAcceptBid(live,2,first,1001),/stale/);
assert.deepEqual(d.instructorAcceptBid(live,2,first+5000000,1001),{leader:2,currentBid:first+5000000,resultDraft:null});
assert.equal(d.instructorAuctionStatus(live,30999).biddingActive,true);
assert.equal(d.instructorAuctionStatus(live,31000).timedOut,true);
reject(live,()=>d.instructorAcceptBid(live,2,first+5000000,31000),/expired/);
assert.equal(d.instructorAuctionStatus(live,31000).liveClosing,true,'Deadline never auto-awards and deliberate closing remains allowed');
assert.equal(d.instructorCommitSale(live,1,first).ledger[0].price,first);

assert.deepEqual(d.instructorPauseAuction(live,10000),{pausedRemaining:21000});
let paused=apply(live,d.instructorPauseAuction(live,10000));
reject(paused,()=>d.instructorPauseAuction(paused,11000),/paused/);
reject(paused,()=>d.instructorAcceptBid(paused,2,first+5000000,11000),/paused/);
reject(paused,()=>d.instructorCommitSale(paused,1,first));
assert.equal(d.instructorAuctionStatus(paused,50000).remainingMs,21000,'Pausing stops elapsed-time consumption');
assert.deepEqual(d.instructorExtendAuction(paused,50000),{pausedRemaining:51000,finalCallAnnounced:false});
paused=apply(paused,d.instructorExtendAuction(paused,50000));
assert.deepEqual(d.instructorResumeAuction(paused,100000),{pausedRemaining:null,deadline:151000});
const resumed=apply(paused,d.instructorResumeAuction(paused,100000));
reject(resumed,()=>d.instructorResumeAuction(resumed,100001),/phase/);
assert.deepEqual(d.instructorExtendAuction(live,2000),{deadline:61000,pausedRemaining:null,finalCallAnnounced:false});
assert.deepEqual(d.instructorExtendAuction(live,41000),{deadline:71000,pausedRemaining:null,finalCallAnnounced:false});
assert.deepEqual(d.instructorPauseAuction(live,41000),{pausedRemaining:0});
const expiredPaused=apply(live,d.instructorPauseAuction(live,41000));
assert.deepEqual(d.instructorResumeAuction(expiredPaused,42000),{pausedRemaining:null,deadline:42000});

let untimed=apply(fresh(),{timingMode:'UNTIMED'});
assert.deepEqual(d.instructorOpenAuction(untimed,1000),{revealed:true,open:true,pausedRemaining:null,deadline:null,finalCallAnnounced:false});
untimed=apply(untimed,d.instructorOpenAuction(untimed,1000));
assert.equal(d.instructorAuctionStatus(untimed,Number.MAX_SAFE_INTEGER).biddingActive,true);
assert.equal(d.instructorAuctionStatus(untimed,1000).remainingMs,null);
reject(untimed,()=>d.instructorExtendAuction(untimed,1000),/phase/);
assert.deepEqual(d.instructorPauseAuction(untimed,1000),{pausedRemaining:0});
const untimedPaused=apply(untimed,d.instructorPauseAuction(untimed,1000));
assert.deepEqual(d.instructorResumeAuction(untimedPaused,5000),{pausedRemaining:null,deadline:null});

for(const bad of [NaN,Infinity,-Infinity,-1,Number.MAX_SAFE_INTEGER+1,'1000',{},[],null,undefined]){
 reject(fresh(),()=>d.instructorOpenAuction(fresh(),bad),/time/);
 reject(live,()=>d.instructorAcceptBid(live,2,first+5000000,bad),/time/);
 reject(live,()=>d.instructorPauseAuction(live,bad),/time/);
 reject(paused,()=>d.instructorResumeAuction(paused,bad),/time/);
 reject(live,()=>d.instructorExtendAuction(live,bad),/time/);
 reject(live,()=>d.instructorAuctionStatus(live,bad),/time/);
}
reject(fresh(),()=>d.instructorOpenAuction(fresh(),Number.MAX_SAFE_INTEGER),/time/);
reject(paused,()=>d.instructorResumeAuction(paused,Number.MAX_SAFE_INTEGER),/time/);
const hugePaused=apply(live,{pausedRemaining:Number.MAX_SAFE_INTEGER});reject(hugePaused,()=>d.instructorExtendAuction(hugePaused,1000),/time/);
const hugeDeadline=apply(live,{deadline:Number.MAX_SAFE_INTEGER});reject(hugeDeadline,()=>d.instructorExtendAuction(hugeDeadline,1000),/time/);
assert.equal(d.instructorOpenAuction(fresh(),Number.MAX_SAFE_INTEGER-30000).deadline,Number.MAX_SAFE_INTEGER,'Exact bounded endpoint is allowed');
assert.equal(d.instructorPauseAuction(live,1000.25).pausedRemaining,29999.75,'Finite fractional millisecond clocks are preserved');
const negativeDeadline=apply(live,{deadline:-Number.MAX_SAFE_INTEGER});
assert.equal(d.instructorAuctionStatus(negativeDeadline,Number.MAX_SAFE_INTEGER).remainingMs,0,'Schema3 negative deadlines expire without unsafe subtraction');
assert.deepEqual(d.instructorPauseAuction(negativeDeadline,1000),{pausedRemaining:0});
assert.deepEqual(d.instructorExtendAuction(negativeDeadline,1000),{deadline:31000,pausedRemaining:null,finalCallAnnounced:false});
for(const [id,amount]of [[0,first],[3,first],['1',first],[{},first],[1,NaN],[1,first+1],[1,String(first)],[1,{}]])reject(untimed,()=>d.instructorAcceptBid(untimed,id,amount,1000));
const profitOverflow=apply(untimed,{teams:[{...team(1),profit:Number.MAX_SAFE_INTEGER-first+1},team(2)]});
reject(profitOverflow,()=>d.instructorAcceptBid(profitOverflow,1,first,1000),/money/);

// Real pure outcomes are composed with controls; independent outcomes/positions remain the oracle.
const sold=apply(live,d.instructorCommitSale(live,1,first));
assert.equal(d.instructorAuctionStatus(sold,31000).committed,true);
assert.equal(d.instructorAuctionStatus(sold,31000).biddingActive,false);
for(const command of [s=>d.instructorOpenAuction(s,1000),s=>d.instructorRevealAuction(s),s=>d.instructorPauseAuction(s,1000),s=>d.instructorResumeAuction(s,1000),s=>d.instructorExtendAuction(s,1000),s=>d.instructorAcceptBid(s,2,first+5000000,1000)])reject(sold,()=>command(sold));
assert.deepEqual(d.instructorAdvanceAuction(sold),{round:0,lot:1,revealed:false,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,resultDraft:null,finalCallAnnounced:false});
const voided=apply(sold,d.instructorVoidCurrent(sold,'Transcription correction'));
assert.equal(d.instructorAuctionStatus(voided,31000).committed,false);
reject(voided,()=>d.instructorAdvanceAuction(voided),/phase/);
assert.equal(d.instructorOpenAuction(voided,32000).deadline,62000);

for(const mode of ['ROUND','JIT','MANUAL']){
 let state=apply(fresh(),{revealMode:mode,revealed:mode!=='MANUAL',timingMode:'UNTIMED'});
 for(let index=0;index<70;index++){
  const before=JSON.stringify(state);state=apply(state,d.instructorOpenAuction(deepFreeze(state),1000));
  assert.equal(state.revealed,true);assert.equal(state.round,Math.floor(index/10));assert.equal(state.lot,index%10);
  const c=market[state.round][state.lot];
  if(index%10<2){state=apply(state,d.instructorAcceptBid(state,1,start(c.id),1000));state=apply(state,d.instructorCommitSale(state,1,start(c.id)));}
  else {
   if(index%10===2)reject(state,()=>d.instructorAcceptBid(state,1,start(c.id),1000),/limit/);
   state=apply(state,d.instructorCommitUnsold(state));
  }
  assert.equal(state.ledger.length,index+1);assert.equal(state.ledger[index].round,Math.floor(index/10)+1);assert.equal(state.ledger[index].lot,index%10+1);assert.equal(state.ledger[index].card,c.id);
  const advanced=d.instructorAdvanceAuction(deepFreeze(state));state=apply(state,advanced);
  if(index<69){assert.equal(state.phase,'auction');assert.equal(state.revealed,mode!=='MANUAL');assert.equal(state.leader,null);assert.equal(state.currentBid,null);}
  else assert.equal(state.phase,'build');
  assert.notEqual(JSON.stringify(state),before);
 }
 assert.equal(state.teams[0].purchases.length,14);assert.deepEqual(state.teams[0].purchasesByRound,[2,2,2,2,2,2,2]);
 assert.equal(d.validateInstructorSave(state).ledger.length,70);
 reject(state,()=>d.instructorAdvanceAuction(state),/phase/);
 const gap={...state,phase:'auction',ledger:state.ledger.filter((_,i)=>i!==2).map((e,i)=>({...e,seq:i+1})),seq:69};reject(gap,()=>d.instructorAdvanceAuction(gap),/invalid-state/);
}

for(const changes of [{round:7},{lot:10},{vehiclesLocked:false},{seq:1},{teams:[{...team(1),cost:1},team(2)]},{teams:[{...team(1),totals:{...blank(),CAP:1}},team(2)]},{deadline:Number.MAX_SAFE_INTEGER+1},{pausedRemaining:-1},{market:[]}]){
 const state=apply(fresh(),changes);reject(state,()=>d.instructorOpenAuction(state,1000));
}
let hooks=0;
const getter=fresh();Object.defineProperty(getter,'open',{get(){hooks++;return false},enumerable:true});assert.throws(()=>d.instructorOpenAuction(getter,1000));
const nested=fresh();Object.defineProperty(nested.teams[0],'profit',{get(){hooks++;return 0},enumerable:true});assert.throws(()=>d.instructorOpenAuction(nested,1000));
const serializer={...fresh(),toJSON(){hooks++;return fresh()}};assert.throws(()=>d.instructorOpenAuction(serializer,1000));
const clockHook={valueOf(){hooks++;return 1000}};assert.throws(()=>d.instructorOpenAuction(fresh(),clockHook),/time/);
const idHook={valueOf(){hooks++;return 1}};assert.throws(()=>d.instructorAcceptBid(untimed,idHook,first,1000),/team/);
const arrayHook=fresh();arrayHook.teams.map=()=>{hooks++;return []};assert.throws(()=>d.instructorOpenAuction(arrayHook,1000));
const cycle=fresh();cycle.market=cycle;assert.throws(()=>d.instructorOpenAuction(cycle,1000));
const sparse=fresh();sparse.teams=new Array(2);assert.throws(()=>d.instructorOpenAuction(sparse,1000));
assert.equal(hooks,0,'Untrusted getters, coercion, serializers and array methods remain inert');
console.log('PASS pure typed instructor live controls: independent first/next/stale bid, timing/expiry/pause/resume/extend, clock/profit overflow, no mutation/hooks, VOID and 70 outcomes across all reveal modes. Browser/controller integration is a separate gate.');
