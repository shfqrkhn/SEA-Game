#!/usr/bin/env node
// Real bridge function in a small DOM event model. Not browser/IME/focus proof.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const code=fs.readFileSync(new URL('../source/shared/three-presentation.js',import.meta.url),'utf8');
const start=code.indexOf(' function sceneAction('),end=code.indexOf(' function syncSceneInterface(',start);
assert(start>=0&&end>start,'Actual editor bridge boundary exists');
function harness(){
 const bodyChildren=[],events=[],node={tagName:'INPUT',type:'text',value:'',isConnected:true,disabled:false,hidden:false,labels:[{tagName:'LABEL',nodeType:1,childNodes:[{nodeType:3,textContent:'Profit'}]}],getAttribute:()=>null};
 function element(tag){return {tagName:tag.toUpperCase(),children:[],listeners:{},value:'',isConnected:true,setAttribute(){},removeAttribute(){},appendChild(child){this.children.push(child)},addEventListener(type,fn){this.listeners[type]=fn},focus(){doc.activeElement=this},remove(){this.isConnected=false},cloneNode(){return element(tag)}}}
 node.cloneNode=()=>element('input');node.dispatchEvent=e=>{events.push(e.type);if(e.type==='change')node.isConnected=false};
 const doc={activeElement:null,createElement:element,body:{appendChild:child=>bodyChildren.push(child)}};
 const ctx=vm.createContext({document:doc,Event:class{constructor(type){this.type=type}},host:{querySelector:()=>({focus(){}})},lang:'en',queue(){},semanticVisible:n=>!n.hidden,sceneTargets:new Map([['profit',node]]),scenePage:0,sceneSection:'task',sceneSectionEpoch:0,sceneSections:new Set(['task','inspect']),editor:null});
 vm.runInContext(code.slice(0,code.indexOf('function seaSceneProjection('))+code.slice(start,end)+'\nthis.act=sceneAction;',ctx);
 return {ctx,node,events,get editor(){return ctx.editor},input(){return ctx.editor.children[0].children[0]},done(){return ctx.editor.children[1]}};
}
const h=harness();h.ctx.act('profit');const input=h.input();
let prevented=false;
assert.equal(typeof h.done().listeners.pointerdown,'function','Done must retain focus until its click commits, avoiding blur/change removal before pointerup');
h.done().listeners.pointerdown({preventDefault(){prevented=true}});
assert.equal(prevented,true,'Pointer press must not blur the native editor before Done click');
for(const value of ['1','12','125','1250','12500','125000']){input.value=value;input.listeners.input();assert(h.node.isConnected,'Input must not prematurely invoke change handler');assert(h.editor,'Multi-digit editor remains open');assert.equal(h.node.value,value)}
assert.deepEqual(h.events,Array(6).fill('input'));h.done().listeners.click();assert.deepEqual(h.events,[...Array(6).fill('input'),'change']);assert.equal(h.editor,null,'Done closes editor after one final authoritative change');
// A select or genuine native change can replace its target before Done; no retry.
const native=harness();native.ctx.act('profit');native.input().value='250000';native.input().listeners.change();native.done().listeners.click();assert.deepEqual(native.events,['change']);assert.equal(native.editor,null);
for(const stale of ['hidden','disabled','disconnected','unmapped']){
 const s=harness();s.ctx.act('profit');const editorInput=s.input();if(stale==='hidden')s.node.hidden=true;if(stale==='disabled')s.node.disabled=true;if(stale==='disconnected')s.node.isConnected=false;if(stale==='unmapped')s.ctx.sceneTargets.delete('profit');editorInput.value='999999';editorInput.listeners.input();assert.equal(s.node.value,'','Stale target cannot receive edit: '+stale);assert.deepEqual(s.events,[]);assert.equal(s.editor,null);
}
const escape=harness();escape.ctx.act('profit');escape.editor.listeners.keydown({key:'Escape',preventDefault(){}});assert.deepEqual(escape.events,[]);assert.equal(escape.editor,null);
// Execute the actual projection refresh: dialog pagination must survive redraws.
const syncStart=code.indexOf(' function syncSceneInterface('),syncEnd=code.indexOf(' function option(',syncStart);
assert(syncStart>=0&&syncEnd>syncStart);
let currentDialog={};const pages=[],rendered=[],taskRows=[],projectedRoots=[],languageControl={id:'langBtn'};
const syncContext=vm.createContext({state:{phase:'setup'},scenePhase:'setup',scenePage:2,sceneSection:'task',sceneSectionEpoch:0,sceneSectionLanguage:'en',sceneSections:new Set(),sceneAlert:'',sceneDialog:null,editor:null,lang:'en',keyFor(){},semanticVisible(){return true},t:x=>x,
 get:id=>id==='seaInlineConfirm'?currentDialog:id==='langBtn'?languageControl:null,sceneAction(){},
 document:{querySelectorAll:()=>[],querySelector:()=>null,body:{classList:{contains:()=>true}}},
 seaSceneProjection:roots=>{projectedRoots.push(roots);return {rows:[...taskRows],targets:new Map()}},runtime:{interface(snapshot){pages.push(snapshot.page);rendered.push(snapshot.rows.map(r=>r.label));return {page:snapshot.page}}}});
