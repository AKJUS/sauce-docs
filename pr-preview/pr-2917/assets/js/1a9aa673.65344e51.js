"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98028],{74020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=r(74848),t=r(28453),a=r(86025);r(11470),r(19365);const s={id:"app-versioning",title:"App Versioning",sidebar_label:"App Versioning"},o=void 0,l={id:"testfairy/app-distribution/app-versioning",title:"App Versioning",description:"When you upload an app to TestFairy, various aspects of the version, such as the app name, version number, and version name, are decoded and made accessible on the TestFairy dashboard. This documentation will explain the key elements related to app versioning and help you understand how to manage and differentiate your app builds effectively.",source:"@site/docs/testfairy/app-distribution/app-versioning.md",sourceDirName:"testfairy/app-distribution",slug:"/testfairy/app-distribution/app-versioning",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/app-distribution/app-versioning",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/app-distribution/app-versioning.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"app-versioning",title:"App Versioning",sidebar_label:"App Versioning"},sidebar:"docs",previous:{title:"Managing and Distributing Your App",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/app-distribution/managing-dist"},next:{title:"Landing Pages",permalink:"/sauce-docs/pr-preview/pr-2917/testfairy/app-distribution/landing-pages"}},d={},u=[{value:"Display Name",id:"display-name",level:2},{value:"Android",id:"android",level:2},{value:"iOS",id:"ios",level:2},{value:"Separating Apps and Builds",id:"separating-apps-and-builds",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When you upload an app to TestFairy, various aspects of the version, such as the app name, version number, and version name, are decoded and made accessible on the TestFairy dashboard. This documentation will explain the key elements related to app versioning and help you understand how to manage and differentiate your app builds effectively."}),"\n",(0,i.jsx)(n.h2,{id:"display-name",children:"Display Name"}),"\n",(0,i.jsxs)(n.p,{children:["The app name used on the dashboard is the ",(0,i.jsx)(n.strong,{children:"Display Name"})," in your iOS Xcode project, or the value of the ",(0,i.jsx)(n.code,{children:"string name=\u201dapp_name\u201d"})," in the ",(0,i.jsx)(n.strong,{children:"strings.xml"})," file in the ",(0,i.jsx)(n.code,{children:"res/values"})," directory of your Android app in Android Studio. By understanding how to configure the Display Name, you can ensure the accurate representation of your app on the TestFairy platform."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"In Xcode:"})}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("/img/testfairy/app-distribution/xcode-ios-app-display-name.png"),alt:"Xcode"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"In Android Studio:"})}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("/img/testfairy/app-distribution/android-studio-app-name.png"),alt:"Android studio"}),"\n",(0,i.jsx)(n.h2,{id:"android",children:"Android"}),"\n",(0,i.jsx)(n.p,{children:"For Android apps, TestFairy utilizes two fields to identify a build:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"versionCode"})," - A positive integer used as an internal version number."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"versionName"})," \u2014 A string used as the version number shown to users."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These fields are translated and displayed in the following fields on the dashboard:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Version = ",(0,i.jsx)(n.strong,{children:"versionName"})]}),"\n",(0,i.jsxs)(n.li,{children:["Version code = ",(0,i.jsx)(n.strong,{children:"versionCode"})," (displayed in brackets after the version field)"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("/img/testfairy/app-distribution/android-version-numbering.png"),alt:"Android version numbering"}),"\n",(0,i.jsx)(n.h2,{id:"ios",children:"iOS"}),"\n",(0,i.jsx)(n.p,{children:"iOS apps in TestFairy are identified using two fields:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bundle version"})," - A string of one to three period-separated integers. It can only contain numeric characters (0-9) and periods."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bundle versions string, short"})," - A string."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These fields are translated and displayed in the following fields on the dashboard:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Version = ",(0,i.jsx)(n.strong,{children:"Bundle versions string, short"})]}),"\n",(0,i.jsxs)(n.li,{children:["Version code = ",(0,i.jsx)(n.strong,{children:"Bundle version"})," (displayed in brackets after the version field)"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.Ay)("/img/testfairy/app-distribution/ios-version-numbering.png"),alt:"ios version numbering"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For more information about app versioning, see ",(0,i.jsx)(n.a,{href:"https://developer.apple.com/library/archive/technotes/tn2420/_index.html",children:"Version Numbers and Build Numbers"})," or ",(0,i.jsx)(n.a,{href:"https://developer.android.com/studio/publish/versioning#appversioning",children:"Set application version information"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"separating-apps-and-builds",children:"Separating Apps and Builds"}),"\n",(0,i.jsx)(n.p,{children:"When uploading an app to TestFairy, it's important to understand how TestFairy handles situations where an app with the same version and package name (or bundle identifier) already exists in your account. In such cases, the new app will override the old one, replacing it entirely."}),"\n",(0,i.jsx)(n.p,{children:"To retain the previous app build, you have two options:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change the app version. Either increment the app version name or number or add a numeric/textual suffix."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change the app package name (or bundle identifier)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since apps are grouped by package name, uploading an app with a new package name creates a new project. For example, apps with the package name ",(0,i.jsx)(n.code,{children:"com.company.app"})," are grouped separately from those with ",(0,i.jsx)(n.code,{children:"com.company.app.debug"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var i=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var i=r(96540),t=r(34164),a=r(23104),s=r(56347),o=r(205),l=r(57485),d=r(31682),u=r(70679);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=p(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[d,c]=m({queryString:r,groupId:t}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,u.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),b=(()=>{const e=d??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var g=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function y(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==i&&(d(n),s(t))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:c,onClick:u,...a,className:(0,t.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function x(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(j,{...e,children:c(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var i=r(96540);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);