// Baut index.html im Bildordner aus der Vorlage des Real-Estate-Werkzeugs.
const fs = require('fs');
const SRC = 'C:/Users/User/Downloads/Real-Estate/index.html';
const DIR = 'C:/Users/User/Downloads/Electronics';
const names = JSON.parse(fs.readFileSync(__dirname + '/names.json', 'utf8'));
const SUB = fs.existsSync(DIR + '/approved') ? DIR + '/approved' : DIR;
const present = fs.readdirSync(SUB).filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));
const prefix = SUB === DIR ? '' : 'approved/';
const files = names
  .map(n => { const f = present.find(f => f.startsWith(n.n + '-')); return f ? prefix + f : null; })
  .filter(Boolean);
let html = fs.readFileSync(SRC, 'utf8');
html = html.replace(/Real Estate — Image Review/g, 'Electronics — Image Review');
html = html.replace(/Real Estate — image review/g, 'Electronics — image review');
html = html.replace(/const FILES = \[[\s\S]*?\];/,
  'const FILES = [\n' + files.map(f => '  ' + JSON.stringify(f)).join(',\n') + '\n];');
html = html.replace(/"real-estate-review-v1"/g, '"electronics-review-v1"');
fs.writeFileSync(DIR + '/index.html', html);
console.log(files.length + ' Bilder im Werkzeug, fehlend: ' + (names.length - files.length));
