"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52006],{10510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=t(74848),s=t(28453),a=t(86025);t(11470),t(19365);const c={id:"architecture",title:"Sauce Connect Proxy Architecture",sidebar_label:"Architecture"},o=void 0,i={id:"secure-connections/sauce-connect-5/advanced/architecture",title:"Sauce Connect Proxy Architecture",description:"This document provides an overview of Sauce Connect Proxy 5 architecture to assist customer network and security engineering teams to better understand how it works.",source:"@site/docs/secure-connections/sauce-connect-5/advanced/architecture.md",sourceDirName:"secure-connections/sauce-connect-5/advanced",slug:"/secure-connections/sauce-connect-5/advanced/architecture",permalink:"/sauce-docs/pr-preview/pr-2917/secure-connections/sauce-connect-5/advanced/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/advanced/architecture.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"architecture",title:"Sauce Connect Proxy Architecture",sidebar_label:"Architecture"},sidebar:"docs",previous:{title:"Readiness Checks",permalink:"/sauce-docs/pr-preview/pr-2917/secure-connections/sauce-connect-5/operation/readiness-checks"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2917/secure-connections/sauce-connect"}},l={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Architecture Components",id:"architecture-components",level:2},{value:"Sauce Connect Proxy Client components",id:"sauce-connect-proxy-client-components",level:3},{value:"Sauce Connect Proxy Client Traffic",id:"sauce-connect-proxy-client-traffic",level:3},{value:"Sauce Connect Proxy Server",id:"sauce-connect-proxy-server",level:3},{value:"Sauce Labs REST API",id:"sauce-labs-rest-api",level:3},{value:"Tunnels Web UI",id:"tunnels-web-ui",level:3},{value:"Start Sequence Diagram",id:"start-sequence-diagram",level:2},{value:"Shutdown Sequence Diagram",id:"shutdown-sequence-diagram",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This document provides an overview of Sauce Connect Proxy 5 architecture to assist customer network and security engineering teams to better understand how it works."}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you're new to Sauce Connect, we recommend reviewing the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy overview"})," documentation."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"architecture-components",children:"Architecture Components"}),"\n",(0,r.jsx)(n.p,{children:"From the Sauce Labs side, the Sauce Connect system includes the following components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy client"}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy server"}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect REST API server"}),"\n",(0,r.jsx)(n.li,{children:"Tunnels Web UI"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is an overview of how these components interact with the user environment:"}),"\n",(0,r.jsx)("img",{src:(0,a.Ay)("img/sauce-connect/sc5-arch-components.png"),alt:"Sauce Connect components interacting with user\u2019s environment",width:"800"}),"\n",(0,r.jsx)(n.h3,{id:"sauce-connect-proxy-client-components",children:"Sauce Connect Proxy Client components"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/#download-latest-version",children:"client (also known as SC)"})," is distributed as a single binary that contains several distinct components. These include:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SC Client controller: the \u201cbrain\u201d of the SC client. It issues requests to the Sauce Labs REST API, starts all the other included components and ensures that everything is working as expected."}),"\n",(0,r.jsx)(n.li,{children:"API Server: this is an HTTP server providing an API to query the SC Client controller and exposing the client-side metrics"}),"\n",(0,r.jsx)(n.li,{children:"HTTP/2 Connection Manager: the client side implementation of the HTTP/2 connection used for tunneling requests."}),"\n",(0,r.jsxs)(n.li,{children:["HTTP Proxy: this contains a non-caching HTTP proxy (also ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs/forwarder",children:"available"})," as a standalone proxy) that proxies HTTP requests coming from tests that run on virtual machines (VMs) or devices on the Sauce Labs infrastructure to the website or app that is hosted inside the user\u2019s firewall (either on an intranet or a local machine)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sauce-connect-proxy-client-traffic",children:"Sauce Connect Proxy Client Traffic"}),"\n",(0,r.jsx)(n.p,{children:"The diagram above also illustrates the traffic that is initiated from the client."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sauce Connect Proxy client sends requests to the Sauce Labs REST API","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start/stop requests as well as various status queries to the Sauce Labs public REST API"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Sauce Connect Proxy client establishes several (two by default) permanent secure HTTP/2 connections to Sauce Connect Server","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'These connections form a secure "tunnel" between the client and the server'}),"\n",(0,r.jsx)(n.li,{children:"These connections are alive as long as Sauce Connect Proxy client process is alive"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy built-in HTTP proxy processes requests initiated by a browser or a mobile app in the Sauce Labs data center"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sauce-connect-proxy-server",children:"Sauce Connect Proxy Server"}),"\n",(0,r.jsx)(n.p,{children:"The server is a VM (or a container) running in Sauce Labs data centers and it includes the following components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Tunnel VM Controller: this is the logic that is responsible for configuring the VM, making sure all components are functional, and reporting back to other internal services."}),"\n",(0,r.jsx)(n.li,{children:"SC Server: the server side implementation of HTTP/2 Connection Manager."}),"\n",(0,r.jsx)(n.li,{children:"HTTP Proxy: off-the-shelf HTTP proxy that is responsible for sending requests from tests running in Sauce Labs VMs or devices to the SC Server."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"sauce-labs-rest-api",children:"Sauce Labs REST API"}),"\n",(0,r.jsxs)(n.p,{children:["The Sauce Labs REST API allows the Sauce Connect Proxy Client (or any authenticated client) to start and stop tunnels and/or get information about existing tunnels. For more information, refer to the ",(0,r.jsx)(n.a,{href:"/dev/api/connect",children:"Sauce Connect Proxy API documentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"tunnels-web-ui",children:"Tunnels Web UI"}),"\n",(0,r.jsxs)(n.p,{children:["If you're executing tests through Sauce Connect Proxy, you'll be able to see all information about the tunnels you're running through the web UI (log in to Sauce Labs and go the ",(0,r.jsx)(n.strong,{children:"Tunnels"})," page)."]}),"\n",(0,r.jsx)(n.h2,{id:"start-sequence-diagram",children:"Start Sequence Diagram"}),"\n",(0,r.jsx)("img",{src:(0,a.Ay)("img/sauce-connect/start-sequence.webp"),alt:"Sauce Connect Proxy start sequence",width:"800"}),"\n",(0,r.jsx)(n.h2,{id:"shutdown-sequence-diagram",children:"Shutdown Sequence Diagram"}),"\n",(0,r.jsx)("img",{src:(0,a.Ay)("img/sauce-connect/shutdown-sequence.webp"),alt:"Sauce Connect Proxy shutdown sequence",width:"800"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),a=t(23104),c=t(56347),o=t(205),i=t(57485),l=t(31682),u=t(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[c,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=m({queryString:t,groupId:s}),[v,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=l??v;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=o[t].value;s!==r&&(l(n),c(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function S(e){const n=v(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function c(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);