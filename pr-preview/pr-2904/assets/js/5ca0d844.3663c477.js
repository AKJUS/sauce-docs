"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[26612],{82196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(74848),a=n(28453),o=(n(11470),n(19365),n(86025));const i={id:"hack-n-plan",title:"HackNPlan Integration with Backtrace",sidebar_label:"HackNPlan",description:"Integrate Backtrace with HackNPlan."},s=void 0,l={id:"error-reporting/workflow-integrations/issue-tracking/hack-n-plan",title:"HackNPlan Integration with Backtrace",description:"Integrate Backtrace with HackNPlan.",source:"@site/docs/error-reporting/workflow-integrations/issue-tracking/hack-n-plan.md",sourceDirName:"error-reporting/workflow-integrations/issue-tracking",slug:"/error-reporting/workflow-integrations/issue-tracking/hack-n-plan",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/workflow-integrations/issue-tracking/hack-n-plan",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/issue-tracking/hack-n-plan.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691141771e3,frontMatter:{id:"hack-n-plan",title:"HackNPlan Integration with Backtrace",sidebar_label:"HackNPlan",description:"Integrate Backtrace with HackNPlan."},sidebar:"backtrace",previous:{title:"FogBugz",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/workflow-integrations/issue-tracking/fogbugz"},next:{title:"Mantis Bug Tracker",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/workflow-integrations/issue-tracking/mantis"}},c={},u=[{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This guide goes through the steps necessary to integrate Backtrace with HackNPlan. Setting up integration with the HackNPlan ticketing system requires a valid project name to use for creating work items, a valid HackNPlan board to put work items on, and an API token (See: ",(0,r.jsx)(t.a,{href:"https://hacknplan.com/knowledge-base/api-authentication/",children:"HackNPlan documentation"})," for instructions on how to get a token)."]}),"\n",(0,r.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,r.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,r.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Then click ",(0,r.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["Select ",(0,r.jsx)(t.strong,{children:"HackNPlan"})," and fill in the required settings."]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/workflow-integrations/HackNPlan.webp"),alt:""}),"\n",(0,r.jsxs)(t.p,{children:["For more detailed information about these settings, see ",(0,r.jsx)(t.a,{href:"https://hacknplan.com/knowledge-base/category/api/",children:"The HackNPlan API Documentation"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(18215),o=n(23104),i=n(56347),s=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=h({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=c??f;return g({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",k.tabList),children:[(0,b.jsx)(w,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function j(e){const t=(0,m.A)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);