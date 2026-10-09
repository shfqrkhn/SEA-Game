
let recoveryBlocked=false,storageFailed=false;
function vehicleOptions(selected){return `<option value="">${esc(t("vehicle.choose"))}</option>`+MISSION_IDS.map(id=>`<option value="${id}" ${selected===id?"selected":""}>${esc(MISSIONS[id][lang])}</option>`).join("")}
function renderVehiclePreview(target,id){const el=document.getElementById(target);if(el)el.innerHTML=vehiclePreview(id)}
function storageNotice(key){const el=$("#storageNotice");if(el){el.textContent=t(key);el.classList.remove("hidden")}}
function amountInput(c){must(validCents(c));const x=BigInt(c);return (x/100n).toString()+(x%100n?"."+(x%100n).toString().padStart(2,"0"):"")}
const OPTIONAL_PROTOTYPE_FEATURES=Object.freeze({placeholderArtwork:false});
let lang="en";
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function t(key,vars={}){let s=(I18N[lang]&&I18N[lang][key])||I18N.en[key]||key;for(const [k,v] of Object.entries(vars))s=s.replaceAll(`{${k}}`,String(v));return s}
function applyI18n(){
 document.documentElement.lang=lang;
 $$("[data-i18n]").forEach(e=>{e.textContent=t(e.dataset.i18n)});
 $$("[data-i18n-placeholder]").forEach(e=>{e.placeholder=t(e.dataset.i18nPlaceholder)});
 $$("[data-i18n-aria-label]").forEach(e=>e.setAttribute("aria-label",t(e.dataset.i18nAriaLabel)));
 $("#langBtn").textContent=lang==="en"?t("lang.switch.fr"):t("lang.switch.en");
 document.title=t("app.title")+" - "+t("role");
 $$ ("[data-practice-price]").forEach(e=>e.textContent=money(25000000));
}
function categoryName(cat){return t("category."+cat)}

function money(cents,decimals=0){
 if(!validCents(cents))return "-";const n=BigInt(cents),dp=decimals===2||n%100n!==0n?2:0;
 return new Intl.NumberFormat(lang==="fr"?"fr-CA":"en-CA",{style:"currency",currency:"CAD",minimumFractionDigits:dp,maximumFractionDigits:dp}).formatToParts(n/100n).map(p=>p.type==="fraction"?(n%100n).toString().padStart(2,"0"):p.value).join("");
}

function ratioDisplay(bidCents,scoreValue){if(!validCents(bidCents)||!Number.isSafeInteger(scoreValue)||scoreValue<0)throw new Error("money");if(scoreValue===0)return t("common.noRated");const q=(2n*BigInt(bidCents)+BigInt(scoreValue))/(2n*BigInt(scoreValue));return money(Number(q),2)}
function randomHex(bytes=8){const a=new Uint8Array(bytes);crypto.getRandomValues(a);return [...a].map(x=>x.toString(16).padStart(2,"0")).join("").toUpperCase()}
function sessionCode(teamCount){return `SEA3-T${teamCount}-${randomHex(8)}`}





function removePurchase(team,index){must(Number.isInteger(index)&&index>=0&&index<team.purchases.length);const item=team.purchases[index],totals={...team.totals};for(const[k,v]of Object.entries(item.e))totals[k]-=v;team.purchases=team.purchases.filter((_,i)=>i!==index);team.purchasesByRound=[...team.purchasesByRound];team.purchasesByRound[item.round-1]--;team.cost-=item.paid;team.totals=totals}
function effectsHtml(card){return Object.entries(card.e).map(([k,v])=>`<div class="effect">${esc(LABELS[k][lang][0])}<strong>${v>=0?"+":""}${v}</strong><small>${esc(LABELS[k][lang][1])}</small></div>`).join("")}
function safeSessionStorage(){try{sessionStorage.setItem("__sea_test","1");sessionStorage.removeItem("__sea_test");return true}catch{return false}}

