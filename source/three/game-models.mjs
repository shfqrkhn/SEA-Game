import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {createWinch,createWheel,box,cylinder,rod,tube,bolts} from '../../samples/threejs-recovery/models.mjs';
import {materials,detailPart,missionBase,soften,formedCabPanel,roundedOpening} from './realism.mjs';
export {materials};
export const MISSION_IDS=Object.freeze(['COMBAT','RECCE','TROOP','COMMAND','RECOVERY','MINE']);
export const MODEL_IDS=Object.freeze([...['ACC','CAP','COM','FP','MOB','PRO','SA'].flatMap(p=>'ABCDEFG'.split('').map(l=>`${p}-${l}`)),...'ABCDEFGHIJKLMNOPQRSTU'.split('').map(l=>`SE-${l}`),'TRAIN-CAP']);
function group(name){const g=new THREE.Group();g.name=name;return g;}
function seat(g,m,x,z,reinforced=false){
 // The inspection anchor is the seating datum, not the floor mounting datum.
 const datum=.40,s=group('supported crew seat');s.position.set(x,datum,z);g.add(s);
 const upholstery=m.upholstery.clone();upholstery.name='woven seat upholstery';
 const pad=(material,size,pos,radius,name)=>{const mesh=new THREE.Mesh(new RoundedBoxGeometry(...size,3,radius),material);mesh.position.set(...pos);mesh.name=name;s.add(mesh);return mesh;};
 if(reinforced){
  // Floor-connected, broad suspension cassette. The rails meet the floor
  // insert at .121 m and the upper platform meets the existing seat pan.
  box(s,m.darkSteel,[.48,.055,.36],[.01,.148,0],'crew seat floor mounting cassette');
  for(const side of [-1,1]){
   box(s,m.edge,[.49,.035,.070],[.01,.128,side*.145],'crew seat bolted floor rail');
   for(const px of [-.17,.19])cylinder(s,m.steel,.012,.023,[px,.157,side*.145],'y',.012,6).name='seat rail retaining fastener';
   box(s,m.edge,[.36,.18,.035],[0,.25,side*.145],'seat suspension side cheek');
   for(const px of [-.13,.13]){cylinder(s,m.steel,.021,.044,[px,.25,side*.165],'z',.021,12).name='suspension pivot';}
  }
  box(s,m.darkSteel,[.30,.14,.22],[0,.25,0],'seat suspension bellows');
  for(const y of [.197,.232,.267,.302])box(s,m.rubber,[.325,.018,.25],[0,y,0],'suspension bellows convolution');
  box(s,m.edge,[.41,.047,.33],[0,.338,0],'suspension upper cradle');
  for(const side of [-1,1]){
   box(s,m.edge,[.075,.28,.055],[-.22,.515,side*.135],'connected seat back support');
   cylinder(s,m.steel,.038,.052,[-.21,.40,side*.19],'z',.038,20).name='seat back recline housing';
  }
 }else for(const side of [-1,1]){
  box(s,m.darkSteel,[.49,.035,.035],[.01,.15,side*.15],'seat adjustment rail');
  for(const px of [-.16,.19]){box(s,m.edge,[.065,.04,.09],[px,.105,side*.15],'seat floor foot');cylinder(s,m.steel,.009,.015,[px,.134,side*.15],'y',.009,6);rod(s,m.steel,[px,.17,side*.15],[px-.04,.35,side*.15],.018);}
 }
 box(s,m.edge,[.44,.045,.40],[0,.37,0],'seat suspension pan');
 pad(upholstery,[.43,.11,.36],[.025,.45,0],.045,'crew seat cushion');
 for(const side of [-1,1]){const bolster=new THREE.Mesh(new THREE.CapsuleGeometry(.038,.31,6,14),upholstery);bolster.rotation.z=Math.PI/2;bolster.position.set(.015,.505,side*.17);bolster.name='cushion side bolster';s.add(bolster);}
 const shell=pad(m.edge,[.074,.49,.38],[-.215,.77,0],.025,'seat back shell');shell.rotation.z=.12;
 const back=pad(upholstery,[.095,.46,.32],[-.16,.78,0],.035,'contoured back cushion');back.rotation.z=.12;
 if(reinforced){
  // The softer inset is physically on the cushion face, with a restrained
  // stitched-channel pattern rather than painted stripes floating in space.
  const inset=upholstery.clone();inset.color.multiplyScalar(.82);inset.roughness=.93;inset.name='crew seat woven center insert';
  const center=pad(inset,[.018,.335,.205],[-.108,.782,0],.008,'crew seat contoured back insert');center.rotation.z=.12;
  pad(inset,[.295,.018,.235],[.045,.508,0],.008,'crew seat cushion center insert');
  for(const side of [-1,1]){
   tube(s,m.darkSteel,[[-.080,.632,side*.065],[-.098,.782,side*.065],[-.117,.932,side*.065]],.0018,18).name='seat back stitched channel';
   tube(s,m.darkSteel,[[-.087,.520,side*.075],[.045,.520,side*.075],[.175,.520,side*.075]],.0018,18).name='seat cushion stitched channel';
  }
 }
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
 const g=group('inline diesel power pack'),compact=v===5,cast=m.castSteel||m.darkSteel,pressed=m.pressedSteel||m.steel;
 const rounded=(material,size,pos,radius,name)=>{const o=new THREE.Mesh(new RoundedBoxGeometry(...size,3,radius),material);o.position.set(...pos);o.name=name;o.castShadow=o.receiveShadow=true;g.add(o);return o;};
 const section=(outline,length,x,material,name,holes=[])=>{
  const shape=new THREE.Shape();outline.forEach(([z,y],i)=>i?shape.lineTo(z,y):shape.moveTo(z,y));shape.closePath();
  for(const outline of holes){const hole=new THREE.Path();outline.forEach(([z,y],i)=>i?hole.lineTo(z,y):hole.moveTo(z,y));hole.closePath();shape.holes.push(hole);}
  const geometry=new THREE.ExtrudeGeometry(shape,{depth:length,steps:1,bevelEnabled:true,bevelSize:.009,bevelThickness:.007,bevelSegments:3});
  const p=geometry.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,x+p.getZ(i),p.getY(i),p.getX(i));geometry.computeVertexNormals();
  const materialClone=material.clone();materialClone.side=THREE.DoubleSide;const o=new THREE.Mesh(geometry,materialClone);o.name=name;o.castShadow=o.receiveShadow=true;g.add(o);return o;
 };
 const pipe=(material,points,r,name)=>{const o=tube(g,material,points,r,32);o.name=name;return o;};
 const flange=(x,y,z,axis='z',radius=.042)=>{cylinder(g,cast,radius,.020,[x,y,z],axis,radius,24).name='manifold seated port flange';};
 for(const z of [-.38,.38])box(g,m.edge,[2.17,.09,.085],[-.20,.11,z],'power pack skid rail');
 for(const x of [-1.08,.77])box(g,m.edge,[.10,.07,v===4?1.35:.85],[x,.13,v===4?-.24:0],'skid crossmember');
 // Original faceted foundry sections, with a bulged crankcase and sloping sump.
 section([[-.22,.31],[-.26,.40],[-.25,.58],[-.205,.70],[.205,.70],[.25,.58],[.26,.40],[.22,.31]],.96,-.48,m.paint,'cast crankcase with tapered shoulders',[[[-.18,.345],[.18,.345],[.21,.41],[.20,.58],[.165,.677],[-.165,.677],[-.20,.58],[-.21,.41]]]);
 section([[-.215,.315],[-.215,.265],[-.145,.195],[.145,.195],[.215,.265],[.215,.315]],.85,-.425,cast,'pressed deep oil sump',[[[-.185,.298],[.185,.298],[.128,.215],[-.128,.215]]]);
 rounded(pressed,[.91,.025,.46],[0,.317,0],.010,'continuous sump sealing flange');
 cylinder(g,m.steel,.018,.026,[.27,.198,0],'y',.018,6).name='seated sump drain plug';
 rounded(m.paint,[1.00,.175,.49],[0,.7875,0],.025,'cast cylinder head with port band');
 rounded(m.darkSteel,[1.018,.019,.455],[0,.881,0],.006,'rocker cover continuous gasket');
 rounded(m.edge,[.99,.126,.438],[0,.948,0],.030,'formed crowned rocker cover');
 for(const s of [-1,1])rounded(m.edge,[.92,.019,.020],[0,.976,s*.204],.007,'rocker cover pressed perimeter return');
 for(const x of [-.40,-.24,-.08,.08,.24,.40])rounded(m.edge,[.055,.013,.31],[x,1.011,0],.006,'rocker cover pressed transverse stiffener');
 cylinder(g,m.darkSteel,.037,.029,[.29,1.024,0],'y',.037,24).name='rocker cover seated oil filler cap';
 for(const x of [-.31,.31]){const eye=new THREE.Mesh(new THREE.TorusGeometry(.024,.007,8,20),m.steel);eye.position.set(x,.983,.216);eye.name='head lifting eye seated tab';g.add(eye);box(g,m.edge,[.055,.035,.020],[x,.955,.211],'head lifting eye foot');}
 for(const x of [-.40,-.24,-.08,.08,.24,.40]){
  for(const s of [-1,1]){
   section([[s*.237,.365],[s*.272,.405],[s*.257,.62],[s*.218,.69],[s*.211,.69],[s*.237,.40]],.032,x-.016,m.paint,'cast crankcase buttress');
   rounded(cast,[.122,.16,.024],[x,.535,s*.254],.018,'recessed crankcase service cover');
   for(const y of [.480,.590])cylinder(g,m.steel,.007,.012,[x,y,s*.272],'z',.007,6).name='service cover captive fastener';
   cylinder(g,m.darkSteel,.009,.022,[x,.902,s*.19],'y',.009,6).name='rocker cover seated fastener';
  }
  flange(x,.790,.255);flange(x,.800,-.255);
  pipe(cast,[[x,.790,.25],[x,.775,.305],[x+.028,.735,.375]],.033,'exhaust branch into collector');
  pipe(m.paint,[[x,.800,-.25],[x,.815,-.300],[x,.825,-.345]],.036,'intake runner into plenum');
 }
 rounded(m.paint,[.98,.115,.105],[0,.835,-.355],.045,'continuous intake plenum');
 pipe(cast,[[-.44,.735,.375],[0,.735,.375],[.43,.735,.375]],.046,'continuous cast exhaust collector');
 // Turbo housings have cast scroll volumes, a centre bearing and connected ports.
 const scroll=(x,material,name)=>{
  cylinder(g,material,.104,.09,[x,.755,.49],'x',.117,32).name=name+' backing';
  const points=[];for(let i=0;i<=40;i++){const a=i/40*Math.PI*2;const r=.094+.026*i/40;points.push([x,.755+Math.cos(a)*r,.49+Math.sin(a)*r]);}
  pipe(material,points,.037,name+' scroll');
 };
 scroll(-.205,cast,'turbine housing');scroll(-.365,pressed,'compressor housing');
 cylinder(g,m.steel,.057,.12,[-.285,.755,.49],'x',.057,24).name='turbo centre bearing';
 pipe(cast,[[-.06,.735,.375],[-.16,.790,.398],[-.205,.848,.46]],.043,'collector to turbine inlet');
 pipe(cast,[[-.205,.760,.612],[-.205,.91,.65],[-.205,1.075,.65]],.046,'supported exhaust riser');
 cylinder(g,m.steel,.053,.012,[-.205,1.052,.65],'y',.053,24).name='exhaust riser seated clamp';
 rod(g,m.edge,[-.205,.89,.65],[-.205,.85,.25],.013).name='exhaust riser support bracket';
 pipe(m.steel,[[-.365,.895,.49],[-.10,1.10,.44],[.32,1.09,.30],[.40,1.02,-.16],[.35,.835,-.355]],.055,'compressor delivery to intake plenum');
 for(const [x,y,z]of [[-.10,1.10,.44],[.32,1.09,.30]])cylinder(g,m.darkSteel,.063,.043,[x,y,z],'x',.063,24).name='charge pipe coupling';
 cylinder(g,m.darkSteel,.122,.44,[-.085,1.18,-.39],'x',.122,32).name='air cleaner cylindrical shell';
 for(const x of [-.315,.145])cylinder(g,m.edge,.130,.018,[x,1.18,-.39],'x',.130,32).name='air cleaner retained end cap';
 for(const x of [-.22,.055]){cylinder(g,m.steel,.125,.018,[x,1.18,-.39],'x',.125,32).name='air cleaner mounting band';rod(g,m.edge,[x,1.07,-.39],[x,.87,-.355],.018).name='air cleaner plenum bracket';}
 pipe(m.rubber,[[-.315,1.18,-.39],[-.59,1.16,-.37],[-.61,.96,.23],[-.52,.755,.49],[-.412,.755,.49]],.061,'air cleaner outlet to compressor inlet');
 pipe(m.steel,[[-.275,.745,.49],[-.27,.56,.34],[-.27,.39,.24]],.010,'turbo oil return into crankcase');
 // Short bell housing meets an irregular, serviceable gear case rather than a cone.
 casing(g,cast,[[0,-.025],[.23,-.025],[.275,0],[.280,.09],[.260,.17],[.225,.24],[0,.24]],[-.48,.425,0],'x','cast flywheel and transmission casing');
 rounded(cast,[.405,.36,.40],[-.915,.505,0],.045,'transmission main gear case');
 rounded(cast,[.37,.10,.32],[-.895,.313,0],.025,'transmission lower oil pan');
 rounded(pressed,[.33,.024,.34],[-.905,.699,0],.009,'transmission bolted top service closure');
 for(const s of [-1,1]){
  rounded(cast,[.33,.235,.026],[-.915,.507,s*.207],.025,'transmission removable side cover');
  for(const x of [-1.065,-.905,-.765])for(const y of [.410,.610])cylinder(g,m.steel,.009,.023,[x,y,s*.224],'z',.009,6).name='transmission side cover seated fastener';
  for(const y of [.370,.445,.535,.630])box(g,cast,[.36,.017,.026],[-.915,y,s*.197],'transmission longitudinal casting rib');
 }
 for(const x of [-1.085,-.965,-.845,-.745]){
  box(g,cast,[.020,.34,.028],[x,.505,-.192],'transmission vertical casting web');box(g,cast,[.020,.34,.028],[x,.505,.192],'transmission vertical casting web');
  for(const s of [-1,1])cylinder(g,m.steel,.008,.017,[x,.714,s*.125],'y',.008,6).name='transmission top cover seated fastener';
 }
 for(const x of [-.515,-.715,-1.115]){const y=x>-.74?.425:.51;cylinder(g,pressed,x>-.74?.275:.17,.020,[x,y,0],'x',x>-.74?.275:.17,40).name='transmission machined split flange';bolts(g,m.steel,[x-.015,y,0],x>-.74?.245:.145,8,'x',.009);}
 cylinder(g,cast,.108,.090,[-1.14,.51,0],'x',.108,32).name='transmission rear output bearing housing';
 cylinder(g,m.steel,.083,.08,[-1.19,.51,0],'x').name='transmission output coupling';
 cylinder(g,m.steel,.012,.017,[-.89,.708,0],'y',.012,6).name='transmission service filler plug';
 // Cooling pack: fin passages, folded frame, an open fan shroud and driven hub.
 rounded(m.darkSteel,[.085,.82,.69],[.80,.665,0],.008,'radiator dark fin substrate');
 for(const z of [-.389,.389])rounded(pressed,[.135,.88,.075],[.80,.665,z],.018,'radiator formed side tank');
 for(const y of [.215,1.115])rounded(pressed,[.135,.080,.84],[.80,y,0],.017,'radiator folded header');
 for(let i=0;i<36;i++)box(g,pressed,[.012,.80,.005],[.849,.665,-.333+i*.019],'radiator vertical cooling passage');
 for(let i=0;i<28;i++)box(g,cast,[.008,.005,.68],[.856,.273+i*.029,0],'radiator transverse fin fold');
 for(const z of [-.388,.388]){box(g,m.edge,[.17,.070,.13],[.80,.178,z],'radiator bolted skid foot');for(const y of [.30,1.04])cylinder(g,m.steel,.010,.019,[.879,y,z],'x',.010,6).name='radiator frame fastener';}
 const shroud=new THREE.Mesh(new THREE.TorusGeometry(.291,.019,8,48),m.darkSteel);shroud.rotation.y=Math.PI/2;shroud.position.set(.691,.665,0);shroud.name='open circular cooling fan shroud';g.add(shroud);
 for(const s of [-1,1])rod(g,m.darkSteel,[.70,.665,s*.291],[.754,.665,s*.34],.023).name='shroud to radiator support';
 cylinder(g,m.darkSteel,.063,.10,[.651,.665,0],'x',.063,32).name='cooling fan driven hub';
 for(let i=0;i<7;i++){
  const a=i*Math.PI*2/7,shape=new THREE.Shape();shape.moveTo(.045,-.025);shape.quadraticCurveTo(.17,-.055,.267,-.01);shape.lineTo(.26,.040);shape.quadraticCurveTo(.16,.023,.045,.025);shape.closePath();
  const geo=new THREE.ExtrudeGeometry(shape,{depth:.013,bevelEnabled:true,bevelSize:.003,bevelThickness:.002,bevelSegments:2});const p=geo.attributes.position;
  for(let j=0;j<p.count;j++){const r=p.getX(j),t=p.getY(j),d=p.getZ(j);p.setXYZ(j,.647+d+r*.035,.665+Math.cos(a)*r-Math.sin(a)*t,Math.sin(a)*r+Math.cos(a)*t);}geo.computeVertexNormals();
  const material=m.darkSteel.clone();material.side=THREE.DoubleSide;const blade=new THREE.Mesh(geo,material);blade.name='swept cooling fan blade';blade.castShadow=true;g.add(blade);
 }
 rounded(m.paint,[.075,.38,.34],[.516,.515,0],.035,'front timing gear housing');
 rod(g,cast,[.516,.665,0],[.652,.665,0],.041).name='water pump and fan shaft';
 // Both hoses terminate on the tank's actual inlet axis. A metal neck crosses
 // the tank face, with the clamp outside it on the straight hose segment.
 pipe(m.rubber,[[.43,.84,.19],[.59,.96,.29],[.64,.965,.389],[.72,.965,.389],[.80,.965,.389]],.040,'upper coolant hose seated into side tank');
 pipe(m.rubber,[[.48,.40,.16],[.60,.26,.29],[.64,.285,.389],[.72,.285,.389],[.80,.285,.389]],.037,'lower coolant hose seated into side tank');
 for(const y of [.965,.285]){
  cylinder(g,pressed,.047,.090,[.7275,y,.389],'x',.047,24).name='radiator coolant inlet neck';
  cylinder(g,m.steel,.049,.024,[.705,y,.389],'x',.049,24).name='coolant hose seated clamp';
 }
 cylinder(g,pressed,.080,.135,[.493,.462,-.245],'x',.080,28).name='alternator ventilated body';
 for(let i=0;i<10;i++){const a=i*Math.PI/5;rod(g,cast,[.44,.462+Math.cos(a)*.078,-.245+Math.sin(a)*.078],[.546,.462+Math.cos(a)*.078,-.245+Math.sin(a)*.078],.008).name='alternator longitudinal cooling rib';}
 box(g,m.edge,[.16,.05,.16],[.435,.365,-.205],'alternator seated mounting bracket');
 const pulley=(y,z,r)=>{cylinder(g,m.darkSteel,r,.029,[.575,y,z],'x',r,32).name='accessory drive pulley';cylinder(g,m.steel,r*.34,.034,[.579,y,z],'x',r*.34,24).name='pulley seated hub';};
 rod(g,cast,[.540,.425,0],[.580,.425,0],.043).name='crank pulley shaft into timing housing';
 pulley(.425,0,.106);pulley(.665,0,.075);pulley(.462,-.245,.064);
 pipe(m.rubber,[[.595,.322,0],[.595,.340,-.195],[.595,.430,-.310],[.595,.515,-.272],[.595,.739,-.024],[.595,.714,.056],[.595,.431,.106],[.595,.322,0]],.009,'continuous accessory drive belt');
 rounded(cast,[.16,.09,.17],[.11,.57,-.285],.020,'oil filter connected housing');
 cylinder(g,m.lamp,.059,.19,[.11,.434,-.285],'y',.059,28).name='replaceable oil filter canister';
 cylinder(g,m.steel,.062,.017,[.11,.529,-.285],'y',.062,24).name='oil filter sealing rim';
 rod(g,m.steel,[.34,.39,.24],[.34,.68,.32],.005).name='oil dipstick seated guide';cylinder(g,m.amber,.020,.009,[.34,.690,.325],'z',.020,16).name='dipstick service handle';
 for(const x of [-.34,.31])for(const s of [-1,1]){
  box(g,m.edge,[.14,.030,.13],[x,.166,s*.38],'engine skid mounting shoe');cylinder(g,m.rubber,.048,.072,[x,.217,s*.38],'y',.048,24).name='engine mounting isolator';
  section([[s*.235,.36],[s*.42,.258],[s*.42,.25],[s*.33,.25],[s*.235,.29]],.115,x-.0575,m.paint,'cast engine mounting ear');
  cylinder(g,m.steel,.009,.043,[x,.266,s*.38],'y',.009,6).name='engine mount seated retaining bolt';
 }
 // Original illustrative inline-six internals share the external bore pitch.
 // They are static construction anatomy, not a simulated or certified engine.
 const internalStart=g.children.length;
 cylinder(g,m.steel,.023,1.025,[0,.425,0],'x',.023,32).name='engine crankshaft main axis';
 for(let i=0;i<6;i++){
  const x=-.40+i*.16,phase=[0,Math.PI*2/3,Math.PI*4/3,Math.PI*4/3,Math.PI*2/3,0][i],py=.425+Math.cos(phase)*.031,pz=Math.sin(phase)*.031,pistonY=.605+Math.cos(phase)*.031;
  const bore=new THREE.Shape();bore.absarc(0,0,.065,0,Math.PI*2,false);const hole=new THREE.Path();hole.absarc(0,0,.058,0,Math.PI*2,true);bore.holes.push(hole);
  const geometry=new THREE.ExtrudeGeometry(bore,{depth:.255,steps:1,bevelEnabled:false,curveSegments:24}),p=geometry.attributes.position;
  for(let n=0;n<p.count;n++)p.setXYZ(n,x+p.getX(n),.448+p.getZ(n),p.getY(n));geometry.computeVertexNormals();
  const finish=pressed.clone();finish.side=THREE.DoubleSide;const sleeve=new THREE.Mesh(geometry,finish);sleeve.name='engine cylinder liner';sleeve.userData.inspectionKey='engine:block';g.add(sleeve);
  cylinder(g,m.steel,.054,.066,[x,pistonY,0],'y',.054,32).name='engine piston crown and skirt';
  for(const y of [pistonY+.018,pistonY+.027])cylinder(g,m.darkSteel,.055,.004,[x,y,0],'y',.055,32).name='piston compression ring';
  cylinder(g,m.steel,.014,.102,[x,pistonY-.014,0],'z',.014,24).name='piston seated wrist pin';
  rod(g,pressed,[x,py,pz],[x,pistonY-.014,0],.013).name='engine connecting rod';
  cylinder(g,m.steel,.019,.105,[x,py,pz],'x',.019,24).name='crankshaft offset crankpin';
  for(const dx of [-.055,.055]){
   rod(g,cast,[x+dx,.425,0],[x+dx,py,pz],.035).name='crankshaft connected web';
   cylinder(g,cast,.049,.023,[x+dx,.425-.016*Math.cos(phase),-.016*Math.sin(phase)],'x',.049,24).name='crankshaft counterweight';
  }
 }
 for(const x of [-.48,-.32,-.16,0,.16,.32,.48]){
  cylinder(g,pressed,.036,.030,[x,.425,0],'x',.036,24).name='crankshaft main bearing journal';
  box(g,cast,[.035,.055,.17],[x,.3815,0],'crankshaft bearing cap');
 }
 cylinder(g,m.steel,.215,.035,[-.525,.425,0],'x',.215,40).name='engine crankshaft seated flywheel';
 cylinder(g,m.steel,.024,.59,[-.8175,.425,0],'x',.024,24).name='transmission connected input shaft';
 cylinder(g,m.steel,.027,.405,[-.9875,.51,0],'x',.027,24).name='transmission connected output shaft';
 for(const [y,phase]of [[.425,0],[.51,Math.PI/16]]){
  cylinder(g,pressed,.034,.055,[-.885,y,0],'x',.034,32).name='transmission illustrative meshing gear';
  for(let i=0;i<16;i++){const a=i*Math.PI/8+phase,o=box(g,pressed,[.055,.014,.011],[-.885,y+Math.cos(a)*.039,Math.sin(a)*.039],'transmission gear seated tooth');o.rotation.x=a;}
 }
 for(const o of g.children.slice(internalStart))o.userData.inspectionKey??='engine:rotating';
 const headInternalStart=g.children.length;
 rod(g,m.steel,[-.47,.933,0],[.47,.933,0],.012).name='head supported rocker shaft';
 for(const x of [-.40,-.24,-.08,.08,.24,.40]){
  box(g,cast,[.028,.041,.054],[x,.912,0],'rocker shaft seated pedestal');
  for(const s of [-1,1]){
   cylinder(g,m.steel,.007,.16,[x,.841,s*.080],'y',.007,16).name='head valve stem';
   cylinder(g,m.steel,.025,.009,[x,.765,s*.080],'y',.025,24).name='head valve seated disc';
   const spring=[];for(let i=0;i<=40;i++){const a=i/40*Math.PI*10;spring.push([x+Math.cos(a)*.013,.866+i/40*.040,s*.080+Math.sin(a)*.013]);}
   pipe(m.darkSteel,spring,.003,'valve retained compression spring');
   rod(g,pressed,[x,.934,0],[x,.923,s*.080],.012).name='rocker arm on shaft and valve';
  }
 }
 for(const o of g.children.slice(headInternalStart))o.userData.inspectionKey='engine:head';
 // Common rail mounts on the block. Each steel feed ends at a seated injector.
 pipe(m.steel,[[-.42,.65,-.288],[.42,.65,-.288]],.012,'supported fuel common rail');
 for(const x of [-.34,.31])rod(g,m.edge,[x,.65,-.288],[x,.60,-.240],.010).name='fuel rail block support';
 rounded(cast,[.11,.14,.10],[.33,.583,-.265],.018,'seated fuel metering pump');
 pipe(m.rubber,[[.11,.570,-.285],[.22,.565,-.30],[.33,.583,-.265]],.011,'filter housing to fuel metering pump');
 pipe(m.steel,[[.33,.583,-.265],[.35,.65,-.288]],.011,'fuel metering pump to common rail');
 for(const x of [-.40,-.24,-.08,.08,.24,.40]){
  cylinder(g,cast,.016,.034,[x,.881,-.075],'y',.016,20).name='head seated fuel injector';
  pipe(m.steel,[[x,.65,-.288],[x,.73,-.29],[x,.890,-.19],[x,.895,-.075]],.005,'common rail feed into injector');
 }
 if(v===4){
  rounded(m.paint,[.76,.68,.40],[-.54,.535,-.78],.05,'long range fuel reservoir');
  for(const x of [-.79,-.29]){box(g,m.darkSteel,[.04,.70,.42],[x,.535,-.78],'fuel tank restraint');box(g,m.edge,[.18,.060,.45],[x,.170,-.78],'fuel tank supported saddle');}
  cylinder(g,m.steel,.045,.040,[-.54,.889,-.78],'y',.045,24).name='fuel reservoir filler cap';
  pipe(m.rubber,[[-.28,.25,-.62],[-.18,.33,-.50],[.11,.50,-.35],[.11,.57,-.285]],.014,'reservoir fuel supply seated at filter housing');
 }
 // Explicit semantic islands retain all authored coordinates. Inspection owns
 // their temporary separation; renderer code cannot rewrite engine anatomy.
 const islands=new Map(),enclosures=new Set(['cast crankcase with tapered shoulders','pressed deep oil sump','continuous sump sealing flange','cast cylinder head with port band','formed crowned rocker cover','cast flywheel and transmission casing','transmission main gear case','transmission lower oil pan','transmission removable side cover','transmission bolted top service closure','transmission machined split flange']);
 for(const o of [...g.children]){
  if(enclosures.has(o.name))o.userData.cutawayShell=true;
  let key=o.userData.inspectionKey;
  if(!key){
   const n=o.name;
   key=/transmission/.test(n)?'engine:transmission':/sump/.test(n)?'engine:sump':/rocker|head lifting|head seated fuel/.test(n)?'engine:head':/cylinder head|manifold seated port|intake runner|exhaust branch/.test(n)?'engine:head':/radiator|cooling fan|shroud|coolant|water pump/.test(n)?'engine:cooling':/air cleaner|compressor housing|compressor delivery|charge pipe/.test(n)?'engine:intake':/turbine|turbo|exhaust/.test(n)?'engine:exhaust':/skid|mounting shoe|mounting isolator|mount seated/.test(n)?'engine:skid':/fuel|filter|dipstick|reservoir|alternator|pulley|accessory|timing/.test(n)?'engine:services':'engine:block';
  }
  if(!islands.has(key)){const island=group(key);island.userData.inspectionKey=key;islands.set(key,island);g.add(island);}
  islands.get(key).add(o);
 }
 if(compact)g.scale.setScalar(.78);return g;
}
function axle(m,{wheels=false,light=false,adaptive=false,springs=false,widthOverride=null}={}){
 const g=group('connected drive axle'),width=widthOverride??(light?1.3:1.65),y=.44,r=light?.13:.19;
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
function weapon(m,v){
 // Original static exterior illustration. These surfaces describe enclosure,
 // mounting and access relationships, not working weapon mechanisms or ratings.
 const g=group('weapon station'),base=group('station mounting ring'),body=group('station shield and cradle'),barrel=group('station barrel exterior');
 body.position.y=.5;barrel.position.set(.45,.70,0);g.add(base,body,barrel);
 const profile=[[.405,-.01],[.51,-.01],[.51,.035],[.47,.055],[.43,.19],[.405,.20],[.34,.20],[.34,.15],[.395,.02],[.405,-.01]].map(p=>new THREE.Vector2(...p));
 const ring=new THREE.Mesh(new THREE.LatheGeometry(profile,64),m.paint);ring.name='station hollow mounting ring';ring.castShadow=ring.receiveShadow=true;base.add(ring);ring.userData.cutawayShell=true;
 for(let i=0;i<12;i++){const a=i*Math.PI/6,x=Math.cos(a)*.475,z=Math.sin(a)*.475;cylinder(base,m.steel,.013,.020,[x,.045,z],'y',.013,6).name='station flange seated fastener';}
 const upper=new THREE.Mesh(new THREE.TorusGeometry(.373,.017,8,64),m.darkSteel);upper.rotation.x=Math.PI/2;upper.position.y=.20;upper.name='station ring bearing seal';base.add(upper);
 // Two bearing strips leave a true center passage through the ring.
 for(const s of [-1,1])box(body,m.castSteel,[.60,.060,.14],[0,-.27,s*.265],'station cradle bearing strip');
 const width=v===6?.53:v===2?.45:.36,open=v===4;
 const sideOutline=[[-.42,-.24],[.34,-.24],[.38,.12],[.18,.47],[-.22,.52],[-.46,.19]];
 for(const s of [-1,1]){
  // The inner cast cheeks carry the trunnions; the separated outer skins
  // remain serviceable covers, exposing the whole load path in cutaway.
  formedCabPanel(body,m.castSteel,[[-.24,-.24],[.26,-.24],[.26,.30],[.11,.37],[-.20,.30]],[],(x,y,t)=>[x,y,s*(.22+t)]).name='station structural trunnion cheek';
  const pivot=cylinder(body,m.steel,.085,.105,[.10,.20,s*.265],'z',.085,40);pivot.name='station seated trunnion pivot';
  const cap=cylinder(body,m.edge,.108,.026,[.10,.20,s*.33],'z',.108,40);cap.name='station retained trunnion cap';
  bolts(body,m.steel,[.10,.20,s*.347],.077,6,'z',.009);
  if(!open){
   const cover=formedCabPanel(body,m.paint,sideOutline,[],(x,y,t)=>[x,y,s*(width+t)]);cover.name='station formed side shield';cover.userData.cutawayShell=true;
   // Brackets bridge the cover to the actual cheek rather than placing a
   // free-standing side box next to a cylinder.
   for(const x of [-.20,.23])box(body,m.edge,[.06,.065,width-.245],[x,-.14,s*(width+.245)/2],'station shield retaining standoff');
   for(const [x,y]of [[-.34,-.16],[.25,-.15],[.20,.16],[-.19,.43],[-.40,.13]])cylinder(body,m.steel,.008,.014,[x,y,s*(width+.052)],'z',.008,6).name='station shield seated screw';
  }
 }
 box(body,m.castSteel,[.43,.075,.47],[.025,-.195,0],'station connected cradle crossmember');
 // Enclosed receiver silhouette and inspection-visible supported sliding
 // carriage are illustrative inert solids; no internals or firing animation.
 const carriage=new THREE.Mesh(new RoundedBoxGeometry(.53,.17,.33,3,.035),m.darkSteel);carriage.position.set(.035,.20,0);carriage.name='station supported inert carriage';body.add(carriage);
 for(const s of [-1,1])rod(body,m.steel,[-.23,.105,s*.125],[.30,.105,s*.125],.020).name='station carriage support rail';
 for(const s of [-1,1])box(body,m.castSteel,[.12,.280,.06],[.10,-.025,s*.125],'station connected carriage saddle');
 const count=v===6?2:1,length=[.68,1.05,1.60,.74,.65,1.14,1.04][v],radius=v===2?.055:.032;
 for(let i=0;i<count;i++){
  const z=count===2?(i-.5)*.26:0;
  const collar=cylinder(body,m.castSteel,.102,.25,[.32,.20,z],'x',.092,40);collar.name='station seated mantlet collar';
  const barrelProfile=[[radius*.64,-.02],[radius,-.02],[radius*.94,length-.02],[radius*.64,length-.02],[radius*.64,-.02]].map(p=>new THREE.Vector2(...p));
  const sleeve=new THREE.Mesh(new THREE.LatheGeometry(barrelProfile,48),m.darkSteel);sleeve.rotation.z=-Math.PI/2;sleeve.position.z=z;sleeve.name='station continuous barrel exterior';barrel.add(sleeve);
  for(const x of [.015,.105])cylinder(barrel,m.edge,radius+.012,.025,[x,0,z],'x',radius+.012,40).name='station barrel retaining band';
  // Annular muzzle has an actual visible opening; a recessed dark disk merely
  // limits the view into this non-operational exterior demonstration.
  const muzzleProfile=[[radius*.64,-.025],[radius+.012,-.025],[radius+.012,.035],[radius*.64,.035],[radius*.64,-.025]].map(p=>new THREE.Vector2(...p));
  const muzzle=new THREE.Mesh(new THREE.LatheGeometry(muzzleProfile,40),m.darkSteel);muzzle.rotation.z=-Math.PI/2;muzzle.position.set(length-.02,0,z);muzzle.name='station open muzzle exterior';barrel.add(muzzle);
  cylinder(barrel,m.rubber,radius*.62,.003,[length-.12,0,z],'x',radius*.62,40).name='station recessed inert bore backing';
 }
 if(!open){
  const holes=[];for(let i=0;i<count;i++){const z=count===2?(i-.5)*.26:0;const h=new THREE.Path();h.absarc(z,.20,.108,0,Math.PI*2,true);holes.push(h);}
  const shield=formedCabPanel(body,m.paint,[[-width,-.24],[width,-.24],[width,.47],[-width,.47]],holes,(z,y,t)=>[.38-Math.max(0,y-.12)*.20/.35-t,y,z]);shield.name='station front shield with mantlet aperture';shield.userData.cutawayShell=true;
  const top=formedCabPanel(body,m.paint,[[-.22,-width],[.18,-width],[.18,width],[-.22,width]],[],(x,z,t)=>[x,.52-(x+.22)*.125-t,z]);top.name='station sloped service roof';top.userData.cutawayShell=true;
  const rearRoof=formedCabPanel(body,m.paint,[[-.46,-width],[-.22,-width],[-.22,width],[-.46,width]],[],(x,z,t)=>[x,.19+(x+.46)*.33/.24-t,z]);rearRoof.name='station sloped rear shoulder';rearRoof.userData.cutawayShell=true;
  const back=formedCabPanel(body,m.paint,[[-width,-.24],[width,-.24],[width,.19],[-width,.19]],[],(z,y,t)=>[-.46+t,y,z]);back.name='station removable rear cover';back.userData.cutawayShell=true;
  // Seated access cover with a supported handle and hinge knuckles.
  box(body,m.edge,[.023,.20,.25],[-.474,.08,0],'station rear service hatch').userData.cutawayShell=true;
  for(const z of [-.075,.075])rod(body,m.steel,[-.475,.08,z],[-.50,.08,z],.010).name='station hatch handle post';
  rod(body,m.steel,[-.50,.08,-.075],[-.50,.08,.075],.010).name='station service hatch handle';
 }
 // Supported electrical control enclosure and strain-relieved harness replace
 // the former floating side block, loose cable and loose ammunition decoration.
 box(body,m.castSteel,[.10,.12,.15],[-.28,-.16,-width-.06],'station control enclosure bracket');
 const controls=new THREE.Mesh(new RoundedBoxGeometry(.25,.24,.18,3,.018),m.paint);controls.position.set(-.28,-.02,-width-.075);controls.name='station supported control enclosure';body.add(controls);
 box(body,m.edge,[.20,.18,.015],[-.28,-.02,-width-.172],'station control service cover');
 for(const x of [-.355,-.205])for(const y of [-.08,.04])cylinder(body,m.steel,.007,.014,[x,y,-width-.183],'z',.007,6).name='station control cover fastener';
 tube(body,m.rubber,[[-.28,-.10,-width-.075],[-.28,-.17,-width-.075],[-.20,-.24,-width-.02],[-.14,-.25,-.265]],.014,24).name='station supported control harness';
 if([3,5,6].includes(v)){
  box(body,m.edge,[.17,.095,.17],[-.09,.505,0],'station optical package seated foot');
  const housing=new THREE.Mesh(new RoundedBoxGeometry(.22,.21,.23,3,.028),m.paint);housing.position.set(-.09,.64,0);housing.name='station optical housing';body.add(housing);
  cylinder(body,m.edge,.078,.035,[.034,.64,0],'x',.078,40).name='station optical retaining bezel';
  cylinder(body,m.glass,.058,.008,[.055,.64,0],'x',.058,40).name='station optical lens';
 }
 return g;
}
function protection(m,v){
 const g=group('protection kit');
 const sheet=(outline,z,material=m.paint,name='formed protection panel')=>{const mesh=formedCabPanel(g,material,outline,[],(x,y,d)=>[x,y,z+d]);mesh.name=name;return mesh;};
 const fasten=(x,y,z)=>{cylinder(g,m.steel,.016,.035,[x,y,z],'z',.016,6).name='protection attachment bolt';cylinder(g,m.darkSteel,.024,.008,[x,y,z-.015],'z').name='attachment washer';};
 if([3,6].includes(v)){
  const wide=v===3?.67:.77,length=v===3?1.70:2.30,back=-length/2,front=length/2,height=v===3?1.38:1.30;
  if(v===3){
   // A deck cassette carries both suspension rail bolt lines into continuous
   // longitudinal sills. Its original four shoes remain visible in card view.
   box(g,m.edge,[length,.024,wide*2],[0,.083,0],'crew cell cassette deck');
   for(const side of [-1,1]){
    box(g,m.darkSteel,[length,.12,.12],[0,.015,side*.55],'crew cell longitudinal floor sill');
    for(const x of [-.61,.61]){
     box(g,m.darkSteel,[.16,.080,.12],[x,-.080,side*.55],'crew cell attachment pedestal');
     cylinder(g,m.rubber,.067,.035,[x,-.1375,side*.55],'y',.067,24).name='crew cell mounting isolator';
     box(g,m.steel,[.20,.025,.18],[x,-.1675,side*.55],'crew cell attachment shoe');
     for(const dx of [-.065,.065])cylinder(g,m.steel,.010,.030,[x+dx,-.146,side*.55],'y',.010,6).name='crew cell shoe retaining bolt';
    }
   }
   for(const x of [-.27,.09])box(g,m.darkSteel,[.085,.10,1.14],[x,.025,0],'crew cell seat load crossmember');
   for(const x of [back+.065,front-.065])box(g,m.darkSteel,[.13,.10,1.14],[x,.025,0],'crew cell cassette end member');
  }else box(g,m.edge,[length,.09,wide*2],[0,.045,0],'reinforced floor');
  // Inward inclined walls and a chamfered rear frame replace the box silhouette.
  const shoulder=height-.22,roofWide=wide-.13;
  const shellZ=y=>y<=shoulder?wide-.065*(y-.09)/(shoulder-.09):wide-.065-.065*Math.min(1,(y-shoulder)/(height-shoulder));
  const liner=m.paint.clone();liner.color.set('#a0a58e');liner.metalness=.04;liner.roughness=.86;liner.name='crew cell interior lining';
  const frame=m.edge.clone();frame.color.set('#414b3e');frame.roughness=.70;
  const enclosure=(mesh,component)=>{mesh.name='hull shell';mesh.userData.component=component;return mesh;};
  // Window cassettes use one rounded contour and real stepped returns. The
  // small section bevel belongs to a retaining frame, not the shell's fold.
  const cellPanel=(parent,material,outline,holes,place,name,depth=.018)=>{
   const shape=new THREE.Shape();outline.forEach(([a,b],i)=>i?shape.lineTo(a,b):shape.moveTo(a,b));shape.closePath();shape.holes.push(...holes);
   const geometry=new THREE.ExtrudeGeometry(shape,{depth,steps:1,curveSegments:12,bevelEnabled:true,bevelSize:.0025,bevelThickness:.002,bevelSegments:3});
   const p=geometry.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,...place(p.getX(i),p.getY(i),p.getZ(i)));geometry.computeVertexNormals();
   const finish=material.clone();finish.side=THREE.DoubleSide;const mesh=new THREE.Mesh(geometry,finish);mesh.name=name;mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  };
  const windowCassette=(bounds,place,paneName)=>{
   const [a,b,c,d]=bounds,contour=roundedOpening(a,b,c,d,.045),outline=contour.getPoints(12).map(p=>[p.x,p.y]);
   enclosure(cellPanel(g,m.paint,roundedOpening(a-.052,b-.052,c+.052,d+.052,.075).getPoints(12).map(p=>[p.x,p.y]),[contour.clone()],(u,y,t)=>place(u,y,.015+t),'window outer retaining bezel'),'window outer retaining bezel');
   // Concentric rounded corners keep a continuous 18 mm visible gasket land
   // inside the bezel. Its front lip clears the shell bevel; the full return
   // reaches back around the recessed pane instead of floating above it.
   cellPanel(g,m.rubber,roundedOpening(a-.012,b-.012,c+.012,d+.012,.057).getPoints(12).map(p=>[p.x,p.y]),[roundedOpening(a+.018,b+.018,c-.018,d-.018,.027)],(u,y,t)=>place(u,y,-.020+t),'window compression gasket',.056);
   const pane=cellPanel(g,optical,outline,[],(u,y,t)=>place(u,y,-.014-t*.20),paneName,.012);pane.castShadow=false;
   enclosure(cellPanel(g,frame,roundedOpening(a-.042,b-.042,c+.042,d+.042,.070).getPoints(12).map(p=>[p.x,p.y]),[contour.clone()],(u,y,t)=>place(u,y,-.057-t),'window interior retaining frame'),'window interior retaining frame');
  };
  const optical=m.glass.clone();optical.transparent=true;optical.opacity=.58;optical.metalness=0;optical.depthWrite=false;
  // Visible fasteners are seated against an actual plate with a washer land.
  // This is a depiction of serviceable construction, not a ballistic design.
  const faceBolt=(parent,place,name='cell flange retaining fastener')=>{
   const center=new THREE.Vector3(...place(0)),axis=new THREE.Vector3(...place(.01)).sub(center).normalize();
   const washer=cylinder(parent,m.steel,.020,.004,center.clone().addScaledVector(axis,.002).toArray(),'y',.020,24);washer.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),axis);washer.name='cell flange seated washer';
   const head=cylinder(parent,m.darkSteel,.012,.009,center.clone().addScaledVector(axis,.0085).toArray(),'y',.012,6);head.quaternion.copy(washer.quaternion);head.name=name;
  };
  for(const s of [-1,1]){
   const outline=[[back,.09],[front,.09],[front-.25,height-.08],[front-.42,height],[back+.07,height]];
   const hole=roundedOpening(back+.20,.85,front-.48,height-.13,.045);
   formedCabPanel(g,m.paint,outline,[hole],(x,y,d)=>[x,y,s*(shellZ(y)-d)]);
   enclosure(formedCabPanel(g,liner,[[back+.09,.17],[front-.07,.17],[front-.30,height-.13],[back+.09,height-.09]],[hole],(x,y,d)=>[x,y,s*(shellZ(y)-.067-d*.25)]),'interior liner');
   windowCassette([back+.20,.85,front-.48,height-.13],(x,y,t)=>[x,y,s*(shellZ(y)+t)],'protected glazing');
   for(const x of [back+.13,front-.38])tube(g,frame,[[x,.13,s*(shellZ(.13)-.065)],[x,shoulder,s*(shellZ(shoulder)-.065)],[x,height-.065,s*(shellZ(height-.065)-.065)]],.025,16).name='interior shell rib';
   // Broad access plates establish panel construction before small fittings.
   enclosure(formedCabPanel(g,frame,[[back+.20,.23],[front-.20,.23],[front-.25,.71],[back+.20,.71]],[],(x,y,d)=>[x,y,s*(shellZ(y)+.014+d*.20)]),'lower service panel recess');
   enclosure(formedCabPanel(g,m.paint,[[back+.23,.26],[front-.24,.26],[front-.28,.68],[back+.23,.68]],[],(x,y,d)=>[x,y,s*(shellZ(y)+.030+d*.20)]),'lower formed service panel');
   tube(g,m.darkSteel,[[back+.14,.17,s*(shellZ(.17)-.09)],[back+.14,.72,s*(shellZ(.72)-.09)],[front-.32,.72,s*(shellZ(.72)-.09)]],.012,24).name='secured interior cable conduit';
   for(const x of [back+.26,front-.36])formedCabPanel(g,liner,[[x-.05,.30],[x+.05,.30],[x+.05,.60],[x-.05,.60]],[],(px,y,d)=>[px,y,s*(shellZ(y)-.08+d*.25)]).name='interior panel retaining strip';
   for(const x of [back+.12,front-.20])fasten(x,.20,s*(wide+.02));
   // A folded sill joins the floor and side skin; it is not a painted stripe.
   cellPanel(g,m.paint,[[back,.085],[front-.03,.085],[front-.03,.19],[back,.19]],[],(x,y,t)=>[x,y,s*(wide-.026+t)],'formed crew cell lower sill',.030);
   if(v===3){
    // A folded lower cover is retained to the sill and inner load path, while
    // its visible shallow perimeter is separated from the surrounding skin.
    for(const x of [back+.28,-.10,front-.32])for(const y of [.285,.655])faceBolt(g,t=>[x,y,s*(shellZ(y)+.040+t)],'service cover retaining fastener');
    for(const x of [back+.18,-.10,front-.32])faceBolt(g,t=>[x,.14,s*(wide+.006+t)],'lower sill flange retaining fastener');
    // Broad hat-section ribs return into the floor, not rods hung beside it.
    for(const x of [back+.14,front-.39]){
     const ribOutline=[[x-.036,.135],[x+.036,.135],[x+.036,shoulder-.015],[x+.025,height-.092],[x-.025,height-.092],[x-.036,shoulder-.015]];
     cellPanel(g,frame,ribOutline,[],(px,y,t)=>[px,y,s*(shellZ(y)-.087-t)],'crew cell formed interior pillar',.033);
     box(g,frame,[.13,.028,.16],[x,.135,s*(wide-.115)],'interior pillar foot flange');
    }
   }
  }
  const slope=y=>front-(y-.09)*.25/(height-.17);
  const frontHole=roundedOpening(-wide+.16,.85,wide-.16,height-.18);
  formedCabPanel(g,m.paint,[[-wide,.09],[wide,.09],[wide,height-.08],[-wide,height-.08]],[frontHole],(z,y,d)=>[slope(y)-d,y,z*shellZ(y)/wide]);
  windowCassette([-wide+.16,.85,wide-.16,height-.18],(z,y,t)=>[slope(y)+t,y,z*shellZ(y)/wide],'protected windshield');
  if(v===3){
   // A real recessed lower service closure gives the front its own connected
   // plate hierarchy instead of a single undifferentiated painted rectangle.
   const closure=[[-wide+.16,.255],[wide-.16,.255],[wide-.20,.68],[-wide+.20,.68]];
   enclosure(cellPanel(g,frame,closure,[],(z,y,t)=>[slope(y)+.009+t*.25,y,z*shellZ(y)/wide],'front closure perimeter backing',.018),'front closure perimeter backing');
   enclosure(cellPanel(g,m.paint,[[-wide+.18,.275],[wide-.18,.275],[wide-.22,.66],[-wide+.22,.66]],[],(z,y,t)=>[slope(y)+.018+t*.25,y,z*shellZ(y)/wide],'formed front service closure',.018),'formed front service closure');
   for(const z of [-wide+.235,wide-.235])for(const y of [.315,.62])faceBolt(g,t=>[slope(y)+.0225+t,y,z*shellZ(y)/wide],'front closure retaining fastener');
  }
  const roofOutline=[[back+.07,-roofWide],[front-.42,-roofWide],[front-.32,-roofWide+.10],[front-.32,roofWide-.10],[front-.42,roofWide],[back+.07,roofWide],[back,roofWide-.075],[back,-roofWide+.075]];
  // Extrude an authored transverse roof section so its broad crown survives
  // triangulation; moving only a flat polygon's edge vertices cannot do this.
  const roofSection=[];for(let i=0;i<=16;i++){const z=-roofWide+i*roofWide/8;roofSection.push([z,height-.015+.018*(1-(z/roofWide)**2)]);}for(let i=16;i>=0;i--){const [z,y]=roofSection[i];roofSection.push([z,y-.028]);}
  enclosure(cellPanel(g,m.paint,roofSection,[],(z,y,d)=>[back+.07+d,y,z],'crowned formed cell roof',length-.43),'formed cell roof');
  enclosure(formedCabPanel(g,liner,roofOutline,[],(x,z,d)=>[x,height-.061-d*.25,z]),'insulated roof liner');
  for(const s of [-1,1]){
   // Formed roof shoulder caps join the side sheet to the top skin. Their
   // broad cross section supplies a visible structural edge, not a thin rod.
   const capOutline=[[back+.065,shoulder+.075],[front-.36,shoulder+.075],[front-.42,height-.018],[back+.065,height-.018]];
   enclosure(formedCabPanel(g,m.paint,capOutline,[],(x,y,d)=>[x,y,s*(shellZ(y)+.012+d*.35)]),'formed roof shoulder cap');
   box(g,frame,[length-.50,.075,.10],[-.16,height-.056,s*(roofWide-.050)],'roof perimeter box stiffener');
   box(g,m.paint,[length-.54,.036,.095],[-.16,height+.024,s*(roofWide-.06)],'roof shoulder mounting flange');
   for(const px of [back+.19,front-.49]){
    box(g,frame,[.13,.035,.14],[px,height+.049,s*(roofWide-.085)],'roof flange attachment pad');
    cylinder(g,m.steel,.014,.017,[px,height+.075,s*(roofWide-.085)],'y',.014,6).name='roof attachment fastener';
   }
  }
  for(const px of [back+.16,front-.45])box(g,frame,[.075,.063,roofWide*2-.09],[px,height-.056,0],'connected roof transverse box member');
  box(g,m.paint,[.18,.09,roofWide*2],[front-.33,height-.055,0],'folded windshield header');
  // The rear boarding aperture has its door stowed open clear of the seats.
  const aperture=[[-wide+.105,.18],[wide-.105,.18],[wide-.105,height-.31],[roofWide-.075,height-.13],[-roofWide+.075,height-.13],[-wide+.105,height-.31]];
  const doorHole=new THREE.Path();aperture.forEach(([z,y],i)=>i?doorHole.lineTo(z,y):doorHole.moveTo(z,y));doorHole.closePath();
  formedCabPanel(g,m.paint,[[-wide,.09],[wide,.09],[wide,height-.26],[roofWide,height],[-roofWide,height],[-wide,height-.26]],[doorHole],(z,y,d)=>[back+d,y,z]);
  if(v===3){
   // One continuous six-sided flange shares the boarding cutout exactly.
   // Its return depth ties the skin to the structural ring behind the seal.
   const perimeter=[[-wide+.018,.108],[wide-.018,.108],[wide-.018,height-.267],[roofWide-.012,height-.018],[-roofWide+.012,height-.018],[-wide+.018,height-.267]];
   enclosure(cellPanel(g,m.paint,perimeter,[doorHole.clone()],(z,y,t)=>[back-.026+t,y,z],'boarding aperture bolted perimeter flange',.042),'boarding aperture bolted perimeter flange');
   for(const side of [-1,1])for(const y of [.26,.52,.80,1.035])faceBolt(g,t=>[back-.026-t,y,side*(wide-.052)],'boarding perimeter retaining fastener');
   for(const z of [-.40,-.20,0,.20,.40])faceBolt(g,t=>[back-.026-t,.13,z],'boarding lower flange retaining fastener');
   for(const z of [-.36,-.18,0,.18,.36])faceBolt(g,t=>[back-.026-t,height-.062,z],'boarding header flange retaining fastener');
  }
  // Return flange and a rear structural ring make the aperture visibly deep.
  // All six members share endpoints; the seal stays on the exact opening.
  for(let i=0;i<aperture.length;i++){
   const [za,ya]=aperture[i],[zb,yb]=aperture[(i+1)%aperture.length];
   const mid=new THREE.Vector3(back+.077,(ya+yb)/2,(za+zb)/2);
   const vector=new THREE.Vector3(0,yb-ya,zb-za),member=box(g,frame,[.095,vector.length()+.028,.052],mid.toArray(),'rear aperture structural ring');
   member.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),vector.normalize());
  }
  // Straight gasket lengths follow the aperture edges exactly; rounded joints
  // connect the lengths without a spline bowing away from the chamfered frame.
  const rearSeal=group('rear aperture weather seal');g.add(rearSeal);
  const sealPoints=aperture.map(([z,y])=>[back-.007,y,z]);
  for(let i=0;i<sealPoints.length;i++){
   rod(rearSeal,m.rubber,sealPoints[i],sealPoints[(i+1)%sealPoints.length],.018).name='aperture gasket edge';
   const joint=new THREE.Mesh(new THREE.SphereGeometry(.018,12,8),m.rubber);joint.position.set(...sealPoints[i]);joint.name='aperture gasket corner';joint.castShadow=true;joint.receiveShadow=true;rearSeal.add(joint);
  }
  for(const s of [-1,1]){
   tube(g,frame,[[back+.059,.15,s*(wide-.065)],[back+.059,height-.29,s*(wide-.065)],[back+.059,height-.065,s*(roofWide-.045)]],.027,24).name='rear door jamb reinforcement';
   tube(g,m.steel,[[back-.022,.46,s*(wide-.04)],[back-.09,.46,s*(wide-.04)],[back-.09,.77,s*(wide-.04)],[back-.022,.77,s*(wide-.04)]],.016,24).name='connected boarding grab handle';
  }
  for(const z of [-.25,.25])box(g,m.lamp,[.17,.024,.075],[back+.24,height-.087,z],'interior overhead light');
  box(g,m.darkSteel,[length-.20,.026,wide*2-.17],[0,.108,0],'non slip crew floor insert');
  if(v===3){
   const door=group('open crew cell boarding door'),doorWidth=2*(wide-.105),hingeZ=-wide+.105;
   door.position.set(back-.014,0,hingeZ);door.rotation.y=-Math.PI*.56;g.add(door);
   const doorOutline=[[0,.19],[doorWidth,.19],[doorWidth,height-.32],[doorWidth-.105,height-.14],[.105,height-.14],[0,height-.32]];
   const doorRecess=[[.105,.30],[doorWidth-.105,.30],[doorWidth-.105,height-.37],[doorWidth-.18,height-.25],[.18,height-.25],[.105,height-.37]],recessPath=new THREE.Path();doorRecess.forEach(([z,y],i)=>i?recessPath.lineTo(z,y):recessPath.moveTo(z,y));recessPath.closePath();
   enclosure(cellPanel(door,m.paint,doorOutline,[recessPath],(z,y,d)=>[-.045+d,y,z],'open boarding door outer skin',.025),'open boarding door outer skin');
   enclosure(formedCabPanel(door,liner,[[.065,.26],[doorWidth-.065,.26],[doorWidth-.065,height-.35],[doorWidth-.15,height-.21],[.15,height-.21],[.065,height-.35]],[],(z,y,d)=>[.024+d*.25,y,z]),'open boarding door interior liner');
   // Recessed broad face, perimeter returns, and joined inner ribs make the
   // door readable from either side while preserving its fixed hinge axis.
   for(let i=0;i<doorRecess.length;i++){
    const [za,ya]=doorRecess[i],[zb,yb]=doorRecess[(i+1)%doorRecess.length],direction=new THREE.Vector3(0,yb-ya,zb-za);
    const edge=box(door,m.paint,[.048,direction.length()+.005,.017],[-.020,(ya+yb)/2,(za+zb)/2],'door pressed recess return');edge.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());enclosure(edge,'door pressed recess return');
   }
   enclosure(cellPanel(door,m.paint,doorRecess,[],(z,y,d)=>[.004+d*.40,y,z],'boarding door formed face panel',.018),'boarding door formed face panel');
   for(const z of [.060,doorWidth-.060])box(door,frame,[.070,height-.49,.065],[.017,(height+.03)/2,z],'door perimeter upright return');
   for(const y of [.245,height-.235])box(door,frame,[.070,.065,doorWidth-.13],[.017,y,doorWidth/2],'door transverse return');
   box(door,frame,[.050,.050,doorWidth-.18],[.062,.49,doorWidth/2],'door inner reinforcing rib');
   for(const y of [.38,.96]){
    cylinder(g,m.steel,.029,.13,[back-.016,y,hingeZ],'y',.029,20).name='boarding door hinge pin';
    box(g,frame,[.08,.10,.065],[back+.007,y,hingeZ-.025],'boarding hinge fixed leaf');
    box(door,frame,[.07,.10,.09],[.012,y,.035],'boarding hinge moving leaf');
    // Alternating knuckles touch both leaves on the common hinge axis.
    for(const dy of [-.047,0,.047])cylinder(door,frame,.035,.038,[0,y+dy,0],'y',.035,24).name='boarding hinge barrel knuckle';
    for(const dy of [-.062,.062])cylinder(g,m.darkSteel,.038,.013,[back-.014,y+dy,hingeZ],'y',.038,24).name='boarding hinge pin end collar';
    for(const dy of [-.029,.029]){
     faceBolt(g,t=>[back-.033-t,y+dy,hingeZ-.046],'fixed hinge leaf retaining fastener');
     faceBolt(door,t=>[.047+t,y+dy,.061],'moving hinge leaf retaining fastener');
    }
   }
   tube(door,m.steel,[[.061,.64,doorWidth-.14],[.105,.64,doorWidth-.14],[.105,.80,doorWidth-.14],[.061,.80,doorWidth-.14]],.013,20).name='door interior pull handle';
   box(door,m.darkSteel,[.080,.105,.070],[.064,.70,doorWidth-.08],'boarding door latch housing');
   // Vertical multipoint latch link is supported by guides on the inner
   // return. The exterior lever shares its spindle with this gearbox.
   const latchZ=doorWidth-.085;
   for(const y of [.40,1.025]){
    box(door,frame,[.048,.07,.060],[.075,y,latchZ],'door latch rod guide');
    cylinder(door,m.steel,.009,Math.abs(y-.70),[.094,(y+.70)/2,latchZ],'y',.009,16).name='guided boarding latch linkage';
    box(door,m.steel,[.026,.045,.055],[.086,y,latchZ],'boarding latch cam');
   }
   for(const z of [.16,doorWidth-.16])for(const y of [.30,height-.29])faceBolt(door,t=>[.030+t,y,z],'door liner retaining fastener');
   box(door,frame,[.018,.23,.10],[-.070,.70,doorWidth-.08],'exterior latch backing plate');
   cylinder(door,m.steel,.021,.055,[-.061,.70,doorWidth-.08],'x',.021,16).name='external latch spindle';
   box(door,m.steel,[.022,.040,.135],[-.092,.70,doorWidth-.13],'exterior boarding latch lever');
   for(const y of [.62,.78])cylinder(door,m.steel,.009,.018,[-.079,y,doorWidth-.08],'x',.009,6).name='latch backing plate fastener';
   const restraintEnd=new THREE.Vector3(.035,.42,.24).applyEuler(door.rotation).add(door.position);
   rod(g,frame,[back+.015,.42,hingeZ+.10],restraintEnd.toArray(),.013).name='open door restraint arm';
   box(g,m.darkSteel,[.07,.11,.045],[back+.025,.70,wide-.105],'boarding latch keeper');
  }
  if(v===3){for(const s of [-1,1])seat(g,m,-.10,s*.32,true);box(g,m.edge,[.18,.055,1.10],[back-.08,.12,0],'boarding threshold');box(g,m.paint,[.055,.13,1.14],[back-.015,.060,0],'formed boarding sill return');}
  else for(const x of [back+.26,front-.48]){rod(g,m.edge,[x,height-.06,-roofWide+.07],[x,height-.06,roofWide-.07],.027).name='roof hoop';}
  if(v!==3)for(const s of [-1,1])for(const y of [.35,1.02])box(g,m.darkSteel,[.045,.10,.06],[back+.025,y,s*(wide-.055)],'rear aperture hinge');
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
function clearance(m){const g=group('clearance roller');box(g,m.paint,[1.1,.12,.35],[0,.48,-.1]);for(const x of [-.45,.45]){rod(g,m.edge,[x,.48,-.3],[x,.16,.32],.032).name='clearance roller trailing arm';cylinder(g,m.darkSteel,.17,.13,[x,.17,.34],'x');}for(let i=0;i<7;i++){const x=-.45+i*.15;cylinder(g,m.paint,.14,.095,[x,.17,.34],'x');bolts(g,m.steel,[x+.05,.17,.34],.10,8,'x',.013);}return g;}
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
  if(id==='COMBAT')combatCrewBasket(vehicle,m,roof);
  if(id==='RECCE'){const sensor=createSensor(m,3);sensor.name='mission sensor';sensor.position.set(-1.0,roof,-.48);vehicle.add(sensor);}
  if(id==='COMMAND'){const comm=radio(m,4);comm.name='mission radio';comm.position.set(-1.5,roof,-.4);vehicle.add(comm);}
  if(['TROOP','COMMAND','RECCE'].includes(id))missionInterior(vehicle,m,id);
  if(id==='TROOP')troopRamp(vehicle,m);
  if(id==='MINE'){const roller=clearance(m);roller.name='mission roller';roller.scale.setScalar(1.9);roller.rotation.y=Math.PI/2;roller.position.set(4.45,.1,0);vehicle.add(roller);mineRollerMount(vehicle,m,roller);}
  return soften(vehicle);
}

