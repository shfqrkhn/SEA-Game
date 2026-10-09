import * as THREE from 'three';

// Metres; X = longitudinal/front, Y = up, Z = vehicle width.
export function materials(preview=false) {
  const make=(color,roughness=.7,metalness=0)=>preview
    ? new THREE.MeshLambertMaterial({color})
    : new THREE.MeshStandardMaterial({color,roughness,metalness});
  return {paint:make('#60654b',.74,.25),edge:make('#464b37',.78,.3),steel:make('#8b9290',.32,.85),darkSteel:make('#3b4140',.5,.75),rubber:make('#242726',.95),glass:make('#233e45',.19,.45),amber:make('#ca852b',.3),lamp:make('#dce1d2',.23),red:make('#9d3026',.4)};
}
function mesh(parent,geometry,material,position=[0,0,0],name='') {
  const object=new THREE.Mesh(geometry,material);object.position.set(...position);
  object.name=name;object.castShadow=true;object.receiveShadow=true;parent.add(object);return object;
}
export function box(p,m,size,position,name=''){return mesh(p,new THREE.BoxGeometry(...size),m,position,name);}
export function cylinder(p,m,r,h,position,axis='y',rTop=r,segments=20) {
  const o=mesh(p,new THREE.CylinderGeometry(rTop,r,h,segments),m,position);
  if(axis==='x')o.rotation.z=Math.PI/2;if(axis==='z')o.rotation.x=Math.PI/2;return o;
}
export function rod(p,m,a,b,r=.018) {
  const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),dir=end.clone().sub(start);
  const o=cylinder(p,m,r,dir.length(),start.clone().add(end).multiplyScalar(.5).toArray());
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());return o;
}
export function tube(p,m,points,r=.018,segments=40) {
  const curve=new THREE.CatmullRomCurve3(points.map(v=>new THREE.Vector3(...v)));
  return mesh(p,new THREE.TubeGeometry(curve,segments,r,8,false),m);
}
function polygon(p,m,points) {
  const g=new THREE.BufferGeometry();const positions=[];
  for(let i=1;i<points.length-1;i++)positions.push(...points[0],...points[i],...points[i+1]);
  g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.computeVertexNormals();
  const material=m.clone();material.side=THREE.DoubleSide;return mesh(p,g,material);
}
export function bolts(p,m,center,r,count=8,axis='z',size=.014) {
  for(let i=0;i<count;i++){const t=i/count*Math.PI*2;const pos=[...center];
    if(axis==='z'){pos[0]+=Math.cos(t)*r;pos[1]+=Math.sin(t)*r;}
    else{pos[1]+=Math.cos(t)*r;pos[2]+=Math.sin(t)*r;}
    cylinder(p,m,size,size*1.3,pos,axis,size,6);
  }
}

export function createWinch(m=materials()) {
  const g=new THREE.Group();g.name='WR-12 hydraulic recovery winch';
  g.userData={units:'metres',concept:true,sharedPart:'WR-12',ratedLoad:'unspecified illustrative model'};
  box(g,m.edge,[1.12,.085,.56],[0,.0425,0],'mounting skid');
  for(const x of [-.42,.42])for(const z of [-.2,.2])cylinder(g,m.steel,.023,.022,[x,.097,z],'y',.023,6);
  for(const x of [-.42,.42]){
    box(g,m.paint,[.10,.44,.40],[x,.29,0],'bearing pedestal');
    cylinder(g,m.paint,.225,.065,[x,.34,0],'x');
    bolts(g,m.steel,[x+(x>0?.04:-.04),.34,0],.176,8,'x');
  }
  cylinder(g,m.darkSteel,.14,.71,[0,.34,0],'x');
  for(const x of [-.34,.34])cylinder(g,m.steel,.212,.025,[x,.34,0],'x');
  const coil=[];
  for(let i=0;i<=720;i++){const u=i/720,t=u*Math.PI*2*36;coil.push([-.326+u*.652,.34+Math.cos(t)*.172,Math.sin(t)*.172]);}
  tube(g,m.steel,coil,.0075,900);
  cylinder(g,m.paint,.12,.24,[-.59,.34,0],'x');
  cylinder(g,m.darkSteel,.079,.15,[-.75,.34,0],'x');
  for(const y of [.205,.445])rod(g,m.steel,[-.45,y,.27],[.45,y,.27],.035);
  for(const x of [-.43,.43])rod(g,m.steel,[x,.19,.27],[x,.46,.27],.035);
  tube(g,m.darkSteel,[[-.71,.38,-.08],[-.74,.52,-.12],[-.43,.56,-.18],[-.39,.17,-.21]],.016);
  tube(g,m.darkSteel,[[-.67,.31,-.09],[-.74,.20,-.12],[-.61,.12,-.20],[-.41,.12,-.22]],.014);
  tube(g,m.steel,[[0,.34,.17],[0,.32,.33],[0,.21,.46]],.012);
  const hook=new THREE.Group();hook.name='forged hook and safety latch';g.add(hook);
  tube(hook,m.steel,[[0,.23,.46],[.04,.14,.47],[.10,.085,.49],[.11,.027,.51],[.06,-.015,.52],[-.02,-.012,.52],[-.073,.05,.51],[-.071,.12,.49]],.025);
  rod(hook,m.darkSteel,[-.07,.12,.49],[.031,.15,.48],.008);
  return g;
}

