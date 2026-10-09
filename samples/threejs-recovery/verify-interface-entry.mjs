import assert from 'node:assert/strict';
import {interfaceLayout,hitInterface,paginateRows,createInterface} from '../../source/three/interface.mjs';
for(const [w,h] of [[320,640],[850,700],[1440,900]]){
 const layout=interfaceLayout(w,h,70),p=layout.panel;assert.ok(layout.capacity>0);assert.ok(layout.pages>1);assert.equal(layout.model.h+(w<850?p.h:0),h);assert.ok(layout.model.w>0);
 const rows=Array.from({length:70},(_,i)=>({key:String(i),kind:'button'}));assert.equal(hitInterface(layout,p.x+30,p.y+105,rows,1),String(layout.capacity));rows[layout.capacity].disabled=true;assert.equal(hitInterface(layout,p.x+30,p.y+105,rows,1),'__panel');assert.equal(hitInterface(layout,-1,-1,rows),null);assert.equal(hitInterface(layout,p.x+10,p.y+p.h-10,rows),'__previous');assert.equal(hitInterface(layout,p.x+p.w-10,p.y+p.h-10,rows),'__next');
}
const longText=Array.from({length:150},(_,i)=>`word${i}`).join(' '),pages=paginateRows([{key:'long',kind:'text',label:longText}],320,360);assert.ok(pages.length>1);assert.equal(pages.flat().map(v=>v.row.label).join(' ').replace(/\s+/g,' '),longText);assert.ok(pages.flat().every(v=>v.h<=220));
for(const [w,h] of [[640,300],[320,360]]){
 const {panel}=interfaceLayout(w,h),pages=paginateRows([{key:'confirm',kind:'button',label:'Confirm'}],panel.w,panel.h);
 assert.ok(88+pages[0][0].h<=panel.h-46,'Short-screen action must not overlap pagination targets');
}
const headerLayout=interfaceLayout(320,640),language={key:'language',kind:'button',label:'FR',disabled:false};
headerLayout.headerButtons=[{row:language,x:258,y:headerLayout.panel.y+10,w:48,h:44}];
assert.equal(hitInterface(headerLayout,280,headerLayout.panel.y+28,[]),'language','Persistent header action reuses its semantic key');
language.disabled=true;assert.equal(hitInterface(headerLayout,280,headerLayout.panel.y+28,[]),'__panel','Disabled utility cannot invoke an action');
// Execute the actual renderer layout, rather than a manually authored hit map.
// Canvas is a bounded drawing stub; this is not live text/focus/accessibility proof.
const previousDocument=globalThis.document;
globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({scale(){},measureText:value=>({width:String(value).length*8}),fillText(){}})})};
const ui=createInterface(),activated=[];
try{
 const utility={key:'locale',kind:'button',label:'FR',utility:'language'},tasks=Array.from({length:18},(_,i)=>({key:'task-'+i,kind:'button',label:'Task '+i}));
 for(const [w,h]of [[320,640],[1280,720]]){
  const initial=ui.set({title:'Auction',subtitle:'Current lot',rows:[...tasks,utility],page:0},key=>activated.push(key),w,h);
  const expected=paginateRows(tasks,initial.panel.w,initial.panel.h).length;
  assert.equal(initial.pages,expected,'Language does not consume a task page');
  for(let page=0;page<expected;page++){
   const layout=ui.set({title:'Auction',subtitle:'Current lot',rows:[...tasks,utility],page},key=>activated.push(key),w,h),b=layout.headerButtons[0];
   assert(b,'Every task page retains language in the actual renderer');
   assert(!layout.placed.some(item=>item.row.utility==='language'),'Language cannot leave an orphan content page');
   const key=ui.hit(b.x+b.w/2,b.y+b.h/2);assert.equal(key,'locale');ui.activate(key);assert.equal(activated.at(-1),'locale','Header hit reaches the authoritative callback');
  }
 }
}finally{ui.dispose();globalThis.document=previousDocument;}
console.log('PASS: responsive scene interface, pagination, hit boundaries and disabled actions');