const I18N={"en":{"app.title":"Systems Engineering Awareness","lang.switch.fr":"FR","lang.switch.en":"EN","common.team":"Team {n}","common.round":"Round {n}","common.lot":"Lot {n}","common.hidden":"Hidden","common.none":"None","common.pass":"Pass","common.shortfall":"Shortfall","common.compliant":"Compliant","common.noncompliant":"Noncompliant","common.score":"Score","common.cost":"Cost","common.profit":"Profit","common.bid":"Bid","common.cpp":"Cost / point","common.noRated":"No rated value","common.cardId":"Card ID","common.price":"Price","common.remove":"Remove","common.next":"Next","common.back":"Back","common.closed":"Closed","common.syntheticDeck":"Reconstructed synthetic deck; final deck/balance approval remains open.","common.noBackend":"Standalone Microsoft Teams classroom tool. No backend, account, file transfer, or network synchronization is required.","common.private":"Private team state","common.authoritative":"Instructor screen and ledger are authoritative.","common.roundLot":"Round {round}/7 · Lot {lot}/10","common.wins":"{used}/2 wins · {left} left","common.starting":"Starting: {amount}","common.noLeader":"No leader","common.warningInfo":"Do not enter personal, Protected, Classified, operational, or real-project information.","category.CAPACITY":"Capacity","category.MOBILITY":"Mobility","category.FIREPOWER":"Firepower","category.PROTECTION":"Protection","category.COMMS":"Communications","category.SA":"Situational awareness","category.ACCESSORIES":"Accessories","category.SE_PROCESS":"SE process","auction.paused":"Paused · {seconds}s","auction.confirmUnsoldWithLeader":"A valid leader is recorded. Commit this lot as unsold anyway?","errors.paused":"Resume the auction before committing a result.","debrief.teamSummaries":"All team outcomes","debrief.notSubmitted":"Not submitted","debrief.noRated":"No rated value","debrief.majorPurchases":"Major purchases","common.selectTeam":"Select team","common.open":"Open","common.ready":"Ready","common.committed":"Committed","common.unsold":"Unsold","common.void":"Void","common.points":"pts","common.purchases":"Purchases","common.total":"Total","common.minimum":"Minimum","common.status":"Status","phase.setup":"Setup","phase.practice":"Practice","phase.planning":"Planning","phase.auction":"Auction","phase.build":"Build","phase.submit":"Submit","phase.debrief":"Debrief","phase.closed":"Closed","setup.randomHonesty":"The runtime does not search for a target success rate; balance/feasibility remains an offline deck-validation gate.","setup.noStorage":"Session recovery storage is unavailable in this browser.","practice.capacity":"Capacity","practice.persons":"persons","role":"Instructor Master","setup.kicker":"Prepare · Assign · Start","setup.title":"Classroom setup","setup.desc":"STANDARD reveals all ten cards for the current round, then auctions them sequentially. JIT and manual reveal are alternate facilitator modes.","setup.teams":"Teams","setup.reveal":"Reveal mode","setup.otherReveal":"Other reveal modes","setup.empty":"No session generated.","setup.reveal.round":"STANDARD - reveal all 10 cards for the round","setup.reveal.jit":"JIT - reveal only the active lot","setup.reveal.manual":"Manual - reveal active lot on command","setup.timing":"Auction timing","setup.timed":"Timed","setup.untimed":"Untimed / facilitator close","setup.bidWindow":"Bid window (seconds)","setup.generate":"Generate session","setup.sessionCode":"Student session code","setup.assignmentNote":"Share this session code. Each group chooses its vehicle and confirms it with the instructor. The code does not assign vehicles or reveal cards.","setup.privateMarket":"Market order is generated independently and remains private in this instructor copy.","setup.startTutorial":"Start practice","setup.ready":"Session created. Share the code and record each groupââ‚¬â„¢s vehicle choice.","setup.recovery":"Refresh recovery uses session-scoped browser storage on this device.","setup.recovered":"Session recovered. An open lot is paused for review; accepted bids are preserved.","practice.kicker":"Practice · Reset completely","practice.title":"Unscored practice auction","practice.desc":"Run one short bid/purchase cycle. Practice state is isolated and is discarded before scored planning.","practice.card":"Training card","practice.reveal":"1 · Reveal practice card","practice.open":"2 · Open practice bidding","practice.accept":"3 · Accept Team 1","practice.close":"4 · Close practice lot","practice.reset":"Reset practice","practice.done":"Practice complete. Resetting will not affect scored state.","practice.toPlanning":"Reset & open planning","planning.kicker":"Assign roles · Plan privately","planning.title":"Team planning","planning.desc":"Students set targets, WTP, priorities and risks privately in their companion. Confirm roles/readiness through Teams.","planning.startAuction":"Close planning & start auction","auction.kicker":"Reveal · Open · Accept · Commit · Advance","auction.title":"Shared auction board","auction.rule.round":"STANDARD: all ten cards in this round are public on the shared screen; future rounds remain private.","auction.rule.jit":"JIT: only the active lot is public; later lots remain hidden.","auction.rule.manual":"Manual: the active lot remains hidden until Reveal or Open.","auction.currentLeader":"Current leader","auction.nextLegal":"Next legal bid","auction.limit":"Per-team round limit","auction.limitValue":"2 wins","auction.time":"Time remaining","auction.reveal":"1 · Reveal","auction.open":"2 · Open","auction.pause":"Pause","auction.resume":"Resume","auction.acceptCaller":"3 · Accept the current Teams caller","auction.acceptDesc":"Teams already orders raised hands. Click the team Teams is currently calling to accept the next legal bid.","auction.accept":"Accept {amount}","auction.leading":"Leading {amount}","auction.commitTitle":"4 · Close and commit result","auction.commitReady":"Ready to commit Team {team} at {amount}.","auction.noAccepted":"No accepted bid yet.","auction.commitLeader":"Commit current leader","auction.commitUnsold":"Commit unsold","auction.correct":"Correct winner or price before commit","auction.correctDesc":"Use only when the spoken final result differs from the recorded bidding state.","auction.winner":"Winning team","auction.finalPrice":"Final sale price (whole dollars)","auction.commitCorrected":"Commit corrected sold result","auction.notCommitted":"Not committed.","auction.committed":"Committed: Team {team} at {amount}.","auction.unsoldCommitted":"Committed unsold.","auction.advance":"5 · Advance to next lot","auction.correction":"Facilitator correction before advance","auction.correctionDesc":"For an instructor entry mistake only. The original ledger entry remains and a VOID record is appended.","auction.correctionReason":"Correction reason","auction.void":"Void committed current lot","auction.correctionDone":"Correction appended. Recommit this lot before advancing.","auction.ledger":"Append-only auction log","auction.noEntries":"No committed results yet.","auction.timeExpired":"TIME - close the lot","build.kicker":"Reconcile · Verify compliance","build.title":"Authoritative build reconciliation","build.desc":"Compare your selected vehicle and local purchases with the instructorââ‚¬â„¢s authoritative screen. Correct only transcription differences, then proceed.","build.openSubmissions":"Open final submissions","build.purchases":"Authoritative purchases","build.noPurchases":"No purchases","build.shortfalls":"Shortfalls: {items}","build.allPass":"All mandatory requirements pass.","submit.kicker":"Profit · Submit · Close together","submit.title":"Final submissions","submit.desc":"Teams calculate privately and communicate the canonical profit amount through Teams. Record only the amount and whether the team submitted.","submit.profitAmount":"Profit amount (dollars and cents)","submit.submitted":"Submitted","submit.close":"Close submissions & reveal result","submit.pendingConfirm":"{count} team(s) have not submitted. Close submissions anyway?","submit.incentive":"Baseline incentive: with a fixed design, lower nonnegative profit improves or preserves the procurement ratio. Do not impose an artificial minimum; discuss this simplification in debrief.","debrief.kicker":"Award · Debrief · Transfer","debrief.title":"Procurement outcome & debrief","debrief.award":"Award: Team {team}","debrief.shared":"Shared award: {teams}","debrief.noAward":"No award","debrief.prompts":"Required debrief prompts","debrief.p1":"Did every mandatory requirement pass?","debrief.p2":"What assumptions or actions caused any failure?","debrief.p3":"How were requirements prioritized?","debrief.p4":"Which trade-offs were hardest?","debrief.p5":"How was profit chosen?","debrief.p6":"What is cost per point?","debrief.p7":"What are the three biggest risks?","debrief.p8":"What is the purpose of one purchased SE process? If none was purchased, discuss the omission.","debrief.transfer":"Transfer: What would you do differently on a real engineering project?","debrief.close":"Close room","closed.kicker":"Closure","closed.title":"Room closed","closed.ledger":"Final append-only ledger","closed.note":"Session state remains only in this browser session. Closing the tab/browser ends session-scoped recovery.","closed.newSession":"Start a new session","closed.newConfirm":"Start a new session? A backup download will be requested before this session is cleared. Check browser downloads; Restore previous backup remains available in this tab.","errors.badMoney":"Enter a nonnegative whole-dollar amount.","errors.badTeam":"Select a valid team.","errors.purchaseLimit":"That team has already reached the two-win limit for this round.","errors.openFirst":"Open the lot before committing a result.","errors.ledgerLimit":"Audit ledger capacity is insufficient. No result was changed. Export a backup and use the facilitator recovery procedure.","errors.reason":"Enter a correction reason.","vehicle.label":"Vehicle type","vehicle.choose":"Choose a vehicle","vehicle.pending":"Not chosen","vehicle.hint":"Choose with your group. Tell the instructor, who records the same choice in the roster. The session code does not assign vehicles.","vehicle.instructorHint":"Ask each group for its choice, then record it here. All six vehicle types are available; duplicate choices are allowed. Confirm the roster aloud before starting the auction.","vehicle.ready":"{count}/{total} groups have chosen. Choices lock when the auction starts.","vehicle.locked":"Vehicle locked for scored play","vehicle.confirm":"Our group confirmed this vehicle with the instructor.","vehicle.needConfirm":"Confirm your vehicle with the instructor before following the auction.","vehicle.needAll":"Record a vehicle choice for every group before starting the auction.","vehicle.cannotChange":"Vehicles cannot change after the auction starts.","vehicle.changeNotice":"Vehicle changed. Review your plan and confirm the new choice with the instructor. Your notes were kept.","vehicle.startConfirm":"Lock the displayed group choices and start the auction? Confirm that every group has the same vehicle in its companion.","vehicle.mix":"Group-choice profile: mission coverage and scarcity depend on these choices. This is not the automatically balanced allocation; no success rate is guaranteed.","vehicle.requirements":"Mandatory minimums","vehicle.rated":"What earns rated points","vehicle.COMBAT.desc":"Engage opposing vehicles and breach defences.","vehicle.RECCE.desc":"Gather information, communicate it, and avoid engagement.","vehicle.TROOP.desc":"Carry troops in convoy and protect the occupants.","vehicle.COMMAND.desc":"Relay commands near the battle without seeking engagement.","vehicle.RECOVERY.desc":"Recover vehicles under battle conditions; engage only as a last resort.","vehicle.MINE.desc":"Open routes through minefields while protecting the vehicle.","vehicle.COMBAT.rated":"20 points per complete 10 km/h above 80; 20 per firepower point above 10.","vehicle.RECCE.rated":"20 points per complete 25 km of communications above 75; 20 per awareness way above 5.","vehicle.TROOP.rated":"20 points per person above 10; 20 per protection point above 4.","vehicle.COMMAND.rated":"20 points per person above 5; 20 per complete 25 km of communications above 125.","vehicle.RECOVERY.rated":"20 points per protection point above 6; 40 per recovery way above 3.","vehicle.MINE.rated":"20 points per awareness way above 1; 40 per mine-clearing way above 3.","common.skip":"Skip to main content","common.amount":"Amount (dollars and cents)","common.refresh":"Recovery unavailable. Keep this page open; current state is in memory only.","common.badRecovery":"Saved state could not be validated. Nothing was restored or overwritten. Use the previous file for an older session.","common.recovered":"Session recovered. Review the roster and current lot before resuming.","common.confirmCorrection":"Apply this entry correction? The original result remains in the history.","common.correctOnly":"Correct transcription differences only, after checking the instructor ledger. This is not permission to discard purchases.","errors.moneyRange":"Enter a valid amount within the supported exact-money range. Nothing was committed.","errors.duplicate":"This card or lot is already recorded. Nothing was added.","errors.state":"This action is not available in the current phase.","errors.stale":"That offer is no longer current. Check the displayed legal bid.","auction.finish":"Instructor ended the auction - reconcile purchases","auction.finishConfirm":"Has the instructor ended all seven rounds? Continue to reconciliation without changing your purchases.","auction.extend":"Add 30 seconds","auction.finalCall":"Final call: 5 seconds remain.","auction.windowEnded":"Bidding has ended. Commit the accepted result.","practice.mobility":"Mobility","practice.stage.ready":"Reveal the practice card.","practice.stage.revealed":"Card revealed. Open practice bidding.","practice.stage.open":"Practice bidding is open. Call Team 1.","practice.stage.bid":"Team 1 leads at $350,000. Close to record the practice purchase.","practice.stage.done":"Practice purchase: Team 1, $350,000, capacity +4 and mobility -10. Scored totals are still zero.","practice.cardTitle":"Training crew module","submit.privateHint":"Stop sharing this window before entering private submissions. Final commercial results are public only after submissions close.","submit.privateOpen":"Enter submissions privately","submit.privateConfirm":"Have you stopped sharing this window? Private profit and bid details will now be shown.","backup.export":"Export backup","backup.import":"Import backup","backup.exported":"Backup download requested. Store the file somewhere private.","backup.noSession":"There is no active session to export.","backup.tooLarge":"The backup exceeds the 500 KB file limit. Nothing changed.","backup.invalid":"This backup could not be read or validated for this app, role, and save schema. Nothing changed.","backup.confirmInstructor":"Replace this instructor session with the validated backup? A private download of the current session will be requested first. Instructor backups include the hidden market order and full class ledger. Keep them private.","backup.confirmStudent":"Replace this team session with the validated backup? A private download of the current team session will be requested first. Student backups include private plans, notes, and purchases. Keep them private.","backup.imported":"Validated backup loaded. Review the current phase before continuing.","backup.storageFailed":"The imported session is active in memory, but browser storage did not save it. Export a backup now.","backup.rawExported":"Unvalidated saved bytes exported for preservation. This recovery file cannot be imported directly.","backup.failed":"The active session could not be preserved for download. Nothing changed.","backup.changed":"The active session changed during confirmation. Nothing was imported; review and try again.","backup.restorePrevious":"Restore previous backup","backup.noPrevious":"No previous backup is available in this tab.","errors.changed":"The session changed during confirmation. Review the current state and try again.","common.dismiss":"Dismiss message"},"fr":{"app.title":"Sensibilisation à lââ‚¬â„¢ingénierie des systèmes","lang.switch.fr":"FR","lang.switch.en":"EN","common.team":"Ãâ€°quipe {n}","common.round":"Ronde {n}","common.lot":"Lot {n}","common.hidden":"Caché","common.none":"Aucun","common.pass":"Réussite","common.shortfall":"Ãâ€°cart","common.compliant":"Conforme","common.noncompliant":"Non conforme","common.score":"Pointage","common.cost":"Coût","common.profit":"Profit","common.bid":"Offre","common.cpp":"Coût / point","common.noRated":"Aucune valeur cotée","common.cardId":"ID de carte","common.price":"Prix","common.remove":"Retirer","common.next":"Suivant","common.back":"Retour","common.closed":"Fermé","common.syntheticDeck":"Jeu de cartes synthétique reconstruit; lââ‚¬â„¢approbation finale du jeu et de lââ‚¬â„¢équilibrage demeure ouverte.","common.noBackend":"Outil autonome pour classe Microsoft Teams. Aucun serveur dorsal, compte, transfert de fichier ni synchronisation réseau nââ‚¬â„¢est requis.","common.private":"Ãâ€°tat privé de lââ‚¬â„¢équipe","common.authoritative":"Lââ‚¬â„¢écran et le journal de lââ‚¬â„¢instructeur font autorité.","common.roundLot":"Ronde {round}/7 · Lot {lot}/10","common.wins":"{used}/2 gains · {left} restant(s)","common.starting":"Départ : {amount}","common.noLeader":"Aucun meneur","common.warningInfo":"Nââ‚¬â„¢entrez aucun renseignement personnel, Protégé, Classifié, opérationnel ou lié à un projet réel.","category.CAPACITY":"Capacité","category.MOBILITY":"Mobilité","category.FIREPOWER":"Puissance de feu","category.PROTECTION":"Protection","category.COMMS":"Communications","category.SA":"Connaissance de la situation","category.ACCESSORIES":"Accessoires","category.SE_PROCESS":"Processus dââ‚¬â„¢IS","auction.paused":"En pause · {seconds}s","auction.confirmUnsoldWithLeader":"Un meneur valide est enregistré. Engager quand même ce lot comme invendu?","errors.paused":"Reprenez lââ‚¬â„¢enchère avant dââ‚¬â„¢engager un résultat.","debrief.teamSummaries":"Résultats de toutes les équipes","debrief.notSubmitted":"Non soumis","debrief.noRated":"Aucune valeur cotée","debrief.majorPurchases":"Principaux achats","common.selectTeam":"Sélectionner une équipe","common.open":"Ouvert","common.ready":"Prêt","common.committed":"Engagé","common.unsold":"Invendu","common.void":"VOID","common.points":"pts","common.purchases":"Achats","common.total":"Total","common.minimum":"Minimum","common.status":"Ãâ€°tat","phase.setup":"Configuration","phase.practice":"Pratique","phase.planning":"Planification","phase.auction":"Enchère","phase.build":"Conception","phase.submit":"Soumission","phase.debrief":"Débreffage","phase.closed":"Fermé","setup.randomHonesty":"Le moteur ne recherche pas un taux de réussite cible; lââ‚¬â„¢équilibrage et la faisabilité demeurent un jalon de validation hors ligne du jeu de cartes.","setup.noStorage":"Le stockage de récupération de séance nââ‚¬â„¢est pas disponible dans ce navigateur.","practice.capacity":"Capacité","practice.persons":"personnes","role":"Maître instructeur","setup.kicker":"Préparer · Affecter · Démarrer","setup.title":"Configuration de la classe","setup.desc":"Le mode STANDARD révèle les dix cartes de la ronde courante, puis les met aux enchères séquentiellement. JAT et la révélation manuelle sont des modes facultatifs.","setup.teams":"Ãâ€°quipes","setup.reveal":"Mode de révélation","setup.otherReveal":"Autres modes de révélation","setup.empty":"Aucune séance générée.","setup.reveal.round":"STANDARD - révéler les 10 cartes de la ronde","setup.reveal.jit":"JAT - révéler seulement le lot actif","setup.reveal.manual":"Manuel - révéler le lot actif sur commande","setup.timing":"Chronométrage de lââ‚¬â„¢enchère","setup.timed":"Chronométré","setup.untimed":"Non chronométré / fermeture par lââ‚¬â„¢instructeur","setup.bidWindow":"Fenêtre de mise (secondes)","setup.generate":"Générer la séance","setup.sessionCode":"Code de séance étudiant","setup.assignmentNote":"Partagez ce code de séance. Chaque groupe choisit son véhicule et le confirme avec lââ‚¬â„¢instructeur. Le code nââ‚¬â„¢attribue pas les véhicules et ne révèle pas les cartes.","setup.privateMarket":"Lââ‚¬â„¢ordre du marché est généré indépendamment et demeure privé dans cette copie instructeur.","setup.startTutorial":"Commencer la pratique","setup.ready":"Séance créée. Partagez le code et inscrivez le choix de véhicule de chaque groupe.","setup.recovery":"La récupération après actualisation utilise le stockage de séance du navigateur sur cet appareil.","setup.recovered":"Séance récupérée. Un lot ouvert est mis en pause pour vérification; les mises acceptées sont conservées.","practice.kicker":"Pratiquer · Réinitialiser complètement","practice.title":"Enchère de pratique non cotée","practice.desc":"Exécutez un court cycle de mise et dââ‚¬â„¢achat. Lââ‚¬â„¢état de pratique est isolé et supprimé avant la planification cotée.","practice.card":"Carte dââ‚¬â„¢entraînement","practice.reveal":"1 · Révéler la carte de pratique","practice.open":"2 · Ouvrir les mises de pratique","practice.accept":"3 · Accepter lââ‚¬â„¢équipe 1","practice.close":"4 · Fermer le lot de pratique","practice.reset":"Réinitialiser la pratique","practice.done":"Pratique terminée. La réinitialisation nââ‚¬â„¢affectera pas lââ‚¬â„¢état coté.","practice.toPlanning":"Réinitialiser et ouvrir la planification","planning.kicker":"Attribuer les rôles · Planifier en privé","planning.title":"Planification des équipes","planning.desc":"Les étudiants fixent leurs cibles, volonté de payer, priorités et risques en privé dans leur compagnon. Confirmez les rôles et lââ‚¬â„¢état de préparation dans Teams.","planning.startAuction":"Fermer la planification et lancer lââ‚¬â„¢enchère","auction.kicker":"Révéler · Ouvrir · Accepter · Engager · Avancer","auction.title":"Tableau dââ‚¬â„¢enchère partagé","auction.rule.round":"STANDARD : les dix cartes de cette ronde sont publiques sur lââ‚¬â„¢écran partagé; les rondes futures demeurent privées.","auction.rule.jit":"JAT : seul le lot actif est public; les lots suivants demeurent cachés.","auction.rule.manual":"Manuel : le lot actif demeure caché jusquââ‚¬â„¢à Révéler ou Ouvrir.","auction.currentLeader":"Meneur actuel","auction.nextLegal":"Prochaine mise légale","auction.limit":"Limite par équipe et par ronde","auction.limitValue":"2 gains","auction.time":"Temps restant","auction.reveal":"1 · Révéler","auction.open":"2 · Ouvrir","auction.pause":"Pause","auction.resume":"Reprendre","auction.acceptCaller":"3 · Accepter lââ‚¬â„¢appelant Teams courant","auction.acceptDesc":"Teams ordonne déjà les mains levées. Cliquez sur lââ‚¬â„¢équipe que Teams appelle actuellement pour accepter la prochaine mise légale.","auction.accept":"Accepter {amount}","auction.leading":"Meneur {amount}","auction.commitTitle":"4 · Fermer et engager le résultat","auction.commitReady":"Prêt à engager lââ‚¬â„¢équipe {team} à {amount}.","auction.noAccepted":"Aucune mise acceptée.","auction.commitLeader":"Engager le meneur actuel","auction.commitUnsold":"Engager invendu","auction.correct":"Corriger le gagnant ou le prix avant engagement","auction.correctDesc":"Utilisez seulement si le résultat final annoncé diffère de lââ‚¬â„¢état de mise enregistré.","auction.winner":"Ãâ€°quipe gagnante","auction.finalPrice":"Prix de vente final (dollars entiers)","auction.commitCorrected":"Engager le résultat vendu corrigé","auction.notCommitted":"Non engagé.","auction.committed":"Engagé : équipe {team} à {amount}.","auction.unsoldCommitted":"Invendu engagé.","auction.advance":"5 · Passer au lot suivant","auction.correction":"Correction par lââ‚¬â„¢instructeur avant dââ‚¬â„¢avancer","auction.correctionDesc":"Seulement pour une erreur de saisie de lââ‚¬â„¢instructeur. Lââ‚¬â„¢entrée originale demeure et une entrée VOID est ajoutée.","auction.correctionReason":"Motif de correction","auction.void":"Annuler le lot courant engagé","auction.correctionDone":"Correction ajoutée. Réengagez ce lot avant dââ‚¬â„¢avancer.","auction.ledger":"Journal dââ‚¬â„¢enchère en ajout seulement","auction.noEntries":"Aucun résultat engagé pour le moment.","auction.timeExpired":"TEMPS - fermer le lot","build.kicker":"Réconcilier · Vérifier la conformité","build.title":"Réconciliation authoritative de la conception","build.desc":"Comparez votre véhicule choisi et vos achats locaux avec lââ‚¬â„¢écran instructeur faisant autorité. Corrigez seulement les erreurs de transcription, puis continuez.","build.openSubmissions":"Ouvrir les soumissions finales","build.purchases":"Achats faisant autorité","build.noPurchases":"Aucun achat","build.shortfalls":"Ãâ€°carts : {items}","build.allPass":"Toutes les exigences obligatoires sont satisfaites.","submit.kicker":"Profit · Soumettre · Fermer ensemble","submit.title":"Soumissions finales","submit.desc":"Les équipes calculent en privé et communiquent le montant de profit canonique dans Teams. Enregistrez seulement le montant et si lââ‚¬â„¢équipe a soumis.","submit.profitAmount":"Montant du profit (dollars et cents)","submit.submitted":"Soumis","submit.close":"Fermer les soumissions et révéler le résultat","submit.pendingConfirm":"{count} équipe(s) nââ‚¬â„¢ont pas soumis. Fermer quand même les soumissions?","submit.incentive":"Incitatif de base : pour une conception fixe, un profit non négatif plus faible améliore ou préserve le ratio dââ‚¬â„¢approvisionnement. Nââ‚¬â„¢imposez pas de minimum artificiel; discutez de cette simplification au débreffage.","debrief.kicker":"Attribution · Débreffage · Transfert","debrief.title":"Résultat dââ‚¬â„¢approvisionnement et débreffage","debrief.award":"Attribution : équipe {team}","debrief.shared":"Attribution partagée : {teams}","debrief.noAward":"Aucune attribution","debrief.prompts":"Questions de débreffage requises","debrief.p1":"Toutes les exigences obligatoires ont-elles été satisfaites?","debrief.p2":"Quelles hypothèses ou actions ont causé un échec?","debrief.p3":"Comment les exigences ont-elles été priorisées?","debrief.p4":"Quels compromis ont été les plus difficiles?","debrief.p5":"Comment le profit a-t-il été choisi?","debrief.p6":"Quel est le coût par point?","debrief.p7":"Quels sont les trois principaux risques?","debrief.p8":"Quel est le but dââ‚¬â„¢un processus dââ‚¬â„¢IS acheté? Si aucun nââ‚¬â„¢a été acheté, discutez de cette omission.","debrief.transfer":"Transfert : que feriez-vous différemment dans un vrai projet dââ‚¬â„¢ingénierie?","debrief.close":"Fermer la salle","closed.kicker":"Fermeture","closed.title":"Salle fermée","closed.ledger":"Journal final en ajout seulement","closed.note":"Lââ‚¬â„¢état de séance demeure seulement dans cette séance de navigateur. La fermeture de lââ‚¬â„¢onglet ou du navigateur met fin à la récupération de séance.","closed.newSession":"Nouvelle séance","closed.newConfirm":"Démarrer une nouvelle séance? Une sauvegarde sera demandée avant lââ‚¬â„¢effacement. Vérifiez les téléchargements; Restaurer la sauvegarde précédente reste disponible dans cet onglet.","errors.badMoney":"Entrez un montant non négatif en dollars entiers.","errors.badTeam":"Sélectionnez une équipe valide.","errors.purchaseLimit":"Cette équipe a déjà atteint la limite de deux gains pour cette ronde.","errors.openFirst":"Ouvrez le lot avant dââ‚¬â„¢engager un résultat.","errors.ledgerLimit":"La capacité du journal est insuffisante. Aucun résultat nââ‚¬â„¢a été modifié. Exportez une sauvegarde et suivez la procédure de récupération avec la personne responsable de lââ‚¬â„¢animation.","errors.reason":"Entrez un motif de correction.","vehicle.label":"Type de véhicule","vehicle.choose":"Choisir un véhicule","vehicle.pending":"Non choisi","vehicle.hint":"Choisissez avec votre groupe. Informez lââ‚¬â„¢instructeur, qui inscrit le même choix dans sa liste. Le code de séance nââ‚¬â„¢attribue pas les véhicules.","vehicle.instructorHint":"Demandez le choix de chaque groupe, puis inscrivez-le ici. Les six types de véhicules sont disponibles; plusieurs groupes peuvent choisir le même type. Confirmez les choix à voix haute avant de lancer lââ‚¬â„¢enchère.","vehicle.ready":"{count}/{total} groupes ont choisi. Les choix se verrouillent au début de lââ‚¬â„¢enchère.","vehicle.locked":"Véhicule verrouillé pour le jeu coté","vehicle.confirm":"Notre groupe a confirmé ce véhicule avec lââ‚¬â„¢instructeur.","vehicle.needConfirm":"Confirmez votre véhicule avec lââ‚¬â„¢instructeur avant de suivre lââ‚¬â„¢enchère.","vehicle.needAll":"Inscrivez le choix de véhicule de chaque groupe avant de lancer lââ‚¬â„¢enchère.","vehicle.cannotChange":"Les véhicules ne peuvent plus changer après le début de lââ‚¬â„¢enchère.","vehicle.changeNotice":"Véhicule modifié. Revoyez votre plan et confirmez le nouveau choix avec lââ‚¬â„¢instructeur. Vos notes sont conservées.","vehicle.startConfirm":"Verrouiller les choix affichés et lancer lââ‚¬â„¢enchère? Confirmez que chaque groupe a le même véhicule dans son compagnon.","vehicle.mix":"Profil au choix des groupes : la couverture des missions et la rareté dépendent de ces choix. Il ne sââ‚¬â„¢agit pas de lââ‚¬â„¢affectation automatique équilibrée; aucun taux de réussite nââ‚¬â„¢est garanti.","vehicle.requirements":"Minimums obligatoires","vehicle.rated":"Critères donnant des points","vehicle.COMBAT.desc":"Affronter les véhicules adverses et franchir les défenses.","vehicle.RECCE.desc":"Recueillir et communiquer des renseignements tout en évitant lââ‚¬â„¢affrontement.","vehicle.TROOP.desc":"Transporter des troupes en convoi et protéger les occupants.","vehicle.COMMAND.desc":"Relayer les ordres à proximité du combat sans chercher lââ‚¬â„¢affrontement.","vehicle.RECOVERY.desc":"Récupérer les véhicules dans des conditions de combat; ne combattre quââ‚¬â„¢en dernier recours.","vehicle.MINE.desc":"Ouvrir des routes dans les champs de mines tout en protégeant le véhicule.","vehicle.COMBAT.rated":"20 points par tranche complète de 10 km/h au-delà de 80; 20 par point de puissance de feu au-delà de 10.","vehicle.RECCE.rated":"20 points par tranche complète de 25 km de communications au-delà de 75; 20 par moyen de connaissance de la situation au-delà de 5.","vehicle.TROOP.rated":"20 points par personne au-delà de 10; 20 par point de protection au-delà de 4.","vehicle.COMMAND.rated":"20 points par personne au-delà de 5; 20 par tranche complète de 25 km de communications au-delà de 125.","vehicle.RECOVERY.rated":"20 points par point de protection au-delà de 6; 40 par moyen de dépannage au-delà de 3.","vehicle.MINE.rated":"20 points par moyen de connaissance de la situation au-delà de 1; 40 par moyen de déminage au-delà de 3.","common.skip":"Aller au contenu principal","common.amount":"Montant (dollars et cents)","common.refresh":"Récupération indisponible. Gardez cette page ouverte; lââ‚¬â„¢état courant est seulement en mémoire.","common.badRecovery":"Lââ‚¬â„¢état enregistré nââ‚¬â„¢a pas pu être validé. Rien nââ‚¬â„¢a été restauré ni remplacé. Utilisez le fichier précédent pour une séance plus ancienne.","common.recovered":"Séance récupérée. Vérifiez les choix et le lot courant avant de reprendre.","common.confirmCorrection":"Appliquer cette correction de saisie? Le résultat original demeure dans lââ‚¬â„¢historique.","common.correctOnly":"Corrigez seulement les erreurs de transcription, après vérification du journal instructeur. Il ne sââ‚¬â„¢agit pas dââ‚¬â„¢une permission de rejeter des achats.","errors.moneyRange":"Entrez un montant valide dans la plage monétaire exacte prise en charge. Rien nââ‚¬â„¢a été engagé.","errors.duplicate":"Cette carte ou ce lot est déjà enregistré. Rien nââ‚¬â„¢a été ajouté.","errors.state":"Cette action nââ‚¬â„¢est pas disponible dans la phase courante.","errors.stale":"Cette offre nââ‚¬â„¢est plus courante. Vérifiez la mise légale affichée.","auction.finish":"Lââ‚¬â„¢instructeur a terminé lââ‚¬â„¢enchère - réconcilier les achats","auction.finishConfirm":"Lââ‚¬â„¢instructeur a-t-il terminé les sept rondes? Passer à la réconciliation sans modifier vos achats.","auction.extend":"Ajouter 30 secondes","auction.finalCall":"Dernier appel : il reste 5 secondes.","auction.windowEnded":"Les mises sont terminées. Engagez le résultat accepté.","practice.mobility":"Mobilité","practice.stage.ready":"Révélez la carte de pratique.","practice.stage.revealed":"Carte révélée. Ouvrez les mises de pratique.","practice.stage.open":"Les mises de pratique sont ouvertes. Appelez lââ‚¬â„¢équipe 1.","practice.stage.bid":"Lââ‚¬â„¢équipe 1 mène à 350 000 $. Fermez pour enregistrer lââ‚¬â„¢achat de pratique.","practice.stage.done":"Achat de pratique : équipe 1, 350 000 $, capacité +4 et mobilité -10. Les totaux cotés sont toujours nuls.","practice.cardTitle":"Module dââ‚¬â„¢équipage dââ‚¬â„¢entraînement","submit.privateHint":"Arrêtez le partage de cette fenêtre avant de saisir les soumissions privées. Les résultats commerciaux finaux sont publics seulement après la fermeture des soumissions.","submit.privateOpen":"Saisir les soumissions en privé","submit.privateConfirm":"Avez-vous arrêté le partage de cette fenêtre? Les détails privés du profit et de lââ‚¬â„¢offre seront maintenant affichés.","backup.export":"Exporter la sauvegarde","backup.import":"Importer une sauvegarde","backup.exported":"Téléchargement de la sauvegarde demandé. Conservez le fichier dans un endroit privé.","backup.noSession":"Aucune séance active à exporter.","backup.tooLarge":"La sauvegarde dépasse la limite de 500 Ko. Rien nââ‚¬â„¢a changé.","backup.invalid":"Cette sauvegarde est illisible ou ne correspond pas à cette application, à ce rôle ou au schéma pris en charge. Rien nââ‚¬â„¢a changé.","backup.confirmInstructor":"Remplacer cette séance instructeur par la sauvegarde validée? Le téléchargement privé de la séance actuelle sera demandé dââ‚¬â„¢abord. Les sauvegardes instructeur contiennent lââ‚¬â„¢ordre caché du marché et le journal complet. Gardez-les privées.","backup.confirmStudent":"Remplacer cette séance dââ‚¬â„¢équipe par la sauvegarde validée? Le téléchargement privé de la séance actuelle sera demandé dââ‚¬â„¢abord. Les sauvegardes étudiant contiennent les plans, notes et achats privés. Gardez-les privés.","backup.imported":"Sauvegarde validée chargée. Vérifiez la phase actuelle avant de continuer.","backup.storageFailed":"La séance importée est active en mémoire, mais le stockage du navigateur ne lââ‚¬â„¢a pas enregistrée. Exportez une sauvegarde maintenant.","backup.rawExported":"Les données enregistrées non validées ont été exportées pour préservation. Ce fichier de récupération ne peut pas être importé directement.","backup.failed":"La séance active nââ‚¬â„¢a pas pu être préservée pour téléchargement. Rien nââ‚¬â„¢a changé.","backup.changed":"La séance active a changé pendant la confirmation. Aucune importation effectuée; vérifiez puis réessayez.","backup.restorePrevious":"Restaurer la sauvegarde précédente","backup.noPrevious":"Aucune sauvegarde précédente nââ‚¬â„¢est disponible dans cet onglet.","errors.changed":"La session a changé pendant la confirmation. Vérifiez son état actuel et réessayez.","common.dismiss":"Fermer le message"}};
function choicesEditable(){return !state.vehiclesLocked&&["setup","planning"].includes(state.phase)&&state.teams.every(tm=>tm.purchases.length===0)}
function setTeamVehicle(id,mission){
 if(!choicesEditable()||!validMission(mission))return false;
 const tm=state.teams.find(t=>t.id===id);if(!tm)return false;
 tm.mission=mission;saveState();renderAll();return true;
}
function allChosen(){return state.teams.length===state.teamCount&&state.teams.every(tm=>validMission(tm.mission))}
function startScoredAuction(){
 if(state.phase!=="planning"||state.vehiclesLocked)return false;
 if(!allChosen()){seaNotify(t("vehicle.needAll"));return false}

 state.vehiclesLocked=true;state.teams.forEach(tm=>tm.lockedMission=tm.mission);
 state.round=0;state.lot=0;state.revealed=state.revealMode!=="MANUAL";state.resultDraft=null;
 phase("auction");renderAll();return true;
}
function openAuction(){
 if(state.phase!=="auction"||!state.vehiclesLocked||!allChosen()||state.open||committed())return false;
 state.revealed=true;state.open=true;state.pausedRemaining=null;state.finalCallAnnounced=false;
 if(state.timingMode==="TIMED")startTimer(state.bidSeconds*1000);renderAuction();return true;
}
function extendAuction(){
 if(state.phase!=="auction"||!state.open||state.timingMode!=="TIMED"||committed())return;
 if(state.pausedRemaining!==null)state.pausedRemaining+=30000;
 else startTimer(Math.max(0,(state.deadline||Date.now())-Date.now())+30000);
 state.finalCallAnnounced=false;renderAuction();
}
function nextOffer(){try{return state.leader?addCents(state.currentBid,APP.bidIncrementCents):currentCard().start}catch{return null}}
function liveClosing(){return state.phase==="auction"&&state.open&&!committed()&&state.pausedRemaining===null}
function validateInstructorSave(x){
 const cfg=validateBase(x);must(hasOnlyKeys(x,['schema','phase','lang','vehiclesLocked','sessionCode','marketSeed','market','teams','teamCount','revealMode','timingMode','bidSeconds','round','lot','revealed','open','pausedRemaining','deadline','leader','currentBid','ledger','seq','practice','privateEntry','resultDraft','finalCallAnnounced']));
 must(x.finalCallAnnounced===undefined||typeof x.finalCallAnnounced==='boolean');
 if(x.resultDraft!==undefined&&x.resultDraft!==null)must(hasOnlyKeys(x.resultDraft,['team','price','reason'])&&Object.keys(x.resultDraft).length===3&&typeof x.resultDraft.team==='string'&&x.resultDraft.team.length<=10&&typeof x.resultDraft.price==='string'&&x.resultDraft.price.length<=20&&typeof x.resultDraft.reason==='string'&&x.resultDraft.reason.length<=120);
 must(typeof x.vehiclesLocked==="boolean"&&Array.isArray(x.teams)&&x.teams.length===cfg.teamCount);
 must(["ROUND","JIT","MANUAL"].includes(x.revealMode)&&["TIMED","UNTIMED"].includes(x.timingMode)&&Number.isInteger(x.bidSeconds)&&x.bidSeconds>=10&&x.bidSeconds<=120);
 must(typeof x.marketSeed==="string"&&/^[A-F0-9]{32}$/.test(x.marketSeed));
 const expected=marketFromSeed(x.marketSeed);must(JSON.stringify(x.market)===JSON.stringify(expected));
 must(typeof x.open==="boolean"&&typeof x.revealed==="boolean"&&Array.isArray(x.ledger)&&x.ledger.length<=MAX_INSTRUCTOR_LEDGER_ENTRIES&&x.seq===x.ledger.length);
 const rebuilt=x.teams.map((tm,i)=>{must(tm.id===i+1);return cleanTeam({...tm,purchases:[]},!x.vehiclesLocked)});
 if(x.vehiclesLocked){must(!["setup","practice","planning"].includes(x.phase));rebuilt.forEach(tm=>must(tm.mission===tm.lockedMission&&validMission(tm.mission)))}else{must(["setup","practice","planning"].includes(x.phase)&&x.ledger.length===0);rebuilt.forEach(tm=>must(tm.lockedMission===null))}
 const active=new Map();
 x.ledger.forEach((e,i)=>{
  must(e&&["SALE","UNSOLD","VOID"].includes(e.kind));const allowedEntry=e.kind==="VOID"?['seq','kind','round','lot','card','team','price','ref','reason']:e.kind==="SALE"?['seq','kind','round','lot','card','team','price','reason']:['seq','kind','round','lot','card','team','price'];must(hasOnlyKeys(e,allowedEntry)&&e.seq===i+1);if(e.kind==="SALE"&&e.reason!==undefined)must(typeof e.reason==='string'&&e.reason.trim().length>0&&e.reason.length<=120);const c=cardAt(e.card,e.round,e.lot);must(expected[e.round-1][e.lot-1].id===c.id);
  const k=e.round+'-'+e.lot,prior=active.get(k);
  if(e.kind==="VOID"){must(prior&&e.ref===prior.seq&&e.team===prior.team&&e.price===prior.price&&typeof e.reason==="string"&&e.reason.trim().length>0&&e.reason.length<=120);active.delete(k)}
  else{must(!prior);if(e.kind==="SALE"){must(Number.isInteger(e.team)&&e.team>=1&&e.team<=cfg.teamCount&&validCents(e.price)&&e.price>=c.start&&(e.price-c.start)%APP.bidIncrementCents===0)}else must(e.team===null&&e.price===null);active.set(k,e)}
 });
 for(const e of active.values())if(e.kind==="SALE")acquire(rebuilt[e.team-1],expected[e.round-1][e.lot-1],e.price);
 x.teams.forEach((tm,i)=>{const normalized=cleanTeam(tm,!x.vehiclesLocked);must(JSON.stringify(normalized.purchases)===JSON.stringify(rebuilt[i].purchases))});
 const position=x.round*10+x.lot;
 for(let i=0;i<position;i++)if(x.phase==="auction"||["build","submit","debrief","closed"].includes(x.phase))must(active.has((Math.floor(i/10)+1)+'-'+(i%10+1)));
 if(["build","submit","debrief","closed"].includes(x.phase))must(active.size===70);
 if(x.phase==="auction")for(const e of active.values())must((e.round-1)*10+e.lot-1<=position);
 if(x.leader!==null){must(Number.isInteger(x.leader)&&x.leader>=1&&x.leader<=cfg.teamCount&&validCents(x.currentBid));const c=expected[x.round][x.lot];must(x.currentBid>=c.start&&(x.currentBid-c.start)%APP.bidIncrementCents===0)}else must(x.currentBid===null);
 if(x.phase==="auction"&&!x.open){const e=active.get((x.round+1)+'-'+(x.lot+1));if(e?.kind==="SALE")must(x.leader===e.team&&x.currentBid===e.price);else must(x.leader===null&&x.currentBid===null)}
 if(x.open){must(x.phase==="auction"&&x.revealed&&!active.has((x.round+1)+'-'+(x.lot+1)));if(x.timingMode==="TIMED")must(Number.isFinite(x.deadline));must(x.pausedRemaining===null||(Number.isFinite(x.pausedRemaining)&&x.pausedRemaining>=0))}
 must(hasOnlyKeys(x.practice,['revealed','open','leader','closed'])&&['revealed','open','leader','closed'].every(k=>typeof x.practice[k]==="boolean"));
 const practice=x.practice;
 if(practice.open)must(practice.revealed&&!practice.closed);
 if(practice.leader)must(practice.revealed&&(practice.open||practice.closed));
 if(practice.closed)must(practice.revealed&&practice.leader&&!practice.open);
 if(x.phase!=="practice")must(!practice.revealed&&!practice.open&&!practice.leader&&!practice.closed);
 return {...x,teams:rebuilt,market:expected,privateEntry:false,resultDraft:x.resultDraft??null};
}

