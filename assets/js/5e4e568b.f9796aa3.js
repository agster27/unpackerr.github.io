"use strict";(self.webpackChunkunpackerrdox=self.webpackChunkunpackerrdox||[]).push([[407,282],{5851:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(4848),i=t(8453);const o={},s=void 0,c={id:"install/includes/archiveaccess",title:"archiveaccess",description:"Requires access to your download location.",source:"@site/docs/install/includes/archiveaccess.md",sourceDirName:"install/includes",slug:"/install/includes/archiveaccess",permalink:"/docs/install/includes/archiveaccess",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){const n={admonition:"admonition",code:"code",p:"p",...(0,i.R)(),...e.components};return(0,r.jsx)(n.admonition,{title:"Archive Access",type:"caution",children:(0,r.jsxs)(n.p,{children:["Requires access to your download location.\nMake sure you set the ",(0,r.jsx)(n.code,{children:"path"})," variables correctly in the configuration.\nEven if they're set incorrectly Unpackerr makes a best effort attempt\nto locate your downloads. If it can't find your downloads, then the\n",(0,r.jsx)(n.code,{children:"path"})," or ",(0,r.jsx)(n.code,{children:"paths"})," variables need to be adjusted."]})})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(4848),i=t(8453),o=t(5851);const s={id:"windows",title:"Windows",pagination_prev:"install/choosemethod",pagination_next:"install/configuration",description:"Install Unpackerr on a Windows system."},c="Windows Installation",a={id:"install/windows",title:"Windows",description:"Install Unpackerr on a Windows system.",source:"@site/docs/install/windows.md",sourceDirName:"install",slug:"/install/windows",permalink:"/docs/install/windows",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"windows",title:"Windows",pagination_prev:"install/choosemethod",pagination_next:"install/configuration",description:"Install Unpackerr on a Windows system."},sidebar:"someSidebar",previous:{title:"Choose Install Method",permalink:"/docs/install/choosemethod"},next:{title:"Application Configuration",permalink:"/docs/install/configuration"}},l={},d=[...o.toc,{value:"Running unpackerr as a Windows service",id:"running-unpackerr-as-a-windows-service",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"windows-installation",children:"Windows Installation"}),"\n",(0,r.jsx)(n.admonition,{title:"Install Location",type:"tip",children:(0,r.jsxs)(n.p,{children:["A default Windows install runs from ",(0,r.jsx)(n.code,{children:"C:\\"}),"; if you installed Windows in another location, then replace it accordingly."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Browse to ",(0,r.jsx)(n.code,{children:"C:\\ProgramData"})," and create a folder named ",(0,r.jsx)(n.code,{children:"unpackerr"})," and then inside that create a ",(0,r.jsx)(n.code,{children:"logs"})," directory.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enable hidden files and folders if you dont see ",(0,r.jsx)(n.code,{children:"C:\\ProgramData"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["End result: ",(0,r.jsx)(n.code,{children:"C:\\ProgramData\\unpackerr"})," and ",(0,r.jsx)(n.code,{children:"C:\\ProgramData\\unpackerr\\logs"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Extract a ",(0,r.jsx)(n.code,{children:".exe.zip"})," file from ",(0,r.jsx)(n.a,{href:"https://github.com/Unpackerr/unpackerr/releases",children:"the Releases page"}),"\ninto  ",(0,r.jsx)(n.code,{children:"C:\\ProgramData\\unpackerr\\"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Run the ",(0,r.jsx)(n.code,{children:"unpackerr.amd64.exe"})," binary. This starts the app in the system tray."]}),"\n",(0,r.jsxs)(n.li,{children:["Click the systray icon and select ",(0,r.jsx)(n.code,{children:"Config"})," -> ",(0,r.jsx)(n.code,{children:"Edit"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Uncomment ",(0,r.jsx)(n.code,{children:"log_file"})," (remove the ",(0,r.jsx)(n.code,{children:"#"}),") and set it as shown here:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"log_file = 'C:\\ProgramData\\unpackerr\\logs\\unpackerr.log'"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Edit the rest of the config to suit your system and save the file."}),"\n",(0,r.jsxs)(n.li,{children:["Click the systray icon again and select ",(0,r.jsx)(n.code,{children:"Quit"}),". Then open the app again."]}),"\n",(0,r.jsxs)(n.li,{children:["View the logs by clicking the systray icon and ",(0,r.jsx)(n.code,{children:"Logs"})," -> ",(0,r.jsx)(n.code,{children:"View"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Make a shortcut to the application in your Startup menu to run it when you login."}),"\n"]}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(n.h2,{id:"running-unpackerr-as-a-windows-service",children:"Running unpackerr as a Windows service"}),"\n",(0,r.jsx)(n.admonition,{title:"Community Contribution",type:"info",children:(0,r.jsxs)(n.p,{children:["The following content was provided by a community member, ",(0,r.jsx)(n.a,{href:"https://github.com/IamGimli",children:"IamGimli"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"If you want unpackerr to run automatically upon Windows boot,\nwithout a user needing to be logged-on, follow these instructions:"}),"\n",(0,r.jsxs)(n.p,{children:["Download and configure unpackerr according to the instructions on the\n",(0,r.jsx)(n.a,{href:"https://github.com/davidnewhall/unpackerr",children:"main page"}),".\nMake sure unpackerr runs without error messages in the logs before you continue.\nOnce you've confirmed that unpackerr is properly configured, close it by\nright-clicking its icon in the taskbar and selecting ",(0,r.jsx)(n.code,{children:"Quit"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Extract the ",(0,r.jsx)(n.a,{href:"https://nssm.cc/download",children:"latest release of the Non-Sucking Service Manager"}),"\ninto a folder like  ",(0,r.jsx)(n.code,{children:"C:\\Program Files\\nssm\\"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["From either the Control Panel or Start menu search bar, open the Advanced System Settings.\nFrom the ",(0,r.jsx)(n.code,{children:"Advanced"})," tab, click ",(0,r.jsx)(n.code,{children:"Environment Variables..."}),". Click the ",(0,r.jsx)(n.code,{children:"New..."})," button\nunder the ",(0,r.jsx)(n.code,{children:"System variables"})," box. In the ",(0,r.jsx)(n.code,{children:"Variable name:"})," field, enter ",(0,r.jsx)(n.code,{children:"USEGUI"})," and\nin the ",(0,r.jsx)(n.code,{children:"Variable value:"})," field, enter ",(0,r.jsx)(n.code,{children:"false"}),". Click ",(0,r.jsx)(n.code,{children:"Ok"})," three times to close all\nof the Advanced System Settings windows."]}),"\n",(0,r.jsxs)(n.p,{children:["On your desktop, create a new text file named ",(0,r.jsx)(n.code,{children:"unpackerr.reg"})," and put the following in it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service]\n"Type"=dword:00000010\n"Start"=dword:00000002\n"ErrorControl"=dword:00000001\n"ImagePath"=hex(2):43,00,3a,00,5c,00,50,00,72,00,6f,00,67,00,72,00,61,00,6d,00,\\\n  20,00,46,00,69,00,6c,00,65,00,73,00,20,00,28,00,78,00,38,00,36,00,29,00,5c,\\\n  00,6e,00,73,00,73,00,6d,00,5c,00,6e,00,73,00,73,00,6d,00,2d,00,32,00,2e,00,\\\n  32,00,34,00,5c,00,77,00,69,00,6e,00,36,00,34,00,5c,00,6e,00,73,00,73,00,6d,\\\n  00,2e,00,65,00,78,00,65,00,00,00\n"ObjectName"="accountname"\n"DelayedAutostart"=dword:00000001\n"FailureActions"=hex:00,00,00,00,00,00,00,00,00,00,00,00,03,00,00,00,14,00,00,\\\n  00,01,00,00,00,20,bf,02,00,01,00,00,00,20,bf,02,00,00,00,00,00,00,00,00,00\n"DisplayName"="unpackerr-Service"\n"FailureActionsOnNonCrashFailures"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service\\Parameters]\n"AppDirectory"="C:\\\\Program Files\\\\unpackerr"\n"Application"="C:\\\\Program Files\\\\unpackerr\\\\unpackerr.amd64.exe"\n"AppParameters"=""\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service\\Parameters\\AppExit]\n@="Restart"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.strong,{children:"accountname"}),' with the name of the local user account that you want\nunpackerr to run under. Make sure that account has all the permissions required\nto access to all of the paths that unpackerr will use. Also make sure that the\n"AppDirectory" and "Application" fields point to the location where you installed\nunpackerr, making sure to double up the backslashes in the path.']}),"\n",(0,r.jsx)(n.p,{children:'Save the file and then double-click it. You\'ll get a warning that importing\nregistry keys could harm your system, click "Yes".'}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)(n.code,{children:"Windows-R"})," and open ",(0,r.jsx)(n.code,{children:"services.msc"}),".\nScroll down to the service named ",(0,r.jsx)(n.code,{children:"unpackerr-Service"}),". If it isn't in the list,\nyou may need to reboot your computer. Double-click ",(0,r.jsx)(n.code,{children:"unpackerr-Service"}),".\nUnder ",(0,r.jsx)(n.code,{children:"Path to executable:"}),", make sure that the path is where you extracted nssm.\nIf it isn't, go to the section ",(0,r.jsx)(n.code,{children:"Path configuration"})," below and return here after\nyou modify the path. On the ",(0,r.jsx)(n.code,{children:"Log On"})," tab, make sure the account name is correct\nand enter the password for that user account. Click ",(0,r.jsx)(n.code,{children:"Ok"})," to close the service\nproperties window. You can now start the unpackerr service by right-clicking\nit and selecting ",(0,r.jsx)(n.code,{children:"Start"}),". To confirm that it's running correctly, look at\nunpackerr's log file, which you should have configured when you first installed it."]}),"\n",(0,r.jsx)(n.p,{children:"Unpackerr will now start automatically whenever the Windows machine is booted up,\nwithout the need for a user to be logged on."}),"\n",(0,r.jsx)(n.p,{children:"Path configuration:"}),"\n",(0,r.jsxs)(n.p,{children:["Press ",(0,r.jsx)(n.code,{children:"Windows-R"})," and open ",(0,r.jsx)(n.code,{children:"regedit.exe"}),". Scroll down to the following registry key: ",(0,r.jsx)(n.code,{children:"Computer\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\unpackerr-Service"}),"\nUnder that registry key, double-click the ",(0,r.jsx)(n.code,{children:"ImagePath"})," value and enter the proper\npath to the nssm.exe that you extracted previously. Click ",(0,r.jsx)(n.code,{children:"Ok"})," then close Regedit."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);