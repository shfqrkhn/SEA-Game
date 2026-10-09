#!/usr/bin/env node
// Characterization, not a proof of optimal strategy or educational acceptance.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const root=new URL('../',import.meta.url),read=p=>fs.readFileSync(new URL(p,root),'utf8');
const baseline=JSON.parse(read('docs/evidence/rules-baseline.json'));
const source=read('source/shared/engine.js');
const api=vm.runInNewContext(source+'\n;({POOLS,MISSIONS,marketFromSeed,acquire,score,compliant,awardEligible,createTeams})');
assert.equal(JSON.stringify(api.POOLS),JSON.stringify(baseline.pools),'Canonical effects/prices must retain reviewed baseline');
assert.equal(JSON.stringify(api.MISSIONS),JSON.stringify(baseline.missions),'Mission requirements must retain baseline');
const dims=['CAP','MOB','FP','PRO','COM','SA','REC','MC'],zero=()=>Object.fromEntries(dims.map(k=>[k,0]));
const cards=Object.values(baseline.pools).flat().map(([id,,price,e])=>({id,price,e}));
assert.equal(cards.length,70);assert.equal(new Set(cards.map(c=>c.id)).size,70);
const effects=new Map(cards.map(c=>[c.id,c]));
function independentScore(m,t){
 const pos=(key,threshold)=>Math.max(0,t[key]-threshold);
 switch(m){case 'COMBAT':return 20*(Math.floor(pos('MOB',80)/10)+pos('FP',10));case 'RECCE':return 20*(Math.floor(pos('COM',75)/25)+pos('SA',5));case 'TROOP':return 20*(pos('CAP',10)+pos('PRO',4));case 'COMMAND':return 20*(pos('CAP',5)+Math.floor(pos('COM',125)/25));case 'RECOVERY':return 20*pos('PRO',6)+40*pos('REC',3);case 'MINE':return 20*pos('SA',1)+40*pos('MC',3);default:throw Error(m)}
}
const independentCompliance=(m,t)=>Object.entries(baseline.missions[m].req).every(([k,v])=>t[k]>=v);
// Independently authored explicit boundary and above-threshold examples.
const fixtures=[['COMBAT',{MOB:89,FP:10},0],['COMBAT',{MOB:90,FP:11},40],['RECCE',{COM:99,SA:5},0],['RECCE',{COM:100,SA:6},40],['TROOP',{CAP:11,PRO:5},40],['COMMAND',{CAP:6,COM:150},40],['RECOVERY',{PRO:7,REC:4},60],['MINE',{SA:2,MC:4},60]];
for(const [mission,extra,expected]of fixtures){const totals={...zero(),...baseline.missions[mission].req,...extra};assert.equal(independentScore(mission,totals),expected);assert.equal(api.score({mission,totals}),expected)}
for(const [mission,{req}]of Object.entries(baseline.missions)){
 const t={...zero(),...req};assert(api.compliant({mission,totals:t}));assert.equal(api.score({mission,totals:t}),0);assert(!api.awardEligible({mission,totals:t,submitted:true}),'Compliance alone is insufficient for award');
 for(const k of Object.keys(req)){const low={...t,[k]:t[k]-1};assert(!api.compliant({mission,totals:low}),mission+'/'+k)}
}
// Static price/effect dominance ignores auction timing, availability, competition,
// educational meaning and mission-specific negative/irrelevant effects.
const dominance=[];
for(const [category,rows]of Object.entries(baseline.pools))for(const a of rows)for(const b of rows){
 if(a===b||b[2]>a[2])continue;
 if(dims.every(k=>(b[3][k]||0)>=(a[3][k]||0))&&(b[2]<a[2]||dims.some(k=>(b[3][k]||0)>(a[3][k]||0))))dominance.push({category,dominated:a[0],by:b[0],startingDollarSaving:a[2]-b[2]});
}
assert(dominance.some(x=>x.dominated==='FP-A'&&x.by==='FP-E'));
assert(dominance.some(x=>x.dominated==='COM-F'&&x.by==='COM-A'));
// Deterministic bounded beam: a feasible witness is valid, absence is inconclusive.
// Full-information solo access at start prices is optimistic, never a live policy.
const beamWidth=300,seeds=['BALANCE-A','BALANCE-B','BALANCE-C'],scenarios=[];
function deficit(m,t){return Object.entries(baseline.missions[m].req).reduce((n,[k,v])=>n+Math.max(0,v-t[k])/v,0)}
function heuristic(m,s){return deficit(m,s.totals)*1000000-(independentScore(m,s.totals)>0?10000:0)+s.cost/1000000}
function extend(s,selected){const totals={...s.totals};let cost=s.cost;for(const card of selected){const canonical=effects.get(card.id);cost+=canonical.price;for(const [k,v]of Object.entries(canonical.e))totals[k]+=v}return {totals,cost,selected:[...s.selected,...selected]}}
for(const seed of seeds){const market=api.marketFromSeed(seed);assert.equal(new Set(market.flat().map(c=>c.id)).size,70);
 for(const mission of Object.keys(baseline.missions)){
  let beam=[{totals:zero(),cost:0,selected:[]}];
  for(const row of market){const picks=[[]];for(let i=0;i<10;i++){picks.push([row[i]]);for(let j=i+1;j<10;j++)picks.push([row[i],row[j]])}
   const candidates=[];for(const s of beam)for(const p of picks)candidates.push(extend(s,p));
   candidates.sort((a,b)=>heuristic(mission,a)-heuristic(mission,b)||a.selected.map(c=>c.id).join().localeCompare(b.selected.map(c=>c.id).join()));
   const seen=new Set();beam=[];for(const c of candidates){const key=dims.map(k=>c.totals[k]).join(',')+':'+c.selected.length;if(seen.has(key))continue;seen.add(key);beam.push(c);if(beam.length===beamWidth)break}
  }
  const witnesses=beam.filter(s=>independentCompliance(mission,s.totals)&&independentScore(mission,s.totals)>0).sort((a,b)=>a.cost-b.cost);
  const witness=witnesses[0]||beam[0],actual=api.createTeams('SEA3-T2-0123456789ABCDEF')[0];actual.mission=mission;
  for(const c of witness.selected)api.acquire(actual,c,effects.get(c.id).price*100);
  assert.equal(actual.cost,witness.cost*100);assert.equal(JSON.stringify(actual.totals),JSON.stringify(witness.totals));assert.equal(api.score(actual),independentScore(mission,witness.totals));assert.equal(api.compliant(actual),independentCompliance(mission,witness.totals));assert(actual.purchasesByRound.every(n=>n<=2));assert(actual.purchases.length<=14);
  const oracleCost=witness.selected.reduce((n,c)=>n+effects.get(c.id).price,0);assert.equal(oracleCost,witness.cost);
  const premium=api.createTeams('SEA3-T2-0123456789ABCDEF')[0];premium.mission=mission;
  for(const c of witness.selected)api.acquire(premium,c,effects.get(c.id).price*100+5000000);
  assert.equal(premium.cost,(oracleCost+witness.selected.length*50000)*100,'One legal bid increment each changes cost only');assert.equal(api.score(premium),independentScore(mission,witness.totals));assert.equal(JSON.stringify(premium.totals),JSON.stringify(witness.totals));
  scenarios.push({seed,mission,eligibleWitnessFound:!!witnesses.length,startingDollars:witness.cost,oneExtraBidEachDollars:witness.cost+witness.selected.length*50000,score:independentScore(mission,witness.totals),totals:witness.totals,purchases:witness.selected.map(c=>({id:c.id,round:c.round,lot:c.lot})),roundCounts:Array.from(actual.purchasesByRound)});
 }
}
const hash=createHash('sha256').update(source).digest('hex');
console.log(JSON.stringify({scope:'Independent arithmetic and bounded optimistic balance characterization',engineSha256:hash,fixtureChecks:fixtures.length,beamWidth,seeds,staticDominance:dominance,scenarios,limitations:['Not exhaustive optimization; no infeasibility or minimum-price proof.','All cards assumed available at starting price, no competing teams.','Full future information is analysis only; never expose this to student UI.','Willingness-to-pay is advisory; no enforced spending budget exists.','Dominance is static price/effects only; limited round availability changes decisions.','Human educational/rules acceptance remains required.']},null,2));
