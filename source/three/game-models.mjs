import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createWinch,createWheel,box,cylinder,rod,tube,bolts} from '../../samples/threejs-recovery/models.mjs';
import {materials,detailPart,missionBase,soften,formedCabPanel,roundedOpening} from './realism.mjs';
export {materials};
export const MISSION_IDS=Object.freeze(['COMBAT','RECCE','TROOP','COMMAND','RECOVERY','MINE']);
export const MODEL_IDS=Object.freeze([...['ACC','CAP','COM','FP','MOB','PRO','SA'].flatMap(p=>'ABCDEFG'.split('').map(l=>`${p}-${l}`)),...'ABCDEFGHIJKLMNOPQRSTU'.split('').map(l=>`SE-${l}`),'TRAIN-CAP']);
function group(name){const g=new THREE.Group();g.name=name;return g;}
function seat(g,m,x,z){
 // The inspection anchor is the seating datum, not the floor mounting datum.
 const datum=.40,s=group('supported crew seat');s.position.set(x,datum,z);g.add(s);
 const upholstery=m.rubber.clone();upholstery.color.set('#343a32');upholstery.bumpScale=.003;upholstery.name='woven seat upholstery';
 const pad=(material,size,pos,radius,name)=>{const mesh=new THREE.Mesh(new RoundedBoxGeometry(...size,3,radius),material);mesh.position.set(...pos);mesh.name=name;s.add(mesh);return mesh;};
 for(const side of [-1,1]){
  box(s,m.darkSteel,[.49,.035,.035],[.01,.15,side*.15],'seat adjustment rail');
  for(const px of [-.16,.19]){box(s,m.edge,[.065,.04,.09],[px,.105,side*.15],'seat floor foot');cylinder(s,m.steel,.009,.015,[px,.134,side*.15],'y',.009,6);rod(s,m.steel,[px,.17,side*.15],[px-.04,.35,side*.15],.018);}
 }
 box(s,m.edge,[.44,.045,.40],[0,.37,0],'seat suspension pan');
 pad(upholstery,[.43,.11,.36],[.025,.45,0],.045,'crew seat cushion');
 for(const side of [-1,1]){const bolster=new THREE.Mesh(new THREE.CapsuleGeometry(.038,.31,6,14),upholstery);bolster.rotation.z=Math.PI/2;bolster.position.set(.015,.505,side*.17);bolster.name='cushion side bolster';s.add(bolster);}
 const shell=pad(m.edge,[.074,.49,.38],[-.215,.77,0],.025,'seat back shell');shell.rotation.z=.12;
 const back=pad(upholstery,[.095,.46,.32],[-.16,.78,0],.035,'contoured back cushion');back.rotation.z=.12;
 for(const side of [-1,1]){const bolster=pad(upholstery,[.10,.39,.075],[-.135,.77,side*.16],.030,'back side bolster');bolster.rotation.z=.12;rod(s,m.steel,[-.225,.99,side*.09],[-.225,1.08,side*.09],.009);}
 pad(upholstery,[.115,.15,.28],[-.225,1.085,0],.040,'adjustable head restraint');
 for(const y of [.66,.82])tube(s,m.edge,[[-.111-(y-.78)*.12,y,-.11],[-.108-(y-.78)*.12,y,0],[-.111-(y-.78)*.12,y,.11]],.003,16).name='back upholstery seam';
 // Restraints follow the cushion faces rather than crossing unsupported air.
 tube(s,m.darkSteel,[[-.14,.98,-.125],[-.095,.82,-.055],[-.075,.65,.05],[.005,.518,.10],[.10,.513,.115]],.012,24);
 tube(s,m.darkSteel,[[.08,.515,-.19],[.10,.518,0],[.08,.515,.19]],.013,20);
 pad(m.steel,[.035,.024,.042],[.10,.526,.065],.006,'restraint buckle');box(s,m.red,[.018,.007,.025],[.105,.542,.065],'restraint release');
 for(const side of [-1,1]){rod(s,m.edge,[-.14,.38,side*.21],[-.14,.65,side*.21],.014);pad(upholstery,[.29,.050,.055],[.005,.65,side*.225],.018,'supported armrest');}
 for(const child of s.children)child.position.y-=datum;
 return s;
}
function crewBay(m,v){
 const g=group('crew bay'),count=[6,6,4,8,5,5,4][v],length=[2.65,3.05,2.05,3.25,2.2,2.5,2.1][v],width=v===6?1.26:1.47,rows=Math.ceil(count/2),pitch=(length-.65)/rows;
 const end=length/2,half=width/2,open=v===4||v===6;
 box(g,m.paint,[length,.10,width],[0,.055,0],'crew module floor');
 for(const side of [-1,1]){box(g,m.edge,[length-.12,.055,.075],[0,.105,side*(half-.06)],'floor edge rail');box(g,m.darkSteel,[length-.12,.060,.080],[0,.035,side*(half-.13)],'module lower mounting rail');}
 for(const px of [-end+.15,end-.15])for(const side of [-1,1]){box(g,m.edge,[.19,.055,.16],[px,.023,side*(half-.10)],'module chassis mounting foot');cylinder(g,m.steel,.015,.025,[px,.065,side*(half-.10)],'y',.015,6);}
 for(let row=0;row<rows;row++){const px=(row-(rows-1)/2)*pitch;box(g,m.darkSteel,[.065,.040,width-.16],[px,.104,0],'seat row crossmember');}
 for(let i=0;i<count;i++){const row=Math.floor(i/2),single=i===count-1&&count%2;seat(g,m,(row-(rows-1)/2)*pitch,single?0:(i%2?1:-1)*width*.25);}
 if(v!==4){
  for(const px of [-end+.05,end-.05]){
   const outline=[[-half,.12],[half,.12],[half,1.12],[half-.13,1.30],[-half+.13,1.30],[-half,1.12]],hole=roundedOpening(-half+.07,.18,half-.07,1.23,.065);
   formedCabPanel(g,m.paint,outline,[hole],(z,y,d)=>[px+d,y,z]).name='hull shell';
   for(const side of [-1,1])rod(g,m.steel,[px,.24,side*(half-.04)],[px,.60,side*(half-.04)],.015).name='boarding grab handle';
  }
  for(const side of [-1,1]){
   box(g,m.edge,[length-.12,.065,.075],[0,1.28,side*(half-.10)],'roof perimeter rail');
   if(!open){
    const high=v===5?1.10:.62,outline=[[-end,.13],[end,.13],[end-.06,high],[-end+.06,high]],holes=[];
    if(v===5)for(const px of [-length*.25,length*.25])holes.push(roundedOpening(px-.23,.79,px+.23,1.00,.035));
    formedCabPanel(g,m.paint,outline,holes,(x,y,d)=>[x,y,side*(half-d)]).name='hull shell';
    if(v===5)for(const px of [-length*.25,length*.25]){box(g,m.rubber,[.48,.25,.016],[px,.895,side*(half+.008)],'window gasket');box(g,m.glass,[.43,.20,.017],[px,.895,side*(half+.018)],'protected crew glazing');}
    for(const px of [-end+.12,end-.12])for(const y of [.22,high-.08])cylinder(g,m.steel,.009,.018,[px,y,side*(half+.028)],'z',.009,6);
   }else rod(g,m.steel,[-end+.05,.56,side*half],[end-.05,.56,side*half],.019).name='open module side rail';
  }
  for(const px of [-end+.17,end-.17])box(g,m.edge,[.065,.055,width-.14],[px,1.28,0],'roof crossmember');
  if(!open){for(const side of [-1,1])box(g,m.paint,[length-.16,.047,width*.22],[0,1.31,side*width*.34],'hull shell');box(g,m.paint,[length-.16,.045,width*.30],[0,1.32,0],'hull shell');}
 }else{
  for(const side of [-1,1])for(const px of [-end+.15,end-.15]){box(g,m.steel,[.08,.07,.075],[px,.13,side*(half-.10)],'removable pallet latch');rod(g,m.darkSteel,[px-.035,.18,side*(half-.10)],[px+.035,.18,side*(half-.10)],.012);}
 }
 box(g,m.edge,[.15,.05,width-.18],[end+.03,.09,0],'boarding threshold');
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
function protection(m,v){
 const g=group('protection kit');
 const sheet=(outline,z,material=m.paint,name='formed protection panel')=>{const mesh=formedCabPanel(g,material,outline,[],(x,y,d)=>[x,y,z+d]);mesh.name=name;return mesh;};
 const fasten=(x,y,z)=>{cylinder(g,m.steel,.016,.035,[x,y,z],'z',.016,6).name='protection attachment bolt';cylinder(g,m.darkSteel,.024,.008,[x,y,z-.015],'z').name='attachment washer';};
 if([3,6].includes(v)){
  const wide=v===3?.67:.77,length=v===3?1.70:2.30,back=-length/2,front=length/2,height=v===3?1.38:1.30;
  box(g,m.edge,[length,.09,wide*2],[0,.045,0],'reinforced floor');
  const optical=m.glass.clone();optical.transparent=true;optical.opacity=.58;optical.metalness=0;optical.depthWrite=false;
  for(const s of [-1,1]){
   const outline=[[back,.09],[front,.09],[front-.25,height-.08],[front-.42,height],[back+.07,height]];
   const hole=roundedOpening(back+.20,.85,front-.48,height-.13,.045);
   formedCabPanel(g,m.paint,outline,[hole],(x,y,d)=>[x,y,s*(wide-d)]);
   const pane=formedCabPanel(g,optical,[[back+.22,.87],[front-.50,.87],[front-.50,height-.15],[back+.22,height-.15]],[],(x,y,d)=>[x,y,s*(wide+.008-d*.2)]);pane.name='protected glazing';
   for(const x of [back+.13,0,front-.38])rod(g,m.edge,[x,.10,s*(wide-.08)],[x,height-.07,s*(wide-.08)],.026).name='interior shell rib';
   for(const x of [back+.12,front-.20])fasten(x,.20,s*(wide+.02));
  }
  const slope=y=>front-(y-.09)*.25/(height-.17);
  formedCabPanel(g,m.paint,[[-wide,.09],[wide,.09],[wide,height-.08],[-wide,height-.08]],[roundedOpening(-wide+.16,.85,wide-.16,height-.18)],(z,y,d)=>[slope(y)-d,y,z]);
  const windshield=formedCabPanel(g,optical,[[-wide+.18,.87],[wide-.18,.87],[wide-.18,height-.20],[-wide+.18,height-.20]],[],(z,y,d)=>[slope(y)+.008-d*.2,y,z]);windshield.name='protected windshield';
  box(g,m.paint,[length-.39,.07,wide*2],[back+(length-.39)/2,height-.02,0],'formed cell roof');
  box(g,m.paint,[.18,.09,wide*2],[front-.33,height-.055,0],'folded windshield header');
  // Rear aperture remains open for the two-seat inspection view and boarding.
  formedCabPanel(g,m.paint,[[-wide,.09],[wide,.09],[wide,height],[-wide,height]],[roundedOpening(-wide+.10,.17,wide-.10,height-.11)],(z,y,d)=>[back+d,y,z]);
  if(v===3){for(const s of [-1,1]){seat(g,m,-.10,s*.32);rod(g,m.darkSteel,[-.29,1.08,s*.48],[.02,.47,s*.20],.013).name='crew cell restraint';}box(g,m.edge,[.18,.055,1.10],[back-.08,.12,0],'boarding threshold');}
  else for(const x of [back+.26,front-.48]){rod(g,m.edge,[x,height-.06,-wide+.07],[x,height-.06,wide-.07],.027).name='roof hoop';}
  for(const s of [-1,1])for(const y of [.35,1.02])box(g,m.darkSteel,[.045,.10,.06],[back+.025,y,s*(wide-.055)],'rear aperture hinge');
 }else if(v===5){
  // Two joined inclined plates form the V; the deep centre is the underside.
  for(const s of [-1,1]){
   formedCabPanel(g,m.paint,[[-.92,.02],[.92,.02],[1.04,.18],[.90,.48],[-.90,.48],[-1.04,.18]],[],(x,a,d)=>[x,.12+a*.42+d,s*a*1.55]).name='V underbody plate';
   box(g,m.edge,[1.82,.075,.08],[0,.39,s*.67],'underbody mounting rail');
   for(const x of [-.65,.65]){rod(g,m.darkSteel,[x,.30,s*.58],[x,.44,s*.58],.032).name='energy absorbing mount';cylinder(g,m.rubber,.047,.075,[x,.41,s*.58]);cylinder(g,m.steel,.018,.055,[x,.455,s*.58],'y',.018,6).name='underbody attachment bolt';}
  }
  rod(g,m.edge,[-.94,.12,0],[.94,.12,0],.025).name='V keel joint';
 }else{
  const count=v===4?3:v===2?3:1,width=count===1?1.55:.57;
  for(const y of [.18,.79])box(g,m.edge,[count===1?1.50:1.93,.055,.06],[0,y,-.10],'protection mounting rail');
  for(let i=0;i<count;i++){
   const x=(i-(count-1)/2)*.66,outline=[[x-width/2,.12],[x+width/2-.08,.12],[x+width/2,.23],[x+width/2,.77],[x+width/2-.10,.90],[x-width/2+.08,.90],[x-width/2,.80]];
   if(v===0){sheet(outline,0,m.darkSteel,'inner support plate');sheet(outline,.18,m.paint,'outer spaced plate');}
   else if(v===1){const ceramic=m.paint.clone();ceramic.color.set('#c5c0a9');ceramic.metalness=0;ceramic.roughness=.94;sheet(outline,0,m.darkSteel,'composite backing');sheet(outline,.045,ceramic,'ceramic core');sheet(outline,.09,m.paint,'composite outer plate');}
   else{const panel=sheet(outline,.055,m.paint,v===2?'light formed panel':'replaceable side skirt');if(v===2){const pos=panel.geometry.attributes.position;for(let j=0;j<pos.count;j++)pos.setZ(j,pos.getZ(j)+.032*Math.sin((pos.getY(j)-.12)/.78*Math.PI));panel.geometry.computeVertexNormals();}}
   const faceZ=v===0?.235:v===1?.145:.115;
   for(const dx of [-width*.36,width*.36])for(const y of [.23,.77]){rod(g,m.darkSteel,[x+dx,y,-.09],[x+dx,y,faceZ],.015).name='panel standoff';fasten(x+dx,y,faceZ);}
  }
 }
 return g;
}
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
   if(id==='PRO-D'){part.position.set(-length/2-.78,.94,0);box(vehicle,m.edge,[1.10,.12,1.16],[-length/2-.44,.92,0],'crew cell chassis extension');}
   else if(id==='PRO-G'){part.position.set(-1.3,1.40,0);}
   else if(id==='PRO-F'){part.position.set(0,.55,0);}
   else{part.position.set(-1.60,1.36,width*.46);const mirror=part.clone();mirror.rotation.y=Math.PI;mirror.position.z=-width*.46;vehicle.add(mirror);}
  }
  if(prefix==='ACC'){
   if(id==='ACC-B'){part.position.set(-length/2-1.43,0,0);}
   else if(['ACC-C','ACC-E'].includes(id)){vehicle.getObjectByName('mission roller')?.removeFromParent();part.scale.setScalar(1.9);part.rotation.y=Math.PI/2;part.position.set(length/2+1.05,.1,0);}
   else if(['ACC-A','ACC-F'].includes(id)){vehicle.getObjectByName('mounted WR-12')?.removeFromParent();part.rotation.y=Math.PI/2;part.position.set(length/2+.15,1.15,0);box(vehicle,m.edge,[.80,.27,1.30],[length/2+.10,1.015,0],'winch chassis crossmember');for(const s of [-1,1])rod(vehicle,m.darkSteel,[length/2-.30,.92,s*.44],[length/2+.38,1.12,s*.44],.035).name='winch mounting brace';}
   else part.position.set(-length/2+.9,1.35,0);
  }
  vehicle.add(part);
 }
 vehicle.userData.configuration=true;vehicle.userData.installed=Object.fromEntries(latest);return vehicle;
}
