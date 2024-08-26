"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8436],{63505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(74848),r=t(28453),s=t(86025);t(11470),t(19365);const a={id:"xamarin",title:"Xamarin Component",sidebar_label:"Xamarin Component"},o=void 0,l={id:"testfairy/platforms/xamarin",title:"Xamarin Component",description:"TestFairy allows you to gather insights and valuable data about your Xamarin-based Android and iOS applications.",source:"@site/docs/testfairy/platforms/xamarin.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/xamarin",permalink:"/sauce-docs/pr-preview/pr-2904/testfairy/platforms/xamarin",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/xamarin.md",tags:[],version:"current",lastUpdatedBy:"aoleszyn",lastUpdatedAt:1690142391e3,frontMatter:{id:"xamarin",title:"Xamarin Component",sidebar_label:"Xamarin Component"},sidebar:"docs",previous:{title:"Unity",permalink:"/sauce-docs/pr-preview/pr-2904/testfairy/platforms/unity"},next:{title:"Using Bug Tracking",permalink:"/sauce-docs/pr-preview/pr-2904/testfairy/sdk/bug-tracking/using-bug-tracking"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Using the Xamarin SDK",id:"using-the-xamarin-sdk",level:2},{value:"Identifying Your Users",id:"identifying-your-users",level:3},{value:"Session Attributes",id:"session-attributes",level:3},{value:"Remote Logging",id:"remote-logging",level:3},{value:"Uploading dSYM",id:"uploading-dsym",level:2},{value:"Xamarin Insights Integration",id:"xamarin-insights-integration",level:3},{value:"Integration",id:"integration",level:2},{value:"Android Integration",id:"android-integration",level:3},{value:"Telling TestFairy What To Record",id:"telling-testfairy-what-to-record",level:2},{value:"Mixing With Other Crash Handlers",id:"mixing-with-other-crash-handlers",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"TestFairy allows you to gather insights and valuable data about your Xamarin-based Android and iOS applications."}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"TestFairy is available for both Android and iOS. You can install TestFairy bindings for Xamarin in one of two ways:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download the latest binding DLL directly from ",(0,i.jsx)(n.a,{href:"https://github.com/testfairy/testfairy-xamarin/releases",children:"GitHub"})," for your specific platform."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Install the bindings through ",(0,i.jsx)(n.a,{href:"https://www.nuget.org/packages/TestFairy.Xamarin/",children:"NuGet"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You need an app token (TESTFAIRY_APP_TOKEN), which can be found on your ",(0,i.jsx)(n.a,{href:"http://app.testfairy.com/settings/",children:"settings page"})]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-xamarin-sdk",children:"Using the Xamarin SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"AppDelegate.cs"})," in your solution, and override or add the following code to ",(0,i.jsx)(n.code,{children:"FinishedLaunching"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"using TestFairyLib;\n...\n\npublic override bool FinishedLaunching (UIApplication app, NSDictionary options)\n{\n TestFairy.Begin (TESTFAIRY_APP_TOKEN);\n\n // Rest of the method here\n // ...\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"identifying-your-users",children:"Identifying Your Users"}),"\n",(0,i.jsxs)(n.p,{children:["To learn how to identify users and set session attributes using the TestFairy SDK in Xamarin, refer to the ",(0,i.jsx)(n.a,{href:"/testfairy/sdk/identifying-users/",children:"identifying users section"})," in the SDK Documentation."]}),"\n",(0,i.jsx)(n.h3,{id:"session-attributes",children:"Session Attributes"}),"\n",(0,i.jsxs)(n.p,{children:["For information on how to set session attributes using the TestFairy Xamarin SDK, please refer to the ",(0,i.jsx)(n.a,{href:"/testfairy/sdk/session-attributes/",children:"SDK Documentation on session attributes"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"remote-logging",children:"Remote Logging"}),"\n",(0,i.jsxs)(n.p,{children:["To understand how to perform remote logging with the TestFairy SDK in Xamarin, refer to the ",(0,i.jsx)(n.a,{href:"/testfairy/sdk/remote-logging/",children:"remote logging section"})," in the SDK Documentation."]}),"\n",(0,i.jsx)(n.h2,{id:"uploading-dsym",children:"Uploading dSYM"}),"\n",(0,i.jsx)(n.p,{children:"With TestFairy, symbolicating crash reports are as easy as pie. A simple Build Phase script can automatically upload the compressed .dSYM file for future symbolicaton."}),"\n",(0,i.jsx)(n.p,{children:"To enable automatic uploads of .dSYM files, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy ",(0,i.jsx)(n.strong,{children:"upload_dsym.sh"})," to your project folder. ",(0,i.jsx)(n.a,{href:"https://s3.amazonaws.com/testfairy/sdk/upload-dsym.sh",children:"Download here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In Xamarin Studio, click on your project in the left sidebar, then open ",(0,i.jsx)(n.strong,{children:'"Settings"'})," and choose ",(0,i.jsx)(n.strong,{children:"Options"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("/img/testfairy/platform/project_options.png"),alt:"project options"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.strong,{children:"Custom Commands"})," on the left, press ",(0,i.jsx)(n.strong,{children:"Select a project operation"})," and select ",(0,i.jsx)(n.strong,{children:"After Build"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("/img/testfairy/platform/custom_command.png"),alt:"custom command"}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Add the following to the command line."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sh upload-dsym.sh UPLOAD_API_KEY -p DSYM_PATH\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.strong,{children:"UPLOAD_API_KEY"})," with your upload API key; you can find it on the ",(0,i.jsx)(n.a,{href:"https://app.testfairy.com/settings/",children:"Settings"})," page."]}),"\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.strong,{children:"DSYM_PATH"})," with the path of your build folder."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the ",(0,i.jsx)(n.em,{children:'"Working Directory"'})," to the path of ",(0,i.jsx)(n.em,{children:"upload-dsym.sh"})," file"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("/img/testfairy/platform/upload_dsym_command.png"),alt:"upload dsym command"}),"\n",(0,i.jsx)(n.h3,{id:"xamarin-insights-integration",children:"Xamarin Insights Integration"}),"\n",(0,i.jsx)(n.p,{children:"With Insights, Xamarin developers can review their app usage using the Xamarin Insights component. TestFairy fills in the gap by providing additional metrics, such as CPU usage and memory allocation and even video capture from the device. Any questions you may have as a developer will be answered in the TestFairy session reports."}),"\n",(0,i.jsx)("img",{src:(0,s.A)("/img/testfairy/platform/xamarin-insights-integration.png"),alt:"xamarin insights integration"}),"\n",(0,i.jsxs)(n.p,{children:["In the left sidebar of ",(0,i.jsx)(n.strong,{children:"Insights"}),", you see a link to the session recorded by TestFairy."]}),"\n",(0,i.jsx)(n.h2,{id:"integration",children:"Integration"}),"\n",(0,i.jsx)(n.p,{children:"By adding the following code, the session recorded by TestFairy is also associated with Xamarin Insights (as seen in the screenshot above). Place this snippet right after initializing Xamarin.Insights and TestFairy."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'NSNotificationCenter.DefaultCenter.AddObserver (TestFairy.SessionStartedNotification, delegate (NSNotification n) {\n      NSString sessionUrl = (NSString)n.UserInfo.ObjectForKey(TestFairy.SessionStartedUrlKey);\n      Insights.Track ("TestFairy", new Dictionary<string, string> {{ "URL", sessionUrl }});\n});\n'})}),"\n",(0,i.jsx)(n.h3,{id:"android-integration",children:"Android Integration"}),"\n",(0,i.jsxs)(n.p,{children:["Either in your custom Android Application class or any Activity class, call ",(0,i.jsx)(n.code,{children:"Com.TestFairy.TestFairy.Begin(<TESTFAIRY_APP_TOKEN>)"}),". Below is an example of invoking begin from the Main Activity."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"using Com.Testfairy;\n...\n\npublic class MainActivity : Activity {\n    protected override void OnCreate (Bundle savedInstanceState)\n    {\n        base.OnCreate (savedInstanceState);\n\n        TestFairy.Begin (this, TESTFAIRY_APP_TOKEN);\n        SetContentView (Resource.Layout.Main);\n        ...\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"telling-testfairy-what-to-record",children:"Telling TestFairy What To Record"}),"\n",(0,i.jsxs)(n.p,{children:["TestFairy can record screen casts, monitor CPU consumption, memory allocations, grab logs, and enable user feedback by shaking their devices. To configure what TestFairy records, visit your ",(0,i.jsx)(n.strong,{children:"Build Settings"})," after calling Begin() at least once."]}),"\n",(0,i.jsxs)(n.p,{children:["To configure how and what TestFairy records, visit your ",(0,i.jsx)(n.strong,{children:"Build Settings"}),". You see the build after calling ",(0,i.jsx)(n.code,{children:"Begin ()"})," at least once."]}),"\n",(0,i.jsx)(n.h2,{id:"mixing-with-other-crash-handlers",children:"Mixing With Other Crash Handlers"}),"\n",(0,i.jsx)(n.p,{children:"TestFairy can work alongside other crash handlers without any issues."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>T});var i=t(96540),r=t(18215),s=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),y=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==i&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function T(e){const n=(0,f.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);