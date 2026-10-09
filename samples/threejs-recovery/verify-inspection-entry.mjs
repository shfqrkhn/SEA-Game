import assert from 'node:assert/strict';
import * as THREE from 'three';
import {prepareInspection,prepareCutaway,fitPerspective,fitDirectionalShadow} from '../../source/three/inspection.mjs';
import {createMission,createPart,createConfiguration,MISSION_IDS,MODEL_IDS} from '../../source/three/game-models.mjs';
import {materials,FinishMaterial,SURFACE_PROFILES} from '../../source/three/materials.mjs';
const finishes=materials();
// Empty carrier shells used to expose the bare lower-hull slab. Probe the actual
// assembled rear floor surface rather than merely requiring a furniture name.
for(const id of ['TROOP','COMMAND','RECCE']){
 const root=createMission(id);root.updateMatrixWorld(true);const p=new THREE.Vector3(-root.userData.length/2+.65,1.50,0),hit=new THREE.Raycaster(p,new THREE.Vector3(0,-1,0),0,.15).intersectObject(root,true)[0];
 assert(hit&&Math.abs(hit.point.y-1.439)<1e-6,id+' rear mission floor has an actual supported nonslip surface');
 const meshes=[];root.traverse(o=>{if(o.isMesh)meshes.push(o);});const named=n=>meshes.filter(o=>o.name===n),floor=named('mission nonslip rear floor insert')[0],carrier=named('mission supported rear floor')[0],hull=root.getObjectByName('lower hull');
 for(const shoe of named('mission floor hull bearing shoe')){const b=new THREE.Box3().setFromObject(shoe,true),c=b.getCenter(new THREE.Vector3()),ray=new THREE.Raycaster(new THREE.Vector3(c.x,1.50,c.z),new THREE.Vector3(0,-1,0),0,.20);const hullFace=ray.intersectObject(hull,false)[0];assert(hullFace&&b.containsPoint(hullFace.point),id+' rear floor shoe spans actual lower hull bearing face');const bottom=new THREE.Raycaster(new THREE.Vector3(c.x,1.35,c.z),new THREE.Vector3(0,1,0),0,.10).intersectObject(carrier,false)[0];assert(bottom&&b.containsPoint(bottom.point),id+' shoe meets actual rear-floor lower face');}
 for(const name of ['crew seat bolted floor rail','mission workstation floor foot','mission equipment rack floor rail'])for(const item of named(name)){const b=new THREE.Box3().setFromObject(item,true),c=b.getCenter(new THREE.Vector3()),face=new THREE.Raycaster(new THREE.Vector3(c.x,b.min.y+.006,c.z),new THREE.Vector3(0,-1,0),0,.02).intersectObject(floor,false)[0];assert(face&&Math.abs(face.point.y-b.min.y)<1e-6,id+' '+name+' sits on actual floor insert');}
 for(const unit of named('mission rack isolated equipment enclosure')){const b=new THREE.Box3().setFromObject(unit,true),c=b.getCenter(new THREE.Vector3()),hit=new THREE.Raycaster(new THREE.Vector3(c.x,b.min.y+.005,c.z),new THREE.Vector3(0,-1,0),0,.025).intersectObjects(named('mission rack supported shelf'),false)[0];assert(hit&&Math.abs(hit.point.y-b.min.y)<1e-6,id+' equipment case sits on real shelf');}
 for(const foot of named('mission monitor seated foot')){const b=new THREE.Box3().setFromObject(foot,true),c=b.getCenter(new THREE.Vector3()),hit=new THREE.Raycaster(new THREE.Vector3(c.x,b.min.y+.005,c.z),new THREE.Vector3(0,-1,0),0,.025).intersectObjects(named('mission supported workstation top'),false)[0];assert(hit&&Math.abs(hit.point.y-b.min.y)<1e-6,id+' monitor foot sits on actual desk');}
 if(id==='COMMAND'){
  const shells=named('hull shell');assert.equal(new THREE.Raycaster(new THREE.Vector3(0,2.60,0),new THREE.Vector3(0,-1,0),0,.27).intersectObjects(shells,false).length,0,'Command rear cabin has no obsolete low-roof backing');
  const roofFace=new THREE.Raycaster(new THREE.Vector3(0,3,0),new THREE.Vector3(0,-1,0),0,.4).intersectObjects(shells,false)[0];assert(roofFace&&roofFace.point.y>2.73&&roofFace.point.y<2.76,'Command high roof is real connected shell geometry');
  assert.equal(new THREE.Raycaster(new THREE.Vector3(-root.userData.length/2-.20,2.1,0),new THREE.Vector3(1,0,0),0,.50).intersectObjects(shells,false).length,0,'Command fitted rear door has actual carrier access aperture');
 }
 if(id==='TROOP'){
  const sideZ=1.3*(.75+(2.08-1.2)*.1/1.16);
  for(const s of [-1,1])for(let i=0;i<4;i++){const x=-3.45+.765+i*.94,hit=new THREE.Raycaster(new THREE.Vector3(x,2.08,s*2),new THREE.Vector3(0,0,-s),0,2-sideZ+.10).intersectObject(root,true)[0];assert.equal(hit?.object.name,'cab glazing','Troop side windows remain open through outer shell, service panels and inner liner');}
  const objects=meshes.filter(o=>/troop mission restrained seat|underseat stowage/.test(o.parent.name)||o.name==='troop floor supported underseat stowage');
  for(const y of [1.55,1.80,2.02])assert.equal(new THREE.Raycaster(new THREE.Vector3(-3.1,y,0),new THREE.Vector3(1,0,0),0,3.7).intersectObjects(objects,false).length,0,'Troop center boarding aisle has no seat or stowage obstruction');
 }
 if(id==='RECCE'){
  const shells=named('hull shell'),axis=new THREE.Raycaster(new THREE.Vector3(-1,2.55,-.48),new THREE.Vector3(0,-1,0),0,.30);assert.equal(axis.intersectObjects(shells,false).length,0,'Recce mast passes through an actual roof aperture');
  const pole=root.getObjectByName('recce continuous internal mast support'),foot=root.getObjectByName('recce mast floor bearing flange'),b=new THREE.Box3().setFromObject(pole,true),center=foot.getWorldPosition(new THREE.Vector3());const face=new THREE.Raycaster(new THREE.Vector3(center.x,1.55,center.z),new THREE.Vector3(0,-1,0),0,.12).intersectObject(foot,false)[0];assert(face&&b.containsPoint(face.point),'Recce internal mast actually seats into floor flange');
 }
}
// Test actual transformed triangles against the rear floor volume: purchased
// front power packs cannot be qualified merely by their whole-model bounds.
const touchesBox=(root,b)=>{let contact=false;root.updateMatrixWorld(true);root.traverse(o=>{if(contact||!o.isMesh)return;const bound=new THREE.Box3().setFromObject(o,true);if(!b.intersectsBox(bound))return;const a=o.geometry.attributes.position,index=o.geometry.index,n=index?index.count:a.count,t=new THREE.Triangle();for(let i=0;i<n;i+=3){for(const[key,j]of [['a',i],['b',i+1],['c',i+2]])t[key].fromBufferAttribute(a,index?index.getX(j):j).applyMatrix4(o.matrixWorld);if(b.intersectsTriangle(t)){contact=true;break;}}});return contact;};
for(const id of ['TROOP','COMMAND','RECCE'])for(const variant of 'ABCDEFG'){
 const root=createConfiguration(id,[{id:'MOB-'+variant}]);root.updateMatrixWorld(true);const equipment=root.getObjectByName('MOB-'+variant),floor=root.getObjectByName('mission supported rear floor');assert(equipment&&floor);assert.equal(touchesBox(equipment,new THREE.Box3().setFromObject(floor,true)),false,id+' MOB-'+variant+' must not intersect authored rear-floor volume');
}
for(const id of ['TROOP','COMMAND','RECCE']){
 const cap=createConfiguration(id,[{id:'CAP-A'}]);assert.equal(cap.getObjectByName(id.toLowerCase()+' mission interior'),undefined,'Purchased CAP replaces whole original rear cassette');assert(cap.getObjectByName('CAP-A'));if(id==='COMMAND')assert(cap.getObjectByName('command fitted rear service door'),'Crew module replacement retains carrier access closure');
 const com=createConfiguration(id,[{id:'COM-A'}]);assert.equal(com.getObjectByName('mission role electronic installation'),undefined,'Purchased COM replaces original electronics');assert(com.getObjectByName('COM-A'));
 if(id==='TROOP'){const seat=[];com.traverse(o=>{if(o.userData.reservedOriginalRadioZone)seat.push(o);});assert.equal(seat.length,0,'Purchased radio clears the original forward-left Troop seat/stowage zone');}
}
for(const id of ['TROOP','COMMAND','RECCE'])for(const variant of 'ABCDEFG'){
 const root=createConfiguration(id,[{id:'COM-'+variant}]);root.updateMatrixWorld(true);const radio=root.getObjectByName('COM-'+variant),shelf=root.getObjectByName('purchased radio supported carrier shelf'),chairs=[];root.traverse(o=>{if(o.name===id.toLowerCase()+' mission restrained seat')chairs.push(o);});
 for(const chair of chairs)assert.equal(touchesBox(radio,new THREE.Box3().setFromObject(chair,true)),false,id+' COM-'+variant+' actual radio triangles stay clear of retained baseline seats');
 const slab=new THREE.Box3().setFromObject(shelf,true),cast=[];radio.traverse(o=>{if(o.isMesh&&o.material.name==='powder coated metal'&&o.geometry.type==='RoundedBoxGeometry')cast.push(o);});assert(cast.length>0);for(const item of cast){const b=new THREE.Box3().setFromObject(item,true),c=b.getCenter(new THREE.Vector3());if(Math.abs(b.min.y-1.51)>.001)continue;const face=new THREE.Raycaster(new THREE.Vector3(c.x,b.min.y+.005,c.z),new THREE.Vector3(0,-1,0),0,.02).intersectObject(shelf,false)[0];assert(face&&Math.abs(face.point.y-b.min.y)<1e-6,id+' purchased radio case sits on actual carrier shelf');}
 const floor=root.getObjectByName('mission nonslip rear floor insert'),support=new THREE.Raycaster(new THREE.Vector3(slab.min.x+.05,1.55,-.65),new THREE.Vector3(0,-1,0),0,.15).intersectObject(floor,false)[0];assert(support&&slab.containsPoint(support.point),'Radio shelf bears on an actual rear-floor face');assert(slab.max.y>=1.51-1e-6,'Radio shelf reaches the seated case plane');
}
console.log('Three distinct mission interiors: actual floor/hull/furniture/shelf/monitor contacts, clear Troop aisle/windows, raised Command access/headspace, Recce mast bore and 21 installed power-pack triangle clearance checks PASS');
// The Combat station must sit over an actual roof opening; opaque roof backing
// defeats both the illustrated crew basket and the station's hollow mounting ring.
{
 const root=createMission('COMBAT');root.updateMatrixWorld(true);const roofShells=[];
 root.traverse(o=>{if(o.isMesh&&o.name==='hull shell')roofShells.push(o);});
 const roofRay=new THREE.Raycaster(new THREE.Vector3(-.35,2.50,0),new THREE.Vector3(0,-1,0),0,.22);
 assert.equal(roofRay.intersectObjects(roofShells,false).length,0,'Combat roof has a real open turret-ring aperture');
 const ring=root.getObjectByName('station hollow mounting ring'),roof=root.userData.roof,basket=root.getObjectByName('combat supported crew compartment');assert(ring&&basket);
 for(const [dx,dz]of [[-1,0],[1,0],[0,-1],[0,1]]){
  const origin=new THREE.Vector3(-.35,roof+.18,0),face=new THREE.Raycaster(origin,new THREE.Vector3(dx,0,dz),0,.55).intersectObject(ring,false)[0];assert(face,'Ring retains actual inner structural wall');
  const shoes=[];basket.traverse(o=>{if(o.name==='combat basket roof ring attachment')shoes.push(o);});
  assert(shoes.some(o=>new THREE.Box3().setFromObject(o,true).containsPoint(face.point)),'Basket upper attachment spans actual ring bearing face');
 }
 const floor=basket.getObjectByName('combat nonslip crew floor insert'),rails=[];basket.traverse(o=>{if(o.name==='crew seat bolted floor rail')rails.push(o);});assert.equal(rails.length,4);
 for(const rail of rails){const b=new THREE.Box3().setFromObject(rail,true),c=b.getCenter(new THREE.Vector3()),face=new THREE.Raycaster(new THREE.Vector3(c.x,b.min.y+.005,c.z),new THREE.Vector3(0,-1,0),0,.015).intersectObject(floor,false)[0];assert(face&&Math.abs(face.point.y-b.min.y)<1e-6,'Combat seat floor rail bears on actual nonslip floor');}
 const shellMaterials=[];root.traverse(o=>{if(o.userData.cutawayShell)shellMaterials.push([o,o.material]);});const cut=prepareCutaway(root);cut.apply(true);
 for(const [o,material]of shellMaterials){assert.equal(o.material.opacity,.13);assert.notEqual(o.material,material);}
 assert.equal(root.getObjectByName('station structural trunnion cheek').material.transparent,false,'Cutaway preserves structural support opacity');cut.dispose();for(const[o,material]of shellMaterials)assert.equal(o.material,material);
}
for(const id of 'ABCDEFG'.split('').map(l=>'FP-'+l)){
 const root=createPart(id);root.updateMatrixWorld(true);const meshes=[];root.traverse(o=>{if(o.isMesh)meshes.push(o);});
 const named=name=>meshes.filter(o=>o.name===name),pivots=named('station seated trunnion pivot'),cheeks=named('station structural trunnion cheek');assert.equal(pivots.length,2);
 for(const pivot of pivots){const p=pivot.getWorldPosition(new THREE.Vector3()),s=Math.sign(p.z),cheek=cheeks.find(o=>Math.sign(new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3()).z)===s),hit=new THREE.Raycaster(new THREE.Vector3(p.x,p.y,s*.5),new THREE.Vector3(0,0,-s),0,.5).intersectObject(cheek,false)[0];assert(hit&&new THREE.Box3().setFromObject(pivot,true).containsPoint(hit.point),id+' actual trunnion pivot spans cast cheek outer bearing face');}
 const shield=root.getObjectByName('station front shield with mantlet aperture');
 if(shield){for(const collar of named('station seated mantlet collar')){const p=collar.getWorldPosition(new THREE.Vector3()),ray=new THREE.Raycaster(new THREE.Vector3(.7,p.y,p.z),new THREE.Vector3(-1,0,0),0,.6);assert.equal(ray.intersectObject(shield,false).length,0,id+' front shield has actual mantlet-axis opening');assert(ray.intersectObject(collar,false).length>0,id+' mantlet is present on that axis');}}
 for(const muzzle of named('station open muzzle exterior')){const p=muzzle.getWorldPosition(new THREE.Vector3()),ray=new THREE.Raycaster(p.clone().add(new THREE.Vector3(.15,0,0)),new THREE.Vector3(-1,0,0),0,.30);assert.equal(ray.intersectObject(muzzle,false).length,0,id+' muzzle exterior retains real axial opening');assert.equal(ray.intersectObject(root,true)[0]?.object.name,'station recessed inert bore backing',id+' complete barrel has no solid end-cap occluding the recessed opening');}
}
console.log('Combat actual open roof/crew-ring load path, seated floor rails, enclosure-only cutaway; seven stations seated trunnions, open mantlets/muzzles PASS');
// Mission access/load paths must meet real carrier structure in world space.
{
 const root=createMission('TROOP');root.updateMatrixWorld(true);const meshes=[];root.traverse(o=>{if(o.isMesh)meshes.push(o);});const rear=-root.userData.length/2;
 const opaque=meshes.filter(o=>o.name==='hull shell');
 const openRay=new THREE.Raycaster(new THREE.Vector3(rear-1,1.75,0),new THREE.Vector3(1,0,0),0,1.5);
 assert.equal(openRay.intersectObjects(opaque,false).length,0,'Troop boarding aperture has no opaque rear-skin backing');
 const ramp=root.getObjectByName('rear ramp'),hinges=meshes.filter(o=>o.name==='troop ramp seated hinge barrel');assert(ramp&&hinges.length===2);
 for(const hinge of hinges){
  const h=new THREE.Box3().setFromObject(hinge),p=hinge.getWorldPosition(new THREE.Vector3()),hit=new THREE.Raycaster(new THREE.Vector3(rear-1,p.y,p.z),new THREE.Vector3(1,0,0),0,2).intersectObject(ramp,false)[0];assert(hit&&h.containsPoint(hit.point),'Actual sloped ramp face seats in hinge barrel envelope');
  const bracket=meshes.find(o=>o.name==='troop ramp chassis hinge bracket'&&Math.sign(o.position.z)===Math.sign(p.z));assert(bracket);const b=new THREE.Box3().setFromObject(bracket),hull=root.getObjectByName('lower hull');
  const hullHit=new THREE.Raycaster(new THREE.Vector3(rear-1,bracket.position.y,p.z),new THREE.Vector3(1,0,0),0,2).intersectObject(hull,false)[0];assert(hullHit&&b.containsPoint(hullHit.point),'Actual chassis hinge bracket spans lower hull bearing face');assert(h.intersectsBox(b),'Retained hinge barrel meets bearing bracket');
 }
}
{
 const root=createMission('MINE');root.updateMatrixWorld(true);const roller=root.getObjectByName('mission roller'),chassis=root.getObjectByName('chassis');assert(roller&&chassis);
 const bearings=[];root.traverse(o=>{if(o.name==='mine roller chassis bearing')bearings.push(o);});assert.equal(bearings.length,2);
 const meshes=[];root.traverse(o=>{if(o.isMesh)meshes.push(o);});
 for(const bearing of bearings){const b=new THREE.Box3().setFromObject(bearing),p=bearing.getWorldPosition(new THREE.Vector3()),hit=new THREE.Raycaster(new THREE.Vector3(root.userData.length/2+1,.85,p.z),new THREE.Vector3(-1,0,0),0,2).intersectObject(chassis,false)[0];assert(hit&&b.containsPoint(hit.point),'Roller bearing spans actual chassis face');}
 for(const pin of meshes.filter(o=>o.name==='mine roller implement clevis pin')){
  const p=pin.getWorldPosition(new THREE.Vector3()),arm=meshes.find(o=>o.name==='mine roller continuous draw arm'&&Math.sign(new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3()).z)===Math.sign(p.z));assert(arm);
  const hit=new THREE.Raycaster(p.clone().add(new THREE.Vector3(0,0,.20)),new THREE.Vector3(0,0,-1),0,.4).intersectObject(arm,false)[0];assert(hit&&new THREE.Box3().setFromObject(pin).containsPoint(hit.point),'Clevis seats against actual draw arm face');
  const trailing=meshes.filter(o=>o.name==='clearance roller trailing arm');const contacts=new THREE.Raycaster(p.clone().add(new THREE.Vector3(-.15,0,0)),new THREE.Vector3(1,0,0),0,.3).intersectObjects(trailing,false);assert(contacts.some(c=>new THREE.Box3().setFromObject(pin).containsPoint(c.point)),'Clevis pin meets actual rotated/scaled implement trailing arm');
 }
}
console.log('Troop actual rear aperture/ramp hinge-to-hull contacts and mine actual chassis/draw-arm/implement clevis contacts PASS');
// Carrier windows are actual holes in the opaque shell, not glass decals.
for(const [id,wheelCount]of [['COMBAT',8],['RECCE',4],['TROOP',6],['COMMAND',6],['MINE',8]]){
 const root=createMission(id);root.updateMatrixWorld(true);const meshes=[];root.traverse(o=>{if(o.isMesh)meshes.push(o);});
 const front=root.userData.length/2,half=root.userData.width/2,shells=meshes.filter(o=>o.name==='hull shell');
 const ray=(objects,p,d,far=2)=>new THREE.Raycaster(new THREE.Vector3(...p),new THREE.Vector3(...d),0,far).intersectObjects(objects,false);
 for(const s of [-1,1]){
  assert.equal(ray(shells,[front+1,1.965,s*.45],[-1,0,0],1.8).length,0,id+' front aperture has no opaque backing');
  assert.equal(ray(shells,[front-1.40,2.02,s*(half+.5)],[0,0,-s],.9).length,0,id+' side aperture has no opaque backing');
  const frontGasket=ray(meshes,[front+1,2.122,s*(half*.67+.09)/2],[-1,0,0],1.8)[0];assert.equal(frontGasket?.object.name,'carrier window compression gasket',id+' front gasket land remains visible ahead of formed skin');
  const sideGasket=ray(meshes,[front-1.44,2.152,s*(half+.5)],[0,0,-s],.9)[0];assert.equal(sideGasket?.object.name,'carrier window compression gasket',id+' side gasket land remains visible ahead of door skin');
 }
 assert.equal(root.children.filter(o=>o.name==='run-flat wheel').length,wheelCount,id+' preserved axle topology');
 const lights=meshes.filter(o=>o.name==='carrier front lamp housing');assert.equal(lights.length,2);
 for(const housing of lights){const b=new THREE.Box3().setFromObject(housing),y=housing.position.y,z=housing.position.z;
  const hit=ray(shells,[front+1,y,z],[-1,0,0],2)[0];assert(hit,id+' lamp shell mounting face');assert(b.containsPoint(hit.point),id+' lamp housing spans actual hull face');
 }
 for(const bracket of meshes.filter(o=>o.name==='carrier entry step hull bracket')){
  const s=Math.sign(bracket.position.z),b=new THREE.Box3().setFromObject(bracket),hit=ray(shells,[bracket.position.x,bracket.position.y,s*(half+.5)],[0,0,-s],1)[0];assert(hit&&b.containsPoint(hit.point),id+' actual step bracket reaches sloped side skin');
 }
 const floor=meshes.find(o=>o.name==='cab floor'),cowl=meshes.find(o=>o.name==='carrier supported dashboard cowl');assert(floor&&cowl);
 const floorBox=new THREE.Box3().setFromObject(floor),cowlBox=new THREE.Box3().setFromObject(cowl);assert(floorBox.intersectsBox(cowlBox),id+' dashboard cowl bears on cab floor');
 const cowlFoot=ray([cowl],[front-1.12,1.10,0],[0,1,0],1)[0];assert(cowlFoot&&floorBox.containsPoint(cowlFoot.point),id+' actual cowl lower bearing face lies in floor');
 const seats=meshes.filter(o=>o.name==='driver seat');assert.equal(seats.length,2);for(const seat of seats){
  const base=meshes.find(o=>o.name==='carrier seat suspension pedestal'&&Math.sign(o.position.z)===Math.sign(seat.position.z));assert(base);const baseBox=new THREE.Box3().setFromObject(base);
  const baseFoot=ray([base],[base.position.x,1.10,base.position.z],[0,1,0],1)[0];assert(baseFoot&&floorBox.containsPoint(baseFoot.point),id+' actual seat pedestal bears on floor');
  const seatFoot=ray([seat],[seat.position.x,1.10,seat.position.z],[0,1,0],1)[0];assert(seatFoot&&baseBox.containsPoint(seatFoot.point),id+' actual cushion lower bearing face supported by pedestal');
 }
 const gs=new Set(),ms=new Set();root.traverse(o=>{if(o.geometry)gs.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:o.material?[o.material]:[])ms.add(m);});gs.forEach(o=>o.dispose());ms.forEach(o=>o.dispose());
}
console.log('Five carrier cabs: actual open glass apertures, hull-spanning lamp housings, floor-supported cowl/seats and preserved 8/4/6/6/8 wheel topology PASS');
for(const material of Object.values(finishes)){
 assert.equal(material.bumpMap,null,'Microscopic finishes cannot retain exaggerated bump textures');
 assert.equal(Object.values(material).filter(v=>v?.isTexture).length,0,'Finish lifecycle needs no external or orphan textures');
 if(!(material instanceof FinishMaterial))continue;
 const copy=material.clone();assert.deepEqual(copy.finishProfile,material.finishProfile);assert.notEqual(copy.finishProfile,material.finishProfile);
 assert.deepEqual(copy.surfaceProfile,material.surfaceProfile);assert.notEqual(copy.surfaceProfile,material.surfaceProfile,'Visible-scale finish clones must not share mutable profiles');
 const compile=()=>({vertexShader:THREE.ShaderLib.physical.vertexShader,fragmentShader:THREE.ShaderLib.physical.fragmentShader,uniforms:{}});
 const shader=compile(),cloneShader=compile();material.onBeforeCompile(shader);copy.onBeforeCompile(cloneShader);
 assert.equal(shader.vertexShader,cloneShader.vertexShader);assert.equal(shader.fragmentShader,cloneShader.fragmentShader);assert.deepEqual(shader.uniforms.seaFinish.value,cloneShader.uniforms.seaFinish.value);
 assert.notEqual(shader.uniforms.seaFinish.value,cloneShader.uniforms.seaFinish.value,'Compiled clones cannot share mutable finish uniforms');
 assert.deepEqual(shader.uniforms.seaSurface.value,cloneShader.uniforms.seaSurface.value);assert.notEqual(shader.uniforms.seaSurface.value,cloneShader.uniforms.seaSurface.value);
 assert(shader.fragmentShader.includes('float seaSurfaceResponse=seaVisibleSurface()'),'Coarse response is sampled once, shared by colour and roughness');
 assert(shader.vertexShader.includes('length(modelMatrix[0].xyz)'),'Finish scale follows actual mesh scale');assert(shader.fragmentShader.includes('dFdx(p)'),'Subpixel finish must suppress aliasing');
 const original=copy.finishProfile.wavelength;copy.finishProfile.wavelength*=2;assert.equal(material.finishProfile.wavelength,original);
 const originalSurface=material.surfaceProfile.wavelength;copy.surfaceProfile.wavelength*=2;assert.equal(material.surfaceProfile.wavelength,originalSurface);
 copy.dispose();
}
for(const profile of Object.values(SURFACE_PROFILES)){assert(profile.wavelength>=.008&&profile.wavelength<=.020);assert(profile.roughness>0&&profile.roughness<=.025);assert(profile.tone>=0&&profile.tone<=.006,'Visible colour response must remain restrained, not wear/camouflage');}
const finishShell=new THREE.Mesh(new THREE.BoxGeometry(),finishes.paint);finishShell.name='hull shell';const finishRoot=new THREE.Group();finishRoot.add(finishShell);const finishCutaway=prepareCutaway(finishRoot);
finishCutaway.apply(true);assert(finishShell.material instanceof FinishMaterial);assert.deepEqual(finishShell.material.finishProfile,finishes.paint.finishProfile,'Cutaway must preserve the original finish shader');assert.deepEqual(finishShell.material.surfaceProfile,finishes.paint.surfaceProfile,'Cutaway preserves visible-scale finish');finishCutaway.dispose();assert.equal(finishShell.material,finishes.paint);finishShell.geometry.dispose();Object.values(finishes).forEach(m=>m.dispose());
console.log('Material finish clone/cutaway isolation, scale/alias shader anchors and texture-free lifecycle PASS (actual GPU compile still requires browser)');
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
// Authored engine groups must separate functional assemblies instead of
// scattering fasteners by position. Cutaway must reveal the internal mechanism
// through marked casings without ghosting that mechanism or changing its paint.
const engineFixture=new THREE.Group();engineFixture.userData.assetId='MOB-A';
const engineHead=new THREE.Group(),engineSump=new THREE.Group(),engineMechanism=new THREE.Group();
engineHead.userData.inspectionKey='engine:head';engineSump.userData.inspectionKey='engine:sump';engineMechanism.userData.inspectionKey='engine:rotating';
const engineCasing=new THREE.Mesh(new THREE.BoxGeometry(1,.3,.5),shared);engineCasing.position.y=.9;engineCasing.userData.cutawayShell=true;engineCasing.castShadow=true;engineHead.add(engineCasing);
const enginePan=new THREE.Mesh(new THREE.BoxGeometry(1,.2,.5),shared);enginePan.position.y=.2;enginePan.userData.cutawayShell=true;engineSump.add(enginePan);
const engineCrank=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,.8),shared);engineCrank.position.y=.45;engineMechanism.add(engineCrank);engineFixture.add(engineHead,engineSump,engineMechanism);
const engineInspection=prepareInspection(engineFixture);
assert.deepEqual(new Set(engineInspection.parts.map(p=>p.key)),new Set(['engine:head','engine:sump','engine:rotating']),'Authored functional assemblies retain stable inspection identities');
engineInspection.apply(1);engineFixture.updateMatrixWorld(true);
assert(engineHead.getWorldPosition(new THREE.Vector3()).y>0&&engineSump.getWorldPosition(new THREE.Vector3()).y<0,'Head and sump separate above and below the mechanism');
assert.equal(engineMechanism.getWorldPosition(new THREE.Vector3()).length(),0,'Rotating mechanism remains the central datum during separation');
engineInspection.restore();for(const p of engineInspection.parts)assert.equal(p.object.position.length(),0);
const engineCutaway=prepareCutaway(engineFixture);engineCutaway.apply(true);
assert.notEqual(engineCasing.material,shared,'Marked engine casing must expose internals');assert.equal(engineCasing.material.opacity,.13);assert.equal(engineCrank.material,shared);assert.equal(engineCasing.castShadow,false);
engineCutaway.dispose();assert.equal(engineCasing.material,shared);assert.equal(engineCasing.castShadow,true);engineFixture.traverse(o=>o.geometry?.dispose());
console.log('Authored engine semantic separation, central mechanism datum and enclosure-only cutaway restoration PASS');
for(const id of ['MOB-A','MOB-E','MOB-F']){
 const root=createPart(id),scale=id==='MOB-F'?.78:1,meshes=[];root.updateMatrixWorld(true);root.traverse(o=>{if(o.isMesh)meshes.push(o);});
 const named=name=>meshes.filter(o=>o.name===name);
 const expected=['head','block','sump','rotating','transmission','intake','exhaust','cooling','services','skid'].map(k=>'engine:'+k);
 assert.deepEqual(new Set(root.children.map(o=>o.userData.inspectionKey)),new Set(expected),id+' functional construction islands');
 for(const name of ['engine cylinder liner','engine piston crown and skirt','engine connecting rod','crankshaft offset crankpin'])assert.equal(named(name).length,6,id+' inline-six anatomy: '+name);
 assert.equal(named('head valve stem').length,12);
 for(const piston of named('engine piston crown and skirt')){
  const x=piston.position.x,y=piston.position.y,liner=named('engine cylinder liner').find(o=>Math.abs(new THREE.Box3().setFromObject(o,true).getCenter(new THREE.Vector3()).x/scale-x)<1e-5);
  assert(liner,id+' piston requires its own hollow cylinder');
  const hit=new THREE.Raycaster(new THREE.Vector3(x,y,0).multiplyScalar(scale),new THREE.Vector3(0,0,1),0,.1*scale).intersectObject(liner,false)[0];
  assert(hit&&Math.abs(hit.point.z/scale-.058)<.0002,id+' actual liner bore face');
  assert(piston.geometry.parameters.radiusTop<hit.point.z/scale,'Piston fits the physical bore without intersecting liner');
 }
 const crank=named('engine crankshaft main axis')[0],flywheel=named('engine crankshaft seated flywheel')[0],input=named('transmission connected input shaft')[0];
 const center=o=>new THREE.Box3().setFromObject(o,true).getCenter(new THREE.Vector3());
 assert(Math.abs(center(crank).y-center(flywheel).y)<1e-6&&Math.abs(center(crank).y-center(input).y)<1e-6,'Crank, flywheel and input share the physical axis');
 assert(new THREE.Box3().setFromObject(crank,true).intersectsBox(new THREE.Box3().setFromObject(flywheel,true)),'Crank reaches flywheel');
 assert(new THREE.Box3().setFromObject(input,true).intersectsBox(new THREE.Box3().setFromObject(flywheel,true)),'Input reaches flywheel');
 const block=named('cast crankcase with tapered shoulders')[0],piston=named('engine piston crown and skirt')[0],blockPaint=block.material,pistonPaint=piston.material,casing=prepareCutaway(root);
 casing.apply(true);assert.notEqual(block.material,blockPaint);assert.equal(piston.material,pistonPaint,'Cutaway leaves actual internal mechanism opaque');casing.dispose();assert.equal(block.material,blockPaint);
 root.traverse(o=>{o.geometry?.dispose();if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());});
}
console.log('Three actual engine variants: six hollow bores/pistons/rods/crankpins, aligned seated input and enclosure-only cutaway PASS');
const shadowLight=new THREE.DirectionalLight();shadowLight.position.set(-5,9,6);const fixedLight=shadowLight.position.clone(),fixedTarget=shadowLight.target.position.clone();
shadowLight.shadow.mapSize.set(2048,2048);
for(const dimensions of [[1.7,1.4,1.4],[6.25,3.5,2.3],[11,7,6]]){
 const caster=new THREE.Mesh(new THREE.BoxGeometry(...dimensions),shared);caster.position.y=dimensions[1]/2;
 for(const angle of [0,.7,2.1]){caster.rotation.y=angle;caster.updateWorldMatrix(true,false);const bounds=new THREE.Box3().setFromObject(caster,true),ground=bounds.min.y-.025;fitDirectionalShadow(shadowLight,caster,ground);
  const direction=fixedLight.clone().sub(fixedTarget).normalize();for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
   const point=new THREE.Vector3(x,y,z);for(const p of [point,point.clone().addScaledVector(direction,-(y-ground)/direction.y)]){p.project(shadowLight.shadow.camera);assert(Math.abs(p.x)<1&&Math.abs(p.y)<1&&Math.abs(p.z)<1,'Caster and projected ground shadow stay within shadow map');}
  }
  assert.deepEqual(shadowLight.position,fixedLight);assert.deepEqual(shadowLight.target.position,fixedTarget);assert(shadowLight.shadow.normalBias<=.006);
  const c=shadowLight.shadow.camera,texel=Math.max((c.right-c.left)/shadowLight.shadow.mapSize.x,(c.top-c.bottom)/shadowLight.shadow.mapSize.y);
  assert(Math.abs(shadowLight.shadow.radius*texel-.045)<1e-10,'Shadow softness scales with the fitted world-space texel size');
  if(dimensions[0]<2)assert(shadowLight.shadow.camera.right-shadowLight.shadow.camera.left<4,'Small parts use map resolution rather than a 24m frustum');
 }
 caster.geometry.dispose();
}
console.log('Scale-aware directional shadow framing: caster/contact containment, rotation and fixed world light PASS');
for(const id of MISSION_IDS){const model=createMission(id);assert(model.getObjectByName('driver controls'),id+' requires a real cockpit');let wheels=0,brakes=0;model.traverse(o=>{if(o.name==='run-flat wheel')wheels++;if(o.name==='ventilated brake rotor')brakes++;});assert.equal(brakes,wheels,id+' requires a brake per wheel');}
console.log('Real cockpit and brake topology PASS');
const recoveryProbe=createMission('RECOVERY');recoveryProbe.updateWorldMatrix(true,true);const mainBoom=recoveryProbe.getObjectByName('formed main boom');mainBoom.geometry.computeBoundingBox();
const boomLength=mainBoom.geometry.boundingBox.max.z,beamRay=(origin,direction,far)=>new THREE.Raycaster(new THREE.Vector3(...origin).applyMatrix4(mainBoom.matrixWorld),new THREE.Vector3(...direction).transformDirection(mainBoom.matrixWorld),0,far).intersectObject(mainBoom,false);
assert.equal(beamRay([0,0,-.1],[0,0,1],boomLength+.2).length,0,'Telescopic boom has an open axial bore, not a solid end cap');
assert(beamRay([-.5,0,boomLength/2],[1,0,0],1).length>0,'Open boom retains actual structural walls');
const cylinderAxis=name=>new THREE.Vector3(0,1,0).applyQuaternion(recoveryProbe.getObjectByName(name).getWorldQuaternion(new THREE.Quaternion()));
assert(Math.abs(cylinderAxis('lift cylinder barrel').dot(cylinderAxis('lift piston rod')))>.999999,'Hydraulic barrel and piston must share one working axis');
console.log('Recovery hollow boom wall/bore and collinear hydraulic barrel/piston PASS');

