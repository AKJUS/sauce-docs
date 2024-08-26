"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[69819],{53573:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=s(74848),i=s(28453),r=s(86025);const o={id:"github-for-datasets",title:"GitHub \u2013 How to Use Files as Datasource (Large or Small Datasets)",sidebar_label:"GitHub \u2013 Use Files as Datasource",keywords:["api-testing","how-to","github"]},a=void 0,l={id:"api-testing/on-prem/how-to/github-for-datasets",title:"GitHub \u2013 How to Use Files as Datasource (Large or Small Datasets)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/github-for-datasets.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/github-for-datasets",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/how-to/github-for-datasets",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/github-for-datasets.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"github-for-datasets",title:"GitHub \u2013 How to Use Files as Datasource (Large or Small Datasets)",sidebar_label:"GitHub \u2013 Use Files as Datasource",keywords:["api-testing","how-to","github"]},sidebar:"apif",previous:{title:"Generating Fake Test Data",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/how-to/generating-fake-test-data"},next:{title:"How to Create a Dynamic Header",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/how-to/create-a-dynamic-header"}},c={},d=[{value:"Set up GitHub",id:"set-up-github",level:2},{value:"Create a simple test",id:"create-a-simple-test",level:2},{value:"Appendix A: Selection Strategies for Large Datasets",id:"appendix-a-selection-strategies-for-large-datasets",level:2},{value:"Simple selectors",id:"simple-selectors",level:3},{value:"Advanced Slicing",id:"advanced-slicing",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,t.jsx)(n.p,{children:"Github is a valuable platform to use when you want to pull files and use them as a datasource. Some examples are CSVs and JSON files. Below is a walk through on how to make them work."}),"\n",(0,t.jsx)(n.h2,{id:"set-up-github",children:"Set up GitHub"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new access token associated to your GitHub profile by accessing ",(0,t.jsx)(n.a,{href:"https://github.com/settings/tokens",children:"https://github.com/settings/tokens"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/1.png"),alt:"1.png"}),"\n",(0,t.jsxs)(n.p,{children:["When creating the token make sure you're selecting the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"public_repo"})})," subcategory or the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"repo"})})," category based on which type of repository that will host your input data."]}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/2.png"),alt:"2.png"}),"\n",(0,t.jsx)(n.p,{children:"Keep in mind that GitHub will show you the token only once, so make sure you\u2019re copying and pasting it somewhere safe and accessible."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a repository that will host your input data if one doesn't exist already."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Commit and push a data source file. It can be a CSV, JSON or XML file. We will use a CSV file for the purposes of this example."}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/3.png"),alt:"3.png"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-simple-test",children:"Create a simple test"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a test"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduce the GitHub component and configure it accordingly"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/4.png"),alt:"4.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Account"})," is your GitHub username"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Repository"})," is the name of the repository that your data file is pushed to."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Branch"})," is the repository branch that the desired version of the data file is in."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Token"})," is the token described above, generated in the GitHub platform."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Variable"})," is the variable that the payload will be stored under."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Path"})," is the name of the file in the repository."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mode"})," is the filetype of the file in the repository."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The system will retrieve the document, parse it as a CSV file and assign it to the ",(0,t.jsx)(n.strong,{children:"inputData"})," variable"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(optional) Verify that everything is set up correctly by adding a comment printing the parsed data as in:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/5.png"),alt:"5.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Run the test:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/6.png"),alt:"6.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now, let\u2019s iterate over a subset of this input set. Introduce a selection strategy if necessary:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/7.png"),alt:"7.png"}),"\n",(0,t.jsx)(n.p,{children:"This will iterate over a subset of 5 randomly selected items. Other strategies are described in Appendix A"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Within each iteration, we suggest that you introduce a comment that will help you identify which item you\u2019re looking at for debugging purposes."}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/8.png"),alt:"8.png"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/9.png"),alt:"9.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the data to perform your HTTP call:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/10.png"),alt:"10.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduce some assertions for testing purposes"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/11.png"),alt:"11.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"And run it:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/12.png"),alt:"12.png"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"appendix-a-selection-strategies-for-large-datasets",children:"Appendix A: Selection Strategies for Large Datasets"}),"\n",(0,t.jsx)(n.h3,{id:"simple-selectors",children:"Simple selectors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"None."})," If the number of iterations is greater than 100, the system will randomly select 100 elements, unless you override the maximum iterator size."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Pick(n)."})," Ask the system to randomly select a ",(0,t.jsx)(n.em,{children:"n"}),"-sized sample of elements. Example: ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"inputData.pick(5)"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Slice."})," If you\u2019re interested in using a specific slice of data from the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"inputData"})}),", you can slice it according to your needs. Example: ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"inputData[10..20]"})})," (will select items from index 10 to index 20)**"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"advanced-slicing",children:"Advanced Slicing"}),"\n",(0,t.jsx)(n.p,{children:"Assume you have a 1000 lines CSV file and you need to use them all. While this is technically possible (by overriding the maximum number of iterations) the usefulness of the test may vary on:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"How long the HTTP request takes"}),"\n",(0,t.jsx)(n.li,{children:"How complex the test is going to be"}),"\n",(0,t.jsx)(n.li,{children:"The number of errors the test may trigger"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Moreover, the readability of the resulting document may degrade when trying to debug an issue."}),"\n",(0,t.jsx)(n.p,{children:"Here\u2019s a slicing technique we suggest to ease these points."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduce the following 2 variables in the global parameters:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/13.png"),alt:"13.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the following expression in your each statement:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"inputData[offset.toInteger().offset.toInteger() + limit.toInteger()]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Which reads: ",(0,t.jsx)(n.em,{children:"slice inputData from the offset index to the offset+limit index"})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"toInteger()"})," command is required as variables are always strings and we need to work with numbers."]})}),"\n",(0,t.jsx)(n.p,{children:"By doing so we are setting a baseline: as a default test input data from index 0 to index 99."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Introduce as many environments as the slices count, overriding the offset variable"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/15.png"),alt:"15.png"}),"\n",(0,t.jsx)(n.p,{children:"Now you can run the test on specific 100 elements slices, by selecting the environment."}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/16.png"),alt:"16.png"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/17.png"),alt:"17.png"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/18.png"),alt:"18.png"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Finally, you can schedule your slices accordingly:"}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/19.png"),alt:"19.png"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);