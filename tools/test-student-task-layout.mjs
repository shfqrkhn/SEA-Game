import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';

// Actual template + production projection: command grouping and role boundaries.
// This does not establish browser layout, focus, IME or classroom acceptance.
const require=createRequire(new URL('../samples/threejs-recovery/package.json',import.meta.url));
const {parseHTML}=require('linkedom');
const read=path=>fs.readFileSync(new URL('../'+path,import.meta.url),'utf8');
const student=read('source/student.js');
const dictionary=student.split(/\r?\n/).find(line=>line.startsWith('const I18N='));
assert(dictionary,'Canonical student translations are available');
const context=vm.createContext({});
vm.runInContext(dictionary+'\nthis.strings=I18N;',context);
vm.runInContext(read('source/shared/engine.js')+'\n'+read('source/shared/three-presentation.js')+'\nthis.project=seaSceneProjection;this.view=sea3DView;',context);
for(const language of ['en','fr']){
 const {document}=parseHTML(read('source/student.template.html'));
 const active=document.getElementById('auction');
 for(const node of active.querySelectorAll('[data-i18n]')){
  const key=node.getAttribute('data-i18n');
  assert(context.strings[language][key],`${language}: missing ${key}`);
  node.textContent=context.strings[language][key];
 }
 const values={cardInput:'MOB-A',wtp:'350000',decision:'PRIVATE-TEAM-NOTE',wonPrice:'350000'};
 for(const [id,value] of Object.entries(values))document.getElementById(id).value=value;
 const visible=node=>{for(let parent=node;parent;parent=parent.parentElement)if(parent.hidden||parent.getAttribute?.('aria-hidden')==='true')return false;return true;};
 const keys=new WeakMap();let serial=0;
 const keyFor=node=>{if(!keys.has(node))keys.set(node,String(++serial));return keys.get(node);};
 const projection=context.project([active],visible,keyFor);
 const rowFor=id=>projection.rows.find(row=>projection.targets.get(row.key)===document.getElementById(id));
 for(const id of ['cardInput','loadCardBtn','wtp','decision','wonPrice','recordWinBtn','advanceLocalBtn']){
  assert.equal(active.querySelectorAll('#'+id).length,1,`${language}: unique authoritative ${id}`);
  assert.equal(rowFor(id)?.section,'task',`${language}: ${id} must be reachable in Current`);
 }
 for(const id of ['roundSelect','lotSelect'])assert.equal(rowFor(id)?.section,'market',`${language}: ${id} retains named Round context`);
 assert.equal(rowFor('finishAuctionBtn')?.section,'tools','Exceptional early finish retains its existing separate command');
 assert.equal(rowFor('decision').value,values.decision,'Own private note remains editable in own task');
 assert.equal(rowFor('cardInput').value,values.cardInput,'Manual known card input is preserved');
 for(const [id,value] of Object.entries(values))assert.equal(document.getElementById(id).value,value,'Projection cannot alter entered data');
 const own={id:1,mission:'RECOVERY',purchases:[]};
 const instructorState={phase:'auction',revealMode:'MANUAL',revealed:false,round:0,lot:0,teams:[own],market:[[{id:'MOB-A'}]],decision:values.decision,plan:values.decision};
 const publicView=context.view(instructorState,'instructor',1,language);
 assert.equal(publicView.current,null,'Unrevealed instructor market remains hidden');
 assert(!JSON.stringify(publicView).includes(values.decision),'Student-private note must not enter instructor scene view');
}
console.log('Student actual-template EN/FR current-lot task grouping, canonical IDs, retained Round context, input preservation and public-view privacy PASS');