// The live cabin render exposed painted shell/shoulder occlusion and mirrored
// cassette faces. Shoot through the actual whole assembly, not just its gasket.
for(const id of ['PRO-D','PRO-G']){
 const model=createPart(id);model.updateMatrixWorld(true);
 const length=id==='PRO-D'?1.7:2.3,height=id==='PRO-D'?1.38:1.30,a=-length/2+.20,c=length/2-.48,b=.85,d=height-.13;
 const points=[[(a+c)/2,b+.009],[(a+c)/2,d-.009],[a+.009,(b+d)/2],[c-.009,(b+d)/2]];
 for(const [cx,cy,sx,sy] of [[a+.045,b+.045,-1,-1],[c-.045,b+.045,1,-1],[a+.045,d-.045,-1,1],[c-.045,d-.045,1,1]])points.push([cx+sx*.036/Math.sqrt(2),cy+sy*.036/Math.sqrt(2)]);
 for(const side of [-1,1])for(const [x,y] of points){
  const hit=new THREE.Raycaster(new THREE.Vector3(x,y,side*3),new THREE.Vector3(0,0,-side)).intersectObject(model,true)[0];
  assert.equal(hit?.object.name,'window compression gasket',id+' gasket hidden at '+[side,x,y]+' by '+hit?.object.name);
 }
}
console.log('PRO-D/G exterior window gasket visibility: straight/corner lands on both sides PASS');

