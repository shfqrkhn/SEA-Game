import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Executes production projection, sync, action bridge and confirmation/language
// functions in a bounded DOM model. Does not qualify browser focus/IME or rendering.
const bridge=fs.readFileSync(new URL('../source/shared/three-presentation.js',import.meta.url),'utf8');
const presentation=fs.readFileSync(new URL('../source/shared/presentation.js',import.meta.url),'utf8');
const projection=bridge.slice(0,bridge.indexOf('function sea3DView('));
const actionStart=bridge.indexOf(' function sceneAction('),actionEnd=bridge.indexOf(' function option(',actionStart);
assert(actionStart>=0&&actionEnd>actionStart);
let body,doc;
function element(tag){
 const e={tagName:tag.toUpperCase(),nodeType:1,children:[],parentElement:null,attrs:{},style:{},disabled:false,hidden:false,value:'',labels:[],className:'',_text:'',
  setAttribute(k,v){this.attrs[k]=v},getAttribute(k){return this.attrs[k]||null},closest(selector){for(let n=this;n;n=n.parentElement){if(selector.startsWith('#')&&n.id===selector.slice(1))return n;if(selector==='summary'&&n.tagName==='SUMMARY')return n;if(selector==='[data-scene-section]'&&n.getAttribute('data-scene-section')!==null)return n;if(selector==='[data-scene-priority]'&&n.getAttribute('data-scene-priority')!==null)return n;}return null},
  appendChild(n){n.parentElement?.children.splice(n.parentElement.children.indexOf(n),1);n.parentElement=this;this.children.push(n);return n},
  append(...nodes){nodes.forEach(n=>this.appendChild(n))},replaceChildren(...nodes){this.children.forEach(n=>{n.parentElement=null});this.children=[];this._text='';this.append(...nodes)},
  insertAdjacentElement(_,n){this.parentElement.appendChild(n)},remove(){if(this.parentElement){this.parentElement.children.splice(this.parentElement.children.indexOf(this),1);this.parentElement=null}},
  contains(n){return n===this||this.children.some(c=>c.contains(n))},focus(){doc.activeElement=this},click(){this.onclick?.()},
  querySelectorAll(selector){const tags=selector.split(',');return this.children.flatMap(c=>[...(tags.includes(c.tagName.toLowerCase())?[c]:[]),...c.querySelectorAll(selector)])},querySelector(selector){return this.querySelectorAll(selector)[0]||null}};
 Object.defineProperties(e,{isConnected:{get(){return this===body||!!this.parentElement?.isConnected}},textContent:{get(){return [this._text,...this.children.map(n=>n.textContent)].filter(Boolean).join(' ')},set(v){this.children.forEach(n=>{n.parentElement=null});this.children=[];this._text=String(v)}},childNodes:{get(){return [...(this._text?[{nodeType:3,textContent:this._text}]:[]),...this.children]}}});
 e.classList={contains:c=>e.className.split(/\s+/).includes(c),add:c=>{if(!e.classList.contains(c))e.className+=' '+c}};
 return e;
}
body=element('body');body.className='scene-game';
const header=body.appendChild(element('header')),language=header.appendChild(element('button'));language.id='langBtn';language.textContent='FR';
const save=header.appendChild(element('button'));save.textContent='Export backup';
const footer=body.appendChild(element('p'));footer.textContent='No automatic synchronization. Synthetic deck approval remains open.';footer.setAttribute('data-scene-section','help');footer.setAttribute('data-scene-priority','90');
const active=body.appendChild(element('section')),task=active.appendChild(element('button'));task.textContent='Finish auction';
const stage=active.appendChild(element('div')),canvas=stage.appendChild(element('canvas'));
const findId=(n,id)=>n.id===id?n:n.children.map(c=>findId(c,id)).find(Boolean)||null;
doc={body,activeElement:canvas,createElement:element,getElementById:id=>findId(body,id),querySelector:selector=>selector==='header'?header:selector==='main>.footer'?footer:null,querySelectorAll:()=>[]};
let latest,saveCalls=0,renderCalls=0,destructiveEffects=0;
const ctx=vm.createContext({document:doc,Event:class{},host:stage,semanticVisible:n=>n.isConnected&&!n.hidden,get:id=>doc.getElementById(id),t:key=>key,queue(){},
 runtime:{interface(snapshot){latest=snapshot;return {page:snapshot.page}}},renderAll(){renderCalls++;language.textContent=ctx.api.lang==='en'?'FR':'EN'},saveState(){saveCalls++}});
