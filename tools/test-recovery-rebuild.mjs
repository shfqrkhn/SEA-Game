// Independent transport/storage boundary cases; no DOM or real browser storage.
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const result=await build({entryPoints:[fileURLToPath(new URL('../source/domain/recovery.ts',import.meta.url))],bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const d=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const state={schema:3,sessionCode:'SEA3-T2-0123456789ABCDEF',phase:'planning',lang:'fr'};
const student=d.makeBackup('STUDENT',state,'3.0.0');
assert.deepEqual(JSON.parse(student),{format:'SEA-GAME-BACKUP',version:1,appVersion:'3.0.0',ruleset:'STANDARD',deck:'synthetic-v1',schema:3,sessionCode:state.sessionCode,role:'STUDENT',state});
assert.deepEqual(d.parseBackup(student,'STUDENT',x=>({...x,rebuilt:true})),{...state,rebuilt:true});
const lower={...state,sessionCode:state.sessionCode.toLowerCase()};
const lowerBefore=JSON.stringify(lower),lowerBackup=d.makeBackup('STUDENT',lower,'3.0.0');
assert.equal(JSON.parse(lowerBackup).state.sessionCode,state.sessionCode,'Accepted lowercase session identity normalizes in both envelope and payload');
assert.equal(d.parseBackup(lowerBackup,'STUDENT',x=>x).sessionCode,state.sessionCode);
assert.equal(JSON.stringify(lower),lowerBefore,'Export never changes the supplied state');
const legacyLower={...JSON.parse(student),sessionCode:lower.sessionCode,state:lower};
assert.equal(d.parseBackup(JSON.stringify(legacyLower),'STUDENT',x=>x).sessionCode,state.sessionCode,'Existing consistent lowercase schema3 envelopes remain recoverable');
let hooks=0;
for(const hostile of [
 {...state,toJSON(){hooks++;return {...state,marketSeed:'leak'}}},
 {...state,nested:{get private(){hooks++;return 'secret'}}},
 {...state,nested:Object.create({toJSON(){hooks++;return 'secret'}})},
 Object.defineProperty({...state},'schema',{get(){hooks++;return 3},enumerable:true})
])assert.throws(()=>d.makeBackup('STUDENT',hostile,'4.0.0'),/invalid-state/);
assert.equal(hooks,0,'Neither export validation nor serialization invokes input hooks');
const circular={...state};circular.loop=circular;assert.throws(()=>d.makeBackup('STUDENT',circular,'4.0.0'),/invalid-state/);
assert.throws(()=>d.makeBackup('STUDENT',{...state,note:'\u0001'.repeat(90000)},'4.0.0'),/invalid-state/,'Escaped export cannot exceed its import bound');
const optional={...state,optional:undefined};assert.equal(Object.hasOwn(JSON.parse(d.makeBackup('STUDENT',optional,'4.0.0')).state,'optional'),false,'Optional undefined data follows compatible JSON omission');
for(const key of ['market','marketSeed','teams','ledger','privateEntry','resultDraft','leader','currentBid']){
 assert.throws(()=>d.makeBackup('STUDENT',{...state,[key]:null},'4.0.0'),/invalid-state/);
 const mislabeled={...JSON.parse(student),state:{...state,[key]:null}};
 let called=false;
 assert.throws(()=>d.parseBackup(JSON.stringify(mislabeled),'STUDENT',x=>{called=true;return x}),/invalid-state/);
 assert.equal(called,false,'Role leakage rejected before any reconstruction: '+key);
 assert.throws(()=>d.parseBackup(student,'STUDENT',x=>({...x,[key]:null})),/invalid-state/,'Reconstruction cannot introduce role leakage');
}
for(const changes of [{role:'INSTRUCTOR'},{schema:4},{version:2},{deck:'other'},{sessionCode:'SEA3-T2-FFFFFFFFFFFFFFFF'},{extra:1}])assert.throws(()=>d.parseBackup(JSON.stringify({...JSON.parse(student),...changes}),'STUDENT',x=>x),/invalid-state/);
assert.throws(()=>d.parseBackup('{','STUDENT',x=>x),SyntaxError);
assert.throws(()=>d.parseBackup(student+' ','STUDENT',x=>x,student.length),/invalid-state/);
for(const bound of [NaN,Infinity,0,-1,500001,1.5])assert.throws(()=>d.parseBackup(student,'STUDENT',x=>x,bound),/invalid-state/);
assert.throws(()=>d.parseBackup({toString(){throw Error('coercion')}},'STUDENT',x=>x),/invalid-state/);
assert.throws(()=>d.parseBackup(student,'STUDENT',x=>({...x,schema:4})),/invalid-state/);
assert.throws(()=>d.makeBackup('INSTRUCTOR',{...state,plan:'private student plan'},'4.0.0'),/invalid-state/);
const values=new Map([['__sea_test','preserved']]),writes=[],removed=[];
const port={getItem:key=>values.get(key)??null,setItem(key,value){writes.push([key,value]);values.set(key,value)},removeItem(key){removed.push(key);values.delete(key)}};
const store=d.createRecoveryStore(()=>port);
assert.equal(store.available(),true);
assert.equal(values.get('__sea_test'),'preserved','Probe restores an existing reserved record');
assert.equal(writes.length,2);
for(let i=0;i<1000;i++)assert.equal(store.available(),true);
assert.equal(writes.length,2,'Repeated rendering/availability checks perform no writes');
assert.deepEqual(store.read('SEA_STUDENT_V300'),{ok:true,raw:null});
assert.equal(store.write('SEA_STUDENT_V300',student),true);
assert.equal(writes.length,3);
for(let i=0;i<1000;i++)assert.equal(store.write('SEA_STUDENT_V300',student),true);
assert.equal(writes.length,3,'Unchanged serialized snapshots do not rewrite storage');
assert.equal(store.write('SEA_STUDENT_V300',student+' '),true);assert.equal(writes.length,4);
assert.equal(store.write('wrong-key',student),false);assert.equal(store.write('SEA_STUDENT_V300',' '.repeat(500001)),false);assert.equal(writes.length,4);
assert.equal(removed.length,0);
let accesses=0;
const denied=d.createRecoveryStore(()=>{accesses++;throw Error('denied')});
assert.equal(denied.available(),false);assert.equal(denied.available(),false);assert.equal(accesses,1,'Denied probe is also cached');
assert.equal(denied.write('SEA_STUDENT_V300',student),false);assert.deepEqual(denied.read('SEA_STUDENT_V300'),{ok:false});
console.log('Typed role-bound bounded envelopes, compatible transport, cached probes and changed-only recovery storage PASS');