const STORE_KEY="SEA_INSTRUCTOR_V300";
let state={phase:"setup",schema:3,lang:"en",vehiclesLocked:false,sessionCode:null,marketSeed:null,market:[],teams:[],teamCount:10,revealMode:"ROUND",timingMode:"TIMED",bidSeconds:30,round:0,lot:0,revealed:true,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,practice:{revealed:false,open:false,leader:false,closed:false}};
let timerHandle=null;

function phase(p){
 const i=PHASES.indexOf(state.phase),j=PHASES.indexOf(p);if(j<0||!(j===i||j===i+1))return false;
 if(p==="auction"&&!state.vehiclesLocked)return false;
 if(p==="build"&&!(state.round===6&&state.lot===9&&committed()))return false;
 const moved=state.phase!==p;state.phase=p;state.privateEntry=false;$$('.section').forEach(x=>x.classList.toggle('active',x.id===p));$('#phaseBadge').textContent=t('phase.'+p);if(moved){window.scrollTo(0,0);const h=document.querySelector('#'+p+' h2');if(h){h.tabIndex=-1;h.focus({preventScroll:true})}}saveState();return true;
}

function saveState(){
 if(recoveryBlocked)return false;if(!state.sessionCode)return true;
 try{state.lang=lang;sessionStorage.setItem(STORE_KEY,JSON.stringify({...state,privateEntry:false}));return true}catch{storageFailed=true;storageNotice('common.refresh');return false}
}

