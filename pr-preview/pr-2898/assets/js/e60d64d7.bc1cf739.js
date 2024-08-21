"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[62791],{57203:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(74848),i=t(28453),a=t(86025);const r={id:"working-with-headers",title:"Working With the Header (statusCode, metrics)",sidebar_label:"Working with the Headers",description:"How to use the response header in your tests"},o=void 0,c={id:"api-testing/use-cases/working-with-headers",title:"Working With the Header (statusCode, metrics)",description:"How to use the response header in your tests",source:"@site/docs/api-testing/use-cases/working-with-headers.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/working-with-headers",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/working-with-headers",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/working-with-headers.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"working-with-headers",title:"Working With the Header (statusCode, metrics)",sidebar_label:"Working with the Headers",description:"How to use the response header in your tests"},sidebar:"docs",previous:{title:"Using GitHub as a Data Source",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/github-datasets"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2898/ci"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Retrieving the statusCode",id:"retrieving-the-statuscode",level:2},{value:"Retrieving the Header",id:"retrieving-the-header",level:2},{value:"Retrieving the Metrics",id:"retrieving-the-metrics",level:2},{value:"Improving Metrics",id:"improving-metrics",level:3},{value:"Example",id:"example",level:4}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["An HTTP response is made of a payload but also contains contextual information. Using API Testing you can also deal with the whole response envelope.\nWhen you're making an HTTP request in the composer, you're providing a variable name. The variable will host the entire response payload. When the operation completes, another variable called ",(0,n.jsx)(s.code,{children:"<variable_name>_response"})," is also created. Therefore various pieces of information such as HTTP header and metrics are contained in that variable."]}),"\n",(0,n.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["A Sauce Labs account (",(0,n.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(s.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(s.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,n.jsx)(s.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"retrieving-the-statuscode",children:"Retrieving the statusCode"}),"\n",(0,n.jsxs)(s.p,{children:["Let's say ",(0,n.jsx)(s.code,{children:"payload"})," is the name of the variable that contains the entire response payload.\nBy referencing the ",(0,n.jsx)(s.code,{children:"payload_response.statusCode"})," expression you can access the status code. This can be useful not only to check that a specific status code has been returned in your test but also to execute your tests for different status codes."]}),"\n",(0,n.jsxs)(s.p,{children:["You can also create positive and negative tests by adding multiple ",(0,n.jsx)(s.code,{children:"if"})," conditions to check each possible status code. For example, if you want to check the response payload when the status codes are ",(0,n.jsx)(s.code,{children:"200"}),", ",(0,n.jsx)(s.code,{children:"400"}),", and ",(0,n.jsx)(s.code,{children:"401"}),", here's how to do it:"]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/api-testing/multi-if-cond.webp"),alt:"Using multiple if conditions",width:"600"}),"\n",(0,n.jsx)(s.p,{children:"In Code view, it looks like this:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'- id: if\n  children:\n    - id: comment\n      text: Add here the assertions to validate the response payload for statusCode ==\n        "200"\n  expression: payload_response.statusCode == "200"\n- id: if\n  children:\n    - id: comment\n      text: Add here the assertions to validate the response payload for statusCode ==\n        "400"\n  expression: payload_response.statusCode == "400"\n- id: if\n  children:\n    - id: comment\n      text: Add here the assertions to validate the response payload for statusCode ==\n        "401"\n  expression: payload_response.statusCode == "401"\n'})}),"\n",(0,n.jsx)(s.h2,{id:"retrieving-the-header",children:"Retrieving the Header"}),"\n",(0,n.jsx)(s.p,{children:"Headers are also a big part of the response."}),"\n",(0,n.jsxs)(s.p,{children:["For example, you can retrieve the ",(0,n.jsx)(s.code,{children:"content-type"})," using this expression: ",(0,n.jsx)(s.code,{children:"payload_response.headers['content-type']"}),". You might want to check that the content type is the expected one so a proper assertion could be the following:"]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/api-testing/content-type.png"),alt:"assertion for content-type",width:"600"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"- id: assert-equals\n  expression: payload_response.headers['content-type']\n  value: application/json; charset=utf-8\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You might want to also check if the response is cached, under what conditions and for how long. For this check you can use ",(0,n.jsx)(s.code,{children:"payload_response.headers['cache-control']"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"retrieving-the-metrics",children:"Retrieving the Metrics"}),"\n",(0,n.jsx)(s.p,{children:"Another piece of information that you might want to check are the performance metrics. You can create specific assertions to verify performance metrics."}),"\n",(0,n.jsx)(s.p,{children:"The metrics object consists of three values as shown below:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'"metrics": {\n  "latency": 310,\n  "fetch": 1,\n  "overall": 460\n}\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"latency"})," is the time to the first byte."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"fetch"})," is the total download time of the payload."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"overall"})," is fetch and latency combined."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Using the values you can write assertions to verify that the values are below a specific amount of time like the below example in Code view:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"- id: assert-less\n  expression: payload_response.metrics.latency\n  value: 350\n- id: assert-less\n  expression: payload_response.metrics.fetch\n  value: 350\n- id: assert-less\n  expression: payload_response.metrics.overall\n  value: 450\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The following shows the ",(0,n.jsx)(s.code,{children:"overall"})," example in Visual view:"]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("/img/api-testing/metrics-assert-less-visual.webp"),alt:"An Assert-Less component in Visual view",width:"600"}),"\n",(0,n.jsx)(s.h3,{id:"improving-metrics",children:"Improving Metrics"}),"\n",(0,n.jsx)(s.p,{children:"The performance of the API can be mission-critical in some cases, and cataloging metrics can be as important as collecting them."}),"\n",(0,n.jsx)(s.p,{children:"The classic approach of creating big tables of HTTP hits with the actual URL being called (and its performance) is certainly accurate, but it's far from being easy to review because URLs contain variables and hardly represent what the action was about."}),"\n",(0,n.jsx)(s.p,{children:"Sauce Labs API Testing, as a default, works in this classic way, but also gives you the ability to change the footprint of requests based on your organization's needs."}),"\n",(0,n.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.p,{children:"The following example includes a route with a parameter:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-http",metastring:"request",children:"http://www.whereever.com/[id]/details\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Each ",(0,n.jsx)(s.code,{children:"REST"})," run for this route will produce a new line in the metrics view:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-http",metastring:"request",children:"http://www.whereever.com/1/details\nhttp://www.whereever.com/2/details\nhttp://www.whereever.com/3/details\nhttp://www.whereever.com/4/details\n...\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To produce a single endpoint for reporting from each one of these calls, you can use a ",(0,n.jsx)(s.a,{href:"/api-testing/composer/io-components/#config",children:"footprint"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);