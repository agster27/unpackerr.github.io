"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[267],{9912:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(4848),o=t(8453);const i={id:"choosemethod",title:"Choose Install Method",pagination_prev:"introduction",pagination_next:null,description:"Choose an Unpackerr install method."},r=void 0,l={id:"install/choosemethod",title:"Choose Install Method",description:"Choose an Unpackerr install method.",source:"@site/docs/install/choosemethod.md",sourceDirName:"install",slug:"/install/choosemethod",permalink:"/docs/install/choosemethod",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"choosemethod",title:"Choose Install Method",pagination_prev:"introduction",pagination_next:null,description:"Choose an Unpackerr install method."},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"}},a={},c=[{value:"Instructions Available",id:"instructions-available",level:2},{value:"Other Guides",id:"other-guides",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"It's generally recommended to install Unpackerr the same way you installed your\nStarr or download apps. If your existing infrastructure exists in Docker, then\nUnpackerr should probably live in Docker too."}),"\n",(0,s.jsxs)(n.p,{children:["If you're using the ",(0,s.jsx)(n.strong,{children:"Folder Watch"})," feature, then we recommend installing\nUnpackerr native (not Docker) on the server where the files-to-be-extracted\nreside."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Docker Folder Watcher",type:"caution",children:[(0,s.jsxs)(n.p,{children:["The Folder Watch feature uses ",(0,s.jsx)(n.code,{children:"inotify"})," (a.k.a. ",(0,s.jsx)(n.code,{children:"fsnotify"}),") to identify\nchanges to the folder. A folder-poller is automatically started when run in\nDocker because ",(0,s.jsx)(n.code,{children:"inotify"})," is unreliable."]}),(0,s.jsxs)(n.p,{children:["Watching folders in Docker will cause Unpackerr to constantly poll the\nwatched-folder for changes. Unpackerr cannot determine when a download is\nfinished downloading while running in Docker because ",(0,s.jsx)(n.code,{children:"inotify"})," is not reliable.\nMake sure to set the ",(0,s.jsx)(n.code,{children:"start_delay"})," high enough to avoid beginning extractions\nwhile files are still being downloaded."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Alternatively, run Unpackerr as a native service instead of in Docker."})})]}),"\n",(0,s.jsx)(n.h2,{id:"instructions-available",children:"Instructions Available"}),"\n",(0,s.jsx)(n.admonition,{title:"CPU Hog",type:"tip",children:(0,s.jsx)(n.p,{children:"Unpackerr uses a lot CPU, and tends not to work well when running on smaller systems like Synology NAS devices.\nRunning Unpackerr on a system with a large CPU is ideal to avoid system performance degradation."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/install/docker",children:"Docker"}),": ",(0,s.jsx)(n.a,{href:"/docs/install/compose",children:"Compose"}),", ",(0,s.jsx)(n.a,{href:"/docs/install/unraid",children:"unRAID"}),",\n",(0,s.jsx)(n.a,{href:"/docs/install/truenas-scale",children:"TrueNAS Scale"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/install/freebsd",children:"FreeBSD"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/install/linux",children:"Linux: with root"}),", ",(0,s.jsx)(n.a,{href:"/docs/install/seedbox",children:"without root (seedbox)"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/install/macos",children:"macOS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/install/windows",children:"Windows"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"other-guides",children:"Other Guides"}),"\n",(0,s.jsx)(n.p,{children:"These guides are provided by community members."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Synology: ",(0,s.jsx)(n.a,{href:"https://drfrankenstein.co.uk/2022/07/02/unpackerr-in-docker-on-a-synology-nas/",children:"https://drfrankenstein.co.uk/2022/07/02/unpackerr-in-docker-on-a-synology-nas/"})]}),"\n",(0,s.jsxs)(n.li,{children:["HomeAssistant: ",(0,s.jsx)(n.a,{href:"https://github.com/alexbelgium/hassio-addons/tree/master/unpackerr",children:"https://github.com/alexbelgium/hassio-addons/tree/master/unpackerr"})]}),"\n",(0,s.jsxs)(n.li,{children:["HostingByDesign (HBD) B's Hosted Scripts: ",(0,s.jsx)(n.a,{href:"https://github.com/brettpetch/hosted-scripts/wiki/Unpackerr",children:"https://github.com/brettpetch/hosted-scripts/wiki/Unpackerr"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["(",(0,s.jsx)(n.a,{href:"https://github.com/Unpackerr/unpackerr.github.io/blob/main/docs/install/choosemethod.md",children:"open a pull request to add your guide"}),")"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);