!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=["/service-worker-index.html","/CNAME","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json"].filter((function(e,t,n){return"/CNAME"!==e})),o=["/client/1a7995d9ba835edd2e10b82db7371a3f.jpg","/client/ba7a2bfc722b4eb6936b/about.0.js","/client/ba7a2bfc722b4eb6936b/blog.1.js","/client/ba7a2bfc722b4eb6936b/blog_$slug.2.js","/client/ba7a2bfc722b4eb6936b/index.3.js","/client/ba7a2bfc722b4eb6936b/main.js"].concat(a),r=new Set(o);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1602942909911").then(e=>e.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1602942909911"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,o=t.host===self.location.host&&r.has(t.pathname),c="only-if-cached"===e.request.cache&&!o;!n||a||c||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1602942909911");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const a=await t.match(e);if(a)return a;throw n}}(e.request))())})}]);