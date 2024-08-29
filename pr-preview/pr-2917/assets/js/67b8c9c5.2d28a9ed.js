"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[32268],{97381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(74848),i=n(28453);n(86025),n(11470),n(19365);const s={id:"titanium",title:"Titanium",sidebar_label:"Titanium"},a=void 0,o={id:"testfairy/platforms/titanium",title:"Titanium",description:"The TiTestFairy Module extends the Appcelerator Titanium Mobile framework with the TestFairy Android and iOS SDKs. By integrating TestFairy, you gain valuable insights into how your app performs on real devices, understand user behavior, and collect metrics to optimize your user experience and code.",source:"@site/docs/testfairy/platforms/titanium.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/titanium",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/platforms/titanium",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/titanium.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"titanium",title:"Titanium",sidebar_label:"Titanium"},sidebar:"docs",previous:{title:"React Native",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/platforms/react-native"},next:{title:"Unity",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/platforms/unity"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Identifying Your Users",id:"identifying-your-users",level:2},{value:"Session Attributes",id:"session-attributes",level:2},{value:"Remote Logging",id:"remote-logging",level:2},{value:"Reference",id:"reference",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The TiTestFairy Module extends the Appcelerator Titanium Mobile framework with the TestFairy Android and iOS SDKs. By integrating TestFairy, you gain valuable insights into how your app performs on real devices, understand user behavior, and collect metrics to optimize your user experience and code."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"To integrate TestFairy into your Titanium Mobile project, follow these steps:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Add the following lines to your ",(0,r.jsx)(t.code,{children:"tiapp.xml"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<modules>\n    <module platform="iphone">com.testfairy.titestfairy</module>\n</modules>\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Download the ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/ti.testfairy/releases/latest/",children:"latest release."})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Be sure to either download either the Android (com.testfairy.titestfairy-android-2.1.3.zip) or the iOS (com.testfairy.titestfairy-iphone-2.1.3.zip) depending on the platform you're targeting."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Add the module to your Titanium Mobiles"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'\u201cHelp\u201d -> "Install Mobile Module..."'}),"\n",(0,r.jsxs)(t.li,{children:["or by unzipping the contents of the module zip file into your ",(0,r.jsx)(t.code,{children:"Titanium/modules/iphone"})," or ",(0,r.jsx)(t.code,{children:"Titanium/modules/android"})," folders."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Include the module in your code and use it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"    var TiTestFairy = require('com.testfairy.titestfairy');\n    TiTestFairy.begin(\"<APP TOKEN>\");\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Replace 'APP TOKEN' with your token, which can be found in the ",(0,r.jsx)(t.a,{href:"https://app.testfairy.com/settings/#app-token",children:"user preferences page"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more detailed code examples take a look at our ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/ti.testfairy/blob/feat-readme/example/app.js",children:"example app"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"identifying-your-users",children:"Identifying Your Users"}),"\n",(0,r.jsxs)(t.p,{children:["To learn how to identify users and set session attributes using the TestFairy SDK in Titanium, refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/identifying-users/",children:"identifying users section"})," in the SDK Documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"session-attributes",children:"Session Attributes"}),"\n",(0,r.jsxs)(t.p,{children:["For information on how to set session attributes using the TestFairy Titanium SDK, please refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/session-attributes/",children:"SDK Documentation on session attributes"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"remote-logging",children:"Remote Logging"}),"\n",(0,r.jsxs)(t.p,{children:["To understand how to perform remote logging with the TestFairy SDK in Titanium, refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/remote-logging/",children:"remote logging section"})," in the SDK Documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(t.p,{children:"The TestFairy Titanium module exposes the following methods:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.version;"})," - Returns the version of the TestFairy SDK."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.setCorrelationId(correlationId)"})," - Sets an identifier that can be looked up through dashboard."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.pushFeedbackController()"})," - Present a feedback dialog to the user."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.sendUserFeedback(string)"})," - Send a feedback on behalf of the user. Call when using a in-house feedback view controller with a custom design and feel. Feedback will be associated with the current session."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.updateLocation(locations)"})," - Mark geo location at this point (to be used with ",(0,r.jsx)(t.code,{children:"navigator.geolocation.getCurrentPosition"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.checkpoint(checkpointName)"})," - Mark a checkpoint in session."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.pause()"})," - Pauses the current session until resume() is called."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.resume()"})," - Resumes a paused session."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.sessionUrl()"})," - Returns the address of the recorded session on TestFairy's developer portal. Will return nil if recording has not started yet."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"TiTestFairy.takeScreenshot()"})," - Takes a screenshot."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),i=n(34164),s=n(23104),a=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:i}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),y=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(u(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,i.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function T(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",y.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function v(e){const t=(0,b.A)();return(0,g.jsx)(T,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);