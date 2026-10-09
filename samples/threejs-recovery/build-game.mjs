import {build} from 'esbuild';
import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {writeChangedArtifact} from '../../tools/artifact-io.mjs';
const root=new URL('../../',import.meta.url);
const inputs=['source/three/game-scene.mjs','source/three/interface.mjs','source/three/game-models.mjs','source/three/realism.mjs','source/three/materials.mjs','source/three/inspection.mjs','samples/threejs-recovery/models.mjs','samples/threejs-recovery/package-lock.json'];
const sourceBytes=await Promise.all(inputs.map(p=>fs.readFile(new URL(p,root))));
const hashes={};
for(let i=0;i<inputs.length;i++){
 if(sourceBytes[i].includes(13))throw Error(inputs[i]+': use repository LF line endings before building exact provenance');
 hashes[inputs[i]]=createHash('sha256').update(sourceBytes[i]).digest('hex');
}
const result=await build({entryPoints:[fileURLToPath(new URL('source/three/game-scene.mjs',root))],bundle:true,write:false,format:'iife',globalName:'SEAThree',minify:true,target:'es2022',legalComments:'inline',nodePaths:[fileURLToPath(new URL('node_modules',import.meta.url))]});
const script=result.outputFiles[0].text.replace(/<\/script/gi,'<\\/script').replace(/[ \t]+$/gm,'').replace(/^[ \t]+/gm,s=>s.replaceAll('\t','  '));
await fs.mkdir(new URL('source/vendor/',root),{recursive:true});
writeChangedArtifact(new URL('source/vendor/sea-three.bundle.js',root),script);
writeChangedArtifact(new URL('source/vendor/sea-three.bundle.json',root),JSON.stringify({three:'0.186.1',recipe:'node samples/threejs-recovery/build-game.mjs',sha256:createHash('sha256').update(script).digest('hex'),inputs:hashes},null,2)+'\n');
console.log('Built local Three.js game bundle');
