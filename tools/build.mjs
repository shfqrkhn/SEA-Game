#!/usr/bin/env node
// Build two independent offline applications from one shared presentation source.
import {readFileSync,writeFileSync} from 'node:fs';
import {Script} from 'node:vm';
const check=process.argv.includes('--check');
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const css=read('source/shared/styles.css');
const engine=read('source/shared/engine.js');
let failed=false;
for(const [name,target] of [['instructor','SEA_Instructor_Standalone.html'],['student','SEA_Student_Standalone.html']]){
 const template=read('source/'+name+'.template.html');
 const js=read('source/'+name+'.js');
 if(template.split('{{SEA_STYLES}}').length!==2||template.split('{{SEA_SCRIPT}}').length!==2)throw Error(name+': template slots invalid');
 new Script(engine+'\n'+js,{filename:'source/shared/engine.js + source/'+name+'.js'});
 const html=template.replace('{{SEA_STYLES}}',()=>'<style>'+css+'</style>').replace('{{SEA_SCRIPT}}',()=>'<script>'+engine+'\n'+js+'</script>');
 if(!html.startsWith('<!doctype html>')||!html.endsWith('</html>'))throw Error(name+': malformed output');
 if(/\b(?:confirm|alert|prompt)\s*\(/.test(js))throw Error(name+': native dialog introduced');
 if(check){
  if(read(target)!==html){console.error(target+': generated output differs');failed=true}
  else console.log(target+': PASS byte-for-byte reproduction');
 }else{writeFileSync(new URL('../'+target,import.meta.url),html);console.log(target+': written')}
}
if(failed)process.exitCode=1;
