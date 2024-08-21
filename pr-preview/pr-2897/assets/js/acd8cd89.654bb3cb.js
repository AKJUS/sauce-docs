"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[21171],{26155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),o=t(28453),a=(t(11470),t(19365),t(86025));const i={id:"connections",title:"Workflow Connections",sidebar_label:"Connections",description:"Integrations which have an application install or other mechanism to connect with Backtrace to a third-party domain, will create a workflow connection."},s=void 0,c={id:"error-reporting/project-setup/connections",title:"Workflow Connections",description:"Integrations which have an application install or other mechanism to connect with Backtrace to a third-party domain, will create a workflow connection.",source:"@site/docs/error-reporting/project-setup/connections.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/connections",permalink:"/error-reporting/project-setup/connections",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/connections.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:169044418e4,frontMatter:{id:"connections",title:"Workflow Connections",sidebar_label:"Connections",description:"Integrations which have an application install or other mechanism to connect with Backtrace to a third-party domain, will create a workflow connection."},sidebar:"backtrace",previous:{title:"Alerts",permalink:"/error-reporting/project-setup/alerts"},next:{title:"Scheduled Reports",permalink:"/error-reporting/project-setup/scheduled-reports"}},l={},u=[{value:"Workflow Connections Page",id:"workflow-connections-page",level:2},{value:"Transferring Connections and Integrations",id:"transferring-connections-and-integrations",level:3},{value:"Deleting Connections",id:"deleting-connections",level:3},{value:"Editing Connections",id:"editing-connections",level:3}];function d(e){const n={h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Integrations such as Jira and Slack, which have an application installed or use another mechanism to connect with Backtrace to a third-party domain, will create a workflow connection. This process simplifies linking new Jira projects or Slack channels to receive Backtrace data. Backtrace elevates these connections to an organization level, allowing different Backtrace projects to use the configured Jira and Slack applications. These connections are established as part of the normal integration flow found in ",(0,r.jsx)(n.strong,{children:"Project settings"})," > ",(0,r.jsx)(n.strong,{children:"Integrations"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"workflow-connections-page",children:"Workflow Connections Page"}),"\n",(0,r.jsxs)(n.p,{children:["Admins have the ability to manage workflow connections in ",(0,r.jsx)(n.strong,{children:"Organization Settings"})," > ",(0,r.jsx)(n.strong,{children:"Workflow Connections"}),". They can easily view the various projects that are utilizing the connection at a glance."]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/error-reporting/project-settings/connection-page.png"),alt:"connection page"}),"\n",(0,r.jsx)(n.p,{children:"Admins have the capability to transfer integrations between connections of the same type, edit connection details, and delete connections and integrations as needed."}),"\n",(0,r.jsx)(n.h3,{id:"transferring-connections-and-integrations",children:"Transferring Connections and Integrations"}),"\n",(0,r.jsx)(n.p,{children:"In cases where a Jira or Slack domain has changed, it is possible to transfer individual integrations or all integrations to a new connection of the same type. This allows for seamless transitioning and updating of the integrations."}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/error-reporting/project-settings/transfer-connection.png"),alt:"transfer connection"}),"\n",(0,r.jsx)(n.h3,{id:"deleting-connections",children:"Deleting Connections"}),"\n",(0,r.jsx)(n.p,{children:"When deleting a connection, all connected integrations will also be deleted. We will attempt to maintain associated alerts. Alerts with no connected integrations will be disabled."}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/error-reporting/project-settings/delete-connection.png"),alt:"delete connection"}),"\n",(0,r.jsx)(n.h3,{id:"editing-connections",children:"Editing Connections"}),"\n",(0,r.jsx)(n.p,{children:"Editing capabilities vary by connection type. We recommend creating a new connection and transferring connections when you need to edit a connection."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const o={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),o=t(18215),a=t(23104),i=t(56347),s=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=g({queryString:t,groupId:o}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),b=(()=>{const e=l??f;return h({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function w(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=s[t].value;o!==r&&(l(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var r=t(96540);const o={},a=r.createContext(o);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);