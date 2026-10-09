import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {createVehicle,createWinch,materials,studio,fitCamera} from './models.mjs';
const host=document.querySelector('#viewport'),status=document.querySelector('#status');
let renderer;
try{renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});}
catch{status.textContent='WebGL is unavailable. The static previews remain available below.';throw new Error('WebGL unavailable');}
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;host.append(renderer.domElement);
let model,scene,camera,controls,kind='vehicle';
const mat=materials();
function load(next){
  if(model){controls.dispose();const geometries=new Set(),mats=new Set();model.traverse(o=>{if(o.isMesh){geometries.add(o.geometry);if(!Object.values(mat).includes(o.material))mats.add(o.material);}});geometries.forEach(g=>g.dispose());mats.forEach(m=>m.dispose());}
  kind=next;model=kind==='vehicle'?createVehicle(mat):createWinch(mat);
  ({scene,camera}=studio(model,host.clientWidth/host.clientHeight));
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.18}));floor.rotation.x=-Math.PI/2;floor.position.y=new THREE.Box3().setFromObject(model,true).min.y-.005;floor.receiveShadow=true;scene.add(floor);
  controls=new OrbitControls(camera,renderer.domElement);controls.target.copy(new THREE.Box3().setFromObject(model,true).getCenter(new THREE.Vector3()));controls.enableDamping=true;controls.minZoom=.5;controls.maxZoom=3;controls.maxPolarAngle=Math.PI*.48;controls.update();
  document.querySelector('#name').textContent=kind==='vehicle'?'R8 recovery vehicle · 8×8':'WR-12 hydraulic winch';
  status.textContent='Drag to orbit · scroll to zoom · Shift-drag to pan';
  for(const b of document.querySelectorAll('[data-kind]'))b.setAttribute('aria-pressed',String(b.dataset.kind===kind));resize();
}
function resize(){if(!camera)return;const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h,false);const halfH=(camera.top-camera.bottom)/2;camera.left=-halfH*w/h;camera.right=halfH*w/h;camera.updateProjectionMatrix();}
new ResizeObserver(resize).observe(host);
document.querySelectorAll('[data-kind]').forEach(b=>b.addEventListener('click',()=>load(b.dataset.kind)));
document.querySelector('#reset').addEventListener('click',()=>{fitCamera(camera,model,host.clientWidth/host.clientHeight);controls.target.copy(new THREE.Box3().setFromObject(model,true).getCenter(new THREE.Vector3()));controls.update();});
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
document.querySelector('#png').addEventListener('click',()=>{renderer.render(scene,camera);renderer.domElement.toBlob(blob=>{if(blob)download(blob,`${kind}.png`);});});
document.querySelector('#glb').addEventListener('click',async()=>{try{const data=await new GLTFExporter().parseAsync(model,{binary:true});download(new Blob([data],{type:'model/gltf-binary'}),`${kind}.glb`);status.textContent='GLB download initiated. Direct model downloads are also available below.';}catch(e){status.textContent=`Export failed: ${e.message}`;}});
load('vehicle');renderer.setAnimationLoop(()=>{controls.update();renderer.render(scene,camera);});
