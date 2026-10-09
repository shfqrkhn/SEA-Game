import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
import {fileURLToPath} from 'node:url';

// Bundle and execute in memory. No generated test files or periodic receipts.
const result=await build({stdin:{contents:`
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {missionBase,detailPart,materials} from './source/three/realism.mjs';
import {prepareInspection} from './source/three/inspection.mjs';
const reports=[];
for(const [id,count]of [['RECOVERY',8],['COMBAT',8],['RECCE',4],['TROOP',6],['COMMAND',6],['MINE',8]]){
 const paint=materials(),root=missionBase(id,paint);root.userData.mission=id;root.updateMatrixWorld(true);
 const wheels=[];root.traverse(o=>{if(o.name==='run-flat wheel')wheels.push(o);});assert.equal(wheels.length,count,id+' retains canonical wheels');
 const before=[];root.traverse(o=>{if(o.isMesh)before.push(o);});detailPart(root,paint,'MOB',1);const after=[];root.traverse(o=>{if(o.isMesh)after.push(o);});assert.equal(before.length,after.length,'Refinement is idempotent');
 let meshes=0,triangles=0;
 for(const wheel of wheels){
  const parts=wheel.children,named=name=>parts.filter(o=>o.name===name);assert.equal(named('directional tread lug').length,1,'All 64 real lugs share one draw mesh');
  const tread=named('directional tread lug')[0],carcass=named('rounded tyre carcass')[0];assert.equal(tread.userData.physicalLugCount,64);
  const envelope=new THREE.Box3().setFromObject(wheel).getSize(new THREE.Vector3());assert(envelope.x<1.31&&envelope.y<1.31&&envelope.z<.45,'Detail retains physical wheel clearance envelope');
  assert.equal(named('hub fastener').length,2);assert.equal(named('seated hub fastener washer').length,2);
  // Contact probes use actual geometry instead of trusting component labels.
  for(const side of [-1,1])for(let i=0;i<10;i++){
   const angle=i*Math.PI/5,x=Math.sin(angle)*.15,y=Math.cos(angle)*.15,origin=new THREE.Vector3(x,y,side*.15);wheel.localToWorld(origin);
   const inward=new THREE.Vector3(0,0,-side).transformDirection(wheel.matrixWorld),ray=new THREE.Raycaster(origin,inward,0,.08);
   const washer=ray.intersectObjects(named('seated hub fastener washer'),false)[0];
   // The washer has a bore, so probe its bearing land separately from the bolt axis.
   const land=new THREE.Vector3(x+.019,y,side*.15);wheel.localToWorld(land);const bearingRay=new THREE.Raycaster(land,inward,0,.08);
   const hits=bearingRay.intersectObjects([...named('seated hub fastener washer'),...named('dished wheel rim'),...named('machined rim fastener seating flange')],false);
   assert(hits.some(h=>h.object.name==='seated hub fastener washer'),'Washer has real annular bearing land');
   assert(hits.some(h=>h.object.name==='dished wheel rim'),'Washer land lies over actual rim web');
   assert(hits.some(h=>h.object.name==='machined rim fastener seating flange'),'Planar seating flange supports washer');
   assert.equal(washer,undefined,'Washer bore remains open at fastener axis');
   const headHit=ray.intersectObjects(named('hub fastener'),false)[0];assert(headHit,'Every canonical bolt circle position has actual hex head geometry');
   const headFace=wheel.worldToLocal(headHit.point.clone());assert(Math.abs(Math.abs(headFace.z)-.145)<1e-6,'Heads have the expected contact-stack depth');
   const washerHit=hits.find(h=>h.object.name==='seated hub fastener washer'),flangeHit=hits.find(h=>h.object.name==='machined rim fastener seating flange');
   assert(Math.abs(Math.abs(wheel.worldToLocal(washerHit.point.clone()).z)-.123)<1e-6,'Washer outer face supports hex head base');
   assert(Math.abs(Math.abs(wheel.worldToLocal(flangeHit.point.clone()).z)-.111)<1e-6,'Flange exterior supports washer base');
  }
  const rotor=named('ventilated brake rotor')[0],vanes=named('brake rotor radial cooling vane')[0];assert(rotor&&vanes);assert.equal(vanes.userData.physicalVaneCount,24);
  const side=-Math.sign(wheel.position.z);
  const probe=(angle)=>{const start=new THREE.Vector3(.30*Math.cos(angle),.30*Math.sin(angle),side*.066),direction=new THREE.Vector3(-Math.cos(angle),-Math.sin(angle),0);wheel.localToWorld(start);direction.transformDirection(wheel.matrixWorld);return new THREE.Raycaster(start,direction,0,.19).intersectObject(vanes,false);};
  assert(probe(0).length>0,'Actual radial vane supports rotor faces');assert.equal(probe(Math.PI/24).length,0,'Actual inter-vane air channel is open');
  const mid=new THREE.Vector3(.20,0,side*.10);wheel.localToWorld(mid);const axial=new THREE.Vector3(0,0,-side).transformDirection(wheel.matrixWorld);
  assert(new THREE.Raycaster(mid,axial,0,.10).intersectObject(rotor,false).length>0,'Friction ring is actual geometric annulus');
  const bore=new THREE.Vector3(0,0,side*.10);wheel.localToWorld(bore);assert.equal(new THREE.Raycaster(bore,axial,0,.10).intersectObject(rotor,false).length,0,'Rotor central bore stays open');
  let wheelMeshes=0,wheelTriangles=0;wheel.traverse(o=>{if(!o.isMesh)return;wheelMeshes++;wheelTriangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;for(const v of o.geometry.attributes.position.array)assert(Number.isFinite(v),'Finite vertex');});
  assert(wheelMeshes<=30,'Bounded wheel draw meshes');assert(wheelTriangles<=17000,'Bounded wheel triangles');meshes+=wheelMeshes;triangles+=wheelTriangles;
 }
 const original=wheels.map(w=>w.getWorldPosition(new THREE.Vector3())),inspection=prepareInspection(root);inspection.apply(1);inspection.restore();wheels.forEach((w,i)=>assert(w.getWorldPosition(new THREE.Vector3()).distanceTo(original[i])<1e-9,'Exploded view restores wheel placement'));
 reports.push({mission:id,wheels:count,wheelMeshes:meshes,wheelTriangles:triangles});
 const geometries=new Set(),paints=new Set(Object.values(paint));root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m)paints.add(m);});geometries.forEach(g=>g.dispose());paints.forEach(m=>m.dispose());
}
console.log('Rebuild wheel geometry: canonical topology, real seated fasteners/open cooling channels, bounded local batches and inspection restoration PASS');
console.log(JSON.stringify(reports));
`,resolveDir:fileURLToPath(new URL('../',import.meta.url)),sourcefile:'realism-rebuild-test.mjs'},bundle:true,write:false,platform:'node',format:'esm',nodePaths:[fileURLToPath(new URL('../samples/threejs-recovery/node_modules',import.meta.url))]});
try{await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));}catch(error){console.error(error.name+': '+error.message);process.exitCode=1;}
