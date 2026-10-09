import * as THREE from 'three';
import {createWinch,createWheel,box,cylinder,rod,tube,bolts} from '../../samples/threejs-recovery/models.mjs';
import {materials,detailPart,missionBase,soften} from './realism.mjs';
export {materials};
export const MISSION_IDS=Object.freeze(['COMBAT','RECCE','TROOP','COMMAND','RECOVERY','MINE']);
export const MODEL_IDS=Object.freeze([...['ACC','CAP','COM','FP','MOB','PRO','SA'].flatMap(p=>'ABCDEFG'.split('').map(l=>`${p}-${l}`)),...'ABCDEFGHIJKLMNOPQRSTU'.split('').map(l=>`SE-${l}`),'TRAIN-CAP']);
function group(name){const g=new THREE.Group();g.name=name;return g;}
function seat(g,m,x,z){box(g,m.edge,[.48,.12,.48],[x,.40,z]);box(g,m.rubber,[.44,.13,.43],[x,.49,z],"crew seat cushion");box(g,m.rubber,[.12,.52,.44],[x-.19,.80,z]);rod(g,m.darkSteel,[x-.19,.93,z-.13],[x+.12,.49,z+.13],.013);for(const side of [-1,1])rod(g,m.steel,[x+side*.17,.06,z],[x+side*.17,.36,z],.018);}
function crewBay(m,v){
 const g=group('crew bay'),count=[6,6,4,8,5,5,4][v],length=[2.65,3.05,2.05,3.25,2.2,2.5,2.1][v],width=v===6?1.26:1.47,rows=Math.ceil(count/2),pitch=(length-.65)/rows;
 box(g,m.paint,[length,.12,width],[0,.06,0]);
 for(let i=0;i<count;i++){const row=Math.floor(i/2),single=i===count-1&&count%2;seat(g,m,(row-(rows-1)/2)*pitch,single?0:(i%2?1:-1)*width*.25);}
 if(v!==4){for(const side of [-1,1]){box(g,m.paint,[length,v===5?.93:.55,v===5?.10:.055],[0,v===5?.52:.34,side*(width/2+.035)]);for(const x of [-length/2+.08,length/2-.08])rod(g,m.edge,[x,.12,side*width/2],[x,1.24,side*width/2],v===5?.046:.032);}box(g,m.paint,[length+.10,.065,width+.10],[0,1.28,0],'crew roof');}
 if(v===5){for(const side of [-1,1])for(const x of [-.65,.25]){box(g,m.rubber,[.44,.2,.018],[x,.86,side*(width/2+.09)]);box(g,m.glass,[.38,.14,.020],[x,.86,side*(width/2+.103)]);}box(g,m.edge,[length,.07,width],[0,.10,0],'reinforced floor');}
 if(v===4){for(const side of [-1,1])rod(g,m.steel,[-length/2,.09,side*.5],[length/2,.09,side*.5],.018);}
 return g;
}
function casing(g,m,profile,pos,axis='x',name='cast transmission casing'){
 const geometry=new THREE.LatheGeometry(profile.map(([r,a])=>new THREE.Vector2(r,a)),40),mesh=new THREE.Mesh(geometry,m);mesh.position.set(...pos);mesh.rotation[axis==='x'?'z':'x']=Math.PI/2;mesh.name=name;g.add(mesh);return mesh;
}
function engine(m,v){
 const g=group('inline diesel power pack'),compact=v===5;
 for(const z of [-.38,.38])box(g,m.edge,[2.05,.09,.085],[-.20,.11,z],'power pack skid rail');for(const x of [-1.05,.70])box(g,m.edge,[.08,.07,.84],[x,.13,0],'skid crossmember');
 box(g,m.paint,[.97,.42,.45],[0,.48,0],'cast inline engine block');box(g,m.darkSteel,[.86,.18,.36],[0,.25,0],'sump');box(g,m.paint,[1.01,.18,.47],[0,.82,0],'cylinder head');box(g,m.edge,[1.02,.12,.43],[0,.97,0],'single rocker cover');
 for(let i=0;i<6;i++){const x=-.40+i*.16;box(g,m.darkSteel,[.019,.34,.015],[x,.48,.237],'casting web');tube(g,m.steel,[[x,.78,.25],[x,.66,.36],[x+.04,.53,.42]],.023,18);tube(g,m.darkSteel,[[x,.86,-.22],[x,.76,-.31],[x,.62,-.34]],.026,18);}
 tube(g,m.darkSteel,[[-.42,.53,.42],[.40,.53,.42],[.48,.68,.38]],.046,28);
 casing(g,m.steel,[[0,-.04],[.11,-.04],[.23,.03],[.27,.13],[.23,.26],[.17,.52],[.12,.68],[0,.68]],[-.48,.52,0]);for(const x of [-.69,-.82,-.95])cylinder(g,m.darkSteel,.20,.025,[x,.52,0],'x',.20,40);cylinder(g,m.steel,.10,.10,[-1.20,.52,0],'x');
 box(g,m.darkSteel,[.10,.88,.76],[.68,.61,0],'radiator core');for(const z of [-.40,.40])box(g,m.paint,[.14,.93,.06],[.68,.61,z],'radiator side tank');for(const y of [.17,1.05])box(g,m.steel,[.14,.045,.83],[.68,y,0],'radiator header');for(let i=0;i<22;i++)box(g,m.steel,[.013,.77,.009],[.743,.61,-.35+i*.033],'radiator fin');
 cylinder(g,m.edge,.25,.07,[.57,.62,0],'x',.25,40);for(let i=0;i<7;i++){const a=i*Math.PI*2/7,blade=box(g,m.darkSteel,[.025,.24,.075],[.535,.62+Math.cos(a)*.13,Math.sin(a)*.13],'cooling fan blade');blade.rotation.x=a;}
 tube(g,m.rubber,[[.40,.85,-.20],[.45,1.06,-.24],[.64,1.06,-.24]],.045,28);tube(g,m.rubber,[[.35,.33,-.23],[.48,.20,-.29],[.64,.20,-.29]],.039,28);
 cylinder(g,m.darkSteel,.11,.45,[-.04,1.13,-.34],'x',.11,32);tube(g,m.rubber,[[.20,1.13,-.34],[.36,1.13,-.34],[.39,.88,-.26]],.062,30);cylinder(g,m.steel,.085,.12,[.20,.52,.36],'x',.085,32);for(let i=0;i<8;i++)box(g,m.steel,[.012,.14,.05],[.15+i*.018,.52,.37],'alternator cooling rib');
 for(const [y,z,r]of [[.41,0,.11],[.68,.17,.067]])cylinder(g,m.darkSteel,r,.035,[.50,y,z],'x',r,32);tube(g,m.rubber,[[.525,.32,0],[.525,.48,-.09],[.525,.74,.12],[.525,.69,.23],[.525,.33,.06],[.525,.32,0]],.012,40);
 for(const x of [-.35,.32])for(const z of [-.25,.25]){cylinder(g,m.rubber,.04,.09,[x,.20,z]);rod(g,m.steel,[x,.22,z],[x,.38,z],.022);}
 if(v===4){box(g,m.paint,[.72,.75,.42],[-.52,.56,-.74],'long range fuel reservoir');for(const x of [-.78,-.28])box(g,m.darkSteel,[.036,.77,.45],[x,.56,-.74],'fuel tank restraint');cylinder(g,m.steel,.048,.045,[-.52,.96,-.74]);tube(g,m.rubber,[[-.30,.29,-.72],[-.09,.30,-.58],[.04,.55,-.26]],.016,30);}
 if(compact)g.scale.setScalar(.78);return g;
}
function axle(m,{wheels=false,light=false,adaptive=false,springs=false}={}){
 const g=group('connected drive axle'),width=light?1.3:1.65,y=.44,r=light?.13:.19;
 const differential=new THREE.Mesh(new THREE.SphereGeometry(r,32,20),m.paint);differential.scale.set(1.18,1,1.05);differential.position.set(0,y,0);differential.name='cast differential housing';g.add(differential);cylinder(g,m.darkSteel,r*.90,.055,[r*.80,y,0],'x',r*.90,32);cylinder(g,m.steel,.065,.17,[r*1.2,y,0],'x');
 for(const s of [-1,1]){rod(g,m.paint,[0,y,s*.07],[0,y,s*width*.43],light?.043:.068);for(let i=0;i<5;i++)cylinder(g,m.rubber,light?.06:.09,.045,[0,y,s*(.24+i*.05)],'z',light?.06:.09,24);cylinder(g,m.steel,.16,.045,[0,y,s*width*.47],'z',.16,32);cylinder(g,m.darkSteel,.10,.10,[0,y,s*width*.46],'z');if(wheels){const w=createWheel(m);w.scale.setScalar(light?.56:.76);w.position.set(0,y,s*width*.49);g.add(w);}else{bolts(g,m.steel,[0,y,s*(width*.47+.03)],.115,8,'z',.014);}
  const z=s*width*.29;rod(g,m.edge,[-.28,y+.03,z],[.12,y+.41,z],light?.025:.043);rod(g,m.edge,[.28,y+.03,z],[.12,y+.41,z],light?.025:.043);box(g,m.edge,[.16,.095,.15],[.12,y+.43,z],'suspension upper mount');
  if(springs){rod(g,m.steel,[-.10,y+.03,z],[-.10,y+.58,z],.022);const points=[];for(let i=0;i<=144;i++){const t=i/144*Math.PI*16;points.push([-.10+Math.cos(t)*.074,y+.09+i/144*.40,z+Math.sin(t)*.074]);}tube(g,m.darkSteel,points,.015,144);cylinder(g,m.amber,.034,.32,[.12,y+.18,z]);rod(g,m.steel,[.12,y+.34,z],[.12,y+.61,z],.018);}
 }
 rod(g,m.darkSteel,[-.21,y-.07,-width*.42],[-.21,y-.07,width*.42],.023);for(const s of [-1,1])rod(g,m.darkSteel,[-.21,y-.07,s*width*.42],[0,y,s*width*.45],.023);
 if(adaptive){box(g,m.steel,[.37,.10,.34],[0,y+.23,0],'traction controller');for(const s of [-1,1])tube(g,m.rubber,[[0,y+.23,s*.12],[.19,y+.18,s*.20],[.14,y-.15,s*.42],[0,y,s*width*.45]],.015,28);}
 return g;
}
function runningGear(m,v){if(v!==2)return axle(m,{wheels:v===1,adaptive:v===6,springs:v===1});const g=axle(m,{wheels:true,light:true,springs:true});g.name='lightweight running gear';for(const x of [-.30,.30])box(g,m.paint,[.075,.09,.83],[x,.22,0],'lightweight cradle crossmember');for(const z of [-.40,.40])box(g,m.paint,[.67,.09,.07],[0,.22,z],'lightweight cradle side rail');return g;}
function suspension(m){return axle(m,{springs:true});}
function weapon(m,v){const g=group('weapon station');cylinder(g,m.edge,.37,.12,[0,.06,0]);cylinder(g,m.paint,.28,.27,[0,.25,0]);box(g,m.paint,[.60,.42,.50],[0,.49,0]);const length=[.68,1.05,1.60,.74,.65,1.14,1.04][v];const count=v===6?2:1;for(let i=0;i<count;i++){const z=count===2?(i-.5)*.44:0;box(g,m.edge,[.44,.17,.17],[.18,.70,z]);cylinder(g,m.darkSteel,v===2?.055:.032,length,[.45+length/2,.70,z],'x');cylinder(g,m.darkSteel,.07,.15,[.45+length,.70,z],'x');cylinder(g,m.rubber,.03,.003,[.53+length,.70,z],'x');}box(g,m.paint,[.34,.35,.34],[-.15,.51,-.39]);for(const x of [-.2,.2])bolts(g,m.steel,[x,.45,.27],.055,5);if([3,5].includes(v)){const sensor=createSensor(m,0);sensor.scale.setScalar(.42);sensor.position.set(-.1,.73,.29);g.add(sensor);}return g;}
function protection(m,v){const g=group('protection kit');if([3,6].includes(v)){box(g,m.paint,[1.7,.95,1.15],[0,.53,0]);box(g,m.glass,[.014,.25,.52],[.857,.70,0]);}else{const layers=v===0?5:v===5?3:1;for(let i=0;i<layers;i++){const plate=box(g,i%2?m.darkSteel:m.paint,[1.25,.07,.84],[0,.13+i*.18,0]);plate.rotation.z=.035;}if([1,2,4].includes(v)){for(let i=0;i<3;i++)box(g,m.paint,[.43,.10,.55],[(i-1)*.49,.35,0]);}}for(const x of [-.52,.52])for(const z of [-.31,.31])cylinder(g,m.steel,.018,.024,[x,.14,z],'y',.018,6);return g;}
function radio(m,v){const g=group('radio suite');const count=v===1?3:v===6?2:1;for(let i=0;i<count;i++){const x=(i-(count-1)/2)*.40;box(g,m.paint,[.35,.46,.23],[x,.29,0]);box(g,m.glass,[.20,.09,.014],[x,.40,.125]);for(let k=0;k<4;k++)cylinder(g,m.darkSteel,.026,.027,[x-.09+k*.06,.26,.135],'z');rod(g,m.darkSteel,[x+.1,.50,0],[x+.1,1.10+(v===4?.60:0)+i*.13,0],.009);tube(g,m.rubber,[[x-.08,.2,.12],[x-.20,.09,.22],[x-.15,.06,.35],[x+.17,.1,.3]],.012);}if([3,4].includes(v)){const mast=1.65+v*.12;rod(g,m.paint,[.42,.1,-.28],[.42,mast,-.28],.028);for(const s of [-1,1])rod(g,m.darkSteel,[.42,mast*.8,-.28],[.42+s*.55,.02,-.28+s*.45],.006);if(v===3){const dish=new THREE.Mesh(new THREE.SphereGeometry(.30,20,12,0,Math.PI*2,0,Math.PI/2),m.paint);dish.rotation.x=Math.PI/2;dish.position.set(.42,mast,-.28);g.add(dish);}}return g;}
function createSensor(m,v){const g=group('sensor suite');cylinder(g,m.edge,.17,.1,[0,.05,0]);rod(g,m.paint,[0,.1,0],[0,v===3?1.65:.35,0],.05);const y=v===3?1.75:.43;box(g,m.paint,[.40,.24,.22],[0,y,0]);for(const x of [-.105,.105]){cylinder(g,m.darkSteel,.078,.05,[x,y,.14],'z');cylinder(g,m.glass,.058,.012,[x,y,.172],'z');}if(v===1||v===5){box(g,m.paint,[.26,.22,.22],[.26,y-.05,0]);cylinder(g,m.glass,.075,.025,[.26,y-.05,.13],'z');}if(v===3||v===6)for(const s of [-1,1])rod(g,m.darkSteel,[0,.37,0],[s*.35,0,.25],.017);if(v===4){const helmet=new THREE.Mesh(new THREE.SphereGeometry(.28,24,12,0,Math.PI*2,0,Math.PI*.64),m.paint);helmet.position.set(0,.40,-.20);g.add(helmet);}if(v===6){for(const x of [-.5,.5]){const s=createSensor(m,3);s.scale.setScalar(.54);s.position.set(x,0,-.25);g.add(s);}}return g;}
function clearance(m){const g=group('clearance roller');box(g,m.paint,[1.1,.12,.35],[0,.48,-.1]);for(const x of [-.45,.45]){rod(g,m.edge,[x,.48,-.3],[x,.16,.32],.032);cylinder(g,m.darkSteel,.17,.13,[x,.17,.34],'x');}for(let i=0;i<7;i++){const x=-.45+i*.15;cylinder(g,m.paint,.14,.095,[x,.17,.34],'x');bolts(g,m.steel,[x+.05,.17,.34],.10,8,'x',.013);}return g;}
function accessories(m,v){if([0,5].includes(v))return createWinch(m);if([2,4].includes(v))return clearance(m);const g=group('field equipment');if(v===1){box(g,m.paint,[1.4,.14,.85],[0,.39,0]);for(const s of [-1,1]){const w=createWheel(m);w.scale.setScalar(.5);w.position.set(-.15,.30,s*.43);g.add(w);}rod(g,m.edge,[.7,.38,-.25],[1.28,.38,0],.036);rod(g,m.edge,[.7,.38,.25],[1.28,.38,0],.036);box(g,m.paint,[1.33,.40,.80],[0,.64,0]);}else{box(g,m.edge,[1.15,.06,.65],[0,.03,0]);for(let i=0;i<3;i++){box(g,m.paint,[.29,.35,.47],[-.37+i*.37,.24,0]);box(g,m.steel,[.14,.025,.018],[-.37+i*.37,.34,.25]);}if(v===6)for(const x of [-.55,.55])rod(g,m.darkSteel,[x,0,0],[x,.65,0],.025);}return g;}
function process(m,v){const g=group('engineering review');box(g,m.edge,[1.3,.065,.78],[0,.70,0]);for(const x of [-.54,.54])for(const z of [-.30,.30])rod(g,m.darkSteel,[x,0,z],[x,.69,z],.023);box(g,m.darkSteel,[.95,.68,.055],[0,1.14,-.24]);box(g,m.lamp,[.88,.61,.02],[0,1.14,-.205]);const accent=[m.paint,m.amber,m.glass][v%3];for(let i=0;i<4;i++){box(g,accent,[.11+(i+v)%4*.035,.032,.013],[-.22+(v%2)*.08,.95+i*.115,-.188]);box(g,m.edge,[.16,.016,.013],[.18,.95+i*.115,-.187]);}box(g,m.lamp,[.35,.017,.27],[-.34,.75,.18]);box(g,m.glass,[.27,.018,.19],[.36,.75,.18]);cylinder(g,m.steel,.046,.11,[.54,.80,-.09]);if([2,7,10,12,15].includes(v)){for(let i=0;i<3;i++){box(g,accent,[.09,.09,.08],[-.27+i*.27,1.50,-.19]);if(i<2)rod(g,m.darkSteel,[-.22+i*.27,1.50,-.19],[-.08+i*.27,1.50,-.19],.008);}}if([3,11,16,17,20].includes(v)){const part=engine(m,0);part.scale.setScalar(.22);part.position.set(0,.74,.08);g.add(part);}return g;}
export function createPart(id,m=materials()){
  if(!MODEL_IDS.includes(id))throw new Error('Unknown 3D asset: '+id);
  const normalized=id==='TRAIN-CAP'?'CAP-C':id,[prefix,letter]=normalized.split('-'),v=letter.charCodeAt(0)-65;
  const factories={CAP:()=>crewBay(m,v),MOB:()=>v===3?suspension(m):[1,2,6].includes(v)?runningGear(m,v):engine(m,v),FP:()=>weapon(m,v),PRO:()=>protection(m,v),COM:()=>radio(m,v),SA:()=>createSensor(m,v),ACC:()=>accessories(m,v),SE:()=>process(m,v)};
  const model=detailPart(factories[prefix](),m,prefix,v);model.name=id;model.userData={assetId:id,illustrative:true,units:'metres'};return model;
}
export function createMission(id,m=materials()){
  if(!MISSION_IDS.includes(id))throw new Error('Unknown 3D mission: '+id);
  const vehicle=missionBase(id,m);vehicle.name=id;vehicle.userData.mission=id;
  const roof=vehicle.userData.roof||2.75;
  if(id==='COMBAT'||id==='MINE'){const turret=weapon(m,id==='COMBAT'?2:1);turret.name='mission weapon';turret.position.set(-.35,roof,0);vehicle.add(turret);}
  if(id==='RECCE'){const sensor=createSensor(m,3);sensor.name='mission sensor';sensor.position.set(-1.0,roof,-.48);vehicle.add(sensor);}
  if(id==='COMMAND'){const comm=radio(m,4);comm.name='mission radio';comm.position.set(-1.5,roof,-.4);vehicle.add(comm);}
  if(id==='TROOP'){box(vehicle,m.edge,[.055,.85,1.5],[-3.46,1.75,0],'rear ramp');for(const s of [-1,1])rod(vehicle,m.steel,[-3.5,1.45,s*.52],[-3.5,2.05,s*.52],.018);}
  if(id==='MINE'){const roller=clearance(m);roller.name='mission roller';roller.scale.setScalar(1.9);roller.rotation.y=Math.PI/2;roller.position.set(4.45,.1,0);vehicle.add(roller);}
  return soften(vehicle);
}

