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
 const ui={en:{title:'Your vehicle',object:'Explore',team:'Team',vehicle:'Mission vehicle',configuration:'Your build',reset:'Overview',front:'Front',rear:'Rear',views:'Views',shadows:'Shadows',mode:'View',assembled:'Assembled',exploded:'Exploded',cutaway:'Cutaway',separation:'Separation',map:'Assembly map',fallback:'The scene could not start. Game controls remain available.',hint:'Drag to rotate · Scroll to zoom. Select fitted equipment to inspect.',waiting:'Choose your mission.',context:{setup:'Choose a vehicle for your mission.',practice:'Try a practice purchase. Your scored budget is unchanged.',planning:'Plan your build against the mission requirements.',auction:'Compare the equipment with your mission needs.',build:'Purchased equipment fitted. Use cutaway to inspect the interior.',submit:'Check your build, then choose your profit.',debrief:'Review the decisions that shaped your vehicle.',closed:'Your final vehicle and purchases.'}},fr:{title:'Votre véhicule',object:'Explorer',team:'Équipe',vehicle:'Véhicule de mission',configuration:'Votre configuration',reset:'Vue générale',front:'Avant',rear:'Arrière',views:'Vues',shadows:'Ombres',mode:'Vue',assembled:'Assemblé',exploded:'Éclaté',cutaway:'En coupe',separation:'Séparation',map:'Plan des assemblages',fallback:'La scène n’a pas démarré. Les commandes du jeu restent disponibles.',hint:'Glissez pour tourner · Défilez pour zoomer. Sélectionnez un équipement installé pour l’examiner.',waiting:'Choisissez votre mission.',context:{setup:'Choisissez un véhicule pour votre mission.',practice:'Essayez un achat d’entraînement sans modifier le budget coté.',planning:'Planifiez votre configuration selon les exigences.',auction:'Comparez l’équipement aux besoins de votre mission.',build:'Équipements achetés installés. Utilisez la coupe pour examiner l’intérieur.',submit:'Vérifiez votre configuration, puis choisissez votre profit.',debrief:'Examinez les décisions qui ont façonné votre véhicule.',closed:'Votre véhicule final et vos achats.'}}};
 let runtime=null,signature='',queued=false,failed=false,selection='',lastPhase='',lastCurrent='',selectedTeam='',inspectionMode='assembled';
 const get=id=>document.getElementById(id),objects=get('sea3dObject'),teams=get('sea3dTeam');
 function fail(){failed=true;document.body.classList.remove('sea3d-active');get('sea3dStatus').textContent=ui[lang].fallback;host.hidden=true;}
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
   host.hidden=false;document.body.classList.add('sea3d-active');const selectedPart=unique.get(selection.slice(5));get('sea3d-title').textContent=selection.startsWith('part:')?selectedPart?.title||labels.title:selection==='configuration'?labels.configuration:MISSIONS[view.mission][lang];get('sea3dStatus').textContent=labels.context[view.phase]||labels.waiting;host.setAttribute('aria-label',get('sea3d-title').textContent);
   if(next!==signature){runtime.update(view,selection);signature=next;}
   const mode=get('sea3dMode');mode.replaceChildren();for(const key of ['assembled','exploded','cutaway'])option(mode,key,labels[key]);mode.value=inspectionMode;get('sea3dSeparation').hidden=inspectionMode!=='exploded';get('sea3dPercent').textContent=get('sea3dAmount').value+'%';runtime.inspect?.(inspectionMode,Number(get('sea3dAmount').value)/100);runtime.shadows?.(get('sea3dShadows').checked);
   const names={en:{body:'Body panels',chassis:'Chassis',cockpit:'Driver controls',glass:'Glazing',crane:'Recovery crane',wheel:'Wheel',roof:'Roof',seating:'Seats',frame:'Frame',cooling:'Cooling',heads:'Cylinder heads',connections:'Connections',powertrain:'Powertrain',barrel:'Barrel',mount:'Mount',controls:'Controls',optics:'Optics & antennae',protection:'Protection',mechanism:'Mechanism',display:'Display',documents:'Review documents',front:'Front equipment'},fr:{body:'Panneaux de carrosserie',chassis:'Châssis',cockpit:'Commandes du conducteur',glass:'Vitrage',crane:'Grue de dépannage',wheel:'Roue',roof:'Toit',seating:'Sièges',frame:'Cadre',cooling:'Refroidissement',heads:'Culasses',connections:'Raccordements',powertrain:'Groupe motopropulseur',barrel:'Canon',mount:'Support',controls:'Commandes',optics:'Optiques et antennes',protection:'Protection',mechanism:'Mécanisme',display:'Écran',documents:'Documents de revue',front:'Équipements avant'}};
   const parts=get('sea3dParts');parts.replaceChildren();for(const key of runtime.parts?.()||[]){const [kind,id]=key.split(':'),b=document.createElement('button');b.type='button';b.textContent=kind==='equipment'?unique.get(id)?.title||id:(names[lang]?.[kind]||kind)+(id?' '+id:'');b.addEventListener('click',()=>runtime.focus?.(key));parts.appendChild(b);}
 }catch{fail();}}
 function queue(){if(!queued){queued=true;requestAnimationFrame(sync);}}
 get('sea3dMode').addEventListener('change',()=>{inspectionMode=get('sea3dMode').value;queue();});get('sea3dAmount').addEventListener('input',queue);
 objects.addEventListener('change',()=>{selection=objects.value;queue();});teams.addEventListener('change',()=>{selectedTeam=teams.value;signature='';queue();});
 for(const key of ['reset','front','rear'])get('sea3d-'+key).addEventListener('click',()=>runtime?.view(key));
 host.addEventListener('sea3drestored',()=>{failed=false;signature='';queue();});
 document.addEventListener('click',queue);document.addEventListener('change',queue);document.addEventListener('input',queue);
 window.addEventListener('pagehide',()=>runtime?.dispose(),{once:true});
 queue();return queue;
}
