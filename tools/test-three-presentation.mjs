import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const engine=fs.readFileSync(new URL('../source/shared/engine.js',import.meta.url),'utf8');
const presentation=fs.readFileSync(new URL('../source/shared/three-presentation.js',import.meta.url),'utf8');
const ctx=vm.createContext({});vm.runInContext(engine+'\n'+presentation+'\nthis.view=sea3DView;this.market=marketFromSeed("PRIVATE-SEED");',ctx);
const secret='PRIVATE-UNREVEALED-DRAFT';
const s={phase:'auction',revealMode:'JUST_IN_TIME',revealed:false,round:0,lot:0,market:ctx.market,seed:secret,teams:[{id:1,mission:'RECOVERY',purchases:[],plan:secret,profit:secret},{id:2,mission:'COMBAT',purchases:[],risks:secret}],privateSubmission:secret};
// Visibility uses the same rules as the accessible auction, including round reveal.
const modes=vm.runInContext('Object.keys(SEA_AUCTION)',ctx);
assert(modes.includes('visible'));
s.revealMode='MANUAL';
const hidden=ctx.view(s,'instructor',1,'en');assert.equal(hidden.current,null);assert(!JSON.stringify(hidden).includes(secret));assert(!('market' in hidden));
s.revealed=true;const shown=ctx.view(s,'instructor',1,'en');assert.equal(shown.current.id,ctx.market[0][0].id);assert.equal(shown.current.title,ctx.market[0][0].title.en);
for(const mode of ['JIT','ROUND'])assert.equal(ctx.view({...s,revealed:false,revealMode:mode},'instructor',1,'en').current.id,ctx.market[0][0].id);
assert(!JSON.stringify(shown).includes(ctx.market[0][1].id));
s.teams[0].purchases=[{...ctx.market[0][0],paid:secret,reason:secret}];const owned=ctx.view(s,'instructor',1,'fr');assert.equal(owned.owned[0].title,ctx.market[0][0].title.fr);assert(!JSON.stringify(owned).includes(secret));
owned.owned[0].id='changed';assert.notEqual(s.teams[0].purchases[0].id,'changed');
const student={phase:'auction',team:s.teams[0],currentCard:ctx.market[0][2],teams:s.teams,market:s.market,plan:secret};
const sv=ctx.view(student,'student',2,'en');assert.equal(sv.teams.length,1);assert.equal(sv.teamId,1);assert.equal(sv.current.id,ctx.market[0][2].id);
for(const phase of ['setup','planning','build','submit','debrief','closed'])assert.equal(ctx.view({...s,phase},'instructor',1,'en').current,null);
assert.equal(ctx.view({...s,phase:'practice',practice:{revealed:false}},'instructor',1,'en').current,null);
assert.equal(ctx.view({...s,phase:'practice',practice:{revealed:true}},'instructor',1,'en').current.id,'TRAIN-CAP');
assert.equal(ctx.view({...student,phase:'practice'},'student',1,'en').current.id,'TRAIN-CAP');
// Browser-independent failure/recovery contract: a missing GPU must not change game state.
function bridgeHarness(mount){
 const nodes=new Map(),frames=[],classes=new Set(),windowEvents={};
 const element=id=>({id,hidden:false,value:'',textContent:'',children:[],events:{},attrs:{},appendChild(x){this.children.push(x)},replaceChildren(){this.children=[]},addEventListener(k,f){this.events[k]=f},setAttribute(k,v){this.attrs[k]=v},closest(){return this.parent||(this.parent={hidden:false})}});
 const get=id=>{if(!nodes.has(id))nodes.set(id,element(id));return nodes.get(id)};
 const doc={getElementById:get,createElement:()=>element('option'),addEventListener(){},body:{classList:{add:c=>classes.add(c),remove:c=>classes.delete(c)}}};
 const st=structuredClone(student),before=JSON.stringify(st);
 const c=vm.createContext({document:doc,window:{addEventListener(k,f){windowEvents[k]=f}},requestAnimationFrame:f=>frames.push(f),state:st,lang:'en',SEAThree:{mount}});
 vm.runInContext(engine+'\n'+presentation+'\nsea3DStart("student");',c);const flush=()=>{while(frames.length)frames.shift()()};flush();assert.equal(JSON.stringify(st),before);
 return {nodes,classes,flush,windowEvents};
}
const unavailable=bridgeHarness(()=>{throw Error('WebGL unavailable')});assert.equal(unavailable.nodes.get('sea3dViewport').hidden,true);assert.match(unavailable.nodes.get('sea3dStatus').textContent,/scene could not start/);assert(!unavailable.classes.has('sea3d-active'));
let failCallback,updates=0,disposed=false;
const restored=bridgeHarness((host,fail)=>{failCallback=fail;return {update(){updates++},view(){},dispose(){disposed=true}}});
assert(restored.classes.has('sea3d-active'));failCallback();assert(!restored.classes.has('sea3d-active'));
restored.nodes.get('sea3dViewport').events.sea3drestored();restored.flush();assert(restored.classes.has('sea3d-active'));assert.equal(updates,2);
restored.windowEvents.pagehide();assert(disposed);
// Verify checked-in bundle belongs to these exact source inputs, not an old model pack.
const root=new URL('../',import.meta.url),receipt=JSON.parse(fs.readFileSync(new URL('source/vendor/sea-three.bundle.json',root)));
const {createHash}=await import('node:crypto');const hash=p=>createHash('sha256').update(fs.readFileSync(new URL(p,root))).digest('hex');
assert.equal(hash('source/vendor/sea-three.bundle.js'),receipt.sha256);for(const [p,h]of Object.entries(receipt.inputs))assert.equal(hash(p),h,p);
console.log('3D public projection, phase visibility, role privacy, copying, failure/restoration/disposal bridge and exact bundle provenance PASS');
