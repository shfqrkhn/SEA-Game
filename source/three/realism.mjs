import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {box,cylinder,rod,tube,bolts,createWheel,createVehicle,createWinch} from '../../samples/threejs-recovery/models.mjs';

// Original concept geometry in metres. References inform construction, never game ratings.
export function materials(){
 const data=new Uint8Array(64*64*4);let seed=947;
 for(let i=0;i<data.length;i+=4){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const n=205+(seed>>>27);data.set([n,n,n,255],i);}
 const grain=new THREE.DataTexture(data,64,64);grain.wrapS=grain.wrapT=THREE.RepeatWrapping;grain.repeat.set(4,4);grain.needsUpdate=true;
 const mat=(color,roughness,metalness=0,extra={})=>new THREE.MeshStandardMaterial({color,roughness,metalness,...extra});
 const result={paint:new THREE.MeshPhysicalMaterial({color:'#596548',roughness:.72,metalness:.12,roughnessMap:grain,bumpMap:grain,bumpScale:.006,clearcoat:.12,clearcoatRoughness:.6}),edge:mat('#343d32',.72,.24,{roughnessMap:grain}),steel:mat('#969e9c',.27,.88),darkSteel:mat('#42494a',.44,.8),rubber:mat('#191c19',.93,0,{bumpMap:grain,bumpScale:.012}),glass:new THREE.MeshPhysicalMaterial({color:'#173137',roughness:.08,metalness:.18,clearcoat:1,envMapIntensity:1.5}),amber:mat('#e1a33c',.29,.2),lamp:mat('#e2e9db',.24,.1),red:mat('#b34736',.42)};
 for(const [key,name]of Object.entries({paint:'powder coated metal',steel:'machined steel',rubber:'moulded rubber',glass:'optical glass'}))result[key].name=name;return result;
}
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
  for(const s of [-1,1]){cylinder(g,m.steel,.075,.07,[0,.56,s*.30],'z');bolts(g,m.darkSteel,[0,.56,s*.345],.05,6,'z',.009);}
  panel(g,m,[.31,.25,.018],[-.15,.5,-.57]);rod(g,m.darkSteel,[-.26,.63,-.58],[-.04,.63,-.58],.014);
  tube(g,m.rubber,[[-.13,.12,.22],[-.3,.28,.35],[-.27,.57,.36],[.08,.69,.32]],.017);
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
export function missionBase(id,m){
 if(id==='RECOVERY'){const g=createVehicle(m);g.traverse(o=>{if(o.isMesh&&o.geometry.type==='BufferGeometry'&&o.material.name!=='optical glass')o.name='hull shell';});recoveryConstruction(g,m);const old=g.getObjectByName('mounted WR-12'),winch=detailPart(createWinch(m),m,'ACC',5);winch.name='mounted WR-12';winch.position.copy(old.position);winch.quaternion.copy(old.quaternion);old.removeFromParent();old.traverse(o=>o.geometry?.dispose());g.add(winch);detailVehicle(g,m,6.25,2.3);return soften(g);}
 const spec={COMBAT:[6.8,2.65,4],RECCE:[5.5,2.3,2],TROOP:[6.9,2.6,3],COMMAND:[6.7,2.6,3],MINE:[6.8,2.65,4]}[id], [length,width,axles]=spec;
 const g=new THREE.Group();g.name=id;g.userData={units:'metres',concept:true,axles,roof:2.37,length,width};
 const front=length/2,rear=-front,half=width/2;
 box(g,m.darkSteel,[length-.45,.2,width*.58],[0,.82,0],'chassis');
 box(g,m.edge,[length-.25,.48,width*.8],[0,1.16,0],'lower hull');
 for(const s of [-1,1])face(g,m.paint,[[rear,1.2,s*half*.75],[front,1.2,s*half*.75],[front-.75,2.36,s*half*.85],[rear+.17,2.36,s*half*.85]]);
 face(g,m.paint,[[rear+.17,2.36,-half*.85],[front-.75,2.36,-half*.85],[front-.75,2.36,half*.85],[rear+.17,2.36,half*.85]]);
 face(g,m.paint,[[front,1.2,-half*.75],[front,1.2,half*.75],[front-.75,2.36,half*.85],[front-.75,2.36,-half*.85]]);
 const frontX=y=>front-(y-1.2)*.75/1.16+.012;
 for(const range of [[-half*.67,-.09],[.09,half*.67]]){
  face(g,m.glass,[[frontX(1.80),1.80,range[0]],[frontX(1.80),1.80,range[1]],[frontX(2.13),2.13,range[1]],[frontX(2.13),2.13,range[0]]]);
  for(const y of [1.80,2.13])rod(g,m.rubber,[frontX(y)+.005,y,range[0]],[frontX(y)+.005,y,range[1]],.012);
  for(const z of range)rod(g,m.rubber,[frontX(1.80)+.005,1.80,z],[frontX(2.13)+.005,2.13,z],.012);
  rod(g,m.rubber,[frontX(1.83)+.018,1.83,(range[0]+range[1])*.5],[frontX(2.03)+.018,2.03,range[1]-.08],.009);
 }
 face(g,m.edge,[[rear,1.2,-half*.75],[rear+.17,2.36,-half*.85],[rear+.17,2.36,half*.85],[rear,1.2,half*.75]]);
 const wheelXs=axles===2?[-1.67,1.67]:axles===3?[-2.25,-.75,1.9]:[-2.55,-1.05,1.0,2.4];
 for(const x of wheelXs){cylinder(g,m.darkSteel,.06,width*.81,[x,.67,0],'z');cylinder(g,m.edge,.13,.31,[x,.67,0],'z');for(const s of [-1,1]){const wheel=createWheel(m);wheel.position.set(x,.62,s*half*.88);g.add(wheel);rod(g,m.steel,[x-.15,.75,s*half*.62],[x+.1,1.2,s*half*.68],.045);box(g,m.paint,[1.22,.075,.48],[x,1.30,s*half*.91],'wheel guard');}}
 for(const s of [-1,1]){const z=s*half*.855,sideZ=y=>s*half*(.75+(y-1.2)*.1/1.16)+s*.01;
  face(g,m.glass,[[front-.93,1.88,sideZ(1.88)],[front-1.88,1.88,sideZ(1.88)],[front-1.88,2.16,sideZ(2.16)],[front-1.05,2.16,sideZ(2.16)]]);
  rod(g,m.darkSteel,[front-2.05,1.55,z],[front-2.05,2.29,z],.009);rod(g,m.steel,[front-1.83,1.78,z+.02*s],[front-1.61,1.78,z+.02*s],.014);
  box(g,m.edge,[.68,.05,.32],[front-1.61,1.36,s*(half*.87+.14)],'entry step');
  rod(g,m.darkSteel,[front-.98,1.86,z],[front-.9,2.07,s*(half+.1)],.02);box(g,m.glass,[.055,.20,.15],[front-.9,2.07,s*(half+.1)],'mirror');
  for(let i=0;i<4;i++){const x=rear+.6+i*.64;panel(g,m,[.51,.49,.04],[x,1.95,s*half*.85]);}
  for(let i=0;i<10;i++)box(g,m.darkSteel,[.02,.22,.02],[front-1.6+i*.06,2.38,s*.57],'vent grille');
  cylinder(g,m.lamp,.067,.05,[front+.012,1.36,s*half*.65],'x');cylinder(g,m.amber,.028,.055,[front+.015,1.36,s*half*.76],'x');box(g,m.red,[.03,.07,.13],[rear-.02,1.32,s*half*.65]);
 }
 box(g,m.darkSteel,[.15,.17,width*.85],[front,1.12,0],'front bumper');
 for(const s of [-1,1]){cylinder(g,m.steel,.055,.08,[front+.1,1.14,s*.73],'x');rod(g,m.steel,[rear+.25,1.44,s*.5],[rear+.25,2.05,s*.5],.016);}
 cylinder(g,m.edge,.32,.04,[.4,2.39,.5],'roof hatch');
 detailVehicle(g,m,length,width);return soften(g);
}
function recoveryConstruction(g,m){
 // Cab-over recovery architecture: less wedge-like front and deeper upright glazing.
 // Preserve the canonical eight wheels; generated artwork is a shape reference.
 const polygons=g.children.filter(o=>o.isMesh&&o.geometry.type==='BufferGeometry'),paint=polygons.filter(o=>o.material.name!=='optical glass'),glass=polygons.filter(o=>o.material.name==='optical glass');
 function reshape(mesh,points){if(!mesh)return;const vertices=[];for(let i=1;i<points.length-1;i++)vertices.push(...points[0],...points[i],...points[i+1]);mesh.geometry.dispose();mesh.geometry=new THREE.BufferGeometry();mesh.geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));mesh.geometry.computeVertexNormals();}
 const frontX=y=>2.94-(y-1.74)*(.47/1.01)+.012;
 for(const guard of g.children.filter(o=>o.name==='wheel guard')){const shape=new THREE.Shape();shape.moveTo(-.74,-.04);shape.lineTo(-.74,.19);shape.quadraticCurveTo(-.72,.25,-.68,.31);shape.lineTo(-.47,.68);shape.quadraticCurveTo(-.43,.74,-.36,.74);shape.lineTo(.36,.74);shape.quadraticCurveTo(.43,.74,.47,.68);shape.lineTo(.68,.31);shape.quadraticCurveTo(.72,.25,.74,.19);shape.lineTo(.74,-.04);shape.lineTo(.66,-.04);shape.lineTo(.66,.18);shape.lineTo(.39,.66);shape.lineTo(-.39,.66);shape.lineTo(-.66,.18);shape.lineTo(-.66,-.04);shape.closePath();guard.geometry.dispose();guard.geometry=new THREE.ExtrudeGeometry(shape,{depth:.50,curveSegments:5,bevelEnabled:true,bevelSize:.016,bevelThickness:.016,bevelSegments:3,steps:1});guard.name='recovery formed wheel guard';guard.position.y=.605;guard.position.z-=.25;}
 // Real openings replace dark glazing decals over opaque sheets. The short
 // bevels create formed highlights at cab corners and around recessed glass.
 for(const mesh of paint){mesh.removeFromParent();mesh.geometry.dispose();mesh.material.dispose();}
 for(const s of [-1,1]){
  formedCabPanel(g,m.paint,[[.52,1.74],[2.94,1.74],[2.47,2.75],[.52,2.75]],[roundedOpening(.76,2.15,2.28,2.60)],(x,y,d)=>[x,y,s*(1.15-d)]);
  formedCabPanel(g,m.paint,[[.52,1.40],[2.83,1.40],[2.98,1.65],[2.94,1.74],[.52,1.74]],[],(x,y,d)=>[x,y,s*(1.15-d)]);
  // A separate pressed door skin gives the lower sill a deliberate contour.
  formedCabPanel(g,m.paint,[[.70,1.78],[2.32,1.78],[2.55,2.10],[2.34,2.64],[.70,2.64]],[roundedOpening(.78,2.17,2.26,2.58)],(x,y,d)=>[x,y,s*(1.174-d*.35)]);
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
 for(const [i,s]of [[2,-1],[3,1]]){const points=[[.79,2.18,s*1.178],[2.25,2.18,s*1.178],[2.25,2.57,s*1.178],[.79,2.57,s*1.178]];reshape(glass[i],points);glass[i].name='cab glazing';for(let j=0;j<4;j++)rod(g,m.rubber,points[j],points[(j+1)%4],.017);box(g,m.edge,[.045,.39,.025],[1.45,2.375,s*1.196],'sliding window mullion');
  // Mirror backing and two-point arm share the existing mirror's mount and scale.
  box(g,m.rubber,[.085,.25,.18],[2.065,2.32,s*1.47],'mirror housing');rod(g,m.darkSteel,[2.11,2.08,s*1.16],[2.10,2.24,s*1.46],.018);
  for(const y of [1.93,2.47])box(g,m.darkSteel,[.065,.13,.035],[.66,y,s*1.185],'door hinge');
  box(g,m.edge,[.22,.26,.13],[2.99,1.79,s*.83],'recessed headlight surround');cylinder(g,m.lamp,.080,.033,[3.112,1.79,s*.83],'x',.08,32);
  cylinder(g,m.amber,.029,.024,[2.25,2.79,s*.90],'y',.029,20);
 }
 const grille=box(g,m.edge,[.025,.28,1.35],[frontX(1.84)+.015,1.84,0],'radiator grille frame');grille.rotation.z=Math.atan(.47/1.01);for(let i=0;i<7;i++){const y=1.73+i*.033;box(g,m.darkSteel,[.025,.025,1.24],[frontX(y)+.034,y,0],'radiator grille slat');}for(const z of [-.52,0,.52]){const rib=box(g,m.edge,[.034,.27,.023],[frontX(1.83)+.055,1.83,z],'grille support');rib.rotation.z=Math.atan(.47/1.01);}
 // Rounded roof edge visually joins the cab planes and carries the marker lamps.
 rod(g,m.edge,[2.47,2.75,-1.15],[2.47,2.75,1.15],.031);for(const z of [-.75,-.38,0,.38,.75])box(g,m.amber,[.12,.04,.07],[2.38,2.80,z],'roof clearance lamp');
 const lockers=g.getObjectByName('recovery stowage');if(lockers){for(const o of lockers.children.filter(o=>o.name==='tool locker')){o.geometry.dispose();o.geometry=new THREE.BoxGeometry(2.6,.64,.43);o.position.y=1.99;}for(const s of [-1,1])for(const x of [-2.41,-1.56,-.71]){box(lockers,m.edge,[.78,.54,.015],[x,1.99,s*1.195],'locker door gasket');box(lockers,m.paint,[.73,.49,.019],[x,1.99,s*1.21],'formed locker door');for(const y of [1.83,2.15])box(lockers,m.darkSteel,[.05,.08,.028],[x-.31,y,s*1.235],'locker hinge');box(lockers,m.darkSteel,[.13,.14,.019],[x+.23,2.04,s*1.237],'recessed latch cup');rod(lockers,m.steel,[x+.19,2.04,s*1.253],[x+.27,2.04,s*1.253],.012).name='locker latch lever';}
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
 const beam=(a,b,w,h,material,name)=>{const shape=new THREE.Shape(roundedOpening(-w/2,-h/2,w/2,h/2,.025).getPoints(6));const direction=new THREE.Vector3(...b).sub(new THREE.Vector3(...a));const mesh=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:direction.length(),curveSegments:5,steps:1,bevelEnabled:true,bevelSize:.009,bevelThickness:.009,bevelSegments:2}),material);mesh.position.set(...a);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),direction.normalize());mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;crane.add(mesh);return mesh;};
 box(crane,m.edge,[.95,.12,1.20],[-.85,1.78,0],'crane mounting crossmember');
 cylinder(crane,m.darkSteel,.44,.14,[-.85,1.88,0],'y',.44,48).name='slewing ring';cylinder(crane,m.paint,.33,.32,[-.85,2.10,0],'y',.33,40).name='crane pedestal';
 for(const s of [-1,1]){
  formedCabPanel(crane,m.paint,[[-1.17,2.10],[-1.13,2.51],[-1.04,2.62],[-.66,2.62],[-.57,2.51],[-.53,2.10]],[],(x,y,d)=>[x,y,s*(.27+d)]).name='crane pivot cheek';
  cylinder(crane,m.steel,.095,.075,[-.85,2.46,s*.32],'z',.095,40).name='boom pivot bearing';rod(crane,m.edge,[-.85,1.80,s*.55],[-.85,2.14,s*.29],.045).name='pedestal brace';
 }
 cylinder(crane,m.darkSteel,.075,.73,[-.85,2.46,0],'z',.075,40).name='boom hinge pin';
 beam([-.85,2.46,0],[-2.47,3.12,0],.36,.42,m.paint,'formed main boom');beam([-2.34,3.07,0],[-3.05,3.36,0],.23,.27,m.darkSteel,'telescoping extension');
 const base=[-.73,2.08,.32],gland=[-1.65,2.69,.32],tip=[-2.13,2.91,.32];rod(crane,m.paint,base,gland,.085).name='lift cylinder barrel';rod(crane,m.steel,gland,tip,.032).name='lift piston rod';
 const collar=rod(crane,m.darkSteel,[-1.60,2.657,.32],[-1.69,2.715,.32],.103);collar.name='cylinder gland';
 for(const [x,y]of [[base[0],base[1]],[tip[0],tip[1]]]){cylinder(crane,m.steel,.067,.13,[x,y,.32],'z',.067,32).name='cylinder clevis pin';box(crane,m.paint,[.17,.17,.08],[x,y,.26],'lift cylinder clevis');}
 box(crane,m.paint,[.21,.17,.08],[-2.13,2.975,.26],'boom cylinder lug');
 cylinder(crane,m.edge,.12,.29,[-.36,2.37,0],'z',.12,40).name='hoist drum';for(const s of [-1,1]){cylinder(crane,m.steel,.15,.025,[-.36,2.37,s*.155],'z',.15,40).name='hoist drum flange';rod(crane,m.paint,[-.36,2.10,s*.19],[-.36,2.37,s*.19],.045).name='hoist winch support';rod(crane,m.edge,[-.68,2.10,s*.19],[-.36,2.10,s*.19],.037).name='hoist support tie';}
 for(const s of [-1,1])formedCabPanel(crane,m.paint,[[-3.13,3.19],[-3.17,3.40],[-2.94,3.48],[-2.85,3.35]],[],(x,y,d)=>[x,y,s*(.12+d)]).name='boom head cheek';
 cylinder(crane,m.darkSteel,.095,.18,[-3.04,3.35,0],'z',.095,40).name='head sheave';
 for(const s of [-1,1]){const ring=new THREE.Mesh(new THREE.TorusGeometry(.086,.013,8,36),m.steel);ring.position.set(-3.04,3.35,s*.075);ring.name='sheave flange';crane.add(ring);}
 tube(crane,m.steel,[[-.36,2.49,0],[-.73,2.72,0],[-2.40,3.39,0],[-2.98,3.43,0],[-3.12,3.35,0],[-3.12,2.79,0]],.012,48).name='hoist rope';
 cylinder(crane,m.darkSteel,.047,.16,[-3.12,2.77,0]).name='hook swivel';
 tube(crane,m.amber,[[-3.12,2.70,0],[-3.19,2.65,0],[-3.23,2.54,0],[-3.18,2.45,0],[-3.07,2.46,0],[-3.01,2.55,0],[-3.04,2.61,0]],.033,32).name='forged lifting hook';rod(crane,m.darkSteel,[-3.04,2.61,0],[-3.14,2.67,0],.008).name='hook safety latch';
 for(const s of [-1,1]){const offset=s===1?0:.04;tube(crane,m.rubber,[[-.80,2.0,.36+offset],[-.59,2.18,.39+offset],[-.71,2.59,.38+offset],[-1.16,2.64,.39+offset],[-1.59,2.66,.34+offset]],.021,32).name='lift cylinder hydraulic line';box(crane,m.paint,[.46,.24,.15],[-2.69,1.51,s*1.11],'stowed stabilizer');cylinder(crane,m.darkSteel,.064,.31,[-2.69,1.28,s*1.11]);box(crane,m.darkSteel,[.23,.045,.24],[-2.69,1.11,s*1.11],'stabilizer foot');}
}
function recoveryCockpit(g,m){
 const cockpit=new THREE.Group();cockpit.name='driver controls';g.add(cockpit);
 const trim=new THREE.MeshStandardMaterial({color:'#79816f',roughness:.86,metalness:0});trim.name='cab interior trim';
 const upholstery=new THREE.MeshStandardMaterial({color:'#3b4540',roughness:.94,metalness:0});upholstery.name='woven seat upholstery';
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
 box(cockpit,m.edge,[.22,.26,1.42],[x+.17,y+.14,0],'dashboard');
 for(const s of [-1,1]){box(cockpit,m.rubber,[.48,.14,.47],[x-.45,y,s*.48],'driver seat');box(cockpit,m.rubber,[.12,.58,.47],[x-.68,y+.27,s*.48],'seat back');rod(cockpit,m.steel,[x-.45,y-.30,s*.48],[x-.45,y-.07,s*.48],.026);}
 const steering=new THREE.Mesh(new THREE.TorusGeometry(.18,.017,8,40),m.rubber);steering.rotation.y=Math.PI/2;steering.position.set(x-.15,y+.41,-.48);cockpit.add(steering);for(let i=0;i<3;i++){const a=i*Math.PI*2/3;rod(cockpit,m.darkSteel,[x-.15,y+.41,-.48],[x-.15,y+.41+Math.cos(a)*.16,-.48+Math.sin(a)*.16],.009);}
 for(let i=0;i<4;i++)cylinder(cockpit,m.glass,.034,.012,[x+.045,y+.21,-.57+i*.09],'x');
 // Controls are supported by the floor/seat frame and dashboard, rather than
 // floating cues. The shared cab still represents an original illustrative vehicle.
 const floor=y-.12;
 box(cockpit,m.edge,[1.50,.05,1.80],[x-.18,floor,0],'cab floor');
 for(const s of [-1,1]){
  for(const z of [s*.48-.16,s*.48+.16])box(cockpit,m.darkSteel,[.58,.045,.04],[x-.47,floor+.04,z],'seat adjustment rail');
  box(cockpit,m.rubber,[.13,.17,.32],[x-.67,y+.60,s*.48],'driver head restraint');
  for(const z of [s*.48-.10,s*.48+.10])rod(cockpit,m.steel,[x-.67,y+.50,z],[x-.67,y+.60,z],.013);
  rod(cockpit,m.darkSteel,[x-.60,y+.41,s*.65],[x-.13,y-.02,s*.34],.012).name='diagonal restraint';
  box(cockpit,m.red,[.025,.035,.045],[x-.13,y-.015,s*.34],'restraint buckle');
  tube(cockpit,m.darkSteel,[[x-.67,y+.20,s*.73],[x-.41,y-.02,s*.73],[x-.13,y-.02,s*.34]],.009,22).name='lap restraint';
 }
 rod(cockpit,m.darkSteel,[x-.15,y+.41,-.48],[x+.07,y+.30,-.48],.026).name='steering column';
 cylinder(cockpit,m.edge,.04,.06,[x-.15,y+.41,-.48],'x',.04,24).name='steering hub';
 for(const z of [-.60,-.43,-.26]){rod(cockpit,m.steel,[x+.20,floor+.025,z],[x+.08,floor+.13,z],.012).name='pedal arm';const pedal=box(cockpit,m.rubber,[.09,.025,.07],[x+.08,floor+.14,z],'driver pedal');pedal.rotation.z=-.45;}
 box(cockpit,m.edge,[.30,.16,.19],[x-.10,floor+.10,.02],'gear selector console');
 rod(cockpit,m.darkSteel,[x-.10,floor+.18,.02],[x-.14,y+.16,.02],.012).name='gear selector';cylinder(cockpit,m.rubber,.03,.045,[x-.14,y+.18,.02]).name='selector grip';
 // Raised needles and bezels read as instruments in the cutaway close-up.
 for(let i=0;i<4;i++){const z=-.57+i*.09;cylinder(cockpit,m.darkSteel,.037,.009,[x+.035,y+.21,z],'x',.037,24).name='instrument bezel';rod(cockpit,m.lamp,[x+.028,y+.21,z],[x+.028,y+.23,z+.009],.0025).name='instrument needle';}
 }
 refineWheels(g,m);
 const guards=[];g.traverse(o=>{if(o.name==='wheel guard')guards.push(o);});for(const guard of guards){const shape=new THREE.Shape();for(let i=0;i<=12;i++){const a=i*Math.PI/12,x=Math.cos(a)*.70,y=Math.sin(a)*.70;(i?shape.lineTo(x,y):shape.moveTo(x,y));}for(let i=12;i>=0;i--){const a=i*Math.PI/12;shape.lineTo(Math.cos(a)*.64,Math.sin(a)*.64);}shape.closePath();guard.geometry.dispose();guard.geometry=new THREE.ExtrudeGeometry(shape,{depth:.46,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.009,bevelThickness:.009});guard.position.y=.62;guard.position.z-=.23;}
 for(const side of [-1,1]){const z=side*width*.45;for(const x of [-length*.38,-length*.22]){box(g,m.edge,[.028,.12,.028],[x,1.75,z],'panel hinge');cylinder(g,m.steel,.011,.07,[x,1.75,z+side*.024],'y',.011,12);}for(let i=0;i<6;i++)box(g,m.darkSteel,[.3,.02,.03],[-length*.27,2.08+i*.035,z+side*.018],'louvred cooling intake');rod(g,m.darkSteel,[length*.36,1.38,z],[length*.36,1.95,z],.016);}
 // Connected drive shaft, armoured belly plate, exhaust and fuel-tank plumbing.
 rod(g,m.darkSteel,[-length*.34,.80,0],[length*.31,.80,0],.06);box(g,m.edge,[length*.56,.065,width*.48],[0,.90,0],'belly protection');
 cylinder(g,m.darkSteel,.11,.85,[-length*.22,1.18,-width*.28],'x');tube(g,m.darkSteel,[[-length*.22,1.18,-width*.28],[-length*.38,1.18,-width*.28],[-length*.42,1.37,-width*.37]],.034);
 const rear=-length/2;
 for(const s of [-1,1]){tube(g,m.darkSteel,[[rear+.7,1.4,s*width*.43],[rear+.7,2.1,s*width*.46],[rear+1.3,2.13,s*width*.46]],.024);box(g,m.edge,[.4,.20,.42],[rear+.55,1.07,s*width*.39],'mud flap');}
 for(let i=0;i<4;i++){rod(g,m.steel,[rear+.1,1.15+i*.18,-.3],[rear+.1,1.15+i*.18,.3],.014);}
}

