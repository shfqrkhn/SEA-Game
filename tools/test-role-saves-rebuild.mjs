// Independent schema-3 recovery fixtures: legacy market order, canonical cents and explicit ledger expectations.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {runInNewContext} from 'node:vm';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
function extract(source,name){
 const start=source.indexOf('function '+name+'(');assert.ok(start>=0);let depth=0,began=false;
 for(let index=start;index<source.length;index++){
  if(source[index]==='{'){depth++;began=true;}else if(source[index]==='}'&&--depth===0&&began)return source.slice(start,index+1);
 }
 throw Error('Unterminated function '+name);
}
const engine=read('source/shared/engine.js'),legacy=runInNewContext(engine+';'+extract(read('source/instructor.js'),'validateInstructorSave')+';'+extract(read('source/student.js'),'validateStudentSave')+';({validateInstructorSave,validateStudentSave,marketFromSeed,createTeams,cardAt,acquire})');
const result=await build({entryPoints:[fileURLToPath(new URL('../source/domain/role-saves.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const rebuilt=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const d=process.argv.some(arg=>arg.startsWith('--legacy-red'))?legacy:rebuilt;
const code='SEA3-T2-0123456789ABCDEF',seed='0123456789ABCDEF0123456789ABCDEF';
const clone=value=>JSON.parse(JSON.stringify(value));
const baseline=JSON.parse(read('docs/evidence/rules-baseline.json'));
const definitions=Object.entries(baseline.pools).flatMap(([cat,values])=>values.map(([id,[en,fr],dollars,e])=>({id,title:{en,fr},start:dollars*100,e,cat})));
const definition=id=>definitions.find(card=>card.id===id);
const blank=()=>({CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0});
function teams(locked=false){return [1,2].map(id=>({id,mission:'TROOP',lockedMission:locked?'TROOP':null,totals:blank(),cost:0,purchases:[],purchasesByRound:[0,0,0,0,0,0,0],profit:0,submitted:false}));}
function instructor(locked=false){return {schema:3,phase:locked?'auction':'planning',lang:'fr',vehiclesLocked:locked,sessionCode:code.toLowerCase(),marketSeed:seed,market:clone(legacy.marketFromSeed(seed)),teams:teams(locked),teamCount:2,revealMode:'MANUAL',timingMode:'TIMED',bidSeconds:30,round:0,lot:0,revealed:true,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,practice:{revealed:false,open:false,leader:false,closed:false},privateEntry:true,resultDraft:{team:'1',price:'350000',reason:'Correction bilingue / bilingual'},finalCallAnnounced:false};}
function student(){return {schema:3,phase:'planning',lang:'fr',vehicleConfirmed:true,lockedMission:null,sessionCode:code.toLowerCase(),teamCount:2,teamId:1,team:teams()[0],round:0,lot:0,currentCard:null,plan:'Conception / Design',planBaseline:null,risks:'Risque / Risk',maxWtpCents:85000000,scratch:{'1-1':{wtp:'300000',note:'Priorité / Priority'}},profitMode:'AMOUNT',profitInput:'250000',profitCents:25000000,practiceWon:false};}
if(process.argv.includes('--legacy-red-clock')){
 assert.throws(()=>d.validateInstructorSave({...instructor(),deadline:'not a clock'}),'Closed-state clock must remain inert finite/null typed data');
 console.log('Closed-state clock rejection PASS');process.exit(0);
}
if(process.argv.includes('--legacy-red-card')){
 assert.throws(()=>d.validateStudentSave({...student(),currentCard:false}),'Absent companion card must be null, never a non-card sentinel');
 console.log('Non-card sentinel rejection PASS');process.exit(0);
}
for(const [validator,factory]of [[d.validateInstructorSave,instructor],[d.validateStudentSave,student]]){
 const input=factory(),before=JSON.stringify(input),output=validator(input);
 assert.equal(output.sessionCode,code);assert.equal(JSON.stringify(input),before,'Normalization never mutates its input');assert.notEqual(output,input);
 let calls=0;const getter=Object.defineProperty({...input},'schema',{get(){calls++;return 3;},enumerable:true});
 assert.throws(()=>validator(getter),'Passive input boundary rejects schema getters');assert.equal(calls,0,'Schema getter is never executed');
 const nested={...input,team:input.team};if(input.teams)nested.teams=[{...input.teams[0],get purchases(){calls++;return [];}},input.teams[1]];else nested.scratch={'1-1':{wtp:'1',get note(){calls++;return 'private';}}};
 assert.throws(()=>validator(nested));assert.equal(calls,0,'Nested recovery accessors are never executed');
 const hooked={...input,toJSON(){calls++;return input;}};assert.throws(()=>validator(hooked));assert.equal(calls,0);
 const circular={...input};circular.team=circular;assert.throws(()=>validator(circular));
 const sparse=factory();if(sparse.teams)sparse.teams=new Array(2);else sparse.team.purchases=new Array(1);assert.throws(()=>validator(sparse));
 for(const changed of [{schema:4},{sessionCode:'SEA3-T3-0123456789ABCDEF'},{round:7},{lot:10},{phase:'unknown'},{lang:'de'}])assert.throws(()=>validator({...factory(),...changed}));
}
const normalized=d.validateInstructorSave(instructor());assert.equal(normalized.privateEntry,false);assert.equal(normalized.teams[0].mission,'TROOP');assert.equal(normalized.teams[0].cost,0);assert.equal(normalized.resultDraft.reason,'Correction bilingue / bilingual');
const reordered=instructor();reordered.market=reordered.market.map(row=>row.map(({instance,lot,round,cat,e,start,title,id})=>({instance,lot,round,cat,e,start,title,id})));
assert.doesNotThrow(()=>d.validateInstructorSave(reordered),'Passive market content is independent of JSON object key order');
for(const mode of ['ROUND','JIT','MANUAL'])for(const timingMode of ['TIMED','UNTIMED'])assert.doesNotThrow(()=>d.validateInstructorSave({...instructor(),revealMode:mode,timingMode}));
for(const bad of [{marketSeed:seed.toLowerCase()},{market:[]},{seq:1},{vehiclesLocked:true},{bidSeconds:9},{privateEntry:undefined,teams:[]},{practice:{revealed:true,open:false,leader:false,closed:false}},{resultDraft:{team:'1',price:'2',reason:'',extra:1}},{deadline:'not a clock'}])assert.throws(()=>d.validateInstructorSave({...instructor(),...bad}));
const auction=instructor(true),c=auction.market[0][0],sale={seq:1,kind:'SALE',round:1,lot:1,card:c.id,team:1,price:c.start+5000000,reason:'Entrée corrigée / corrected entry'};
auction.ledger=[sale];auction.seq=1;auction.leader=1;auction.currentBid=sale.price;
const purchase={...clone(definition(c.id)),round:1,lot:1,instance:`R1-L1-${c.id}`,paid:sale.price};auction.teams[0].purchases=[purchase];auction.teams[0].cost=sale.price;auction.teams[0].purchasesByRound[0]=1;auction.teams[0].totals={...blank(),...purchase.e};
const saleResult=d.validateInstructorSave(auction);assert.equal(saleResult.teams[0].cost,sale.price);assert.deepEqual(saleResult.teams[0].purchases,[purchase]);assert.deepEqual(saleResult.teams[0].totals,{...blank(),...definition(c.id).e});assert.deepEqual(saleResult.teams[0].purchasesByRound,[1,0,0,0,0,0,0]);assert.equal(saleResult.ledger[0].reason,sale.reason);
const damaged=clone(auction);damaged.teams[0].cost=123;damaged.teams[0].totals={CAP:999};damaged.teams[0].purchasesByRound=[999];assert.equal(d.validateInstructorSave(damaged).teams[0].cost,sale.price,'Derived inventory fields reconstruct from ledger');
for(const change of [{seq:2},{card:'CAP-MISSING'},{team:3},{price:c.start+1},{reason:' '},{extra:true}]){const bad=clone(auction);bad.ledger[0]={...bad.ledger[0],...change};assert.throws(()=>d.validateInstructorSave(bad));}
const voided=clone(auction);voided.ledger.push({seq:2,kind:'VOID',round:1,lot:1,card:c.id,team:1,price:sale.price,ref:1,reason:'Annulation / void'});voided.seq=2;voided.teams=teams(true);voided.leader=null;voided.currentBid=null;
const voidResult=d.validateInstructorSave(voided);assert.equal(voidResult.teams[0].cost,0);assert.equal(voidResult.teams[0].purchases.length,0);assert.equal(voidResult.ledger.length,2);
const unsold=clone(voided);unsold.ledger.push({seq:3,kind:'UNSOLD',round:1,lot:1,card:c.id,team:null,price:null});unsold.seq=3;assert.equal(d.validateInstructorSave(unsold).ledger.length,3);
for(const change of [{ref:2},{team:2},{price:1},{reason:' '},{card:unsold.market[0][1].id}]){const bad=clone(voided);bad.ledger[1]={...bad.ledger[1],...change};assert.throws(()=>d.validateInstructorSave(bad));}
const duplicate=clone(auction);duplicate.ledger.push({...sale,seq:2});duplicate.seq=2;assert.throws(()=>d.validateInstructorSave(duplicate));
const missingPrefix={...instructor(true),lot:1};assert.throws(()=>d.validateInstructorSave(missingPrefix));
const future=clone(unsold);future.ledger[2]={...future.ledger[2],lot:2,card:future.market[0][1].id};assert.throws(()=>d.validateInstructorSave(future));
const completed=instructor(true);completed.round=6;completed.lot=9;completed.phase='build';completed.ledger=completed.market.flat().map((card,index)=>({seq:index+1,kind:'UNSOLD',round:card.round,lot:card.lot,card:card.id,team:null,price:null}));completed.seq=70;
for(const phase of ['build','submit','debrief','closed'])assert.equal(d.validateInstructorSave({...completed,phase}).ledger.length,70);
const withSales=clone(completed),expectedPurchases=[];
for(let round=1;round<=7;round++)for(let lot=1;lot<=2;lot++){
 const index=(round-1)*10+lot-1,card=withSales.market[round-1][lot-1],canonical=clone(definition(card.id));
 withSales.ledger[index]={seq:index+1,kind:'SALE',round,lot,card:card.id,team:1,price:canonical.start};
 expectedPurchases.push({...canonical,round,lot,instance:`R${round}-L${lot}-${card.id}`,paid:canonical.start});
}
withSales.teams[0].purchases=expectedPurchases;
const fourteen=d.validateInstructorSave(withSales).teams[0];
assert.deepEqual(fourteen.purchases,expectedPurchases);assert.deepEqual(fourteen.purchasesByRound,[2,2,2,2,2,2,2]);
assert.equal(fourteen.cost,expectedPurchases.reduce((sum,p)=>sum+p.paid,0));
const expectedTotals=blank();for(const p of expectedPurchases)for(const [key,value]of Object.entries(p.e))expectedTotals[key]+=value;
assert.deepEqual(fourteen.totals,expectedTotals,'All fourteen purchases replay signed baseline effects');
const threeWins=clone(withSales),third=threeWins.market[0][2];threeWins.ledger[2]={seq:3,kind:'SALE',round:1,lot:3,card:third.id,team:1,price:third.start};
assert.throws(()=>d.validateInstructorSave(threeWins),'Ledger replay itself rejects third active win before input inventory comparison');
const forgedPurchase=clone(withSales);forgedPurchase.teams[0].purchases[0].paid+=5000000;assert.throws(()=>d.validateInstructorSave(forgedPurchase),'Input purchase payment must agree with authoritative ledger');
const overflow=clone(auction);overflow.teams[0].profit=Number.MAX_SAFE_INTEGER;assert.throws(()=>d.validateInstructorSave(overflow),'Canonical cost plus persisted profit cannot overflow');
const incomplete=clone(completed);incomplete.ledger.pop();incomplete.seq=69;assert.throws(()=>d.validateInstructorSave(incomplete));
const capacity=instructor(true);capacity.ledger=[];for(let index=0;index<105;index++){capacity.ledger.push({seq:index*2+1,kind:'UNSOLD',round:1,lot:1,card:c.id,team:null,price:null},{seq:index*2+2,kind:'VOID',round:1,lot:1,card:c.id,team:null,price:null,ref:index*2+1,reason:'Correction'});}capacity.seq=210;assert.equal(d.validateInstructorSave(capacity).ledger.length,210);capacity.ledger.push({seq:211,kind:'UNSOLD',round:1,lot:1,card:c.id,team:null,price:null});capacity.seq=211;assert.throws(()=>d.validateInstructorSave(capacity));
const open={...instructor(true),open:true,deadline:123456,leader:1,currentBid:c.start};assert.doesNotThrow(()=>d.validateInstructorSave(open));for(const change of [{deadline:null},{revealed:false},{pausedRemaining:-1},{currentBid:c.start+1},{leader:3}])assert.throws(()=>d.validateInstructorSave({...open,...change}));
const companion=student();companion.phase='auction';companion.lockedMission='TROOP';companion.team.lockedMission='TROOP';companion.currentCard=clone(c);companion.currentCard.title.en='Untrusted caption';const before=JSON.stringify(companion),restored=d.validateStudentSave(companion);assert.equal(restored.currentCard.title.en,c.title.en);assert.equal(JSON.stringify(companion),before);assert.notEqual(restored.scratch,companion.scratch);assert.equal(restored.scratch['1-1'].note,'Priorité / Priority');
for(const change of [{market:[]},{marketSeed:seed},{teams:[]},{ledger:[]},{privateEntry:false},{leader:null},{teamId:3},{currentCard:false},{plan:'x'.repeat(1201)},{maxWtpCents:-1},{profitCents:-1},{practiceWon:true},{vehicleConfirmed:'yes'},{lockedMission:'MINE'},{scratch:{'0-1':{wtp:'1',note:''}}},{scratch:{'1-1':{wtp:'1',note:'',extra:1}}}])assert.throws(()=>d.validateStudentSave({...student(),...change}));
console.log('Fresh typed instructor/student schema3 passive recovery, canonical reconstruction, ledger VOID/prefix/capacity, identity and privacy PASS');
