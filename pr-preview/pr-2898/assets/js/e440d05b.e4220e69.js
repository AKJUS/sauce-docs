"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[47793],{942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(74848),i=r(28453),s=(r(11470),r(19365),r(86025));const n={id:"overview",title:"Overview",sidebar_label:"Overview",description:"Monitor app stability with the Overview page."},a=void 0,l={id:"error-reporting/web-console/overview",title:"Overview",description:"Monitor app stability with the Overview page.",source:"@site/docs/error-reporting/web-console/overview.md",sourceDirName:"error-reporting/web-console",slug:"/error-reporting/web-console/overview",permalink:"/sauce-docs/pr-preview/pr-2898/error-reporting/web-console/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/web-console/overview.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1689262934e3,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",description:"Monitor app stability with the Overview page."},sidebar:"backtrace",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2898/error-reporting/web-console/getting-started"},next:{title:"Releases",permalink:"/sauce-docs/pr-preview/pr-2898/error-reporting/web-console/releases"}},u={},c=[{value:"Errors Over Time By Version",id:"errors-over-time-by-version",level:2},{value:"Customize the Version Attribute",id:"customize-the-version-attribute",level:3},{value:"Error Distribution By Attribute",id:"error-distribution-by-attribute",level:2},{value:"Customize the Distribution Widgets",id:"customize-the-distribution-widgets",level:3},{value:"Drill Into Details",id:"drill-into-details",level:3},{value:"Stability Metrics Widgets",id:"stability-metrics-widgets",level:2},{value:"Error Free Sessions Through Time",id:"error-free-sessions-through-time",level:3},{value:"Stability Metrics Configuration",id:"stability-metrics-configuration",level:3}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The Web Console\u2019s Overview page provides an \u2018at a glance\u2019 view of your project\u2019s health by displaying different top down views of your error / crash data. The widgets in place were designed to serve that goal by enabling a number of important use cases:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Top Down Synthesis: Aggregate widgets allow developers or project leads to quickly see their application's stability and how many total, unique, and open errors have been reported in their project for a fast, simple status update"}),"\n",(0,o.jsx)(t.li,{children:"Application Stability Over Time: Users can visualize their error count through time, broken out by application version to monitor their app\u2019s stability across releases."}),"\n",(0,o.jsx)(t.li,{children:"Error Distributions Across Customizable Attributes: The stacked bar chart widgets at the bottom of the page show how your errors are distributed across relevant attribute values. For example, errors by operating system, classifiers, etc. Note that these can be configured to distribute by any indexed attribute to allow users to customize the page to fit their needs. More on this below."}),"\n",(0,o.jsx)(t.li,{children:"Filter the Overview: As with the Web Console\u2019s Explore, Triage, and Debug view, the Overview page can also be manipulated using the global filter bar to suit your specific needs."}),"\n"]}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/project-overview.png"),alt:"Provides an \u2018at a glance\u2019 view of your project\u2019s health by displaying different top down views of your error / crash data."}),"\n",(0,o.jsx)(t.h2,{id:"errors-over-time-by-version",children:"Errors Over Time By Version"}),"\n",(0,o.jsx)(t.p,{children:"On the Overview page, you will have access to one of our new visualization tools: A line chart that shows you your project\u2019s errors through time, by version. This tool makes it easy to see if a particular build is problematic and is great for monitoring a new release."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/overview-errors-by-version.png"),alt:"Shows errors through time, by app version."}),"\n",(0,o.jsx)(t.p,{children:"Here we can see that version 0.2 seems to generally have more error reports than 0.1. Perhaps this version introduced new features that weren't well tested."}),"\n",(0,o.jsx)(t.p,{children:"If you want the same visualization to instead show the total error count through time, you can use the drop down in the top right corner of the widget to toggle between \u201cTotal\u201d and \u201cBy Version\u201d modes."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/overview-errors-by-version-toggle.png"),alt:"Shows total errors through time across all version groups."}),"\n",(0,o.jsx)(t.h3,{id:"customize-the-version-attribute",children:"Customize the Version Attribute"}),"\n",(0,o.jsx)(t.p,{children:"For the errors over time by version widget, we offer the ability to change which attribute you want to specify as \u201cversion\u201d. We understand that different users often use their own custom attributes to signify the build version / app version so this will enable those users to utilize these tools as well."}),"\n",(0,o.jsx)(t.p,{children:"To change the version attribute used by the Overview page, click the pencil icon to the right of the relevant widget\u2019s title as shown below."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/customize-version-attribute-button.png"),alt:"Shows the button used to change the attribute for application version."}),"\n",(0,o.jsx)(t.p,{children:"You can then select the attribute of your choice from the dropdown menu, as shown below."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/customize-version-attribute.png"),alt:"Shows how to change the attribute for application version."}),"\n",(0,o.jsx)(t.h2,{id:"error-distribution-by-attribute",children:"Error Distribution By Attribute"}),"\n",(0,o.jsx)(t.p,{children:"The stacked bar chart widgets at the bottom of the Overview page give users the ability to see a quick breakdown of their errors across different attributes. These widgets are a great way to quickly identify an issue that may be specific to an operating system, device type, or any other relevant attribute."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/errors-by-sysname.png"),alt:"Shows errors by sysname."}),"\n",(0,o.jsx)(t.h3,{id:"customize-the-distribution-widgets",children:"Customize the Distribution Widgets"}),"\n",(0,o.jsx)(t.p,{children:"These widgets are configured by default to show errors distributed by commonly relevant attributes. However, we allow users to edit each of these widgets to show their error breakdown by the attributes most relevant to them."}),"\n",(0,o.jsxs)(t.p,{children:["To customize these widgets, select ",(0,o.jsx)(t.strong,{children:"Edit"})," to the right of the widget."]}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/overview-errors-by-classifiers.png"),alt:"Shows how to edit the distribution widgets."}),"\n",(0,o.jsx)(t.p,{children:"This will bring up the following dialogue box which will allow you to search for the attribute you want to change it to."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/customize-errors-by-classifiers.png"),alt:"Shows how to customize the errors by classifiers."}),"\n",(0,o.jsx)(t.p,{children:'In this example, we changed the widget from "Errors by classifiers" to "Errors by error.type".'}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/errors-by-error-type.png"),alt:"Shows how to customize the errors by error type."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"As of Q3 2021, these customizations are a global setting. When you save changes to these widgets, they will take effect for all users of your Backtrace instance. As we continue to add more generic dashboard creation functionality through 2022, our goal is to enable individual users to be able to customize and save their own views."})}),"\n",(0,o.jsx)(t.h3,{id:"drill-into-details",children:"Drill Into Details"}),"\n",(0,o.jsx)(t.p,{children:'The Overview page also integrates well with the Web Console\u2019s other views. If a distribution widget surfaces something worth investigating further, click the "Analyze In Explore" link at the top right of the widget. This will take you to the Web Console\u2019s Explore view and automatically group by the same attribute as the widget. From here, you can use those views to drill into more detail.'}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/analyze-in-explore.png"),alt:"Shows how to drill into details with the Explore view."}),"\n",(0,o.jsx)(t.h2,{id:"stability-metrics-widgets",children:"Stability Metrics Widgets"}),"\n",(0,o.jsx)(t.p,{children:'As of Console version 3.19.25, the Overview page also now supports "Error free session" and "Error free user" widgets.'}),"\n",(0,o.jsx)(t.p,{children:"For the best results with these metrics, follow the documentation below to ensure you have your project configured properly."}),"\n",(0,o.jsx)(t.p,{children:"Error free sessions displays the percent of total application sessions that experienced no errors."}),"\n",(0,o.jsx)(t.p,{children:"Error free users shows the percentage of unique users who did not encounter any errors."}),"\n",(0,o.jsx)(t.p,{children:'Note that these widgets will respond to filters so if you want to see "Crash free" metrics instead, just filter out Non-Crash errors using the global filter bar. For example, error.type = Crash.'}),"\n",(0,o.jsx)(t.p,{children:"Both of these metrics are incredibly helpful ways to measure your project\u2019s stability and user experience."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/error-free-session-widget.png"),alt:"Shows overview of error-free sessions."}),"\n",(0,o.jsx)(t.h3,{id:"error-free-sessions-through-time",children:"Error Free Sessions Through Time"}),"\n",(0,o.jsx)(t.p,{children:"The Error free sessions line chart is essentially a through time view of the Error free sessions widget mentioned above. It shows the % of sessions in which there were no error reports received, bucketed and plotted through time."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/crash-free-sessions-through-time.png"),alt:"Shows overview of error-free sessions through time."}),"\n",(0,o.jsx)(t.p,{children:"Note that the bucket size for each point on the line chart will vary as you adjust the global filter bar's time frame. For example, if you are looking at a time frame of the past 30 days, each point will represent one day, whereas when looking at the past 7 days each point represents a 12 hour period."}),"\n",(0,o.jsx)(t.p,{children:"As pictured above, hovering your mouse over the chart will show you more details for the highlighted point."}),"\n",(0,o.jsx)(t.h3,{id:"stability-metrics-configuration",children:"Stability Metrics Configuration"}),"\n",(0,o.jsx)(t.p,{children:"These stability metric widgets were built upon a very powerful set of new Backtrace features that allow users to define / customize specific metrics which they care about tracking within their application / game. As such, there is some configuration that is required depending on the Backtrace SDK that you use in order to get the benefit of these features."}),"\n",(0,o.jsx)(t.p,{children:"If you see something like the error in the image below, that means you need to follow the steps (linked below) to configure your project so the dashboards have the data they need to display your stability metrics."}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/error-reporting/console-views/stability-metrics-not-configured.png"),alt:"Shows widgets for stability metrics not properly configured."}),"\n",(0,o.jsx)(t.p,{children:"Only our Unity SDK is supported (v 3.5.0 and up)."}),"\n",(0,o.jsx)(t.p,{children:'For best results, you will need to add a filter to your view to remove the error reports from backtrace.versions that did not support stability metrics. For example, the Backtrace-Unity SDK version 3.5.0 was the first to support this feature so you would want to add a filter of "backtrace.version >= 3.5.0".'}),"\n",(0,o.jsxs)(t.p,{children:["For more information on stability metrics and how to ensure they are configured correctly, see ",(0,o.jsx)(t.a,{href:"/error-reporting/project-setup/stability-metrics/",children:"Stability Metrics"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var o=r(18215);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function n(e){let{children:t,hidden:r,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,n),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var o=r(96540),i=r(18215),s=r(23104),n=r(56347),a=r(205),l=r(57485),u=r(31682),c=r(89466);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:o,default:i}}=e;return{value:t,label:r,attributes:o,default:i}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const i=(0,n.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=d(e),[n,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[u,h]=g({queryString:r,groupId:i}),[b,w]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(r);return[i,(0,o.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),v=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{v&&l(v)}),[v]);return{selectedValue:n,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),w(e)}),[h,w,s]),tabValues:s}}var w=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function f(e){let{className:t,block:r,selectedValue:o,selectValue:n,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),i=a[r].value;i!==o&&(u(t),n(i))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:h,onClick:c,...s,className:(0,i.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":o===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,m.jsx)(f,{...e,...t}),(0,m.jsx)(y,{...e,...t})]})}function j(e){const t=(0,w.A)();return(0,m.jsx)(x,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var o=r(96540);const i={},s=o.createContext(i);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);