vm.runInContext(code.slice(code.indexOf('function seaSceneNavigation('),code.indexOf('function sea3DView('))+code.slice(syncStart,syncEnd)+'\nthis.sync=syncSceneInterface;',syncContext);
syncContext.sync({}, {children:[]}, {context:{setup:'Setup'}});assert.equal(pages.at(-1),0,'A newly opened confirmation starts at page zero');
assert.equal(projectedRoots.at(-1).length,2,'Confirmation projection exposes only the dialog and language control');
assert.equal(projectedRoots.at(-1)[0],currentDialog);assert.equal(projectedRoots.at(-1)[1],languageControl,'Language cancellation remains reachable during a confirmation');
syncContext.scenePage=2;syncContext.sync({}, {children:[]}, {context:{setup:'Setup'}});assert.equal(pages.at(-1),2,'Next confirmation page remains reachable after refresh');
currentDialog={};syncContext.sync({}, {children:[]}, {context:{setup:'Setup'}});assert.equal(pages.at(-1),0,'A different confirmation cannot inherit the old page');
currentDialog=null;syncContext.scenePage=2;syncContext.sync({}, {children:[]}, {context:{setup:'Setup'}});assert.equal(pages.at(-1),0,'Closing confirmation restores the task from page zero');
taskRows.push({label:'Finish',priority:80},{label:'Context',priority:20},{label:'Card ID',priority:20},{label:'Load',priority:30});
syncContext.sync({}, {children:[]}, {context:{setup:'Setup'}});assert.deepEqual(rendered.at(-1),['Context','Card ID','Load','Finish'],'Stable task groups precede secondary actions without losing context');
console.log('Scene native editor multi-digit input, final change, stale/disconnected/hidden/disabled target and Escape characterization PASS; browser qualification still required');

// Navigate actual editor callbacks, including canonical rerender replacement and scope loss.
{
 const app=harness(),frames=[];app.ctx.requestAnimationFrame=fn=>frames.push(fn);app.ctx.state={phase:'submit',sessionCode:'session-A'};app.node.id='profit1';
 const target={...app.node,id:'profit2',value:'second',labels:app.node.labels,isConnected:true};target.dispatchEvent=()=>{};
 app.ctx.sceneTargets.set('next',target);app.ctx.sceneFieldKeys=['profit','next'];app.ctx.document.getElementById=id=>id==='profit2'?target:null;
 app.ctx.act('profit');assert.equal(app.editor.children[2].disabled,true);assert.equal(app.editor.children[3].disabled,false,'Next is available only for a current-section projected field');
 app.input().value='100.01';app.editor.children[3].listeners.click();assert.deepEqual(app.events,['change']);assert.equal(app.editor,null);const fresh={...app.node,isConnected:true,value:'100.01'};app.ctx.sceneTargets.delete('profit');app.ctx.sceneTargets.set('fresh',fresh);app.ctx.sceneFieldKeys=['fresh','next'];app.ctx.document.getElementById=id=>id==='profit1'?fresh:id==='profit2'?target:null;while(frames.length)frames.shift()();assert.equal(app.input().value,'second','Next focuses fresh original target editor after validated change');
 assert.equal(app.editor.children[2].disabled,false,'Previous field is available after replacement');app.editor.children[2].listeners.click();while(frames.length)frames.shift()();assert.equal(app.input().value,'100.01','Previous resolves refreshed prior field by stable native identity');
}
{
 const app=harness(),frames=[];app.ctx.requestAnimationFrame=fn=>frames.push(fn);const target={...app.node,id:'next',isConnected:true};app.ctx.sceneTargets.set('next',target);app.ctx.sceneFieldKeys=['profit','next'];app.ctx.act('profit');assert.equal(app.editor.children[3].disabled,false);app.input().listeners.compositionstart();const composingEditor=app.editor;app.editor.children[3].listeners.click();app.editor.children[1].listeners.click();app.editor.listeners.keydown({key:'Escape',isComposing:true,preventDefault(){throw Error('Composition Escape must remain native');}});assert.equal(app.editor,composingEditor,'Composition Done/Escape cannot close the editor');assert.equal(frames.length,0);assert.deepEqual(app.events,[],'IME composition does not commit or navigate');app.input().listeners.compositionend();
}
for(const stale of ['session','section','target']){
 const app=harness(),frames=[];app.ctx.requestAnimationFrame=fn=>frames.push(fn);app.ctx.state={phase:'submit',sessionCode:'session-A'};const target={...app.node,id:'next',isConnected:true};app.ctx.sceneTargets.set('next',target);app.ctx.sceneFieldKeys=['profit','next'];app.ctx.document.getElementById=()=>target;
 app.ctx.act('profit');const next=app.editor.children[3];if(stale==='session')app.ctx.state.sessionCode='session-B';if(stale==='section')app.ctx.sceneSection='help';if(stale==='target')app.ctx.sceneTargets.delete('profit');next.listeners.click();while(frames.length)frames.shift()();assert.deepEqual(app.events,[],'Stale navigation cannot dispatch canonical input: '+stale);
}
console.log('PASS: editor Next/Previous field bounds, validated change, refreshed target focus, composition and stale scope guards');
