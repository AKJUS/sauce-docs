"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2085],{15271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(74848),o=r(28453),i=(r(11470),r(19365),r(86025));const a={id:"victorops",title:"VictorOps Integration with Backtrace",sidebar_label:"VictorOps",description:"Integrate Backtrace with VictorOps."},s=void 0,l={id:"error-reporting/workflow-integrations/alerting-ops/victorops",title:"VictorOps Integration with Backtrace",description:"Integrate Backtrace with VictorOps.",source:"@site/docs/error-reporting/workflow-integrations/alerting-ops/victorops.md",sourceDirName:"error-reporting/workflow-integrations/alerting-ops",slug:"/error-reporting/workflow-integrations/alerting-ops/victorops",permalink:"/sauce-docs/pr-preview/pr-2898/error-reporting/workflow-integrations/alerting-ops/victorops",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/alerting-ops/victorops.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690913171e3,frontMatter:{id:"victorops",title:"VictorOps Integration with Backtrace",sidebar_label:"VictorOps",description:"Integrate Backtrace with VictorOps."},sidebar:"backtrace",previous:{title:"PagerDuty",permalink:"/sauce-docs/pr-preview/pr-2898/error-reporting/workflow-integrations/alerting-ops/pagerduty"},next:{title:"OpsGenie",permalink:"/sauce-docs/pr-preview/pr-2898/error-reporting/workflow-integrations/alerting-ops/opsgenie"}},c={},u=[{value:"Generate a REST Endpoint",id:"generate-a-rest-endpoint",level:2},{value:"Set Up the Integration",id:"set-up-the-integration",level:2}];function p(e){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This guide goes through the steps necessary to integrate Backtrace with VictorOps. Setting up integration with the VictorOps incident management system requires a valid VictorOps REST Endpoint for sending alerts."}),"\n",(0,n.jsx)(t.p,{children:"These are the main steps for setting up VictorOps:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Generate a REST endpoint"}),"\n",(0,n.jsx)(t.li,{children:"Set up the integration"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"generate-a-rest-endpoint",children:"Generate a REST Endpoint"}),"\n",(0,n.jsx)(t.p,{children:'Within VictorOps, click settings on the upper-left, then Integrations on the navbar at the top. In the incoming alerts section on the right, click on REST Endpoint, then on the green "Enable Integration" button.'}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/victorops-add-endpoint.png"),alt:""}),"\n",(0,n.jsx)(t.p,{children:"Once this is done, you'll use the Post URL that appears as the URL in the configuration below."}),"\n",(0,n.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,n.jsxs)(t.p,{children:["To set up the integration, first go to the ",(0,n.jsx)(t.strong,{children:"Project Settings"})," page for the project you want to add a integration for:"]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/set-up-workflow-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Then click ",(0,n.jsx)(t.strong,{children:"Integrations"})," in the left-hand menu, and the plus sign to create a new integration:"]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/add-wf-integration.webp"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["Select ",(0,n.jsx)(t.strong,{children:"VictorOps"})," and fill in the required settings (name, endpoint URL, and message type)."]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/victorops-settings.png"),alt:""}),"\n",(0,n.jsxs)(t.p,{children:["For more details, see the ",(0,n.jsx)(t.a,{href:"https://victorops.secure.force.com/knowledgebase/articles/Integration/Alert-Ingestion-API-Documentation/",children:"VictorOps Alert API Documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Next: After filling in the integration-specific settings, proceed to Common Settings to finish configuring the integration."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(18215);const o={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,a),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),o=r(18215),i=r(23104),a=r(56347),s=r(205),l=r(57485),c=r(31682),u=r(89466);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const o=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,i=d(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,p]=h({queryString:r,groupId:o}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,u.Dv)(r);return[o,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:o}),b=(()=>{const e=c??f;return g({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),m(e)}),[p,m,i]),tabValues:i}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),o=s[r].value;o!==n&&(c(t),a(o))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:u,...i,className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,m.A)();return(0,v.jsx)(k,{...e,children:p(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(96540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);