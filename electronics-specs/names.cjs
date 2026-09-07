// Erzeugt die Dateinamen der 50 Bilder aus den Slugs.
const fs = require('fs');
const all = JSON.parse(fs.readFileSync(__dirname + '/all-50.json', 'utf8'));
const names = all.map((t, i) => ({
  n: String(i + 1).padStart(2, '0'),
  slug: t.slug,
  file: String(i + 1).padStart(2, '0') + '-' + t.slug.replace(/^electronics-/, '') + '.webp',
  title: t.title
}));
fs.writeFileSync(__dirname + '/names.json', JSON.stringify(names, null, 2) + '\n');
console.log(names.length + ' Dateinamen');
console.log(names.slice(0, 3).map(x => x.file).join('\n'));
console.log('laengster Name:', Math.max(...names.map(x => x.file.length)));
