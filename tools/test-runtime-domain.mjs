// Verify the actual role-consumed engine, not only a standalone successor module.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const engine=readFileSync(new URL('../source/shared/engine.js',import.meta.url),'utf8');
const rules=runInNewContext(engine+'\n({parseAmount,parsePercentBps,profitFromBps,addCents,score,blank})');
// Input cannot invoke an arbitrary object's coercion hook at a domain boundary.
assert.throws(()=>rules.parseAmount({toString(){throw Error('executed-untrusted-coercion')}}),/money/);
assert.throws(()=>rules.score({mission:'COMBAT',totals:{...rules.blank(),MOB:Number.MAX_SAFE_INTEGER,FP:10}}),/capability/,'Unsafe scores must not enter award cross products');
assert.equal(rules.parseAmount('100,01'),10001);
assert.equal(rules.parsePercentBps('12.34'),1234n,'Existing controllers retain BigInt BPS signature');
assert.equal(rules.profitFromBps(199,2500n),50);
assert.equal(rules.score({mission:'COMMAND',totals:{CAP:11,COM:125}}),120);
assert.equal(rules.score({mission:null,totals:rules.blank()}),undefined,'Unassigned setup sentinel remains compatible');
assert.match(engine,/BEGIN TYPED DOMAIN/,'The role engine consumes built typed source');
console.log('Actual engine typed money/score boundaries, independent cent/score cases and setup compatibility PASS');
