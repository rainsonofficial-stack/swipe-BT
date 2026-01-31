self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('aod-store').then((cache) => cache.addAll([
      './index.html',
      './manifest.json',
      './icon-192.png', // Add this
      './icon-512.png'  // Add this
    ]))
  );
});
// ... rest of the file stays the same
