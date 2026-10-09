import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import fs from 'node:fs/promises';
const target=new URL('./verify-game.generated.mjs',import.meta.url);
await build({entryPoints:[fileURLToPath(new URL('./verify-game-entry.mjs',import.meta.url))],outfile:fileURLToPath(target),bundle:true,platform:'node',format:'esm',nodePaths:[fileURLToPath(new URL('./node_modules',import.meta.url))]});
try{await import(target.href+'?run='+Date.now());}finally{await fs.unlink(target);}
