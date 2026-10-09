#!/usr/bin/env node
// Independent MPES worked examples; never execute the historical scoreSource oracle.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const result=await build({entryPoints:[fileURLToPath(new URL('../source/domain/index.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const d=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const blank=()=>Object.fromEntries(d.CAPABILITY_KEYS.map(k=>[k,0]));
const totals=(changes={})=>({...blank(),...changes});
const team=(id,mission,changes,cost=100,profit=0,submitted=true)=>({id,mission,totals:totals(changes),cost,profit,submitted});
const rejects=(fn)=>assert.throws(fn,d.DomainError);
assert.equal(d.parseAmount(' 123,45 '),12345);
assert.equal(d.parseAmount('0.01'),1);
assert.equal(d.parseAmount('90071992547409.91'),Number.MAX_SAFE_INTEGER);
for(const value of ['-1','1.001','1e2','Infinity','90071992547409.92','',{},null])rejects(()=>d.parseAmount(value));
assert.equal(d.parseWholeDollars('0042'),4200);
for(const value of ['4.00','-1','90071992547410'])rejects(()=>d.parseWholeDollars(value));
assert.equal(d.parsePercentBps('12,34'),1234);
assert.equal(d.parsePercentBps('10000'),1000000);
rejects(()=>d.parsePercentBps('10000.01'));
assert.equal(d.profitFromBps(1,5000n),1,'half cent rounds upward');
assert.equal(d.profitFromBps(1,4999n),0);
assert.equal(d.profitFromBps(199,2500n),50,'49.75 cents rounds to 50');
assert.equal(d.addCents(Number.MAX_SAFE_INTEGER,0),Number.MAX_SAFE_INTEGER);
rejects(()=>d.addCents(Number.MAX_SAFE_INTEGER,1));
for(const value of [-1,NaN,Infinity,0.1,Number.MAX_SAFE_INTEGER+1])rejects(()=>d.cents(value));
for(const value of [-1n,1000001n,0.5,'2'])rejects(()=>d.profitFromBps(100,value));
rejects(()=>d.profitFromBps(Number.MAX_SAFE_INTEGER,1000000n));
assert.equal(d.validatePurchasePrice(30000000,35000000),35000000);
for(const value of [29999999,30000001])rejects(()=>d.validatePurchasePrice(30000000,value));
assert.deepEqual(d.sumCapabilities([{CAP:6,MOB:-10},{MOB:70,PRO:-1}]),totals({CAP:6,MOB:60,PRO:-1}));
assert.equal(d.sumCapabilities([{MOB:-20}]).MOB,-20,'penalties remain signed');
rejects(()=>d.sumCapabilities([{TYPO:1}]));
rejects(()=>d.sumCapabilities([{CAP:0.1}]));
rejects(()=>d.sumCapabilities([{CAP:Number.MAX_SAFE_INTEGER},{CAP:1}]));
rejects(()=>d.sumCapabilities([{MOB:-Number.MAX_SAFE_INTEGER},{MOB:-1}]));
const cases=[
 ['COMBAT',{MOB:99,FP:13},80],
 ['RECCE',{COM:124,SA:7},60],
 ['TROOP',{CAP:13,PRO:6},100],
 ['COMMAND',{CAP:8,COM:174},80],
 ['RECOVERY',{PRO:8,REC:5},120],
 ['MINE',{SA:3,MC:5},120],
];
for(const [mission,changes,expected] of cases)assert.equal(d.missionScore(mission,totals(changes)),expected,mission);
for(const mission of d.MISSION_IDS){
 const minimum=totals(d.MISSIONS[mission].requirements);
 assert.equal(d.isCompliant(mission,minimum),true);
 assert.equal(d.missionScore(mission,minimum),0);
 for(const [key,value] of Object.entries(d.MISSIONS[mission].requirements)){
  const below={...minimum,[key]:value-1};
  assert.equal(d.isCompliant(mission,below),false);
  assert.deepEqual(d.missionShortfalls(mission,below),[{capability:key,required:value,actual:value-1,missing:1}]);
 }
 assert.equal(d.missionScore(mission,totals({CAP:-1,MOB:-1,FP:-1,PRO:-1,COM:-1,SA:-1,REC:-1,MC:-1})),0);
}
assert.equal(d.missionScore('COMBAT',totals({MOB:89,FP:10})),0);
assert.equal(d.missionScore('COMBAT',totals({MOB:90,FP:10})),20);
assert.equal(d.missionScore('COMMAND',totals({COM:149,CAP:5})),0);
assert.equal(d.missionScore('COMMAND',totals({COM:150,CAP:5})),20);
rejects(()=>d.missionScore('UNKNOWN',blank()));
rejects(()=>d.missionScore('TROOP',totals({CAP:Number.MAX_SAFE_INTEGER})));
rejects(()=>d.isCompliant('COMBAT',{CAP:4}));
const command={CAP:6,MOB:60,FP:2,PRO:4,COM:125,SA:4}; // 20 score.
const a=team(1,'COMMAND',command,100),b=team(2,'COMMAND',command,100);
assert.equal(d.awardEligible(a),true);
assert.equal(d.exactAwardTie(a,b),true);
assert.equal(d.awardComparator(a,b),-1,'ID is display order only');
assert.deepEqual(d.rankAwards([b,a]).winnerIds,[1,2]);
const ratioSame=team(3,'COMMAND',{...command,CAP:7},200); // 40 score; same ratio, higher bid.
assert.equal(d.awardComparator(a,ratioSame),-1);
assert.equal(d.exactAwardTie(a,ratioSame),false);
const nearly=team(4,'COMMAND',command,Number.MAX_SAFE_INTEGER-1);
const farther=team(5,'COMMAND',command,Number.MAX_SAFE_INTEGER);
assert.equal(d.awardComparator(nearly,farther),-1,'no rounded-display ordering');
const smallBid=team(6,'COMMAND',command,4503599627370481); // 20 score.
const betterRatio=team(7,'COMMAND',{...command,CAP:7},9007199254740961); // 40 score, one cent less than twice smallBid.
assert.equal(smallBid.cost*40,betterRatio.cost*20,'worked example exposes floating cross-product equality');
assert.equal(d.awardComparator(smallBid,betterRatio),1,'better exact ratio outranks lower bid despite floating equality');
assert.deepEqual(d.rankAwards([smallBid,betterRatio]).winnerIds,[7]);
assert.equal(d.awardEligible({...a,submitted:false}),false);
assert.equal(d.awardEligible({...a,totals:totals({...command,MOB:59})}),false);
assert.equal(d.awardEligible({...a,totals:totals({...command,CAP:5})}),false);
assert.deepEqual(d.rankAwards([{...a,submitted:false}]).winnerIds,[]);
assert.deepEqual(d.rankAwards([a,ratioSame]).winnerIds,[1]);
rejects(()=>d.rankAwards([a,a]));
rejects(()=>d.rankAwards([{...a,id:11}]));
rejects(()=>d.bidCents({...a,cost:Number.MAX_SAFE_INTEGER,profit:1}));
assert.equal(d.bidCents({...a,cost:0,profit:0}),0);
const baseline=JSON.parse(readFileSync(new URL('../docs/evidence/rules-baseline.json',import.meta.url),'utf8'));
assert.equal(d.CARDS.length,70);
assert.equal(new Set(d.CARDS.map(c=>c.id)).size,70);
assert.deepEqual(d.ROUND_SLOTS,baseline.slots);
for(const [id,mission] of Object.entries(baseline.missions))assert.deepEqual(d.MISSIONS[id],{title:{en:mission.en,fr:mission.fr},requirements:mission.req});
for(const [category,defs] of Object.entries(baseline.pools))for(const [id,[en,fr],dollars,effects] of defs){
 assert.deepEqual(d.cardDefinition(id),{id,category,title:{en,fr},startCents:dollars*100,effects});
 assert.ok(Object.isFrozen(d.cardDefinition(id).effects));
}
assert.ok(Object.isFrozen(d.CARDS));
rejects(()=>d.cardDefinition('UNKNOWN'));
assert.equal(d.cardForSlot('CAP-A',1,1).instance,'R1-L1-CAP-A');
rejects(()=>d.cardForSlot('CAP-A',1,2));
rejects(()=>d.cardForSlot('CAP-A',8,1));
console.log('PASS typed rebuilt domain: independent money/penalty/mission/tie/overflow examples and canonical 70-card data. State-machine replacement is not claimed.');
