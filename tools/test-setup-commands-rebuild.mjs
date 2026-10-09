#!/usr/bin/env node
// Explicit classroom transitions and independently pinned market/zero-team values.
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const root=fileURLToPath(new URL('../',import.meta.url));
const compiled=await build({stdin:{contents:"export * from './source/domain/setup-commands';",resolveDir:root,loader:'ts'},bundle:true,platform:'node',format:'esm',write:false,logLevel:'silent'});
const d=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));
const zeros=()=>({CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0});
const team=id=>({id,mission:null,lockedMission:null,totals:zeros(),cost:0,purchases:[],purchasesByRound:[0,0,0,0,0,0,0],profit:0,submitted:false});
const practice=()=>({revealed:false,open:false,leader:false,closed:false});
const emptyInstructor=()=>({phase:'setup',schema:3,lang:'fr',vehiclesLocked:false,sessionCode:null,marketSeed:null,market:[],teams:[],teamCount:10,revealMode:'ROUND',timingMode:'TIMED',bidSeconds:30,round:0,lot:0,revealed:true,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,practice:practice()});
const emptyStudent=()=>({phase:'setup',schema:3,lang:'fr',vehicleConfirmed:false,lockedMission:null,sessionCode:null,teamCount:0,teamId:null,team:null,round:0,lot:0,currentCard:null,plan:'',planBaseline:null,risks:'',maxWtpCents:85000000,scratch:{},profitMode:'AMOUNT',profitInput:'250000',profitCents:25000000,practiceWon:false});
const options={teamCount:2,bidSeconds:30,revealMode:'ROUND',timingMode:'TIMED',sessionToken:'0123456789ABCDEF',marketSeed:'0123456789ABCDEF0123456789ABCDEF'};
const code='SEA3-T2-0123456789ABCDEF';
const baseline=JSON.parse(readFileSync(new URL('../docs/evidence/rules-baseline.json',import.meta.url),'utf8'));
const canonical=new Map(Object.entries(baseline.pools).flatMap(([category,rows])=>rows.map(([id,title,start,effects])=>[id,{category,title,start:start*100,effects}])));
const frozen=value=>{if(value&&typeof value==='object'){for(const child of Object.values(value))frozen(child);Object.freeze(value)}return value};
const untouched=(input,command)=>{const before=JSON.stringify(input),patch=command();assert.equal(JSON.stringify(input),before);return patch};
const reject=(input,command,pattern=/invalid-state|phase|mission|confirmation|code|money/)=>{
 const before=JSON.stringify(input);assert.throws(command,pattern);assert.equal(JSON.stringify(input),before,'Rejected command leaves its input byte-equivalent');
};
const generated=untouched(frozen(emptyInstructor()),()=>d.instructorGenerateSession(frozen(emptyInstructor()),frozen(options)));
assert.deepEqual(Object.keys(generated).sort(),['sessionCode','teamCount','marketSeed','market','teams','revealMode','timingMode','bidSeconds','vehiclesLocked','round','lot','revealed','open','pausedRemaining','deadline','leader','currentBid','ledger','seq','resultDraft'].sort());
assert.equal(generated.sessionCode,code);assert.equal(generated.marketSeed,options.marketSeed);
assert.equal(createHash('sha256').update(JSON.stringify(generated.market)).digest('hex'),'f2e09bec87119e54e8794665224a2f0842a05fa569269dc23c5393445c18c062','Pinned pre-rebuild market vector');
for(const row of generated.market)for(const card of row){const expected=canonical.get(card.id);assert.ok(expected);assert.equal(card.cat,expected.category);assert.equal(card.start,expected.start);assert.deepEqual(card.e,expected.effects);assert.deepEqual(card.title,{en:expected.title[0],fr:expected.title[1]});}
assert.deepEqual(generated.teams,[team(1),team(2)]);
assert.deepEqual({...generated,market:null,teams:null},{sessionCode:code,teamCount:2,marketSeed:options.marketSeed,market:null,teams:null,revealMode:'ROUND',timingMode:'TIMED',bidSeconds:30,vehiclesLocked:false,round:0,lot:0,revealed:true,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,resultDraft:null});
for(let count=2;count<=10;count++)for(const mode of ['ROUND','JIT','MANUAL'])for(const timing of ['TIMED','UNTIMED']){
 const config={...options,teamCount:count,revealMode:mode,timingMode:timing,bidSeconds:timing==='TIMED'?10:120};
 const output=d.instructorGenerateSession(emptyInstructor(),config);
 assert.equal(output.sessionCode,`SEA3-T${count}-0123456789ABCDEF`);assert.deepEqual(output.teams,Array.from({length:count},(_,index)=>team(index+1)));
 assert.equal(output.revealed,mode!=='MANUAL');assert.equal(output.timingMode,timing);assert.equal(output.bidSeconds,config.bidSeconds);
 assert.equal(createHash('sha256').update(JSON.stringify(output.market)).digest('hex'),'f2e09bec87119e54e8794665224a2f0842a05fa569269dc23c5393445c18c062','Session/team/reveal choices never influence private order');
}
for(const changes of [{teamCount:1},{teamCount:11},{teamCount:'2'},{teamCount:2.5},{bidSeconds:9},{bidSeconds:121},{bidSeconds:'30'},{revealMode:'BAD'},{timingMode:'bad'},{sessionToken:'0123456789abcdef'},{sessionToken:'0'.repeat(15)},{marketSeed:'seed'},{marketSeed:'f'.repeat(32)}]){
 const state=emptyInstructor();reject(state,()=>d.instructorGenerateSession(state,{...options,...changes}));
}
for(const changes of [{phase:'planning'},{phase:'closed'},{schema:2}]){const state={...emptyInstructor(),...changes};reject(state,()=>d.instructorGenerateSession(state,options));}
// A fresh deal/team graph belongs to this command result, never to another session or catalog.
const next=d.instructorGenerateSession(emptyInstructor(),options);
generated.teams[0].totals.CAP=999;generated.market[0][0].title.en='changed';
assert.equal(next.teams[0].totals.CAP,0);assert.equal(next.market[0][0].title.en,canonical.get('CAP-D').title[0]);
let instructor={...emptyInstructor(),...next};
assert.deepEqual(d.instructorPracticeCommand(emptyInstructor(),'reset'),{practice:practice()},'Legacy reset helper is valid in empty setup');
for(let flags=0;flags<16;flags++){
 const stale={...emptyInstructor(),...next,practice:{revealed:!!(flags&1),open:!!(flags&2),leader:!!(flags&4),closed:!!(flags&8)}};
 assert.deepEqual(untouched(frozen(stale),()=>d.instructorPracticeCommand(stale,'start')),{practice:practice(),phase:'practice',privateEntry:false},'Tutorial entry clears every stale boolean practice combination');
 assert.deepEqual(untouched(frozen(stale),()=>d.instructorPracticeCommand(stale,'reset')),{practice:practice()});
}
for(const p of [{revealed:false,open:false,leader:false,closed:'true'},{revealed:false,open:false,leader:false},{...practice(),unexpected:false}]){
 const stale={...emptyInstructor(),...next,practice:p};for(const action of ['start','reset'])reject(stale,()=>d.instructorPracticeCommand(stale,action));
}
let resetHooks=0;const hookedPractice=practice();Object.defineProperty(hookedPractice,'closed',{enumerable:true,get(){resetHooks++;return true}});
for(const action of ['start','reset'])assert.throws(()=>d.instructorPracticeCommand({...emptyInstructor(),...next,practice:hookedPractice},action),/invalid-state/);
assert.equal(resetHooks,0,'Practice cleanup never executes a getter');
const staleWrongRole={...emptyInstructor(),...next,practice:{...practice(),closed:true},plan:'other role'};
for(const action of ['start','reset'])reject(staleWrongRole,()=>d.instructorPracticeCommand(staleWrongRole,action));
const staleBadInventory={...emptyInstructor(),...next,practice:{...practice(),closed:true},teams:[{...team(1),cost:1},team(2)]};
for(const action of ['start','reset'])reject(staleBadInventory,()=>d.instructorPracticeCommand(staleBadInventory,action));
const staleLive={...emptyInstructor(),...next,phase:'practice',practice:{...practice(),closed:true}};
reject(staleLive,()=>d.instructorPracticeCommand(staleLive,'open'),'Other practice commands must retain logical guards');
for(const id of [0,3,1.5,'1'])reject(instructor,()=>d.instructorSelectMission(instructor,id,'COMBAT'));
reject(instructor,()=>d.instructorSelectMission(instructor,1,'UNKNOWN'));
instructor={...instructor,...untouched(frozen(instructor),()=>d.instructorSelectMission(instructor,1,'COMBAT'))};
instructor={...instructor,...d.instructorSelectMission(instructor,2,'COMBAT')};
assert.deepEqual(instructor.teams,[{...team(1),mission:'COMBAT'},{...team(2),mission:'COMBAT'}],'Duplicate classroom mission choices remain allowed');
instructor={...instructor,...d.instructorPracticeCommand(instructor,'start')};
assert.equal(instructor.phase,'practice');assert.equal(instructor.privateEntry,false);
const protectedInstructor=()=>JSON.stringify({teams:instructor.teams,market:instructor.market,marketSeed:instructor.marketSeed,ledger:instructor.ledger,seq:instructor.seq,round:instructor.round,lot:instructor.lot});
const practiceProtected=protectedInstructor();
for(const action of ['open','accept','close','planning'])reject(instructor,()=>d.instructorPracticeCommand(instructor,action));
reject(instructor,()=>d.instructorSelectMission(instructor,1,'RECCE'));
const stages=[['reveal',{revealed:true,open:false,leader:false,closed:false}],['open',{revealed:true,open:true,leader:false,closed:false}],['accept',{revealed:true,open:true,leader:true,closed:false}],['close',{revealed:true,open:false,leader:true,closed:true}]];
for(const [action,expected] of stages){
 const patch=untouched(frozen(instructor),()=>d.instructorPracticeCommand(instructor,action));assert.deepEqual(patch,{practice:expected});
 instructor={...instructor,...patch};assert.equal(protectedInstructor(),practiceProtected);
 reject(instructor,()=>d.instructorPracticeCommand(instructor,action));
}
assert.deepEqual(d.instructorPracticeCommand(instructor,'reset'),{practice:practice()});
instructor={...instructor,...d.instructorPracticeCommand(instructor,'planning')};
assert.equal(instructor.phase,'planning');assert.deepEqual(instructor.practice,practice());assert.equal(protectedInstructor(),practiceProtected);
const unlocked={...instructor,teams:[instructor.teams[0],{...team(2)}]};reject(unlocked,()=>d.instructorStartAuction(unlocked));
// Frozen/nonwritable inputs are valid immutable command inputs: preparation never performs partial locks.
const start=untouched(frozen(instructor),()=>d.instructorStartAuction(instructor));
assert.deepEqual(start,{teams:[{...team(1),mission:'COMBAT',lockedMission:'COMBAT'},{...team(2),mission:'COMBAT',lockedMission:'COMBAT'}],vehiclesLocked:true,round:0,lot:0,revealed:true,resultDraft:null,phase:'auction',privateEntry:false});
for(const mode of ['ROUND','JIT','MANUAL'])assert.equal(d.instructorStartAuction({...instructor,revealMode:mode}).revealed,mode!=='MANUAL');
const auction={...instructor,...start};reject(auction,()=>d.instructorSelectMission(auction,1,'RECCE'));reject(auction,()=>d.instructorStartAuction(auction));reject(auction,()=>d.instructorPracticeCommand(auction,'reset'));
const unsafeInstructor={...instructor,teams:[{...instructor.teams[0],cost:1},instructor.teams[1]]};reject(unsafeInstructor,()=>d.instructorStartAuction(unsafeInstructor));