export function createWheel(m) {
  const g=new THREE.Group();g.name='run-flat wheel';
  const tire=cylinder(g,m.rubber,.585,.37,[0,0,0],'z');
  for(const z of [-.196,.196]){
    cylinder(g,m.rubber,.505,.026,[0,0,z],'z');
    cylinder(g,m.paint,.325,.03,[0,0,z*1.09],'z');
    cylinder(g,m.darkSteel,.19,.04,[0,0,z*1.22],'z');
    cylinder(g,m.paint,.105,.055,[0,0,z*1.4],'z');
    bolts(g,m.steel,[0,0,z*1.26],.247,10,'z',.018);
  }
  for(let i=0;i<30;i++)for(const side of [-1,1]){
    const a=i/30*Math.PI*2+side*.035;
    const b=box(g,m.rubber,[.095,.075,.16],[Math.sin(a)*.586,Math.cos(a)*.586,side*.10]);
    b.rotation.z=-a;b.rotation.y=side*.24;
  }
  return g;
}

export function createVehicle(m=materials()) {
  const g=new THREE.Group();g.name='R8 recovery vehicle';g.userData={units:'metres',concept:true,axles:4,sharedPart:'WR-12'};
  box(g,m.darkSteel,[6.25,.24,1.2],[0,.91,0],'chassis');
  box(g,m.edge,[5.85,.48,2.18],[-.1,1.27,0],'lower armored hull');
  box(g,m.paint,[6.15,.25,2.4],[0,1.63,0],'deck');
  for(const x of [-2.17,-.74,.72,2.15]){
    cylinder(g,m.darkSteel,.085,2.15,[x,.73,0],'z');
    box(g,m.darkSteel,[.35,.23,.42],[x,.75,0],'differential');
    for(const side of [-1,1]){
      const wheel=createWheel(m);wheel.position.set(x,.605,side*1.19);g.add(wheel);
      rod(g,m.steel,[x-.13,.84,side*.81],[x+.19,1.34,side*.85],.043);
      box(g,m.paint,[1.2,.10,.47],[x,1.30,side*1.19],'wheel guard');
    }
  }
  // Armored cab with a genuinely sloped windscreen, not a floating decal.
  const z=1.15;const sideShape=s=>[[.52,1.74,s*z],[2.94,1.74,s*z],[1.98,2.75,s*z],[.52,2.75,s*z]];
  polygon(g,m.paint,sideShape(1));polygon(g,m.paint,sideShape(-1).reverse());
  polygon(g,m.paint,[[.52,2.75,-z],[1.98,2.75,-z],[1.98,2.75,z],[.52,2.75,z]]);
  polygon(g,m.paint,[[2.94,1.74,-z],[2.94,1.74,z],[1.98,2.75,z],[1.98,2.75,-z]]);
  box(g,m.edge,[.08,1.03,2.30],[.49,2.25,0],'cab rear wall');
  const frontX=y=>2.94-(y-1.74)*(.96/1.01)+.008;
  for(const range of [[-1.02,-.09],[.09,1.02]]){
    polygon(g,m.glass,[[frontX(2.03),2.03,range[0]],[frontX(2.03),2.03,range[1]],[frontX(2.57),2.57,range[1]],[frontX(2.57),2.57,range[0]]]);
    rod(g,m.rubber,[frontX(2.06)+.018,2.06,(range[0]+range[1])*.5],[frontX(2.40)+.018,2.40,range[1]-.1],.012);
  }
  for(const s of [-1,1]){
    polygon(g,m.glass,[[.76,2.15,s*1.158],[1.95,2.15,s*1.158],[1.87,2.57,s*1.158],[.76,2.57,s*1.158]]);
    rod(g,m.edge,[.64,1.86,s*1.166],[.64,2.66,s*1.166],.01);
    rod(g,m.edge,[.64,1.86,s*1.166],[1.70,1.86,s*1.166],.01);
    box(g,m.steel,[.15,.027,.033],[.87,2.015,s*1.185],'door handle');
    rod(g,m.darkSteel,[2.11,2.25,s*1.16],[2.10,2.32,s*1.47],.024);
    box(g,m.glass,[.06,.22,.16],[2.10,2.32,s*1.47],'mirror');
    box(g,m.edge,[.68,.07,.30],[1.17,1.61,s*1.36],'entry step');
  }
  box(g,m.darkSteel,[.18,.24,2.53],[3.13,1.46,0],'front bumper');
  for(const s of [-1,1]){
    cylinder(g,m.lamp,.08,.04,[3.02,1.79,s*.83],'x');
    cylinder(g,m.amber,.036,.04,[3.025,1.79,s*1.02],'x');
    cylinder(g,m.steel,.075,.07,[3.25,1.42,s*.92],'x');
    box(g,m.red,[.035,.09,.14],[-3.13,1.57,s*.99]);
  }
  // Shared part, exactly the same geometry and physical scale as the part sample.
  const winch=createWinch(m);winch.name='mounted WR-12';winch.rotation.y=Math.PI/2;
  winch.position.set(2.98,1.00,0);g.add(winch);
  const stowage=new THREE.Group();stowage.name='recovery stowage';g.add(stowage);
  for(const s of [-1,1]){
    box(stowage,m.paint,[2.6,.51,.43],[-1.56,1.99,s*.97],'tool locker');
    for(const x of [-2.3,-1.55,-.8]){
      box(stowage,m.edge,[.014,.36,.017],[x,1.99,s*1.197]);
      box(stowage,m.steel,[.07,.018,.025],[x+.12,2.05,s*1.207]);
    }
    rod(stowage,m.darkSteel,[-2.60,2.30,s*.80],[-.59,2.30,s*.80],.025);
  }
  // Crane slewing pedestal, nested boom and hydraulic cylinder with real connections.
  const crane=new THREE.Group();crane.name='recovery crane';g.add(crane);
  cylinder(crane,m.darkSteel,.44,.14,[-.85,1.84,0]);
  cylinder(crane,m.paint,.33,.36,[-.85,2.04,0]);
  box(crane,m.edge,[.48,.40,.48],[-.85,2.32,0],'crane pivot');
  const boomA=[-.85,2.49,0],boomB=[-2.51,3.13,0],boomDir=new THREE.Vector3(...boomB).sub(new THREE.Vector3(...boomA));
  const boom=box(crane,m.paint,[.34,boomDir.length(),.34],new THREE.Vector3(...boomA).add(new THREE.Vector3(...boomB)).multiplyScalar(.5).toArray(),'main crane boom');
  boom.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),boomDir.clone().normalize());
  rod(crane,m.darkSteel,[-2.47,3.115,0],[-3.0,3.32,0],.112);
  rod(crane,m.paint,[-.84,2.10,.24],[-1.74,2.78,.24],.078);
  rod(crane,m.steel,[-1.74,2.78,.24],[-2.13,2.99,.24],.035);
  cylinder(crane,m.darkSteel,.105,.15,[-3.03,3.31,0],'z');
  rod(crane,m.darkSteel,[-3.06,3.26,0],[-3.06,2.55,0],.012);
  tube(crane,m.steel,[[-3.06,2.56,0],[-3.13,2.47,0],[-3.1,2.37,0],[-3.0,2.37,0],[-2.98,2.45,0]],.028);
  tube(crane,m.rubber,[[-.67,2.09,.28],[-.54,2.49,.27],[-.94,2.66,.25],[-1.7,2.95,.22]],.018);
  cylinder(g,m.paint,.29,.05,[1.04,2.80,0],'y');
  cylinder(g,m.amber,.065,.14,[.60,2.90,-.72]);
  rod(g,m.darkSteel,[.37,2.8,.73],[.37,3.69,.73],.012);
  for(const s of [-1,1])for(let i=0;i<12;i++)cylinder(g,m.steel,.014,.018,[-2.70+i*.45,1.79,s*1.22],'z',.014,6);
  return g;
}

