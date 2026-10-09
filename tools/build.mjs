#!/usr/bin/env node
// One shipped runtime; isolated role compositions are in-memory test fixtures.
import {readFileSync,existsSync,mkdirSync} from 'node:fs';
import {writeChangedArtifact} from './artifact-io.mjs';
import {Script,runInNewContext} from 'node:vm';
import {embeddedArtworkSource} from './artwork-source.mjs';
import {validateLocalization} from './localization.mjs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
const root=new URL('../',import.meta.url);
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8').replace(/\r\n?/g,'\n');
const hash=value=>createHash('sha256').update(value,'utf8').digest('base64');
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const scriptString=value=>JSON.stringify(value).replace(/</g,'\\u003c').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');
// Pure packaging API: importing this module never writes final artifacts.
export function generateArtifacts({readSource=read}={}){
const read=readSource;
const css=read('source/shared/styles.css');
const engine=read('source/shared/engine.js');
const app=runInNewContext(engine+'\n;APP');
if(!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(app.version))throw Error('App version must be a semantic version');
const artwork=embeddedArtworkSource(runInNewContext(engine+'\n;([...CARD_INDEX.keys(),"TRAIN-CAP",...Object.values(MISSION_ARTWORK)])'));
const presentation=read('source/shared/presentation.js');
const threeBundle=read('source/vendor/sea-three.bundle.js');
const threePresentation=read('source/shared/three-presentation.js');
const artifacts=new Map(),roles={};
for(const [name,target] of [['instructor','SEA_Instructor_Standalone.html'],['student','SEA_Student_Standalone.html']]){
 const template=read('source/'+name+'.template.html').trimEnd();
 const js=read('source/'+name+'.js');
 const dictionary=js.match(/const I18N=(.*?);\n/)?.[1];
 if(!dictionary)throw Error(name+': missing language dictionaries');
 validateLocalization(JSON.parse(dictionary),[template,js,presentation,threePresentation]);
 if(['SEA_STYLES','SEA_SCRIPT','SEA_CSP','SEA_VERSION'].some(slot=>template.split('{{'+slot+'}}').length!==2))throw Error(name+': template slots invalid');
 if(/\son[a-z]+\s*=/i.test(template))throw Error(name+': executable HTML attribute introduced');
 if(/<(?:script|iframe|object|embed)\b/i.test(template))throw Error(name+': executable or nested runtime element introduced');
 if(/const BUILTIN_CARD_ART\s*=/.test(js))throw Error(name+': duplicated vector table in controller');
 const script=engine+'\n'+artwork+'\n'+presentation+'\n'+threeBundle+'\n'+threePresentation+'\n'+js;
 if(/<\/script/i.test(script))throw Error(name+': embedded script closing tag introduced');
 new Script(script,{filename:'shared rules/presentation + source/'+name+'.js'});
 const scriptHash=createHash('sha256').update(script,'utf8').digest('base64');
 const policy="default-src 'none'; script-src 'sha256-"+scriptHash+"'; script-src-attr 'none'; style-src 'unsafe-inline'; img-src 'none'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";
 const html=template.replace('{{SEA_VERSION}}',()=>app.version).replace('{{SEA_CSP}}',()=>'<meta http-equiv="Content-Security-Policy" content="'+policy+'">').replace('{{SEA_STYLES}}',()=>'<style>'+css+'</style>').replace('{{SEA_SCRIPT}}',()=>'<script>'+script+'</script>');
 if(!html.startsWith('<!doctype html>')||!html.endsWith('</html>'))throw Error(name+': malformed output');
 if(/\b(?:confirm|alert|prompt)\s*\(/.test(js))throw Error(name+': native dialog introduced');
 artifacts.set(target,html);
 const body=template.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
 if(!body)throw Error(name+': missing role body');
 roles[name]={body:body.replace('{{SEA_SCRIPT}}','').replace('{{SEA_VERSION}}',app.version),lang:template.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1]||'en',title:template.match(/<title>([^<]*)<\/title>/)?.[1]||'Systems Engineering Awareness',js};
}
// Preserve controller state/lang/t lexical bindings. Only the small common
// presentation and bridge sources are copied per role scope; engine, artwork,
// Three.js vendor runtime and styles are shared and embedded exactly once.
const roleFunctions=Object.entries(roles).map(([name,role])=>'function seaBoot'+(name==='instructor'?'Instructor':'Student')+'(){\n'+presentation+'\n'+threePresentation+'\n'+role.js+'\n}').join('\n');
const bodies=Object.fromEntries(Object.entries(roles).map(([name,{body,lang,title}])=>[name,{body,lang,title}]));
const launch=`
const SEA_ROLE_DOCUMENTS=${scriptString(bodies)};
let seaActiveRole=null;
function seaLaunch(role){
 if(seaActiveRole!==null||!Object.prototype.hasOwnProperty.call(SEA_ROLE_DOCUMENTS,role))return false;
 const entry=SEA_ROLE_DOCUMENTS[role],template=document.createElement('template');
 template.innerHTML=entry.body;
 const notices=document.getElementById('seaLicenses');
 if(notices){const stage=template.content.querySelector('#sea3dScene');(stage||template.content).appendChild(notices);}
 const chooseRole=document.createElement('button');chooseRole.id='seaChooseRole';chooseRole.type='button';chooseRole.className='btn ghost';chooseRole.setAttribute('data-scene-section','help');chooseRole.setAttribute('data-scene-priority','90');chooseRole.textContent='Choose role (reload) / Choisir un rôle (recharger)';
 chooseRole.addEventListener('click',()=>{const next=new URL(location.href);next.searchParams.delete('role');location.assign(next.href);});
 (template.content.querySelector('#sea3dScene')||template.content).appendChild(chooseRole);
 seaActiveRole=role;document.body.replaceChildren(template.content);document.body.setAttribute('data-sea-role',role);
 document.documentElement.lang=entry.lang;document.title=entry.title;
 try{const next=new URL(location.href);next.searchParams.set('role',role);history.replaceState(null,'',next.href);}catch{}
 try{if(role==='instructor')seaBootInstructor();else seaBootStudent();}
 catch(error){const status=document.createElement('p');status.className='notice bad';status.setAttribute('role','alert');status.textContent='The selected game could not start. Reload to retry; existing saved data is retained. / Le jeu sélectionné n’a pas démarré. Rechargez pour réessayer; les données enregistrées sont conservées.';document.body.appendChild(status);console.error('SEA role startup failed',error);}
 return true;
}
for(const button of document.querySelectorAll('[data-sea-role]'))button.addEventListener('click',()=>seaLaunch(button.getAttribute('data-sea-role')));
const seaRequestedRoles=new URLSearchParams(location.search).getAll('role');
if(seaRequestedRoles.length===1&&Object.prototype.hasOwnProperty.call(SEA_ROLE_DOCUMENTS,seaRequestedRoles[0]))seaLaunch(seaRequestedRoles[0]);
else if(seaRequestedRoles.length){document.getElementById('seaLaunchStatus').textContent='Choose a valid role below. / Choisissez un rôle valide ci-dessous.';}
`;
const script=engine+'\n'+artwork+'\n'+threeBundle+'\n'+roleFunctions+'\n'+launch;
if(/<\/script/i.test(script))throw Error('Launcher: embedded script closing tag introduced');
new Script(script,{filename:'single HTML role launcher'});
const notices=['LICENSE','THIRD_PARTY_NOTICES.md'].map(path=>{const text=read(path);if(!text.trim())throw Error('Required licence notice missing: '+path);return '<h3>'+escapeHTML(path)+'</h3><pre>'+escapeHTML(text)+'</pre>';}).join('\n');
const licenseHTML='<details id="seaLicenses" data-scene-section="help" data-scene-priority="90"><summary>About / Licenses — À propos / Licences</summary>'+notices+'</details>';
const launcher=read('source/launcher.template.html').trimEnd();
if(/\son[a-z]+\s*=|<(?:script|iframe|object|embed)\b/i.test(launcher))throw Error('Launcher: executable HTML introduced');
if(['SEA_STYLES','SEA_SCRIPT','SEA_CSP','SEA_VERSION','SEA_NOTICES'].some(slot=>launcher.split('{{'+slot+'}}').length!==2))throw Error('Launcher: template slots invalid');
const launcherCSS=css+'\n#seaLauncher{max-width:48rem;margin:3rem auto;padding:1.5rem}#seaLauncher .inline{margin:1.5rem 0}#seaLicenses pre{white-space:pre-wrap;overflow-wrap:anywhere;font:12px/1.5 ui-monospace,monospace}#seaLicenses{margin:1rem 0;padding:1rem;border:1px solid #c8ccc4}';
if(/<\/style/i.test(launcherCSS))throw Error('Launcher: embedded style closing tag introduced');
const policy="default-src 'none'; script-src 'sha256-"+hash(script)+"'; script-src-attr 'none'; style-src 'sha256-"+hash(launcherCSS)+"'; style-src-attr 'unsafe-inline'; img-src 'none'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";
const html=launcher.replace('{{SEA_VERSION}}',()=>app.version).replace('{{SEA_CSP}}',()=>'<meta http-equiv="Content-Security-Policy" content="'+policy+'">').replace('{{SEA_STYLES}}',()=>'<style>'+launcherCSS+'</style>').replace('{{SEA_SCRIPT}}',()=>'<script>'+script+'</script>').replace('{{SEA_NOTICES}}',()=>licenseHTML);
if(!html.startsWith('<!doctype html>')||!html.endsWith('</html>')||/\{\{SEA_[A-Z_]+\}\}/.test(html))throw Error('Launcher: malformed output or unfilled slot');
artifacts.set('dist/index.html',html);
return artifacts;
}

if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const check=process.argv.includes('--check');let failed=false;
 for(const [target,html] of generateArtifacts()){
  if(target!=='dist/index.html')continue;
  const path=new URL(target,root);
  if(check){
   if(!existsSync(path)||readFileSync(path,'utf8')!==html){console.error(target+': generated output differs or is missing');failed=true;}
   else console.log(target+': PASS byte-for-byte reproduction');
  }else{
   mkdirSync(dirname(fileURLToPath(path)),{recursive:true});
   const changed=writeChangedArtifact(path,html);console.log(target+': '+(changed?'written':'unchanged'));
  }
 }
 if(failed)process.exitCode=1;
}
