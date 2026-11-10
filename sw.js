/* Lilxbol service worker: cache-first app shell; API never cached */
const CACHE='lilxbol-v2';
self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    try{
      const c=await caches.open(CACHE);
      const [home,html] = await Promise.all([
        fetch('./').then(r=>r.ok?[r.url,r.clone()]:null).catch(()=>null),
        fetch('Lilxbol.html').then(r=>r.ok?[r.url,r.clone()]:null).catch(()=>null)
      ]);
      for(const pair of [home,html]) if(pair) await c.put(pair[0],pair[1]);
    }catch(e){}
    await self.skipWaiting();
  })());
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('message',e=>{
  if(e.data==='SKIP_WAITING')self.skipWaiting();
});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(url.pathname.startsWith('/api/'))return;
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(r=>{
      if(r.ok&&r.type==='basic'){
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy));
      }
      return r;
    }))
  );
});
