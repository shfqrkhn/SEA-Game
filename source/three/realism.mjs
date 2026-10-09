import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {box,cylinder,rod,tube,bolts,createWheel,createVehicle} from '../../samples/threejs-recovery/models.mjs';

// Original concept geometry in metres. References inform construction, never game ratings.
export function materials(){
 const data=new Uint8Array(64*64*4);let seed=947;
 for(let i=0;i<data.length;i+=4){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const n=205+(seed>>>27);data.set([n,n,n,255],i);}
 const grain=new THREE.DataTexture(data,64,64);grain.wrapS=grain.wrapT=THREE.RepeatWrapping;grain.repeat.set(4,4);grain.needsUpdate=true;
 const mat=(color,roughness,metalness=0,extra={})=>new THREE.MeshStandardMaterial({color,roughness,metalness,...extra});
 return {paint:mat('#64705b',.64,.18,{roughnessMap:grain}),edge:mat('#3e493d',.72,.24,{roughnessMap:grain}),steel:mat('#969e9c',.27,.88),darkSteel:mat('#42494a',.44,.8),rubber:mat('#202421',.93),glass:mat('#263e43',.12,.42,{envMapIntensity:1.3}),amber:mat('#e1a33c',.29,.2),lamp:mat('#e2e9db',.24,.1),red:mat('#b34736',.42)};
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
 if(prefix==='CAP'){
  for(const s of [-1,1]){rod(g,m.darkSteel,[-1.12,.15,s*.59],[1.12,.15,s*.59],.018);panel(g,m,[.62,.36,.018],[-.65,.38,s*.75]);rod(g,m.steel,[.75,.25,s*.74],[.75,.6,s*.74],.016);}
  box(g,m.darkSteel,[.48,.04,.28],[1.25,.12,0],'boarding step');
 }else if(prefix==='MOB'){
  if([0,4,5].includes(v)){
   for(const s of [-1,1]){box(g,m.edge,[.78,.13,.19],[0,.78,s*.2],'rocker cover');for(let i=0;i<5;i++)box(g,m.darkSteel,[.64,.011,.015],[0,.852,s*.2+(i-2)*.027]);}
   cylinder(g,m.steel,.10,.13,[-.43,.54,.39],'z');cylinder(g,m.darkSteel,.08,.075,[-.43,.54,.49],'z');
   cylinder(g,m.paint,.07,.24,[.35,.5,.39]);tube(g,m.rubber,[[-.32,.53,.44],[-.3,.31,.4],[.3,.3,.4],[.35,.42,.39]],.018);
   cylinder(g,m.darkSteel,.21,.024,[.62,.48,0],'x');for(let i=0;i<8;i++){const a=i*Math.PI/4,b=box(g,m.darkSteel,[.02,.12,.055],[.64,.48+Math.cos(a)*.12,Math.sin(a)*.12]);b.rotation.x=a;}
  }else if(v!==3){for(const x of [-.65,.65]){bolts(g,m.steel,[x,.5,.145],.073,6,'z',.012);rod(g,m.darkSteel,[x,.5,0],[0,.5,0],.043);}box(g,m.paint,[.22,.1,.18],[0,.54,0],'traction controller');}
 }else if(prefix==='FP'){
  for(const s of [-1,1]){cylinder(g,m.steel,.075,.07,[0,.56,s*.30],'z');bolts(g,m.darkSteel,[0,.56,s*.345],.05,6,'z',.009);}
  panel(g,m,[.31,.25,.018],[-.15,.5,-.57]);rod(g,m.darkSteel,[-.26,.63,-.58],[-.04,.63,-.58],.014);
  tube(g,m.rubber,[[-.13,.12,.22],[-.3,.28,.35],[-.27,.57,.36],[.08,.69,.32]],.017);
 }else if(prefix==='PRO'){
  for(const x of [-.46,.46])for(const z of [-.27,.27]){cylinder(g,m.darkSteel,.025,.045,[x,.08,z]);cylinder(g,m.steel,.013,.035,[x,.13,z],'y',.013,6);}
  if([3,6].includes(v)){for(const side of [-1,1]){box(g,m.rubber,[.49,.29,.018],[.23,.72,side*.585],'window seal');box(g,m.glass,[.43,.23,.023],[.23,.72,side*.597],'armoured glazing');rod(g,m.steel,[-.45,.43,side*.59],[-.25,.43,side*.59],.014);for(const y of [.35,.78])box(g,m.steel,[.05,.07,.026],[-.63,y,side*.594],'door hinge');}for(let i=0;i<5;i++)box(g,m.darkSteel,[.012,.17,.012],[-.44+i*.075,.83,.595],'protected vent');}
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
 return soften(g);
}

function face(g,m,vertices){const a=[];for(let i=1;i<vertices.length-1;i++)a.push(...vertices[0],...vertices[i],...vertices[i+1]);const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(a,3));geometry.computeVertexNormals();const mat=m.clone();mat.side=THREE.DoubleSide;const mesh=new THREE.Mesh(geometry,mat);mesh.name=m.metalness===.42?'cab glazing':'hull shell';g.add(mesh);return mesh;}
export function missionBase(id,m){
 if(id==='RECOVERY'){const g=createVehicle(m);detailVehicle(g,m,6.25,2.3);return soften(g);}
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
function detailVehicle(g,m,length,width){
 const rear=-length/2;
 for(const s of [-1,1]){tube(g,m.darkSteel,[[rear+.7,1.4,s*width*.43],[rear+.7,2.1,s*width*.46],[rear+1.3,2.13,s*width*.46]],.024);box(g,m.edge,[.4,.20,.42],[rear+.55,1.07,s*width*.39],'mud flap');}
 for(let i=0;i<4;i++){rod(g,m.steel,[rear+.1,1.15+i*.18,-.3],[rear+.1,1.15+i*.18,.3],.014);}
}
