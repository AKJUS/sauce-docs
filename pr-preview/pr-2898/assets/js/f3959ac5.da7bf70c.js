"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[3442],{31999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(74848),n=r(28453);r(86025),r(11470),r(19365);const s={id:"using-app-dist",title:"Using App Distribution",sidebar_label:"Using App Distribution"},u=void 0,o={id:"testfairy/using-app-dist",title:"Using App Distribution",description:"/SDK/HowtoTesttheCrash_Handler.html",source:"@site/docs/testfairy/using-app-dist.md",sourceDirName:"testfairy",slug:"/testfairy/using-app-dist",permalink:"/sauce-docs/pr-preview/pr-2898/testfairy/using-app-dist",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/using-app-dist.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688870111e3,frontMatter:{id:"using-app-dist",title:"Using App Distribution",sidebar_label:"Using App Distribution"}},i={},l=[];function c(e){const t={a:"a",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"/SDK/How_to_Test_the_Crash_Handler.html"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/testfairy/docs/blob/master/docs/021_SDK/93_How_to_Test_the_Crash_Handler.md",children:"https://github.com/testfairy/docs/blob/master/docs/021_SDK/93_How_to_Test_the_Crash_Handler.md"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>u});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function u(e){let{children:t,hidden:r,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,u),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>x});var a=r(96540),n=r(18215),s=r(23104),u=r(56347),o=r(205),i=r(57485),l=r(31682),c=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[u,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=b({queryString:r,groupId:n}),[h,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=l??h;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:u,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==a&&(l(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function _(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(_,{...e,...t})]})}function x(e){const t=(0,m.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>u,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function u(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:u(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);