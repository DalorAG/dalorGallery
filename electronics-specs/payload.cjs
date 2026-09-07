const fs=require('fs');
const all=JSON.parse(fs.readFileSync(__dirname+'/all-50.json','utf8'));
const names=JSON.parse(fs.readFileSync(__dirname+'/names.json','utf8'));
const dir='C:/Users/User/Downloads/Electronics';
const present=new Set(fs.readdirSync(dir).filter(f=>f.endsWith('.webp')));
const out=[];
all.forEach((t,i)=>{
  const n=names[i];
  if(!present.has(n.file)) return;
  out.push({
    n: n.n,
    file: n.file,
    body:{
      title: t.title,
      slug: t.slug,
      description: t.description,
      prompt: t.prompt,
      searchKeywords: t.searchKeywords,
      autoTranslate: true,
      coverFit: 'cover',
      sortOrder: i+1,
      inputFields: t.fields.map(f=>({
        key:f.key, label:f.label, inputType:f.inputType,
        placeholder:f.placeholder, required:f.required, autoTranslate:true
      }))
    }
  });
});
const SP='C:/Users/User/AppData/Local/Temp/claude/C--Users-User-OneDrive-Desktop-dalor-gallery/253f3d07-291b-4177-b3ad-61155c21ba31/scratchpad';
fs.writeFileSync(SP+'/el-payload.txt', JSON.stringify(out));
console.log(out.length+' Eintraege, '+Math.round(fs.statSync(SP+'/el-payload.txt').size/1024)+' KB');
