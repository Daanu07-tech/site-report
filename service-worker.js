self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("site-report-cache").then((cache) => {
      return cache.addAll([
        "/site-report/",
        "/site-report/index.html",
        "/site-report/report.html"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
