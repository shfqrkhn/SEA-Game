# Recovery guide / Guide de récupération

[English](#english) · [Français](#français)

## English

### How saving works

- The game saves automatically **in the current browser tab** after every change. Reloading the tab keeps your game.
- Closing the tab, using a private window, or moving to another device can lose that copy. A downloaded **backup file** is the portable copy: **Menu → Export backup**.
- A backup holds only your role's data. A student backup never contains other teams' work or the instructor's lot order.
- Backups are plain JSON files of at most 1.5 MB. Do not edit them: an edited file is refused.

### Common situations

| Situation | What to do |
|---|---|
| "This browser tab cannot save automatically" | The browser blocks storage (private mode or a policy). Keep playing, and export a backup after every important change. |
| The tab was closed or the device changed | Open the game in the same role, then **Menu → Import backup** and choose the latest backup. Check the summary, then **Replace with backup**. |
| Imported the wrong file | Use **Undo import** before doing anything else. |
| "The saved game in this tab could not be read" | The game started empty and kept the unreadable data. Use **Download unreadable data** to keep it, then import your latest backup. |
| The browser refuses the download | The game shows the backup text instead. Select all of it and save it in a file ending in `.json`. |
| An import is refused | The message says why: wrong role, unreadable file, other version, or too large. Nothing in the current game changed. |
| The instructor's backup was taken during an open lot | After import the lot is **paused for review**. Check the leader and price, then **Resume**. |
| A student's records differ from the instructor's | In the Build step, remove mistaken entries and add missing purchases. The instructor's results are official. |

If nothing works, the instructor's spoken announcements and the results table remain the official record: continue on paper and re-enter later.

## Français

### Fonctionnement de la sauvegarde

- Le jeu sauvegarde automatiquement **dans l’onglet du navigateur** après chaque changement. Recharger l’onglet conserve la partie.
- Fermer l’onglet, utiliser une fenêtre privée ou changer d’appareil peut faire perdre cette copie. Le **fichier de sauvegarde** téléchargé est la copie portable : **Menu → Exporter une sauvegarde**.
- Une sauvegarde ne contient que les données de votre rôle. Celle d’une équipe ne contient jamais le travail des autres équipes ni l’ordre des lots de l’instructeur.
- Les sauvegardes sont des fichiers JSON de 1,5 Mo au plus. Ne les modifiez pas : un fichier modifié est refusé.

### Situations courantes

| Situation | Que faire |
|---|---|
| « Cet onglet ne peut pas sauvegarder automatiquement » | Le navigateur bloque le stockage (mode privé ou règle). Continuez et exportez une sauvegarde après chaque changement important. |
| L’onglet a été fermé ou l’appareil a changé | Ouvrez le jeu dans le même rôle, puis **Menu → Importer une sauvegarde** et choisissez la plus récente. Vérifiez le résumé, puis **Remplacer par la sauvegarde**. |
| Mauvais fichier importé | Utilisez **Annuler l’importation** avant toute autre action. |
| « La partie sauvegardée dans cet onglet est illisible » | Le jeu a démarré à vide et a conservé les données illisibles. Utilisez **Télécharger les données illisibles**, puis importez votre dernière sauvegarde. |
| Le navigateur refuse le téléchargement | Le jeu affiche le texte de la sauvegarde. Sélectionnez-le en entier et enregistrez-le dans un fichier terminé par `.json`. |
| Une importation est refusée | Le message indique pourquoi : mauvais rôle, fichier illisible, autre version ou fichier trop volumineux. La partie en cours n’a pas changé. |
| La sauvegarde de l’instructeur a été faite pendant un lot ouvert | Après l’importation, le lot est **mis en pause pour vérification**. Vérifiez l’équipe en tête et le prix, puis **Reprendre**. |
| Les registres d’une équipe diffèrent de ceux de l’instructeur | À l’étape Construction, retirez les erreurs et ajoutez les achats manquants. Les résultats de l’instructeur font foi. |

Si rien ne fonctionne, les annonces de l’instructeur et le tableau des résultats restent le registre officiel : continuez sur papier et saisissez plus tard.
