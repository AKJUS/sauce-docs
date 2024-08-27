"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80916],{26031:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(74848),i=s(28453);const o={id:"example-security-tests",title:"Example Security Tests",sidebar_label:"Example Security Tests",keywords:["api","api-fortress","security","tests"]},r=void 0,a={id:"api-testing/on-prem/security-testing/example-security-tests",title:"Example Security Tests",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/security-testing/example-security-tests.md",sourceDirName:"api-testing/on-prem/security-testing",slug:"/api-testing/on-prem/security-testing/example-security-tests",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/security-testing/example-security-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/security-testing/example-security-tests.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"example-security-tests",title:"Example Security Tests",sidebar_label:"Example Security Tests",keywords:["api","api-fortress","security","tests"]},sidebar:"apif",previous:{title:"While",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/logical-components/while"},next:{title:"Introduction",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/self-hosted/on-prem-platform"}},c={},l=[{value:"Fuzz Tests",id:"fuzz-tests",level:2},{value:"Authentication / Access Control",id:"authentication--access-control",level:2},{value:"Sensitive Data",id:"sensitive-data",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"According to Gartner over 95% of security vulnerabilities in APIs are related to \u201cfunctional\u201d or \u201chuman\u201d errors. That is why functional testing of your APIs is so important to general API security. A good API security policy includes testing of API functionality before release, as well as constant monitoring of those APIs using the same detailed functional tests."}),"\n",(0,n.jsxs)(t.p,{children:["We can designate these types of tests into three types - fuzz tests, authentication/access control, and sensitive data. We have created ",(0,n.jsx)(t.em,{children:"example"})," test snippets that you can load from within the platform to see them in action."]}),"\n",(0,n.jsx)(t.admonition,{title:"Please Note!",type:"warning",children:(0,n.jsx)(t.p,{children:"These snippets are just examples to help convey the information more clearly. They are not meant to be security tests themselves. Only you can understand the business requirements and potential weaknesses in your APIs."})}),"\n",(0,n.jsx)(t.h2,{id:"fuzz-tests",children:"Fuzz Tests"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Invalid Input Test"}),(0,n.jsx)(t.br,{}),"\n","The goal of this test is to validate how the API functions when given invalid data. Fundamentally, it\u2019s a data-driven test with a series of invalid inputs that helps to reveal potential exceptions. Some of these exceptions may include crashes, assertion failures, error responses that give out too much information, and potential memory leaks.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"[Found in Examples > Security > Invalid_Input_Test]"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Wildcard Testing"}),(0,n.jsx)(t.br,{}),"\n","This one is pretty straightforward, and yet it is one of the reasons for a ",(0,n.jsx)(t.a,{href:"https://apifortress.com/usps-api-security-vulnerabilities-caused-by-functional-errors/",children:"major breach at the US Postal Service"}),". The goal here is to see how the API reacts when a wildcard (*) is used in place of an input value. For most APIs, it shouldn\u2019t be allowed as it would return a broad dataset.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"[Found in Examples > Security > Wildcard_Test]"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"authentication--access-control",children:"Authentication / Access Control"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Common Logins"}),(0,n.jsx)(t.br,{}),"\n","This test is meant to simply go through the most common username and password combinations to try to see if one of those is valid. This includes logins such as admin/admin. These tests are particularly useful before pushing an API live when you have internal credentials used for debugging.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"[Found in Examples > Security > Password_Test]"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Brute Force"}),(0,n.jsx)(t.br,{}),"\n","This test randomly generates login credentials such as usernames and passwords in an attempt to brute force its way in. The goal here is to validate that the API only allows a certain amount of login attempts before forcing a timeout.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"[Found in Examples > Security > Brute_Force_Test]"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Your Authentication Flow"}),(0,n.jsx)(t.br,{}),"\n","It is important to create tests that validate your authentication flows. This can even include 3-leg OAuth using our ",(0,n.jsx)(t.a,{href:"https://apifortress.com/opensourceprojects/",children:"open source 3loa project."})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Access Control"}),(0,n.jsx)(t.br,{}),"\n","In this test, the goal is to confirm that a user with permissions of X can only achieve X. For example, in API Fortress, a person with \u201canalyst\u201d rights should only be able to view results and tests. They cannot edit tests or change settings.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"[Found in Examples > Security > Access_Control_Test]"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"sensitive-data",children:"Sensitive Data"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Header Validation"}),(0,n.jsx)(t.br,{}),"\n","Headers contain critical details of the API transaction, but they can also sometimes contain sensitive information. In this test, we analyze the header and give some examples of potential weaknesses. This can include revealing an Apache server version that has a known weakness, or the authentication type.",(0,n.jsx)(t.em,{children:"[Found in Examples > Security > Header_Validation_Test]"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sensitive Information"}),(0,n.jsx)(t.br,{}),"\n","In this test, the goal is to search for string patterns that should never appear in a payload, such as credit cards, and social security numbers, etc.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.em,{children:"[Found in Examples > Security > Sensitive_Information_Test]"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);