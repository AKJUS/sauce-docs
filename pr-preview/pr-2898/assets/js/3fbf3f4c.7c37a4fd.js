"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[14036],{65743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(74848),r=n(28453);n(86025),n(11470),n(19365);const i={id:"flutter-integration-testing-android",title:"Flutter Android",sidebar_label:"Flutter Android",description:"Run your Flutter integration tests for Android"},s=void 0,o={id:"mobile-apps/automated-testing/flutter/flutter-integration-testing-android",title:"Flutter Android",description:"Run your Flutter integration tests for Android",source:"@site/docs/mobile-apps/automated-testing/flutter/flutter-integration-testing-android.md",sourceDirName:"mobile-apps/automated-testing/flutter",slug:"/mobile-apps/automated-testing/flutter/flutter-integration-testing-android",permalink:"/sauce-docs/pr-preview/pr-2898/mobile-apps/automated-testing/flutter/flutter-integration-testing-android",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/flutter/flutter-integration-testing-android.md",tags:[],version:"current",lastUpdatedBy:"bahrimootaz",lastUpdatedAt:1723625787e3,frontMatter:{id:"flutter-integration-testing-android",title:"Flutter Android",sidebar_label:"Flutter Android",description:"Run your Flutter integration tests for Android"},sidebar:"docs",previous:{title:"Espresso Screenshot Capture",permalink:"/sauce-docs/pr-preview/pr-2898/mobile-apps/automated-testing/espresso-xcuitest/espresso-capture"},next:{title:"iOS Real Device .ipa Files",permalink:"/sauce-docs/pr-preview/pr-2898/mobile-apps/automated-testing/ipa-files"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Prepare Your Flutter Application For Integration Testing",id:"prepare-your-flutter-application-for-integration-testing",level:2},{value:"Example Implementation",id:"example-implementation",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Unit tests and flutter widget tests validate individual classes, functions, or widgets.\nYou will not be able to validate how individual pieces work together in whole or capture the performance of an app running on real devices.\nTo perform these tasks you could use Flutters' integration test solution."}),"\n",(0,a.jsxs)(t.p,{children:["Follow this guide to run ",(0,a.jsx)(t.a,{href:"https://docs.flutter.dev/cookbook/testing/integration/introduction",children:"integration tests"})," for your Flutter app on Android."]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Your Sauce Labs ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsxs)(t.li,{children:["Flutter mobile app. If you don't have one, you could use our Flutter Demo App:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-flutter",children:"Sauce Labs Flutter Demo App"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"prepare-your-flutter-application-for-integration-testing",children:"Prepare Your Flutter Application For Integration Testing"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Open your Flutter project in your favorite IDE."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In your Flutter app's ",(0,a.jsx)(t.code,{children:"pubspec.yaml"}),", add the following dependencies:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"dev_dependencies:\n   integration_test:\n      sdk: flutter\n   flutter_test:\n      sdk: flutter\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create an instrumentation test file in your application\u2019s ",(0,a.jsx)(t.code,{children:"android/app/src/androidTest/java/com/example/myapp"})," directory. Replace ",(0,a.jsx)(t.code,{children:"com, example,"})," and ",(0,a.jsx)(t.code,{children:"myApp"})," with the values from your app\u2019s package name."]}),"\n",(0,a.jsxs)(t.p,{children:["Then, name this test file as ",(0,a.jsx)(t.code,{children:"MainActivityTest.java"})," or another name of your choice."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"package com.example.myApp;\n\nimport androidx.test.rule.ActivityTestRule;\nimport dev.flutter.plugins.integration_test.FlutterTestRunner;\nimport org.junit.Rule;\nimport org.junit.runner.RunWith;\nimport com.example.myApp.MainActivity;\n\n@RunWith(FlutterTestRunner.class)\npublic class MainActivityTest {\n    @Rule\n    public ActivityTestRule<MainActivity> rule = new ActivityTestRule<>(MainActivity.class, true, false);\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Update your application\u2019s ",(0,a.jsx)(t.code,{children:"myapp/android/app/build.gradle"})," file to ensure it uses androidx\u2019s version of ",(0,a.jsx)(t.code,{children:"AndroidJUnitRunner"})," and includes androidx libraries as a dependency."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-gradle",children:" android {\n   ...\n   defaultConfig {\n     ...\n     testInstrumentationRunner \"androidx.test.runner.AndroidJUnitRunner\"\n   }\n }\n dependencies {\n   testImplementation 'junit:junit:4.12'\n   androidTestImplementation 'androidx.test:runner:1.2.0'\n   androidTestImplementation 'androidx.test.espresso:espresso-core:3.2.0'\n }\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create a directory called ",(0,a.jsx)(t.code,{children:"integration_test"})," in the root of your Flutter project."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Create a file called ",(0,a.jsx)(t.code,{children:"flutter_integration_test.dart"})," in the ",(0,a.jsx)(t.code,{children:"integration_test"})," directory."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Update your testing dart file ",(0,a.jsx)(t.code,{children:"flutter_integration_test.dart"})," to include the ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"tearDownAll"})}),",\nThe purpose for this is to make sure we close the connection to the driver after the tests have completed."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\nimport 'package:flutter_test/flutter_test.dart';\nimport 'package:integration_test/integration_test.dart'; // Ensure you have this import\n// Add as app because we want to make sure the app loaded correctly on the device by calling the main function in the main dart file.\nimport 'package:my_demo/main.dart' as app;\nvoid main() {\n\n  // Ensure IntegrationTestWidgetsFlutterBinding is initialized\n  final binding = IntegrationTestWidgetsFlutterBinding.ensureInitialized() as IntegrationTestWidgetsFlutterBinding;\n\n\n  group('E2E Test With Flutter', (){\n    tearDownAll(() async {\n      // Signal that the test is complete\n      binding.reportData = <String, dynamic>{\n        'completed': true,\n      };\n    });\n\n    testWidgets(\"First testing scenario increment 5 decrement 3\", \n    (tester) async {\n      app.main();\n      await tester.pumpAndSettle(); // wait for app to be ready. \n      \n      ...\n    });\n  });\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Use the following ",(0,a.jsx)(t.code,{children:"Gradle"})," commands to build an instrumentation test ",(0,a.jsx)(t.code,{children:".apk"})," file(test suite) using the ",(0,a.jsx)(t.code,{children:"MainActivityTest.java"})," created in the ",(0,a.jsx)(t.code,{children:"androidTest"})," directory as mentioned in step 3."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal Command"',children:' # Go to the android folder which contains the "gradlew" script used for building Android apps from the terminal\n pushd android\n # Build an Android test APK (uses the MainActivityTest.java file created in step 1)\n ./gradlew app:assembleAndroidTest\n\n # Build a debug APK by passing the integration test file\n ./gradlew app:assembleDebug -Ptarget="..../integration_test/flutter_integration_test.dart"\n # Go back to the root of the project\n popd\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Configure ",(0,a.jsx)(t.code,{children:"saucectl"})," to run the test."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Create a folder ",(0,a.jsx)(t.code,{children:"saucectl"})," in your project root directory."]}),"\n",(0,a.jsxs)(t.li,{children:["Inside this folder create a ",(0,a.jsx)(t.code,{children:"flutter_integration_test.yaml"})," with the following content:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'apiVersion: v1alpha\nkind: espresso\nsauce:\n   concurrency: 1\nespresso:\n   app: ...../flutter/my-demo-app-flutter/build/app/outputs/flutter-apk/app-debug.apk\n   testApp: ....../flutter/my-demo-app-flutter/build/app/outputs/apk/androidTest/debug/app-debug-androidTest.apk\nsuites:\n   - name: "Sauce Labs Espresso with flutter integration tests"\n     testOptions:\n       class:\n         - com.example.my_demo_app_flutter.MainActivityTest\n     devices:\n       - name: "Google Pixel.*"\nartifacts:\n   download:\n     when: always\n     match:\n       - junit.xml\n     directory: ./\n'})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Run the following commands to start the test on Sauce Labs"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal Command"',children:"saucectl configure -u USERNAME -a ACCESS_KEY\nsaucectl run -c sauceconnect/flutter_integration_test.yaml\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Check the status of you test on ",(0,a.jsx)(t.code,{children:"app.saucelabs.com"})]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="saucectl run command output"',children:'12:24:52 INF Running Espresso in Sauce Labs\n                                      (.                          \n                                       #.                           \n                                       #.                           \n                           .####################                    \n                         #####////////*******/######                \n                       .##///////*****************###/              \n                      ,###////*********************###              \n                      ####//***********************####             \n                       ###/************************###              \n                        ######********************###. ##           \n                           (########################  ##     ##     \n                                   ,######(#*         ##*   (##     \n                               /############*          #####        \n                           (########(  #########(    ###            \n                         .#######,    */  ############              \n                      ,##########  %#### , ########*                \n                    *### .#######/  ##  / ########                  \n                   ###   .###########//###########                  \n               ######     ########################                  \n             (#(    *#(     #######.    (#######                    \n                    ##,    /########    ########                    \n                           *########    ########                    \n _____        _    _  _____ ______    _____ _      ____  _    _ _____  \n/ ____|  /\\  | |  | |/ ____|  ____|  / ____| |    / __ \\| |  | |  __ \\\n| (___   /  \\ | |  | | |    | |__    | |    | |   | |  | | |  | | |  | |\n\\___ \\ / /\\ \\| |  | | |    |  __|   | |    | |   | |  | | |  | | |  | |\n____) / ____ \\ |__| | |____| |____  | |____| |___| |__| | |__| | |__| |\n|_____/_/    \\_\\____/ \\_____|______|  \\_____|______\\____/ \\____/|_____/\n   \n12:24:52 INF Checking if ...../my-demo-app-flutter/build/app/outputs/flutter-apk/app-debug.apk has already been uploaded previously\n12:24:52 INF Checksum: 1df0b6684973536fef4ae653d89661d6c48d6f699091511515b69735d6a80fbd\n12:27:26 INF Application uploaded. durationMs=153173 storageId=6849a64a-3c51-4423-87f2-b3660c972a36\n12:27:26 INF Checking if ...../build/app/outputs/apk/androidTest/debug/app-debug-androidTest.apk has already been uploaded previously\n12:27:26 INF Checksum: b5b15cb741b78fe7a5df171406c17ec9ea8fd6ac52623abf7a8df519270e281d\n12:27:26 INF Skipping upload, using storage:635a7a46-c1fc-4c43-9a05-60e09a2163b8\n12:27:26 INF Launching workers. concurrency=1\n12:27:26 INF Starting suite. region=us-west-1 suite="Sauce Labs Espresso with flutter integration tests"\n12:27:27 INF Suite started. deviceId= deviceName="Google Pixel.*" platform=Android platformVersion= private=false suite="Sauce Labs Espresso with flutter integration tests" url=https://app.saucelabs.com/tests/4b52d0880d5d41579d669a66fdca2da0\n12:27:36 INF Suites in progress: 1\n12:27:46 INF Suites in progress: 1\n12:27:56 INF Suites in progress: 1\n12:28:06 INF Suites in progress: 1\n12:28:16 INF Suites in progress: 1\n12:28:26 INF Suites in progress: 1\n12:28:27 INF Suite finished. passed=true suite="Sauce Labs Espresso with flutter integration tests" url=https://app.saucelabs.com/tests/4b52d0880d5d41579d669a66fdca2da0\n   \nResults:\n       Name                                                  Duration    Status    Platform    Device            Attempts  \n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u2714    Sauce Labs Espresso with flutter integration tests        1m0s    passed    Android     Google Pixel.*           1  \n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u2714    All tests have passed                                     1m1s\n   \nBuild Link: https://app.saucelabs.com/builds/rdc/159d98f0223246e59dd172bad78573cc\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example-implementation",children:"Example Implementation"}),"\n",(0,a.jsxs)(t.p,{children:["For a practical example of how to set up and run integration tests for Flutter apps, you can refer to the ",(0,a.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-flutter",children:"Sauce Labs Flutter demo application"})," repository.\nThe steps outlined in this guide have already been implemented in that repository. You can follow along with the demo app to see how everything is configured and run your tests accordingly."]}),"\n",(0,a.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,a.jsx)(t.admonition,{title:"Next step",type:"info",children:(0,a.jsx)(t.p,{children:"We're excited to share that Sauce Labs is actively working on expanding support for Flutter integration tests on iOS.\nStay tuned for updates as we continue to develop this capability!"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(96540),r=n(18215),i=n(23104),s=n(56347),o=n(205),l=n(57485),d=n(31682),u=n(89466);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,c]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),_=(()=>{const e=d??f;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{_&&l(_)}),[_]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var g=n(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(d(t),s(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...i,className:(0,r.A)("tabs__item",_.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",_.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function v(e){const t=(0,g.A)();return(0,b.jsx)(y,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);