function missionInterior(vehicle,m,id){
 // Original role furniture within the existing canonical carrier. Manufacturer
 // references establish roles/high-roof architecture, never these inferred
 // dimensions, physical protection, occupancy ratings or equipment performance.
 const rear=-vehicle.userData.length/2,half=vehicle.userData.width/2,end=vehicle.userData.length/2-2.65,ceiling=id==='COMMAND'?2.63:2.31;
 const cabin=group(id.toLowerCase()+' mission interior');cabin.position.y=1.410;vehicle.add(cabin);
 const lo=rear+.18,length=end-lo,center=(lo+end)/2,innerHalf=half*.75-.035;
 box(cabin,m.edge,[length,.050,innerHalf*2],[center,0,0],'mission supported rear floor');
 box(cabin,m.rubber,[length-.06,.004,innerHalf*2-.04],[center,.027,0],'mission nonslip rear floor insert');
 for(const x of [lo+.16,center,end-.16])for(const s of [-1,1])box(cabin,m.castSteel,[.18,.065,.18],[x,-.025,s*half*.53],'mission floor hull bearing shoe');
 const liner=m.paint.clone();liner.color.set('#a3a78f');liner.metalness=0;liner.roughness=.87;liner.name='mission cabin interior lining';
 const bodyEnd=id==='COMMAND'?Math.min(.80,end-.03):end-.03,roofZ=half*.85-.075;
 const wallZ=y=>half*(.75+(Math.min(y,2.36)-1.2)*.1/1.16)-.075;
 for(const s of [-1,1]){
  const holes=[];if(id==='TROOP')for(let i=0;i<4;i++)holes.push(roundedOpening(rear+.46+i*.94,1.95,rear+1.07+i*.94,2.22,.04));
  const skin=formedCabPanel(cabin,liner,[[lo,1.435],[bodyEnd,1.435],[bodyEnd,ceiling],[lo,ceiling]],holes,(x,y,t)=>[x,y-1.410,s*(wallZ(y)-t*.40)]);skin.name='mission interior removable liner';skin.userData.cutawayShell=true;
  for(let x=lo+.15;x<bodyEnd-.05;x+=.92){
   box(cabin,m.edge,[.10,.050,.12],[x,.050,s*wallZ(1.46)],'mission rib floor attachment');
   tube(cabin,m.pressedSteel,[[x,.05,s*wallZ(1.46)],[x,.80,s*wallZ(2.21)],[x,ceiling-1.410,s*roofZ]],.024,16).name='mission floor connected cabin rib';
   if(s===1)rod(cabin,m.pressedSteel,[x,ceiling-1.410,-roofZ],[x,ceiling-1.410,roofZ],.025).name='mission connected roof bow';
  }
 }
 const roofLiner=box(cabin,liner,[bodyEnd-lo,.018,roofZ*2],[(lo+bodyEnd)/2,ceiling-1.410+.028,0],'mission removable ceiling liner');roofLiner.userData.cutawayShell=true;
 for(const x of [lo+.35,bodyEnd-.35])box(cabin,m.lamp,[.30,.025,.13],[x,ceiling-1.410+.012,0],'mission supported overhead luminaire');
 const chair=(x,z,angle,scale=.73)=>{const s=seat(cabin,m,x,z,true);s.name=id.toLowerCase()+' mission restrained seat';s.rotation.y=angle;s.scale.setScalar(scale);s.position.y=.029+.2895*scale;return s;};
 const round=(mat,size,pos,name,r=.02)=>{const o=new THREE.Mesh(new RoundedBoxGeometry(...size,3,r),mat);o.position.set(...pos);o.name=name;o.castShadow=o.receiveShadow=true;cabin.add(o);return o;};
 const screenFinish=m.glass.clone();screenFinish.color.set('#183037');screenFinish.roughness=.24;
 const monitor=(x,y,z,w=.62)=>{
  // A seated upright screen, a real rear support and a restrained inert chart.
  round(m.edge,[w+.06,.34,.080],[x,y,z],'mission supported monitor enclosure',.025);
  box(cabin,m.darkSteel,[w+.01,.295,.020],[x,y,z-.041],'mission monitor seated bezel');
  box(cabin,screenFinish,[w-.03,.245,.006],[x,y,z-.054],'mission inert monitor display');
  rod(cabin,m.castSteel,[x,y-.252,z+.025],[x,y-.075,z+.025],.023).name='mission monitor connected stand';
  box(cabin,m.edge,[.20,.026,.16],[x,y-.2545,z+.015],'mission monitor seated foot');
  for(const line of [-.08,0,.08])rod(cabin,m.edge,[x-w*.38,y+line,z-.058],[x+w*.38,y+line,z-.058],.002).name='mission display inert chart grid';
  tube(cabin,m.lamp,[[x-w*.35,y-.065,z-.059],[x-w*.14,y+.025,z-.059],[x+w*.05,y-.02,z-.059],[x+w*.32,y+.070,z-.059]],.003,12).name='mission display illustrative trace';
 };
 const desk=(x,z,width=.91)=>{
  round(m.edge,[width,.045,.50],[x,.53,z],'mission supported workstation top',.015);
  for(const dx of [-width*.38,width*.38])for(const dz of [-.18,.18]){
   box(cabin,m.castSteel,[.070,.040,.085],[x+dx,.049,z+dz],'mission workstation floor foot');
   rod(cabin,m.edge,[x+dx,.068,z+dz],[x+dx,.516,z+dz],.023).name='mission floor connected workstation leg';
  }
  box(cabin,m.darkSteel,[width-.12,.023,.20],[x,.564,z-.08],'mission seated keyboard enclosure');
  for(let row=0;row<3;row++)for(let key=0;key<9;key++)box(cabin,m.edge,[.041,.004,.027],[x+(key-4)*.056,.577,z-.14+row*.039],'mission keyboard key');
  monitor(x,.82,z+.13,width-.15);
 };
 const rack=(x,z,width=.53,height=1.05)=>{
  for(const dx of [-width*.42,width*.42]){
   box(cabin,m.edge,[.070,.035,.44],[x+dx,.0465,z],'mission equipment rack floor rail');
   for(const dz of [-.17,.17])rod(cabin,m.edge,[x+dx,.06,z+dz],[x+dx,height,z+dz],.019).name='mission equipment rack continuous post';
  }
  for(let shelf=0;shelf<3;shelf++){
   const y=.10+shelf*.29;
   box(cabin,m.pressedSteel,[width,.023,.43],[x,y,z],'mission rack supported shelf');
   round(m.paint,[width-.06,.24,.37],[x,y+.1315,z],'mission rack isolated equipment enclosure',.021);
   box(cabin,m.darkSteel,[width-.10,.185,.015],[x,y+.133,z+.192],'mission rack equipment front panel');
   for(const side of [-1,1]){rod(cabin,m.edge,[x+side*(width/2-.065),y+.075,z+.205],[x+side*(width/2-.065),y+.19,z+.205],.009).name='mission rack supported extraction handle';}
   for(let i=0;i<5;i++)box(cabin,m.edge,[.055,.007,.009],[x-.05,y+.09+i*.021,z+.204],'mission equipment ventilation slot');
   cylinder(cabin,m.amber,.008,.009,[x+.09,y+.18,z+.203],'z',.008,16).name='mission equipment inert status lens';
  }
  const lid=box(cabin,m.paint,[width,.024,.43],[x,height,z],'mission equipment rack lid');lid.userData.cutawayShell=true;
 };
 const electronics=group('mission role electronic installation');cabin.add(electronics);
 const electronicInstallation=build=>{const before=new Set(cabin.children);build();for(const o of [...cabin.children])if(!before.has(o))electronics.add(o);};
 if(id==='TROOP'){
  for(const s of [-1,1])for(let i=0;i<4;i++){
   const x=rear+.77+i*.94,seating=chair(x,s*.70,s*Math.PI/2),stowage=round(m.paint,[.39,.276,.16],[x,.167,s*.88],'troop floor supported underseat stowage',.019),latch=box(cabin,m.darkSteel,[.23,.05,.008],[x,.23,s*.963],'troop stowage retained latch');
   if(s===-1&&i===3)for(const o of [seating,stowage,latch])o.userData.reservedOriginalRadioZone=true;
  }
  for(const s of [-1,1]){
   rod(cabin,m.darkSteel,[lo+.17,.87,s*.45],[bodyEnd-.10,.87,s*.45],.016).name='troop supported aisle grab rail';
   for(let x=lo+.15;x<bodyEnd-.05;x+=.92)rod(cabin,m.edge,[x,ceiling-1.410,s*.45],[x,.87,s*.45],.010).name='troop grab rail roof bow hanger';
  }
  box(cabin,m.edge,[.18,.044,1.39],[lo-.02,.012,0],'troop continuous boarding threshold');
 }else if(id==='COMMAND'){
  for(const x of [rear+1.03,rear+2.40]){chair(x,-.10,-Math.PI/2,.80);electronicInstallation(()=>desk(x,.64,1.02));}
  electronicInstallation(()=>{rack(rear+3.58,-.76,.58,1.07);tube(cabin,m.rubber,[[rear+3.58,.99,-.56],[rear+3.58,1.14,-.91],[-1.5,1.14,-.91],[-1.5,1.14,-.4],[-1.5,1.35,-.4]],.018,24).name='command supported roof radio feed conduit';});
  box(vehicle,m.edge,[.36,.10,.28],[-1.5,2.78,-.4],'command roof radio bearing pedestal').userData.originalRoleElectronics=true;
  box(vehicle,m.edge,[.16,.12,.16],[-1.08,2.80,-.68],'command roof mast bearing pedestal').userData.originalRoleElectronics=true;
  for(const s of [-1,1])box(vehicle,m.edge,[.15,.06,.15],[-1.08+s*.55,2.77,-.68+s*.45],'command radio guy roof anchor pad').userData.originalRoleElectronics=true;
  const access=group('command rear access assembly');access.userData.retainWithCrewModule=true;cabin.add(access);const beforeAccess=new Set(cabin.children);
  const rearX=y=>rear+(Math.min(y,2.36)-1.2)*.17/1.16;
  const door=formedCabPanel(cabin,m.paint,roundedOpening(-.45,1.48,.45,2.48,.04).getPoints(12).map(p=>[p.x,p.y]),[],(z,y,t)=>[rearX(y)-.010-t,y-1.410,z]);door.name='command fitted rear service door';door.userData.cutawayShell=true;
  for(const y of [1.73,2.26]){box(cabin,m.edge,[.065,.095,.090],[rearX(y)-.013,y-1.410,-.49],'command rear door seated hinge leaf');cylinder(cabin,m.steel,.019,.10,[rearX(y)-.035,y-1.410,-.49],'z',.019,24).name='command rear door retained hinge pin';}
  for(const y of [1.79,1.96])rod(cabin,m.edge,[rearX(y)-.057,y-1.410,.29],[rearX(y)-.093,y-1.410,.29],.012).name='command rear door handle seated post';
  rod(cabin,m.steel,[rearX(1.79)-.093,1.79-1.410,.29],[rearX(1.96)-.093,1.96-1.410,.29],.012).name='command rear access pull';
  for(const o of [...cabin.children])if(!beforeAccess.has(o))access.add(o);
 }else{
  chair(rear+1.44,-.17,-Math.PI/2,.74);electronicInstallation(()=>desk(rear+1.44,.53,.90));
  chair(rear+.48,.52,0,.70);electronicInstallation(()=>rack(rear+.40,-.64,.34,.82));
  const mastX=-1,mastZ=-.48;
  const foot=cylinder(cabin,m.edge,.14,.055,[mastX,.0565,mastZ],'y',.14,40);foot.name='recce mast floor bearing flange';foot.userData.originalRoleSensor=true;
  const mast=cylinder(cabin,m.castSteel,.065,.94,[mastX,.55,mastZ],'y',.065,40);mast.name='recce continuous internal mast support';mast.userData.originalRoleSensor=true;
  const bearing=cylinder(vehicle,m.edge,.21,.050,[mastX,2.375,mastZ],'y',.21,48);bearing.name='recce mast seated roof bearing';bearing.userData.originalRoleSensor=true;
  for(const s of [-1,1])box(vehicle,m.edge,[.12,.035,.12],[mastX+s*.35,2.375,mastZ+.25],'recce sensor brace roof bearing pad').userData.originalRoleSensor=true;
  electronicInstallation(()=>{const harness=tube(cabin,m.rubber,[[rear+1.44,.835,.69],[rear+1.44,.35,.83],[mastX,.10,.83],[mastX,.10,mastZ],[mastX,.99,mastZ]],.013,24);harness.name='recce supported sensor console harness';harness.userData.originalRoleSensor=true;});
 }
}

