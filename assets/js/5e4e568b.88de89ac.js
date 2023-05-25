"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"windows",title:"Windows",pagination_prev:"install/choosemethod",pagination_next:"install/configuration"},o="Windows Installation",l={unversionedId:"install/windows",id:"install/windows",title:"Windows",description:"- Extract a .exe.zip file from the Releases page",source:"@site/docs/install/windows.md",sourceDirName:"install",slug:"/install/windows",permalink:"/docs/install/windows",draft:!1,tags:[],version:"current",frontMatter:{id:"windows",title:"Windows",pagination_prev:"install/choosemethod",pagination_next:"install/configuration"},sidebar:"someSidebar",previous:{title:"Choose Install Method",permalink:"/docs/install/choosemethod"},next:{title:"Application Configuration",permalink:"/docs/install/configuration"}},s={},c=[{value:"Running unpackerr as a Windows service",id:"running-unpackerr-as-a-windows-service",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"windows-installation"},"Windows Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Extract a ",(0,a.kt)("inlineCode",{parentName:"li"},".exe.zip")," file from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Unpackerr/unpackerr/releases"},"the Releases page"),"\ninto a folder like ",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\unpackerr\\"),"."),(0,a.kt)("li",{parentName:"ul"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"unpackerr.amd64.exe")," binary. This starts the app in the system tray."),(0,a.kt)("li",{parentName:"ul"},"Click the systray icon and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Config")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit"),"."),(0,a.kt)("li",{parentName:"ul"},"Edit the config to suit your system and save."),(0,a.kt)("li",{parentName:"ul"},"Click the systray icon again and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Quit"),". Then open the app again."),(0,a.kt)("li",{parentName:"ul"},"View the logs by clicking the systray icon and ",(0,a.kt)("inlineCode",{parentName:"li"},"Logs")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"View"),"."),(0,a.kt)("li",{parentName:"ul"},"Make a shortcut to the application in your Startup menu to run it when you login.")),(0,a.kt)("admonition",{title:"Archive Access",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Requires access to your download location.\nMake sure you set the ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," variables correctly in the configuration.\nEven if they're set incorrectly this app makes a best effort attempt to\nlocate your downloads. If Unpackerr can't find your downloads, then the\n",(0,a.kt)("inlineCode",{parentName:"p"},"path")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"paths"),") variables need to be adjusted.")),(0,a.kt)("h2",{id:"running-unpackerr-as-a-windows-service"},"Running unpackerr as a Windows service"),(0,a.kt)("admonition",{title:"Community Contribution",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The following content was provided by a community member, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/IamGimli"},"IamGimli"),".")),(0,a.kt)("p",null,"If you want unpackerr to run automatically upon Windows boot,\nwithout a user needing to be logged-on, follow these instructions:"),(0,a.kt)("p",null,"Download and configure unpackerr according to the instructions on the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/davidnewhall/unpackerr"},"main page"),".\nMake sure unpackerr runs without error messages in the logs before you continue.\nOnce you've confirmed that unpackerr is properly configured, close it by\nright-clicking its icon in the taskbar and selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"Quit"),"."),(0,a.kt)("p",null,"Extract the ",(0,a.kt)("a",{parentName:"p",href:"https://nssm.cc/download"},"latest release of the Non-Sucking Service Manager"),"\ninto a folder like  ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\nssm\\"),"."),(0,a.kt)("p",null,"From either the Control Panel or Start menu search bar, open the Advanced System Settings.\nFrom the ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced")," tab, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Environment Variables..."),". Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"New...")," button\nunder the ",(0,a.kt)("inlineCode",{parentName:"p"},"System variables")," box. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Variable name:")," field, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"USEGUI")," and\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"Variable value:")," field, enter ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," three times to close all\nof the Advanced System Settings windows."),(0,a.kt)("p",null,"On your desktop, create a new text file named ",(0,a.kt)("inlineCode",{parentName:"p"},"unpackerr.reg")," and put the following in it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service]\n"Type"=dword:00000010\n"Start"=dword:00000002\n"ErrorControl"=dword:00000001\n"ImagePath"=hex(2):43,00,3a,00,5c,00,50,00,72,00,6f,00,67,00,72,00,61,00,6d,00,\\\n  20,00,46,00,69,00,6c,00,65,00,73,00,20,00,28,00,78,00,38,00,36,00,29,00,5c,\\\n  00,6e,00,73,00,73,00,6d,00,5c,00,6e,00,73,00,73,00,6d,00,2d,00,32,00,2e,00,\\\n  32,00,34,00,5c,00,77,00,69,00,6e,00,36,00,34,00,5c,00,6e,00,73,00,73,00,6d,\\\n  00,2e,00,65,00,78,00,65,00,00,00\n"ObjectName"="accountname"\n"DelayedAutostart"=dword:00000001\n"FailureActions"=hex:00,00,00,00,00,00,00,00,00,00,00,00,03,00,00,00,14,00,00,\\\n  00,01,00,00,00,20,bf,02,00,01,00,00,00,20,bf,02,00,00,00,00,00,00,00,00,00\n"DisplayName"="unpackerr-Service"\n"FailureActionsOnNonCrashFailures"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service\\Parameters]\n"AppDirectory"="C:\\\\Program Files\\\\unpackerr"\n"Application"="C:\\\\Program Files\\\\unpackerr\\\\unpackerr.amd64.exe"\n"AppParameters"=""\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service\\Parameters\\AppExit]\n@="Restart"\n')),(0,a.kt)("p",null,"Replace ",(0,a.kt)("strong",{parentName:"p"},"accountname"),' with the name of the local user account that you want\nunpackerr to run under. Make sure that account has all the permissions required\nto access to all of the paths that unpackerr will use. Also make sure that the\n"AppDirectory" and "Application" fields point to the location where you installed\nunpackerr, making sure to double up the backslashes in the path.'),(0,a.kt)("p",null,'Save the file and then double-click it. You\'ll get a warning that importing\nregistry keys could harm your system, click "Yes".'),(0,a.kt)("p",null,"Press ",(0,a.kt)("inlineCode",{parentName:"p"},"Windows-R")," and open ",(0,a.kt)("inlineCode",{parentName:"p"},"services.msc"),".\nScroll down to the service named ",(0,a.kt)("inlineCode",{parentName:"p"},"unpackerr-Service"),". If it isn't in the list,\nyou may need to reboot your computer. Double-click ",(0,a.kt)("inlineCode",{parentName:"p"},"unpackerr-Service"),".\nUnder ",(0,a.kt)("inlineCode",{parentName:"p"},"Path to executable:"),", make sure that the path is where you extracted nssm.\nIf it isn't, go to the section ",(0,a.kt)("inlineCode",{parentName:"p"},"Path configuration")," below and return here after\nyou modify the path. On the ",(0,a.kt)("inlineCode",{parentName:"p"},"Log On")," tab, make sure the account name is correct\nand enter the password for that user account. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," to close the service\nproperties window. You can now start the unpackerr service by right-clicking\nit and selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"Start"),". To confirm that it's running correctly, look at\nunpackerr's log file, which you should have configured when you first installed it."),(0,a.kt)("p",null,"Unpackerr will now start automatically whenever the Windows machine is booted up,\nwithout the need for a user to be logged on."),(0,a.kt)("p",null,"Path configuration:\nPress ",(0,a.kt)("inlineCode",{parentName:"p"},"Windows-R")," and open ",(0,a.kt)("inlineCode",{parentName:"p"},"regedit.exe"),". Scroll down to the following registry key: ",(0,a.kt)("inlineCode",{parentName:"p"},"Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service"),"\nUnder that registry key, double-click the ",(0,a.kt)("inlineCode",{parentName:"p"},"ImagePath")," value and enter the proper\npath to the nssm.exe that you extracted previously. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Ok")," then close Regedit."))}d.isMDXComponent=!0}}]);