const join=untouched(frozen(emptyStudent()),()=>d.studentJoinSession(frozen(emptyStudent()),' sea3-t2-0123456789abcdef ',2,'RECCE'));
assert.deepEqual(join,{sessionCode:code,teamCount:2,teamId:2,team:{...team(2),mission:'RECCE'},lockedMission:null,vehicleConfirmed:false,round:0,lot:0,currentCard:null,phase:'practice'});
assert.ok(!['market','marketSeed','teams','ledger'].some(key=>Object.hasOwn(join,key)),'Student join has no hidden class data');
// Command patches merge into the current role object: retained fields must already be valid and role-private.
for(const changes of [{marketSeed:'PRIVATE'},{market:[]},{ledger:[]},{teams:[]},{privateEntry:false},{plan:'x'.repeat(1201)},{risks:42},{profitInput:'x'.repeat(21)},{profitCents:-1},{maxWtpCents:-1},{profitMode:'BAD'},{scratch:{'1-1':{wtp:'1',note:'x'.repeat(601)}}},{scratch:{'8-1':{wtp:'1',note:'bad slot'}}},{scratch:{'1-1':{wtp:'1',note:'note',secret:true}}},{scratch:[]},{planBaseline:'stale'},{teamCount:2},{teamId:1},{sessionCode:code},{vehicleConfirmed:true},{practiceWon:true},{lockedMission:'COMBAT'},{round:1},{currentCard:false},{lang:'de'}]){
 const state={...emptyStudent(),...changes};reject(state,()=>d.studentJoinSession(state,code,1,'COMBAT'));
}
for(const changes of [{plan:undefined},{profitInput:undefined},{scratch:undefined}]){const state={...emptyStudent(),...changes};reject(state,()=>d.studentJoinSession(state,code,1,'COMBAT'));}
const retainedPrivate={...emptyStudent(),plan:'Plan privé',risks:'Risques locaux',scratch:{'1-1':{wtp:'400000',note:'Avant la connexion'}},profitInput:'125000',profitCents:12500000};
const retainedBefore=JSON.stringify(retainedPrivate);d.studentJoinSession(frozen(retainedPrivate),code,1,'COMBAT');assert.equal(JSON.stringify(retainedPrivate),retainedBefore,'Valid retained bilingual private work survives joining unchanged');
for(const changes of [{plan:'student-only'},{marketSeed:'PRIVATE'},{market:[[]]},{teams:[team(1)]},{ledger:[{}]},{teamCount:0},{open:true},{vehiclesLocked:true},{deadline:0},{lang:'de'},{resultDraft:{team:'1',price:'x'.repeat(21),reason:''}}]){
 const state={...emptyInstructor(),...changes};reject(state,()=>d.instructorGenerateSession(state,options));reject(state,()=>d.instructorPracticeCommand(state,'reset'));
}
reject(emptyStudent(),()=>d.instructorPracticeCommand(emptyStudent(),'reset'));
reject(emptyStudent(),()=>d.instructorGenerateSession(emptyStudent(),options));
reject(emptyInstructor(),()=>d.studentJoinSession(emptyInstructor(),code,1,'COMBAT'));
for(const changes of [{plan:'student-only'},{teams:[{...team(1),mission:'COMBAT'},{...team(2),cost:1}]}]){
 const state={...emptyInstructor(),...next,...changes};reject(state,()=>d.instructorGenerateSession(state,options));reject(state,()=>d.instructorPracticeCommand(state,'reset'));
}
for(const [raw,id,mission] of [['bad',2,'RECCE'],[code,0,'RECCE'],[code,3,'RECCE'],[code,'2','RECCE'],[code,2,'BAD']])reject(emptyStudent(),()=>d.studentJoinSession(emptyStudent(),raw,id,mission));
let student={...emptyStudent(),...join,plan:'Plan privé / private plan',risks:'Vérifier mobilité',scratch:{'1-1':{wtp:'450000',note:'Private auction note'}}};
reject(student,()=>d.studentJoinSession(student,code,2,'RECCE'));
const protectedStudent=()=>JSON.stringify({team:student.team,plan:student.plan,risks:student.risks,scratch:student.scratch,profitInput:student.profitInput,profitCents:student.profitCents,maxWtpCents:student.maxWtpCents,round:student.round,lot:student.lot});
const privateBefore=protectedStudent();
for(const action of ['reset','planning'])reject(student,()=>d.studentPracticeCommand(student,action));
assert.deepEqual(d.studentPracticeCommand(student,'record'),{practiceWon:true});student={...student,...d.studentPracticeCommand(student,'record')};
assert.equal(protectedStudent(),privateBefore);reject(student,()=>d.studentPracticeCommand(student,'record'));
assert.deepEqual(d.studentPracticeCommand(student,'reset'),{practiceWon:false});
student={...student,...d.studentPracticeCommand(student,'planning')};assert.equal(student.phase,'planning');assert.equal(student.practiceWon,false);assert.equal(protectedStudent(),privateBefore);
reject(student,()=>d.studentStartAuction(student),/confirmation/);
student={...student,...d.studentConfirmVehicle(student,true)};assert.equal(student.vehicleConfirmed,true);
const sameMission=d.studentSelectMission(student,'RECCE');assert.deepEqual(Object.keys(sameMission),['team']);assert.deepEqual(sameMission.team,student.team);
student={...student,...sameMission};assert.equal(student.vehicleConfirmed,true);
const change=untouched(frozen(student),()=>d.studentSelectMission(student,'TROOP'));
assert.deepEqual(change,{team:{...team(2),mission:'TROOP'},vehicleConfirmed:false,vehicleChangeNotice:true});
student={...student,...change};assert.equal(student.plan,'Plan privé / private plan');assert.equal(student.risks,'Vérifier mobilité');assert.deepEqual(student.scratch,{'1-1':{wtp:'450000',note:'Private auction note'}});
for(const field of ['plan','risks']){
 assert.deepEqual(d.studentSetPlanningText(student,field,'é'.repeat(1200)),{[field]:'é'.repeat(1200)});
 reject(student,()=>d.studentSetPlanningText(student,field,'x'.repeat(1201)));reject(student,()=>d.studentSetPlanningText(student,field,{}));
}
reject(student,()=>d.studentSetPlanningText(student,'scratch','bad'));
assert.deepEqual(d.studentSetMaxWtp(student,0),{maxWtpCents:0});assert.deepEqual(d.studentSetMaxWtp(student,Number.MAX_SAFE_INTEGER),{maxWtpCents:Number.MAX_SAFE_INTEGER},'WTP remains advisory with no invented total budget');
for(const value of [-1,NaN,Infinity,1.5,'85000000'])reject(student,()=>d.studentSetMaxWtp(student,value),/money/);
reject(student,()=>d.studentConfirmVehicle(student,'true'));
student={...student,...d.studentSetPlanningText(student,'plan','Bilingual plan / plan bilingue'),...d.studentConfirmVehicle(student,true)};
const studentStart=untouched(frozen(student),()=>d.studentStartAuction(student));
assert.deepEqual(studentStart,{team:{...team(2),mission:'TROOP',lockedMission:'TROOP'},lockedMission:'TROOP',planBaseline:'Bilingual plan / plan bilingue',phase:'auction'});
const studentAuction={...student,...studentStart};
for(const command of [()=>d.studentSelectMission(studentAuction,'MINE'),()=>d.studentConfirmVehicle(studentAuction,false),()=>d.studentSetPlanningText(studentAuction,'plan','changed'),()=>d.studentSetMaxWtp(studentAuction,0),()=>d.studentStartAuction(studentAuction),()=>d.studentPracticeCommand(studentAuction,'reset')])reject(studentAuction,command);
const unsafeStudent={...student,team:{...student.team,totals:{...zeros(),CAP:1}}};reject(unsafeStudent,()=>d.studentStartAuction(unsafeStudent));
const forgedLock={...student,team:{...student.team,lockedMission:'TROOP'}};reject(forgedLock,()=>d.studentStartAuction(forgedLock));

