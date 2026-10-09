#!/usr/bin/env node
// Build two independent offline applications from one shared presentation source.
import {readFileSync,writeFileSync} from 'node:fs';
import {Script,runInNewContext} from 'node:vm';
import {embeddedArtworkSource} from './artwork-source.mjs';
import {validateLocalization} from './localization.mjs';
import {createHash} from 'node:crypto';
const check=process.argv.includes('--check');
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8').replace(/\r\n?/g,'\n');
const css=read('source/shared/styles.css');
const engine=read('source/shared/engine.js');
const artwork=embeddedArtworkSource(runInNewContext(engine+'\n;([...CARD_INDEX.keys(),"TRAIN-CAP",...Object.values(MISSION_ARTWORK)])'));
const presentation=read('source/shared/presentation.js');
const threeBundle=read('source/vendor/sea-three.bundle.js');
const threePresentation=read('source/shared/three-presentation.js');
let failed=false;
for(const [name,target] of [['instructor','SEA_Instructor_Standalone.html'],['student','SEA_Student_Standalone.html']]){
 const template=read('source/'+name+'.template.html').trimEnd();
 const js=read('source/'+name+'.js');
 const dictionary=js.match(/const I18N=(.*?);\n/)?.[1];
 if(!dictionary)throw Error(name+': missing language dictionaries');
 validateLocalization(JSON.parse(dictionary),[template,js,presentation,threePresentation]);
 if(['SEA_STYLES','SEA_SCRIPT','SEA_CSP'].some(slot=>template.split('{{'+slot+'}}').length!==2))throw Error(name+': template slots invalid');
 if(/\son[a-z]+\s*=/i.test(template))throw Error(name+': executable HTML attribute introduced');
 if(/const BUILTIN_CARD_ART\s*=/.test(js))throw Error(name+': duplicated vector table in controller');
 const script=engine+'\n'+artwork+'\n'+presentation+'\n'+threeBundle+'\n'+threePresentation+'\n'+js;
 if(/<\/script/i.test(script))throw Error(name+': embedded script closing tag introduced');
 new Script(script,{filename:'shared rules/presentation + source/'+name+'.js'});
 const scriptHash=createHash('sha256').update(script,'utf8').digest('base64');
 const policy="default-src 'none'; script-src 'sha256-"+scriptHash+"'; script-src-attr 'none'; style-src 'unsafe-inline'; img-src 'none'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";
 const html=template.replace('{{SEA_CSP}}',()=>'<meta http-equiv="Content-Security-Policy" content="'+policy+'">').replace('{{SEA_STYLES}}',()=>'<style>'+css+'</style>').replace('{{SEA_SCRIPT}}',()=>'<script>'+script+'</script>');
 if(!html.startsWith('<!doctype html>')||!html.endsWith('</html>'))throw Error(name+': malformed output');
 if(/\b(?:confirm|alert|prompt)\s*\(/.test(js))throw Error(name+': native dialog introduced');
 if(check){
  if(readFileSync(new URL('../'+target,import.meta.url),'utf8')!==html){console.error(target+': generated output differs');failed=true}
  else console.log(target+': PASS byte-for-byte reproduction');
 }else{writeFileSync(new URL('../'+target,import.meta.url),html);console.log(target+': written')}
}
if(failed)process.exitCode=1;
