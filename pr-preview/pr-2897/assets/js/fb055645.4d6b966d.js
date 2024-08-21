"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[37122],{52180:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=n(74848),i=n(28453);const t={id:"base-actors",title:"Bloodhound: Base Actors",sidebar_label:"Base Actors"},o=void 0,c={id:"api-testing/on-prem/bloodhound/base-actors",title:"Bloodhound: Base Actors",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/base-actors.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/base-actors",permalink:"/api-testing/on-prem/bloodhound/base-actors",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/base-actors.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"base-actors",title:"Bloodhound: Base Actors",sidebar_label:"Base Actors"},sidebar:"apif",previous:{title:"Flows",permalink:"/api-testing/on-prem/bloodhound/flows"},next:{title:"Load Balancing",permalink:"/api-testing/on-prem/bloodhound/load-balancing"}},d={},a=[{value:"Type: Proxy",id:"type-proxy",level:2},{value:"<code>RequestActor</code>",id:"requestactor",level:3},{value:"<code>UpstreamHttpActor</code>",id:"upstreamhttpactor",level:3},{value:"<code>UpstreamFileActor</code>",id:"upstreamfileactor",level:3},{value:"<code>SendBackActor</code>",id:"sendbackactor",level:3},{value:"Type: Sidecar",id:"type-sidecar",level:2},{value:"<code>AccessLoggerActor</code>",id:"accessloggeractor",level:3},{value:"<code>GenericLoggerActor</code>",id:"genericloggeractor",level:3},{value:"<code>FileAppenderSerializerActor</code>",id:"fileappenderserializeractor",level:3},{value:"Type: Transformer",id:"type-transformer",level:2},{value:"<code>TransformHeadersActor</code>",id:"transformheadersactor",level:3},{value:"Type: Filter",id:"type-filter",level:2},{value:"<code>FilterActor</code>",id:"filteractor",level:3},{value:"Additional Topics",id:"additional-topics",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Legacy Documentation"}),(0,r.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,r.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"type-proxy",children:"Type: Proxy"}),"\n",(0,r.jsx)(s.h3,{id:"requestactor",children:(0,r.jsx)(s.code,{children:"RequestActor"})}),"\n",(0,r.jsxs)(s.p,{children:["This is a special actor and needs to be instantiated with the special id ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"proxy/request"})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.proxy.RequestActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"config:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"discard_headers"}),": a list of request header names that need to be discarded immediately"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"upstreamhttpactor",children:(0,r.jsx)(s.code,{children:"UpstreamHttpActor"})}),"\n",(0,r.jsx)(s.p,{children:"The default upstream actor."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.proxy.UpstreamHttpActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidcars:"})," yes"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"config:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"connect_timeout"}),": timeout for the connection process in milliseconds"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"socket_timeout"}),": timeout for silent socket in milliseconds"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"redirects_enabled"}),": set to true if you want Bloodhound to resolve redirects instead of forwarding to the client"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"max_redirects"}),": if redirects are enabled, maximum number of redirects before giving up"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"discard_headers"}),": a list of response header names that need to be discarded immediately"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"upstreamfileactor",children:(0,r.jsx)(s.code,{children:"UpstreamFileActor"})}),"\n",(0,r.jsx)(s.p,{children:"An upstream actor that pulls content from text files."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.proxy.UpstreamFileActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"config:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"basepath"}),": path to the files directory. The file name needs to be provided in the request url"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"sendbackactor",children:(0,r.jsx)(s.code,{children:"SendBackActor"})}),"\n",(0,r.jsx)(s.p,{children:"An actor taking care of performing the final checks, packaging and sending back the content."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.proxy.SendBackActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"type-sidecar",children:"Type: Sidecar"}),"\n",(0,r.jsx)(s.h3,{id:"accessloggeractor",children:(0,r.jsx)(s.code,{children:"AccessLoggerActor"})}),"\n",(0,r.jsxs)(s.p,{children:["A logger actor meant to log both inbound and outbound calls. The behavior of the logging activity is managed by the ",(0,r.jsx)(s.code,{children:"etc/logback.xml"})," file."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.sidecars.AccessLoggerActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidecars:"})," no"]}),"\n",(0,r.jsx)(s.h3,{id:"genericloggeractor",children:(0,r.jsx)(s.code,{children:"GenericLoggerActor"})}),"\n",(0,r.jsxs)(s.p,{children:["A logger to be used in a flow to log certain facts, determined by the user. The behavior of the logging activity is managed by the ",(0,r.jsx)(s.code,{children:"etc/logback.xml"})," file."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.sidecars.GenericLoggerActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidecars:"})," no"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"config:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"value"}),": the content to be logged"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"evaluated"}),": if set to true, the ",(0,r.jsx)(s.code,{children:"value"})," field will be interpreted as a SpEL script. The message is accessible via the ",(0,r.jsx)(s.code,{children:"msg"})," variable."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"fileappenderserializeractor",children:(0,r.jsx)(s.code,{children:"FileAppenderSerializerActor"})}),"\n",(0,r.jsx)(s.p,{children:"Serializes a full API conversation to JSON and appends it to a file."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.sidecars.serializers.FileAppenderSerializerActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidecars:"})," no"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"config:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"filename"}),": name of the file"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"disable_on_header"}),": if the provided header is present in the request, then the conversation will skip serialization"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"enable_on_header"}),": if the provided header is present in the request, then the conversation will be serialized"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"discard_request_headers"}),": list of request headers that should not appear in the serialized conversation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"discard_response_headers"}),": list of response headers that should not appear in the serialized conversation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"allow_content_types"}),": full or partial response content types which make the request eligible for serialization. If the list is null or empty, all content types will be accepted"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"type-transformer",children:"Type: Transformer"}),"\n",(0,r.jsx)(s.h3,{id:"transformheadersactor",children:(0,r.jsx)(s.code,{children:"TransformHeadersActor"})}),"\n",(0,r.jsx)(s.p,{children:"Alters the headers of a message. If the transformer is placed before an Upstream actor, it modifies the request headers. If after, it modifies the response headers."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.transformers.TransformHeadersActor"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"config:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"add"}),": adds a header. If ",(0,r.jsx)(s.code,{children:"evaluated"})," is set to ",(0,r.jsx)(s.code,{children:"\u0167rue"}),", the value is treated as a SpEL script. For Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"add:\n- name: header\\_name\n  value: header\\_value\n  evaluated: false\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"remove"}),": removes a header. For Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"remove:\n- name: header\\_name\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"set"}),": sets the value of an existing header, or adds it if the header is not present. If ",(0,r.jsx)(s.code,{children:"evaluated"})," is set to ",(0,r.jsx)(s.code,{children:"\u0167rue"}),", the value is treated as a SpEL script. For Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"set:\n- name: header\\_name\n  value: header\\_value\n  evaluated: false\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"type-filter",children:"Type: Filter"}),"\n",(0,r.jsx)(s.h3,{id:"filteractor",children:(0,r.jsx)(s.code,{children:"FilterActor"})}),"\n",(0,r.jsx)(s.p,{children:"Filters out any request not matching a certain set of criteria."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"class:"})," ",(0,r.jsx)(s.code,{children:"com.apifortress.afthem.actors.filters.FilterActor"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"sidecars:"})," yes"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"config:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"accept"}),": a list of conditions. If verified, the message will be accepted. For Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"accept:\n- value: \"#msg.request().getHeader('accept')=='application/json'\"\n  evaluated: true\n- value: \"#msg.request().getHeader('key')=='ABC123'\"\n  evaluated: true\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Just like previous filters, if evaluated is true,",(0,r.jsx)(s.code,{children:"value"})," will be evaluated as SpEL script."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"reject"}),": a list of conditions. If verified, the message will be rejected. Example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"reject:\n- value: \"#msg.request().method()!='GET'\"\n  evaluated: true\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"additional-topics",children:"Additional Topics"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Advanced Actors"}),": Please read the following ",(0,r.jsx)(s.a,{href:"/api-testing/on-prem/bloodhound/advanced-actors",children:"documentation"})," to learn more about advanced actors."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(96540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);