import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createMission,createPart,createConfiguration,materials} from './game-models.mjs';
import {prepareInspection,fitPerspective} from './inspection.mjs';

// Presentation only. This module receives a public, copied snapshot, never game state.
export function mount(host,onFailure,onInspect){
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=.95;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
  host.appendChild(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color('#f0f3f0');
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;scene.environmentIntensity=.35;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xe6f1ff,0x716b5f,.4));
  const key=new THREE.DirectionalLight(0xfff1db,2.5);key.position.set(-5,9,6);key.castShadow=true;
  key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50});key.shadow.normalBias=.015;key.shadow.bias=-.0001;key.shadow.radius=3;scene.add(key);
  const fill=new THREE.DirectionalLight(0xe6efff,.32);fill.position.set(-6,5,-7);scene.add(fill);
  const camera=new THREE.PerspectiveCamera(38,1,.01,100);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=false;controls.enablePan=false;controls.enableRotate=false;controls.minZoom=.25;controls.maxZoom=5;
  controls.maxPolarAngle=Math.PI*.49;
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShadowMaterial({opacity:.27}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
  let dragging=null,dragged=false;
  let model=null,pending=0,active=true,last=null,angle=[7,4.5,7],inspection=null,mode='assembled',amount=.7,leaders=null,highlight=null;
  function draw(){pending=0;if(active&&model)renderer.render(scene,camera);}
  function request(){if(active&&!pending)pending=requestAnimationFrame(draw);}
  controls.addEventListener('change',request);
  function fit(){if(!model)return;const w=Math.max(host.clientWidth,1),h=Math.max(host.clientHeight,1);renderer.setSize(w,h,false);if(mode==='exploded')inspection.apply(1);ground.position.y=new THREE.Box3().setFromObject(model).min.y-.025;controls.target.copy(fitPerspective(camera,model,w/h,angle));inspection.apply(mode==='exploded'?amount:0);controls.update();highlight?.update();request();}
  function release(){if(!model)return;scene.remove(model);const gs=new Set(),ms=new Set(),textures=new Set();model.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>ms.add(m));});gs.forEach(g=>g.dispose());ms.forEach(m=>{for(const value of Object.values(m))if(value?.isTexture)textures.add(value);m.dispose();});textures.forEach(t=>t.dispose());model=null;}
  function update(view,selection){last=[view,selection];clearInspection();release();const m=materials();model=new THREE.Group();
    if(selection.startsWith('part:')){const id=selection.slice(5);if(![view.current?.id,...view.owned.map(p=>p.id)].includes(id))throw Error('Part is not visible');model.add(createPart(id,m));}
    else model.add(selection==='configuration'?createConfiguration(view.mission,view.owned,m):createMission(view.mission,m));
    const actual=model.children[0],pivot=new THREE.Box3().setFromObject(actual).getCenter(new THREE.Vector3());actual.position.sub(pivot);model.position.copy(pivot);inspection=prepareInspection(actual);for(const p of inspection.parts)p.anchorLocal=model.worldToLocal(p.center.clone());model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});scene.add(model);const b=new THREE.Box3().setFromObject(model);ground.position.y=b.min.y-.025;camera.zoom=1;angle=[7,4.5,7];fit();
    // Materials unused by a particular factory still need disposal.
    const used=new Set();model.traverse(o=>{if(o.material)used.add(o.material);});Object.values(m).forEach(mat=>{if(!used.has(mat))mat.dispose();});
  }
  function clearInspection(){if(leaders){leaders.removeFromParent();leaders.geometry.dispose();leaders.material.dispose();leaders=null;}if(highlight){scene.remove(highlight);highlight.geometry.dispose();highlight.material.dispose();highlight=null;}inspection=null;}
  function inspect(next,value){if(!inspection)return;if(!['assembled','exploded','cutaway'].includes(next)||!Number.isFinite(value)||value<0||value>1)throw Error('Invalid inspection view');const changed=mode!==next;mode=next;amount=value;inspection.apply(mode==='exploded'?amount:0);
    model.traverse(o=>{if(o.isMesh&&o.name==='hull shell'){o.material.transparent=mode==='cutaway';o.material.opacity=mode==='cutaway'?.13:1;o.material.depthWrite=mode!=='cutaway';}});
    if(leaders){leaders.removeFromParent();leaders.geometry.dispose();leaders.material.dispose();leaders=null;}
    if(mode==='exploded'){const points=[];for(const p of inspection.parts)points.push(p.anchorLocal.clone(),model.worldToLocal(new THREE.Box3().setFromObject(p.object).getCenter(new THREE.Vector3())));leaders=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:'#748879',transparent:true,opacity:.5}));model.add(leaders);}
    highlight?.update();if(changed)fit();else request();
  }
  const pointer=new THREE.Vector2(),raycaster=new THREE.Raycaster();let press=null;
  renderer.domElement.addEventListener('pointerdown',e=>{press=[e.clientX,e.clientY];dragging=[e.clientX,e.clientY];dragged=false;renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(!dragging||!model)return;const dx=e.clientX-dragging[0];if(Math.hypot(e.clientX-press[0],e.clientY-press[1])>4){dragged=true;model.rotation.y+=dx*.009;model.updateWorldMatrix(true,true);highlight?.update();fit();}dragging=[e.clientX,e.clientY];});
  renderer.domElement.addEventListener('pointercancel',()=>{dragging=null;press=null;});
  renderer.domElement.addEventListener('pointerup',e=>{dragging=null;if(dragged||!press||Math.hypot(e.clientX-press[0],e.clientY-press[1])>5){press=null;return;}press=null;if(!model||!active)return;const rect=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2);raycaster.setFromCamera(pointer,camera);for(const hit of raycaster.intersectObject(model,true)){let o=hit.object;while(o&&!o.userData.mountedCard)o=o.parent;if(o?.userData.mountedCard){onInspect?.(o.userData.mountedCard);break;}}});
  const observer=new ResizeObserver(fit);observer.observe(host);
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();active=false;if(pending)cancelAnimationFrame(pending);pending=0;onFailure();});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{active=true;if(last){update(...last);host.dispatchEvent(new Event('sea3drestored'));}});
  return {update,inspect,shadows(enabled){renderer.shadowMap.enabled=!!enabled;ground.visible=!!enabled;request();},parts(){return inspection?.parts.map(p=>p.key)||[];},focus(key){const part=inspection?.parts.find(p=>p.key===key);if(!part)return;if(highlight){scene.remove(highlight);highlight.geometry.dispose();highlight.material.dispose();}highlight=new THREE.BoxHelper(part.object,0xd5a544);scene.add(highlight);request();},view(direction){if(model)model.rotation.y=0;angle=direction==='rear'?[-7,4.5,-7]:direction==='front'?[7,2.7,0]:[7,4.5,7];camera.zoom=1;fit();},dispose(){active=false;observer.disconnect();controls.dispose();clearInspection();release();ground.geometry.dispose();ground.material.dispose();environment.dispose();renderer.dispose();if(pending)cancelAnimationFrame(pending);renderer.domElement.remove();}};
}
