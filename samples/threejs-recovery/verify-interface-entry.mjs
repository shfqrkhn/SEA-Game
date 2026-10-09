import assert from 'node:assert/strict';
import * as THREE from 'three';
import {interfaceLayout,hitInterface,paginateRows,createInterface} from '../../source/three/interface.mjs';

// Actual renderer with a finite canvas stub: layout/ownership evidence, not GPU,
// browser font, screen-reader, native keyboard or real device acceptance.
const originalDocument=globalThis.document,draws=[];
globalThis.document={createElement(){const canvas={width:0,height:0};let scale=1;const ctx={font:'14px system-ui',scale(x){scale=x;},measureText(value){const size=Number(this.font.match(/(\d+(?:\.\d+)?)px/)?.[1]||14);return {width:String(value).length*size*.49};},fillText(value,x,y,maxWidth){draws.push({value:String(value),x,y,maxWidth,width:canvas.width/scale,height:canvas.height/scale,size:Number(this.font.match(/(\d+(?:\.\d+)?)px/)?.[1]||14)});}};canvas.getContext=()=>ctx;return canvas;}};
const ui=createInterface(),events=[],owned=new Map();
function track(){ui.scene.traverse(o=>{for(const r of [o.geometry,...(Array.isArray(o.material)?o.material:o.material?[o.material]:[]),...(o.material?.map?[o.material.map]:[])])if(r&&!owned.has(r)){const item={disposals:0};owned.set(r,item);r.addEventListener('dispose',()=>item.disposals++);}});}
function render(snapshot,w,h){const drawStart=draws.length;const previous=[...owned].filter(([,v])=>!v.disposals).map(([r])=>r);const layout=ui.set(snapshot,(key,value)=>events.push([key,value]),w,h);for(const d of draws.slice(drawStart))assert(d.y<=d.height+.01,'Rendered text line centre cannot lie beyond its canvas');for(const r of previous)assert.equal(owned.get(r).disposals,1,'Every prior scene-owned resource disposed once on redraw');track();return layout;}
function box(b,w,h,label){assert(b&&Number.isFinite(b.x+b.y+b.w+b.h),label+' finite rectangle');assert(b.w>=44&&b.h>=44,label+' target at least44px');assert(b.x>=0&&b.y>=0&&b.x+b.w<=w+.01&&b.y+b.h<=h+.01,label+' contained in viewport');}
function centre(b){return [b.x+b.w/2,b.y+b.h/2];}
const utilities=[{key:'locale',kind:'button',label:'FR',utility:'language'},...['assembled','exploded','cutaway','front','rear','reset'].map((mode,i)=>({key:'inspect-'+mode,kind:'button',label:['Assembled','Exploded','Cutaway','Front','Rear','Overview'][i],utility:'inspection',selected:i===0}))];
const sections=['task','teams','market','tools','inspect','help'];
const rows=[{key:'disabled-primary',kind:'button',label:'Commit unavailable',section:'task',primary:true,disabled:true},{key:'open',kind:'button',label:'Open bidding',section:'task',primary:true},...sections.flatMap((section,i)=>Array.from({length:i===1?16:3},(_,n)=>({key:section+'-'+n,kind:n===0?'text':'button',label:section+' context '+n,section}))),...utilities];
const snapshot=Object.freeze({title:'Auction',subtitle:'Current lot',rows:Object.freeze(rows.map(r=>Object.freeze({...r}))),section:'teams',sectionEpoch:17,lang:'en'}),original=JSON.stringify(snapshot);
try{
 for(const [w,h]of [[320,260],[320,640],[640,300],[850,700],[1280,720],[1440,900]]){
  let layout=render(snapshot,w,h);
  assert.equal(layout.inspectionButtons?.length,6,'Actual model toolbar retains all direct view modes');
  assert.equal(layout.primaryButton?.row.key,'open','Enabled next command pinned regardless selected section');
  assert(!layout.placed.some(v=>v.row.primary||v.row.utility),'Pinned action and utilities do not consume ordinary pagination');
  assert.equal(layout.sectionButtons.length,6,'All six sections directly visible without cyclic navigation');
  assert.equal(layout.inspectionButtons[0].row.selected,true,'Selected mode survives copied presentation');
  for(const [i,b]of layout.inspectionButtons.entries()){
   box(b,w,h,'View '+i);assert(b.x>=layout.model.x&&b.y>=layout.model.y&&b.x+b.w<=layout.model.x+layout.model.w&&b.y+b.h<=layout.model.y+layout.model.h,'Direct view target lies beside model, not over task header');const key=ui.hit(...centre(b));assert.equal(key,b.row.key);const count=events.length;ui.activate(key);assert.equal(events.length,count+1,'View command dispatch exactly once');assert.equal(events.at(-1)[0],b.row.key);
  }
  for(const b of [...layout.headerButtons,...layout.sectionButtons,...(layout.pageButtons||[])])box(b,w,h,'Global navigation');
  const targets=[...layout.headerButtons,...layout.sectionButtons,...layout.inspectionButtons,...(layout.pageButtons||[]),layout.primaryButton];
  for(let a=0;a<targets.length;a++)for(let b=a+1;b<targets.length;b++){const u=targets[a],v=targets[b];assert(!(u.x<v.x+v.w&&v.x<u.x+u.w&&u.y<v.y+v.h&&v.y<u.y+u.h),'Global target overlap '+JSON.stringify({w,h,a:u.key||u.row?.key,b:v.key||v.row?.key,u,v}));}
  box(layout.primaryButton,w,h,'Pinned command');assert.equal(ui.hit(...centre(layout.primaryButton)),'open');
  const count=events.length;ui.activate('open');assert.equal(events.length,count+1);assert.deepEqual(events.at(-1),['open',undefined]);
  assert.equal(ui.hit(-1,-1),null);assert.equal(ui.hit(w+1,h+1),null);
  const p=layout.model;assert(p.w>0&&p.h>0,'Responsive model retains usable rectangle');assert(ui.hit(p.x+p.w-1,p.y+p.h-1)!=='open','Model space cannot invoke global primary');
  const total=layout.pages,reached=new Set();
  for(let page=0;page<total;page++){
   layout=render({...snapshot,page},w,h);
   for(const item of layout.placed){assert(item.y>=layout.panel.y+layout.contentY&&item.y+item.h<=layout.panel.y+layout.panel.h-(layout.footerHeight||0),'Content cannot overlap persistent footer targets');reached.add(item.row.key);if(item.row.kind==='button'){
    const x=item.x??layout.panel.x+14,width=item.w??layout.panel.w-28,y=item.y+item.h/2;
    assert.equal(ui.hit(x+width/2,y),item.row.key);assert.notEqual(ui.hit(x-1,y),item.row.key,'Row hit respects left inset');assert.notEqual(ui.hit(x+width+1,y),item.row.key,'Row hit respects right inset');
   }}
   assert.equal(layout.primaryButton.row.key,'open');assert.equal(layout.inspectionButtons.length,6);
  }
  assert.deepEqual([...reached].sort(),rows.filter(r=>r.section==='teams').map(r=>r.key).sort(),'Every selected-section row remains reachable');
  layout=render({...snapshot,page:0},w,h);let n=events.length;ui.activate('__previous');assert.equal(events.length,n,'Previous page cannot underflow');
  layout=render({...snapshot,page:9999},w,h);n=events.length;ui.activate('__next');assert.equal(events.length,n,'Next page cannot overflow');
  layout=render({...snapshot,page:0},w,h);const sectionKey=layout.sectionButtons.find(b=>b.key.endsWith(':market')).key;n=events.length;ui.activate(sectionKey);track();assert.equal(events.length,n+1);assert.deepEqual(events.at(-1),['__section','market']);assert.equal(ui.layout.section,'market');
  render({title:'Confirm',section:'task',sectionEpoch:18,rows:[{key:'confirm',kind:'button',label:'Confirm',primary:true,section:'task'},...utilities]},w,h);n=events.length;ui.activate(sectionKey);assert.equal(events.length,n,'Stale section key cannot escape confirmation');
  const disabledView=utilities.map(r=>r.key==='inspect-exploded'?{...r,disabled:true}:r);layout=render({...snapshot,rows:[...rows.filter(r=>!r.utility),...disabledView]},w,h);const disabledTarget=layout.inspectionButtons.find(b=>b.row.disabled);assert.equal(ui.hit(...centre(disabledTarget)),'__panel');n=events.length;ui.activate(disabledTarget.row.key);assert.equal(events.length,n,'Disabled view mode rejects direct dispatch');
  const disabled=rows.map(r=>r.key==='open'?{...r,disabled:true}:r);layout=render({...snapshot,rows:disabled},w,h);assert(!layout.primaryButton,'No disabled command is pinned');n=events.length;ui.activate('open');ui.activate('disabled-primary');ui.activate('not-a-public-key');assert.equal(events.length,n,'Disabled and unknown keys cannot dispatch');
 }
 // Long EN/FR informational content must survive continuation pagination.
 for(const lang of ['en','fr']){
  const label=Array.from({length:120},(_,i)=>(lang==='fr'?'Vérification':'Verification')+i).join(' '),value='Mission '+Array.from({length:35},(_,i)=>'requirement'+i).join(' ');
  const pages=paginateRows([{key:'long',kind:'text',label,value}],320,300);assert(pages.length>1);
  assert.equal(pages.flat().map(v=>v.row.label).join(' ').replace(/\s+/g,' '),label+' '+value,'No long label/value lines dropped');
  const primaryLabel=lang==='fr'?'Confirmer le résultat de la vente et poursuivre le prochain lot':'Confirm auction result and proceed to the next available lot';
  const l=render({title:lang==='fr'?'Vente aux enchères':'Auction',lang,section:'help',rows:[{key:'proceed',kind:'button',label:primaryLabel,primary:true,section:'task'},...utilities.map((r,i)=>lang==='fr'?{...r,label:['EN','Assemblé','Éclaté','En coupe','Avant','Arrière','Vue générale'][i]}:r)]},320,640);assert.equal(l.primaryButton.row.label,primaryLabel,'Full bilingual command label retained');
 }
 // Paired caller grid preserves every original command and full eligibility label.
 for(const lang of ['en','fr'])for(const [w,h]of [[1280,720],[320,260],[320,640],[640,300]]){
  const callers=Array.from({length:10},(_,i)=>Object.freeze({key:'caller-'+(i+1),kind:'button',compact:'bid',section:'task',label:lang==='fr'?`Équipe ${i+1} · Dépannage · 0 gains · Admissible · Accepter 350 000 $`:`Team ${i+1} · Recovery · 0 wins · Eligible · Accept $350,000`}));
  const request=Object.freeze({title:lang==='fr'?'Enchérisseurs':'Callers',lang,section:'task',rows:Object.freeze([...callers,...utilities])}),before=JSON.stringify(request),labels=new Map(),seen=new Set();
  let layout=render(request,w,h);if(w===1280){assert.equal(layout.pages,1,'Ten callers alone are directly available without desktop page traversal');assert.equal(new Set(layout.placed.map(v=>v.x)).size,2,'Desktop callers occupy two distinct actual hit columns');}
  const total=layout.pages;for(let page=0;page<total;page++){
   layout=render({...request,page},w,h);const placed=layout.placed.filter(v=>v.row.key.startsWith('caller-'));
   for(let a=0;a<placed.length;a++){
    const item=placed[a];box(item,w,h,'Caller '+item.row.key);assert(item.y+item.h<=layout.panel.y+layout.panel.h-layout.footerHeight,'Caller cannot overlap global footer');
    for(let b=a+1;b<placed.length;b++){const other=placed[b];assert(!(item.x<other.x+other.w&&other.x<item.x+item.w&&item.y<other.y+other.h&&other.y<item.y+item.h),'Paired caller hit rectangles cannot overlap');}
    seen.add(item.row.key);labels.set(item.row.key,[...(labels.get(item.row.key)||[]),item.row.label]);assert.equal(ui.hit(...centre(item)),item.row.key);const count=events.length;ui.activate(item.row.key);assert.equal(events.length,count+1,'Each caller command dispatches exactly once');assert.equal(events.at(-1)[0],item.row.key);
    assert.notEqual(ui.hit(item.x-1,item.y+item.h/2),item.row.key);assert.notEqual(ui.hit(item.x+item.w+1,item.y+item.h/2),item.row.key);
   }
  }
  assert.deepEqual([...seen].sort(),callers.map(r=>r.key).sort(),'Every original caller key reachable');
  for(const row of callers)assert.equal(labels.get(row.key).join(' ').replace(/\s+/g,' ').trim(),row.label,'Complete bilingual eligibility label retained across caller continuations');
  assert.equal(JSON.stringify(request),before,'Caller grid cannot mutate source snapshot');
 }
 assert.equal(JSON.stringify(snapshot),original,'Frozen caller snapshot remains unchanged');
 const last=ui.layout,drawCount=draws.length;assert.equal(ui.resize(640,300),last,'Unchanged size reuses layout');assert.equal(draws.length,drawCount,'Unchanged size does not allocate/draw');
 // Repeated replacement has bounded live ownership; every tracked geometry,
 // material and canvas texture must be released exactly once.
 let peak=0;for(let i=0;i<32;i++){render({...snapshot,page:i%3},1280,720);const live=[...owned.values()].filter(v=>!v.disposals).length;peak=Math.max(peak,live);assert(live<400,'Finite renderer live-resource bound');}
 ui.dispose();for(const v of owned.values())assert.equal(v.disposals,1,'No retained or double-disposed scene resource');assert.equal(ui.scene.children.length,0);
 console.log('PASS: actual toolbar/pinned commands, direct responsive navigation, bilingual continuations, full hit bounds, guarded commands, immutable snapshots and finite scene-resource disposal; no GPU/device acceptance claim');
}finally{ui.dispose();globalThis.document=originalDocument;}