vm.runInContext(`let lang='en', state={phase:'auction'}, scenePhase='auction', sceneSection='task', sceneSectionEpoch=0, sceneSectionLanguage='', sceneSections=new Set(), scenePage=0, sceneAlert='', sceneDialog=null, sceneTargets=new Map(), editor=null, serial=0;
 const keys=new WeakMap();function keyFor(n){if(!keys.has(n))keys.set(n,'control-'+(++serial));return keys.get(n)}\n`+projection+presentation.slice(0,presentation.indexOf('function seaNotify('))+bridge.slice(bridge.indexOf(' function selectBuildSummary('),actionEnd)+`
 this.api={sync(){syncSceneInterface(stage,active,{context:{auction:'Live lot'}})},act:sceneAction,confirm(){seaConfirmGate('finish','Finish the auction?',()=>{if(seaConfirmGate('finish','Finish the auction?',()=>{}))destructive()})},get lang(){return lang},get section(){return sceneSection}};`,Object.assign(ctx,{stage,active,destructive(){destructiveEffects++}}));
language.onclick=()=>vm.runInContext("setLang(lang==='en'?'fr':'en')",ctx);
for(const nextLocale of ['fr','en']){
 ctx.api.confirm();ctx.api.sync();
 const languageRow=latest.rows.find(r=>r.utility==='language'),confirmRow=latest.rows.find(r=>r.label==='Confirm'||r.label==='Confirmer');
 assert(languageRow&&confirmRow,'Language and current confirmation must share the actual scene projection');
 assert(!latest.rows.some(r=>r.label==='Finish auction'||r.label==='Export backup'||r.label===footer.textContent),'Confirmation projection excludes underlying actions and help disclosures');
 const staleConfirmKey=confirmRow.key;
 ctx.api.act(languageRow.key);
 assert.equal(ctx.api.lang,nextLocale);assert.equal(doc.getElementById('seaInlineConfirm'),null,'Actual setLang cancels the current confirmation');
 ctx.api.act(staleConfirmKey);assert.equal(destructiveEffects,0,'Disconnected confirmation cannot execute before queued refresh');
 ctx.api.sync();ctx.api.act(staleConfirmKey);assert.equal(destructiveEffects,0,'Removed confirmation key cannot execute after refresh');
 assert(latest.rows.some(r=>r.utility==='language'&&r.label===(nextLocale==='fr'?'EN':'FR')),'Header utility reflects the actual refreshed locale');
}
assert.equal(renderCalls,2);assert.equal(saveCalls,2);assert.equal(destructiveEffects,0);
ctx.api.sync();assert(latest.rows.some(r=>r.label===footer.textContent&&r.section==='help'),'Actual scene sync retains existing product disclosures in Help/save');
// Positive control: the same bridge still executes a current approved action once.
ctx.api.confirm();ctx.api.sync();const currentConfirm=latest.rows.find(r=>r.label==='Confirm');
ctx.api.act(currentConfirm.key);assert.equal(destructiveEffects,1,'Current confirmation remains actionable');
ctx.api.act(currentConfirm.key);assert.equal(destructiveEffects,1,'Double activation cannot repeat a removed confirmation');
console.log('PASS: actual scene projection/sync/action and setLang cancel confirmations in EN/FR; stale confirmation keys are inert before/after refresh. Browser focus/rendering qualification remains open.');