function combatCrewBasket(vehicle,m,roof){
 const basket=group('combat supported crew compartment');basket.position.set(-.35,roof-.94,0);vehicle.add(basket);
 cylinder(basket,m.edge,.60,.06,[0,0,0],'y',.60,64).name='combat suspended crew floor';
 cylinder(basket,m.rubber,.565,.012,[0,.036,0],'y',.565,64).name='combat nonslip crew floor insert';
 for(const [x,z]of [[-.35,0],[.35,0],[0,-.35],[0,.35]]){
  rod(basket,m.castSteel,[x,.02,z],[x,1.14,z],.025).name='combat continuous roof ring basket support';
  box(basket,m.edge,[.085,.055,.085],[x,.032,z],'combat basket floor support shoe');
  box(basket,m.edge,[.085,.07,.085],[x,1.12,z],'combat basket roof ring attachment');
 }
 for(const s of [-1,1]){
  const chair=seat(basket,m,-.16,s*.33,true);chair.scale.setScalar(.75);chair.position.y=.259125;
  // The scaled floor-rail bottom is seated on the .042 m insert.
  chair.name='combat restrained operator seat';
 }
 box(basket,m.castSteel,[.19,.05,.19],[.24,.066,0],'combat console floor shoe');
 rod(basket,m.edge,[.24,.08,0],[.24,.48,0],.033).name='combat crew console supported column';
 const console=new THREE.Mesh(new RoundedBoxGeometry(.18,.25,.34,3,.025),m.paint);console.position.set(.24,.51,0);console.name='combat crew console enclosure';basket.add(console);
 box(basket,m.edge,[.014,.18,.26],[.144,.54,0],'combat crew console screen bezel');
 const screen=m.glass.clone();screen.color.set('#182d32');screen.roughness=.20;
 box(basket,screen,[.005,.14,.22],[.134,.54,0],'combat crew console inert display');
 for(const s of [-1,1]){rod(basket,m.edge,[.15,.43,s*.13],[.08,.43,s*.13],.012).name='combat crew console grip support';cylinder(basket,m.rubber,.02,.08,[.08,.47,s*.13]).name='combat crew console grip';}
 tube(basket,m.rubber,[[.24,.385,0],[.24,.14,0],[.30,.075,0],[.35,.075,0],[.35,1.12,0]],.013,24).name='combat supported console harness';
}

