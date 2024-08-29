"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[31148],{77082:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(74848),t=n(28453),s=n(86025);const i={id:"forward-calls-to-apif-logger",title:"Bloodhound: Forward Calls to APIF Logger",sidebar_label:"Forward Calls to APIF Logger"},a=void 0,d={id:"api-testing/on-prem/bloodhound/forward-calls-to-apif-logger",title:"Bloodhound: Forward Calls to APIF Logger",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/forward-calls-to-apif-logger.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/forward-calls-to-apif-logger",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/bloodhound/forward-calls-to-apif-logger",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/forward-calls-to-apif-logger.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"forward-calls-to-apif-logger",title:"Bloodhound: Forward Calls to APIF Logger",sidebar_label:"Forward Calls to APIF Logger"},sidebar:"apif",previous:{title:"Expressions",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/bloodhound/expressions"},next:{title:"Using Databases",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/bloodhound/using-databases"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Head:n}=o;return n||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(o.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,r.jsxs)(o.p,{children:["One of the main reason for the existence of Bloodhound is providing a good way to forward API conversations to other agents. This example demonstrates how this happens using the FortressForwarder module that can be found on ",(0,r.jsx)(o.a,{href:"https://github.com/apifortress/bloodhound-modules/tree/master/fortress-forwarder",children:"GitHub"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["While you can find an example of how to forward the API conversations to requestbin ",(0,r.jsx)(o.a,{href:"https://github.com/apifortress/Bloodhound-templates/tree/master/bloodhound_forward_api",children:"here"})," and can certainly modify this to forward to many other locations including Elastic, Splunk, and many more. The example below will show you how to configure the side car to forward the calls to the API Fortress Logger."]}),"\n",(0,r.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(o.p,{children:["Once you have downloaded the template on our ",(0,r.jsx)(o.a,{href:"https://github.com/apifortress/Bloodhound-templates/tree/master/bloodhound_forward_api",children:"Github"}),', navigate to the "etc" directory and then to the "flows" directory. We will be modifying the "default.yml" file, there is a sidecar configured for requestbin you can replace that with the configuration below:']}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"sidecar/fortress\\_forwarder:\nconfig:\nurl: ''\nheaders:\nx-api-key:\nx-secret:\ndiscard\\_request\\_headers:\n- connection\n- accept-encoding\n"})}),"\n",(0,r.jsx)(o.p,{children:"Let's walk through what needs to go into the values:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"url"})," - ",(0,r.jsx)(o.code,{children:'"https://{yourAPIFortressDomian}.com/app/api/rest/v3/{CompanyID}/liveLogs/push/raw"'})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.code,{children:"x-api-key"})," and ",(0,r.jsx)(o.code,{children:"x-secret"}),' - can be generated in API Fortress in the "',(0,r.jsx)(o.strong,{children:"Company Settings"})," -> ",(0,r.jsx)(o.strong,{children:"API KEYS"}),'"']}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/06/Screen-Shot-2020-06-10-at-1.01.31-PM.png"),alt:"API Keys"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.code,{children:"docker-compose"})," comes with Bloodhound. In the default settings, Bloodhound will proxy a demo API."]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Start the full package by issuing ",(0,r.jsx)(o.code,{children:"docker-compose up -d"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:'Access your API Fortress Logger by going to "Tools -> Logger" and click "Update"'}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Execute the following request: ",(0,r.jsx)(o.code,{children:"curl -H 'key:ABC123' 127.0.0.1:8080/demo/retail/product"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"The output of the proxied API should appear on your screen"}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:'Click "Update" on your API Fortress Logger again and notice the forwarded API conversation'}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/06/Screen-Shot-2020-06-10-at-1.19.06-PM.png"),alt:"Click Update"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var r=n(96540);const t={},s=r.createContext(t);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);