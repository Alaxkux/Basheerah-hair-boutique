// ══════════════════════════════════════════════
// SERVICE WORKER — Basheerah Hair Boutique
// Cache version: bump this string every time you
// deploy new code. E.g. 'bhb-v2', 'bhb-v3', etc.
// This forces the old cache to be deleted and the
// new files to be fetched fresh from the server.
// ══════════════════════════════════════════════
const CACHE = 'bhb-v2';

const ASSETS = ['/'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network-first: always try network, fall back to cache if offline
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});