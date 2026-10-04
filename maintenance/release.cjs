// Run after every release edit: node maintenance/release.cjs 0.2.2
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dir=path.resolve(__dirname,'..'),version=process.argv[2];
if(!/^\d+\.\d+\.\d+$/.test(version||''))throw Error('Specify a new release version, for example 0.2.2');
const htmlPath=path.join(dir,'index.html');
let html=fs.readFileSync(htmlPath,'utf8').replace(/ver\.\d+\.\d+\.\d+/gi,m=>m.slice(0,4)+version);
fs.writeFileSync(htmlPath,html);
const files=['index.html','pwa-update.js','phrases.js','manifest.json','icon192.png','icon512.png','route-map.png','language-guide.png'];
const hashes=Object.fromEntries(files.map(f=>['./'+f,crypto.createHash('sha256').update(fs.readFileSync(path.join(dir,f))).digest('hex')]));
const swPath=path.join(dir,'sw.js');
let sw=fs.readFileSync(swPath,'utf8').replace(/^\/\/ Generated.*\n/,'// Generated release '+version+'\n').replace(/const VERSION="[^"]+";/,'const VERSION="'+version+'";').replace(/const ASSETS=[\s\S]*?;\n/,'const ASSETS='+JSON.stringify(hashes,null,2)+';\n');
fs.writeFileSync(swPath,sw);
console.log('Release '+version+' ready. Publish all nine runtime files together.');
