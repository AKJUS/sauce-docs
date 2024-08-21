"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[954],{14821:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(74848),o=s(28453),n=s(86025);const r={id:"legacy",title:"API Fortress Legacy Migration Guide",sidebar_label:"Legacy (APIF) Migration"},a=void 0,l={id:"api-testing/legacy",title:"API Fortress Legacy Migration Guide",description:"API Fortress Cloud (legacy) was discontinued on October 15, 2022. Please note that this applies to the cloud solution only, NOT the on-premise solution.",source:"@site/docs/api-testing/legacy.md",sourceDirName:"api-testing",slug:"/api-testing/legacy",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/legacy",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/legacy.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"legacy",title:"API Fortress Legacy Migration Guide",sidebar_label:"Legacy (APIF) Migration"},sidebar:"docs",previous:{title:"Project Settings",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/project-access"},next:{title:"Basic Key/Value Store Workflow",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/key-value"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Moving Tests from API Fortress to Sauce Labs",id:"moving-tests-from-api-fortress-to-sauce-labs",level:2},{value:"Exporting Tests from API Fortress",id:"exporting-tests-from-api-fortress",level:3},{value:"Importing Tests to Sauce Labs",id:"importing-tests-to-sauce-labs",level:3},{value:"Importing Vault and Environments",id:"importing-vault-and-environments",level:3}];function u(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{title:"API Fortress Cloud End-of-life",type:"warning",children:[(0,i.jsxs)(t.p,{children:["API Fortress Cloud (legacy) was discontinued on October 15, 2022. Please note that this applies to the cloud solution only, NOT the ",(0,i.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/",children:"on-premise solution"}),"."]}),(0,i.jsx)(t.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,i.jsx)(t.p,{children:"Learn how to move your data from API Fortress (our legacy on-prem platform) to Sauce Labs API Testing."}),"\n",(0,i.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A Sauce Labs account (",(0,i.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"moving-tests-from-api-fortress-to-sauce-labs",children:"Moving Tests from API Fortress to Sauce Labs"}),"\n",(0,i.jsx)(t.h3,{id:"exporting-tests-from-api-fortress",children:"Exporting Tests from API Fortress"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Log in to API Fortress platform."}),"\n",(0,i.jsx)(t.li,{children:"Choose the Project containing the Tests you want to move to Sauce Labs."}),"\n",(0,i.jsxs)(t.li,{children:["Go to your Tests list by clicking ",(0,i.jsx)(t.strong,{children:"Tests"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,n.A)("img/api-testing/import-tests/authenticated-api.webp"),alt:"Authenticated API",width:"600"})]}),"\n",(0,i.jsxs)(t.li,{children:["To export individual Tests, click the circle to the left of each Test.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,n.A)("img/api-testing/import-tests/test1.webp"),alt:"Test 1",width:"600"}),(0,i.jsx)("br",{}),"\nOr, to export all Tests as a batch, click ",(0,i.jsx)("b",{children:"Select All"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,n.A)("img/api-testing/import-tests/select-all.webp"),alt:"Select all",width:"600"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Export Selected"}),". This will give you a zip folder containing all of your tests.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,n.A)("img/api-testing/import-tests/export-selected.png"),alt:"Export selected",width:"600"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"importing-tests-to-sauce-labs",children:"Importing Tests to Sauce Labs"}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["Follow the instructions under ",(0,i.jsx)(t.a,{href:"/api-testing/import-export-tests/#importing-api-tests-to-sauce-labs",children:"Importing API Tests to Sauce Labs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{title:"Review Your Tests After Migrating",type:"warning",children:[(0,i.jsx)(t.p,{children:"You may need to update your tests after importing them to Sauce Labs."}),(0,i.jsx)(t.p,{children:"API Fortress tests are Groovy-based, while Sauce Labs API tests are JavaScript-based. Additionally, some API Fortress Test components (e.g., Update Input, JDBC, Signature, Fake) are not supported in Sauce Labs. For assistance, contact your CSM/SE or Sauce Labs Support."})]}),"\n",(0,i.jsx)(t.h3,{id:"importing-vault-and-environments",children:"Importing Vault and Environments"}),"\n",(0,i.jsx)(t.p,{children:"As API Fortress does not support exporting Vault and Environment variables, you'll need to re-enter these manually in Sauce Labs API Testing."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(96540);const o={},n=i.createContext(o);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);