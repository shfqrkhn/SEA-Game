#!/usr/bin/env node
// Delivered command integration only. UI rendering, clocks and browser APIs are
// isolated models; this cannot qualify real browser or classroom acceptance.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import {generateArtifacts} from './build.mjs';
const generated=generateArtifacts();
const read=path=>generated.has(path)?generated.get(path):readFileSync(new URL('../'+path,import.meta.url),'utf8');
const baseline=JSON.parse(read('docs/evidence/rules-baseline.json'));
const cards=new Map(Object.values(baseline.pools).flat().map(row=>[row[0],row]));
const missions=Object.keys(baseline.missions);
const clone=value=>JSON.parse(JSON.stringify(value));
function app(role,language){
 const html=read('SEA_'+role+'_Standalone.html'),scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];assert.equal(scripts.length,1);
 const script=scripts[0][1],marker=role==='Instructor'?'$("#generateBtn").onclick=':'$("#sessionInput").oninput=';
 const start=script.indexOf(marker);assert.ok(start>0,'Delivered control boundary exists');
 const elements=new Map(),storage=new Map(),calls={notices:[],pending:null,approved:null,downloads:[]};
 const element=id=>{if(!elements.has(id))elements.set(id,{value:'',checked:false,dataset:{},isConnected:true,textContent:'',classList:{toggle(){},remove(){},add(){}},setAttribute(){}});return elements.get(id)};
 const context={crypto:{getRandomValues:array=>{array.fill(17);return array}},window:{scrollTo(){}},document:{querySelector:id=>id.includes(' h2')?null:element(id),querySelectorAll:()=>[],getElementById:id=>element('#'+id)},sessionStorage:{getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value),removeItem:key=>storage.delete(key)},clearInterval(){},setInterval:()=>1};
 const overrides=`
 renderAll=()=>saveState();renderAuction=()=>saveState();renderPractice=()=>saveState();renderBuild=()=>saveState();renderSubmit=()=>saveState();
 seaNotify=message=>calls.notices.push(message);
 seaConfirmGate=(key,message,retry)=>{if(calls.approved===key){calls.approved=null;return true}calls.pending={key,retry};return false};
 saveBackupDownload=(raw,suffix)=>calls.downloads.push({raw,suffix});
 `;
 context.calls=calls;
 const bindings=script.slice(start).split('\n').filter(line=>/^\$\(["']#[^"']+["']\)\.onclick=/.test(line)).join('\n');
 const names=role==='Instructor'?['generateSession','setTeamVehicle','startScoredAuction','currentCard','openAuction','nextOffer','acceptTeamBid','commitSale','commitUnsold','voidCurrent','advance','validateInstructorSave']:['joinCompanion','startStudentAuction','loadCurrentCard','recordWin','advancePosition','addMissingPurchase','calculateProfit','validateStudentSave'];
 const api=runInNewContext(script.slice(0,start)+'\n'+overrides+'\n'+bindings+`\n;({${names.join(',')},phase,saveState,restoreState,makeBackup,parseBackup,score,compliant,awardEligible,awardComparator,get state(){return state},setState(next){state=next},setLanguage(next){lang=next;state.lang=next}})`,context);
 api.setLanguage(language);
 return {api,calls,storage,element,click:id=>element(id).onclick(),approve(){const pending=calls.pending;assert.ok(pending);calls.pending=null;calls.approved=pending.key;try{return pending.retry()}finally{calls.approved=null}}};
}
function expectedScore(mission,total){const excess=key=>Math.max(0,total[key]-baseline.missions[mission].req[key]);switch(mission){case 'COMBAT':return 20*Math.floor(excess('MOB')/10)+20*excess('FP');case 'RECCE':return 20*Math.floor(excess('COM')/25)+20*excess('SA');case 'TROOP':return 20*excess('CAP')+20*excess('PRO');case 'COMMAND':return 20*excess('CAP')+20*Math.floor(excess('COM')/25);case 'RECOVERY':return 20*excess('PRO')+40*excess('REC');case 'MINE':return 20*excess('SA')+40*excess('MC');default:throw Error('unknown mission')}}
function roundTrip(application,role){const validator=role==='INSTRUCTOR'?application.api.validateInstructorSave:application.api.validateStudentSave;const file=application.api.makeBackup(role,application.api.state),restored=application.api.parseBackup(file,role,validator);if(role==='STUDENT')for(const key of ['market','marketSeed','ledger','teams'])assert.equal(Object.hasOwn(JSON.parse(file).state,key),false,'Student transport excludes instructor '+key);assert.equal(JSON.stringify(restored.team?.purchases||restored.teams.map(team=>team.purchases)),JSON.stringify(application.api.state.team?.purchases||application.api.state.teams.map(team=>team.purchases)));application.api.setState(restored);assert.equal(application.api.saveState(),true);assert.equal(application.api.restoreState(),true)}
for(const language of ['en','fr'])for(const mode of ['ROUND','JIT','MANUAL']){
 const teacher=app('Instructor',language);for(const [id,value]of Object.entries({'#teamCount':'10','#bidSeconds':'30','#revealMode':mode,'#timingMode':'UNTIMED'}))teacher.element(id).value=value;
 assert.equal(teacher.api.generateSession(),true);roundTrip(teacher,'INSTRUCTOR');const code=teacher.api.state.sessionCode;
 for(let i=0;i<10;i++)assert.equal(teacher.api.setTeamVehicle(i+1,missions[i%6]),true);
 teacher.click('#startTutorialBtn');roundTrip(teacher,'INSTRUCTOR');for(const id of ['#practiceReveal','#practiceOpen','#practiceAccept','#practiceClose','#toPlanning'])teacher.click(id);assert.equal(teacher.api.state.phase,'planning');roundTrip(teacher,'INSTRUCTOR');
 const students=Array.from({length:10},(_,i)=>{const student=app('Student',language);student.element('#sessionInput').value=code;student.element('#teamSelect').value=String(i+1);student.element('#vehicleSelect').value=missions[i%6];assert.equal(student.api.joinCompanion(),true);student.click('#practiceRecord');roundTrip(student,'STUDENT');student.click('#toPlanning');student.api.state.plan='Private '+language+' '+(i+1);student.api.state.risks='Risk '+(i+1);roundTrip(student,'STUDENT');student.api.state.vehicleConfirmed=true;assert.equal(student.api.startStudentAuction(),true);return student});
 assert.equal(teacher.api.startScoredAuction(),true);
 const expected=Array.from({length:10},(_,i)=>({id:i+1,mission:missions[i%6],cost:0,ids:[],totals:Object.fromEntries(['CAP','MOB','FP','PRO','COM','SA','REC','MC'].map(key=>[key,0]))}));
 for(let position=0;position<70;position++){
  const lot=position%10,round=Math.floor(position/10),card=teacher.api.currentCard(),winner=lot===9?null:Math.floor(lot/2)+1;
  assert.equal(card.round,round+1);assert.equal(card.lot,lot+1);assert.equal(card.cat,baseline.slots[lot]);assert.equal(teacher.api.openAuction(),true);
  if(lot===2){const before=JSON.stringify(teacher.api.state);assert.equal(teacher.api.acceptTeamBid(1,teacher.api.nextOffer()),false,'Third win is refused in integrated round');assert.equal(JSON.stringify(teacher.api.state),before)}
  for(const student of students){assert.equal(student.api.state.round,round);assert.equal(student.api.state.lot,lot);student.element('#cardInput').value=card.id;student.api.loadCurrentCard()}
  let paid=cards.get(card.id)[2]*100;
  if(winner){assert.equal(teacher.api.acceptTeamBid(winner,paid),true);assert.equal(teacher.api.commitSale(winner,paid),true);
   if(position===0){teacher.element('#correctionReason').value='Verified transcription';assert.equal(teacher.api.voidCurrent(),false);assert.equal(teacher.approve(),true);assert.equal(teacher.api.openAuction(),true);paid+=5000000;assert.equal(teacher.api.commitSale(winner,paid,'Verified transcription'),false);assert.equal(teacher.approve(),true)}
   const row=cards.get(card.id),oracle=expected[winner-1];oracle.cost+=paid;oracle.ids.push(card.id);for(const [key,value]of Object.entries(row[3]))oracle.totals[key]+=value;
  }else assert.equal(teacher.api.commitUnsold(),true);
  for(let i=0;i<10;i++){const student=students[i];if(i+1===winner&&position!==24){student.element('#wonPrice').value=String(paid/100);assert.equal(student.api.recordWin(),true)}else assert.equal(student.api.advancePosition(),true)}
  assert.equal(teacher.api.advance(),true);
  if(lot===9){roundTrip(teacher,'INSTRUCTOR');for(const student of students)roundTrip(student,'STUDENT')}
 }
 assert.equal(teacher.api.state.phase,'build');assert.equal(teacher.api.state.ledger.length,72);
 for(let i=0;i<10;i++){
  const student=students[i],official=teacher.api.state.teams[i],oracle=expected[i];assert.equal(student.api.state.phase,'build');
  if(i===2){const missing=teacher.api.state.ledger.find(entry=>entry.round===3&&entry.lot===5&&entry.kind==='SALE');assert.equal(student.api.state.team.cost,oracle.cost-missing.price,'Missed manual entry persists until reconciliation');for(const [id,value]of Object.entries({'#addRound':'3','#addLot':'5','#addCard':missing.card,'#addPrice':String(missing.price/100)}))student.element(id).value=value;assert.equal(student.api.addMissingPurchase(),true)}
  assert.equal(official.cost,oracle.cost);assert.equal(student.api.state.team.cost,oracle.cost);assert.deepEqual(clone(official.totals),oracle.totals);assert.deepEqual(clone(student.api.state.team.totals),oracle.totals);assert.deepEqual(clone(official.purchases.map(item=>item.id)),oracle.ids);
  const passing=Object.entries(baseline.missions[oracle.mission].req).every(([key,min])=>oracle.totals[key]>=min),points=expectedScore(oracle.mission,oracle.totals);assert.equal(teacher.api.compliant(official),passing);assert.equal(student.api.compliant(student.api.state.team),passing);assert.equal(teacher.api.score(official),points);assert.equal(student.api.score(student.api.state.team),points);
  roundTrip(student,'STUDENT');student.click('#toSubmit');student.api.state.profitInput='100000.25';assert.equal(student.api.calculateProfit(),true);official.profit=student.api.state.profitCents;official.submitted=true;roundTrip(student,'STUDENT');student.click('#toDebrief');roundTrip(student,'STUDENT');student.click('#toClosed');roundTrip(student,'STUDENT');assert.equal(student.api.state.planBaseline,'Private '+language+' '+(i+1));
 }
 roundTrip(teacher,'INSTRUCTOR');teacher.click('#openSubmissionsBtn');roundTrip(teacher,'INSTRUCTOR');teacher.click('#closeSubmissionsBtn');roundTrip(teacher,'INSTRUCTOR');teacher.click('#closeRoomBtn');roundTrip(teacher,'INSTRUCTOR');assert.equal(teacher.api.state.phase,'closed');assert.equal(teacher.api.state.privateEntry,false);assert.deepEqual(teacher.calls.notices,[]);for(const student of students)assert.deepEqual(student.calls.notices,[]);
 console.log(language+'/'+mode+': delivered commands, 10 companions, 70 outcomes, correction, independent totals/score and phase backups PASS');
}
console.log('Scope: command/persistence VM integration; browser/UI/classroom acceptance NOT_RUN');
