"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[66968],{17695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(74848),i=n(28453),o=n(86025);const a={id:"integration-testing",title:"Build an Integration Test (Multistep Test)",sidebar_label:"Build an Integration Test (Multistep Test)",keywords:["integration-testing","automation","api-testing","how-to"]},r=void 0,c={id:"api-testing/on-prem/how-to/integration-testing",title:"Build an Integration Test (Multistep Test)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/integration-testing.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/integration-testing",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/how-to/integration-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"integration-testing",title:"Build an Integration Test (Multistep Test)",sidebar_label:"Build an Integration Test (Multistep Test)",keywords:["integration-testing","automation","api-testing","how-to"]},sidebar:"apif",previous:{title:"Automating 3-Legged OAuth",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/how-to/3-leg-oauth"},next:{title:"Copy a Test",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/how-to/copy-a-test"}},l={},d=[{value:"Step 1 - Get the Token",id:"step-1---get-the-token",level:2},{value:"Step 2 - Add an Assertion",id:"step-2---add-an-assertion",level:2},{value:"Step 3 - Query the Search Endpoint",id:"step-3---query-the-search-endpoint",level:2},{value:"Step 4 - Examine the Results",id:"step-4---examine-the-results",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsxs)(t.p,{children:["One of the core features of the platform is the ability to create proper ",(0,s.jsx)(t.strong,{children:"integration tests"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"An Integration test is a test in which you examine a complete flow of calls, simulating what an API consumer would experience. Exercising singular endpoints leaves a lot of opportunities for missed bugs and vulnerabilities."}),"\n",(0,s.jsx)(t.p,{children:"Here is a quick guide on how to create one using a token based authentication API."}),"\n",(0,s.jsx)(t.p,{children:'Before getting too deep into the topic, if you log in to your account and go to the "Examples" project, you\'ll see a test called "Retail: Integration - Products." The concept may be easier to understand if you take a look at it first.'}),"\n",(0,s.jsx)(t.h2,{id:"step-1---get-the-token",children:"Step 1 - Get the Token"}),"\n",(0,s.jsxs)(t.p,{children:["First, get the token by making your POST call. Name the payload variable ",(0,s.jsx)(t.code,{children:"loginPayload"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/03/login.jpg"),alt:"Login Pic"}),"\n",(0,s.jsx)(t.h2,{id:"step-2---add-an-assertion",children:"Step 2 - Add an Assertion"}),"\n",(0,s.jsxs)(t.p,{children:['Under the login procedure add an assertion named "Set (variable)." Set ',(0,s.jsx)(t.em,{children:"Var"})," as ",(0,s.jsx)(t.code,{children:"access_token"}),", keep ",(0,s.jsx)(t.em,{children:"Variable Mode"})," as ",(0,s.jsx)(t.code,{children:"String"}),", and set ",(0,s.jsx)(t.code,{children:"Value"})," to ",(0,s.jsx)(t.code,{children:"${loginPayload.access_token}"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You'll notice that what we are doing here is specifically taking the ",(0,s.jsx)(t.code,{children:"access_token"})," variable in the ",(0,s.jsx)(t.code,{children:"loginPayload"})," response, and setting it as ",(0,s.jsx)(t.code,{children:"access_token"})]}),"\n",(0,s.jsx)(t.p,{children:"The dollar sign and brackets are necessary when referencing variables."}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/03/token-1.jpg"),alt:"Token 1"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/03/access_token.jpg"),alt:"Access Token"}),"\n",(0,s.jsx)(t.h2,{id:"step-3---query-the-search-endpoint",children:"Step 3 - Query the Search Endpoint"}),"\n",(0,s.jsxs)(t.p,{children:["Next, make a GET call to your search endpoint. Name this payload ",(0,s.jsx)(t.code,{children:"resultsPayload"})," This call requires the access token from the login procedure, so we passed it in the header as required for this specific API. We added ",(0,s.jsx)(t.em,{children:"Header Name"}),' as "Authorization" and ',(0,s.jsx)(t.em,{children:"Value"})," as ",(0,s.jsx)(t.code,{children:"${access_token}"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Again, notice the dollar sign and bracket. That is how you reference variables."}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/03/search.jpg"),alt:"Search"}),"\n",(0,s.jsx)(t.h2,{id:"step-4---examine-the-results",children:"Step 4 - Examine the Results"}),"\n",(0,s.jsx)(t.p,{children:'Finally, let\'s dive into each result from the search payload one-by-one, using the "product id" and the "access token" variables we have set so far.'}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:'Add a "for each" assertion and reference the "resultsPayload.products" object.'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:['Add a new "Set (variable)" assertion to set the ',(0,s.jsx)(t.code,{children:"id"})," variable as every single ",(0,s.jsx)(t.code,{children:"resultsPayload.product"})," that is returned. Notice we set the string to ",(0,s.jsx)(t.code,{children:"${_1.id}"})," The system uses ",(0,s.jsx)(t.code,{children:"_1"})," automatically when recognizing a subroutine. Makes it easier when things get into many sub levels."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Make a GET to the product details endpoint, using our new ",(0,s.jsx)(t.code,{children:"id"})," variable as the ",(0,s.jsx)(t.em,{children:"id"})," parameter. Again, you can still reference the original ",(0,s.jsx)(t.code,{children:"${access_token}"})," to make this call. Variables last through the entire test unless overwritten."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/api-fortress/2017/03/each.jpg"),alt:"Each"}),"\n",(0,s.jsx)(t.p,{children:"Again, take a look at the integration test in your Examples project, which comes with every account. Remember how many of us learned HTML first by looking at the source of our favorite websites?\xa0This is much easier to understand when you see it."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);