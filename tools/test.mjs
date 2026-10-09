#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Script,runInNewContext} from 'node:vm';
import {validateLocalization} from './localization.mjs';
import {createHash} from 'node:crypto';
import {embeddedArtworkSource} from './artwork-source.mjs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const presentation=read('source/shared/presentation.js');
new Script(presentation,{filename:'source/shared/presentation.js'});
for(const name of ['instructor','student']){
 const source=read('source/'+name+'.js');
 new Script(source,{filename:name+'.js'});
 assert.doesNotMatch(source,/\b(?:confirm|alert|prompt)\s*\(/,'No blocking browser popups');
 assert.match(presentation,/function seaConfirmGate\(/,'Shared in-page confirmation exists');
 assert.match(presentation,/panel\._returnFocus/,'Confirmation restores focus');
 assert.match(presentation,/panel\.onkeydown/,'Confirmation offers keyboard control');
 assert.doesNotMatch(source,/function sea(?:ConfirmGate|Notify)\(/,'Role consumes shared message UI');
 const template=read(name==='instructor'?'source/instructor.template.html':'source/student.template.html');
 const statusIds=['practiceStatus',...(name==='student'?['eligibility']:[])];
 for(const id of statusIds){const tag=template.match(new RegExp('<[^>]+id="'+id+'"[^>]*>'))?.[0];assert.ok(tag,'Status host exists: '+id);assert.match(tag,/role="status"/,'Action feedback is a programmatic status before updates: '+name+'/'+id);assert.match(tag,/aria-atomic="true"/,'Whole status feedback is announced')}
 const delivered=read(name==='instructor'?'SEA_Instructor_Standalone.html':'SEA_Student_Standalone.html');
 for(const id of statusIds){const tag=delivered.match(new RegExp('<[^>]+id="'+id+'"[^>]*>'))?.[0];assert.match(tag||'',/role="status"/,'Generated status semantics survive packaging');assert.match(tag,/aria-atomic="true"/)}
 const meta=delivered.match(/<meta http-equiv="Content-Security-Policy" content="([^"]+)">/);
 assert.ok(meta,name+' delivered file carries a CSP');
 const scripts=[...delivered.matchAll(/<script>([\s\S]*?)<\/script>/g)];assert.equal(scripts.length,1,name+' has one self-contained script');
 const hash=createHash('sha256').update(scripts[0][1],'utf8').digest('base64'),directives=new Map(meta[1].split(';').map(item=>{const [key,...values]=item.trim().split(/\s+/);return [key,values]}));
 assert.deepEqual(directives.get('script-src'),["'sha256-"+hash+"'"],name+' policy permits only the exact bundled script');
 assert.deepEqual(directives.get('script-src-attr'),["'none'"]);assert.deepEqual(directives.get('default-src'),["'none'"]);assert.deepEqual(directives.get('connect-src'),["'none'"]);assert.deepEqual(directives.get('object-src'),["'none'"]);assert.deepEqual(directives.get('base-uri'),["'none'"]);assert.deepEqual(directives.get('form-action'),["'none'"]);
 assert.deepEqual(directives.get('img-src'),["'none'"]);
 assert.ok(delivered.indexOf(meta[0])<delivered.indexOf('<style>'),'Policy precedes resource content');assert.ok(!delivered.includes('\r'),'Delivered hash input uses LF');
 assert.notEqual(createHash('sha256').update(scripts[0][1]+' ').digest('base64'),hash,'One-byte script change cannot retain the bound digest');
 assert.match(template,/id="practiceArt"/,'Practice art host');
 for(const control of ['exportBackupBtn','importBackupBtn','restorePreviousBtn','backupFile','backupStatus'])assert.match(template,new RegExp('id="'+control+'"'),'Recovery UI includes '+control);
 const i18nText=source.match(/const I18N=(.*?);\n/)?.[1];assert.ok(i18nText,'Localized dictionaries can be parsed');
 const i18n=JSON.parse(i18nText);assert.deepEqual(Object.keys(i18n.en).sort(),Object.keys(i18n.fr).sort(),name+' EN/FR dictionaries retain key parity');
 validateLocalization(i18n,[template,source,presentation]);
 for(const lang of ['en','fr']){
  const lookup=runInNewContext('const I18N='+i18nText+';\n'+extractFunction(source,'t')+'\n;t',{lang});
  assert.notEqual(lookup('errors.changed'),'errors.changed',name+' stale-state feedback is translated in '+lang);
 }
 for(const key of ['backup.export','backup.import','backup.restorePrevious','backup.noPrevious','backup.exported','backup.invalid','backup.tooLarge','backup.confirmInstructor','backup.confirmStudent','backup.imported','backup.storageFailed','backup.rawExported','backup.failed','backup.changed'])assert.equal(typeof i18n.en[key],'string',name+' has English recovery copy for '+key);
 console.log(name+': syntax and basic UI contract PASS');
}
const languageFixture={en:{'action':'Continue {team}'},fr:{'action':'Continuer {team}'}};
assert.doesNotThrow(()=>validateLocalization(languageFixture,['<button data-i18n="action"></button>']));
assert.throws(()=>validateLocalization({en:languageFixture.en,fr:{}},[]),/fr missing\/empty action/,'Missing French cannot silently fall back to English');
assert.throws(()=>validateLocalization({en:languageFixture.en,fr:{action:'Continuer {session}'}},[]),/interpolation fields differ/,'Wrong translated interpolation cannot ship');
assert.throws(()=>validateLocalization({en:{action:'Continue'},fr:{action:' '}},[]),/fr missing\/empty action/,'Blank label cannot ship');
for(const text of ['<label data-i18n="missing"></label>','<input data-i18n-placeholder="missing">','<button data-i18n-aria-label="missing"></button>',"t('missing')"])
 assert.throws(()=>validateLocalization(languageFixture,[text]),/referenced key missing missing/,'A key missing from both locales cannot ship');
const source=read('source/instructor.js');
const engine=read('source/shared/engine.js');
new Script(engine,{filename:'source/shared/engine.js'});
const backupApi=runInNewContext(engine+';({makeBackup,parseBackup,APP})');
const backupBody={schema:3,phase:'planning',lang:'en',sessionCode:'SEA3-T2-0123456789ABCDEF',marker:'fixture'};
const studentBackup=backupApi.makeBackup('STUDENT',backupBody);
assert.deepEqual(JSON.parse(studentBackup),{format:'SEA-GAME-BACKUP',version:1,appVersion:backupApi.APP.version,ruleset:'STANDARD',deck:'synthetic-v1',schema:3,sessionCode:backupBody.sessionCode,role:'STUDENT',state:backupBody},'Backup envelopes bind role, app, ruleset, deck, schema and session identity');
assert.deepEqual(JSON.parse(JSON.stringify(backupApi.parseBackup(studentBackup,'STUDENT',x=>({...x,validated:true})))),{...backupBody,validated:true},'A validated matching-role backup returns the validator reconstruction');
let crossRoleValidated=false;
assert.throws(()=>backupApi.parseBackup(studentBackup,'INSTRUCTOR',x=>{crossRoleValidated=true;return x}),/invalid-state/,'Cross-role backups are rejected before validation');
assert.equal(crossRoleValidated,false,'Cross-role payload state is never passed to the role validator');
assert.throws(()=>backupApi.parseBackup(studentBackup+' ', 'STUDENT',x=>x,studentBackup.length),/invalid-state/,'Oversize backup text is rejected before JSON parsing');
assert.throws(()=>backupApi.parseBackup('{','STUDENT',x=>x),e=>e?.name==='SyntaxError','Corrupt backup JSON is rejected');
const newerFormat=JSON.parse(studentBackup);newerFormat.version=2;
assert.throws(()=>backupApi.parseBackup(JSON.stringify(newerFormat),'STUDENT',x=>x),/invalid-state/,'Unknown newer backup format versions are rejected');
const mismatchedEnvelope=JSON.parse(studentBackup);
for(const [field,value] of [['ruleset','OTHER'],['deck','other-deck'],['schema',4],['sessionCode','SEA3-T2-FFFFFFFFFFFFFFFF']]){
 const tampered={...mismatchedEnvelope,[field]:value};
 assert.throws(()=>backupApi.parseBackup(JSON.stringify(tampered),'STUDENT',x=>x),/invalid-state/,'Mismatched '+field+' binding is rejected');
}
const compatiblePatch=JSON.parse(studentBackup);compatiblePatch.appVersion='3.0.1-local';
assert.ok(backupApi.parseBackup(JSON.stringify(compatiblePatch),'STUDENT',x=>x),'A later app patch with the same explicit rules, deck and schema remains importable');
const legacyBackup={...JSON.parse(studentBackup),appVersion:'3.0.0-local'};
const minorBackupApi=runInNewContext(engine.replace(/version:"[^"]+",ruleset/, 'version:"3.1.0",ruleset')+';({makeBackup,parseBackup,APP})');
assert.equal(minorBackupApi.APP.version,'3.1.0');
assert.deepEqual(JSON.parse(JSON.stringify(minorBackupApi.parseBackup(JSON.stringify(legacyBackup),'STUDENT',x=>x))),backupBody,'Legacy schema-3 backup survives an app-only minor bump');
assert.equal(JSON.parse(minorBackupApi.makeBackup('STUDENT',backupBody)).appVersion,'3.1.0','New backup exports current minor version');
console.log('Versioned, bounded, role-specific backup envelope examples PASS');
for(const [wins,eligible] of [[0,true],[1,true],[2,false],[3,false],[-1,false],[1.5,false]]){
 const actual=runInNewContext(engine+';SEA_AUCTION.canWin('+wins+')');
 assert.equal(actual,eligible,'Two-win cap, wins='+wins);
}
assert.match(engine,/const APP=Object\.freeze\(/,'Canonical game constants');
const visibility=source.match(/function visibleLot\(i\)\{[^\n]+\}/)?.[0];
assert.ok(visibility,'Instructor visibility rule must exist');
for(const [mode,index,revealed,expected] of [
 ['ROUND',9,false,true],['JIT',0,false,true],['JIT',3,false,true],
 ['JIT',4,false,true],['JIT',4,true,true],['JIT',5,true,false],
 ['MANUAL',3,false,true],['MANUAL',4,false,false],['MANUAL',4,true,true],['MANUAL',5,true,false]
]){
 const fn=runInNewContext(engine+'\n'+visibility+';visibleLot',{state:{revealMode:mode,lot:4,revealed}});
 assert.equal(fn(index),expected,mode+' lot='+index+' revealed='+revealed);
}
assert.match(source,/state\.market\.slice\(0,state\.round\)/,'Previous rounds must remain inspectable');
assert.match(source,/function validateInstructorSave\(/,'Instructor recovery validator');
assert.match(source,/function commitSale\(/,'Instructor sale transition');
assert.match(source,/function advance\(/,'Instructor advance transition');
console.log('Instructor visibility and lifecycle structural tests PASS');

const studentSource=read('source/student.js');
const reconcileStart=studentSource.indexOf('function removePurchase(team,index)');
const reconcileEnd=studentSource.indexOf('\nfunction addMissingPurchase()',reconcileStart);
assert.ok(reconcileStart>=0&&reconcileEnd>reconcileStart,'Student reconciliation behavior is available for direct testing');
const reconcileSource=studentSource.slice(reconcileStart,reconcileEnd);
const ui={container:{innerHTML:''},buttons:[],pending:null,approved:null,notices:[],saves:0,renders:0};
const purchase=(id,instance,round,lot,paid,e)=>({id,instance,round,lot,paid,e,title:{en:id,fr:id}});
const makeTeam=purchases=>{
 const totals={CAP:0,MOB:0};const purchasesByRound=Array(7).fill(0);let cost=0;
 for(const p of purchases){for(const[k,v]of Object.entries(p.e))totals[k]=(totals[k]||0)+v;purchasesByRound[p.round-1]++;cost+=p.paid}
 return {purchases:[...purchases],purchasesByRound,totals,cost};
};
const sandbox={
 state:{phase:'build',team:makeTeam([
  purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2}),
  purchase('MOB-A','R1-L2-MOB-A',1,2,2000,{MOB:5})
 ])},lang:'en',ui,
 $:selector=>{assert.equal(selector,'#reconcileInventory');return ui.container},
 $$:selector=>{
  assert.equal(selector,'[data-remove-purchase]');
  ui.buttons=[...ui.container.innerHTML.matchAll(/data-remove-purchase="([^"]+)"/g)].map(match=>({dataset:{removePurchase:match[1]},isConnected:true,onclick:null}));
  return ui.buttons;
 },
 esc:value=>String(value),money:value=>String(value),t:key=>key,
 must:condition=>{if(!condition)throw new Error('invalid-state')},
 seaConfirmGate(key,message,retry){if(ui.approved===key){ui.approved=null;return true}ui.pending={key,message,retry};return false},
 seaNotify:message=>ui.notices.push(message),saveState:()=>{ui.saves++},renderBuild:()=>{ui.renders++}
};
runInNewContext(reconcileSource,sandbox,{filename:'student reconciliation'});
const renderButtons=()=>runInNewContext('renderReconcileInventory()',sandbox);
const cancelPending=()=>{ui.pending=null};
const acceptPending=()=>{const pending=ui.pending;assert.ok(pending,'Confirmation is pending');ui.pending=null;ui.approved=pending.key;pending.retry();ui.approved=null};
renderButtons();
ui.buttons[0].onclick();
assert.equal(ui.pending?.key,'remove-purchase-R1-L1-CAP-A','Click requests confirmation for the selected stable purchase identity');
cancelPending();
assert.equal(sandbox.state.team.purchases.length,2,'Cancel preserves both purchases');
assert.equal(sandbox.state.team.cost,3000,'Cancel preserves cost');
renderButtons();
ui.buttons[1].onclick();
assert.equal(ui.pending?.key,'remove-purchase-R1-L2-MOB-A','Second row targets its own stable identity');
runInNewContext('removePurchase(state.team,0)',sandbox);
acceptPending();
assert.deepEqual(Array.from(sandbox.state.team.purchases, p=>p.instance),[],'Confirm removes the intended purchase after an earlier row shifts');
assert.equal(sandbox.state.team.cost,0,'Confirmed removal updates cost');
assert.deepEqual(Array.from(sandbox.state.team.purchasesByRound),Array(7).fill(0),'Confirmed removal updates round counts');
assert.deepEqual({...sandbox.state.team.totals},{CAP:0,MOB:0},'Confirmed removal updates capability totals');
assert.equal(ui.saves,1,'Successful removal is persisted');
assert.equal(ui.renders,1,'Successful removal refreshes the build view');
sandbox.state.team=makeTeam([purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2})]);
renderButtons();
ui.buttons[0].onclick();
runInNewContext('removePurchase(state.team,0)',sandbox);
acceptPending();
assert.deepEqual(ui.notices,['errors.stale'],'A stale confirmation reports the missing target');
assert.equal(ui.saves,1,'Stale confirmation does not persist another mutation');
assert.equal(ui.renders,1,'Stale confirmation does not refresh as though it succeeded');
sandbox.state.team=makeTeam([
 purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2}),
 purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2})
]);
renderButtons();
ui.buttons[0].onclick();
acceptPending();
assert.equal(sandbox.state.team.purchases.length,2,'An ambiguous duplicate identity is not partially removed');
assert.equal(sandbox.state.team.cost,2000,'An ambiguous target leaves cost unchanged');
assert.deepEqual(ui.notices,['errors.stale','errors.stale'],'Missing and ambiguous confirmation targets both fail closed');
assert.equal(ui.saves,1,'Ambiguous confirmation does not persist a mutation');

// R08/R09/R10, T10/T11: pending removal must not retarget restored or replaced work.
for(const change of ['team','session','purchase','missing-team','phase']){
 sandbox.state.phase='build';sandbox.state.sessionCode='SEA3-T2-0123456789ABCDEF';
 sandbox.state.team=makeTeam([purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2})]);
 renderButtons();ui.buttons[0].onclick();
 if(change==='team')sandbox.state.team=makeTeam([purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2})]);
 if(change==='session')sandbox.state.sessionCode='SEA3-T2-FEDCBA9876543210';
 if(change==='purchase')sandbox.state.team.purchases[0]=purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2});
 if(change==='missing-team')sandbox.state.team=null;
 if(change==='phase')sandbox.state.phase='submit';
 const before=JSON.stringify(sandbox.state),saves=ui.saves;
 assert.doesNotThrow(acceptPending,'Changed '+change+' rejects safely');
 assert.equal(JSON.stringify(sandbox.state),before,'Pending removal cannot mutate changed '+change);
 assert.equal(ui.saves,saves,'Rejected removal cannot save changed '+change);
}

console.log('Student purchase removal click/cancel/confirm/stale-state regression PASS');

for(const change of ['team','session','purchase','detached']){
 sandbox.state.phase='build';sandbox.state.sessionCode='SEA3-T2-0123456789ABCDEF';
 sandbox.state.team=makeTeam([purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2})]);
 renderButtons();const button=ui.buttons[0];ui.pending=null;
 if(change==='team')sandbox.state.team=makeTeam([purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2})]);
 if(change==='session')sandbox.state.sessionCode='SEA3-T2-FEDCBA9876543210';
 if(change==='purchase')sandbox.state.team.purchases[0]=purchase('CAP-A','R1-L1-CAP-A',1,1,1000,{CAP:2});
 if(change==='detached')button.isConnected=false;
 const before=JSON.stringify(sandbox.state),saves=ui.saves;button.onclick();
 assert.equal(ui.pending,null,'Old rendered removal control cannot retarget '+change);
 assert.equal(JSON.stringify(sandbox.state),before);assert.equal(ui.saves,saves);
}

