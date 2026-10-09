import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {box,cylinder,rod,tube,bolts,createWheel,createVehicle,createWinch} from '../../samples/threejs-recovery/models.mjs';
import {materials} from './materials.mjs';
export {materials};

// Original concept geometry in metres. References inform construction, never game ratings.
export function soften(model){
 model.traverse(o=>{if(o.isMesh&&o.geometry.type==='BoxGeometry'){const {width:w,height:h,depth:d}=o.geometry.parameters;if(Math.min(w,h,d)>.045){o.geometry.dispose();o.geometry=new RoundedBoxGeometry(w,h,d,1,Math.min(.024,Math.min(w,h,d)*.12));}}});return model;
}
export function panel(g,m,size,pos,axis='z'){
 const p=box(g,m.paint,size,pos,'service panel');
 const [x,y,z]=pos;
 if(axis==='z'){for(const a of [-1,1])for(const b of [-1,1])cylinder(g,m.steel,.009,.012,[x+a*size[0]*.4,y+b*size[1]*.4,z+Math.sign(z||1)*(size[2]/2+.007)],'z',.009,6);}
 return p;
}
export function detailPart(g,m,prefix,v){
 // Mobility factories author complete connected systems; legacy overlay fittings
 // assumed a different block layout and would float on the new assemblies.
 if(prefix==='MOB'){refineWheels(g,m);return soften(g);}
 if(prefix==='CAP'){
  // The seating factory owns variant dimensions, restraints and boarding mounts.
  return soften(g);
 }else if(prefix==='FP'){
  // The station factory owns its shield, supported control enclosure and
  // trunnion fittings. The former block-layout overlays do not mate to them.
  return soften(g);
 }else if(prefix==='PRO'){
  // The protection factory owns its formed layers, apertures and attachments;
  // generic overlay fittings would no longer correspond to those surfaces.
  return soften(g);
 }else if(prefix==='COM'){
  for(let i=0;i<(v===1?3:v===6?2:1);i++){const x=(i-((v===1?3:v===6?2:1)-1)/2)*.4;
   rod(g,m.darkSteel,[x-.13,.47,.17],[x+.13,.47,.17],.015);for(let j=0;j<7;j++)box(g,m.darkSteel,[.26,.012,.025],[x,.15+j*.042,-.13]);
   for(const offset of [-.085,.085]){cylinder(g,m.steel,.02,.025,[x+offset,.17,.145],'z');tube(g,m.rubber,[[x+offset,.17,.16],[x+offset,.1,.23],[x+offset+.08,.06,.3]],.012);}
   for(let j=0;j<3;j++)box(g,m.lamp,[.025,.006,.003],[x-.065+j*.05,.41,.134]);
  }
 }else if(prefix==='SA'){
  for(const x of [-.105,.105]){cylinder(g,m.steel,.081,.014,[x,v===3?1.75:.43,.172],'z');cylinder(g,m.glass,.055,.012,[x,v===3?1.75:.43,.185],'z');}
  tube(g,m.rubber,[[0,.07,-.08],[.12,.17,-.14],[.12,.37,-.14]],.012);
 }else if(prefix==='ACC'){
  if([0,5].includes(v)){box(g,m.amber,[.13,.05,.022],[.18,.49,.29],'safety marking');}
  else if(v===1){for(const s of [-1,1]){box(g,m.red,[.025,.05,.11],[-.73,.45,s*.3]);rod(g,m.steel,[-.65,.8,s*.38],[.6,.8,s*.38],.014);}cylinder(g,m.darkSteel,.055,.12,[1.27,.38,0],'y');}
  else if([3,6].includes(v)){for(let i=0;i<3;i++){rod(g,m.darkSteel,[-.47+i*.37,.4,.24],[-.30+i*.37,.4,.24],.012);for(const s of [-1,1])cylinder(g,m.steel,.009,.016,[-.46+i*.37,.24,s*.245],'z',.009,6);}tube(g,m.rubber,[[-.6,.03,-.29],[-.51,.1,-.35],[.5,.1,-.35],[.6,.04,-.29]],.018);}
 }else if(prefix==='SE'){
  // Tangible review artefacts: laptop keyboard, bound documents and a scale model.
  box(g,m.darkSteel,[.44,.025,.29],[.25,.75,.12],'laptop base');for(let row=0;row<4;row++)for(let col=0;col<10;col++)box(g,m.steel,[.025,.003,.023],[.09+col*.032,.766,.03+row*.034]);
  box(g,m.rubber,[.09,.003,.045],[.25,.766,.23],'trackpad');box(g,m.paint,[.28,.019,.22],[-.38,.758,.15],'review binder');
  for(let i=0;i<4;i++)box(g,m.lamp,[.25,.003,.19],[-.38+i*.003,.772+i*.003,.15]);rod(g,m.darkSteel,[-.54,.78,.26],[-.32,.78,.26],.005);
 }
 highDetail(g,m,prefix,v);refineWheels(g,m);return soften(g);
}

function face(g,m,vertices){const a=[];for(let i=1;i<vertices.length-1;i++)a.push(...vertices[0],...vertices[i],...vertices[i+1]);const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(a,3));geometry.computeVertexNormals();const mat=m.clone();mat.side=THREE.DoubleSide;const mesh=new THREE.Mesh(geometry,mat);mesh.name=m.name==='optical glass'?'cab glazing':'hull shell';g.add(mesh);return mesh;}
export function roundedOpening(x0,y0,x1,y1,r=.045){
 const p=new THREE.Path();p.moveTo(x0+r,y0);p.lineTo(x1-r,y0);p.quadraticCurveTo(x1,y0,x1,y0+r);p.lineTo(x1,y1-r);p.quadraticCurveTo(x1,y1,x1-r,y1);p.lineTo(x0+r,y1);p.quadraticCurveTo(x0,y1,x0,y1-r);p.lineTo(x0,y0+r);p.quadraticCurveTo(x0,y0,x0+r,y0);return p;
}
export function formedCabPanel(g,m,outline,holes,place){
 const shape=new THREE.Shape();outline.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();shape.holes.push(...holes);
 const geometry=new THREE.ExtrudeGeometry(shape,{depth:.040,steps:1,curveSegments:6,bevelEnabled:true,bevelSize:.014,bevelThickness:.012,bevelSegments:3});
 const p=geometry.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,...place(p.getX(i),p.getY(i),p.getZ(i)));geometry.computeVertexNormals();
 const material=m.clone();material.side=THREE.DoubleSide;const mesh=new THREE.Mesh(geometry,material);mesh.name='hull shell';mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;
}
function carrierSheet(g,material,outline,holes,place,depth,name){
 const shape=new THREE.Shape();outline.forEach(([a,b],i)=>i?shape.lineTo(a,b):shape.moveTo(a,b));shape.closePath();shape.holes.push(...holes);
 const geometry=new THREE.ExtrudeGeometry(shape,{depth,steps:1,curveSegments:12,bevelEnabled:true,bevelSize:.002,bevelThickness:.001,bevelSegments:2});
 const p=geometry.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,...place(p.getX(i),p.getY(i),p.getZ(i)));geometry.computeVertexNormals();
 const finish=material.clone();finish.side=THREE.DoubleSide;const mesh=new THREE.Mesh(geometry,finish);mesh.name=name;mesh.castShadow=mesh.receiveShadow=true;g.add(mesh);return mesh;
}
function carrierWindow(g,m,bounds,place){
 const [a,b,c,d]=bounds,contour=roundedOpening(a,b,c,d,.045),outer=roundedOpening(a-.038,b-.038,c+.038,d+.038,.065).getPoints(12).map(p=>[p.x,p.y]);
 carrierSheet(g,m.edge,outer,[contour.clone()],(u,y,t)=>place(u,y,.013+t),.017,'hull shell').userData.component='carrier window retaining bezel';
 const gasket=roundedOpening(a-.007,b-.007,c+.007,d+.007,.052).getPoints(12).map(p=>[p.x,p.y]);
 carrierSheet(g,m.rubber,gasket,[roundedOpening(a+.016,b+.016,c-.016,d-.016,.029)],(u,y,t)=>place(u,y,-.034+t),.066,'carrier window compression gasket');
 const optical=m.glass.clone();optical.color.set('#92b2b0');optical.transparent=true;optical.opacity=.38;optical.metalness=0;optical.depthWrite=false;
 carrierSheet(g,optical,contour.getPoints(12).map(p=>[p.x,p.y]),[],(u,y,t)=>place(u,y,-.025-t),.010,'cab glazing').castShadow=false;
 carrierSheet(g,m.edge,outer,[contour.clone()],(u,y,t)=>place(u,y,-.057-t),.012,'hull shell').userData.component='carrier window inner retaining frame';
 for(const x of [a-.023,c+.023])for(const y of [b+.04,d-.04]){
  const center=new THREE.Vector3(...place(x,y,.032)),axis=new THREE.Vector3(...place(x,y,.042)).sub(center).normalize();
  const bolt=cylinder(g,m.steel,.007,.009,center.toArray(),'y',.007,6);bolt.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),axis);bolt.name='carrier bezel seated fastener';
 }
}

