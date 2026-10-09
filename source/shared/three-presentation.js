// Strict projection: no market order, seed, bids, private plans or submission drafts.
let sea3DQueue=null;
function seaSceneText(node,visible,root=true){
 if(!node)return '';if(node.nodeType===3)return node.textContent||'';
 if(!visible(node)||(!root&&['button','input','select','textarea','svg'].includes(node.tagName?.toLowerCase())))return '';
 return Array.from(node.childNodes||[]).map(x=>seaSceneText(x,visible,false)).join(' ').replace(/\s+/g,' ').trim();
}
// Scene controls reuse the authoritative semantic controls, not copied game rules.
function seaSceneProjection(roots,visible,keyFor){
 const rows=[],targets=new Map(),seen=new Set();
 const readable=(n,root=false)=>seaSceneText(n,visible,root);
 function add(node,kind,label,value=''){
  if(!label&&!value)return;const key=keyFor(node);targets.set(key,node);rows.push({key,kind,label:String(label),value:String(value),disabled:!!node.disabled});
 }
 function walk(node){
  if(!node||seen.has(node)||!visible(node))return;seen.add(node);
  const tag=node.tagName?.toLowerCase();
  if(['script','style','svg','canvas','img'].includes(tag)||node.id==='sea3dViewport')return;
  const text=()=>String(readable(node,true)).replace(/\s+/g,' ').trim();
  const name=()=>node.getAttribute?.('aria-label')||Array.from(node.labels||[]).map(x=>readable(x,true)).join(' ')||readable(node.closest?.('.field')?.querySelector('label'),true)||node.getAttribute?.('placeholder')||text();
  if(tag==='button'){add(node,'button',name());return;}
  if(tag==='input'||tag==='textarea'||tag==='select'){
   if(['file','hidden'].includes(node.type))return;
   const kind=tag==='select'?'select':['checkbox','radio'].includes(node.type)?'toggle':'input';
   const value=tag==='select'?node.selectedOptions?.[0]?.textContent||'':kind==='toggle'?(node.checked?'✓':'—'):node.value||'';
   add(node,kind,name(),value);return;
  }
  if(tag==='summary'){add(node,'button',text());return;}
  if(tag==='details'){for(const child of node.children||[])if(node.open||child.tagName?.toLowerCase()==='summary')walk(child);return;}
  if((['h2','h3','h4','p','small'].includes(tag)||node.classList?.contains('badge'))&&!node.querySelector?.('button,input,select,textarea')){add(node,'text',text());return;}
  if(tag==='tr'||node.classList?.contains('metric')||node.classList?.contains('notice')||node.classList?.contains('effect')){
   add(node,'text',readable(node).replace(/\s+/g,' ').trim());
   for(const x of node.querySelectorAll('button,input,select,textarea'))walk(x);return;
  }
  if(tag==='label'){for(const child of node.children||[])walk(child);return;}
  const own=Array.from(node.childNodes||[]).filter(x=>x.nodeType===3).map(x=>x.textContent||'').join(' ').replace(/\s+/g,' ').trim();if(own)add(node,'text',own);
  for(const child of node.children||[])walk(child);
 }
 roots.forEach(walk);return {rows,targets};
}
function sea3DView(s,role,selected,language,setupMission){
 const teams=role==='instructor'?(s.teams||[]):s.team?[s.team]:[];
 const team=teams.find(x=>String(x.id)===String(selected))||teams[0];
 const mission=validMission(team?.mission)?team.mission:validMission(setupMission)?setupMission:'RECOVERY';
 const copyCard=id=>{const c=id==='TRAIN-CAP'?{id,name:{en:'Training crew module',fr:'Module d’équipage d’entraînement'}}:CARD_INDEX.get(id);return c?{id,title:c.name?.[language]||c.title?.[language]||id}:null;};
 let current=null;
 if(s.phase==='practice'&&(role==='student'||s.practice?.revealed))current=copyCard('TRAIN-CAP');
 if(s.phase==='auction'){const id=role==='instructor'?(SEA_AUCTION.visible(s.revealMode,s.lot,s.revealed,s.lot)?s.market?.[s.round]?.[s.lot]?.id:null):(typeof s.currentCard==='string'?s.currentCard:s.currentCard?.id);if(id)current=copyCard(id);}
 return {phase:s.phase,role,lang:language,mission,teamId:team?.id||null,teams:teams.map(x=>({id:x.id,mission:validMission(x.mission)?x.mission:null})),current,owned:(team?.purchases||[]).map(p=>copyCard(p.id||p.cardId||p.card?.id)).filter(Boolean)};
}
function sea3DStart(role){
 const host=document.getElementById('sea3dViewport');if(!host||typeof host.appendChild!=='function'||typeof requestAnimationFrame!=='function')return;
 const ui={en:{title:'Your vehicle',object:'Explore',team:'Team',vehicle:'Mission vehicle',configuration:'Your build',reset:'Overview',front:'Front',rear:'Rear',views:'Views',shadows:'Shadows',mode:'View',assembled:'Assembled',exploded:'Exploded',cutaway:'Cutaway',separation:'Separation',map:'Assembly map',fallback:'The scene could not start. Game controls remain available.',hint:'Drag to rotate · Scroll to zoom. Select fitted equipment to inspect.',waiting:'Choose your mission.',context:{setup:'Choose a vehicle for your mission.',practice:'Try a practice purchase. Your scored budget is unchanged.',planning:'Plan your build against the mission requirements.',auction:'Compare the equipment with your mission needs.',build:'Purchased equipment fitted. Use cutaway to inspect the interior.',submit:'Check your build, then choose your profit.',debrief:'Review the decisions that shaped your vehicle.',closed:'Your final vehicle and purchases.'}},fr:{title:'Votre véhicule',object:'Explorer',team:'Équipe',vehicle:'Véhicule de mission',configuration:'Votre configuration',reset:'Vue générale',front:'Avant',rear:'Arrière',views:'Vues',shadows:'Ombres',mode:'Vue',assembled:'Assemblé',exploded:'Éclaté',cutaway:'En coupe',separation:'Séparation',map:'Plan des assemblages',fallback:'La scène n’a pas démarré. Les commandes du jeu restent disponibles.',hint:'Glissez pour tourner · Défilez pour zoomer. Sélectionnez un équipement installé pour l’examiner.',waiting:'Choisissez votre mission.',context:{setup:'Choisissez un véhicule pour votre mission.',practice:'Essayez un achat d’entraînement sans modifier le budget coté.',planning:'Planifiez votre configuration selon les exigences.',auction:'Comparez l’équipement aux besoins de votre mission.',build:'Équipements achetés installés. Utilisez la coupe pour examiner l’intérieur.',submit:'Vérifiez votre configuration, puis choisissez votre profit.',debrief:'Examinez les décisions qui ont façonné votre véhicule.',closed:'Votre véhicule final et vos achats.'}}};
 let runtime=null,signature='',queued=false,failed=false,selection='',lastPhase='',lastCurrent='',selectedTeam='',inspectionMode='assembled';
 let scenePage=0,scenePhase='',sceneTargets=new Map(),editor=null,serial=0;const sceneKeys=new WeakMap();
 const keyFor=node=>{if(!sceneKeys.has(node))sceneKeys.set(node,'control-'+(++serial));return sceneKeys.get(node);};
 const get=id=>document.getElementById(id),objects=get('sea3dObject'),teams=get('sea3dTeam');
 function fail(){failed=true;document.body.classList.remove('sea3d-active','scene-game');editor?.remove();editor=null;get('sea3dStatus').textContent=ui[lang].fallback;host.hidden=true;}
 function semanticVisible(node){
  for(let n=node;n&&n!==document.body;n=n.parentElement){if(n.hidden||n.getAttribute?.('aria-hidden')==='true'||n.classList?.contains('hidden'))return false;const style=window.getComputedStyle(n);if(style.display==='none'||style.visibility==='hidden')return false;if(n.parentElement?.tagName==='DETAILS'&&!n.parentElement.open&&n.tagName!=='SUMMARY')return false;}
  return true;
 }
 function sceneAction(key,nextPage){
  if(key==='__previous'||key==='__next'){scenePage=Math.max(0,nextPage??scenePage+(key==='__next'?1:-1));queue();return;}
  const node=sceneTargets.get(key);if(!node?.isConnected||node.disabled||!semanticVisible(node))return;
  const tag=node.tagName.toLowerCase();
  if(tag==='button'){node.click();queue();return;}
  if(tag==='summary'){node.parentElement.open=!node.parentElement.open;queue();return;}
  if(['checkbox','radio'].includes(node.type)){node.checked=node.type==='radio'||!node.checked;node.dispatchEvent(new Event('input',{bubbles:true}));node.dispatchEvent(new Event('change',{bubbles:true}));queue();return;}
  editor?.remove();editor=document.createElement('section');editor.className='scene-editor';editor.setAttribute('role','dialog');editor.setAttribute('aria-modal','true');
  const title=document.createElement('label');title.textContent=Array.from(node.labels||[]).map(x=>seaSceneText(x,semanticVisible)).join(' ')||node.getAttribute('aria-label')||node.placeholder||'';
  const input=node.cloneNode(true);input.removeAttribute('id');input.removeAttribute('style');input.removeAttribute('aria-hidden');input.removeAttribute('tabindex');input.className='';input.value=node.value;title.appendChild(input);editor.appendChild(title);
  const done=document.createElement('button');done.type='button';done.className='btn primary';done.textContent=lang==='fr'?'Terminé':'Done';editor.appendChild(done);document.body.appendChild(editor);
  const close=()=>{editor?.remove();editor=null;host.querySelector('canvas')?.focus();queue();};
  const apply=type=>{if(!node.isConnected||node.disabled||!sceneTargets.has(key)||!semanticVisible(node)){close();return;}node.value=input.value;node.dispatchEvent(new Event(type,{bubbles:true}));queue();};
  done.addEventListener('click',()=>{apply('change');close();});
  input.addEventListener('input',()=>apply('input'));input.addEventListener('change',()=>apply('change'));
  editor.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}else if(e.key==='Tab'){if(e.shiftKey&&document.activeElement===input){e.preventDefault();done.focus();}else if(!e.shiftKey&&document.activeElement===done){e.preventDefault();input.focus();}}});input.focus();
 }
 function syncSceneInterface(stage,active,labels){
  if(!runtime.interface||!active||!document.querySelectorAll)return;
  if(scenePhase!==state.phase){scenePage=0;scenePhase=state.phase;editor?.remove();editor=null;}
  const dialog=get('seaInlineConfirm');const roots=dialog?[dialog]:[...Array.from(active.children||[]).filter(x=>x!==stage),stage,document.querySelector('header'),...document.querySelectorAll('body>.notice'),document.querySelector('body>.status')].filter(Boolean);
  const projected=seaSceneProjection(roots,semanticVisible,keyFor);sceneTargets=projected.targets;
  // Task controls lead; the complete instructions/results remain paginated below.
  if(!dialog&&state.phase==='setup')projected.rows.sort((a,b)=>Number(b.kind!=='text')-Number(a.kind!=='text'));
  if(dialog)scenePage=0;
  const result=runtime.interface({title:dialog?(lang==='fr'?'Confirmer':'Confirm'):t('phase.'+state.phase),subtitle:labels.context[state.phase],rows:projected.rows,page:scenePage,lang},sceneAction);if(result?.page!==undefined)scenePage=result.page;
  if(!document.body.classList.contains('scene-game'))document.body.classList.add('scene-game');
 }
 function option(select,value,label){const e=document.createElement('option');e.value=value;e.textContent=label;select.appendChild(e);}
 function sync(){queued=false;try{
   const labels=ui[lang]||ui.en;for(const key of ['title','object','team','reset','front','rear','views','hint','mode','separation','map','shadows'])get('sea3d-'+key).textContent=labels[key];host.setAttribute('aria-label',labels.title);
   const view=sea3DView(state,role,selectedTeam,lang,get('vehicleSelect')?.value);
   teams.replaceChildren();view.teams.forEach(x=>option(teams,String(x.id),labels.team+' '+x.id));teams.value=String(view.teamId||'');teams.closest('label').hidden=role!=='instructor'||view.teams.length<2;
   const stage=get('sea3dScene'),active=document.querySelector?.('.section.active');if(active&&stage.parentElement!==active)active.querySelector('.hero')?.insertAdjacentElement('afterend',stage);
   const choices=[['vehicle',labels.vehicle]];if(view.owned.length)choices.push(['configuration',labels.configuration]);
   const unique=new Map();if(view.current)unique.set(view.current.id,view.current);view.owned.forEach(p=>unique.set(p.id,p));unique.forEach(p=>choices.push(['part:'+p.id,p.title]));
   if(view.phase!==lastPhase){selection=view.current?'part:'+view.current.id:['build','submit','debrief','closed'].includes(view.phase)?'configuration':'vehicle';lastPhase=view.phase;}
   if(view.current&&view.current.id!==lastCurrent)selection='part:'+view.current.id;lastCurrent=view.current?.id||'';
   if(!choices.some(c=>c[0]===selection))selection='vehicle';objects.replaceChildren();choices.forEach(c=>option(objects,...c));objects.value=selection;objects.closest('label').hidden=choices.length<2;const toolbar=stage.querySelector?.('.sea3d-toolbar');if(toolbar)toolbar.hidden=choices.length<2&&teams.closest('label').hidden;
   const next=JSON.stringify([view,selection]);if(failed){fail();return;}
   if(!runtime){host.hidden=false;runtime=SEAThree.mount(host,fail,id=>{selection='part:'+id;queue();});}
   host.hidden=false;if(!document.body.classList.contains?.('sea3d-active'))document.body.classList.add('sea3d-active');const selectedPart=unique.get(selection.slice(5));get('sea3d-title').textContent=selection.startsWith('part:')?selectedPart?.title||labels.title:selection==='configuration'?labels.configuration:MISSIONS[view.mission][lang];get('sea3dStatus').textContent=labels.context[view.phase]||labels.waiting;host.setAttribute('aria-label',get('sea3d-title').textContent);
   if(next!==signature){runtime.update(view,selection);signature=next;}
   const mode=get('sea3dMode');mode.replaceChildren();for(const key of ['assembled','exploded','cutaway'])option(mode,key,labels[key]);mode.value=inspectionMode;get('sea3dSeparation').hidden=inspectionMode!=='exploded';get('sea3dPercent').textContent=get('sea3dAmount').value+'%';runtime.inspect?.(inspectionMode,Number(get('sea3dAmount').value)/100);runtime.shadows?.(get('sea3dShadows').checked);
   const names={en:{body:'Body panels',chassis:'Chassis',cockpit:'Driver controls',glass:'Glazing',crane:'Recovery crane',wheel:'Wheel',roof:'Roof',seating:'Seats',frame:'Frame',cooling:'Cooling',heads:'Cylinder heads',connections:'Connections',powertrain:'Powertrain',barrel:'Barrel',mount:'Mount',controls:'Controls',optics:'Optics & antennae',protection:'Protection',mechanism:'Mechanism',display:'Display',documents:'Review documents',front:'Front equipment'},fr:{body:'Panneaux de carrosserie',chassis:'Châssis',cockpit:'Commandes du conducteur',glass:'Vitrage',crane:'Grue de dépannage',wheel:'Roue',roof:'Toit',seating:'Sièges',frame:'Cadre',cooling:'Refroidissement',heads:'Culasses',connections:'Raccordements',powertrain:'Groupe motopropulseur',barrel:'Canon',mount:'Support',controls:'Commandes',optics:'Optiques et antennes',protection:'Protection',mechanism:'Mécanisme',display:'Écran',documents:'Documents de revue',front:'Équipements avant'}};
   const parts=get('sea3dParts');parts.replaceChildren();for(const key of runtime.parts?.()||[]){const [kind,id]=key.split(':'),b=document.createElement('button');b.type='button';b.textContent=kind==='equipment'?unique.get(id)?.title||id:(names[lang]?.[kind]||kind)+(id?' '+id:'');b.addEventListener('click',()=>runtime.focus?.(key));parts.appendChild(b);}
   syncSceneInterface(stage,active,labels);
 }catch{fail();}}
 function queue(){if(!queued){queued=true;requestAnimationFrame(sync);}}
 get('sea3dMode').addEventListener('change',()=>{inspectionMode=get('sea3dMode').value;queue();});get('sea3dAmount').addEventListener('input',queue);
 objects.addEventListener('change',()=>{selection=objects.value;queue();});teams.addEventListener('change',()=>{selectedTeam=teams.value;signature='';queue();});
 for(const key of ['reset','front','rear'])get('sea3d-'+key).addEventListener('click',()=>runtime?.view(key));
 host.addEventListener('sea3drestored',()=>{failed=false;signature='';queue();});
 document.addEventListener('click',queue);document.addEventListener('change',queue);document.addEventListener('input',queue);
 document.addEventListener('keydown',e=>{if(e.key==='Tab')document.body.classList.add('scene-keyboard');});document.addEventListener('pointerdown',()=>document.body.classList.remove('scene-keyboard'));
 if(typeof MutationObserver==='function'){const observer=new MutationObserver(records=>{if(records.some(r=>!(r.target.nodeType===3?r.target.parentElement:r.target).closest?.('#sea3dScene,.scene-editor')))queue();});observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','hidden','disabled','open']});window.addEventListener('pagehide',()=>observer.disconnect(),{once:true});}
 window.addEventListener('pagehide',()=>runtime?.dispose(),{once:true});
 queue();return queue;
}
