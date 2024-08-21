"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[47425],{91112:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=s(74848),i=s(28453),a=s(86025);const r={id:"vault-snippet",title:"Creating an Authentication Snippet",sidebar_label:"Creating an Authentication Snippet",description:"Create a snippet in the vault to use across your tests"},o=void 0,c={id:"api-testing/use-cases/vault-snippet",title:"Creating an Authentication Snippet",description:"Create a snippet in the vault to use across your tests",source:"@site/docs/api-testing/use-cases/vault-snippet.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/vault-snippet",permalink:"/api-testing/use-cases/vault-snippet",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/vault-snippet.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"vault-snippet",title:"Creating an Authentication Snippet",sidebar_label:"Creating an Authentication Snippet",description:"Create a snippet in the vault to use across your tests"},sidebar:"docs",previous:{title:"Composing the Request Body",permalink:"/api-testing/use-cases/compose-body"},next:{title:"Creating Dynamic Headers",permalink:"/api-testing/use-cases/dynamic-header"}},p={},l=[];function d(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A good use case for the snippets feature is building an authentication flow; you don't need to rewrite all authentication steps for every single test. Instead, call the snippet that contains these authentication details. Another good example is integration testing, where you can reuse various tests to create one larger flow."}),"\n",(0,n.jsx)(t.p,{children:"Below is an example of how to create an Authentication Snippet:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["First, create a new test with a request component that requires Basic Authentication. For examples, check the ",(0,n.jsx)(t.a,{href:"/dev/api/",children:"Sauce Labs REST API endpoints"})," for ideas.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,a.A)("img/api-testing/vault_exampleSnippetRequest.png"),alt:"Example Snippet Request"})]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Add Child Component"})," below the request component.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,a.A)("img/api-testing/vault_addRequestHeader.png"),alt:"Add Request Header"})]}),"\n",(0,n.jsxs)(t.li,{children:["Select ",(0,n.jsx)(t.strong,{children:"Basic Authentication"})," from the list.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,a.A)("img/api-testing/vault_basicAuth.png"),alt:"Basic Auth Component"})]}),"\n",(0,n.jsxs)(t.li,{children:["Enter the details for ",(0,n.jsx)(t.code,{children:"username"})," and ",(0,n.jsx)(t.code,{children:"password"}),", then select ",(0,n.jsx)(t.strong,{children:"Confirm"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,a.A)("img/api-testing/vault_basicAuthDetails.png"),alt:"Basic Auth Details",width:"600"})]}),"\n",(0,n.jsxs)(t.li,{children:["Once the ",(0,n.jsx)(t.strong,{children:"Authentication Header"})," appears, click ",(0,n.jsx)(t.strong,{children:"Save Changes"}),".",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(t.li,{children:["Hold down the Ctrl key, highlight the code in the UI and ",(0,n.jsx)(t.strong,{children:"Save Snippet"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,a.A)("img/api-testing/vault_savesnippet.png"),alt:"Save snippet"})]}),"\n",(0,n.jsxs)(t.li,{children:["Give the snippet a name and ",(0,n.jsx)(t.strong,{children:"Save Snippet"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,a.A)("img/api-testing/vault_snippetname.webp"),alt:"Snippet name",width:"600"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Consider a scenario where this authentication call will be required for all the endpoints you have to test. It makes sense for this call to be stored in the ",(0,n.jsx)(t.strong,{children:"Vault"})," so you don't have to write it every time."]}),"\n",(0,n.jsxs)(t.p,{children:["Now you can choose to ",(0,n.jsx)(t.a,{href:"/api-testing/composer/other-components/#call-snippet",children:(0,n.jsx)(t.strong,{children:"Call Snippet"})})," or ",(0,n.jsx)(t.a,{href:"/api-testing/composer/other-components/#paste-snippet",children:(0,n.jsx)(t.strong,{children:"Paste Snippet"})})," in your tests that require that authentication."]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/api-testing/call_paste_snippet.png"),alt:"Snippet options"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);