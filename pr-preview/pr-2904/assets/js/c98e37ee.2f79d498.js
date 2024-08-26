"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[28406],{99633:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var n=i(74848),l=i(28453);const c={id:"disconnect-session",title:"Virtual USB CLI: Disconnect Session",sidebar_label:"Disconnect Session"},t=void 0,a={id:"dev/cli/virtual-usb/disconnect-session",title:"Virtual USB CLI: Disconnect Session",description:"Close a Virtual USB (vUSB) session that you joined originally using the connect command.",source:"@site/docs/dev/cli/virtual-usb/disconnect-session.md",sourceDirName:"dev/cli/virtual-usb",slug:"/dev/cli/virtual-usb/disconnect-session",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/virtual-usb/disconnect-session",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/virtual-usb/disconnect-session.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:168733218e4,frontMatter:{id:"disconnect-session",title:"Virtual USB CLI: Disconnect Session",sidebar_label:"Disconnect Session"},sidebar:"dev",previous:{title:"Connect to Session",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/virtual-usb/connect-session"},next:{title:"Delete Session",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/virtual-usb/delete-session"}},d={},r=[{value:"Usage",id:"usage",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--sessionId</span>',id:"--sessionid",level:3},{value:'<span class="cli">--serverHost</span>',id:"--serverhost",level:3},{value:'<span class="cli">--serverPort</span>',id:"--serverport",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Example with Required Flags",id:"basic-example-with-required-flags",level:3},{value:"Full Example with Optional Flags",id:"full-example-with-optional-flags",level:3}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Close a Virtual USB (vUSB) session that you joined originally using the ",(0,n.jsxs)(s.a,{href:"/dev/cli/virtual-usb/connect-session",children:[(0,n.jsx)(s.code,{children:"connect"})," command"]}),"."]}),"\n",(0,n.jsx)(s.admonition,{title:"Android Only",type:"note",children:(0,n.jsxs)(s.p,{children:["After disconnecting a session with an Android device, ",(0,n.jsx)(s.a,{href:"/mobile-apps/features/virtual-usb#close-test",children:"disconnect your device from ADB"})," by running ",(0,n.jsx)(s.code,{children:"adb disconnect"})," followed by your ",(0,n.jsx)(s.code,{children:"<IPAddress>:<portNumber>"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ <main class> [OPTIONS] disconnect [OPTIONS]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,n.jsx)(s.h3,{id:"--sessionid",children:(0,n.jsx)("span",{className:"cli",children:"--sessionId"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The unique identifier of the test session to disconnect. You can retrieve the session ID of an active session using the ",(0,n.jsxs)(s.a,{href:"/dev/cli/virtual-usb/find-sessionid",children:[(0,n.jsx)(s.code,{children:"sessions"})," command"]}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"--serverhost",children:(0,n.jsx)("span",{className:"cli",children:"--serverHost"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | URL ADDRESS |"})}),"A specific vUSB server host address. The default value, if not specified, is ",(0,n.jsx)(s.code,{children:"http://127.0.0.1"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"--serverport",children:(0,n.jsx)("span",{className:"cli",children:"--serverPort"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)("p",{children:(0,n.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"A specific vUSB server port. The default value, if not specified, is ",(0,n.jsx)(s.code,{children:"33657"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h3,{id:"basic-example-with-required-flags",children:"Basic Example with Required Flags"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",metastring:'title="Disconnect Request"',children:"java -jar virtual-usb-client.jar disconnect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",metastring:'title="Sample Response"',children:"07:57:34.700 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0\nDisconnected\n"})}),"\n",(0,n.jsx)(s.h3,{id:"full-example-with-optional-flags",children:"Full Example with Optional Flags"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"java -jar virtual-usb-client.jar disconnect \\\n    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \\\n    --serverHost http://127.0.0.1 \\\n    --serverPort 33657 \\\n"})})]})}function u(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>a});var n=i(96540);const l={},c=n.createContext(l);function t(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);