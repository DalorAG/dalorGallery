// node fetch.cjs urls.json
// urls.json: { "01": "https://...png", "02": "..." }
// Lädt die Bilder, wandelt sie nach webp und legt sie unter dem Namen aus
// names.json in C:\Users\User\Downloads\Home-Furniture ab.
const fs = require('fs');
const path = require('path');
const sharp = require('C:/Users/User/OneDrive/Desktop/dalor-gallery/node_modules/sharp');

const DIR = 'C:/Users/User/Downloads/Home-Furniture';
const names = JSON.parse(fs.readFileSync(__dirname + '/names.json', 'utf8'));
const byN = Object.fromEntries(names.map(x => [x.n, x]));
const urls = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

fs.mkdirSync(DIR, { recursive: true });

(async () => {
  for (const [n, url] of Object.entries(urls)) {
    const meta = byN[n];
    if (!meta) { console.log(n + ': kein Name gefunden'); continue; }
    const res = await fetch(url);
    if (!res.ok) { console.log(n + ': HTTP ' + res.status); continue; }
    const buf = Buffer.from(await res.arrayBuffer());
    const img = sharp(buf);
    const info = await img.metadata();
    const out = path.join(DIR, meta.file);
    await sharp(buf).webp({ quality: 88 }).toFile(out);
    const kb = Math.round(fs.statSync(out).size / 1024);
    console.log(n + '  ' + meta.file + '  ' + info.width + 'x' + info.height + '  ' + kb + ' KB');
  }
})();