const scoreExamples=[
 ['COMBAT',{MOB:80,FP:10},0],['COMBAT',{MOB:89,FP:11},20],['COMBAT',{MOB:90,FP:10},20],
 ['RECCE',{COM:75,SA:5},0],['RECCE',{COM:99,SA:6},20],['RECCE',{COM:100,SA:6},40],
 ['TROOP',{CAP:10,PRO:4},0],['TROOP',{CAP:11,PRO:5},40],['TROOP',{CAP:9,PRO:3},0],
 ['COMMAND',{CAP:5,COM:125},0],['COMMAND',{CAP:6,COM:149},20],['COMMAND',{CAP:6,COM:150},40],
 ['RECOVERY',{PRO:6,REC:3},0],['RECOVERY',{PRO:7,REC:4},60],['RECOVERY',{PRO:5,REC:2},0],
 ['MINE',{SA:1,MC:3},0],['MINE',{SA:2,MC:4},60],['MINE',{SA:0,MC:2},0]
];
for(const role of ['instructor','student']){
 const roleSource=read(`source/${role}.js`);
 assert.doesNotMatch(roleSource,/^function (req|compliant|shortfalls|score)\(/m,role+' consumes shared mission scoring rules');
}
const missionRules=runInNewContext(read('source/shared/engine.js')+'\n({req,compliant,shortfalls,score})',{});
for(const[mission,totals,expected]of scoreExamples)
 assert.equal(missionRules.score({mission,totals}),expected,`${mission} independent score example`);
for(const mission of ['COMBAT','RECCE','TROOP','COMMAND','RECOVERY','MINE']){
 const requirements=missionRules.req({mission}),totals={...requirements},key=Object.keys(requirements)[0];
 assert.equal(missionRules.compliant({mission,totals}),true,mission+' minimum requirements comply');
 assert.deepEqual(JSON.parse(JSON.stringify(missionRules.shortfalls({mission,totals}))),[]);
 totals[key]--;
 assert.equal(missionRules.compliant({mission,totals}),false,mission+' below-minimum requirements fail');
 assert.deepEqual(JSON.parse(JSON.stringify(missionRules.shortfalls({mission,totals}))),[[key,requirements[key]]]);
}
console.log('Shared mission requirements, compliance and independent scoring examples PASS');

const sharedEngineSource=read('source/shared/engine.js');
for(const role of ['instructor','student']){
 const roleSource=read('source/'+role+'.js');
 assert.doesNotMatch(roleSource,/^const (SLOT_ORDER|LABELS|MISSIONS|POOLS|MISSION_IDS)=/m,role+' consumes canonical rule and card data from the shared engine');
}
const canonicalRules=JSON.parse(runInNewContext(sharedEngineSource+'\nJSON.stringify({APP,SLOT_ORDER,LABELS,MISSIONS,POOLS,MISSION_IDS})',{}));
const rulesBaseline=JSON.parse(read('docs/evidence/rules-baseline.json'));
const {version:runtimeVersion,...runtimeRuleConstants}=canonicalRules.APP,{version:baselineVersion,...baselineRuleConstants}=rulesBaseline.app;
assert.equal(runtimeVersion,backupApi.APP.version);assert.equal(typeof baselineVersion,'string');assert.deepEqual(runtimeRuleConstants,baselineRuleConstants,'An app-only version bump does not change approved rule constants');assert.deepEqual(canonicalRules.SLOT_ORDER,rulesBaseline.slots);
assert.deepEqual(canonicalRules.MISSIONS,rulesBaseline.missions);assert.deepEqual(canonicalRules.POOLS,rulesBaseline.pools);
assert.equal(canonicalRules.APP.rounds,7);assert.equal(canonicalRules.APP.lotsPerRound,10);
assert.deepEqual(canonicalRules.MISSION_IDS,Object.keys(canonicalRules.MISSIONS));
assert.equal(canonicalRules.SLOT_ORDER.length,10);
assert.equal(Object.values(canonicalRules.POOLS).reduce((count,cards)=>count+cards.length,0),70);
assert.equal(new Set(Object.values(canonicalRules.POOLS).flat().map(card=>card[0])).size,70);
for(const[category,cards]of Object.entries(canonicalRules.POOLS)){
 assert.equal(cards.length,category==='SE_PROCESS'?21:7,category+' canonical card count');
 for(const[id,titles,startPrice,effects]of cards){assert.match(id,/^[A-Z]+-[A-Z]$/);assert.equal(titles.length,2);assert.ok(titles.every(title=>typeof title==='string'&&title.length>0));assert.ok(Number.isSafeInteger(startPrice)&&startPrice>0);for(const[key,value]of Object.entries(effects)){assert.ok(canonicalRules.LABELS[key]);assert.ok(Number.isInteger(value))}}
}
assert.equal(canonicalRules.POOLS.SE_PROCESS.length,21);
for(const labels of Object.values(canonicalRules.LABELS))assert.equal(typeof labels.en[0],'string');
console.log('Shared canonical mission, category and 70-card data contract PASS');
for(const role of ['instructor','student']){
 const roleSource=read('source/'+role+'.js');
 assert.doesNotMatch(roleSource,/^function (validMission|must|cardAt|acquire|cardIndex)\(/m,role+' delegates card acquisition invariants to the shared engine');
 assert.doesNotMatch(roleSource,/^const CARD_INDEX=/m,role+' uses the shared canonical card index');
}
const acquisitionRules=runInNewContext(sharedEngineSource+'\n({CARD_INDEX,validMission,cardAt,acquire})',{});
assert.equal(acquisitionRules.CARD_INDEX.size,70);
const acquisitionTeam={mission:'COMBAT',totals:{CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0},purchases:[],purchasesByRound:Array(7).fill(0),cost:0,profit:0};
const capacity=acquisitionRules.cardAt('CAP-A',1,1);
assert.equal(capacity.instance,'R1-L1-CAP-A');
acquisitionRules.acquire(acquisitionTeam,capacity,capacity.start);
assert.equal(acquisitionTeam.cost,capacity.start);assert.equal(acquisitionTeam.totals.CAP,6);assert.equal(acquisitionTeam.totals.MOB,-10);
const afterPurchase=JSON.stringify(acquisitionTeam);
assert.throws(()=>acquisitionRules.acquire(acquisitionTeam,acquisitionRules.cardAt('CAP-A',2,1),capacity.start),/duplicate/);
assert.throws(()=>acquisitionRules.acquire(acquisitionTeam,acquisitionRules.cardAt('MOB-A',1,2),40000001),/money/);
const limitedTeam={...acquisitionTeam,purchases:[],purchasesByRound:[2,0,0,0,0,0,0],cost:0,totals:{CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0}};
assert.throws(()=>acquisitionRules.acquire(limitedTeam,acquisitionRules.cardAt('MOB-A',1,2),40000000),/limit/);
assert.equal(JSON.stringify(acquisitionTeam),afterPurchase,'Rejected duplicate and invalid-price purchases do not mutate inventory');
console.log('Shared card index, slot identity and transactional acquisition examples PASS');
const amountInputSource=studentSource.match(/function amountInput\(c\)\{[^\n]+\}/)?.[0];
const renderCardSource=studentSource.match(/function renderCard\(\)\{[^\n]+\}/)?.[0];
assert.ok(amountInputSource&&renderCardSource,'Student sale-price render path is available for direct testing');
const cardUi=Object.fromEntries(['#cardCat','#cardId','#cardTitle','#cardEffects','#cardArt','#startPrice','#wonPrice'].map(selector=>[selector,{textContent:'',innerHTML:'',value:'',dataset:{}}]));
const renderPriceCard=acquisitionRules.cardAt('CAP-A',1,1);
const renderSandbox={state:{currentCard:renderPriceCard},lang:'en',$:selector=>cardUi[selector],t:(key,vars={})=>vars.amount??key,money:cents=>String(cents),categoryName:category=>category,effectsHtml:()=>'',art:()=>''};
runInNewContext(sharedEngineSource+'\n'+amountInputSource+'\n'+renderCardSource+'\nrenderCard()',renderSandbox);
assert.equal(cardUi['#wonPrice'].value,'300000','The sale input displays whole dollars, not the underlying cents');
const parseWholeDollarsForDisplay=runInNewContext(sharedEngineSource+'\nparseWholeDollars',{});
const amountInputForTest=runInNewContext(sharedEngineSource+'\n'+amountInputSource+'\namountInput',{});
assert.equal(parseWholeDollarsForDisplay(cardUi['#wonPrice'].value),renderPriceCard.start,'Submitting the displayed starting price preserves canonical cents');
for(let round=1;round<=7;round++)for(let lot=1;lot<=10;lot++){
 const category=canonicalRules.SLOT_ORDER[lot-1],cardIndex=category==='SE_PROCESS'?(round-1)*3+lot-8:round-1;
 const [id,,startDollars]=canonicalRules.POOLS[category][cardIndex],card=acquisitionRules.cardAt(id,round,lot),display=amountInputForTest(card.start);
 assert.equal(display,String(startDollars),id+' whole-dollar starting-price display');
 const paid=parseWholeDollarsForDisplay(display);assert.equal(paid,card.start,id+' displayed starting price parses to canonical cents');
 const team={mission:'COMBAT',totals:{CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0},purchases:[],purchasesByRound:Array(7).fill(0),cost:0,profit:0};
 acquisitionRules.acquire(team,card,paid);assert.equal(team.cost,card.start,id+' unchanged displayed starting price commits exact cost');
}
console.log('Student sale-price default renders whole dollars and commits exact canonical cents for all 70 cards PASS');
for(const role of ['instructor','student'])assert.doesNotMatch(read('source/'+role+'.js'),/^const PHASES=|^function (parseSessionCode|createTeams|cleanTeam|validateBase)\(/m,role+' uses the shared session and recovery invariants');
const sessionRules=runInNewContext(sharedEngineSource+'\n({PHASES,parseSessionCode,createTeams,cleanTeam,validateBase})',{});
assert.deepEqual(JSON.parse(JSON.stringify(sessionRules.PHASES)),['setup','practice','planning','auction','build','submit','debrief','closed']);
const session=sessionRules.parseSessionCode('SEA3-T4-0123456789ABCDEF');
assert.deepEqual(JSON.parse(JSON.stringify(session)),{code:'SEA3-T4-0123456789ABCDEF',teamCount:4,token:'0123456789ABCDEF'});
assert.equal(sessionRules.createTeams(session).length,4);assert.equal(sessionRules.createTeams('SEA3-T10-0123456789ABCDEF').length,10);
assert.throws(()=>sessionRules.parseSessionCode('SEA3-T11-0123456789ABCDEF'),/code/);
const validBase={schema:3,phase:'setup',lang:'en',sessionCode:session.code,teamCount:4,round:0,lot:0};
assert.equal(sessionRules.validateBase(validBase).teamCount,4);
assert.throws(()=>sessionRules.validateBase({...validBase,phase:'unknown'}),/invalid-state/);
const rawTeam={id:1,mission:'COMBAT',profit:0,submitted:false,purchases:[{id:'CAP-A',round:1,lot:1,instance:'R1-L1-CAP-A',paid:30000000}]};
const cleanTeam=sessionRules.cleanTeam(rawTeam);
assert.equal(cleanTeam.cost,30000000);assert.deepEqual(JSON.parse(JSON.stringify(cleanTeam.totals)),{CAP:6,MOB:-10,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0});
assert.equal(cleanTeam.purchasesByRound[0],1);
assert.throws(()=>sessionRules.cleanTeam({...rawTeam,purchases:[{...rawTeam.purchases[0],instance:'stale'}]}),/invalid-state/);
console.log('Shared session parsing, lifecycle phases and save-derived recovery validation PASS');
for(const role of ['instructor','student'])assert.doesNotMatch(read('source/'+role+'.js'),/^function (xmur3|rng|shuffle|marketFromSeed)\(/m,role+' uses canonical seeded-market functions');
const marketFromSeed=runInNewContext(sharedEngineSource+'\nmarketFromSeed',{});
const seedMarket=marketFromSeed('SEA-TDD-SEED-001'),repeatMarket=marketFromSeed('SEA-TDD-SEED-001'),changedSeedMarket=marketFromSeed('SEA-TDD-SEED-002');
assert.equal(seedMarket.length,7);assert.ok(seedMarket.every(round=>round.length===10));
assert.equal(JSON.stringify(seedMarket),JSON.stringify(repeatMarket),'The same private seed reproduces the exact 70-lot market');
assert.notEqual(JSON.stringify(seedMarket),JSON.stringify(changedSeedMarket),'A different seed changes the market order');
assert.equal(new Set(seedMarket.flat().map(card=>card.id)).size,70);
for(let ri=0;ri<7;ri++)for(let li=0;li<10;li++){const card=seedMarket[ri][li];assert.equal(card.round,ri+1);assert.equal(card.lot,li+1);assert.equal(card.cat,canonicalRules.SLOT_ORDER[li]);assert.equal(card.instance,`R${ri+1}-L${li+1}-${card.id}`)}
console.log('Shared deterministic market generation, 70-slot mapping and seed variation PASS');
for(const role of ['instructor','student']){
 const roleSource=read('source/'+role+'.js');
 assert.doesNotMatch(roleSource,/function (validCents|parseAmount|parseWholeDollars|parsePercentBps|addCents|profitFromBps)\(/,role+' delegates monetary primitives to shared engine');
}
const sharedMoney=runInNewContext(sharedEngineSource+'\n({validCents,parseAmount,parseWholeDollars,parsePercentBps,addCents,profitFromBps})',{});
const {parseAmount,parseWholeDollars,parsePercentBps,addCents,profitFromBps}=sharedMoney;
const MAX_SAFE_CENTS=Number.MAX_SAFE_INTEGER;
assert.equal(parseAmount('12'),1200);assert.equal(parseAmount('12.3'),1230);assert.equal(parseAmount('12,34'),1234);assert.equal(parseAmount('0.00'),0);
assert.throws(()=>parseAmount('-1'),/money/);assert.throws(()=>parseAmount('1.001'),/money/);
assert.equal(parseWholeDollars('90071992547409'),9007199254740900);assert.throws(()=>parseWholeDollars('90071992547410'),/money/);
assert.equal(parsePercentBps('12.34'),1234n);assert.equal(parsePercentBps('10000'),1000000n);assert.throws(()=>parsePercentBps('10000.01'),/percent/);
assert.equal(addCents(MAX_SAFE_CENTS,0),MAX_SAFE_CENTS);assert.throws(()=>addCents(MAX_SAFE_CENTS,1),/money/);
assert.equal(profitFromBps(0,1000000),0);assert.equal(profitFromBps(10000000,1500),1500000);assert.equal(profitFromBps(1,5000),1);
assert.throws(()=>profitFromBps(MAX_SAFE_CENTS,1000000),/money/);
console.log('Shared monetary parsing, rounding, safe-range and overflow examples PASS');
for(const role of ['instructor','student'])assert.doesNotMatch(read('source/'+role+'.js'),/^function (awardComparator|exactTopTie|awardEligible)\(/m,role+' uses the shared award ranking rules');
const ranking=runInNewContext(sharedEngineSource+'\n({awardComparator,exactTopTie,awardEligible})',{});
const rankTeam=(id,cost,scoreValue,{submitted=true,capacity=4}={})=>({id,cost,profit:0,submitted,mission:'COMBAT',totals:{CAP:capacity,MOB:80,FP:10+scoreValue/20,PRO:10,COM:25,SA:1,REC:0,MC:0}});
const closeA=rankTeam(1,10000,100),closeB=rankTeam(2,10001,100);
assert.equal(ranking.awardComparator(closeA,closeB),-1,'Exact ratio ordering preserves a sub-cent displayed difference');
const equalRatioHighBid=rankTeam(2,2000,40),equalRatioLowBid=rankTeam(1,1000,20);
assert.ok(ranking.awardComparator(equalRatioLowBid,equalRatioHighBid)<0,'Equal exact ratios prefer the lower bid');
const tiedA=rankTeam(1,100,20),tiedB=rankTeam(2,100,20);
assert.equal(ranking.awardComparator(tiedB,tiedA),1,'Equal entries have stable display order');
assert.equal(ranking.exactTopTie(tiedA,tiedB),true,'Identical bid and score share first place');
assert.equal(ranking.exactTopTie(equalRatioLowBid,equalRatioHighBid),false,'Equal ratio alone is not a shared first-place tie');
assert.equal(ranking.awardEligible(tiedA),true,'Submitted, compliant, positive score is award eligible');
assert.equal(ranking.awardEligible(rankTeam(3,100,20,{submitted:false})),false,'Unsubmitted team is ineligible');
assert.equal(ranking.awardEligible(rankTeam(4,100,20,{capacity:3})),false,'Noncompliant team is ineligible');
assert.equal(ranking.awardEligible(rankTeam(5,100,0)),false,'Zero-score team is ineligible');
console.log('Shared exact-ratio ordering, tie and award eligibility examples PASS');

const instructorSource=read('source/instructor.js');
function extractFunction(source,name){
 const start=source.indexOf('function '+name+'(');assert.ok(start>=0,'Instructor '+name+' function exists');
 const next=source.indexOf('\nfunction ',start+9),close=source.indexOf('\n}',start);
 if(close>=0&&(next<0||close<next))return source.slice(start,close+2);
 const lineEnd=source.indexOf('\n',start);return source.slice(start,lineEnd<0?source.length:lineEnd);
}
// R14 / T15: production artwork routes and mission previews preserve all identities.
const missionArt={COMBAT:'combat',RECCE:'recce',TROOP:'troop-carrier',COMMAND:'command-post',RECOVERY:'recovery',MINE:'mine-clearing'};
for(const roleSource of [instructorSource,studentSource])for(const lang of ['en','fr']){
 const artNames=['embeddedArt','art','vehiclePreview'];const named=artNames.map(name=>extractFunction(presentation,name)).join('\n');
 const builtins=Object.fromEntries([...Object.values(missionArt),'TRAIN-CAP',...acquisitionRules.CARD_INDEX.keys()].map(id=>[id,'<svg data-test-id="'+id+'"></svg>']));
 const api=runInNewContext(sharedEngineSource+'\n'+named+'\n;({art,vehiclePreview})',{lang,BUILTIN_CARD_ART:builtins,esc:String,t:key=>key,navigator:{onLine:true},location:{protocol:'https:'}});
 for(const[mission,id]of Object.entries(missionArt)){
  const html=api.art({id,title:{en:'English mission',fr:'Mission française'}});
  assert.doesNotMatch(html,/<img|\ssrc=/,'Mission artwork has no external resource');
  assert.ok(html.includes('data-test-id="'+id+'"'),'Embedded illustration is immediately included');
  assert.ok(api.vehiclePreview(mission).includes('data-test-id="'+id+'"'),'Mission preview displays its illustration');
 }
 const fallback=runInNewContext(extractFunction(presentation,'embeddedArt')+'\n;embeddedArt',{lang,BUILTIN_CARD_ART:{combat:'<svg role="img" aria-label="combat detailed vector artwork"></svg>'},esc:String});
 assert.ok(fallback({id:'combat',title:{en:'English mission',fr:'Mission française'}}).includes('aria-label="'+(lang==='en'?'English mission':'Mission française')+'"'),'Embedded illustration uses localized description');
}
const artIdentities=[...acquisitionRules.CARD_INDEX.keys(),'TRAIN-CAP',...Object.values(missionArt)];
for(const [role,roleSource]of [['instructor',instructorSource],['student',studentSource]]){
 assert.doesNotMatch(roleSource,/const BUILTIN_CARD_ART=/,'Controller does not duplicate canonical SVG source');
 const delivered=read(role==='instructor'?'SEA_Instructor_Standalone.html':'SEA_Student_Standalone.html');
 const literal=delivered.match(/const BUILTIN_CARD_ART=(.*?);\n/)?.[1];assert.ok(literal);const table=runInNewContext(literal);
 assert.deepEqual(Object.keys(table).sort(),[...artIdentities].sort(),role+' embeds all 77 identities');
 for(const id of artIdentities){const folder=id==='TRAIN-CAP'?'practice':Object.values(missionArt).includes(id)?'vehicles':'cards';assert.equal(table[id].trim(),read('assets/v1/'+folder+'/'+id+'.svg').trim(),role+' vector matches canonical asset '+id)}
}
const canonicalArtwork=runInNewContext(embeddedArtworkSource(artIdentities)+'\n;BUILTIN_CARD_ART');
assert.equal(createHash('sha256').update(JSON.stringify(Object.fromEntries(Object.entries(canonicalArtwork).sort()))).digest('hex'),'839afca0e16a59b7bf598a35a07c4d388a70919547ccac6df3fbb6cc5efd1a2f','Repaired 77-vector pack matches the recorded digest');
assert.throws(()=>embeddedArtworkSource(artIdentities.slice(1)),/77 unique/);
assert.throws(()=>embeddedArtworkSource([...artIdentities.slice(1),artIdentities[1]]),/77 unique/);
assert.throws(()=>embeddedArtworkSource([...artIdentities.slice(1),'../outside']),/Unsafe/);
for(const [protocol,online]of [['https:',true],['https:',false],['file:',true],['file:',false]]){
 const builtin=Object.fromEntries(artIdentities.map(id=>[id,'<svg data-identity="'+id+'" role="img" aria-label="old"></svg>']));
 const api=runInNewContext(sharedEngineSource+'\n'+presentation+'\n;({art,artworkAssetPath})',{BUILTIN_CARD_ART:builtin,lang:'fr',esc:value=>String(value).replaceAll('"','&quot;'),navigator:{onLine:online},location:{protocol}});
 for(const id of artIdentities){const html=api.art({id,title:{en:'English',fr:'Français "nom"'}});assert.ok(html.includes('data-identity="'+id+'"'));assert.ok(html.includes('aria-label="Français &quot;nom&quot;"'));assert.doesNotMatch(html,/<img|\ssrc=|https?:|\son[a-z]+\s*=/,'Every identity is inline and has no resource/failure handler');}
 assert.equal(api.art({id:'unknown',title:{en:'Unknown',fr:'Inconnu'}}),'');
}
for(const lang of ['en','fr']){
 const builtin=Object.fromEntries(artIdentities.map(id=>[id,'<svg data-identity="'+id+'" role="img" aria-label="old"></svg>'])),state={phase:'planning',vehiclesLocked:false,sessionCode:'SEA3-T6-0123456789ABCDEF',teamCount:6,teams:Object.keys(missionArt).map((mission,i)=>({id:i+1,mission,purchases:[]}))},target={id:'planningTeams',innerHTML:'',querySelectorAll:()=>[]};
 runInNewContext(sharedEngineSource+'\n'+presentation+'\n'+['choicesEditable','vehicleOptions','renderAssignments'].map(name=>extractFunction(instructorSource,name)).join('\n')+'\nrenderAssignments(target)',{state,target,lang,BUILTIN_CARD_ART:builtin,esc:String,t:key=>key,navigator:{onLine:false},location:{protocol:'file:'},document:{getElementById:()=>null}});
 for(const id of Object.values(missionArt))assert.ok(target.innerHTML.includes('data-identity="'+id+'"'),'Instructor assignment displays '+id);
 const elements={},$=key=>elements[key]||(elements[key]={value:'',textContent:'',innerHTML:''});
 const studentState={team:{id:1,mission:'RECCE'},lockedMission:null,vehicleConfirmed:true,plan:'private plan',risks:'private risks',maxWtpCents:85000000};
 runInNewContext(sharedEngineSource+'\n'+presentation+'\n'+['vehicleOptions','amountInput','renderVehiclePreview','renderPlanning'].map(name=>extractFunction(studentSource,name)).join('\n')+'\nrenderPlanning()',{state:studentState,lang,BUILTIN_CARD_ART:builtin,$,esc:String,t:key=>key,navigator:{onLine:false},location:{protocol:'file:'},renderRequirements(){},document:{getElementById:id=>$('#'+id)}});
 assert.ok($('#planVehiclePreview').innerHTML.includes('data-identity="recce"'),'Student Planning displays the selected mission');
}
console.log('All 77 embedded artwork identities and bilingual mission-preview integration PASS');
// R02/R09/R10, T03/T10/T11: instructor setup generation is transactional.
function setupGenerationHarness(){
 const elements={'#teamCount':{value:'2'},'#bidSeconds':{value:'30'},'#revealMode':{value:'ROUND'},'#timingMode':{value:'TIMED'},'#setupStatus':{textContent:''}},calls={saves:0,renders:0,stops:0,notices:[],pending:null,approved:null};
 const context={state:runInNewContext('('+instructorSource.match(/let state=(.*);\n/)[1]+')'),recoveryBlocked:false,$:key=>elements[key],t:key=>key,seaNotify:key=>calls.notices.push(key),saveState:()=>calls.saves++,renderAll:()=>calls.renders++,stopTimer:()=>calls.stops++,sessionCode:n=>'SEA3-T'+n+'-FEDCBA9876543210',randomHex:()=> 'FEDCBA9876543210FEDCBA9876543210',seaConfirmGate(key,message,retry){if(calls.approved===key)return true;calls.pending={key,retry};return false}};
 const api=runInNewContext(sharedEngineSource+'\n'+extractFunction(instructorSource,'generateSession')+'\n;({generateSession})',context);
 return {api,context,elements,calls,approve(){const p=calls.pending;calls.pending=null;calls.approved=p.key;try{return p.retry()}finally{calls.approved=null}}};
}
for(const [control,value]of [['#teamCount','1'],['#teamCount','2.5'],['#bidSeconds','9'],['#bidSeconds','121'],['#revealMode','UNKNOWN'],['#timingMode','UNKNOWN']]){
 const h=setupGenerationHarness();h.elements[control].value=value;const before=JSON.stringify(h.context.state);
 assert.equal(h.api.generateSession(),false,'Invalid setup choice rejected: '+control);assert.equal(JSON.stringify(h.context.state),before);assert.equal(h.calls.saves+h.calls.renders+h.calls.stops,0,'Invalid setup produces no effects');
}
for(const change of ['session','team','state','controls']){
 const h=setupGenerationHarness();assert.equal(h.api.generateSession(),true);h.context.state.teams[0].mission='COMBAT';assert.equal(h.api.generateSession(),false);
 if(change==='session')h.context.state.sessionCode='SEA3-T2-0123456789ABCDEF';
 if(change==='team')h.context.state.teams[0].mission='RECCE';
 if(change==='state')h.context.state=JSON.parse(JSON.stringify(h.context.state));
 if(change==='controls')h.elements['#timingMode'].value='UNTIMED';
 const before=JSON.stringify(h.context.state),effects=h.calls.saves+h.calls.renders+h.calls.stops;
 assert.equal(h.approve(),false,'Stale generation confirmation rejected: '+change);assert.equal(JSON.stringify(h.context.state),before);assert.equal(h.calls.saves+h.calls.renders+h.calls.stops,effects);assert.equal(h.calls.notices.at(-1),'errors.changed');
}
const generatedSaveValidator=runInNewContext(sharedEngineSource+'\n'+extractFunction(instructorSource,'validateInstructorSave')+'\n;validateInstructorSave');
for(const n of [2,10])for(const seconds of [10,120])for(const reveal of ['ROUND','JIT','MANUAL'])for(const timing of ['TIMED','UNTIMED']){
 const h=setupGenerationHarness();h.elements['#teamCount'].value=String(n);h.elements['#bidSeconds'].value=String(seconds);h.elements['#revealMode'].value=reveal;h.elements['#timingMode'].value=timing;
 assert.equal(h.api.generateSession(),true);assert.equal(h.context.state.teams.length,n);assert.equal(h.context.state.market.flat().length,70);assert.equal(new Set(h.context.state.market.flat().map(card=>card.id)).size,70);assert.equal(h.context.state.revealed,reveal!=='MANUAL');assert.equal(h.calls.saves,1);assert.equal(h.calls.renders,1);assert.equal(h.calls.stops,1);assert.equal(h.calls.pending,null);
 assert.doesNotThrow(()=>generatedSaveValidator(JSON.parse(JSON.stringify(h.context.state))),'Every supported setup combination produces a recoverable schema-3 session');
}
for(const phase of ['practice','planning','auction','build','submit','debrief','closed']){
 const h=setupGenerationHarness();h.context.state.phase=phase;const before=JSON.stringify(h.context.state);assert.equal(h.api.generateSession(),false);assert.equal(JSON.stringify(h.context.state),before);assert.equal(h.calls.saves+h.calls.renders+h.calls.stops,0);
}
{
 const h=setupGenerationHarness();h.context.recoveryBlocked=true;assert.equal(h.api.generateSession(),false);assert.equal(h.calls.saves,0);
 h.context.recoveryBlocked=false;h.api.generateSession();h.context.state.teams[0].mission='COMBAT';const before=JSON.stringify(h.context.state);h.api.generateSession();const confirmation=h.calls.pending;assert.equal(JSON.stringify(h.context.state),before,'Pending/cancelled generation leaves assignments intact');assert.equal(h.approve(),true);const generated=JSON.stringify(h.context.state),effects=h.calls.saves+h.calls.renders+h.calls.stops;assert.equal(confirmation.retry(),false,'Consumed generation intent cannot replay');assert.equal(JSON.stringify(h.context.state),generated);assert.equal(h.calls.saves+h.calls.renders+h.calls.stops,effects);
}
console.log('Instructor setup generation bounds, recoverability, confirmation scope and repeat guards PASS');
// R09/R12/R15, T13/T14: production UI callbacks with an explicit focus model.
function messageUiHarness(source,lang='en',roleSource=studentSource){
 let document;
 class Element{
  constructor(tag){this.tagName=tag;this.children=[];this.parent=null;this.attrs={};this.style={};this.dataset={};this.textContent=''}
  get isConnected(){return this===document.body||!!this.parent?.isConnected}
  setAttribute(key,value){this.attrs[key]=value}
  append(...nodes){for(const node of nodes){node.remove();node.parent=this;this.children.push(node)}}
  contains(node){return this===node||this.children.some(child=>child.contains(node))}
  remove(){if(this.contains(document.activeElement))document.activeElement=document.body;if(this.parent)this.parent.children=this.parent.children.filter(child=>child!==this);this.parent=null}
  replaceChildren(){for(const child of [...this.children])child.remove()}
  insertAdjacentElement(position,node){assert.equal(position,'afterend');this.parent.append(node)}
  focus(){assert.equal(this.isConnected,true,'Focus target is connected');document.activeElement=this}
  scrollIntoView(){}
 }
 document={createElement:tag=>new Element(tag),getElementById(id){const visit=node=>node.id===id?node:node.children.map(visit).find(Boolean);return visit(this.body)||null},querySelector(selector){if(selector==='header')return this.header;return null}};
 document.body=new Element('body');document.header=new Element('header');document.opener=new Element('input');document.body.append(document.header,document.opener);document.activeElement=document.opener;
 document.documentElement={};const langBtn=new Element('button');langBtn.id='langBtn';document.header.append(langBtn);
 const all=()=>{const result=[];const visit=node=>{result.push(node);node.children.forEach(visit)};visit(document.body);return result};
 const calls={saves:0,renders:0};
 const context={document,lang,$:selector=>document.getElementById(selector.slice(1)),$$:selector=>all().filter(e=>selector==='[data-i18n-aria-label]'?!!e.dataset.i18nAriaLabel:false),money:String,saveState:()=>calls.saves++};
 context.t=key=>({'common.dismiss':context.lang==='fr'?'Fermer le message':'Dismiss message','common.confirm':context.lang==='fr'?'Confirmer':'Confirm','common.cancel':context.lang==='fr'?'Annuler':'Cancel'}[key]||key);
 const cancellation=source.includes('function seaCancelConfirmation(')?extractFunction(source,'seaCancelConfirmation'):'';
 const languageBinding=roleSource.split('\n').find(line=>line.startsWith('$("#langBtn").onclick='));
 const languageSource=source.includes('function setLang(')?source:roleSource;
 const api=runInNewContext('let seaApprovedAction=null;\n'+extractFunction(source,'seaConfirmGate')+'\n'+extractFunction(source,'seaNotify')+'\n'+cancellation+'\n'+extractFunction(roleSource,'applyI18n')+'\n'+extractFunction(languageSource,'setLang')+'\n'+languageBinding+'\n;({seaConfirmGate,seaNotify,applyI18n,setLang})',context);
 context.renderAll=()=>{calls.renders++;api.applyI18n()};
 api.setLanguage=api.setLang;
 return {...api,document,calls,clickLanguage:()=>langBtn.onclick()};
}
for(const roleSource of [instructorSource,studentSource]){const app=messageUiHarness(presentation,'en',roleSource);app.seaNotify('message');const close=app.document.getElementById('seaNotice').children[1];app.setLanguage('fr');assert.equal(close.attrs['aria-label'],'Fermer le message');app.setLanguage('en');assert.equal(close.attrs['aria-label'],'Dismiss message')}
for(const roleSource of [instructorSource,studentSource])for(const lang of ['en','fr']){
 const app=messageUiHarness(presentation,lang,roleSource);let applied=0;app.seaConfirmGate('language-change','Original language decision',()=>applied++);
 const panel=app.document.getElementById('seaInlineConfirm'),oldYes=panel.children[1].children[0],language=app.document.getElementById('langBtn');language.focus();app.clickLanguage();
 assert.equal(app.document.getElementById('seaInlineConfirm'),null,'Language switch cancels the previous-language decision');assert.equal(applied,0);assert.equal(app.document.activeElement,language,'Explicit language activation retains focus');oldYes.onclick();assert.equal(applied,0,'Cancelled approval cannot be replayed');
 app.seaConfirmGate('language-change','New language decision',()=>applied++);const fresh=app.document.getElementById('seaInlineConfirm'),yes=fresh.children[1].children[0];assert.equal(yes.textContent,lang==='en'?'Confirmer':'Confirm');yes.onclick();assert.equal(applied,1);
}
for(const roleSource of [instructorSource,studentSource])for(const lang of ['en','fr']){
 const app=messageUiHarness(presentation,lang,roleSource);app.seaConfirmGate('unchanged','message',()=>{});const panel=app.document.getElementById('seaInlineConfirm');
 assert.equal(app.setLanguage('invalid'),false);assert.equal(app.setLanguage(lang),true);assert.equal(app.document.getElementById('seaInlineConfirm'),panel);assert.equal(app.calls.saves+app.calls.renders,0,'Invalid/same locale has no effects');
 app.setLanguage(lang==='en'?'fr':'en');assert.equal(app.document.getElementById('seaInlineConfirm'),null);assert.equal(app.document.activeElement,app.document.opener,'Programmatic switch from dialog restores its opener');assert.equal(app.calls.saves,1);assert.equal(app.calls.renders,1);
}
for(const lang of ['en','fr']){
 const app=messageUiHarness(presentation,lang);app.seaNotify('<img onerror=hostile>');const notice=app.document.getElementById('seaNotice'),close=notice.children[1];
 assert.equal(notice.children[0].textContent,'<img onerror=hostile>','Untrusted notification remains text');
 assert.equal(close.attrs['aria-label'],lang==='fr'?'Fermer le message':'Dismiss message','Dismiss label matches active language');
 close.focus();close.onclick();assert.equal(app.document.getElementById('seaNotice'),null);assert.equal(app.document.activeElement,app.document.opener,'Dismiss returns keyboard focus to the original control');
 app.seaNotify('first');const oldClose=app.document.getElementById('seaNotice').children[1];oldClose.focus();app.seaNotify('second');const newClose=app.document.getElementById('seaNotice').children[1];assert.equal(app.document.activeElement,newClose,'Replacing a focused notice retains usable keyboard focus');oldClose.onclick();assert.ok(app.document.getElementById('seaNotice'),'Old dismiss callback cannot remove replacement notice');newClose.onclick();assert.equal(app.document.activeElement,app.document.opener);
 let retried=0;app.seaConfirmGate('first','first',()=>retried++);let panel=app.document.getElementById('seaInlineConfirm'),[yes,no]=panel.children[1].children;assert.equal(app.document.activeElement,no,'Cancel gets initial focus');
 let prevented=0;panel.onkeydown({key:'Tab',preventDefault(){prevented++}});assert.equal(app.document.activeElement,yes);panel.onkeydown({key:'Tab',shiftKey:true,preventDefault(){prevented++}});assert.equal(app.document.activeElement,no);assert.equal(prevented,2);
 panel.onkeydown({key:'Escape',preventDefault(){}});assert.equal(retried,0);assert.equal(app.document.activeElement,app.document.opener);assert.equal(app.document.getElementById('seaInlineConfirm'),null);
 app.seaConfirmGate('first','first',()=>retried++);panel=app.document.getElementById('seaInlineConfirm');const oldYes=panel.children[1].children[0];app.seaConfirmGate('second','second',()=>retried+=10);oldYes.onclick();assert.equal(retried,0,'Superseded confirmation callback cannot apply old action');assert.ok(app.document.getElementById('seaInlineConfirm'),'Old callback cannot remove the current prompt');panel.children[1].children[0].onclick();assert.equal(retried,10);panel.children[1].children[0].onclick();assert.equal(retried,10,'Confirmation executes at most once');
}
// R02/R09/R10, T03/T10/T11: real student commands, presentation/storage isolated.
function studentAuctionCommandHarness(){
 const elements={},calls={saves:0,auction:0,all:0,build:0,notices:[],pending:null,approved:null};
 const $=key=>elements[key]||(elements[key]={value:'',dataset:{},textContent:'',click(){return this.onclick()}});
 const context={state:null,$,$$:()=>[],t:key=>key,seaNotify:key=>calls.notices.push(key),saveState:()=>calls.saves++,renderAuction:()=>calls.auction++,renderAll:()=>calls.all++,renderBuild:()=>calls.build++,window:{scrollTo(){}},document:{querySelector:()=>null},seaConfirmGate(key,message,retry){if(calls.approved===key){calls.approved=null;return true}calls.pending={key,retry};return false}};
 const names=['phase','currentExpectedSlot','categoryName','loadCurrentCard','setPosition','recordWin','advancePosition','addMissingPurchase'];
 if(studentSource.includes('function finishStudentAuction('))names.push('finishStudentAuction');
 const binding=studentSource.split('\n').find(line=>line.startsWith('$("#finishAuctionBtn").onclick='));
 const api=runInNewContext(sharedEngineSource+'\n'+names.map(name=>extractFunction(studentSource,name)).join('\n')+'\n'+binding+'\n;({createTeams,cardAt,loadCurrentCard,setPosition,recordWin,advancePosition,addMissingPurchase})',context);
 const team=api.createTeams('SEA3-T2-0123456789ABCDEF')[0];team.mission=team.lockedMission='COMBAT';
 context.state={phase:'auction',sessionCode:'SEA3-T2-0123456789ABCDEF',team,lockedMission:'COMBAT',round:0,lot:0,currentCard:null,scratch:{}};
 return {...api,get state(){return context.state},replaceState:value=>context.state=value,calls,elements,$,finish:()=>$('#finishAuctionBtn').click(),cancel:()=>calls.pending=null,approve(){const pending=calls.pending;assert.ok(pending);calls.pending=null;calls.approved=pending.key;try{return pending.retry()}finally{calls.approved=null}}};
}
for(const change of ['session','team','position','card','purchase','replacement-state','phase']){
 const app=studentAuctionCommandHarness();app.finish();
 if(change==='session')app.state.sessionCode='SEA3-T2-FEDCBA9876543210';
 if(change==='team')app.state.team={...app.state.team};
 if(change==='position')app.state.lot=1;
 if(change==='card')app.state.currentCard=app.cardAt('CAP-A',1,1);
 if(change==='purchase')app.state.team.cost=35000000;
 if(change==='replacement-state')app.replaceState(JSON.parse(JSON.stringify(app.state)));
 if(change==='phase')app.state.phase='build';
 const before=JSON.stringify(app.state),saves=app.calls.saves;
 app.approve();assert.equal(JSON.stringify(app.state),before,'Delayed finish cannot apply to changed '+change);assert.equal(app.calls.saves,saves);
}
const finishCancel=studentAuctionCommandHarness();finishCancel.finish();finishCancel.cancel();assert.equal(finishCancel.state.phase,'auction');assert.equal(finishCancel.calls.saves,0);
const finishAccepted=studentAuctionCommandHarness();finishAccepted.finish();finishAccepted.approve();assert.equal(finishAccepted.state.phase,'build');assert.equal(finishAccepted.state.currentCard,null);const finished=JSON.stringify(finishAccepted.state),finishSaves=finishAccepted.calls.saves;finishAccepted.finish();assert.equal(JSON.stringify(finishAccepted.state),finished);assert.equal(finishAccepted.calls.saves,finishSaves);
for(const phase of ['setup','practice','planning','build','submit','debrief','closed'])for(const command of ['loadCurrentCard','setPosition','recordWin','advancePosition']){
 const app=studentAuctionCommandHarness();app.state.phase=phase;const before=JSON.stringify(app.state);app[command]();assert.equal(JSON.stringify(app.state),before,command+' rejects '+phase);assert.equal(app.calls.saves,0);
}
for(const [round,lot]of [[0,1],[8,1],[1,0],[1,11],[1.5,2],[2,1.5],['bad',1]]){
 const app=studentAuctionCommandHarness();app.$('#roundSelect').value=String(round);app.$('#lotSelect').value=String(lot);const before=JSON.stringify(app.state);app.setPosition();assert.equal(JSON.stringify(app.state),before,'Invalid position does not mutate');assert.equal(app.calls.auction,0);
}
const positions=studentAuctionCommandHarness();for(let i=0;i<70;i++){assert.equal(positions.state.round,Math.floor(i/10));assert.equal(positions.state.lot,i%10);assert.equal(positions.advancePosition(),true)}assert.equal(positions.state.phase,'build');assert.equal(positions.advancePosition(),false);
for(const[category,defs]of Object.entries(canonicalRules.POOLS))for(const[id]of defs){
 const lot=canonicalRules.SLOT_ORDER.indexOf(category)+1,app=studentAuctionCommandHarness();
 app.$('#roundSelect').value='7';app.$('#lotSelect').value=String(lot);app.setPosition();assert.equal(app.state.currentCard,null);
 app.$('#cardInput').value=' '+id.toLowerCase()+' ';app.loadCurrentCard();const card=app.state.currentCard;assert.equal(card.id,id);assert.equal(card.round,7);assert.equal(card.lot,lot);
 app.$('#wonPrice').value=String(card.start/100);assert.equal(app.recordWin(),true);assert.equal(app.state.team.cost,card.start);assert.equal(app.state.team.purchases.length,1);assert.equal(app.state.team.purchases[0].instance,card.instance);assert.equal(app.state.currentCard,null);
 const before=JSON.stringify(app.state);assert.equal(app.recordWin(),false);assert.equal(JSON.stringify(app.state),before,'Repeated win cannot duplicate purchase');
 const build=studentAuctionCommandHarness();build.state.phase='build';build.$('#addCard').value=id;build.$('#addRound').value='7';build.$('#addLot').value=String(lot);build.$('#addPrice').value=String(card.start/100);assert.equal(build.addMissingPurchase(),true);assert.equal(build.state.team.cost,card.start);assert.equal(build.state.team.purchases[0].instance,card.instance);
 build.$('#addCard').value=id;build.$('#addPrice').value=String(card.start/100);const existing=JSON.stringify(build.state);assert.equal(build.addMissingPurchase(),false);assert.equal(JSON.stringify(build.state),existing,'Duplicate reconciliation is atomic');
}
for(const price of ['-1','NaN','Infinity','1','350001','9007199254740992']){
 const app=studentAuctionCommandHarness();app.$('#cardInput').value='CAP-A';app.loadCurrentCard();app.$('#wonPrice').value=price;const before=JSON.stringify(app.state);assert.equal(app.recordWin(),false);assert.equal(JSON.stringify(app.state),before,'Invalid win price preserves state');assert.equal(app.calls.saves,1,'Only the prior valid card load saved');
}
for(const phase of ['setup','practice','planning','auction','submit','debrief','closed']){const app=studentAuctionCommandHarness();app.state.phase=phase;const before=JSON.stringify(app.state);assert.equal(app.addMissingPurchase(),false);assert.equal(JSON.stringify(app.state),before);assert.equal(app.calls.saves,0)}
for(const reconcile of [false,true]){
 const app=studentAuctionCommandHarness();if(reconcile)app.state.phase='build';
 for(const[id,lot,accepted]of [['CAP-A',1,true],['MOB-A',2,true],['FP-A',3,false]]){
  const card=app.cardAt(id,1,lot),before=JSON.stringify(app.state);
  if(reconcile){app.$('#addCard').value=id;app.$('#addRound').value='1';app.$('#addLot').value=String(lot);app.$('#addPrice').value=String(card.start/100);assert.equal(app.addMissingPurchase(),accepted)}
  else{app.state.round=0;app.state.lot=lot-1;app.state.currentCard=card;app.$('#wonPrice').value=String(card.start/100);const pending=JSON.stringify(app.state);assert.equal(app.recordWin(),accepted);if(!accepted)assert.equal(JSON.stringify(app.state),pending)}
  if(reconcile&&!accepted)assert.equal(JSON.stringify(app.state),before);
 }
 assert.equal(app.state.team.purchases.length,2);assert.equal(app.state.team.purchasesByRound[0],2);assert.equal(app.calls.notices.at(-1),'errors.purchaseLimit');
}
const wrongCard=studentAuctionCommandHarness();wrongCard.$('#cardInput').value='MOB-A';const beforeWrongCard=JSON.stringify(wrongCard.state);wrongCard.loadCurrentCard();assert.equal(JSON.stringify(wrongCard.state),beforeWrongCard);assert.equal(wrongCard.calls.saves,0);assert.equal(wrongCard.calls.notices[0],'errors.wrongSlot');
console.log('Student auction finish identity, 70-position advance and all-card win/reconciliation command examples PASS');
// R02 / T03: invoke the wired practice handlers with the production phase function.
// Rendering/storage are isolated here; this is not a browser or classroom acceptance run.
function practiceHarness(role,currentPhase='practice'){
 const source=role==='instructor'?instructorSource:studentSource;
 const selectors=role==='instructor'?['startTutorialBtn','practiceReveal','practiceOpen','practiceAccept','practiceClose','practiceReset','toPlanning']:['practiceRecord','practiceReset','toPlanning'];
 const state={phase:currentPhase,sessionCode:'SEA3-T2-0123456789ABCDEF',privateEntry:false,vehiclesLocked:false,practice:{revealed:false,open:false,leader:false,closed:false},practiceWon:false,
  market:[['private-market-marker']],ledger:[{seq:1,kind:'SALE'}],teams:[{cost:30000000,purchases:[{id:'CAP-A',paid:30000000}]}],team:{cost:30000000,purchases:[{id:'CAP-A',paid:30000000}]},plan:'private plan',round:2,lot:3};
 const elements={},calls={practice:0,all:0,saves:0};
 const $=selector=>elements[selector]||(elements[selector]={textContent:'',classList:{toggle(){}}});
 const bindings=selectors.map(id=>{const line=source.split('\n').find(value=>value.startsWith('$("#'+id+'").onclick='));assert.ok(line,'Practice harness finds wired '+role+' '+id);return line}).join('\n');
 const functions=extractFunction(source,'phase')+(role==='instructor'?'\n'+extractFunction(source,'resetPractice'):'');
 runInNewContext(sharedEngineSource+'\n'+functions+'\n'+bindings,{state,$,$$:()=>[],t:key=>key,renderPractice:()=>calls.practice++,renderAll:()=>calls.all++,saveState:()=>calls.saves++,window:{scrollTo(){}},document:{querySelector:()=>null}});
 const scored=()=>JSON.stringify({market:state.market,ledger:state.ledger,teams:state.teams,team:state.team,plan:state.plan,round:state.round,lot:state.lot});
 return {state,calls,click:id=>elements['#'+id].onclick(),scored};
}
for(const role of ['instructor','student']){
 const controls=role==='instructor'?['practiceReveal','practiceOpen','practiceAccept','practiceClose','practiceReset']:['practiceRecord','practiceReset'];
 for(const currentPhase of ['setup','planning','auction','build','submit','debrief','closed'])for(const control of controls){
  const app=practiceHarness(role,currentPhase);app.state.practice={revealed:true,open:true,leader:true,closed:false};app.state.practiceWon=control==='practiceReset';
  if(control==='practiceReveal')app.state.practice.revealed=false;
  if(control==='practiceOpen')app.state.practice.open=false;
  if(control==='practiceAccept')app.state.practice.leader=false;
  const before=JSON.stringify(app.state);app.click(control);
  assert.equal(JSON.stringify(app.state),before,role+' '+control+' rejects wrong phase '+currentPhase+' without mutation');
  assert.deepEqual(app.calls,{practice:0,all:0,saves:0},role+' wrong-phase practice control does not render or save');
 }
}
const instructorPractice=practiceHarness('instructor'),practiceScored=instructorPractice.scored();
for(const control of ['practiceOpen','practiceAccept','practiceClose','toPlanning']){
 const before=JSON.stringify(instructorPractice.state);instructorPractice.click(control);
 assert.equal(JSON.stringify(instructorPractice.state),before,'Instructor '+control+' cannot skip an unfinished practice prerequisite');
}
for(const [control,expected] of [
 ['practiceReveal',{revealed:true,open:false,leader:false,closed:false}],
 ['practiceOpen',{revealed:true,open:true,leader:false,closed:false}],
 ['practiceAccept',{revealed:true,open:true,leader:true,closed:false}],
 ['practiceClose',{revealed:true,open:false,leader:true,closed:true}],
]){
 instructorPractice.click(control);assert.deepEqual(JSON.parse(JSON.stringify(instructorPractice.state.practice)),expected,'Instructor '+control+' produces only the expected tutorial substate');
 const before=JSON.stringify(instructorPractice.state);instructorPractice.click(control);assert.equal(JSON.stringify(instructorPractice.state),before,'Repeated '+control+' is state-idempotent');
 assert.equal(instructorPractice.scored(),practiceScored,'Instructor tutorial does not alter scored play');
}
for(const control of ['practiceReveal','practiceOpen','practiceAccept','practiceClose']){const before=JSON.stringify(instructorPractice.state);instructorPractice.click(control);assert.equal(JSON.stringify(instructorPractice.state),before,'Closed tutorial cannot be reopened by '+control)}
for(const flags of [[false,false,false,false],[true,false,false,false],[true,true,false,false],[true,true,true,false],[true,false,true,true]]){
 const app=practiceHarness('instructor');app.state.practice=Object.fromEntries(['revealed','open','leader','closed'].map((key,index)=>[key,flags[index]]));const scoredBefore=app.scored();
 app.click('practiceReset');assert.deepEqual(JSON.parse(JSON.stringify(app.state.practice)),{revealed:false,open:false,leader:false,closed:false},'Practice reset clears each valid tutorial stage');assert.equal(app.state.phase,'practice');assert.equal(app.scored(),scoredBefore,'Instructor tutorial reset preserves scored and private state');
}
instructorPractice.click('toPlanning');assert.equal(instructorPractice.state.phase,'planning');
assert.deepEqual(JSON.parse(JSON.stringify(instructorPractice.state.practice)),{revealed:false,open:false,leader:false,closed:false});
assert.equal(instructorPractice.scored(),practiceScored,'Instructor planning exit discards only tutorial state');
const practiceEntry=practiceHarness('instructor','setup');practiceEntry.state.practice.closed=true;practiceEntry.click('startTutorialBtn');assert.equal(practiceEntry.state.phase,'practice');assert.equal(practiceEntry.state.practice.closed,false,'Entering practice resets the prior tutorial');
const noSessionPractice=practiceHarness('instructor','setup');noSessionPractice.state.sessionCode=null;const noSessionBefore=JSON.stringify(noSessionPractice.state);noSessionPractice.click('startTutorialBtn');assert.equal(JSON.stringify(noSessionPractice.state),noSessionBefore,'Practice needs a generated session');
const studentPractice=practiceHarness('student'),studentPracticeScored=studentPractice.scored();
studentPractice.click('toPlanning');assert.equal(studentPractice.state.phase,'practice','Student must record practice before planning');
studentPractice.click('practiceRecord');assert.equal(studentPractice.state.practiceWon,true);
const repeatedPracticeBefore=JSON.stringify(studentPractice.state),repeatedPracticeCalls=JSON.stringify(studentPractice.calls);studentPractice.click('practiceRecord');assert.equal(JSON.stringify(studentPractice.state),repeatedPracticeBefore);assert.equal(JSON.stringify(studentPractice.calls),repeatedPracticeCalls,'Repeated student training win does not save or render again');
studentPractice.click('practiceReset');assert.equal(studentPractice.state.practiceWon,false);assert.equal(studentPractice.scored(),studentPracticeScored,'Student reset affects no purchase or private plan');
studentPractice.click('practiceRecord');studentPractice.click('toPlanning');assert.equal(studentPractice.state.phase,'planning');assert.equal(studentPractice.state.practiceWon,false);assert.equal(studentPractice.scored(),studentPracticeScored,'Training win is discarded, never charged to scored inventory');
console.log('Instructor/student practice command prerequisites, wrong-phase rejection and scored-state isolation PASS');
// R02/R09/R10, T03/T10/T11: actual field callbacks obey editing scope and loader bounds.
function studentEditHarness(phase='planning'){
 const state={phase,lockedMission:null,plan:'original plan',risks:'original risks',maxWtpCents:85000000,profitMode:'AMOUNT',profitInput:'250000',profitCents:25000000};
 const elements={},calls={saved:0,rendered:0,notices:[]};
 const $=key=>elements[key]||(elements[key]={value:''});
 const bindings=['plan','risks','maxWtp','profitInput'].map(id=>studentSource.split('\n').find(line=>line.startsWith('$("#'+id+'").on'))).join('\n');
 runInNewContext(sharedEngineSource+'\n'+bindings,{state,$,saveState:()=>calls.saved++,renderSubmit:()=>calls.rendered++,seaNotify:key=>calls.notices.push(key),t:key=>key});
 const edit=(id,value)=>{const e=$('#'+id);e.value=value;(e.oninput||e.onchange)({target:e})};
 return {state,calls,edit,elements};
}
for(const phase of ['setup','practice','planning','auction','build','submit','debrief','closed'])for(const id of ['plan','risks','maxWtp','profitInput']){
 const allowed=id==='profitInput'?phase==='submit':phase==='planning';if(allowed)continue;
 const app=studentEditHarness(phase),before=JSON.stringify(app.state);app.edit(id,id==='maxWtp'?'900000':'changed');
 assert.equal(JSON.stringify(app.state),before,'Student '+id+' rejects editing during '+phase);assert.equal(app.calls.saved,0);assert.equal(app.calls.rendered,0);
}
for(const id of ['plan','risks']){
 const app=studentEditHarness();app.edit(id,'a'.repeat(1200));assert.equal(app.state[id].length,1200);
 const before=JSON.stringify(app.state);app.edit(id,'b'.repeat(1201));assert.equal(JSON.stringify(app.state),before,'Overlong '+id+' cannot create an unrecoverable save');assert.equal(app.elements['#'+id].value,app.state[id]);
 const locked=studentEditHarness();locked.state.lockedMission='COMBAT';const lockedBefore=JSON.stringify(locked.state);locked.edit(id,'changed');assert.equal(JSON.stringify(locked.state),lockedBefore,'Locked planning field cannot mutate');
}
const wtpEdit=studentEditHarness();wtpEdit.edit('maxWtp','900000');assert.equal(wtpEdit.state.maxWtpCents,90000000,'WTP retains whole-dollar semantics');const wtpBefore=JSON.stringify(wtpEdit.state);wtpEdit.edit('maxWtp','-1');assert.equal(JSON.stringify(wtpEdit.state),wtpBefore);
const profitEdit=studentEditHarness('submit');profitEdit.edit('profitInput','-');assert.equal(profitEdit.state.profitInput,'-','Incomplete profit draft survives typing for validation feedback');const profitBefore=JSON.stringify(profitEdit.state);profitEdit.edit('profitInput','1'.repeat(21));assert.equal(JSON.stringify(profitEdit.state),profitBefore,'Profit text cannot exceed schema-3 bounds');
console.log('Student editing phase, lock and save-boundary examples PASS');
function submissionConfirmationHarness(){
 const state={phase:'submit',sessionCode:'SEA3-T2-0123456789ABCDEF',privateEntry:false,teams:[{id:1,submitted:true,profit:0},{id:2,submitted:false,profit:0}]};
 const elements={},calls={renders:0,saves:0,notices:[],pending:null,approved:null};
 const $=key=>elements[key]||(elements[key]={textContent:'',click(){return this.onclick()}});
 const bindings=['privateSubmitBtn','closeSubmissionsBtn'].map(id=>instructorSource.split('\n').find(line=>line.startsWith('$("#'+id+'").onclick='))).join('\n');
 const named=['openPrivateSubmissions','closeSubmissions'].filter(name=>instructorSource.includes('function '+name+'(')).map(name=>extractFunction(instructorSource,name)).join('\n');
 runInNewContext(sharedEngineSource+'\n'+extractFunction(instructorSource,'phase')+'\n'+named+'\n'+bindings,{state,$,$$:()=>[],t:key=>key,seaNotify:key=>calls.notices.push(key),seaConfirmGate(key,message,retry){if(calls.approved===key){calls.approved=null;return true}calls.pending={key,retry};return false},renderSubmit:()=>calls.renders++,renderAll:()=>calls.renders++,saveState:()=>calls.saves++,window:{scrollTo(){}},document:{querySelector:()=>null}});
 const approve=()=>{const pending=calls.pending;calls.approved=pending.key;try{return pending.retry()}finally{calls.approved=null}};
 return {state,calls,click:id=>$('#'+id).click(),approve};
}
for(const id of ['privateSubmitBtn','closeSubmissionsBtn']){
 const app=submissionConfirmationHarness(),before=JSON.stringify(app.state);app.click(id);assert.equal(JSON.stringify(app.state),before,'Submission confirmation waits without mutation');assert.ok(app.calls.pending);
 app.approve();assert.equal(id==='privateSubmitBtn'?app.state.privateEntry:app.state.phase,id==='privateSubmitBtn'?true:'debrief','Unchanged confirmed action succeeds');
 const after=JSON.stringify(app.state);app.approve();assert.equal(JSON.stringify(app.state),after,'Repeated confirmation cannot apply twice');
 for(const mutation of [state=>state.sessionCode='SEA3-T2-FFFFFFFFFFFFFFFF',state=>state.teams[1].submitted=true,state=>state.teams[0].profit=5000000,state=>state.phase='build']){
  const stale=submissionConfirmationHarness();stale.click(id);mutation(stale.state);const current=JSON.stringify(stale.state);stale.approve();assert.equal(JSON.stringify(stale.state),current,'Stale '+id+' cannot accept changed session or submissions');
 }
 for(const phase of ['setup','practice','planning','auction','build','debrief','closed']){const wrong=submissionConfirmationHarness();wrong.state.phase=phase;const before=JSON.stringify(wrong.state);wrong.click(id);assert.equal(JSON.stringify(wrong.state),before);assert.equal(wrong.calls.pending,null,'Wrong-phase submission action cannot open confirmation')}
}
const allSubmitted=submissionConfirmationHarness();allSubmitted.state.teams.forEach(team=>team.submitted=true);allSubmitted.click('closeSubmissionsBtn');assert.equal(allSubmitted.state.phase,'debrief');assert.equal(allSubmitted.calls.pending,null,'All submitted teams require no redundant warning');
console.log('Instructor submission confirmation stale-state and repeat boundaries PASS');
function instructorSubmissionEditHarness(){
 const state={phase:'submit',sessionCode:'SEA3-T2-0123456789ABCDEF',privateEntry:true,teams:[{id:1,mission:'COMBAT',cost:30000000,profit:10000000,submitted:false}]};
 const profit={dataset:{profitTeam:'1'},value:'150000',isConnected:true},submitted={dataset:{submittedTeam:'1'},checked:true,isConnected:true},elements={},calls={saves:0,notices:[]};
 const $=key=>elements[key]||(elements[key]={classList:{toggle(){}},innerHTML:''});
 const $$=key=>key==='[data-profit-team]'?[profit]:key==='[data-submitted-team]'?[submitted]:[];
 runInNewContext(sharedEngineSource+'\n'+extractFunction(instructorSource,'amountInput')+'\n'+extractFunction(instructorSource,'renderSubmit')+'\nrenderSubmit()',{state,lang:'en',$,$$,t:key=>key,esc:String,money:String,saveState:()=>calls.saves++,seaNotify:key=>calls.notices.push(key)});
 return {state,profit,submitted,calls,elements};
}
for(const control of ['profit','submitted']){
 const live=instructorSubmissionEditHarness();live[control].onchange();assert.equal(control==='profit'?live.state.teams[0].profit:live.state.teams[0].submitted,control==='profit'?15000000:true,'Connected private submission input applies');
 if(control==='submitted'){
  assert.match(live.elements['#submissionRows'].innerHTML,/<span>submit.submitted<\/span>/,'Checkbox updates adjacent derived status immediately');assert.match(live.elements['#submissionRows'].innerHTML,/data-submitted-team="1" checked/,'Projected semantic checkbox matches saved submission');assert.equal(live.calls.saves,1,'Checkbox change saves exactly once');
  live.submitted.checked=false;live.submitted.onchange();assert.equal(live.state.teams[0].submitted,false,'A connected submission checkbox remains editable');assert.match(live.elements['#submissionRows'].innerHTML,/<span>debrief.notSubmitted<\/span>/,'Unchecking restores adjacent not-submitted status');assert.doesNotMatch(live.elements['#submissionRows'].innerHTML,/data-submitted-team="1" checked/);assert.equal(live.calls.saves,2,'Each checkbox change saves once');
 }
 for(const change of [app=>app.state.teams=app.state.teams.map(team=>({...team})),app=>app.state.sessionCode='SEA3-T2-FFFFFFFFFFFFFFFF',app=>app.state.teams=[],app=>app.state.privateEntry=false,app=>app.state.phase='debrief',app=>app[control].isConnected=false]){
  const stale=instructorSubmissionEditHarness();change(stale);const before=JSON.stringify(stale.state);stale[control].onchange();assert.equal(JSON.stringify(stale.state),before,'Delayed '+control+' input rejects replacement/missing team, session, phase, privacy or detached element');assert.equal(stale.calls.saves,0);
 }
}
const badSubmissionMoney=instructorSubmissionEditHarness();const submissionBefore=JSON.stringify(badSubmissionMoney.state);badSubmissionMoney.profit.value='-1';badSubmissionMoney.profit.onchange();assert.equal(JSON.stringify(badSubmissionMoney.state),submissionBefore);assert.equal(badSubmissionMoney.profit.value,'100000');
console.log('Instructor submission input team/session identity and projection guards PASS');
// Render canonical team data through real native disclosures; disclosure is presentation state.
{
 const i18n=runInNewContext(instructorSource.match(/const I18N=([^\n]+);/)[0]+';I18N',{});
 const api=runInNewContext(sharedEngineSource+';({createTeams,acquire,CARD_INDEX})');
 for(const lang of ['en','fr']){
  const teams=api.createTeams({teamCount:10});for(const team of teams)team.mission='COMBAT';
  const card=api.CARD_INDEX.get('CAP-A');api.acquire(teams[0],{...card,round:1,lot:1},card.start);
  const state={phase:'build',sessionCode:'SEA3-T10-0123456789ABCDEF',teams},before=JSON.stringify(state),host={innerHTML:'',openNodes:[],querySelectorAll(){return this.openNodes}},calls={saves:0};
  const translate=(key,vars={})=>Object.entries(vars).reduce((text,[k,v])=>text.replaceAll('{'+k+'}',v),i18n[lang][key]);
  const render=runInNewContext(sharedEngineSource+'\n'+extractFunction(instructorSource,'renderBuild')+';renderBuild',{state,lang,$:()=>host,t:translate,esc:String,money:String,saveState:()=>calls.saves++});
  render();const details=[...host.innerHTML.matchAll(/<details([^>]*)><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)];assert.equal(details.length,10,'All ten teams remain directly selectable');
  for(const [i,match] of details.entries()){
   assert.doesNotMatch(match[1],/\bopen\b/,'Initial team disclosure is collapsed');
   for(const key of ['common.team','common.noncompliant','common.cost','common.score','build.purchases'])assert.ok(match[2].includes(translate(key,{n:i+1})),lang+' canonical summary includes '+key);
   assert.ok(match[3].includes('purchase-list'),'Full ledger stays inside disclosure');assert.ok(match[3].includes('effects'),'Every exact capacity remains available');assert.ok(match[3].includes(translate('build.shortfalls',{items:''}).split(':')[0]),'Shortfall explanation retained');
  }
  assert.ok(details[0][3].includes('CAP-A'));assert.ok(details[0][3].includes(card.title[lang]),'Canonical purchased title retained');
  host.openNodes=[{dataset:{buildTeam:'2'}},{dataset:{buildTeam:'7'}}];render();assert.match(host.innerHTML,/data-build-team="2" open/);assert.match(host.innerHTML,/data-build-team="7" open/,'Multiple native disclosures survive same-session rerender');assert.doesNotMatch(host.innerHTML,/data-build-team="1" open/);
  assert.equal(JSON.stringify(state),before,'Disclosure preservation never mutates business state');
  state.sessionCode='SEA3-T10-FEDCBA9876543210';render();assert.doesNotMatch(host.innerHTML,/<details[^>]*\bopen\b/,'New session resets presentation disclosure');assert.equal(calls.saves,3,'Existing render save behavior is preserved without extra disclosure saves');
 }
}
console.log('Instructor bilingual ten-team Build summaries retain complete details and session-scoped disclosure PASS');

// R02/R10/R11, T03/T10/T11: private notes retain lot/session identity and recovery bounds.
function scratchEditHarness(phase='auction'){
 const state={phase,sessionCode:'SEA3-T2-0123456789ABCDEF',team:{id:1},round:0,lot:0,scratch:{}};
 const elements={'#wtp':{value:'',isConnected:true},'#decision':{value:'',isConnected:true},'#roundSelect':{value:''},'#lotSelect':{value:''}},calls={saves:0,notices:[]};
 const functions=['scratchKey','scratch','bindScratchInputs','renderAuction'].filter(name=>studentSource.includes('function '+name+'(')).map(name=>extractFunction(studentSource,name)).join('\n');
 const binding=studentSource.includes('function bindScratchInputs(')?'bindScratchInputs()':studentSource.split('\n').filter(line=>line.startsWith('$("#wtp").onchange=')||line.startsWith('$("#decision").oninput=')).join('\n');
 const api=runInNewContext(sharedEngineSource+'\n'+functions+'\n'+binding+';\n({renderAuction})',{state,$:key=>elements[key],renderCard(){},renderGaps(){},renderSnapshot(){},saveState:()=>calls.saves++,seaNotify:key=>calls.notices.push(key),t:key=>key});
 const handlers={wtp:elements['#wtp'].onchange,note:elements['#decision'].oninput};
 return {state,calls,elements,render:()=>api.renderAuction(),edit:(kind,value)=>{const target=elements[kind==='wtp'?'#wtp':'#decision'];target.value=value;handlers[kind]({target})}};
}
for(const kind of ['wtp','note']){
 for(const phase of ['setup','practice','planning','build','submit','debrief','closed']){const app=scratchEditHarness(phase),before=JSON.stringify(app.state);app.edit(kind,kind==='wtp'?'350000':'private note');assert.equal(JSON.stringify(app.state),before,'Private '+kind+' cannot edit during '+phase);assert.equal(app.calls.saves,0)}
 for(const change of [app=>app.state.lot=1,app=>app.state.round=1,app=>app.state.sessionCode='SEA3-T2-FFFFFFFFFFFFFFFF',app=>app.state.team={id:1},app=>app.elements[kind==='wtp'?'#wtp':'#decision'].isConnected=false]){const app=scratchEditHarness();change(app);const before=JSON.stringify(app.state);app.edit(kind,kind==='wtp'?'350000':'stale note');assert.equal(JSON.stringify(app.state),before,'Delayed scratch input cannot retarget another lot/session/team');assert.equal(app.calls.saves,0)}
}
const scratchMoney=scratchEditHarness();const emptyScratch=JSON.stringify(scratchMoney.state);scratchMoney.edit('wtp','-1');assert.equal(JSON.stringify(scratchMoney.state),emptyScratch,'Rejected WTP never creates scratch state');scratchMoney.edit('wtp','350000');assert.equal(scratchMoney.state.scratch['1-1'].wtp,'350000','WTP remains advisory whole dollars');
const scratchNote=scratchEditHarness();scratchNote.edit('note','n'.repeat(600));assert.equal(scratchNote.state.scratch['1-1'].note.length,600);const fullNote=JSON.stringify(scratchNote.state);scratchNote.edit('note','x'.repeat(601));assert.equal(JSON.stringify(scratchNote.state),fullNote,'Note overflow cannot make the next reload fail');assert.equal(scratchNote.elements['#decision'].value,'n'.repeat(600));
const scratchView=scratchEditHarness();const beforeScratchView=JSON.stringify(scratchView.state);scratchView.render();assert.equal(JSON.stringify(scratchView.state),beforeScratchView,'Rendering an untouched lot cannot create a private scratch record');
console.log('Student scratch editing phase, lot/session identity and bounds PASS');
function vehicleTransitionHarness(role){
 const state={phase:'planning',sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,vehiclesLocked:false,revealMode:'MANUAL',round:0,lot:0,teams:[{id:1,mission:'COMBAT',lockedMission:null,purchases:[]},{id:2,mission:'RECCE',lockedMission:null,purchases:[]}],team:{id:1,mission:'COMBAT',lockedMission:null,purchases:[]},lockedMission:null,vehicleConfirmed:true,plan:'independent plan',planBaseline:null};
 const calls={saves:0,renders:0,notices:[]},source=role==='instructor'?instructorSource:studentSource;
 const names=role==='instructor'?['phase','choicesEditable','setTeamVehicle','allChosen','startScoredAuction']:['phase','setStudentVehicle','startStudentAuction'];
 const api=runInNewContext(sharedEngineSource+'\n'+names.map(name=>extractFunction(source,name)).join('\n')+'\n({start:'+(role==='instructor'?'startScoredAuction':'startStudentAuction')+',choose:'+(role==='instructor'?'setTeamVehicle':'setStudentVehicle')+'})',{state,$:()=>({textContent:''}),$$:()=>[],saveState:()=>calls.saves++,renderAll:()=>calls.renders++,seaNotify:key=>calls.notices.push(key),t:key=>key,window:{scrollTo(){}},document:{querySelector:()=>null}});
 return {state,calls,api};
}
for(const role of ['instructor','student']){
 const app=vehicleTransitionHarness(role);assert.equal(app.api.start(),true);assert.equal(app.state.phase,'auction');
 if(role==='instructor'){assert.deepEqual(app.state.teams.map(team=>team.lockedMission),['COMBAT','RECCE']);assert.equal(app.state.revealed,false,'MANUAL auction begins hidden')}
 else{assert.equal(app.state.lockedMission,'COMBAT');assert.equal(app.state.team.lockedMission,'COMBAT');assert.equal(app.state.planBaseline,'independent plan')}
 const before=JSON.stringify(app.state);assert.equal(app.api.start(),false);assert.equal(role==='instructor'?app.api.choose(1,'RECCE'):app.api.choose('RECCE'),false);assert.equal(JSON.stringify(app.state),before,'Auction locks vehicle choice and repeated entry');
 const incomplete=vehicleTransitionHarness(role);if(role==='instructor')incomplete.state.teams[1].mission=null;else incomplete.state.vehicleConfirmed=false;const unchanged=JSON.stringify(incomplete.state);assert.equal(incomplete.api.start(),false);assert.equal(JSON.stringify(incomplete.state),unchanged,'Missing choice/confirmation cannot enter auction');
}
const missingStudentTeam=vehicleTransitionHarness('student');missingStudentTeam.state.team=null;assert.equal(missingStudentTeam.api.choose('RECCE'),false,'Missing team is rejected without throwing');
console.log('Both-role vehicle prerequisites, locking and repeated auction entry PASS');
function assignmentInputHarness(){
 const state={phase:'planning',sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,vehiclesLocked:false,teams:[{id:1,mission:'COMBAT',purchases:[]},{id:2,mission:'RECCE',purchases:[]}]},calls={saves:0,renders:0};
 const input={dataset:{vehicleTeam:'1'},value:'RECCE',isConnected:true},target={id:'planningTeams',innerHTML:'',querySelectorAll:()=>[input]};
 runInNewContext(sharedEngineSource+'\n'+['choicesEditable','setTeamVehicle','renderAssignments'].map(name=>extractFunction(instructorSource,name)).join('\n')+'\nrenderAssignments(target)',{state,target,lang:'en',t:key=>key,esc:String,vehicleOptions:String,vehiclePreview:String,saveState:()=>calls.saves++,renderAll:()=>calls.renders++,document:{getElementById:()=>null}});
 return {state,calls,input};
}
const currentAssignment=assignmentInputHarness();currentAssignment.input.onchange();assert.equal(currentAssignment.state.teams[0].mission,'RECCE','Connected vehicle assignment still works');
for(const change of [app=>app.state.teams=app.state.teams.map(team=>({...team})),app=>app.state.sessionCode='SEA3-T2-FFFFFFFFFFFFFFFF',app=>app.input.isConnected=false,app=>app.state.vehiclesLocked=true]){const app=assignmentInputHarness();change(app);const before=JSON.stringify(app.state);app.input.onchange();assert.equal(JSON.stringify(app.state),before,'Delayed instructor assignment cannot retarget replacement session/team');assert.equal(app.calls.saves,0)}
console.log('Instructor assignment callback session/team identity guards PASS');
for(const role of ['instructor','student']){
 const template=read(role==='instructor'?'source/instructor.template.html':'source/student.template.html');
 assert.match(template,/id="startNewSessionBtn"/,role+' closed state offers a deliberate new-session action');
}
function closedResetHarness(role,{downloadFails=false,storageSetFails=false}={}){
 const source=role==='instructor'?instructorSource:studentSource,storeKey=role==='instructor'?'SEA_INSTRUCTOR_V300':'SEA_STUDENT_V300';
 const state={phase:'closed',schema:3,lang:'fr',sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,note:'preserve this private state'};
 const stored=new Map([[storeKey,'active-session-bytes']]),calls={order:[],downloads:[],statuses:[],pending:null,confirmKey:null,confirmMessage:null,renders:0,saves:0};
 const elements=Object.fromEntries(['#phaseBadge','#teamCount','#bidSeconds','#revealMode','#timingMode','#sessionInput','#teamSelect','#joinStatus'].map(key=>[key,{value:key==='#teamCount'?'4':key==='#bidSeconds'?'45':key==='#revealMode'?'MANUAL':key==='#timingMode'?'UNTIMED':'',innerHTML:'',textContent:'',className:'',dataset:{}}]));
 const progression=role==='instructor'?'generateSession':'joinCompanion';
 const functions=['phase','resetClosedSession','startNewSession',progression].map(name=>extractFunction(source,name)).join('\n');
 const context={state,lang:'fr',STORE_KEY:storeKey,storageFailed:false,recoveryBlocked:false,sessionCode:count=>'SEA3-T'+count+'-0123456789ABCDEF',randomHex:bytes=>'0123456789ABCDEF0123456789ABCDEF'.slice(0,bytes*2),$:key=>elements[key]||{value:'',innerHTML:'',textContent:'',dataset:{}},$$:()=>[],window:{scrollTo(){}},document:{querySelector:()=>null},sessionStorage:{setItem(key,value){calls.order.push('store');if(storageSetFails)throw Error('storage denied');stored.set(key,value)},removeItem(key){calls.order.push('remove');stored.delete(key)},getItem(key){return stored.get(key)||null}},seaConfirmGate(key,message,retry){calls.confirmKey=key;calls.confirmMessage=message;calls.pending=retry;return false},makeBackup(roleName,snapshot){calls.order.push('backup');return JSON.stringify({role:roleName,state:snapshot})},saveBackupDownload(raw,suffix){calls.order.push('download');if(downloadFails)throw Error('download failed');calls.downloads.push({raw,suffix,phase:state.phase})},backupStatus:key=>calls.statuses.push(key),stopTimer(){calls.order.push('stop')},saveState(){calls.saves++;return true},renderAll(){calls.renders++;calls.order.push('render')},committed:()=>false,t:key=>key};
 const app=runInNewContext(sharedEngineSource+'\n'+functions+'\n({startNewSession,progress:'+progression+',getState:()=>state})',context);
 return {app,state,stored,calls,elements,context};
}
for(const role of ['instructor','student']){
 const source=role==='instructor'?instructorSource:studentSource,template=read(role==='instructor'?'source/instructor.template.html':'source/student.template.html');
 assert.match(source,/function startNewSession\(/,role+' has a closed-session reset handler');
 assert.match(source,/\$\('#startNewSessionBtn'\)\.onclick=startNewSession/,role+' wires the closed-session reset button');
 const dictionaries=JSON.parse(source.match(/const I18N=(.*?);\n/)?.[1]);
 for(const key of ['closed.newSession','closed.newConfirm']){assert.equal(typeof dictionaries.en[key],'string',role+' supplies English closed-session reset copy');assert.equal(typeof dictionaries.fr[key],'string',role+' supplies French closed-session reset copy')}
 const app=closedResetHarness(role);const before=JSON.stringify(app.state);
 assert.equal(app.app.startNewSession(),false,role+' waits for explicit confirmation before reset');
 assert.equal(JSON.stringify(app.state),before,role+' cancellation path leaves the closed session intact');
 assert.deepEqual(app.calls.downloads,[],role+' does not export or reset before confirmation');
 assert.equal(app.calls.confirmKey,'new-session');
 assert.equal(app.calls.pending(),true,role+' confirmed reset returns to setup');
 const fresh=app.app.getState();
 assert.equal(fresh.phase,'setup');assert.equal(fresh.sessionCode,null);assert.equal(fresh.lang,'fr');
 assert.ok(app.calls.order.indexOf('download')<app.calls.order.indexOf('remove'),role+' requests a role backup before removing active storage');
 const resetCompletion=role==='instructor'?'stop':'render';assert.ok(app.calls.order.indexOf('remove')<app.calls.order.indexOf(resetCompletion),role+' removes the old stored session before reset completes');
 assert.equal(app.calls.downloads[0].suffix,'pre-reset');assert.equal(app.calls.downloads[0].phase,'closed');
 assert.equal(app.stored.get((role==='instructor'?'SEA_INSTRUCTOR_V300':'SEA_STUDENT_V300')+'_PRE_IMPORT'),app.calls.downloads[0].raw,role+' makes the previous session restorable in this tab');
 assert.ok(!app.stored.has(role==='instructor'?'SEA_INSTRUCTOR_V300':'SEA_STUDENT_V300'),role+' clears the closed save after backup');
 assert.equal(app.calls.renders,1);
 if(role==='instructor'){
  assert.equal(app.app.progress(),true,'Instructor can generate the next session after reset');
  assert.equal(app.app.getState().sessionCode,'SEA3-T4-0123456789ABCDEF');assert.equal(app.app.getState().teamCount,4);assert.equal(app.app.getState().market.length,7);assert.equal(app.app.getState().teams.length,4);
 }else{
  app.elements['#sessionInput'].value='SEA3-T4-0123456789ABCDEF';app.elements['#teamSelect'].value='2';app.elements['#vehicleSelect']={value:'COMMAND'};
  assert.equal(app.app.progress(),true,'Student can join a new companion session after reset');
  assert.equal(app.app.getState().phase,'practice');assert.equal(app.app.getState().teamId,2);assert.equal(app.app.getState().team.mission,'COMMAND');
 }
 const stale=closedResetHarness(role);assert.equal(stale.app.startNewSession(),false);stale.state.note='changed during confirmation';assert.equal(stale.calls.pending(),false,role+' stale confirmation is rejected');assert.equal(stale.app.getState().note,'changed during confirmation');assert.deepEqual(stale.calls.downloads,[]);
 const replaced=closedResetHarness(role);assert.equal(replaced.app.startNewSession(),false);const restored=structuredClone(replaced.state);replaced.context.state=restored;assert.equal(replaced.calls.pending(),false,role+' reset cannot clear an equal-byte replacement session');assert.equal(replaced.app.getState(),restored);assert.deepEqual(replaced.calls.order,[]);assert.deepEqual(replaced.calls.downloads,[]);assert.deepEqual(replaced.calls.statuses,['backup.changed']);
 const failed=closedResetHarness(role,{downloadFails:true});assert.equal(failed.app.startNewSession(),false);assert.equal(failed.calls.pending(),false,role+' download failure blocks reset');assert.equal(failed.app.getState().phase,'closed');assert.ok(failed.stored.has(role==='instructor'?'SEA_INSTRUCTOR_V300':'SEA_STUDENT_V300'));
 const denied=closedResetHarness(role,{storageSetFails:true});assert.equal(denied.app.startNewSession(),false);assert.equal(denied.calls.pending(),true,role+' can continue in memory when previous-session storage is denied');assert.equal(denied.app.getState().phase,'setup');assert.equal(denied.context.storageFailed,true);
}
console.log('Instructor/student closed-session reset confirmation, backup, stale-state and storage-failure cases PASS');
const transactionNames=['effectiveEntry','committed','liveClosing','ledgerCapacity','currentCard','appendLog','removePurchase','commitSale','voidCurrent','validateInstructorSave'];
const transactionSource=sharedEngineSource+'\n'+transactionNames.map(name=>extractFunction(instructorSource,name)).join('\n')+'\n({commitSale,voidCurrent,effectiveEntry,validateInstructorSave})';
const transactionMarketSeed='0123456789ABCDEF0123456789ABCDEF';
const transactionMarket=JSON.parse(JSON.stringify(marketFromSeed(transactionMarketSeed)));
const transactionCard=transactionMarket[0][0];
function transactionHarness({leader=1,currentBid=transactionCard.start,wins=0}={}){
 const team=id=>({id,mission:'COMBAT',lockedMission:'COMBAT',totals:{CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0},cost:0,purchases:[],purchasesByRound:[wins,0,0,0,0,0,0],profit:0,submitted:false});
 const calls={notices:[],saves:0,renders:0,stops:0};
 const state={phase:'auction',open:true,pausedRemaining:null,ledger:[],seq:0,teams:[team(1),team(2)],market:transactionMarket,round:0,lot:0,leader,currentBid,correctionReason:'',approved:null};
 const fns=runInNewContext(transactionSource,{state,calls,t:key=>key,seaNotify:key=>calls.notices.push(key),seaConfirmGate:key=>state.approved===key,saveState:()=>calls.saves++,stopTimer:()=>calls.stops++,renderAuction:()=>calls.renders++,$:()=>({value:state.correctionReason})});
 return {state,calls,fns};
}
const timerNames=['effectiveEntry','committed','liveClosing','timedOut','togglePause','extendAuction'];
const timerSource=sharedEngineSource+'\n'+timerNames.map(name=>extractFunction(instructorSource,name)).join('\n')+'\n({liveClosing,timedOut,togglePause,extendAuction})';
let timerNow=5000;
const timerState={phase:'auction',open:true,timingMode:'TIMED',deadline:15000,pausedRemaining:null,finalCallAnnounced:true,ledger:[],round:0,lot:0};
const timerCalls={stops:0,starts:[],renders:0};
const timers=runInNewContext(timerSource,{state:timerState,Date:{now:()=>timerNow},stopTimer:()=>timerCalls.stops++,startTimer:ms=>{timerCalls.starts.push(ms);timerState.deadline=timerNow+ms;timerState.pausedRemaining=null},renderAuction:()=>timerCalls.renders++});
assert.equal(timers.liveClosing(),true,'An open, uncommitted lot is live for closing');
timers.togglePause();assert.equal(timerState.pausedRemaining,10000,'Pause captures the exact remaining timed window');assert.equal(timerCalls.stops,1);
assert.equal(timers.timedOut(),false,'A paused lot is not treated as expired');
timers.extendAuction();assert.equal(timerState.pausedRemaining,40000,'Paused extension adds exactly thirty seconds');assert.equal(timerState.finalCallAnnounced,false);
timers.togglePause();assert.equal(timerState.pausedRemaining,null);assert.deepEqual(timerCalls.starts,[40000],'Resume restarts from the captured and extended remainder');
assert.equal(timerState.deadline,45000);
timerNow=45000;assert.equal(timers.timedOut(),true,'Timed auction expires at its exact deadline');
timers.togglePause();assert.equal(timerState.pausedRemaining,0,'Pausing at expiry preserves a zero remainder');assert.equal(timers.timedOut(),false);
timers.togglePause();assert.deepEqual(timerCalls.starts,[40000,0],'Resuming an expired timer stays at zero');
timers.extendAuction();assert.deepEqual(timerCalls.starts,[40000,0,30000],'Extending an expired running lot requests a fresh thirty seconds');assert.equal(timerState.deadline,75000);
timerState.timingMode='UNTIMED';timerState.deadline=null;timerState.pausedRemaining=null;const startsBeforeUntimed=timerCalls.starts.length;
timers.togglePause();assert.equal(timerState.pausedRemaining,0,'Untimed pause records a stable facilitator pause state');timers.togglePause();assert.equal(timerCalls.starts.length,startsBeforeUntimed,'Untimed resume does not start a clock');
timerState.timingMode='TIMED';timerState.pausedRemaining=null;timerState.open=false;const beforeClosed=JSON.stringify(timerState);timers.extendAuction();assert.equal(JSON.stringify(timerState),beforeClosed,'A closed lot cannot be extended');
timerState.open=true;timerState.deadline=timerNow+10000;timerState.pausedRemaining=null;timerState.ledger=[{kind:'UNSOLD',round:1,lot:1}];const beforeCommitted=JSON.stringify(timerState),startsBeforeCommit=timerCalls.starts.length;
assert.equal(timers.liveClosing(),false,'A committed lot is no longer live');timers.togglePause();timers.extendAuction();assert.equal(JSON.stringify(timerState),beforeCommitted,'Committed results cannot be paused or extended');assert.equal(timerCalls.starts.length,startsBeforeCommit);
console.log('Instructor timer pause/resume/extension and exact-expiry boundary examples PASS');
const intervalNames=['stopTimer','timedOut','timerText','startTimer'];
const intervalSource=sharedEngineSource+'\n'+intervalNames.map(name=>extractFunction(instructorSource,name)).join('\n')+'\n({stopTimer,startTimer})';
let intervalNow=10000,intervalId=0;
const intervals=new Map(),intervalCalls={cleared:[],announcements:[],renders:0,timerValues:[]};
const intervalState={phase:'auction',open:true,timingMode:'TIMED',deadline:null,pausedRemaining:null,finalCallAnnounced:false};
const intervalElements={'#timerAnnouncement':{set textContent(value){intervalCalls.announcements.push(value)}},'#timerValue':{set textContent(value){intervalCalls.timerValues.push(value)}}};
const intervalFns=runInNewContext(intervalSource,{state:intervalState,Date:{now:()=>intervalNow},timerHandle:null,setInterval:(fn,ms)=>{const id=++intervalId;intervals.set(id,{fn,ms});return id},clearInterval:id=>{intervalCalls.cleared.push(id);intervals.delete(id)},$:selector=>intervalElements[selector],t:key=>key,renderAuction:()=>intervalCalls.renders++});
intervalFns.startTimer(10000);assert.equal(intervalState.deadline,20000);assert.equal(intervals.size,1);assert.equal([...intervals.values()][0].ms,250,'Timer callback is scheduled at the expected UI cadence');
const tick=[...intervals.values()][0].fn;intervalNow=14999;tick();assert.equal(intervalState.finalCallAnnounced,false,'Final call is not announced before the five-second boundary');
intervalNow=15000;tick();assert.equal(intervalState.finalCallAnnounced,true,'Final call is announced at the five-second boundary');assert.deepEqual(intervalCalls.announcements,['auction.finalCall']);
intervalNow=19999;tick();assert.deepEqual(intervalCalls.announcements,['auction.finalCall'],'Final call is announced only once');
intervalNow=20000;tick();assert.deepEqual(intervalCalls.cleared,[1],'Expiry clears the active interval');assert.equal(intervals.size,0);assert.equal(intervalCalls.announcements[1],'auction.windowEnded');assert.equal(intervalCalls.renders,1,'Expiry renders the instructor-controlled close state');
intervalState.open=true;intervalState.phase='auction';intervalNow=30000;intervalFns.startTimer(5000);const staleTick=[...intervals.values()][0].fn;intervalState.open=false;staleTick();assert.equal(intervals.size,0,'A callback after lot closure clears itself');assert.deepEqual(intervalCalls.cleared,[1,2]);
intervalState.open=true;intervalState.timingMode='TIMED';intervalFns.startTimer(4000);assert.equal(intervals.size,1);intervalState.timingMode='UNTIMED';intervalFns.startTimer(9000);assert.equal(intervals.size,0,'Untimed mode creates no timer interval');assert.equal(intervalCalls.cleared.at(-1),3,'Switching away from timed mode clears a prior handle');
console.log('Instructor timer callback cadence, final-call, expiry and cleanup examples PASS');

// A real hosted commit left the expired-window instruction and ready-to-commit
// message visible after the ledger result. Exercise the actual renderer.
{
 const nodes=new Map(),node=id=>{if(!nodes.has(id))nodes.set(id,{textContent:'',value:'',disabled:false,innerHTML:''});return nodes.get(id);};
 const state={leader:2,currentBid:40000000,resultDraft:null,pausedRemaining:null,open:false,timingMode:'TIMED',phase:'auction',round:0,revealMode:'ROUND',revealed:true,teams:[{id:2,purchasesByRound:[1]}]};
 let entry={kind:'SALE',team:2,price:40000000};
 const render=runInNewContext(extractFunction(instructorSource,'renderCommitControls')+'\nrenderCommitControls',{state,visibleLot:()=>true,nextOffer:()=>45000000,effectiveEntry:()=>entry,amountInput:n=>String(n/100),money:n=>String(n/100),t:(key,values)=>key+JSON.stringify(values||{}),timerText:()=>'-',liveClosing:()=>state.phase==='auction'&&state.open&&!entry&&state.pausedRemaining===null,biddingActive:()=>state.phase==='auction'&&state.open&&!entry&&state.pausedRemaining===null&&!state.expired,committed:()=>!!entry,SEA_AUCTION:{canWin:n=>n<2},$:s=>node(s.slice(1)),document:{getElementById:node},saveState(){}});
 node('timerAnnouncement').textContent='auction.windowEnded';render();
 assert.equal(node('timerAnnouncement').textContent,'','Committed lot clears stale expiry instruction');
 assert.equal(node('commitSummary').textContent,node('commitStatus').textContent,'Committed result replaces ready-to-commit summary');
 assert.match(node('commitSummary').textContent,/auction.committed/);
 assert.equal(node('nextBid').textContent,'-','Committed result has no legal next bid');
 assert.equal(node('nextBidMetric').hidden,true,'Committed result excludes next-bid metric');
 assert.equal(node('preCommitCorrection').hidden,true,'Precommit correction instruction is absent after commitment');
 assert.equal(node('postCommitCorrection').hidden,false,'Committed result retains facilitator void correction');assert.equal(node('correctionReason').disabled,false,'Committed void reason remains editable');assert.equal(node('voidCurrentBtn').disabled,false,'Validated postcommit void command remains reachable');
 for(const id of ['winnerSelect','finalPrice','saleCorrectionReason'])assert.equal(node(id).disabled,true,'Committed draft input is disabled: '+id);
 const committedBefore=JSON.stringify(state);node('finalPrice').value='999';node('finalPrice').oninput();assert.equal(JSON.stringify(state),committedBefore,'Stale draft input cannot mutate committed state');
 entry={kind:'UNSOLD'};render();assert.match(node('commitSummary').textContent,/auction.unsoldCommitted/);
 entry=null;state.open=true;node('timerAnnouncement').textContent='auction.finalCall';render();
 assert.equal(node('timerAnnouncement').textContent,'auction.finalCall','Active timer announcement remains available');
 assert.match(node('commitSummary').textContent,/auction.commitReady/);
 assert.equal(node('nextBid').textContent,'450000','Live bidding shows exact next legal bid');assert.equal(node('nextBidMetric').hidden,false);
 assert.equal(node('preCommitCorrection').hidden,false);assert.equal(node('postCommitCorrection').hidden,true);assert.equal(node('correctionReason').disabled,true);assert.equal(node('voidCurrentBtn').disabled,true);
 for(const id of ['winnerSelect','finalPrice','saleCorrectionReason'])assert.equal(node(id).disabled,false);
 node('finalPrice').value='410000';node('finalPrice').oninput();assert.equal(state.resultDraft.price,'410000','Live closing keeps editable native correction draft');
 for(const closed of [{open:false},{open:true,pausedRemaining:1000},{open:true,pausedRemaining:null,expired:true}]){
  Object.assign(state,{open:true,pausedRemaining:null,expired:false},closed);render();assert.equal(node('nextBidMetric').hidden,true,'Unavailable bidding omits next legal bid');
  if(!state.open||state.pausedRemaining!==null){assert.equal(node('preCommitCorrection').hidden,true);const before=JSON.stringify(state);node('winnerSelect').oninput();assert.equal(JSON.stringify(state),before,'Unavailable closing rejects stale native draft callback')}
 }
 state.expired=false;state.open=true;state.pausedRemaining=null;state.phase='build';render();assert.equal(node('preCommitCorrection').hidden,true);assert.equal(node('postCommitCorrection').hidden,true);
}
for(const [id,label] of [['nextBidMetric','auction.nextLegal'],['preCommitCorrection','auction.correct'],['postCommitCorrection','auction.correction']]){
 const template=read('source/instructor.template.html');assert.match(template,new RegExp('<(?:div|details) id="'+id+'"[^>]*>[\\s\\S]*?data-i18n="'+label+'"'),'State visibility host retains native localized heading: '+id);
}
console.log('Instructor actual commit renderer gates next bid, precommit drafts and postcommit correction by canonical availability PASS');
// Exercise the real roster with real EN/FR translations, not structural label checks.
{
 const i18n=runInNewContext(instructorSource.match(/const I18N=([^\n]+);/)[0]+';I18N',{});
 for(const lang of ['en','fr'])for(const fixture of [
  {name:'ready',open:false,key:'common.ready'},
  {name:'paused',open:true,pausedRemaining:3000,key:'auction.paused'},
  {name:'expired',open:true,expired:true,key:'auction.timeExpired'},
  {name:'sale',open:false,entry:{kind:'SALE',team:1,price:40000000},key:'auction.committed'},
  {name:'unsold',open:false,entry:{kind:'UNSOLD'},key:'auction.unsoldCommitted'},
  {name:'build',phase:'build',open:false,key:'phase.build'},
  {name:'live',open:true,live:true,key:'auction.accept'}
 ]){
  const state={phase:'auction',open:fixture.open,pausedRemaining:null,leader:1,currentBid:40000000,round:0,teams:[{id:1,mission:'COMBAT',purchasesByRound:[1]},{id:2,mission:'RECCE',purchasesByRound:[0]}],...fixture};
  const roster={innerHTML:''},buttons=[];
  const translate=(key,vars={})=>Object.entries(vars).reduce((text,[k,v])=>text.replaceAll('{'+k+'}',v),i18n[lang][key]);
  const render=runInNewContext(extractFunction(instructorSource,'renderBidRoster')+';renderBidRoster',{state,lang,nextOffer:()=>45000000,biddingActive:()=>!!fixture.live,effectiveEntry:()=>fixture.entry||null,timedOut:()=>!!fixture.expired,timerText:()=>translate('auction.paused',{seconds:3}),t:translate,money:n=>String(n/100),esc:String,MISSIONS:{COMBAT:{en:'Combat',fr:'Combat'},RECCE:{en:'Recon',fr:'Reconnaissance'}},SEA_AUCTION:{canWin:n=>n<2},$:()=>roster,$$:()=>buttons,acceptTeamBid(){}});
  render();const matches=[...roster.innerHTML.matchAll(/<button[^>]*data-bid-amount="([^"]*)"([^>]*)>([^<]*)<\/button>/g)];assert.equal(matches.length,2);
  for(const match of matches){assert.equal(match[1],fixture.live?'45000000':'',lang+' '+fixture.name+' exposes offer dataset only during live bidding');if(!fixture.live)assert.match(match[2],/disabled/)}
  const expected=translate(fixture.key,{seconds:3,team:1,amount:fixture.live?'450000':'400000'});
  assert.ok(matches[1][3].includes(expected),lang+' '+fixture.name+' nonleader shows authoritative status');
  if(!fixture.live)assert.ok(!roster.innerHTML.includes(translate('auction.accept',{amount:'450000'})),lang+' '+fixture.name+' does not advertise unavailable offer');
  assert.ok(roster.innerHTML.includes(lang==='en'?'Recon':'Reconnaissance'),'Mission context retained');assert.match(roster.innerHTML,/bid-team-meta/);
 }
}
console.log('Instructor actual bilingual roster distinguishes ready, paused, expired, committed and live bidding PASS');
const bidNames=['effectiveEntry','committed','timedOut','biddingActive','currentCard','nextOffer','acceptTeamBid'];
const bidSource=sharedEngineSource+'\n'+bidNames.map(name=>extractFunction(instructorSource,name)).join('\n')+'\n({biddingActive,currentCard,nextOffer,acceptTeamBid})';
let bidNow=1000;
function bidHarness({phase='auction',vehiclesLocked=true,open=true,pausedRemaining=null,timingMode='UNTIMED',deadline=null,leader=null,currentBid=null,wins1=0,wins2=0,mission1='COMBAT',mission2='COMBAT',ledger=[]}={}){
 const team=(id,mission,wins)=>({id,mission,cost:0,purchasesByRound:[wins,0,0,0,0,0,0]});
 const state={phase,vehiclesLocked,open,pausedRemaining,timingMode,deadline,leader,currentBid,ledger,round:0,lot:0,market:transactionMarket,teams:[team(1,mission1,wins1),team(2,mission2,wins2)]};
 const calls={notices:[],renders:0};
 const fns=runInNewContext(bidSource,{state,Date:{now:()=>bidNow},calls,APP:{bidIncrementCents:5000000},t:key=>key,seaNotify:key=>calls.notices.push(key),renderAuction:()=>calls.renders++});
 return {state,calls,fns};
}
const validBid=bidHarness(),openingOffer=transactionCard.start;
assert.equal(validBid.fns.nextOffer(),openingOffer,'The first legal bid is the current lot starting price');
assert.equal(validBid.fns.acceptTeamBid(1,openingOffer),true,'A locked, eligible team can accept the exact opening bid');
assert.equal(validBid.state.leader,1);assert.equal(validBid.state.currentBid,openingOffer);assert.equal(validBid.calls.renders,1);
const afterFirstBid=JSON.stringify(validBid.state);
assert.equal(validBid.fns.acceptTeamBid(1,openingOffer+5000000),false,'The current leader cannot accept a second call as a new bid');
assert.equal(JSON.stringify(validBid.state),afterFirstBid,'Rejected same-team bid is mutation-free');
assert.equal(validBid.fns.acceptTeamBid(2,openingOffer),false,'A stale UI price is rejected after another bid changes the offer');
assert.equal(JSON.stringify(validBid.state),afterFirstBid,'Stale-price rejection leaves the accepted leader unchanged');
assert.deepEqual(validBid.calls.notices,['errors.stale']);
assert.equal(validBid.fns.nextOffer(),openingOffer+5000000);
assert.equal(validBid.fns.acceptTeamBid(2,openingOffer+5000000),true,'The next team can accept the exact incremented offer');
assert.equal(validBid.state.leader,2);assert.equal(validBid.state.currentBid,openingOffer+5000000);
for(const [label,options] of [
 ['unlocked roster',{vehiclesLocked:false}],['closed bid window',{open:false}],['paused lot',{pausedRemaining:0}],['wrong phase',{phase:'planning'}],
 ['unassigned team',{mission2:''}],['round purchase cap',{wins2:2}],['deadline equality',{timingMode:'TIMED',deadline:bidNow}],
 ['committed current lot',{ledger:[{kind:'UNSOLD',round:1,lot:1}]}]
]){
 const rejected=bidHarness(options),before=JSON.stringify(rejected.state),offer=rejected.fns.nextOffer();
 assert.equal(rejected.fns.acceptTeamBid(2,offer),false,label+' rejects bid acceptance');
 assert.equal(JSON.stringify(rejected.state),before,label+' rejection is mutation-free');
}
const badIntended=bidHarness();assert.equal(badIntended.fns.acceptTeamBid(1,Number.NaN),false,'A nonnumeric/stale button payload is rejected');assert.deepEqual(badIntended.calls.notices,['errors.stale']);
const exhaustedOffer=bidHarness({leader:1,currentBid:Number.MAX_SAFE_INTEGER});assert.equal(exhaustedOffer.fns.nextOffer(),null,'An increment beyond exact-money range has no legal offer');assert.equal(exhaustedOffer.fns.acceptTeamBid(2,null),false,'An exhausted offer cannot be accepted');
console.log('Instructor bid acceptance, stale caller, eligibility, timing and purchase-cap boundary examples PASS');
const openNames=['effectiveEntry','committed','allChosen','openAuction'];
const openSource=sharedEngineSource+'\n'+openNames.map(name=>extractFunction(instructorSource,name)).join('\n')+'\n({openAuction})';
function openHarness({phase='auction',vehiclesLocked=true,open=false,revealMode='MANUAL',revealed=false,mission1='COMBAT',mission2='RECCE',ledger=[],timingMode='UNTIMED'}={}){
 const state={phase,vehiclesLocked,open,revealMode,revealed,timingMode,bidSeconds:30,pausedRemaining:5000,ledger,round:0,lot:0,teamCount:2,teams:[{id:1,mission:mission1},{id:2,mission:mission2}]};
 const calls={starts:[],renders:0};
 const fns=runInNewContext(openSource,{state,calls,APP:{bidIncrementCents:5000000},startTimer:ms=>calls.starts.push(ms),renderAuction:()=>calls.renders++,Date:{now:()=>bidNow}});
 return {state,calls,fns};
}
for(const [label,options] of [
 ['wrong phase',{phase:'planning'}],['unlocked vehicles',{vehiclesLocked:false}],['missing team choice',{mission2:''}],
 ['already open',{open:true}],['already committed',{ledger:[{kind:'SALE',round:1,lot:1}]}]
]){const blocked=openHarness(options),before=JSON.stringify(blocked.state);assert.equal(blocked.fns.openAuction(),false,label+' prevents opening');assert.equal(JSON.stringify(blocked.state),before,label+' leaves state unchanged')}
for(const mode of ['ROUND','JIT','MANUAL']){
 const opened=openHarness({revealMode:mode});assert.equal(opened.fns.openAuction(),true,mode+' lot opens with complete locked roster');
 assert.equal(opened.state.open,true);assert.equal(opened.state.revealed,true,mode+' opening reveals active lot');assert.equal(opened.state.pausedRemaining,null);assert.equal(opened.calls.renders,1);
}
const timedOpen=openHarness({timingMode:'TIMED'});assert.equal(timedOpen.fns.openAuction(),true);assert.deepEqual(timedOpen.calls.starts,[30000],'Timed lot opening starts configured bid window');
console.log('Instructor auction-open guards and reveal-mode transitions PASS');
const flowNames=['phase','effectiveEntry','committed','liveClosing','ledgerCapacity','currentCard','appendLog','stopTimer','removePurchase','allChosen','openAuction','commitSale','commitUnsold','voidCurrent','advance'];
const flowSource=sharedEngineSource+'\n'+flowNames.map(name=>extractFunction(instructorSource,name)).join('\n')+'\n({commitSale,commitUnsold,voidCurrent,advance,openAuction,committed,effectiveEntry})';
function auctionFlowHarness({phase='auction',round=0,lot=0,open=true,pausedRemaining=null,leader=null,currentBid=null,revealMode='MANUAL',timingMode='UNTIMED',ledger=[],teams=null,reason='',approved=null,confirmCallbacks=false}={}){
 const makeTeam=id=>({id,mission:'COMBAT',lockedMission:'COMBAT',totals:{CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0},cost:0,purchases:[],purchasesByRound:[0,0,0,0,0,0,0],profit:0,submitted:false});
 const state={phase,vehiclesLocked:true,open,pausedRemaining,leader,currentBid,revealMode,revealed:revealMode!=='MANUAL',timingMode,bidSeconds:30,deadline:null,resultDraft:{team:'1',price:'300000',reason:''},ledger:structuredClone(ledger),seq:ledger.length,round,lot,teamCount:2,teams:teams||[makeTeam(1),makeTeam(2)],market:transactionMarket,correctionReason:reason,approved};
 const calls={notices:[],saves:0,renders:0,stops:0,starts:[],phases:[],allRenders:0};
 let reasonValue=reason;
 const elements={'#correctionReason':{get value(){return confirmCallbacks?reasonValue:state.correctionReason},set value(v){if(confirmCallbacks)reasonValue=v;else state.correctionReason=v}},'#phaseBadge':{textContent:''}};
 let approvedKey=null;
 const gate=(key,message,retry)=>{if(!confirmCallbacks)return state.approved===key;if(approvedKey===key){approvedKey=null;return true}calls.pending=()=>{approvedKey=key;try{return retry()}finally{approvedKey=null}};return false};
 const context={state,calls,t:key=>key,seaNotify:key=>calls.notices.push(key),seaConfirmGate:gate,saveState:()=>{calls.saves++;return true},renderAuction:()=>calls.renders++,renderAll:()=>calls.allRenders++,startTimer:ms=>{calls.starts.push(ms)},stopTimer:()=>calls.stops++,$selector:undefined,$:selector=>elements[selector]||{value:''},$$:()=>[],window:{scrollTo:()=>{}},document:{querySelector:()=>null},clearInterval:()=>{},timerHandle:null};
 const fns=runInNewContext(flowSource,context);
 return {get state(){return context.state},replaceState:next=>context.state=next,setReason:next=>reasonValue=next,calls,fns};
}
// Approval must apply to the exact lot/result shown when the dialog opened.
// The gate captures the actual production retry, unlike pre-approved call tests.
for(const operation of ['sale','unsold','void']){
 const make=()=>auctionFlowHarness({confirmCallbacks:true,leader:1,currentBid:transactionCard.start,open:operation!=='void',reason:'verified mistake',ledger:operation==='void'?[{seq:1,kind:'UNSOLD',round:1,lot:1,card:transactionCard.id,team:null,price:null}]:[]});
 const request=app=>operation==='sale'?app.fns.commitSale(2,transactionCard.start+5000000,'verified mistake'):operation==='unsold'?app.fns.commitUnsold():app.fns.voidCurrent();
 const fresh=make();assert.equal(request(fresh),false);assert.equal(typeof fresh.calls.pending,'function');assert.equal(fresh.calls.pending(),true,operation+' unchanged approval applies');assert.equal(fresh.state.ledger.at(-1).kind,{sale:'SALE',unsold:'UNSOLD',void:'VOID'}[operation]);
 const changes=[['lot',app=>app.state.lot=1],['session',app=>app.state.sessionCode='SEA3-T2-FFFFFFFFFFFFFFFF'],['accepted caller',app=>{app.state.leader=2;app.state.currentBid+=5000000}],['result draft',app=>app.state.resultDraft.reason='changed correction'],['phase',app=>app.state.phase='build'],['pause',app=>app.state.pausedRemaining=5000],['equal-byte restored state',app=>app.replaceState(structuredClone(app.state))]];
 if(operation==='sale')changes.push(['equal-byte replacement team',app=>app.state.teams[1]=structuredClone(app.state.teams[1])]);
 if(operation==='void')changes.push(['void reason outside saved state',app=>app.setReason('different reason')]);
 for(const [label,change] of changes){const app=make();assert.equal(request(app),false);change(app);const before=JSON.stringify(app.state);assert.equal(app.calls.pending(),false,operation+' rejects changed '+label);assert.equal(JSON.stringify(app.state),before,operation+' stale approval preserves state');assert.equal(app.calls.saves,0);assert.equal(app.calls.renders,0);assert.equal(app.calls.stops,0);assert.deepEqual(app.calls.notices,['errors.changed'])}
}
console.log('Instructor correction/unsold/void confirmation captured-result boundaries PASS');
const unsoldLeader=auctionFlowHarness({leader:1,currentBid:transactionCard.start}),unsoldLeaderBefore=JSON.stringify(unsoldLeader.state);
assert.equal(unsoldLeader.fns.commitUnsold(),false,'Unsold with an accepted leader waits for confirmation');assert.equal(JSON.stringify(unsoldLeader.state),unsoldLeaderBefore,'Unconfirmed leader override is mutation-free');assert.deepEqual(unsoldLeader.calls.notices,[]);
unsoldLeader.state.approved='unsold-leader';assert.equal(unsoldLeader.fns.commitUnsold(),true,'Confirmed facilitator override commits the lot as unsold');
assert.deepEqual(unsoldLeader.state.ledger.map(e=>({kind:e.kind,round:e.round,lot:e.lot,card:e.card,team:e.team,price:e.price,seq:e.seq})),[{kind:'UNSOLD',round:1,lot:1,card:transactionCard.id,team:null,price:null,seq:1}]);
assert.equal(unsoldLeader.state.open,false);assert.equal(unsoldLeader.state.leader,null);assert.equal(unsoldLeader.state.currentBid,null);assert.equal(unsoldLeader.fns.committed(),true);
const unsoldVoid=auctionFlowHarness({open:false,ledger:unsoldLeader.state.ledger,reason:''}),unsoldVoidBefore=JSON.stringify(unsoldVoid.state);
assert.equal(unsoldVoid.fns.voidCurrent(),false,'Voiding an unsold result requires a reason and confirmation');assert.equal(JSON.stringify(unsoldVoid.state),unsoldVoidBefore);assert.deepEqual(unsoldVoid.calls.notices,['errors.reason']);
unsoldVoid.state.correctionReason='cancel mistaken unsold';assert.equal(unsoldVoid.fns.voidCurrent(),false,'Unsold void waits for confirmation');assert.equal(JSON.stringify(unsoldVoid.state.ledger),JSON.stringify(unsoldLeader.state.ledger));
unsoldVoid.state.approved='void-lot';assert.equal(unsoldVoid.fns.voidCurrent(),true,'Confirmed unsold void appends a reversible audit entry');
assert.equal(unsoldVoid.state.ledger[1].kind,'VOID');assert.equal(unsoldVoid.state.ledger[1].ref,1);assert.equal(unsoldVoid.state.ledger[1].reason,'cancel mistaken unsold');assert.equal(unsoldVoid.fns.effectiveEntry(),null);
assert.equal(unsoldVoid.fns.openAuction(),true,'A voided unsold lot can be reopened');
unsoldVoid.state.approved='sale-correction';unsoldVoid.state.correctionReason='recommit after void';
assert.equal(unsoldVoid.fns.commitSale(2,transactionCard.start,'recommit after void'),true,'A voided unsold lot can be recommitted with a corrected sale');
assert.equal(unsoldVoid.state.ledger[2].kind,'SALE');assert.equal(unsoldVoid.state.teams[1].purchases.length,1);assert.equal(unsoldVoid.fns.effectiveEntry().kind,'SALE');
const invalidVoid=auctionFlowHarness({phase:'planning',open:false,ledger:unsoldLeader.state.ledger,reason:'valid reason',approved:'void-lot'}),invalidVoidBefore=JSON.stringify(invalidVoid.state);
assert.equal(invalidVoid.fns.voidCurrent(),false,'A non-auction phase cannot void a committed lot');assert.equal(JSON.stringify(invalidVoid.state),invalidVoidBefore);
const saleWithoutPurchase=auctionFlowHarness({open:false,ledger:[{seq:1,kind:'SALE',round:1,lot:1,card:transactionCard.id,team:1,price:transactionCard.start}],reason:'repair missing inventory',approved:'void-lot'}),saleWithoutPurchaseBefore=JSON.stringify(saleWithoutPurchase.state);
assert.equal(saleWithoutPurchase.fns.voidCurrent(),false,'A sale without its matching inventory record cannot be silently voided');assert.equal(JSON.stringify(saleWithoutPurchase.state),saleWithoutPurchaseBefore);assert.deepEqual(saleWithoutPurchase.calls.notices,['errors.state']);
const waitingAdvance=auctionFlowHarness({open:false}),waitingAdvanceBefore=JSON.stringify(waitingAdvance.state);
assert.equal(waitingAdvance.fns.advance(),false,'Uncommitted lots cannot advance');assert.equal(JSON.stringify(waitingAdvance.state),waitingAdvanceBefore);
for(const mode of ['ROUND','JIT','MANUAL']){
 const nextLot=auctionFlowHarness({lot:0,revealMode:mode,ledger:[{seq:1,kind:'UNSOLD',round:1,lot:1,card:transactionMarket[0][0].id,team:null,price:null}]});
 assert.equal(nextLot.fns.advance(),true,mode+' committed lot advances');assert.equal(nextLot.state.lot,1);assert.equal(nextLot.state.open,false);assert.equal(nextLot.state.leader,null);assert.equal(nextLot.state.currentBid,null);assert.equal(nextLot.state.resultDraft,null);assert.equal(nextLot.state.revealed,mode!=='MANUAL');
}
const roundBoundary=auctionFlowHarness({lot:9,revealMode:'JIT',ledger:[{seq:1,kind:'UNSOLD',round:1,lot:10,card:transactionMarket[0][9].id,team:null,price:null}]});
assert.equal(roundBoundary.fns.advance(),true,'The tenth lot advances to the next round');assert.equal(roundBoundary.state.round,1);assert.equal(roundBoundary.state.lot,0);assert.equal(roundBoundary.state.revealed,true);
const allOutcomes=Array.from({length:70},(_,i)=>({seq:i+1,kind:'UNSOLD',round:Math.floor(i/10)+1,lot:i%10+1,card:transactionMarket[Math.floor(i/10)][i%10].id,team:null,price:null}));
const completedAuction=auctionFlowHarness({phase:'auction',round:6,lot:9,open:false,ledger:allOutcomes});
assert.equal(completedAuction.fns.advance(),true,'The final committed lot enters Build');assert.equal(completedAuction.state.phase,'build');assert.equal(completedAuction.calls.allRenders,1);assert.equal(completedAuction.state.privateEntry,false);
console.log('Instructor unsold/void/recommit and 70-lot advance boundaries PASS');
const rejectedPrice=transactionHarness({currentBid:transactionCard.start-1}),rejectedPriceBefore=JSON.stringify(rejectedPrice.state);
assert.equal(rejectedPrice.fns.commitSale(1,rejectedPrice.state.currentBid),false,'Below-start result is rejected');
assert.equal(JSON.stringify(rejectedPrice.state),rejectedPriceBefore,'Rejected price leaves auction and inventory unchanged');
assert.deepEqual(rejectedPrice.calls.notices,['errors.moneyRange']);
const thirdWin=transactionHarness({wins:2}),thirdWinBefore=JSON.stringify(thirdWin.state);
assert.equal(thirdWin.fns.commitSale(1,transactionCard.start),false,'A third win in one round is rejected');
assert.equal(JSON.stringify(thirdWin.state),thirdWinBefore,'Rejected third win is mutation-free');
const corrected=transactionHarness(),correctedBefore=JSON.stringify(corrected.state),nextBid=transactionCard.start+5000000;
assert.equal(corrected.fns.commitSale(2,nextBid,''),false,'Changed caller/price requires a correction reason');
assert.equal(JSON.stringify(corrected.state),correctedBefore,'Missing correction reason leaves state unchanged');
assert.equal(corrected.fns.commitSale(2,nextBid,'verified transcription correction'),false,'Correction waits for confirmation');
assert.equal(JSON.stringify(corrected.state),correctedBefore,'Unconfirmed correction leaves state unchanged');
corrected.state.approved='sale-correction';
assert.equal(corrected.fns.commitSale(2,nextBid,'verified transcription correction'),true,'Confirmed correction is committed');
assert.equal(corrected.state.teams[1].cost,nextBid);assert.equal(corrected.state.ledger[0].kind,'SALE');
assert.equal(corrected.state.ledger[0].reason,'verified transcription correction');
const sale=transactionHarness();
assert.equal(sale.fns.commitSale(1,transactionCard.start),true,'Valid result commits');
assert.equal(sale.state.teams[0].cost,transactionCard.start);assert.equal(sale.state.ledger[0].kind,'SALE');
const committedState=JSON.stringify(sale.state);
assert.equal(sale.fns.commitSale(1,transactionCard.start),false,'Double commit is rejected');
assert.equal(JSON.stringify(sale.state),committedState,'Double commit does not duplicate sale or purchase');
sale.state.correctionReason='verified transcription error';
const beforeVoid=JSON.stringify(sale.state);
assert.equal(sale.fns.voidCurrent(),false,'Voiding a sale waits for confirmation');
assert.equal(JSON.stringify(sale.state),beforeVoid,'Unconfirmed void does not change ledger or inventory');
sale.state.approved='void-lot';
assert.equal(sale.fns.voidCurrent(),true,'Confirmed void reverses the effective sale');
assert.equal(sale.state.teams[0].cost,0);assert.equal(sale.state.teams[0].purchases.length,0);
assert.equal(sale.fns.effectiveEntry(),null,'VOID terminates the prior effective ledger entry');
sale.state.open=true;sale.state.leader=2;sale.state.currentBid=nextBid;
assert.equal(sale.fns.commitSale(2,nextBid),true,'A voided lot may be recommitted with a new sale');
assert.equal(sale.state.teams[1].cost,nextBid);assert.equal(sale.fns.effectiveEntry().kind,'SALE');
const replayInput={schema:3,phase:'auction',lang:'en',vehiclesLocked:true,sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,marketSeed:transactionMarketSeed,market:transactionMarket,revealMode:'ROUND',timingMode:'UNTIMED',bidSeconds:30,round:0,lot:0,revealed:true,open:false,pausedRemaining:null,deadline:null,leader:2,currentBid:nextBid,ledger:sale.state.ledger,seq:sale.state.seq,teams:sale.state.teams,practice:{revealed:false,open:false,leader:false,closed:false}};
const replayed=sale.fns.validateInstructorSave(replayInput);
assert.equal(replayed.teams[0].purchases.length,0);assert.equal(replayed.teams[1].cost,nextBid);
assert.equal(JSON.stringify(replayed.teams[1].purchases),JSON.stringify(sale.state.teams[1].purchases),'Ledger replay reconstructs the live effective sale after a correction chain');
const tampered=JSON.parse(JSON.stringify(replayInput));tampered.ledger[2].price++;
const tamperedBefore=JSON.stringify(tampered);
assert.throws(()=>sale.fns.validateInstructorSave(tampered),/invalid-state/,'Off-step tampering is rejected during replay');
assert.equal(JSON.stringify(tampered),tamperedBefore,'Rejected replay does not partially mutate the saved candidate');
const fullTeams=sessionRules.createTeams('SEA3-T2-0123456789ABCDEF');
for(const team of fullTeams){team.mission='COMBAT';team.lockedMission='COMBAT'}
const fullLedger=[];
for(let round=0;round<7;round++)for(let lot=0;lot<10;lot++){
 const card=transactionMarket[round][lot],win=round===0&&lot<2,teamId=win?lot+1:null;
 if(win)acquisitionRules.acquire(fullTeams[teamId-1],card,card.start);
 fullLedger.push({seq:fullLedger.length+1,kind:win?'SALE':'UNSOLD',round:round+1,lot:lot+1,card:card.id,team:teamId,price:win?card.start:null});
}
const fullSave={schema:3,phase:'build',lang:'en',vehiclesLocked:true,sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,marketSeed:transactionMarketSeed,market:transactionMarket,revealMode:'ROUND',timingMode:'UNTIMED',bidSeconds:30,round:6,lot:9,revealed:true,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:fullLedger,seq:70,teams:fullTeams,practice:{revealed:false,open:false,leader:false,closed:false}};
const rebuiltFull=sale.fns.validateInstructorSave(fullSave);
const boundedLedger=auctionFlowHarness({revealMode:'ROUND',reason:'verified correction',approved:'sale-correction'});
const boundedSave=()=>({...fullSave,...Object.fromEntries(['phase','round','lot','revealed','open','pausedRemaining','deadline','leader','currentBid','ledger','seq','teams','resultDraft'].map(key=>[key,boundedLedger.state[key]]))});
assert.equal(boundedLedger.fns.commitSale(1,transactionCard.start,'verified correction'),true);
for(let i=0;i<70;i++){
 boundedLedger.state.correctionReason='verified correction';boundedLedger.state.approved='void-lot';assert.equal(boundedLedger.fns.voidCurrent(),true,'Correction within reserved capacity may void');
 assert.doesNotThrow(()=>sale.fns.validateInstructorSave(boundedSave()),'Voided boundary remains recoverable');
 assert.equal(boundedLedger.fns.openAuction(),true);boundedLedger.state.approved='sale-correction';assert.equal(boundedLedger.fns.commitSale(1,transactionCard.start,'verified correction'),true);
}
assert.equal(boundedLedger.state.ledger.length,141);
boundedLedger.state.correctionReason='verified correction';boundedLedger.state.approved='void-lot';const capacityBefore=JSON.stringify(boundedLedger.state),capacityCalls={saves:boundedLedger.calls.saves,renders:boundedLedger.calls.renders,stops:boundedLedger.calls.stops};
assert.equal(boundedLedger.fns.voidCurrent(),false,'Void refuses to consume capacity needed to finish the remaining 69 lots');
assert.equal(JSON.stringify(boundedLedger.state),capacityBefore);assert.equal(boundedLedger.calls.saves,capacityCalls.saves);assert.equal(boundedLedger.calls.renders,capacityCalls.renders);assert.equal(boundedLedger.calls.stops,capacityCalls.stops);assert.equal(boundedLedger.calls.notices.at(-1),'errors.ledgerLimit');
assert.doesNotThrow(()=>sale.fns.validateInstructorSave(boundedSave()));
for(let i=1;i<70;i++){assert.equal(boundedLedger.fns.advance(),true);assert.equal(boundedLedger.fns.openAuction(),true);assert.equal(boundedLedger.fns.commitUnsold(),true);assert.doesNotThrow(()=>sale.fns.validateInstructorSave(boundedSave()),'Reserved outcome remains recoverable')}
assert.equal(boundedLedger.state.ledger.length,210);assert.equal(boundedLedger.fns.advance(),true);assert.equal(boundedLedger.state.phase,'build');assert.doesNotThrow(()=>sale.fns.validateInstructorSave(boundedSave()));
const legacyFullLedger=[];for(let i=0;i<105;i++){const seq=legacyFullLedger.length+1;legacyFullLedger.push({seq,kind:'UNSOLD',round:1,lot:1,card:transactionCard.id,team:null,price:null},{seq:seq+1,kind:'VOID',ref:seq,round:1,lot:1,card:transactionCard.id,team:null,price:null,reason:'legacy correction'})}
const legacyCapacity=auctionFlowHarness({revealMode:'ROUND',ledger:legacyFullLedger,leader:1,currentBid:transactionCard.start});
const legacySave={...fullSave,phase:'auction',round:0,lot:0,open:true,leader:1,currentBid:transactionCard.start,ledger:legacyCapacity.state.ledger,seq:210,teams:legacyCapacity.state.teams};
assert.doesNotThrow(()=>sale.fns.validateInstructorSave(legacySave),'Valid legacy ledger at the old bound is not discarded');
const legacyBefore=JSON.stringify(legacyCapacity.state);
assert.equal(legacyCapacity.fns.commitSale(1,transactionCard.start),false,'Full imported ledger cannot acquire before append fails');assert.equal(JSON.stringify(legacyCapacity.state),legacyBefore);
assert.equal(legacyCapacity.fns.commitUnsold(),false,'Full imported ledger cannot append a 211th result');assert.equal(JSON.stringify(legacyCapacity.state),legacyBefore);assert.equal(legacyCapacity.calls.saves+legacyCapacity.calls.renders+legacyCapacity.calls.stops,0);assert.deepEqual(legacyCapacity.calls.notices,['errors.ledgerLimit','errors.ledgerLimit']);
console.log('Instructor maximum correction ledger preserves recovery and reserves all 70 final outcomes PASS');
assert.equal(rebuiltFull.ledger.length,70);assert.equal(rebuiltFull.teams.reduce((count,team)=>count+team.purchases.length,0),2);
assert.equal(JSON.stringify(rebuiltFull.teams.map(team=>team.purchases)),JSON.stringify(fullTeams.map(team=>team.purchases)),'All 70 authoritative lot outcomes replay to the live team inventories');
const hiddenOpenTeams=sessionRules.createTeams('SEA3-T2-0123456789ABCDEF');for(const team of hiddenOpenTeams){team.mission='COMBAT';team.lockedMission='COMBAT'}
const hiddenManualOpen={...fullSave,phase:'auction',revealMode:'MANUAL',round:0,lot:0,revealed:false,open:true,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,teams:hiddenOpenTeams,practice:{revealed:false,open:false,leader:false,closed:false}};
assert.throws(()=>sale.fns.validateInstructorSave(hiddenManualOpen),/invalid-state/,'An open manual auction must not recover with its active lot hidden');
function currentAuctionSave(entry=null,leader=null,currentBid=null){
 const teams=sessionRules.createTeams('SEA3-T2-0123456789ABCDEF');for(const team of teams){team.mission='COMBAT';team.lockedMission='COMBAT'}
 const ledger=entry?[{seq:1,...entry}]:[];
 if(entry?.kind==='SALE')acquisitionRules.acquire(teams[entry.team-1],transactionCard,entry.price);
 return {...fullSave,phase:'auction',revealMode:'MANUAL',round:0,lot:0,revealed:true,open:false,deadline:null,leader,currentBid,ledger,seq:ledger.length,teams,practice:{revealed:false,open:false,leader:false,closed:false}};
}
const currentSaleEntry={kind:'SALE',round:1,lot:1,card:transactionCard.id,team:1,price:transactionCard.start};
const currentUnsoldEntry={kind:'UNSOLD',round:1,lot:1,card:transactionCard.id,team:null,price:null};
assert.throws(()=>sale.fns.validateInstructorSave(currentAuctionSave(null,1,transactionCard.start)),/invalid-state/,'A closed uncommitted lot cannot recover with a stale accepted leader');
assert.throws(()=>sale.fns.validateInstructorSave(currentAuctionSave(currentSaleEntry,2,transactionCard.start)),/invalid-state/,'A committed sale must recover with the authoritative ledger winner');
assert.throws(()=>sale.fns.validateInstructorSave(currentAuctionSave(currentUnsoldEntry,1,transactionCard.start)),/invalid-state/,'A committed unsold lot cannot recover with a stale leader');
assert.equal(sale.fns.validateInstructorSave(currentAuctionSave(currentSaleEntry,1,transactionCard.start)).ledger.length,1,'A committed sale with matching leader and price remains valid');
assert.equal(sale.fns.validateInstructorSave(currentAuctionSave(currentUnsoldEntry,null,null)).ledger.length,1,'A committed unsold lot with cleared bid state remains valid');
const instructorValidator=runInNewContext(sharedEngineSource+'\n'+extractFunction(instructorSource,'validateInstructorSave')+'\nvalidateInstructorSave');
assert.throws(()=>backupApi.parseBackup(backupApi.makeBackup('INSTRUCTOR',hiddenManualOpen),'INSTRUCTOR',instructorValidator),/invalid-state/,'The instructor backup import rejects an impossible open-but-hidden manual lot');
assert.throws(()=>backupApi.parseBackup(backupApi.makeBackup('INSTRUCTOR',currentAuctionSave(null,1,transactionCard.start)),'INSTRUCTOR',instructorValidator),/invalid-state/,'The instructor backup import rejects a closed lot with stale leader state');
function makeRevealSave(mode,lot,revealed){
 const teams=sessionRules.createTeams('SEA3-T2-0123456789ABCDEF');for(const team of teams){team.mission='COMBAT';team.lockedMission='COMBAT'}
 const ledger=Array.from({length:lot},(_,index)=>({seq:index+1,kind:'UNSOLD',round:1,lot:index+1,card:transactionMarket[0][index].id,team:null,price:null}));
 return {schema:3,phase:'auction',lang:'en',vehiclesLocked:true,sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,marketSeed:transactionMarketSeed,market:transactionMarket,revealMode:mode,timingMode:'UNTIMED',bidSeconds:30,round:0,lot,revealed,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger,seq:ledger.length,teams,practice:{revealed:false,open:false,leader:false,closed:false}};
}
const revealRendererSource=sharedEngineSource+'\n'+extractFunction(instructorSource,'visibleLot')+'\n'+extractFunction(instructorSource,'renderMarket')+'\nrenderMarket';
function renderRestoredMarket(save,language){
 const marketNode={innerHTML:''};
 runInNewContext(revealRendererSource,{state:JSON.parse(JSON.stringify(save)),lang:language,$:()=>marketNode,document:{getElementById:()=>null},t:(key,data)=>key==='common.lot'?`Lot ${data.n}`:key==='common.hidden'?'Hidden':key,esc:value=>String(value),money:value=>String(value)})();
 return marketNode.innerHTML;
}
function visibleIds(markup,language){return transactionMarket[0].filter(card=>markup.includes(card.title[language])).map(card=>card.id)}
for(const [mode,revealed,expected] of [['ROUND',false,transactionMarket[0].map(card=>card.id)],['JIT',false,[transactionMarket[0][0].id,transactionMarket[0][1].id]],['MANUAL',false,[transactionMarket[0][0].id]],['MANUAL',true,[transactionMarket[0][0].id,transactionMarket[0][1].id]]]){
 const restored=backupApi.parseBackup(backupApi.makeBackup('INSTRUCTOR',makeRevealSave(mode,1,revealed)),'INSTRUCTOR',instructorValidator);
 for(const language of ['en','fr']){
  const markup=renderRestoredMarket(restored,language);
  assert.deepEqual(visibleIds(markup,language),expected,`${mode} reveal state remains correct after backup validation/reload in ${language}`);
  assert.equal(markup.includes(transactionMarket[1][0].title[language]),false,`${mode} does not expose the next round in ${language}`);
 }
}
console.log('Instructor reveal continuity survives validated reload and EN/FR render changes PASS');
const instructorFile=backupApi.makeBackup('INSTRUCTOR',fullSave);
const instructorRoundTrip=backupApi.parseBackup(instructorFile,'INSTRUCTOR',instructorValidator);
assert.equal(instructorRoundTrip.ledger.length,70,'Instructor backup round trip retains the authoritative ledger');
assert.deepEqual(JSON.parse(JSON.stringify(instructorRoundTrip.market)),transactionMarket,'Instructor backup retains private seeded market order');
assert.equal(instructorRoundTrip.teams.reduce((n,team)=>n+team.purchases.length,0),2,'Instructor backup reconstructs canonical purchases');
const pendingCorrection={...fullSave,phase:'auction',round:0,lot:0,open:false,ledger:[],seq:0,teams:fullTeams.map(team=>({...team,purchases:[]})),resultDraft:{team:'1',price:'300000',reason:''}};
pendingCorrection.vehiclesLocked=true;pendingCorrection.teams.forEach(team=>{team.mission='COMBAT';team.lockedMission='COMBAT'});
const draftRoundTrip=backupApi.parseBackup(backupApi.makeBackup('INSTRUCTOR',pendingCorrection),'INSTRUCTOR',instructorValidator);
assert.deepEqual(JSON.parse(JSON.stringify(draftRoundTrip.resultDraft)),pendingCorrection.resultDraft,'Instructor backup preserves bounded pending correction input');
const unknownInstructorField={...fullSave,unreviewedDirective:'must not be retained'};
assert.throws(()=>instructorValidator(unknownInstructorField),/invalid-state/,'Unknown instructor save fields are rejected');
const unknownLedgerField=JSON.parse(JSON.stringify(fullSave));unknownLedgerField.ledger[0].unreviewedDirective='must not be retained';
assert.throws(()=>instructorValidator(unknownLedgerField),/invalid-state/,'Unknown ledger entry fields are rejected');
const studentValidator=runInNewContext(sharedEngineSource+'\n'+extractFunction(studentSource,'validateStudentSave')+'\nvalidateStudentSave');
const studentTeam={id:1,mission:'COMBAT',lockedMission:null,totals:{CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0},cost:0,purchases:[],purchasesByRound:Array(7).fill(0),profit:0,submitted:false};
const studentSave={schema:3,phase:'practice',lang:'fr',vehicleConfirmed:false,lockedMission:null,sessionCode:'SEA3-T2-0123456789ABCDEF',teamCount:2,teamId:1,team:studentTeam,round:0,lot:0,currentCard:null,plan:'fixture plan',planBaseline:null,risks:'fixture risk',maxWtpCents:85000000,scratch:{},profitMode:'AMOUNT',profitInput:'250000',profitCents:25000000,practiceWon:true};
// R02/R10, T03/T11: all 16 tutorial flag combinations have an independent allowed-state oracle.
const practiceRecoveryBase={...currentAuctionSave(),phase:'practice',vehiclesLocked:false,teams:[{...studentTeam},{...studentTeam,id:2,mission:'RECCE'}]};
for(let mask=0;mask<16;mask++){
 const practice={revealed:!!(mask&8),open:!!(mask&4),leader:!!(mask&2),closed:!!(mask&1)};
 const candidate=JSON.parse(JSON.stringify({...practiceRecoveryBase,practice})),before=JSON.stringify(candidate);
 const file=backupApi.makeBackup('INSTRUCTOR',candidate);
 if([0,8,12,14,11].includes(mask)){
  assert.deepEqual(JSON.parse(JSON.stringify(instructorValidator(candidate).practice)),practice,'Valid instructor tutorial stage '+mask+' remains recoverable');
  assert.equal(backupApi.parseBackup(file,'INSTRUCTOR',instructorValidator).phase,'practice');
 }else{
  assert.throws(()=>instructorValidator(candidate),/invalid-state/,'Impossible instructor tutorial stage '+mask+' is rejected');
  assert.throws(()=>backupApi.parseBackup(file,'INSTRUCTOR',instructorValidator),/invalid-state/,'Import rejects impossible instructor tutorial stage '+mask);
 }
 assert.equal(JSON.stringify(candidate),before,'Tutorial validation is mutation-free');
 if(mask!==0){const scoredSave={...fullSave,practice};assert.throws(()=>instructorValidator(scoredSave),/invalid-state/,'Scored phase cannot retain instructor tutorial stage '+mask)}
}
assert.equal(instructorValidator({...practiceRecoveryBase,phase:'planning'}).phase,'planning','Clean tutorial state can recover in planning');
for(const phase of ['setup','planning','auction','build','submit','debrief','closed']){
 const locked=['auction','build','submit','debrief','closed'].includes(phase)?'COMBAT':null;
 const candidate={...studentSave,phase,lockedMission:locked,team:{...studentTeam,lockedMission:locked}};
 const before=JSON.stringify(candidate);
 assert.throws(()=>studentValidator(candidate),/invalid-state/,'Student tutorial win cannot recover in '+phase);
 assert.throws(()=>backupApi.parseBackup(backupApi.makeBackup('STUDENT',candidate),'STUDENT',studentValidator),/invalid-state/,'Student import rejects misplaced tutorial win');
 assert.equal(JSON.stringify(candidate),before,'Rejected student tutorial save preserves its data');
 assert.equal(studentValidator({...candidate,practiceWon:false}).phase,phase,'Clean student tutorial state remains compatible in '+phase);
}
console.log('Instructor/student schema-3 tutorial-state and role-import invariants PASS');
const studentFile=backupApi.makeBackup('STUDENT',studentSave);
const maximumStudent={...studentSave,plan:'\u0001'.repeat(1200),planBaseline:'\u0002'.repeat(1200),risks:'\u0003'.repeat(1200),scratch:Object.fromEntries(Array.from({length:70},(_,i)=>[`${Math.floor(i/10)+1}-${i%10+1}`,{wtp:'9'.repeat(20),note:'\u0004'.repeat(600)}]))};
assert.doesNotThrow(()=>studentValidator(structuredClone(maximumStudent)),'Every documented field limit permits this maximum valid private state');
const maximumStudentFile=backupApi.makeBackup('STUDENT',maximumStudent);
const maximumCalls={statuses:[],commits:0};
const maximumContext={state:studentSave,backupImportGeneration:0,pendingBackupImport:null,backupStatus:key=>maximumCalls.statuses.push(key),parseBackup:backupApi.parseBackup,validateStudentSave:studentValidator,commitBackupImport:()=>maximumCalls.commits++};
const maximumRead=runInNewContext(sharedEngineSource+'\nasync '+extractFunction(studentSource,'readBackupFile')+'\nreadBackupFile',maximumContext);
await maximumRead({size:Buffer.byteLength(maximumStudentFile,'utf8'),text:async()=>maximumStudentFile});
assert.equal(maximumCalls.commits,1,'Exported maximum valid private state can be read back without being called too large');
assert.deepEqual(maximumCalls.statuses,[]);assert.equal(maximumContext.pendingBackupImport.candidate.scratch['7-10'].note,maximumStudent.scratch['7-10'].note);
assert.equal(maximumContext.pendingBackupImport.original,studentSave,'File staging retains original session identity as well as bytes');
console.log('Maximum valid student escaped-text backup round trip PASS: '+maximumStudentFile.length+' UTF-16 units / '+Buffer.byteLength(maximumStudentFile,'utf8')+' UTF-8 bytes');
const maximumStored=recoveryBoundaryHarness('STUDENT',JSON.stringify(maximumStudent));assert.equal(maximumStored.api.restoreState(),true,'Maximum valid private notes remain reloadable from storage');assert.equal(maximumStored.context.state.scratch['7-10'].note,maximumStudent.scratch['7-10'].note);
for(const role of ['INSTRUCTOR','STUDENT']){
 const snapshot=role==='INSTRUCTOR'?fullSave:{...maximumStudent,plan:'漢'.repeat(1200),planBaseline:'😀'.repeat(600),risks:'é'.repeat(1200),scratch:Object.fromEntries(Array.from({length:70},(_,i)=>[`${Math.floor(i/10)+1}-${i%10+1}`,{wtp:'0',note:'漢'.repeat(600)}]))};
 const raw=backupApi.makeBackup(role,snapshot),padded=raw+' '.repeat(500000-raw.length),bytes=Buffer.byteLength(padded,'utf8');assert.ok(bytes<=1500000);
 const calls={statuses:[],commits:0},context={state:snapshot,backupImportGeneration:0,pendingBackupImport:null,backupStatus:key=>calls.statuses.push(key),validateInstructorSave:instructorValidator,validateStudentSave:studentValidator,commitBackupImport:()=>calls.commits++};
 const source=role==='INSTRUCTOR'?instructorSource:studentSource,reader=runInNewContext(sharedEngineSource+'\nasync '+extractFunction(source,'readBackupFile')+'\nreadBackupFile',context);
 await reader({size:bytes,text:async()=>padded});assert.equal(calls.commits,1,role+' accepts exactly 500000 UTF-16 units with independent UTF-8 byte accounting');assert.deepEqual(calls.statuses,[]);
 await reader({size:bytes+1,text:async()=>padded+' '});assert.equal(calls.commits,1,role+' rejects one extra text unit before staging');assert.deepEqual(calls.statuses,['backup.invalid']);assert.equal(context.pendingBackupImport,null);
 console.log(role+' exact character-bound read and UTF-8 boundary PASS: '+bytes+' bytes');
}
for(const [role,file,validator] of [['INSTRUCTOR',instructorFile,instructorValidator],['STUDENT',studentFile,studentValidator]]){
 const legacy=JSON.parse(file);legacy.appVersion='3.0.0-local';
 const restored=minorBackupApi.parseBackup(JSON.stringify(legacy),role,validator),current=backupApi.parseBackup(file,role,validator);
 assert.deepEqual(JSON.parse(JSON.stringify(restored)),JSON.parse(JSON.stringify(current)),role+' real schema-3 validator preserves legacy backup after app-only minor version bump');
}
const studentRoundTrip=backupApi.parseBackup(studentFile,'STUDENT',studentValidator);
assert.equal(studentRoundTrip.lang,'fr','Student backup preserves the selected language');
assert.equal(studentRoundTrip.plan,'fixture plan','Student backup preserves private planning notes');
assert.equal(studentRoundTrip.team.mission,'COMBAT','Student backup reconstructs its canonical team');
assert.equal(studentRoundTrip.vehicleChangeNotice,false,'Student recovery gives the optional notice a normalized boolean');
assert.throws(()=>studentValidator({...studentSave,unreviewedDirective:'must not be retained'}),/invalid-state/,'Unknown student save fields are rejected');
assert.throws(()=>studentValidator({...studentSave,scratch:{'1-1':{wtp:'1',note:'private',unreviewedDirective:'x'}}}),/invalid-state/,'Unknown private scratch fields are rejected');
assert.throws(()=>backupApi.parseBackup(studentFile,'INSTRUCTOR',instructorValidator),/invalid-state/,'Student payload cannot enter instructor validator');
assert.throws(()=>backupApi.parseBackup(instructorFile,'STUDENT',studentValidator),/invalid-state/,'Instructor market and ledger cannot enter student validator');
const newerBackup=JSON.parse(instructorFile);newerBackup.schema=4;newerBackup.state.schema=4;
assert.throws(()=>backupApi.parseBackup(JSON.stringify(newerBackup),'INSTRUCTOR',instructorValidator),/invalid-state/,'A newer underlying save schema is rejected without mutation');
assert.equal(fullSave.schema,3,'Rejected newer-schema candidate leaves the original active save untouched');
// R11/R17, T11/T12/T18: actual validated import -> production HTML rendering.
// Markup assertions do not execute a browser or claim CSP/AT qualification.
const hostileTextExamples=[
 ['<img src=x onerror="attack()">','&lt;img src=x onerror=&quot;attack()&quot;&gt;'],
 ['</p><script>attack()</script>','&lt;/p&gt;&lt;script&gt;attack()&lt;/script&gt;'],
 ["&lt;svg&gt; 'quoted' & \"français\"",'&amp;lt;svg&amp;gt; &#39;quoted&#39; &amp; &quot;français&quot;']
];
for(const lang of ['en','fr'])for(const [text,escaped]of hostileTextExamples){
 const snapshot=JSON.parse(JSON.stringify({...studentSave,lang,phase:'debrief',practiceWon:false,lockedMission:'COMBAT',team:{...studentTeam,lockedMission:'COMBAT'},plan:'current draft',planBaseline:text,risks:text,scratch:{'1-1':{wtp:'',note:text}}}));
 const card=acquisitionRules.cardAt('CAP-A',1,1);acquisitionRules.acquire(snapshot.team,card,card.start);
 snapshot.team.purchases[0].title={en:text,fr:text};snapshot.team.purchases[0].e={CAP:999};
 const imported=backupApi.parseBackup(backupApi.makeBackup('STUDENT',snapshot),'STUDENT',studentValidator);
 assert.equal(imported.planBaseline,text);assert.equal(imported.risks,text);assert.equal(imported.scratch['1-1'].note,text,'Valid private text is retained rather than destructively sanitized');
 assert.deepEqual(JSON.parse(JSON.stringify(imported.team.purchases[0].title)),JSON.parse(JSON.stringify(card.title)),'Imported purchase descriptions are reconstructed from canonical data');
 assert.deepEqual(JSON.parse(JSON.stringify(imported.team.purchases[0].e)),JSON.parse(JSON.stringify(card.e)));
 const elements={},$=key=>elements[key]||(elements[key]={innerHTML:''}),dictionary=JSON.parse(studentSource.match(/const I18N=(.*?);\n/)[1]);
 const context={state:imported,lang,I18N:dictionary,$,$$:()=>[],saveState(){}};
 const api=runInNewContext(sharedEngineSource+'\n'+['esc','t','money','ratioDisplay','renderDebrief','renderReconcileInventory'].map(name=>extractFunction(studentSource,name)).join('\n')+'\n;({renderDebrief,renderReconcileInventory})',context);
 api.renderDebrief();api.renderReconcileInventory();const summary=$('#debriefCard').innerHTML;
 assert.equal(summary.split(escaped).length-1,2,'Original plan and risks render as escaped text in '+lang);assert.ok(!summary.includes(text));assert.ok(!summary.includes('current draft'),'Original plan baseline remains the reflection reference');
 assert.ok(!$('#reconcileInventory').innerHTML.includes(text),'Canonical inventory cannot reflect imported hostile titles/effects');
 const fallbackState={...imported,plan:text,planBaseline:null};context.state=fallbackState;api.renderDebrief();assert.equal($('#debriefCard').innerHTML.split(escaped).length-1,2,'Legacy null plan baseline falls back to escaped plan');
 const exported=JSON.parse(backupApi.makeBackup('STUDENT',imported));assert.equal(exported.state.planBaseline,text);assert.equal(exported.state.risks,text);for(const key of ['market','marketSeed','teams','ledger'])assert.equal(Object.hasOwn(exported.state,key),false);
 const teacherSnapshot=currentAuctionSave({...currentSaleEntry,reason:text},1,transactionCard.start);teacherSnapshot.lang=lang;
 const teacher=backupApi.parseBackup(backupApi.makeBackup('INSTRUCTOR',teacherSnapshot),'INSTRUCTOR',instructorValidator),target={innerHTML:''};
 runInNewContext(sharedEngineSource+'\n'+['esc','t','money','renderLedger'].map(name=>extractFunction(instructorSource,name)).join('\n')+'\nrenderLedger(target)',{state:teacher,target,lang,I18N:JSON.parse(instructorSource.match(/const I18N=(.*?);\n/)[1]),$:()=>target});
 assert.ok(!target.innerHTML.includes(text),'Private correction reason is not injected into ledger presentation');assert.equal(teacher.ledger[0].reason,text,'Bounded correction reason remains recoverable');
}
console.log('Real role import/renderer escaping, canonical purchase metadata and private JSON text characterization PASS');
// R09-R11/R23, T11/T12/T24: execute production startup/storage/export boundaries.
// This is characterization in a VM, not browser storage/download qualification.
function recoveryBoundaryHarness(role,saved,{getDenied=false,setDenied=false}={}){
 const roleSource=role==='INSTRUCTOR'?instructorSource:studentSource;
 const stored=new Map(saved===undefined?[]:[['role-store',saved]]),calls={writes:[],notices:[],statuses:[],downloads:[]};
 const initial={phase:'setup',sessionCode:null,lang:'en',marker:'initial'},context={state:initial,lang:'en',STORE_KEY:'role-store',recoveryBlocked:false,storageFailed:false,
  validateInstructorSave:instructorValidator,validateStudentSave:studentValidator,
  Date:{now:()=>10000},storageNotice:key=>calls.notices.push(key),backupStatus:key=>calls.statuses.push(key),makeBackup:backupApi.makeBackup,
  sessionStorage:{getItem(key){if(getDenied)throw Error('denied');return stored.get(key)||null},setItem(key,value){if(setDenied)throw Error('quota');calls.writes.push({key,value});stored.set(key,value)}},
  saveBackupDownload(raw,suffix){calls.downloads.push({raw,suffix})}};
 const api=runInNewContext(sharedEngineSource+'\n'+['saveState','restoreState','exportBackup'].map(name=>extractFunction(roleSource,name)).join('\n')+'\n;({saveState,restoreState,exportBackup})',context);
 return {api,context,initial,stored,calls};
}
for(const [role,snapshot,limit]of [['INSTRUCTOR',instructorRoundTrip,500000],['STUDENT',studentRoundTrip,500000]]){
 const raw=JSON.stringify(snapshot),valid=recoveryBoundaryHarness(role,raw);
 assert.equal(valid.api.restoreState(),true,role+' startup restores a valid schema-3 save');
 assert.notEqual(valid.context.state,valid.initial);assert.equal(valid.context.lang,snapshot.lang);
 assert.equal(valid.calls.writes.length,0,'Reading recovery never overwrites the source bytes');
 assert.equal(valid.stored.get('role-store'),raw);assert.equal(valid.context.recoveryBlocked,false);
 valid.context.lang='fr';assert.equal(valid.api.saveState(),true);
 const persisted=JSON.parse(valid.stored.get('role-store'));assert.equal(persisted.lang,'fr');
 const stableWrites=valid.calls.writes.length;
 for(let repeat=0;repeat<20;repeat++)assert.equal(valid.api.saveState(),true);
 assert.equal(valid.calls.writes.length,stableWrites,'Unchanged rerenders must not rewrite session storage');
 if(role==='INSTRUCTOR'){valid.context.state.privateEntry=true;valid.api.saveState();assert.equal(JSON.parse(valid.stored.get('role-store')).privateEntry,false,'Private entry never persists as projected state')}
 valid.api.exportBackup();const exported=JSON.parse(valid.calls.downloads.at(-1).raw);
 assert.equal(exported.role,role);assert.equal(exported.state.lang,'fr');assert.equal(valid.calls.statuses.at(-1),'backup.exported');
 if(role==='INSTRUCTOR')assert.equal(exported.state.privateEntry,false,'Portable instructor backup disables private entry');
 else{assert.equal(exported.state.plan,snapshot.plan);assert.equal(exported.state.risks,snapshot.risks);for(const field of ['market','marketSeed','teams','ledger'])assert.equal(Object.hasOwn(exported.state,field),false,'Student export excludes instructor '+field)}
 for(const badRaw of ['{',raw.slice(0,-1),'x'.repeat(limit+1),JSON.stringify({...snapshot,schema:4}),JSON.stringify({...snapshot,unreviewedDirective:'<script>hostile</script>'})]){
  const bad=recoveryBoundaryHarness(role,badRaw);assert.equal(bad.api.restoreState(),false);assert.equal(bad.context.state,bad.initial,'Rejected startup bytes leave live state intact');
  assert.equal(bad.context.recoveryBlocked,true);assert.deepEqual(bad.calls.notices,['common.badRecovery']);
  bad.context.state.sessionCode='attempted-replacement';assert.equal(bad.api.saveState(),false);assert.equal(bad.calls.writes.length,0,'Blocked recovery cannot overwrite corrupt bytes');assert.equal(bad.stored.get('role-store'),badRaw);
  bad.api.exportBackup();const rescue=JSON.parse(bad.calls.downloads[0].raw);assert.equal(rescue.format,'SEA-GAME-RECOVERY-RESCUE');assert.equal(rescue.role,role);assert.equal(rescue.raw,badRaw,'Rescue preserves exact unvalidated bytes');assert.equal(bad.calls.statuses.at(-1),'backup.rawExported');
 }
 const missing=recoveryBoundaryHarness(role);assert.equal(missing.api.restoreState(),false);assert.equal(missing.context.recoveryBlocked,false);assert.equal(missing.api.saveState(),true);assert.equal(missing.calls.writes.length,0);missing.api.exportBackup();assert.deepEqual(missing.calls.statuses,['backup.noSession']);
 const denied=recoveryBoundaryHarness(role,raw,{getDenied:true});assert.equal(denied.api.restoreState(),false);assert.equal(denied.context.storageFailed,true);assert.equal(denied.context.recoveryBlocked,false);assert.equal(denied.context.state,denied.initial);assert.equal(denied.stored.get('role-store'),raw);
 const quota=recoveryBoundaryHarness(role,raw,{setDenied:true});assert.equal(quota.api.restoreState(),true);const active=quota.context.state;quota.context.lang=quota.context.lang==='en'?'fr':'en';assert.equal(quota.api.saveState(),false);assert.equal(quota.context.state,active);assert.equal(quota.context.storageFailed,true);assert.deepEqual(quota.calls.notices,['common.refresh']);assert.equal(quota.stored.get('role-store'),raw);quota.api.exportBackup();assert.equal(quota.calls.downloads.length,1,'Denied persistence still permits a portable backup request');
}
for(const [mode,deadline,remaining,expected]of [['TIMED',15000,null,5000],['TIMED',5000,null,0],['TIMED',15000,1234,1234],['UNTIMED',null,null,0]]){
 const snapshot={...currentAuctionSave(null,1,transactionCard.start),open:true,timingMode:mode,deadline,pausedRemaining:remaining,privateEntry:true};
 const h=recoveryBoundaryHarness('INSTRUCTOR',JSON.stringify(snapshot));assert.equal(h.api.restoreState(),true,'Open '+mode+' auction recovers');assert.equal(h.context.state.pausedRemaining,expected,'Recovered timer pauses at the remaining duration');assert.equal(h.context.state.privateEntry,false);assert.equal(h.context.state.leader,1);assert.equal(h.context.state.currentBid,transactionCard.start);assert.equal(h.calls.writes.length,0);
}
console.log('Both-role production save/restore/rescue, denied storage and instructor timer/privacy characterization PASS');
for(const [role,sourceFile,candidate] of [
 ['INSTRUCTOR',instructorSource,instructorRoundTrip],
 ['STUDENT',studentSource,studentRoundTrip]
]){
 const readStart=sourceFile.indexOf('async function readBackupFile('),readEnd=sourceFile.indexOf('\n}',readStart);
 assert.ok(readStart>=0&&readEnd>readStart,role+' bounded file reader exists');
 const readSource=sourceFile.slice(readStart,readEnd+2),fileLimit=1500000;
 const readCalls={status:null,textRead:false};
 const fileSandbox={MAX_BACKUP_CHARS:500000,MAX_BACKUP_BYTES:1500000,backupImportGeneration:0,pendingBackupImport:{old:true},backupStatus:key=>{readCalls.status=key},parseBackup(){throw new Error('oversize input must not be parsed')},validateInstructorSave(){},validateStudentSave(){}};
 const readFileHandler=runInNewContext(readSource+'\nreadBackupFile',fileSandbox);
 await readFileHandler({size:fileLimit+1,text(){readCalls.textRead=true;return Promise.resolve('{')}});
 assert.equal(readCalls.status,'backup.tooLarge',role+' rejects oversized files with localized recovery status');
 assert.equal(readCalls.textRead,false,role+' checks file bytes before reading or parsing');
 assert.equal(fileSandbox.pendingBackupImport,null,role+' invalidates a prior staged import when another file is selected');
 const current=role==='INSTRUCTOR'?{schema:3,phase:'setup',lang:'en',sessionCode:'SEA3-T2-AAAAAAAAAAAAAAAA',marker:'old'}:{schema:3,phase:'planning',lang:'en',sessionCode:'SEA3-T2-AAAAAAAAAAAAAAAA',marker:'old'};
 const restoreSource=extractFunction(sourceFile,'restorePreviousBackup'),previousRaw=backupApi.makeBackup(role,candidate),restoreCalls={committed:null,status:null};
 const restoreSandbox={MAX_BACKUP_CHARS:500000,STORE_KEY:'SEA_'+role+'_V300',state:JSON.parse(JSON.stringify(current)),pendingBackupImport:null,backupImportGeneration:0,backupStatus:key=>{restoreCalls.status=key},
  sessionStorage:{getItem:key=>{assert.equal(key,'SEA_'+role+'_V300_PRE_IMPORT');return previousRaw}},
  parseBackup:backupApi.parseBackup,validateInstructorSave:instructorValidator,validateStudentSave:studentValidator,
  commitBackupImport(token){restoreCalls.committed=token;return false}};
 const restorePrevious=runInNewContext(restoreSource+'\nrestorePreviousBackup',restoreSandbox);
 assert.equal(restorePrevious(),false,role+' previous-session restore waits at the shared confirmation gate');
 assert.equal(restoreSandbox.pendingBackupImport.token,1,role+' previous-session copy is validated before staging');
 assert.equal(restoreSandbox.pendingBackupImport.original,restoreSandbox.state,role+' previous-backup staging retains current session identity');
 assert.equal(restoreCalls.committed,1,role+' restore routes through the normal stale-safe replacement transaction');
 const commitSource=extractFunction(sourceFile,'commitBackupImport');
 function importHarness({stale=false,equalReplacement=false,downloadFails=false,storageFails=false}={}){
  const calls={downloads:[],events:[],statuses:[],confirm:null,approved:null};
  const elements=new Map(['#teamCount','#revealMode','#timingMode','#bidSeconds','#sessionInput','#teamSelect'].map(id=>[id,{value:''}]));
  const sandbox={state:JSON.parse(JSON.stringify(current)),pendingBackupImport:{token:7,candidate:JSON.parse(JSON.stringify(candidate)),before:JSON.stringify(current)},lang:'en',recoveryBlocked:false,storageFailed:false,backupStatusKey:null,
   makeBackup:(role,state)=>JSON.stringify({format:'SEA-GAME-BACKUP',version:1,appVersion:'3.0.0-local',ruleset:'STANDARD',deck:'synthetic-v1',schema:state.schema,sessionCode:state.sessionCode,role,state}), t:key=>key, seaConfirmGate(key,message,retry){if(calls.approved===key){calls.approved=null;return true}calls.confirm={key,message,retry};return false},
   JSON, sessionStorage:{setItem(key,value){calls.events.push('stored-prior');if(storageFails)throw new Error('quota');calls.prior={key,value}}},
   saveBackupDownload(raw,suffix){if(downloadFails)throw new Error('download');calls.events.push('downloaded-prior');calls.downloads.push({raw,suffix,active:sandbox.state})},
   stopTimer(){calls.events.push('timer-stopped')}, saveState(){calls.events.push('saved-candidate');return true},
   phase(phase){calls.events.push('phase:'+phase)},renderAll(){calls.events.push('rendered')},backupStatus(key){calls.statuses.push(key)},
   populateTeamSelect(code){calls.events.push('team-options:'+code)},$:id=>elements.get(id)||{value:''}
  };
  sandbox.pendingBackupImport.original=sandbox.state;
  const fn=runInNewContext(sharedEngineSource+'\n'+commitSource+'\ncommitBackupImport',sandbox);
  if(equalReplacement){assert.equal(fn(7),false);const restored=structuredClone(sandbox.state);sandbox.state=restored;calls.approved='backup-import-7';assert.equal(calls.confirm.retry(),false,role+' import cannot replace an equal-byte new active session');assert.equal(sandbox.state,restored);assert.equal(sandbox.pendingBackupImport,null);assert.deepEqual(calls.events,[]);assert.deepEqual(calls.downloads,[]);assert.deepEqual(calls.statuses,['backup.changed']);return}
  if(stale){calls.confirm=null;assert.equal(fn(7),false,'Import first waits for explicit confirmation');sandbox.state.marker='changed-after-prompt';calls.approved='backup-import-7';calls.confirm.retry();assert.equal(sandbox.state.marker,'changed-after-prompt','Stale confirmation cannot replace newer active data');assert.equal(calls.events.length,0,'Stale confirmation performs no backup, persistence or rendering');assert.deepEqual(calls.statuses,['backup.changed']);return}
  assert.equal(fn(7),false,'Import prompts for confirmation before replacing the live session');
  assert.ok(calls.confirm,'Scoped replacement confirmation is pending');
  const confirmation=calls.confirm;calls.approved=confirmation.key;confirmation.retry();
  if(downloadFails){assert.equal(sandbox.state.marker,'old','Failure to preserve the current session leaves it active');assert.equal(calls.events.includes('saved-candidate'),false,'A failed pre-import export never persists the candidate');assert.deepEqual(calls.statuses,['backup.failed']);return}
  assert.equal(calls.downloads.length,1,'Current role-specific session is exported before replacement');
  assert.equal(calls.downloads[0].suffix,'pre-import');assert.equal(calls.downloads[0].active.marker,'old','Pre-import export occurs before active state changes');
  assert.equal(JSON.parse(calls.downloads[0].raw).role,role,'Pre-import file keeps the active role label');
  assert.equal(sandbox.state.phase,candidate.phase,'Validated backup replaces the active phase after confirmation');
  assert.equal(calls.events.includes('saved-candidate'),true,'Imported state is persisted after replacement');
  assert.deepEqual(calls.statuses,['backup.imported']);
  if(role==='INSTRUCTOR')assert.ok(calls.events.indexOf('timer-stopped')<calls.events.indexOf('saved-candidate'),'Instructor timers stop before state replacement');
  else assert.ok(calls.events.includes('team-options:'+candidate.sessionCode),'Student join controls reflect the imported session');
 }
 importHarness();importHarness({stale:true});importHarness({equalReplacement:true});importHarness({downloadFails:true});importHarness({storageFails:true});
}
console.log('Instructor/student import confirmation, stale-state rejection and pre-replacement preservation examples PASS');
// R09/R10/R23, T11/T24: deferred reads must preserve the latest user import intent.
for(const role of ['instructor','student'])for(const newer of ['file','cancel','oversize','restore','missing-restore','invalid-restore','changed-state','rejected-old']){
 const sourceFile=role==='instructor'?instructorSource:studentSource,calls={staged:[],statuses:[],parsed:[]};
 const context={MAX_BACKUP_CHARS:500000,MAX_BACKUP_BYTES:1500000,state:{sessionCode:'active'},pendingBackupImport:null,backupImportGeneration:0,STORE_KEY:'test-role-store',JSON,
  parseBackup(raw){calls.parsed.push(raw);return JSON.parse(raw)},validateInstructorSave:x=>x,validateStudentSave:x=>x,
  backupStatus:key=>calls.statuses.push(key),sessionStorage:{getItem:()=>newer==='missing-restore'?null:newer==='invalid-restore'?'{':JSON.stringify({marker:'restored'})},
  commitBackupImport(token){calls.staged.push({token,marker:context.pendingBackupImport.candidate.marker});return false}};
 const api=runInNewContext('async '+extractFunction(sourceFile,'readBackupFile')+'\n'+extractFunction(sourceFile,'restorePreviousBackup')+'\n;({readBackupFile,restorePreviousBackup})',context);
 let resolveOld,rejectOld;const oldRead=new Promise((resolve,reject)=>{resolveOld=resolve;rejectOld=reject});
 const oldRun=api.readBackupFile({size:10,text:()=>oldRead});
 if(newer==='file'||newer==='rejected-old')await api.readBackupFile({size:10,text:async()=>JSON.stringify({marker:'new'})});
 if(newer==='cancel')await api.readBackupFile(null);
 if(newer==='oversize')await api.readBackupFile({size:1500001,text:()=>{throw Error('Oversize must not be read')}});
 if(['restore','missing-restore','invalid-restore'].includes(newer))api.restorePreviousBackup();
 if(newer==='changed-state')context.state.sessionCode='replacement';
 const staged=JSON.stringify(calls.staged),statuses=JSON.stringify(calls.statuses),pending=JSON.stringify(context.pendingBackupImport);
 if(newer==='rejected-old')rejectOld(Error('old read failed'));else resolveOld(JSON.stringify({marker:'old'}));
 await oldRun;
 assert.equal(JSON.stringify(calls.staged),staged,role+' stale read cannot replace '+newer+' intent');
 assert.equal(JSON.stringify(context.pendingBackupImport),pending,role+' stale read cannot replace pending candidate');
 if(newer==='changed-state')assert.deepEqual(calls.statuses,['backup.changed'],role+' changed active state is diagnosed');
 else assert.equal(JSON.stringify(calls.statuses),statuses,role+' stale read cannot overwrite status for '+newer);
}
const duplicateOutcome=JSON.parse(JSON.stringify(fullSave));duplicateOutcome.ledger[2].round=1;duplicateOutcome.ledger[2].lot=1;duplicateOutcome.ledger[2].card=transactionMarket[0][0].id;
const duplicateBefore=JSON.stringify(duplicateOutcome);
assert.throws(()=>sale.fns.validateInstructorSave(duplicateOutcome),/invalid-state/,'A duplicate effective outcome for one lot is rejected');
assert.equal(JSON.stringify(duplicateOutcome),duplicateBefore,'Rejected duplicate-lot replay preserves the input snapshot');
console.log('Instructor sale, correction, invalid-result, void and recommit transaction examples PASS');
