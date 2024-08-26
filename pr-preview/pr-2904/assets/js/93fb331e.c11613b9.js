"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[11255],{87747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(74848),s=n(28453),i=n(86025);const r={id:"dynamic-header",title:"Creating Dynamic Headers",sidebar_label:"Creating Dynamic Headers",description:"How to generate a dynamic header"},o=void 0,c={id:"api-testing/use-cases/dynamic-header",title:"Creating Dynamic Headers",description:"How to generate a dynamic header",source:"@site/docs/api-testing/use-cases/dynamic-header.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/dynamic-header",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/use-cases/dynamic-header",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/dynamic-header.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"dynamic-header",title:"Creating Dynamic Headers",sidebar_label:"Creating Dynamic Headers",description:"How to generate a dynamic header"},sidebar:"docs",previous:{title:"Creating an Authentication Snippet",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/use-cases/vault-snippet"},next:{title:"Exchanging Token",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/use-cases/auth-token"}},d={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Example: Sending Different Header Based on the Response Type",id:"example-sending-different-header-based-on-the-response-type",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Most APIs have only one response format, either JSON or XML. But what should you do when an API endpoint can return either JSON or XML? You could write two different tests, one for each response type, but you would be repeating a good amount of code in both tests."}),"\n",(0,a.jsx)(t.p,{children:"Sauce Labs API Testing allows you to test both, using the same test for almost all test cases. In a few cases, you will need to add extra logic to allow the platform to distinguish between the two formats."}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(t.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,a.jsx)(t.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Familiarity with the ",(0,a.jsx)(t.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example-sending-different-header-based-on-the-response-type",children:"Example: Sending Different Header Based on the Response Type"}),"\n",(0,a.jsxs)(t.p,{children:["Consider a scenario where you need to pass the Accept value in the Header that is ",(0,a.jsx)(t.code,{children:"application/json"})," if you are testing the JSON and ",(0,a.jsx)(t.code,{children:"application/xml"})," if you are testing the XML. Usually in this case, you should make two different calls, to be able to pass the different values in the header."]}),"\n",(0,a.jsx)(t.p,{children:"The image shows the above scenario which requires setting up two separate calls. This solution is not particularly adherent to the Don't Repeat Yourself (DRY) rule of programming."}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-testing/use-cases/accept_header.webp"),alt:"two different calls"}),"\n",(0,a.jsx)(t.p,{children:"The solution is the following:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.strong,{children:"Input Set"})," add the different formats as variables."]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-testing/use-cases/inputSets.png"),alt:"two different input sets"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Remove one call and add the format variable in the ",(0,a.jsx)(t.strong,{children:"Mode"})," input."]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-testing/use-cases/varFormat.png"),alt:"mode is dynamic"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The header is still static. You need to turn it into a dynamic one that changes to suit the data type of the API you are testing. Above the I/O operation, add the ",(0,a.jsx)(t.strong,{children:"Set (Variable)"})," component that will return the appropriate value."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"if (format == 'xml')\n   return 'application/xml'\nelse\n   return 'application/json'\n"})}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-testing/use-cases/acceptHeader.webp"),alt:"set accept header"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"acceptHeader"})," variable will be ",(0,a.jsx)(t.code,{children:"application/xml"})," if the format is ",(0,a.jsx)(t.em,{children:"XML"})," and ",(0,a.jsx)(t.code,{children:"application/json"})," otherwise: since there are only two different formats, it will be ",(0,a.jsx)(t.code,{children:"application/json"})," only for JSON format."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Remove the static header and add ",(0,a.jsx)(t.code,{children:"${acceptHeader}"})," as the Header value."]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/api-testing/use-cases/dynamicHeader.png"),alt:"dynamic header"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The final result of the test will look like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"- id: set\n  var: acceptHeader\n  mode: lang\n  lang: javascript\n  body: |-\n    if (format == 'xml') return 'application/xml'\n    else return 'application/json'\n- id: get\n  children:\n    - id: header\n      name: Accept\n      value: ${acceptHeader}\n  url: ${protocol}${domain}${endpoint}\n  var: payload\n  mode: ${format}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If you run the test, it will be executed two times: once for ",(0,a.jsx)(t.code,{children:"XML"})," and once for ",(0,a.jsx)(t.code,{children:"JSON"}),", ensuring that the header will have the correct value."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);