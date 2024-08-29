"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99151],{65674:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var a=t(74848),r=t(28453),n=t(11470),l=t(19365);const c={id:"saucectl",title:"Using the saucectl CLI",sidebar_label:"Using saucectl"},i=void 0,o={id:"dev/cli/saucectl",title:"Using the saucectl CLI",description:"The saucectl command line interface orchestrates the relationship between your tests in your framework, and the rich parallelization, test history filtering, and analytics of Sauce Labs. saucectl performs the underlying business logic to access the tests in your existing framework, runs them in the Sauce Labs Cloud, then securely transmits the test assets to the Sauce Labs platform, where you can review, share, and evaluate your test outcomes at scale.",source:"@site/docs/dev/cli/saucectl.md",sourceDirName:"dev/cli",slug:"/dev/cli/saucectl",permalink:"/sauce-docs/pr-preview/pr-2917/dev/cli/saucectl",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"saucectl",title:"Using the saucectl CLI",sidebar_label:"Using saucectl"},sidebar:"dev",previous:{title:"Sauce Connect Proxy 4 CLI",permalink:"/sauce-docs/pr-preview/pr-2917/dev/cli/sauce-connect-proxy"},next:{title:"Architecture",permalink:"/sauce-docs/pr-preview/pr-2917/dev/cli/saucectl/architecture"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Supported Frameworks and Browsers",id:"supported-frameworks-and-browsers",level:2},{value:"Installing <code>saucectl</code>",id:"installing-saucectl",level:2},{value:"Updating <code>saucectl</code>",id:"updating-saucectl",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Associate Your Credentials",id:"associate-your-credentials",level:3},{value:"Check Out Your Framework Demo Repo",id:"check-out-your-framework-demo-repo",level:3},{value:"Configure <code>saucectl</code> for your Tests",id:"configure-saucectl-for-your-tests",level:3},{value:"Run Your Tests",id:"run-your-tests",level:3},{value:"View Your Test Results in Sauce Labs",id:"view-your-test-results-in-sauce-labs",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"saucectl"})," command line interface orchestrates the relationship between your tests in your framework, and the rich parallelization, test history filtering, and analytics of Sauce Labs. ",(0,a.jsx)(s.code,{children:"saucectl"})," performs the underlying business logic to access the tests in your existing framework, runs them in the Sauce Labs Cloud, then securely transmits the test assets to the Sauce Labs platform, where you can review, share, and evaluate your test outcomes at scale."]}),"\n",(0,a.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["A Sauce Labs account (",(0,a.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(s.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["Your Sauce Labs ",(0,a.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsx)(s.li,{children:"Know which test framework and browser versions you plan to run tests against"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,a.jsx)(s.p,{children:"Supported OS:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Windows 10 / Windows 11"}),"\n",(0,a.jsx)(s.li,{children:"macOS 10.15+"}),"\n",(0,a.jsx)(s.li,{children:"Linux"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"supported-frameworks-and-browsers",children:"Supported Frameworks and Browsers"}),"\n",(0,a.jsx)(s.p,{children:"Below are the frameworks supported."}),"\n",(0,a.jsxs)(n.A,{groupId:"platforms",defaultValue:"cypress",values:[{label:"Cypress",value:"cypress"},{label:"Playwright",value:"playwright"},{label:"Cucumber.js-Playwright",value:"cucumberjs-playwright"},{label:"TestCafe",value:"testcafe"},{label:"Replay",value:"replay"},{label:"Espresso",value:"espresso"},{label:"XCUITest",value:"xcuitest"}],children:[(0,a.jsx)(l.A,{value:"cypress",children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/cypress/",children:"Cypress on Sauce Docs"})}),(0,a.jsx)(l.A,{value:"playwright",children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/playwright/",children:"Playwright on Sauce Docs"})}),(0,a.jsx)(l.A,{value:"cucumberjs-playwright",children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/cucumberjs-playwright/quickstart",children:"Cucumber.js with Playwright on Sauce Docs"})}),(0,a.jsx)(l.A,{value:"testcafe",children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/testcafe/",children:"TestCafe on Sauce Docs"})}),(0,a.jsx)(l.A,{value:"replay",children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/replay/",children:"Replay on Sauce Docs"})}),(0,a.jsxs)(l.A,{value:"espresso",children:[(0,a.jsx)(s.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/",children:"Espresso on Sauce Docs"}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsx)(s.tr,{children:(0,a.jsx)(s.th,{children:"Supported Platforms"})})}),(0,a.jsx)(s.tbody,{children:(0,a.jsx)(s.tr,{children:(0,a.jsx)(s.td,{children:"Android 5.1+"})})})]})]}),(0,a.jsxs)(l.A,{value:"xcuitest",children:[(0,a.jsx)(s.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/",children:"XCUITest on Sauce Docs"}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsx)(s.tr,{children:(0,a.jsx)(s.th,{children:"Supported Platforms"})})}),(0,a.jsx)(s.tbody,{children:(0,a.jsx)(s.tr,{children:(0,a.jsx)(s.td,{children:"iOS 10+"})})})]})]})]}),"\n",(0,a.jsxs)(s.h2,{id:"installing-saucectl",children:["Installing ",(0,a.jsx)(s.code,{children:"saucectl"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"saucectl"})," binaries are attached to ",(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl/releases/latest",children:"GitHub releases"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["Following is a list of ",(0,a.jsx)(s.code,{children:"saucectl"})," installation options that are common across different development environments."]}),"\n",(0,a.jsxs)(n.A,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"NPM + Binary",value:"binary"},{label:"Homebrew",value:"brew"},{label:"cURL",value:"curl"},{label:"Windows Powershell",value:"powershell"}],children:[(0,a.jsxs)(l.A,{value:"npm",children:["Requires Node.js 16 or higher and npm 8 or higher.",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Using NPM"',children:"npm install -g saucectl\n"})})]}),(0,a.jsxs)(l.A,{value:"binary",children:["Requires Node.js 16 or higher and npm 8 or higher.",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Using NPM and SAUCECTL_INSTALL_BINARY"',children:"SAUCECTL_INSTALL_BINARY=https://company.domain.com/saucectl_0.32.2_mac_64-bit.tar.gz npm install -g saucectl\n"})}),(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["Use the ",(0,a.jsx)(s.code,{children:"SAUCECTL_INSTALL_BINARY"})," environment variable to make ",(0,a.jsx)(s.code,{children:"saucectl"})," available from a known source in your control or if you use ",(0,a.jsx)(s.code,{children:"npx saucectl"})," to bypass installation."]})})]}),(0,a.jsx)(l.A,{value:"brew",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Using Homebrew (macOS)"',children:"brew tap saucelabs/saucectl\nbrew install saucectl\n"})})}),(0,a.jsxs)(l.A,{value:"curl",children:[(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Using curl (Linux / macOS)"',children:"sudo sh -c 'curl -L https://saucelabs.github.io/saucectl/install | bash -s -- -b /usr/local/bin'\n"})}),"If you would like to inspect the content of our one line installer, download it, have a look, and execute it:",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"curl -fsSL -o get_saucectl.sh https://saucelabs.github.io/saucectl/install && \\\nchmod 700 get_saucectl.sh && \\\nsudo ./get_saucectl.sh -b /usr/local/bin\n"})})]}),(0,a.jsx)(l.A,{value:"powershell",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",metastring:'title="Using Powershell (Windows)"',children:'$url = Invoke-RestMethod -Uri https://api.github.com/repos/saucelabs/saucectl/releases/latest | ForEach-Object {$_.assets} | Where-Object { $_.name -Like "*_win_64-bit.zip" }\nInvoke-RestMethod -Uri $url.browser_download_url -OutFile saucectl.zip\nExpand-Archive -Force -Path ./saucectl.zip\nMove-Item -Path ./saucectl/saucectl.exe -Destination saucectl.exe\nRemove-Item -Force -Recurse  -Path ./saucectl,./saucectl.zip\n'})})})]}),"\n",(0,a.jsx)(s.admonition,{title:"Are you using mingw?",type:"caution",children:(0,a.jsxs)(s.p,{children:["Mingw on Windows is known to interfere with the interactive ",(0,a.jsx)(s.code,{children:"saucectl"})," commands, so Windows users should use ",(0,a.jsx)(s.code,{children:"cmd"})," or ",(0,a.jsx)(s.code,{children:"powershell"})," when interacting with ",(0,a.jsx)(s.code,{children:"saucectl"}),"."]})}),"\n",(0,a.jsxs)(s.h3,{id:"updating-saucectl",children:["Updating ",(0,a.jsx)(s.code,{children:"saucectl"})]}),"\n",(0,a.jsxs)(s.p,{children:["To ensure you have access to the most current feature set of ",(0,a.jsx)(s.code,{children:"saucectl"}),", keep your installation up to date by periodically upgrading to the latest release."]}),"\n",(0,a.jsxs)(s.p,{children:["To do this, run the same command you used to download ",(0,a.jsx)(s.code,{children:"saucectl"}),". If you originally installed ",(0,a.jsx)(s.code,{children:"saucectl"})," using npm, for example, you'd run ",(0,a.jsx)(s.code,{children:"npm update -g saucectl"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(s.p,{children:["Once you've got ",(0,a.jsx)(s.code,{children:"saucectl"})," installed, you can customize your configurations based on your testing objectives. The following sections offer some common use cases."]}),"\n",(0,a.jsx)(s.h3,{id:"associate-your-credentials",children:"Associate Your Credentials"}),"\n",(0,a.jsxs)(s.p,{children:["Your ",(0,a.jsx)(s.code,{children:"SAUCE_USERNAME"})," and ",(0,a.jsx)(s.code,{children:"SAUCE_ACCESS_KEY"})," (available on your ",(0,a.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings"})," page) are required to run tests through ",(0,a.jsx)(s.code,{children:"saucectl"}),". You can pass your credentials to ",(0,a.jsx)(s.code,{children:"saucectl"})," via several different methods:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Use the ",(0,a.jsx)(s.a,{href:"/dev/cli/saucectl/configure/configure",children:(0,a.jsx)(s.code,{children:"saucectl configure"})})," CLI command to create a ",(0,a.jsx)(s.code,{children:"credentials.yml"})," file from which ",(0,a.jsx)(s.code,{children:"saucectl"})," can automatically pull your credentials."]}),"\n",(0,a.jsxs)(s.li,{children:["Set your credentials as ",(0,a.jsx)(s.a,{href:"/basics/environment-variables/",children:"environment variables"})," that ",(0,a.jsx)(s.code,{children:"saucectl"})," can access at runtime."]}),"\n",(0,a.jsxs)(s.li,{children:["Manually enter your credentials as options in the ",(0,a.jsx)(s.code,{children:"saucectl run"})," command."]}),"\n"]}),"\n",(0,a.jsxs)(s.admonition,{title:"Credentials Order of Preference",type:"note",children:[(0,a.jsxs)(s.p,{children:["If you set your credentials using more than one of the methods above, ",(0,a.jsx)(s.code,{children:"saucectl"})," will apply the values in the following order or preference:"]}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Environment Variables"}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"saucectl run"})," command"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"credentials.yml"})," file"]}),"\n"]})]}),"\n",(0,a.jsx)(s.h3,{id:"check-out-your-framework-demo-repo",children:"Check Out Your Framework Demo Repo"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"saucectl"})," provides working samples for each of its supported frameworks, so you can quickly run a sample test, or use the project as a template for your own tests."]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-cypress-example",children:"Cypress Demo"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-playwright-example",children:"Playwright Demo"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-playwright-example/tree/main/examples/cucumber",children:"Cucumber.js with Playwright Demo"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-testcafe-example",children:"TestCafe Demo"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-replay-example",children:"Replay Demo"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-espresso-example",children:"Espresso Demo"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://github.com/saucelabs/saucectl-xcuitest-example",children:"XCUITest Demo"})}),"\n"]}),"\n",(0,a.jsxs)(s.h3,{id:"configure-saucectl-for-your-tests",children:["Configure ",(0,a.jsx)(s.code,{children:"saucectl"})," for your Tests"]}),"\n",(0,a.jsxs)(s.p,{children:["If you already have tests in the framework of your choice, you can use the ",(0,a.jsx)(s.a,{href:"/dev/cli/saucectl/init",children:(0,a.jsx)(s.code,{children:"saucectl init"})})," command to generate a ",(0,a.jsx)(s.code,{children:"config.yml"})," file specifying all the relevant options for your test. See the framework-specific YAML Configuration documentation for a complete reference of all available properties for your framework:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/cypress/yaml",children:"Cypress YAML"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/playwright/yaml",children:"Playwright YAML"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/cucumberjs-playwright/yaml",children:"Cucumber.js with Playwright YAML"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/testcafe/yaml",children:"TestCafe YAML"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/web-apps/automated-testing/replay/yaml",children:"Replay YAML"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/espresso",children:"Espresso YAML"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/mobile-apps/automated-testing/espresso-xcuitest/xcuitest",children:"XCUITest YAML"})}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"run-your-tests",children:"Run Your Tests"}),"\n",(0,a.jsxs)(s.p,{children:["When you are ready to run your tests, you can do so using the ",(0,a.jsx)(s.a,{href:"/dev/cli/saucectl/run",children:(0,a.jsx)(s.code,{children:"saucectl run"})})," command. Typically, if you have set all of your configuration properties in your ",(0,a.jsx)(s.code,{children:"config.yml"})," file, you need only execute the command itself, with no options. However, most of the properties available through the file are also available as runtime options you can set at the command line."]}),"\n",(0,a.jsx)(s.admonition,{title:"Command Line Values Prioritized",type:"note",children:(0,a.jsxs)(s.p,{children:["If you set conflicting configuration values in the ",(0,a.jsx)(s.code,{children:"config.yml"})," file and as ",(0,a.jsx)(s.code,{children:"saucectl run"})," command options, the values in set in the ",(0,a.jsx)(s.code,{children:"run"})," command are applied."]})}),"\n",(0,a.jsxs)(s.p,{children:["The CLI output includes a Results table. The Attempts column in the table displays the number of times a test suite was run, which can be configured with the ",(0,a.jsx)(s.code,{children:"Retries"})," property ",(0,a.jsx)(s.a,{href:"/dev/cli/saucectl/#configure-saucectl-for-your-tests",children:"in your YAML specification file"}),"."]}),"\n",(0,a.jsx)(s.h3,{id:"view-your-test-results-in-sauce-labs",children:"View Your Test Results in Sauce Labs"}),"\n",(0,a.jsxs)(s.p,{children:["After tests complete, ",(0,a.jsx)(s.code,{children:"saucectl"})," uploads test assets such as logs, test results, screenshots, and videos to your ",(0,a.jsx)(s.a,{href:"https://app.saucelabs.com",children:"Sauce Labs account"}),", as long as they are in the ",(0,a.jsx)(s.code,{children:"__assets__"})," directory of your project root. Some frameworks automatically place assets in the correct directory, but other frameworks may require you to manually set the location."]}),"\n",(0,a.jsx)(s.p,{children:"The CLI output includes a link to the job test results page in Sauce Labs:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-html",children:"Open job details page: https://app.saucelabs.com/tests/<job-number>\n"})}),"\n",(0,a.jsx)(s.admonition,{title:"Media Assets Not Viewable in UI",type:"note",children:(0,a.jsxs)(s.p,{children:["Any screenshots and video recorded during the test execution and uploaded to Sauce Labs are not currently viewable in the Sauce Labs UI, but can be accessed and downloaded through the ",(0,a.jsx)(s.a,{href:"/dev/api/jobs/#list-job-assets",children:"Job Assets API endpoints"}),". Alternatively, you can automatically download your test assets locally using the ",(0,a.jsx)(s.a,{href:"/dev/cli/saucectl/init",children:(0,a.jsx)(s.code,{children:"artifacts"})})," parameter in your config file."]})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,s,t)=>{t.d(s,{A:()=>l});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var n=t(74848);function l(e){let{children:s,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:s})}},11470:(e,s,t)=>{t.d(s,{A:()=>w});var a=t(96540),r=t(34164),n=t(23104),l=t(56347),c=t(205),i=t(57485),o=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:t}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:t,attributes:a,default:r}}=e;return{value:s,label:t,attributes:a,default:r}}))}(t);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function p(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:t}=e;const r=(0,l.W6)(),n=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,i.aZ)(n),(0,a.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(r.location.search);s.set(n,e),r.replace({...r.location,search:s.toString()})}),[n,r])]}function x(e){const{defaultValue:s,queryString:t=!1,groupId:r}=e,n=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:n}))),[o,d]=m({queryString:t,groupId:r}),[x,f]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,n]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:r}),b=(()=>{const e=o??x;return p({value:e,tabValues:n})?e:null})();(0,c.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function y(e){let{className:s,block:t,selectedValue:a,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),u=e=>{const s=e.currentTarget,t=i.indexOf(s),r=c[t].value;r!==a&&(o(s),l(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;s=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;s=i[t]??i[i.length-1];break}}s?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},s),children:c.map((e=>{let{value:s,label:t,attributes:n}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>i.push(e),onKeyDown:d,onClick:u,...n,className:(0,r.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":a===s}),children:t??s},s)}))})}function g(e){let{lazy:s,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function v(e){const s=x(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(y,{...s,...e}),(0,j.jsx)(g,{...s,...e})]})}function w(e){const s=(0,f.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(s))}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>c});var a=t(96540);const r={},n=a.createContext(r);function l(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);