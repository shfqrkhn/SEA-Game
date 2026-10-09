// Shared in-page confirmation and notification UI; composed into each standalone app.
let seaApprovedAction=null;
function seaConfirmGate(key,message,retry){
 if(seaApprovedAction===key){seaApprovedAction=null;return true}
 let panel=document.getElementById('seaInlineConfirm');
 if(!panel){panel=document.createElement('section');panel.id='seaInlineConfirm';panel.className='card';panel.setAttribute('role','dialog');panel.setAttribute('aria-labelledby','seaConfirmMessage');panel._returnFocus=document.activeElement;panel.style.cssText='position:sticky;top:48px;z-index:55;margin:0 12px;padding:12px;border:2px solid var(--blue);background:#fff;color:#17272b;box-shadow:0 3px 10px #17272b22';document.querySelector('header').insertAdjacentElement('afterend',panel)}
 panel.replaceChildren();
 const msg=document.createElement('p');msg.id='seaConfirmMessage';msg.style.margin='0 0 8px';msg.textContent=message;
 const actions=document.createElement('div');actions.className='inline';
 const yes=document.createElement('button');yes.type='button';yes.className='btn primary';yes.textContent=lang==='fr'?'Confirmer':'Confirm';
 const no=document.createElement('button');no.type='button';no.className='btn';no.textContent=lang==='fr'?'Annuler':'Cancel';
 let handled=false;
 const dismiss=(restoreFocus=true)=>{if(handled||!no.isConnected||!panel.contains(no))return;handled=true;panel.remove();seaApprovedAction=null;if(restoreFocus&&panel._returnFocus?.isConnected)panel._returnFocus.focus()};
 yes.onclick=()=>{if(handled||!yes.isConnected||!panel.contains(yes))return;handled=true;panel.remove();if(panel._returnFocus?.isConnected)panel._returnFocus.focus();seaApprovedAction=key;try{retry()}finally{seaApprovedAction=null}};
 no.onclick=()=>dismiss();panel._dismiss=dismiss;
 panel.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();dismiss()}else if(e.key==='Tab'){if(e.shiftKey&&document.activeElement===yes){e.preventDefault();no.focus()}else if(!e.shiftKey&&document.activeElement===no){e.preventDefault();yes.focus()}}};
 actions.append(yes,no);panel.append(msg,actions);no.focus();
 return false;
}
function seaCancelConfirmation(){
 const panel=document.getElementById('seaInlineConfirm');if(!panel)return false;
 panel._dismiss(panel.contains(document.activeElement));return true;
}
function setLang(next){if(!['en','fr'].includes(next))return false;if(next===lang)return true;seaCancelConfirmation();lang=next;renderAll();saveState();return true}

function seaNotify(message){
 let region=document.getElementById('seaNotice');
 if(!region){region=document.createElement('div');region.id='seaNotice';region.className='notice bad';region.setAttribute('role','alert');region.style.cssText='position:sticky;top:0;z-index:50;margin:8px 16px;border:2px solid var(--red);box-shadow:0 3px 12px rgba(0,0,0,.12)';const header=document.querySelector('header');header.insertAdjacentElement('afterend',region)}
 const focused=region.contains(document.activeElement);if(!focused)region._returnFocus=document.activeElement;
 region.replaceChildren();const text=document.createElement('span');text.textContent=String(message);const close=document.createElement('button');close.type='button';close.className='btn ghost';close.textContent='×';close.setAttribute('aria-label',t('common.dismiss'));close.dataset.i18nAriaLabel='common.dismiss';
 close.onclick=()=>{if(!close.isConnected||!region.contains(close))return;const restore=region.contains(document.activeElement),target=region._returnFocus;region.remove();if(restore&&target?.isConnected)target.focus()};region.append(text,close);if(focused)close.focus();region.scrollIntoView({block:'nearest'});
}

// Canonical image rendering and mission previews; no game-state mutation.
function vehiclePreview(id){
 if(!validMission(id))return "";
 const rows=Object.entries(MISSIONS[id].req).map(([k,v])=>`<tr><td>${esc(LABELS[k][lang][0])}</td><td>${v} ${esc(LABELS[k][lang][1])}</td></tr>`).join("");
 return `<div class="vehicle-preview"><div class="art vehicle-art">${art({id:MISSION_ARTWORK[id],title:{en:MISSIONS[id].en,fr:MISSIONS[id].fr}})}</div><p>${esc(t("vehicle."+id+".desc"))}</p><details><summary>${esc(t("vehicle.requirements"))}</summary><table class="req"><tbody>${rows}</tbody></table></details><p><strong>${esc(t("vehicle.rated"))}</strong><br>${esc(t("vehicle."+id+".rated"))}</p></div>`;
}
function embeddedArt(card){
 const svg=BUILTIN_CARD_ART[card.id];if(!svg)return '';
 return svg.replace(/<svg\b[^>]*>/,opening=>opening.replace(/\saria-label="[^"]*"/,'').replace('>',` aria-label="${esc(card.title[lang])}">`));
}
function art(card){return embeddedArt(card)}
