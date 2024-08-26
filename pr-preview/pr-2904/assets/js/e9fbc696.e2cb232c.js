"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[72995],{83141:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(74848),i=s(28453);s(86025),s(11470),s(19365);const a={id:"xcuitest-introduction",title:"XCUITest Introduction",sidebar_label:"XCUITest Introduction"},r=void 0,o={id:"mobile-apps/automated-testing/espresso-xcuitest/xcuitest-introduction",title:"XCUITest Introduction",description:"XCUITest is a test automation framework used for UI testing of mobile apps and web applications on iOS devices such as iPads and iPhones. It is built into Xcode and is Apple's official testing framework for iOS. With Sauce Labs, you can easily run your XCUITests on real iOS devices and Simulators. This allows you to quickly and easily test your app on a variety of devices and configurations.",source:"@site/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest-introduction.md",sourceDirName:"mobile-apps/automated-testing/espresso-xcuitest",slug:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest-introduction",permalink:"/sauce-docs/pr-preview/pr-2904/mobile-apps/automated-testing/espresso-xcuitest/xcuitest-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/espresso-xcuitest/xcuitest-introduction.md",tags:[],version:"current",lastUpdatedBy:"Wim Selles",lastUpdatedAt:1701172361e3,frontMatter:{id:"xcuitest-introduction",title:"XCUITest Introduction",sidebar_label:"XCUITest Introduction"},sidebar:"docs",previous:{title:"Using Espresso and XCUITest",permalink:"/sauce-docs/pr-preview/pr-2904/mobile-apps/automated-testing/espresso-xcuitest"},next:{title:"Espresso Configuration",permalink:"/sauce-docs/pr-preview/pr-2904/mobile-apps/automated-testing/espresso-xcuitest/espresso"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Building and Testing your XCUITest on Sauce Labs",id:"building-and-testing-your-xcuitest-on-sauce-labs",level:2},{value:"Building the Project",id:"building-the-project",level:3},{value:"Running XCUITest Using <code>saucectl</code>",id:"running-xcuitest-using-saucectl",level:3},{value:"Sharding XCUITest",id:"sharding-xcuitest",level:4},{value:"Pipeline Setup",id:"pipeline-setup",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"XCUITest is a test automation framework used for UI testing of mobile apps and web applications on iOS devices such as iPads and iPhones. It is built into Xcode and is Apple's official testing framework for iOS. With Sauce Labs, you can easily run your XCUITests on real iOS devices and Simulators. This allows you to quickly and easily test your app on a variety of devices and configurations."}),"\n",(0,n.jsx)(t.admonition,{title:"Required Minimum Versions",type:"caution",children:(0,n.jsxs)(t.p,{children:["XCUITest for Simulators is in and requires ",(0,n.jsx)(t.code,{children:"saucectl"})," version ",(0,n.jsx)(t.code,{children:"0.155.0"})," or later. If you are using an earlier version, you must upgrade to the latest version."]})}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["You need to set ",(0,n.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,n.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," as environment variables."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/dev/cli/saucectl/",children:"saucectl"})," to orchestrates XCUITest."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"building-and-testing-your-xcuitest-on-sauce-labs",children:"Building and Testing your XCUITest on Sauce Labs"}),"\n",(0,n.jsxs)(t.p,{children:["The first step is to write an XCUITest for an iOS app. Let's take this ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-xcuitest-example/tree/main/DemoApp",children:"example"})," to demonstrate the test workflow, you can clone the repository and use the ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-xcuitest-example/tree/main/DemoApp/DemoApp",children:(0,n.jsx)(t.code,{children:"DemoApp"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Here is a simple implementation that displays ",(0,n.jsx)(t.code,{children:"Hello, world!"})," on the UI:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'import SwiftUI\nstruct ContentView: View {\n    var body: some View {\n        VStack {\n            Image(systemName: "globe")\n                .imageScale(.large)\n                .foregroundColor(.accentColor)\n            Text("Hello, world!")\n        }\n        .padding()\n    }\n}\nstruct ContentView_Previews: PreviewProvider {\n    static var previews: some View {\n        ContentView()\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"The next step is to add a class to launch the UI and do an assertion. For reference, see the example below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'import XCTest\nfinal class DemoAppUITests: XCTestCase {\n    override func setUpWithError() throws {\n        // In UI tests it is usually best to stop immediately when a failure occurs.\n        continueAfterFailure = false\n        // In UI tests it\u2019s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.\n    }\n    override func tearDownWithError() throws {\n        // Put teardown code here. This method is called after the invocation of each test method in the class.\n    }\n    func testExample() throws {\n        // UI tests must launch the application that they test.\n        let app = XCUIApplication()\n        app.launch()\n        // Use XCTAssert and related functions to verify your tests produce the correct results.\n        XCTAssert(app.staticTexts["Hello, world!"].exists)\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"building-the-project",children:"Building the Project"}),"\n",(0,n.jsx)(t.p,{children:"XCUITest can be executed on Sauce Labs Real Devices and Simulators and needs an app to be tested (testApp) and an app that holds the tests (testRunner). Use the following steps to build the project:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Real Devices:"})," ",(0,n.jsxs)(t.a,{href:"/mobile-apps/automated-testing/ipa-files/",children:["Create ",(0,n.jsx)(t.code,{children:".ipa"})," testApp and testRunner files"]})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Simulators:"})," ",(0,n.jsxs)(t.a,{href:"/mobile-apps/automated-testing/app-files/",children:["Create ",(0,n.jsx)(t.code,{children:".app"})," testApp and testRunner files"]})]}),"\n"]}),"\n",(0,n.jsxs)(t.h3,{id:"running-xcuitest-using-saucectl",children:["Running XCUITest Using ",(0,n.jsx)(t.code,{children:"saucectl"})]}),"\n",(0,n.jsxs)(t.p,{children:["To run a XCUITest, set ",(0,n.jsx)(t.code,{children:"app"})," and ",(0,n.jsx)(t.code,{children:"testApp"})," fields in the example ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/.sauce/config.yml",children:".sauce/config"})," file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"xcuitest:\n  app: <DemoApp.ipa-location>\n  testApp: <DemoAppUITests-Runner.ipa-location>\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["For more information about ",(0,n.jsx)(t.code,{children:"app"})," and ",(0,n.jsx)(t.code,{children:"testApp"}),", see our ",(0,n.jsx)(t.a,{href:"https://docs.saucelabs.com/mobile-apps/automated-testing/espresso-xcuitest/xcuitest/#xcuitest",children:"guide"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"The next step is to trigger the test by following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ saucectl run\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"saucectl"})," uploads ",(0,n.jsx)(t.code,{children:"DemoApp.ipa"})," and ",(0,n.jsx)(t.code,{children:"DemoAppUITests-Runner.ipa"})," to Sauce VM and executes XCUITest. You can review test results on Sauce UI."]}),"\n",(0,n.jsx)(t.h4,{id:"sharding-xcuitest",children:"Sharding XCUITest"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"saucectl"})," supports running tests in parallel. To test in parallel, configure ",(0,n.jsx)(t.code,{children:"saucectl"})," as follows. See ",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2904/mobile-apps/automated-testing/espresso-xcuitest/xcuitest#shard",children:"yaml configuration"})," for more details."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'suites:\n  - name: "sharded suites"\n    shard: concurrency\n    testListFile: test_classes.txt\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"test_classes.txt"})," can be generated by following these steps."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open the project in XCode and select test target."}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.code,{children:"Build Phases"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.code,{children:"Build Phases"}),", click the ",(0,n.jsx)(t.code,{children:"+"}),"-sign."]}),"\n",(0,n.jsx)(t.li,{children:"Add one of the following scripts:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:"reference",children:"https://github.com/saucelabs/my-demo-app-ios/blob/2.0.3/scripts/classes.sh\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:"reference",children:"https://github.com/saucelabs/my-demo-app-ios/blob/2.0.3/scripts/methods.sh\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"add-build-script.png",src:s(28539).A+"",width:"2830",height:"2226"})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsxs)(t.li,{children:["The script can be triggered,","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["by Xcode:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Going to ",(0,n.jsx)(t.code,{children:"Product"})," > ",(0,n.jsx)(t.code,{children:"Build For"})," > ",(0,n.jsx)(t.code,{children:"Testing"}),"\n",(0,n.jsx)(t.img,{alt:"trigger-build-script.png",src:s(72204).A+"",width:"2128",height:"1472"})]}),"\n",(0,n.jsxs)(t.li,{children:["Or triggering a Testing build by using ",(0,n.jsx)(t.code,{children:"Command + Shift + U"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"by running this command"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'xcodebuild \\\n  CODE_SIGN_IDENTITY="" \\\n  CODE_SIGNING_REQUIRED=NO CODE_SIGNING_ALLOWED=NO \\\n  clean build-for-testing \\\n  -workspace "{workspaceName}.xcworkspace" \\\n  -scheme "{schemeName}" \\\n  -sdk iphoneos\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The generated ",(0,n.jsx)(t.code,{children:"test_classes.txt"})," or ",(0,n.jsx)(t.code,{children:"test_classes_and_tests.txt"})," can be found here:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"generated-file.png",src:s(87571).A+"",width:"1570",height:"494"})}),"\n",(0,n.jsx)(t.h3,{id:"pipeline-setup",children:"Pipeline Setup"}),"\n",(0,n.jsx)(t.p,{children:"We also provide some examples for pipeline setup."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/.github/workflows/test.yml",children:"GitHub"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-xcuitest-example/blob/main/.circleci/config.yml",children:"Circle CI"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(18215);const i={tabItem:"tabItem_Ymn6"};var a=s(74848);function r(e){let{children:t,hidden:s,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>I});var n=s(96540),i=s(18215),a=s(23104),r=s(56347),o=s(205),l=s(57485),c=s(31682),u=s(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:i}}=e;return{value:t,label:s,attributes:n,default:i}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const i=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function x(e){const{defaultValue:t,queryString:s=!1,groupId:i}=e,a=p(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:s,groupId:i}),[x,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(s);return[i,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:i}),f=(()=>{const e=c??x;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function j(e){let{className:t,block:s,selectedValue:n,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),i=o[s].value;i!==n&&(c(t),r(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=x(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function I(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},28539:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/add-build-script-e4aa89149b50e07f62e8cfc5fbe5c378.png"},87571:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/generated-file-e990423a01e71d0510816599547a7133.png"},72204:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/trigger-build-script-c75078d4320aa3f711baaeb5016c1e55.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);