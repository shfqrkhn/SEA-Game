import fs from 'node:fs';
import assert from 'node:assert/strict';
for(const role of ['instructor','student']){
 const source=fs.readFileSync(new URL('../source/'+role+'.js',import.meta.url),'utf8');
 const dict=JSON.parse(source.match(/const I18N=(.*?);\n/)[1]);
 assert.doesNotMatch(source,/[ÃÂ]|â[\u0080-\u00bf\u2018-\u203a\u20ac\u2122]/,role+' source text has encoding corruption');
 assert.equal(dict.fr['app.title'],'Sensibilisation à l’ingénierie des systèmes',role+' French title must be readable Unicode');
 for(const [lang,values]of Object.entries(dict))for(const [key,value]of Object.entries(values))assert.doesNotMatch(value,/[ÃÂ]|â[\u0080-\u00bf\u2018-\u203a\u20ac\u2122]/,role+'/'+lang+'/'+key+' has encoding corruption');
}
console.log('Both role dictionaries retain readable French accents and punctuation PASS');