// Purchased cells must bear on the actual carrier geometry, not a nominal
// bounding volume or a floor hovering above disconnected mounting feet.
let bearingFaces=0;
for(const mission of MISSION_IDS){
 const root=createConfiguration(mission,[{id:'PRO-D'}]);root.updateMatrixWorld(true);
 const extension=root.getObjectByName('crew cell chassis extension');
 assert(extension,mission+' requires connected crew-cell carrier support');
 const shoes=[];root.traverse(o=>{if(o.name==='crew cell attachment shoe')shoes.push(o);});
 assert.equal(shoes.length,4,mission+' requires exactly four physical shoes');
 for(const shoe of shoes){
  const b=new THREE.Box3().setFromObject(shoe,true),center=b.getCenter(new THREE.Vector3());
  const ray=new THREE.Raycaster(new THREE.Vector3(center.x,b.min.y+.001,center.z),new THREE.Vector3(0,-1,0),0,.012);
  const hit=ray.intersectObject(extension,true)[0];
  assert(hit,mission+' shoe lacks an actual carrier bearing face');
  assert(Math.abs(hit.point.y-b.min.y)<1e-6,mission+' shoe does not touch carrier');
  assert(['crew cell carrier shoe crossmember','crew cell carrier extension rail'].includes(hit.object.name),mission+' false bearing on other hardware');
  bearingFaces++;
 }
}
assert.equal(bearingFaces,24);
console.log('All six purchased PRO-D carriers: 24 actual shoe bearing-face contacts PASS');

