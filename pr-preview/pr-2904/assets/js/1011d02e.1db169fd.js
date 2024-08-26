"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[60313],{73058:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=o(74848),r=o(28453);const i={id:"mongodb",title:"Bloodhound: MongoDB Module",sidebar_label:"MongoDB"},t=void 0,d={id:"api-testing/on-prem/bloodhound/module-actors/mongodb",title:"Bloodhound: MongoDB Module",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/module-actors/mongodb.md",sourceDirName:"api-testing/on-prem/bloodhound/module-actors",slug:"/api-testing/on-prem/bloodhound/module-actors/mongodb",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/module-actors/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/module-actors/mongodb.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"mongodb",title:"Bloodhound: MongoDB Module",sidebar_label:"MongoDB"},sidebar:"apif",previous:{title:"JBDC",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/module-actors/jdbc"},next:{title:"RabbitMQ",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/module-actors/rabbitmq"}},c={},l=[{value:"Configuration Loader",id:"configuration-loader",level:2},{value:"<code>backend</code>",id:"backend",level:3},{value:"<code>flow</code>",id:"flow",level:3},{value:"<code>implementers</code>",id:"implementers",level:3},{value:"Proxy",id:"proxy",level:2},{value:"<code>UpstreamMongoActor</code>",id:"upstreammongoactor",level:3},{value:"Filters",id:"filters",level:2},{value:"<code>MongoApiKeyFilterActor</code>",id:"mongoapikeyfilteractor",level:3},{value:"Sidecars",id:"sidecars",level:2},{value:"<code>MongoSerializerActor</code>",id:"mongoserializeractor",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The module implements a number of functions requiring interaction with the MongoDB database."}),"\n",(0,s.jsx)(n.h2,{id:"configuration-loader",children:"Configuration Loader"}),"\n",(0,s.jsx)(n.p,{children:"With this loader you can store and load configuration items in MongoDB."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"class:"})," ",(0,s.jsx)(n.code,{children:"com.apifortress.afthem.modules.mongodb.config.loaders.MongoDbConfigLoader"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"configuration:"})}),"\n",(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"afthem.yml"})," file and update the ",(0,s.jsx)(n.code,{children:"config_loader.class"})," string with the provided class.\nAdd a ",(0,s.jsx)(n.code,{children:"params"})," map to the ",(0,s.jsx)(n.code,{children:"config_loader"}),"map to set the connection parameters.\nExample:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"config_loader:\nclass: com.apifortress.afthem.modules.mongodb.config.loaders.MongoDbConfigLoader\nparams:\ndatabase: afthem\ncollection: configuration\nuri: mongodb://localhost\n"})}),"\n",(0,s.jsx)(n.p,{children:"Here are some examples of configuration documents:"}),"\n",(0,s.jsx)(n.h3,{id:"backend",children:(0,s.jsx)(n.code,{children:"backend"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"type": "backend",\n"flow_id": "default",\n"prefix": "127.0.0.1/demo",\n"upstream": "http://demoapi.apifortress.com/api/retail"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"flow",children:(0,s.jsx)(n.code,{children:"flow"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"id": "default",\n"type": "flow",\n"flow": {\n"proxy/request": {\n"next": "proxy/upstream_http",\n"config": {},\n"sidecars": []\n},\n"proxy/upstream_http": {\n"next": "proxy/send_back",\n"config": {},\n"sidecars": []\n}\n}\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"implementers",children:(0,s.jsx)(n.code,{children:"implementers"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"type": "implementers",\n"implementers": [\n{\n"id": "request",\n"class": "com.apifortress.afthem.actors.proxy.RequestActor",\n"type": "proxy"\n},\n{\n"id": "upstream_http",\n"class": "com.apifortress.afthem.actors.proxy.UpstreamHttpActor",\n"type": "proxy"\n},\n{\n"id": "send_back",\n"class": "com.apifortress.afthem.actors.proxy.SendBackActor",\n"type": "proxy"\n}\n],\n"thread_pools": {\n"default": {\n"min": 1,\n"max": 1,\n"factor": 1\n}\n}\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"proxy",children:"Proxy"}),"\n",(0,s.jsx)(n.h3,{id:"upstreammongoactor",children:(0,s.jsx)(n.code,{children:"UpstreamMongoActor"})}),"\n",(0,s.jsx)(n.p,{children:"Upstream connecting to a MongoDB database. The body of the request must be shaped into a JSON document that either\nrepresents a query, or a document to insert."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"class:"})," ",(0,s.jsx)(n.code,{children:"com.apifortress.afthem.modules.mongodb.actors.proxy.UpstreamMongoActor"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sidecars"}),": yes"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"config:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uri"}),": the MongoDB URI"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"database"}),": the name of the MongoDB database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection"}),": the name of the connection to be used"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_documents"})," (default=100): a limiter on the number of returned documents. Overridden by header ",(0,s.jsx)(n.code,{children:"x-limit-results"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"headers:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x-op"}),': either "find" or "insert"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x-limit-results"})," (optional): limits the number of results"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Multi-flow"}),": no"]}),"\n",(0,s.jsx)(n.h2,{id:"filters",children:"Filters"}),"\n",(0,s.jsx)(n.h3,{id:"mongoapikeyfilteractor",children:(0,s.jsx)(n.code,{children:"MongoApiKeyFilterActor"})}),"\n",(0,s.jsx)(n.p,{children:"Filters out any request that does not carry a valid API key in the headers or in the query string.\nThis base actor loads the API keys from a YAML file."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"class:"})," ",(0,s.jsx)(n.code,{children:"com.apifortress.afthem.modules.mongodb.actors.filters.MongoApiKeyFilterActor"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"sidecars"}),": yes"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"config:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uri"}),": the MongoDB URI"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"database"}),": the name of the MongoDB database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection"}),": the name of the connection to be used"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"in"}),": either ",(0,s.jsx)(n.code,{children:"query"})," (expecting the key in the query string) or ",(0,s.jsx)(n.code,{children:"header"})," (expecting the key in the headers)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": key of the field carrying the API key"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Multi-flow"}),": no"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example document"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n"api_key": "123",\n"app_id": "TheFoobar",\n"enabled": true\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"sidecars",children:"Sidecars"}),"\n",(0,s.jsx)(n.h3,{id:"mongoserializeractor",children:(0,s.jsx)(n.code,{children:"MongoSerializerActor"})}),"\n",(0,s.jsx)(n.p,{children:"Serializes an API conversation and sends it to MongoDB for storage."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"class:"})," ",(0,s.jsx)(n.code,{children:"com.apifortress.afthem.modules.mongodb.actors.sidecars.serializers.MongoSerializerActor"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"configuration:"})}),"\n",(0,s.jsx)(n.p,{children:"General serializer settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disable_on_header"}),": if the provided header is present in the request, then the conversation will skip serialization"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enable_on_header"}),": if the provided header is present in the request, then the conversation will be serialized"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"discard_request_headers"}),": list of request headers that should not appear in the serialized conversation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"discard_response_headers"}),": list of response headers that should not appear in the serialized conversation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"allow_content_types"}),": full or partial response content types which make the request eligible for serialization. If\nthe list is null or empty, all content types will be accepted"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Extra serializer settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buffer_size"}),": the serializer can buffer a number of conversations and save them once the buffer is full to improve\nDB communication performance. If absent or if the value is less than 1, the document is inserted as asson as the actor\nreceives it"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extra_fields"}),": a map of k/v fields that should be added to the document."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"MongoDB settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"uri"}),": the MongoDB URI"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"database"}),": the name of the MongoDB database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"collection"}),": the name of the connection to be used"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Multi-flow"}),": no"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(96540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);