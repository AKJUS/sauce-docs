"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[51921],{37626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>a,metadata:()=>u,toc:()=>h});var r=t(74848),s=t(28453),o=t(86025),i=t(11470),c=t(19365);const a={id:"quickstart",title:"Sauce Connect Proxy 5 Quickstart Guide",sidebar_label:"Quickstart"},l=void 0,u={id:"secure-connections/sauce-connect-5/quickstart",title:"Sauce Connect Proxy 5 Quickstart Guide",description:"Sauce Connect Proxy is required to run a test on an app or website located behind a firewall. Get up and running with a basic Sauce Connect Proxy tunnel in minutes using the steps below.",source:"@site/docs/secure-connections/sauce-connect-5/quickstart.md",sourceDirName:"secure-connections/sauce-connect-5",slug:"/secure-connections/sauce-connect-5/quickstart",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"quickstart",title:"Sauce Connect Proxy 5 Quickstart Guide",sidebar_label:"Quickstart"},sidebar:"docs",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5"},next:{title:"Migrating",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5/migrating"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Installing Sauce Connect Proxy",id:"installing-sauce-connect-proxy",level:2},{value:"Starting Sauce Connect Proxy",id:"starting-sauce-connect-proxy",level:2},{value:"Verify Connection",id:"verify-connection",level:2},{value:"Run Test",id:"run-test",level:2},{value:"Stop Tunnel",id:"stop-tunnel",level:2},{value:"More Information",id:"more-information",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Sauce Connect Proxy is required to run a test on an app or website located behind a firewall. Get up and running with a basic Sauce Connect Proxy tunnel in minutes using the steps below."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["The Sauce Connect Proxy version 5 major release introduces CLI changes. Please refer to ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/",children:"Sauce Connect Proxy 5 CLI Reference"})," for details.\nAn ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/legacy/",children:(0,r.jsx)(n.code,{children:"sc legacy"})})," command is introduced to help users transition from version 4.x.x to 5.0.x."]})}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Sauce Labs account (",(0,r.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsx)(n.li,{children:"If you haven't already, make sure you can access the website or mobile app that you'll be testing from the Sauce Connect Proxy host."}),"\n",(0,r.jsxs)(n.li,{children:["Check to see if you have any ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/proxies/",children:"proxies"})," that are required to access the public Internet."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-sauce-connect-proxy",children:"Installing Sauce Connect Proxy"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/installation/",children:"installation instructions"})]}),"\n",(0,r.jsx)(n.h2,{id:"starting-sauce-connect-proxy",children:"Starting Sauce Connect Proxy"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Make sure that the directory containing the ",(0,r.jsx)(n.code,{children:"sc"})," binary (",(0,r.jsx)(n.code,{children:"sc.exe"})," for Windows) is in the ",(0,r.jsx)(n.code,{children:"$PATH"}),". Otherwise, you will have to specify the path to the binary in the command line, ",(0,r.jsx)(n.code,{children:"/path/to/sc"})]}),"\n",(0,r.jsx)(n.li,{children:"Log in to Sauce Labs."}),"\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.a,{href:"https://app.saucelabs.com/tunnels",children:(0,r.jsx)(n.strong,{children:"Tunnel Proxies"})})," page.",(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:(0,o.A)("img/sauce-connect/tunnelsPage.png"),alt:"Sauce Connect Proxy Tunnels page",width:"400"})]}),"\n",(0,r.jsxs)(n.li,{children:["Under step 2, ",(0,r.jsx)(n.strong,{children:"Authenticate & connect"}),", copy the code snippet.",(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:(0,o.A)("img/sauce-connect/configureAuth.png"),alt:"Sauce Connect Proxy Tunnels page snippet",width:"300"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"What is this?"}),"\nThis snippet contains your authentication credentials (username and access key), selects a Sauce Labs Data Center, and applies a name to your tunnel. Optionally, you can rename your tunnel by replacing the value after the ",(0,r.jsx)("code",{children:"--tunnel-name"})," flag."]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Paste the snippet into your terminal and run it. This will launch the tunnel."}),"\n",(0,r.jsxs)(n.li,{children:["Follow the steps in the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/overview/#running-sauce-connect-proxy",children:"setup instructions"})," to start Sauce Connect Proxy 5 using the username and the access key obtained in the previous step."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"verify-connection",children:"Verify Connection"}),"\n",(0,r.jsx)(n.p,{children:"To confirm your tunnel is up, look for the confirmation message in your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Sauce Connect is up, you may start your tests\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you can check your list of active tunnels on the ",(0,r.jsx)(n.strong,{children:"Tunnel Proxies"})," page:",(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:(0,o.A)("img/sauce-connect/tunnelsuccess-ui.png"),alt:"Sauce Connect Tunnel Success",width:"500"})]}),"\n",(0,r.jsx)(n.h2,{id:"run-test",children:"Run Test"}),"\n",(0,r.jsx)(n.p,{children:"With your tunnel up and running, try doing a Live  local test."}),"\n",(0,r.jsxs)(i.A,{defaultValue:"Cross-Browser",values:[{label:"Cross-Browser",value:"Cross-Browser"},{label:"Mobile Browser",value:"Mobile Browser"},{label:"Mobile App",value:"Mobile App"}],children:[(0,r.jsx)(c.A,{value:"Cross-Browser",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"From your terminal or IDE, launch a local instance of your website as you normally would."}),"\n",(0,r.jsxs)(n.li,{children:["From Sauce Labs, click ",(0,r.jsx)(n.strong,{children:"Live"})," > ",(0,r.jsx)(n.strong,{children:"Cross Browser"})," > ",(0,r.jsx)(n.strong,{children:"Desktop"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"URL"})," field, enter your website's local URL (e.g., ",(0,r.jsx)(n.code,{children:"http://localhost:3000"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["From the ",(0,r.jsx)(n.strong,{children:"Sauce Connect Proxy"})," dropdown, select your tunnel name."]}),"\n",(0,r.jsx)(n.li,{children:"Select your desired browser configuration."}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Start Test"})," to launch your live test in Sauce Labs."]}),"\n"]})}),(0,r.jsx)(c.A,{value:"Mobile Browser",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"From your terminal or IDE, launch a local instance of your site as you normally would."}),"\n",(0,r.jsxs)(n.li,{children:["From Sauce Labs, click ",(0,r.jsx)(n.strong,{children:"Live"})," > ",(0,r.jsx)(n.strong,{children:"Cross Browser"})," > ",(0,r.jsx)(n.strong,{children:"Mobile Virtual"})," or ",(0,r.jsx)(n.strong,{children:"Mobile Real"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Enter the local ",(0,r.jsx)(n.strong,{children:"URL"})," for your local website under test (e.g., ",(0,r.jsx)(n.code,{children:"http://localhost:3000"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["From the ",(0,r.jsx)(n.strong,{children:"Sauce Connect Proxy"})," dropdown, select your tunnel name."]}),"\n",(0,r.jsxs)(n.li,{children:["Select your desired ",(0,r.jsx)(n.strong,{children:"Mobile Virtual"})," or ",(0,r.jsx)(n.strong,{children:"Mobile Real"})," device configuration."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Start Test"})," to launch your live test in Sauce Labs."]}),"\n"]})}),(0,r.jsx)(c.A,{value:"Mobile App",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["From Sauce Labs, click ",(0,r.jsx)(n.strong,{children:"Live"})," > ",(0,r.jsx)(n.strong,{children:"Mobile App"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Upload App"})," to upload your iOS or Android mobile app file to Sauce Labs."]}),"\n",(0,r.jsxs)(n.li,{children:["Find your app in the apps list, hover your mouse over it, and click ",(0,r.jsx)(n.strong,{children:"Choose Device"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["To test your app on a real device, click ",(0,r.jsx)(n.strong,{children:"Mobile Real"}),". To test it on an emulator or simulator, click ",(0,r.jsx)(n.strong,{children:"Mobile Virtual"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Select your desired device configuration, including your tunnel name in the ",(0,r.jsx)(n.strong,{children:"Sauce Connect Proxy"})," dropdown."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Start Test"})," to launch your live test in Sauce Labs."]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"stop-tunnel",children:"Stop Tunnel"}),"\n",(0,r.jsx)(n.p,{children:"When you've finished testing, you can stop your tunnel from the terminal where Sauce Connect is running by entering Ctrl+C.\nIf there are jobs that use Sauce Connect Proxy connection, it will wait for them to finish."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2024/01/23 15:19:33.152509 [control] [INFO] Sauce Connect is up, you may start your tests\n^C\n2024/01/23 15:29:12.617959 [control] [INFO] waiting for 1 active job(s) to finish, timeout: 3h0m0s\n2024/01/23 15:29:27.622295 [control] [INFO] waiting for 1 active job(s) to finish, timeout: 2h59m45s\n2024/01/23 15:29:42.600553 [control] [INFO] waiting for 1 active job(s) to finish, timeout: 2h59m30s\n2024/01/23 15:30:00.924115 [control] [INFO] tunnel was shutdown gracefully\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, you can go to the ",(0,r.jsx)(n.strong,{children:"Tunnel Proxies"})," page and click one of the ",(0,r.jsx)(n.strong,{children:"Stop Tunnels"})," buttons.",(0,r.jsx)("br",{}),(0,r.jsx)("img",{src:(0,o.A)("img/sauce-connect/tunnelstop-ui.png"),alt:"Sauce Connect Tunnel Stop",width:"800"})]}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/",children:"Sauce Connect Proxy Overview"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/configuration",children:"Sauce Connect Proxy Configuration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"Sauce Connect Proxy 5 CLI Reference"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/mobile-apps/app-storage",children:"Uploading and Managing Mobile Apps in Sauce Labs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/web-apps/live-testing/live-cross-browser-testing/",children:"Live Testing Web Apps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/",children:"Live Testing Mobile Apps"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(18215),o=t(23104),i=t(56347),c=t(205),a=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=x({queryString:t,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),b=(()=>{const e=l??g;return p({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{b&&a(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),s=c[t].value;s!==r&&(l(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function w(e){const n=(0,m.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);