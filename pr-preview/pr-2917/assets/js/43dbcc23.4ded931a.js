"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[92725],{10589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(74848),r=n(28453);const s={id:"testing-graphql",title:"Testing GraphQL",sidebar_label:"Testing GraphQL",keywords:["api-testing","how-to","graphql"]},i=void 0,a={id:"api-testing/on-prem/how-to/testing-graphql",title:"Testing GraphQL",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/testing-graphql.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/testing-graphql",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/how-to/testing-graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/testing-graphql.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"testing-graphql",title:"Testing GraphQL",sidebar_label:"Testing GraphQL",keywords:["api-testing","how-to","graphql"]},sidebar:"apif",previous:{title:"Setup Notifications (Performance Alerts)",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/how-to/setup-notifications-performance-alerts"},next:{title:"Update Input",permalink:"/sauce-docs/pr-preview/pr-2917/api-testing/on-prem/how-to/update-input"}},p={},c=[{value:"Testing a Query",id:"testing-a-query",level:2},{value:"Testing a Mutation",id:"testing-a-mutation",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"GraphQL is a fantastic tool for creating versatile, eminently flexible servers. With API Fortress, testing GraphQL queries is as easy as testing regular REST endpoints."}),"\n",(0,o.jsxs)(t.p,{children:["API Fortress provides a demonstration GraphQL environment at: ",(0,o.jsx)(t.a,{href:"https://graphserverlet.herokuapp.com/graphql",children:"GraphServerlet"})]}),"\n",(0,o.jsx)(t.p,{children:"The query and mutation below are formatted for this environment."}),"\n",(0,o.jsx)(t.h2,{id:"testing-a-query",children:"Testing a Query"}),"\n",(0,o.jsxs)(t.p,{children:["If the server has GraphicQL enabled, creating your queries through that tool and then copying the generated URLs into an API Fortress GET component is an acceptable process. ",(0,o.jsx)(t.strong,{children:"However,\xa0this process does not lend itself to either readability or replicability. The preferred method is passing the query as a POST body."})]}),"\n",(0,o.jsx)(t.p,{children:"If we're sending a query request to our GraphQL server, we would format our POST body as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n"query": "query ($id: Int!) { course(id: $id) { id, title, author, description, topic, url }}",\n"variables": { "id": 1 }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"The above object says the following: we are querying for a specific course by ID, and wish our response body to contain the ID, Title, Author, Description, Topic, and URL of that entry. If we send this body as a POST to\xa0our test GraphQL environment, our response will look like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n "data": {\n   "course": {\n   "id": 1,\n   "title": "The Complete Node.js Developer Course",\n   "author": "Andrew Mead, Rob Percival",\n   "description": "Learn Node.js by building real-world applications with\n    Node, Express, MongoDB, Mocha, and more!",\n   "topic": "Node.js",\n   "url": "https://codingthesmartway.com/courses/nodejs/"\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Since our response is a JSON body, API Fortress is fully capable of automatically generating a test to validate future responses from this query."}),"\n",(0,o.jsx)(t.h2,{id:"testing-a-mutation",children:"Testing a Mutation"}),"\n",(0,o.jsx)(t.p,{children:"A mutation is a GraphQL operation that makes a change to the data being provided. Whereas a GraphQL Query that performs a READ, a Mutation performs a CREATE, UPDATE, or DELETE, rounding out our CRUD operations."}),"\n",(0,o.jsx)(t.p,{children:"A Mutation is also passed as a POST body to the GraphQL endpoint in question:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n"query": "mutation ($id: Int!, $topic: String!) { updateCourseTopic(id: $id, topic: $topic) { title, topic }}",\n"variables": { "id": 1, "topic": "Ruby" }\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"This Mutation is executing the 'updateCourseTopic' operation on the database entry with the ID of 1 and changing its 'topic' value to 'Ruby'. Note the 'mutation' keyword in place of the 'query' keyword from the Query example. This Mutation would return the following response from our test GraphQL environment:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n"data": {\n"updateCourseTopic": {\n"title": "The Complete Node.js Developer Course",\n"topic": "Ruby"\n}\n}\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Again, as this is a valid JSON response body, API Fortress is able to generate a test automatically to validate its schema in the future."})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);