// Small exterior systems follow the authored hull/glass surfaces. These are
// original illustrative assemblies, not dimensions or ratings of a real vehicle.
function carrierWiper(g,m,frontX,range){
 const k=.75/1.16,normal=new THREE.Vector3(1,k,0).normalize(),mid=(range[0]+range[1])/2;
 const assembly=new THREE.Group();assembly.name='carrier windshield wiper assembly';
 const mount=new THREE.Vector3(frontX(1.755),1.755,mid-.06);assembly.position.copy(mount);g.add(assembly);
 const at=(y,z,d,glass=false)=>new THREE.Vector3(frontX(y)-(glass ? .025 : 0),y,z).addScaledVector(normal,d).sub(mount).toArray();
 const axisCylinder=(radius,height,y,z,d,name)=>{const o=cylinder(assembly,m.darkSteel,radius,height,at(y,z,d),'y',radius,24);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),normal);o.name=name;return o;};
 axisCylinder(.027,.028,1.755,mid-.06,.014,'carrier wiper spindle housing');
 axisCylinder(.014,.031,1.755,mid-.06,.042,'carrier wiper pivot shaft');
 const bladeCenter=[1.96,mid+.035],span=(range[1]-range[0])*.32;
 rod(assembly,m.darkSteel,at(1.755,mid-.06,.055),at(1.87,mid-.10,.061),.012).name='carrier wiper articulated arm';
 rod(assembly,m.darkSteel,at(1.87,mid-.10,.061),at(bladeCenter[0],bladeCenter[1],.032,true),.009).name='carrier wiper articulated arm';
 // The glazing extrusion has a 1 mm bevel beyond its nominal plane.
 const contactOffset=.003+.001/Math.sqrt(1+k*k);
 const a=at(1.935,mid+.035-span,contactOffset,true),b=at(1.985,mid+.035+span,contactOffset,true);
 rod(assembly,m.rubber,a,b,.003).name='carrier wiper rubber contact lip';
 rod(assembly,m.darkSteel,at(1.935,mid+.035-span,.012,true),at(1.985,mid+.035+span,.012,true),.007).name='carrier wiper spring blade spine';
 rod(assembly,m.darkSteel,at(bladeCenter[0],bladeCenter[1],.012,true),at(bladeCenter[0],bladeCenter[1],.035,true),.014).name='carrier wiper blade swivel';
}
function carrierMirror(g,m,front,half,s){
 const original=new Set(g.children);
 const sideZ=y=>s*half*(.75+(y-1.2)*.1/1.16),x=front-.92;
 const plate=box(g,m.edge,[.12,.18,.034],[x,1.74,sideZ(1.74)+s*.025],'carrier mirror hull mounting plate');plate.rotation.x=-s*Math.atan(half*.1/1.16);
 const center=[front-.90,2.08,s*(half+.10)];
 box(g,m.rubber,[.086,.26,.185],center,'carrier mirror sealed backing');
 box(g,m.glass,[.006,.218,.15],[center[0]+.045,center[1],center[2]],'mirror');
 for(const dy of [-.055,.055]){
  rod(g,m.darkSteel,[x,1.74+dy,sideZ(1.74+dy)+s*.040],[center[0]-.025,center[1]+dy,center[2]],.014).name='carrier mirror support strut';
  cylinder(g,m.steel,.014,.014,[x,1.74+dy,sideZ(1.74+dy)+s*.044],'z',.014,6).name='carrier mirror mount fastener';
 }
 const assembly=new THREE.Group();assembly.name='carrier mirror assembly';assembly.position.copy(plate.position);g.add(assembly);g.updateMatrixWorld(true);
 for(const child of [...g.children])if(child!==assembly&&!original.has(child))assembly.attach(child);
}
function carrierHeadlamp(g,m,x,y,z){
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.061,.008,8,36),m.steel);ring.rotation.y=Math.PI/2;ring.position.set(x+.150,y,z);ring.name='carrier headlamp retaining ring';ring.castShadow=ring.receiveShadow=true;g.add(ring);
 const profile=[[0,-.030],[.022,-.027],[.042,-.014],[.056,0]].map(([r,d])=>new THREE.Vector2(r,d));
 const bowl=new THREE.Mesh(new THREE.LatheGeometry(profile.reverse(),32),m.steel);bowl.rotation.z=-Math.PI/2;bowl.position.set(x+.145,y,z);bowl.name='carrier headlamp reflector bowl';g.add(bowl);
 const optical=m.glass.clone();optical.color.set('#e0e9df');optical.transparent=true;optical.opacity=.45;optical.metalness=0;optical.roughness=.10;optical.depthWrite=false;
 cylinder(g,optical,.056,.004,[x+.154,y,z],'x',.056,36).name='carrier headlamp clear cover';
 cylinder(g,m.lamp,.011,.012,[x+.129,y,z],'x',.011,16).name='carrier headlamp bulb capsule';
 // Fine cover ribs are actual shallow geometry, confined to the aperture.
 for(const dz of [-.032,-.016,0,.016,.032]){const h=Math.sqrt(.050*.050-dz*dz);rod(g,optical,[x+.157,y-h,z+dz],[x+.157,y+h,z+dz],.0012).name='carrier headlamp cover rib';}
}

// Original formed-sheet construction inferred from the local concept targets
// and the maintenance-oriented Patria 6x6 reference. No production dimensions,
// ratings, photographs or manufacturer mesh data are incorporated.
function carrierAccessCover(g,m,half,s,x){
 const assembly=new THREE.Group();assembly.name='hull shell service access assembly';g.add(assembly);
 const sideZ=y=>s*half*(.75+(y-1.2)*.1/1.16),place=(u,y,t)=>[u,y,sideZ(y)+s*t];
 const outer=roundedOpening(x-.34,1.65,x+.34,2.23,.028),inner=roundedOpening(x-.321,1.669,x+.321,2.211,.022);
 carrierSheet(assembly,m.rubber,outer.getPoints(12).map(p=>[p.x,p.y]),[inner],place,.012,'carrier service cover compression joint');
 const finish=m.paint.clone();finish.color.multiplyScalar(1.018);
 carrierSheet(assembly,finish,inner.getPoints(12).map(p=>[p.x,p.y]),[],(u,y,t)=>place(u,y,.011+t),.012,'carrier formed service cover');
 finish.dispose();
 for(const y of [1.73,2.14]){
  const leaf=box(assembly,m.paint,[.080,.056,.018],place(x-.305,y,.033),'carrier service cover hinge leaf');leaf.rotation.x=-s*Math.atan(half*.1/1.16);
  cylinder(assembly,m.steel,.010,.058,place(x-.305,y,.048),'y',.010,20).name='carrier service cover hinge barrel';
 }
 const cup=roundedOpening(x+.216,1.87,x+.296,2.015,.015),opening=roundedOpening(x+.230,1.888,x+.282,1.998,.012);
 carrierSheet(assembly,m.darkSteel,cup.getPoints(8).map(p=>[p.x,p.y]),[opening],(u,y,t)=>place(u,y,.025+t),.012,'carrier service latch recessed rim');
 rod(assembly,m.steel,place(x+.255,1.907,.037),place(x+.255,1.978,.037),.007).name='carrier service latch lever';
 assembly.traverse(o=>{if(o.isMesh)o.userData.cutawayShell=true;});
}
function carrierHullJoints(g,m,front,rear,half,id){
 const assembly=new THREE.Group();assembly.name='hull shell welded seams';g.add(assembly);
 const weld=m.paint.clone();weld.color.multiplyScalar(.87);weld.roughness=.78;
 const joint=(a,b,surface)=>{const o=rod(assembly,weld,a,b,.0035);o.name='carrier hull welded joint';o.userData.surface=surface;o.userData.cutawayShell=true;};
 for(const s of [-1,1]){
  const sideZ=y=>s*half*(.75+(y-1.2)*.1/1.16);
  joint([id==='COMMAND'?1.16:rear+.20,2.374,s*half*.85],[front-.77,2.374,s*half*.85],'roof');
  joint([rear+.014,1.214,sideZ(1.214)+s*.015],[front-.018,1.214,sideZ(1.214)+s*.015],'side');
  joint([front-.76,2.33,sideZ(2.33)+s*.015],[front-.029,1.245,sideZ(1.245)+s*.015],'side');
  joint([rear+.030,1.24,sideZ(1.24)+s*.015],[rear+.166,2.30,sideZ(2.30)+s*.015],'side');
 }
 const frontX=y=>front-(y-1.2)*.75/1.16;
 joint([frontX(1.54)+.015,1.54,-half*.77],[frontX(1.54)+.015,1.54,half*.77],'nose');
 if(id==='COMMAND')for(const s of [-1,1])joint([rear+.20,2.754,s*half*.85],[.93,2.754,s*half*.85],'roof');
}
function carrierRoofService(g,m,front){
 const assembly=new THREE.Group();assembly.name='hull shell roof service assembly';g.add(assembly);
 const x=front-1.30,roof=2.36;
 const outline=roundedOpening(x-.49,-.78,x+.49,.78,.040),opening=roundedOpening(x-.47,-.76,x+.47,.76,.034);
 carrierSheet(assembly,m.rubber,outline.getPoints(12).map(p=>[p.x,p.y]),[opening],(u,z,t)=>[u,roof+.002+t,z],.012,'carrier roof service sealed joint');
 const holes=[roundedOpening(x-.285,-.69,x+.285,-.43,.017),roundedOpening(x-.285,.43,x+.285,.69,.017)];
 carrierSheet(assembly,m.paint,opening.getPoints(12).map(p=>[p.x,p.y]),holes,(u,z,t)=>[u,roof+.015+t,z],.019,'carrier roof intake frame');
 for(const s of [-1,1]){
  box(assembly,m.darkSteel,[.58,.007,.28],[x,roof+.008,s*.56],'carrier roof intake dark duct');
  for(let i=0;i<10;i++){
   const blade=box(assembly,m.paint,[.038,.007,.292],[x-.248+i*.055,roof+.036,s*.56],'carrier roof intake blade');blade.rotation.z=-.38;
  }
 }
 for(const z of [-.738,.738])for(const u of [x-.426,x+.426])cylinder(assembly,m.steel,.008,.008,[u,roof+.039,z],'y',.008,6).name='carrier roof service captive fastener';
 assembly.traverse(o=>{if(o.isMesh)o.userData.cutawayShell=true;});
}
function carrierNoseService(g,m,front){
 const assembly=new THREE.Group();assembly.name='hull shell nose service assembly';g.add(assembly);
 const k=.75/1.16,normal=new THREE.Vector3(1,k,0).normalize(),place=(z,y,t)=>[front-(y-1.2)*k+t,y,z];
 const outer=roundedOpening(-.55,1.265,.55,1.708,.027),inner=roundedOpening(-.532,1.283,.532,1.690,.022);
 carrierSheet(assembly,m.rubber,outer.getPoints(12).map(p=>[p.x,p.y]),[inner],(z,y,t)=>place(z,y,.013+t),.012,'carrier nose service compression joint');
 const cover=m.paint.clone();cover.color.multiplyScalar(1.018);
 carrierSheet(assembly,cover,inner.getPoints(12).map(p=>[p.x,p.y]),[],(z,y,t)=>place(z,y,.025+t),.011,'carrier nose formed service plate');
 cover.dispose();
 for(const z of [-.499,0,.499])for(const y of [1.315,1.658]){
  const screw=cylinder(assembly,m.steel,.009,.009,place(z,y,.044),'y',.009,6);screw.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),normal);screw.name='carrier nose captive fastener';
 }
 for(const z of [-.31,.31]){
  for(const dz of [-.042,.042])rod(assembly,m.darkSteel,place(z+dz,1.49,.037),place(z+dz,1.49,.061),.008).name='carrier nose pull pedestal';
  rod(assembly,m.paint,place(z-.042,1.49,.061),place(z+.042,1.49,.061),.009).name='carrier nose service pull';
 }
 assembly.traverse(o=>{if(o.isMesh)o.userData.cutawayShell=true;});
}
function carrierRoofHatch(g,m,roof){
 const assembly=new THREE.Group();assembly.name='hull shell roof hatch assembly';g.add(assembly);
 cylinder(assembly,m.paint,.32,.04,[.4,roof+.03,.5],'y',.32,64).name='roof hatch';
 const joint=new THREE.Mesh(new THREE.TorusGeometry(.310,.006,8,64),m.rubber);joint.rotation.x=Math.PI/2;joint.position.set(.4,roof+.012,.5);joint.name='carrier roof hatch compression seal';assembly.add(joint);
 for(const [x,y,w]of [[.061,roof+.025,.15],[.162,roof+.057,.16]])box(assembly,m.paint,[w,.018,.16],[x,y,.5],'carrier roof hatch hinge leaf');
 cylinder(assembly,m.steel,.016,.20,[.106,roof+.065,.5],'z',.016,24).name='carrier roof hatch hinge barrel';
 box(assembly,m.darkSteel,[.12,.018,.075],[.709,roof+.055,.5],'carrier roof hatch latch base');
 rod(assembly,m.steel,[.658,roof+.068,.5],[.763,roof+.068,.5],.009).name='carrier roof hatch latch lever';
 assembly.traverse(o=>{if(o.isMesh)o.userData.cutawayShell=true;});
}
function carrierGuardGeometry(){
 // Closed rolled-edge cross-section swept through 48 angular stations. The
 // crown is 7 mm thick; its lips curl down outside the tyre clearance envelope.
 const profile=[[.653,0],[.647,.012],[.654,.028],[.692,.045],[.697,.055],[.697,.405],[.692,.415],[.654,.432],[.647,.448],[.653,.460],[.660,.453],[.661,.435],[.699,.422],[.704,.405],[.704,.055],[.699,.038],[.661,.025],[.660,.007]],positions=[],indices=[],n=profile.length;
 for(let i=0;i<=48;i++){const angle=i*Math.PI/48;for(const [radius,z]of profile)positions.push(Math.cos(angle)*radius,Math.sin(angle)*radius,z);}
 for(let i=0;i<48;i++)for(let j=0;j<n;j++){const a=i*n+j,b=i*n+(j+1)%n,c=(i+1)*n+j,d=(i+1)*n+(j+1)%n;indices.push(a,b,c,b,d,c);}
 const cap=THREE.ShapeUtils.triangulateShape(profile.map(([r,z])=>new THREE.Vector2(r,z)),[]);
 for(const triangle of cap){indices.push(...triangle.slice().reverse());indices.push(...triangle.map(i=>48*n+i));}
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}

