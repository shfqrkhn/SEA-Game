// QA-only rasterization of canonical vector files; never edits source artwork.
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const sharp=createRequire('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json')('sharp');
const root=new URL('../../',import.meta.url),out=new URL('docs/evidence/convergence/art-border-repair-20261008/',root);
const queue=JSON.parse(await fs.readFile(new URL('queue.json',out),'utf8'));
await fs.mkdir(new URL('vector-previews/',out),{recursive:true});
for(const item of queue){
  const receipt=new URL(`encodings/${item.identity.replace('/','-')}.json`,out);try{await fs.access(receipt);}catch{continue;}
  const svg=await fs.readFile(new URL(`assets/v1/${item.identity}.svg`,root));
  await fs.mkdir(new URL(`vector-previews/${item.identity.split('/')[0]}/`,out),{recursive:true});
  await sharp(svg).png().toFile(fileURLToPath(new URL(`vector-previews/${item.identity}.png`,out)));
}
console.log('Canonical repaired vector previews rendered');
