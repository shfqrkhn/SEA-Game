// Build-time canonical vectors; no executable external resource in either app.
import {readFileSync,lstatSync} from 'node:fs';
export function embeddedArtworkSource(identities){
 if(!Array.isArray(identities)||identities.length!==77||new Set(identities).size!==77)throw Error('Artwork identity inventory must contain 77 unique entries');
 const table=Object.create(null);
 for(const id of [...identities].sort()){
  if(typeof id!=='string'||!(id==='TRAIN-CAP'||/^([A-Z]+-[A-Z]|[a-z]+(?:-[a-z]+)*)$/.test(id)))throw Error('Unsafe artwork identity');
  const folder=id==='TRAIN-CAP'?'practice':/^[A-Z]/.test(id)?'cards':'vehicles',path=new URL('../assets/v1/'+folder+'/'+id+'.svg',import.meta.url);
  if(lstatSync(path).isSymbolicLink())throw Error('Linked artwork input');
  const svg=readFileSync(path,'utf8').replace(/\r\n?/g,'\n').trim();
  if(!svg.startsWith('<svg ')||!svg.endsWith('</svg>'))throw Error('Malformed canonical vector: '+id);
  table[id]=svg;
 }
 return 'const BUILTIN_CARD_ART=Object.freeze('+JSON.stringify(table)+');';
}
