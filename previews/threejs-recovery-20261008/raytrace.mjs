// Browser-free, deterministic CPU preview of the actual Three.js model geometry.
// WebGL is not being claimed as tested. No existing game raster is edited here.
import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {MeshBVH} from 'three-mesh-bvh';
import {createVehicle,createWinch,materials,studio} from './models.mjs';
import {createRequire} from 'node:module';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
let sharp;try{sharp=createRequire(import.meta.url)('sharp');}catch{sharp=createRequire('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json')('sharp');}
const width=1200,height=750;
const lights=[{position:new THREE.Vector3(5,8,6),color:new THREE.Vector3(1,.94,.84),power:2.8,radius:.75},{position:new THREE.Vector3(-5,5,-5),color:new THREE.Vector3(.75,.85,1),power:.8,radius:1.2}];
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const background=new THREE.Color('#e9e6df');
const V=()=>new THREE.Vector3();
function bake(model){
  model.updateWorldMatrix(true,true);const parts=[];
  model.traverse(o=>{if(!o.isMesh)return;const g=(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrixWorld);const count=g.attributes.position.count;const colors=new Float32Array(count*3),properties=new Float32Array(count*2);
    for(let i=0;i<count;i++){o.material.color.toArray(colors,i*3);properties[i*2]=o.material.roughness??.7;properties[i*2+1]=o.material.metalness??0;}
    g.setAttribute('color',new THREE.BufferAttribute(colors,3));g.setAttribute('props',new THREE.BufferAttribute(properties,2));
    for(const name of Object.keys(g.attributes))if(!['position','normal','color','props'].includes(name))g.deleteAttribute(name);parts.push(g);
  });
  const geometry=mergeGeometries(parts,false);const bvh=new MeshBVH(geometry,{maxLeafSize:8,indirect:true});parts.forEach(g=>g.dispose());return {geometry,bvh};
}
function shade(base,rough,metal,n,view,point,bvh,isGround=false){
  const result=base.clone().multiplyScalar(isGround?.65:.40);const origin=point.clone().addScaledVector(n,.002);
  for(const light of lights){
    let visibility=light===lights[1]?1:0;
    for(let i=0;light===lights[0]&&i<16;i++){
      const theta=i*2.399963229728653,r=Math.sqrt((i+.5)/16)*light.radius;
      const pos=light.position.clone().add(new THREE.Vector3(Math.cos(theta)*r,0,Math.sin(theta)*r));const to=pos.sub(origin),distance=to.length();
      const hit=bvh.raycastFirst(new THREE.Ray(origin,to.divideScalar(distance)),THREE.DoubleSide,0,distance);
      if(!hit)visibility+=1/16;
    }
    if(!visibility)continue;const l=light.position.clone().sub(point).normalize(),nl=Math.max(0,n.dot(l));if(!nl)continue;
    const h=l.clone().add(view).normalize(),nv=Math.max(.001,n.dot(view)),nh=Math.max(.001,n.dot(h)),vh=Math.max(0,view.dot(h));
    const a=Math.max(.07,rough*rough),a2=a*a,den=nh*nh*(a2-1)+1,D=a2/(Math.PI*den*den);
    const k=(rough+1)**2/8,G=(nv/(nv*(1-k)+k))*(nl/(nl*(1-k)+k));
    const F0=base.clone().multiplyScalar(metal).addScalar(.04*(1-metal));const F=F0.clone().add(new THREE.Vector3(1,1,1).sub(F0).multiplyScalar((1-vh)**5));
    const spec=F.multiplyScalar(D*G/(4*nv*Math.max(.001,nl)));
    const diffuse=base.clone().multiplyScalar((1-metal)/Math.PI);
    result.add(diffuse.add(spec).multiply(light.color).multiplyScalar(nl*visibility*light.power));
  }
  return result;
}
const toByte=x=>Math.round(clamp(THREE.ColorManagement.workingToColorSpace(new THREE.Color(x,x,x),THREE.SRGBColorSpace).r)*255);
function pixelColor(rgb){return rgb.map(x=>toByte(Math.max(0,x)/(1+Math.max(0,x)*.35)));}
await fs.mkdir(new URL('./previews/',import.meta.url),{recursive:true});
const results=[];
for(const [name,factory,angle] of [['vehicle',createVehicle,[8,4.5,8]],['winch',createWinch,[5,3,7]],['vehicle-rear',createVehicle,[-8,4.5,-8]]]){
  const model=factory(materials()),{camera}=studio(model,width/height,angle),{geometry,bvh}=bake(model);
  const groundY=new THREE.Box3().setFromObject(model,true).min.y-.003;
  const pixels=Buffer.alloc(width*height*3),raycaster=new THREE.Raycaster(),normal=V(),point=V(),view=V();
  const attr=geometry.attributes;const start=Date.now();
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    raycaster.setFromCamera(new THREE.Vector2((x+.5)/width*2-1,1-(y+.5)/height*2),camera);const ray=raycaster.ray;
    const hit=bvh.raycastFirst(ray,THREE.DoubleSide);let color;
    if(hit){
      point.copy(hit.point);view.copy(ray.direction).negate();
      const indexes=hit.face;const tri=new THREE.Triangle(V().fromBufferAttribute(attr.position,indexes.a),V().fromBufferAttribute(attr.position,indexes.b),V().fromBufferAttribute(attr.position,indexes.c));const weights=tri.getBarycoord(point,V());
      normal.set(0,0,0);const base=V();for(const [index,w] of [[indexes.a,weights.x],[indexes.b,weights.y],[indexes.c,weights.z]]){normal.addScaledVector(V().fromBufferAttribute(attr.normal,index),w);base.addScaledVector(V().fromBufferAttribute(attr.color,index),w);}
      normal.normalize();if(normal.dot(view)<0)normal.negate();
      color=shade(base,attr.props.getX(indexes.a),attr.props.getY(indexes.a),normal,view,point,bvh);
    }else{
      const distance=(groundY-ray.origin.y)/ray.direction.y;
      if(distance>0){point.copy(ray.origin).addScaledVector(ray.direction,distance);normal.set(0,1,0);view.copy(ray.direction).negate();color=shade(new THREE.Vector3(background.r,background.g,background.b),.9,0,normal,view,point,bvh,true);}
      else color=new THREE.Vector3(background.r,background.g,background.b);
    }
    const bytes=pixelColor(color.toArray());const at=(y*width+x)*3;pixels[at]=bytes[0];pixels[at+1]=bytes[1];pixels[at+2]=bytes[2];
  }
  await sharp(pixels,{raw:{width,height,channels:3}}).png().toFile(fileURLToPath(new URL(`./previews/${name}.png`,import.meta.url)));
  results.push({name,width,height,elapsedMs:Date.now()-start,method:'Three.js geometry/camera/material parameters + BVH CPU ray tracing, GGX direct lighting and sixteen area-light shadow rays; not WebGL execution'});console.log(name,Date.now()-start,'ms');
}
await fs.writeFile(new URL('./raytrace-verification.json',import.meta.url),JSON.stringify(results,null,2));
