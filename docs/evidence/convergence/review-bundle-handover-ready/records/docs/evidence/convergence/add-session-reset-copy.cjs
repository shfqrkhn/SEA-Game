const fs = require('node:fs');
const additions = [
  '"closed.newSession":"Start a new session","closed.newConfirm":"Start a new session? A backup download will be requested before this session is cleared. Check browser downloads; Restore previous backup remains available in this tab."',
  '"closed.newSession":"Nouvelle séance","closed.newConfirm":"Démarrer une nouvelle séance? Une sauvegarde sera demandée avant l’effacement. Vérifiez les téléchargements; Restaurer la sauvegarde précédente reste disponible dans cet onglet."',
];
for (const file of ['source/instructor.js', 'source/student.js']) {
  let locale = 0;
  const source = fs.readFileSync(file, 'utf8');
  const updated = source.replace(/("closed\.note":"(?:\\.|[^"\\])*")/g, match => match + ',' + additions[locale++]);
  if (locale !== 2) throw new Error(`${file}: expected two locale anchors, found ${locale}`);
  fs.writeFileSync(file, updated, 'utf8');
}
