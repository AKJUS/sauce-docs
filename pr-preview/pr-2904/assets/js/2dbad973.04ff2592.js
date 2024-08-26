"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2821],{99738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453);const r={id:"teamcity",title:"Sauce Labs with TeamCity",sidebar_label:"TeamCity",description:"Use our plugin to run your Sauce Labs tests within your TeamCity pipeline."},o=void 0,l={id:"basics/integrations/teamcity",title:"Sauce Labs with TeamCity",description:"Use our plugin to run your Sauce Labs tests within your TeamCity pipeline.",source:"@site/docs/basics/integrations/teamcity.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/teamcity",permalink:"/sauce-docs/pr-preview/pr-2904/basics/integrations/teamcity",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/teamcity.md",tags:[],version:"current",lastUpdatedBy:"Pawel Dudzi\u0144ski",lastUpdatedAt:1674671555e3,frontMatter:{id:"teamcity",title:"Sauce Labs with TeamCity",sidebar_label:"TeamCity",description:"Use our plugin to run your Sauce Labs tests within your TeamCity pipeline."},sidebar:"docs",previous:{title:"Jenkins",permalink:"/sauce-docs/pr-preview/pr-2904/basics/integrations/jenkins"},next:{title:"Deque axe",permalink:"/sauce-docs/pr-preview/pr-2904/basics/integrations/deque"}},a={},c=[{value:"Installing the Plugin",id:"installing-the-plugin",level:2},{value:"Configuring a Project",id:"configuring-a-project",level:2},{value:"Create the Project",id:"create-the-project",level:3},{value:"Create the Build Configuration",id:"create-the-build-configuration",level:3},{value:"Integrate the Tests",id:"integrate-the-tests",level:3},{value:"Setting Environment Variables",id:"setting-environment-variables",level:2},{value:"Sauce OnDemand Environment Variables",id:"sauce-ondemand-environment-variables",level:3},{value:"TeamCity Environment Variables",id:"teamcity-environment-variables",level:3},{value:"Outputting the TeamCity Session ID to <code>stdout</code>",id:"outputting-the-teamcity-session-id-to-stdout",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.jetbrains.com/teamcity/",children:"TeamCity"})," is a continuous integration tool suite by JetBrains. Use this documentation to manage your Sauce Labs tests within your TeamCity Java project."]}),"\n",(0,i.jsx)(t.h2,{id:"installing-the-plugin",children:"Installing the Plugin"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Download the ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/downloads/teamcity/release/com/saucelabs/teamcity/build/1.55/build-1.55.zip",children:"Sauce OnDemand Plugin for TeamCity"})," ZIP file."]}),"\n",(0,i.jsxs)(t.li,{children:["Copy the ZIP into your TeamCity ",(0,i.jsx)(t.code,{children:"~/.BuildServer/plugins"})," directory and extract the files."]}),"\n",(0,i.jsx)(t.li,{children:"Restart TeamCity."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configuring-a-project",children:"Configuring a Project"}),"\n",(0,i.jsx)(t.h3,{id:"create-the-project",children:"Create the Project"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["From the TeamCity dashboard, choose ",(0,i.jsx)(t.strong,{children:"Administration"})," and click ",(0,i.jsx)(t.strong,{children:"Create Project"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["For ",(0,i.jsx)(t.strong,{children:"Name"}),", enter ",(0,i.jsx)(t.code,{children:"SauceDemo"})," (populates ",(0,i.jsx)(t.strong,{children:"Project ID"})," field with ",(0,i.jsx)(t.code,{children:"SauceDemo"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Create"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Select the ",(0,i.jsx)(t.strong,{children:"VCS Roots"})," tab, click ",(0,i.jsx)(t.strong,{children:"Create VCS root"}),", and enter the following field values:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Fetch URL"}),": ",(0,i.jsx)(t.code,{children:"https://github.com/saucelabs-sample-test-frameworks/Java-Junit-Selenium"})," (use the sample Java/JUnit test framework)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Default Branch"}),": ",(0,i.jsx)(t.code,{children:"Master"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"create-the-build-configuration",children:"Create the Build Configuration"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["On the ",(0,i.jsx)(t.strong,{children:"General"})," tab, choose ",(0,i.jsx)(t.strong,{children:"Create build configuration"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.strong,{children:"Name"})," field, enter ",(0,i.jsx)(t.code,{children:"Maven"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"VCS settings"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.strong,{children:"Attach existing VCS root"}),", select ",(0,i.jsx)(t.code,{children:"https://github.com/saucelabs/java-sauce-example.git#master"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Add build step"}),".","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For ",(0,i.jsx)(t.strong,{children:"Runner type"}),", choose ",(0,i.jsx)(t.code,{children:"Maven"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["For ",(0,i.jsx)(t.strong,{children:"Goals"}),", enter ",(0,i.jsx)(t.code,{children:"test"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Save"})," the build step."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Add build feature"})," and select ",(0,i.jsx)(t.strong,{children:"Sauce Labs Build Feature"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Enter your ",(0,i.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,i.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Enable Sauce Connect"})," if you want to launch an instance of Sauce Connect prior to running your job that will close upon completion of the job (for use in private network environments in order to establish a secure connection to the Sauce platform)."]}),"\n",(0,i.jsx)(t.li,{children:"Select the operating system and browser combination you want to test against."}),"\n",(0,i.jsxs)(t.li,{children:["Click ",(0,i.jsx)(t.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"integrate-the-tests",children:"Integrate the Tests"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["From the TeamCity dashboard, click ",(0,i.jsx)(t.strong,{children:"Run"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["When the build completes, click ",(0,i.jsx)(t.strong,{children:"Results"})," and choose the ",(0,i.jsx)(t.strong,{children:"Sauce Labs Results"})," tab."]}),"\n",(0,i.jsxs)(t.li,{children:["Click the ",(0,i.jsx)(t.strong,{children:"Job ID"})," link to view the test report, which lists the steps performed the test and includes a video of the test."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-environment-variables",children:"Setting Environment Variables"}),"\n",(0,i.jsx)(t.p,{children:"Using environment variables in your configuration file allows you to maintain the values of properties in a single source and then reference them throughout all your jobs, ensuring that, if a modification needs to be made, it only needs to be made in one place in order to take effect in all references."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["If you're using Protractor to run your tests with TeamCity, ensure ",(0,i.jsx)(t.code,{children:"disableEnvironmentOverrides"})," is set to false in your ",(0,i.jsx)(t.code,{children:"config.ts"})," file (this is the default setting) to prevent environment variables from being overridden by that file."]})}),"\n",(0,i.jsx)(t.h3,{id:"sauce-ondemand-environment-variables",children:"Sauce OnDemand Environment Variables"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_HOST"}),(0,i.jsx)(t.td,{children:"The hostname of the Selenium server"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_PORT"}),(0,i.jsx)(t.td,{children:"The port of the Selenium server"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_PLATFORM"}),(0,i.jsx)(t.td,{children:"The operating system of the selected browser"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_VERSION"}),(0,i.jsx)(t.td,{children:"The version number of the selected browser"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_BROWSER"}),(0,i.jsx)(t.td,{children:"The name of the selected browser"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_DRIVER"}),(0,i.jsx)(t.td,{children:"Contains the operating system, version and browser name of the selected browser"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_URL"}),(0,i.jsx)(t.td,{children:"The initial URL to load when the test begins"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SAUCE_USERNAME"}),(0,i.jsx)(t.td,{children:"The user name used to invoke Sauce OnDemand"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SAUCE_ACCESS_KEY"}),(0,i.jsx)(t.td,{children:"The access key for the user used to invoke Sauce OnDemand"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SELENIUM_STARTING_URL"}),(0,i.jsx)(t.td,{children:"The value of the Starting URL field"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SAUCE_ONDEMAND_BROWSERS"}),(0,i.jsx)(t.td,{children:"A JSON-formatted string representing browsers you selected for the job configuration"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"teamcity-environment-variables",children:"TeamCity Environment Variables"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SAUCE_TC_BUILDNUMBER"}),(0,i.jsx)(t.td,{children:"The build name to use with Sauce Labs jobs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TUNNEL_IDENTIFIER"}),(0,i.jsx)(t.td,{children:"The unique tunnel identifier used by the Sauce Connect Proxy, if enabled"})]})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"outputting-the-teamcity-session-id-to-stdout",children:["Outputting the TeamCity Session ID to ",(0,i.jsx)(t.code,{children:"stdout"})]}),"\n",(0,i.jsxs)(t.p,{children:["As part of the post-build activities, the Sauce plugin parses the test result files to detect lines in the ",(0,i.jsx)(t.code,{children:"stdout"})," or ",(0,i.jsx)(t.code,{children:"stderr"})," containing the format:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"SauceOnDemandSessionID=<session id> job-name=<job name>"})}),"\n",(0,i.jsxs)(t.p,{children:["To ensure that your test results and Sauce jobs are associated properly, output the ",(0,i.jsx)(t.code,{children:"SauceOnDemandSessionID"})," (obtained from the RemoteWebDriver instance) to ",(0,i.jsx)(t.code,{children:"stdout"})," using the following code."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'private void printSessionId() {\n\n    String message = String.format("SauceOnDemandSessionID=%1$s job-name=%2$s",\n    (((RemoteWebDriver) driver).getSessionId()).toString(), "job name");\n    System.out.println(message);\n}\n'})}),"\n",(0,i.jsx)("p",{className:"deis",children:"We recognize that there are times we use words that are part of a troublesome history. We're working toward replacing these as part of the move to inclusive language within the tech community as a whole."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);