export function missionBase(id,m){
 if(id==='RECOVERY'){const g=createVehicle(m);g.traverse(o=>{if(o.isMesh&&o.geometry.type==='BufferGeometry'&&o.material.name!=='optical glass')o.name='hull shell';});recoveryConstruction(g,m);const old=g.getObjectByName('mounted WR-12'),winch=detailPart(createWinch(m),m,'ACC',5);winch.name='mounted WR-12';winch.position.copy(old.position);winch.quaternion.copy(old.quaternion);old.removeFromParent();old.traverse(o=>o.geometry?.dispose());g.add(winch);detailVehicle(g,m,6.25,2.3);return soften(g);}
 const spec={COMBAT:[6.8,2.65,4],RECCE:[5.5,2.3,2],TROOP:[6.9,2.6,3],COMMAND:[6.7,2.6,3],MINE:[6.8,2.65,4]}[id], [length,width,axles]=spec;
 const g=new THREE.Group();g.name=id;g.userData={units:'metres',concept:true,axles,roof:id==='COMMAND'?2.75:2.37,length,width};
 const front=length/2,rear=-front,half=width/2;
 box(g,m.darkSteel,[length-.45,.2,width*.58],[0,.82,0],'chassis');
 box(g,m.edge,[length-.25,.48,width*.8],[0,1.16,0],'lower hull');
 for(const s of [-1,1]){
  const sideZ=y=>s*half*(.75+(y-1.2)*.1/1.16),bounds=[front-1.86,1.87,front-1.02,2.16];
  const sideOpenings=[roundedOpening(...bounds)];
  if(id==='TROOP')for(let i=0;i<4;i++)sideOpenings.push(roundedOpening(rear+.48+i*.94,1.97,rear+1.05+i*.94,2.20,.035));
  formedCabPanel(g,m.paint,[[rear,1.2],[front,1.2],[front-.75,2.36],[rear+.17,2.36]],sideOpenings,(x,y,t)=>[x,y,sideZ(y)-s*t]);
  if(id==='TROOP')for(let i=0;i<4;i++)carrierWindow(g,m,[rear+.48+i*.94,1.97,rear+1.05+i*.94,2.20],(x,y,t)=>[x,y,sideZ(y)+s*t]);
  if(id==='COMMAND')formedCabPanel(g,m.paint,[[rear+.17,2.36],[1.14,2.36],[.95,2.74],[rear+.17,2.74]],[],(x,y,t)=>[x,y,s*(half*.85-t)]).userData.component='command raised rear side';
  carrierSheet(g,m.paint,[[front-2.01,1.48],[front-.97,1.48],[front-.86,2.28],[front-1.02,2.31],[front-2.01,2.31]],[roundedOpening(...bounds)],(x,y,t)=>[x,y,sideZ(y)+s*(.012+t)],.015,'hull shell').userData.component='carrier formed cab door';
  carrierWindow(g,m,bounds,(x,y,t)=>[x,y,sideZ(y)+s*t]);
 }
 if(id==='COMBAT'){
  const ring=new THREE.Path();ring.absarc(-.35,0,.405,0,Math.PI*2,true);
  formedCabPanel(g,m.paint,[[rear+.17,-half*.85],[front-.75,-half*.85],[front-.75,half*.85],[rear+.17,half*.85]],[ring],(x,z,t)=>[x,2.36-t,z]);
 }else if(id==='RECCE'){
  const mast=new THREE.Path();mast.absarc(-1,-.48,.092,0,Math.PI*2,true);
  formedCabPanel(g,m.paint,[[rear+.17,-half*.85],[front-.75,-half*.85],[front-.75,half*.85],[rear+.17,half*.85]],[mast],(x,z,t)=>[x,2.36-t,z]);
 }else if(id==='COMMAND'){
  face(g,m.paint,[[1.14,2.36,-half*.85],[front-.75,2.36,-half*.85],[front-.75,2.36,half*.85],[1.14,2.36,half*.85]]);
  formedCabPanel(g,m.paint,[[rear+.17,-half*.85],[.95,-half*.85],[.95,half*.85],[rear+.17,half*.85]],[],(x,z,t)=>[x,2.74-t,z]).userData.component='command raised rear roof';
  formedCabPanel(g,m.paint,[[.95,-half*.85],[1.14,-half*.85],[1.14,half*.85],[.95,half*.85]],[],(x,z,t)=>[x,2.74-(x-.95)*.38/.19-t,z]).userData.component='command roof transition';
 }else face(g,m.paint,[[rear+.17,2.36,-half*.85],[front-.75,2.36,-half*.85],[front-.75,2.36,half*.85],[rear+.17,2.36,half*.85]]);
 const frontX=y=>front-(y-1.2)*.75/1.16;
 formedCabPanel(g,m.paint,[[-half*.75,1.2],[half*.75,1.2],[half*.85,2.36],[-half*.85,2.36]],[roundedOpening(-half*.67,1.80,-.09,2.13),roundedOpening(.09,1.80,half*.67,2.13)],(z,y,t)=>[frontX(y)-t,y,z]);
 for(const range of [[-half*.67,-.09],[.09,half*.67]]){
  carrierWindow(g,m,[range[0],1.80,range[1],2.13],(z,y,t)=>[frontX(y)+t,y,z]);
  carrierWiper(g,m,frontX,range);
 }
 if(id==='TROOP')formedCabPanel(g,m.edge,[[-half*.75,1.2],[half*.75,1.2],[half*.85,2.36],[-half*.85,2.36]],[roundedOpening(-.74,1.34,.74,2.23,.045)],(z,y,t)=>[rear+(y-1.2)*.17/1.16+t,y,z]);
 else if(id==='COMMAND')formedCabPanel(g,m.edge,[[-half*.75,1.2],[half*.75,1.2],[half*.85,2.36],[half*.85,2.74],[-half*.85,2.74],[-half*.85,2.36]],[roundedOpening(-.47,1.47,.47,2.50,.045)],(z,y,t)=>[rear+(Math.min(y,2.36)-1.2)*.17/1.16+t,y,z]);
 else face(g,m.edge,[[rear,1.2,-half*.75],[rear+.17,2.36,-half*.85],[rear+.17,2.36,half*.85],[rear,1.2,half*.75]]);
 const wheelXs=axles===2?[-1.67,1.67]:axles===3?[-2.25,-.75,1.9]:[-2.55,-1.05,1.0,2.4];
 for(const x of wheelXs){cylinder(g,m.darkSteel,.06,width*.81,[x,.67,0],'z');cylinder(g,m.edge,.13,.31,[x,.67,0],'z');for(const s of [-1,1]){const wheel=createWheel(m);wheel.position.set(x,.62,s*half*.88);g.add(wheel);rod(g,m.steel,[x-.15,.75,s*half*.62],[x+.1,1.2,s*half*.68],.045);box(g,m.paint,[1.22,.075,.48],[x,1.30,s*half*.91],'wheel guard');}}
 for(const s of [-1,1]){const z=s*half*.855,sideZ=y=>s*half*(.75+(y-1.2)*.1/1.16)+s*.01;
  for(const y of [1.65,2.24]){box(g,m.darkSteel,[.055,.09,.041],[front-1.97,y,sideZ(y)+s*.024],'carrier door seated hinge leaf');cylinder(g,m.steel,.010,.065,[front-1.97,y,sideZ(y)+s*.043],'y',.010,16).name='carrier door hinge pin';}
  const handleZ=sideZ(1.76)+s*.054;
  for(const x of [front-1.56,front-1.34])rod(g,m.edge,[x,1.76,sideZ(1.76)+s*.017],[x,1.76,handleZ],.011).name='carrier door pull mounting post';
  rod(g,m.steel,[front-1.56,1.76,handleZ],[front-1.34,1.76,handleZ],.012).name='carrier exterior door pull';
  box(g,m.edge,[.68,.05,.32],[front-1.61,1.36,s*(half*.87+.14)],'entry step');
  for(const x of [front-1.83,front-1.39]){const inner=Math.abs(sideZ(1.36))-.010,outer=half*.87+.14;box(g,m.edge,[.05,.10,outer-inner+.05],[x,1.33,s*(inner+outer)/2],'carrier entry step hull bracket');}
  carrierMirror(g,m,front,half,s);
  if(id!=='TROOP')for(let i=0;i<3;i++)carrierAccessCover(g,m,half,s,rear+.64+i*.81);
  const lampY=1.385,lampX=frontX(lampY),lampZ=s*half*.65;
  box(g,m.edge,[.16,.21,.205],[lampX+.035,lampY,lampZ],'carrier front lamp housing');
  const lampOpening=new THREE.Path(),indicatorOpening=new THREE.Path();
  lampOpening.absarc(lampZ,1.355,.059,0,Math.PI*2,true);indicatorOpening.absarc(lampZ,1.445,.023,0,Math.PI*2,true);
  const gasketOutline=roundedOpening(lampZ-.087,lampY-.095,lampZ+.087,lampY+.095,.008).getPoints(12).map(p=>[p.x,p.y]);
  carrierSheet(g,m.rubber,gasketOutline,[lampOpening,indicatorOpening],(z,y,t)=>[lampX+.111+t,y,z],.020,'carrier lamp seated gasket');
  carrierHeadlamp(g,m,lampX,1.355,lampZ);
  cylinder(g,m.amber,.022,.023,[lampX+.137,1.445,lampZ],'x',.022,24).name='carrier indicator lens';
  box(g,m.red,[.03,.07,.13],[rear-.02,1.32,s*half*.65]);
 }
 box(g,m.darkSteel,[.15,.17,width*.85],[front,1.12,0],'front bumper');
 for(const s of [-1,1]){
  box(g,m.darkSteel,[.12,.09,.07],[front+.100,1.14,s*.73],'carrier tow eye bracket '+s);
  const eye=new THREE.Mesh(new THREE.TorusGeometry(.073,.018,10,32),m.steel);eye.position.set(front+.18,1.14,s*.73);eye.name='carrier front tow eye';eye.castShadow=eye.receiveShadow=true;g.add(eye);
  rod(g,m.steel,[rear+.25,1.44,s*.5],[rear+.25,2.05,s*.5],.016);
 }
 carrierRoofHatch(g,m,id==='COMMAND'?2.74:2.36);
 carrierRoofService(g,m,front);carrierNoseService(g,m,front);carrierHullJoints(g,m,front,rear,half,id);
 detailVehicle(g,m,length,width);return soften(g);
}
function recoveryConstruction(g,m){
 // Cab-over recovery architecture: less wedge-like front and deeper upright glazing.
 // Preserve the canonical eight wheels; generated artwork is a shape reference.
 const polygons=g.children.filter(o=>o.isMesh&&o.geometry.type==='BufferGeometry'),paint=polygons.filter(o=>o.material.name!=='optical glass'),glass=polygons.filter(o=>o.material.name==='optical glass');
 function reshape(mesh,points){if(!mesh)return;const vertices=[];for(let i=1;i<points.length-1;i++)vertices.push(...points[0],...points[i],...points[i+1]);mesh.geometry.dispose();mesh.geometry=new THREE.BufferGeometry();mesh.geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));mesh.geometry.computeVertexNormals();}
 const frontX=y=>2.94-(y-1.74)*(.47/1.01)+.012;
 recoveryFrame(g,m);
 for(const old of [...g.children]){
  const obsoleteDoorLine=old.geometry?.type==='CylinderGeometry'&&old.geometry.parameters.radiusTop===.01&&Math.abs(Math.abs(old.position.z)-1.166)<.001;
  if(old.name==='door handle'||obsoleteDoorLine){old.removeFromParent();old.geometry?.dispose();}
 }
 for(const guard of g.children.filter(o=>o.name==='wheel guard')){const shape=new THREE.Shape();shape.moveTo(-.74,-.04);shape.lineTo(-.74,.19);shape.quadraticCurveTo(-.72,.25,-.68,.31);shape.lineTo(-.47,.68);shape.quadraticCurveTo(-.43,.74,-.36,.74);shape.lineTo(.36,.74);shape.quadraticCurveTo(.43,.74,.47,.68);shape.lineTo(.68,.31);shape.quadraticCurveTo(.72,.25,.74,.19);shape.lineTo(.74,-.04);shape.lineTo(.66,-.04);shape.lineTo(.66,.18);shape.lineTo(.39,.66);shape.lineTo(-.39,.66);shape.lineTo(-.66,.18);shape.lineTo(-.66,-.04);shape.closePath();guard.geometry.dispose();guard.geometry=new THREE.ExtrudeGeometry(shape,{depth:.50,curveSegments:5,bevelEnabled:true,bevelSize:.016,bevelThickness:.016,bevelSegments:3,steps:1});guard.name='recovery formed wheel guard';guard.position.y=.605;guard.position.z-=.25;}
 // Real openings replace dark glazing decals over opaque sheets. The short
 // bevels create formed highlights at cab corners and around recessed glass.
 for(const mesh of paint){mesh.removeFromParent();mesh.geometry.dispose();mesh.material.dispose();}
 for(const s of [-1,1]){
  formedCabPanel(g,m.paint,[[.52,1.74],[2.94,1.74],[2.47,2.75],[.52,2.75]],[roundedOpening(1.22,2.15,2.28,2.60)],(x,y,d)=>[x,y,s*(1.15-d)]);
  formedCabPanel(g,m.paint,[[.52,1.40],[2.83,1.40],[2.98,1.65],[2.94,1.74],[.52,1.74]],[],(x,y,d)=>[x,y,s*(1.15-d)]);
  // A separate pressed door skin gives the lower sill a deliberate contour.
  formedCabPanel(g,m.paint,[[1.08,1.78],[2.32,1.78],[2.55,2.10],[2.34,2.64],[1.08,2.64]],[roundedOpening(1.24,2.17,2.26,2.58)],(x,y,d)=>[x,y,s*(1.174-d*.35)]);
  // Rear cab quarter is a formed structural panel, not more glazing. Its
  // recessed service cover gives the cab a visible rear pillar and door joint.
  box(g,m.edge,[.34,.58,.017],[.80,2.11,s*1.171],'rear cab access gasket');
  box(g,m.paint,[.30,.54,.025],[.80,2.11,s*1.183],'rear cab service cover');
  for(const y of [1.87,2.35])box(g,m.darkSteel,[.040,.07,.021],[.65,y,s*1.202],'cab service cover hinge');
  box(g,m.darkSteel,[.035,.09,.023],[.92,2.10,s*1.203],'cab service cover latch');
 }
 const frontOutline=[[-1.15,1.74],[1.15,1.74],[1.15,2.75],[-1.15,2.75]];
 formedCabPanel(g,m.paint,frontOutline,[roundedOpening(-1.02,2.04,-.07,2.62),roundedOpening(.07,2.04,1.02,2.62)],(z,y,d)=>[frontX(y)-d,y,z]);
 const roof=new THREE.Mesh(new RoundedBoxGeometry(1.95,.07,2.30,3,.028),m.paint);roof.position.set(1.495,2.745,0);roof.name='hull shell';roof.castShadow=true;roof.receiveShadow=true;g.add(roof);
 formedCabPanel(g,m.paint,[[-1.15,1.49],[1.15,1.49],[1.15,1.74],[-1.15,1.74]],[],(z,y,d)=>[2.98-(y-1.49)*.16-d,y,z]);
 // Pale laminated glazing reveals the cabin; transmission needs a render target
 // and is intentionally avoided in this embedded, shared scene renderer.
 const glassMaterial=m.glass.clone();glassMaterial.color.set('#a9c8c5');glassMaterial.transparent=true;glassMaterial.opacity=.28;glassMaterial.metalness=0;glassMaterial.roughness=.12;glassMaterial.depthWrite=false;
 for(const pane of glass){pane.material.dispose();pane.material=glassMaterial;pane.castShadow=false;}
 const obsolete=[];g.traverse(o=>{if(o.material===m.rubber&&o.geometry.type==='CylinderGeometry'&&o.geometry.parameters.radiusTop===.012&&o.position.y>2.1)obsolete.push(o);});for(const o of obsolete){o.removeFromParent();o.geometry.dispose();}
 for(const [i,range]of [[0,[-1.02,-.07]],[1,[.07,1.02]]]){const points=[[frontX(2.04),2.04,range[0]],[frontX(2.04),2.04,range[1]],[frontX(2.62),2.62,range[1]],[frontX(2.62),2.62,range[0]]];reshape(glass[i],points);glass[i].name='cab glazing';for(let j=0;j<4;j++)rod(g,m.rubber,points[j],points[(j+1)%4],.018);const center=(range[0]+range[1])/2;rod(g,m.darkSteel,[frontX(2.05)+.018,2.05,center],[frontX(2.30)+.024,2.30,center-.20],.014);rod(g,m.rubber,[frontX(2.21)+.025,2.21,center-.27],[frontX(2.47)+.025,2.47,center-.09],.012);}
 for(const [i,s]of [[2,-1],[3,1]]){const points=[[1.25,2.18,s*1.178],[2.25,2.18,s*1.178],[2.25,2.57,s*1.178],[1.25,2.57,s*1.178]];reshape(glass[i],points);glass[i].name='cab glazing';for(let j=0;j<4;j++)rod(g,m.rubber,points[j],points[(j+1)%4],.017);box(g,m.edge,[.025,.39,.025],[2.05,2.375,s*1.196],'door quarter window divider');
  // Mirror backing and two-point arm share the existing mirror's mount and scale.
  box(g,m.rubber,[.085,.25,.18],[2.065,2.32,s*1.47],'mirror housing');rod(g,m.darkSteel,[2.11,2.08,s*1.16],[2.10,2.24,s*1.46],.018);
  for(const y of [1.93,2.47])box(g,m.darkSteel,[.065,.13,.035],[1.09,y,s*1.185],'door hinge');
  box(g,m.edge,[.20,.10,.021],[1.30,2.015,s*1.194],'door handle recess');
  rod(g,m.steel,[1.25,2.015,s*1.213],[1.37,2.015,s*1.213],.013).name='door release pull';
  box(g,m.edge,[.22,.26,.13],[2.99,1.79,s*.83],'recessed headlight surround');cylinder(g,m.lamp,.080,.033,[3.112,1.79,s*.83],'x',.08,32);
  cylinder(g,m.amber,.029,.024,[2.25,2.79,s*.90],'y',.029,20);
 }
 const grille=box(g,m.edge,[.025,.28,1.35],[frontX(1.84)+.015,1.84,0],'radiator grille frame');grille.rotation.z=Math.atan(.47/1.01);for(let i=0;i<7;i++){const y=1.73+i*.033;box(g,m.darkSteel,[.025,.025,1.24],[frontX(y)+.034,y,0],'radiator grille slat');}for(const z of [-.52,0,.52]){const rib=box(g,m.edge,[.034,.27,.023],[frontX(1.83)+.055,1.83,z],'grille support');rib.rotation.z=Math.atan(.47/1.01);}
 // Rounded roof edge visually joins the cab planes and carries the marker lamps.
 rod(g,m.edge,[2.47,2.75,-1.15],[2.47,2.75,1.15],.031);for(const z of [-.75,-.38,0,.38,.75])box(g,m.amber,[.12,.04,.07],[2.38,2.80,z],'roof clearance lamp');
 const lockers=g.getObjectByName('recovery stowage');if(lockers){for(const o of lockers.children.filter(o=>o.name==='tool locker')){o.geometry.dispose();o.geometry=new THREE.BoxGeometry(2.6,.64,.43);o.position.y=1.99;}for(const s of [-1,1])for(const x of [-2.41,-1.56,-.71]){box(lockers,m.edge,[.78,.54,.015],[x,1.99,s*1.195],'locker door gasket');box(lockers,m.paint,[.73,.49,.019],[x,1.99,s*1.21],'formed locker door');for(const y of [1.83,2.15])box(lockers,m.darkSteel,[.05,.08,.028],[x-.31,y,s*1.235],'locker hinge');box(lockers,m.darkSteel,[.13,.14,.019],[x+.23,2.04,s*1.237],'recessed latch cup');rod(lockers,m.steel,[x+.19,2.04,s*1.253],[x+.27,2.04,s*1.253],.012).name='locker latch lever';}
  for(const s of [-1,1]){
   box(lockers,m.darkSteel,[2.64,.055,.47],[-1.56,1.68,s*.97],'locker load bearing plinth');
   for(const x of [-2.41,-1.56,-.71]){
    // Pressed door ribs have finite ends inside the door skin; unlike decals
    // they catch light while remaining part of the sheet-metal construction.
    for(const y of [1.84,2.14])box(lockers,m.paint,[.55,.018,.016],[x-.03,y,s*1.225],'pressed locker stiffening rib');
    box(lockers,m.edge,[.045,.59,.025],[x-.40,1.99,s*1.212],'locker frame stile');
   }
  }
  for(const s of [-1,1]){box(lockers,m.darkSteel,[2.58,.024,.41],[-1.56,2.325,s*.97],'locker top tread plate');for(let i=0;i<13;i++){const x=-2.75+i*.19;rod(lockers,m.steel,[x,2.342,s*.97-.14],[x+.075,2.342,s*.97+.14],.006).name='raised walkway tread';}}
 }
 recoveryServices(g,m);
 // Existing roof equipment needs a physical base: the antenna stands behind
 // the roof edge and the beacon sits above the roof skin.
 box(g,m.edge,[.26,.055,.18],[.43,2.755,.73],'rear bulkhead antenna bracket');
 cylinder(g,m.rubber,.040,.075,[.37,2.81,.73],'y',.04,24).name='antenna spring base';
 cylinder(g,m.edge,.088,.080,[.60,2.80,-.72],'y',.088,32).name='beacon mounting pedestal';
 const crane=g.getObjectByName('recovery crane');if(crane)recoveryCrane(crane,m);
}
function recoveryFrame(g,m){
 // A recovery truck carries its crane through a reinforced subframe to two
 // longitudinal chassis rails. Replace the continuous toy-like hull slab with
 // that load path; gaps between members remain visible under the service deck.
 for(const name of ['chassis','lower armored hull','deck']){
  const old=g.getObjectByName(name);if(old){old.removeFromParent();old.geometry.dispose();}
 }
 const frame=new THREE.Group();frame.name='reinforced recovery chassis';g.add(frame);
 for(const s of [-1,1]){
  const z=s*.52;
  box(frame,m.darkSteel,[6.05,.26,.055],[0,.91,z],'chassis rail web');
  for(const y of [.77,1.05])box(frame,m.darkSteel,[6.05,.04,.16],[0,y,z],'chassis rail flange');
  box(frame,m.edge,[3.40,.17,.085],[-1.10,1.135,z],'crane subframe rail');
  for(const x of [-2.60,-1.60,-.85,-.30]){
   box(frame,m.darkSteel,[.14,.51,.12],[x,1.38,s*.76],'deck support post');
   rod(frame,m.edge,[x,1.12,z],[x,1.55,s*1.02],.035).name='deck outrigger brace';
  }
  // Closed lower cab skirts join its formed side sheets, stopping above the
  // tyre clearance rather than filling the entire truck's underbody.
  formedCabPanel(frame,m.paint,[[.53,1.40],[2.83,1.40],[2.83,1.57],[.53,1.57]],[],(x,y,d)=>[x,y,s*(1.11-d)]).name='cab sill skirt';
  for(const x of [-2.17,-.74,.72,2.15]){
   box(frame,m.darkSteel,[.23,.16,.16],[x+.19,1.30,s*.85],'suspension upper mount');
   box(frame,m.edge,[.23,.23,.15],[x+.19,1.45,s*.85],'suspension deck hanger');
   box(frame,m.edge,[.55,.24,.08],[x,1.45,s*1.12],'wheel guard mounting apron');
   box(frame,m.edge,[.46,.042,.10],[x,.86,s*.52],'axle spring saddle');
   for(let i=0;i<3;i++)box(frame,m.darkSteel,[.64-i*.08,.016,.10],[x,.83-i*.018,s*.52],'leaf spring pack');
  }
 }
 for(const x of [-2.85,-2.17,-.85,.72,2.15,2.82])box(frame,m.darkSteel,[.12,.17,1.22],[x,.93,0],'chassis crossmember');
 box(frame,m.paint,[6.12,.08,2.38],[-.005,1.60,0],'formed load deck');
 for(const s of [-1,1])box(frame,m.edge,[6.08,.11,.05],[-.005,1.57,s*1.175],'deck folded edge');
 box(frame,m.darkSteel,[1.14,.16,1.60],[-.85,1.68,0],'crane foundation crossbeam');
 for(const s of [-1,1])formedCabPanel(frame,m.darkSteel,[[-1.28,1.19],[-.44,1.19],[-.62,1.59],[-1.10,1.59]],[],(x,y,d)=>[x,y,s*(.56+d)]).name='crane foundation gusset';
 // Stowed telescopic stabilizers remain inside the road width. Their beam,
 // guide sleeve, jack barrel and carried foot are physically joined.
 box(frame,m.edge,[.32,.22,2.08],[-2.92,1.16,0],'stabilizer crossbeam');
 for(const s of [-1,1]){
  box(frame,m.darkSteel,[.24,.14,.93],[-2.92,1.16,s*.58],'stowed telescopic stabilizer beam');
  box(frame,m.paint,[.32,.36,.24],[-2.92,1.13,s*1.02],'stabilizer jack guide');
  cylinder(frame,m.paint,.080,.33,[-2.92,.92,s*1.02],'y',.08,32).name='stabilizer jack barrel';
  cylinder(frame,m.steel,.033,.12,[-2.92,.72,s*1.02],'y',.033,24).name='stowed jack piston';
  cylinder(frame,m.darkSteel,.060,.17,[-2.92,.68,s*1.02],'z',.06,24).name='jack foot pivot';
  box(frame,m.darkSteel,[.27,.065,.29],[-2.92,.64,s*1.02],'carried stabilizer foot');
  tube(frame,m.rubber,[[-2.55,1.25,s*.60],[-2.75,1.30,s*.70],[-2.94,1.30,s*.89],[-2.96,1.06,s*.93]],.018,24).name='stabilizer hydraulic supply';
  // The tail lamp sits on a reinforced carrier; mudflaps hang aft of the last
  // tyre and do not occupy its swept volume.
  box(frame,m.edge,[.10,.21,.41],[-3.035,1.40,s*.92],'rear lamp carrier');
  box(frame,m.red,[.025,.09,.20],[-3.10,1.43,s*.97],'rear tail lamp');
  box(frame,m.amber,[.026,.07,.09],[-3.10,1.43,s*.79],'rear turn lamp');
  box(frame,m.rubber,[.05,.37,.26],[-2.88,.90,s*1.28],'rear flexible mudflap');
 }
 box(frame,m.darkSteel,[.18,.25,1.25],[-3.015,1.10,0],'rear towing crossmember');
 box(frame,m.edge,[.21,.23,.28],[-3.075,1.10,0],'rear tow coupling body');
 cylinder(frame,m.steel,.034,.30,[-3.15,1.10,0],'y',.034,24).name='tow coupling pin';
}
function recoveryServices(g,m){
 // Cab services mount to the deck/rear bulkhead, leaving the central crane
 // sweep clear. These are illustrative assemblies, not manufacturer geometry.
 const services=new THREE.Group();services.name='cab services';g.add(services);
 for(const s of [-1,1])box(services,m.darkSteel,[.37,.065,.38],[.24,1.80,s*.79],'service tower deck bracket');
 cylinder(services,m.edge,.135,.65,[.24,2.14,.79],'y',.135,40).name='air cleaner housing';
 cylinder(services,m.darkSteel,.153,.036,[.24,2.47,.79],'y',.153,40).name='air cleaner lid';
 cylinder(services,m.paint,.10,.25,[.24,2.61,.79],'y',.10,32).name='intake riser';
 cylinder(services,m.edge,.17,.05,[.24,2.75,.79],'y',.17,40).name='intake rain cap';
 for(const y of [1.94,2.35]){const band=new THREE.Mesh(new THREE.TorusGeometry(.137,.012,8,36),m.steel);band.rotation.x=Math.PI/2;band.position.set(.24,y,.79);band.name='air cleaner retaining band';services.add(band);box(services,m.edge,[.20,.065,.065],[.39,y,.79],'bulkhead service bracket');}
 tube(services,m.rubber,[[.24,1.84,.79],[.24,1.70,.79],[.34,1.58,.64],[.60,1.50,.64]],.065,24).name='connected air inlet duct';
 cylinder(services,m.darkSteel,.093,.75,[.24,2.22,-.79],'y',.093,40).name='exhaust silencer';
 // A slotted shield surrounds rather than fills the exhaust: longitudinal
 // ribs and band hoops leave the actual dark silencer visible through gaps.
 for(let i=0;i<12;i++){const a=i*Math.PI/6;rod(services,m.steel,[.24+Math.cos(a)*.12,1.87,-.79+Math.sin(a)*.12],[.24+Math.cos(a)*.12,2.57,-.79+Math.sin(a)*.12],.012).name='exhaust heat shield rib';}
 for(const y of [1.88,2.08,2.37,2.57]){const band=new THREE.Mesh(new THREE.TorusGeometry(.12,.013,8,36),m.darkSteel);band.rotation.x=Math.PI/2;band.position.set(.24,y,-.79);band.name='heat shield retaining band';services.add(band);}
 tube(services,m.darkSteel,[[.24,1.85,-.79],[.24,1.70,-.79],[.35,1.57,-.72],[.59,1.50,-.72]],.05,24).name='exhaust inlet elbow';
 tube(services,m.darkSteel,[[.24,2.59,-.79],[.24,2.75,-.79],[.10,2.83,-.79]],.053,24).name='exhaust outlet elbow';
 for(const y of [1.97,2.42])box(services,m.edge,[.20,.07,.07],[.39,y,-.79],'exhaust bulkhead bracket');
 // A shallow under-cab utility tank clears both adjacent wheel envelopes.
 box(services,m.paint,[.54,.28,.64],[-.04,1.16,-.48],'underbody utility tank');
 for(const x of [-.20,.13])box(services,m.darkSteel,[.044,.31,.68],[x,1.16,-.48],'utility tank strap');
 tube(services,m.darkSteel,[[.20,1.29,-.70],[.35,1.29,-.70],[.45,1.43,-.79]],.014,20).name='tank supply pipe';
}
function recoveryCrane(crane,m){
 for(const old of [...crane.children]){old.removeFromParent();old.traverse(o=>o.geometry?.dispose());}
 // Eight-faced folded sections have real wall thickness and open mouths; the
 // smaller section slides inside the larger, rather than meeting a solid cap.
 const beam=(a,b,start,end,wall,material,name)=>{
  const direction=new THREE.Vector3(...b).sub(new THREE.Vector3(...a)),length=direction.length(),vertices=[];
  const ring=([w,h],inset,z)=>{const x=w/2-inset,y=h/2-inset,c=Math.min(x,y)*.28;return [[-x+c,-y,z],[x-c,-y,z],[x,-y+c,z],[x,y-c,z],[x-c,y,z],[-x+c,y,z],[-x,y-c,z],[-x,-y+c,z]];};
  const outer=[ring(start,0,0),ring(end,0,length)],inner=[ring(start,wall,0),ring(end,wall,length)];
  const quad=(a,b,c,d)=>vertices.push(...a,...b,...c,...a,...c,...d);
  for(let i=0;i<8;i++){const j=(i+1)%8;quad(outer[0][i],outer[0][j],outer[1][j],outer[1][i]);quad(inner[0][j],inner[0][i],inner[1][i],inner[1][j]);quad(outer[0][j],outer[0][i],inner[0][i],inner[0][j]);quad(outer[1][i],outer[1][j],inner[1][j],inner[1][i]);}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.computeVertexNormals();
  const mesh=new THREE.Mesh(geometry,material);mesh.position.set(...a);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),direction.normalize());mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;crane.add(mesh);return mesh;
 };
 box(crane,m.edge,[.95,.12,1.20],[-.85,1.78,0],'crane mounting crossmember');
 cylinder(crane,m.darkSteel,.44,.14,[-.85,1.88,0],'y',.44,48).name='slewing ring';cylinder(crane,m.paint,.33,.32,[-.85,2.10,0],'y',.33,40).name='crane pedestal';
 for(const s of [-1,1]){
  formedCabPanel(crane,m.paint,[[-1.17,2.10],[-1.13,2.51],[-1.04,2.62],[-.66,2.62],[-.57,2.51],[-.53,2.10]],[],(x,y,d)=>[x,y,s*(.27+d)]).name='crane pivot cheek';
  cylinder(crane,m.steel,.095,.075,[-.85,2.46,s*.32],'z',.095,40).name='boom pivot bearing';rod(crane,m.edge,[-.85,1.80,s*.55],[-.85,2.14,s*.29],.045).name='pedestal brace';
 }
 cylinder(crane,m.darkSteel,.075,.73,[-.85,2.46,0],'z',.075,40).name='boom hinge pin';
 beam([-.65,2.38,0],[-2.47,3.12,0],[.42,.46],[.32,.34],.025,m.paint,'formed main boom');
 beam([-2.34,3.067,0],[-3.05,3.356,0],[.245,.26],[.205,.22],.017,m.darkSteel,'telescoping extension');
 // Wear pads and the mouth collar bear against the inner sliding section.
 beam([-2.37,3.079,0],[-2.49,3.128,0],[.36,.38],[.355,.375],.026,m.edge,'boom mouth reinforcement');
 for(const s of [-1,1]){const pad=box(crane,m.rubber,[.14,.12,.035],[-2.435,3.105,s*.141],'telescopic wear pad');pad.rotation.z=-.386;}
 // Root trunnion flanges bridge the boom walls and the supporting cheeks.
 for(const s of [-1,1])cylinder(crane,m.paint,.16,.055,[-.85,2.46,s*.225],'z',.16,40).name='boom root trunnion';
 formedCabPanel(crane,m.paint,[[-2.02,2.77],[-2.25,2.85],[-2.20,2.99],[-1.96,2.89]],[],(x,y,d)=>[x,y,.25+d]).name='boom cylinder lug';
 const base=[-.73,2.08,.32],tip=[-2.13,2.91,.32],axis=new THREE.Vector3(...tip).sub(new THREE.Vector3(...base)),point=f=>new THREE.Vector3(...base).addScaledVector(axis,f).toArray(),gland=point(.68);
 rod(crane,m.paint,base,gland,.085).name='lift cylinder barrel';rod(crane,m.steel,gland,tip,.032).name='lift piston rod';
 rod(crane,m.darkSteel,point(.65),point(.71),.103).name='cylinder gland';
 rod(crane,m.edge,point(.04),point(.12),.098).name='cylinder end cap';
 for(const [x,y]of [[base[0],base[1]],[tip[0],tip[1]]]){cylinder(crane,m.steel,.067,.13,[x,y,.32],'z',.067,32).name='cylinder clevis pin';box(crane,m.paint,[.17,.17,.08],[x,y,.26],'lift cylinder clevis');}
 cylinder(crane,m.edge,.135,.34,[-.36,2.37,0],'z',.135,48).name='hoist drum';
 for(let i=0;i<13;i++){const winding=new THREE.Mesh(new THREE.TorusGeometry(.137,.0075,6,36),m.darkSteel);winding.position.set(-.36,2.37,-.15+i*.025);winding.name='hoist cable winding';crane.add(winding);}
 for(const s of [-1,1]){cylinder(crane,m.steel,.18,.03,[-.36,2.37,s*.185],'z',.18,40).name='hoist drum flange';formedCabPanel(crane,m.paint,[[-.62,2.10],[-.08,2.10],[-.08,2.36],[-.20,2.54],[-.47,2.54],[-.62,2.36]],[],(x,y,d)=>[x,y,s*(.225+d)]).name='hoist bearing cradle';}
 box(crane,m.edge,[.55,.065,.60],[-.35,2.105,0],'hoist cradle base');rod(crane,m.edge,[-.68,2.10,0],[-.35,2.10,0],.055).name='hoist support tie';
 cylinder(crane,m.paint,.17,.13,[-.36,2.37,-.335],'z',.14,40).name='planetary hoist gearbox';cylinder(crane,m.darkSteel,.095,.21,[-.36,2.37,-.505],'z',.095,32).name='hoist hydraulic motor';
 tube(crane,m.rubber,[[-.36,2.35,-.60],[-.18,2.20,-.62],[-.44,2.06,-.46],[-.73,2.0,-.36]],.018,24).name='hoist motor supply';
 for(const s of [-1,1])formedCabPanel(crane,m.paint,[[-3.13,3.19],[-3.17,3.40],[-2.94,3.48],[-2.85,3.35]],[],(x,y,d)=>[x,y,s*(.12+d)]).name='boom head cheek';
 cylinder(crane,m.darkSteel,.095,.18,[-3.04,3.35,0],'z',.095,40).name='head sheave';cylinder(crane,m.steel,.035,.35,[-3.04,3.35,0],'z',.035,32).name='head sheave axle';
 for(const s of [-1,1]){const ring=new THREE.Mesh(new THREE.TorusGeometry(.086,.013,8,36),m.steel);ring.position.set(-3.04,3.35,s*.075);ring.name='sheave flange';crane.add(ring);}
 // Taut rope is straight between supports, with only the sheave wrap curved.
 rod(crane,m.darkSteel,[-.36,2.507,0],[-2.995,3.433,0],.011).name='hoist rope';
 const wrap=[];for(let i=0;i<=12;i++){const angle=Math.PI*.34+i/12*Math.PI*.66;wrap.push([-3.04+Math.cos(angle)*.095,3.35+Math.sin(angle)*.095,0]);}tube(crane,m.darkSteel,wrap,.011,24).name='hoist rope sheave wrap';
 rod(crane,m.darkSteel,[-3.135,3.35,0],[-3.135,2.79,0],.011).name='hoist rope fall';
 cylinder(crane,m.darkSteel,.047,.16,[-3.12,2.77,0]).name='hook swivel';
 tube(crane,m.amber,[[-3.12,2.70,0],[-3.19,2.65,0],[-3.23,2.54,0],[-3.18,2.45,0],[-3.07,2.46,0],[-3.01,2.55,0],[-3.04,2.61,0]],.033,32).name='forged lifting hook';rod(crane,m.darkSteel,[-3.04,2.61,0],[-3.14,2.67,0],.008).name='hook safety latch';
 for(let i=0;i<2;i++){
  const p=point(.58+i*.05),z=.44+i*.045;
  cylinder(crane,m.steel,.025,.065,[p[0],p[1],.409],'z',.025,24).name='lift cylinder hose union';
  tube(crane,m.rubber,[[-.80,2.0,z],[-.59,2.18,z+.03],[-.71,2.59,z+.03],[-1.16,2.67,z],[p[0],p[1],.444]],.018,32).name='lift cylinder hydraulic line';
 }
}
function recoveryCockpit(g,m){
 const cockpit=new THREE.Group();cockpit.name='driver controls';g.add(cockpit);
 const trim=new THREE.MeshStandardMaterial({color:'#79816f',roughness:.86,metalness:0});trim.name='cab interior trim';
 const upholstery=m.upholstery.clone();upholstery.name='woven seat upholstery';
 const round=(material,size,pos,name,r=.035)=>{const o=new THREE.Mesh(new RoundedBoxGeometry(...size,3,r),material);o.position.set(...pos);o.name=name;o.castShadow=true;o.receiveShadow=true;cockpit.add(o);return o;};
 const floor=1.79;
 round(m.rubber,[1.86,.045,1.99],[1.49,floor,0],'cab floor mat',.018);
 // The instrument cowl is under the windshield, the seats behind it; the
 // dashboard fascia and controls face rearward toward the two occupants.
 const cowlShape=new THREE.Shape();[[2.11,1.85],[2.71,1.85],[2.75,2.05],[2.58,2.14],[2.18,2.14]].forEach(([x,y],i)=>i?cowlShape.lineTo(x,y):cowlShape.moveTo(x,y));cowlShape.closePath();
 const cowl=new THREE.Mesh(new THREE.ExtrudeGeometry(cowlShape,{depth:1.98,steps:1,bevelEnabled:true,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),trim);cowl.position.z=-.99;cowl.name='dashboard cowl';cowl.castShadow=true;cowl.receiveShadow=true;cockpit.add(cowl);
 round(m.edge,[.08,.23,1.86],[2.13,2.025,0],'dashboard instrument fascia',.015);
 round(m.rubber,[.26,.07,.63],[2.06,2.155,-.50],'instrument sun hood',.025);
 round(trim,[.05,.075,.60],[2.075,2.015,.55],'glove compartment',.012);
 rod(cockpit,m.darkSteel,[2.043,1.99,.44],[2.043,1.99,.65],.011).name='glove compartment pull';
 for(const z of [-.85,.14,.81]){round(m.darkSteel,[.014,.10,.15],[2.075,2.075,z],'dashboard air vent',.005);for(let i=0;i<4;i++)box(cockpit,m.edge,[.015,.010,.13],[2.064,2.04+i*.023,z],'vent louvre');}
 for(const s of [-1,1]){
  const z=s*.58;
  for(const dz of [-.16,.16])box(cockpit,m.darkSteel,[.59,.046,.044],[1.27,floor+.042,z+dz],'seat adjustment rail');
  round(m.darkSteel,[.39,.105,.34],[1.27,1.91,z],'seat suspension pan',.016);
  round(upholstery,[.54,.15,.43],[1.33,2.02,z],'driver seat',.055);
  const back=round(upholstery,[.16,.52,.42],[1.065,2.245,z],'seat back',.050);back.rotation.z=-.08;
  for(const dz of [-.19,.19]){const bolster=round(upholstery,[.12,.48,.072],[1.14,2.235,z+dz],'seat back bolster',.025);bolster.rotation.z=-.08;round(upholstery,[.43,.10,.066],[1.36,2.09,z+dz],'seat cushion bolster',.023);}
  for(const dz of [-.13,.13])rod(cockpit,m.steel,[1.04,2.43,z+dz],[1.04,2.56,z+dz],.013).name='headrest support';
  round(upholstery,[.14,.18,.30],[1.03,2.57,z],'driver head restraint',.035);
  for(const dz of [-.11,0,.11])rod(cockpit,m.edge,[1.18,2.09,z+dz],[1.51,2.09,z+dz],.003).name='upholstery stitch channel';
  // Restraints follow the cushion and back rather than crossing empty space.
  tube(cockpit,m.darkSteel,[[1.15,2.46,z+s*.16],[1.23,2.29,z],[1.33,2.12,z-s*.13],[1.52,2.08,z-s*.17]],.014,24).name='diagonal restraint';
  tube(cockpit,m.darkSteel,[[1.18,2.105,z+s*.19],[1.48,2.105,z+s*.14],[1.52,2.08,z-s*.17]],.012,20).name='lap restraint';
  round(m.red,[.035,.036,.040],[1.52,2.08,z-s*.17],'restraint buckle',.006);
  // Interior door lining and pull join the actual door plane without covering
  // the window; this makes depth visible through the pale side glazing.
  round(trim,[1.51,.30,.038],[1.51,1.98,s*1.108],'door interior liner',.018);
  rod(cockpit,m.darkSteel,[1.38,2.06,s*1.077],[1.74,2.06,s*1.077],.021).name='door interior grab pull';
 }
 const steering=new THREE.Mesh(new THREE.TorusGeometry(.18,.018,10,48),m.rubber);steering.rotation.y=Math.PI/2-.28;steering.position.set(1.86,2.16,-.58);steering.name='steering wheel';cockpit.add(steering);
 const wheelAxis=new THREE.Vector3(1,0,0).applyAxisAngle(new THREE.Vector3(0,1,0),-.28),wheelCenter=new THREE.Vector3(1.86,2.16,-.58);
 for(let i=0;i<3;i++){const a=i*Math.PI*2/3;const end=new THREE.Vector3(0,Math.cos(a)*.155,Math.sin(a)*.155).applyAxisAngle(new THREE.Vector3(0,1,0),-.28).add(wheelCenter);rod(cockpit,m.darkSteel,wheelCenter.toArray(),end.toArray(),.013).name='steering spoke';}
 rod(cockpit,m.darkSteel,wheelCenter.toArray(),[2.08,2.04,-.58],.033).name='steering column';rod(cockpit,m.edge,wheelCenter.clone().addScaledVector(wheelAxis,-.025).toArray(),wheelCenter.clone().addScaledVector(wheelAxis,.025).toArray(),.045).name='steering hub';
 for(const [z,r]of [[-.65,.06],[-.48,.052],[-.32,.033],[-.23,.033]]){cylinder(cockpit,m.steel,r+.006,.009,[2.074,2.04,z],'x',r+.006,32).name='instrument bezel';cylinder(cockpit,m.rubber,r,.012,[2.064,2.04,z],'x',r,32).name='instrument dial';rod(cockpit,m.lamp,[2.055,2.04,z],[2.055,2.04+r*.58,z+r*.30],.003).name='instrument needle';}
 for(const z of [-.71,-.55,-.39]){rod(cockpit,m.darkSteel,[2.24,floor+.025,z],[2.05,floor+.17,z],.014).name='pedal arm';const pedal=box(cockpit,m.rubber,[.10,.025,.085],[2.05,floor+.18,z],'driver pedal');pedal.rotation.z=-.5;}
 round(trim,[.42,.22,.20],[1.76,1.92,0],'centre console',.028);rod(cockpit,m.darkSteel,[1.76,2.04,0],[1.72,2.18,0],.017).name='gear selector';round(m.rubber,[.06,.06,.065],[1.72,2.20,0],'selector grip',.015);
}
function detailVehicle(g,m,length,width){
 if(g.userData.sharedPart==='WR-12')recoveryCockpit(g,m);
 else{
 const cockpit=new THREE.Group();cockpit.name='driver controls';g.add(cockpit);const x=length/2-1.4,y=g.userData.roof?1.53:1.86;
 const trim=m.edge.clone();trim.color.set('#79816f');trim.metalness=0;trim.roughness=.85;trim.name='carrier moulded interior trim';
 const upholstery=m.upholstery.clone();upholstery.name='woven seat upholstery';
 const round=(material,size,pos,name,r=.025)=>{const o=new THREE.Mesh(new RoundedBoxGeometry(...size,3,r),material);o.position.set(...pos);o.name=name;o.castShadow=o.receiveShadow=true;cockpit.add(o);return o;};
 const floor=y-.12,cowlShape=new THREE.Shape();
 [[x+.23,floor+.012],[x+.33,floor+.012],[x+.33,y+.32],[x+.05,y+.32],[x+.02,y+.17],[x+.23,y+.17]].forEach(([a,b],i)=>i?cowlShape.lineTo(a,b):cowlShape.moveTo(a,b));cowlShape.closePath();
 const cowl=new THREE.Mesh(new THREE.ExtrudeGeometry(cowlShape,{depth:1.68,steps:1,bevelEnabled:true,bevelSize:.009,bevelThickness:.007,bevelSegments:2}),trim);cowl.position.z=-.84;cowl.name='carrier supported dashboard cowl';cowl.castShadow=cowl.receiveShadow=true;cockpit.add(cowl);
 round(m.edge,[.035,.16,1.55],[x+.029,y+.24,0],'dashboard',.012);
 round(m.darkSteel,[.20,.055,.48],[x-.02,y+.34,-.43],'carrier instrument sun hood',.018);
 for(const s of [-1,1]){
  round(m.darkSteel,[.41,.105,.33],[x-.45,floor+.075,s*.48],'carrier seat suspension pedestal',.018);
  for(const yy of [floor+.047,floor+.076,floor+.105])round(m.rubber,[.425,.010,.34],[x-.45,yy,s*.48],'carrier seat suspension bellows',.004);
  round(upholstery,[.49,.15,.44],[x-.43,y+.06,s*.48],'driver seat',.048);
  const back=round(upholstery,[.115,.49,.40],[x-.67,y+.31,s*.48],'seat back',.032);back.rotation.z=-.10;
  for(const dz of [-.17,.17]){round(upholstery,[.41,.070,.065],[x-.42,y+.14,s*.48+dz],'carrier cushion side bolster',.023);const side=round(upholstery,[.105,.39,.065],[x-.615,y+.31,s*.48+dz],'carrier back side bolster',.021);side.rotation.z=-.10;}
  for(const dz of [-.09,.09]){tube(cockpit,m.edge,[[x-.13,y+.137,s*.48+dz],[x-.43,y+.137,s*.48+dz],[x-.64,y+.16,s*.48+dz]],.0025,14).name='carrier cushion stitched channel';}
  carrierSheet(cockpit,trim,[[x-.71,y-.015],[x-.09,y-.015],[x-.09,y+.235],[x-.71,y+.235]],[],(px,py,t)=>[px,py,s*(width/2*(.75+(py-1.2)*.1/1.16)-.038-t)],.030,'carrier door interior liner');
  const pullZ=s*(width/2*(.75+(y+.22-1.2)*.1/1.16)-.080);
  rod(cockpit,m.darkSteel,[x-.59,y+.22,pullZ],[x-.29,y+.22,pullZ],.015).name='carrier interior door pull';
 }
 const steering=new THREE.Mesh(new THREE.TorusGeometry(.18,.019,10,48),m.rubber);steering.rotation.y=Math.PI/2;steering.position.set(x-.15,y+.41,-.48);steering.name='steering wheel';cockpit.add(steering);for(let i=0;i<3;i++){const a=i*Math.PI*2/3;rod(cockpit,m.darkSteel,[x-.15,y+.41,-.48],[x-.15,y+.41+Math.cos(a)*.16,-.48+Math.sin(a)*.16],.012).name='steering spoke';}
 for(let i=0;i<4;i++)cylinder(cockpit,m.rubber,.034,.012,[x+.007,y+.21,-.57+i*.09],'x').name='instrument dial';
 // Controls are supported by the floor/seat frame and dashboard, rather than
 // floating cues. The shared cab still represents an original illustrative vehicle.
 box(cockpit,m.edge,[1.50,.05,1.80],[x-.18,floor,0],'cab floor');
 for(const s of [-1,1]){
  for(const z of [s*.48-.16,s*.48+.16])box(cockpit,m.darkSteel,[.58,.045,.04],[x-.47,floor+.04,z],'seat adjustment rail');
  round(upholstery,[.13,.17,.32],[x-.67,y+.60,s*.48],'driver head restraint',.030);
  for(const z of [s*.48-.10,s*.48+.10])rod(cockpit,m.steel,[x-.67,y+.50,z],[x-.67,y+.60,z],.013);
  tube(cockpit,m.darkSteel,[[x-.60,y+.47,s*.65],[x-.55,y+.31,s*.48],[x-.32,y+.147,s*.36],[x-.13,y+.137,s*.34]],.012,24).name='diagonal restraint';
  box(cockpit,m.red,[.025,.035,.045],[x-.13,y+.140,s*.34],'restraint buckle');
  tube(cockpit,m.darkSteel,[[x-.55,y+.147,s*.66],[x-.32,y+.147,s*.60],[x-.13,y+.137,s*.34]],.009,22).name='lap restraint';
 }
 rod(cockpit,m.darkSteel,[x-.15,y+.41,-.48],[x+.07,y+.30,-.48],.026).name='steering column';
 cylinder(cockpit,m.edge,.04,.06,[x-.15,y+.41,-.48],'x',.04,24).name='steering hub';
 for(const z of [-.60,-.43,-.26]){rod(cockpit,m.steel,[x+.20,floor+.025,z],[x+.08,floor+.13,z],.012).name='pedal arm';const pedal=box(cockpit,m.rubber,[.09,.025,.07],[x+.08,floor+.14,z],'driver pedal');pedal.rotation.z=-.45;}
 box(cockpit,m.edge,[.30,.16,.19],[x-.10,floor+.10,.02],'gear selector console');
 rod(cockpit,m.darkSteel,[x-.10,floor+.18,.02],[x-.14,y+.16,.02],.012).name='gear selector';cylinder(cockpit,m.rubber,.03,.045,[x-.14,y+.18,.02]).name='selector grip';
 // Raised needles and bezels read as instruments in the cutaway close-up.
 for(let i=0;i<4;i++){const z=-.57+i*.09;cylinder(cockpit,m.steel,.037,.009,[x+.006,y+.21,z],'x',.037,32).name='instrument bezel';rod(cockpit,m.lamp,[x-.001,y+.21,z],[x-.001,y+.23,z+.009],.0025).name='instrument needle';}
 }
 refineWheels(g,m);
 // Recovery has a dedicated ladder-frame construction and service system.
 // Generic armoured-hull overlays would reintroduce a solid belly slab and
 // floating cooling louvres on the locker doors.
 if(g.userData.sharedPart==='WR-12')return;
 const guards=[];g.traverse(o=>{if(o.name==='wheel guard')guards.push(o);});for(const guard of guards){guard.geometry.dispose();guard.geometry=carrierGuardGeometry();guard.material=m.paint.clone();guard.material.side=THREE.DoubleSide;guard.name='carrier formed wheel guard';guard.position.y=.62;guard.position.z-=.23;}
 // Connected drive shaft, armoured belly plate, exhaust and fuel-tank plumbing.
 rod(g,m.darkSteel,[-length*.34,.80,0],[length*.31,.80,0],.06);box(g,m.edge,[length*.56,.065,width*.48],[0,.90,0],'belly protection');
 cylinder(g,m.darkSteel,.11,.85,[-length*.22,1.18,-width*.28],'x');tube(g,m.darkSteel,[[-length*.22,1.18,-width*.28],[-length*.38,1.18,-width*.28],[-length*.42,1.37,-width*.37]],.034);
 const rear=-length/2;
 for(const s of [-1,1]){
  // Standoff-supported side handrail follows the side armour's actual slope.
  const sideZ=y=>s*width/2*(.75+(y-1.2)*.1/1.16),points=[[rear+.70,1.45],[rear+.70,1.84],[rear+1.26,1.84]];
  const rail=tube(g,m.darkSteel,points.map(([x,y])=>[x,y,sideZ(y)+s*.065]),.018);rail.name='carrier rear boarding handrail';
  for(const [x,y]of [points[0],points[2]])rod(g,m.paint,[x,y,sideZ(y)+s*.015],[x,y,sideZ(y)+s*.065],.025).name='carrier rear handrail hull standoff';
  const last=guards.filter(o=>Math.sign(o.position.z+.23)===s).sort((a,b)=>a.position.x-b.position.x)[0];
  if(last){const z=last.position.z+.23,x=last.position.x-.688;
   box(g,m.paint,[.044,.045,.43],[x,.633,z],'carrier rear mudflap mounting rail');
   box(g,m.rubber,[.012,.55,.416],[x,.340,z],'carrier flexible rear mudflap');
   for(const dz of [-.15,0,.15])cylinder(g,m.steel,.009,.025,[x+.013,.597,z+dz],'x',.009,6).name='carrier mudflap clamp fastener';
  }
 }
 for(let i=0;i<4;i++){rod(g,m.steel,[rear+.1,1.15+i*.18,-.3],[rear+.1,1.15+i*.18,.3],.014);}
}

// Repeated detail is merged only within its physical assembly. No global GPU
// cache can outlive a disposed vehicle or invalidate another live model.
function detailBatch(parent,material,geometry,placements,name){
 const copies=placements.map(({position=[0,0,0],rotation=[0,0,0]})=>geometry.clone().applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(...position),new THREE.Quaternion().setFromEuler(new THREE.Euler(...rotation)),new THREE.Vector3(1,1,1))));
 const merged=mergeGeometries(copies,false);copies.forEach(g=>g.dispose());geometry.dispose();
 if(!merged)throw new Error('Incompatible repeated wheel detail');
 const mesh=new THREE.Mesh(merged,material);mesh.name=name;mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;
}
function annularPlate(inner,outer,depth,segments=24){
 const shape=new THREE.Shape();shape.absarc(0,0,outer,0,Math.PI*2,false);
 const bore=new THREE.Path();bore.absarc(0,0,inner,0,Math.PI*2,true);shape.holes.push(bore);
 return new THREE.ExtrudeGeometry(shape,{depth,steps:1,curveSegments:segments,bevelEnabled:false});
}
function refineWheels(g,m){
 const wheels=[];g.traverse(o=>{if(o.name==='run-flat wheel')wheels.push(o);});for(const w of wheels){if(w.userData.detailed)continue;w.userData.detailed=true;
  const tire=w.children[0];for(const old of [...w.children].slice(1)){old.removeFromParent();old.geometry?.dispose();}
  tire.geometry.dispose();const profile=[[.315,-.165],[.33,-.185],[.40,-.211],[.48,-.213],[.54,-.190],[.574,-.152],[.588,-.096],[.590,-.04],[.590,.04],[.588,.096],[.574,.152],[.54,.190],[.48,.213],[.40,.211],[.33,.185],[.315,.165],[.315,-.165]].map(([r,z])=>new THREE.Vector2(r,z));tire.geometry=new THREE.LatheGeometry(profile,64);tire.rotation.x=Math.PI/2;tire.name='rounded tyre carcass';
  // Directional interlocking lugs overlap the shoulder and share their geometry.
  const lugShape=new THREE.Shape();lugShape.moveTo(-.055,-.071);lugShape.lineTo(.018,-.071);lugShape.lineTo(.059,-.035);lugShape.lineTo(.043,.071);lugShape.lineTo(-.027,.071);lugShape.lineTo(-.063,.025);lugShape.closePath();
  const lugGeometry=new THREE.ExtrudeGeometry(lugShape,{depth:.030,steps:1,bevelEnabled:true,bevelSize:.006,bevelThickness:.006,bevelSegments:1});lugGeometry.rotateX(Math.PI/2);
  const lugs=[];for(let i=0;i<32;i++)for(const s of [-1,1]){const a=i*Math.PI/16+s*.028;lugs.push({position:[Math.sin(a)*.607,Math.cos(a)*.607,s*.091],rotation:[0,s*.24,-a]});}
  detailBatch(w,m.rubber,lugGeometry,lugs,'directional tread lug').userData.physicalLugCount=64;
  for(const s of [-1,1]){
   // A dished rim has a deep centre; the hub stands proud of its recessed web.
   const rimProfile=[[.11,.08],[.15,.095],[.23,.13],[.31,.173],[.325,.19],[.334,.184],[.331,.164],[.307,.15],[.236,.109],[.15,.071],[.11,.068]].reverse().map(([r,z])=>new THREE.Vector2(r,z));
   const rim=new THREE.Mesh(new THREE.LatheGeometry(rimProfile,48),m.paint);rim.rotation.x=s*Math.PI/2;rim.name='dished wheel rim';w.add(rim);
   const lip=new THREE.Mesh(new THREE.TorusGeometry(.322,.012,8,48),m.darkSteel);lip.position.z=s*.184;lip.name='rim bead retaining lip';w.add(lip);
   cylinder(w,m.darkSteel,.11,.08,[0,0,s*.112],'z',.11,40).name='wheel hub shoulder';cylinder(w,m.paint,.085,.07,[0,0,s*.16],'z',.085,40).name='hub cap';
   // A planar seating land intersects the conical web and the hub shoulder.
   // Washers seat at 111 mm; their outer faces support each hex head at 123 mm.
   detailBatch(w,m.paint,annularPlate(.11,.183,.040,16),[{position:[0,0,s*.071],rotation:[s===1?0:Math.PI,0,0]}],'machined rim fastener seating flange');
   const washers=[],heads=[];for(let i=0;i<10;i++){const a=i*Math.PI/5,x=Math.sin(a)*.15,y=Math.cos(a)*.15;washers.push({position:[x,y,s*.111],rotation:[s===1?0:Math.PI,0,0]});heads.push({position:[x,y,s*.134],rotation:[Math.PI/2,0,0]});}
   detailBatch(w,m.steel,annularPlate(.009,.026,.012,8),washers,'seated hub fastener washer').userData.physicalWasherCount=10;
   detailBatch(w,m.steel,new THREE.CylinderGeometry(.015,.015,.022,6),heads,'hub fastener').userData.physicalFastenerCount=10;
   const inner=s===-Math.sign(w.position.z);
   if(inner){
    // Two annular friction faces and real open channels between radial vanes.
    // This is illustrative construction, not a claimed production brake spec.
    detailBatch(w,m.steel,annularPlate(.115,.265,.005,32),[{position:[0,0,s*.054],rotation:[s===1?0:Math.PI,0,0]},{position:[0,0,s*.073],rotation:[s===1?0:Math.PI,0,0]}],'ventilated brake rotor');
    const vane=new THREE.Shape();[[.125,-.03],[.255,-.03],[.255,.03],[.125,.03]].forEach(([radius,angle],i)=>{const x=Math.cos(angle)*radius,y=Math.sin(angle)*radius;i?vane.lineTo(x,y):vane.moveTo(x,y);});vane.closePath();
    const channels=[];for(let i=0;i<24;i++)channels.push({position:[0,0,s*.059],rotation:[s===1?0:Math.PI,0,i*Math.PI/12]});
    detailBatch(w,m.darkSteel,new THREE.ExtrudeGeometry(vane,{depth:.014,steps:1,bevelEnabled:false}),channels,'brake rotor radial cooling vane').userData.physicalVaneCount=24;
    cylinder(w,m.darkSteel,.121,.030,[0,0,s*.066],'z',.121,32).name='rotor seated hub neck';
    box(w,m.darkSteel,[.12,.21,.08],[.23,0,s*.065],'brake caliper');
   }else cylinder(w,m.steel,.265,.015,[0,0,s*.066],'z',.265,48).name='rim inner web';
   cylinder(w,m.rubber,.014,.012,[.12,.28,s*.174],'z',.014,16).name='valve seated rubber grommet';
   cylinder(w,m.steel,.006,.020,[.12,.28,s*.190],'z',.006,12).name='tyre valve';
   cylinder(w,m.darkSteel,.008,.008,[.12,.28,s*.204],'z',.008,12).name='valve threaded dust cap';
   const sidewallRing=new THREE.Mesh(new THREE.TorusGeometry(.47,.0035,6,48),m.rubber);sidewallRing.position.z=s*.214;sidewallRing.name='moulded sidewall seam';w.add(sidewallRing);
  }
 }
}

