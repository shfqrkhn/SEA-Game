#!/usr/bin/env node
// Mutation checks for the synthetic protocol model. No game/release certification.
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdirSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {resolve,dirname,join,relative,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {runInNewContext,Script} from 'node:vm';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const source=read('tools/check-mpes.mjs');
const start=source.indexOf('export function protocolExample('),end=source.indexOf('\n\ncheck(',start);
assert(start>=0&&end>start);
const fn=source.slice(start,end).replace(/^export /,'');
const fixtures=JSON.parse(read('docs/assurance/scenarios.json'));
const evaluate=code=>runInNewContext(code+';protocolExample',{}, {timeout:1000});
const base=evaluate(fn);
for(const c of fixtures.cases)assert.equal(base({...fixtures.defaults,...c.input}),c.expected,c.id);
const mutants=[
 ['authority bypass',"if(x.authorized!==true||x.inScope!==true||x.grantCurrent!==true)return 'BLOCK_AUTHORITY';",''],
 ['budget ignored',"if(x.budgetAvailable!==true)return 'CHECKPOINT';",''],
 ['unknown effect replay',"if(x.effect==='UNKNOWN'||x.effect==='SENT')return 'RECONCILE_EFFECT';",''],
 ['sent effect replay',"x.effect==='UNKNOWN'||x.effect==='SENT'","x.effect==='UNKNOWN'"],
 ['unverified effect accepted',"x.postconditionVerified===true?'CONFIRM_EXISTING_EFFECT':'RECONCILE_EFFECT'","'CONFIRM_EXISTING_EFFECT'"],
 ['concurrent head ignored',"if(x.headCurrent!==true)return 'REBASE_REVERIFY';",''],
 ['specification change ignored',"if(x.specCurrent!==true)return 'RESPECIFY_REVERIFY';",''],
 ['stale evidence accepted',"if(!x.candidate||x.candidate!==x.evidenceCandidate)return 'REVERIFY';",''],
 ['empty gates accepted','||!x.gates.length',''],
 ['failed gate ignored',"x.gates.some(g=>g!=='PASS')","x.gates.some(g=>g!=='PASS'&&g!=='FAIL')"],
 ['mock evidence accepted','x.actualEvidence!==true||',''],
 ['retention unresolved',"if(x.action==='retire'&&x.retentionResolved!==true)return 'BLOCK_RETENTION';",''],
 ['runtime invented',"x.runtimeAvailable===true?'EXECUTE_GRANTED_EFFECT':'BLOCK_RUNTIME'","'EXECUTE_GRANTED_EFFECT'"],
 ['harness failure counts as red',"if(x.red==='harness-failure')return 'REPAIR_HARNESS';","if(x.red==='harness-failure')return 'IMPLEMENT';"],
 ['red bypassed',"x.red==='relevant-failure'?'IMPLEMENT':'ESTABLISH_ORACLE'","'IMPLEMENT'"],
 ['stop ignored',"if(x.stop===true)return 'CHECKPOINT_STOP';",''],
 ['refactor baseline fabricated',"x.baselineVerified===true?'IMPLEMENT':'ESTABLISH_BASELINE'","'IMPLEMENT'"],
 ['untrusted directive executed',"if(x.untrustedDirective===true)return 'IGNORE_DIRECTIVE_CONTINUE_CONTRACT';","if(x.untrustedDirective===true)return 'EXECUTE_GRANTED_EFFECT';"]
];
const results=[];
for(const [name,from,to]of mutants){
 assert(fn.includes(from),'Mutation target missing: '+name);const mutated=fn.replace(from,to);new Script(mutated);
 const decide=evaluate(mutated);const killedBy=fixtures.cases.filter(c=>decide({...fixtures.defaults,...c.input})!==c.expected).map(c=>c.id);
 assert(killedBy.length,'Survived semantic mutant: '+name);results.push({name,killedBy});
}
// Exercise the real CLI in a disposable repository, not a mirrored filter.
const project=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const checkpoint=JSON.parse(execFileSync(process.execPath,[join(project,'tools/check-mpes.mjs'),'--key'],{cwd:project,encoding:'utf8'}));
const sandbox=mkdtempSync(join(tmpdir(),'sea-material-inventory-'));
const inventoryCases=[];
try{
 for(const name of Object.keys(checkpoint.basis.files)){
  const target=resolve(sandbox,name);
  assert(relative(sandbox,target)&&!relative(sandbox,target).startsWith('..'+sep));
 mkdirSync(dirname(target),{recursive:true});writeFileSync(target,readFileSync(resolve(project,name)));
 }
 const git=(...args)=>execFileSync('git',args,{cwd:sandbox,stdio:'pipe'});
 git('init');git('add','.');git('-c','user.name=SEA test','-c','user.email=sea-test@example.invalid','commit','-m','Isolated inventory fixture');
 const inspect=()=>JSON.parse(execFileSync(process.execPath,[join(sandbox,'tools/check-mpes.mjs'),'--key'],{cwd:sandbox,encoding:'utf8',stdio:'pipe'}));
 const before=inspect();
 const artifact=join(sandbox,'.artifacts/local-run/receipt.json');
 mkdirSync(dirname(artifact),{recursive:true});writeFileSync(artifact,'{"status":"local"}');
 assert.equal(inspect().key,before.key,'Local run outputs must not change material identity');
 writeFileSync(artifact,'{"status":"changed"}');assert.equal(inspect().key,before.key,'Changed run outputs must remain outside material identity');
 inventoryCases.push('local run output creation/change leaves key unchanged');
 // Exercise the shipped HTML even when a contributor ignores and untracks it.
 git('rm','--cached','dist/index.html');
 writeFileSync(join(sandbox,'.git/info/exclude'),'dist/index.html\nAGENTS.md\n');
 assert.equal(inspect().key,before.key,'Tracking status cannot change identical distribution identity');
 const distribution=join(sandbox,'dist/index.html'),originalDistribution=readFileSync(distribution);
 writeFileSync(distribution,Buffer.concat([originalDistribution,Buffer.from(' ')]));
 assert.notEqual(inspect().key,before.key,'Ignored primary distribution mutations remain material');
 writeFileSync(distribution,originalDistribution);
 const sibling=join(sandbox,'dist/extra.js');writeFileSync(sibling,'extra runtime');
 assert.throws(()=>inspect(),/Only dist\/index.html belongs/,'Runtime siblings cannot silently join the distribution');rmSync(sibling);
 inventoryCases.push('ignored primary HTML changes remain keyed; runtime siblings are rejected');
 const contract=join(sandbox,'AGENTS.md'),originalContract=checkpoint.basis.files['AGENTS.md']?readFileSync(contract):null;
 writeFileSync(contract,originalContract?Buffer.concat([originalContract,Buffer.from('\n')]):'Maintenance contract fixture.\n');
 assert.notEqual(inspect().key,before.key,'Ignored root maintenance contracts remain material');
 if(originalContract)writeFileSync(contract,originalContract);else rmSync(contract);
 inventoryCases.push('ignored root maintenance contract creation/change changes material identity');
 const cache=join(sandbox,'tools/__pycache__/inventory-fixture.cpython-312.pyc');
 mkdirSync(dirname(cache),{recursive:true});writeFileSync(cache,'disposable bytecode A');
 const cached=inspect();assert.equal(cached.key,before.key,'Generated Python bytecode must not change material identity');
 writeFileSync(cache,'disposable bytecode B');assert.equal(inspect().key,before.key,'Cache bytes must not affect material identity');
 inventoryCases.push('generated Python bytecode creation/change leaves key unchanged');
 const ignored=join(sandbox,'source/ignored-material.js');
 writeFileSync(join(sandbox,'.git/info/exclude'),'source/ignored-material.js\n');writeFileSync(ignored,'const material=1;');
 const added=inspect();assert(added.basis.files['source/ignored-material.js']);assert.notEqual(added.key,before.key,'Ignored source remains material');
 writeFileSync(ignored,'const material=2;');assert.notEqual(inspect().key,added.key,'Ignored source changes invalidate material identity');
 inventoryCases.push('ignored source creation/change still invalidates key');
 const nested=join(sandbox,'tools/__pycache__/governed-source.js');writeFileSync(nested,'const governed=true;');
 assert(inspect().basis.files['tools/__pycache__/governed-source.js'],'Cache directory cannot hide non-bytecode material');
 inventoryCases.push('non-bytecode source in cache directory remains material');
}finally{
 assert(dirname(sandbox)===resolve(tmpdir())&&sandbox.startsWith(join(resolve(tmpdir()),'sea-material-inventory-')));
 rmSync(sandbox,{recursive:true,force:true});
}
console.log(JSON.stringify({result:'PASS',scope:'Synthetic protocol and actual material-inventory CLI only; no product release acceptance',baselineCases:fixtures.cases.length,semanticMutantsKilled:results.length,mutants:results,inventoryCases},null,2));