function troopRamp(vehicle,m){
 const rear=-vehicle.userData.length/2,rearX=y=>rear+(y-1.2)*.17/1.16,ramp=group('troop boarding ramp');ramp.userData.inspectionKey='body';vehicle.add(ramp);
 const aperture=roundedOpening(-.74,1.34,.74,2.23,.045),outer=roundedOpening(-.80,1.28,.80,2.29,.070).getPoints(12).map(p=>[p.x,p.y]);
 formedCabPanel(vehicle,m.edge,outer,[aperture.clone()],(z,y,t)=>[rearX(y)-.004-t,y,z]).userData.component='troop ramp aperture retaining frame';
 formedCabPanel(vehicle,m.rubber,roundedOpening(-.756,1.316,.756,2.246,.060).getPoints(12).map(p=>[p.x,p.y]),[roundedOpening(-.695,1.346,.695,2.196,.025)],(z,y,t)=>[rearX(y)-.004-t*.75,y,z]).name='troop ramp continuous compression seal';
 const panel=formedCabPanel(ramp,m.paint,roundedOpening(-.72,1.330,.72,2.215,.035).getPoints(12).map(p=>[p.x,p.y]),[],(z,y,t)=>[rearX(y)-.016-t,y,z]);panel.name='rear ramp';panel.userData.cutawayShell=true;
 for(const s of [-1,1]){
  box(vehicle,m.darkSteel,[.22,.105,.16],[rear+.085,1.300,s*.54],'troop ramp chassis hinge bracket');
  cylinder(ramp,m.steel,.035,.17,[rearX(1.338)-.042,1.338,s*.54],'z',.035,24).name='troop ramp seated hinge barrel';
  cylinder(vehicle,m.darkSteel,.014,.23,[rearX(1.338)-.042,1.338,s*.54],'z',.014,24).name='troop ramp retained hinge pin';
  rod(ramp,m.edge,[rearX(1.41)-.064,1.41,s*.58],[rearX(2.16)-.064,2.16,s*.58],.018).name='troop ramp supported outer stiffener';
  cylinder(ramp,m.darkSteel,.020,.020,[rearX(2.16)-.063,2.16,s*.59],'x',.020,6).name='troop ramp seated latch';
 }
 for(const y of [1.47,1.62,1.77,1.92,2.07])rod(ramp,m.edge,[rearX(y)-.012,y,-.61],[rearX(y)-.012,y,.61],.010).name='troop ramp interior tread return';
}
function mineRollerMount(vehicle,m,roller){
 // Original illustrative vehicle integration kit. Loads reach the chassis;
 // contact geometry does not imply mine-clearance or strength qualification.
 const front=vehicle.userData.length/2,frame=group('mine roller carrier integration frame');frame.userData.inspectionKey='chassis';vehicle.add(frame);roller.updateMatrix();
 for(const s of [-1,1]){
  const target=new THREE.Vector3(-s*.45,.48,-.3).applyMatrix4(roller.matrix);
  box(frame,m.darkSteel,[.24,.20,.28],[front-.26,.89,s*.64],'mine roller chassis bearing');
  box(frame,m.edge,[.25,.10,.36],[front-.26,.94,s*.78],'mine roller pivot bearing cross shoe');
  for(const z of [s*.74,s*.90])box(frame,m.edge,[.16,.22,.035],[front-.22,.99,z],'mine roller seated pivot cheek');
  cylinder(frame,m.steel,.026,.30,[front-.22,1.00,s*.79],'z',.026,24).name='mine roller retained chassis pivot';
  const linkage=group('mine roller chassis-connected linkage');linkage.userData.inspectionKey='front';vehicle.add(linkage);
  formedCabPanel(linkage,m.paint,[[front-.30,.930],[target.x+.04,target.y-.070],[target.x+.04,target.y+.062],[front-.28,1.085]],[],(x,y,t)=>[x,y,target.z-.020+t]).name='mine roller continuous draw arm';
  cylinder(linkage,m.darkSteel,.049,.10,[front-.22,1.00,s*.855],'z',.049,24).name='mine roller draw arm pivot bushing';
  cylinder(linkage,m.steel,.034,.12,target.toArray(),'z',.034,24).name='mine roller implement clevis pin';
 }
}