// Execute actual synchronized native navigation: same named presentation command,
// stable focus/identity under refresh and no projection feedback.
header.setAttribute('data-scene-section','help');
const caller=active.appendChild(element('button'));caller.textContent='Accept next caller';caller.setAttribute('data-scene-section','teams');
const inspection=stage.appendChild(element('button'));inspection.textContent='Exploded view';inspection.setAttribute('data-scene-section','inspect');
ctx.api.sync();let nav=findId(stage,'sea3dNavigation');assert(nav&&!nav.hidden);
assert.equal(nav.getAttribute('role'),'navigation');assert.equal(nav.getAttribute('aria-label'),'Game sections');
let inspectChoice=nav.children.find(button=>button.getAttribute('data-scene-section-choice')==='inspect');
assert(inspectChoice);inspectChoice.focus();const originalChoice=inspectChoice;
ctx.api.sync();nav=findId(stage,'sea3dNavigation');assert.equal(nav.children.find(button=>button.getAttribute('data-scene-section-choice')==='inspect'),originalChoice,'Timer refresh retains focused native button identity');assert.equal(doc.activeElement,originalChoice);
assert(!latest.rows.some(row=>row.label==='Current'||row.label==='Inspect'||row.label==='Help / save'),'Native navigation cannot reproject itself into GPU content');
inspectChoice.click();ctx.api.sync();assert.equal(ctx.api.section,'inspect');assert.equal(originalChoice.getAttribute('aria-current'),'page');
const staleHandler=originalChoice.onclick;
ctx.api.confirm();staleHandler();assert.equal(ctx.api.section,'inspect','Pending confirmation rejects previously captured native navigation before refresh');
ctx.api.sync();assert.equal(nav.hidden,true,'Confirmation hides underlying native navigation');assert.equal(ctx.api.section,'task');staleHandler();assert.equal(ctx.api.section,'task');
const confirmationLocale=latest.rows.find(row=>row.utility==='language');ctx.api.act(confirmationLocale.key);ctx.api.sync();
nav=findId(stage,'sea3dNavigation');assert.equal(nav.getAttribute('aria-label'),'Sections du jeu');assert(nav.children.some(button=>button.textContent==='\u00c9quipes'));
staleHandler();assert.equal(ctx.api.section,'task','Old epoch handler cannot choose a section after confirmation/language transitions');
console.log('PASS: synchronized EN/FR native scene navigation, selected ARIA state, stable focus identity, no projection feedback and stale confirmation/epoch handlers');

// Real native shortcut helper and projection: browser default keyboard activation remains a hosted gate.
{
 const publicLabels={views:'Views',assembled:'Assembled',exploded:'Exploded',cutaway:'Cutaway',front:'Front',rear:'Rear',reset:'Overview'},calls=[];
 let binding='auction|session-A|en';
 const select=id=>calls.push(id),current=()=>binding;
 let controls=ctx.seaSceneInspection(stage,publicLabels,'assembled',binding,select,current);
 assert.equal(controls.children.length,6,'All six common commands are available without opening Views');
 const projected=ctx.seaSceneProjection([controls],n=>n.isConnected&&!n.hidden,n=>n.id);
 assert.equal(projected.rows.length,6);assert(projected.rows.every(row=>row.utility==='inspection'&&row.kind==='button'&&row.section==='inspect'));
 assert.equal(projected.rows.filter(row=>row.selected).length,1);assert.equal(projected.rows.find(row=>row.selected).label,'Assembled');
 const explode=controls.children.find(node=>node.id==='sea3d-exploded'),captured=explode.onclick;explode.click();assert.deepEqual(calls,['exploded'],'Native activation routes exactly one original inspection command');
 ctx.seaSceneInspection(stage,publicLabels,'exploded',binding,select,current);assert.equal(explode.getAttribute('aria-pressed'),'true','Original persistent button reflects selected mode');
 for(const changed of ['planning|session-A|en','auction|session-B|en','auction|session-A|fr','']){binding=changed;captured();assert.equal(calls.length,1,'Stale phase/session/language or confirmation command is inert');}
 binding='auction|session-B|en';ctx.seaSceneInspection(stage,publicLabels,'assembled',binding,select,current);const refreshed=ctx.seaSceneProjection([controls],n=>n.isConnected&&!n.hidden,n=>n.id);assert(!refreshed.targets.has(projected.rows[0].key),'Old rendered command keys disappear after a session change');
 binding='auction|session-A|en';controls.hidden=true;captured();assert.equal(calls.length,1,'Hidden confirmation shortcuts cannot activate');controls.hidden=false;
 explode.remove();captured();assert.equal(calls.length,1,'Disconnected shortcut cannot activate');
 const french={...publicLabels,views:'Vues',assembled:'Assemblé',exploded:'Éclaté',cutaway:'En coupe',front:'Avant',rear:'Arrière',reset:'Vue générale'};
 ctx.seaSceneInspection(stage,french,'cutaway',binding,select,current);assert.equal(controls.children.find(node=>node.id==='sea3d-cutaway').getAttribute('aria-pressed'),'true');assert.equal(controls.getAttribute('aria-label'),'Vues');
 ctx.seaSceneInspection(stage,french,'cutaway',binding,select,current,true);assert.equal(controls.hidden,true);assert.equal(ctx.seaSceneProjection([controls],n=>n.isConnected&&!n.hidden,n=>n.id).rows.length,0,'Confirmation removes all shortcut targets');
}
console.log('PASS: six persistent native inspection shortcuts, selected state, direct command routing and stale phase/session/language/confirmation guards; browser keyboard gate remains open');

