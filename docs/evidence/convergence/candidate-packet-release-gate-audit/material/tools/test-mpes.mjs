#!/usr/bin/env node
// Mutation checks for the synthetic protocol model. No game/release certification.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
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
console.log(JSON.stringify({result:'PASS',scope:'Synthetic protocol evaluator only',baselineCases:fixtures.cases.length,semanticMutantsKilled:results.length,mutants:results},null,2));
