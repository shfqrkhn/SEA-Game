// Strict projection: no market order, seed, bids, private plans or submission drafts.
let sea3DQueue=null;
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
 const ui={en:{title:'3D vehicle workshop',object:'Inspect',team:'Team',vehicle:'Mission vehicle',configuration:'Vehicle and purchased equipment',reset:'Reset view',front:'Front',rear:'Rear',fallback:'3D could not start. Game controls remain available.',hint:'Drag to orbit; scroll or pinch to zoom. Stations show the latest purchase per category; all owned cards remain inspectable. Game statistics and rules remain authoritative.',waiting:'Choose a mission to preview its vehicle.'},fr:{title:'Atelier de véhicules 3D',object:'Inspecter',team:'Équipe',vehicle:'Véhicule de mission',configuration:'Véhicule et équipements achetés',reset:'Réinitialiser la vue',front:'Avant',rear:'Arrière',fallback:'La 3D n’a pas démarré. Les commandes du jeu restent disponibles.',hint:'Glissez pour tourner; défilez ou pincez pour zoomer. Les postes montrent le dernier achat de chaque catégorie; chaque carte achetée reste consultable. Les statistiques et règles font autorité.',waiting:'Choisissez une mission pour voir son véhicule.'}};
 let runtime=null,signature='',queued=false,failed=false,selection='',lastPhase='',lastCurrent='',selectedTeam='';
 const get=id=>document.getElementById(id),objects=get('sea3dObject'),teams=get('sea3dTeam');
 function fail(){failed=true;document.body.classList.remove('sea3d-active');get('sea3dStatus').textContent=ui[lang].fallback;host.hidden=true;}
 function option(select,value,label){const e=document.createElement('option');e.value=value;e.textContent=label;select.appendChild(e);}
 function sync(){queued=false;try{
   const labels=ui[lang]||ui.en;for(const key of ['title','object','team','reset','front','rear','hint'])get('sea3d-'+key).textContent=labels[key];host.setAttribute('aria-label',labels.title);
   const view=sea3DView(state,role,selectedTeam,lang,get('vehicleSelect')?.value);
   teams.replaceChildren();view.teams.forEach(x=>option(teams,String(x.id),labels.team+' '+x.id));teams.value=String(view.teamId||'');teams.closest('label').hidden=role!=='instructor'||view.teams.length<2;
   const choices=[['vehicle',labels.vehicle],['configuration',labels.configuration]];
   const unique=new Map();if(view.current)unique.set(view.current.id,view.current);view.owned.forEach(p=>unique.set(p.id,p));unique.forEach(p=>choices.push(['part:'+p.id,p.title]));
   if(view.phase!==lastPhase){selection=view.current?'part:'+view.current.id:['build','submit','debrief','closed'].includes(view.phase)?'configuration':'vehicle';lastPhase=view.phase;}
   if(view.current&&view.current.id!==lastCurrent)selection='part:'+view.current.id;lastCurrent=view.current?.id||'';
   if(!choices.some(c=>c[0]===selection))selection='vehicle';objects.replaceChildren();choices.forEach(c=>option(objects,...c));objects.value=selection;
   const next=JSON.stringify([view,selection]);if(failed){fail();return;}
   if(!runtime){host.hidden=false;runtime=SEAThree.mount(host,fail);}
   host.hidden=false;document.body.classList.add('sea3d-active');get('sea3dStatus').textContent=view.current&&selection==='part:'+view.current.id?view.current.title:labels.vehicle;
   if(next!==signature){runtime.update(view,selection);signature=next;}
 }catch{fail();}}
 function queue(){if(!queued){queued=true;requestAnimationFrame(sync);}}
 objects.addEventListener('change',()=>{selection=objects.value;queue();});teams.addEventListener('change',()=>{selectedTeam=teams.value;signature='';queue();});
 for(const key of ['reset','front','rear'])get('sea3d-'+key).addEventListener('click',()=>runtime?.view(key));
 host.addEventListener('sea3drestored',()=>{failed=false;signature='';queue();});
 document.addEventListener('click',queue);document.addEventListener('change',queue);document.addEventListener('input',queue);
 window.addEventListener('pagehide',()=>runtime?.dispose(),{once:true});
 queue();return queue;
}
