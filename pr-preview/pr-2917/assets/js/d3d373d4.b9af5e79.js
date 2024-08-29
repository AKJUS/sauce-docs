"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83621],{10379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(74848),s=n(28453);const i={id:"api-tests-vs-schema-validation",title:"API Tests vs. Schema Validation",sidebar_label:"API Tests vs. Schema Validation",keywords:["api","api-fortress","schema"]},a=void 0,r={id:"api-testing/on-prem/product-information/api-tests-vs-schema-validation",title:"API Tests vs. Schema Validation",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/product-information/api-tests-vs-schema-validation.md",sourceDirName:"api-testing/on-prem/product-information",slug:"/api-testing/on-prem/product-information/api-tests-vs-schema-validation",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/product-information/api-tests-vs-schema-validation",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/product-information/api-tests-vs-schema-validation.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"api-tests-vs-schema-validation",title:"API Tests vs. Schema Validation",sidebar_label:"API Tests vs. Schema Validation",keywords:["api","api-fortress","schema"]},sidebar:"apif",previous:{title:"Build from Collections",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/postman/build-from-collections"},next:{title:"Cloud vs. On Premises (local)",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/product-information/cloud-vs-on-premises-local"}},c={},l=[];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"One of the most common questions we receive about API testing is:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"What's the deal? Schema validation was not enough?"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Some of these inquiries are moved by real curiosity, others are just polemic, but either cases, the question makes a good point if you've never actually tried our platform."}),"\n",(0,o.jsx)(t.p,{children:"Schema validation has two major flaws:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"You need to write a schema"}),"\n",(0,o.jsxs)(t.li,{children:["It statically validates your API syntax and grammar, not your data and certainly not your ",(0,o.jsx)(t.em,{children:"darkest secrets"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For what concerns ( 1 ) deal with it. ( 2 ) is a little more intriguing. Let's work by example."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n"group": "food",\n"items": [10, 15, 17, 19],\n"install": false,\n"installDay": null,\n"delivery": true,\n"request_date": 1456249628\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Of course a schema can determine whether these items are the right types, but no schema can tell that:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"Food items should have ids lower than 100"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"Food items should not be installed (weird, right?)"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"Food items have no installation day, but they're deliverable"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"The response shouldn't be older than 1 day (caching?)"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Moreover, API testing allows you to compare things with the request data. You don't want to get bathrobes listed while you were looking for your birthday cake. Or, more technically, you don't want the data within a credit card transaction to be cached."}),"\n",(0,o.jsx)(t.p,{children:"Right?"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);