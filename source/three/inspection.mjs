import * as THREE from 'three';
// Reversible, semantic assembly separation. Never changes game purchases or ratings.
export function prepareInspection(root){
 const original=[...root.children],buckets=new Map(),vehicle=!!root.userData.mission;
 const prefix=(root.userData.assetId||'').split('-')[0];let wheel=0;
 function classify(o){
  if(o.userData.mountedCard)return 'equipment:'+o.userData.mountedCard;
  if(o.name==='run-flat wheel')return 'wheel:'+ ++wheel;
  if(/crane/.test(o.name))return 'crane';
  if(/driver controls/.test(o.name))return 'cockpit';
  if(o.name==='mission weapon')return 'mount';
  if(o.name==='mission radio')return 'controls';
  if(o.name==='mission sensor')return 'optics';
  if(o.name==='mission roller')return 'front';
  if(o.name==='mounted WR-12')return 'mechanism';
  if(/hull shell|cab rear|deck|lower.*hull/.test(o.name))return 'body';
  if(/glazing|mirror/.test(o.name)||o.material?.name==='optical glass')return 'glass';
  if(vehicle)return o.position.y<1.25?'chassis':o.position.x>1.5?'front':'body';
  if(prefix==='CAP'||prefix==='TRAIN')return /roof/.test(o.name)?'roof':o.position.y>.39?'seating':'frame';
  if(prefix==='MOB')return o.position.x>.49?'cooling':o.position.y>.72?'heads':o.material?.name==='machined steel'?'connections':'powertrain';
  if(prefix==='FP')return o.position.x>.45?'barrel':o.position.y<.30?'mount':'controls';
  if(prefix==='COM'||prefix==='SA')return o.position.y>.65?'optics':o.material?.name==='machined steel'?'connections':'controls';
  if(prefix==='PRO')return o.material?.name==='machined steel'?'connections':'protection';
  if(prefix==='ACC')return o.position.y<.16?'frame':o.material?.name==='machined steel'?'connections':'mechanism';
  return o.position.y>.85?'display':o.position.y>.7?'documents':'frame';
 }
 for(const o of original){const key=classify(o);if(!buckets.has(key)){const g=new THREE.Group();g.name=key;root.add(g);buckets.set(key,g);}buckets.get(key).add(o);}
 root.updateWorldMatrix(true,true);const bounds=new THREE.Box3().setFromObject(root),center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());
 const parts=[...buckets].map(([key,object],index)=>{const b=new THREE.Box3().setFromObject(object),c=b.getCenter(new THREE.Vector3()),d=c.clone().sub(center);let vector;
  if(key.startsWith('wheel:'))vector=new THREE.Vector3(0,-.15,Math.sign(c.z)||1).multiplyScalar(size.z*.4);
  else if(key==='body'||key==='roof')vector=new THREE.Vector3(0,size.y*.55,0);
  else if(key==='chassis'||key==='frame')vector=new THREE.Vector3(0,-size.y*.26,0);
  else if(key==='glass')vector=new THREE.Vector3(size.x*.18,size.y*.25,0);
  else if(key==='cockpit')vector=new THREE.Vector3(size.x*.2,size.y*.15,-size.z*.55);
  else{if(d.lengthSq()<.01)d.set(Math.sin(index*2.4),.8,Math.cos(index*2.4));vector=d.normalize().multiplyScalar(Math.max(size.length()*.24,.22));vector.y+=size.y*.16;}
  return {key,object,origin:object.position.clone(),vector,center:c};
 });
 return {parts,apply(value){if(!Number.isFinite(value)||value<0||value>1)throw Error('Invalid assembly separation');for(const p of parts)p.object.position.copy(p.origin).addScaledVector(p.vector,value);root.updateWorldMatrix(true,true);},restore(){this.apply(0);}};
}

export function fitPerspective(camera,root,aspect,angle=[7,4.5,7]){
 root.updateWorldMatrix(true,true);const b=new THREE.Box3().setFromObject(root,true),center=b.getCenter(new THREE.Vector3()),radius=b.getSize(new THREE.Vector3()).length()/2;
 camera.aspect=aspect;const fov=THREE.MathUtils.degToRad(camera.fov),limit=Math.min(fov/2,Math.atan(Math.tan(fov/2)*aspect)),distance=Math.max(radius/Math.sin(limit)/.86,1);
 const direction=new THREE.Vector3(...angle).normalize(),corners=[];for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z])corners.push(new THREE.Vector3(x,y,z));
 let low=Math.max(radius*1.01,.1),high=distance;camera.near=.001;camera.far=distance+radius*3+1;camera.updateProjectionMatrix();
 for(let i=0;i<24;i++){const d=(low+high)/2;camera.position.copy(center).addScaledVector(direction,d);camera.lookAt(center);camera.updateMatrixWorld(true);let extent=0;for(const p of corners){const projected=p.clone().project(camera);extent=Math.max(extent,Math.abs(projected.x),Math.abs(projected.y));}if(extent>.86)low=d;else high=d;}
 camera.position.copy(center).addScaledVector(direction,high);camera.lookAt(center);camera.near=Math.max(.01,high-radius*1.5);camera.far=high+radius*3+1;camera.updateProjectionMatrix();camera.updateMatrixWorld(true);return center;
}
