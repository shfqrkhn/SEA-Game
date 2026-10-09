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
 const dismiss=()=>{if(handled||!no.isConnected||!panel.contains(no))return;handled=true;panel.remove();seaApprovedAction=null;if(panel._returnFocus?.isConnected)panel._returnFocus.focus()};
 yes.onclick=()=>{if(handled||!yes.isConnected||!panel.contains(yes))return;handled=true;panel.remove();if(panel._returnFocus?.isConnected)panel._returnFocus.focus();seaApprovedAction=key;try{retry()}finally{seaApprovedAction=null}};
 no.onclick=dismiss;
 panel.onkeydown=e=>{if(e.key==='Escape'){e.preventDefault();dismiss()}else if(e.key==='Tab'){if(e.shiftKey&&document.activeElement===yes){e.preventDefault();no.focus()}else if(!e.shiftKey&&document.activeElement===no){e.preventDefault();yes.focus()}}};
 actions.append(yes,no);panel.append(msg,actions);no.focus();
 return false;
}

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
function placeholderArt(card){const svg=BUILTIN_CARD_ART[card.id]||'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" role="img"><rect width="1200" height="360" fill="#f4f2ed"/><text x="600" y="188" text-anchor="middle" font-family="Arial,sans-serif" font-size="32" fill="#3f4a45">'+esc(card.title[lang])+'</text></svg>';return svg.replace(/<svg\b[^>]*>/,opening=>opening.replace(/\saria-label="[^"]*"/,'').replace('>',` aria-label="${esc(card.title[lang])}">`))}

function art(card){
 const fallback=placeholderArt(card);
 if(!Object.prototype.hasOwnProperty.call(BUILTIN_CARD_ART,card.id))return fallback;
 const path=artworkAssetPath(card.id);if(!path)return fallback;
 const local='./assets/v1/'+path;
 const remote='https://shfqrkhn.github.io/SEA-Game/assets/v1/'+path;
 const initial=(navigator.onLine===false||location.protocol==='file:')?local:remote;
 return `<div style="height:100%;width:100%;position:relative">${fallback}<img alt="${esc(card.title[lang])}" decoding="async" src="${initial}" data-sea-art="${esc(card.id)}" data-sea-art-remote="${initial===remote?'1':'0'}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;opacity:0;background:#f0ede5"></div>`;
}

let artworkEventsBound=false;
function bindArtworkEvents(){
 if(artworkEventsBound)return;artworkEventsBound=true;
 const validImage=image=>image?.tagName==='IMG'&&image.isConnected&&Object.prototype.hasOwnProperty.call(BUILTIN_CARD_ART,image.dataset?.seaArt)&&artworkAssetPath(image.dataset.seaArt);
 document.addEventListener('load',event=>{if(validImage(event.target))event.target.style.opacity='1'},true);
 document.addEventListener('error',event=>{const image=event.target,path=validImage(image);if(!path)return;if(image.dataset.seaArtRemote==='1'){image.style.opacity='0';image.dataset.seaArtRemote='0';image.src='./assets/v1/'+path}else image.remove()},true);
}
