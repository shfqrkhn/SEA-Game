# SEA Game candidate release notes EN and FR

Status: unreleased local candidate, assessed 2026-10-08. App identity remains `3.0.0-local`, ruleset `STANDARD`, deck `synthetic-v1`, save schema 3 and backup envelope version 1. This app label is not a unique candidate identifier; use the externally retained packet key and exact HTML hashes in the qualification record. The baseline commit is `1b80b348ac945987fbe11db77bd7a51f3dd553aa`. These notes describe the local changes after that baseline; they do not claim a new public release or approval.

## English

### Changes in the candidate

- Student purchase removal now targets the intended purchase instance and rejects stale confirmations. Starting-price fields use whole dollars correctly. Wrong-phase, repeated and delayed commands receive validation before mutation.
- Auction sale, unsold, correction and void paths retain authoritative ledger behavior and reject stale intent. The 210-entry audit limit reserves enough capacity to finish remaining lots; it does not introduce a spending cap.
- Both roles have private JSON export/import, bounded schema-3 recovery and previous-session restore. Invalid imports preserve the current state; corrupt stored data can be exported as an unchanged rescue file. Open instructor auctions recover paused, with private submission entry closed. Closed sessions can start again after deliberate confirmation and a backup request.
- Shared source now supplies rules, scoring, money, state validation, presentation and canonical vector artwork to two independently bundled HTML files. LF handling supports reproducible local Windows/Linux builds. CI declares Windows/Ubuntu with Node 22/24 and pinned actions; actual candidate CI remains pending.
- In-page confirmations, localized feedback and status semantics have additional scope/focus/language checks. Mission artwork appears in both applicable role flows. CAP-F's unwanted image strip was repaired; other asset identities remain retained. Launcher/QA wording now matches advisory WTP and the $50,000 bid increment.
- Added EN/FR [classroom quick start](CLASSROOM_QUICK_START.md) and [recovery instructions](RECOVERY_GUIDE.md), plus release, support and retirement procedures. Material identity excludes disposable Python bytecode while retaining ignored source and other governed files.

### Compatibility and use

The 70-card deck, six missions, seven rounds, two-win-per-round limit, eight phases and manual role handoffs remain the governing classroom model. WTP remains advisory; no enforced total budget, networking or synchronization was added. Each standalone HTML retains embedded vector fallback artwork; raster files are optional. Keep instructor market/ledger backups and student private files separate.

Preserve original files and backups before changing versions. Import only into the matching role with compatible rules, deck and schema; a recognized app label alone is not proof of compatibility. The backup text limit is 500,000 UTF-16 units, with a 1,500,000-byte pre-read file limit. Do not truncate data to bypass either check. Follow the recovery guide and verify completed downloads before closing tabs. A compatible accepted predecessor and actual rollback rehearsal are still required; the hosted baseline is not automatically an approved rollback version.

### Acceptance still outstanding

Local command, rules, persistence, build, artwork and integrity evidence does not prove real browser operation or educational fitness. Required open gates include exact-candidate device/browser/offline/download/storage/CSP/network and assistive testing; performance measurement; French/content and all artwork/code rights acceptance; independent review; classroom pilot; candidate CI; authorized publication with byte readback; and operator recovery/rollback/support handover. No supported-device guarantee or release-completion percentage is supplied. Full PRODUCT_RELEASE closure remains OPEN at 0/3.

## Français

### Changements de la version candidate

- La suppression d'un achat étudiant cible l'achat prévu et refuse les confirmations périmées. Les prix de départ sont correctement saisis en dollars entiers. Les commandes répétées, retardées ou utilisées à la mauvaise phase sont validées avant modification.
- Les ventes, résultats invendus, corrections et annulations conservent le registre officiel et refusent une intention périmée. La limite de 210 entrées réserve la capacité nécessaire aux lots restants; elle n'impose pas de plafond de dépenses.
- Les deux rôles disposent de sauvegardes JSON privées, d'une importation bornée compatible avec le schéma 3 et de la restauration précédente. Un import rejeté préserve l'état actuel. Les données stockées corrompues peuvent être exportées intactes dans un fichier de secours. Une enchère ouverte reprend en pause et la saisie privée reste fermée. Une nouvelle séance exige une confirmation volontaire et une demande de sauvegarde.
- Les sources partagées fournissent règles, calculs, validation, présentation et illustrations vectorielles aux deux HTML autonomes. Les builds locaux Windows/Linux sont reproductibles. La CI prévoit Windows/Ubuntu et Node 22/24; son exécution sur la version candidate reste à effectuer.
- Les confirmations intégrées, messages localisés et annonces d'état ont des vérifications supplémentaires. Les missions disposent d'illustrations dans les parcours concernés. La bande indésirable de CAP-F a été corrigée. Le lanceur et l'outil QA respectent la disposition à payer indicative et l'incrément de 50 000 $.
- Le [démarrage de la séance](CLASSROOM_QUICK_START.md#français) et la [récupération](RECOVERY_GUIDE.md#français) sont disponibles en français. Des procédures de publication, d'assistance et de retrait sont préparées. Les caches Python jetables ne changent plus l'identité matérielle; les sources ignorées par Git restent incluses.

### Compatibilité et utilisation

Les 70 cartes, six missions, sept rondes, deux gains maximum par ronde, huit phases et communications manuelles restent le modèle de la classe. La disposition à payer reste indicative. Aucun budget total imposé, réseau ou mécanisme de synchronisation n'a été ajouté. Chaque HTML contient des illustrations vectorielles de secours; les images matricielles sont facultatives. Séparez les sauvegardes privées de l'instructeur et des équipes.

Préservez fichiers et sauvegardes avant tout changement de version. Importez seulement dans le bon rôle avec règles, cartes et schéma compatibles; le nom de version seul ne prouve pas la compatibilité. Les limites sont de 500 000 unités UTF-16 pour le texte et de 1 500 000 octets avant lecture du fichier. Ne tronquez pas les données. Vérifiez les téléchargements avant de fermer les onglets. La version précédente approuvée et le retour à cette version doivent encore être validés; la version hébergée n'est pas automatiquement une solution de retour approuvée.

### Approbations encore nécessaires

Les preuves locales ne remplacent pas les essais réels ni l'approbation pédagogique. Restent à effectuer : validation des appareils/navigateurs, du mode hors ligne, des téléchargements, du stockage, de la CSP, des requêtes réseau et des technologies d'assistance; mesures de performance; révision française et du contenu; droits de distribution du code et des illustrations; revue indépendante; séance pilote; CI candidate; publication autorisée et vérification des fichiers livrés; transfert à l'opérateur avec récupération, retour de version et assistance. La clôture complète reste ouverte à 0/3.

## Operator release record

Before activation, bind these notes to the accepted source revision, exact artifact/packet hashes, rules/deck/schema, actual acceptance/CI records and deployment readback. Record the release date, support owner and verified recovery/rollback route. Those facts remain pending; do not fill them from the baseline or a historical receipt. Follow [release operations](RELEASE_OPERATIONS.md) and the controlling [MPES](MPES.md).
