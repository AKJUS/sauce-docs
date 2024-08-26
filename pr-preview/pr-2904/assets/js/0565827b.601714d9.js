"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[84508],{11386:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var c=a(74848),s=a(28453),r=a(11470),o=a(19365);const t={id:"docker",title:"Run Sauce Connect in Docker",sidebar_label:"Docker"},l=void 0,i={id:"secure-connections/sauce-connect-5/installation/docker",title:"Run Sauce Connect in Docker",description:"Sauce Connect Proxy container images are available on Docker Hub.",source:"@site/docs/secure-connections/sauce-connect-5/installation/docker.md",sourceDirName:"secure-connections/sauce-connect-5/installation",slug:"/secure-connections/sauce-connect-5/installation/docker",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5/installation/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/installation/docker.md",tags:[],version:"current",lastUpdatedBy:"Micha\u0142 Matczuk",lastUpdatedAt:1721812954e3,frontMatter:{id:"docker",title:"Run Sauce Connect in Docker",sidebar_label:"Docker"},sidebar:"docs",previous:{title:"Windows",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5/installation/windows"},next:{title:"Kubernetes",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5/installation/kubernetes"}},u={},d=[{value:"Pull image",id:"pull-image",level:2},{value:"Configure and run",id:"configure-and-run",level:2},{value:"Configuration file",id:"configuration-file",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Command line arguments",id:"command-line-arguments",level:3},{value:"Mix and match",id:"mix-and-match",level:3},{value:"Logs",id:"logs",level:2},{value:"Health checks",id:"health-checks",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["Sauce Connect Proxy container images are available on ",(0,c.jsx)(n.a,{href:"https://hub.docker.com/r/saucelabs/sauce-connect",children:"Docker Hub"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"pull-image",children:"Pull image"}),"\n",(0,c.jsx)(n.p,{children:"The easiest way to get started with Sauce Connect Proxy in Docker is to pull the latest version of the image from Docker Hub."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker pull saucelabs/sauce-connect\n"})}),"\n",(0,c.jsx)(n.p,{children:"You can also specify a specific version by using a tag."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker pull saucelabs/sauce-connect:<tag>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Check this list of ",(0,c.jsx)(n.a,{href:"https://hub.docker.com/r/saucelabs/sauce-connect/tags?&ordering=&name=5.",children:"supported tags"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"configure-and-run",children:"Configure and run"}),"\n",(0,c.jsx)(n.p,{children:"Sauce Connect Proxy can be configured using:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Configuration file,"}),"\n",(0,c.jsx)(n.li,{children:"Environment variables,"}),"\n",(0,c.jsx)(n.li,{children:"Command line arguments."}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"All of these options are supported in containers, and you can use them interchangeably."}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["At the moment ",(0,c.jsx)(n.code,{children:"api-address"})," may only be specified as environment variable ",(0,c.jsx)(n.code,{children:"SAUCE_API_ADDRESS"}),", and not in the configuration file.\nSee ",(0,c.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/api-server#docker",children:"Sauce Connect Proxy API Server"})," for more information."]})}),"\n",(0,c.jsx)(n.h3,{id:"configuration-file",children:"Configuration file"}),"\n",(0,c.jsxs)(n.p,{children:["To use a configuration file, mount the file to the container at ",(0,c.jsx)(n.code,{children:"/etc/sauce-connect/sauce-connect.yaml"}),"."]}),"\n",(0,c.jsxs)(r.A,{defaultValue:"docker",values:[{label:"docker",value:"docker"},{label:"docker compose",value:"docker compose"}],children:[(0,c.jsx)(o.A,{value:"docker",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run \\\n  -v /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml \\\n  saucelabs/sauce-connect\n"})})}),(0,c.jsx)(o.A,{value:"docker compose",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"services:\n  sc:\n    image: saucelabs/sauce-connect\n    volumes:\n      - /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml:ro\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,c.jsx)(n.p,{children:"You can also configure Sauce Connect Proxy using environment variables.\nThe following example demonstrates how to run the container using environment variables."}),"\n",(0,c.jsxs)(r.A,{defaultValue:"docker",values:[{label:"docker",value:"docker"},{label:"docker compose",value:"docker compose"}],children:[(0,c.jsx)(o.A,{value:"docker",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'docker run \\\n  -e SAUCE_USERNAME="<usename>" \\\n  -e SAUCE_ACCESS_KEY="<access-key>" \\\n  -e SAUCE_REGION="<region>" \\\n  -e SAUCE_TUNNEL_NAME="<tunnel-name>" \\\n  saucelabs/sauce-connect\n'})})}),(0,c.jsx)(o.A,{value:"docker compose",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"services:\n  sc:\n    image: saucelabs/sauce-connect\n    environment:\n      SAUCE_USERNAME: <usename>\n      SAUCE_ACCESS_KEY: <access-key>\n      SAUCE_REGION: <region>\n      SAUCE_TUNNEL_NAME: <tunnel-name>\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"command-line-arguments",children:"Command line arguments"}),"\n",(0,c.jsxs)(n.p,{children:["To pass command line arguments, use the ",(0,c.jsx)(n.code,{children:"sc"})," command followed by the desired arguments."]}),"\n",(0,c.jsxs)(r.A,{defaultValue:"docker",values:[{label:"docker",value:"docker"},{label:"docker compose",value:"docker compose"}],children:[(0,c.jsx)(o.A,{value:"docker",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run saucelabs/sauce-connect run \\\n  --username=<username> \\\n  --access-key=<access-key> \\\n  --region=<region> \\\n  --tunnel-name=<tunnel-name>\n"})})}),(0,c.jsx)(o.A,{value:"docker compose",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"services:\n  sc:\n    image: saucelabs/sauce-connect\n    command: run --username=<username> --access-key=<access-key> --region=<region> --tunnel-name=<tunnel-name>\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"mix-and-match",children:"Mix and match"}),"\n",(0,c.jsx)(n.p,{children:"It is also possible to mix and match the configuration options.\nFor instance, you can use a configuration file for all the common settings and override some of them using environment variables.\nThe order of precedence is as follows:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"Command line arguments"}),"\n",(0,c.jsx)(n.li,{children:"Environment variables"}),"\n",(0,c.jsx)(n.li,{children:"Configuration file"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"The following example demonstrates how to use a configuration file and provide username and access key using environment variables."}),"\n",(0,c.jsxs)(r.A,{defaultValue:"docker",values:[{label:"docker",value:"docker"},{label:"docker compose",value:"docker compose"}],children:[(0,c.jsx)(o.A,{value:"docker",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'docker run \\\n  -e SAUCE_USERNAME="<usename>" \\\n  -e SAUCE_ACCESS_KEY="<access-key>" \\\n  -v /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml \\\n  saucelabs/sauce-connect\n'})})}),(0,c.jsx)(o.A,{value:"docker compose",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"services:\n  sc:\n    image: saucelabs/sauce-connect\n    environment:\n      SAUCE_USERNAME: <usename>\n      SAUCE_ACCESS_KEY: <access-key>\n    volumes:\n      - /path/to/config.yaml:/etc/sauce-connect/sauce-connect.yaml:ro\n"})})})]}),"\n",(0,c.jsx)(n.h2,{id:"logs",children:"Logs"}),"\n",(0,c.jsxs)(n.p,{children:["Logs are handled automatically by Docker, and you can use the ",(0,c.jsx)(n.code,{children:"docker logs"})," command to access them.\nTo access logs:"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Find the container ID."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Use the container ID to get the logs."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker logs <container-id>\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"health-checks",children:"Health checks"}),"\n",(0,c.jsxs)(n.p,{children:["The docker container has a built-in health check that can be used to determine if the tunnel is ready to accept jobs.\nYou should see the container status as ",(0,c.jsx)(n.code,{children:"healthy"})," in ",(0,c.jsx)(n.code,{children:"docker ps"})," when the tunnel is ready.\nSee ",(0,c.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/readiness-checks",children:"Sauce Connect Proxy Readiness Checks"})," for more information."]}),"\n",(0,c.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/readiness-checks",children:"Sauce Connect Proxy Readiness Checks"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/network/host/",children:"Use host networking in Docker"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/desktop/mac/networking/#use-cases-and-workarounds",children:"Connect from a container to a service on the macOS host"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://docs.docker.com/compose/compose-file/compose-file-v3/",children:"Docker Compose File"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var c=a(18215);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,c.A)(s.tabItem,o),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var c=a(96540),s=a(18215),r=a(23104),o=a(56347),t=a(205),l=a(57485),i=a(31682),u=a(89466);function d(e){return c.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,c.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,c.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:c,default:s}}=e;return{value:n,label:a,attributes:c,default:s}}))}(a);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(r),(0,c.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=h(e),[o,l]=(0,c.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const c=a.find((e=>e.default))??a[0];if(!c)throw new Error("Unexpected error: 0 tabValues");return c.value}({defaultValue:n,tabValues:r}))),[i,d]=p({queryString:a,groupId:s}),[f,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(a);return[s,(0,c.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),g=(()=>{const e=i??f;return m({value:e,tabValues:r})?e:null})();(0,t.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,c.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function b(e){let{className:n,block:a,selectedValue:c,selectValue:o,tabValues:t}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.a_)(),u=e=>{const n=e.currentTarget,a=l.indexOf(n),s=t[a].value;s!==c&&(i(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:t.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":c===n}),children:a??n},n)}))})}function k(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,c.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,c.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(k,{...e,...n})]})}function y(e){const n=(0,v.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>t});var c=a(96540);const s={},r=c.createContext(s);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);