import {mkdir,rm,cp} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const path of ['index.html','style.css','manifest.webmanifest','sw.js','src','assets'])await cp(path,'dist/'+path,{recursive:true});
console.log('Built static game to dist/');
