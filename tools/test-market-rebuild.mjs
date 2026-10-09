#!/usr/bin/env node
// Compatibility vectors were captured from the retained pre-rebuild generator;
// metadata is checked against the separately maintained rules baseline.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';

const engine=readFileSync(new URL('../source/shared/engine.js',import.meta.url),'utf8');
const retained=runInNewContext(engine+';marketFromSeed');
if(process.argv.includes('--legacy-red')){
 let invoked=0;
 assert.throws(()=>retained({toString(){invoked++;return 'SEA-TDD-SEED-001'}}),/invalid-state/,'Seed must not invoke arbitrary input coercion');
 assert.equal(invoked,0);
 process.exit(0);
}
const compiled=await build({entryPoints:[fileURLToPath(new URL('../source/domain/market.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const {marketFromSeed}=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const fixtures=[
 {seed:'SEA-TDD-SEED-001',sha256:'9343c22810032b95241e002fc4a18a4f1e0799fff5759ad47572bf2d30051434',rows:[
  'CAP-C MOB-D FP-D PRO-E COM-F SA-A ACC-B SE-R SE-P SE-M',
  'CAP-E MOB-B FP-B PRO-C COM-C SA-F ACC-C SE-E SE-O SE-T',
  'CAP-D MOB-F FP-A PRO-B COM-G SA-B ACC-A SE-A SE-D SE-Q',
  'CAP-A MOB-G FP-F PRO-G COM-A SA-E ACC-F SE-N SE-I SE-J',
  'CAP-F MOB-C FP-C PRO-D COM-B SA-C ACC-G SE-S SE-C SE-L',
  'CAP-G MOB-E FP-G PRO-A COM-E SA-D ACC-D SE-H SE-F SE-B',
  'CAP-B MOB-A FP-E PRO-F COM-D SA-G ACC-E SE-K SE-U SE-G',
 ]},
 {seed:'0123456789ABCDEF0123456789ABCDEF',sha256:'f2e09bec87119e54e8794665224a2f0842a05fa569269dc23c5393445c18c062',rows:[
  'CAP-D MOB-C FP-C PRO-G COM-E SA-C ACC-E SE-I SE-A SE-U',
  'CAP-E MOB-A FP-G PRO-F COM-A SA-D ACC-B SE-N SE-T SE-D',
  'CAP-F MOB-F FP-A PRO-C COM-B SA-F ACC-G SE-E SE-J SE-R',
  'CAP-A MOB-E FP-E PRO-D COM-F SA-B ACC-A SE-S SE-Q SE-L',
  'CAP-G MOB-G FP-D PRO-A COM-G SA-G ACC-F SE-K SE-H SE-C',
  'CAP-B MOB-D FP-F PRO-E COM-D SA-A ACC-D SE-P SE-G SE-F',
  'CAP-C MOB-B FP-B PRO-B COM-C SA-E ACC-C SE-B SE-M SE-O',
 ]},
 {seed:'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',sha256:'5788e632f6821ab058340db075bbfb0b5bc5b2af068578a5b0e79dc43d8effab'},
 {seed:'',sha256:'007bfbf525500ca386eb1b9373bc850561f87bcfef5393402926f9743dd9b19d'},
];
const baseline=JSON.parse(readFileSync(new URL('../docs/evidence/rules-baseline.json',import.meta.url),'utf8'));
const canonical=new Map();
for(const [category,rows] of Object.entries(baseline.pools))for(const [id,title,start,effects] of rows)canonical.set(id,{category,title,start:start*100,effects});
// Explicit positional oracle; do not derive this from the module's slot declaration.
const slots=['CAPACITY','MOBILITY','FIREPOWER','PROTECTION','COMMS','SA','ACCESSORIES','SE_PROCESS','SE_PROCESS','SE_PROCESS'];
for(const fixture of fixtures){
 const market=marketFromSeed(fixture.seed);
 assert.equal(createHash('sha256').update(JSON.stringify(market)).digest('hex'),fixture.sha256,fixture.seed+' exact legacy-shaped output');
 if(fixture.rows)assert.deepEqual(market.map(row=>row.map(card=>card.id).join(' ')),fixture.rows);
 assert.equal(market.length,7);
 assert.equal(new Set(market.flat().map(card=>card.id)).size,70);
 for(let round=0;round<7;round++){
  assert.equal(market[round].length,10);
  for(let lot=0;lot<10;lot++){
   const card=market[round][lot], definition=canonical.get(card.id);
   assert.ok(definition);
   assert.deepEqual(Object.keys(card),['id','title','start','e','cat','round','lot','instance']);
   assert.equal(card.cat,slots[lot]);assert.equal(definition.category,slots[lot]);
   assert.deepEqual(card.title,{en:definition.title[0],fr:definition.title[1]});
   assert.equal(card.start,definition.start);assert.deepEqual(card.e,definition.effects);
   assert.equal(card.round,round+1);assert.equal(card.lot,lot+1);
   assert.equal(card.instance,`R${round+1}-L${lot+1}-${card.id}`);
  }
 }
 assert.equal(JSON.stringify(market),JSON.stringify(marketFromSeed(fixture.seed)));
}
// Actual retained production boundary comparison, with UTF-16/case/whitespace
// and maximum supported length, supplements the pinned pre-rebuild fixtures.
for(const seed of [...fixtures.map(f=>f.seed),'BALANCE-A','BALANCE-B','BALANCE-C','PRIVATE-SEED','é💠',' seed ','seed','SEED','x'.repeat(256)]){
 assert.equal(JSON.stringify(marketFromSeed(seed)),JSON.stringify(retained(seed)),seed+' retained-generator compatibility');
}
assert.notEqual(JSON.stringify(marketFromSeed('seed')),JSON.stringify(marketFromSeed('SEED')),'Seed case is not normalized');
let invoked=0;
for(const bad of [null,undefined,false,1,NaN,Infinity,{},[],new String('seed'),Symbol('seed'),{toString(){invoked++;return 'seed'}},'x'.repeat(257)])assert.throws(()=>marketFromSeed(bad),/invalid-state/);
assert.equal(invoked,0,'Arbitrary input hooks never run');
const original=marketFromSeed('SEA-TDD-SEED-001'), fresh=marketFromSeed('SEA-TDD-SEED-001');
assert.notEqual(original,fresh);assert.notEqual(original[0],fresh[0]);assert.notEqual(original[0][0],fresh[0][0]);
assert.notEqual(original[0][0].title,fresh[0][0].title);assert.notEqual(original[0][0].e,fresh[0][0].e);
original[0][0].title.en='changed';original[0][0].e.CAP=999;
assert.equal(fresh[0][0].title.en,'Compact Passenger Bay');assert.equal(fresh[0][0].e.CAP,4);
assert.equal(JSON.stringify(marketFromSeed('SEA-TDD-SEED-001')),JSON.stringify(fresh),'Caller mutation cannot alter catalog or another deal');
console.log('PASS fresh typed seeded market: four pinned whole-output vectors, 70 independent metadata/position checks per vector, exact production compatibility, bounded no-coercion input and isolated fresh deals.');
