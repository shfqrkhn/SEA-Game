import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareInspection,prepareCutaway,fitPerspective,fitDirectionalShadow} from '../../source/three/inspection.mjs';
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
const shadowLight=new THREE.DirectionalLight();shadowLight.position.set(-5,9,6);const fixedLight=shadowLight.position.clone(),fixedTarget=shadowLight.target.position.clone();
for(const dimensions of [[1.7,1.4,1.4],[6.25,3.5,2.3],[11,7,6]]){
 const caster=new THREE.Mesh(new THREE.BoxGeometry(...dimensions),shared);caster.position.y=dimensions[1]/2;
 for(const angle of [0,.7,2.1]){caster.rotation.y=angle;caster.updateWorldMatrix(true,false);const bounds=new THREE.Box3().setFromObject(caster,true),ground=bounds.min.y-.025;fitDirectionalShadow(shadowLight,caster,ground);
  const direction=fixedLight.clone().sub(fixedTarget).normalize();for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
   const point=new THREE.Vector3(x,y,z);for(const p of [point,point.clone().addScaledVector(direction,-(y-ground)/direction.y)]){p.project(shadowLight.shadow.camera);assert(Math.abs(p.x)<1&&Math.abs(p.y)<1&&Math.abs(p.z)<1,'Caster and projected ground shadow stay within shadow map');}
  }
  assert.deepEqual(shadowLight.position,fixedLight);assert.deepEqual(shadowLight.target.position,fixedTarget);assert(shadowLight.shadow.normalBias<=.006);
  if(dimensions[0]<2)assert(shadowLight.shadow.camera.right-shadowLight.shadow.camera.left<4,'Small parts use map resolution rather than a 24m frustum');
 }
 caster.geometry.dispose();
}
console.log('Scale-aware directional shadow framing: caster/contact containment, rotation and fixed world light PASS');
for(const id of MISSION_IDS){const model=createMission(id);assert(model.getObjectByName('driver controls'),id+' requires a real cockpit');let wheels=0,brakes=0;model.traverse(o=>{if(o.name==='run-flat wheel')wheels++;if(o.name==='ventilated brake rotor')brakes++;});assert.equal(brakes,wheels,id+' requires a brake per wheel');}
console.log('Real cockpit and brake topology PASS');

// Maximum separation alone is not a containing envelope: some groups translate
// inward across an assembled extremum. Replay the actual runtime endpoint union.
for(const [ids,factory]of [[MISSION_IDS,createMission],[MODEL_IDS,createPart]])for(const id of ids){
 const root=factory(id),plan=prepareInspection(root);
 for(const rotation of [0,.7,2.1]){root.rotation.y=rotation;plan.apply(0);const envelope=new THREE.Box3().setFromObject(root,true);plan.apply(1);envelope.union(new THREE.Box3().setFromObject(root,true));const ground=envelope.min.y-.025;
  fitDirectionalShadow(shadowLight,root,ground,envelope);const camera=new THREE.PerspectiveCamera(38);fitPerspective(camera,root,.5,[7,4.5,7],envelope);
  for(const separation of [0,.35,.7,1]){plan.apply(separation);const b=new THREE.Box3().setFromObject(root,true);assert(envelope.containsBox(b),id+' endpoint union contains intermediate assembly');
   for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z]){const p=new THREE.Vector3(x,y,z),eye=p.clone().project(camera),shadow=p.clone().project(shadowLight.shadow.camera);assert(Math.abs(eye.x)<=.87&&Math.abs(eye.y)<=.87,id+' transition camera clipping');assert(Math.abs(shadow.x)<1&&Math.abs(shadow.y)<1&&Math.abs(shadow.z)<1,id+' transition shadow clipping');}
  }
 }
}
console.log('All 77 models: rotated assembled/exploded endpoint-union camera/shadow envelopes contain intermediate views PASS');

for(const [ids,factory]of [[MISSION_IDS,createMission],[MODEL_IDS,createPart]])for(const id of ids){const root=factory(id),before=[];root.updateWorldMatrix(true,true);root.traverse(o=>{if(o.isMesh)before.push([o,o.matrixWorld.toArray()]);});const plan=prepareInspection(root);assert(plan.parts.length>=2,id+' semantic assemblies');for(const separation of [0,.35,1,.35,0]){plan.apply(separation);for(const aspect of [.5,1.6,3]){const camera=new THREE.PerspectiveCamera(38);fitPerspective(camera,root,aspect);root.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){const point=new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld).project(camera);assert(Math.abs(point.x)<=.87&&Math.abs(point.y)<=.87&&Math.abs(point.z)<=1.001,id+' exploded cropping');}});}}plan.restore();for(const [o,matrix]of before)assert.deepEqual(o.matrixWorld.toArray(),matrix,id+' exact assembled restoration');assert.throws(()=>plan.apply(NaN));assert.throws(()=>plan.apply(1.1));}
console.log('All 77 semantic exploded assemblies: bounded perspective framing, repeatability and exact restoration PASS');

for(const mission of MISSION_IDS)for(let variant=0;variant<7;variant++){const owned=['CAP','MOB','FP','PRO','COM','SA','ACC'].map(p=>({id:p+'-'+String.fromCharCode(65+variant)})),before=JSON.stringify(owned),root=createConfiguration(mission,owned),plan=prepareInspection(root);assert.equal(plan.parts.filter(p=>p.key.startsWith('equipment:')).length,7);for(const separation of [1,.5,0]){plan.apply(separation);const camera=new THREE.PerspectiveCamera(38);fitPerspective(camera,root,.5);root.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){const p=new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld).project(camera);assert(Math.abs(p.x)<=.87&&Math.abs(p.y)<=.87,mission+' fitted assembly cropping');}});}assert.equal(JSON.stringify(owned),before);}
console.log('All 42 purchased-hardware builds: exploded perspective framing and immutable purchases PASS');
