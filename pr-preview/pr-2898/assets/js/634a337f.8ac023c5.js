"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[98434],{14399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(74848),i=n(28453);n(11470),n(19365),n(86025);const s={id:"gitlab",title:"GitLab Integration",sidebar_label:"GitLab",description:"Use GitLab with Sauce Labs to scale up your CI/CD testing process",keywords:["gitlab","ci/cd","automated-testing","how-to"]},r=void 0,o={id:"basics/integrations/gitlab",title:"GitLab Integration",description:"Use GitLab with Sauce Labs to scale up your CI/CD testing process",source:"@site/docs/basics/integrations/gitlab.md",sourceDirName:"basics/integrations",slug:"/basics/integrations/gitlab",permalink:"/sauce-docs/pr-preview/pr-2898/basics/integrations/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/integrations/gitlab.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1688681034e3,frontMatter:{id:"gitlab",title:"GitLab Integration",sidebar_label:"GitLab",description:"Use GitLab with Sauce Labs to scale up your CI/CD testing process",keywords:["gitlab","ci/cd","automated-testing","how-to"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2898/basics/integrations-overview"},next:{title:"Azure",permalink:"/sauce-docs/pr-preview/pr-2898/basics/integrations/azure"}},l={},c=[{value:"GitLab Setup and Configuration - Sauce Labs",id:"gitlab-setup-and-configuration---sauce-labs",level:2},{value:"How Sauce Labs fits in with GitLab",id:"how-sauce-labs-fits-in-with-gitlab",level:3},{value:"The .yml File",id:"the-yml-file",level:3},{value:"Sauce Connect and GitLab",id:"sauce-connect-and-gitlab",level:3},{value:"Continuously Running HA Sauce Connect Tunnel",id:"continuously-running-ha-sauce-connect-tunnel",level:4},{value:"Ephemeral Tunnel, Started in Every Build",id:"ephemeral-tunnel-started-in-every-build",level:4},{value:"Additional Resources",id:"additional-resources",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"gitlab-setup-and-configuration---sauce-labs",children:"GitLab Setup and Configuration - Sauce Labs"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://about.gitlab.com/",children:"GitLab"})," is a collaboration platform that allows you to build a Continuous Integration (CI) pipeline as a series of steps in a simple configuration file. Steps can include things like launching a containerized test environment, building your software, starting your tests using your preferred test runner, and deploying to production."]}),"\n",(0,a.jsx)(t.p,{children:"This high-level guide shows how to configure GitLab\u2019s Continuous Integration Pipeline to execute tests on Sauce Labs."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"How Sauce Labs fits in with GitLab"}),"\n",(0,a.jsx)(t.li,{children:"Sauce Connect and GitLab"}),"\n",(0,a.jsx)(t.li,{children:"Additional Resources"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"how-sauce-labs-fits-in-with-gitlab",children:"How Sauce Labs fits in with GitLab"}),"\n",(0,a.jsx)(t.p,{children:"If your tests are running locally they may currently point to your internal Selenium Grid or local simulators. When you configure your tests to run on Sauce Labs, you will change your tests to point to a Sauce Labs data center and our VMs/Real Devices/Emulators/Simulators."}),"\n",(0,a.jsx)(t.p,{children:"The way you set up your GitLab pipeline will determine how you need to initiate the Sauce Connect Proxy\u2013covered in the next section."}),"\n",(0,a.jsx)(t.p,{children:"CI/CD systems rely heavily on repeatable steps and phases. This high level of abstraction and customization makes the tool adaptable to your business needs, in that you can mix/match/repeat complex steps with a single line of config. Sauce Labs tests may be included in one or more of those steps."}),"\n",(0,a.jsx)(t.h3,{id:"the-yml-file",children:"The .yml File"}),"\n",(0,a.jsx)(t.p,{children:"GitLab uses .yml for configuration. Building a GitLab .yml file to set up your pipeline is easy! GitLab allows you to configure your environment the same way you would to run a shell script. For ultimate flexibility, GitLab allows you to launch docker images as \u201cservices\u201d. This gives you ephemeral and/or shared APIs or other services to be available at any time in the build process, which can be created or torn down at a moment\u2019s notice."}),"\n",(0,a.jsxs)(t.p,{children:["In the example below (adapted from ",(0,a.jsx)(t.a,{href:"https://gitlab.com/gitlab-org/gitlab/-/blob/e042b023f461be91c62d95dfd1de4547e1a8c572/doc/ci/yaml/README.md",children:"here"}),", step 3 runs our end-to-end suite. Job names are meant to be descriptive, so we\u2019ve named it ",(0,a.jsx)(t.code,{children:"e2e-Sauce"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="gitlab.yml"',children:"stages:\n - build\n - test\n - deploy\njob 0:\n stage: .pre\n script:make something useful before build stage\njob 1:\n stage: build\n script: make build dependencies\njob 2:\n stage: build\n script: make build artifacts\n\n//job 3:\ne2e-sauce:\n stage: test\n script: run-sauce-tests\njob 4:\n stage: deploy\n script: deploy-something\njob 5:\n stage: post\n script: make something useful at the end of the pipeline\n"})}),"\n",(0,a.jsx)(t.h3,{id:"sauce-connect-and-gitlab",children:"Sauce Connect and GitLab"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy"}),' is an HTTP proxy server that opens a secure "tunnel" connection for testing between a Sauce Labs virtual machine or real device and a website or mobile app hosted in your local environment (e.g. behind a corporate firewall). It gives Sauce Labs secure access to your application or website.']}),"\n",(0,a.jsx)(t.p,{children:"Sauce Connect can be downloaded and managed in a few ways, some of which lend themselves better to GitLab, but all are do-able."}),"\n",(0,a.jsx)(t.h4,{id:"continuously-running-ha-sauce-connect-tunnel",children:"Continuously Running HA Sauce Connect Tunnel"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"This first method is recommended for those with a supportive DevOps team who is willing to host and maintain this image."})}),"\n",(0,a.jsxs)(t.p,{children:["Users download the Sauce Connect Binary and run it as a service on a dedicated machine (VM/server) that is available 24/7. This instance of Sauce Connect is shared by the organization and utilized by the tests running in the CI pipeline. This is the recommended method of running the Sauce Connect Proxy, which we call \u201c",(0,a.jsx)(t.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability",children:"High Availability"}),"\u201d."]}),"\n",(0,a.jsx)(t.h4,{id:"ephemeral-tunnel-started-in-every-build",children:"Ephemeral Tunnel, Started in Every Build"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Recommended for those experienced with shell scripting"})}),"\n",(0,a.jsx)(t.p,{children:"Using bash or equivalent within the GitLab .yml file, users can download Sauce Connect to a container and run it as a set up step in their CI. Below is an example of what this might look like."}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["This script assumes that the environment variables SAUCE_USERNAME and SAUCE_ACCESS_KEY ",(0,a.jsx)(t.a,{href:"/basics/environment-variables/",children:"have been set and are available to the script"}),"."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:'title="gitlab-sc.yml"',children:"script:\n- curl https://saucelabs.com/downloads/sc-4.9.1-linux.tar.gz | tar -xz\n- chmod 777 -R ./sc-4.9.1-linux\n- PATH=./sc-4.9.1-linux/bin:$PATH\n- sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i \u201cgitlabTunnel\u201d -v -s &\n- sleep 50\n"})}),"\n",(0,a.jsx)(t.h3,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/basics/data-center-endpoints/",children:"Sauce Labs Data Center Endpoints"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview",children:"Sauce Connect Proxy Overview"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/basics/integrations-overview/",children:"Sauce Labs Integrations"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/dev/cli/saucectl/usage/ci/gitlab/",children:"saucectl and GitLab Integration"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(18215);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(96540),i=n(18215),s=n(23104),r=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:i}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),f=(()=>{const e=c??m;return b({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==a&&(c(t),r(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);