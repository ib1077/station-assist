// node maintenance/release.cjs 0.2.3 — run after every change, before publishing.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dir=path.resolve(__dirname,'..'),version=process.argv[2];
if(!/^\d+\.\d+\.\d+$/.test(version||''))throw Error('Specify new release version');
const html=path.join(dir,'index.html');fs.writeFileSync(html,fs.readFileSync(html,'utf8').replace(/ver\.\d+\.\d+\.\d+/gi,m=>m.slice(0,4)+version));
const names=['index.html','pwa-update.js','phrases.js','manifest.json','icon192.png','icon512.png','route-map.png','language-guide.png'];
const hashes=Object.fromEntries(names.map(n=>['./'+n,crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,n))).digest('hex')]));
const sw=path.join(dir,'sw.js');fs.writeFileSync(sw,fs.readFileSync(sw,'utf8').replace(/^\/\/ Generated.*\n/,'// Generated release '+version+'\n').replace(/const VERSION="[^"]+";/,'const VERSION="'+version+'";').replace(/const ASSETS=[\s\S]*?;\n/,'const ASSETS='+JSON.stringify(hashes,null,2)+';\n'));
console.log('Generated release '+version+'. Publish all nine runtime files together.');
