import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import fs from 'node:fs/promises';
const target=new URL('./verify-interface.generated.mjs',import.meta.url);
try{await build({entryPoints:[fileURLToPath(new URL('./verify-interface-entry.mjs',import.meta.url))],outfile:fileURLToPath(target),bundle:true,platform:'node',format:'esm',nodePaths:[fileURLToPath(new URL('./node_modules',import.meta.url))]});await import(target.href+'?run='+Date.now());}finally{await fs.rm(target,{force:true});}
