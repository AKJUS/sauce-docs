"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7552],{59440:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=c(74848),i=c(28453);const o={id:"sauce-connect-5",title:"Sauce Connect Proxy 5",sidebar_label:"Overview"},r=void 0,s={id:"secure-connections/sauce-connect-5",title:"Sauce Connect Proxy 5",description:"Sauce Connect Proxy 5 is a complete rewrite of Sauce Connect Proxy 4.x.x that aims to improve observability, performance, and user experience and provide a strong foundation for future improvements.",source:"@site/docs/secure-connections/sauce-connect-5.md",sourceDirName:"secure-connections",slug:"/secure-connections/sauce-connect-5",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5.md",tags:[],version:"current",lastUpdatedBy:"Dan Slov",lastUpdatedAt:1707169605e3,frontMatter:{id:"sauce-connect-5",title:"Sauce Connect Proxy 5",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections"},next:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2904/secure-connections/sauce-connect-5/quickstart"}},a={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"What&#39;s New In Sauce Connect Proxy 5?",id:"whats-new-in-sauce-connect-proxy-5",level:2},{value:"Major changes",id:"major-changes",level:3},{value:"Getting Started With Sauce Connect Proxy 5",id:"getting-started-with-sauce-connect-proxy-5",level:2},{value:"More Information",id:"more-information",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sauce Connect Proxy 5 is a complete rewrite of Sauce Connect Proxy 4.x.x that aims to improve observability, performance, and user experience and provide a strong foundation for future improvements."}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you're new to Sauce Connect, we recommend reviewing the ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy overview"})," documentation."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-new-in-sauce-connect-proxy-5",children:"What's New In Sauce Connect Proxy 5?"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The Sauce Connect Proxy version 5 major release introduces CLI changes. Please refer to ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/",children:"Sauce Connect Proxy 5 CLI Reference"})," for details.\nAn ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/legacy/",children:(0,t.jsx)(n.code,{children:"sc legacy"})})," command is introduced to help users transition from version 4.x.x to 5.0.x."]})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Improved onboarding and integration due to the secure connection (tunnel) protocol change.\nThe previous generation of Sauce Connect Proxy (version 4) used a custom ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/kgp/",children:"KGP"})," protocol. The Sauce Connect Proxy version 5 uses HTTP/2 to establish a secure connection to Sauce Labs.\nUsing a standard well-documented protocol that is widely used in the industry simplifies Sauce Connect Proxy integration in secure CI/CD environments."]}),"\n",(0,t.jsx)(n.li,{children:"Performance improvement.\nHTTP/2 protocol is optimized for security and performance, it provides significant performance improvements that are especially noticeable when multiple test sessions use the same Sauce Connect Proxy instance."}),"\n",(0,t.jsx)(n.li,{children:"Significant improvement in CPU and memory utilization.\nSauce Connect Proxy 5 utilizes much less memory and CPU resources making it easier to run at scale."}),"\n",(0,t.jsxs)(n.li,{children:["Observability improvement.\nSauce Connect Proxy 5 comes with ",(0,t.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," metrics and a ",(0,t.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/20232-sauce-connect/",children:"Grafana dashboard"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Easier installation and upgrade process. Sauce Connect Proxy 5 release contains deb and rpm packages for Linux, brew support for macOS, as well as x86_64 and arm64 architectures support for all platforms."}),"\n",(0,t.jsxs)(n.li,{children:["Secure ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/WebSocket",children:"WebSocket"})," support with ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping",children:"SSL Certificate Bumping"})," enabled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc1928",children:"SOCKS5"})," support for upstream proxies."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"major-changes",children:"Major changes"}),"\n",(0,t.jsx)(n.p,{children:"Sauce Connect Proxy 5 major changes are listed below."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Tunnels must be named, the ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--tunnel-name",children:(0,t.jsx)(n.code,{children:"--tunnel-name"})})," flag is no longer optional. It's done to improve security and usability - tests that use Sauce Connect must explicitly specify the ",(0,t.jsx)(n.a,{href:"/dev/test-configuration-options/#tunnelname",children:"tunnel name"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["There is no default Sauce Labs region value, ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--region",children:(0,t.jsx)(n.code,{children:"--region"})})," is required to ensure that the correct region is explicitly specified."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping",children:"SSL Certificate Bumping"})," is not enabled for all domains, by default.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/security-authentication#ssl-certificate-bumping",children:"SSL Certificate Bumping"})," is fully supported and additional flags are added to fine-tune the configuration."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Proxy auto-detection is not supported, all proxies must be specified with explicit flags - ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy",children:(0,t.jsx)(n.code,{children:"--proxy"})})," or ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--pac",children:(0,t.jsx)(n.code,{children:"--pac"})})," for SUT requests and ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy-sauce",children:(0,t.jsx)(n.code,{children:"--proxy-sauce"})})," for Sauce Labs REST API and tunnel connections."]}),"\n",(0,t.jsxs)(n.li,{children:["Domain flags (",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--tunnel-domains",children:(0,t.jsx)(n.code,{children:"--tunnel-domains"})}),", ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--direct-domains",children:(0,t.jsx)(n.code,{children:"--direct-domains"})}),", etc) accept regular expressions only."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"Subcommands"})," are introduced to support multiple CLI changes and future capabilities."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#using-the-selenium-relay",children:"Selenium Relay"})," feature is not supported."]}),"\n",(0,t.jsx)(n.li,{children:"Log administration capabilities (such as log-rotate) are not supported. Log management is better left to specialized tools."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-with-sauce-connect-proxy-5",children:"Getting Started With Sauce Connect Proxy 5"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/quickstart/",children:"Sauce Connect Quickstart Guide"})," if you are new to Sauce Connect."]}),"\n",(0,t.jsxs)(n.p,{children:["If you already use Sauce Connect Proxy 4, please refer to ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/migrating/",children:"Sauce Connect Proxy 5 Migration Guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/quickstart/",children:"Sauce Connect Proxy 5 Quickstart Guide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/migrating/",children:"Sauce Connect Proxy 5 Migration Guide"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"Sauce Connect Proxy 5 CLI Reference"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>s});var t=c(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);