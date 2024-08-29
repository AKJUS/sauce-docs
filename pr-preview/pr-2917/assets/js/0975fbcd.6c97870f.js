"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[27355],{92453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(74848),a=t(28453),l=t(86025),o=t(11470),s=t(19365);const r={id:"high-availability",title:"Sauce Connect Proxy High Availability Setup",sidebar_label:"High Availability Setup"},u=void 0,c={id:"secure-connections/sauce-connect/setup-configuration/high-availability",title:"Sauce Connect Proxy High Availability Setup",description:"The High Availability (HA) setup enables you to run parallel tests through multiple Sauce Connect Proxy tunnels and run multiple tunnels grouped together as a tunnel pool. Pools are ideal for you're running 50 or more parallel tests (high concurrency) because tunnel capacity is limited by a single TCP connection.",source:"@site/docs/secure-connections/sauce-connect/setup-configuration/high-availability.md",sourceDirName:"secure-connections/sauce-connect/setup-configuration",slug:"/secure-connections/sauce-connect/setup-configuration/high-availability",permalink:"/sauce-docs/pr-preview/pr-2917/secure-connections/sauce-connect/setup-configuration/high-availability",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/setup-configuration/high-availability.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"high-availability",title:"Sauce Connect Proxy High Availability Setup",sidebar_label:"High Availability Setup"},sidebar:"docs",previous:{title:"Environment Variables",permalink:"/sauce-docs/pr-preview/pr-2917/secure-connections/sauce-connect/setup-configuration/environment-variables"},next:{title:"Setup with Additional Proxies",permalink:"/sauce-docs/pr-preview/pr-2917/secure-connections/sauce-connect/setup-configuration/additional-proxies"}},h={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Basic Setup Leveraging High Availability",id:"basic-setup-leveraging-high-availability",level:2},{value:"Multiple Network Routes to Site Under Test (SUT)",id:"multiple-network-routes-to-site-under-test-sut",level:2},{value:"High Availability Tunnel Settings and Commands",id:"high-availability-tunnel-settings-and-commands",level:2},{value:"Tunnel Pools",id:"tunnel-pools",level:3},{value:"Launching Tunnel Pools",id:"launching-tunnel-pools",level:4},{value:"What are Colliding Tunnels?",id:"what-are-colliding-tunnels",level:4},{value:"Monitoring Tunnel Pools",id:"monitoring-tunnel-pools",level:4},{value:"Launching Sauce Connect Proxy with High Availability",id:"launching-sauce-connect-proxy-with-high-availability",level:3},{value:"Failover and Rolling Restart Functionality",id:"failover-and-rolling-restart-functionality",level:2},{value:"Using Multiple Machines for Failover Functionality",id:"using-multiple-machines-for-failover-functionality",level:3},{value:"More Information",id:"more-information",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The High Availability (HA) setup enables you to run parallel tests through multiple Sauce Connect Proxy tunnels and run multiple tunnels grouped together as a tunnel pool. Pools are ideal for you're running 50 or more parallel tests (high concurrency) because tunnel capacity is limited by a single TCP connection."}),"\n",(0,i.jsx)(n.p,{children:"A major benefit to using the HA setup is load balancing. Jobs will be distributed among the tunnels in your tunnel pool. If one of your tunnels goes down, any tests started after that will be routed through another tunnel. That said, if a tunnel instance on your side or a VM tunnel instance on the Sauce Labs side goes down once you've already started running tests, these tests in motion will be impacted."}),"\n",(0,i.jsxs)(n.p,{children:["With this setup, we strongly recommend applying a ",(0,i.jsx)(n.code,{children:"--tunnel-name"}),", which will make it easier for tracking tunnels. Otherwise, test traffic initiated using your account will use an unnamed tunnel automatically."]}),"\n",(0,i.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(n.p,{children:["Before getting started with the High Availability setup, we recommend trying the ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup",children:"Basic Setup"})," first to confirm that your network architecture is compatible with Sauce Connect Proxy."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-setup-leveraging-high-availability",children:"Basic Setup Leveraging High Availability"}),"\n",(0,i.jsxs)(n.p,{children:["The diagram below shows the basic Sauce Connect Proxy setup using HA.",(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:(0,l.Ay)("img/sauce-connect/scp-basic-ha.webp"),alt:"Basic setup using High Availability",width:"600"})]}),"\n",(0,i.jsxs)(n.p,{children:["On the Sauce Labs side, there are three major components: ",(0,i.jsx)(n.strong,{children:"Sauce Test VM"}),", ",(0,i.jsx)(n.strong,{children:"Sauce Connect Tunnel VM"}),", and ",(0,i.jsx)(n.strong,{children:"Tunnel Pool"}),". The logic flow is:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Test framework makes a request for a new Sauce Test VM, which specifies the tunnel ID of the pool (or uses an unnamed "default" pool).'}),"\n",(0,i.jsx)(n.li,{children:"A service in Sauce Labs chooses a tunnel from the existing pool at random."}),"\n",(0,i.jsx)(n.li,{children:"The resulting tunnel from step 2 is assigned to the new test VM."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"multiple-network-routes-to-site-under-test-sut",children:"Multiple Network Routes to Site Under Test (SUT)"}),"\n",(0,i.jsx)(n.p,{children:"In this diagram, we see a setup that allows for multiple network routes when reaching the site(s) under test."}),"\n",(0,i.jsx)("img",{src:(0,l.Ay)("img/sauce-connect/scp-mult-routes.webp"),alt:"Multiple network routes to Site Under Test (SUT)",width:"600"}),"\n",(0,i.jsx)(n.p,{children:"There are variations to this, of course. For example, some of the Sauce Connect Proxy instances could be in the same network infrastructure as the site(s) under test. You can also imagine leveraging different virtual routes inside the same physical network. What is gained by setting up tunnels in this manner is redundancy for Sauce Connect Proxy tests, should one network route fail."}),"\n",(0,i.jsx)(n.h2,{id:"high-availability-tunnel-settings-and-commands",children:"High Availability Tunnel Settings and Commands"}),"\n",(0,i.jsxs)(n.p,{children:["You can customize your HA tests using these options below. For a full list of HA commands and other Sauce Connect Proxy options, see the ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy CLI Guide"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tunnel-pools",children:"Tunnel Pools"}),"\n",(0,i.jsx)(n.p,{children:"Exclusive to our HA Sauce Connect Proxy Setup, you can launch multiple tunnels as a tunnel pool that's treated as a single tunnel. Each individual tunnel used in a pool will count toward your tunnel concurrency limit."}),"\n",(0,i.jsx)(n.h4,{id:"launching-tunnel-pools",children:"Launching Tunnel Pools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In your test script configuration, provide the name of the Sauce Connect Proxy tunnel by using the ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/basic-setup#using-tunnel-names",children:(0,i.jsx)(n.code,{children:"tunnelName"})})," capability:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'"tunnelName": "tunnel_name_here"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["In your CLI, tunnels in the individual pools need to be started with both the ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--tunnel-name",children:(0,i.jsx)(n.code,{children:"--tunnel-name"})})," and ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--tunnel-pool",children:(0,i.jsx)(n.code,{children:"--tunnel-pool"})})," flags.","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY --tunnel-pool --tunnel-name $TUNNEL_NAME\n"})}),"\n","Tunnel names distinguish which tunnel or HA tunnel pool will be used to connect to your site under test."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"what-are-colliding-tunnels",children:"What are Colliding Tunnels?"}),"\n",(0,i.jsx)(n.p,{children:"Normally, if you attempt to start multiple tunnels with the same tunnel name, only the latest instance of the tunnel with that name will stay running."}),"\n",(0,i.jsx)(n.p,{children:"All tunnels with the same name started prior to the start of the latest instance will be considered colliding tunnels (tunnels with colliding names) and will shut down."}),"\n",(0,i.jsxs)(n.p,{children:["When creating a tunnel pool, you need to prevent tunnel name collision by using the ",(0,i.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy#--tunnel-pool",children:(0,i.jsx)(n.code,{children:"--tunnel-pool"})})," flag when starting the tunnels for your tunnel pool. Tunnels will then remain active and tests will be distributed among them."]}),"\n",(0,i.jsx)(n.h4,{id:"monitoring-tunnel-pools",children:"Monitoring Tunnel Pools"}),"\n",(0,i.jsxs)(n.p,{children:["When running a tunnel pool, we recommend monitoring your activity on the Sauce Labs ",(0,i.jsx)(n.a,{href:"https://app.saucelabs.com/tunnels",children:(0,i.jsx)(n.strong,{children:"Tunnels"})})," page to ensure your tunnel configuration stability and overall testing efficiency. Here, you can gain insight into all individual tunnels and tunnel pools. See ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#monitoring-tunnels",children:"Monitoring Tunnels"})," for more information."]}),"\n",(0,i.jsx)(n.h3,{id:"launching-sauce-connect-proxy-with-high-availability",children:"Launching Sauce Connect Proxy with High Availability"}),"\n",(0,i.jsx)(n.p,{children:"Once you've confirmed that your network is configured to use HA, launch Sauce Connect Proxy using one of these commands below. You'll need to run this command on each machine where you want to have access to the tunnel pool."}),"\n",(0,i.jsxs)(o.A,{defaultValue:"maclinux",values:[{label:"Linux or Mac OS",value:"maclinux"},{label:"Windows",value:"windows"}],children:[(0,i.jsx)(s.A,{value:"maclinux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY \\\n  --tunnel-name tunnel_name_here \\\n  --tunnel-pool\n"})})}),(0,i.jsx)(s.A,{value:"windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:".\\sc.exe -u %SAUCE_USERNAME% -k %SAUCE_ACCESS_KEY% ^\n  --tunnel-name tunnel_name_here ^\n  --tunnel-pool\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"failover-and-rolling-restart-functionality",children:"Failover and Rolling Restart Functionality"}),"\n",(0,i.jsxs)(n.p,{children:["Tunnel pools allow for failover and rolling restart functionality, which improves Sauce Connect Proxy test stability and performance. Test load distribution is balanced automatically and evenly across tunnels using the round-robin load balancing method (see ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Round-robin_scheduling",children:"Round-robin scheduling"})," for more information). This method accelerates test time and allow you to run a high volume of tests in parallel."]}),"\n",(0,i.jsx)(n.p,{children:"Tunnel pools also abide by general fault tolerance rules. For example, if one tunnel becomes unavailable or shuts down (i.e., due to user shutdown, crash, maintenance, or network partition), you can configure your tunnels to be restored automatically while the test traffic is routed to another tunnel in the pool."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Tunnel pools do not self-heal (see ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Self-management_(computer_science)",children:"Self-management"})," for more information) or restart automatically. If a tunnel stops, you'll need to restart it manually. Other than restarting a stopped or failed tunnel, tunnel pools generally run automatically without user intervention. If you're running a high number of tunnels, you may want to bypass the pool and specify which tunnel to use directly."]})}),"\n",(0,i.jsx)(n.p,{children:"When in High Availability mode, we recommend restarting Sauce Connect Proxy tunnels every 24 hours. The tunnel will stay open until all tests associated with it have completed. At the same time, once the shutdown command has been sent, the tunnel is marked inactive in the eyes of the pool, and no new jobs will use it."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Windows users: ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#running-as-a-microsoft-windows-service",children:"Running as a Microsoft Windows Service"})]}),"\n",(0,i.jsxs)(n.li,{children:["Linux users: ",(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#service-management-tools",children:"Monitoring with Service Management Tools"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-multiple-machines-for-failover-functionality",children:"Using Multiple Machines for Failover Functionality"}),"\n",(0,i.jsx)(n.p,{children:"If you're configuring your HA Setup with multiple tunnels to provide failover functionality, we recommend setting up each tunnel to run on a separate machine. This way, if a port availability issue or machine failure arises, you will still have active tunnels."}),"\n",(0,i.jsx)(n.p,{children:"If you're using the same machine for multiple tunnels, you should start Sauce Connect Proxy with unique log file names."}),"\n",(0,i.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#performance-metrics",children:"Sauce Connect Proxy Performance Metrics"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var i=t(96540),a=t(34164),l=t(23104),o=t(56347),s=t(205),r=t(57485),u=t(31682),c=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[o,r]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[u,h]=m({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),y=(()=>{const e=u??g;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{y&&r(y)}),[y]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function v(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:s}=e;const r=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=r.indexOf(n),a=s[t].value;a!==i&&(u(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=r.indexOf(e.currentTarget)+1;n=r[t]??r[0];break}case"ArrowLeft":{const t=r.indexOf(e.currentTarget)-1;n=r[t]??r[r.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>r.push(e),onKeyDown:h,onClick:c,...l,className:(0,a.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const a={},l=i.createContext(a);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);