// Follow-up source review found millimetre gaps at the actual coolant tank and
// manifold flanges. Probe individual physical faces in all engine variants.
for(const id of ['MOB-A','MOB-E','MOB-F']){
 const root=createPart(id);root.updateMatrixWorld(true);const scale=id==='MOB-F'?.78:1,meshes=[];root.traverse(o=>{if(o.isMesh)meshes.push(o);});
 const named=name=>meshes.filter(o=>o.name===name);
 const ray=(mesh,point,direction)=>new THREE.Raycaster(new THREE.Vector3(...point).multiplyScalar(scale),new THREE.Vector3(...direction),0,2*scale).intersectObject(mesh,false);
 const tank=named('radiator formed side tank').find(o=>o.position.z>0),necks=named('radiator coolant inlet neck'),clamps=named('coolant hose seated clamp');
 assert.equal(necks.length,2);assert.equal(clamps.length,2);
 for(const y of [.965,.285]){
  const tankFace=ray(tank,[.65,y,.389],[1,0,0])[0];assert(tankFace,id+' requires actual inlet face');assert(Math.abs(tankFace.point.x/scale-.7325)<1e-5);
  const neck=necks.find(o=>Math.abs(o.position.y-y)<1e-6),clamp=clamps.find(o=>Math.abs(o.position.y-y)<1e-6);
  const neckFace=ray(neck,[.65,y,.389],[1,0,0])[0],clampFace=ray(clamp,[.65,y,.389],[1,0,0])[0];assert(neckFace&&clampFace,id+' inlet neck and clamp must share actual hose axis');
  assert(new THREE.Box3().setFromObject(neck).max.x>tankFace.point.x,id+' inlet neck must cross tank face');
  assert(new THREE.Box3().setFromObject(clamp).max.x<tankFace.point.x,id+' clamp must remain outside tank');
  const hose=named(y>.5?'upper coolant hose seated into side tank':'lower coolant hose seated into side tank')[0],end=hose.geometry.parameters.path.getPoint(1);
  assert.deepEqual(end.toArray(),[.80,y,.389]);
  // Approach each outward face from outside; interior-origin rays would be
  // discarded by the real tank's front-sided material, regardless of contact.
  for(const sign of [-1,1]){const origin=end.clone();origin.x+=sign*.30;const hit=ray(tank,origin.toArray(),[-sign,0,0])[0];assert(hit&&sign*(hit.point.x-end.x*scale)>0&&Math.abs(hit.point.x-end.x*scale)<.10*scale,id+' hose endpoint must lie between actual tank faces');}
 }
 const head=named('cast cylinder head with port band')[0],flanges=named('manifold seated port flange');assert.equal(flanges.length,12);
 for(const flange of flanges){const sign=Math.sign(flange.position.z),x=flange.position.x,y=flange.position.y,headFace=ray(head,[x,y,sign*.40],[0,0,-sign])[0],flangeFace=ray(flange,[x,y,0],[0,0,sign])[0];assert(headFace&&flangeFace);assert(Math.abs(headFace.point.z-flangeFace.point.z)<2e-5*scale,id+' manifold flange must seat on head');}
 const isolators=named('engine mounting isolator'),shoes=named('engine skid mounting shoe');assert.equal(isolators.length,4);assert.equal(shoes.length,4);
 for(const isolator of isolators){const shoe=shoes.find(o=>Math.abs(o.position.x-isolator.position.x)<1e-6&&Math.abs(o.position.z-isolator.position.z)<1e-6);assert(shoe);const x=shoe.position.x,z=shoe.position.z,shoeFace=ray(shoe,[x,.19,z],[0,-1,0])[0],rubberFace=ray(isolator,[x,.16,z],[0,1,0])[0];assert(shoeFace&&rubberFace);assert(Math.abs(shoeFace.point.y-rubberFace.point.y)<1e-6,id+' engine isolator must bear on skid shoe');}
}
console.log('Three power packs: physical coolant inlet/clamp/tank paths, 36 seated manifold faces and 12 skid bearing contacts PASS');

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