// Supplied serialization/accessor/array hooks and inherited serializers are never invoked.
let hooks=0;
const hooked={...student};Object.defineProperty(hooked,'plan',{enumerable:true,get(){hooks++;return 'bad'}});
assert.throws(()=>d.studentStartAuction(hooked),/invalid-state/);assert.equal(hooks,0);
const hookedConfig={...options};Object.defineProperty(hookedConfig,'sessionToken',{enumerable:true,get(){hooks++;return '0123456789ABCDEF'}});
assert.throws(()=>d.instructorGenerateSession(emptyInstructor(),hookedConfig),/invalid-state/);assert.equal(hooks,0);
const serializer={...instructor,toJSON(){hooks++;return instructor}};assert.throws(()=>d.instructorStartAuction(serializer),/invalid-state/);assert.equal(hooks,0);
const inherited=Object.assign(Object.create({toJSON(){hooks++;return instructor}}),instructor);assert.throws(()=>d.instructorStartAuction(inherited),/invalid-state/);assert.equal(hooks,0);
const arrayHook={...instructor,teams:[...instructor.teams]};arrayHook.teams.map=()=>{hooks++;return[]};assert.throws(()=>d.instructorStartAuction(arrayHook),/invalid-state/);assert.equal(hooks,0);
const sparse={...instructor,teams:new Array(2)};reject(sparse,()=>d.instructorStartAuction(sparse));
const coercion={toString(){hooks++;return code}};assert.throws(()=>d.studentJoinSession(emptyStudent(),coercion,1,'COMBAT'),/code/);assert.equal(hooks,0);
const cycle={...student};cycle.cycle=cycle;assert.throws(()=>d.studentStartAuction(cycle),/invalid-state/);
for(const state of [{...instructor,schema:2},{...instructor,teamCount:3},{...instructor,sessionCode:'SEA3-T3-0123456789ABCDEF'},{...instructor,seq:1}])reject(state,()=>d.instructorStartAuction(state));
console.log('PASS fresh typed setup/practice/planning commands: externally supplied entropy, pinned market,2..10teams,6 reveal/timing combinations, isolated practice, private bilingual plans, confirmation reset, atomic mission lock preparation, schema3/passive input/no mutation. Actual adapter commit/effects remain separately qualified.');
