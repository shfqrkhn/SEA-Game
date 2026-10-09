import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareInspection,prepareCutaway,fitPerspective} from '../../source/three/inspection.mjs';
import {createMission,createPart,createConfiguration,MISSION_IDS,MODEL_IDS} from '../../source/three/game-models.mjs';
const shared=new THREE.MeshStandardMaterial(),originalGhost=new THREE.MeshStandardMaterial({transparent:true,opacity:.16,depthWrite:false}),fixture=new THREE.Group();
const shell=new THREE.Mesh(new THREE.BoxGeometry(),shared),equipment=new THREE.Mesh(new THREE.BoxGeometry(),shared),ghost=new THREE.Mesh(new THREE.BoxGeometry(),[originalGhost,shared]);
shell.name=ghost.name='hull shell';shell.castShadow=true;fixture.add(shell,equipment,ghost);
const cutaway=prepareCutaway(fixture),sharedVersion=shared.version;let disposals=0;
for(let cycle=0;cycle<12;cycle++){
 cutaway.apply(true);const temporary=shell.material,temporaryArray=ghost.material;
 assert.notEqual(temporary,shared,'Cutaway cannot mutate a paint used by equipment');
 assert.equal(temporary.transparent,true);assert.equal(temporary.opacity,.13);assert.equal(temporary.depthWrite,false);assert(temporary.version>0,'Opacity mode compiles with transparent shader state');
 assert.equal(shell.castShadow,false,'Ghost shells cannot cast opaque interior shadows');
 assert.equal(equipment.material,shared);assert.equal(shared.opacity,1);assert.equal(shared.version,sharedVersion);
 temporary.addEventListener('dispose',()=>disposals++);temporaryArray.forEach(m=>m.addEventListener('dispose',()=>disposals++));
 cutaway.apply(true);assert.equal(shell.material,temporary,'Refresh reuses temporary materials');
 cutaway.dispose();assert.equal(shell.material,shared);assert.equal(shell.castShadow,true);assert.equal(ghost.material[0],originalGhost);assert.equal(originalGhost.opacity,.16,'Configuration translucency survives restoration');
 assert.equal(disposals,(cycle+1)*3,'All temporary materials are disposed exactly once');cutaway.dispose();assert.equal(disposals,(cycle+1)*3);
}
console.log('Cutaway shader state, shared-paint isolation, original translucency/shadow restoration and bounded temporary material disposal PASS');
for(const id of MISSION_IDS){const model=createMission(id);assert(model.getObjectByName('driver controls'),id+' requires a real cockpit');let wheels=0,brakes=0;model.traverse(o=>{if(o.name==='run-flat wheel')wheels++;if(o.name==='ventilated brake rotor')brakes++;});assert.equal(brakes,wheels,id+' requires a brake per wheel');}
console.log('Real cockpit and brake topology PASS');

for(const [ids,factory]of [[MISSION_IDS,createMission],[MODEL_IDS,createPart]])for(const id of ids){const root=factory(id),before=[];root.updateWorldMatrix(true,true);root.traverse(o=>{if(o.isMesh)before.push([o,o.matrixWorld.toArray()]);});const plan=prepareInspection(root);assert(plan.parts.length>=2,id+' semantic assemblies');for(const separation of [0,.35,1,.35,0]){plan.apply(separation);for(const aspect of [.5,1.6,3]){const camera=new THREE.PerspectiveCamera(38);fitPerspective(camera,root,aspect);root.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){const point=new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld).project(camera);assert(Math.abs(point.x)<=.87&&Math.abs(point.y)<=.87&&Math.abs(point.z)<=1.001,id+' exploded cropping');}});}}plan.restore();for(const [o,matrix]of before)assert.deepEqual(o.matrixWorld.toArray(),matrix,id+' exact assembled restoration');assert.throws(()=>plan.apply(NaN));assert.throws(()=>plan.apply(1.1));}
console.log('All 77 semantic exploded assemblies: bounded perspective framing, repeatability and exact restoration PASS');

for(const mission of MISSION_IDS)for(let variant=0;variant<7;variant++){const owned=['CAP','MOB','FP','PRO','COM','SA','ACC'].map(p=>({id:p+'-'+String.fromCharCode(65+variant)})),before=JSON.stringify(owned),root=createConfiguration(mission,owned),plan=prepareInspection(root);assert.equal(plan.parts.filter(p=>p.key.startsWith('equipment:')).length,7);for(const separation of [1,.5,0]){plan.apply(separation);const camera=new THREE.PerspectiveCamera(38);fitPerspective(camera,root,.5);root.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){const p=new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld).project(camera);assert(Math.abs(p.x)<=.87&&Math.abs(p.y)<=.87,mission+' fitted assembly cropping');}});}assert.equal(JSON.stringify(owned),before);}
console.log('All 42 purchased-hardware builds: exploded perspective framing and immutable purchases PASS');
