import assert from 'node:assert/strict';
import {interfaceLayout,hitInterface,paginateRows} from '../../source/three/interface.mjs';
for(const [w,h] of [[320,640],[850,700],[1440,900]]){
 const layout=interfaceLayout(w,h,70),p=layout.panel;assert.ok(layout.capacity>0);assert.ok(layout.pages>1);assert.equal(layout.model.h+(w<850?p.h:0),h);assert.ok(layout.model.w>0);
 const rows=Array.from({length:70},(_,i)=>({key:String(i),kind:'button'}));assert.equal(hitInterface(layout,p.x+30,p.y+105,rows,1),String(layout.capacity));rows[layout.capacity].disabled=true;assert.equal(hitInterface(layout,p.x+30,p.y+105,rows,1),'__panel');assert.equal(hitInterface(layout,-1,-1,rows),null);assert.equal(hitInterface(layout,p.x+10,p.y+p.h-10,rows),'__previous');assert.equal(hitInterface(layout,p.x+p.w-10,p.y+p.h-10,rows),'__next');
}
const longText=Array.from({length:150},(_,i)=>`word${i}`).join(' '),pages=paginateRows([{key:'long',kind:'text',label:longText}],320,360);assert.ok(pages.length>1);assert.equal(pages.flat().map(v=>v.row.label).join(' ').replace(/\s+/g,' '),longText);assert.ok(pages.flat().every(v=>v.h<=220));
console.log('PASS: responsive scene interface, pagination, hit boundaries and disabled actions');
