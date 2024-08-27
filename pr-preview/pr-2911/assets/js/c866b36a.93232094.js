"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94964],{33294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(74848),s=r(28453);r(11470),r(19365),r(86025);const a={id:"getting-started",title:"Getting Started with Orchestrate",sidebar_label:"Getting Started with Orchestrate"},o=void 0,i={id:"orchestrate/getting-started",title:"Getting Started with Orchestrate",description:"Paid Add-On",source:"@site/docs/orchestrate/getting-started.md",sourceDirName:"orchestrate",slug:"/orchestrate/getting-started",permalink:"/sauce-docs/pr-preview/pr-2911/orchestrate/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"getting-started",title:"Getting Started with Orchestrate",sidebar_label:"Getting Started with Orchestrate"},sidebar:"docs",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2911/orchestrate"},next:{title:"Playwright Quickstart",permalink:"/sauce-docs/pr-preview/pr-2911/orchestrate/quickstart/playwright"}},c={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Can I try it without creating my own project?",id:"can-i-try-it-without-creating-my-own-project",level:2},{value:"1. Create a Container Image of Your Tests",id:"1-create-a-container-image-of-your-tests",level:2},{value:"2. Push Image to a Docker Registry",id:"2-push-image-to-a-docker-registry",level:2},{value:"3. Configure saucectl",id:"3-configure-saucectl",level:2},{value:"4. Run Tests Using saucectl",id:"4-run-tests-using-saucectl",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:(0,n.jsx)("span",{className:"sauceGreen",children:"Paid Add-On"})}),"\n",(0,n.jsx)(t.p,{children:"This page outlines how to run your browser and mobile tests in Sauce Orchestrate."}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Make sure your organization is enrolled to use Sauce Orchestrate, otherwise you will encounter an error. If you are not enrolled, contact your Customer Success Manager or Support at ",(0,n.jsx)(t.a,{href:"mailto:help@saucelabs.com",children:"help@saucelabs.com"}),"."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"saucectl"})," client installed. For more information, see ",(0,n.jsx)(t.a,{href:"/dev/cli/saucectl",children:"Using the saucectl CLI"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["A container image containing your tests. More information about building container images is found below and in ",(0,n.jsx)(t.a,{href:"/orchestrate/building-images",children:"Building Images"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Access to a Docker registry. Our examples will use ",(0,n.jsx)(t.a,{href:"https://hub.docker.com",children:"DockerHub"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsx)(t.p,{children:"Sauce Orchestrate utilizes container technology to package and run your tests in the Sauce Labs cloud."}),"\n",(0,n.jsx)(t.p,{children:"To use Sauce Orchestrate:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Package your test scripts and dependencies in a container Image. For more information, see ",(0,n.jsx)(t.a,{href:"#1-create-a-container-image-of-your-tests",children:"Create a Container Image of Your Tests"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Push that image to a remote registry accessible by Sauce Labs. For more information, see ",(0,n.jsx)(t.a,{href:"#2-push-image-to-a-docker-registry",children:"Push Image to a Docker Registry"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Configure ",(0,n.jsx)(t.code,{children:"saucectl"})," to run your image. For more information, see ",(0,n.jsx)(t.a,{href:"#3-configure-saucectl",children:"Configure saucectl"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Use ",(0,n.jsx)(t.code,{children:"saucectl"})," to run your tests in Sauce Orchestrate. For more information, see ",(0,n.jsx)(t.a,{href:"#4-run-tests-using-saucectl",children:"Run Tests Using saucectl"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We will be using the ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/demo-java",children:"Sauce Labs Demo Java project"})," to help walk through the steps."]}),"\n",(0,n.jsx)(t.h2,{id:"can-i-try-it-without-creating-my-own-project",children:"Can I try it without creating my own project?"}),"\n",(0,n.jsxs)(t.p,{children:["In order to make it easier to try Sauce Orchestrate on your own, we've prepared ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-imagerunner-example",children:"few examples for most popular languages\nand frameworks"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"1-create-a-container-image-of-your-tests",children:"1. Create a Container Image of Your Tests"}),"\n",(0,n.jsxs)(t.p,{children:["If you are already familiar with creating container images then there is nothing special about doing it for Sauce Orchestrate. However, if you are unfamiliar or would like a detailed walkthrough, see ",(0,n.jsx)(t.a,{href:"/orchestrate/building-images/",children:"Building Docker Images"})," page for a comprehensive guide on how to build an image."]}),"\n",(0,n.jsx)(t.p,{children:"Within the demo-java project you will find a sample Dockerfile, which is a file used to define the contents of your image:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:"showLineNumbers",children:'# specify the base image to match your environment requirements\nFROM maven:3.6.3-jdk-8\nARG USER_HOME_DIR="/root"\nWORKDIR /workdir\n\n# copy the project code\nCOPY . .\n\n# install necessary dependencies\nENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"\nRUN mvn clean test; exit 0\n'})}),"\n",(0,n.jsx)(t.p,{children:"With this Dockerfile created you can now tell Docker to build it."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"# execute this command within the root of your project\ndocker build -t [docker_user]/demo-java-orchestrate-tutorial:0.0.1 .\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You will need to replace ",(0,n.jsx)(t.code,{children:"[docker_user]"})," with your registry username."]})}),"\n",(0,n.jsx)(t.h2,{id:"2-push-image-to-a-docker-registry",children:"2. Push Image to a Docker Registry"}),"\n",(0,n.jsxs)(t.p,{children:["In order for Sauce Labs to access your container image it must be accessible in a Docker registry. There are many available registries to choose from and Sauce Labs supports any registry using the standard Docker API. For this example we will use ",(0,n.jsx)(t.a,{href:"https://hub.docker.com",children:"DockerHub"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This example pushes the image to a public registry for simplicity. We advise you use a private registry for any proprietary code."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"docker push [docker_user]/demo-java-orchestrate-tutorial:0.0.1\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You will need to replace ",(0,n.jsx)(t.code,{children:"[docker_user]"})," with your registry username."]})}),"\n",(0,n.jsx)(t.h2,{id:"3-configure-saucectl",children:"3. Configure saucectl"}),"\n",(0,n.jsxs)(t.p,{children:["To run your tests on Sauce Orchestrate using the image you just created, you will use our developer friendly CLI tool called ",(0,n.jsx)(t.code,{children:"saucectl"}),". If you do not have ",(0,n.jsx)(t.code,{children:"saucectl"})," installed, see ",(0,n.jsx)(t.a,{href:"/dev/cli/saucectl",children:"Using the saucectl CLI"}),". ",(0,n.jsx)(t.code,{children:"saucectl"})," version 0.136 or later is required to run Sauce Orchestrate."]}),"\n",(0,n.jsxs)(t.p,{children:["In order for ",(0,n.jsx)(t.code,{children:"saucectl"})," to understand how to run your project you must create a file called ",(0,n.jsx)(t.code,{children:"config.yml"})," in ",(0,n.jsx)(t.code,{children:".sauce"})," located at the root of your project. The sample configuration for the demo Java project is located below."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:"showLineNumbers",children:'apiVersion: v1alpha\nkind: imagerunner\nsauce:\n  region: us-west-1\nsuites:\n- name: Desktop Tests\n  workload: webdriver\n  image: [docker_user]/demo-java-orchestrate-tutorial:0.0.1\n  # the command to run your tests\n  entrypoint: mvn -o test -pl best-practice -Dtest=DesktopTests\n  artifacts:\n    - "/workdir/best-practice/target/surefire-reports/*"\n\nartifacts:\n  download:\n    when: always\n    match:\n      - "*"\n    directory: ./artifacts\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The most important configuration options to take note of are the ",(0,n.jsx)(t.code,{children:"image"})," and ",(0,n.jsx)(t.code,{children:"entrypoint"}),". These tell Sauce Orchestrate the location of your image and which command should be used to run your tests respectively. For more information about the ",(0,n.jsx)(t.code,{children:"saucectl"})," configuration options see ",(0,n.jsx)(t.a,{href:"/orchestrate/saucectl-configuration/",children:"saucectl Configuration"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"4-run-tests-using-saucectl",children:"4. Run Tests Using saucectl"}),"\n",(0,n.jsx)(t.p,{children:"Run the following command at the root of your project:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"  saucectl run\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You should then see ",(0,n.jsx)(t.code,{children:"saucectl"})," output the status of your job in the command prompt. During the running of your tests you will see some important log statements."]}),"\n",(0,n.jsxs)(t.p,{children:["You will see information about the version of ",(0,n.jsx)(t.code,{children:"saucectl"}),", the name of the image being run, the unique identifier (",(0,n.jsx)(t.code,{children:"runID"}),") for this job, and the status update (",(0,n.jsx)(t.code,{children:"Created"})," -> ",(0,n.jsx)(t.code,{children:"Running"}),")."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'Running version 0.136.0\n09:46:40 INF Launching workers. concurrency=1\n09:46:40 INF Starting suite. image=mikedonovan1987/sample-app-web-orchestrate:0.0.2 suite="Demo App Tests"\n09:46:44 INF Started suite. image=mikedonovan1987/sample-app-web-orchestrate:0.0.2 runID=19595a78706f411abe3dad4dc7608d5f suite="Demo App Tests"\n09:46:50 INF Suites in progress: 1\n09:47:00 INF Suites in progress: 1\n09:47:00 INF Status change. new=Running old=Created runID=19595a78706f411abe3dad4dc7608d5f\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"saucectl"})," will wait for your tests to complete. You can check the Sauce Labs UI to see running tests as well. While your tests are running ",(0,n.jsx)(t.code,{children:"saucectl"})," will output the following every couple of seconds"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"09:47:30 INF Suites in progress: 1\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After your entrypoint command has finished ",(0,n.jsx)(t.code,{children:"saucectl"})," will output the command logs from Sauce Orchestrate and download any artifacts from the container that you configured. The following is an example output."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"...\n[INFO] Results:\n[INFO]\n[INFO] Tests run: 12, Failures: 0, Errors: 0, Skipped: 0\n[INFO]\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  40.937 s\n[INFO] Finished at: 2023-04-24T13:59:36Z\n[INFO] ------------------------------------------------------------------------\n\n### CONSOLE END ###\n10:00:00 INF Downloading artifacts archive\n10:00:02 INF Suites in progress: 0\n\n       Name                              Duration    Status       Attempts\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  \u2714    Desktop Tests                         1m3s    Succeeded           1\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  \u2714    All suites have passed               1m20s\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Depending on the return code of your entrypoint command ",(0,n.jsx)(t.code,{children:"saucectl"})," will finish with either a status ",(0,n.jsx)(t.code,{children:"Succeeded"})," or ",(0,n.jsx)(t.code,{children:"Failure"}),". Your test framework most likely already handles this for you but ",(0,n.jsx)(t.code,{children:"saucectl"})," will fail if your entrypoint command returns with a non-zero exit code."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),s=r(34164),a=r(23104),o=r(56347),i=r(205),c=r(57485),l=r(31682),u=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,d]=m({queryString:r,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=l??g;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=i[r].value;s!==n&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function b(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(b,{...t,...e})]})}function v(e){const t=(0,f.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);