function restoreState(){
 let raw;try{raw=sessionStorage.getItem(STORE_KEY)}catch{storageFailed=true;return false}if(!raw)return false;
 try{must(raw.length<=MAX_BACKUP_CHARS);const x=validateInstructorSave(JSON.parse(raw));if(x.open){x.pausedRemaining=x.pausedRemaining??(x.timingMode==='TIMED'?Math.max(0,x.deadline-Date.now()):0)}state=x;lang=x.lang;return true}
 catch{recoveryBlocked=true;storageNotice('common.badRecovery');return false}
}
let pendingBackupImport=null,backupImportGeneration=0,backupStatusKey=null;
function backupStatus(key){backupStatusKey=key;const el=$('#backupStatus');if(el){el.textContent=t(key);el.classList.remove('hidden')}}
function saveBackupDownload(raw,suffix=''){
 const blob=new Blob([raw],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=url;a.download=`sea-instructor-${suffix? suffix+'-':''}${new Date().toISOString().slice(0,10)}.json`;a.hidden=true;document.body.appendChild(a);
 try{a.click()}finally{a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
}
function exportBackup(){
 try{
  if(recoveryBlocked){const raw=sessionStorage.getItem(STORE_KEY);if(!raw)return backupStatus('backup.invalid');saveBackupDownload(JSON.stringify({format:'SEA-GAME-RECOVERY-RESCUE',version:1,role:'INSTRUCTOR',raw}),'recovery');backupStatus('backup.rawExported');return}
  if(!state.sessionCode)return backupStatus('backup.noSession');
  saveBackupDownload(makeBackup('INSTRUCTOR',{...state,privateEntry:false}));backupStatus('backup.exported');
 }catch{backupStatus('backup.failed')}
}
function commitBackupImport(token){
 const pending=pendingBackupImport;if(!pending||pending.token!==token)return false;
 if(!seaConfirmGate('backup-import-'+token,t('backup.confirmInstructor'),()=>commitBackupImport(token)))return false;
 if(state!==pending.original||JSON.stringify(state)!==pending.before){pendingBackupImport=null;backupStatus('backup.changed');return false}
 if(state.sessionCode){
  const previous=makeBackup('INSTRUCTOR',{...state,privateEntry:false});
  try{sessionStorage.setItem(STORE_KEY+'_PRE_IMPORT',previous)}catch{}
  try{saveBackupDownload(previous,'pre-import')}catch{pendingBackupImport=null;backupStatus('backup.failed');return false}
 }else if(recoveryBlocked){
  try{const raw=sessionStorage.getItem(STORE_KEY);if(raw){const rescue=JSON.stringify({format:'SEA-GAME-RECOVERY-RESCUE',version:1,role:'INSTRUCTOR',raw});try{sessionStorage.setItem(STORE_KEY+'_PRE_IMPORT_RAW',rescue)}catch{}saveBackupDownload(rescue,'recovery-pre-import')}}catch{pendingBackupImport=null;backupStatus('backup.failed');return false}
 }
 stopTimer();state=pending.candidate;pendingBackupImport=null;lang=state.lang;recoveryBlocked=false;storageFailed=false;
 if(state.open)state.pausedRemaining=state.pausedRemaining??(state.timingMode==='TIMED'?Math.max(0,state.deadline-Date.now()):0);
 const saved=saveState();$('#teamCount').value=String(state.teamCount);$('#revealMode').value=state.revealMode;$('#timingMode').value=state.timingMode;$('#bidSeconds').value=String(state.bidSeconds);
 phase(state.phase);renderAll();backupStatus(saved?'backup.imported':'backup.storageFailed');return true;
}
async function readBackupFile(file){
 const token=++backupImportGeneration;pendingBackupImport=null;if(!file)return;
 if(file.size>MAX_BACKUP_BYTES)return backupStatus('backup.tooLarge');
 const original=state,before=JSON.stringify(state);
 try{
  const raw=await file.text();if(token!==backupImportGeneration)return;
  if(state!==original||JSON.stringify(state)!==before)return backupStatus('backup.changed');
  const candidate=parseBackup(raw,'INSTRUCTOR',validateInstructorSave,MAX_BACKUP_CHARS);
  pendingBackupImport={token,candidate,before,original};
  commitBackupImport(token);
 }catch{if(token===backupImportGeneration)backupStatus('backup.invalid')}
}
function restorePreviousBackup(){
 const token=++backupImportGeneration;pendingBackupImport=null;
 try{const raw=sessionStorage.getItem(STORE_KEY+'_PRE_IMPORT');if(!raw){backupStatus('backup.noPrevious');return false}const candidate=parseBackup(raw,'INSTRUCTOR',validateInstructorSave,MAX_BACKUP_CHARS);pendingBackupImport={token,candidate,before:JSON.stringify(state),original:state};return commitBackupImport(token)}
 catch{backupStatus('backup.invalid');return false}
}
function resetClosedSession(before,original){
 if(state!==original||state.phase!=='closed'||JSON.stringify(state)!==before){backupStatus('backup.changed');return false}
 let previous;try{previous=makeBackup('INSTRUCTOR',{...state,privateEntry:false})}catch{backupStatus('backup.failed');return false}
 let storageIssue=false;try{sessionStorage.setItem(STORE_KEY+'_PRE_IMPORT',previous)}catch{storageIssue=true}
 try{saveBackupDownload(previous,'pre-reset')}catch{backupStatus('backup.failed');return false}
 try{sessionStorage.removeItem(STORE_KEY)}catch{storageIssue=true}
 const language=state.lang,teamCount=Number($('#teamCount').value),bidSeconds=Number($('#bidSeconds').value);
 stopTimer();state={phase:'setup',schema:3,lang:language,vehiclesLocked:false,sessionCode:null,marketSeed:null,market:[],teams:[],teamCount:Number.isInteger(teamCount)&&teamCount>=2&&teamCount<=10?teamCount:10,revealMode:$('#revealMode').value||'ROUND',timingMode:$('#timingMode').value||'TIMED',bidSeconds:Number.isInteger(bidSeconds)&&bidSeconds>=10&&bidSeconds<=120?bidSeconds:30,round:0,lot:0,revealed:true,open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,practice:{revealed:false,open:false,leader:false,closed:false}};
 lang=language;recoveryBlocked=false;storageFailed=storageIssue;phase('setup');renderAll();backupStatus('backup.exported');return true;
}
function startNewSession(){
 if(state.phase!=='closed'||!state.sessionCode)return false;
 const original=state,before=JSON.stringify(state);
 if(!seaConfirmGate('new-session',t('closed.newConfirm'),()=>resetClosedSession(before,original)))return false;
 return resetClosedSession(before,original);
}
function renderBackupControls(){
 $('#exportBackupBtn').disabled=!state.sessionCode&&!recoveryBlocked;
 try{$('#restorePreviousBtn').disabled=!sessionStorage.getItem(STORE_KEY+'_PRE_IMPORT')}catch{$('#restorePreviousBtn').disabled=true}
 if(backupStatusKey)backupStatus(backupStatusKey)
}
function currentCard(){return state.market[state.round]?.[state.lot]}
function visibleLot(i){return SEA_AUCTION.visible(state.revealMode,state.lot,state.revealed,i)}
function effectiveEntry(round=state.round+1,lot=state.lot+1){const xs=state.ledger.filter(x=>x.round===round&&x.lot===lot);if(!xs.length)return null;const last=xs[xs.length-1];return last.kind==="VOID"?null:last}
function committed(){return !!effectiveEntry()}
function ledgerCapacity(kind){
 const position=state.round*APP.lotsPerRound+state.lot,total=APP.rounds*APP.lotsPerRound;
 return Number.isInteger(position)&&position>=0&&position<total&&state.ledger.length+1+(total-1-position)+(kind==='VOID'?1:0)<=MAX_INSTRUCTOR_LEDGER_ENTRIES;
}
function appendLog(e){state.ledger.push(Object.freeze({...e,seq:++state.seq}));saveState()}
function stopTimer(){if(timerHandle)clearInterval(timerHandle);timerHandle=null}
function timedOut(){return state.timingMode==="TIMED"&&state.open&&state.pausedRemaining===null&&state.deadline!==null&&Date.now()>=state.deadline}

function biddingActive(){return state.phase==='auction'&&state.vehiclesLocked&&state.open&&!committed()&&state.pausedRemaining===null&&!timedOut()}
function timerText(){if(state.timingMode!=="TIMED"||!state.open)return "-";if(state.pausedRemaining!==null)return t("auction.paused",{seconds:Math.ceil(state.pausedRemaining/1000)});const ms=Math.max(0,(state.deadline||Date.now())-Date.now());return ms<=0?t("auction.timeExpired"):`${Math.ceil(ms/1000)}s`}

function startTimer(ms){
 stopTimer();if(state.timingMode!=='TIMED')return;state.deadline=Date.now()+Math.max(0,ms);state.pausedRemaining=null;
 timerHandle=setInterval(()=>{if(!state.open||state.phase!=='auction'){stopTimer();return}const rem=state.deadline-Date.now();if(rem<=0){stopTimer();$('#timerAnnouncement').textContent=t('auction.windowEnded');renderAuction();return}if(rem<=5000&&!state.finalCallAnnounced){state.finalCallAnnounced=true;$('#timerAnnouncement').textContent=t('auction.finalCall')}$('#timerValue').textContent=timerText()},250);
}

function togglePause(){
 if(state.phase!=='auction'||!state.open||committed())return;
 if(state.pausedRemaining===null){state.pausedRemaining=state.timingMode==='TIMED'?Math.max(0,state.deadline-Date.now()):0;stopTimer()}
 else{const ms=state.pausedRemaining;state.pausedRemaining=null;if(state.timingMode==='TIMED')startTimer(ms)}renderAuction();
}
function renderAssignments(target){
 const editing=choicesEditable(),prefix=target.id,session=state.sessionCode;
 target.innerHTML=state.teams.map(tm=>`<div class="inv"><label for="${prefix}-${tm.id}"><strong>${esc(t('common.team',{n:tm.id}))}</strong> · ${esc(t('vehicle.label'))}</label><div class="field"><select id="${prefix}-${tm.id}" data-vehicle-team="${tm.id}" ${editing?'':'disabled'}>${vehicleOptions(tm.mission)}</select></div>${validMission(tm.mission)?`<details><summary>${esc(MISSIONS[tm.mission][lang])}</summary>${vehiclePreview(tm.mission)}</details>`:''}</div>`).join('');
 target.querySelectorAll('[data-vehicle-team]').forEach(el=>{const tm=state.teams.find(team=>team.id===Number(el.dataset.vehicleTeam));el.onchange=()=>{if(!el.isConnected||state.sessionCode!==session||!tm||!state.teams.includes(tm))return false;return setTeamVehicle(tm.id,el.value)}});
 const count=state.teams.filter(tm=>validMission(tm.mission)).length;
 const status=document.getElementById(prefix==='assignmentList'?'setupVehicleStatus':'planningVehicleStatus');if(status)status.textContent=t('vehicle.ready',{count,total:state.teamCount});
}
function generateSession(){
 if(state.phase!=='setup'||recoveryBlocked)return false;
 const controls=['#teamCount','#bidSeconds','#revealMode','#timingMode'],choices=controls.map(id=>$(id).value),original=state,before=JSON.stringify(state);
 const n=Number(choices[0]),seconds=Number(choices[1]),reveal=choices[2],timing=choices[3];
 if(!Number.isInteger(n)||n<2||n>10||!Number.isInteger(seconds)||seconds<10||seconds>120||!['ROUND','JIT','MANUAL'].includes(reveal)||!['TIMED','UNTIMED'].includes(timing)){seaNotify(t('errors.state'));return false}
 const apply=()=>{
  if(state!==original||JSON.stringify(state)!==before||recoveryBlocked||controls.some((id,i)=>$(id).value!==choices[i])){seaNotify(t('errors.changed'));return false}
  stopTimer();state.teamCount=n;state.revealMode=reveal;state.timingMode=timing;state.bidSeconds=seconds;
  state.sessionCode=sessionCode(n);state.marketSeed=randomHex(16);state.market=marketFromSeed(state.marketSeed);state.teams=createTeams(state.sessionCode);
  state.vehiclesLocked=false;state.round=0;state.lot=0;state.revealed=state.revealMode!=='MANUAL';state.open=false;state.pausedRemaining=null;state.deadline=null;state.leader=null;state.currentBid=null;state.ledger=[];state.seq=0;state.resultDraft=null;
  $('#setupStatus').textContent=t('setup.ready');saveState();renderAll();return true;
 };
 if(state.sessionCode&&state.teams.some(tm=>tm.mission)&&!seaConfirmGate('session-reset',t('common.confirmCorrection'),apply))return false;
 return apply();
}

function renderPractice(){
 const p=state.practice,stage=p.closed?'done':p.leader?'bid':p.open?'open':p.revealed?'revealed':'ready';
 $('#practiceStatus').textContent=t('practice.stage.'+stage);$('#toPlanning').disabled=!p.closed;
 $('#practiceReveal').disabled=p.revealed;$('#practiceOpen').disabled=!p.revealed||p.open||p.closed;$('#practiceAccept').disabled=!p.open||p.leader||p.closed;$('#practiceClose').disabled=!p.open||!p.leader||p.closed;
 $('#practice .gamecard').classList.toggle('hidden',!p.revealed);if(p.revealed){const artEl=$('#practiceArt');if(artEl&&!artEl.firstChild)artEl.innerHTML=art({id:'TRAIN-CAP',title:{en:'Training capacity',fr:'Capacité de formation'}})}saveState();
}
function resetPractice(){if(!['setup','practice'].includes(state.phase))return false;state.practice={revealed:false,open:false,leader:false,closed:false};renderPractice();return true}

function renderPlanning(){
 renderAssignments($('#planningTeams'));$('#startAuctionBtn').disabled=!allChosen()||state.vehiclesLocked;
 const counts=MISSION_IDS.map(id=>`${MISSIONS[id][lang]}: ${state.teams.filter(tm=>tm.mission===id).length}`).join(' · ');
 $('#vehicleMix').textContent=counts+'\n'+t('vehicle.mix');
}
function renderMarket(){const row=state.market[state.round];$("#market").innerHTML=row.map((c,i)=>{const vis=visibleLot(i);return`<div class="market-card ${i===state.lot?"current":""} ${vis?"":"hiddenlot"}"><div class="slot">${t("common.lot",{n:i+1})}</div><strong>${vis?esc(c.title[lang]):t("common.hidden")}</strong><div>${vis?money(c.start):"-"}</div></div>`}).join("");
 // Committed earlier rounds remain public in every reveal mode, including JIT.
 // The validated ledger guarantees that all prior-round lots were committed.
 const history=state.market.slice(0,state.round).flatMap((past,r)=>past.map((c,i)=>`<details class="market-card" data-history-r="${r}" data-history-l="${i}"><summary>${t("common.round",{n:r+1})} / ${t("common.lot",{n:i+1})}: ${esc(c.title[lang])} - ${money(c.start)}</summary><div class="history-detail"></div></details>`));
 let archive=document.getElementById("publicLotHistory");
 if(!history.length){if(archive)archive.remove();return}
 if(!archive){archive=document.createElement("details");archive.id="publicLotHistory";archive.className="card";$("#market").insertAdjacentElement("afterend",archive)}
 const expanded=archive.open;
 const opened=[...archive.querySelectorAll("details[open][data-history-r]")].map(d=>d.dataset.historyR+"-"+d.dataset.historyL);
 const label=lang==="fr"?"Lots précédemment révélés":"Previously revealed lots";
 archive.innerHTML=`<summary>${label} (${history.length})</summary><div class="market">${history.join("")}</div>`;
 archive.open=expanded;
 archive.querySelectorAll("[data-history-r]").forEach(d=>{
  d.ontoggle=()=>{if(!d.open)return;const c=state.market[Number(d.dataset.historyR)][Number(d.dataset.historyL)];d.querySelector(".history-detail").innerHTML=`<div class="art" style="height:180px">${art(c)}</div><div>${effectsHtml(c)}</div>`};
  if(opened.includes(d.dataset.historyR+"-"+d.dataset.historyL))d.open=true;
 });
}
function renderCurrentCard(){const c=currentCard(),vis=visibleLot(state.lot);$("#cardCat").textContent=vis?categoryName(c.cat):"-";$("#cardId").textContent=vis?c.id:"-";$("#cardTitle").textContent=vis?c.title[lang]:t("common.hidden");$("#cardEffects").innerHTML=vis?effectsHtml(c):"";$("#cardArt").innerHTML=vis?art(c):`<div style="height:100%;display:grid;place-items:center">${t("common.hidden")}</div>`;$("#startPrice").textContent=vis?t("common.starting",{amount:money(c.start)}):"";$("#leaderText").textContent=state.leader?t("common.team",{n:state.leader})+" · "+money(state.currentBid):t("common.noLeader")}

function acceptTeamBid(id,intended){
 if(!biddingActive())return false;const tm=state.teams.find(x=>x.id===id),amount=nextOffer();
 if(!tm||!validMission(tm.mission)||!SEA_AUCTION.canWin(tm.purchasesByRound[state.round])||state.leader===id||amount===null)return false;
 if(intended!==amount){seaNotify(t('errors.stale'));return false}
 try{addCents(tm.cost,amount)}catch{seaNotify(t('errors.moneyRange'));return false}
 state.currentBid=amount;state.leader=id;state.resultDraft=null;renderAuction();return true;
}

function renderBidRoster(){
 const next=nextOffer();$('#bidRoster').innerHTML=state.teams.map(tm=>{const used=tm.purchasesByRound[state.round],left=2-used,leader=state.leader===tm.id,eligible=biddingActive()&&SEA_AUCTION.canWin(used)&&!leader&&next!==null;
 return `<div class="ledger-row bid-row"><strong>${t('common.team',{n:tm.id})}</strong><span class="bid-team-meta">${esc(MISSIONS[tm.mission][lang])}<small>${t('common.wins',{used,left})}</small></span><button class="btn ${leader?'good':'primary'}" data-bid-team="${tm.id}" data-bid-amount="${next??''}" ${eligible?'':'disabled'}>${leader?t('auction.leading',{amount:money(state.currentBid)}):t('auction.accept',{amount:next===null?'-':money(next)})}</button></div>`}).join('');
 $$('[data-bid-team]').forEach(b=>b.onclick=()=>acceptTeamBid(Number(b.dataset.bidTeam),Number(b.dataset.bidAmount)));
}

function renderCommitControls(){
 const vis=visibleLot(state.lot),amount=nextOffer(),entry=effectiveEntry(),draft=state.resultDraft||{team:state.leader,price:state.currentBid===null?'':amountInput(state.currentBid),reason:''};
 $('#leaderSummary').textContent=state.leader?t('common.team',{n:state.leader})+' · '+money(state.currentBid):'-';$('#nextBid').textContent=vis&&amount!==null?money(amount):'-';$('#timerValue').textContent=timerText();
 $('#pauseBtn').textContent=state.pausedRemaining===null?t('auction.pause'):t('auction.resume');$('#pauseBtn').disabled=!state.open||committed();$('#extendBtn').disabled=!state.open||state.timingMode!=='TIMED'||committed();
 $('#winnerSelect').innerHTML=`<option value="">${t('common.selectTeam')}</option>`+state.teams.map(tm=>`<option value="${tm.id}" ${Number(draft.team)===tm.id?'selected':''} ${!SEA_AUCTION.canWin(tm.purchasesByRound[state.round])?'disabled':''}>${t('common.team',{n:tm.id})}</option>`).join('');
 $('#finalPrice').value=draft.price;$('#saleCorrectionReason').value=draft.reason;
 const storeDraft=()=>{state.resultDraft={team:$('#winnerSelect').value,price:$('#finalPrice').value,reason:$('#saleCorrectionReason').value};saveState()};['winnerSelect','finalPrice','saleCorrectionReason'].forEach(id=>document.getElementById(id).oninput=storeDraft);
 $('#commitSummary').textContent=state.leader?t('auction.commitReady',{team:state.leader,amount:money(state.currentBid)}):t('auction.noAccepted');
 $('#commitStatus').textContent=entry?(entry.kind==='SALE'?t('auction.committed',{team:entry.team,amount:money(entry.price)}):t('auction.unsoldCommitted')):t('auction.notCommitted');
 $('#commitLeaderBtn').disabled=!liveClosing()||state.leader===null;$('#commitUnsoldBtn').disabled=!liveClosing();$('#commitCorrectedBtn').disabled=!liveClosing();$('#voidCurrentBtn').disabled=state.phase!=='auction'||!entry;$('#advanceBtn').disabled=!entry;
 $('#revealBtn').disabled=state.revealMode!=='MANUAL'||state.revealed||committed();$('#openBtn').disabled=state.open||committed();
}
function renderLedger(target=$("#ledger")){target.innerHTML=state.ledger.length?state.ledger.map(e=>`<div class="ledger-row"><span>${e.round}</span><span>${e.lot}</span><span>${esc(e.card)}</span><span>${e.kind==="VOID"?t("common.void"):e.kind==="UNSOLD"?t("common.unsold"):"T"+e.team}</span><span>${e.price?money(e.price):"-"}</span></div>`).join(""):`<div class="muted" style="padding:10px">${t("auction.noEntries")}</div>`}
function renderWorkflow(){const c=committed(),vis=visibleLot(state.lot);$("#workflow").innerHTML=[[t("auction.reveal"),vis],[t("auction.open"),state.open||c],[t("auction.acceptCaller"),!!state.leader||c],[t("auction.commitTitle"),c],[t("auction.advance"),false]].map((x,i)=>`<span class="${!x[1]&&((i===0&&!vis)||(i===1&&vis&&!state.open)||(i===2&&state.open)||(i===3&&state.open)||(i===4&&c))?"current":""}">${i+1}. ${esc(x[0].replace(/^\d+ · /,""))} ${x[1]?"✓":""}</span>`).join("")}
function renderAuction(){$("#auctionRule").textContent=t(state.revealMode==="ROUND"?"auction.rule.round":state.revealMode==="JIT"?"auction.rule.jit":"auction.rule.manual");$("#roundHeading").textContent=t("common.roundLot",{round:state.round+1,lot:state.lot+1});$("#lotBadge").textContent=state.open?t("common.open"):committed()?t("common.committed"):t("common.ready");renderMarket();renderCurrentCard();renderBidRoster();renderCommitControls();renderLedger();renderWorkflow();saveState()}

function commitSale(teamId,price,reason=''){
 if(!liveClosing())return false;const tm=state.teams.find(x=>x.id===teamId);if(!tm){seaNotify(t('errors.badTeam'));return false}
 if(!ledgerCapacity('SALE')){seaNotify(t('errors.ledgerLimit'));return false}
 const corrected=state.leader!==teamId||state.currentBid!==price;
 if(corrected&&(!reason.trim()||reason.length>120)){seaNotify(t('errors.reason'));return false}
 const original=state,before=JSON.stringify(state);
 const apply=()=>{
  if(state!==original||JSON.stringify(state)!==before||!state.teams.includes(tm)){seaNotify(t('errors.changed'));return false}
  try{acquire(tm,currentCard(),price)}catch{seaNotify(t('errors.moneyRange'));return false}
  const c=currentCard();state.leader=teamId;state.currentBid=price;state.open=false;state.pausedRemaining=null;state.resultDraft=null;stopTimer();
  appendLog({kind:'SALE',round:c.round,lot:c.lot,card:c.id,team:teamId,price,...(corrected?{reason}: {})});renderAuction();return true;
 };
 if(corrected&&!seaConfirmGate('sale-correction',t('common.confirmCorrection'),apply))return false;
 return apply();
}
function commitCurrentLeader(){if(state.leader===null||state.currentBid===null)return;commitSale(state.leader,state.currentBid)}

function commitCorrected(){try{return commitSale(Number($('#winnerSelect').value),parseWholeDollars($('#finalPrice').value),$('#saleCorrectionReason').value.trim())}catch{seaNotify(t('errors.moneyRange'));return false}}

function commitUnsold(){
 if(!liveClosing())return false;if(!ledgerCapacity('UNSOLD')){seaNotify(t('errors.ledgerLimit'));return false}const original=state,before=JSON.stringify(state);
 const apply=()=>{
  if(state!==original||JSON.stringify(state)!==before){seaNotify(t('errors.changed'));return false}
  const c=currentCard();state.open=false;state.pausedRemaining=null;state.leader=null;state.currentBid=null;state.resultDraft=null;stopTimer();appendLog({kind:'UNSOLD',round:c.round,lot:c.lot,card:c.id,team:null,price:null});renderAuction();return true;
 };
 if(state.leader!==null&&!seaConfirmGate('unsold-leader',t('auction.confirmUnsoldWithLeader'),apply))return false;
 return apply();
}

function voidCurrent(){
 if(state.phase!=='auction')return false;const e=effectiveEntry();if(!e)return false;const reason=$('#correctionReason').value.trim();if(!reason||reason.length>120){seaNotify(t('errors.reason'));return false}
 if(!ledgerCapacity('VOID')){seaNotify(t('errors.ledgerLimit'));return false}
 const original=state,before=JSON.stringify(state);
 const apply=()=>{
  if(state!==original||JSON.stringify(state)!==before||$('#correctionReason').value.trim()!==reason){seaNotify(t('errors.changed'));return false}
  if(e.kind==='SALE'){const tm=state.teams.find(x=>x.id===e.team),idx=tm?.purchases.findIndex(p=>p.round===e.round&&p.lot===e.lot&&p.id===e.card&&p.paid===e.price);if(!tm||idx<0){seaNotify(t('errors.state'));return false}removePurchase(tm,idx)}
  state.open=false;state.pausedRemaining=null;state.leader=null;state.currentBid=null;state.resultDraft=null;stopTimer();appendLog({kind:'VOID',ref:e.seq,round:e.round,lot:e.lot,card:e.card,team:e.team,price:e.price,reason});$('#correctionReason').value='';renderAuction();return true;
 };
 if(!seaConfirmGate('void-lot',t('common.confirmCorrection'),apply))return false;
 return apply();
}

function advance(){
 if(state.phase!=='auction'||!committed())return false;
 if(state.lot===9&&state.round===6){phase('build');renderAll();return true}
 if(state.lot<9)state.lot++;else{state.round++;state.lot=0}state.revealed=state.revealMode!=='MANUAL';state.open=false;state.leader=null;state.currentBid=null;state.resultDraft=null;renderAuction();return true;
}
function renderBuild(){$("#authoritativeBuild").innerHTML=state.teams.map(tm=>{const sf=shortfalls(tm),sc=score(tm);const plist=tm.purchases.length?tm.purchases.map(p=>`<div class="purchase-row"><span>R${p.round}·L${p.lot}</span><span>${esc(p.id)} - ${esc(p.title[lang])}</span><strong>${money(p.paid)}</strong></div>`).join(""):`<div class="muted">${t("build.noPurchases")}</div>`;return`<div class="card team-summary"><div class="space"><h3>${t("common.team",{n:tm.id})} - ${esc(MISSIONS[tm.mission][lang])}</h3><strong class="${compliant(tm)?"pass":"fail"}">${compliant(tm)?t("common.compliant"):t("common.noncompliant")} · ${t("common.score")} ${sc}</strong></div><div class="grid three"><div class="metric"><div class="label">${t("common.cost")}</div><div class="value">${money(tm.cost)}</div></div><div class="metric"><div class="label">${t("common.score")}</div><div class="value">${sc}</div></div><div class="metric"><div class="label">${t("build.purchases")}</div><div class="value">${tm.purchases.length}</div></div></div><div class="effects">${Object.entries(tm.totals).map(([k,v])=>`<div class="effect">${esc(LABELS[k][lang][0])}<strong>${v}</strong><small>${esc(LABELS[k][lang][1])}</small></div>`).join("")}</div>${sf.length?`<div class="notice bad">${t("build.shortfalls",{items:sf.map(([k,v])=>LABELS[k][lang][0]+" "+tm.totals[k]+"/"+v).join(", ")})}</div>`:`<div class="notice good">${t("build.allPass")}</div>`}<div class="purchase-list">${plist}</div></div>`}).join("");saveState()}

function openPrivateSubmissions(){
 if(state.phase!=='submit'||state.privateEntry)return false;
 const before=JSON.stringify(state);
 const apply=()=>{if(state.phase!=='submit'||JSON.stringify(state)!==before){seaNotify(t('errors.changed'));return false}state.privateEntry=true;renderSubmit();return true};
 if(!seaConfirmGate('private-submissions',t('submit.privateConfirm'),apply))return false;
 return apply();
}
function closeSubmissions(){
 if(state.phase!=='submit')return false;
 const before=JSON.stringify(state),pending=state.teams.filter(team=>!team.submitted).length;
 const apply=()=>{if(state.phase!=='submit'||JSON.stringify(state)!==before){seaNotify(t('errors.changed'));return false}if(!phase('debrief'))return false;renderAll();return true};
 if(pending&&!seaConfirmGate('close-submissions',t('submit.pendingConfirm',{count:pending}),apply))return false;
 return apply();
}
function renderSubmit(){
 const privateOn=state.phase==='submit'&&state.privateEntry===true,session=state.sessionCode;$('#privateSubmitGuard').classList.toggle('hidden',privateOn);
 $('#submissionRows').innerHTML=state.teams.map(tm=>`<div class="inv"><div class="space"><strong>${t('common.team',{n:tm.id})} - ${esc(MISSIONS[tm.mission][lang])}</strong><span>${tm.submitted?t('submit.submitted'):t('debrief.notSubmitted')}</span></div>${privateOn?`<div class="grid three"><div class="field"><label for="profit-${tm.id}">${t('submit.profitAmount')}</label><input id="profit-${tm.id}" data-profit-team="${tm.id}" inputmode="decimal" maxlength="20" value="${amountInput(tm.profit)}"></div><label class="check-label"><input type="checkbox" data-submitted-team="${tm.id}" ${tm.submitted?'checked':''}>${t('submit.submitted')}</label><div class="metric"><div class="label">${t('common.bid')}</div><div class="value">${money(addCents(tm.cost,tm.profit))}</div></div></div>`:''}</div>`).join('');
 $$('[data-profit-team]').forEach(e=>{const tm=state.teams.find(x=>x.id===Number(e.dataset.profitTeam));e.onchange=()=>{if(state.phase!=='submit'||!state.privateEntry||state.sessionCode!==session||!e.isConnected||!tm||!state.teams.includes(tm))return;try{const profit=parseAmount(e.value);addCents(tm.cost,profit);tm.profit=profit;saveState();renderSubmit()}catch{seaNotify(t('errors.moneyRange'));e.value=amountInput(tm.profit)}}});
 $$('[data-submitted-team]').forEach(e=>{const tm=state.teams.find(x=>x.id===Number(e.dataset.submittedTeam));e.onchange=()=>{if(state.phase!=='submit'||!state.privateEntry||state.sessionCode!==session||!e.isConnected||!tm||!state.teams.includes(tm))return;tm.submitted=e.checked;saveState()}});
}
function renderDebrief(){const eligible=state.teams.filter(awardEligible).sort(awardComparator);let head;if(!eligible.length)head=`<h3>${t("debrief.noAward")}</h3>`;else{const top=eligible[0],ties=eligible.filter(x=>exactTopTie(x,top));head=`<h3>${ties.length>1?t("debrief.shared",{teams:ties.map(x=>t("common.team",{n:x.id})).join(", ")}):t("debrief.award",{team:top.id})}</h3>`}const ranked=eligible.map((tm,i)=>{const bid=addCents(tm.cost,tm.profit),sc=score(tm);return`<div class="inv"><strong>${i+1}. ${t("common.team",{n:tm.id})}</strong><div>${money(bid)} · ${sc} ${t("common.points")} · ${ratioDisplay(bid,sc)}</div></div>`}).join("");const summaries=state.teams.map(tm=>{const sc=score(tm),bid=addCents(tm.cost,tm.profit),status=!tm.submitted?t("debrief.notSubmitted"):!compliant(tm)?t("common.noncompliant"):sc<=0?t("debrief.noRated"):t("common.compliant"),major=tm.purchases.slice().sort((a,b)=>b.paid-a.paid).slice(0,3).map(p=>`${esc(p.id)} ${money(p.paid)}`).join(" · ")||"-";return`<div class="inv"><div class="space"><strong>${t("common.team",{n:tm.id})} - ${esc(MISSIONS[tm.mission][lang])}</strong><span>${status}</span></div><div>${t("common.score")} ${sc} · ${t("common.cost")} ${money(tm.cost)} · ${t("common.profit")} ${money(tm.profit)} · ${t("common.bid")} ${money(bid)} · ${t("common.cpp")} ${ratioDisplay(bid,sc)}</div><small>${t("debrief.majorPurchases")}: ${major}</small></div>`}).join("");$("#ranking").innerHTML=head+ranked+`<h3 style="margin-top:16px">${t("debrief.teamSummaries")}</h3>`+summaries;saveState()}
function renderAll(){if(typeof sea3DQueue==='function')sea3DQueue();state.lang=lang;applyI18n();renderBackupControls();$("#phaseBadge").textContent=t("phase."+state.phase);$("#sessionBadge").textContent=state.sessionCode||"-";if(state.phase==="setup"&&!state.sessionCode)$("#setupStatus").textContent=t("setup.empty");if(state.phase==="setup"&&state.sessionCode){$("#setupStatus").textContent=t("setup.ready");$("#sessionCode .value").textContent=state.sessionCode;renderAssignments($("#assignmentList"));$("#startTutorialBtn").disabled=false}if(state.phase==="practice")renderPractice();if(state.phase==="planning")renderPlanning();if(state.phase==="auction")renderAuction();if(state.phase==="build")renderBuild();if(state.phase==="submit")renderSubmit();if(state.phase==="debrief")renderDebrief();if(state.phase==="closed")renderLedger($("#closedLedger"));if(recoveryBlocked)storageNotice("common.badRecovery");else if(storageFailed)storageNotice("common.refresh")}
$("#teamCount").innerHTML=Array.from({length:9},(_,i)=>`<option value="${i+2}" ${i===8?"selected":""}>${i+2}</option>`).join("");
$("#generateBtn").onclick=generateSession;
$("#startTutorialBtn").onclick=()=>{if(state.phase!=="setup"||!state.sessionCode)return;resetPractice();phase("practice");renderAll()};
$("#practiceReveal").onclick=()=>{if(state.phase!=="practice"||state.practice.revealed||state.practice.closed)return;state.practice.revealed=true;renderPractice()};
$("#practiceOpen").onclick=()=>{if(state.phase!=="practice"||!state.practice.revealed||state.practice.open||state.practice.closed)return;state.practice.open=true;renderPractice()};
$("#practiceAccept").onclick=()=>{if(state.phase!=="practice"||!state.practice.revealed||!state.practice.open||state.practice.leader||state.practice.closed)return;state.practice.leader=true;renderPractice()};
$("#practiceClose").onclick=()=>{if(state.phase!=="practice"||!state.practice.revealed||!state.practice.open||!state.practice.leader||state.practice.closed)return;state.practice.closed=true;state.practice.open=false;renderPractice()};
$("#practiceReset").onclick=()=>{if(state.phase!=="practice")return;resetPractice()};
$("#toPlanning").onclick=()=>{if(state.phase!=="practice"||!state.practice.closed)return;resetPractice();phase("planning");renderAll()};
$("#startAuctionBtn").onclick=startScoredAuction;
$("#revealBtn").onclick=()=>{if(state.phase!=="auction"||committed())return;state.revealed=true;renderAuction()};
$("#openBtn").onclick=openAuction;
$("#pauseBtn").onclick=togglePause;
$("#extendBtn").onclick=extendAuction;
$("#commitLeaderBtn").onclick=commitCurrentLeader;
$("#commitUnsoldBtn").onclick=commitUnsold;
$("#commitCorrectedBtn").onclick=commitCorrected;
$("#voidCurrentBtn").onclick=voidCurrent;
$("#advanceBtn").onclick=advance;
$("#openSubmissionsBtn").onclick=()=>{if(state.phase!=="build")return;phase("submit");renderAll()};
$("#privateSubmitBtn").onclick=openPrivateSubmissions;
$("#closeSubmissionsBtn").onclick=closeSubmissions;
$("#closeRoomBtn").onclick=()=>{if(state.phase!=="debrief")return;phase("closed");renderAll()};


$('#exportBackupBtn').onclick=exportBackup;
$('#importBackupBtn').onclick=()=>$('#backupFile').click();
$('#restorePreviousBtn').onclick=restorePreviousBackup;
$('#startNewSessionBtn').onclick=startNewSession;
$('#backupFile').onchange=e=>{const file=e.target.files?.[0];e.target.value='';readBackupFile(file)};
$("#langBtn").onclick=()=>setLang(lang==="en"?"fr":"en");
if(!safeSessionStorage())$("#recoveryStatus").textContent=t("setup.noStorage");
bindArtworkEvents();
if(restoreState()){$("#teamCount").value=String(state.teamCount);$("#revealMode").value=state.revealMode;$("#timingMode").value=state.timingMode;$("#bidSeconds").value=String(state.bidSeconds);$("#recoveryStatus").className="notice good";$("#recoveryStatus").textContent=t("setup.recovered");phase(state.phase)}else phase("setup");
renderAll();

sea3DQueue=sea3DStart('instructor');
