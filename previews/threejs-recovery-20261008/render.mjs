import {parseHTML} from 'linkedom';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
import {createVehicle,createWinch,materials,studio} from './models.mjs';
import * as THREE from 'three';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {document}=parseHTML('<html><body></body></html>');globalThis.document=document;
const out=new URL('./previews/',import.meta.url);await fs.mkdir(out,{recursive:true});
let sharp;try{sharp=createRequire(import.meta.url)('sharp');}catch{sharp=createRequire('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json')('sharp');}
const receipt={method:'Actual Three.js r186 SVGRenderer CPU previews of the same model factories; simplified Lambert shading. Interactive sample uses WebGL PBR materials.',webglBrowserAcceptance:'NOT_RUN: built-in browser local access constraint',samples:[]};
for(const [name,factory,angle] of [['vehicle',createVehicle,[8,4.5,8]],['winch',createWinch,[5,3,7]],['vehicle-rear',createVehicle,[-8,4.5,-8]]]){
  const model=factory(materials(true));const {scene,camera}=studio(model,1.6,angle);
  // CPU renderer uses less intense lights than the tone-mapped WebGL renderer.
  scene.children.filter(o=>o.isLight).forEach(o=>o.intensity*=.42);
  const renderer=new SVGRenderer();renderer.setSize(1440,900);renderer.setQuality('high');renderer.setPrecision(3);renderer.overdraw=.15;renderer.render(scene,camera);
  let svg=renderer.domElement.outerHTML.replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ');
  svg=svg.replace('</svg>','</svg>');
  await fs.writeFile(new URL(`${name}.svg`,out),svg);await sharp(Buffer.from(svg)).png().toFile(path.join(out.pathname.replace(/^\/(\w:)/,'$1'),`${name}.png`));
  model.updateWorldMatrix(true,true);let meshes=0,triangles=0;
  model.traverse(o=>{if(!o.isMesh)return;meshes++;assert.equal(o.material.isMaterial,true);assert.ok(o.geometry.attributes.position.array.every(Number.isFinite));triangles+=(o.geometry.index?.count??o.geometry.attributes.position.count)/3;});
  const box=new THREE.Box3().setFromObject(model,true);const projected=[];
  for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){const p=new THREE.Vector3(x,y,z).project(camera);assert.ok(Math.abs(p.x)<=.801&&Math.abs(p.y)<=.801&&Math.abs(p.z)<1,'safe frame');projected.push(p.toArray());}
  receipt.samples.push({name,meshes,triangles,bounds:{min:box.min.toArray(),max:box.max.toArray()},projectedBounds:projected});
  if(name==='vehicle')assert.equal(model.getObjectByName('mounted WR-12').userData.sharedPart,'WR-12');
}
await fs.writeFile(new URL('./verification.json',import.meta.url),JSON.stringify(receipt,null,2));console.log(JSON.stringify(receipt.samples.map(({name,meshes,triangles})=>({name,meshes,triangles}))));
