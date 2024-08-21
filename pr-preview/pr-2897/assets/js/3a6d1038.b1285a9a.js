"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[48779],{57322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=t(74848),r=t(28453),s=t(86025);const i={id:"jira",title:"Connectors: Jira",sidebar_label:"Jira",keywords:["api-testing","integrations","jira","connectors"]},a=void 0,c={id:"api-testing/on-prem/integrations/connectors/jira",title:"Connectors: Jira",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/connectors/jira.md",sourceDirName:"api-testing/on-prem/integrations/connectors",slug:"/api-testing/on-prem/integrations/connectors/jira",permalink:"/api-testing/on-prem/integrations/connectors/jira",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/connectors/jira.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"jira",title:"Connectors: Jira",sidebar_label:"Jira",keywords:["api-testing","integrations","jira","connectors"]},sidebar:"apif",previous:{title:"Elastic/Kibana",permalink:"/api-testing/on-prem/integrations/connectors/elastic-kibana"},next:{title:"PagerDuty",permalink:"/api-testing/on-prem/integrations/connectors/pagerduty"}},l={},p=[];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsxs)(n.p,{children:["API Fortress can absolutely integrate with your JIRA setup. However, because not all JIRA boards are created equal, if you would like a connector set up for your specific JIRA board please out to ",(0,o.jsx)(n.a,{href:"mailto:support@apifortress.com",children:"support@apifortress.com"})]}),"\n",(0,o.jsx)(n.p,{children:"We will then gather the appropriate information and build you a custom connector for your JIRA setup."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/integrations/add-new-connector",children:"click here."})]})}),"\n",(0,o.jsx)(n.p,{children:"If you are using the SaaS version there is a simple JIRA connector provided, below are the steps to configure it:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Go to the settings page"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/1.-settings.png"),alt:"1.-settings.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'Click on "Alert Groups"'}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/2.-alert-groups.png"),alt:"2.-alert-groups.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create a new group or add a connector to an existing alert group"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/3.-add-connector-to-group.png"),alt:"3.-add-connector-to-group.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add a new connector"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/4.-add-new-connector.png"),alt:"4.-add-new-connector.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Choose the JIRA connector"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/5.-choose-jira.png"),alt:"5.-choose-jira.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the connector"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/6.-configure-jira-connector.png"),alt:"6.-configure-jira-connector.png"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"hostname - this is the host url of your JIRA instance"}),"\n",(0,o.jsx)(n.li,{children:"username - username for your JIRA instance with permissions to create tickets"}),"\n",(0,o.jsx)(n.li,{children:"password - password for the given username"}),"\n",(0,o.jsx)(n.li,{children:"project_name - this is the project key of the project to send reports to"}),"\n",(0,o.jsx)(n.li,{children:"issue_type - identifier of the issue type to be used, i.e. Task, Bug, etc"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Go into project settings for a project you would like JIRA alerts set up for"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/7.-project-settings.png"),alt:"7.-project-settings.png"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/Settings.png"),alt:"Settings.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the alert group that contains your JIRA connector to this project"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/8.-add-alert-group-to-proj.png"),alt:"8.-add-alert-group-to-proj.png"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The resulting ticket in JIRA will look something like this:"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/04/9.-final-result.png"),alt:"9.-final-result.png"})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);