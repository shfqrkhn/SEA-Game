import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as THREE from 'three';
import {createPart,createMission,createConfiguration,MODEL_IDS,MISSION_IDS,materials} from '../../source/three/game-models.mjs';
import {fitCamera} from './models.mjs';
const engine=fs.readFileSync('source/shared/engine.js','utf8');const ids=vm.runInNewContext(engine+'\n[...CARD_INDEX.keys(),"TRAIN-CAP"]');assert.deepEqual([...MODEL_IDS].sort(),Array.from(ids).sort());
const results=[];for(const [kind,list,factory]of [['part',MODEL_IDS,createPart],['mission',MISSION_IDS,createMission]])for(const id of list){
 const model=factory(id,materials());model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model);assert(!bounds.isEmpty(),id);assert([...bounds.min.toArray(),...bounds.max.toArray()].every(Number.isFinite),id);
 if(id.startsWith('CAP-')||id==='TRAIN-CAP'){const expected=id==='TRAIN-CAP'?4:vm.runInNewContext(engine+'\nCARD_INDEX.get('+JSON.stringify(id)+').e.CAP');let seats=0;model.traverse(o=>{if(o.name==='crew seat cushion')seats++;});assert.equal(seats,expected,id+' capacity seats');}
 let meshes=0,triangles=0;model.traverse(o=>{if(o.isMesh){meshes++;const pos=o.geometry.attributes.position;assert(pos?.count>0,id);triangles+=(o.geometry.index?.count||pos.count)/3;}});assert(meshes>5,id);
 for(const aspect of [.5,1,1.6,3])for(const angle of [[7,4.5,7],[-7,4.5,-7],[7,2.7,0]]){
  const camera=new THREE.OrthographicCamera();fitCamera(camera,model,aspect,angle);
  model.traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position;for(let i=0;i<p.count;i++){const point=new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld).project(camera);assert(Math.abs(point.x)<=.801&&Math.abs(point.y)<=.801&&Math.abs(point.z)<=1.001,id+' cropped');}});
 }
 results.push({id,kind,meshes,triangles,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()},cameraChecks:12});
 const gs=new Set(),ms=new Set();model.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)ms.add(o.material);});gs.forEach(x=>x.dispose());ms.forEach(x=>x.dispose());
}
// Assemble every hardware variant on every mission; snapshots remain immutable.
const assemblies=[];
for(const mission of MISSION_IDS)for(let variant=0;variant<7;variant++){
 const letter=String.fromCharCode(65+variant),owned=['CAP','MOB','FP','PRO','COM','SA','ACC'].map(p=>({id:p+'-'+letter}));owned.push({id:'SE-A'});const before=JSON.stringify(owned);
 const model=createConfiguration(mission,owned,materials());assert.equal(JSON.stringify(owned),before);assert.equal(Object.keys(model.userData.installed).length,7);assert(!('SE' in model.userData.installed));
 const mounted=new Set();let meshes=0;model.traverse(o=>{if(o.userData.mountedCard)mounted.add(o.userData.mountedCard);if(o.isMesh)meshes++;});assert.deepEqual([...mounted].sort(),owned.filter(x=>!x.id.startsWith('SE-')).map(x=>x.id).sort());
 model.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(model);assert([...bounds.min.toArray(),...bounds.max.toArray()].every(Number.isFinite));assert(bounds.getSize(new THREE.Vector3()).length()<18,mission+' build physical envelope');
 for(const aspect of [.5,1,1.6,3])for(const angle of [[7,4.5,7],[-7,4.5,-7],[7,2.7,0]]){const camera=new THREE.OrthographicCamera();fitCamera(camera,model,aspect,angle);for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new THREE.Vector3(x,y,z).project(camera);assert(Math.abs(p.x)<.801&&Math.abs(p.y)<.801,mission+' assembly camera envelope');}}
 assemblies.push({mission,variant:letter,installed:model.userData.installed,meshes,cameraChecks:12});
 const gs=new Set(),ms=new Set(),ts=new Set();model.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)ms.add(o.material)});for(const m of ms){for(const value of Object.values(m))if(value?.isTexture)ts.add(value);m.dispose();}gs.forEach(x=>x.dispose());ts.forEach(x=>x.dispose());
}
for(const id of MISSION_IDS){const model=createMission(id,materials());let wheels=0;model.traverse(o=>{if(o.name==='run-flat wheel')wheels++;});assert.equal(wheels,model.userData.axles*2,id+' axle/wheel topology');}
const build=createConfiguration('RECOVERY',[{id:'CAP-A'},{id:'CAP-C'},{id:'SE-A'}]);assert.equal(build.userData.installed.CAP,'CAP-C');assert.throws(()=>createConfiguration('COMBAT',[{id:'UNKNOWN'}]));
assert.throws(()=>createPart('UNKNOWN'));assert.throws(()=>createMission('UNKNOWN'));
console.log('71 parts, 6 missions, 42 assembled builds; canonical capacity, axle topology and camera framing PASS');
