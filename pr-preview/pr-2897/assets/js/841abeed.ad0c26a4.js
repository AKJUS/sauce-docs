"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2161],{55961:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(74848),o=s(28453),r=s(86025);const i={id:"forge",title:"APIF Forge (Local IDE)",sidebar_label:"APIF Forge (Local IDE)",description:"Forge is a downloadable IDE made for writing and running tests locally. The APIF Composer on Forge works exactly like the Composer on the hosted cloud or self-hosted/on-premises version of API Fortress."},a=void 0,l={id:"api-testing/on-prem/quick-start/forge",title:"APIF Forge (Local IDE)",description:"Forge is a downloadable IDE made for writing and running tests locally. The APIF Composer on Forge works exactly like the Composer on the hosted cloud or self-hosted/on-premises version of API Fortress.",source:"@site/docs/api-testing/on-prem/quick-start/forge.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/forge",permalink:"/api-testing/on-prem/quick-start/forge",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/forge.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"forge",title:"APIF Forge (Local IDE)",sidebar_label:"APIF Forge (Local IDE)",description:"Forge is a downloadable IDE made for writing and running tests locally. The APIF Composer on Forge works exactly like the Composer on the hosted cloud or self-hosted/on-premises version of API Fortress."},sidebar:"apif",previous:{title:"Easy Monitoring",permalink:"/api-testing/on-prem/quick-start/easy-monitoring"},next:{title:"API Fortress API v3 (including Webhooks)",permalink:"/api-testing/on-prem/api/v3"}},c={},d=[{value:"Creating Tests",id:"creating-tests",level:2},{value:"Step 1 - Select HTTP Client",id:"step-1---select-http-client",level:3},{value:"Step 2 - Send API Call",id:"step-2---send-api-call",level:3},{value:"Step 3 - Generate Test",id:"step-3---generate-test",level:3},{value:"Visual Composer",id:"visual-composer",level:3},{value:"Code View Composer",id:"code-view-composer",level:3},{value:"Importing Tests",id:"importing-tests",level:2},{value:"Running Tests",id:"running-tests",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsxs)(t.p,{children:["Forge is a downloadable IDE made for writing and running tests locally. The APIF Composer on Forge works exactly like the Composer on the hosted cloud or self-hosted/on-premises version of API Fortress. Click ",(0,n.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/composer",children:"here"})," to learn how the composer works."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Forge requires the API Fortress local engine, which is for licensed API Fortress customers only. If you would like to set up a free trial, please reach out to ",(0,n.jsx)(t.a,{href:"mailto:support@apifortress.com",children:"support@apifortress.com"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"creating-tests",children:"Creating Tests"}),"\n",(0,n.jsx)(t.p,{children:"You can either create tests directly in Forge by writing it yourself or by calling the desired API within the included HTTP client in Forge then using our \u201cGenerate Test\u201d button to create the test."}),"\n",(0,n.jsx)(t.p,{children:"Tests can be automatically generated via an API payload:"}),"\n",(0,n.jsx)(t.p,{children:"Auto generate a high-level schema validation test by using our HTTP client to make an API call and our Generate Test button."}),"\n",(0,n.jsx)(t.h3,{id:"step-1---select-http-client",children:"Step 1 - Select HTTP Client"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.12.26-PM.png"),alt:"Generate HTTP Call"}),"\n",(0,n.jsx)(t.h3,{id:"step-2---send-api-call",children:"Step 2 - Send API Call"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.09.37-PM.png"),alt:"Send API Call"}),"\n",(0,n.jsx)(t.h3,{id:"step-3---generate-test",children:"Step 3 - Generate Test"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.11.00-PM.png"),alt:"Generate Test"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Example Output"}),":"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/08/Screen-Shot-2019-07-18-at-2.11.35-PM.png"),alt:"Output"}),"\n",(0,n.jsx)(t.p,{children:"You can also write tests from scratch via the API Fortress visual composer or code view composer:"}),"\n",(0,n.jsx)(t.h3,{id:"visual-composer",children:"Visual Composer"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.strong,{children:"+"})," symbol:"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/08/forgescreen1.png"),alt:"forge screen 1"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Select a request method:"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/08/forgescreen2.png"),alt:"forge screen 2"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Set the request parameters:"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/08/forgescreen3.png"),alt:"forge screen 3"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"code-view-composer",children:"Code View Composer"}),"\n",(0,n.jsx)(t.p,{children:"You can also write tests directly in our XML markup language that is so easy to use that anyone can learn how to use it:"}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2019/07/Screen-Shot-2019-07-18-at-2.06.50-PM.png"),alt:"Forge Code View"}),"\n",(0,n.jsx)(t.h2,{id:"importing-tests",children:"Importing Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Import tests from your API Fortress instance. Learn how ",(0,n.jsx)(t.a,{href:"https://apifortress.com/doc/import-export-tests/",children:"here."})]}),"\n",(0,n.jsxs)(t.p,{children:["Importing tests into Forge is as easy as opening the folder that contains the ",(0,n.jsx)(t.code,{children:"unit.xml"})," and input.xml in the Forge IDE."]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2019/06/image.png"),alt:"unit.xml"}),"\n",(0,n.jsx)(t.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,n.jsxs)(t.p,{children:["By combining Forge with APIF-Local (APIF \u2013 Local Engine), you can execute local tests directly from the IDE. Current customers can reach out to their sales contact (or ",(0,n.jsx)(t.a,{href:"mailto:sales@apifortress.com",children:"sales@apifortress.com"}),") to request the local engine files."]}),"\n",(0,n.jsxs)(t.p,{children:["Find a step-by-step guide on how to set up APIF-Local ",(0,n.jsx)(t.a,{href:"https://apifortress.com/doc/apf-local-engine/",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Once you have configured your local engine, integrating into Forge is very easy. ",(0,n.jsx)(t.em,{children:"See below in the settings section of Forge"}),":"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Load the local engine jar file here"}),":"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2019/06/image-1.png"),alt:"image-1.png"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Load the config.yml file here"}),":"]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2019/06/image-3.png"),alt:"image-3.png"})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);