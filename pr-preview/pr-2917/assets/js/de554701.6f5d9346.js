"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[27618],{36142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(74848),s=r(28453),n=r(11470),l=r(19365);r(86025);const o={id:"quickstart",title:"Replay Quickstart",sidebar_label:"Quickstart"},c=void 0,i={id:"web-apps/automated-testing/replay/quickstart",title:"Replay Quickstart",description:"Use saucectl \u2014 the Sauce Labs test orchestrator CLI \u2014 to replay Chrome DevTools Recordings.",source:"@site/docs/web-apps/automated-testing/replay/quickstart.md",sourceDirName:"web-apps/automated-testing/replay",slug:"/web-apps/automated-testing/replay/quickstart",permalink:"/sauce-docs/pr-preview/pr-2917/web-apps/automated-testing/replay/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/replay/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"quickstart",title:"Replay Quickstart",sidebar_label:"Quickstart"},sidebar:"docs",previous:{title:"Using Replay",permalink:"/sauce-docs/pr-preview/pr-2917/web-apps/automated-testing/replay"},next:{title:"YAML Configuration",permalink:"/sauce-docs/pr-preview/pr-2917/web-apps/automated-testing/replay/yaml"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Step 1: Install <code>saucectl</code>",id:"step-1-install-saucectl",level:2},{value:"Step 2: Link Your Sauce Labs Account",id:"step-2-link-your-sauce-labs-account",level:2},{value:"Step 3: Set up Your Replay Project",id:"step-3-set-up-your-replay-project",level:2},{value:"Step 4: Replay Recordings",id:"step-4-replay-recordings",level:2},{value:"Step 5: Roll Your Own",id:"step-5-roll-your-own",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"saucectl"})," \u2014 the Sauce Labs test orchestrator CLI \u2014 to replay ",(0,a.jsx)(t.a,{href:"https://developer.chrome.com/docs/devtools/recorder",children:"Chrome DevTools Recordings"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Don't have a DevTools recording but want to try? Follow the steps below to use the Replay Demo Repo to build a sample project structure, working configuration file, and sample recording \u2014 get up and running in less than 10 minutes!"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Your Sauce Labs ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://nodejs.org/en/",children:"Node.js"})," to use the NPM package manager"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"step-1-install-saucectl",children:["Step 1: Install ",(0,a.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,a.jsxs)(t.p,{children:["In a terminal shell, run the install command from your chosen ",(0,a.jsx)(t.code,{children:"saucectl"})," home directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"npm install -g saucectl\n"})}),"\n",(0,a.jsx)(t.h2,{id:"step-2-link-your-sauce-labs-account",children:"Step 2: Link Your Sauce Labs Account"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"saucectl"})," requires access to a valid Sauce Labs account."]}),"\n",(0,a.jsxs)(t.admonition,{title:"Use Environment Variables",type:"tip",children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"saucectl"})," detects your Sauce Labs credentials ",(0,a.jsx)(t.a,{href:"/basics/environment-variables",children:"environment variables"})," and prioritizes them over values in the ",(0,a.jsx)(t.code,{children:"credentials.yml"})," file when both are present. ",(0,a.jsx)(t.strong,{children:"If you have set them, you may skip this step."})," Not sure if you have them set? Run the following command to check:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),(0,a.jsx)(t.p,{children:"If a value is returned for both variables, they are set."})]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Run the ",(0,a.jsx)(t.code,{children:"configure"})," command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"saucectl configure\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter your Sauce Labs username and access key at the prompts."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"step-3-set-up-your-replay-project",children:"Step 3: Set up Your Replay Project"}),"\n",(0,a.jsxs)(t.p,{children:["Clone the ",(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-replay-example",children:"Replay Demo Repo"})," to get a project structure, configuration file, and sample recording. Use the command below that is applicable to your GitHub setup."]}),"\n",(0,a.jsxs)(n.A,{defaultValue:"https",values:[{label:"HTTPS",value:"https"},{label:"SSH",value:"ssh"}],children:[(0,a.jsx)(l.A,{value:"https",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"git clone https://github.com/saucelabs/saucectl-replay-example.git\n"})})}),(0,a.jsx)(l.A,{value:"ssh",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"git clone git@github.com:saucelabs/saucectl-replay-example.git\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"step-4-replay-recordings",children:"Step 4: Replay Recordings"}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to the root of the Replay project you just cloned, then use the ",(0,a.jsx)(t.code,{children:"run"})," command to replay the sample recording included with the ",(0,a.jsx)(t.code,{children:"saucectl"})," example."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cd saucectl-replay-example\nsaucectl run\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The results are available immediately following job completion in your ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/dashboard/tests/vdc",children:"Sauce Labs Dashboard"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"step-5-roll-your-own",children:"Step 5: Roll Your Own"}),"\n",(0,a.jsxs)(t.p,{children:["Ready to create your own recordings? Follow ",(0,a.jsx)(t.a,{href:"https://developers.google.com/codelabs/devtools-recorder#3",children:"this tutorial"})," and export your DevTools Recording to JSON."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(34164);const s={tabItem:"tabItem_Ymn6"};var n=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),s=r(34164),n=r(23104),l=r(56347),o=r(205),c=r(57485),i=r(31682),u=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:s}}=e;return{value:t,label:r,attributes:a,default:s}}))}(r);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=p(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[i,d]=m({queryString:r,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,u.Dv)(r);return[s,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),v=(()=>{const e=i??b;return h({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var f=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,n.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=o[r].value;s!==a&&(i(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...n,className:(0,s.A)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var a=r(96540);const s={},n=a.createContext(s);function l(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);