import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
import {fileURLToPath} from 'node:url';

// Bundle and execute in memory. No generated test files or periodic receipts.
const result=await build({stdin:{contents:`
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {missionBase,detailPart,materials} from './source/three/realism.mjs';
import {prepareInspection,prepareCutaway} from './source/three/inspection.mjs';
const reports=[];
for(const [id,count]of [['RECOVERY',8],['COMBAT',8],['RECCE',4],['TROOP',6],['COMMAND',6],['MINE',8]]){
 const paint=materials(),root=missionBase(id,paint);root.userData.mission=id;root.updateMatrixWorld(true);
 if(id!=='RECOVERY'){
  const named=name=>{const result=[];root.traverse(o=>{if(o.name===name)result.push(o);});return result;};
  assert.equal(named('carrier windshield wiper assembly').length,2,id+' has pivot/arm/blade systems instead of floating rods');
  const formedGuards=named('carrier formed wheel guard');
  assert.equal(formedGuards.length,count,id+' has thin formed guards instead of polygonal solid blocks');
  for(const guard of formedGuards){
   const p=guard.geometry.attributes.position,radial=[];
   for(let i=0;i<p.count;i++)radial.push(Math.hypot(p.getX(i),p.getY(i)));
   assert(Math.min(...radial)>.642&&Math.max(...radial)<.712,'Pressed guard keeps actual tyre envelope clear');
   const edges=new Map(),indices=guard.geometry.index.array;
   for(let i=0;i<indices.length;i+=3)for(const [a,b]of [[indices[i],indices[i+1]],[indices[i+1],indices[i+2]],[indices[i+2],indices[i]]]){const key=Math.min(a,b)+':'+Math.max(a,b);edges.set(key,(edges.get(key)||0)+1);}
   assert([...edges.values()].every(n=>n===2),'Actual swept guard is a closed manifold sheet with capped ends and no open topology');
   const localRay=new THREE.Raycaster(new THREE.Vector3(0,1,.23),new THREE.Vector3(0,-1,0),0,.5);
   localRay.ray.applyMatrix4(guard.matrixWorld);
   const hits=localRay.intersectObject(guard,false),unique=[...new Set(hits.map(h=>h.distance.toFixed(5)))].map(Number).sort((a,b)=>a-b);
   assert(unique.length>=2&&unique[1]-unique[0]<.008,'Guard crown is actual thin closed sheet, not 60 mm solid slab');
  }
  const roof=root.getObjectByName('hull shell roof service assembly');assert(roof,'Sealed service deck replaces floating upright vent bars');
  assert.equal(named('vent grille').length,0,'Obsolete vertical decorative bars are absent');
  const roofFrame=roof.getObjectByName('carrier roof intake frame'),blades=named('carrier roof intake blade');
  assert.equal(blades.length,20,'Two framed cooling banks retain actual formed blades');
  for(const blade of blades){
   const b=new THREE.Box3().setFromObject(blade),frame=new THREE.Box3().setFromObject(roofFrame);
   assert(b.intersectsBox(frame),'Every intake blade physically meets its supporting perimeter');
  }
  for(const sign of [-1,1]){
   const x=root.userData.length/2-1.30-.248+.0275,origin=new THREE.Vector3(x,2.46,sign*.56),ray=new THREE.Raycaster(origin,new THREE.Vector3(0,-1,0),0,.12);
   assert.equal(ray.intersectObject(roofFrame,false).length,0,'Intake aperture is a geometric opening, not dark paint on a solid cover');
   assert.equal(ray.intersectObjects(blades,false).length,0,'Real inter-blade air gap stays open');
   assert(ray.intersectObjects(named('carrier roof intake dark duct'),false).length>0,'Open intake reaches a seated dark duct under the grille');
  }
  for(const cover of named('carrier formed service cover')){
   const center=new THREE.Box3().setFromObject(cover).getCenter(new THREE.Vector3()),direction=new THREE.Vector3(0,0,-Math.sign(center.z));
   const hit=new THREE.Raycaster(center,direction,0,.065).intersectObjects(named('hull shell'),false)[0];
   assert(hit&&hit.distance<.045,'Access cover follows real sloping armour surface rather than floating on the old fixed-width bank');
  }
  for(const flap of named('carrier flexible rear mudflap')){
   const b=new THREE.Box3().setFromObject(flap),rails=named('carrier rear mudflap mounting rail').map(o=>new THREE.Box3().setFromObject(o));
   assert(rails.some(rail=>rail.intersectsBox(b)),'Flexible flap is clamped to a physical upper mounting rail');
   assert(b.min.y>.04,'Rear flexible flap retains ground clearance');
  }
  for(const seam of named('carrier hull welded joint')){
   const p=seam.geometry.attributes.position;assert(p.count>0);
   const center=seam.getWorldPosition(new THREE.Vector3()),inward=new THREE.Vector3(0,-1,0);
   if(seam.userData.surface==='side')inward.set(0,0,-Math.sign(center.z));
   if(seam.userData.surface==='nose')inward.set(-1,0,0);
   assert(new THREE.Raycaster(center,inward,0,.023).intersectObjects(named('hull shell'),false).length>0,'Weld center sits on actual parent hull surface '+id+' '+seam.userData.surface+' '+JSON.stringify(center.toArray()));
  }
  assert(named('carrier hull welded joint').length>=8,'Hull plane intersections have coherent structural joints');
  const k=.75/1.16,normal=new THREE.Vector3(1,k,0).normalize(),front=root.userData.length/2;
  for(const lip of named('carrier wiper rubber contact lip')){
   const half=lip.geometry.parameters.height/2;
   for(const end of [-1,1]){
    const contact=lip.localToWorld(new THREE.Vector3(0,end*half,0)),ray=new THREE.Raycaster(contact,normal.clone().negate(),0,.010);
    const hit=ray.intersectObjects(named('cab glazing'),false)[0];assert(hit,'Both rubber endpoints seat over actual windshield geometry');
    assert(Math.abs(hit.distance-.003)<1e-5,'Rubber contact is one lip radius from glazing, with no floating air gap: '+hit.distance);
    assert(contact.y>1.82&&contact.y<2.11,'Blade is inside aperture height');
   }
  }
  assert.equal(named('carrier wiper rubber contact lip').length,2);
  assert.equal(named('carrier wiper spindle housing').length,2);
  assert.equal(named('carrier wiper articulated arm').length,4);
  for(const bezel of named('carrier headlamp retaining ring')){
   assert.equal(bezel.geometry.type,'TorusGeometry');
   const center=bezel.getWorldPosition(new THREE.Vector3()),ray=new THREE.Raycaster(center.clone().add(new THREE.Vector3(.15,0,0)),new THREE.Vector3(-1,0,0),0,.3);
   assert.equal(ray.intersectObject(bezel,false).length,0,'Headlamp bezel has a real central optical opening');
   assert(ray.intersectObjects(named('carrier headlamp clear cover'),false).length>0,'Cover is physically in the bezel aperture');
   const reflectorRay=new THREE.Raycaster(center.clone().add(new THREE.Vector3(.15,0,.020)),new THREE.Vector3(-1,0,0),0,.3);
   assert(reflectorRay.intersectObjects(named('carrier headlamp reflector bowl'),false).length>0,'Reflector is physically behind the cover');
   for(const radial of [.020,.035]){
    const opaque=[];root.traverse(o=>{if(o.isMesh&&!o.material.transparent)opaque.push(o);});
    const surface=new THREE.Raycaster(center.clone().add(new THREE.Vector3(.15,0,radial)),new THREE.Vector3(-1,0,0),0,.3).intersectObjects(opaque,false)[0];
    assert.equal(surface?.object.name,'carrier headlamp reflector bowl','Actual front optical aperture reaches reflector instead of opaque gasket/housing');
   }

  }
  assert.equal(named('carrier headlamp retaining ring').length,2);
  assert.equal(named('carrier mirror sealed backing').length,2);
  assert.equal(named('carrier mirror support strut').length,4);
  for(const mount of named('carrier mirror hull mounting plate')){
   const origin=mount.getWorldPosition(new THREE.Vector3()),direction=new THREE.Vector3(0,0,-Math.sign(origin.z));
   assert(new THREE.Raycaster(origin,direction,0,.05).intersectObjects(named('hull shell'),false).length>0,'Mirror plate seats on actual hull instead of floating outside it '+id+' '+JSON.stringify(origin.toArray()));
  }
  for(const eye of named('carrier front tow eye')){
   const center=eye.getWorldPosition(new THREE.Vector3());
   assert.equal(new THREE.Raycaster(center.clone().add(new THREE.Vector3(0,0,.15)),new THREE.Vector3(0,0,-1),0,.30).intersectObject(eye,false).length,0,'Tow ring has a physical open pin bore');
   const bounds=new THREE.Box3().setFromObject(eye),bracket=root.getObjectByName('carrier tow eye bracket '+Math.sign(center.z));
   assert(bounds.intersectsBox(new THREE.Box3().setFromObject(bracket)),'Tow eye mates to supported bracket');
   assert(bounds.min.x<=front+.12,'Tow eye stays connected to front bumper envelope');
  }
  assert.equal(named('carrier front tow eye').length,2);
 }
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
 const fitted=[];root.traverse(o=>{if(/carrier|hull shell.*assembly/.test(o.name))fitted.push([o,o.getWorldPosition(new THREE.Vector3()),o.getWorldQuaternion(new THREE.Quaternion())]);});
 const original=wheels.map(w=>w.getWorldPosition(new THREE.Vector3())),inspection=prepareInspection(root);inspection.apply(1);inspection.restore();wheels.forEach((w,i)=>assert(w.getWorldPosition(new THREE.Vector3()).distanceTo(original[i])<1e-9,'Exploded view restores wheel placement'));
 for(const [part,position,quaternion]of fitted){assert(part.getWorldPosition(new THREE.Vector3()).distanceTo(position)<1e-9,'Exterior fit survives exploded/restored placement');assert(part.getWorldQuaternion(new THREE.Quaternion()).angleTo(quaternion)<1e-7,'Exterior slope alignment survives inspection');}
 if(id!=='RECOVERY')assert.equal(root.getObjectByName('hull shell roof service assembly').parent.name,'body','Sealed roof service system separates with its actual parent hull during inspection');
 if(id!=='RECOVERY'){
  const shells=[];root.traverse(o=>{if(o.isMesh&&o.userData.cutawayShell)shells.push([o,o.material]);});
  const cutaway=prepareCutaway(root);let disposed=0;
  for(let pass=0;pass<2;pass++){
   cutaway.apply(true);for(const [mesh,paint]of shells){assert.notEqual(mesh.material,paint);assert.equal(mesh.material.opacity,.13);mesh.material.addEventListener('dispose',()=>disposed++);}
   cutaway.apply(false);for(const [mesh,paint]of shells)assert.equal(mesh.material,paint,'Formed service fittings restore original finish after cutaway');
  }
  cutaway.dispose();assert.equal(disposed,shells.length*2,'Every temporary fitting finish is disposed exactly once');
 }

 let totalMeshes=0,totalTriangles=0;root.traverse(o=>{if(o.isMesh){totalMeshes++;totalTriangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;}});
 reports.push({mission:id,wheels:count,wheelMeshes:meshes,wheelTriangles:triangles,totalMeshes,totalTriangles});
 const geometries=new Set(),paints=new Set(Object.values(paint));root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m)paints.add(m);});geometries.forEach(g=>g.dispose());paints.forEach(m=>m.dispose());
}
console.log('Rebuild geometry: thin formed guards, actual roof intake apertures/blade supports, sloped service covers, welded-joint contact, connected mudflaps, fitted exterior optics; wheel contacts/cooling/budgets and inspection restoration PASS');
console.log(JSON.stringify(reports));
`,resolveDir:fileURLToPath(new URL('../',import.meta.url)),sourcefile:'realism-rebuild-test.mjs'},bundle:true,write:false,platform:'node',format:'esm',nodePaths:[fileURLToPath(new URL('../samples/threejs-recovery/node_modules',import.meta.url))]});
try{await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));}catch(error){console.error(error.name+': '+error.message);process.exitCode=1;}
