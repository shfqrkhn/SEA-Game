import assert from 'node:assert/strict';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const compiled=await build({stdin:{contents:"export * from './source/three/interface.mjs';",resolveDir:root,sourcefile:'interface-contract.mjs'},bundle:true,write:false,platform:'node',format:'esm',nodePaths:[fileURLToPath(new URL('../samples/threejs-recovery/node_modules',import.meta.url))]});
const api=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));

const originalDocument=globalThis.document,draws=[];
function width(value,size=14){return [...String(value)].reduce((sum,char)=>sum+(char==='W'?size:char==='i'?size*.25:size*.49),0);}
globalThis.document={createElement(){const canvas={width:0,height:0};let scale=1;const ctx={font:'14px system-ui',scale(x){scale=x;},measureText(value){return {width:width(value,Number(this.font.match(/([\d.]+)px/)?.[1]||14))};},fillText(value,x,y,maxWidth){const size=Number(this.font.match(/([\d.]+)px/)?.[1]||14);draws.push({value,x,y,maxWidth,size,w:canvas.width/scale,h:canvas.height/scale});}};canvas.getContext=()=>ctx;return canvas;}};
const ui=api.createInterface(),events=[];
try{
 const words=Array.from({length:35},(_,i)=>'WWWWW'+i).join(' '),rows=[{key:'proceed',kind:'button',label:'Proceed to next lot',primary:true,section:'task'},...Array.from({length:8},(_,i)=>({key:'help-'+i,kind:i%2?'button':'text',label:words+' '+i,section:'help'})),{key:'locale',kind:'button',label:'FR',utility:'language'}];
 for(const [w,h]of [[320,260],[320,640],[640,300],[1280,720]]){
  let layout=ui.set({title:'Help',section:'help',rows},(key,value)=>events.push([key,value]),w,h),count=layout.pages;
  const retained=new Map();
  for(let page=0;page<count;page++){
   const start=draws.length;layout=ui.set({title:'Help',section:'help',page,rows},(key,value)=>events.push([key,value]),w,h);
   assert.equal(layout.page,page,'Every advertised page is selectable');
   assert(layout.placed.length,'An advertised content page cannot silently omit its rows');
   for(const item of layout.placed){retained.set(item.row.key,[...(retained.get(item.row.key)||[]),item.row.label]);assert(item.y+item.h<=layout.panel.y+layout.panel.h-layout.footerHeight,'Content remains above pinned footer');}
   for(const d of draws.slice(start)){assert(width(d.value,d.size)<=d.maxWidth+.01,'Drawing does not squeeze/clip wide glyph text');assert(d.y+d.size*.625<=d.h+.01,'Full measured line box lies within its texture');}
   assert.equal(ui.hit(layout.primaryButton.x+12,layout.primaryButton.y+12),'proceed');
  }
  for(const row of rows.filter(r=>r.section==='help'))assert.equal(retained.get(row.key)?.join(' ').replace(/\s+/g,' ').trim(),row.label,'Wide-glyph content is completely reachable without hidden continuation text');
 }
 const huge='W'.repeat(120);const wrapped=api.wrapInterfaceText(huge,64,value=>width(value));assert.equal(wrapped.join(''),huge,'Unbroken tokens preserved');assert(wrapped.every(line=>width(line)<=64),'Unbroken tokens fitted by measurement');
 const before=draws.length,layout=ui.layout;assert.equal(ui.resize(1280,720),layout);assert.equal(draws.length,before,'Unchanged resize allocates no textures');
 ui.dispose();assert.equal(ui.scene.children.length,0);ui.dispose();
 console.log('PASS: shared measured layout, wide-glyph continuation reachability, exact full-line texture bounds, persistent next action and unchanged-size reuse. CPU canvas stub only; GPU/browser/accessibility acceptance remains open.');
}finally{ui.dispose();globalThis.document=originalDocument;}
