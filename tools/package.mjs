#!/usr/bin/env node
// Local candidate snapshot/integrity only; never a release authorizer.
import {readFileSync,writeFileSync,mkdirSync,readdirSync,lstatSync,existsSync} from 'node:fs';
import {resolve,relative,dirname,sep,isAbsolute} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const fail=message=>{throw Error(message)};
function safePath(path){
 if(typeof path!=='string'||!path||/[\x00-\x1f]/.test(path)||path.includes('\\')||path.includes(':')||path.startsWith('/')||path.split('/').some(part=>!part||part==='.'||part==='..'))fail('Unsafe packet path');
 return path;
}
function walk(directory,prefix=''){
 const files=[];
 for(const item of readdirSync(directory,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){
  const path=prefix+item.name,absolute=resolve(directory,item.name);
  if(lstatSync(absolute).isSymbolicLink())fail('Linked packet member: '+path);
  if(item.isDirectory())files.push(...walk(absolute,path+'/'));else if(item.isFile())files.push(path);else fail('Unsupported packet member');
 }
 return files.sort();
}
export function packageKey(files){
 if(!files||typeof files!=='object'||Array.isArray(files)||!Object.keys(files).length)fail('Empty packet inventory');
 const sorted=Object.create(null),folded=new Set();for(const path of Object.keys(files).sort()){safePath(path);if(folded.has(path.toLowerCase()))fail('Case-colliding packet paths');folded.add(path.toLowerCase());if(typeof files[path]!=='string'||!/^[a-f0-9]{64}$/.test(files[path]))fail('Invalid digest');sorted[path]=files[path]}
 return sha(JSON.stringify({format:'SEA-CANDIDATE-PACKET',version:1,status:'UNQUALIFIED_CANDIDATE',files:sorted}));
}
export function verifyPacket(directory,expectedKey){
 if(!/^[a-f0-9]{64}$/.test(expectedKey||''))fail('An independently retained expected packet key is required');
 if(lstatSync(directory).isSymbolicLink())fail('Linked packet root');
 const paths=walk(directory),manifest=JSON.parse(readFileSync(resolve(directory,'packet.json'),'utf8'));
 if(manifest.format!=='SEA-CANDIDATE-PACKET'||manifest.version!==1||manifest.status!=='UNQUALIFIED_CANDIDATE'||manifest.releaseAuthorized!==false||manifest.fullClosurePasses!==0)fail('Unqualified candidate metadata required');
 const key=packageKey(manifest.files);if(key!==expectedKey||manifest.key!==key)fail('Packet key mismatch');
 const expected=['packet.json',...Object.keys(manifest.files).map(path=>'material/'+safePath(path))].sort();
 if(JSON.stringify(paths)!==JSON.stringify(expected))fail('Missing or unexpected packet members');
 for(const [path,digest]of Object.entries(manifest.files))if(sha(readFileSync(resolve(directory,'material',path)))!==digest)fail('Packet byte mismatch: '+path);
 return {result:'PASS',key,fileCount:Object.keys(manifest.files).length,scope:'Exact candidate packet bytes only; no release acceptance'};
}
export function createPacket(output){
 const destination=resolve(output),allowed=resolve(root,'.artifacts'),location=relative(allowed,destination);
 if(!location||isAbsolute(location)||location.includes(sep)||location==='..'||resolve(allowed,location)!==destination)fail('Output must be a new direct child under .artifacts');
 if(existsSync(allowed)&&lstatSync(allowed).isSymbolicLink())fail('Linked artifact output directory');
 mkdirSync(allowed,{recursive:true});
 if(lstatSync(allowed).isSymbolicLink())fail('Linked artifact output directory');
 execFileSync(process.execPath,[resolve(root,'tools/build.mjs'),'--check'],{cwd:root,stdio:'pipe'});
 const checkpoint=JSON.parse(execFileSync(process.execPath,[resolve(root,'tools/check-mpes.mjs'),'--key'],{cwd:root,encoding:'utf8'}));
 const files=checkpoint.basis.files,key=packageKey(files);
 // Refuse existing paths rather than replacing a previous recovery copy.
 mkdirSync(destination);
 for(const [path,digest]of Object.entries(files)){
  safePath(path);const original=resolve(root,path);if(lstatSync(original).isSymbolicLink())fail('Linked source member');
  const bytes=readFileSync(original);if(sha(bytes)!==digest)fail('Candidate changed while packaging: '+path);
  const target=resolve(destination,'material',path);mkdirSync(dirname(target),{recursive:true});writeFileSync(target,bytes,{flag:'wx'});
 }
 const manifest={format:'SEA-CANDIDATE-PACKET',version:1,status:'UNQUALIFIED_CANDIDATE',releaseAuthorized:false,fullClosurePasses:0,key,identityScope:'PACKAGE_BYTES_ONLY',specificationCheckpoint:checkpoint.key,files};
 writeFileSync(resolve(destination,'packet.json'),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'});
 return verifyPacket(destination,key);
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{
  const [mode,path,key]=process.argv.slice(2);if(!path||!['--output','--verify'].includes(mode))fail('Usage: node tools/package.mjs --output NEW_DIRECTORY | --verify DIRECTORY EXPECTED_KEY');
  console.log(JSON.stringify(mode==='--output'?createPacket(path):verifyPacket(resolve(path),key),null,2));
 }catch(error){console.error(error.message);process.exitCode=1}
}
