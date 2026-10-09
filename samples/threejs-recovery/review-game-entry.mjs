import {parseHTML} from 'linkedom';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
import * as THREE from 'three';
import {createPart,createMission,createConfiguration,MODEL_IDS,MISSION_IDS,materials} from '../../source/three/game-models.mjs';
import {studio} from './models.mjs';
import {createRequire} from 'node:module';
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
const {document}=parseHTML('<html><body></body></html>');globalThis.document=document;
const sharp=createRequire('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json')('sharp');
const out=process.env.SEA_REVIEW_OUT||'docs/evidence/convergence/threejs-realism-20261008/geometry-review';await fs.mkdir(out,{recursive:true});
const requested=process.env.SEA_REVIEW_GROUPS?.split(',');
const engine=await fs.readFile('source/shared/engine.js','utf8'),names=vm.runInNewContext(engine+';Object.fromEntries([...CARD_INDEX].map(([id,c])=>[id,c.title.en]))');
const renderer=new SVGRenderer();renderer.setSize(480,290);renderer.setPrecision(2);renderer.setQuality('high');
const groups=[['vehicles',MISSION_IDS.map(id=>[id,()=>createMission(id),id])],...['CAP','MOB','FP','PRO','COM','SA','ACC','SE'].map(prefix=>[prefix,MODEL_IDS.filter(id=>id.startsWith(prefix+'-')).map(id=>[id,()=>createPart(id),names[id]])]),['builds',MISSION_IDS.map(id=>[id,()=>createConfiguration(id,['CAP-C','MOB-A','FP-D','PRO-B','COM-C','SA-D','ACC-F','SE-A']),id+' assembled'])]];
const receipts=[];let sheetNumber=0;
for(const [group,models]of groups.filter(([group])=>!requested||requested.includes(group)))for(let begin=0;begin<models.length;begin+=9){
 const batch=models.slice(begin,begin+9);let content='';
 for(let i=0;i<batch.length;i++){
  const [id,factory,title]=batch[i],model=factory();model.traverse(o=>{if(o.isMesh){const previous=o.material;o.material=new THREE.MeshLambertMaterial({color:previous.color,side:previous.side,transparent:previous.transparent,opacity:previous.opacity});}});
  const {scene,camera}=studio(model,480/290,[7,4.5,7]);scene.children.filter(o=>o.isLight).forEach(o=>o.intensity*=.42);renderer.render(scene,camera);
  const inner=renderer.domElement.innerHTML,x=i%3*480,y=Math.floor(i/3)*350;
  const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  content+=`<g transform="translate(${x+240} ${y+145})"><rect x="-240" y="-145" width="480" height="290" fill="#e9e6df"/>${inner}</g><text x="${x+16}" y="${y+312}" font-family="sans-serif" font-size="18" fill="#172a24">${esc(id+' · '+title)}</text>`;
  const gs=new Set(),ms=new Set();model.traverse(o=>{if(o.geometry)gs.add(o.geometry);if(o.material)ms.add(o.material)});gs.forEach(g=>g.dispose());ms.forEach(m=>m.dispose());receipts.push({group,id,title});
 }
 const height=Math.ceil(batch.length/3)*350,svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="${height}" viewBox="0 0 1440 ${height}"><rect width="1440" height="${height}" fill="white"/>${content}</svg>`;
 const name=String(++sheetNumber).padStart(2,'0')+'-'+group;await sharp(Buffer.from(svg)).png().toFile(path.join(out,name+'.png'));console.log(name);
}
await fs.writeFile(path.join(out,'receipt.json'),JSON.stringify({method:'Actual Three.js factory geometry, SVGRenderer projection and simplified Lambert lighting; no WebGL/PBR acceptance claim',models:receipts},null,2)+'\n');
