if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),c={module:{uri:t},exports:l,require:o};s[t]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Home-1bc95420.css",revision:null},{url:"assets/Home-9c53c398.js",revision:null},{url:"assets/index-9f6ca1af.css",revision:null},{url:"assets/index-a9d3fc07.js",revision:null},{url:"assets/Main-999a67d3.js",revision:null},{url:"index.html",revision:"e979514c94a3916a885e689d885eb4cc"},{url:"registerSW.js",revision:"708e48b802ba5d34ba934dbdf57afb76"},{url:"manifest.webmanifest",revision:"ef1695cc762b14fe086be79cdfc5699a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
