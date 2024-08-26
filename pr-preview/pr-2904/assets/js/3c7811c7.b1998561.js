"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49444],{83050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(74848),r=n(28453);n(86025),n(11470),n(19365);const i={id:"react-native",title:"React Native",sidebar_label:"React Native"},s=void 0,o={id:"testfairy/platforms/react-native",title:"React Native",description:"TestFairy is a powerful tool that allows you to integrate session recording capabilities into your React Native applications. With TestFairy, you can gain valuable insights into how users interact with your app, identify and debug issues more effectively, and optimize the user experience.",source:"@site/docs/testfairy/platforms/react-native.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/react-native",permalink:"/sauce-docs/pr-preview/pr-2904/testfairy/platforms/react-native",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/react-native.md",tags:[],version:"current",lastUpdatedBy:"aoleszyn",lastUpdatedAt:1689243408e3,frontMatter:{id:"react-native",title:"React Native",sidebar_label:"React Native"},sidebar:"docs",previous:{title:"Neptune Software",permalink:"/sauce-docs/pr-preview/pr-2904/testfairy/platforms/neptune"},next:{title:"Titanium",permalink:"/sauce-docs/pr-preview/pr-2904/testfairy/platforms/titanium"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"TestFairy is a powerful tool that allows you to integrate session recording capabilities into your React Native applications. With TestFairy, you can gain valuable insights into how users interact with your app, identify and debug issues more effectively, and optimize the user experience."}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"To integrate TestFairy into your React Native project, follow these steps:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Open your project's root directory in a terminal."}),"\n",(0,a.jsxs)(t.li,{children:["Run the following command to install the TestFairy package as a dependency:\n",(0,a.jsx)(t.code,{children:"npm install --save react-native-testfairy"})]}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"If you are using React Native version 0.60.0 or higher, you will need to run the following command in your iOS directory:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"cd ios\npod install\n"})})]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"After you have successfully installed the TestFairy library, you can enable TestFairy session recording in your React Native application. You will need your app token, which you can get from your preferences page on your TestFairy account. Follow these steps to get started:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Obtain your app token from the ",(0,a.jsx)(t.a,{href:"https://app.testfairy.com/settings/",children:"user preferences"})," on your TestFairy account."]}),"\n",(0,a.jsx)(t.li,{children:"Import the TestFairy bridge from your JavaScript file (e.g., index.ios.js, index.android.js, or App.js), and invoke begin passing in the app token. The best time to invoke begin is usually in componentWillMount or right before you register your application."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"const TestFairy = require('react-native-testfairy');\n...\ncomponentWillMount: function() {\n  TestFairy.begin(<insert ios app token here>);\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),r=n(18215),i=n(23104),s=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=h({queryString:n,groupId:r}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=u??m;return f({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,y.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);