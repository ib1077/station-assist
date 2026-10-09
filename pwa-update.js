/* PWA lifecycle only. Phrase, speech and handwriting behavior are unchanged. */
(()=>{
  const button=document.getElementById('updateButton');
  const status=document.getElementById('updateStatus');
  let registration, busy=false, switching=false;
  const show=text=>{status.textContent=text;};
  const limit=(promise,ms)=>new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(Error('Timeout')),ms);
    promise.then(value=>{clearTimeout(timer);resolve(value);},error=>{clearTimeout(timer);reject(error);});
  });
  if(!('serviceWorker' in navigator) || !window.isSecureContext){
    button.disabled=true;
    button.title='PWAの保存・更新にはHTTPSで開いてください';
    return;
  }
  let controlled=!!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    // Reload existing tabs too, so HTML and phrase data remain one release.
    if(controlled || switching)location.reload();
    controlled=true;
  });
  const registered=()=>navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(r=>{registration=r;return r;});
  window.addEventListener('load',()=>{
    registered().then(r=>{
      const worker=r.installing;
      if(worker)worker.addEventListener('statechange',()=>{
        if(worker.state==='redundant' && !navigator.serviceWorker.controller)show('オフライン用データを保存できませんでした。通信を確認して更新してください。');
      });
    }).catch(()=>{
      if(!navigator.serviceWorker.controller)show('オフライン用データを保存できませんでした。オンラインで再度開いてください。');
    });
  });
  button.addEventListener('click',async()=>{
    if(busy)return;
    busy=true;button.disabled=true;show('更新を確認しています…');
    try{
      const r=registration || await limit(registered(),60000);
      // Always contact the server, even when a prepared worker is waiting.
      let candidate=r.installing;
      const found=()=>{candidate=r.installing;};
      r.addEventListener('updatefound',found);
      try{await limit(r.update(),60000);}finally{r.removeEventListener('updatefound',found);}
      if(candidate){
        show('新版を取得しています…');
        const worker=candidate;
        await limit(new Promise((resolve,reject)=>{
          const check=()=>{
            if(worker.state==='installed' || worker.state==='activated')resolve();
            else if(worker.state==='redundant')reject(Error('Installation failed'));
          };
          worker.addEventListener('statechange',check);check();
        }),120000);
      }
      if(r.waiting){
        show('保存が完了しました。再起動しています…');switching=true;
        const changed=new Promise(resolve=>navigator.serviceWorker.addEventListener('controllerchange',resolve,{once:true}));
        r.waiting.postMessage({type:'ACTIVATE'});
        await limit(changed,30000);
      }else{
        show('最新版です。再起動しています…');location.reload();
      }
    }catch(error){
      show('更新できませんでした。現在のバージョンを使用します');
      console.warn('STA update:',error);
    }finally{busy=false;switching=false;button.disabled=false;}
  });
})();
