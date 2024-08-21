"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[72574],{86557:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(74848),t=s(28453),l=s(86025);const r={id:"compose-body",title:"Different Ways to Compose a Request Body",sidebar_label:"Composing the Request Body",description:"Different ways to compose a request body"},o=void 0,a={id:"api-testing/use-cases/compose-body",title:"Different Ways to Compose a Request Body",description:"Different ways to compose a request body",source:"@site/docs/api-testing/use-cases/compose-body.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/compose-body",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/compose-body",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/compose-body.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"compose-body",title:"Different Ways to Compose a Request Body",sidebar_label:"Composing the Request Body",description:"Different ways to compose a request body"},sidebar:"docs",previous:{title:"Build an Integration Test",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/integration-test"},next:{title:"Creating an Authentication Snippet",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/vault-snippet"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Use an Existing Body",id:"use-an-existing-body",level:2},{value:"Use Variables in the Request Body",id:"use-variables-in-the-request-body",level:2},{value:"Use a Variable from Another Call",id:"use-a-variable-from-another-call",level:2},{value:"Using an Object from Another Call",id:"using-an-object-from-another-call",level:2},{value:"Creating a New Structure to Add as a Body",id:"creating-a-new-structure-to-add-as-a-body",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"There are several ways you can compose a Request Body in Sauce Labs API Testing, ranging from simple to complex."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The included examples use the ",(0,i.jsx)(n.strong,{children:"POST"})," method, but all examples can be applied to other REST methods."]})}),"\n",(0,i.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Sauce Labs account (",(0,i.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,i.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-an-existing-body",children:"Use an Existing Body"}),"\n",(0,i.jsx)(n.p,{children:"The first method is when you have an existing Body to paste into the call:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Composer, add a ",(0,i.jsx)(n.code,{children:"POST"})," component and enter the URL and all of the required fields."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Url (the url of the resource you want to test) - for example ",(0,i.jsx)(n.code,{children:"https://en8cqeyt0w8aw.x.pipedream.net/sample/post/request/"})]}),"\n",(0,i.jsxs)(n.li,{children:["Variable (the name of the variable that contains the response) - for example ",(0,i.jsx)(n.code,{children:"payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode (the response type) - for example ",(0,i.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Below the ",(0,i.jsx)(n.strong,{children:"POST request"}),", click ",(0,i.jsx)(n.strong,{children:"Add Child Component"})," and then click ",(0,i.jsx)(n.strong,{children:"Request Body"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/post-request-add-body.png"),alt:"Navigating to the Post body window"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the Post Body fields, use the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Content-Type (the content-type of the request) - for example ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsx)(n.li,{children:"Body (the body required in your call) - for example"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n "method": "post",\n "url": "http://www.testme.com/api/run/test"\n }\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now you can execute the call and proceed with your test."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-variables-in-the-request-body",children:"Use Variables in the Request Body"}),"\n",(0,i.jsx)(n.p,{children:"The second method to compose a request body is by using variables in the Body."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the Composer, add a ",(0,i.jsx)(n.code,{children:"POST"})," component and enter the URL and all of the required fields."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Url (the url of the resource you want to test) - for example ",(0,i.jsx)(n.code,{children:"https://en8cqeyt0w8aw.x.pipedream.net/sample/post/request/"})]}),"\n",(0,i.jsxs)(n.li,{children:["Variable (the name of the variable that contains the response) - for example ",(0,i.jsx)(n.code,{children:"payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode (the response type) - for example ",(0,i.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Below the ",(0,i.jsx)(n.strong,{children:"POST request"}),", click ",(0,i.jsx)(n.strong,{children:"Add Child Component"})," and then click ",(0,i.jsx)(n.strong,{children:"Request Body"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.code,{children:"application/json"})," as ",(0,i.jsx)(n.strong,{children:"Content-Type"})," and enter the following in the ",(0,i.jsx)(n.strong,{children:"Body"})," field:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n"user": "${user}",\n"password": "${password}",\n"url": "http://www.testme.com/api/run/test"\n}\n'})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/post-body-variables.webp"),alt:"The Post body window"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the above scenario, ",(0,i.jsx)(n.code,{children:"user"})," and ",(0,i.jsx)(n.code,{children:"password"})," are not directly passed in the body, but they are variables defined elsewhere: in the input set or stored in the vault."]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now you can execute the call and proceed with your test."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-a-variable-from-another-call",children:"Use a Variable from Another Call"}),"\n",(0,i.jsx)(n.p,{children:"The next way to compose a Request Body is by using a variable from another call."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Add the call to retrieve the variable from. The following is an example of a common scenario in which you need to perform a login for authentication and retrieve the authentication token required for the following call."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Url (the url of the resource you want to test) - for example ",(0,i.jsx)(n.code,{children:"https://258d50a7c4e44cddcc8a7165ceaf08ec.m.pipedream.net/login"})]}),"\n",(0,i.jsxs)(n.li,{children:["Variable (the name of the variable that contains the response) - for example ",(0,i.jsx)(n.code,{children:"payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode (the response type) - for example ",(0,i.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Below the request, click ",(0,i.jsx)(n.strong,{children:"Add Child Component"})," and then click ",(0,i.jsx)(n.strong,{children:"Basic Authentication"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/post-basic-auth.png"),alt:"The Basic Authentication window"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Basic Authentication"})," window, enter the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Username - for example ",(0,i.jsx)(n.code,{children:"username"})]}),"\n",(0,i.jsxs)(n.li,{children:["Password - for example ",(0,i.jsx)(n.code,{children:"password"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Confirm"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The response payload from the login call will contain the access token as follow:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="Response Payload Example"',children:'{\n    "userid": 4628362,\n    "access_token": "PXSbs4UscM1lNo6zxdF_yw7MnfVEuHPLtTu3svvKlIZ3Qdf6Qb.7ZujNqFOpsjL4LOpc5oMdbLkbhAfERsEdWyJ7WBlKXIxbitsN3iHo41vfbz9v87cVLvIcqFHID7AczjS51P9c3_wBeaCVMacHkeCVNWAmRcPhtnUEqetAVOCbTxkiLlYJtjTtTq6wTNf4vlIvnK06r7jFRAZselu0oUWePh7wOTZa5EGDbPRwlk7HBK2tnjV4SFaFfJkXNHwM"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Save the token as a variable using a ",(0,i.jsx)(n.code,{children:"SET"})," component."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Variable (the variable name) - for example ",(0,i.jsx)(n.code,{children:"token"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Mode (the variable type) - for example ",(0,i.jsx)(n.code,{children:"String"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Value (retrieves the value from the previous payload - for example ",(0,i.jsx)(n.code,{children:"${payload.access_token}"})]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/set-variable-window.png"),alt:"The SET Variable window"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the token has been saved as a variable, add the second call and use that token in the request body."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Content-Type - for example ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsx)(n.li,{children:"Body - for example"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:' {\n     "token": "${token}"\n }\n'})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/post-body-token.webp"),alt:"POST request body"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-an-object-from-another-call",children:"Using an Object from Another Call"}),"\n",(0,i.jsx)(n.p,{children:"Using an object from another call is a more complex method to compose a request body. Scenarios in which you might use this method include when you need to use an object retrieved from a previous call in the body of a subsequent call."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.code,{children:"GET"})," method to perform the call you retrieve the object from."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Url (the url of the resource you want to test) - for example ",(0,i.jsx)(n.code,{children:"https://eop8vny94gvdmc5.m.pipedream.net/search"})]}),"\n",(0,i.jsxs)(n.li,{children:["Variable (the name of the variable that contains the response) - for example ",(0,i.jsx)(n.code,{children:"searchPayload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode (the response type) - for example ",(0,i.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.code,{children:"Query Param"})," to the call"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Name (the name of the param) - for example ",(0,i.jsx)(n.code,{children:"search_term"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value (the value of the param) -for example ",(0,i.jsx)(n.code,{children:"sauce"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/get-search-term.png"),alt:"GET request window"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The response payload from the call will be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'  {\n    "search_term": "sauce",\n    "items":[\n        {\n          "id":11,\n          "name":"Mayonnaise"\n        },\n        {\n          "id":12,\n          "name":"Hollandaise sauce"\n        },\n        {\n          "id":13,\n          "name":"Tomato ketchup"\n        }\n    ]\n  }\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Let's say you need the object ",(0,i.jsx)(n.code,{children:"items"})," as the body in the subsequent call. So, as a second call, add a ",(0,i.jsx)(n.code,{children:"POST"})," and enter the following as body:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "items": ${searchPayload.items.asJSON()}\n}\n'})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/post-body-object.webp"),alt:"POST request body"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Now you can proceed with your test."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-new-structure-to-add-as-a-body",children:"Creating a New Structure to Add as a Body"}),"\n",(0,i.jsx)(n.p,{children:"The last scenario is another complex one. In this case, consider the scenario where you use data from a previous call to create a new structure to add as a body."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Perform the call that retrieves the data you are using. In the following example, the ",(0,i.jsx)(n.code,{children:"GET"})," returns an array of items."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/get-items-array.png"),alt:"GET request"}),"\n",(0,i.jsx)(n.p,{children:"The response payload:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "items":[\n      {\n         "id":11,\n         "price":5.99\n      },\n      {\n         "id":12,\n         "price":6.99\n      },\n      {\n         "id":13,\n         "price":10.99\n      },\n      {\n         "id":14,\n         "price":15.99\n      }\n   ]\n}\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create the new data structure by adding a ",(0,i.jsx)(n.code,{children:"SET"})," component."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Variable (the variable name) - for example ",(0,i.jsx)(n.code,{children:"itemsAvailable"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode (the variable type) - for example ",(0,i.jsx)(n.code,{children:"Language"})]}),"\n",(0,i.jsxs)(n.li,{children:["Language - for example ",(0,i.jsx)(n.code,{children:"Javascript"})]}),"\n",(0,i.jsx)(n.li,{children:"Body - for example"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:' payload.items.forEach(function(item) {\n     item.currency = "$";\n });\n return payload;\n'})}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/set-new-structure.webp"),alt:"The SET component window"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the new structure as Request Body in the subsequent ",(0,i.jsx)(n.code,{children:"POST"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,l.A)("/img/api-testing/post-body-window-4.png"),alt:"The POST body window",width:"600"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Now you can proceed with your test."}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(96540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);