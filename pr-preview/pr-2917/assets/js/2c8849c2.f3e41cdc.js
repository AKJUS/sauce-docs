"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15620],{21354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(74848),r=n(28453),s=n(86025);const i={id:"footprint",title:"Footprint",sidebar_label:"Footprint",keywords:["api-testing","how-to","footprint"]},a=void 0,c={id:"api-testing/on-prem/how-to/footprint",title:"Footprint",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/footprint.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/footprint",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/how-to/footprint",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/footprint.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"footprint",title:"Footprint",sidebar_label:"Footprint",keywords:["api-testing","how-to","footprint"]},sidebar:"apif",previous:{title:"Following Redirects",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/how-to/following-redirects"},next:{title:"Generate a Status Page",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/how-to/generate-a-status-page"}},l={},p=[];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(t.p,{children:"Consider a scenario where a route has a parameter in it. Let's take a look at an example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",metastring:"request",children:"http://www.whereever.com/[id]/details\n"})}),"\n",(0,o.jsx)(t.p,{children:"Each individual rest run for this route will produce a new line in the metrics view:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",metastring:"request",children:"http://www.whereever.com/1/details\nhttp://www.whereever.com/2/details\nhttp://www.whereever.com/3/details\nhttp://www.whereever.com/4/details\n...\n"})}),"\n",(0,o.jsx)(t.p,{children:"This sort of reporting will quickly turn our dashboard into a disorganized mess."}),"\n",(0,o.jsx)(t.p,{children:"To produce a single endpoint for reporting from each one of these calls, you can use what we call a 'footprint.'"}),"\n",(0,o.jsx)(t.p,{children:"How is this accomplished? In the test, you need to add a Config component to the I/O component as seen below:"}),"\n",(0,o.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2018/04/configFootprint.jpg"),alt:"configFootprint.jpg"}),"\n",(0,o.jsx)(t.p,{children:"The Config component has two fields:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Name"}),": The name you want to assign. In this case, you ",(0,o.jsx)(t.strong,{children:"MUST"})," to enter ",(0,o.jsx)(t.em,{children:"'footprint'"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Value"}),": The value for the configuration component."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Example:"}),"\n",(0,o.jsxs)(t.p,{children:["To set up a ",(0,o.jsx)(t.em,{children:"footprint"}),", you must enter the same URL that's in the I/O Component. Any parameterized portion of the URL must be wrapped in square brackets."]}),"\n",(0,o.jsx)(t.p,{children:"Based upon our example, the value in this case would be:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",metastring:"request",children:"http://www.wherever.com/whatever/[id]/details\n"})}),"\n",(0,o.jsx)(t.p,{children:"In the project dashboard, after every run of the test instead of"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",metastring:"request",children:"http://www.whereever.com/whatever/1/details\nhttp://www.whereever.com/whatever/2/details\nhttp://www.whereever.com/whatever/3/details\nhttp://www.whereever.com/whatever/4/details\n...\n"})}),"\n",(0,o.jsx)(t.p,{children:"you will find only one endpoint, displayed as:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",metastring:"request",children:"http://www.whereever.com/whatever/[id]/details\n"})}),"\n",(0,o.jsx)(t.p,{children:"For each endpoint you can use more square brackets, one for each variable that could assume multiple values."}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-http",metastring:"request",children:"http://www.whereever.com/[whatever]/[id]/details/[colors]/whatever\n"})}),"\n",(0,o.jsx)(t.p,{children:"When you write the value of the config, for the 'static' part of the endpoint you can also call a variable as in any I/O operation."}),"\n",(0,o.jsx)(t.p,{children:"Example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"${protocol}/${domain}/[whatever]/[id]/details/[colors]/whatever\n"})}),"\n",(0,o.jsx)(t.p,{children:"is valid syntax."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);