// Purchases occupy meaningful mounting zones; processes remain decisions, not bolted-on hardware.
// A sectioned hull exposes seats/powertrain without claiming certified mechanical compatibility.
export function createConfiguration(mission,owned,m=materials()){
 const vehicle=createMission(mission,m),latest=new Map();owned.forEach(p=>{const id=typeof p==='string'?p:p.id;if(!MODEL_IDS.includes(id))throw new Error('Unknown 3D asset: '+id);if(!id.startsWith('SE-'))latest.set(id.split('-')[0],id);});
 const length=vehicle.userData.length||6.25,width=vehicle.userData.width||2.3,roof=vehicle.userData.roof||2.75;
 if(latest.has('CAP')||latest.has('MOB')){
  const shells=[];vehicle.traverse(o=>{if(o.isMesh&&o.name==='hull shell')shells.push(o);});
  for(const o of shells){o.material=o.material.clone();o.material.transparent=true;o.material.opacity=.16;o.material.depthWrite=false;}
 }
 for(const [prefix,id]of latest){
  const part=createPart(id,m);part.userData.mountedCard=id;
  if(prefix==='CAP'){part.position.set(-1.45,mission==='RECOVERY'?1.75:1.4,0);if(mission==='RECOVERY'){vehicle.getObjectByName('recovery stowage')?.removeFromParent();const crane=vehicle.getObjectByName('recovery crane');if(crane)crane.position.z=-.95;}const lid=part.getObjectByName('crew roof');if(lid){lid.visible=false;}}
  if(prefix==='MOB'){part.position.set(length/2-1.35,1.18,0);if(['MOB-B','MOB-C','MOB-D','MOB-G'].includes(id))part.position.set(0,.20,0);}
  if(prefix==='FP'){vehicle.getObjectByName('mission weapon')?.removeFromParent();part.position.set(-.35,roof,0);}
  if(prefix==='COM'){vehicle.getObjectByName('mission radio')?.removeFromParent();part.position.set(.1,1.45,-.65);}
  if(prefix==='SA'){vehicle.getObjectByName('mission sensor')?.removeFromParent();part.position.set(-2.3,roof,.5);}
  if(prefix==='PRO'){
   if(['PRO-D','PRO-G'].includes(id)){part.position.set(.4,1.42,0);}
   else{part.rotation.x=Math.PI/2;part.position.set(-1.8,1.82,width*.46);const mirror=part.clone();mirror.rotation.x=-Math.PI/2;mirror.position.z=-width*.46;vehicle.add(mirror);}
  }
  if(prefix==='ACC'){
   if(id==='ACC-B'){part.position.set(-length/2-1.43,0,0);}
   else if(['ACC-C','ACC-E'].includes(id)){vehicle.getObjectByName('mission roller')?.removeFromParent();part.scale.setScalar(1.9);part.rotation.y=Math.PI/2;part.position.set(length/2+1.05,.1,0);}
   else if(['ACC-A','ACC-F'].includes(id)){vehicle.getObjectByName('mounted WR-12')?.removeFromParent();part.rotation.y=Math.PI/2;part.position.set(length/2+.15,1.15,0);}
   else part.position.set(-length/2+.9,1.35,0);
  }
  vehicle.add(part);
 }
 vehicle.userData.configuration=true;vehicle.userData.installed=Object.fromEntries(latest);return vehicle;
}