{
 const first=active.appendChild(element('button'));first.textContent='Next legitimate task';first.setAttribute('data-scene-current-action','true');first.setAttribute('data-scene-priority','50');
 const second=active.appendChild(element('button'));second.textContent='Alternative legitimate task';second.setAttribute('data-scene-current-action','true');second.setAttribute('data-scene-priority','40');
 ctx.api.sync();let pinned=latest.rows.filter(row=>row.primary);assert.equal(pinned.length,1);assert.equal(pinned[0].label,first.textContent);assert.equal(pinned[0].emphasis,'primary');assert(pinned[0].priority<50);
 first.disabled=true;ctx.api.sync();pinned=latest.rows.filter(row=>row.primary);assert.equal(pinned.length,1);assert.equal(pinned[0].label,second.textContent,'Disabled canonical command is never pinned');
 const explicit={role:'Instructor',version:'3.2.0',phase:'Auction',mission:'Recovery',session:'SEA3-T2-0123456789ABCDEF'};
 for(const [id,text] of [['phaseBadge',explicit.phase],['sessionBadge',explicit.session],['versionFixture','v'+explicit.version]]){const n=body.appendChild(element('span'));n.id=id;n.className='badge';n.textContent=text;}
 doc.querySelectorAll=selector=>selector==='body>.status'?[]:[];
 // Existing roots contain header badges; equivalent context suppresses only identical public copies.
 for(const id of ['phaseBadge','sessionBadge','versionFixture'])header.appendChild(findId(body,id));
 ctx.explicit=explicit;vm.runInContext('syncSceneInterface(stage,active,{context:{auction:"Live lot"}},explicit)',ctx);
 assert.equal(latest.context.session,explicit.session);assert(!latest.rows.some(row=>[explicit.phase,explicit.session,'v'+explicit.version].includes(row.label)));
 explicit.phase='Different phase';vm.runInContext('syncSceneInterface(stage,active,{context:{auction:"Live lot"}},explicit)',ctx);assert(latest.rows.some(row=>row.label==='Auction'),'Context mismatch cannot silently suppress native information');
}
console.log('PASS: exactly one enabled authoritative task pin and conditional suppression of matching public context repeats');

