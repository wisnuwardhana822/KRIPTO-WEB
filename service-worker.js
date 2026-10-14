/* =====================================
   KRIPTO-WEB SERVICE WORKER
   OFFLINE ENGINE
===================================== */


const CACHE_NAME = "kripto-web-v1";


const FILES_TO_CACHE = [

"index.html",

"style.css",

"script.js",


"manifest.json",



"rot13.html",
"rot13.css",
"rot13.js",


"caesar.html",
"caesar.css",
"caesar.js",


"atbash.html",
"atbash.css",
"atbash.js",


"transposisi.html",
"transposisi.css",
"transposisi.js",


"vertikal.html",
"vertikal.css",
"vertikal.js",


"vigenere.html",
"vigenere.css",
"vigenere.js"

];







// INSTALL

self.addEventListener(
"install",
event=>{


event.waitUntil(


caches.open(
CACHE_NAME
)
.then(cache=>{


return cache.addAll(
FILES_TO_CACHE
);


})


);


});









// FETCH OFFLINE

self.addEventListener(
"fetch",
event=>{


event.respondWith(


caches.match(
event.request
)
.then(response=>{


return response ||

fetch(event.request);


})


);


});









// UPDATE CACHE

self.addEventListener(
"activate",
event=>{


event.waitUntil(


caches.keys()
.then(keys=>{


return Promise.all(


keys.map(key=>{


if(
key !== CACHE_NAME
){


return caches.delete(key);


}


})


);


})


);


});