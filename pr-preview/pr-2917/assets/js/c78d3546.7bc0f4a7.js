"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2911],{69726:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=s(74848),r=s(28453);s(86025),s(11470),s(19365);const i={id:"sel-trouble",title:"Troubleshooting Selenium Test Scripts",sidebar_label:"Troubleshooting"},a=void 0,o={id:"web-apps/automated-testing/selenium/sel-trouble",title:"Troubleshooting Selenium Test Scripts",description:"Occasionally, your Selenium test scripts may produce unexpected results. This page provides some recommendations for preventing or resolving some common issues with your Selenium tests.",source:"@site/docs/web-apps/automated-testing/selenium/troubleshooting.md",sourceDirName:"web-apps/automated-testing/selenium",slug:"/web-apps/automated-testing/selenium/sel-trouble",permalink:"/sauce-docs/pr-preview/pr-2917/web-apps/automated-testing/selenium/sel-trouble",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/selenium/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"sel-trouble",title:"Troubleshooting Selenium Test Scripts",sidebar_label:"Troubleshooting"}},l={},u=[{value:"Open Commands time out, even though I see the app loaded in the video.",id:"open-commands-time-out-even-though-i-see-the-app-loaded-in-the-video",level:2},{value:"My test that failed, but Sauce Labs shows it passing",id:"my-test-that-failed-but-sauce-labs-shows-it-passing",level:2},{value:"Add Logging to debug parallel testing issues",id:"add-logging-to-debug-parallel-testing-issues",level:2},{value:"Incorrect driver setup",id:"incorrect-driver-setup",level:3},{value:"Non-thread-safe code",id:"non-thread-safe-code",level:3},{value:"Selenium Lifecycle Problems",id:"selenium-lifecycle-problems",level:3},{value:"Check How Much Parallelization Your Tests Can Stand",id:"check-how-much-parallelization-your-tests-can-stand",level:2},{value:"Adjust test volume to isolate problems",id:"adjust-test-volume-to-isolate-problems",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Occasionally, your Selenium test scripts may produce unexpected results. This page provides some recommendations for preventing or resolving some common issues with your Selenium tests."}),"\n",(0,n.jsx)(t.h2,{id:"open-commands-time-out-even-though-i-see-the-app-loaded-in-the-video",children:"Open Commands time out, even though I see the app loaded in the video."}),"\n",(0,n.jsx)(t.p,{children:"This is generally caused by a connection gap or a problem with the app's server handling requests incorrectly. As a first step, you should proceed with a deep analysis of the network traffic. If you make it automated and run several tests at the same time, you will have higher chances of replicating the error."}),"\n",(0,n.jsxs)(t.p,{children:["Try starting the Selenium instance with the option ",(0,n.jsx)(t.code,{children:"captureNetworkTraffic=true"})," and set the browser as Firefox. This will let you pull the request info back out as JSON/XML/plain text, where you can parse that content to find any problems."]}),"\n",(0,n.jsx)(t.h2,{id:"my-test-that-failed-but-sauce-labs-shows-it-passing",children:"My test that failed, but Sauce Labs shows it passing"}),"\n",(0,n.jsx)(t.p,{children:"Because of the client/server architecture that Selenium employs, there's no information about assertion results on the server side, so, for example, if your test has a step for validating that the title of your AUT is \"My WebApp's Title\", Sauce only sees the request to get the title from the current page. Therefore, Sauce will only return the result, without comparing it to the expected value, and consider the test to have passed, as illustrated below:"}),"\n",(0,n.jsx)(t.p,{children:"Your test:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'assertEquals(sel.getTitle(), "My Shiny WebApp\'s Title");'})}),"\n",(0,n.jsx)(t.p,{children:"Sauce Labs:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Command requested: getTitle()"}),"\n",(0,n.jsx)(t.code,{children:"Result: Your Page's Title"})]}),"\n",(0,n.jsxs)(t.p,{children:["The way the assertion is coded does not tell Sauce Labs to fail the test if the assertion doesn't match. To resolve this disconnect, ",(0,n.jsx)(t.a,{href:"/basics/test-config-annotation/test-annotation#setting-passfail",children:"annotate your tests with Pass/Fail status"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"add-logging-to-debug-parallel-testing-issues",children:"Add Logging to debug parallel testing issues"}),"\n",(0,n.jsxs)(t.p,{children:["Many languages have tracing tools that are useful for debugging code problems if you're proficient in using them. Sometimes, the less complicated alternative of logging, whether through your programming language, test framework, container, or even printing to ",(0,n.jsx)(t.code,{children:"standard out"}),", produces the data that helps you best deduce issues in parallel tests over time."]}),"\n",(0,n.jsx)(t.p,{children:"Every log, regardless of how you generate it, should include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Timestamps"}),"\n",(0,n.jsx)(t.li,{children:"ID of the current thread or process (where applicable)"}),"\n",(0,n.jsx)(t.li,{children:"ID of the Selenium driver currently in use (where applicable)"}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"DEBUG"})," or ",(0,n.jsx)(t.code,{children:"VERBOSE"})," log level"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A good template to log with is:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"[TIMESTAMP] - [PROCESS ID]: [DRIVER ID] - [Log Message]\n"})}),"\n",(0,n.jsx)(t.p,{children:"The log message itself should include everything relevant to the problem you're seeing, in particular:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Just before creating a Selenium driver, with the test capabilities"}),"\n",(0,n.jsx)(t.li,{children:"When the driver is created successfully, with its session ID"}),"\n",(0,n.jsx)(t.li,{children:"When a driver is going to be quit, with its session ID"}),"\n",(0,n.jsx)(t.li,{children:"When a driver has been successfully quit, with its session ID"}),"\n",(0,n.jsx)(t.li,{children:"When a test starts"}),"\n",(0,n.jsx)(t.li,{children:"When a test finishes"}),"\n",(0,n.jsx)(t.li,{children:"When a test is first about to use a Selenium driver"}),"\n",(0,n.jsx)(t.li,{children:"Every time a test is using a Selenium driver"}),"\n",(0,n.jsx)(t.li,{children:"When a test is about to do something that is network intensive for the browser"}),"\n",(0,n.jsx)(t.li,{children:"When test exceptions occur"}),"\n",(0,n.jsx)(t.li,{children:"When driver setup exceptions occur"}),"\n",(0,n.jsx)(t.li,{children:"When any pre-test actions that set up data or browser state, are about to run"}),"\n",(0,n.jsx)(t.li,{children:"When any pre-test actions that set up data or browser state have run"}),"\n",(0,n.jsx)(t.li,{children:"When any post-test actions that clean up data or browser state have run"}),"\n",(0,n.jsx)(t.li,{children:"When any post-test actions that clean up data or browser state have run"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You should always include test names when talking about specific tests, Session IDs when using Selenium drivers, and Thread or Process IDs."}),"\n",(0,n.jsx)(t.p,{children:"Once you have logs to review, here are some things to look for:"}),"\n",(0,n.jsx)(t.h3,{id:"incorrect-driver-setup",children:"Incorrect driver setup"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Empty" or incomplete test capabilities'}),"\n",(0,n.jsx)(t.li,{children:'"Empty" or missing user authentication'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"non-thread-safe-code",children:"Non-thread-safe code"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Selenium session IDs changing during a single test"}),"\n",(0,n.jsx)(t.li,{children:"Selenium session IDs being used across threads"}),"\n",(0,n.jsx)(t.li,{children:"Tests using Selenium sessions that have already been quit"}),"\n",(0,n.jsx)(t.li,{children:"Tests using Selenium sessions which don't exist"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"selenium-lifecycle-problems",children:"Selenium Lifecycle Problems"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Selenium sessions being created all at once, but only used by tests much later"}),"\n",(0,n.jsx)(t.li,{children:"Selenium sessions all quit at once"}),"\n",(0,n.jsx)(t.li,{children:"Selenium session IDs being used across multiple threads"}),"\n",(0,n.jsx)(t.li,{children:"Selenium sessions being created and never quit"}),"\n",(0,n.jsx)(t.li,{children:"Tests using Selenium sessions that have already been quit"}),"\n",(0,n.jsx)(t.li,{children:"Tests using Selenium sessions which don't exist"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"check-how-much-parallelization-your-tests-can-stand",children:"Check How Much Parallelization Your Tests Can Stand"}),"\n",(0,n.jsx)(t.p,{children:"You should also check to see if there's a level of parallelization at which your tests work, and one where. Some Sauce Labs users have problems only once they've exceeded a certain number of parallel tests at once. For instance, problems with queuing and network congestion are often exposed when running higher numbers of parallel tests."}),"\n",(0,n.jsx)(t.p,{children:"First up, check how many parallel tests your account is able to run simultaneously. You can check this by logging in to Sauce Labs. In the left-hand column you'll see the number of Concurrent VMs allowed for your account, which corresponds to the number of tests you can run in parallel. Make sure you're not exceeding this number, and if you are, simply throttle back on the number of parallel tests you're running until the problem resolves."}),"\n",(0,n.jsx)(t.p,{children:"If your problem continues try slowly lowering the number of tests and see if there's a level, higher than one, at which you're no longer experiencing problems. If you find the level at which this occurs, then you can start investigating your logging to see what your tests do at higher levels, that differs from lower ones. For instance, you might discover that some of your tests rely on running in browsers with other tests, and when your parallelization goes higher, this no longer happens."}),"\n",(0,n.jsx)(t.p,{children:"If there's no level of parallelization where your tests work correctly in parallel, or there is but it's not related to your Sauce Labs concurrency limit and you're certain it's not a networking problem, leave your parallelization at 2 and carry on diagnosis."}),"\n",(0,n.jsx)(t.h2,{id:"adjust-test-volume-to-isolate-problems",children:"Adjust test volume to isolate problems"}),"\n",(0,n.jsx)(t.p,{children:"Removing tests from your test suite can surface problematic tests or indicate a problem with the length of individual thread lifecycles."}),"\n",(0,n.jsx)(t.p,{children:"As you remove tests, if things start functioning, slowly add tests back in to see if you can isolate problematic tests."}),"\n",(0,n.jsx)(t.p,{children:"If removing tests doesn't stabilize your suite, or if every test above a certain number causes issues, configure your tests to run the lowest number of tests that exhibits a problem, and keep debugging."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>a});s(96540);var n=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:t,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>j});var n=s(96540),r=s(34164),i=s(23104),a=s(56347),o=s(205),l=s(57485),u=s(31682),c=s(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,i=d(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,h]=m({queryString:s,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=u??g;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(74848);function y(e){let{className:t,block:s,selectedValue:n,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,s=l.indexOf(t),r=o[s].value;r!==n&&(u(t),a(r))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:c,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function x(e){let{lazy:t,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(w,{...e,children:h(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);