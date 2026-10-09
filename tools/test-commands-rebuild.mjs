// Expected purchases, signed effects, prices and ledger positions come from the independent rules baseline.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const root=fileURLToPath(new URL('../',import.meta.url));
const built=await build({stdin:{contents:"export * from './source/domain/commands';",resolveDir:root,loader:'ts'},bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const d=await import('data:text/javascript;base64,'+Buffer.from(built.outputFiles[0].text).toString('base64'));
const baseline=JSON.parse(readFileSync(new URL('../docs/evidence/rules-baseline.json',import.meta.url),'utf8'));
const zeros=()=>({CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0});
const card=(id,round,lot)=>{
 const found=Object.entries(baseline.pools).flatMap(([cat,rows])=>rows.map(row=>[cat,row])).find(([,row])=>row[0]===id);
 assert.ok(found);const[cat,[,title,dollars,e]]=found;
 return{id,title:{en:title[0],fr:title[1]},start:dollars*100,e:{...e},cat,round,lot,instance:`R${round}-L${lot}-${id}`};
};
const market=Array.from({length:7},(_,round)=>Array.from({length:10},(_,lot)=>{
 const category=baseline.slots[lot],row=category==='SE_PROCESS'?round*3+lot-7:round;
 return card(baseline.pools[category][row][0],round+1,lot+1);
}));
const team=(id=1)=>({id,mission:'COMBAT',lockedMission:'COMBAT',totals:zeros(),cost:0,purchases:[],purchasesByRound:Array(7).fill(0),profit:0,submitted:false});
const fresh=()=>({phase:'auction',round:0,lot:0,open:true,pausedRemaining:null,leader:1,currentBid:35000000,teams:[team(),team(2)],market:structuredClone(market),ledger:[],seq:0});
const deepFreeze=value=>{if(value&&typeof value==='object'){for(const child of Object.values(value))deepFreeze(child);Object.freeze(value)}return value};
const reject=(state,operation,pattern=/invalid-state|phase|reason|ledger-limit|money|limit|duplicate/)=>{
 const before=JSON.stringify(state);assert.throws(operation,pattern);assert.equal(JSON.stringify(state),before,'Rejected command never changes input');
};
const sold=d.instructorCommitSale(deepFreeze(fresh()),1,35000000);
assert.equal(sold.seq,1);assert.equal(sold.open,false);assert.equal(sold.pausedRemaining,null);assert.equal(sold.resultDraft,null);
assert.equal(sold.leader,1);assert.equal(sold.currentBid,35000000);
assert.deepEqual(sold.ledger,[{seq:1,kind:'SALE',round:1,lot:1,card:'CAP-A',team:1,price:35000000}]);
assert.deepEqual(sold.teams[0].purchases,[{...card('CAP-A',1,1),paid:35000000}]);
assert.deepEqual(sold.teams[0].totals,{...zeros(),CAP:6,MOB:-10});assert.equal(sold.teams[0].cost,35000000);
assert.deepEqual(sold.teams[0].purchasesByRound,[1,0,0,0,0,0,0]);assert.deepEqual(sold.teams[1],team(2));
assert.ok(Object.isFrozen(sold.ledger[0]),'Outcome rows are immutable history');
const timedOut={...fresh(),deadline:0,timingMode:'TIMED'};
assert.equal(d.instructorCommitSale(timedOut,1,35000000).seq,1,'Final outcome remains allowed after a bidding deadline');
for(const changes of [{seq:1},{seq:-1},{phase:'planning'},{open:false},{pausedRemaining:0},{round:7},{lot:10},{round:0.5},{leader:3},{leader:null},{currentBid:35000001}]){
 const state={...fresh(),...changes};reject(state,()=>d.instructorCommitSale(state,1,35000000));
}
for(const changes of [{seq:1},{open:false},{pausedRemaining:10}]){
 const state={...fresh(),...changes};reject(state,()=>d.instructorCommitUnsold(state));
}
for(const [winner,paid,reason] of [[2,35000000,''],[2,35000000,'   '],[2,35000000,'x'.repeat(121)],[1,35000001,'valid'],[1,29999999,'valid'],[3,35000000,'valid']]){
 const state=fresh();reject(state,()=>d.instructorCommitSale(state,winner,paid,reason));
}
const corrected=d.instructorCommitSale(deepFreeze(fresh()),2,40000000,'Correction approuvée');
assert.deepEqual(corrected.ledger,[{seq:1,kind:'SALE',round:1,lot:1,card:'CAP-A',team:2,price:40000000,reason:'Correction approuvée'}]);
assert.equal(corrected.teams[0].cost,0);assert.equal(corrected.teams[1].cost,40000000);
const unsold=d.instructorCommitUnsold(deepFreeze(fresh()));
assert.deepEqual(unsold.ledger,[{seq:1,kind:'UNSOLD',round:1,lot:1,card:'CAP-A',team:null,price:null}]);assert.equal(unsold.leader,null);assert.equal(unsold.currentBid,null);
const afterSale={...fresh(),...sold};
reject(afterSale,()=>d.instructorCommitSale(afterSale,1,35000000));reject(afterSale,()=>d.instructorCommitUnsold(afterSale));
for(const reason of ['', '  ', 'x'.repeat(121)])reject(afterSale,()=>d.instructorVoidCurrent(afterSale,reason));
const voided=d.instructorVoidCurrent(deepFreeze(afterSale),'Wrong winner / mauvais gagnant');
assert.deepEqual(voided.ledger,[sold.ledger[0],{seq:2,kind:'VOID',ref:1,round:1,lot:1,card:'CAP-A',team:1,price:35000000,reason:'Wrong winner / mauvais gagnant'}]);
assert.equal(voided.teams[0].cost,0);assert.deepEqual(voided.teams[0].totals,zeros());assert.deepEqual(voided.teams[0].purchases,[]);
assert.equal(voided.leader,null);assert.equal(voided.currentBid,null);
const afterVoid={...fresh(),...voided};reject(afterVoid,()=>d.instructorVoidCurrent(afterVoid,'Already void'));
const replacement=d.instructorCommitSale(deepFreeze({...afterVoid,open:true}),2,40000000,'New winner');
assert.equal(replacement.seq,3);assert.deepEqual(replacement.ledger.slice(0,2),voided.ledger);assert.equal(replacement.teams[1].cost,40000000);
const voidUnsold=d.instructorVoidCurrent({...fresh(),...unsold},'Reopen');
assert.deepEqual(voidUnsold.ledger[1],{seq:2,kind:'VOID',ref:1,round:1,lot:1,card:'CAP-A',team:null,price:null,reason:'Reopen'});
for(const changes of [{seq:99},{teams:[team(),team(2)]},{ledger:[{...sold.ledger[0],team:2}]},{ledger:[{...sold.ledger[0],price:40000000}]},{ledger:[{...sold.ledger[0],card:'CAP-B'}]},{open:true}]){
 const state={...afterSale,...changes};reject(state,()=>d.instructorVoidCurrent(state,'Correction'));
}
const wrongVoid={...afterVoid,ledger:[voided.ledger[0],{...voided.ledger[1],ref:2}]};reject(wrongVoid,()=>d.instructorCommitUnsold({...wrongVoid,open:true}));
const missingPrior={...fresh(),lot:1};reject(missingPrior,()=>d.instructorCommitUnsold(missingPrior));
const futureOutcome={...fresh(),ledger:[{seq:1,kind:'UNSOLD',round:1,lot:2,card:'MOB-A',team:null,price:null}],seq:1};reject(futureOutcome,()=>d.instructorCommitUnsold(futureOutcome));
const incorrectMarket=fresh();incorrectMarket.market[0][0]={...incorrectMarket.market[0][0],id:'MOB-A'};reject(incorrectMarket,()=>d.instructorCommitUnsold(incorrectMarket));
const duplicateMarket=fresh();duplicateMarket.market[1][0]=card('CAP-A',2,1);reject(duplicateMarket,()=>d.instructorCommitUnsold(duplicateMarket));

// Reserve one outcome for each unvisited lot, plus the replacement immediately after a VOID.
let bounded={...fresh(),...unsold};
for(let cycle=0;cycle<70;cycle++){
 bounded={...bounded,...d.instructorVoidCurrent(bounded,'Repeat correction')};
 bounded={...bounded,open:true,...d.instructorCommitUnsold({...bounded,open:true})};
}
assert.equal(bounded.ledger.length,141);assert.equal(bounded.ledger.length+69,210);
reject(bounded,()=>d.instructorVoidCurrent(bounded,'Exhausted'),/ledger-limit/);
for(let index=1;index<70;index++){
 bounded={...bounded,round:Math.floor(index/10),lot:index%10,open:true,leader:null,currentBid:null};
 bounded={...bounded,...d.instructorCommitUnsold(bounded)};
}
assert.equal(bounded.seq,210);assert.equal(bounded.round,6);assert.equal(bounded.lot,9);
reject(bounded,()=>d.instructorVoidCurrent(bounded,'No room'),/ledger-limit/);

const student=(round=0,lot=0,id='CAP-A')=>({phase:'auction',round,lot,lockedMission:'COMBAT',team:team(),currentCard:card(id,round+1,lot+1)});
const win=d.studentRecordWin(deepFreeze(student()),35000000);
assert.deepEqual(win,{phase:'auction',round:0,lot:1,team:sold.teams[0],currentCard:null});
const crossing=d.studentRecordWin(deepFreeze(student(0,9,'SE-C')),market[0][9].start);
assert.equal(crossing.round,1);assert.equal(crossing.lot,0);assert.equal(crossing.phase,'auction');assert.equal(crossing.currentCard,null);
const finalId=market[6][9].id,final=d.studentRecordWin(deepFreeze(student(6,9,finalId)),market[6][9].start);
assert.equal(final.phase,'build');assert.equal(final.round,6);assert.equal(final.lot,9);assert.equal(final.currentCard,null);
for(const changes of [{phase:'practice'},{lockedMission:null},{lockedMission:'RECCE'},{currentCard:null},{lot:1},{currentCard:card('CAP-A',2,1)},{team:{...team(),lockedMission:null}},{round:7}]){
 const state={...student(),...changes};reject(state,()=>d.studentRecordWin(state,35000000));
}
const twoWins={...student(0,2,'FP-A'),team:{...sold.teams[0],purchases:[{...card('CAP-A',1,1),paid:35000000},{...card('MOB-A',1,2),paid:40000000}],cost:75000000,totals:{...zeros(),CAP:6,MOB:60},purchasesByRound:[2,0,0,0,0,0,0]}};
reject(twoWins,()=>d.studentRecordWin(twoWins,market[0][2].start),/limit/);
const duplicate={...student(1,0),team:sold.teams[0]};reject(duplicate,()=>d.studentRecordWin(duplicate,35000000),/duplicate/);
const staleBid=student();reject(staleBid,()=>d.studentRecordWin(staleBid,35000001),/money/);

// No supplied getter, method, sparse row or mismatched live aggregate executes during rejected commands.
let hooks=0;
const hooked=fresh();Object.defineProperty(hooked,'seq',{get(){hooks++;return 0},enumerable:true});
assert.throws(()=>d.instructorCommitSale(hooked,1,35000000),/invalid-state/);assert.equal(hooks,0);
const arrayHook=fresh();arrayHook.ledger.map=()=>{hooks++;return[]};assert.throws(()=>d.instructorCommitUnsold(arrayHook),/invalid-state/);assert.equal(hooks,0);
const rowHook=fresh();Object.defineProperty(rowHook.market[0][0],'id',{get(){hooks++;return'CAP-A'},enumerable:true});assert.throws(()=>d.instructorCommitUnsold(rowHook),/invalid-state/);assert.equal(hooks,0);
const ledgerHook={...afterSale,ledger:[{...sold.ledger[0]}]};Object.defineProperty(ledgerHook.ledger[0],'kind',{get(){hooks++;return'SALE'},enumerable:true});assert.throws(()=>d.instructorVoidCurrent(ledgerHook,'Correction'),/invalid-state/);assert.equal(hooks,0);
const sparse=fresh();sparse.ledger=new Array(1);sparse.seq=1;assert.throws(()=>d.instructorCommitUnsold(sparse),/invalid-state/);
const unsafe=fresh();unsafe.teams[0].totals.CAP=Number.MAX_SAFE_INTEGER;reject(unsafe,()=>d.instructorCommitSale(unsafe,1,35000000),/invalid-state/);
console.log('Fresh typed complete role commands PASS: immutable outcomes, independent ledgers/VOID replay,210 reservation,70positions,price/mission/limits/stale state/passive data');
