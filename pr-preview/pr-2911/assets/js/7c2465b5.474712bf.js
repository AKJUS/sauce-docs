"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89651],{86958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(74848),r=n(28453),o=n(86025);n(11470),n(19365);const i={id:"dev-tools",title:"DevTools",sidebar_label:"DevTools",description:"Leverage the power of Chrome DevTools and Safari Web Inspector to test your mobile iOS and Android web apps and websites in real-time with our Real Devices cloud."},a=void 0,l={id:"web-apps/live-testing/dev-tools",title:"DevTools",description:"Leverage the power of Chrome DevTools and Safari Web Inspector to test your mobile iOS and Android web apps and websites in real-time with our Real Devices cloud.",source:"@site/docs/web-apps/live-testing/dev-tools.md",sourceDirName:"web-apps/live-testing",slug:"/web-apps/live-testing/dev-tools",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/live-testing/dev-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/live-testing/dev-tools.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"dev-tools",title:"DevTools",sidebar_label:"DevTools",description:"Leverage the power of Chrome DevTools and Safari Web Inspector to test your mobile iOS and Android web apps and websites in real-time with our Real Devices cloud."},sidebar:"docs",previous:{title:"Live Cross Browser Testing",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/live-testing/live-cross-browser-testing"},next:{title:"Using Selenium",permalink:"/sauce-docs/pr-preview/pr-2911/web-apps/automated-testing/selenium"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Cross Browser Testing with Development Tools",id:"cross-browser-testing-with-development-tools",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Leverage the power of ",(0,s.jsx)(t.a,{href:"https://developer.chrome.com/docs/devtools/",children:"Chrome DevTools"})," and Safari ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/safari/tools/#current",children:"Web Inspector"})," to test your mobile iOS and Android web apps and websites in real time with our Real Devices cloud."]}),"\n",(0,s.jsx)(t.p,{children:"You can use Dev Tools to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Debug and diagnose CSS and JavaScript issues quickly."}),"\n",(0,s.jsx)(t.li,{children:"View and edit DOM elements."}),"\n",(0,s.jsx)(t.li,{children:"Analyze network requests, responses, and timings to optimize your network."}),"\n",(0,s.jsx)(t.li,{children:"Identify performance issues to improve load times and responsiveness."}),"\n",(0,s.jsx)(t.li,{children:"Native or Hybrid applications"}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("img/live-web-apps/new-toolbar/dev-tools-elements.png"),alt:"Shows the Dev Tools tab used to inspect elements in the Developer Options for a live mobile test.",width:"800"}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (",(0,s.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsx)(t.li,{children:"Web or Hybrid application under test."}),"\n",(0,s.jsx)(t.li,{children:"A Google Chrome or Microsoft Edge browser (for Windows or macOS)."}),"\n",(0,s.jsxs)(t.li,{children:["An iOS or Android Real Device with version:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"iOS/iPadOS 13 and above"}),"\n",(0,s.jsx)(t.li,{children:"Android 9 and above"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"cross-browser-testing-with-development-tools",children:"Cross Browser Testing with Development Tools"}),"\n",(0,s.jsx)(t.p,{children:"To enable DevTools for iOS and Android during cross-browser testing:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In Sauce Labs, go to ",(0,s.jsx)(t.strong,{children:"Live"})," > ",(0,s.jsx)(t.strong,{children:"Cross Browser"})," or ",(0,s.jsx)(t.strong,{children:"Mobile App"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["In the ",(0,s.jsx)(t.strong,{children:"URL"})," field, enter the web application's url, or select the native/hybrid application you want to test."]}),"\n",(0,s.jsx)(t.li,{children:"Launch a test on a Real Device (iOS 13+, Android 9+)."}),"\n",(0,s.jsxs)(t.li,{children:["After your session starts, select ",(0,s.jsx)(t.strong,{children:"Developer Options"})," from the toolbar on the right of the screen."]}),"\n",(0,s.jsxs)(t.li,{children:["Select the new ",(0,s.jsx)(t.strong,{children:"Dev Tools"})," tab."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsx)(t.p,{children:"With DevTools against Hybrid applications, we're initiating DevTools and searching for a Webview/Webkit in your application context. This may take a few moments.\nPlease ensure that the page you're inspecting contains a WebView/Webkit and that it's currently rendered on screen."})]}),"\n",(0,s.jsx)("img",{src:(0,o.Ay)("img/live-web-apps/new-toolbar/dev-tools-sources.png"),alt:"Shows the Dev Tools tab used to inspect sources in the Developer Options for a live mobile test.",width:"800"}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"With Hybrid application, release builds must enable the ability to inspect web views in your application."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["On Android 4.4*, call ",(0,s.jsx)(t.a,{href:"https://developer.android.com/reference/android/webkit/WebView#setWebContentsDebuggingEnabled(boolean)",children:(0,s.jsx)(t.code,{children:"WebView.setWebContentsDebuggingEnabled"})}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["On iOS 16.4+, set ",(0,s.jsx)(t.a,{href:"https://developer.apple.com/documentation/webkit/wkwebview/4111163-isinspectable",children:(0,s.jsx)(t.code,{children:"isinspectable"})})," to ",(0,s.jsx)(t.code,{children:"true"})," on on the Webkit/WKWebView instance."]}),"\n"]})]}),"\n",(0,s.jsx)(t.p,{children:"You can now interact with the DevTool/WebInspector components."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),r=n(34164),o=n(23104),i=n(56347),a=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,u]=b({queryString:n,groupId:r}),[v,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=c??v;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(74848);function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=a[n].value;r!==s&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=v(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,w.jsx)(g,{...t,...e}),(0,w.jsx)(x,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,w.jsx)(j,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);