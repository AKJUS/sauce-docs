"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[36807],{47101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(74848),a=r(28453);r(86025),r(11470),r(19365);const i={id:"flutter",title:"Flutter on Sauce Labs",sidebar_label:"Using Flutter",description:"Test your mobile Flutter apps on Sauce Labs"},s=void 0,o={id:"mobile-apps/automated-testing/flutter",title:"Flutter on Sauce Labs",description:"Test your mobile Flutter apps on Sauce Labs",source:"@site/docs/mobile-apps/automated-testing/flutter.md",sourceDirName:"mobile-apps/automated-testing",slug:"/mobile-apps/automated-testing/flutter",permalink:"/sauce-docs/pr-preview/pr-2917/mobile-apps/automated-testing/flutter",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/flutter.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"flutter",title:"Flutter on Sauce Labs",sidebar_label:"Using Flutter",description:"Test your mobile Flutter apps on Sauce Labs"},sidebar:"docs",previous:{title:"Espresso Screenshot Capture",permalink:"/sauce-docs/pr-preview/pr-2917/mobile-apps/automated-testing/espresso-xcuitest/espresso-capture"},next:{title:"Flutter Android",permalink:"/sauce-docs/pr-preview/pr-2917/mobile-apps/automated-testing/flutter/flutter-integration-testing-android"}},l={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Choosing a Flutter Integration Driver for Testing",id:"choosing-a-flutter-integration-driver-for-testing",level:2},{value:"Appium Flutter Integration Driver",id:"appium-flutter-integration-driver",level:3},{value:"Native Flutter Integration Driver",id:"native-flutter-integration-driver",level:3},{value:"How to Get Started",id:"how-to-get-started",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Are your iOS and Android apps built with Flutter? Sauce Labs supports testing Flutter apps on Real Devices."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://flutter.dev/",children:"Flutter"})," is a popular open-source framework created by Google to build natively compiled\napplications for mobile, web, and desktop from a single codebase. You can run your tests on Sauce Labs to benefit\nfrom speed, parallelization, failure analysis, simple setup, and more."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,n.jsxs)(t.li,{children:["Flutter mobile app. If you don't have one, you could use our Flutter Demo App:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-flutter",children:"Sauce Labs Flutter Demo App"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"choosing-a-flutter-integration-driver-for-testing",children:"Choosing a Flutter Integration Driver for Testing"}),"\n",(0,n.jsxs)(t.p,{children:["There are two drivers that you can use to test your Flutter app on Sauce Labs:\n",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/flutter/flutter-integration-testing-android",children:"Native Flutter Integration Driver Devices - Android"}),"\nor ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/appium-flutter-integration-driver",children:"Appium Flutter Integration Driver"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"appium-flutter-integration-driver",children:"Appium Flutter Integration Driver"}),"\n",(0,n.jsxs)(t.p,{children:["With the ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/appium-flutter-integration-driver",children:"Appium Flutter Integration Driver"}),",\nyou can write tests in for both Android and iOS devices using the Appium framework. The Appium Flutter Integration\nDriver is a wrapper around the Appium framework that allows you to write tests in languages other than Dart, such as\nJava, Python, Ruby, and more."]}),"\n",(0,n.jsx)(t.h3,{id:"native-flutter-integration-driver",children:"Native Flutter Integration Driver"}),"\n",(0,n.jsxs)(t.p,{children:["With the ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/flutter/flutter-integration-testing-android",children:"Native Flutter Integration Driver Devices"}),",\nyou can write tests in Dart and run them on Sauce Labs. Only Android is currently supported."]}),"\n",(0,n.jsx)(t.admonition,{title:"iOS Support",type:"info",children:(0,n.jsx)(t.p,{children:"We're excited to share that Sauce Labs is actively working on expanding support for Flutter integration tests on iOS.\nStay tuned for updates as we continue to develop this capability!"})}),"\n",(0,n.jsxs)(t.p,{children:["Both drivers are based on ",(0,n.jsx)(t.a,{href:"https://docs.flutter.dev/cookbook/testing/integration/introduction",children:"Flutter Integration Test"}),".\nCheck the table below to see which driver is best for your testing needs."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Use Cases"}),(0,n.jsx)(t.th,{children:"Native Flutter Driver"}),(0,n.jsx)(t.th,{children:"Appium Flutter Integration Driver"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Writing tests in languages other than Dart"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Running integration tests for Flutter apps with embedded webview or native view, or existing native apps with embedded Flutter view"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Running tests on multiple devices simultaneously"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Running integration tests on device farms that offer Appium support"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"App interactions beyond Flutter\u2019s contextuality (e.g., sending an OTP from a message application)"}),(0,n.jsx)(t.td,{children:"\u274c"}),(0,n.jsx)(t.td,{children:"\u2714\ufe0f"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-get-started",children:"How to Get Started"}),"\n",(0,n.jsx)(t.p,{children:"After choosing the driver that best fits your testing needs, follow the guides below to set up your Flutter app for\ntesting on Sauce Labs."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/appium/appium-flutter-integration-driver",children:"Appium Flutter Integration Driver"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/flutter/flutter-integration-testing-android",children:"Native Flutter Integration Driver Devices - Android"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),i=r(23104),s=r(56347),o=r(205),l=r(57485),u=r(31682),d=r(70679);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,c]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=u??f;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var b=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(u(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);