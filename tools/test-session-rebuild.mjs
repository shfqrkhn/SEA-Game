#!/usr/bin/env node
// Explicit classroom examples, independent of implementation helpers and DOM.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';

if(process.argv.includes('--legacy-red')){
 const source=readFileSync(new URL('../source/shared/engine.js',import.meta.url),'utf8');
 const parse=runInNewContext(source+';parseSessionCode');
 let coerced=0;
 assert.throws(()=>parse({toString(){coerced++;return 'SEA3-T2-0123456789ABCDEF'}}),/code/,'Untrusted objects cannot act as session strings');
 assert.equal(coerced,0,'A session parser must not invoke arbitrary coercion hooks');
 process.exit(0);
}
const compiled=await build({entryPoints:[fileURLToPath(new URL('../source/domain/session.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const s=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
let coerced=0;
assert.throws(()=>s.parseSessionCode({toString(){coerced++;return 'SEA3-T2-0123456789ABCDEF'}}),/code/);
assert.equal(coerced,0);
assert.deepEqual(s.PHASES,['setup','practice','planning','auction','build','submit','debrief','closed']);
assert.ok(Object.isFrozen(s.PHASES));
for(let count=2;count<=10;count++){
 const code=`SEA3-T${count}-0123456789ABCDEF`;
 assert.deepEqual(s.parseSessionCode(' '+code.toLowerCase()+' '),{code,teamCount:count,token:'0123456789ABCDEF'});
}
const maxCode='SEA3-T10-0123456789ABCDEF';
assert.equal(s.parseSessionCode(' '.repeat(7)+maxCode).code,maxCode,'Exactly32 original characters are accepted');
assert.throws(()=>s.parseSessionCode(' '.repeat(8)+maxCode),/code/,'Input bound precedes trimming');
assert.ok(Object.isFrozen(s.parseSessionCode(maxCode)));
for(const bad of [null,undefined,0,{},[],new String('SEA3-T2-0123456789ABCDEF'),'','SEA3-T1-0123456789ABCDEF','SEA3-T11-0123456789ABCDEF','SEA3-T02-0123456789ABCDEF','SEA3-T2-0123456789ABCDE','SEA3-T2-0123456789ABCDEFG','SEA3-T2-0123456789ABCDEF\nextra',' '.repeat(100000)+'SEA3-T2-0123456789ABCDEF'])assert.throws(()=>s.parseSessionCode(bad),/code/);
const base={schema:3,phase:'setup',lang:'en',sessionCode:'SEA3-T4-0123456789ABCDEF',teamCount:4,round:0,lot:0};
for(const phase of s.PHASES)for(const lang of ['en','fr'])assert.equal(s.validateBase({...base,phase,lang,round:6,lot:9}).teamCount,4);
for(const [key,values] of Object.entries({schema:[2,4,'3'],phase:['unknown',null],lang:['EN','de',null],teamCount:[3,'4',4.5],round:[-1,7,0.5,'0',NaN],lot:[-1,10,0.5,'0',Infinity]}))for(const value of values)assert.throws(()=>s.validateBase({...base,[key]:value}),/invalid-state/,`${key}: ${value}`);
for(const bad of [null,[],0,'state'])assert.throws(()=>s.validateBase(bad),/invalid-state/);
assert.throws(()=>s.validateBase({...base,sessionCode:'bad'}),/code/);
// Explicit allowed pairs encode the approved linear lifecycle; do not derive the oracle from PHASES indices.
const allowed=new Set(['setup:setup','setup:practice','practice:practice','practice:planning','planning:planning','planning:auction','auction:auction','auction:build','build:build','build:submit','submit:submit','submit:debrief','debrief:debrief','debrief:closed','closed:closed']);
for(const from of s.PHASES)for(const target of s.PHASES)assert.equal(s.phaseStepAllowed(from,target),allowed.has(`${from}:${target}`),`${from} -> ${target}`);
assert.equal(s.phaseStepAllowed('unknown','setup'),false);
assert.equal(s.phaseStepAllowed('setup',{}),false);
const instructor={vehiclesLocked:true,round:6,lot:9,committed:true};
for(const from of s.PHASES)for(const target of s.PHASES){
 assert.equal(s.instructorPhaseAllowed(from,target,Object.freeze({...instructor})),allowed.has(`${from}:${target}`),`Instructor ${from} -> ${target}`);
 assert.equal(s.studentPhaseAllowed(from,target,Object.freeze({lockedMission:'RECOVERY'})),allowed.has(`${from}:${target}`),`Student ${from} -> ${target}`);
}
assert.equal(s.instructorPhaseAllowed('planning','auction',instructor),true);
assert.equal(s.instructorPhaseAllowed('planning','auction',{...instructor,vehiclesLocked:false}),false);
assert.equal(s.instructorPhaseAllowed('auction','auction',{...instructor,vehiclesLocked:false}),false,'Same-phase auction keeps its lock guard');
assert.equal(s.instructorPhaseAllowed('auction','build',instructor),true);
for(const changed of [{round:5},{lot:8},{committed:false},{committed:'yes'},{round:'6'},{lot:'9'}])assert.equal(s.instructorPhaseAllowed('auction','build',{...instructor,...changed}),false);
assert.equal(s.instructorPhaseAllowed('build','build',{...instructor,committed:false}),false,'Same-phase build keeps its final-commit guard');
assert.equal(s.instructorPhaseAllowed('practice','build',instructor),false);
assert.equal(s.studentPhaseAllowed('planning','auction',{lockedMission:'RECOVERY'}),true);
for(const lockedMission of [null,'',false,'made-up',{}])assert.equal(s.studentPhaseAllowed('planning','auction',{lockedMission}),false);
assert.equal(s.studentPhaseAllowed('auction','build',{lockedMission:'RECOVERY'}),true,'Companion build follows the instructor handoff, not local ledger completion');
const start={phase:'planning',lockedMission:null,teamMission:'RECOVERY',vehicleConfirmed:true};
assert.equal(s.studentAuctionStartAllowed(start),true);
for(const changed of [{phase:'setup'},{phase:'auction'},{lockedMission:'RECOVERY'},{teamMission:null},{teamMission:'bogus'},{vehicleConfirmed:false},{vehicleConfirmed:1}])assert.equal(s.studentAuctionStartAllowed({...start,...changed}),false);
for(const [mode,lot,revealed,expected] of [['ROUND',0,false,true],['ROUND',9,false,true],['JIT',0,false,true],['JIT',3,false,true],['JIT',4,false,true],['JIT',5,true,false],['MANUAL',3,false,true],['MANUAL',4,false,false],['MANUAL',4,true,true],['MANUAL',5,true,false]])assert.equal(s.auctionVisible(mode,4,revealed,lot),expected,`${mode} lot${lot}`);
for(const args of [['bogus',4,true,4],['ROUND',-1,true,0],['ROUND',4,true,10],['MANUAL',4,'yes',4],['ROUND','4',true,4]])assert.equal(s.auctionVisible(...args),false,'Invalid reveal input fails closed');
for(const [used,expected] of [[0,true],[1,true],[2,false],[3,false],[-1,false],[1.5,false],[NaN,false],['1',false],[null,false]])assert.equal(s.canWin(used),expected);
console.log('PASS rebuilt typed session/phase/reveal decisions: strict no-coercion codes, schema-3 base, role-specific handoffs and two-win limits; full role/state replacement is not claimed.');
