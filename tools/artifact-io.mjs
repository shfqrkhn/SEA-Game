import {existsSync,readFileSync,writeFileSync,mkdirSync,mkdtempSync,lstatSync,realpathSync,rmSync} from 'node:fs';
import {resolve,dirname,join,basename} from 'node:path';
import {fileURLToPath} from 'node:url';

// Finite generators leave identical artifacts and their timestamps untouched.
export function writeChangedArtifact(path,value){
 const bytes=Buffer.isBuffer(value)?value:Buffer.from(value,'utf8');
 if(existsSync(path)&&readFileSync(path).equals(bytes))return false;
 writeFileSync(path,bytes);return true;
}

// Disposable verification stays in the existing ignored project artifact root.
export function withLocalArtifactSandbox(prefix,run){
 if(!/^[a-z][a-z0-9-]*-$/.test(prefix))throw Error('Invalid local sandbox prefix');
 const project=realpathSync(resolve(dirname(fileURLToPath(import.meta.url)),'..'));
 const artifacts=join(project,'.artifacts');
 if(existsSync(artifacts)&&lstatSync(artifacts).isSymbolicLink())throw Error('Linked artifact directory');
 mkdirSync(artifacts,{recursive:true});
 const parent=realpathSync(artifacts),sandbox=mkdtempSync(join(parent,prefix));
 try{return run(sandbox)}finally{
  const target=realpathSync(sandbox);
  if(dirname(target)!==parent||!basename(target).startsWith(prefix)||lstatSync(sandbox).isSymbolicLink())throw Error('Unsafe sandbox cleanup');
  rmSync(target,{recursive:true,force:true});
 }
}
