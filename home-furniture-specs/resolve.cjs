// Führt die fünf Spezifikationsdateien zusammen und löst alle Platzhalter
// mit ihren Vorbelegungen auf, damit die Prompts direkt erzeugt werden können.
const fs = require('fs');
const files = ['01-10.json', '11-20.json', '21-30.json', '31-40.json', '41-50.json'];
const all = files.flatMap(f => JSON.parse(fs.readFileSync(__dirname + '/' + f, 'utf8')));
fs.writeFileSync(__dirname + '/all-50.json', JSON.stringify(all, null, 2) + '\n');

const names = all.map((t, i) => ({
  n: String(i + 1).padStart(2, '0'),
  slug: t.slug,
  file: String(i + 1).padStart(2, '0') + '-' + t.slug.replace(/^home-furniture-/, '') + '.webp',
  title: t.title
}));
fs.writeFileSync(__dirname + '/names.json', JSON.stringify(names, null, 2) + '\n');

const txt = [];
const oneline = {};
all.forEach((t, i) => {
  const n = names[i].n;
  const map = {};
  t.fields.forEach(f => map[f.key] = f.placeholder);
  const p = t.prompt.replace(/\{\{(\w+)\}\}/g, (m, k) => map[k] !== undefined ? map[k] : m);
  txt.push('### ' + n + ' ' + t.slug + '\n' + p + '\n');
  oneline[n] = p;
});
fs.writeFileSync(__dirname + '/meta-prompts.txt', txt.join('\n'));
fs.writeFileSync(__dirname + '/meta-oneline.json', JSON.stringify(oneline, null, 1) + '\n');

const rest = txt.join('').match(/\{\{\w+\}\}/g);
console.log(all.length + ' Vorlagen, ' + new Set(all.map(t => t.prompt)).size + ' verschiedene Prompts');
console.log('unaufgeloeste Platzhalter: ' + (rest ? rest.length : 0));
console.log('laengster Dateiname: ' + Math.max(...names.map(x => x.file.length)));
