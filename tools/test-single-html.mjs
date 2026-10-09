import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {Script,createContext,runInContext,runInNewContext} from 'node:vm';
import {createRequire} from 'node:module';
import {embeddedArtworkSource} from './artwork-source.mjs';
const source=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8').replace(/\r\n?/g,'\n');
assert.match(source('tools/build.mjs'),/export function generateArtifacts/, 'Build needs a pure in-memory packaging API; importing it cannot write final artifacts');
const {generateArtifacts}=await import('./build.mjs');
const outputs=generateArtifacts();
assert.deepEqual([...outputs.keys()],['SEA_Instructor_Standalone.html','SEA_Student_Standalone.html','dist/index.html']);
const html=outputs.get('dist/index.html');
const require=createRequire(new URL('../samples/threejs-recovery/package.json',import.meta.url));
const {parseHTML}=require('linkedom');
const {document}=parseHTML(html),scripts=[...document.querySelectorAll('script')];
assert.equal(scripts.length,1,'One hash-authorized script payload');
assert.equal(document.querySelectorAll('style').length,1,'Shared styles embedded once');
assert.equal(document.querySelectorAll('[id="setup"]').length,0,'No unchosen role DOM at launcher');
assert.equal(document.querySelectorAll('[data-sea-role]').length,2,'Explicit bilingual role selector');
assert.equal(document.querySelectorAll('iframe,script[src],link[rel="stylesheet"],img[src],object,embed').length,0,'No external runtime DOM resources');
const script=scripts[0].textContent,scriptHash=createHash('sha256').update(script).digest('base64');
const styleHash=createHash('sha256').update(document.querySelector('style').textContent).digest('base64');
const policy=document.querySelector('meta[http-equiv="Content-Security-Policy"]').content;
assert(policy.includes("script-src 'sha256-"+scriptHash+"'"),'CSP binds exact script bytes');
assert(policy.includes("style-src 'sha256-"+styleHash+"'"),'CSP binds exact stylesheet bytes');
assert(policy.includes("connect-src 'none'"));assert(!policy.includes('unsafe-eval'));
assert.equal(script.split(source('source/vendor/sea-three.bundle.js')).length-1,1,'Shared Three.js runtime embedded once');
assert.equal(script.split(source('source/shared/engine.js')).length-1,1,'Shared rules embedded once');
assert.equal((script.match(/const BUILTIN_CARD_ART=/g)||[]).length,1,'Shared artwork embedded once');
new Script(script);
assert(!/\beval\s*\(|new\s+Function\b/.test(script),'Entire delivered runtime has no dynamic code generation');
assert(!/<\/script/i.test(script),'Escaped role HTML cannot terminate the script element');
const shellOnly=script.slice(script.lastIndexOf('function seaLaunch('));
assert(!/\b(?:eval|fetch|XMLHttpRequest|WebSocket)\s*\(|new\s+Function\b/.test(shellOnly),'Launcher adds no code generation or network operation');

// Actual role templates/controllers, isolated from GPU/timers/storage/browser IO.
// These checks do not establish file://, real rendering, native IME or zero egress.
for(const role of [null,'instructor','student','invalid','constructor','__proto__','instructor&role=student']){
 const pages=parseHTML(html),doc=pages.document;
 const reads=[],writes=[],frames=[],failures=[];
 const storage={getItem:key=>{reads.push(key);return null},setItem:(key,value)=>writes.push([key,value]),removeItem(){}};
 const navigations=[];
 const location={search:role?'?role='+role:'',href:'file:///candidate/index.html'+(role?'?role='+role:''),assign:url=>navigations.push(url)};
 const win={scrollTo(){},addEventListener(){},getComputedStyle:()=>({display:'block',visibility:'visible'})};
 const sandbox={document:doc,window:win,location,history:{replaceState(){}},URL,URLSearchParams,console:{...console,error:(...args)=>failures.push(args)},sessionStorage:storage,requestAnimationFrame:callback=>frames.push(callback),setTimeout:()=>0,clearTimeout(){},setInterval:()=>0,clearInterval(){},Blob,TextEncoder,crypto:{getRandomValues:array=>array.fill(1)}};
 const ctx=createContext(sandbox);
 // Only the actual pre-bundled runtime is substituted: controller/bridge/rules
 // remain unchanged, and no queued animation frame is executed in this fixture.
 const isolated=script.replace(source('source/vendor/sea-three.bundle.js'),'var SEAThree={mount(){throw Error("GPU deliberately unavailable in packaging fixture")}};');
 runInContext(isolated,ctx);
 if(role==='instructor'||role==='student'){
  assert.equal(doc.body.getAttribute('data-sea-role'),role);
  assert.equal(doc.querySelectorAll('[id="setup"]').length,1,'Chosen role has exactly one phase DOM');
  assert.equal(doc.querySelectorAll('button[data-sea-role]').length,0,'Selector removed after boot');
  assert(doc.getElementById(role==='instructor'?'teamCount':'sessionInput'),'Chosen authoritative controls exist');
  assert(!doc.getElementById(role==='instructor'?'sessionInput':'teamCount'),'Other role controls absent');
  assert.match(doc.title,role==='instructor'?/Instructor/:/Student/);
  assert.equal(doc.documentElement.lang,'en');
  assert(reads.some(key=>key===`SEA_${role.toUpperCase()}_V300`),'Chosen legacy role storage is used');
  assert(!reads.some(key=>key.includes((role==='instructor'?'student':'instructor').toUpperCase())),'Unchosen role storage not read');
  const before=frames.length;
  runInContext('seaLaunch("'+(role==='instructor'?'student':'instructor')+'")',ctx);
  assert.equal(doc.body.getAttribute('data-sea-role'),role,'A second live role cannot boot');
  assert.equal(frames.length,before,'No competing render start');
  assert(doc.getElementById('seaLicenses'),'Embedded notices remain accessible');
  if(role==='student'){
   doc.getElementById('langBtn').click();
   assert.equal(doc.documentElement.lang,'fr');
   assert.equal(doc.getElementById('joinStatus').textContent,'Entrez le code de séance, puis choisissez votre groupe et votre véhicule.','Empty setup status must switch with the actual controller language');
  }
  doc.getElementById('seaChooseRole').click();
  assert.deepEqual(navigations,['file:///candidate/index.html'],'Choose role deliberately reloads selector URL without role query');
  assert.equal(doc.body.getAttribute('data-sea-role'),role,'Role-change request does not boot a second live controller');
  assert.equal(failures.length,0,'Actual chosen controller finishes initialization without startup error');
  assert(frames.length>0,'Chosen scene starts one queued render initialization');
 }else{
  assert.equal(doc.querySelectorAll('[id="setup"]').length,0,'Missing/invalid role cannot boot a controller');
  assert.equal(frames.length,0,'Launcher does not start the game renderer');
  assert.equal(reads.length,0,'Launcher does not read role storage');
  assert.equal(writes.length,0,'Launcher does not write role storage');
  if(role===null){doc.querySelector('button[data-sea-role="student"]').click();assert.equal(doc.body.getAttribute('data-sea-role'),'student','Explicit role click boots selected actual controller');assert.equal(failures.length,0);}
 }
}
// An inert role-body closing-tag string must stay inside the hash-authorized
// script, while hostile notice markup remains readable text rather than DOM.
const adversarial=generateArtifacts({readSource:path=>{
 const text=source(path);
 if(path==='source/student.template.html')return text.replace('<body>','<body><!-- </script> \\u2028 -->');
 if(path==='THIRD_PARTY_NOTICES.md')return text+'\n</pre><img src="https://invalid.example/egress"><script>globalThis.UNTRUSTED=true</script>';
 return text;
}}).get('dist/index.html');
const hostile=parseHTML(adversarial).document;
assert.equal(hostile.querySelectorAll('script').length,1,'Role markup cannot escape its embedded script');
assert.equal(hostile.querySelectorAll('img').length,0,'Notice markup must be escaped');
assert(hostile.getElementById('seaLicenses').textContent.includes('</pre><img src='),'Escaping preserves literal notice content');
assert.throws(()=>generateArtifacts({readSource:path=>path==='source/student.template.html'?source(path).replace('<body>','<body><iframe src="https://invalid.example">'):source(path)}),/nested runtime element/);
// Frozen pre-unification composition contract: the added primary payload must
// not silently change retained role outputs or their existing CSP contract.
const engine=source('source/shared/engine.js'),app=runInNewContext(engine+'\n;APP');
const artwork=embeddedArtworkSource(runInNewContext(engine+'\n;([...CARD_INDEX.keys(),"TRAIN-CAP",...Object.values(MISSION_ARTWORK)])'));
for(const [role,path] of [['instructor','SEA_Instructor_Standalone.html'],['student','SEA_Student_Standalone.html']]){
 const originalScript=[engine,artwork,source('source/shared/presentation.js'),source('source/vendor/sea-three.bundle.js'),source('source/shared/three-presentation.js'),source('source/'+role+'.js')].join('\n');
 const digest=createHash('sha256').update(originalScript).digest('base64');
 const oldPolicy="default-src 'none'; script-src 'sha256-"+digest+"'; script-src-attr 'none'; style-src 'unsafe-inline'; img-src 'none'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'";
 const originalHTML=source('source/'+role+'.template.html').trimEnd().replace('{{SEA_VERSION}}',()=>app.version).replace('{{SEA_CSP}}',()=>'<meta http-equiv="Content-Security-Policy" content="'+oldPolicy+'">').replace('{{SEA_STYLES}}',()=>'<style>'+source('source/shared/styles.css')+'</style>').replace('{{SEA_SCRIPT}}',()=>'<script>'+originalScript+'</script>');
 assert.equal(outputs.get(path),originalHTML,role+': retained standalone bytes use pre-unification composition');
}
assert.deepEqual([...generateArtifacts()], [...outputs], 'Repeated generation is byte deterministic');
assert.throws(()=>generateArtifacts({readSource:path=>path==='LICENSE'?'':source(path)}),/Required licence notice missing/,'Missing required licensing blocks packaging');
assert.equal(source('dist/index.html'),html,'The sole checked-in runtime equals current source generation');
console.log('In-memory output sizes:',[...outputs].map(([name,data])=>name+' '+Buffer.byteLength(data)+' bytes').join('; '));
console.log('Single-HTML in-memory packaging, role isolation/deep links, exact hash CSP, embedded resources/notices, retained role storage and deterministic bytes PASS; browser/offline/egress acceptance NOT_RUN');
