// Read-only product audit. Writes evidence and an isolated LF reconstruction only.
import {readFileSync,writeFileSync,mkdirSync,mkdtempSync,readdirSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync,spawnSync} from 'node:child_process';
import {runInNewContext} from 'node:vm';
import {createHash} from 'node:crypto';
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,'../..');
const read=p=>readFileSync(resolve(root,p),'utf8');
const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
const hash=s=>createHash('sha256').update(s).digest('hex');
const runs=resolve(here,'audit-runs');mkdirSync(runs,{recursive:true});
const output=mkdtempSync(resolve(runs,'run-'));
const result={timestamp:new Date().toISOString(),head:git('rev-parse','HEAD'),node:process.version,platform:process.platform,checks:{},limitations:['No real-browser gameplay, image decoding, accessibility or classroom acceptance performed by this script.','Observed rules do not overwrite or approve the frozen rules-baseline fixture.']};
const run=(file,args=[],cwd=root)=>{const x=spawnSync(process.execPath,[file,...args],{cwd,encoding:'utf8'});return {exitCode:x.status,stdout:x.stdout.trim(),stderr:x.stderr.trim()}};
result.checks.workingTreeParity=run('tools/build.mjs',['--check']);
result.checks.existingTests=run('tools/test.mjs');
result.lineEndings=git('ls-files','--eol','source','tools','SEA_Instructor_Standalone.html','SEA_Student_Standalone.html');
const stage=resolve(output,'lf-reconstruction');mkdirSync(stage,{recursive:true});
for(const p of git('ls-files').split('\n').filter(p=>p.startsWith('source/')||p.startsWith('tools/')||/^SEA_.*Standalone.html$/.test(p))){
 const target=resolve(stage,p);mkdirSync(dirname(target),{recursive:true});
 writeFileSync(target,execFileSync('git',['show','HEAD:'+p],{cwd:root}));
}
result.checks.committedLFParity=run('tools/build.mjs',['--check'],stage);
result.checks.committedLFTests=run('tools/test.mjs',[],stage);
const engine=read('source/shared/engine.js');
function content(source,isOriginal=false){
 const start=isOriginal?source.slice(source.indexOf('<script>')+8):engine+'\n'+source;
 const end=start.indexOf('function effectsHtml');if(end<0)throw Error('Unsupported source extraction boundary');
 return JSON.parse(runInNewContext(start.slice(0,end)+';JSON.stringify({app:APP,missions:MISSIONS,pools:POOLS,slots:SLOT_ORDER,scoreSource:score.toString()})',{}, {timeout:5000}));
}
const oldRoot=resolve(root,'docs/reference');
const instructor=content(read('source/instructor.js')),student=content(read('source/student.js'));
const originalI=content(readFileSync(resolve(oldRoot,'original-instructor.html.txt'),'utf8'),true);
const originalS=content(readFileSync(resolve(oldRoot,'original-student.html.txt'),'utf8'),true);
result.checks.ruleData={rolesEqual:JSON.stringify(instructor)===JSON.stringify(student),originalInstructorEqual:JSON.stringify(instructor)===JSON.stringify(originalI),originalStudentEqual:JSON.stringify(student)===JSON.stringify(originalS),cardCount:Object.values(instructor.pools).reduce((n,x)=>n+x.length,0)};
writeFileSync(resolve(output,'rules-observed.json'),JSON.stringify(instructor,null,2)+'\n');
const s=read('source/student.js'),start=s.indexOf('function removePurchase(team,index)'),end=s.indexOf('function addMissingPurchase()',start),fn=s.slice(start,end);
const button={dataset:{removePurchase:'R1-L1-CAP-A'}},host={innerHTML:''};let approved=null;
const team={purchases:[{round:1,lot:1,id:'CAP-A',instance:'R1-L1-CAP-A',title:{en:'Test'},paid:100,e:{CAP:2}}],purchasesByRound:[1,0,0,0,0,0,0],totals:{CAP:2},cost:100};
const ctx={state:{phase:'build',team},lang:'en',$:()=>host,$$:()=>[button],t:x=>x,esc:x=>x,money:x=>x,must:ok=>{if(!ok)throw Error('invalid-state')},seaConfirmGate:(key,_message,retry)=>{if(approved===key){approved=null;return true}approved=key;try{retry()}finally{approved=null}return false},seaNotify:()=>{},saveState:()=>{},renderBuild:()=>{}};
try{if(!fn.startsWith('function removePurchase(team,index)')||!fn.includes('function renderReconcileInventory'))throw Error('Unsupported source extraction boundary');runInNewContext(fn+';renderReconcileInventory()',ctx,{timeout:5000});button.onclick();const removed=team.purchases.length===0&&team.cost===0&&team.totals.CAP===0&&team.purchasesByRound[0]===0;if(!removed)throw Error('Purchase and derived totals were not removed');result.checks.removePurchaseHandler={removed,method:'Rendered handler with immediate test confirmation and minimal DOM stubs, not a browser test'}}catch(e){result.checks.removePurchaseHandler={error:e.name+': '+e.message,method:'Isolated actual functions with minimal DOM stubs, not a browser test'}}
const assetRoot=resolve(root,'assets/v1');const list=[];
function walk(p){for(const e of readdirSync(p,{withFileTypes:true})){const q=resolve(p,e.name);if(e.isDirectory())walk(q);else if(/\.(svg|webp)$/.test(e.name))list.push(q)}}walk(assetRoot);
const svg=list.filter(p=>p.endsWith('.svg')),webp=list.filter(p=>p.endsWith('.webp'));
result.checks.assets={svgCount:svg.length,webpCount:webp.length,matchingPairs:svg.every(p=>webp.includes(p.replace(/\.svg$/,'.webp'))),webpHeadersAndLengths:webp.every(p=>{const b=readFileSync(p);return b.toString('ascii',0,4)==='RIFF'&&b.toString('ascii',8,12)==='WEBP'&&b.readUInt32LE(4)+8===b.length})};
result.files=Object.fromEntries(['source/instructor.js','source/student.js','source/shared/engine.js','tools/test.mjs','tools/build.mjs'].map(p=>[p,{workingBytes:readFileSync(resolve(root,p)).length,committedSha256:hash(execFileSync('git',['show','HEAD:'+p],{cwd:root}))}]));
writeFileSync(resolve(output,'audit.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({output,checks:result.checks},null,2));
