import fs from 'node:fs';
import assert from 'node:assert/strict';
// Node's ordinary utf8 reads silently replace invalid bytes. Check the actual
// authored source/test bytes before their labels or fixtures can be trusted.
const decoder=new TextDecoder('utf-8',{fatal:true});let checked=0;
function checkAuthored(directory){
 for(const item of fs.readdirSync(directory,{withFileTypes:true})){
  if(item.name==='node_modules'||item.name==='.git')continue;
  const target=new URL(item.name+(item.isDirectory()?'/':''),directory);
  if(item.isDirectory()){checkAuthored(target);continue;}
  if(!/\.(?:mjs|js|ts|html|css|json|md)$/.test(item.name))continue;
  let text;assert.doesNotThrow(()=>{text=decoder.decode(fs.readFileSync(target));},target.pathname+' contains invalid UTF-8 bytes');
  assert(!text.includes('\r'),target.pathname+' must retain repository LF bytes so clean-checkout provenance matches');checked++;
 }
}
for(const directory of ['source/','tools/','samples/'])checkAuthored(new URL('../'+directory,import.meta.url));
console.log(checked+' authored source/test/sample text files contain valid UTF-8 and repository LF bytes PASS');
for(const role of ['instructor','student']){
 const source=fs.readFileSync(new URL('../source/'+role+'.js',import.meta.url),'utf8');
 const dict=JSON.parse(source.match(/const I18N=(.*?);\n/)[1]);
 assert.doesNotMatch(source,/[ÃÂ]|â[\u0080-\u00bf\u2018-\u203a\u20ac\u2122]/,role+' source text has encoding corruption');
 assert.equal(dict.fr['app.title'],'Sensibilisation à l’ingénierie des systèmes',role+' French title must be readable Unicode');
 for(const [lang,values]of Object.entries(dict))for(const [key,value]of Object.entries(values))assert.doesNotMatch(value,/[ÃÂ]|â[\u0080-\u00bf\u2018-\u203a\u20ac\u2122]/,role+'/'+lang+'/'+key+' has encoding corruption');
}
console.log('Both role dictionaries retain readable French accents and punctuation PASS');
