"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42671],{16874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(74848),s=r(28453);r(11470),r(19365),r(86025);const a={id:"saucelabs-private-registry",title:"SauceLabs Container Registry",sidebar_label:"SauceLabs Container Registry"},o=void 0,i={id:"orchestrate/saucelabs-private-registry",title:"SauceLabs Container Registry",description:"If you don't want to use Docker Hub or your company-provided docker registry, there is an option to store your container images",source:"@site/docs/orchestrate/saucelabs-private-registry.md",sourceDirName:"orchestrate",slug:"/orchestrate/saucelabs-private-registry",permalink:"/sauce-docs/pr-preview/pr-2904/orchestrate/saucelabs-private-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/saucelabs-private-registry.md",tags:[],version:"current",lastUpdatedBy:"Maciej Plonski",lastUpdatedAt:1710166619e3,frontMatter:{id:"saucelabs-private-registry",title:"SauceLabs Container Registry",sidebar_label:"SauceLabs Container Registry"},sidebar:"docs",previous:{title:"Using Sauce Connect",permalink:"/sauce-docs/pr-preview/pr-2904/orchestrate/sauce-connect"},next:{title:"FAQ",permalink:"/sauce-docs/pr-preview/pr-2904/orchestrate/faq"}},c={},l=[{value:"How do I get access to SauceLabs Container Registry?",id:"how-do-i-get-access-to-saucelabs-container-registry",level:2},{value:"How do I authenticate to SauceLabs Container Registry?",id:"how-do-i-authenticate-to-saucelabs-container-registry",level:2},{value:"How do I access SauceLabs Container Registry using <code>saucectl</code>?",id:"how-do-i-access-saucelabs-container-registry-using-saucectl",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Pushing images",id:"pushing-images",level:3},{value:"Starting a test",id:"starting-a-test",level:3},{value:"How do I access SauceLabs Container Registry programmatically?",id:"how-do-i-access-saucelabs-container-registry-programmatically",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Setting environment variables to be used by docker",id:"setting-environment-variables-to-be-used-by-docker",level:3},{value:"Using short-lived token to log in",id:"using-short-lived-token-to-log-in",level:3},{value:"Working with SauceLabs Container Registry",id:"working-with-saucelabs-container-registry",level:3},{value:"How many tokens can I generate?",id:"how-many-tokens-can-i-generate",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"If you don't want to use Docker Hub or your company-provided docker registry, there is an option to store your container images\nwithin SauceLabs infrastructure."}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-get-access-to-saucelabs-container-registry",children:"How do I get access to SauceLabs Container Registry?"}),"\n",(0,n.jsx)(t.p,{children:"In order to join SauceLabs Container Registry, please contact SauceLabs customer support."}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-authenticate-to-saucelabs-container-registry",children:"How do I authenticate to SauceLabs Container Registry?"}),"\n",(0,n.jsx)(t.p,{children:"In order to provide the most secure way to access your images, we use short-lived tokens to authenticate you\nto SauceLabs Container Registry."}),"\n",(0,n.jsx)(t.p,{children:"There are two ways of interacting with our container registry:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["using ",(0,n.jsx)(t.code,{children:"saucectl"})," - for the most common use-cases, it automatically injects short-lived tokens"]}),"\n",(0,n.jsx)(t.li,{children:"programmatically - for the more demanding use-cases, you must retrieve short-lived token yourself"}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"how-do-i-access-saucelabs-container-registry-using-saucectl",children:["How do I access SauceLabs Container Registry using ",(0,n.jsx)(t.code,{children:"saucectl"}),"?"]}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Export ",(0,n.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,n.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," environment variables (",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2904/dev/api#authentication",children:"learn more about authentication"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure you have the following tools installed:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"docker"})," (or other tool for pushing container images that exposes docker socket)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Find out what's your container registry url. For this example let's assume it is ",(0,n.jsx)(t.code,{children:"registry.example.com/your-private-registry"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"pushing-images",children:"Pushing images"}),"\n",(0,n.jsxs)(t.p,{children:["To push Docker images, consider using the ",(0,n.jsx)(t.code,{children:"saucectl docker push"})," CLI command. This command simplifies the process by handling\nboth docker login and docker push operations, eliminating the need for manual authentication."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker build -t registry.example.com/your-private-registry/image-name:tag .\nsaucectl docker push registry.example.com/your-private-registry/image-name:tag\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For additional details, please visit the ",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/docker/push",children:"saucectl docker push documentation"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Currently, this method is limited to pushing Docker images only."})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Ensure that your Docker image is prebuilt before using this command."})}),"\n",(0,n.jsx)(t.h3,{id:"starting-a-test",children:"Starting a test"}),"\n",(0,n.jsx)(t.p,{children:"If you are using SauceLabs Container Registry, you may start a test without providing credentials to your container\nregistry. However, you must follow two rules:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Account used to start a test must be allowed to generate a short-lived token for the registry you want to use."}),"\n",(0,n.jsxs)(t.li,{children:["You must not provide ",(0,n.jsx)(t.code,{children:"imagePullAuth"})," in the configuration file for the container we should authenticate."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If both of those conditions are met, we're going to automatically authenticate your test execution to pull container images.\nThere's no need to change the way how you execute ",(0,n.jsx)(t.code,{children:"saucectl"})," to start a test - it all happens out of the box."]}),"\n",(0,n.jsx)(t.p,{children:"Example command to start a test:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"saucectl run\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For additional details, please visit the ",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/run",children:"saucectl run documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"how-do-i-access-saucelabs-container-registry-programmatically",children:"How do I access SauceLabs Container Registry programmatically?"}),"\n",(0,n.jsx)(t.p,{children:"In order to access SauceLabs Container Registry programmatically, you will need a username and a short-lived generated token\nto be used as a password. The token has a time-to-live of 30 minutes."}),"\n",(0,n.jsxs)(t.p,{children:["To generate a token, use ",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2904/dev/api/orchestrate",children:"Sauce Orchestrate API"})," or follow a script below."]}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"This sample script is created for *nix systems."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Export ",(0,n.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,n.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," environment variables (",(0,n.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2904/dev/api#authentication",children:"learn more about authentication"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure you have the following tools installed:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"docker"})," (or other tool for pushing container images)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jq"})," (or other tool for parsing json)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"curl"})," (or other tool for making http requests)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Find out what's your container registry url."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setting-environment-variables-to-be-used-by-docker",children:"Setting environment variables to be used by docker"}),"\n",(0,n.jsx)(t.p,{children:"The code below uses url for US West datacenter. Make sure you use url for the datacenter matching your\nregistry url. If you're not sure which one to use, contact customer support."}),"\n",(0,n.jsx)(t.p,{children:"Export useful environment variables:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'export SAUCE_USERNAME="your-username"\nexport SAUCE_ACCESS_KEY="your-access-key"\nexport SAUCE_REGISTRY_URL="your-saucelabs-registry-url"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Retrieve short-lived token:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'SAUCE_SHORT_LIVED_TOKEN=`curl --silent --user "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \\\n  --header "Content-Type: application/json" --data "{\\"registry_url\\": \\"$SAUCE_REGISTRY_URL\\"}" \\\n  --request POST \'https://api.us-west-1.saucelabs.com/v1alpha1/hosted/container-registry/authorization-token\'`\nexport DOCKER_USERNAME=`echo $SAUCE_SHORT_LIVED_TOKEN | jq -r .username`\nexport DOCKER_PASSWORD=`echo $SAUCE_SHORT_LIVED_TOKEN | jq -r .password`\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can always check when your token expires by running this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"echo $SAUCE_SHORT_LIVED_TOKEN | jq -r .expires_at\n"})}),"\n",(0,n.jsx)(t.h3,{id:"using-short-lived-token-to-log-in",children:"Using short-lived token to log in"}),"\n",(0,n.jsxs)(t.p,{children:["Before running this step, make sure you know what's the address of your container registry. For this example\nlet's assume it is ",(0,n.jsx)(t.code,{children:"registry.example.com/your-private-registry"}),". Now you need to extract the domain name from it,\nand use it together with created environment variables to login to your registry:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin registry.example.com\n"})}),"\n",(0,n.jsx)(t.h3,{id:"working-with-saucelabs-container-registry",children:"Working with SauceLabs Container Registry"}),"\n",(0,n.jsx)(t.p,{children:"Once you're logged in, you can run any docker commands related to the registry as you'd normally do."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If you're not able to log in to docker, your token may have already expired - it's valid only for 30 minutes.\nRun the first part of the script and try to log in again."})}),"\n",(0,n.jsx)(t.h3,{id:"how-many-tokens-can-i-generate",children:"How many tokens can I generate?"}),"\n",(0,n.jsx)(t.p,{children:"There's no limit to how many tokens can be generated. If you generate a new one, the old one will still be valid\ntill it's expiration time."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(18215),a=r(23104),o=r(56347),i=r(205),c=r(57485),l=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,d]=g({queryString:r,groupId:s}),[m,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),y(e)}),[d,y,a]),tabValues:a}}var y=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=i[r].value;s!==n&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function f(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(f,{...e,...t})]})}function w(e){const t=(0,y.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);