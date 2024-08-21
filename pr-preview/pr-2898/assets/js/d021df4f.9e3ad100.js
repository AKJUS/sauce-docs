"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33576],{14501:(s,e,c)=>{c.r(e),c.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>t});var l=c(74848),i=c(28453);const n={id:"list",title:"saucectl jobs list",sidebar_label:"list"},a=void 0,d={id:"dev/cli/saucectl/jobs/list",title:"saucectl jobs list",description:"Lists jobs from Sauce Labs.",source:"@site/docs/dev/cli/saucectl/jobs/list.md",sourceDirName:"dev/cli/saucectl/jobs",slug:"/dev/cli/saucectl/jobs/list",permalink:"/sauce-docs/pr-preview/pr-2898/dev/cli/saucectl/jobs/list",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/jobs/list.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:170812895e4,frontMatter:{id:"list",title:"saucectl jobs list",sidebar_label:"list"},sidebar:"dev",previous:{title:"saucectl init",permalink:"/sauce-docs/pr-preview/pr-2898/dev/cli/saucectl/init"},next:{title:"get",permalink:"/sauce-docs/pr-preview/pr-2898/dev/cli/saucectl/jobs/get"}},r={},t=[{value:"Usage",id:"usage",level:2},{value:"Available Options",id:"available-options",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--out</span>',id:"--out",level:3},{value:'<span class="cli">--region</span>',id:"--region",level:3},{value:'<span class="cli">--page</span>',id:"--page",level:3},{value:'<span class="cli">--size</span>',id:"--size",level:3},{value:'<span class="cli">--status</span>',id:"--status",level:3},{value:'<span class="cli">--source</span>',id:"--source",level:3}];function o(s){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Lists jobs from Sauce Labs."}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ saucectl jobs list [flags]\n"})}),"\n",(0,l.jsx)(e.h2,{id:"available-options",children:"Available Options"}),"\n",(0,l.jsxs)("table",{id:"table-cli",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{width:"30%",children:"Flag"}),(0,l.jsx)("th",{width:"10%",children:"Shorthand"}),(0,l.jsx)("th",{children:"Description"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--out",children:"--out"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"-o"})}),(0,l.jsxs)("td",{children:["Output format to the console. Options: ",(0,l.jsx)("code",{children:"text"})," (default) and ",(0,l.jsx)("code",{children:"json"}),"."]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--region",children:"--region"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"-r"})}),(0,l.jsxs)("td",{children:["The Sauce Labs region. Options are ",(0,l.jsx)("code",{children:"us-west-1"})," (default) and ",(0,l.jsx)("code",{children:"eu-central-1"}),"."]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--page",children:"--page"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"-p"})}),(0,l.jsx)("td",{children:"Page for pagination. Default is 0."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--size",children:"--size"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"-s"})}),(0,l.jsx)("td",{children:"Per page for pagination. Default is 20."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--status",children:"--status"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"None"})}),(0,l.jsxs)("td",{children:["Filter job using status. Options are ",(0,l.jsx)("code",{children:"passed"}),", ",(0,l.jsx)("code",{children:"failed"}),", ",(0,l.jsx)("code",{children:"error"}),", ",(0,l.jsx)("code",{children:"complete"}),", ",(0,l.jsx)("code",{children:"in progress"}),", and ",(0,l.jsx)("code",{children:"queued"}),"."]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:(0,l.jsx)("a",{href:"#--source",children:"--source"})})}),(0,l.jsx)("td",{children:(0,l.jsx)("span",{className:"t-cli",children:"None"})}),(0,l.jsxs)("td",{children:["Job source from Sauce Labs. Options are ",(0,l.jsx)("code",{children:"vdc"}),", ",(0,l.jsx)("code",{children:"rdc"}),", and ",(0,l.jsx)("code",{children:"api"}),"."]})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"options-details",children:"Options Details"}),"\n",(0,l.jsx)(e.h3,{id:"--out",children:(0,l.jsx)("span",{className:"cli",children:"--out"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Output format to the console. Options are ",(0,l.jsx)(e.code,{children:"text"})," (default) and ",(0,l.jsx)(e.code,{children:"json"}),".",(0,l.jsx)(e.strong,{children:"Shorthand:"})," ",(0,l.jsx)(e.code,{children:"-o <text/json>"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"saucectl jobs list --out json\n"})})]}),"\n",(0,l.jsx)(e.h3,{id:"--region",children:(0,l.jsx)("span",{className:"cli",children:"--region"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"The Sauce Labs region. Options are ",(0,l.jsx)(e.code,{children:"us-west-1"})," (default) and ",(0,l.jsx)(e.code,{children:"eu-central-1"}),".",(0,l.jsx)(e.strong,{children:"Shorthand:"})," ",(0,l.jsx)(e.code,{children:"-r <region>"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"saucectl jobs list --region us-west-1\n"})})]}),"\n",(0,l.jsx)(e.h3,{id:"--page",children:(0,l.jsx)("span",{className:"cli",children:"--page"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Page for pagination. Default is 0.",(0,l.jsx)(e.strong,{children:"Shorthand:"})," ",(0,l.jsx)(e.code,{children:"-p <page>"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"saucectl jobs list --page 1\n"})})]}),"\n",(0,l.jsx)(e.h3,{id:"--size",children:(0,l.jsx)("span",{className:"cli",children:"--size"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Per page for pagination. Default is 20.",(0,l.jsx)(e.strong,{children:"Shorthand:"})," ",(0,l.jsx)(e.code,{children:"-s <size>"}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"saucectl jobs list --size 20\n"})})]}),"\n",(0,l.jsx)(e.h3,{id:"--status",children:(0,l.jsx)("span",{className:"cli",children:"--status"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Filter job using status. Options: ",(0,l.jsx)(e.code,{children:"passed"}),", ",(0,l.jsx)(e.code,{children:"failed"}),", ",(0,l.jsx)(e.code,{children:"error"}),", ",(0,l.jsx)(e.code,{children:"complete"}),", ",(0,l.jsx)(e.code,{children:"in progress"}),", and ",(0,l.jsx)(e.code,{children:"queued"}),".",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"saucectl jobs list --status passed\n"})})]}),"\n",(0,l.jsx)(e.h3,{id:"--source",children:(0,l.jsx)("span",{className:"cli",children:"--source"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)("p",{children:(0,l.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"Job source from saucelabs. Options: ",(0,l.jsx)(e.code,{children:"vdc"}),", ",(0,l.jsx)(e.code,{children:"rdc"}),", and ",(0,l.jsx)(e.code,{children:"api"}),".",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"saucectl jobs list --source vdc\n"})})]})]})}function h(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)}},28453:(s,e,c)=>{c.d(e,{R:()=>a,x:()=>d});var l=c(96540);const i={},n=l.createContext(i);function a(s){const e=l.useContext(n);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function d(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:a(s.components),l.createElement(n.Provider,{value:e},s.children)}}}]);