// Fitted adapters use carrier datums; standalone card enclosures are deliberately
// not copied wholesale into an already complete vehicle. Their representations
// are illustrative and never recompute canonical inventory effects or capacity.
function carrierDatums(vehicle){
 const recovery=vehicle.userData.mission==='RECOVERY',length=vehicle.userData.length||6.25,width=vehicle.userData.width||2.3,front=length/2;
 const wheels=[];vehicle.traverse(o=>{if(o.name==='run-flat wheel')wheels.push(o);});
 return {recovery,length,width,front,rear:-front,crewStart:-front+.28,crewEnd:recovery?-.58:front-2.65,crewBase:recovery?1.64:1.4,cabFloor:recovery?1.8125:1.435,cabRoof:recovery?2.78:2.36,cabBack:recovery?.70:front-2.15,cabFront:recovery?2.30:front-.98,cabHalf:recovery?.95:.76,axles:[...new Set(wheels.map(w=>w.position.x))].sort((a,b)=>a-b),wheelY:wheels[0]?.position.y??.62,wheelZ:Math.abs(wheels[0]?.position.z??width*.44)};
}
function fittedCapacity(vehicle,m,id,d){
 const part=createPart(id,m),seats=part.children.filter(o=>o.name==='supported crew seat'),keep=new Set(seats),geometry=new Set(),paint=new Set();
 for(const o of [...part.children])if(!keep.has(o)){o.removeFromParent();o.traverse(n=>{if(n.geometry)geometry.add(n.geometry);if(n.material&&!Object.values(m).includes(n.material))paint.add(n.material);});}
 for(const g of geometry)g.dispose();for(const p of paint)p.dispose();
 const length=d.crewEnd-d.crewStart,center=(d.crewEnd+d.crewStart)/2,half=d.width*.34,scale=.70,rows=Math.ceil(seats.length/2),pitch=(length-.35)/rows;
 box(part,m.edge,[length,.035,half*2],[center,d.crewBase+.0175,0],'fitted capacity carrier floor');
 box(part,m.rubber,[length-.04,.004,half*2-.035],[center,d.crewBase+.037,0],'fitted capacity nonslip floor');
 for(let i=0;i<seats.length;i++){const row=Math.floor(i/2),single=i===seats.length-1&&seats.length%2;seats[i].position.set(center+(row-(rows-1)/2)*pitch,d.crewBase+.039+.315*scale,single?0:(i%2?1:-1)*Math.min(.49,half-.22));seats[i].scale.setScalar(scale);}
 for(const x of [d.crewStart+.12,d.crewEnd-.12])for(const s of [-1,1])box(part,m.castSteel,[.16,.04,.16],[x,d.crewBase+.020,s*(half-.12)],'fitted capacity floor bearing foot');
 part.userData.fittedZone='rear crew floor';part.userData.fittedSeatCount=seats.length;return part;
}
function fittedProtection(vehicle,m,id,d){
 const v=id.charCodeAt(4)-65,part=group(id);part.userData={assetId:id,illustrative:true,units:'metres',fittedZone:v===3?'existing front cab':v===6?'existing carrier skins':'carrier protective surfaces'};
 if(v===6){
  // Replace the original skins one-for-one: same apertures and geometry,
  // different lightweight-shell finish, no second cabin/roof/floor envelope.
  vehicle.updateWorldMatrix(true,true);const skins=[];vehicle.traverse(o=>{if(o.isMesh&&o.name==='hull shell')skins.push(o);});
  for(const old of skins){const mesh=new THREE.Mesh(old.geometry.clone().applyMatrix4(old.matrixWorld),m.paint.clone());mesh.material.color.multiplyScalar(1.075);mesh.name='hull shell';mesh.userData={...old.userData,component:'fitted lightweight carrier skin'};mesh.castShadow=old.castShadow;mesh.receiveShadow=old.receiveShadow;part.add(mesh);old.removeFromParent();old.geometry.dispose();}
 }else if(v===3){
  for(const x of [d.cabBack,d.cabFront])for(const s of [-1,1]){
   if(!d.recovery)box(part,m.edge,[.18,.035,.19],[x,1.4175,s*d.cabHalf],'fitted cab lower-hull bearing rail');
   box(part,m.castSteel,[.12,.040,.12],[x,d.cabFloor+.020,s*d.cabHalf],'fitted cab frame bearing foot');
   rod(part,m.pressedSteel,[x,d.cabFloor+.035,s*d.cabHalf],[x,d.cabRoof-.035,s*d.cabHalf],.029).name='fitted reinforced cab continuous pillar';
  }
  for(const s of [-1,1])box(part,m.pressedSteel,[d.cabFront-d.cabBack+.08,.05,.065],[(d.cabFront+d.cabBack)/2,d.cabRoof-.025,s*d.cabHalf],'fitted cab roof longitudinal reinforcement');
  for(const x of [d.cabBack,d.cabFront])box(part,m.pressedSteel,[.065,.05,d.cabHalf*2+.06],[x,d.cabRoof-.025,0],'fitted cab roof transverse reinforcement');
  const frontX=y=>d.recovery?2.94-(y-1.74)*(.47/1.01)+.012:d.front-(y-1.2)*.75/1.16;
  const low=d.recovery?1.80:1.48,high=d.recovery?1.99:1.73,half=d.recovery?1.03:d.width*.32;
  const skin=formedCabPanel(part,m.paint,[[-half,low],[half,low],[half-.055,high],[-half+.055,high]],[],(z,y,t)=>[frontX(y)+.004+t*.45,y,z]);skin.name='fitted reinforced cab lower front skin';skin.userData.cutawayShell=true;
  const cockpit=vehicle.getObjectByName('driver controls');if(cockpit)cockpit.userData.reinforcedBy=id;
 }else if(v===5){
  for(const s of [-1,1]){formedCabPanel(part,m.paint,[[-d.length*.36,0],[d.length*.36,0],[d.length*.40,.20],[-d.length*.40,.20]],[],(x,a,t)=>[x,.83+a*.28+t*.3,s*a*3.0]).name='fitted underside protective plate';for(const x of [-d.length*.30,d.length*.30])box(part,m.edge,[.16,.14,.16],[x,.94,s*.50],'fitted underside carrier attachment');}
 }else{
  const a=d.recovery?1.13:d.front-1.94,b=d.recovery?2.22:d.front-1.08,low=d.recovery?1.83:1.50,high=d.recovery?2.06:1.83;
  for(const s of [-1,1]){const side=y=>d.recovery?1.174:d.width/2*(.75+(y-1.2)*.1/1.16)+.012;
   const skin=formedCabPanel(part,v===1?m.castSteel:m.paint,[[a,low],[b,low],[b+.035,high-.05],[b-.05,high],[a+.03,high]],[],(x,y,t)=>[x,y,s*(side(y)+t*.45)]);skin.name='fitted cab side protective panel';skin.userData.cutawayShell=true;
  }
 }
 return part;
}
function fittedMobility(vehicle,m,id,d,discard){
 const v=id.charCodeAt(4)-65;
 if([1,2,3,6].includes(v)){
  const part=group(id);part.userData={assetId:id,illustrative:true,units:'metres',fittedZone:'existing axle stations'};
  // Retain the actual carrier wheels; adapt the upgraded mechanisms to them.
  for(const old of [...vehicle.children])if(old.isMesh&&old.geometry.type==='CylinderGeometry'&&old.position.y<1.35&&d.axles.some(x=>Math.abs(old.position.x-x)<.35))discard(old);
  for(const x of d.axles){const unit=axle(m,{light:v===2,adaptive:v===6,springs:[1,2,3].includes(v),widthOverride:d.wheelZ/.49});unit.position.set(x,d.wheelY-.44,0);part.add(unit);
   for(const s of [-1,1]){const z=s*d.wheelZ/.49*.29,y=d.wheelY+.43;if(d.recovery)box(part,m.edge,[.12,1.60-y,.14],[x+.12,(1.60+y)/2,z],'fitted suspension load-deck bearing bracket');else{box(part,m.edge,[.15,.030,.16],[x+.12,.935,z],'fitted suspension chassis bearing shoe');rod(part,m.castSteel,[x+.12,.94,z],[x+.12,y,z],.030).name='fitted suspension connected chassis hanger';}}
  }
  return soften(part);
 }
 const part=createPart(id,m);part.scale.multiplyScalar(.64);part.position.set(d.front-1.13,d.recovery?.98:1.12,d.recovery?0:.37);part.userData.fittedZone='enclosed front power bay';part.userData.illustrativeFitScale=.64;
 // A proper right-side machinery compartment replaces the passenger footwell,
 // rather than making the complete hull transparent to expose a power pack.
 if(!d.recovery){const cockpit=vehicle.getObjectByName('driver controls');if(cockpit){for(const o of [...cockpit.children])if(o.isMesh&&o.position.z>.25&&/seat|bolster|head restraint|restraint|bellows/.test(o.name))discard(o);for(const name of ['cab floor','dashboard','carrier supported dashboard cowl']){const o=cockpit.getObjectByName(name);if(!o)continue;if(o.geometry.type==='ExtrudeGeometry'){const p=o.geometry.parameters;o.geometry.dispose();o.geometry=new THREE.ExtrudeGeometry(p.shapes,{...p.options,depth:.84});}else{const b=new THREE.Box3().setFromObject(o),size=b.getSize(new THREE.Vector3());o.geometry.dispose();o.geometry=new RoundedBoxGeometry(size.x,size.y,size.z/2,2,Math.min(.010,size.y*.2));o.position.z=-size.z/4;}}}
  const wall=box(vehicle,m.edge,[1.65,.74,.035],[d.front-1.15,1.77,-.015],'fitted engine crew bulkhead');wall.userData.cutawayShell=true;
 }
 // Bearing beams contact the carrier's lower hull/deck and the actual skid rails.
 const base=d.recovery?1.64:1.4,skidY=part.position.y+.064*.64*(v===5?.78:1);
 for(const s of [-1,1])box(vehicle,m.edge,[1.47,Math.abs(base-skidY)+.025,.14],[part.position.x-.12,(base+skidY)/2,part.position.z+s*.38*.64*(v===5?.78:1)],'fitted power-pack carrier bearing beam');
 return part;
}

