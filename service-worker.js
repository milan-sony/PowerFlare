const CACHE_NAME = 'powerflare-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './assets/android-chrome-512x512.png',
    './assets/android-chrome-192x192.png',
    './assets/favicon-16x16.png',
    // Add other assets you want to cache
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
