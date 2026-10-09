import * as THREE from 'three';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createVehicle,createWinch,materials,studio,fitCamera} from './models.mjs';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
globalThis.FileReader=class {
  async readAsArrayBuffer(blob){this.result=await blob.arrayBuffer();this.onloadend?.();}
  async readAsDataURL(blob){this.result='data:'+blob.type+';base64,'+Buffer.from(await blob.arrayBuffer()).toString('base64');this.onloadend?.();}
};
const receipts=[];
const geometryKey=g=>{const list=[];g.traverse(o=>{if(o.isMesh)list.push([o.geometry.type,Array.from(o.geometry.attributes.position.array),o.position.toArray(),o.quaternion.toArray()]);});return crypto.createHash('sha256').update(JSON.stringify(list)).digest('hex');};
const vehicle=createVehicle(materials()),part=createWinch(materials());
const mounted=vehicle.getObjectByName('mounted WR-12');
// Group mount rotation/translation may differ; all children remain identical.
assert.equal(geometryKey(mounted),geometryKey(part),'mounted and standalone winch geometry diverges');
for(const [name,model] of [['vehicle',vehicle],['winch',part]]){
  let poses=0;
  for(const aspect of [.5,1,1.6,3])for(const angle of [[8,4,8],[-8,4,8],[8,4,-8],[-8,4,-8],[.1,8,.1]]){
    const {camera}=studio(model,aspect,angle);fitCamera(camera,model,aspect,angle);
    model.updateWorldMatrix(true,true);
    model.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){
      const p=new THREE.Vector3().fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld).project(camera);
      assert.ok(Number.isFinite(p.x)&&Math.abs(p.x)<=.801&&Math.abs(p.y)<=.801&&Math.abs(p.z)<1,`${name}: clipped vertex at aspect ${aspect}`);
    }});poses++;
  }
  const data=await new GLTFExporter().parseAsync(model,{binary:true});assert.equal(new DataView(data).getUint32(0,true),0x46546c67);
  const loaded=await new GLTFLoader().parseAsync(data,'');loaded.scene.updateWorldMatrix(true,true);
  const before=new THREE.Box3().setFromObject(model,true),after=new THREE.Box3().setFromObject(loaded.scene,true);
  assert.ok(before.min.distanceTo(after.min)<1e-5&&before.max.distanceTo(after.max)<1e-5,'GLB round-trip bounds');
  const bytes=Buffer.from(data);await fs.writeFile(new URL(`./${name}.glb`,import.meta.url),bytes);
  receipts.push({name,vertexFramingPoses:poses,aspects:[.5,1,1.6,3],glbBytes:bytes.length,glbSha256:crypto.createHash('sha256').update(bytes).digest('hex'),roundTripBounds:'PASS'});
}
await fs.writeFile(new URL('./export-verification.json',import.meta.url),JSON.stringify({result:'PASS',sharedWinchGeometry:'identical',samples:receipts,scope:'geometry, materials, projected vertices and GLB round trip; not interactive browser acceptance'},null,2));console.log(JSON.stringify(receipts));
