"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[75209],{27453:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=n(74848),r=n(28453);const t={id:"expressions",title:"Bloodhound: Expressions",sidebar_label:"Expressions"},i=void 0,a={id:"api-testing/on-prem/bloodhound/expressions",title:"Bloodhound: Expressions",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/expressions.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/expressions",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/expressions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/expressions.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"expressions",title:"Bloodhound: Expressions",sidebar_label:"Expressions"},sidebar:"apif",previous:{title:"Fortress Forwarder",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/module-actors/fortress-forwarder"},next:{title:"Forward Calls to APIF Logger",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/forward-calls-to-apif-logger"}},d={},l=[{value:"SpEL - Spring Expression Language",id:"spel---spring-expression-language",level:2},{value:"Uses in Bloodhound",id:"uses-in-bloodhound",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"In Bloodhound actors configuration, you may find fields allowing dynamic expressions. These expressions get evaluated to generate a dynamic value."}),"\n",(0,o.jsx)(s.h2,{id:"spel---spring-expression-language",children:"SpEL - Spring Expression Language"}),"\n",(0,o.jsxs)(s.p,{children:["The language used by Bloodhound is the ",(0,o.jsx)(s.a,{href:"https://docs.spring.io/spring/docs/4.3.10.RELEASE/spring-framework-reference/html/expressions.html",children:(0,o.jsx)(s.strong,{children:"Spring Expression Language"})}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"uses-in-bloodhound",children:"Uses in Bloodhound"}),"\n",(0,o.jsxs)(s.p,{children:["All of expressions will make use of the current message being processed. The message is accessible using the ",(0,o.jsx)(s.code,{children:"#msg"})," keyword."]}),"\n",(0,o.jsx)(s.p,{children:"Here's a breakdown of many internal members, accessed using SpEL."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg"}),": the current message;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.request()"}),": the request object;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.request().getHeader('key')"}),": returns a certain request header;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.request().payload()"}),": the request payload, in the form of an array of bytes;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.request().callId()"}),": the call id, as defined by the EndpointIdentifierActor"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.response()"}),": when evaluating a message after the upstream phase, this expression will access the response object;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.response().getHeader('key')"}),": returns a certain response header;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.response().payload()"}),": the response payload, in the form of an array of bytes;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.meta()"}),": the metadata map;"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"#msg.meta().getOrElse('key','defaultValue')"}),": returns the value of the metadata identified by the key. 'defaultValue' in case the metadata does not exist"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var o=n(96540);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);