// Execute actual scene and native click paths against the same public Build disclosure.
{
 const build=active.appendChild(element('div'));build.id='authoritativeBuild';build._buildSession='session-A';
 const detail=build.appendChild(element('details'));detail.dataset={buildTeam:'2'};detail.open=false;const summary=detail.appendChild(element('summary'));summary.textContent='Team 2 build';
 vm.runInContext("state.phase='build';state.sessionCode='session-A';state.teams=[{id:1},{id:2}];selectedTeam='1';selection='vehicle';signature='old';",ctx);
 const businessBefore=vm.runInContext('JSON.stringify(state)',ctx),savesBefore=saveCalls;ctx.api.sync();ctx.api.act(latest.rows.find(row=>row.label===summary.textContent).key);assert.equal(vm.runInContext('JSON.stringify(state)',ctx),businessBefore);assert.equal(saveCalls,savesBefore,'Disclosure/model correlation never saves business state');assert.equal(detail.open,true);assert.equal(ctx.selectedTeam,'2');assert.equal(ctx.selection,'configuration');assert.equal(ctx.signature,'','Opening summary selects its current purchased build');
 ctx.selectedTeam='1';ctx.api.act(latest.rows.find(row=>row.label===summary.textContent).key);assert.equal(detail.open,false);assert.equal(ctx.selectedTeam,'1','Closing summary does not change inspected team');
 const hook=bridge.match(/document.addEventListener\('click',(.*?)\);document.addEventListener\('change'/)[1];ctx.nativeTarget=summary;vm.runInContext('('+hook+')({target:nativeTarget})',ctx);assert.equal(ctx.selectedTeam,'2','Native summary click/keyboard default click shares selection behavior');
 for(const mutation of [()=>build._buildSession='old-session',()=>{build._buildSession='session-A';detail.dataset.buildTeam='99'},()=>{detail.dataset.buildTeam='2';detail.open=true},()=>{detail.open=false;vm.runInContext("state.phase='submit'",ctx)}]){ctx.selectedTeam='1';mutation();vm.runInContext('('+hook+')({target:nativeTarget})',ctx);assert.equal(ctx.selectedTeam,'1','Stale or unavailable disclosure cannot change inspection team');}
}
console.log('PASS: opening current Build summary correlates model selection across scene/native paths; closing/stale disclosure inert and business state unchanged');

{
 const menu=header.appendChild(element('details'));menu.className='save-menu';menu.open=false;const summary=menu.appendChild(element('summary'));summary.textContent='Save & restore';const content=menu.appendChild(element('div'));
 const exportButton=content.appendChild(element('button'));exportButton.id='exportBackupBtn';exportButton.textContent='Export backup';const importButton=content.appendChild(element('button'));importButton.id='importBackupBtn';importButton.textContent='Import backup';let exports=0,imports=0;exportButton.onclick=()=>exports++;importButton.onclick=()=>imports++;
 const visible=n=>n.isConnected&&!n.hidden&&!(n.parentElement?.tagName==='DETAILS'&&!n.parentElement.open&&n.tagName!=='SUMMARY');
 const closed=ctx.seaSceneProjection([menu],visible,n=>n.id||n.textContent);assert(!closed.rows.some(row=>row.label==='Export backup'),'Predecessor closed menu requires disclosure before export');
 const query=doc.querySelector;doc.querySelector=selector=>selector==='details.save-menu'?menu:query(selector);
 const group=ctx.seaSceneSaveControls(stage,'Save & restore');assert.equal(menu.hidden,true);assert.equal(group.getAttribute('role'),'group');
 const direct=ctx.seaSceneProjection([group],visible,n=>n.id);assert.equal(direct.rows.length,2);assert(direct.rows.every(row=>row.section==='help'&&row.kind==='button'));assert.equal(direct.targets.get('exportBackupBtn'),exportButton);assert.equal(direct.targets.get('importBackupBtn'),importButton,'Original validated controls keep identity');
 direct.targets.get('exportBackupBtn').click();direct.targets.get('importBackupBtn').click();assert.equal(exports,1);assert.equal(imports,1,'Help then original action needs no menu activation');
 ctx.seaSceneSaveControls(stage,'Aide / sauvegarde');assert.equal(group.children.length,1,'Repeated sync cannot duplicate save controls');assert.equal(group.getAttribute('aria-label'),'Aide / sauvegarde');
}
console.log('PASS: native export/import identities exposed directly in Help/save without disclosure or duplicate dispatch');
