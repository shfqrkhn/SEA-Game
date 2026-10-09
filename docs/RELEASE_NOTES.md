# SEA Game candidate release notes EN and FR

Status: unaccepted development candidate, revised 2026-10-09. Current source app identity is `3.4.2`, ruleset `STANDARD`, deck `synthetic-v1`, save schema 3 and backup envelope version 1. The version label does not identify exact bytes or establish release acceptance. Use the source/preview identities and role hashes in the [current qualification report](evidence/convergence/scene-game-20261009/REPORT.md), plus the externally retained packet key at accepted release. Root deployment, rights/content/classroom acceptance and operator handover remain open.

Historical version 3.3.0 binds source `01204c8` and preview `18dc0db`; it does not qualify new 3.4.0 bytes. / La version historique 3.3.0 correspond à la source `01204c8` et à l’aperçu `18dc0db`; ses preuves ne valident pas les nouveaux fichiers 3.4.0.

## English

### Changes in the candidate

- Version 3.4.2 rejects callbacks from replaced editors, changed state identities and advanced rounds/lots, including deferred field navigation. Compatible saves and canonical rules remain unchanged.

- Version3.4.1 corrects a browser-observed auction cue: before a student knows a card, Load card is prominent. The ordinary win-recording cue returns after loading. No card or purchase is entered automatically, and canonical rules/enabled states stay unchanged.

- Version 3.4.0 puts student known-card entry/loading, private decision notes and purchase results together in Current, while Round retains round/lot context. Instructor Build selection aligns the selected team's detail and inspected model. Native editing adds Previous/Next field navigation with composition and stale-target guards; Closed keeps its new-session action visible, and the compact French overview label is « Aperçu ». Existing commands, manual authority, privacy, rules and save compatibility are preserved. Exact-candidate browser verification remains required.
- This batch integrates original hollow COMBAT/firepower mounts, supported annular barrels and crew roof-ring/basket geometry. Actual GPU comparison confirms the integrated construction; mechanical/reference fidelity and full visual acceptance remain open.

- Version 3.3.0 rebuilds the scene interface around the current task: an enabled next action stays visible across sections, six model views are directly accessible, live callers share the Current auction surface and opening a Build team selects its inspected configuration. Rounded surfaces, restrained hierarchy and direct compact navigation use original code informed by public usability and MIT Three.js/uikit patterns. No additional UI library, copied example assets or game-rule changes were introduced. See the [XY analysis and licence record](game-design/UI_CLEANROOM_REBUILD.md).

- Version 3.2.1 connects the mine roller to chassis bearings and continuous draw arms; the troop carrier gains an actual rear opening, sloped ramp, seals and bearing hinges. Static illustrative construction remains subject to browser/reference qualification.

- Three.js is the primary game interface across both roles and all eight phases, with synchronized semantic controls/native input, bilingual task sections, assembled/exploded/cutaway inspection and rotating fixed-light shadows. Runtime, rules, models and materials are embedded in each HTML; there is no external image-loading chain. Model construction and complete device/accessibility acceptance remain open.
- Version 3.2.0 adds compact expandable instructor Build summaries, immediately synchronized Submitted status and a direct Closed-phase new-session action. Five generic carriers now have actual glazing apertures, connected lamp/step hardware and contoured supported cockpit construction. This is illustrative original geometry, not manufacturer-certified equipment.
- Compatible versions retain schema-3 storage keys. Unchanged snapshots and identical generated artifacts skip writes; development uses finite operations without persistent watchers or loggers.
- Student purchase removal now targets the intended purchase instance and rejects stale confirmations. Starting-price fields use whole dollars correctly. Wrong-phase, repeated and delayed commands receive validation before mutation.
- Auction sale, unsold, correction and void paths retain authoritative ledger behavior and reject stale intent. The 210-entry audit limit reserves enough capacity to finish remaining lots; it does not introduce a spending cap.
- Both roles have private JSON export/import, bounded schema-3 recovery and previous-session restore. Invalid imports preserve the current state; corrupt stored data can be exported as an unchanged rescue file. Open instructor auctions recover paused, with private submission entry closed. Closed sessions can start again after deliberate confirmation and a backup request.
- Shared source now supplies rules, scoring, money, state validation, presentation and canonical vector artwork to two independently bundled HTML files. LF handling supports reproducible local Windows/Linux builds. CI declares Windows/Ubuntu with Node 22/24 and pinned actions; actual candidate CI remains pending.
- In-page confirmations, localized feedback and status semantics have additional scope/focus/language checks. Mission artwork appears in both applicable role flows. CAP-F's unwanted image strip was repaired; other asset identities remain retained. Launcher/QA wording now matches advisory WTP and the $50,000 bid increment.
- Added EN/FR [classroom quick start](CLASSROOM_QUICK_START.md) and [recovery instructions](RECOVERY_GUIDE.md), plus release, support and retirement procedures. Material identity excludes disposable Python bytecode while retaining ignored source and other governed files.

