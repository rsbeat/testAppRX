'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ba7cb19ee7d32c4c4d2e906504b2d50d",
"assets/AssetManifest.bin.json": "254cc7a263dbbba11e0800def72f48d7",
"assets/AssetManifest.json": "ff1fde0423fcf30c831940cd4ec7930f",
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
"assets/assets/Logo_Persian.png": "8580f2fcfe9c8993378b4f8e9bda9473",
"assets/assets/noise.png": "ec82a9714a5e2ab3e4968060f926be77",
"assets/FontManifest.json": "161a392a2b63ef5d715feef83a04c9c7",
"assets/fonts/Farsi%2520numerals/IRANYekanXFaNum-Regular.ttf": "d0ca4bc2d7ae466669c835504eb87f5c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "45502a9dac784ea82d87b2d77e6ce91f",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "571ca0a82e72ad4e2326f50747baa5e9",
"/": "571ca0a82e72ad4e2326f50747baa5e9",
"main.dart.js": "fd646ba5692d80ac8882757930d6f0cb",
"manifest.json": "4b69bdd468dd84cd49218170c513e435",
"version.json": "8f5f454ec0e368fb08d0f6ccce01830d"};
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
