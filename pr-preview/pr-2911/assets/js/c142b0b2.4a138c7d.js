"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7919],{78976:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var a=i(74848),n=i(28453),s=i(86025),l=i(11470),o=i(19365);const r={id:"instant-booted-simulators",title:"Instant Booted iOS Simulators",sidebar_label:"Instant Booted iOS Simulators"},c=void 0,d={id:"mobile-apps/features/instant-booted-simulators",title:"Instant Booted iOS Simulators",description:"Beta",source:"@site/docs/mobile-apps/features/instant-booted-simulators.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/instant-booted-simulators",permalink:"/sauce-docs/pr-preview/pr-2911/mobile-apps/features/instant-booted-simulators",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/instant-booted-simulators.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"instant-booted-simulators",title:"Instant Booted iOS Simulators",sidebar_label:"Instant Booted iOS Simulators"}},u={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Accessing Instant Booted Simulators",id:"accessing-instant-booted-simulators",level:2},{value:"Using aliases (recommended)",id:"using-aliases-recommended",level:3},{value:"Using explicit capabilities",id:"using-explicit-capabilities",level:3},{value:"Accessing Instant Booted iOS Simulator for Live Testing",id:"accessing-instant-booted-ios-simulator-for-live-testing",level:2},{value:"Accessing Instant Booted iOS Simulator for Automated Testing with Appium",id:"accessing-instant-booted-ios-simulator-for-automated-testing-with-appium",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I validate that my session used an Instant Booted Simulator?",id:"how-can-i-validate-that-my-session-used-an-instant-booted-simulator",level:3},{value:"I set up an Instant Booted Simulator, but it\u2019s still taking a long time to boot.",id:"i-set-up-an-instant-booted-simulator-but-its-still-taking-a-long-time-to-boot",level:3},{value:"All available Instant Booted Simulators are used",id:"all-available-instant-booted-simulators-are-used",level:4},{value:"Appium restarted the Simulator due to specific capabilities that you provided.",id:"appium-restarted-the-simulator-due-to-specific-capabilities-that-you-provided",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:(0,a.jsx)("span",{className:"sauceGreen",children:"Beta"})})}),"\n",(0,a.jsx)(t.p,{children:"The speed of the Simulator is a crucial factor that impacts the development workflow of iOS app developers. Instant booted iOS Simulators offer significant advantages over our default Simulators, as they reduce the time it takes to launch the Simulator to test apps to almost zero seconds."}),"\n",(0,a.jsx)(t.p,{children:"With Instant Booted iOS Simulators, you can quickly switch between two iOS versions and test your app in four configurations to ensure its compatibility and performance."}),"\n",(0,a.jsx)(t.p,{children:"Sauce Labs supports the following configurations:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"iPhone 14 Simulator with the latest iOS 16.x version."}),"\n",(0,a.jsx)(t.li,{children:"iPhone 13 Simulator with the latest iOS 15.x version."}),"\n",(0,a.jsx)(t.li,{children:"iPad (10th generation) Simulator with the latest iOS 16.x version."}),"\n",(0,a.jsx)(t.li,{children:"iPad (9th generation) Simulator with the latest iOS 15.x version."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"These Simulator configurations can be used for manual and automated tests, allowing you to target specific devices and iOS versions for testing. This flexibility can help you optimize the testing process and improve the compatibility and performance of your apps."}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsx)(t.li,{children:"A web app, native iOS, or iPadOS mobile app."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"accessing-instant-booted-simulators",children:"Accessing Instant Booted Simulators"}),"\n",(0,a.jsx)(t.p,{children:"There are two ways that you can access iOS Instant Booted Simulators"}),"\n",(0,a.jsx)(t.h3,{id:"using-aliases-recommended",children:"Using aliases (recommended)"}),"\n",(0,a.jsx)(t.p,{children:"To ensure that your capabilities remain consistent and you always have access to an instant-booted iPhone or iPad, we introduced two aliases for the device names. These aliases are as follows:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"iPhone Instant Simulator"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"iPad Instant Simulator"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["We also introduced iOS Version Management, see ",(0,a.jsx)(t.a,{href:"/mobile-apps/features/ios-version-management/",children:"iOS Version Management"}),", which add three new platform version aliases. These are"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"latest|current_major"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.code,{children:"previous_major"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The combination of the device name and platform version alias will automatically allocate an Instant Booted Simulator for your manual or automated test."}),"\n",(0,a.jsxs)(t.admonition,{type:"caution",children:[(0,a.jsxs)(t.p,{children:["The alias ",(0,a.jsx)(t.code,{children:"iPhone Instant Simulator"})," or ",(0,a.jsx)(t.code,{children:"iPad Instant Simulator"})," will only work with the platform version aliases ",(0,a.jsx)(t.code,{children:"latest|current_major"})," and ",(0,a.jsx)(t.code,{children:"previous_major"}),". If you use the alias ",(0,a.jsx)(t.code,{children:"iPhone Instant Simulator"})," or ",(0,a.jsx)(t.code,{children:"iPad Instant Simulator"})," with a specific platform version, for example ",(0,a.jsx)(t.code,{children:"16.2"}),", then the test will fail with the following error message"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Error: Failed to create session.\nInvalid platform version specified for instant Simulators: iPhone Instant Simulator. Must be one of ['previous_major', 'current_major', 'latest']\n"})})]}),"\n",(0,a.jsx)(t.p,{children:"There are two advantages of using the aliases"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Whenever Apple releases a new major version of iOS, they usually launch a new iPhone or iPad model. Sauce Labs assigns these models to the aliases ",(0,a.jsx)(t.code,{children:"iPhone Instant Simulator"})," or ",(0,a.jsx)(t.code,{children:"iPad Instant Simulator"}),", which means you can access the new device automatically without having to change your capabilities. Consequently, you'll be using the latest device for your tests and will be testing your app on what will most likely be the most popular device used by your users."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If Apple releases a new minor or major iOS version and Sauce Labs incorporates it into their cloud, you'll get automatic access to the new version without having to alter your capabilities. This means that you'll be using the latest iOS version for your tests and will be testing your app on what is most likely the most popular iOS version used by your users."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The following examples use iOS 16 and 15 as the current and previous major versions of iOS, respectively."})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Device Name"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Platform Version"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Result"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Instant Booted"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Note"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPhone Instant Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"latest/current_major"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"iPhone 14 with 16.2"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"The requested instant-booted device alias, requested OS version, and latest OS version installed in our cloud match. This means an instant-booted Simulator will be started."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPad Instant Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"latest/current_major"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"iPad (10th Generation) with 16.2"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPhone Instant Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"previous_major"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"iPhone 13 with 15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPad Instant Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"previous_major"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"iPad (9th Generation) with 15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPhone Instant Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"A fixed iOS version, for example, 16.2, or 15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["The combination is invalid. The device name alias ",(0,a.jsx)(t.strong,{children:"CAN ONLY"})," be combined with platform version aliases"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPad Instant Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"A fixed iOS version, for example, 16.2, or 15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"using-explicit-capabilities",children:"Using explicit capabilities"}),"\n",(0,a.jsx)(t.p,{children:"You can use explicit capabilities to access the Instant Booted iOS Simulators. However, this is not recommended because you're more likely to end up on a normally booted simulator when Apple releases a new minor or major version of iOS. As a result, you won't automatically gain access to the latest device or iOS version for your tests, and you'll likely be testing your app on a less popular device or iOS version that is not commonly used by your users."}),"\n",(0,a.jsx)(t.p,{children:"If you want to use explicit capabilities, then you can use the following combinations:"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The following examples use iOS 16 and 15 as the current and previous major versions of iOS, respectively. The examples don't always reflect the actual versions of iOS that are supported by Sauce Labs and Apple on Simulators. See our ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/platform/platform-configurator#/",children:"Platform Configurator"})," tool for the most up-to-date information."]})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Device Name"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Platform Version"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Latest version in SL Cloud"}),(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Instant Booted"}),(0,a.jsx)(t.th,{style:{textAlign:"left"},children:"Note"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"iPhone 14 Simulator"}),(0,a.jsx)("li",{children:"iPad (10th Generation) Simulator"})]})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"16.2"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.2"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"The requested device name + OS version match with an Instant Booted configuration."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"iPhone 13 Simulator"}),(0,a.jsx)("li",{children:"iPad (9th Generation) Simulator"})]})}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"15.5"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,a.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPhone 14 Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"16.1"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.2"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["The requested device name + OS version ",(0,a.jsx)(t.strong,{children:"DO NOT"})," match with an Instant Booted configuration."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"iPhone 13 Simulator"}),(0,a.jsx)(t.td,{style:{textAlign:"left"},children:"16.2"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"16.2"}),(0,a.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,a.jsxs)(t.td,{style:{textAlign:"left"},children:["The requested device name + OS version ",(0,a.jsx)(t.strong,{children:"DO NOT"})," match with an Instant Booted configuration."]})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"accessing-instant-booted-ios-simulator-for-live-testing",children:"Accessing Instant Booted iOS Simulator for Live Testing"}),"\n",(0,a.jsxs)(t.p,{children:["To access the Instant Booted iOS Simulator follow the steps below, for this example we will use the iPhone 14 with the latest iOS 16.x version (",(0,a.jsx)(t.code,{children:"current_major"}),"):"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["On Sauce Labs click ",(0,a.jsx)(t.strong,{children:"Live"})," > ",(0,a.jsx)(t.strong,{children:"Cross Browser"})," > ",(0,a.jsx)(t.strong,{children:"Mobile Virtual"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/mobile-apps/instant-sim-1.png"),alt:"instant booted menu",width:"750"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Select \u201cApple\u201d as the Manufacturer."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["If you want to use the ",(0,a.jsx)(t.code,{children:"current_major"})," version, then use these values :"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Select ",(0,a.jsx)(t.strong,{children:"iPhone 14 Simulator"})," for the Device."]}),"\n",(0,a.jsx)(t.li,{children:"Select the latest available version of iOS."}),"\n"]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsxs)(t.p,{children:["If you want to use the ",(0,a.jsx)(t.code,{children:"previous_major"})," version, then use these values:"]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Select \u201ciPhone 13 Simulator\u201d for the Device"}),"\n",(0,a.jsx)(t.li,{children:"Select the previous major version, at the moment this is \u201ciOS 15.5\u201d, for the OS Version"}),"\n"]})]}),"\n",(0,a.jsx)(t.h2,{id:"accessing-instant-booted-ios-simulator-for-automated-testing-with-appium",children:"Accessing Instant Booted iOS Simulator for Automated Testing with Appium"}),"\n",(0,a.jsx)(t.p,{children:"To use the Instant Booted Simulators, specify the following device configuration capabilities:"}),"\n",(0,a.jsxs)(l.A,{groupId:"capability-ex-emusim",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Node.js",value:"js"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"},{label:"C#",value:"csharp"}],children:[(0,a.jsx)(o.A,{value:"java",children:(0,a.jsxs)(l.A,{groupId:"capability-java-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("browserName", "safari");\ncapabilities.setCapability("platformName", "ios");\n// Possible values: "latest", "current_major", "previous_major"\ncapabilities.setCapability("appium:platformVersion", "current_major");\ncapabilities.setCapability("appium:deviceName", "iPhone Instant Simulator");\ncapabilities.setCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'MutableCapabilities capabilities = new MutableCapabilities();\n\ncapabilities.setCapability("browserName", "safari");\ncapabilities.setCapability("platformName", "ios");\n// Possible values: "latest", "current_major", "previous_major"\ncapabilities.setCapability("appium:platformVersion", "current_major");\ncapabilities.setCapability("appium:deviceName", "iPad Instant Simulator");\ncapabilities.setCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new HashMap<String, Object>();\ncapabilities.setCapability("sauce:options", sauceOptions);\n'})})})]})}),(0,a.jsx)(o.A,{value:"js",children:(0,a.jsxs)(l.A,{groupId:"capability-js-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const capabilities = {\n    browserName: 'safari',\n    platformName: 'ios',\n     // Possible values: \"latest\", \"current_major\", \"previous_major\"\n    'appium:platformVersion': 'current_major',\n    'appium:deviceName': 'iPhone Instant Simulator',\n    'appium:automationName': 'xcuitest',\n    'sauce:options': {\n    }\n}\n"})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const capabilities = {\n    browserName: 'safari',\n    platformName: 'ios',\n     // Possible values: \"latest\", \"current_major\", \"previous_major\"\n    'appium:platformVersion': 'current_major',\n    'appium:deviceName': 'iPad Instant Simulator',\n    'appium:automationName': 'xcuitest',\n    'sauce:options': {\n    }\n}\n"})})})]})}),(0,a.jsx)(o.A,{value:"python",children:(0,a.jsxs)(l.A,{groupId:"capability-python-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'capabilities = {\n    "browserName" : "safari",\n    "platformName" : "ios",\n    # Possible values: "latest", "current_major", "previous_major"\n    "appium:platformVersion" : "current_major",\n    "appium:deviceName" : "iPhone Instant Simulator",\n    \'appium:automationName\': \'xcuitest\',\n    "sauce:options" : {\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'capabilities = {\n    "browserName" : "safari",\n    "platformName" : "ios",\n    # Possible values: "latest", "current_major", "previous_major"\n    "appium:platformVersion" : "current_major",\n    "appium:deviceName" : "iPad Instant Simulator",\n    \'appium:automationName\': \'xcuitest\',\n    "sauce:options" : {\n    }\n}\n'})})})]})}),(0,a.jsx)(o.A,{value:"ruby",children:(0,a.jsxs)(l.A,{groupId:"capability-ruby-emusim",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:'capabilities = {\n    "browserName" => "safari",\n    "platformName" => "ios",\n    # Possible values: "latest", "current_major", "previous_major"\n    "appium:platformVersion" => "current_major",\n    "appium:deviceName" => "iPhone Instant Simulator",\n    \'appium:automationName\' => \'xcuitest\',\n    "sauce:options" => {\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ruby",children:'capabilities = {\n    "browserName" => "safari",\n    "platformName" => "ios",\n    # Possible values: "latest", "current_major", "previous_major"\n    "appium:platformVersion" => "current_major",\n    "appium:deviceName" => "iPad Instant Simulator"",\n    \'appium:automationName\'=> \'xcuitest\',\n    "sauce:options" => {\n    }\n}\n'})})})]})}),(0,a.jsx)(o.A,{value:"csharp",children:(0,a.jsxs)(l.A,{groupId:"capability-csharp",defaultValue:"iphone",values:[{label:"iPhone",value:"iphone"},{label:"iPad",value:"ipad"}],children:[(0,a.jsx)(o.A,{value:"iphone",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("browserName", "safari");\ncapabilities.AddAdditionalCapability("platformName", "ios");\n// Possible values: "latest", "current_major", "previous_major"   \ncapabilities.AddAdditionalCapability("appium:platformVersion", "current_major");\ncapabilities.AddAdditionalCapability("appium:deviceName", "iPhone Instant Simulator");\ncapabilities.AddAdditionalCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})}),(0,a.jsx)(o.A,{value:"ipad",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-csharp",children:'AppiumOptions capabilities = new AppiumOptions();\n\ncapabilities.AddAdditionalCapability("browserName", "safari");\ncapabilities.AddAdditionalCapability("platformName", "ios");\n// Possible values: "latest", "current_major", "previous_major"   \ncapabilities.AddAdditionalCapability("appium:platformVersion", "current_major");\ncapabilities.AddAdditionalCapability("appium:deviceName", "iPad Instant Simulator");\ncapabilities.AddAdditionalCapability("appium:automationName", "xcuitest");\n\nHashMap<String, Object> sauceOptions = new Dictionary<string, object>();\ncapabilities.AddAdditionalCapability("sauce:options", sauceOptions);\n'})})})]})})]}),"\n",(0,a.jsxs)(t.p,{children:["This will assign an instant-booted Simulator that represents the ",(0,a.jsx)(t.code,{children:"latest"}),"/",(0,a.jsx)(t.code,{children:"current_major"})," iOS version for the requested device by what both Apple has released and what Sauce Labs supports in our Simulator cloud. In the case of using ",(0,a.jsx)(t.code,{children:"previous_major"})," platform version, it will represent the latest previous major iOS version for the requested device by what both Apple has released and what Sauce Labs supports in our Simulator cloud."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["To use a different version of Appium, you can specify it through the ",(0,a.jsxs)(t.a,{href:"/dev/test-configuration-options/#appiumversion",children:["sauce",":options"]}),". Check our ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/products/platform-configurator#/",children:"platform configurator"})," to confirm which Appium versions are supported. Using a different version may result in additional 20 seconds of start-up time for your iPhone/iPad Instant Simulator."]})}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.h3,{id:"how-can-i-validate-that-my-session-used-an-instant-booted-simulator",children:"How can I validate that my session used an Instant Booted Simulator?"}),"\n",(0,a.jsx)(t.p,{children:"This can be done by:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Validating the session command time, which should be between 0-10 seconds. The video should start with a booted sim."}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/mobile-apps/instant-sim-2.png"),alt:"instant booted menu",width:"750"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Opening the Metadata tab, as Sauce Labs automatically add tags.\nIf you are using ",(0,a.jsx)(t.code,{children:"\u201cappium:deviceName\u201d: \u201ciPhone Instant Simulator\u201d"})," or ",(0,a.jsx)(t.code,{children:"\u201cappium:deviceName\u201d: \u201ciPad Instant Simulator\u201d"}),", you should see the tag ",(0,a.jsx)(t.strong,{children:"sl-instant-simulator"}),". When you use the default Appium version, you will additionally see the ",(0,a.jsx)(t.strong,{children:"sl-instant-simulator-with-matching-appium"})," tag."]}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,s.Ay)("img/mobile-apps/instant-sims-tags.jpg"),alt:"instant booted tags",width:"750"}),"\n",(0,a.jsx)(t.h3,{id:"i-set-up-an-instant-booted-simulator-but-its-still-taking-a-long-time-to-boot",children:"I set up an Instant Booted Simulator, but it\u2019s still taking a long time to boot."}),"\n",(0,a.jsx)(t.p,{children:"There are a few reasons why this could happen."}),"\n",(0,a.jsx)(t.h4,{id:"all-available-instant-booted-simulators-are-used",children:"All available Instant Booted Simulators are used"}),"\n",(0,a.jsx)(t.p,{children:"Instant Booted Simulators are subject to availability. We keep monitoring our pool of Instant Booted Simulators on a daily basis to determine the ideal number of Instant Booted Simulators to keep available. In case all available Instant Booted Simulators are used then your session will fall back to the default way of starting a Simulator."}),"\n",(0,a.jsx)(t.h4,{id:"appium-restarted-the-simulator-due-to-specific-capabilities-that-you-provided",children:"Appium restarted the Simulator due to specific capabilities that you provided."}),"\n",(0,a.jsx)(t.p,{children:"To check this, follow the steps below:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Go to ",(0,a.jsx)(t.strong,{children:"Automated"})," > ",(0,a.jsx)(t.strong,{children:"Test Results"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Open your session."}),"\n",(0,a.jsx)(t.li,{children:"Check the first 15 seconds of the video. If you see that the Simulator was already started from the first second, or the restart of the video happens in the first 15 seconds, it means that Appium rebooted the Simulator. See the video below for more information:"}),"\n"]}),"\n",(0,a.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GF8q9kHgRrw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,a.jsxs)(t.p,{children:["A common cause could be that you have provided a capability ",(0,a.jsx)(t.code,{children:"\u201cappium:language\u201d"})," or ",(0,a.jsx)(t.code,{children:"\u201cappium:locale\u201d"})," to change the language of the app or Simulator."]}),"\n",(0,a.jsx)(t.p,{children:"The Instant Booted Simulators use default English settings. Every change you make to it by providing different capabilities will trigger Appium to restart the Simulator."})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,i)=>{i.d(t,{A:()=>l});i(96540);var a=i(34164);const n={tabItem:"tabItem_Ymn6"};var s=i(74848);function l(e){let{children:t,hidden:i,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:i,children:t})}},11470:(e,t,i)=>{i.d(t,{A:()=>S});var a=i(96540),n=i(34164),s=i(23104),l=i(56347),o=i(205),r=i(57485),c=i(31682),d=i(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:i,attributes:a,default:n}}=e;return{value:t,label:i,attributes:a,default:n}}))}(i);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function p(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:i}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,r.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function x(e){const{defaultValue:t,queryString:i=!1,groupId:n}=e,s=h(e),[l,r]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=i.find((e=>e.default))??i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:i,groupId:n}),[x,j]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Dv)(i);return[n,(0,a.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:n}),b=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&r(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(74848);function v(e){let{className:t,block:i,selectedValue:a,selectValue:l,tabValues:o}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,i=r.indexOf(t),n=o[i].value;n!==a&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=r.indexOf(e.currentTarget)+1;t=r[i]??r[0];break}case"ArrowLeft":{const i=r.indexOf(e.currentTarget)-1;t=r[i]??r[r.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>r.push(e),onKeyDown:u,onClick:d,...s,className:(0,n.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:i??t},t)}))})}function g(e){let{lazy:t,children:i,selectedValue:s}=e;const l=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function S(e){const t=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var a=i(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);