"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33877],{89592:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=t(74848),i=t(28453),s=t(86025),r=t(11470),l=t(19365);const o={id:"test-app-upgrades",title:"Test App Upgrades/Mid-Session App Installations",sidebar_label:"Test App Upgrades",description:"Learn how to test app upgrades or mid-session app installations."},p=void 0,u={id:"mobile-apps/automated-testing/appium/test-app-upgrades",title:"Test App Upgrades/Mid-Session App Installations",description:"Learn how to test app upgrades or mid-session app installations.",source:"@site/docs/mobile-apps/automated-testing/appium/test-app-upgrades.md",sourceDirName:"mobile-apps/automated-testing/appium",slug:"/mobile-apps/automated-testing/appium/test-app-upgrades",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/automated-testing/appium/test-app-upgrades",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/appium/test-app-upgrades.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"test-app-upgrades",title:"Test App Upgrades/Mid-Session App Installations",sidebar_label:"Test App Upgrades",description:"Learn how to test app upgrades or mid-session app installations."},sidebar:"docs",previous:{title:"Virtual Devices",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/automated-testing/appium/virtual-devices"},next:{title:"Appium Flutter Testing",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/automated-testing/appium/appium-flutter"}},d={},c=[{value:"Installing App Mid-Session",id:"installing-app-mid-session",level:2},{value:"Limitations",id:"limitations",level:2},{value:"FAQ",id:"faq",level:2},{value:"I&#39;m getting the error <code>Failed to install the app from Sauce Storage.</code>",id:"im-getting-the-error-failed-to-install-the-app-from-sauce-storage",level:4},{value:"I&#39;m getting the error <code>Only apps from Sauce Storage are supported.</code>",id:"im-getting-the-error-only-apps-from-sauce-storage-are-supported",level:4},{value:"My framework times out before the app is installed.",id:"my-framework-times-out-before-the-app-is-installed",level:4}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"As app developers, we often release newer versions of our applications to customers on a regular basis. In these instances, users are typically upgrading from an older version rather than installing the app from scratch. This transition may involve the migration of existing user data for the application to function correctly, which makes the testing of app upgrades a crucial step in the development process. By testing app upgrades, we can ensure that our application continues to operate as expected even following an upgrade."}),"\n",(0,n.jsx)(a.p,{children:"But app upgrades aren't the only scenario where you might need to install apps during a running session. Sometimes, your app's functionality might rely on other dependent applications. In such cases, testing your app's interplay with these dependencies becomes essential. For instance, if your application pulls data from or interacts with another app, you'd want to ensure that this interaction remains smooth even after an upgrade. This makes the ability to install dependent apps during a run an invaluable feature for comprehensive testing."}),"\n",(0,n.jsxs)(a.p,{children:["There are scenarios where you might want to delete an app and reinstall it again during a running session. For example, if you want to test the app's behavior when a user deletes and reinstalls it, you can use the mid-session install feature to accomplish this task. (Deleting apps can be done for ",(0,n.jsx)(a.a,{href:"https://github.com/appium/appium-uiautomator2-driver#mobile-removeapp",children:"Android"})," and ",(0,n.jsx)(a.a,{href:"https://appium.github.io/appium-xcuitest-driver/4.32/execute-methods/#mobile-removeapp",children:"iOS"})," command.)"]}),"\n",(0,n.jsx)(a.admonition,{title:"Important",type:"caution",children:(0,n.jsx)(a.p,{children:"Installing apps mid-session from the Sauce Storage is only supported in our Real Device Cloud."})}),"\n",(0,n.jsx)(a.h2,{id:"installing-app-mid-session",children:"Installing App Mid-Session"}),"\n",(0,n.jsxs)(a.p,{children:["Before running your test execution, the first step involves uploading the app that is intended for upgrade (the newer version) or any dependent app. You can accomplish this task using our ",(0,n.jsx)(a.a,{href:"/dev/api/storage/#upload-file-to-app-storage",children:"REST API"}),". This process is similar to how you would handle your app under test."]}),"\n",(0,n.jsx)(a.p,{children:"After uploading, you can use the following command to install apps mid-session using Appium:"}),"\n",(0,n.jsxs)(r.A,{groupId:"install-app",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Node.js",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,n.jsx)(l.A,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// When using the file name\ndriver.executeScript("mobile:installApp", ImmutableMap.of("appPath", "storage:filename=<file-name>.apk|ipa"));\n// When using the file id\ndriver.executeScript("mobile:installApp", ImmutableMap.of("appPath", "storage:<file-id>"));\n'})})}),(0,n.jsx)(l.A,{value:"js",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:'// When using the file name\ndriver.execute(\'mobile:installApp\', {"appPath": "storage:filename=<file-name>.apk|ipa"})\n// When using the file id\ndriver.execute(\'mobile:installApp\', {"appPath": "storage:<file-id>"})\n'})})}),(0,n.jsx)(l.A,{value:"python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:'# When using the file name\ndriver.execute_script(\'mobile: installApp\', {"appPath": "storage:filename=<file-name>.apk|ipa"})\n# When using the file id\ndriver.execute_script(\'mobile: installApp\', {"appPath": "storage:<file-id>"})\n'})})}),(0,n.jsx)(l.A,{value:"ruby",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ruby",children:'# When using the file name\n@driver.execute_script(\'mobile: installApp\', {"appPath" => "storage:filename=<file-name>.apk|ipa"})\n# When using the file id\n@driver.execute_script(\'mobile: installApp\', {"appPath" => "storage:<file-id>"})\n'})})}),(0,n.jsx)(l.A,{value:"csharp",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:'// When using the file name\ndriver.ExecuteScript("mobile: installApp", new Dictionary<string, string> { { "appPath", "storage:filename=<file-name>.apk|ipa" } });\n// When using the file id\ndriver.ExecuteScript("mobile: installApp", new Dictionary<string, string> { { "appPath", "storage:<file-id>" } });\n'})})})]}),"\n",(0,n.jsx)(a.p,{children:"A successful installation will return the following response which can be used to validate if the right version of the app was installed:"}),"\n",(0,n.jsxs)(r.A,{groupId:"install-app-response",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,n.jsx)(l.A,{value:"android",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "packageName": "com.saucelabs.mydemoapp.android",\n  "version": "1.5.0",\n  "buildNumber": "274"\n}\n'})})}),(0,n.jsx)(l.A,{value:"ios",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "bundleId": "com.saucelabs.mydemoapp.ios",\n  "version": "1.5.0",\n  "buildNumber": "191"\n}\n'})})})]}),"\n",(0,n.jsx)(a.p,{children:"By default, Appium will not automatically launch the app after a mid-session install. You will need to launch the app manually using the followings commands after installation:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"iOS:"})," ",(0,n.jsx)(a.code,{children:"mobile: launchApp"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Android:"})," ",(0,n.jsx)(a.code,{children:"mobile: startActivity"})]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["We added two extra text lines in the Appium Commands list in the Sauce Labs UI to indicate that the app has been installed and needs to be launched manually. Additionally, you will notice the execution of the command ",(0,n.jsx)(a.code,{children:"GET /timeouts"}),'. This command acts as a "heartbeat" to keep the session active when installation takes longer than the default timeout of 60 seconds. By setting a maximum timeout of 5 minutes, the Appium session will remain active until the app is successfully installed, ensuring that it doesn\'t expire prematurely.']}),"\n",(0,n.jsx)("img",{src:(0,s.Ay)("img/mobile-apps/appium-mid-session-logs.jpg"),alt:"Mid session install logs",width:"800"}),"\n",(0,n.jsxs)(a.p,{children:["The following commands will launch the newly installed app. Remember to replace the ",(0,n.jsx)(a.code,{children:"bundleId"})," or ",(0,n.jsx)(a.code,{children:"intent"})," with your specific application's identifier or main activity, respectively."]}),"\n",(0,n.jsxs)(r.A,{groupId:"start-app",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Node.js",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,n.jsx)(l.A,{value:"java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// Android\ndriver.executeScript("mobile: startActivity", ImmutableMap.of("intent", "com.saucelabs.mydemoapp.rn/.MainActivity"));\n// iOS\ndriver.executeScript("mobile: launchApp", ImmutableMap.of("bundleId", "com.saucelabs.mydemoapp.rn"));\n'})})}),(0,n.jsx)(l.A,{value:"js",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"// Android\ndriver.execute('mobile: startActivity', {intent: 'com.saucelabs.mydemoapp.rn/.MainActivity'});\n//  \ndriver.execute('mobile: launchApp', { bundleId: 'com.saucelabs.mydemoapp.rn'});\n"})})}),(0,n.jsx)(l.A,{value:"python",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-py",children:'# Android\ndriver.execute_script("mobile: startActivity", {"intent": "com.saucelabs.mydemoapp.rn/.MainActivity"})\n# iOS\ndriver.execute_script("mobile: launchApp", {"bundleId": "com.saucelabs.mydemoapp.rn"})\n'})})}),(0,n.jsx)(l.A,{value:"ruby",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-ruby",children:'# Android\n@driver.execute_script("mobile: startActivity", {"intent" => "com.saucelabs.mydemoapp.rn/.MainActivity"})\n# iOS\n@driver.execute_script("mobile: launchApp", {"bundleId" => "com.saucelabs.mydemoapp.rn"})\n'})})}),(0,n.jsx)(l.A,{value:"csharp",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:'// Android\ndriver.ExecuteScript("mobile: startActivity", new Dictionary<string, string> { { "intent", "com.saucelabs.mydemoapp.rn/.MainActivity" } });\n// iOS\ndriver.ExecuteScript("mobile: launchApp", new Dictionary<string, string> { { "bundleId", "com.saucelabs.mydemoapp.rn" } });\n'})})})]}),"\n",(0,n.jsx)(a.p,{children:"This is an example test execution that installs an app mid-session, launches it, and:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Validates that the version has been upgraded."}),"\n",(0,n.jsx)(a.li,{children:"Validates that the user data from the previous version has been retained."}),"\n"]}),"\n",(0,n.jsx)("video",{controls:!0,style:{"max-width":"800px"},children:(0,n.jsx)("source",{src:(0,s.Ay)("img/mobile-apps/mid-session-app-upgrade.mp4")})}),"\n",(0,n.jsx)(a.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(a.p,{children:"While this feature provides a great deal of flexibility, there are certain limitations to ensure the integrity and security of the testing environment:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Only apps uploaded to our Sauce Storage can be installed. Installations from external locations are not permitted, see ",(0,n.jsx)(a.a,{href:"#faq",children:"FAQ"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Downgrading apps is not supported by Sauce Labs due to the fact that this is not a supported flow by the Apple and Google ecosystem. Sauce Labs supports only upgrading apps to newer versions and installing additional apps or dependencies necessary for testing your main application."}),"\n",(0,n.jsxs)(a.li,{children:["We do ",(0,n.jsx)(a.strong,{children:"not"})," capture or provide logs for the newly installed app upgrade. This includes network logs, device vitals, and crash logs. This is primarily because our logging system is designed to track the main app under test and adding additional apps mid-session could potentially muddle the clarity and focus of the logging data."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Despite these limitations, the ability to install additional apps or upgrades mid-session significantly expands the scope and effectiveness of your testing process. It allows you to mimic real-world user behavior more accurately and test the resilience of your app in a broader set of scenarios."}),"\n",(0,n.jsx)(a.h2,{id:"faq",children:"FAQ"}),"\n",(0,n.jsxs)(a.h4,{id:"im-getting-the-error-failed-to-install-the-app-from-sauce-storage",children:["I'm getting the error ",(0,n.jsx)(a.code,{children:"Failed to install the app from Sauce Storage."})]}),"\n",(0,n.jsx)(a.p,{children:"This message indicates that there's been a problem installing the application from our storage. Ensure the file name, file ID, and storage access are correct."}),"\n",(0,n.jsxs)(a.h4,{id:"im-getting-the-error-only-apps-from-sauce-storage-are-supported",children:["I'm getting the error ",(0,n.jsx)(a.code,{children:"Only apps from Sauce Storage are supported."})]}),"\n",(0,n.jsx)(a.p,{children:"This error message appears when there's an attempt to install an app from an external location, which is not supported. Make sure to upload your app to our storage first."}),"\n",(0,n.jsx)(a.h4,{id:"my-framework-times-out-before-the-app-is-installed",children:"My framework times out before the app is installed."}),"\n",(0,n.jsxs)(a.p,{children:["Installing apps mid-session can take longer than the default timeout of 60 seconds. To ensure that the Appium session will not timeout before the app is installed, we implemented a heartbeat to keep the session alive. This heartbeat is implemented by calling the ",(0,n.jsx)(a.code,{children:"GET /timeouts"})," endpoint every 10 seconds to keep the session alive for a maximum of 5 minutes. If your framework times out before the app is installed, you need to increase the test session timeout in your framework. Please refer to the documentation of your framework for more information."]}),"\n",(0,n.jsx)(a.p,{children:"Should you encounter any other problems or have additional questions, don't hesitate to reach out to our support team."})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>r});t(96540);var n=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:a,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>A});var n=t(96540),i=t(34164),s=t(23104),r=t(56347),l=t(205),o=t(57485),p=t(31682),u=t(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function c(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:i}}=e;return{value:a,label:t,attributes:n,default:i}}))}(t);return function(e){const a=(0,p.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const i=(0,r.W6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(i.location.search);a.set(s,e),i.replace({...i.location,search:a.toString()})}),[s,i])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,s=c(e),[r,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[p,d]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,s]=(0,u.Dv)(t);return[i,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=p??g;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:a,block:t,selectedValue:n,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),u=e=>{const a=e.currentTarget,t=o.indexOf(a),i=l[t].value;i!==n&&(p(a),r(i))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function y(e){let{lazy:a,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function j(e){const a=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...a,...e}),(0,v.jsx)(y,{...a,...e})]})}function A(e){const a=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(a))}},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>l});var n=t(96540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);