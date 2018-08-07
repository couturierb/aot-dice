self.addEventListener('install', e => {
    e.waitUntil(
        caches
        .open('aot-dice')
        .then(cache => cache.addAll([
            '/',
            'index.html',
            'main.css',
            'main.js',
            'sw.js'
        ]))
        .then(() => self.skipWaiting())
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    )
  });