function highDetail(g,m,prefix,v){
 if(prefix==='CAP'){
  const seats=[];g.traverse(o=>{if(o.name==='crew seat cushion')seats.push(o);});for(const seat of seats){const {x,z}=seat.position;box(g,m.rubber,[.12,.15,.28],[x-.19,1.06,z],'head restraint');for(const side of [-1,1]){rod(g,m.darkSteel,[x-.16,.73,z+side*.25],[x+.18,.73,z+side*.25],.021);cylinder(g,m.steel,.023,.025,[x-.18,.28,z+side*.17],'z');}box(g,m.amber,[.035,.045,.028],[x+.13,.51,z+.22],'belt buckle');for(let i=0;i<3;i++)box(g,m.edge,[.31,.005,.009],[x,.56,z+(i-1)*.08],'seat seam');}
 }else if(prefix==='FP'){
  box(g,m.darkSteel,[.39,.12,.14],[.12,.73,0],'breech cover');for(let i=0;i<7;i++)box(g,m.edge,[.018,.04,.13],[-.06+i*.045,.81,0],'receiver cooling fin');for(const side of [-1,1]){box(g,m.paint,[.055,.27,.30],[-.1,.55,side*.31],'mount cheek');cylinder(g,m.steel,.045,.038,[-.1,.57,side*.35],'z',.045,32);}
  for(let i=0;i<8;i++)cylinder(g,m.amber,.018,.08,[-.24+i*.034,.58,-.4],'y',.013,12);tube(g,m.rubber,[[-.23,.38,-.37],[-.36,.48,-.3],[-.35,.64,-.17],[-.1,.72,-.11]],.018,24);
  for(let i=0;i<6;i++)box(g,m.steel,[.033,.007,.017],[.18+i*.038,.80,0],'accessory rail');
 }else if(prefix==='COM'){
  const count=v===1?3:v===6?2:1;for(let i=0;i<count;i++){const x=(i-(count-1)/2)*.4;for(const dx of [-.13,.13])for(const y of [.12,.47])cylinder(g,m.steel,.008,.012,[x+dx,y,.127],'z',.008,6);for(let j=0;j<4;j++){cylinder(g,m.steel,.013,.012,[x-.10+j*.063,.10,.13],'z');cylinder(g,m.darkSteel,.009,.016,[x-.10+j*.063,.10,.14],'z');}box(g,m.darkSteel,[.04,.18,.023],[x+.145,.30,.126],'grip');}
 }else if(prefix==='SA'){
  const y=v===3?1.75:.43;for(const x of [-.105,.105]){const ring=new THREE.Mesh(new THREE.TorusGeometry(.068,.008,8,40),m.darkSteel);ring.position.set(x,y,.198);g.add(ring);box(g,m.edge,[.19,.025,.18],[x,y+.14,.065],'lens sunshade');for(const dx of [-.09,.09])cylinder(g,m.steel,.006,.012,[x+dx,y+.09,.123],'z',.006,6);}
 }else if(prefix==='ACC'&&[0,5].includes(v)){
  for(const x of [-.42,.42]){box(g,m.edge,[.09,.08,.46],[x,.14,0],'gusseted pedestal');for(const z of [-.19,.19]){cylinder(g,m.steel,.011,.020,[x,.19,z],'y',.011,6);face(g,m.paint,[[x-.085,.085,z],[x+.085,.085,z],[x,.26,z]]).name='bearing pedestal gusset';}}
  // Axial motor, reduction casing and drum bearing share one physical axis.
  cylinder(g,m.paint,.145,.15,[-.57,.34,0],'x',.145,40).name='reduction gearcase';
  cylinder(g,m.darkSteel,.155,.026,[-.66,.34,0],'x',.155,40).name='gearcase joint';bolts(g,m.steel,[-.678,.34,0],.123,8,'x',.009);
  for(let i=0;i<6;i++)cylinder(g,m.darkSteel,.086,.012,[-.70-i*.021,.34,0],'x',.086,32).name='hydraulic motor cooling ring';
  cylinder(g,m.paint,.09,.025,[-.835,.34,0],'x',.09,32).name='motor end cover';
  for(const y of [.21,.46])rod(g,m.darkSteel,[-.42,y,-.235],[.42,y,-.235],.018).name='rear frame tie rod';
  box(g,m.paint,[.21,.065,.12],[-.23,.602,.12],'hydraulic valve block');
  for(const x of [-.30,-.16]){rod(g,m.darkSteel,[-.42,.49,.12],[x,.57,.12],.013).name='valve block support';cylinder(g,m.steel,.017,.030,[x,.65,.12]).name='valve port';}
  for(const [port,end]of [[-.30,-.74],[-.16,-.79]])tube(g,m.rubber,[[port,.65,.12],[port,.68,.12],[-.52,.69,.10],[end,.52,.065],[end,.38,.065]],.013,40).name='motor hydraulic supply';
  // The rope terminal enters a ferrule and swaged eye before the existing hook.
  cylinder(g,m.steel,.020,.055,[0,.235,.455]).name='rope ferrule';
  const thimble=new THREE.Mesh(new THREE.TorusGeometry(.035,.007,8,28),m.steel);thimble.rotation.y=Math.PI/2;thimble.position.set(0,.22,.46);thimble.name='rope eye thimble';g.add(thimble);
  cylinder(g,m.darkSteel,.027,.025,[-.068,.122,.49],'z',.027,20).name='hook latch pivot';
 }
}