function refineWheels(g,m){
 const wheels=[];g.traverse(o=>{if(o.name==='run-flat wheel')wheels.push(o);});for(const w of wheels){if(w.userData.detailed)continue;w.userData.detailed=true;
  const tire=w.children[0];for(const old of [...w.children].slice(1)){old.removeFromParent();old.geometry?.dispose();}
  tire.geometry.dispose();const profile=[[.315,-.165],[.33,-.185],[.40,-.211],[.48,-.213],[.54,-.190],[.574,-.152],[.588,-.096],[.590,-.04],[.590,.04],[.588,.096],[.574,.152],[.54,.190],[.48,.213],[.40,.211],[.33,.185],[.315,.165],[.315,-.165]].map(([r,z])=>new THREE.Vector2(r,z));tire.geometry=new THREE.LatheGeometry(profile,64);tire.rotation.x=Math.PI/2;tire.name='rounded tyre carcass';
  // Directional interlocking lugs overlap the shoulder and share their geometry.
  const lugShape=new THREE.Shape();lugShape.moveTo(-.055,-.071);lugShape.lineTo(.018,-.071);lugShape.lineTo(.059,-.035);lugShape.lineTo(.043,.071);lugShape.lineTo(-.027,.071);lugShape.lineTo(-.063,.025);lugShape.closePath();
  const lugGeometry=new THREE.ExtrudeGeometry(lugShape,{depth:.030,steps:1,bevelEnabled:true,bevelSize:.006,bevelThickness:.006,bevelSegments:1});lugGeometry.rotateX(Math.PI/2);
  for(let i=0;i<32;i++)for(const s of [-1,1]){const a=i*Math.PI/16+s*.028,lug=new THREE.Mesh(lugGeometry,m.rubber);lug.position.set(Math.sin(a)*.607,Math.cos(a)*.607,s*.091);lug.rotation.z=-a;lug.rotation.y=s*.24;lug.name='directional tread lug';lug.castShadow=true;lug.receiveShadow=true;w.add(lug);}
  for(const s of [-1,1]){
   // A dished rim has a deep centre; the hub stands proud of its recessed web.
   const rimProfile=[[.11,.08],[.15,.095],[.23,.13],[.31,.173],[.325,.19],[.334,.184],[.331,.164],[.307,.15],[.236,.109],[.15,.071],[.11,.068]].map(([r,z])=>new THREE.Vector2(r,z));
   const rim=new THREE.Mesh(new THREE.LatheGeometry(rimProfile,48),m.paint);rim.rotation.x=s*Math.PI/2;rim.name='dished wheel rim';w.add(rim);
   const lip=new THREE.Mesh(new THREE.TorusGeometry(.322,.012,8,48),m.darkSteel);lip.position.z=s*.184;lip.name='rim bead retaining lip';w.add(lip);
   cylinder(w,m.darkSteel,.11,.08,[0,0,s*.112],'z',.11,40).name='wheel hub shoulder';cylinder(w,m.paint,.085,.07,[0,0,s*.16],'z',.085,40).name='hub cap';
   for(let i=0;i<10;i++){const a=i*Math.PI/5;cylinder(w,m.steel,.015,.021,[Math.sin(a)*.15,Math.cos(a)*.15,s*.12],'z',.015,6).name='hub fastener';}
   const inner=s===-Math.sign(w.position.z),rotor=cylinder(w,m.steel,.265,.015,[0,0,s*.066],'z',.265,48);rotor.name=inner?'ventilated brake rotor':'rim inner web';
   if(inner)box(w,m.darkSteel,[.12,.21,.08],[.23,0,s*.065],'brake caliper');
   cylinder(w,m.steel,.012,.025,[.12,.28,s*.18],'z',.012,8).name='tyre valve';
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
