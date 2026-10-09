import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createMission,createPart,createConfiguration,materials} from './game-models.mjs';
import {fitCamera} from '../../samples/threejs-recovery/models.mjs';

// Presentation only. This module receives a public, copied snapshot, never game state.
export function mount(host,onFailure,onInspect){
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=.95;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
  host.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color('#f0f3f0');
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;scene.environmentIntensity=.45;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xe6f1ff,0x716b5f,.55));
  const key=new THREE.DirectionalLight(0xfff1db,2);key.position.set(7,10,7);key.castShadow=true;
  key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50});key.shadow.normalBias=.015;key.shadow.bias=-.0001;key.shadow.radius=3;scene.add(key);
  const fill=new THREE.DirectionalLight(0xe6efff,.5);fill.position.set(-6,5,-7);scene.add(fill);
  const camera=new THREE.OrthographicCamera(-1,1,1,-1,.01,100);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=false;controls.enablePan=false;controls.minZoom=.25;controls.maxZoom=5;
  controls.maxPolarAngle=Math.PI*.49;
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShadowMaterial({opacity:.18}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
  let model=null,pending=0,active=true,last=null,angle=[7,4.5,7];
  function draw(){pending=0;if(active&&model)renderer.render(scene,camera);}
  function request(){if(active&&!pending)pending=requestAnimationFrame(draw);}
  controls.addEventListener('change',request);
  function fit(){if(!model)return;const w=Math.max(host.clientWidth,1),h=Math.max(host.clientHeight,1);renderer.setSize(w,h,false);fitCamera(camera,model,w/h,angle);controls.target.copy(new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3()));controls.update();request();}
  function release(){if(!model)return;scene.remove(model);const gs=new Set(),ms=new Set(),textures=new Set();model.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>ms.add(m));});gs.forEach(g=>g.dispose());ms.forEach(m=>{for(const value of Object.values(m))if(value?.isTexture)textures.add(value);m.dispose();});textures.forEach(t=>t.dispose());model=null;}
  function update(view,selection){last=[view,selection];release();const m=materials();model=new THREE.Group();
    if(selection.startsWith('part:')){const id=selection.slice(5);if(![view.current?.id,...view.owned.map(p=>p.id)].includes(id))throw Error('Part is not visible');model.add(createPart(id,m));}
    else model.add(selection==='configuration'?createConfiguration(view.mission,view.owned,m):createMission(view.mission,m));
    model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(model);const b=new THREE.Box3().setFromObject(model);ground.position.y=b.min.y-.025;camera.zoom=1;angle=[7,4.5,7];fit();
    // Materials unused by a particular factory still need disposal.
    const used=new Set();model.traverse(o=>{if(o.material)used.add(o.material);});Object.values(m).forEach(mat=>{if(!used.has(mat))mat.dispose();});
  }
  const pointer=new THREE.Vector2(),raycaster=new THREE.Raycaster();let press=null;
  renderer.domElement.addEventListener('pointerdown',e=>{press=[e.clientX,e.clientY];});
  renderer.domElement.addEventListener('pointerup',e=>{if(!press||Math.hypot(e.clientX-press[0],e.clientY-press[1])>5)return;press=null;if(!model||!active)return;const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2);raycaster.setFromCamera(pointer,camera);for(const hit of raycaster.intersectObject(model,true)){let o=hit.object;while(o&&!o.userData.mountedCard)o=o.parent;if(o?.userData.mountedCard){onInspect?.(o.userData.mountedCard);break;}}});
  const observer=new ResizeObserver(fit);observer.observe(host);
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();active=false;if(pending)cancelAnimationFrame(pending);pending=0;onFailure();});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{active=true;if(last){update(...last);host.dispatchEvent(new Event('sea3drestored'));}});
  return {update,view(direction){angle=direction==='rear'?[-7,4.5,-7]:direction==='front'?[7,2.7,0]:[7,4.5,7];camera.zoom=1;fit();},dispose(){active=false;observer.disconnect();controls.dispose();release();ground.geometry.dispose();ground.material.dispose();environment.dispose();renderer.dispose();if(pending)cancelAnimationFrame(pending);renderer.domElement.remove();}};
}
