import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createMission,createPart,createConfiguration,materials} from './game-models.mjs';
import {prepareInspection,prepareCutaway,fitPerspective,fitDirectionalShadow} from './inspection.mjs';
import {createInterface} from './interface.mjs';

// Presentation only. This module receives a public, copied snapshot, never game state.
export function mount(host,onFailure,onInspect){
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=.95;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.domElement.tabIndex=0;
  host.appendChild(renderer.domElement);
  const ui=createInterface();let uiEnabled=false;
  const scene=new THREE.Scene();scene.background=new THREE.Color('#f0f3f0');
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),environment=pmrem.fromScene(room,.04);scene.environment=environment.texture;scene.environmentIntensity=.65;room.dispose();pmrem.dispose();
  // Keep the reflective studio response/key fixed while reducing diffuse fill.
  // This preserves material highlights and gives formed recesses useful depth.
  scene.add(new THREE.HemisphereLight(0xe6f1ff,0x716b5f,.28));
  // Fixed studio lights reveal recesses and material response without a dark,
  // hard-edged cast silhouette dominating the equipment. No baked shadow.
  const key=new THREE.DirectionalLight(0xfff1db,1.8);key.position.set(-5,9,6);key.castShadow=true;
  key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50});key.shadow.normalBias=.015;key.shadow.bias=-.0001;key.shadow.radius=5;scene.add(key);
  const fill=new THREE.DirectionalLight(0xe6efff,.30);fill.position.set(-6,5,-7);scene.add(fill);
  const camera=new THREE.PerspectiveCamera(38,1,.01,100);
  const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=false;controls.enablePan=false;controls.enableRotate=false;controls.minZoom=.25;controls.maxZoom=5;
  controls.maxPolarAngle=Math.PI*.49;
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShadowMaterial({opacity:.17}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
  let dragging=null,dragged=false;
  let model=null,pending=0,active=true,last=null,angle=[7,4.5,7],inspection=null,cutaway=null,mode='assembled',amount=.7,leaders=null,highlight=null;
  function draw(){pending=0;if(!active)return;const w=Math.max(host.clientWidth,1),h=Math.max(host.clientHeight,1);renderer.setViewport(0,0,w,h);renderer.setScissorTest(false);renderer.clear();if(model){const v=uiEnabled?ui.layout.model:{x:0,y:0,w,h};renderer.setViewport(v.x,h-v.y-v.h,v.w,v.h);renderer.setScissor(v.x,h-v.y-v.h,v.w,v.h);renderer.setScissorTest(true);renderer.render(scene,camera);}if(uiEnabled){renderer.setScissorTest(false);renderer.setViewport(0,0,w,h);renderer.autoClear=false;renderer.clearDepth();renderer.render(ui.scene,ui.camera);renderer.autoClear=true;}}
  function request(){if(active&&!pending)pending=requestAnimationFrame(draw);}
  controls.addEventListener('change',request);
  function fit(){const w=Math.max(host.clientWidth,1),h=Math.max(host.clientHeight,1);renderer.setSize(w,h,false);if(uiEnabled)ui.resize(w,h);if(!model){request();return;}const v=uiEnabled?ui.layout.model:{w,h};
    inspection.apply(0);const envelope=new THREE.Box3().setFromObject(model,true);
    if(mode==='exploded'){inspection.apply(1);envelope.union(new THREE.Box3().setFromObject(model,true));}
    ground.position.y=envelope.min.y-.025;controls.target.copy(fitPerspective(camera,model,v.w/v.h,angle,envelope));fitDirectionalShadow(key,model,ground.position.y,envelope);inspection.apply(mode==='exploded'?amount:0);controls.update();highlight?.update();request();}
  function release(){if(!model)return;scene.remove(model);const gs=new Set(),ms=new Set(),textures=new Set();model.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>ms.add(m));});gs.forEach(g=>g.dispose());ms.forEach(m=>{for(const value of Object.values(m))if(value?.isTexture)textures.add(value);m.dispose();});textures.forEach(t=>t.dispose());model=null;}
  function update(view,selection){last=[view,selection];clearInspection();release();const m=materials();model=new THREE.Group();
    if(selection.startsWith('part:')){const id=selection.slice(5);if(![view.current?.id,...view.owned.map(p=>p.id)].includes(id))throw Error('Part is not visible');model.add(createPart(id,m));}
    else model.add(selection==='configuration'?createConfiguration(view.mission,view.owned,m):createMission(view.mission,m));
    const actual=model.children[0],pivot=new THREE.Box3().setFromObject(actual).getCenter(new THREE.Vector3());actual.position.sub(pivot);model.position.copy(pivot);inspection=prepareInspection(actual);for(const p of inspection.parts)p.anchorLocal=model.worldToLocal(p.center.clone());model.traverse(o=>{if(o.isMesh){const optical=(Array.isArray(o.material)?o.material:[o.material]).some(mat=>mat.name==='optical glass');o.castShadow=!optical;o.receiveShadow=true;}});scene.add(model);const b=new THREE.Box3().setFromObject(model);ground.position.y=b.min.y-.025;camera.zoom=1;angle=[7,4.5,7];fit();
    cutaway=prepareCutaway(actual);
    // Materials unused by a particular factory still need disposal.
    const used=new Set();model.traverse(o=>{if(o.material)used.add(o.material);});Object.values(m).forEach(mat=>{if(!used.has(mat))mat.dispose();});
  }
  function clearInspection(){cutaway?.dispose();cutaway=null;if(leaders){leaders.removeFromParent();leaders.geometry.dispose();leaders.material.dispose();leaders=null;}if(highlight){scene.remove(highlight);highlight.geometry.dispose();highlight.material.dispose();highlight=null;}inspection=null;}
  function inspect(next,value){if(!inspection)return;if(!['assembled','exploded','cutaway'].includes(next)||!Number.isFinite(value)||value<0||value>1)throw Error('Invalid inspection view');const changed=mode!==next;mode=next;amount=value;inspection.apply(mode==='exploded'?amount:0);
    cutaway?.apply(mode==='cutaway');
    if(leaders){leaders.removeFromParent();leaders.geometry.dispose();leaders.material.dispose();leaders=null;}
    if(mode==='exploded'){const points=[];for(const p of inspection.parts)points.push(p.anchorLocal.clone(),model.worldToLocal(new THREE.Box3().setFromObject(p.object).getCenter(new THREE.Vector3())));leaders=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(points),new THREE.LineBasicMaterial({color:'#748879',transparent:true,opacity:.5}));model.add(leaders);}
    highlight?.update();if(changed)fit();else request();
  }
  const pointer=new THREE.Vector2(),raycaster=new THREE.Raycaster();let press=null;
  let uiPress=null;function uiHit(e){if(!uiEnabled)return null;const r=renderer.domElement.getBoundingClientRect();return ui.hit((e.clientX-r.left)*host.clientWidth/r.width,(e.clientY-r.top)*host.clientHeight/r.height);}
  renderer.domElement.addEventListener('pointerdown',e=>{const hit=uiHit(e);if(hit){uiPress=hit;e.preventDefault();e.stopImmediatePropagation();renderer.domElement.setPointerCapture(e.pointerId);}},true);
  renderer.domElement.addEventListener('pointermove',e=>{if(uiPress||uiHit(e)){e.stopImmediatePropagation();renderer.domElement.style.cursor=uiHit(e)&&uiHit(e)!=='__panel'?'pointer':'default';}},true);
  renderer.domElement.addEventListener('pointerup',e=>{if(uiPress){const key=uiPress;uiPress=null;e.preventDefault();e.stopImmediatePropagation();if(uiHit(e)===key){ui.activate(key);fit();}}},true);
  renderer.domElement.addEventListener('wheel',e=>{const hit=uiHit(e);if(hit){e.preventDefault();e.stopImmediatePropagation();ui.activate(e.deltaY>0?'__next':'__previous');fit();}},{capture:true,passive:false});
  renderer.domElement.addEventListener('pointerdown',e=>{press=[e.clientX,e.clientY];dragging=[e.clientX,e.clientY];dragged=false;renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(!dragging||!model)return;const dx=e.clientX-dragging[0];if(Math.hypot(e.clientX-press[0],e.clientY-press[1])>4){dragged=true;model.rotation.y+=dx*.009;model.updateWorldMatrix(true,true);highlight?.update();fit();}dragging=[e.clientX,e.clientY];});
  renderer.domElement.addEventListener('pointercancel',()=>{dragging=null;press=null;uiPress=null;});
  renderer.domElement.addEventListener('pointerup',e=>{dragging=null;if(dragged||!press||Math.hypot(e.clientX-press[0],e.clientY-press[1])>5){press=null;return;}press=null;if(!model||!active)return;const rect=renderer.domElement.getBoundingClientRect();const v=uiEnabled?ui.layout.model:{x:0,y:0,w:host.clientWidth,h:host.clientHeight};pointer.set(((e.clientX-rect.left)*host.clientWidth/rect.width-v.x)/v.w*2-1,1-((e.clientY-rect.top)*host.clientHeight/rect.height-v.y)/v.h*2);raycaster.setFromCamera(pointer,camera);for(const hit of raycaster.intersectObject(model,true)){let o=hit.object;while(o&&!o.userData.mountedCard)o=o.parent;if(o?.userData.mountedCard){onInspect?.(o.userData.mountedCard);break;}}});
  const observer=new ResizeObserver(fit);observer.observe(host);
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();active=false;if(pending)cancelAnimationFrame(pending);pending=0;onFailure();});
  renderer.domElement.addEventListener('webglcontextrestored',()=>{active=true;if(last){update(...last);host.dispatchEvent(new Event('sea3drestored'));}});
  return {update,inspect,interface(snapshot,onAction){uiEnabled=true;const layout=ui.set(snapshot,onAction,Math.max(host.clientWidth,1),Math.max(host.clientHeight,1));fit();return layout;},shadows(enabled){renderer.shadowMap.enabled=!!enabled;ground.visible=!!enabled;request();},parts(){return inspection?.parts.map(p=>p.key)||[];},focus(key){const part=inspection?.parts.find(p=>p.key===key);if(!part)return;if(highlight){scene.remove(highlight);highlight.geometry.dispose();highlight.material.dispose();}highlight=new THREE.BoxHelper(part.object,0xd5a544);scene.add(highlight);request();},view(direction){if(model)model.rotation.y=0;angle=direction==='rear'?[-7,4.5,-7]:direction==='front'?[7,2.7,0]:[7,4.5,7];camera.zoom=1;fit();},dispose(){active=false;observer.disconnect();controls.dispose();ui.dispose();clearInspection();release();ground.geometry.dispose();ground.material.dispose();environment.dispose();renderer.dispose();if(pending)cancelAnimationFrame(pending);renderer.domElement.remove();}};
}
