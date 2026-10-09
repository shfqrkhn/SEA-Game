// Independent classroom positions, baseline card data, and money examples; no rendering/storage effects.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {runInNewContext} from 'node:vm';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';

const baseline=JSON.parse(readFileSync(new URL('../docs/evidence/rules-baseline.json',import.meta.url),'utf8'));
const zeros=()=>({CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0});
const card=(id,round=1,lot=1)=>{
 const found=Object.entries(baseline.pools).flatMap(([cat,rows])=>rows.map(row=>[cat,row])).find(([,row])=>row[0]===id);
 assert.ok(found);const [cat,[,title,start,e]]=found;
 return {id,title:{en:title[0],fr:title[1]},start:start*100,e:{...e},cat,round,lot,instance:`R${round}-L${lot}-${id}`};
};
const fresh=(phase='auction')=>({schema:3,phase,lang:'fr',sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,teamId:1,
 vehicleConfirmed:true,lockedMission:'COMBAT',team:{id:1,mission:'COMBAT',lockedMission:'COMBAT',totals:zeros(),cost:0,
 purchases:[],purchasesByRound:[0,0,0,0,0,0,0],profit:0,submitted:false},round:0,lot:0,currentCard:null,
 plan:'Équipe: conserver le plan',planBaseline:'Plan original',risks:'Risque privé',maxWtpCents:85000000,
 scratch:{'1-1':{wtp:'350000',note:'Décision privée'}},profitMode:'AMOUNT',profitInput:'250000',profitCents:25000000,
 practiceWon:false,vehicleChangeNotice:false});
const clone=value=>JSON.parse(JSON.stringify(value));
const freeze=value=>{if(value&&typeof value==='object'){for(const child of Object.values(value))freeze(child);Object.freeze(value)}return value};

if(process.argv.includes('--legacy-red')){
 const text=readFileSync(new URL('../source/student.js',import.meta.url),'utf8');
 const start=text.indexOf('function advancePosition(){'),end=text.indexOf('\nfunction finishStudentAuction',start);
 assert.ok(start>=0&&end>start,'Observe the actual retained controller function');
 const state=fresh();state.team.cost=1;const before=clone(state);let effects=0;
 const fn=runInNewContext(text.slice(start,end)+';advancePosition',{state,$:()=>({value:'',dataset:{cardId:''}}),renderAuction(){effects++},phase(){effects++},renderAll(){effects++}});
 try{fn()}catch{}
 assert.deepEqual(state,before,'Incoherent live team totals/cost must reject local advance before position or UI changes');
 assert.equal(effects,0);
 process.exit(0);
}

const built=await build({entryPoints:[fileURLToPath(new URL('../source/domain/student-controls.ts',import.meta.url))],bundle:true,platform:'node',format:'iife',globalName:'StudentControls',write:false,logLevel:'silent'});
let effects=0;
const sandbox={};
for(const name of ['window','document','sessionStorage','localStorage','crypto','fetch','setInterval','setTimeout'])Object.defineProperty(sandbox,name,{get(){effects++;throw Error('Unexpected effect: '+name)}});
const d=runInNewContext(built.outputFiles[0].text+';StudentControls',sandbox);
const check=(state,fn,expected)=>{
 const before=clone(state),result=fn(freeze(state));
 assert.deepEqual(clone(result),expected);assert.deepEqual(state,before);assert.ok(Object.isFrozen(result));return result;
};
const reject=(state,fn,pattern=/invalid-state|phase|card|money|percent|changed|zero-cost/)=>{
 const before=clone(state);assert.throws(fn,pattern);assert.deepEqual(state,before);
};

