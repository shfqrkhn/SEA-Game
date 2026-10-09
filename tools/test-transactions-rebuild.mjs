// Independent schema-3/numeric examples; no production rule functions generate expected values.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const root=fileURLToPath(new URL('../',import.meta.url));
if(process.argv.includes('--legacy-red')){
 const engine=readFileSync(new URL('../source/shared/engine.js',import.meta.url),'utf8');
 const legacy=runInNewContext(engine+'\n({createTeams,cardAt,acquire})');
 const team=legacy.createTeams({teamCount:2})[0];team.mission='COMBAT';team.totals.CAP=Number.MAX_SAFE_INTEGER;
 const before=JSON.stringify(team);
 assert.throws(()=>legacy.acquire(team,legacy.cardAt('CAP-A',1,1),30000000),/invalid-state|capability/,'Live acquisition must reject unsafe/inconsistent signed capability state before mutation');
 assert.equal(JSON.stringify(team),before);
 console.log('Actual runtime safe transaction boundary PASS');
}else{
 const result=await build({stdin:{contents:"export * from './source/domain/teams'; export * from './source/domain/transactions';",resolveDir:root,loader:'ts'},bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
 const d=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
 const baseline=JSON.parse(readFileSync(new URL('../docs/evidence/rules-baseline.json',import.meta.url),'utf8'));
 const definitions=Object.entries(baseline.pools).flatMap(([cat,defs])=>defs.map(([id,[en,fr],dollars,e])=>({id,title:{en,fr},start:dollars*100,e,cat})));
 const definition=id=>definitions.find(card=>card.id===id);
 const purchase=(id,round,lot,paid=definition(id).start)=>({id,round,lot,instance:`R${round}-L${lot}-${id}`,paid});
 const totals=(changes={})=>({CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0,...changes});
 const raw=(purchases=[],changes={})=>({id:1,mission:'COMBAT',lockedMission:null,profit:0,submitted:false,purchases,...changes});
 const fresh=()=>d.normalizeTeam(raw());
 const deepFreeze=value=>{if(value&&typeof value==='object'){for(const child of Object.values(value))deepFreeze(child);Object.freeze(value)}return value};
 const unchangedReject=(value,fn,pattern=/invalid-state|money|duplicate|limit|capability/)=>{const before=JSON.stringify(value);assert.throws(fn,pattern);assert.equal(JSON.stringify(value),before)};
 for(let count=2;count<=10;count++){
  const teams=d.createTeams(count);
  assert.equal(teams.length,count);assert.deepEqual(teams.map(team=>team.id),Array.from({length:count},(_,index)=>index+1));
  for(const team of teams)assert.deepEqual(team,{id:team.id,mission:null,lockedMission:null,totals:totals(),cost:0,purchases:[],purchasesByRound:Array(7).fill(0),profit:0,submitted:false});
  assert.notEqual(teams[0].totals,teams[1].totals);assert.notEqual(teams[0].purchases,teams[1].purchases);assert.notEqual(teams[0].purchasesByRound,teams[1].purchasesByRound);
 }
 for(const count of [0,1,11,2.5,'2',NaN,Infinity])assert.throws(()=>d.createTeams(count),/invalid-state/);
 const corrupted=raw([{...purchase('CAP-A',1,1),title:{en:'wrong',fr:'faux'},start:1,e:{CAP:999,MOB:999},cat:'SA'}],{totals:totals({CAP:999}),cost:1,purchasesByRound:Array(7).fill(2),profit:12345,submitted:true});
 const sourceBefore=JSON.stringify(corrupted),canonical=d.normalizeTeam(deepFreeze(corrupted));
 assert.equal(JSON.stringify(corrupted),sourceBefore,'Recovery never edits the snapshot');
 assert.deepEqual(canonical,{id:1,mission:'COMBAT',lockedMission:null,totals:totals({CAP:6,MOB:-10}),cost:30000000,purchases:[{...definition('CAP-A'),round:1,lot:1,instance:'R1-L1-CAP-A',paid:30000000}],purchasesByRound:[1,0,0,0,0,0,0],profit:12345,submitted:true});
 assert.deepEqual(d.normalizeTeam(JSON.parse(JSON.stringify(canonical))),canonical,'Schema-3 JSON round trip retains all approved values');
 for(let round=1;round<=7;round++)for(let lot=1;lot<=10;lot++){
  const category=baseline.slots[lot-1],index=category==='SE_PROCESS'?(round-1)*3+lot-8:round-1;
  const [id]=baseline.pools[category][index],expected=definition(id);
  const team=d.acquirePurchase(deepFreeze(fresh()),purchase(id,round,lot),expected.start);
  assert.equal(team.cost,expected.start,id+' canonical price');assert.deepEqual(team.totals,totals(expected.e),id+' canonical signed effect');
  assert.deepEqual(team.purchases,[{...expected,round,lot,instance:`R${round}-L${lot}-${id}`,paid:expected.start}],id+' canonical bilingual purchase metadata');
 }
 assert.deepEqual(d.normalizeTeam({...raw(),mission:null},true).totals,totals());
 assert.throws(()=>d.normalizeTeam({...raw(),mission:null}),/invalid-state/);
 assert.throws(()=>d.normalizeTeam(raw([purchase('CAP-A',1,1)],{mission:null}),true),/invalid-state/);
 assert.equal(d.normalizeTeam(raw([],{lockedMission:'COMBAT'})).lockedMission,'COMBAT');
 for(const changes of [{id:11},{id:'1'},{mission:'unknown'},{lockedMission:'unknown'},{lockedMission:'RECCE'},{submitted:0},{unexpected:'directive'},{purchases:new Array(1)}]){
  const candidate=raw([],changes);unchangedReject(candidate,()=>d.normalizeTeam(candidate));
 }
 for(const p of [{...purchase('CAP-A',1,1),instance:'old'},{...purchase('CAP-A',1,1),round:8},{...purchase('CAP-A',1,1),lot:2},{...purchase('CAP-A',1,1),id:'unknown'},{...purchase('CAP-A',1,1),paid:30000001},{...purchase('CAP-A',1,1),paid:29999999},{...purchase('CAP-A',1,1),paid:Number.MAX_SAFE_INTEGER+1},{...purchase('CAP-A',1,1),unexpected:1}]){
  const candidate=raw([p]);unchangedReject(candidate,()=>d.normalizeTeam(candidate));
 }
 const dupCard=raw([purchase('CAP-A',1,1),purchase('CAP-A',2,1)]);
 unchangedReject(dupCard,()=>d.normalizeTeam(dupCard),/duplicate/);
 const dupLot=raw([purchase('CAP-A',1,1),purchase('CAP-B',1,1)]);
 unchangedReject(dupLot,()=>d.normalizeTeam(dupLot),/duplicate/);
 const overLimit=raw([purchase('CAP-A',1,1),purchase('MOB-A',1,2),purchase('FP-A',1,3)]);
 unchangedReject(overLimit,()=>d.normalizeTeam(overLimit),/limit/);
 const maxPrice=30000000+Math.floor((Number.MAX_SAFE_INTEGER-30000000)/5000000)*5000000;
 const overflow=raw([purchase('CAP-A',1,1,maxPrice)],{profit:Number.MAX_SAFE_INTEGER-maxPrice+1});
 unchangedReject(overflow,()=>d.normalizeTeam(overflow),/money/);
 const fourteen=Array.from({length:7},(_,index)=>[purchase('CAP-'+String.fromCharCode(65+index),index+1,1),purchase('MOB-'+String.fromCharCode(65+index),index+1,2)]).flat();
 assert.equal(d.normalizeTeam(raw(fourteen)).purchases.length,14);
 const fifteen=raw([...fourteen,purchase('FP-A',7,3)]);unchangedReject(fifteen,()=>d.normalizeTeam(fifteen),/invalid-state/);
 const start=deepFreeze(fresh()),one=d.acquirePurchase(start,purchase('CAP-A',1,1),35000000);
 assert.deepEqual(start,fresh(),'Successful acquisition leaves frozen input intact');
 assert.equal(one.cost,35000000);assert.deepEqual(one.totals,totals({CAP:6,MOB:-10}));assert.deepEqual(one.purchasesByRound,[1,0,0,0,0,0,0]);
 const two=d.acquirePurchase(deepFreeze(one),purchase('MOB-A',1,2),40000000);
 assert.equal(two.cost,75000000);assert.deepEqual(two.totals,totals({CAP:6,MOB:60}));assert.deepEqual(two.purchasesByRound,[2,0,0,0,0,0,0]);
 unchangedReject(two,()=>d.acquirePurchase(two,purchase('FP-A',1,3),35000000),/limit/);
 unchangedReject(two,()=>d.acquirePurchase(two,purchase('CAP-A',2,1),30000000),/duplicate/);
 unchangedReject(one,()=>d.acquirePurchase(one,purchase('MOB-A',1,2),40000001),/money/);
 const unsafe={...one,totals:totals({CAP:Number.MAX_SAFE_INTEGER,MOB:-10})};
 unchangedReject(unsafe,()=>d.acquirePurchase(unsafe,purchase('MOB-A',2,2),40000000),/invalid-state/);
 const unsafeCost={...one,cost:Number.MAX_SAFE_INTEGER+1};unchangedReject(unsafeCost,()=>d.acquirePurchase(unsafeCost,purchase('MOB-A',2,2),40000000),/money/);
 unchangedReject(two,()=>d.removePurchase(two,'R1-L1-not-here'),/invalid-state/);
 const minusCap=d.removePurchase(deepFreeze(two),'R1-L1-CAP-A');
 assert.equal(minusCap.cost,40000000);assert.deepEqual(minusCap.totals,totals({MOB:70}));assert.equal(minusCap.purchases[0].instance,'R1-L2-MOB-A');
 const empty=d.removePurchase(deepFreeze(minusCap),'R1-L2-MOB-A');assert.equal(empty.cost,0);assert.deepEqual(empty.totals,totals());assert.deepEqual(empty.purchasesByRound,Array(7).fill(0));
 const retained=d.removePurchase(d.normalizeTeam(raw([purchase('CAP-A',1,1)],{profit:10001,submitted:true,lockedMission:'COMBAT'})),'R1-L1-CAP-A');
 assert.equal(retained.profit,10001);assert.equal(retained.submitted,true);assert.equal(retained.lockedMission,'COMBAT');
 let getterCalls=0;
 const accessor=raw();Object.defineProperty(accessor,'mission',{enumerable:true,get(){getterCalls++;return 'COMBAT'}});assert.throws(()=>d.normalizeTeam(accessor),/invalid-state/);
 const arrayAccessor=raw([purchase('CAP-A',1,1)]);Object.defineProperty(arrayAccessor.purchases,'0',{enumerable:true,get(){getterCalls++;return purchase('CAP-A',1,1)}});assert.throws(()=>d.normalizeTeam(arrayAccessor),/invalid-state/);
 const capabilityAccessor={...fresh(),totals:totals()};Object.defineProperty(capabilityAccessor.totals,'CAP',{enumerable:true,get(){getterCalls++;return 0}});assert.throws(()=>d.acquirePurchase(capabilityAccessor,purchase('CAP-A',1,1),30000000),/invalid-state/);
 assert.equal(getterCalls,0,'Boundary rejects accessors before reading them');
 assert.throws(()=>d.validateTeamSnapshot({...fresh(),purchasesByRound:new Array(7)}),/invalid-state/,'Sparse counts cannot pass an every/some omission');
 let inheritedHookCalls=0;
 const inheritedIterator=raw([purchase('CAP-A',1,1)]);
 Object.setPrototypeOf(inheritedIterator.purchases,{get [Symbol.iterator](){inheritedHookCalls++;throw Error('untrusted iterator')}});
 assert.equal(d.normalizeTeam(inheritedIterator).cost,30000000);
 const inheritedSome={...fresh(),purchasesByRound:Array(7).fill(0)};
 Object.setPrototypeOf(inheritedSome.purchasesByRound,{get some(){inheritedHookCalls++;throw Error('untrusted some')}});
 assert.equal(d.validateTeamSnapshot(inheritedSome).cost,0);
 assert.equal(inheritedHookCalls,0,'Input array prototype iteration/method hooks are never executed');
 const extraArrayField=raw([purchase('CAP-A',1,1)]);extraArrayField.purchases['4294967295']='ignored directive';assert.throws(()=>d.normalizeTeam(extraArrayField),/invalid-state/);
 console.log('Fresh typed team/transactions PASS: independent cents, signed effects, schema-3 canonical replay, strict duplicate/limit boundaries, immutable acquisition and stable removal. Whole role/session rewrite not claimed.');
}
