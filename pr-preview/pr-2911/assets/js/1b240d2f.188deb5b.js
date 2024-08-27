"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33976],{95378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(74848),a=r(28453),i=(r(11470),r(19365),r(86025));const s={id:"alerts",title:"Alerts",sidebar_label:"Alerts",description:"Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports climb to a critical rate."},o=void 0,l={id:"error-reporting/project-setup/alerts",title:"Alerts",description:"Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports climb to a critical rate.",source:"@site/docs/error-reporting/project-setup/alerts.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/alerts",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/project-setup/alerts",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/alerts.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"alerts",title:"Alerts",sidebar_label:"Alerts",description:"Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports climb to a critical rate."},sidebar:"backtrace",previous:{title:"Webhook",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/workflow-integrations/webhook"},next:{title:"Connections",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/project-setup/connections"}},c={},u=[{value:"Issue Based Alerts",id:"issue-based-alerts",level:2},{value:"Define Alert Conditions",id:"define-alert-conditions",level:3},{value:"Error Threshold Alerts",id:"error-threshold-alerts",level:2}];function d(e){const t={h2:"h2",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Backtrace offers an Alert capability that enables teams to be notified at Warning and Critical levels if error reports reach a critical rate. Alerts are configured to trigger a notification for a workflow integration (for example, a message through Slack or a ticket in Jira) when an error group\u2019s count of crashes reaches a specified threshold within a defined timeframe."}),"\n",(0,n.jsx)(t.h2,{id:"issue-based-alerts",children:"Issue Based Alerts"}),"\n",(0,n.jsx)(t.p,{children:"Use issue based alerts to automatically generate notifications or create issues for your third-party integrations when Backtrace detects a new error or fingerprint in the system. You can specify the conditions and frequency for which alerts are triggered."}),"\n",(0,n.jsx)(t.h3,{id:"define-alert-conditions",children:"Define Alert Conditions"}),"\n",(0,n.jsx)(t.p,{children:"To get started, you must choose whether to be notified with every new error or every new fingerprint. If you have a high volume of errors or are connecting with an issue-tracking system like Jira, it's generally recommended to set triggers for new fingerprints to reduce noise."}),"\n",(0,n.jsx)(t.p,{children:"Other options are attribute filtering, errors in a timeframe, and affected users in a timeframe."}),"\n",(0,n.jsx)(t.p,{children:"Alert frequency allows you to control how often an alert will trigger. If you want to send messages for new errors, longer alert frequencies will allow batching of the same error and reduce the overall number of messages."}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/error-reporting/project-settings/issue-based-alerts.png"),alt:"Shows how to create an issue based alert for a workflow integration.",width:"700"}),"\n",(0,n.jsx)(t.h2,{id:"error-threshold-alerts",children:"Error Threshold Alerts"}),"\n",(0,n.jsx)(t.p,{children:"Error Threshold Alerts can be created from the Explore view after applying filters by using Export as:"}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/error-reporting/project-settings/alerts-export-as.webp"),alt:"Shows how to create an alert based on a query."}),"\n",(0,n.jsx)(t.p,{children:"You can configure the alert as follows:"}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/error-reporting/project-settings/alerts-export-as-settings.png"),alt:"Shows the configuration settings to create an alert based on a query."}),"\n",(0,n.jsx)(t.p,{children:"In this example, we are filtering for crashes in the production release channel in non muted fingerprints and grouping by fingerprint. The thresholds are set to fire a warning if any fingerprint within the filter gains 10 new objects within 5 minutes, and a critical alert if any fingerprint within the filter gains 20 new objects within 5 minutes. Alerts will be spaced by the notification interval, set to 15 minutes in this example. The final step in configuring the Alert is selecting a workflow integration for the notification to be sent with."}),"\n",(0,n.jsx)(t.p,{children:"Once an alert has been saved, its configuration will display under Project settings > Alerts."}),"\n",(0,n.jsx)(t.p,{children:"When a threshold is met, a notification including a link to the alert\u2019s Activity feed (under Project settings > Alerts) will be sent to the integration configured."}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/error-reporting/project-settings/slack-alert-example.png"),alt:"Shows an example notification message in Slack.",width:"600"}),"\n",(0,n.jsx)(t.p,{children:"The activity feed will display the fingerprint(s) that met the alert, providing teams with the information they need to investigate the spike."}),"\n",(0,n.jsx)("img",{src:(0,i.Ay)("img/error-reporting/project-settings/alert-activity-feed.png"),alt:"Shows the activity feed for the error fingerprints that meet the specified thresholds."}),"\n",(0,n.jsx)(t.p,{children:"Alerts can also be created, edited, or deleted from Project settings > Alerts, with the limitation that attribute filters cannot be edited from this endpoint (the explore view must be used for alerts with attribute filters)."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),a=r(34164),i=r(23104),s=r(56347),o=r(205),l=r(57485),c=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:r,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=g(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,w.jsx)(v,{...t,...e}),(0,w.jsx)(y,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);