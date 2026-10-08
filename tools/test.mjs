#!/usr/bin/env node
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Script,runInNewContext} from 'node:vm';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
for(const name of ['instructor','student']){
 const source=read('source/'+name+'.js');
 new Script(source,{filename:name+'.js'});
 assert.doesNotMatch(source,/\\b(?:confirm|alert|prompt)\\s*\\(/,'No blocking browser popups');
 assert.match(source,/function seaConfirmGate\\(/,'In-page confirmation exists');
 assert.match(source,/panel\\._returnFocus/,'Confirmation restores focus');
 assert.match(source,/panel\\.onkeydown/,'Confirmation offers keyboard control');
 assert.match(read(name==='instructor'?'source/instructor.template.html':'source/student.template.html'),/id="practiceArt"/,'Practice art host');
 console.log(name+': syntax and basic UI contract PASS');
}
const source=read('source/instructor.js');
const visibility=source.match(/function visibleLot\\(i\\)\\{[^\\n]+\\}/)?.[0];
assert.ok(visibility,'Instructor visibility rule must exist');
for(const [mode,index,revealed,expected] of [
 ['ROUND',9,false,true],['JIT',0,false,true],['JIT',3,false,true],
 ['JIT',4,false,false],['JIT',4,true,true],['JIT',5,true,false],
 ['MANUAL',3,false,true],['MANUAL',4,false,false],['MANUAL',4,true,true],['MANUAL',5,true,false]
]){
 const fn=runInNewContext(visibility+';visibleLot',{state:{revealMode:mode,lot:4,revealed}});
 assert.equal(fn(index),expected,mode+' lot='+index+' revealed='+revealed);
}
assert.match(source,/state\\.market\\.slice\\(0,state\\.round\\)/,'Previous rounds must remain inspectable');
assert.match(source,/function validateInstructorSave\\(/,'Instructor recovery validator');
assert.match(source,/function commitSale\\(/,'Instructor sale transition');
assert.match(source,/function advance\\(/,'Instructor advance transition');
console.log('Instructor visibility and lifecycle structural tests PASS');