### Compatibility and use

The 70-card deck, six missions, seven rounds, two-win-per-round limit, eight phases and manual role handoffs remain the governing classroom model. WTP remains advisory; no enforced total budget, networking or synchronization was added. Each standalone HTML embeds the Three.js runtime/models and native vector illustrations for print. Runtime does not load external raster files. Keep instructor market/ledger backups and student private files separate.

Preserve original files and backups before changing versions. Import only into the matching role with compatible rules, deck and schema; a recognized app label alone is not proof of compatibility. The backup text limit is 500,000 UTF-16 units, with a 1,500,000-byte pre-read file limit. Do not truncate data to bypass either check. Follow the recovery guide and verify completed downloads before closing tabs. A compatible accepted predecessor and actual rollback rehearsal are still required; the hosted baseline is not automatically an approved rollback version.

### Acceptance still outstanding

Local command, rules, persistence, build, artwork and integrity evidence does not prove real browser operation or educational fitness. Required open gates include exact-candidate device/browser/offline/download/storage/CSP/network and assistive testing; performance measurement; French/content and all artwork/code rights acceptance; independent review; classroom pilot; candidate CI; authorized publication with byte readback; and operator recovery/rollback/support handover. No supported-device guarantee or release-completion percentage is supplied. Full PRODUCT_RELEASE closure remains OPEN at 0/3.

## Français

### Changements de la version candidate

- La version 3.4.2 rejette les rappels des éditeurs remplacés et les changements de séance, de ronde ou de lot, y compris la navigation différée entre champs. Les règles et les sauvegardes restent compatibles.

- La version3.4.1 corrige l’action mise en évidence lors de l’enchère étudiante : « Charger la carte » précède l’enregistrement d’un gain tant qu’aucune carte n’est connue. Aucun chargement ni achat automatique n’est ajouté; les règles et validations existantes restent inchangées.

- La version 3.4.0 regroupe dans « En cours » la saisie et le chargement de la carte annoncée, la note privée et le résultat d’achat; « Manche » conserve le contexte de ronde et de lot. La sélection d’équipe relie ses détails de conception au modèle inspecté. La saisie native ajoute les commandes de champ précédent/suivant avec protection de la composition et des cibles périmées. L’action de nouvelle séance reste visible et la vue générale compacte devient « Aperçu ». Les commandes, l’autorité manuelle, la confidentialité, les règles et la compatibilité des sauvegardes sont conservées. Cette version exige ses propres essais dans le navigateur.
- Ce lot intègre des supports creux COMBAT/puissance de feu, des tubes annulaires et un anneau de toit avec panier pour l’équipage. Le rendu réel confirme cette intégration; la fidélité aux références et l’acceptation visuelle complète restent ouvertes.

- La version 3.3.0 organise l’interface Three.js autour de la tâche en cours : l’action suivante disponible reste visible, six vues du modèle sont directement accessibles, les enchérisseurs admissibles sont regroupés dans « En cours » et l’ouverture du résumé d’une équipe sélectionne sa configuration. Les commandes natives, les calculs et les règles existantes sont conservés. Aucun code de bibliothèque ni aucune ressource d’exemple supplémentaire n’a été intégré.
- La construction intermédiaire 3.2.1 relie le rouleau de déminage aux appuis du châssis et aux bras de traction; le transporteur possède une véritable ouverture arrière, une rampe inclinée, des joints et des charnières sur appuis. Cette géométrie illustrative doit encore être comparée aux références dans le navigateur.

