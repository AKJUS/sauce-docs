"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52941],{11712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(74848),i=t(28453),o=t(86025);const s={id:"elastic-kibana",title:"Connectors: Elastic/Kibana",sidebar_label:"Elastic/Kibana",keywords:["api-testing","integrations","elastic","kibana","connectors"]},r=void 0,c={id:"api-testing/on-prem/integrations/connectors/elastic-kibana",title:"Connectors: Elastic/Kibana",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/connectors/elastic-kibana.md",sourceDirName:"api-testing/on-prem/integrations/connectors",slug:"/api-testing/on-prem/integrations/connectors/elastic-kibana",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/integrations/connectors/elastic-kibana",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/connectors/elastic-kibana.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"elastic-kibana",title:"Connectors: Elastic/Kibana",sidebar_label:"Elastic/Kibana",keywords:["api-testing","integrations","elastic","kibana","connectors"]},sidebar:"apif",previous:{title:"DataDog",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/integrations/connectors/datadog"},next:{title:"Jira",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/integrations/connectors/jira"}},l={},d=[{value:"Configure the Connector",id:"configure-the-connector",level:2},{value:"Example Use Case",id:"example-use-case",level:2},{value:"Sample Data:",id:"sample-data",level:3},{value:"Sample Visualization:",id:"sample-visualization",level:3}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Legacy Documentation"}),(0,a.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,a.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,a.jsx)(n.p,{children:"Using the Elastic connector you can send failure information to Elasticsearch then use that data to create visualizations in Kibana."}),"\n",(0,a.jsx)(n.p,{children:"Below is a quick guide to setting up and using the Elastic connector."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This connector does not come pre-loaded out of the box, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance ",(0,a.jsx)(n.a,{href:"/api-testing/on-prem/integrations/add-new-connector",children:"click here."})]})}),"\n",(0,a.jsx)(n.h2,{id:"configure-the-connector",children:"Configure the Connector"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Access the company dashboard by clicking the gear icon in the top right corner"}),"\n",(0,a.jsx)(n.li,{children:'Select "Alert groups"'}),"\n",(0,a.jsx)(n.li,{children:"Create a new alert group if you don\u2019t have already one for this purpose"}),"\n",(0,a.jsx)(n.li,{children:"Select the socket icon"}),"\n",(0,a.jsx)(n.li,{children:'Select "+ Connector to this group"'}),"\n",(0,a.jsx)(n.li,{children:'Select "Elastic" from the list'}),"\n",(0,a.jsxs)(n.li,{children:["Enter the required settings","\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"username:"})," The username for basic authentication"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"password:"})," The password for basic authentication."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"baseUrl"}),": The url to the Elasticsearch engine"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Save"}),"\n",(0,a.jsx)(n.li,{children:"From the main dashboard, edit the \u201cSettings\u201d the project(s) you want to assign the alert group to if the group has not been assigned yet"}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/03/elasticgif.gif"),alt:"elastic.gif"}),"\n",(0,a.jsx)(n.h2,{id:"example-use-case",children:"Example Use Case"}),"\n",(0,a.jsx)(n.h3,{id:"sample-data",children:"Sample Data:"}),"\n",(0,a.jsx)(n.p,{children:"Below is a sample of the data that will be pushed into Elasticsearch:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n"date": "2017-12-29T14:36:31+0000",\n"eventId": "5a4aa0a1-d071-4a05-981d-ff57e4ff3897",\n"test": {\n"name": "book",\n"id": "123a"\n},\n"value2": "fake project",\n"value1": "book",\n"companyName": "fake company",\n"eventType": "failure",\n"criticalFailures": [\n{\n"action": "get",\n"expression": "get http://www.example.com",\n"status": "Generic Failure",\n"failureType": "MissingPropertyException",\n"extra": "Error parsing URL. Missing variable yay"\n}\n],\n"companyId": 1,\n"failuresCount": 1,\n"location": "Ashburn,Virginia",\n"projectName": "fake project",\n"projectId": 1\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample-visualization",children:"Sample Visualization:"}),"\n",(0,a.jsx)(n.p,{children:"Once the data is in Elasticsearch, you can pull that data into Kibana and create visualizations for it. You can create many things using the data in the JSON above."}),"\n",(0,a.jsx)(n.p,{children:"For example you could create a table to show all the test executions and their success or failure like so:"}),"\n",(0,a.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/03/Screen-Shot-2020-03-24-at-10.46.10-AM.png"),alt:"screenshot"}),"\n",(0,a.jsx)(n.p,{children:"You can also chart the events and failures on a graph like this:"}),"\n",(0,a.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/03/Screen-Shot-2020-03-24-at-10.46.18-AM.png"),alt:"screenshot"}),"\n",(0,a.jsx)(n.p,{children:"Then put it all together in a dashboard to make it really easy to monitor and track your test executions:"}),"\n",(0,a.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/04/KibanaIntegrations_SS-docs.png"),alt:"screenshot"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);