for(let index=0;index<70;index++){
 const state={...fresh(),round:Math.floor(index/10),lot:index%10};
 const last=index===69,next=index+1;
 check(state,s=>d.studentAdvanceLocal(s),{phase:last?'build':'auction',round:last?6:Math.floor(next/10),lot:last?9:next%10,currentCard:null});
 const cat=baseline.slots[index%10],id=baseline.pools[cat][cat==='SE_PROCESS'?Math.floor(index/10)*3+index%10-7:Math.floor(index/10)][0];
 const loaded=check({...state,currentCard:null},s=>d.studentLoadAnnouncedCard(s,' '+id.toLowerCase()+' '),{currentCard:card(id,state.round+1,state.lot+1)});
 assert.ok(Object.isFrozen(loaded.currentCard)&&Object.isFrozen(loaded.currentCard.e)&&Object.isFrozen(loaded.currentCard.title));
}
const positioned={...fresh(),round:5,lot:8,currentCard:card('SE-A',6,9)};
check(positioned,s=>d.studentSetManualPosition(s,1,1),{phase:'auction',round:0,lot:0,currentCard:null});
check(fresh(),s=>d.studentSetManualPosition(s,7,10),{phase:'auction',round:6,lot:9,currentCard:null});
for(const [r,l] of [[0,1],[8,1],[1,0],[1,11],[1.5,1],['1',1],[NaN,1],[1,null]])reject(fresh(),()=>d.studentSetManualPosition(fresh(),r,l));
for(const id of ['MOB-A','CAP-X','',false,{toString(){effects++;return 'CAP-A'}},'CAP-A'.repeat(5)])reject(fresh(),()=>d.studentLoadAnnouncedCard(fresh(),id));

const finishState=fresh(),intent=d.studentPrepareAuctionFinish(freeze(finishState));
assert.ok(Object.isFrozen(intent));
check(finishState,s=>d.studentFinishAuction(s,intent),{phase:'build',round:0,lot:0,currentCard:null});
for(const change of [{lot:1},{plan:'changed'},{risks:'changed'},{profitCents:1},{scratch:{}},{sessionCode:'SEA3-T2-FEDCBA9876543210'}]){
 const state={...fresh(),...change};reject(state,()=>d.studentFinishAuction(state,intent));
}
reject(fresh(),()=>d.studentFinishAuction(fresh(),{snapshot:intent.snapshot,approved:true}));
reject(fresh('build'),()=>d.studentFinishAuction(fresh('build'),intent));

