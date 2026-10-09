import {build} from 'esbuild';
import fs from 'node:fs/promises';
const destination=new URL('./review-game.generated.mjs',import.meta.url);
try{await build({entryPoints:[new URL('./review-game-entry.mjs',import.meta.url).pathname.replace(/^\/(\w:)/,'$1')],bundle:true,platform:'node',format:'esm',packages:'external',outfile:destination.pathname.replace(/^\/(\w:)/,'$1')});await import(destination.href+'?run='+Date.now());}finally{await fs.rm(destination,{force:true});}
