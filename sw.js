if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),c={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Home-1bc95420.css",revision:null},{url:"assets/Home-44893cca.js",revision:null},{url:"assets/index-056d0d40.js",revision:null},{url:"assets/index-8c4988c9.css",revision:null},{url:"assets/Main-cda4f9cf.js",revision:null},{url:"index.html",revision:"aa4813c18a4586fb35a55a81f044d2c8"},{url:"registerSW.js",revision:"708e48b802ba5d34ba934dbdf57afb76"},{url:"manifest.webmanifest",revision:"ef1695cc762b14fe086be79cdfc5699a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