export function studio(model, aspect=16/10, angle=[7,4.5,7]) {
  const scene=new THREE.Scene();scene.background=new THREE.Color('#e9e6df');scene.add(model);
  scene.add(new THREE.AmbientLight(0xffffff,.65));
  const key=new THREE.DirectionalLight(0xfff2dc,2.6);key.position.set(5,9,6);key.castShadow=true;
  key.shadow.mapSize.set(2048,2048);key.shadow.camera.left=-7;key.shadow.camera.right=7;key.shadow.camera.top=7;key.shadow.camera.bottom=-7;
  key.shadow.normalBias=.03;key.shadow.bias=-.0001;scene.add(key);
  const fill=new THREE.DirectionalLight(0xe0ecff,.9);fill.position.set(-5,4,-6);scene.add(fill);
  const camera=new THREE.OrthographicCamera(-1,1,1,-1,.01,100);
  fitCamera(camera,model,aspect,angle);
  return {scene,camera};
}

export function fitCamera(camera,model,aspect,angle=[7,4.5,7]) {
  model.updateWorldMatrix(true,true);
  const bounds=new THREE.Box3().setFromObject(model,true),center=bounds.getCenter(new THREE.Vector3());
  const distance=Math.max(bounds.getSize(new THREE.Vector3()).length()*3,5);
  camera.position.copy(center).add(new THREE.Vector3(...angle).normalize().multiplyScalar(distance));camera.lookAt(center);camera.updateMatrixWorld(true);
  const corners=[];for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])corners.push(new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse));
  const view=new THREE.Box3().setFromPoints(corners),size=view.getSize(new THREE.Vector3());
  const halfH=Math.max(size.y/2,size.x/(2*aspect))/.8;
  camera.left=-halfH*aspect;camera.right=halfH*aspect;camera.top=halfH;camera.bottom=-halfH;
  camera.near=Math.max(.01,-view.max.z-distance*.1);camera.far=-view.min.z+distance*.1;camera.updateProjectionMatrix();
  return {bounds,corners};
}
