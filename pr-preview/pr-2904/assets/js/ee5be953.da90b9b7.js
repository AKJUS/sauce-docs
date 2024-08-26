"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70290],{44420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(74848),a=r(28453),o=(r(11470),r(19365),r(86025));const i={id:"audit-logs",title:"Audit Logs",sidebar_label:"Audit Logs",description:"Backtrace provides audit log capabilities for customers."},s=void 0,l={id:"error-reporting/security-compliance/audit-logs",title:"Audit Logs",description:"Backtrace provides audit log capabilities for customers.",source:"@site/docs/error-reporting/security-compliance/audit-logs.md",sourceDirName:"error-reporting/security-compliance",slug:"/error-reporting/security-compliance/audit-logs",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/security-compliance/audit-logs",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/security-compliance/audit-logs.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691068473e3,frontMatter:{id:"audit-logs",title:"Audit Logs",sidebar_label:"Audit Logs",description:"Backtrace provides audit log capabilities for customers."},sidebar:"backtrace",previous:{title:"SAML Single Sign-On",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/org-settings/saml-sso"},next:{title:"Common Questions",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/security-compliance/common-questions"}},u={},c=[{value:"Enabling the Audit Log for On-Premise",id:"enabling-the-audit-log-for-on-premise",level:2},{value:"Viewing the Audit Log",id:"viewing-the-audit-log",level:2},{value:"Filtering the Audit Log",id:"filtering-the-audit-log",level:2},{value:"Multitenant Configuration and Access Control",id:"multitenant-configuration-and-access-control",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Backtrace provides audit log capabilities for customers. The audit log includes all login requests and configuration changes, including user management. Additional metadata is provided, including originating IP addresses and more."}),"\n",(0,n.jsx)(t.h2,{id:"enabling-the-audit-log-for-on-premise",children:"Enabling the Audit Log for On-Premise"}),"\n",(0,n.jsxs)(t.p,{children:["To enable the audit log, add the following stanza to your ",(0,n.jsx)(t.code,{children:"coronerd.conf"})," file (usually located in ",(0,n.jsx)(t.code,{children:"/etc/coronerd"}),"):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'"audit" : {\n  "path" : "/var/log/coronerd/audit.db"\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The default retention policy is 6 months, but it is possible to customize this. The ",(0,n.jsx)(t.code,{children:"age_seconds"})," integer represents the number of seconds an audit log entry is stored before being removed. For example, the following stanza specifies that audit logs older than 1 hour (3600 seconds) are eligible for removal by the Backtrace system:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'"audit" : {\n  "path" : "/var/log/coronerd/audit.db",\n  "age_seconds": 3600\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"viewing-the-audit-log",children:"Viewing the Audit Log"}),"\n",(0,n.jsxs)(t.p,{children:["After the audit log is enabled, you can extract its contents using the ",(0,n.jsx)(t.code,{children:"morgue"})," tool or by making a copy of the audit log directly. To extract the log and render it in a text format using ",(0,n.jsx)(t.code,{children:"morgue"}),", use the ",(0,n.jsx)(t.code,{children:"morgue audit extract"})," command."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("/img/error-reporting/5e601b6eb5e15.webp"),alt:"extract the log"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--table"})," option can be used to render the data in a tabular format in your terminal, as shown below:"]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("/img/error-reporting/5e601b6fe2ff7.png"),alt:"tabluar format"}),"\n",(0,n.jsxs)(t.p,{children:["You can also render the audit log as a JSON object by using the ",(0,n.jsx)(t.code,{children:"--json"})," option."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("/img/error-reporting/5e601b711e835.png"),alt:"json format"}),"\n",(0,n.jsx)(t.h2,{id:"filtering-the-audit-log",children:"Filtering the Audit Log"}),"\n",(0,n.jsxs)(t.p,{children:["For advanced filtering of the audit log, you can use traditional utilities such as ",(0,n.jsx)(t.code,{children:"grep"})," or ",(0,n.jsx)(t.code,{children:"jq"}),". For example, the following command filters all audit log entries for the configuration subsystem."]}),"\n",(0,n.jsx)("img",{src:(0,o.A)("/img/error-reporting/5e601b71f0164.png"),alt:"filter all audit log entries"}),"\n",(0,n.jsx)(t.h2,{id:"multitenant-configuration-and-access-control",children:"Multitenant Configuration and Access Control"}),"\n",(0,n.jsxs)(t.p,{children:["Regular users and administrators have access to audit logs belonging to their tenant (universe) only. A superuser has access to audit logs for all tenants. To filter the audit log for a specific tenant, a superuser can specify the ",(0,n.jsx)(t.code,{children:"--universe"})," option with the ",(0,n.jsx)(t.code,{children:"morgue audit extract"})," command. For example, ",(0,n.jsx)(t.code,{children:"morgue audit extract --universe=A"})," provides audit log entries for tenant A."]})]})}function g(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(96540),a=r(18215),o=r(23104),i=r(56347),s=r(205),l=r(57485),u=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=g(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=u??m;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function A(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);