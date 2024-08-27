"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6383],{41649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var o=n(74848),i=n(28453),s=n(86025);const a={id:"update-input",title:"Update Input",sidebar_label:"Update Input",keywords:["api-testing","how-to","update-input"]},r=void 0,p={id:"api-testing/on-prem/how-to/update-input",title:"Update Input",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/update-input.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/update-input",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/update-input",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/update-input.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"update-input",title:"Update Input",sidebar_label:"Update Input",keywords:["api-testing","how-to","update-input"]},sidebar:"apif",previous:{title:"Testing GraphQL",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/testing-graphql"},next:{title:"Using Long Lasting Tokens",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/how-to/using-long-lasting-tokens"}},c={},d=[];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"update input"})," component allows you to persist a variable defined inside of the test so that the value will be accessible outside the current scope of the test."]}),"\n",(0,o.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/10/updateComponent.jpg"),alt:"updateComponent.jpg"}),"\n",(0,o.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/10/updateInput.jpg"),alt:"updateInput.jpg"}),"\n",(0,o.jsxs)(t.p,{children:["Usually, the component is used in conjunction with the ",(0,o.jsx)(t.em,{children:"set variable"})," component. First, we set a variable. Then, we make it available outside of the current test with the ",(0,o.jsx)(t.em,{children:"update input"})," component."]}),"\n",(0,o.jsxs)(t.p,{children:["We pass the ",(0,o.jsx)(t.em,{children:"update input"})," component the name of the variable that we need to persist outside of the test. The component will first try to update a variable of the same name in the current input set. If that doesn't exist, it will search for a global variable of the same name. If there is no global variable of the same name, it will check the vault. If the variable doesn't exist there, it will create one with the same name."]}),"\n",(0,o.jsxs)(t.admonition,{type:"caution",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:[(0,o.jsx)(t.strong,{children:"IMPORTANT!"}),":"]}),(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"update input"})," component works only ",(0,o.jsx)(t.strong,{children:"outside"})," of the composer. That is to say, it will only function when a test is executed from the Test List, the Scheduler, or via the API."]})]}),"\n",(0,o.jsx)("img",{src:(0,s.Ay)("img/api-fortress/2020/10/setUpdate.jpg"),alt:"setUpdate.jpg"}),"\n",(0,o.jsxs)(t.p,{children:["In the image above, after calling the login endpoint, we have created a variable called ",(0,o.jsx)(t.em,{children:"access_token"})," with the ",(0,o.jsx)(t.em,{children:"set var"})," component. Then, we have updated the value with the ",(0,o.jsx)(t.em,{children:"update input"})," component. In doing so, the value of the variable will persist throughout and the value can be used in follow-on tests."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);