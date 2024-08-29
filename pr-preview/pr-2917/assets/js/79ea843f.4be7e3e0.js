"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[70906],{48212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=r(74848),s=r(28453),n=(r(86025),r(11470)),i=r(19365);const l={id:"session-attributes",title:"Session Attributes",sidebar_label:"Session Attributes"},o=void 0,u={id:"testfairy/sdk/session-attributes",title:"Session Attributes",description:"TestFairy can collect additional information from your session, which can help you generate better insights.",source:"@site/docs/testfairy/sdk/session-attributes.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/session-attributes",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/sdk/session-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/session-attributes.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"session-attributes",title:"Session Attributes",sidebar_label:"Session Attributes"},sidebar:"docs",previous:{title:"Remote Logging",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/sdk/remote-logging"},next:{title:"Supported Platforms",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/sdk/supported-platforms"}},c={},d=[];function h(e){const t={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"TestFairy can collect additional information from your session, which can help you generate better insights."}),"\n",(0,a.jsxs)(n.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"Cordova",value:"cordova"},{label:"React Native",value:"react"},{label:"Nativescript",value:"native"},{label:"Xamarin",value:"xamarin"},{label:"Unity",value:"unity"},{label:"Adobe Air",value:"adobe"},{label:"Titanium",value:"titanium"}],children:[(0,a.jsxs)(i.A,{value:"android",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.setAttribute("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.TestFairy;\n\nTestFairy.setAttribute("payment-method","free");\nTestFairy.setAttribute("account-type","driver");\nTestFairy.setAttribute("phone","+1-672-154-5109");\nTestFairy.setAttribute("level","20");\n'})})]}),(0,a.jsxs)(i.A,{value:"ios",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'[TestFairy setAttribute:@"<key>" withValue:@"<value>"];\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\n#import "TestFairy.h"\n\n[TestFairy setAttribute:@"name" withValue:@"John Snow"];\n[TestFairy setAttribute:@"phone" withValue:@"+672-14-5109"];\n[TestFairy setAttribute:@"age" withValue:@"20"];\n[TestFairy setAttribute:@"favorite_color" withValue:@"blue"];\n'})})]}),(0,a.jsxs)(i.A,{value:"cordova",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.setAttribute("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.setAttribute("name","John Snow");\nTestFairy.setAttribute("phone","+672-14-5109");\nTestFairy.setAttribute("age","20");\nTestFairy.setAttribute("favorite_color","blue");\n'})})]}),(0,a.jsxs)(i.A,{value:"react",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.setAttribute("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nconst TestFairy = require(\'react-native-testfairy\');\n\nTestFairy.setAttribute("name","John Snow");\nTestFairy.setAttribute("phone","+672-14-5109");\nTestFairy.setAttribute("age","20");\nTestFairy.setAttribute("favorite_color","blue");\n'})})]}),(0,a.jsxs)(i.A,{value:"native",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairySDK.setAttribute("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport { TestFairySDK } from \'nativescript-testfairy\';\n\nTestFairySDK.setAttribute("name","John Snow");\nTestFairySDK.setAttribute("phone","+672-14-5109");\nTestFairySDK.setAttribute("age","20");\nTestFairySDK.setAttribute("favorite_color","blue");\n'})})]}),(0,a.jsxs)(i.A,{value:"xamarin",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.SetAttribute ("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nusing TestFairyLib;\n\nTestFairy.SetAttribute ("name","John Snow");\nTestFairy.SetAttribute ("phone","+672-14-5109");\nTestFairy.SetAttribute ("age","20");\nTestFairy.SetAttribute ("favorite_color","blue");\n'})})]}),(0,a.jsxs)(i.A,{value:"unity",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.setAttribute("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nusing TestFairyUnity;\n\nTestFairy.setAttribute("name","John Snow");\nTestFairy.setAttribute("phone","+672-14-5109");\nTestFairy.setAttribute("age","20");\nTestFairy.setAttribute("favorite_color","blue");\n'})})]}),(0,a.jsxs)(i.A,{value:"adobe",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'AirTestFairy.setAttribute("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nimport com.testfairy.AirTestFairy;\n\nAirTestFairy.setAttribute("name","John Snow");\nAirTestFairy.setAttribute("phone","+672-14-5109");\nAirTestFairy.setAttribute("age","20");\nAirTestFairy.setAttribute("favorite_color","blue");\n'})})]}),(0,a.jsxs)(i.A,{value:"titanium",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TiTestFairy.setAttribute("<key>", "<value>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'// Be sure to import TestFairy\nvar TiTestFairy = require(\'com.testfairy.titestfairy\');\n\nTiTestFairy.setAttribute("name","John Snow");\nTiTestFairy.setAttribute("phone","+672-14-5109");\nTiTestFairy.setAttribute("age","20");\nTiTestFairy.setAttribute("favorite_color","blue");\n'})})]})]}),"\n",(0,a.jsxs)(t.p,{children:["The first value is a string ",(0,a.jsx)(t.code,{children:"key"})," to help you search for the attribute in your session. The second parameter, ",(0,a.jsx)(t.code,{children:"value"}),", is any string value for the attribute associated with the session. Neither value can be nil. These attributes are available later in the session recording page, are available via API, and are searchable."]}),"\n",(0,a.jsx)(t.p,{children:"Adding these lines will mark this session with the values above, so when you review the recording, you have more information about the person running the app."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"setAttribute"})," may be called many times."]}),"\n",(0,a.jsxs)(t.li,{children:["You may call ",(0,a.jsx)(t.code,{children:"setAttribute"})," before or after ",(0,a.jsx)(t.code,{children:"begin"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"You can only store a maximum of 64 keys. The keys can be a maximum of 64 characters. The values can have a maximum of 1000 characters."}),"\n"]})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(34164);const s={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>T});var a=r(96540),s=r(34164),n=r(23104),i=r(56347),l=r(205),o=r(57485),u=r(31682),c=r(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:s}}=e;return{value:t,label:r,attributes:a,default:s}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[u,d]=m({queryString:r,groupId:s}),[p,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Dv)(r);return[s,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),v=(()=>{const e=u??p;return b({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),y(e)}),[d,y,n]),tabValues:n}}var y=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==a&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...n,className:(0,s.A)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...t,...e}),(0,f.jsx)(x,{...t,...e})]})}function T(e){const t=(0,y.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var a=r(96540);const s={},n=a.createContext(s);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);