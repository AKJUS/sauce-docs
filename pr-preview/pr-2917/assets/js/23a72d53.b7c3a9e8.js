"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[65424],{6646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(74848),n=r(28453),s=r(11470),o=r(19365);const l={id:"orchestrate",title:"Orchestrate",sidebar_label:"Orchestrate",description:"View and manage sauce orchestrate data."},i=void 0,c={id:"dev/api/orchestrate",title:"Orchestrate",description:"View and manage sauce orchestrate data.",source:"@site/docs/dev/api/orchestrate.md",sourceDirName:"dev/api",slug:"/dev/api/orchestrate",permalink:"/sauce-docs/pr-preview/pr-2917/dev/api/orchestrate",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/api/orchestrate.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"orchestrate",title:"Orchestrate",sidebar_label:"Orchestrate",description:"View and manage sauce orchestrate data."},sidebar:"dev",previous:{title:"Usage Analytics",permalink:"/sauce-docs/pr-preview/pr-2917/dev/api/usage"},next:{title:"Performance",permalink:"/sauce-docs/pr-preview/pr-2917/dev/api/performance"}},u={},d=[{value:"Get short-lived tokens for private registry",id:"get-short-lived-tokens-for-private-registry",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4}];function h(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The Sauce Orchestrate API methods allow you to access orchestrate-related features which might not yet be available\nusing other methods."}),"\n",(0,a.jsxs)(t.p,{children:["Refer to ",(0,a.jsx)(t.a,{href:"/dev/api",children:"Getting Started"})," for Authentication and Server information."]}),"\n",(0,a.jsx)(t.h3,{id:"get-short-lived-tokens-for-private-registry",children:"Get short-lived tokens for private registry"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("span",{className:"api get",children:"POST"})," ",(0,a.jsx)("code",{children:"/v1alpha1/hosted/container-registry/authorization-token"})]}),(0,a.jsx)("p",{}),"Return a short-lived token that can be used to access SauceLabs Container Registry.",(0,a.jsx)(t.h4,{id:"parameters",children:"Parameters"}),(0,a.jsx)("table",{id:"table-api",children:(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"registry_url"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| BODY | REQUIRED | STRING |"})}),(0,a.jsx)("p",{children:"The whole url of your SauceLabs Container Registry (not just a domain name)."})]})]})})}),(0,a.jsxs)(s.A,{groupId:"dc-url",defaultValue:"us",values:[{label:"United States",value:"us"},{label:"Europe",value:"eu"}],children:[(0,a.jsx)(o.A,{value:"us",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl --header "Content-Type: application/json" --data "{\\"registry_url\\": \\"example.com/registry\\"}" --request POST \'https://api.us-west-1.saucelabs.com/v1alpha1/hosted/container-registry/authorization-token\'\n'})})}),(0,a.jsx)(o.A,{value:"eu",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="Sample Request"',children:'curl --header "Content-Type: application/json" --data "{\\"registry_url\\": \\"example.com/registry\\"}" --request POST \'https://api.eu-central-1.saucelabs.com/v1alpha1/hosted/container-registry/authorization-token\'\n'})})})]}),(0,a.jsx)(t.h4,{id:"responses",children:"Responses"}),(0,a.jsxs)("table",{id:"table-api",children:[(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"200"})}),(0,a.jsx)("td",{colSpan:"2",children:"Success."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"403"})}),(0,a.jsx)("td",{colSpan:"2",children:"You're not allowed to generate a short living token for your organization."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"422"})}),(0,a.jsx)("td",{colSpan:"2",children:"We couldn't generate a short living token for your organization."})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"500"})}),(0,a.jsx)("td",{colSpan:"2",children:"We couldn't generate a short living token for your organization."})]})})]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="Sample Response"',children:'{\n    "expires_at": "2023-10-23T12:03:55Z", \n    "password": "ya29.c.c0AY_VpZh8lOOO98LjV71rZJx5tPAC8XE42io...",\n    "username": "oauth2accesstoken"\n}\n'})})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(34164),s=r(23104),o=r(56347),l=r(205),i=r(57485),c=r(31682),u=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:n}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),n=l[r].value;n!==a&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);