check(fresh('build'),s=>d.studentOpenSubmit(s),{phase:'submit',currentCard:null});
check(fresh('submit'),s=>d.studentEditProfitInput(s,'12,'),{profitInput:'12,'});
check({...fresh('submit'),profitInput:'123,45'},s=>d.studentCalculateProfit(s),{profitCents:12345});
check({...fresh('submit'),profitInput:'123,45'},s=>d.studentFinishSubmit(s),{phase:'debrief',currentCard:null,profitCents:12345});
check(fresh('debrief'),s=>d.studentClose(s),{phase:'closed',currentCard:null});
const purchased=()=>{
 const state=fresh('submit'),p={...card('CAP-A'),paid:30000000};
 state.team={...state.team,purchases:[p],purchasesByRound:[1,0,0,0,0,0,0],cost:30000000,totals:{...zeros(),CAP:6,MOB:-10}};
 return state;
};
check({...purchased(),profitMode:'PERCENT',profitInput:'12.34'},s=>d.studentCalculateProfit(s),{profitCents:3702000});
check({...purchased(),profitCents:15000000},s=>d.studentChangeProfitMode(s,'PERCENT'),{profitMode:'PERCENT',profitInput:'50.00',profitCents:15000000});
check({...purchased(),profitMode:'PERCENT',profitCents:12345},s=>d.studentChangeProfitMode(s,'AMOUNT'),{profitMode:'AMOUNT',profitInput:'123.45',profitCents:12345});
check({...purchased(),profitCents:100},s=>d.studentChangeProfitMode(s,'PERCENT'),{profitMode:'PERCENT',profitInput:'0.00',profitCents:0});
check({...purchased(),profitCents:4500},s=>d.studentChangeProfitMode(s,'PERCENT'),{profitMode:'PERCENT',profitInput:'0.02',profitCents:6000});
check({...fresh('submit'),profitCents:0},s=>d.studentChangeProfitMode(s,'PERCENT'),{profitMode:'PERCENT',profitInput:'0.00',profitCents:0});
reject(fresh('submit'),()=>d.studentChangeProfitMode(fresh('submit'),'PERCENT'),/zero-cost/);
reject(purchased(),()=>d.studentChangeProfitMode(purchased(),'BAD'));
for(const input of ['', '-1','1e6','1.001','99999999999999999999']){
 const state={...fresh('submit'),profitInput:input};reject(state,()=>d.studentCalculateProfit(state));reject(state,()=>d.studentFinishSubmit(state));
}
for(const input of ['10000.01','-1','Infinity']){
 const state={...purchased(),profitMode:'PERCENT',profitInput:input};reject(state,()=>d.studentCalculateProfit(state));
}
const overflow={...purchased(),profitInput:'90071992547409.91'};reject(overflow,()=>d.studentFinishSubmit(overflow));
const excessive={...purchased(),profitCents:9007199224740991};reject(excessive,()=>d.studentChangeProfitMode(excessive,'PERCENT'));
reject(fresh('submit'),()=>d.studentEditProfitInput(fresh('submit'),'x'.repeat(21)));
const communicated=purchased(),submitted=check(communicated,s=>d.studentFinishSubmit(s),{phase:'debrief',currentCard:null,profitCents:25000000});
assert.equal(communicated.team.submitted,false,'No local command grants official submitted status');
assert.equal(communicated.team.profit,0,'Only the existing private profitCents draft changes');
assert.equal(Object.hasOwn(submitted,'team'),false);

const commands=[s=>d.studentLoadAnnouncedCard(s,'CAP-A'),s=>d.studentSetManualPosition(s,1,1),s=>d.studentAdvanceLocal(s),s=>d.studentPrepareAuctionFinish(s),s=>d.studentFinishAuction(s,intent)];
for(const fn of commands){
 for(const state of [fresh('build'),{...fresh(),marketSeed:'PRIVATE'},{...fresh(),round:7},{...fresh(),lockedMission:null},{...fresh(),teamId:2},{...fresh(),currentCard:{...card('CAP-A'),round:2}}, {...fresh(),team:{...fresh().team,cost:1}}])reject(state,()=>fn(state));
}
for(const [fn,wrong] of [[d.studentOpenSubmit,'auction'],[d.studentEditProfitInput,'build'],[d.studentCalculateProfit,'debrief'],[d.studentChangeProfitMode,'closed'],[d.studentFinishSubmit,'build'],[d.studentClose,'submit']])reject(fresh(wrong),()=>fn(fresh(wrong),'AMOUNT'));
for(const name of ['schema','phase','team']){
 const state=fresh();Object.defineProperty(state,name,{enumerable:true,get(){effects++;return 3}});
 assert.throws(()=>d.studentAdvanceLocal(state),/invalid-state/);
}
const hooked=fresh();hooked.team.toJSON=()=>{effects++;return fresh().team};assert.throws(()=>d.studentAdvanceLocal(hooked),/invalid-state/);
const cyclic=fresh();cyclic.scratch.self=cyclic;assert.throws(()=>d.studentAdvanceLocal(cyclic),/invalid-state/);
for(const raw of [null,false,[],()=>{},'auction'])assert.throws(()=>d.studentAdvanceLocal(raw),/invalid-state/);
assert.equal(effects,0,'Pure role controls touch no browser, clock, storage, random source or supplied coercion/accessor hooks');
console.log('Fresh typed student controls PASS:70 independent positions/cards,manual matching,stale private intents,guarded handoffs,exact draft profit/zero-cost/overflow,immutable patches/privacy/inert inputs/no effects');
