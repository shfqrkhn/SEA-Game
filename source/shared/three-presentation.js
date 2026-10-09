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
  if(!label&&!value)return;const key=keyFor(node)+(node.getAttribute?.('data-scene-utility')==='inspection'?':'+node.getAttribute('data-scene-command-context'):'');targets.set(key,node);
  const authored=node.closest?.('[data-scene-priority]')?.getAttribute?.('data-scene-priority');
  const priority=/^\d{1,3}$/.test(authored||'')?Number(authored):50;
  const emphasis=node.classList?.contains('danger')?'danger':node.classList?.contains('primary')||node.classList?.contains('good')?'primary':'';
  const group=node.closest?.('[data-scene-section]')?.getAttribute?.('data-scene-section');
  const section=['task','teams','market','tools','inspect','help'].includes(group)?group:priority>=70?'help':'task';
  let detail=node;while(detail&&!(detail.tagName?.toLowerCase()==='details'&&detail.dataset?.buildTeam))detail=detail.parentElement;const buildTeamId=detail?Number(detail.dataset.buildTeam):null,buildSummary=!!detail&&node.tagName?.toLowerCase()==='summary';
  const currentAction=node.getAttribute?.('data-scene-current-action')==='true',caller=Number(node.getAttribute?.('data-bid-team')),bid=Number.isInteger(caller)&&caller>=1&&caller<=10;
  rows.push({section:buildTeamId?(buildSummary?'teams':'task'):bid?(node.disabled?'teams':'task'):currentAction?(node.disabled?'tools':'task'):section,buildTeamId,buildSummary,compact:bid?'bid':'',teamId:bid?caller:null,key,kind,label:String(label),value:String(value),disabled:!!node.disabled,priority,emphasis,utility:node.id==='langBtn'?'language':node.getAttribute?.('data-scene-utility')||'',selected:node.getAttribute?.('aria-pressed')==='true',currentAction});
 }
 function walk(node){
  if(!node||seen.has(node)||!visible(node))return;seen.add(node);
  const tag=node.tagName?.toLowerCase();
  if(node.getAttribute?.('data-scene-skip')==='true')return;
  if(['script','style','svg','canvas','img'].includes(tag)||['sea3dViewport','sea3dNavigation'].includes(node.id))return;
  const text=()=>String(readable(node,true)).replace(/\s+/g,' ').trim();
  const name=()=>node.getAttribute?.('aria-label')||Array.from(node.labels||[]).map(x=>readable(x,true)).join(' ')||readable(node.closest?.('.field')?.querySelector('label'),true)||node.getAttribute?.('placeholder')||text();
  // A caller's public eligibility context and its validated bid action belong
  // together. Keep the original button as the target; never copy bid commands.
  if(node.getAttribute?.('data-scene-summary')==='true'){add(node,'text',readable(node));for(const control of node.querySelectorAll('button,input,select,textarea'))walk(control);return;}
  if(node.classList?.contains('bid-row')){
   const controls=Array.from(node.querySelectorAll('button,input,select,textarea'));
   const button=controls.length===1&&controls[0].tagName?.toLowerCase()==='button'?controls[0]:null;
   if(button&&visible(button)){
    seen.add(button);add(button,'button',readable(node),button.getAttribute?.('aria-label')||readable(button,true));return;
   }
  }
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
  if(tag==='tr'||node.classList?.contains('ledger-row')||node.classList?.contains('metric')||node.classList?.contains('notice')||node.classList?.contains('effect')||node.classList?.contains('workflow')){
   add(node,'text',readable(node).replace(/\s+/g,' ').trim());
   for(const x of node.querySelectorAll('button,input,select,textarea'))walk(x);return;
  }
  if(tag==='label'){for(const control of node.querySelectorAll('input,select,textarea'))walk(control);return;}
  const own=Array.from(node.childNodes||[]).filter(x=>x.nodeType===3).map(x=>x.textContent||'').join(' ').replace(/\s+/g,' ').trim();if(own)add(node,'text',own);
  for(const child of node.children||[])walk(child);
 }
 roots.forEach(walk);return {rows,targets};
}
// Reuse native navigation buttons across refreshes so focused controls survive
// timer updates. This is presentation state; it never carries game commands.
// Presentation ordering only: prerequisite, decision, then recorded outcome.
function seaSceneTaskPriorities(projected,s,role){
 if(role!=='student'||s.phase!=='auction')return;
 const priorities=s.currentCard?{wtp:10,decision:20,cardInput:25,loadCardBtn:26,wonPrice:30}:{cardInput:5,loadCardBtn:6};
 for(const row of projected.rows){const node=projected.targets.get(row.key);if(row.section!=='task')continue;if(Object.prototype.hasOwnProperty.call(priorities,node?.id))row.priority=priorities[node.id];if(s.currentCard&&node?.getAttribute?.('data-scene-summary')==='true')row.priority=9;}
}
function seaSceneNavigation(stage,sections,selected,language,epoch,onSelect,currentEpoch,blocked=false){
 if(!stage?.appendChild)return;
 let nav=Array.from(stage.children||[]).find(node=>node.id==='sea3dNavigation');
 if(!nav){nav=document.createElement('nav');nav.id='sea3dNavigation';nav.className='inline';nav.setAttribute('role','navigation');stage.appendChild(nav);}
 nav.setAttribute('aria-label',language==='fr'?'Sections du jeu':'Game sections');nav.hidden=blocked||sections.size<2;
 const names=language==='fr'?{task:'En cours',teams:'\u00c9quipes',market:'Manche',tools:'Gestion',inspect:'Explorer',help:'Aide / sauvegarde'}:{task:'Current',teams:'Teams',market:'Round',tools:'Manage',inspect:'Inspect',help:'Help / save'};
 for(const child of Array.from(nav.children||[]))if(!sections.has(child.getAttribute('data-scene-section-choice')))child.remove();
 for(const id of Object.keys(names).filter(id=>sections.has(id))){
  let button=Array.from(nav.children||[]).find(node=>node.getAttribute('data-scene-section-choice')===id);
  if(!button){button=document.createElement('button');button.type='button';button.className='btn ghost';button.setAttribute('data-scene-section-choice',id);nav.appendChild(button);}
  if(button.textContent!==names[id])button.textContent=names[id];
  button.setAttribute('aria-label',names[id]);button.setAttribute('aria-current',id===selected?'page':'false');
  button.onclick=()=>{if(!nav.hidden&&button.isConnected&&epoch===currentEpoch())onSelect('__section',id);};
 }
 return nav;
}
// Persistent semantic controls for the scene's common inspection commands.
function seaSceneInspection(stage,labels,mode,context,onSelect,currentContext,blocked=false){
 if(!stage?.appendChild)return;
 let nav=Array.from(stage.children||[]).find(node=>node.id==='sea3dInspection');
 if(!nav){nav=document.createElement('nav');nav.id='sea3dInspection';nav.className='inline';nav.setAttribute('aria-label',labels.views);stage.appendChild(nav);}
 nav.hidden=blocked;nav.setAttribute('aria-label',labels.views);
 for(const id of ['assembled','exploded','cutaway','front','rear','reset']){
  let button=document.getElementById('sea3d-'+id);
  if(!button){button=document.createElement('button');button.id='sea3d-'+id;button.type='button';button.className='btn ghost';}
  if(button.parentElement!==nav)nav.appendChild(button);
  button.textContent=labels[id];button.setAttribute('data-scene-utility','inspection');button.setAttribute('data-scene-section','inspect');button.setAttribute('data-scene-command-context',context);
  button.setAttribute('aria-label',labels[id]);button.setAttribute('aria-pressed',String(['assembled','exploded','cutaway'].includes(id)&&mode===id));
  button.onclick=()=>{if(!nav.hidden&&button.isConnected&&context===currentContext())onSelect(id);};
 }
 return nav;
}
function seaSceneSaveControls(stage,label){
 const menu=document.querySelector?.('details.save-menu');if(!stage?.appendChild||!menu)return;
 let group=Array.from(stage.children||[]).find(node=>node.id==='sea3dSaveControls');
 if(!group){group=document.createElement('section');group.id='sea3dSaveControls';group.setAttribute('role','group');group.setAttribute('data-scene-section','help');group.setAttribute('data-scene-priority','20');stage.appendChild(group);}
 group.setAttribute('aria-label',label);
 const content=Array.from(menu.children||[]).find(node=>node.tagName?.toLowerCase()==='div');if(content)group.appendChild(content);
 menu.hidden=true;return group;
}
function seaSceneBuildTeam(summary,s){
 const detail=summary?.parentElement,host=summary?.closest?.('#authoritativeBuild');
 if(!summary?.isConnected||summary.tagName?.toLowerCase()!=='summary'||detail?.tagName?.toLowerCase()!=='details'||detail.open||s.phase!=='build'||host?._buildSession!==s.sessionCode)return null;
 const id=Number(detail.dataset?.buildTeam);return s.teams?.some(team=>team.id===id)?String(id):null;
}
function sea3DView(s,role,selected,language,setupMission){
 const teams=role==='instructor'?(s.teams||[]):s.team?[s.team]:[];
 const team=teams.find(x=>String(x.id)===String(selected))||teams[0];
 const selectedMission=validMission(team?.mission)?team.mission:null;
 const previewMission=role==='student'&&s.phase==='setup'&&validMission(setupMission)?setupMission:null;
 // mission is the model identity only. The fallback is an illustrative example,
 // never a team choice; captions must use the explicit public selection state.
 const mission=selectedMission||previewMission||'RECOVERY';
 const missionState=selectedMission?'assigned':previewMission?'preview':'pending';
 const copyCard=id=>{const c=id==='TRAIN-CAP'?{id,name:{en:'Training crew module',fr:'Module d’équipage d’entraînement'}}:CARD_INDEX.get(id);return c?{id,title:c.name?.[language]||c.title?.[language]||id}:null;};
 let current=null;
 if(s.phase==='practice'&&(role==='student'||s.practice?.revealed))current=copyCard('TRAIN-CAP');
 if(s.phase==='auction'){const id=role==='instructor'?(SEA_AUCTION.visible(s.revealMode,s.lot,s.revealed,s.lot)?s.market?.[s.round]?.[s.lot]?.id:null):(typeof s.currentCard==='string'?s.currentCard:s.currentCard?.id);if(id)current=copyCard(id);}
 return {phase:s.phase,role,lang:language,mission,selectedMission,missionState,teamId:team?.id||null,teams:teams.map(x=>({id:x.id,mission:validMission(x.mission)?x.mission:null})),current,owned:(team?.purchases||[]).map(p=>copyCard(p.id||p.cardId||p.card?.id)).filter(Boolean)};
}
function seaSceneModelLabels(view,selection,labels,partTitle=''){
 const fr=view.lang==='fr',name=MISSIONS[view.mission][fr?'fr':'en'];
 const assigned=view.missionState==='assigned',preview=view.missionState==='preview';
 const vehicle=assigned?labels.vehicle:fr?(preview?'Aperçu du véhicule':'Véhicule exemple'):(preview?'Vehicle preview':'Example vehicle');
 const configuration=assigned?labels.configuration:fr?'Assemblage exemple':'Example assembly';
 const mission=assigned?name:fr?(preview?'Aperçu : ':'Exemple : ')+name:(preview?'Preview: ':'Example: ')+name;
 const status=assigned?(labels.context[view.phase]||labels.waiting):fr?(preview?'Aperçu seulement. Rejoignez votre équipe pour confirmer cette mission.':'Aucune mission choisie. Ce véhicule est un exemple; choisissez votre mission dans les commandes du jeu.'):(preview?'Preview only. Join your team to confirm this mission.':'No mission selected. This vehicle is an example; choose your mission in the game controls.');
 return {vehicle,configuration,mission,status,title:selection.startsWith('part:')?partTitle||labels.title:selection==='configuration'?configuration:mission};
}
function sea3DStart(role){
 const host=document.getElementById('sea3dViewport');if(!host||typeof host.appendChild!=='function'||typeof requestAnimationFrame!=='function')return;
 const ui={en:{title:'Your vehicle',object:'Explore',team:'Team',vehicle:'Mission vehicle',configuration:'Your build',reset:'Overview',front:'Front',rear:'Rear',views:'Views',shadows:'Shadows',mode:'View',assembled:'Assembled',exploded:'Exploded',cutaway:'Cutaway',separation:'Separation',map:'Assembly map',fallback:'The scene could not start. Game controls remain available.',hint:'Drag to rotate · Scroll to zoom. Select fitted equipment to inspect.',waiting:'Choose your mission.',context:{setup:'Choose a vehicle for your mission.',practice:'Try a practice purchase. Your scored budget is unchanged.',planning:'Plan your build against the mission requirements.',auction:'Compare the equipment with your mission needs.',build:'Purchased equipment fitted. Use cutaway to inspect the interior.',submit:'Check your build, then choose your profit.',debrief:'Review the decisions that shaped your vehicle.',closed:'Your final vehicle and purchases.'}},fr:{title:'Votre véhicule',object:'Explorer',team:'Équipe',vehicle:'Véhicule de mission',configuration:'Votre configuration',reset:'Vue générale',front:'Avant',rear:'Arrière',views:'Vues',shadows:'Ombres',mode:'Vue',assembled:'Assemblé',exploded:'Éclaté',cutaway:'En coupe',separation:'Séparation',map:'Plan des assemblages',fallback:'La scène n’a pas démarré. Les commandes du jeu restent disponibles.',hint:'Glissez pour tourner · Défilez pour zoomer. Sélectionnez un équipement installé pour l’examiner.',waiting:'Choisissez votre mission.',context:{setup:'Choisissez un véhicule pour votre mission.',practice:'Essayez un achat d’entraînement sans modifier le budget coté.',planning:'Planifiez votre configuration selon les exigences.',auction:'Comparez l’équipement aux besoins de votre mission.',build:'Équipements achetés installés. Utilisez la coupe pour examiner l’intérieur.',submit:'Vérifiez votre configuration, puis choisissez votre profit.',debrief:'Examinez les décisions qui ont façonné votre véhicule.',closed:'Votre véhicule final et vos achats.'}}};
 let runtime=null,signature='',queued=false,failed=false,selection='',lastPhase='',lastCurrent='',selectedTeam='',inspectionMode='assembled';
 let sceneSection='task',sceneSectionEpoch=0,sceneSectionLanguage='',sceneSections=new Set(),scenePage=0,scenePhase='',sceneAlert='',sceneDialog=null,sceneTargets=new Map(),sceneFieldKeys=[],editor=null,serial=0,actionState=null,actionBefore=null;const sceneKeys=new WeakMap();
 const keyFor=node=>{if(!sceneKeys.has(node))sceneKeys.set(node,'control-'+(++serial));return sceneKeys.get(node);};
 const get=id=>document.getElementById(id),objects=get('sea3dObject'),teams=get('sea3dTeam');
 function fail(){failed=true;document.body.classList.remove('sea3d-active','scene-game');editor?.remove();editor=null;get('sea3dStatus').textContent=ui[lang].fallback;host.hidden=true;}
 function semanticVisible(node){
  for(let n=node;n&&n!==document.body;n=n.parentElement){if(n.hidden||n.getAttribute?.('aria-hidden')==='true'||n.classList?.contains('hidden'))return false;const style=window.getComputedStyle(n);if(style.display==='none'||style.visibility==='hidden')return false;if(n.parentElement?.tagName==='DETAILS'&&!n.parentElement.open&&n.tagName!=='SUMMARY')return false;}
  return true;
 }
 function selectInspectedTeam(team,open=false){
  if(!state.teams?.some(item=>String(item.id)===String(team)))return;
  selectedTeam=String(team);if(state.phase==='build')selection='configuration';signature='';
  if(open&&state.phase==='build'){const build=get('authoritativeBuild');if(build?._buildSession===state.sessionCode)for(const detail of Array.from(build.children||[]))if(String(detail.dataset?.buildTeam)===selectedTeam)detail.open=true;}
 }
 function selectBuildSummary(summary){
  if(get('seaInlineConfirm')||!semanticVisible(summary))return;
  const team=seaSceneBuildTeam(summary,state);if(team===null)return;
  selectInspectedTeam(team);
 }
 function sceneAction(key,nextPage){
  if(key==='__section'){if(typeof nextPage!=='string'||!sceneSections.has(nextPage))return;sceneSection=nextPage;scenePage=0;editor?.remove();editor=null;queue();return;}
  if(key==='__previous'||key==='__next'){scenePage=Math.max(0,nextPage??scenePage+(key==='__next'?1:-1));queue();return;}
  const node=sceneTargets.get(key);if(!node?.isConnected||node.disabled||!semanticVisible(node))return;
  const tag=node.tagName.toLowerCase();
  if(tag==='button'){if(state!==actionState||JSON.stringify(state)!==actionBefore){queue();return;}actionBefore=null;node.click();queue();return;}
  if(tag==='summary'){selectBuildSummary(node);node.parentElement.open=!node.parentElement.open;queue();return;}
  if(['checkbox','radio'].includes(node.type)){node.checked=node.type==='radio'||!node.checked;node.dispatchEvent(new Event('input',{bubbles:true}));node.dispatchEvent(new Event('change',{bubbles:true}));queue();return;}
  editor?.remove();editor=document.createElement('section');editor.className='scene-editor';editor.setAttribute('role','dialog');editor.setAttribute('aria-modal','true');
  const title=document.createElement('label');title.textContent=Array.from(node.labels||[]).map(x=>seaSceneText(x,semanticVisible)).join(' ')||node.getAttribute('aria-label')||node.placeholder||'';
  editor.setAttribute('aria-label',title.textContent|| (lang==='fr'?'Modifier la valeur':'Edit value'));
  const input=node.cloneNode(true);input.removeAttribute('id');input.removeAttribute('style');input.removeAttribute('aria-hidden');input.removeAttribute('tabindex');input.className='';input.value=node.value;title.appendChild(input);editor.appendChild(title);
  const done=document.createElement('button');done.type='button';done.className='btn primary';done.textContent=lang==='fr'?'Terminé':'Done';editor.appendChild(done);document.body.appendChild(editor);
  const activeEditor=editor,editorGeneration=host._seaEditorGeneration=(host._seaEditorGeneration||0)+1;const close=()=>{if(editor!==activeEditor)return;editor.remove();editor=null;host.querySelector('canvas')?.focus();queue();};
  const apply=type=>{if(!currentField()||!node.isConnected||node.disabled||!sceneTargets.has(key)||!semanticVisible(node)){close();return false;}node.value=input.value;node.dispatchEvent(new Event(type,{bubbles:true}));queue();return true;};
  // Keep the editor hit surface alive until click: blur/change can replace its source.
  done.addEventListener('pointerdown',e=>e.preventDefault());
  done.addEventListener('click',()=>{if(composing)return;apply('change');close();});
  input.addEventListener('input',()=>apply('input'));input.addEventListener('change',()=>apply('change'));
  let composing=false;input.addEventListener('compositionstart',()=>{composing=true});input.addEventListener('compositionend',()=>{composing=false});
  const boundState=typeof state==='undefined'?null:state,fieldContext=()=>JSON.stringify([typeof state==='undefined'?null:state.phase,typeof state==='undefined'?null:state.sessionCode,typeof state==='undefined'?null:state.round,typeof state==='undefined'?null:state.lot,lang,sceneSection]),binding=fieldContext(),currentScope=()=>boundState===(typeof state==='undefined'?null:state)&&binding===fieldContext(),currentField=()=>editor===activeEditor&&currentScope();
  const fieldKeys=typeof sceneFieldKeys==='undefined'?[]:sceneFieldKeys,index=fieldKeys.indexOf(key),navigation=[];
  for(const [step,label] of [[-1,lang==='fr'?'Champ précédent':'Previous field'],[1,lang==='fr'?'Champ suivant':'Next field']]){
   const button=document.createElement('button');button.type='button';button.className='btn';button.textContent=label;const targetKey=fieldKeys[index+step],target=sceneTargets.get(targetKey);button.disabled=index<0||!target;editor.appendChild(button);navigation.push(button);
   button.addEventListener('pointerdown',event=>event.preventDefault());button.addEventListener('click',()=>{if(composing||button.disabled||!currentField())return;const targetId=target.id;if(!apply('change'))return;close();requestAnimationFrame(()=>{if(!currentScope()||editor!==null||host._seaEditorGeneration!==editorGeneration)return;const fresh=targetId?document.getElementById(targetId):target;const next=Array.from(sceneTargets).find(([candidate,n])=>n===fresh&&sceneFieldKeys.includes(candidate));if(next)sceneAction(next[0]);});});
  }
  editor.addEventListener('keydown',e=>{if(composing||e.isComposing)return;if(e.key==='Escape'){e.preventDefault();close();}else if(e.key==='Tab'){const focusables=[input,done,...navigation.filter(button=>!button.disabled)],position=focusables.indexOf(document.activeElement);e.preventDefault();focusables[(position+(e.shiftKey?-1:1)+focusables.length)%focusables.length].focus();}});input.focus();
 }
 function syncSceneInterface(stage,active,labels,context=null){
  if(!runtime.interface||!active||!document.querySelectorAll)return;
  if(scenePhase!==state.phase){sceneSection='task';sceneSectionEpoch++;scenePage=0;scenePhase=state.phase;editor?.remove();editor=null;}
  const alerts=[get('seaNotice'),get('storageNotice'),get('joinStatus')].filter(x=>x&&semanticVisible(x)&&x.classList.contains('bad')&&x.textContent.trim());
  const alertSignature=alerts.map(x=>x.textContent).join('|');if(alertSignature!==sceneAlert){sceneAlert=alertSignature;if(alertSignature){scenePage=0;sceneSection='task';editor?.remove();editor=null;}}
  const dialog=get('seaInlineConfirm');const roots=dialog?[dialog,get('langBtn')].filter(Boolean):[...alerts,...Array.from(active.children||[]).filter(x=>x!==stage),stage,document.querySelector('header'),...document.querySelectorAll('body>.notice'),document.querySelector('body>.status'),document.querySelector('main>.footer')].filter(Boolean);
  const projected=seaSceneProjection(roots,semanticVisible,keyFor);sceneTargets=projected.targets;
  if(state.phase==='build'&&state.teams?.length){const team=typeof selectedTeam==='string'&&state.teams.some(item=>String(item.id)===selectedTeam)?Number(selectedTeam):state.teams[0].id;projected.rows=projected.rows.filter(row=>!row.buildTeamId||row.buildSummary||row.buildTeamId===team);sceneTargets=new Map(projected.rows.map(row=>[row.key,projected.targets.get(row.key)]));}
  if(context&&!dialog){projected.rows=projected.rows.filter(row=>{const node=projected.targets.get(row.key);return !(node?.id==='phaseBadge'&&row.label===context.phase)&&!(node?.id==='sessionBadge'&&row.label===context.session)&&!(node?.classList?.contains('badge')&&row.label==='v'+context.version);});}
  if(!dialog&&!alerts.length&&typeof role!=='undefined')seaSceneTaskPriorities(projected,state,role);
  const loadFirst=!dialog&&typeof role!=='undefined'&&role==='student'&&state.phase==='auction'&&!state.currentCard?projected.rows.find(row=>row.kind==='button'&&!row.disabled&&projected.targets.get(row.key)?.id==='loadCardBtn'):null;
  const primary=loadFirst||projected.rows.find(row=>row.kind==='button'&&!row.disabled&&row.currentAction&&!row.utility)||projected.rows.find(row=>row.kind==='button'&&!row.disabled&&row.section==='task'&&row.emphasis==='primary'&&!row.utility);
  if(primary){primary.primary=true;primary.emphasis='primary';primary.priority=Math.min(primary.priority,49);}
  // Stable authored groups retain context and dependencies, never button-first order.
  if(!dialog&&!alerts.length)projected.rows.sort((a,b)=>(a.priority??50)-(b.priority??50));
  if(dialog!==sceneDialog){scenePage=0;sceneSection='task';sceneSectionEpoch++;sceneDialog=dialog;editor?.remove();editor=null;}
  if(sceneSectionLanguage!==lang){sceneSectionLanguage=lang;sceneSectionEpoch++;}
  if(dialog||alerts.length)projected.rows.forEach(row=>row.section='task');
  sceneSections=new Set(projected.rows.filter(row=>!row.utility).map(row=>row.section));
  if(sceneSections.size&&!sceneSections.has(sceneSection)){sceneSection='task';scenePage=0;}
  seaSceneNavigation(stage,sceneSections,sceneSection,lang,sceneSectionEpoch,sceneAction,()=>get('seaInlineConfirm')||scenePhase!==state.phase||sceneSectionLanguage!==lang?-1:sceneSectionEpoch,!!dialog||!!alerts.length);
  sceneFieldKeys=projected.rows.filter(row=>row.section===sceneSection&&!row.disabled&&['input','select'].includes(row.kind)&&!row.utility).map(row=>row.key);
  actionState=state;actionBefore=JSON.stringify(state);
  const result=runtime.interface({title:dialog?(lang==='fr'?'Confirmer':'Confirm'):t('phase.'+state.phase),subtitle:labels.context[state.phase],context,rows:projected.rows,page:scenePage,section:sceneSection,sectionEpoch:sceneSectionEpoch,lang},sceneAction);if(result?.page!==undefined)scenePage=result.page;
  if(!document.body.classList.contains('scene-game'))document.body.classList.add('scene-game');
 }
 function option(select,value,label){const e=document.createElement('option');e.value=value;e.textContent=label;select.appendChild(e);}
 function sync(){queued=false;try{
   const labels=ui[lang]||ui.en;for(const key of ['title','object','team','reset','front','rear','views','hint','mode','separation','map','shadows'])get('sea3d-'+key).textContent=labels[key];host.setAttribute('aria-label',labels.title);
   const view=sea3DView(state,role,selectedTeam,lang,get('vehicleSelect')?.value);
   teams.replaceChildren();view.teams.forEach(x=>option(teams,String(x.id),labels.team+' '+x.id));teams.value=String(view.teamId||'');teams.closest('label').hidden=role!=='instructor'||view.teams.length<2;
   const stage=get('sea3dScene'),active=document.querySelector?.('.section.active');if(active&&stage.parentElement!==active)active.querySelector('.hero')?.insertAdjacentElement('afterend',stage);
   const modelLabels=seaSceneModelLabels(view,selection,labels);
   const choices=[['vehicle',modelLabels.vehicle]];if(view.owned.length&&view.selectedMission)choices.push(['configuration',modelLabels.configuration]);
   const unique=new Map();if(view.current)unique.set(view.current.id,view.current);view.owned.forEach(p=>unique.set(p.id,p));unique.forEach(p=>choices.push(['part:'+p.id,p.title]));
   if(view.phase!==lastPhase){selection=view.current?'part:'+view.current.id:['build','submit','debrief','closed'].includes(view.phase)?'configuration':'vehicle';lastPhase=view.phase;}
   if(view.current&&view.current.id!==lastCurrent)selection='part:'+view.current.id;lastCurrent=view.current?.id||'';
   if(!choices.some(c=>c[0]===selection))selection='vehicle';objects.replaceChildren();choices.forEach(c=>option(objects,...c));objects.value=selection;objects.closest('label').hidden=choices.length<2;const toolbar=stage.querySelector?.('.sea3d-toolbar');if(toolbar)toolbar.hidden=choices.length<2&&teams.closest('label').hidden;
   const next=JSON.stringify([view,selection]);if(failed){fail();return;}
   if(!runtime){host.hidden=false;runtime=SEAThree.mount(host,fail,id=>{selection='part:'+id;queue();});}
   host.hidden=false;if(!document.body.classList.contains?.('sea3d-active'))document.body.classList.add('sea3d-active');const selectedPart=unique.get(selection.slice(5)),sceneLabels=seaSceneModelLabels(view,selection,labels,selectedPart?.title);get('sea3d-title').textContent=sceneLabels.title;get('sea3dStatus').textContent=sceneLabels.status;host.setAttribute('aria-label',sceneLabels.title);
   if(next!==signature){runtime.update(view,selection);signature=next;}
   const mode=get('sea3dMode');mode.replaceChildren();for(const key of ['assembled','exploded','cutaway'])option(mode,key,labels[key]);mode.value=inspectionMode;get('sea3dSeparation').hidden=inspectionMode!=='exploded';get('sea3dPercent').textContent=get('sea3dAmount').value+'%';runtime.inspect?.(inspectionMode,Number(get('sea3dAmount').value)/100);runtime.shadows?.(get('sea3dShadows').checked);
   const names={en:{body:'Body panels',chassis:'Chassis',cockpit:'Driver controls',glass:'Glazing',crane:'Recovery crane',wheel:'Wheel',roof:'Roof',seating:'Seats',frame:'Frame',cooling:'Cooling',heads:'Cylinder heads',connections:'Connections',powertrain:'Powertrain',barrel:'Barrel',mount:'Mount',controls:'Controls',optics:'Optics & antennae',protection:'Protection',mechanism:'Mechanism',display:'Display',documents:'Review documents',front:'Front equipment'},fr:{body:'Panneaux de carrosserie',chassis:'Châssis',cockpit:'Commandes du conducteur',glass:'Vitrage',crane:'Grue de dépannage',wheel:'Roue',roof:'Toit',seating:'Sièges',frame:'Cadre',cooling:'Refroidissement',heads:'Culasses',connections:'Raccordements',powertrain:'Groupe motopropulseur',barrel:'Canon',mount:'Support',controls:'Commandes',optics:'Optiques et antennes',protection:'Protection',mechanism:'Mécanisme',display:'Écran',documents:'Documents de revue',front:'Équipements avant'}};
   const engineNames={en:{head:'Cylinder head and rocker cover',block:'Cylinder block and liners',sump:'Oil sump',rotating:'Crankshaft, rods and pistons',transmission:'Transmission',intake:'Air intake',exhaust:'Exhaust and turbo',cooling:'Cooling pack',services:'Service fittings',skid:'Mounting skid'},fr:{head:'Culasse et cache-culbuteurs',block:'Bloc-cylindres et chemises',sump:'Carter d’huile',rotating:'Vilebrequin, bielles et pistons',transmission:'Transmission',intake:'Admission d’air',exhaust:'Échappement et turbo',cooling:'Refroidissement',services:'Raccords de service',skid:'Châssis de montage'}};
   const parts=get('sea3dParts');parts.replaceChildren();for(const key of runtime.parts?.()||[]){const [kind,id]=key.split(':'),b=document.createElement('button');b.type='button';b.textContent=kind==='equipment'?unique.get(id)?.title||id:kind==='engine'?(engineNames[lang]?.[id]||id):(names[lang]?.[kind]||kind)+(id?' '+id:'');b.addEventListener('click',()=>runtime.focus?.(key));parts.appendChild(b);}
   seaSceneSaveControls(stage,t('backup.menu'));
   const commandContext=JSON.stringify([state.phase,state.sessionCode,lang]);
   seaSceneInspection(stage,labels,inspectionMode,commandContext,id=>{if(['assembled','exploded','cutaway'].includes(id)){inspectionMode=id;queue();}else runtime?.view(id);},()=>get('seaInlineConfirm')?'':JSON.stringify([state.phase,state.sessionCode,lang]),!!get('seaInlineConfirm'));
   get('sea3dMode').closest('label').setAttribute('data-scene-skip','true');
   get('sea3d-views').closest('details').hidden=true;
   let sessionContext=get('sea3dSessionContext');if(!sessionContext){sessionContext=document.createElement('p');sessionContext.id='sea3dSessionContext';sessionContext.setAttribute('data-scene-section','help');sessionContext.setAttribute('data-scene-priority','90');stage.appendChild(sessionContext);}
   sessionContext.textContent=state.sessionCode?(lang==='fr'?'Séance : ':'Session: ')+state.sessionCode:'';
   syncSceneInterface(stage,active,labels,{role:t('role'),team:view.teamId?t('common.team',{n:view.teamId}):'',version:APP.version,phase:t('phase.'+state.phase),mission:sceneLabels.mission,session:state.sessionCode||''});
 }catch{fail();}}
 function queue(){if(!queued){queued=true;requestAnimationFrame(sync);}}
 get('sea3dMode').addEventListener('change',()=>{inspectionMode=get('sea3dMode').value;queue();});get('sea3dAmount').addEventListener('input',queue);
 objects.addEventListener('change',()=>{selection=objects.value;queue();});teams.addEventListener('change',()=>{selectInspectedTeam(teams.value,true);queue();});
 host.addEventListener('sea3drestored',()=>{failed=false;signature='';queue();});
 document.addEventListener('click',e=>{const summary=e.target.closest?.('summary');if(summary)selectBuildSummary(summary);queue();});document.addEventListener('change',queue);document.addEventListener('input',queue);
 document.addEventListener('keydown',e=>{if(e.key==='Tab')document.body.classList.add('scene-keyboard');});document.addEventListener('pointerdown',()=>document.body.classList.remove('scene-keyboard'));
 if(typeof MutationObserver==='function'){const observer=new MutationObserver(records=>{if(records.some(r=>!(r.target.nodeType===3?r.target.parentElement:r.target).closest?.('#sea3dScene,.scene-editor')))queue();});observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','hidden','disabled','open']});window.addEventListener('pagehide',()=>observer.disconnect(),{once:true});}
 window.addEventListener('pagehide',()=>runtime?.dispose(),{once:true});
 queue();return queue;
}
