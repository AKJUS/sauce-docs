"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[9023],{88468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(74848),i=t(28453);const s={id:"rabbitmq",title:"Bloodhound: RabbitMQ Module",sidebar_label:"RabbitMQ"},r=void 0,a={id:"api-testing/on-prem/bloodhound/module-actors/rabbitmq",title:"Bloodhound: RabbitMQ Module",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/bloodhound/module-actors/rabbitmq.md",sourceDirName:"api-testing/on-prem/bloodhound/module-actors",slug:"/api-testing/on-prem/bloodhound/module-actors/rabbitmq",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/module-actors/rabbitmq",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/module-actors/rabbitmq.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"rabbitmq",title:"Bloodhound: RabbitMQ Module",sidebar_label:"RabbitMQ"},sidebar:"apif",previous:{title:"MongoDB",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/module-actors/mongodb"},next:{title:"Fortress Forwarder",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/on-prem/bloodhound/module-actors/fortress-forwarder"}},d={},l=[{value:"Sidecars",id:"sidecars",level:2},{value:"<code>RabbitSerializerActor</code>",id:"rabbitserializeractor",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The module implements an actor that connects to RabbitMQ and publishes the JSON-marshaled API conversation to a\nRabbitMQ exchange."}),"\n",(0,o.jsx)(n.h2,{id:"sidecars",children:"Sidecars"}),"\n",(0,o.jsx)(n.h3,{id:"rabbitserializeractor",children:(0,o.jsx)(n.code,{children:"RabbitSerializerActor"})}),"\n",(0,o.jsx)(n.p,{children:"Connects to RabbitMQ and publishes the JSON-marshaled API conversation to a\nRabbitMQ exchange."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"class:"})," ",(0,o.jsx)(n.code,{children:"com.apifortress.afthem.modules.rabbitmq.actors.sidecars.serializers.RabbitSerializerActor"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"configuration:"})}),"\n",(0,o.jsx)(n.p,{children:"General serializer settings:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"disable_on_header"}),": if the provided header is present in the request, then the conversation will skip serialization"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"enable_on_header"}),": if the provided header is present in the request, then the conversation will be serialized"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"discard_request_headers"}),": list of request headers that should not appear in the serialized conversation"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"discard_response_headers"}),": list of response headers that should not appear in the serialized conversation"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"allow_content_types"}),": full or partial response content types which make the request eligible for serialization. If\nthe list is null or empty, all content types will be accepted"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"RabbitMQ settings:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uri"}),": a RabbitMQ URI, as in ",(0,o.jsx)(n.code,{children:"amqp://username:password@host/virtualHost"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"exchange"}),": the ID of the RabbitMQ exchange"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"routing_key"}),": the routing key to be applied to the message (empty string is the default)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ttl"}),": time-to-live in milliseconds of the message. default: -1, no ttl"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);