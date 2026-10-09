// Shared pure rules. Bundled into each offline HTML with no runtime dependency.
const APP=Object.freeze({version:"3.0.0-local",ruleset:"STANDARD",deck:"synthetic-v1",rounds:7,lotsPerRound:10,bidIncrementCents:5000000});
const PHASES=["setup","practice","planning","auction","build","submit","debrief","closed"];
const MISSION_ARTWORK=Object.freeze({COMBAT:'combat',RECCE:'recce',TROOP:'troop-carrier',COMMAND:'command-post',RECOVERY:'recovery',MINE:'mine-clearing'});
function artworkAssetPath(id){if(id==='TRAIN-CAP')return 'practice/TRAIN-CAP.webp';if(Object.values(MISSION_ARTWORK).includes(id))return 'vehicles/'+id+'.webp';if(CARD_INDEX.has(id))return 'cards/'+id+'.webp';return null}
const MAX_SAFE_CENTS=BigInt(Number.MAX_SAFE_INTEGER);
const MAX_INSTRUCTOR_LEDGER_ENTRIES=210;
const BACKUP_FORMAT="SEA-GAME-BACKUP",BACKUP_VERSION=1,MAX_BACKUP_CHARS=500000;
function makeBackup(role,state){must(["INSTRUCTOR","STUDENT"].includes(role)&&state&&state.schema===3);const session=parseSessionCode(state.sessionCode);return JSON.stringify({format:BACKUP_FORMAT,version:BACKUP_VERSION,appVersion:APP.version,ruleset:APP.ruleset,deck:APP.deck,schema:state.schema,sessionCode:session.code,role,state})}
function parseBackup(raw,role,validate,maxChars=MAX_BACKUP_CHARS){
 must(typeof raw==="string"&&raw.length<=maxChars&&["INSTRUCTOR","STUDENT"].includes(role)&&typeof validate==="function");
 const doc=JSON.parse(raw);must(doc&&typeof doc==="object"&&!Array.isArray(doc));
 const keys=Object.keys(doc).sort();must(keys.length===9&&keys.join(",")==="appVersion,deck,format,role,ruleset,schema,sessionCode,state,version");
 must(doc.format===BACKUP_FORMAT&&doc.version===BACKUP_VERSION&&typeof doc.appVersion==="string"&&doc.appVersion.length<=40&&doc.ruleset===APP.ruleset&&doc.deck===APP.deck&&doc.schema===3&&doc.role===role);
 must(doc.state&&typeof doc.state==="object"&&!Array.isArray(doc.state)&&doc.state.schema===doc.schema&&doc.state.sessionCode===doc.sessionCode);
 const normalized=validate(doc.state);must(normalized.schema===doc.schema&&normalized.sessionCode===doc.sessionCode);return normalized;
}
function validCents(n){return Number.isSafeInteger(n)&&n>=0}
function parseAmount(raw){
 const s=String(raw??"").trim();if(s.length>20)throw new Error("money");
 const m=/^(\d+)(?:[.,](\d{1,2}))?$/.exec(s);if(!m)throw new Error("money");
 const n=BigInt(m[1])*100n+BigInt((m[2]||"").padEnd(2,"0"));if(n>MAX_SAFE_CENTS)throw new Error("money");return Number(n);
}
function parseWholeDollars(raw){const s=String(raw??"").trim();if(s.length>17||!/^\d+$/.test(s))throw new Error("money");const c=BigInt(s)*100n;if(c>MAX_SAFE_CENTS)throw new Error("money");return Number(c)}
function parsePercentBps(raw){const s=String(raw??"").trim(),m=/^(\d+)(?:[.,](\d{1,2}))?$/.exec(s);if(s.length>10||!m)throw new Error("percent");const b=BigInt(m[1])*100n+BigInt((m[2]||"").padEnd(2,"0"));if(b>1000000n)throw new Error("percent");return b}
function addCents(a,b){if(!validCents(a)||!validCents(b))throw new Error("money");const z=BigInt(a)+BigInt(b);if(z>MAX_SAFE_CENTS)throw new Error("money");return Number(z)}
function profitFromBps(costCents,bps){if(!validCents(costCents))throw new Error("money");const b=BigInt(bps);if(b<0n||b>1000000n)throw new Error("percent");const p=(BigInt(costCents)*b+5000n)/10000n;if(p>MAX_SAFE_CENTS)throw new Error("money");return Number(p)}
const SLOT_ORDER=["CAPACITY","MOBILITY","FIREPOWER","PROTECTION","COMMS","SA","ACCESSORIES","SE_PROCESS","SE_PROCESS","SE_PROCESS"];
const LABELS={CAP:{en:["Capacity","persons"],fr:["Capacité","personnes"]},MOB:{en:["Mobility","km/h"],fr:["Mobilité","km/h"]},FP:{en:["Firepower","points"],fr:["Puissance de feu","points"]},PRO:{en:["Protection","points"],fr:["Protection","points"]},COM:{en:["Communications","km"],fr:["Communications","km"]},SA:{en:["Situational awareness","ways"],fr:["Connaissance de la situation","moyens"]},REC:{en:["Recovery","ways"],fr:["Dépannage","moyens"]},MC:{en:["Mine clearing","ways"],fr:["Déminage","moyens"]}};
const MISSIONS={COMBAT:{en:"Combat",fr:"Combat",req:{CAP:4,MOB:80,FP:10,PRO:10,COM:25,SA:1}},RECCE:{en:"RECCE",fr:"Reconnaissance",req:{CAP:3,MOB:120,FP:4,PRO:2,COM:75,SA:5}},TROOP:{en:"Troop Carrier",fr:"Transport de troupes",req:{CAP:10,MOB:100,FP:2,PRO:4,COM:25,SA:2}},COMMAND:{en:"Command Post",fr:"Poste de commandement",req:{CAP:5,MOB:60,FP:2,PRO:4,COM:125,SA:4}},RECOVERY:{en:"Recovery",fr:"Dépannage",req:{CAP:3,MOB:80,FP:4,PRO:6,COM:75,SA:2,REC:3}},MINE:{en:"Mine Clearing",fr:"Déminage",req:{CAP:4,MOB:40,FP:8,PRO:10,COM:25,SA:1,MC:3}}};
const POOLS={
CAPACITY:[["CAP-A",["Modular Crew Hull","Coque modulaire pour équipage"],300000,{CAP:6,MOB:-10}],["CAP-B",["Extended Carrier Module","Module de transport agrandi"],450000,{CAP:6}],["CAP-C",["Compact Passenger Bay","Compartiment compact pour passagers"],250000,{CAP:4,PRO:-1}],["CAP-D",["High-Capacity Hull","Coque à grande capacité"],550000,{CAP:8,MOB:-20}],["CAP-E",["Crew Compartment Insert","Insert de compartiment équipage"],350000,{CAP:5}],["CAP-F",["Protected Personnel Module","Module protégé pour personnel"],650000,{CAP:5,PRO:2}],["CAP-G",["Light Utility Hull","Coque utilitaire légère"],400000,{CAP:4,MOB:10}]],
MOBILITY:[["MOB-A",["Efficient Power Pack","Groupe motopropulseur efficace"],400000,{MOB:70}],["MOB-B",["High-Torque Drivetrain","Groupe de transmission à couple élevé"],550000,{MOB:80}],["MOB-C",["Lightweight Running Gear","Train de roulement léger"],350000,{MOB:60}],["MOB-D",["Heavy-Duty Suspension","Suspension renforcée"],500000,{MOB:50,PRO:1}],["MOB-E",["Long-Range Propulsion","Propulsion à longue portée"],600000,{MOB:90}],["MOB-F",["Compact Engine Set","Groupe moteur compact"],300000,{MOB:50}],["MOB-G",["Adaptive Traction Package","Ensemble de traction adaptative"],450000,{MOB:65}]],
FIREPOWER:[["FP-A",["Defensive Weapon Station","Poste d’arme défensif"],350000,{FP:2}],["FP-B",["Medium Weapon Station","Poste d’arme moyen"],500000,{FP:4}],["FP-C",["Heavy Weapon Station","Poste d’arme lourd"],700000,{FP:6,MOB:-10}],["FP-D",["Remote Defensive Mount","Affût défensif téléopéré"],600000,{FP:3,SA:1}],["FP-E",["Light Weapon Mount","Affût léger"],250000,{FP:2}],["FP-F",["Stabilized Weapon Suite","Ensemble d’arme stabilisée"],650000,{FP:5}],["FP-G",["Dual-Purpose Mount","Affût polyvalent"],550000,{FP:4,PRO:-1}]],
PROTECTION:[["PRO-A",["Layered Protection Kit","Ensemble de protection multicouche"],500000,{PRO:4,MOB:-10}],["PRO-B",["Composite Armour Set","Ensemble de blindage composite"],650000,{PRO:5}],["PRO-C",["Light Armour Panels","Panneaux de blindage léger"],350000,{PRO:3}],["PRO-D",["Reinforced Crew Cell","Cellule équipage renforcée"],700000,{PRO:4,CAP:2}],["PRO-E",["Modular Side Protection","Protection latérale modulaire"],450000,{PRO:3,MOB:-5}],["PRO-F",["Blast Protection Kit","Ensemble de protection contre le souffle"],600000,{PRO:5,MOB:-10}],["PRO-G",["Lightweight Protective Shell","Coque protectrice légère"],550000,{PRO:4}]],
COMMS:[["COM-A",["Convoy Radio Suite","Ensemble radio de convoi"],250000,{COM:50}],["COM-B",["Extended Radio Network","Réseau radio étendu"],450000,{COM:100}],["COM-C",["Compact Communications Set","Ensemble de communications compact"],150000,{COM:25}],["COM-D",["Relay Communications Suite","Ensemble de communications relais"],500000,{COM:75,SA:1}],["COM-E",["Long-Range Radio Set","Ensemble radio longue portée"],600000,{COM:125}],["COM-F",["Secure Tactical Radio","Radio tactique sécurisée"],350000,{COM:50}],["COM-G",["Dual-Channel Radio Package","Ensemble radio double canal"],400000,{COM:75}]],
SA:[["SA-A",["Crew Observation Suite","Ensemble d’observation équipage"],300000,{SA:2}],["SA-B",["Multi-Sensor Awareness Suite","Ensemble multisenseur"],600000,{SA:4}],["SA-C",["Basic Observation Set","Ensemble d’observation de base"],200000,{SA:1}],["SA-D",["Panoramic Sensor Mast","Mât de capteurs panoramiques"],550000,{SA:3,MOB:-5}],["SA-E",["Crew Vision Enhancement","Amélioration de vision équipage"],350000,{SA:2}],["SA-F",["Integrated Detection Suite","Ensemble intégré de détection"],650000,{SA:4}],["SA-G",["Distributed Observation Kit","Ensemble d’observation distribué"],500000,{SA:3,COM:25}]],
ACCESSORIES:[["ACC-A",["Recovery Accessory Pack","Ensemble d’accessoires de dépannage"],400000,{REC:2}],["ACC-B",["Utility Trailer Module","Module de remorque utilitaire"],450000,{CAP:3,MOB:-10}],["ACC-C",["Mine-Route Accessory Kit","Ensemble d’accessoires pour route minée"],500000,{MC:2}],["ACC-D",["Field Support Pack","Ensemble de soutien de campagne"],550000,{REC:1,CAP:2}],["ACC-E",["Engineer Support Module","Module de soutien du génie"],600000,{MC:2,PRO:1}],["ACC-F",["Recovery Winch Package","Ensemble de treuil de dépannage"],350000,{REC:2}],["ACC-G",["Mission Equipment Rack","Support d’équipement de mission"],400000,{CAP:2,SA:1}]],
SE_PROCESS:[["SE-A",["Requirements Review","Revue des exigences"],200000,{SA:1}],["SE-B",["Risk Review","Revue des risques"],200000,{PRO:1}],["SE-C",["Interface Review","Revue des interfaces"],200000,{COM:25}],["SE-D",["Verification Planning","Planification de la vérification"],200000,{CAP:1}],["SE-E",["Configuration Review","Revue de configuration"],200000,{MOB:10}],["SE-F",["Trade Study","Étude de compromis"],200000,{SA:1}],["SE-G",["Validation Planning","Planification de la validation"],200000,{PRO:1}],["SE-H",["Architecture Review","Revue d’architecture"],200000,{COM:25}],["SE-I",["Risk Reduction Study","Étude de réduction des risques"],200000,{CAP:1}],["SE-J",["Requirements Trace","Traçabilité des exigences"],200000,{MOB:10}],["SE-K",["Integration Planning","Planification de l’intégration"],200000,{SA:1}],["SE-L",["Test Readiness Review","Revue de préparation aux essais"],200000,{PRO:1}],["SE-M",["Design Review","Revue de conception"],200000,{COM:25}],["SE-N",["Supplier Risk Review","Revue des risques fournisseurs"],200000,{CAP:1}],["SE-O",["Baseline Audit","Audit de référence"],200000,{MOB:10}],["SE-P",["Change Control Review","Revue de contrôle des changements"],200000,{SA:1}],["SE-Q",["Human Factors Review","Revue des facteurs humains"],200000,{PRO:1}],["SE-R",["Supportability Review","Revue de soutenabilité"],200000,{COM:25}],["SE-S",["Mission Analysis","Analyse de mission"],200000,{CAP:1}],["SE-T",["Lessons Review","Revue des leçons"],200000,{MOB:10}],["SE-U",["Acceptance Review","Revue d’acceptation"],200000,{SA:1}]]
};
const MISSION_IDS=["COMBAT","RECCE","TROOP","COMMAND","RECOVERY","MINE"];
function blank(){return {CAP:0,MOB:0,FP:0,PRO:0,COM:0,SA:0,REC:0,MC:0}}
function req(team){return MISSIONS[team.mission].req}
function compliant(team){return Object.entries(req(team)).every(([k,v])=>(team.totals[k]||0)>=v)}
function shortfalls(team){return Object.entries(req(team)).filter(([k,v])=>(team.totals[k]||0)<v)}
function score(team){const x=team.totals,p=v=>Math.max(v,0);switch(team.mission){case"COMBAT":return 20*Math.floor(p(x.MOB-80)/10)+20*p(x.FP-10);case"RECCE":return 20*Math.floor(p(x.COM-75)/25)+20*p(x.SA-5);case"TROOP":return 20*p(x.CAP-10)+20*p(x.PRO-4);case"COMMAND":return 20*p(x.CAP-5)+20*Math.floor(p(x.COM-125)/25);case"RECOVERY":return 20*p(x.PRO-6)+40*p(x.REC-3);case"MINE":return 20*p(x.SA-1)+40*p(x.MC-3)}}
function validMission(id){return typeof id==="string"&&MISSION_IDS.includes(id)}
function must(ok){if(!ok)throw new Error("invalid-state")}
function hasOnlyKeys(value,keys){return !!value&&typeof value==="object"&&!Array.isArray(value)&&Object.keys(value).every(key=>keys.includes(key))}
function cardIndex(){const m=new Map();for(const[cat,defs]of Object.entries(POOLS))for(const d of defs)m.set(d[0].toUpperCase(),{id:d[0],title:{en:d[1][0],fr:d[1][1]},start:d[2]*100,e:{...d[3]},cat});return m}
const CARD_INDEX=cardIndex();
function cardAt(id,round,lot){
 must(Number.isInteger(round)&&round>=1&&round<=7&&Number.isInteger(lot)&&lot>=1&&lot<=10);
 const c=CARD_INDEX.get(id);must(c&&c.cat===SLOT_ORDER[lot-1]);return {...c,title:{...c.title},e:{...c.e},round,lot,instance:`R${round}-L${lot}-${c.id}`};
}
function acquire(team,card,paid){
 // Validate before mutation; all derived fields come from canonical card data.
 const c=cardAt(card.id,card.round,card.lot);
 if(!validMission(team.mission)||!validCents(paid)||paid<c.start||(paid-c.start)%APP.bidIncrementCents!==0)throw new Error("money");
 if(team.purchases.some(p=>(p.round===c.round&&p.lot===c.lot)||p.id===c.id))throw new Error("duplicate");
 if(team.purchasesByRound[c.round-1]>=2)throw new Error("limit");
 const cost=addCents(team.cost,paid);addCents(cost,team.profit);const totals={...team.totals};for(const[k,v]of Object.entries(c.e))totals[k]+=v;
 const counts=[...team.purchasesByRound];counts[c.round-1]++;
 team.purchases=[...team.purchases,{...c,paid}];team.totals=totals;team.cost=cost;team.purchasesByRound=counts;
}
function xmur3(str){let h=1779033703^str.length;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),3432918353);h=h<<13|h>>>19}return()=>{h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);return(h^h>>>16)>>>0}}
function rng(str){const f=xmur3(str);let a=f(),b=f(),c=f(),d=f();return()=>{let q=(a+b|0)+d|0;d=d+1|0;a=b^b>>>9;b=c+(c<<3)|0;c=c<<21|c>>>11;c=c+q|0;return(q>>>0)/4294967296}}
function shuffle(a,r){const o=[...a];for(let i=o.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[o[i],o[j]]=[o[j],o[i]]}return o}
function marketFromSeed(seed){const r=rng("MARKET|"+seed),p={};for(const[k,v]of Object.entries(POOLS))p[k]=shuffle(v,r);const c={CAPACITY:0,MOBILITY:0,FIREPOWER:0,PROTECTION:0,COMMS:0,SA:0,ACCESSORIES:0,SE_PROCESS:0};return Array.from({length:7},(_,ri)=>SLOT_ORDER.map((slot,li)=>{const d=p[slot][c[slot]++];return{id:d[0],title:{en:d[1][0],fr:d[1][1]},start:d[2]*100,e:{...d[3]},cat:slot,round:ri+1,lot:li+1,instance:`R${ri+1}-L${li+1}-${d[0]}`}}))}
function awardComparator(a,b){const ab=addCents(a.cost,a.profit),bb=addCents(b.cost,b.profit),as=score(a),bs=score(b),L=BigInt(ab)*BigInt(bs),R=BigInt(bb)*BigInt(as);if(L<R)return-1;if(L>R)return 1;if(ab!==bb)return ab-bb;if(as!==bs)return bs-as;return a.id-b.id}
function exactTopTie(a,b){const ab=addCents(a.cost,a.profit),bb=addCents(b.cost,b.profit),as=score(a),bs=score(b);return BigInt(ab)*BigInt(bs)===BigInt(bb)*BigInt(as)&&ab===bb&&as===bs}
function awardEligible(team){return team.submitted&&compliant(team)&&score(team)>0}
function parseSessionCode(raw){const s=String(raw||"").trim();if(s.length>32)throw new Error("code");const m=/^SEA3-T(10|[2-9])-([0-9A-F]{16})$/i.exec(s);if(!m)throw new Error("code");return {code:m[0].toUpperCase(),teamCount:Number(m[1]),token:m[2].toUpperCase()}}
function createTeams(code){const cfg=typeof code==="string"?parseSessionCode(code):code;must(Number.isInteger(cfg.teamCount)&&cfg.teamCount>=2&&cfg.teamCount<=10);return Array.from({length:cfg.teamCount},(_,i)=>({id:i+1,mission:null,lockedMission:null,totals:blank(),cost:0,purchases:[],purchasesByRound:Array(7).fill(0),profit:0,submitted:false}))}
function cleanTeam(tm,allowUnset=false){
 must(tm&&Number.isInteger(tm.id)&&tm.id>=1&&tm.id<=10&&(validMission(tm.mission)||(allowUnset&&tm.mission===null)));
 must(Array.isArray(tm.purchases)&&tm.purchases.length<=14&&validCents(tm.profit)&&typeof tm.submitted==="boolean");
 const fresh={id:tm.id,mission:tm.mission,lockedMission:tm.lockedMission??null,totals:blank(),cost:0,purchases:[],purchasesByRound:Array(7).fill(0),profit:tm.profit,submitted:tm.submitted};
 for(const p of tm.purchases){must(p&&typeof p.id==="string");const c=cardAt(p.id,p.round,p.lot);must(p.instance===c.instance);acquire(fresh,c,p.paid)}
 addCents(fresh.cost,fresh.profit);return fresh;
}
function validateBase(x){
 must(x&&x.schema===3&&PHASES.includes(x.phase)&&["en","fr"].includes(x.lang));
 const cfg=parseSessionCode(x.sessionCode);must(x.teamCount===cfg.teamCount);
 must(Number.isInteger(x.round)&&x.round>=0&&x.round<7&&Number.isInteger(x.lot)&&x.lot>=0&&x.lot<10);return cfg;
}
const SEA_AUCTION=Object.freeze({
 canWin(used){return Number.isInteger(used)&&used>=0&&used<2},
 visible(mode,currentLot,currentRevealed,lot){
  if(mode==="ROUND")return true;
  if(lot<currentLot)return true;
  if(mode==="JIT")return lot===currentLot;
  return lot===currentLot&&currentRevealed;
 }
});
