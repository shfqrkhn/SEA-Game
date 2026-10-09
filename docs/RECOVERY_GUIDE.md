# SEA Game session backup and recovery EN and FR

Current delivery checkpoint: see [handover](HANDOVER.md). Primary next distribution is one dist/index.html with deliberate role selection; exports/imports remain matching-role private JSON. Published3.5 evidence is limited, built 3.6 candidate qualification is pending.

This guide describes the current candidate workflow. The export/import controls still need browser and classroom acceptance before this guide can be treated as an approved operating procedure.

Read the English instructions below or the [French recovery instructions](#français). Both describe the same candidate; French-language and actual recovery acceptance remain outstanding.

## English

## Protect the right file

The instructor app and student companion create separate files. An instructor backup contains the randomized market order, the complete class ledger, and team submissions. Keep it private and give access only to the facilitator who needs it. A student backup contains that team's plan, risks, willingness-to-pay notes, and local purchase record. Students should keep their own files private.

Use synthetic classroom details only. Do not save personal, Protected, Classified, operational, or real-project information in the game.

## Export during play

Choose **Help/save**, then **Export backup**. The app requests a JSON download. Check that the file appears in the browser's download list and can be found before relying on it. A download request does not prove the browser saved a file.

Export before scored play, after each completed round, before changing devices or tabs, and before closing the session. Store instructor and student files separately in a private location. The filename identifies the role and date but not the team or session; add any needed label only in a private location.

Session storage is limited to the current browser tab. It may not survive closing the tab, browser storage restrictions, or moving to another device. A downloaded file is the portable recovery copy. The student app does not synchronize with the instructor app.

## Import a saved session

Open the matching role app, choose **Import backup**, and select a JSON file exported by that role. The app checks the file size, format, role, app/rules/deck identity, schema, and game-state invariants before showing a confirmation. A rejected file does not replace the active state.

The latest selection or previous-backup restore attempt supersedes any file still being read. If active play changes while the file is being read, the import reports changed state; select the file again when ready. An older read cannot replace the newer pending confirmation.

When replacing an active session, the app requests a download of the current session first. Confirm only after you have checked that this file was saved. If the prior session is still available in the same tab, **Restore previous backup** validates it again and asks for confirmation before switching back. Keep the tab open until a portable backup has been saved.

An imported instructor lot that was open is paused. Review its card, timer, ledger, and the authoritative Teams/manual record before resuming. Private submission entry must be reopened deliberately; stop projecting that private screen. Student records remain local estimates; reconcile all purchases against the instructor ledger.

## Recovery failures

Both role apps bound saved/imported JSON at 500,000 JavaScript UTF-16 code units. Files above 1,500,000 UTF-8 bytes are refused before reading; bounded bytes do not bypass the text or role/schema checks. These distinct limits accommodate escaped notes, accents and multilingual text. The original student's 250,000-unit limit could reject a valid maximum private-note export; the larger candidate limit preserves schema-3 compatibility without truncation. Real-device resource and browser download/storage acceptance remains required.

If a JSON file is too large, malformed, for the other role, from an unsupported schema, or uses a different ruleset/deck, preserve it unchanged and open the matching current app version. Do not edit the file or try to downgrade it in place.

If the app reports invalid stored data, **Export backup** may produce a recovery-rescue file containing unvalidated saved bytes. Keep that file unchanged for repair or support; it is not a normal import file. Do not overwrite the original rescue file.

If browser storage is denied, keep the page open and export a file after meaningful changes. If a download cannot be saved, stop the game and use the instructor's manual ledger and classroom procedure; do not treat an unverified local snapshot as authoritative.

## Audit ledger capacity

The instructor save supports at most 210 audit entries, including voids. New results reserve one outcome for every remaining lot; voiding also reserves a recommit for the current lot. A capacity warning leaves the accepted result and team inventory unchanged. Export a backup and follow the facilitator recovery procedure before further correction. Do not truncate, rewrite or clear the ledger to bypass the warning. Existing valid schema-3 saves at the old bound remain readable, but cannot append beyond available capacity. This is a recovery/resource limit, not an extra bidding or spending rule. Actual browser/classroom handling of this boundary remains unaccepted.

## Start another session

After closing a session, use **Start a new session** in the Closed screen and confirm. The app requests a role-specific backup before returning to Setup. Check the browser downloads; **Restore previous backup** remains available in the same tab when browser storage permits. A new instructor session and a student's next companion session remain separate, and a student reset does not change the instructor ledger.

## Acceptance still required

This candidate flow has deterministic schema, handler and production save/restore/rescue boundary tests. The boundary tests preserve corrupt stored  bytes, model denied storage and verify instructor timer/privacy recovery; they do not prove real browser storage or completed downloads. It has not yet been accepted in supported browsers, local-file mode, offline mode, assistive technology, or a real classroom. Verify export and re-import at setup, auction, build, submission, debrief, and closed phases; corrupt/oversize/wrong-role/newer-schema files; denied/quota storage; cancellation and interrupted downloads; previous-session restore; open-timer pause; device handoff; and rollback before approving this guide for classroom use.

## Français

Ces instructions décrivent la version candidate. Les commandes d'exportation et d'importation doivent encore être validées dans les navigateurs et en classe avant que cette procédure puisse être approuvée. La révision linguistique française reste aussi à effectuer.

### Protéger les fichiers de chaque rôle

L'application de l'instructeur et le compagnon étudiant produisent des fichiers distincts. Une sauvegarde de l'instructeur contient l'ordre aléatoire des cartes, le registre complet de la classe et les soumissions des équipes. Gardez-la privée et limitez son accès au facilitateur qui en a besoin. Une sauvegarde étudiante contient le plan, les risques, les notes de disposition à payer et les achats locaux de cette équipe. Chaque équipe doit garder ses fichiers privés.

Utilisez uniquement des données fictives. Ne saisissez aucune information personnelle, protégée, classifiée, opérationnelle ou relative à un projet réel.

### Exporter pendant la séance

Sélectionnez **Exporter la sauvegarde** dans l'en-tête. L'application demande le téléchargement d'un fichier JSON. Vérifiez sa présence dans les téléchargements du navigateur et retrouvez le fichier enregistré avant de vous y fier. Une demande de téléchargement ne prouve pas que le fichier a été enregistré.

Exportez avant l'enchère réelle, après chaque ronde terminée, avant de changer d'appareil ou d'onglet et avant de fermer la séance. Conservez séparément les fichiers de l'instructeur et des équipes dans un emplacement privé. Le nom du fichier indique le rôle et la date, mais pas l'équipe ni la séance; ajoutez une étiquette seulement dans un emplacement privé si nécessaire.

Le stockage de séance dépend de l'onglet actuel. Il peut disparaître à sa fermeture, être bloqué par le navigateur ou ne pas suivre un changement d'appareil. Le fichier téléchargé constitue la copie portable. Le compagnon étudiant ne se synchronise pas avec l'instructeur.

### Importer une séance sauvegardée

Ouvrez l'application du rôle correspondant, sélectionnez **Importer une sauvegarde**, puis choisissez le fichier JSON exporté par ce rôle. Avant la confirmation, l'application vérifie la taille, le format, le rôle, l'identité de l'application, des règles et du jeu de cartes, le schéma et la cohérence de l'état. Un fichier rejeté ne remplace pas la séance active.

Une nouvelle sélection de fichier ou tentative de restauration de la sauvegarde précédente remplace toute lecture encore en cours. Si le jeu change pendant la lecture, l'importation signale ce changement : sélectionnez de nouveau le fichier lorsque vous êtes prêt. Une ancienne lecture ne peut pas remplacer une confirmation plus récente.

Lors du remplacement d'une séance active, l'application demande d'abord le téléchargement de la séance actuelle. Avant de confirmer, assurez-vous que ce fichier a été enregistré. Si une sauvegarde précédente est disponible dans le même onglet, **Restaurer la sauvegarde précédente** la valide et demande confirmation avant de la rétablir. Gardez l'onglet ouvert jusqu'à l'enregistrement d'une sauvegarde portable.

Un lot ouvert dans une sauvegarde de l'instructeur est importé en pause. Vérifiez la carte, le chronomètre, le registre et les annonces officielles ou notes manuelles avant de reprendre. La saisie privée des soumissions doit être rouverte volontairement; ne projetez pas cet écran privé. Les achats des étudiants restent des copies locales à réconcilier avec le registre officiel.

### Traiter un échec de récupération

Les deux applications limitent le texte JSON sauvegardé ou importé à 500 000 unités de code UTF-16 JavaScript. Les fichiers dépassant 1 500 000 octets UTF-8 sont refusés avant lecture. Respecter la limite en octets ne dispense pas des contrôles de longueur du texte, de rôle et de schéma. Ces limites distinctes permettent les notes échappées, les accents et le texte multilingue sans troncature et restent compatibles avec le schéma 3. Les ressources des appareils réels, le stockage et les téléchargements doivent encore être validés.

Si le fichier est trop volumineux, mal formé, destiné à l'autre rôle, incompatible avec le schéma ou associé à d'autres règles/cartes, conservez-le intact et utilisez la version correspondante. Ne modifiez pas le fichier et ne tentez pas de le convertir en place vers une version antérieure.

En présence de données stockées invalides, **Exporter la sauvegarde** peut produire un fichier de secours contenant les données brutes non validées. Conservez-le intact pour réparation ou assistance. Ce n'est pas un fichier d'importation normal; ne remplacez pas l'original.

Si le navigateur refuse le stockage, gardez la page ouverte et exportez après les changements importants. Si le téléchargement ne peut pas être enregistré, arrêtez le jeu et utilisez le registre manuel de l'instructeur et la procédure de secours de la classe. Une copie locale non vérifiée ne fait pas autorité.

### Respecter la capacité du registre

La sauvegarde de l'instructeur accepte au plus 210 entrées d'audit, annulations comprises. Tout nouveau résultat réserve une entrée pour chaque lot restant; une annulation réserve aussi la saisie d'un résultat de remplacement pour le lot actuel. Un avertissement de capacité laisse le résultat accepté et les achats inchangés. Exportez une sauvegarde et suivez la procédure de récupération avant toute nouvelle correction. Ne tronquez, ne réécrivez et n'effacez pas le registre pour contourner l'avertissement.

Les anciennes sauvegardes valides du schéma 3 à cette limite restent lisibles, mais aucune entrée ne peut être ajoutée au-delà de la capacité. Cette limite concerne la récupération et les ressources; elle n'ajoute pas de règle d'enchère ou de dépenses. Son utilisation réelle en navigateur et en classe reste à valider.

### Démarrer une autre séance

Après la clôture, sélectionnez **Nouvelle séance** et confirmez. L'application demande une sauvegarde du rôle avant de revenir à la configuration. Vérifiez les téléchargements; la restauration de la sauvegarde précédente reste disponible dans le même onglet lorsque le stockage le permet. La nouvelle séance de l'instructeur et celle du compagnon sont distinctes. La réinitialisation étudiante ne change pas le registre de l'instructeur.

### Vérifications avant approbation

Les tests locaux vérifient les schémas, commandes et limites de sauvegarde/restauration/secours. Ils préservent les données corrompues et modélisent le refus du stockage ainsi que la récupération du chronomètre et de la confidentialité. Ils ne prouvent pas l'enregistrement de fichiers ni le fonctionnement réel du stockage.

Avant l'approbation, vérifiez dans les deux langues et rôles : exportation et réimportation aux phases de configuration, enchère, construction, soumission, bilan et clôture; fichiers corrompus, trop volumineux, d'un autre rôle ou d'un schéma plus récent; stockage refusé ou saturé; annulation et interruption des téléchargements; restauration précédente; reprise en pause d'un lot ouvert; changement d'appareil et retour à une version compatible. Vérifiez les navigateurs/appareils prévus, l'ouverture locale, le mode hors ligne et les technologies d'assistance avec les utilisateurs de la classe.