export function createConfiguration(mission,owned,m=materials()){
 const vehicle=createMission(mission,m),latest=new Map(),sources=new Map(),purchaseIds=[];owned.forEach(p=>{const id=typeof p==='string'?p:p.id;if(!MODEL_IDS.includes(id))throw new Error('Unknown 3D asset: '+id);purchaseIds.push(id);if(!id.startsWith('SE-')){const family=id.split('-')[0];latest.set(family,id);if(!sources.has(family))sources.set(family,[]);sources.get(family).push(id);}});
 const length=vehicle.userData.length||6.25,width=vehicle.userData.width||2.3,roof=vehicle.userData.roof||2.75;
 const datums=carrierDatums(vehicle);
 // Role furniture is a baseline illustration, never an extra purchased capacity.
 // Replace its complete rear cassette with CAP, and its electronics with COM.
 // Keep the carrier's access closure; avoid stacked floors/seats/console racks.
 const discard=o=>{o.removeFromParent();const liveGeometry=new Set(),liveMaterials=new Set(Object.values(m));vehicle.traverse(n=>{if(n.geometry)liveGeometry.add(n.geometry);for(const mat of Array.isArray(n.material)?n.material:[n.material])if(mat)liveMaterials.add(mat);});const geometry=new Set(),paint=new Set();o.traverse(n=>{if(n.geometry)geometry.add(n.geometry);for(const mat of Array.isArray(n.material)?n.material:[n.material])if(mat)paint.add(mat);});for(const item of geometry)if(!liveGeometry.has(item))item.dispose();for(const item of paint)if(!liveMaterials.has(item))item.dispose();};
 const interior=vehicle.getObjectByName(mission.toLowerCase()+' mission interior');
 if(latest.has('CAP')&&interior){const retained=interior.getObjectByName('command rear access assembly');if(retained){vehicle.updateWorldMatrix(true,true);vehicle.attach(retained);}discard(interior);}
 if(latest.has('COM')){const electronics=vehicle.getObjectByName('mission role electronic installation');if(electronics)discard(electronics);const obsolete=[];vehicle.traverse(o=>{if(o.userData.reservedOriginalRadioZone||o.userData.originalRoleElectronics)obsolete.push(o);});for(const o of obsolete)discard(o);}
 if(latest.has('SA')&&mission==='RECCE'){const obsolete=[];vehicle.traverse(o=>{if(o.userData.originalRoleSensor)obsolete.push(o);});for(const o of obsolete)discard(o);const cover=cylinder(vehicle,m.paint,.12,.035,[-1,2.37,-.48],'y',.12,40);cover.name='recce replaced mast port blanking cover';cover.userData.cutawayShell=true;}
 for(const [prefix,id]of latest){
  const part=prefix==='CAP'?fittedCapacity(vehicle,m,id,datums):prefix==='PRO'?fittedProtection(vehicle,m,id,datums):prefix==='MOB'?fittedMobility(vehicle,m,id,datums,discard):createPart(id,m);part.userData.mountedCard=id;part.userData.representativeOnly=true;part.userData.contributingPurchasedIds=[...sources.get(prefix)];
  if(prefix==='CAP'&&mission==='RECOVERY'){const stowage=vehicle.getObjectByName('recovery stowage');if(stowage)discard(stowage);const crane=vehicle.getObjectByName('recovery crane');if(crane)crane.position.z=-.95;}
  if(prefix==='FP'){vehicle.getObjectByName('mission weapon')?.removeFromParent();part.position.set(-.35,roof,0);}
  if(prefix==='COM'){vehicle.getObjectByName('mission radio')?.removeFromParent();part.position.set(.1,1.45,-.65);if(interior&&!latest.has('CAP')){const count=id==='COM-B'?3:id==='COM-G'?2:1;box(vehicle,m.edge,[count*.40-.03,.080,.29],[.1,1.47,-.65],'purchased radio supported carrier shelf');}}
  if(prefix==='SA'){vehicle.getObjectByName('mission sensor')?.removeFromParent();part.position.set(-2.3,roof,.5);}
  if(prefix==='ACC'){
   if(id==='ACC-B'){part.position.set(-length/2-1.43,0,0);}
   else if(['ACC-C','ACC-E'].includes(id)){vehicle.getObjectByName('mission roller')?.removeFromParent();part.scale.setScalar(1.9);part.rotation.y=Math.PI/2;part.position.set(length/2+1.05,.1,0);}
   else if(['ACC-A','ACC-F'].includes(id)){vehicle.getObjectByName('mounted WR-12')?.removeFromParent();part.rotation.y=Math.PI/2;part.position.set(length/2+.15,1.15,0);box(vehicle,m.edge,[.80,.27,1.30],[length/2+.10,1.015,0],'winch chassis crossmember');for(const s of [-1,1])rod(vehicle,m.darkSteel,[length/2-.30,.92,s*.44],[length/2+.38,1.12,s*.44],.035).name='winch mounting brace';}
   else part.position.set(-length/2+.9,1.35,0);
  }
  vehicle.add(part);
 }
 vehicle.userData.configuration=true;vehicle.userData.installed=Object.fromEntries(latest);vehicle.userData.authoritativePurchaseIds=[...purchaseIds];vehicle.userData.purchaseSources=Object.fromEntries([...sources].map(([key,ids])=>[key,[...ids]]));vehicle.userData.representation='one physical representative per family; authoritative purchase effects remain additive';return vehicle;
}
