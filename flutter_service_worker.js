'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6528d58b38cfe13f20c9117aea87ef23",
"assets/AssetManifest.json": "e27a99c0f352152870bbfd34a50c7498",
"assets/assets/FONT/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/IMG/A.jpg": "18f76becb1461b032da00e17114b1ee8",
"assets/assets/IMG/A.png": "e656707e726ba2667f35528657d435b8",
"assets/assets/IMG/ajivika.png": "a7ff4d3145b9a34916b648c0e01f9507",
"assets/assets/IMG/CIVIL.png": "ddfd6177c48ea4362216bd0c7226ad4d",
"assets/assets/IMG/CM.png": "6f7c3950f1250b0fd8fb56f1cd957954",
"assets/assets/IMG/college.png": "b5d00e6ab7cd8bdb95e5c6d9ed94a2f0",
"assets/assets/IMG/CSE.png": "e40e1e7cae847138c0a5e5e187e35668",
"assets/assets/IMG/DD.png": "48b85d87752c1346f80aa5048562c4f0",
"assets/assets/IMG/DEPT.png": "ae8cfa5dd082e79dc031b527774e179f",
"assets/assets/IMG/DR.png": "ad7abedbbe73aad62a21de906cf789c3",
"assets/assets/IMG/ecee.png": "36ae79d642a08b2dc403bca834efa287",
"assets/assets/IMG/EEE.png": "879077c121322a8a876bfa8eee33f217",
"assets/assets/IMG/insidee.png": "97ec4680ad28a96727039be8c00b2918",
"assets/assets/IMG/INTERN.png": "e6b72ac9dba4c16882b5694bbcfb16f0",
"assets/assets/IMG/itt.png": "3e87d2cca1c3ee8419e4953b9eda7ade",
"assets/assets/IMG/mechh.png": "086c22e1b698454ad2aa64525c76a9e1",
"assets/assets/IMG/OC.png": "2f1d164a411b8cb74bda11a05c7ae94b",
"assets/assets/IMG/PM.png": "4170580ee1813d08c20ab6664af95687",
"assets/assets/IMG/PRINCE.jpg": "2c06a525a2b2f3a92edc8716e8aacad7",
"assets/assets/IMG/PS.png": "84a544ce80caace0506ddbb0a3e2f6ab",
"assets/assets/IMG/SAR.png": "a7a586ae4f3c3c5ed23128ad1fe1cd1f",
"assets/assets/IMG/T-news.png": "bee67ace4a06e5a623e3e38e15f91d6d",
"assets/assets/IMG/T.png": "b2312e6c30143a57a6b0a939679ed7b9",
"assets/assets/IMG/TC.png": "dba0b30c1247eb0ce180834abcf7862b",
"assets/assets/IMG/THB.png": "2be914b0050aebf1f81d1f1cef7cf03e",
"assets/assets/PDF/CE_DEPT.pdf": "89ea5e50ced43efe8549c090788e32a9",
"assets/assets/PDF/CE_SAR.pdf": "7adee07e5b92b33f33e1420f7818e597",
"assets/assets/PDF/CSE_DEPT.pdf": "e85ffac59ef0c495d796adb74344b83b",
"assets/assets/PDF/CSE_SAR.pdf": "71df5ddbed9e68b60fe3c2a901f08b37",
"assets/assets/PDF/ECE_DEPT.pdf": "00c204319f52e2bfbc8f64bf1ce874dd",
"assets/assets/PDF/ECE_SAR.pdf": "717e3f9dab60cae3a571494a5d3b8e59",
"assets/assets/PDF/EEE_DEPT.pdf": "22493f431d68d17bc90ba7a88ab34be8",
"assets/assets/PDF/EEE_SAR.pdf": "50c763c88e9524a677e5561752d97988",
"assets/assets/PDF/IT_DEPT.pdf": "68bda5c813c8d448c97ca1484f3193ee",
"assets/assets/PDF/IT_SAR.pdf": "51656e1950e48d55bcf5042ab74d11f3",
"assets/assets/PDF/ME_DEPT.pdf": "0b1307dfc414f76402d90eea44e9f3bf",
"assets/assets/PDF/ME_SAR.pdf": "65e2bc860677d7f89eb7fa632093952f",
"assets/assets/PDF/PRINCI.pdf": "86fcbf263e46e9ea5de56d0d537f65b7",
"assets/assets/Team/ARAVIND.png": "7d70885f5ab13ba8d53bde5f8f002150",
"assets/assets/Team/ARJUN.png": "5272d044a776dabae74b8d245ce931b4",
"assets/assets/Team/ASHOK-M.png": "7d8fbb00795c614f5e30765eefedd1c7",
"assets/assets/Team/ASHOK-SIRIKI.png": "2d9fb8be93bea0dcf9a117cfb1a0abe6",
"assets/assets/Team/BABJI.png": "db6fd2b341bccd311d5dee6fdb9607f3",
"assets/assets/Team/BHARATH.png": "4d609d66f401905645b8f5ee3a2bb751",
"assets/assets/Team/BHUPATHI.png": "c2101c7edd42a5dd9b8f93a43ef672c9",
"assets/assets/Team/BOBBY-KIRAN.png": "3b5f74091353580575b44704012fbdba",
"assets/assets/Team/BOBBY.png": "bc8386016a0f29c1c46ad0d78ba7cbb4",
"assets/assets/Team/DIRGA%2520PRASAD.webp": "4a223173ed5468f64f980dad0aca6df2",
"assets/assets/Team/DIVYA.png": "f7b2a7f8e056616597c14510c2b65a65",
"assets/assets/Team/GANAPATHI.png": "c3579fc8e31675c24bbbba2a7a9892c1",
"assets/assets/Team/GIRISH.png": "4a8d179bfb8dfe9b0cfd2c7776aebbdc",
"assets/assets/Team/HANUMANTH.webp": "dc1b8c6358a266594e22ba373006d8a8",
"assets/assets/Team/JDP.png": "2a0e3987bb640cfbfe3645ee7649eeda",
"assets/assets/Team/KIJSHORE.webp": "fbe58b61e49960e3045455422cd92142",
"assets/assets/Team/KIRAN-KUMAR.png": "a9afa8eaab4188c485b80755b31a9e77",
"assets/assets/Team/KIRAN.png": "e3e8ae10e08922700a6b418099067286",
"assets/assets/Team/krishna.webp": "d6ae5dd488b34ba38b095df3d5bc9642",
"assets/assets/Team/LOVA-RAJU.png": "931f81dc7f43db35b64eb0eb1d3e8fa2",
"assets/assets/Team/M-RAJESH.png": "f2e8c844eb303793a2a209d101e01d49",
"assets/assets/Team/MUTYALA-BABU.png": "6741482449150928a7193dbbadd3898a",
"assets/assets/Team/NANI.webp": "5d1a6f249ea29e76763e7a7012a29de0",
"assets/assets/Team/NARASIMHA.png": "2c3f9955b6f341404bf61a6ad0c38ef1",
"assets/assets/Team/NAVEEN.png": "b700a8f850b7408ab1defd9adda85e17",
"assets/assets/Team/NDP.png": "fdd94eb30c0a0e52c3d5290540023dae",
"assets/assets/Team/PAVAN-TEJA.png": "b677991bf4f0c821ae4c9200f222f240",
"assets/assets/Team/PAVAN.png": "836ebed6d07712476197a25a32be8c8a",
"assets/assets/Team/PETER.png": "7207f45f474d581edc31ba053209528b",
"assets/assets/Team/PRAKASH.png": "dbbf8a460b305b769d7fbd67390a4981",
"assets/assets/Team/PRASANTH.png": "ad07813f1e3616a59e18183a167e1862",
"assets/assets/Team/RAJA-CHOWDARI.png": "ef06e8e3c34b29a139eb5735d776a2bb",
"assets/assets/Team/RAJESH-B.png": "6963fa95872f946b0ed72438a425db3c",
"assets/assets/Team/RAMBABU.png": "21271c65bdef3ea53906d4a29fafc2cf",
"assets/assets/Team/RENUKA.png": "2e562a8cfc5ec9c2faec210d1d358a80",
"assets/assets/Team/SAI-KIRAN.png": "e2085abae393e26a01ef482d65a9eb99",
"assets/assets/Team/SAI-KUMAR.png": "4dbdf86591ff7974d2b6918f9519ea01",
"assets/assets/Team/SAI-TEJA.png": "6fae55dff2eb82d55815089770b3c9c3",
"assets/assets/Team/SAMULE.png": "85eca33da2f49931923bb4cb930105b7",
"assets/assets/Team/SATHISH.png": "3207e3d27e7e97ddbde8bf034cfcdbaa",
"assets/assets/Team/SATISH.png": "ba7c747e773b3a3df84857af94a73493",
"assets/assets/Team/SDP.png": "2a84729f8a651151a6aa43e2bf011213",
"assets/assets/Team/SHAIFU.png": "8062131e84e11f9a4b95bf56d944af88",
"assets/assets/Team/SIDIK.png": "bc01349caae50e95edf6c8feadaaf2c6",
"assets/assets/Team/SIMHADRI.png": "e192ee3db6183829ab59543944d2ccf8",
"assets/assets/Team/SIVA.png": "186fefeb01df7b333ec14cad0ed3e40f",
"assets/assets/Team/SRINU.png": "eb55510b12a74cdb6e2273ac936db1fd",
"assets/assets/Team/SUDHIR.png": "862bd41e7fe7f997fb5839a5e3a46cd6",
"assets/assets/Team/SUNEEL.png": "3e3cfa414069ebd17eedf3ad5cfcd424",
"assets/assets/Team/VARDINI.png": "61bb035b3dc76c7628ad30db33c77264",
"assets/assets/Team/VASANTH.webp": "8bd2c2f53e14db9e67123fee306a7aef",
"assets/assets/Team/VEERABABU.png": "3d11323bdd81d01e701a2b26d9efdb8e",
"assets/assets/Team/VIJAY.png": "e8602068b4707eb3dcda75bb082d0fb7",
"assets/assets/VID/AV.mp4": "0267bf35e6ed7c82b2300f1b844c9628",
"assets/assets/VID/CV.mp4": "9c1cbd9ed016c3ab8613d6468e4cef30",
"assets/assets/VID/DRV.mp4": "671f2c999cbcee9fd93872a73ff171b2",
"assets/assets/VID/inside.mp4": "b1a5128c6e7c9f94dfb39caade1fefd8",
"assets/assets/VID/IV.mp4": "97159da3649995d6fa49d2a74e1e08c5",
"assets/assets/VID/OV.mp4": "e20157fe7f4f260d22b30d82a0a0bfd2",
"assets/assets/VID/PSV.mp4": "8876e2a7352787956788c0ae8523efc5",
"assets/assets/VID/T-news.mp4": "5edc2942d2ff7a745122b87b70df7a90",
"assets/assets/VID/TTV.mp4": "ea8114416daae909a70fadcfe2032e6f",
"assets/assets/VID/TV.mp4": "eca9ef40f627c6c4c69379798d0ea315",
"assets/assets/VID/video.mp4": "2abbc148c4aca38f30bfb2603c59ffb1",
"assets/FontManifest.json": "9e5fc1f107aa2acd53fdc3263643a773",
"assets/fonts/MaterialIcons-Regular.otf": "01943c0591938c8559501ade7b1f2d1b",
"assets/NOTICES": "b96de8bea178d64bf0a37afd76a4f587",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11c00cb70f7edda347ac88067a4f4978",
"/": "11c00cb70f7edda347ac88067a4f4978",
"main.dart.js": "ce00ebb7fb12b4359abd7d1f02f23850",
"manifest.json": "01c44e275959636eef33eb04156c756c",
"version.json": "e5e66b20fd5c0c0977515ce006164d6a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