- Three.js constitue l’interface principale des deux rôles et des huit phases, avec commandes sémantiques et saisie native synchronisées, sections bilingues, vues assemblée/éclatée/en coupe et ombres sous un éclairage fixe. Chaque HTML contient le moteur, les règles, les modèles et les matériaux; aucune chaîne de chargement d’images externes n’est utilisée. La fidélité des modèles et la validation complète des appareils et de l’accessibilité restent ouvertes.
- La version 3.2.0 ajoute des résumés de conception dépliables par équipe, la mise à jour immédiate du statut Soumis et une commande de nouvelle séance dans la phase Fermé. Cinq véhicules disposent d’ouvertures réelles pour le vitrage, de supports de phares et de marches reliés à la coque, et de postes de conduite mieux construits. La géométrie originale demeure illustrative, sans certification du fabricant.
- Les mises à jour compatibles conservent les clés de stockage du schéma 3. Les sauvegardes et fichiers générés identiques ne sont pas réécrits; le développement utilise des opérations finies sans observateurs ni journaux permanents.
- La suppression d'un achat étudiant cible l'achat prévu et refuse les confirmations périmées. Les prix de départ sont correctement saisis en dollars entiers. Les commandes répétées, retardées ou utilisées à la mauvaise phase sont validées avant modification.
- Les ventes, résultats invendus, corrections et annulations conservent le registre officiel et refusent une intention périmée. La limite de 210 entrées réserve la capacité nécessaire aux lots restants; elle n'impose pas de plafond de dépenses.
- Les deux rôles disposent de sauvegardes JSON privées, d'une importation bornée compatible avec le schéma 3 et de la restauration précédente. Un import rejeté préserve l'état actuel. Les données stockées corrompues peuvent être exportées intactes dans un fichier de secours. Une enchère ouverte reprend en pause et la saisie privée reste fermée. Une nouvelle séance exige une confirmation volontaire et une demande de sauvegarde.
- Les sources partagées fournissent règles, calculs, validation, présentation et illustrations vectorielles aux deux HTML autonomes. Les builds locaux Windows/Linux sont reproductibles. La CI prévoit Windows/Ubuntu et Node 22/24; son exécution sur la version candidate reste à effectuer.
- Les confirmations intégrées, messages localisés et annonces d'état ont des vérifications supplémentaires. Les missions disposent d'illustrations dans les parcours concernés. La bande indésirable de CAP-F a été corrigée. Le lanceur et l'outil QA respectent la disposition à payer indicative et l'incrément de 50 000 $.
- Le [démarrage de la séance](CLASSROOM_QUICK_START.md#français) et la [récupération](RECOVERY_GUIDE.md#français) sont disponibles en français. Des procédures de publication, d'assistance et de retrait sont préparées. Les caches Python jetables ne changent plus l'identité matérielle; les sources ignorées par Git restent incluses.

### Compatibilité et utilisation

Les 70 cartes, six missions, sept rondes, deux gains maximum par ronde, huit phases et communications manuelles restent le modèle de la classe. La disposition à payer reste indicative. Aucun budget total imposé, réseau ou mécanisme de synchronisation n'a été ajouté. Chaque HTML contient Three.js, ses modèles et les illustrations vectorielles destinées à l’impression. Le jeu ne charge pas d’images matricielles externes. Séparez les sauvegardes privées de l'instructeur et des équipes.

Préservez fichiers et sauvegardes avant tout changement de version. Importez seulement dans le bon rôle avec règles, cartes et schéma compatibles; le nom de version seul ne prouve pas la compatibilité. Les limites sont de 500 000 unités UTF-16 pour le texte et de 1 500 000 octets avant lecture du fichier. Ne tronquez pas les données. Vérifiez les téléchargements avant de fermer les onglets. La version précédente approuvée et le retour à cette version doivent encore être validés; la version hébergée n'est pas automatiquement une solution de retour approuvée.

### Approbations encore nécessaires

Les preuves locales ne remplacent pas les essais réels ni l'approbation pédagogique. Restent à effectuer : validation des appareils/navigateurs, du mode hors ligne, des téléchargements, du stockage, de la CSP, des requêtes réseau et des technologies d'assistance; mesures de performance; révision française et du contenu; droits de distribution du code et des illustrations; revue indépendante; séance pilote; CI candidate; publication autorisée et vérification des fichiers livrés; transfert à l'opérateur avec récupération, retour de version et assistance. La clôture complète reste ouverte à 0/3.

## Operator release record

Before activation, bind these notes to the accepted source revision, exact artifact/packet hashes, rules/deck/schema, actual acceptance/CI records and deployment readback. Record the release date, support owner and verified recovery/rollback route. Those facts remain pending; do not fill them from the baseline or a historical receipt. Follow [release operations](RELEASE_OPERATIONS.md) and the controlling [MPES](MPES.md).
