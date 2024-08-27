"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[95291],{75368:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(74848),t=s(28453);const i={id:"advanced-actors",title:"Bloodhound: Advanced Actors",sidebar_label:"Advanced Actors"},o=void 0,c={id:"api-testing/on-prem/bloodhound/advanced-actors",title:"Bloodhound: Advanced Actors",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/advanced-actors.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/advanced-actors",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/bloodhound/advanced-actors",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/advanced-actors.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"advanced-actors",title:"Bloodhound: Advanced Actors",sidebar_label:"Advanced Actors"},sidebar:"apif",previous:{title:"Fine Tuning",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/bloodhound/fine-tuning"},next:{title:"Introduction",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/on-prem/bloodhound/module-actors"}},d={},a=[{value:"Type: Transformers",id:"type-transformers",level:2},{value:"<code>ReplaceUpstreamActor</code>",id:"replaceupstreamactor",level:3},{value:"<code>EndpointIdentifierActor</code>",id:"endpointidentifieractor",level:3},{value:"<code>TransformPayloadActor</code>",id:"transformpayloadactor",level:3},{value:"<code>DeserializerActor</code>",id:"deserializeractor",level:3},{value:"<code>AddMetaActor</code>",id:"addmetaactor",level:3},{value:"Type: Filters",id:"type-filters",level:2},{value:"<code>ApiKeyFilterActor</code>",id:"apikeyfilteractor",level:3},{value:"<code>BasicAuthFilterActor</code>",id:"basicauthfilteractor",level:3},{value:"<code>ThrottlingActor</code>",id:"throttlingactor",level:3},{value:"Additional Topics:",id:"additional-topics",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"type-transformers",children:"Type: Transformers"}),"\n",(0,r.jsx)(n.h3,{id:"replaceupstreamactor",children:(0,r.jsx)(n.code,{children:"ReplaceUpstreamActor"})}),"\n",(0,r.jsx)(n.p,{children:"Replaces the upstream base URL if a certain condition is verified."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," ",(0,r.jsx)(n.code,{children:"com.apifortress.afthem.actors.transformers.ReplaceUpstreamActor"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expression"}),": a SpEL expression returning a boolean. The condition to be matched"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"upstream"}),": the new upstream base URL"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"endpointidentifieractor",children:(0,r.jsx)(n.code,{children:"EndpointIdentifierActor"})}),"\n",(0,r.jsx)(n.p,{children:"Labels the current request based on certain factors. The label is then stored within the request in a variable named callId. The use of this actor is to identify calls and take subsequent actions based on the findings."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," ",(0,r.jsx)(n.code,{children:"com.apifortress.afthem.actors.transformers.EndpointIdentifierActor"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsx)(n.p,{children:"The configuration looks like the following."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"regex:\n[label1]:\nurl: [pattern]\nmethod: [method]\n[label2]:\nurl: [pattern]\nmethod: [method]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"label"}),": the label to assign"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"url"}),": the regex to identify the URL"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"method"})," (optional): the method of the call"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"transformpayloadactor",children:(0,r.jsx)(n.code,{children:"TransformPayloadActor"})}),"\n",(0,r.jsx)(n.p,{children:"Alters a textual payload in a message. If the transformer is placed before an Upstream actor, it modifies the request payload. If after, it modifies the response payload."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," ",(0,r.jsx)(n.code,{children:"com.apifortress.afthem.actors.transformers.TransformPayloadActor"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"set"}),": sets the payload with the given value"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"replace"}),": replaces all the substrings matching a certain regular expression with the provided string. Example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"replace:\nregex: foo\nvalue: bar\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"deserializeractor",children:(0,r.jsx)(n.code,{children:"DeserializerActor"})}),"\n",(0,r.jsxs)(n.p,{children:["Deserialize data coming in form of string or array of bytes, to data structures (maps, arrays). The output of this operation is then stored into a ",(0,r.jsx)(n.code,{children:"meta"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," ",(0,r.jsx)(n.code,{children:"com.apifortress.afthem.actors.transformers.DeserializerActor"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"expression"}),": a path to the piece of data you wish to deserialize. For example ",(0,r.jsx)(n.code,{children:"#msg.request().payload()"})," is the path to the request payload"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"contentType"}),": the expected content type of the inbound data"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"meta"}),": the key of the meta that will store the result of the deserialization"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"addmetaactor",children:(0,r.jsx)(n.code,{children:"AddMetaActor"})}),"\n",(0,r.jsx)(n.p,{children:"Adds a piece of meta information in the message."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," ",(0,r.jsx)(n.code,{children:"com.apifortress.afthem.actors.transformers.AddMetaActor"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),": the key of the meta"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": the value of the meta. If ",(0,r.jsx)(n.code,{children:"evaluated"})," is set to ",(0,r.jsx)(n.code,{children:"true"}),", it can be a dynamic expression"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"evaluated"}),": true if you need the value to be evaluated"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"type-filters",children:"Type: Filters"}),"\n",(0,r.jsx)(n.h3,{id:"apikeyfilteractor",children:(0,r.jsx)(n.code,{children:"ApiKeyFilterActor"})}),"\n",(0,r.jsx)(n.p,{children:"Filters out any request that does not carry a valid API key in the headers or in the query string. This base actor loads the API keys from a YAML file."}),"\n",(0,r.jsxs)(n.p,{children:["When the API key is recognized, the ApiKey object is stored in the ",(0,r.jsx)(n.code,{children:"key"})," meta of the request."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," com.apifortress.afthem.actors.filters.ApiKeyFilterActor"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sidecars"}),": yes"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filename"}),": path to a file containing the API keys"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"in"}),": either ",(0,r.jsx)(n.code,{children:"query"})," (expecting the key in the query string) or ",(0,r.jsx)(n.code,{children:"header"})," (expecting the key in the headers)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"name"}),": key of the field carrying the API key"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The file format looks like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"api_keys:\n- api_key: ABC123\n  app_id: John Doe\n  enabled: true\n- api_key: DEF456\n  app_id: Jane Doe\n  enabled: true\n"})}),"\n",(0,r.jsx)(n.h3,{id:"basicauthfilteractor",children:(0,r.jsx)(n.code,{children:"BasicAuthFilterActor"})}),"\n",(0,r.jsx)(n.p,{children:"Filters out any request that does not carry a valid basic authentication header. The valid users are stored in an htpasswd (md5, apr1) compatible file."}),"\n",(0,r.jsxs)(n.p,{children:["When the authentication succeeds, the username is stored in the ",(0,r.jsx)(n.code,{children:"user"})," meta of the request."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," ",(0,r.jsx)(n.code,{children:"com.apifortress.afthem.actors.filters.BasicAuthFilterActor"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filename"}),": path to a htpasswd-compatible file"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"throttlingactor",children:(0,r.jsx)(n.code,{children:"ThrottlingActor"})}),"\n",(0,r.jsx)(n.p,{children:"Limits the number of requests/second the gateway will accept and pass through. Multiple counting buckets are present."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"class:"})," ",(0,r.jsx)(n.code,{children:"com.apifortress.afthem.actors.filters.ThrottlingActor"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"config:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"global"}),": (int) the maximum number of requests per second globally for this flow"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"app_id"}),": (int) maximum number of requests per second per App ID (as defined by API keys)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ip_address"}),": (int) maximum number of requests per second per requesting IP address"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"additional-topics",children:"Additional Topics:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Module Actors"}),": Read more about ",(0,r.jsx)(n.a,{href:"/api-testing/on-prem/bloodhound/module-actors",children:"Bloodhound Modules"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);