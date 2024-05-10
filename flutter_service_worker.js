'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9df7a99eebb1a271a1dfe518a8b19f96",
"assets/AssetManifest.bin.json": "7a7f6925ec7212b3ba709880fd949827",
"assets/AssetManifest.json": "3d109d200dbdd51f4f3db9c7fa50a2b9",
"assets/assets/AppLogo.png": "31664c0ac1bdb990cc9345c7e65c118b",
"assets/assets/app_logo_login.png": "f89f0d47cbed506ea3492b32d805dcfc",
"assets/assets/icons/icon_Alert.svg": "e14dbf8ae5c120460045e3478f48fc91",
"assets/assets/icons/icon_arrow-right.svg": "2fc65886d2ab7eba709e8f7c12d50097",
"assets/assets/icons/icon_avatar.svg": "0cd05a361e9bd4c3d13dbfb5c591cfa6",
"assets/assets/icons/icon_chevron-down.svg": "fcbbb99d2406eef51ea1eb790aad25df",
"assets/assets/icons/icon_chevron-left.svg": "d2d4eac9819d3b403814f4414cb498af",
"assets/assets/icons/icon_chevron-right.svg": "63ba5c18ed081109c534d7052f948ebc",
"assets/assets/icons/icon_clear_button.png": "0de3578ad2cec51634bdf03f898decdd",
"assets/assets/icons/icon_clipboard.svg": "a6998e6edf914fb8696f128fcdb0e83e",
"assets/assets/icons/icon_Drawer.svg": "d84b6705b4bbaf29b447e4c76c4a4abe",
"assets/assets/icons/icon_edit.svg": "748ed2b7deac29e243093d10e76ca3a8",
"assets/assets/icons/icon_Error_Circle.png": "840ba1665aceea1acbca23d8b98ae50e",
"assets/assets/icons/icon_eye.png": "ad722b71c22f495f478ef4b0534436af",
"assets/assets/icons/icon_eye_off.png": "f60653afd9093adcc94661b876234669",
"assets/assets/icons/icon_Flag_IR.svg": "f97bf869b99c5c5dfb3db545c54e99b9",
"assets/assets/icons/icon_Grid.svg": "842fc13367d9c68fcc2be6a9fbe5992d",
"assets/assets/icons/icon_Home.svg": "fe1535771cabd038bacab2331aa2b874",
"assets/assets/icons/icon_id.svg": "5deb7909d4465b32de87ba5742ef24f2",
"assets/assets/icons/icon_inbox.svg": "1ad7c441f09f506617e17aad15d5012a",
"assets/assets/icons/icon_list_check.svg": "cc1961609d502e4b9778a03d79fd3345",
"assets/assets/icons/icon_Location.svg": "bd14bf07871d26f6dc8ab134a6d00cdf",
"assets/assets/icons/icon_map_2.svg": "94fb0636b616c06090dee5ed1a5ce2b7",
"assets/assets/icons/icon_MoreHorizontal.svg": "9fd08bbd9f07c3052b13cc9484f5353a",
"assets/assets/icons/icon_NotepadPerson.svg": "1d62734ecfc7bda51cd48dccc71cebc7",
"assets/assets/icons/icon_person.svg": "96014efdd46ed773e1f71cd4d7cb87b6",
"assets/assets/icons/icon_phone.svg": "1137b2b91b2a18d0d89a830c36361ce7",
"assets/assets/icons/icon_plus.svg": "7469a8d36928da5978a5e3b896f9546c",
"assets/assets/icons/icon_Question_Circle.png": "52d8e5ad49585c31cc52869b2f0da7cb",
"assets/assets/icons/icon_Question_Circle.svg": "7e006ec44ce3252d3a8ad488f733d54c",
"assets/assets/icons/icon_settings.svg": "88fd291d28b9e18ce71b35abc011a769",
"assets/assets/logo.png": "34923f8510fd02ca5cdb1d4cf0f12a87",
"assets/assets/logo.svg": "34923f8510fd02ca5cdb1d4cf0f12a87",
"assets/assets/Logo_Persian.png": "a8eaedf3743a59eb19b8f08291d22c81",
"assets/assets/Logo_Persian_svg.svg": "7f9ef894ac3465d2bda99d7108adf182",
"assets/assets/noise.png": "ec82a9714a5e2ab3e4968060f926be77",
"assets/FontManifest.json": "161a392a2b63ef5d715feef83a04c9c7",
"assets/fonts/Farsi%2520numerals/IRANYekanXFaNum-Regular.ttf": "d0ca4bc2d7ae466669c835504eb87f5c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9ff8f5f0b9d2a7fb5aeb409501d0cdac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c7a897523370560e0143a8f89f1fa677",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "173ad5e6f8b6ee5839aa80d229b7d1f6",
"icons/Icon-512.png": "66d0cb9e55d68b82453a91edb1018eb0",
"icons/Icon-maskable-192.png": "173ad5e6f8b6ee5839aa80d229b7d1f6",
"icons/Icon-maskable-512.png": "66d0cb9e55d68b82453a91edb1018eb0",
"index.html": "6ea909590e402a21cc9bac68e26ff7a9",
"/": "6ea909590e402a21cc9bac68e26ff7a9",
"main.dart.js": "c5eaf266cd5d22cf0aadc9c904e67556",
"manifest.json": "0aaf51c7204e0ab1649fd889cd86d09b",
"version.json": "27bb54d1f62ac668b73597720a3ea839"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
