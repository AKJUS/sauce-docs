"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[10384],{10305:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var a=t(74848),l=t(28453);const c={id:"download",title:"saucectl artifacts download",sidebar_label:"download"},n=void 0,i={id:"dev/cli/saucectl/artifacts/download",title:"saucectl artifacts download",description:"Downloads artifacts for a job from Sauce Labs.",source:"@site/docs/dev/cli/saucectl/artifacts/download.md",sourceDirName:"dev/cli/saucectl/artifacts",slug:"/dev/cli/saucectl/artifacts/download",permalink:"/sauce-docs/pr-preview/pr-2911/dev/cli/saucectl/artifacts/download",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/artifacts/download.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"download",title:"saucectl artifacts download",sidebar_label:"download"},sidebar:"dev",previous:{title:"delete-file",permalink:"/sauce-docs/pr-preview/pr-2911/dev/cli/saucectl/apit/vault/delete-file"},next:{title:"list",permalink:"/sauce-docs/pr-preview/pr-2911/dev/cli/saucectl/artifacts/list"}},d={},r=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--target-dir</span>',id:"--target-dir",level:3},{value:'<span class="cli">--out</span>',id:"--out",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3}];function o(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Downloads artifacts for a job from Sauce Labs."}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"$ saucectl artifacts download jobID globPattern [flags]\n"})}),"\n",(0,a.jsx)(s.h2,{id:"available-options",children:"Available Options"}),"\n",(0,a.jsxs)("table",{id:"table-cli",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{width:"30%",children:"Flag"}),(0,a.jsx)("th",{width:"10%",children:"Shorthand"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:(0,a.jsx)("a",{href:"#--target-dir",children:"--target-dir"})})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:"None"})}),(0,a.jsx)("td",{children:"Save files to target directory. Defaults to current working directory."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:(0,a.jsx)("a",{href:"#--out",children:"--out"})})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:"-o"})}),(0,a.jsxs)("td",{children:["Output format to the console. Options: ",(0,a.jsx)("code",{children:"text"})," (default) and ",(0,a.jsx)("code",{children:"json"}),"."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:(0,a.jsx)("a",{href:"#--region",children:"--region"})})}),(0,a.jsx)("td",{children:(0,a.jsx)("span",{className:"t-cli",children:"-r"})}),(0,a.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,a.jsx)("code",{children:"us-west-1"})," (default) and ",(0,a.jsx)("code",{children:"eu-central-1"}),"."]})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,a.jsx)(s.h3,{id:"--target-dir",children:(0,a.jsx)("span",{className:"cli",children:"--target-dir"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Save files to target directory. Defaults to current working directory.",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"saucectl artifacts download <jobID> <globPattern> --target-dir my-artifacts-dir\n"})})]}),"\n",(0,a.jsx)(s.h3,{id:"--out",children:(0,a.jsx)("span",{className:"cli",children:"--out"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),'Specifies the output format for the console. Options include: "text" or "json". The default setting is "text".',(0,a.jsx)(s.strong,{children:"Shorthand:"})," ",(0,a.jsx)(s.code,{children:"-o <text/json>"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"saucectl artifacts download <jobID> <globPattern> --out json\n"})})]}),"\n",(0,a.jsx)(s.h3,{id:"--region",children:(0,a.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,a.jsxs)("div",{className:"cli-desc",children:[(0,a.jsx)("p",{children:(0,a.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs region. Options are ",(0,a.jsx)(s.code,{children:"us-west-1"})," (default) and ",(0,a.jsx)(s.code,{children:"eu-central-1"}),".",(0,a.jsx)(s.strong,{children:"Shorthand:"})," ",(0,a.jsx)(s.code,{children:"-r <region>"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"saucectl artifacts download <jobID> <globPattern> --region us-west-1\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>i});var a=t(96540);const l={},c=a.createContext(l);function n(e){const s=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),a.createElement(c.Provider,{value:s},e.children)}}}]);