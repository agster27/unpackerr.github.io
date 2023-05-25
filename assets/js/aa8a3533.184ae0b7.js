"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"faq",title:"FAQs",pagination_prev:"unpackerr/introduction",pagination_next:"unpackerr/troubleshooting"},i=void 0,s={unversionedId:"unpackerr/faq",id:"unpackerr/faq",title:"FAQs",description:"What is a starr app?",source:"@site/docs/unpackerr/faq.md",sourceDirName:"unpackerr",slug:"/unpackerr/faq",permalink:"/docs/unpackerr/faq",draft:!1,tags:[],version:"current",frontMatter:{id:"faq",title:"FAQs",pagination_prev:"unpackerr/introduction",pagination_next:"unpackerr/troubleshooting"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/unpackerr/introduction"},next:{title:"Tips & Tricks",permalink:"/docs/unpackerr/troubleshooting"}},p={},c=[{value:"What is a starr app?",id:"what-is-a-starr-app",level:2},{value:"Why does Unpackerr show things I do not see in my starr app?",id:"why-does-unpackerr-show-things-i-do-not-see-in-my-starr-app",level:2},{value:"Do This",id:"do-this",level:4},{value:"What do I do with unknown items?",id:"what-do-i-do-with-unknown-items",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-starr-app"},"What is a starr app?"),(0,o.kt)("p",null,"Lidarr, Prowlarr, Radarr, Readarr, Sonarr"),(0,o.kt)("h2",{id:"why-does-unpackerr-show-things-i-do-not-see-in-my-starr-app"},"Why does Unpackerr show things I do not see in my starr app?"),(0,o.kt)("p",null,"Unpackerr uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown")," item flag when requesting the queue. "),(0,o.kt)("p",null,"Recently, starr apps do show unknown items by default. However, your installation may have shown unknown items disabled. "),(0,o.kt)("h4",{id:"do-this"},"Do This"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go into each of your starr apps"),(0,o.kt)("li",{parentName:"ol"},"Navigate to the ",(0,o.kt)("strong",{parentName:"li"},"Activity Queue")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Options")," in the top right"),(0,o.kt)("li",{parentName:"ol"},"Check the box to enable ",(0,o.kt)("strong",{parentName:"li"},"Show Unknown Items"),".")),(0,o.kt)("h2",{id:"what-do-i-do-with-unknown-items"},"What do I do with unknown items?"),(0,o.kt)("p",null,"These items are often caused by having incorrect or an absence of categories (or labels/tags depending on your download client). Make sure you configure categories in each starr app. Once those are configured, you should import or force-remove the unknown items to make them go away. Another common problem is the starr apps are unable to match the download to a know media type (book/movie/tv series/episode/song/etc.)"))}d.isMDXComponent=!0}}]);