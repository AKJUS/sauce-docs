"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[53182],{19568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var i=r(74848),s=r(28453),o=(r(11470),r(19365),r(86025));const n={id:"metrics-stability-scores",title:"Importing Metrics and Generating Stability Scores",sidebar_label:"Importing Metrics and Generating Stability Scores",description:"This guide will show admins how to get started set up a common type of stability monitoring."},a=void 0,c={id:"error-reporting/project-setup/metrics-stability-scores",title:"Importing Metrics and Generating Stability Scores",description:"This guide will show admins how to get started set up a common type of stability monitoring.",source:"@site/docs/error-reporting/project-setup/metrics-stability-scores.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/metrics-stability-scores",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/project-setup/metrics-stability-scores",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/metrics-stability-scores.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"metrics-stability-scores",title:"Importing Metrics and Generating Stability Scores",sidebar_label:"Importing Metrics and Generating Stability Scores",description:"This guide will show admins how to get started set up a common type of stability monitoring."},sidebar:"backtrace",previous:{title:"Scheduled Reports",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/project-setup/scheduled-reports"},next:{title:"Stability Metrics",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/project-setup/stability-metrics"}},l={},u=[{value:"Project Settings",id:"project-settings",level:2},{value:"Manage the Backtrace Metric Objects",id:"manage-the-backtrace-metric-objects",level:2},{value:"Create the Metric Group",id:"create-the-metric-group",level:3},{value:"Create the Metrics",id:"create-the-metrics",level:3},{value:"Manage the Data Import System",id:"manage-the-data-import-system",level:2},{value:"Create the Metric Data Source",id:"create-the-metric-data-source",level:3},{value:"Create a Metric Importer and link to each Metric",id:"create-a-metric-importer-and-link-to-each-metric",level:3},{value:"Parameterized Query Expectations",id:"parameterized-query-expectations",level:4},{value:"View Stability Scores",id:"view-stability-scores",level:2},{value:"Stability Scores in Triage",id:"stability-scores-in-triage",level:2},{value:"Stability Scores in Explore with Group By",id:"stability-scores-in-explore-with-group-by",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:'Backtrace allows users to compute error rates against any metrics you collect like "Sessions started\u201d, \u201cMinutes used\u201d, \u201cOnline connections made\u201d or "Songs played". These metrics can be imported from raw data that lives in external systems like Graphite, Influx, Redshift, or Postgres. In the future, you will be able to supply raw data directly through the Backtrace client SDKs.'}),"\n",(0,i.jsx)(t.p,{children:"Below, you can see how Backtrace displays the number of errors by session (stability score) for each version:"}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/metrics-errors-session.webp"),alt:""}),"\n",(0,i.jsx)(t.p,{children:"To use the system, a Project Admin needs to define a metric group with a series of metrics contained within it, and a metric source with a series of importers to populate data for each metric you define."}),"\n",(0,i.jsx)(t.p,{children:"This guide will show admins how to use the UI to take the steps needed to get started set up a common type of stability monitoring, which is errors by session and minutes played for each released version of your application or game."}),"\n",(0,i.jsx)(t.h2,{id:"project-settings",children:"Project Settings"}),"\n",(0,i.jsxs)(t.p,{children:["Click into ",(0,i.jsx)(t.strong,{children:"Project Settings > Stability Monitoring"})," to setup the required metric groups, individual metrics, data sources, and importers."]}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/create-metric-group.webp"),alt:""}),"\n",(0,i.jsx)(t.h2,{id:"manage-the-backtrace-metric-objects",children:"Manage the Backtrace Metric Objects"}),"\n",(0,i.jsx)(t.h3,{id:"create-the-metric-group",children:"Create the Metric Group"}),"\n",(0,i.jsx)(t.p,{children:'First, we set up a metric group. Common metric groups are named "Sessions Started", "Minutes Played", or "Multiplayer Sessions Started".'}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/metric-group-settings.webp"),alt:""}),"\n",(0,i.jsx)(t.p,{children:"When defining a metric group, you will want to link an Attribute that you want to track stability scores for when grouped by it (i.e. Version). You can provide a default value in case that the queries you use to import data have no value for the attribute."}),"\n",(0,i.jsx)(t.p,{children:"Note: If you are linking attributes for a metric group that you expect to receive via events from one of our SDKs (Unity 3.5.0+ for example), you must ensure that the SDK is sending ALL of the attributes that you have linked on the metric events for that metrics group. If a metric event is missing an attribute that is expected for that metric group, the event will be dropped."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/metrics-link-attribute.webp"),alt:""}),"\n",(0,i.jsx)(t.h3,{id:"create-the-metrics",children:"Create the Metrics"}),"\n",(0,i.jsx)(t.p,{children:"Now we can start adding metrics, it\u2019s good practice to have naming conventions like {metricGroupName}-{attributeName}{attributeValue} for each metric (i.e. minutesPlayed-version1.0, minutesPlayed-version1.1, etc)."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/create-metric.webp"),alt:""}),"\n",(0,i.jsx)(t.p,{children:"If you are following these examples, you should create a few metrics to manage number of Minutes Played or Sessions Started for each of your last few versions. Below, we have metrics for Minutes Played in Version 3.16.0, 3.16.2, 3.16.4, and 3.16.5."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/metrics-example.webp"),alt:""}),"\n",(0,i.jsx)(t.p,{children:"We now have the 'shape' of the metrics in Backtrace. Next, we need to populate these metrics with data."}),"\n",(0,i.jsx)(t.h2,{id:"manage-the-data-import-system",children:"Manage the Data Import System"}),"\n",(0,i.jsx)(t.p,{children:"The Metric Sources tab allows you to define connections to metric systems like Postgres, Graphite, Redshift, or Influx. In the screenshot below, a metric source to a Postgres instance called postgres-sessions is created."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/metric-sources.webp"),alt:""}),"\n",(0,i.jsx)(t.h3,{id:"create-the-metric-data-source",children:"Create the Metric Data Source"}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.strong,{children:"Add Metric Source"})," to bring up the Create Metric Source dialog. Here, you will name your source, choose your source type (Graphite, Postgres, Influx, Redshift) and relevant connection and authentication options."]}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/add-metrics-source.webp"),alt:""}),"\n",(0,i.jsxs)(t.p,{children:["You'll notice above a Coronerd URL and Submission token as part of the metric source creation. Backtrace should fill in default values for you here. These are used by the metrics source to post the results of importers back into your backtrace project. You can generate other tokens to use under ",(0,i.jsx)(t.strong,{children:"Project Settings > Error Submission Tokens"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"create-a-metric-importer-and-link-to-each-metric",children:"Create a Metric Importer and link to each Metric"}),"\n",(0,i.jsx)(t.p,{children:"An Importer is the place where you write the query to pull metric information from the source systems and use results of that query to populate one of the metrics you defined earlier. Importers have three key sections"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The query to capture data"}),"\n",(0,i.jsx)(t.li,{children:"The metric to link the results to"}),"\n",(0,i.jsx)(t.li,{children:"Execution plan (how much history, how often to run)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"See below for an example:"}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/create-importer.webp"),alt:""}),"\n",(0,i.jsx)(t.p,{children:"You can see we named the importer something meaningful (MinsPlayedVersion3.16.2) and wrote a query to gather the required metric data, linked it to the Metric Minutes Played/minsPlayed-v3.16.2, and defined the execution plan (7 days of history with a 60 second time period between syncs)."}),"\n",(0,i.jsx)(t.h4,{id:"parameterized-query-expectations",children:"Parameterized Query Expectations"}),"\n",(0,i.jsx)(t.p,{children:'Backtrace uses parametrized queries to bound the time period for which data is being queried. If you use the "Test query" button, the system will try to inform you of any missing variables or other syntax issues. You should use the format of "time >= $1 and time < $2" within your query, and the system will populate $1 as either the last time the query was run or how far back in history you want, and $2 as the current time.'}),"\n",(0,i.jsx)(t.p,{children:"It is expected that you test your rest of your query body against the data source to make sure you are getting the results you expect. For example, below, you see a query to select the number of minutes played for version 3.16.2 with the time bounds."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"select mins_played, time from metric_table where version = '3.16.2' and time >= $1 and time < $2"})}),"\n",(0,i.jsx)(t.p,{children:"The results of your query will stored in the linked metric, so you may want to confirm the results of the query if you see incorrect data in Backtrace after the importers are run."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/metrics-source-example.png"),alt:""}),"\n",(0,i.jsx)(t.h2,{id:"view-stability-scores",children:"View Stability Scores"}),"\n",(0,i.jsx)(t.p,{children:'Once configured and populating, Stability Scores can be viewed in the Triage and Explore Views. You\'ll see a dropdown in the upper right for "Errors normalized by {metric group}".'}),"\n",(0,i.jsx)(t.h2,{id:"stability-scores-in-triage",children:"Stability Scores in Triage"}),"\n",(0,i.jsx)(t.p,{children:"Below, we can see errors normalized by sessions started. The top bar graph now shows how many sessions were seen over the time period (last 7 days), and the Errors by Sessions columns shows what % of sessions were impacted by a particular fingerprint."}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/stability-scores-triage.webp"),alt:""}),"\n",(0,i.jsx)(t.h2,{id:"stability-scores-in-explore-with-group-by",children:"Stability Scores in Explore with Group By"}),"\n",(0,i.jsx)(t.p,{children:'When we defined the original metric group, we linked to an attribute (version), and then defined metrics and importers for getting the minutes played metric for each version. Now, when you use Explore and Group By version, the "Errors" column will show a % of sessions that have seen errors seen for that given version. It helps better see which versions are buggier than others.'}),"\n",(0,i.jsx)("img",{src:(0,o.Ay)("img/error-reporting/project-settings/stability-score-explore.webp"),alt:""})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var i=r(34164);const s={tabItem:"tabItem_Ymn6"};var o=r(74848);function n(e){let{children:t,hidden:r,className:n}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,n),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var i=r(96540),s=r(34164),o=r(23104),n=r(56347),a=r(205),c=r(57485),l=r(31682),u=r(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:s}}=e;return{value:t,label:r,attributes:i,default:s}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,n.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,o=h(e),[n,c]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[l,d]=m({queryString:r,groupId:s}),[g,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,u.Dv)(r);return[s,(0,i.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),b=(()=>{const e=l??g;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:n,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),y(e)}),[d,y,o]),tabValues:o}}var y=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function w(e){let{className:t,block:r,selectedValue:i,selectValue:n,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==i&&(l(t),n(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:o}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(w,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function j(e){const t=(0,y.A)();return(0,f.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var i=r(96540);const s={},o=i.createContext(s);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);