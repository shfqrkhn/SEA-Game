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
// Verify checked-in bundle belongs to these exact source inputs, not an old model pack.
const root=new URL('../',import.meta.url),receipt=JSON.parse(fs.readFileSync(new URL('source/vendor/sea-three.bundle.json',root)));
const {createHash}=await import('node:crypto');const hash=p=>createHash('sha256').update(fs.readFileSync(new URL(p,root))).digest('hex');
assert.equal(hash('source/vendor/sea-three.bundle.js'),receipt.sha256);for(const [p,h]of Object.entries(receipt.inputs))assert.equal(hash(p),h,p);
console.log('3D public projection, phase visibility, role privacy, copying and exact bundle provenance PASS');
