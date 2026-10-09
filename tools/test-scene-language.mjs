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
  setAttribute(k,v){this.attrs[k]=v},getAttribute(k){return this.attrs[k]||null},closest(selector){for(let n=this;n;n=n.parentElement){if(selector==='[data-scene-section]'&&n.getAttribute('data-scene-section')!==null)return n;if(selector==='[data-scene-priority]'&&n.getAttribute('data-scene-priority')!==null)return n;}return null},
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
const active=body.appendChild(element('section')),task=active.appendChild(element('button'));task.textContent='Finish auction';
const stage=active.appendChild(element('div')),canvas=stage.appendChild(element('canvas'));
const findId=(n,id)=>n.id===id?n:n.children.map(c=>findId(c,id)).find(Boolean)||null;
doc={body,activeElement:canvas,createElement:element,getElementById:id=>findId(body,id),querySelector:selector=>selector==='header'?header:null,querySelectorAll:()=>[]};
let latest,saveCalls=0,renderCalls=0,destructiveEffects=0;
const ctx=vm.createContext({document:doc,Event:class{},host:stage,semanticVisible:n=>n.isConnected&&!n.hidden,get:id=>doc.getElementById(id),t:key=>key,queue(){},
 runtime:{interface(snapshot){latest=snapshot;return {page:snapshot.page}}},renderAll(){renderCalls++;language.textContent=ctx.api.lang==='en'?'FR':'EN'},saveState(){saveCalls++}});
vm.runInContext(`let lang='en', state={phase:'auction'}, scenePhase='auction', sceneSection='task', sceneSectionEpoch=0, sceneSectionLanguage='', sceneSections=new Set(), scenePage=0, sceneAlert='', sceneDialog=null, sceneTargets=new Map(), editor=null, serial=0;
 const keys=new WeakMap();function keyFor(n){if(!keys.has(n))keys.set(n,'control-'+(++serial));return keys.get(n)}\n`+projection+presentation.slice(0,presentation.indexOf('function seaNotify('))+bridge.slice(actionStart,actionEnd)+`
 this.api={sync(){syncSceneInterface(stage,active,{context:{auction:'Live lot'}})},act:sceneAction,confirm(){seaConfirmGate('finish','Finish the auction?',()=>{if(seaConfirmGate('finish','Finish the auction?',()=>{}))destructive()})},get lang(){return lang},get section(){return sceneSection}};`,Object.assign(ctx,{stage,active,destructive(){destructiveEffects++}}));
language.onclick=()=>vm.runInContext("setLang(lang==='en'?'fr':'en')",ctx);
for(const nextLocale of ['fr','en']){
 ctx.api.confirm();ctx.api.sync();
 const languageRow=latest.rows.find(r=>r.utility==='language'),confirmRow=latest.rows.find(r=>r.label==='Confirm'||r.label==='Confirmer');
 assert(languageRow&&confirmRow,'Language and current confirmation must share the actual scene projection');
 assert(!latest.rows.some(r=>r.label==='Finish auction'||r.label==='Export backup'),'Confirmation projection excludes underlying destructive and backup actions');
 const staleConfirmKey=confirmRow.key;
 ctx.api.act(languageRow.key);
 assert.equal(ctx.api.lang,nextLocale);assert.equal(doc.getElementById('seaInlineConfirm'),null,'Actual setLang cancels the current confirmation');
 ctx.api.act(staleConfirmKey);assert.equal(destructiveEffects,0,'Disconnected confirmation cannot execute before queued refresh');
 ctx.api.sync();ctx.api.act(staleConfirmKey);assert.equal(destructiveEffects,0,'Removed confirmation key cannot execute after refresh');
 assert(latest.rows.some(r=>r.utility==='language'&&r.label===(nextLocale==='fr'?'EN':'FR')),'Header utility reflects the actual refreshed locale');
}
assert.equal(renderCalls,2);assert.equal(saveCalls,2);assert.equal(destructiveEffects,0);
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
