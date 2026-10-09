#!/usr/bin/env node
// Specification audit aid, never a release authorizer or autonomous service.
// Synthetic decisions test the written protocol's examples, not real-world facts.
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync,lstatSync} from 'node:fs';
import {resolve,relative,dirname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import os from 'node:os';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(resolve(root,p),'utf8');
const sha=b=>createHash('sha256').update(b).digest('hex');
const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
const checks=[];
const check=(name,fn)=>{fn();checks.push(name)};
const md=read('docs/MPES.md');
const requirements=[...md.matchAll(/^\| (R\d{2}) \| (.+)$/gm)];
const tests=[...md.matchAll(/^\| (T\d{2}) \| (.+)$/gm)];
const reqIds=new Set(requirements.map(x=>x[1])),testIds=new Set(tests.map(x=>x[1]));

export function protocolExample(x){
 if(x.stop===true)return 'CHECKPOINT_STOP';
 if(x.authorized!==true||x.inScope!==true||x.grantCurrent!==true)return 'BLOCK_AUTHORITY';
 if(x.budgetAvailable!==true)return 'CHECKPOINT';
 if(x.untrustedDirective===true)return 'IGNORE_DIRECTIVE_CONTINUE_CONTRACT';
 if(x.effect==='UNKNOWN'||x.effect==='SENT')return 'RECONCILE_EFFECT';
 if(x.effect==='ALREADY_APPLIED')return x.postconditionVerified===true?'CONFIRM_EXISTING_EFFECT':'RECONCILE_EFFECT';
 if(x.headCurrent!==true)return 'REBASE_REVERIFY';
 if(x.specCurrent!==true)return 'RESPECIFY_REVERIFY';
 if(!x.candidate||x.candidate!==x.evidenceCandidate)return 'REVERIFY';
 if(x.dependenciesReady!==true)return x.independentReady===true?'SELECT_INDEPENDENT_WORK':'BLOCK_DEPENDENCY';
 if(x.capacity!==true)return 'BLOCK_CAPABILITY';
 if(x.action==='schedule')return x.runtimeAvailable===true?'EXECUTE_GRANTED_EFFECT':'BLOCK_RUNTIME';
 if(x.action==='retire'&&x.retentionResolved!==true)return 'BLOCK_RETENTION';
 if(['publish','retire','integrate'].includes(x.action)){
  if(x.actualEvidence!==true||!Array.isArray(x.gates)||!x.gates.length||x.gates.some(g=>g!=='PASS'))return 'BLOCK_EVIDENCE';
  return 'EXECUTE_GRANTED_EFFECT';
 }
 if(x.action!=='implement')return 'BLOCK_UNKNOWN_ACTION';
 if(x.route==='documentation')return 'VALIDATE_DOCUMENT';
 if(x.route==='refactor')return x.baselineVerified===true?'IMPLEMENT':'ESTABLISH_BASELINE';
 if(x.route!=='behavior')return 'BLOCK_UNKNOWN_ROUTE';
 if(x.red==='harness-failure')return 'REPAIR_HARNESS';
 return x.red==='relevant-failure'?'IMPLEMENT':'ESTABLISH_ORACLE';
}

check('Unique R01-R26 and T01-T27 definitions and complete test linkage',()=>{
 assert.equal(requirements.length,26);assert.equal(reqIds.size,26);
 assert.equal(tests.length,27);assert.equal(testIds.size,27);
 for(let n=1;n<=26;n++)assert(reqIds.has('R'+String(n).padStart(2,'0')));
 for(let n=1;n<=27;n++)assert(testIds.has('T'+String(n).padStart(2,'0')));
 const used=new Set();for(const row of requirements){const refs=row[2].match(/T\d{2}/g)||[];assert(refs.length);for(const id of refs){assert(testIds.has(id),id);used.add(id)}}
 for(const id of testIds)assert(used.has(id),'Unmapped test '+id);
});
check('Nine milestone weights sum to 100 and lifecycle is separately defined',()=>{
 const rows=[...md.matchAll(/^\| (M\d) -[^\n]*?\| (\d+)%/gm)];assert.equal(rows.length,9);
 assert.equal(new Set(rows.map(r=>r[1])).size,9);assert.equal(rows.reduce((n,r)=>n+Number(r[2]),0),100);
 for(const state of ['RELEASE_READY','OPERATE','INCIDENT','DEPRECATE','RETIRE_READY','RETIRED'])assert(md.includes(state));
});
// Only generated Python cache bytecode is disposable; other files in a cache
// directory, including ignored source, remain governed material.
const generatedCache=p=>/(?:^|\/)__pycache__\/[^/]+\.pyc$/.test(p);
const excluded=p=>p.startsWith('.artifacts/')||generatedCache(p);
function walk(dir){const out=[];for(const e of readdirSync(resolve(root,dir),{withFileTypes:true})){const p=(dir+'/'+e.name).replaceAll('\\','/');if(excluded(p+'/')||excluded(p))continue;assert(!e.isSymbolicLink(),'Unqualified linked dependency: '+p);if(e.isDirectory())out.push(...walk(p));else out.push(p)}return out}
const docs=walk('docs').filter(p=>p.endsWith('.md')&&!excluded(p));
check('Portable local Markdown links, heading anchors and valid representation',()=>{
 for(const p of ['README.md',...docs]){
  const text=read(p);assert(!text.includes('\uFFFD'),p);assert.equal((text.match(/^```/gm)||[]).length%2,0,p);
  for(const m of text.matchAll(/\]\(([^)]+)\)/g)){
   const href=m[1];if(/^[a-z]+:\/\//i.test(href))continue;
   const [path,anchor]=href.split('#');const target=resolve(dirname(resolve(root,p)),path||'');
   assert(existsSync(target),p+' -> '+href);
   if(anchor){const targetText=readFileSync(path?target:resolve(root,p),'utf8');
    const slugs=[...targetText.matchAll(/^#+ (.+)$/gm)].map(x=>x[1].toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu,'').replace(/ /g,'-'));
    assert(slugs.includes(anchor),'Missing anchor '+href);
   }
  }
 }
});
check('Every current document requirement/test reference resolves',()=>{
 for(const p of docs){for(const m of read(p).matchAll(/\b([RT]\d{2})\b/g))assert((m[1][0]==='R'?reqIds:testIds).has(m[1]),p+': '+m[1])}
});
check('All operational JSON documents parse',()=>{
 for(const p of walk('docs').filter(p=>p.endsWith('.json')&&!excluded(p)))JSON.parse(read(p));
});
const scenarios=JSON.parse(read('docs/assurance/scenarios.json'));
check('Synthetic protocol challenge cases match independent expected dispositions',()=>{
 assert.equal(scenarios.kind,'synthetic-protocol-examples-not-product-evidence');
 assert.equal(new Set(scenarios.cases.map(x=>x.id)).size,scenarios.cases.length);
 const coverage=new Set();for(const c of scenarios.cases){assert(c.challenge);assert(c.tests.length);for(const t of c.tests){assert(testIds.has(t));coverage.add(t)}
  assert.equal(protocolExample({...scenarios.defaults,...c.input}),c.expected,c.id+' '+c.challenge);
 }
 for(let i=22;i<=27;i++)assert(coverage.has('T'+i));
 assert.equal(protocolExample({}),'BLOCK_AUTHORITY','Absent fields fail closed');
});
check('Invalid protocol inputs do not authorize an effect',()=>{
 for(const field of ['authorized','inScope','grantCurrent','capacity','budgetAvailable','specCurrent','headCurrent','dependenciesReady']){
  for(const value of [undefined,null,false,'true',1]){
   const x={...scenarios.defaults,action:'publish',gates:['PASS'],actualEvidence:true,[field]:value};
   assert.notEqual(protocolExample(x),'EXECUTE_GRANTED_EFFECT',field+':'+value);
  }
 }
});
check('Specification and product release assurance remain separate',()=>{
 assert(md.includes('SPECIFICATION')&&md.includes('PRODUCT_RELEASE'));
});
check('One self-contained HTML is the sole runtime distribution',()=>{
 assert(existsSync(resolve(root,'dist/index.html')),'Missing primary dist/index.html');
 assert(!lstatSync(resolve(root,'dist')).isSymbolicLink(),'Linked distribution directory');
 assert.deepEqual(walk('dist'),['dist/index.html'],'Only dist/index.html belongs in runtime distribution');
 assert.match(read('dist/index.html'),/^<!doctype html>/i,'Primary distribution is HTML');
});

const files=new Set(git('ls-files','--cached','--others','--exclude-standard').split('\n').filter(Boolean));
// Include untracked and even ignored files within controlled material roots.
// New source, assets or evaluator inputs cannot evade the key through .gitignore.
for(const dir of ['source','assets','.github','docs','tools'])for(const p of walk(dir))if(!excluded(p))files.add(p);
// The user-facing artifact and maintenance contracts cannot evade identity by
// remaining untracked or being ignored. Runtime contents are checked above.
files.add('dist/index.html');
for(const p of ['LICENSE','THIRD_PARTY_NOTICES','THIRD_PARTY_NOTICES.md','THIRD_PARTY_NOTICES.txt','AGENTS.md','CLAUDE.md'])if(existsSync(resolve(root,p)))files.add(p);
for(const p of [...files])if(excluded(p))files.delete(p);
const hashes={};for(const p of [...files].sort()){
 const absolute=resolve(root,p);assert(!relative(root,absolute).startsWith('..'+sep),'Path escapes root');
 assert(existsSync(absolute),'Missing material tracked file '+p);assert(!lstatSync(absolute).isSymbolicLink(),'Unqualified linked dependency: '+p);hashes[p]=sha(readFileSync(absolute));
}
const basis={target:'SPECIFICATION',version:'1.1.1',gitHead:git('rev-parse','HEAD'),environment:{node:process.version,platform:process.platform,arch:process.arch,osRelease:os.release(),git:git('--version'),reviewMode:'single-agent-self-review; no browser or classroom acceptance'},files:hashes};
const key=sha(JSON.stringify(basis));
check('One-byte identity mutation changes convergence key',()=>{
 const changed=structuredClone(basis);changed.files['docs/MPES.md']=sha(read('docs/MPES.md')+' ');assert.notEqual(sha(JSON.stringify(changed)),key);
 const added=structuredClone(basis);added.files['source/new-material.js']=sha('new material');assert.notEqual(sha(JSON.stringify(added)),key);
 const environment=structuredClone(basis);environment.environment.node='changed';assert.notEqual(sha(JSON.stringify(environment)),key);
});
console.log(JSON.stringify({result:'PASS',scope:'Specification contracts, distribution inventory and synthetic protocol examples only',checks,scenarioCount:scenarios.cases.length,key,...(process.argv.includes('--key')?{basis}:{}),excludedRunRecords:['.artifacts/**'],excludedGeneratedArtifacts:['**/__pycache__/*.pyc']},null,2));
