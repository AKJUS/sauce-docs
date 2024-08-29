"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[26587],{41605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(74848),a=n(28453);n(86025),n(11470),n(19365);const o={id:"coralogix",title:"Coralogix",sidebar_label:"Coralogix"},s=void 0,l={id:"testfairy/integrations/coralogix",title:"Coralogix",description:"Coralogix is a machine-learning-powered logging platform built for companies performing CI/CD at scale.",source:"@site/docs/testfairy/integrations/coralogix.md",sourceDirName:"testfairy/integrations",slug:"/testfairy/integrations/coralogix",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/integrations/coralogix",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/integrations/coralogix.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"coralogix",title:"Coralogix",sidebar_label:"Coralogix"},sidebar:"docs",previous:{title:"Centercode",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/integrations/centercode"},next:{title:"Slack",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/integrations/slack"}},i={},c=[];function u(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://coralogix.com/",children:"Coralogix"})," is a machine-learning-powered logging platform built for companies performing CI/CD at scale."]}),"\n",(0,r.jsx)(t.p,{children:"To integrate TestFairy with Coralogix and automatically push all the logs collected from your mobile devices to your Coralogix account, do the following:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Install the ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/testfairy-fetch-sessions",children:"TestFairy fetch sessions"})," logs client on your server by running the following command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install -g --link git+https://github.com/testfairy/testfairy-fetch-sessions.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Create a cron job that runs this command every 15 minutes."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'testfairy-fetch-sessions --endpoint "your_subdomain.testfairy.com" --user "john@example.com" --api-key "YOUR_API_KEY" --project-id=1000 --logs --json\n'})}),"\n",(0,r.jsx)(t.p,{children:"Make sure to replace the following params:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Replace ",(0,r.jsx)(t.code,{children:"your_subdomain.testfairy.com"})," with your server address."]}),"\n",(0,r.jsxs)(t.li,{children:["Replace ",(0,r.jsx)(t.code,{children:"john@example.com"})," with your admin username"]}),"\n",(0,r.jsxs)(t.li,{children:["Replace ",(0,r.jsx)(t.code,{children:"YOUR_API_KEY"})," with your API KEY (found under User preferences > Upload API key)"]}),"\n",(0,r.jsxs)(t.li,{children:["Replace ",(0,r.jsx)(t.code,{children:"1000"})," with your project ID"]}),"\n",(0,r.jsxs)(t.li,{children:["(Optional) Add ",(0,r.jsx)(t.code,{children:"--json"})," to have a log line as a json with all session attributes."]}),"\n",(0,r.jsxs)(t.li,{children:["(Optional): add ",(0,r.jsx)(t.code,{children:"--all-time"})," flag to get logs from all times. If not used, the tool only fetches logs from the last 24 hours. Only use this option if this is your first debugging of the service. Logs older than 24 hours are usually a waste of good disk space."]}),"\n",(0,r.jsxs)(t.li,{children:["(Optional): if your logs are encrypted with RSA public key, use ",(0,r.jsx)(t.code,{children:"--rsa-private-key"})," with your private key for decryption."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Install Coralogix shipper:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Download the preconfigured ",(0,r.jsx)(t.code,{children:"[fluentd.conf]"}),"(/img/testfairy/integrations/fluentd.conf)"]}),"\n",(0,r.jsxs)(t.li,{children:["Edit ",(0,r.jsx)(t.code,{children:"fluentd.conf"}),", and update ",(0,r.jsx)(t.code,{children:"CORALOGIX_PRIVATEKEY"})," and ",(0,r.jsx)(t.code,{children:"CORALOGIX_APPNAME"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Run FluentD:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker run -d -v `pwd`/fluentd.conf:/fluentd/etc/fluent.conf -v `pwd`:/opt coralogixrepo/fluentd-coralogix-image:latest\n"})}),"\n",(0,r.jsx)(t.p,{children:"Fluentd loops endlessly, looking for new logs files on disk. Ensure you keep this docker container running while the cron job fetches sessions from TestFairy now and then."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You have integrated TestFairy with Coralogix; you can now analyze and monitor mobile app logs in production."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),l=n(205),i=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function w(e){const t=(0,m.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);