"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[30180],{79616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var s=n(74848),i=n(28453),o=n(86025);const r={id:"visual-studio-team-services",title:"Visual Studio Team Service Integration",sidebar_label:"Visual Studio Team Services"},c=void 0,a={id:"visual/component-testing/integrations/visual-studio-team-services",title:"Visual Studio Team Service Integration",description:"By integrating Screener into your VSTS Pull Request workflow, you can do both code review + visual review from one place:",source:"@site/docs/visual/component-testing/integrations/visual-studio-team-services.md",sourceDirName:"visual/component-testing/integrations",slug:"/visual/component-testing/integrations/visual-studio-team-services",permalink:"/visual/component-testing/integrations/visual-studio-team-services",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/integrations/visual-studio-team-services.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1689186394e3,frontMatter:{id:"visual-studio-team-services",title:"Visual Studio Team Service Integration",sidebar_label:"Visual Studio Team Services"}},l={},u=[{value:"Setup Steps",id:"setup-steps",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"By integrating Screener into your VSTS Pull Request workflow, you can do both code review + visual review from one place:"}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/visual/component-vsts-status.png"),alt:"Component VSTS Status"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When visual changes are found by Screener, the Pull Request status will be marked as ",(0,s.jsx)(t.code,{children:"failed"})," in VSTS."]}),"\n",(0,s.jsx)(t.li,{children:"Review visual changes simply by clicking on the status link."}),"\n",(0,s.jsx)(t.li,{children:"The VSTS Pull Request status will automatically update to succeeded when visual changes are accepted in Screener, reducing the need to re-run a CI build to see a green success status."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"setup-steps",children:"Setup Steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Integrate Screener into your CI process for continuous visual testing."}),"\n",(0,s.jsxs)(t.li,{children:["Update ",(0,s.jsx)(t.code,{children:"screener.config.js"})," file with your VSTS instance domain, and set the ",(0,s.jsx)(t.code,{children:"failureExitCode"})," option to ",(0,s.jsx)(t.code,{children:"0"})," (to not fail CI builds):"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"// screener.config.js\nmodule.exports = {\n  ...\n\n  projectRepo: 'MyProject/MyRepo',\n  vsts: {\n    instance: 'myproject.visualstudio.com'\n  },\n  failureExitCode: 0\n}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Ensure projectRepo is set to your VSTS Project name and Repository name in the following format: ",(0,s.jsx)(t.code,{children:"{ProjectName}/{RepoName}"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If your VSTS Project and Repository names are the same, then set the Project name only: ",(0,s.jsx)(t.code,{children:"{ProjectName}"}),"."]}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Click ",(0,s.jsx)(t.strong,{children:"Open Account"})," > ",(0,s.jsx)(t.strong,{children:"Visual Studio Team Services"})," > ",(0,s.jsx)(t.strong,{children:"Grant VSTS Access"})," (must be performed by the Screener Account Owner)."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);