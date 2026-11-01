import {cp,mkdir,rm,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
await rm('dist',{recursive:true,force:true}); await mkdir('dist',{recursive:true});
for(const file of ['index.html','styles.css','corner.css','app.js','config.js','time.js','corner.js','storage.js','privacy.js','blessings.js','motion.js','public']) await cp(file,`dist/${file}`,{recursive:true});
// Version local CSS and module imports so updates reach visitors with cached assets.
const files=['index.html','styles.css','corner.css','app.js','config.js','time.js','corner.js','storage.js','privacy.js','blessings.js','motion.js'];
const contents=await Promise.all(files.map(f=>readFile(f,'utf8')));
const revision=createHash('sha256').update(contents.join('\n')).digest('hex').slice(0,12);
for(let i=0;i<files.length;i++){
 const versioned=contents[i].replace(/(["'])(\.?\/?[\w./-]+\.(?:js|css))\1/g,(match,quote,url)=>`${quote}${url}?v=${revision}${quote}`);
 await writeFile(`dist/${files[i]}`,versioned);
}
console.log('Built successfully → dist (all paths are relative for GitHub Pages).');
