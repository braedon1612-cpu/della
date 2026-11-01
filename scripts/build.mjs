import {cp,mkdir,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist',{recursive:true});
for(const file of ['index.html','styles.css','corner.css','app.js','config.js','time.js','corner.js','storage.js','privacy.js','blessings.js','motion.js','public']) await cp(file,`dist/${file}`,{recursive:true});
console.log('Built successfully → dist (all paths are relative for GitHub Pages).');
