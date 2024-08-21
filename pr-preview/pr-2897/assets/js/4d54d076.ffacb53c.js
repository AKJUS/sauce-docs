"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[1459],{66564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const o={id:"contributing",title:"Contributing",sidebar_label:"Overview"},a="Reporting Bugs",r={id:"contributing",title:"Contributing",description:"Thank you for your interest in making this project even better and more awesome. Your contributions are highly welcomed.",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/contributing.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"contributing",title:"Contributing",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Glossary",permalink:"/dev/glossary"},next:{title:"Style Guide",permalink:"/contributing/style-guide"}},c={},l=[{value:"Step 1: Create a Fork",id:"step-1-create-a-fork",level:3},{value:"Step 2: Make changes and commit them",id:"step-2-make-changes-and-commit-them",level:3},{value:"Step 3: Test",id:"step-3-test",level:3},{value:"Step 4: Submit a PR",id:"step-4-submit-a-pr",level:3},{value:"Step 5: Connect",id:"step-5-connect",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Thank you for your interest in making this project even better and more awesome. Your contributions are highly welcomed."}),"\n",(0,s.jsxs)(n.p,{children:["The Sauce Labs ",(0,s.jsx)(n.code,{children:"sauce-docs"})," repo is an open source project. We are excited to engage with you\nand the community."]}),"\n",(0,s.jsx)(n.p,{children:"Contribution can come in many forms: writing examples, making suggestions, pointing out bugs,\nor updating docs. Most important is your patience and engagement. We are starting a\nsignificant journey in the open instead of behind closed doors. Join us to make something great."}),"\n",(0,s.jsx)(n.h1,{id:"reporting-bugs",children:"Reporting Bugs"}),"\n",(0,s.jsx)(n.p,{children:"Reporting bugs is one of the best ways to contribute. Before creating a bug report, please check that an issue reporting the same problem does not already exist. If there is such an issue, you may add your information as a comment."}),"\n",(0,s.jsxs)(n.p,{children:["Feel free to start ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/sauce-docs/issues",children:"here"}),". Please fill out the\nrequired information, be clear, specific, and add working examples of the problems you are\nseeing. The problem will be resolved a lot faster if you do."]}),"\n",(0,s.jsx)(n.h1,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.p,{children:["We have a lot of ideas and I'm sure you do, too. Please use our\n",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/sauce-docs/issues",children:"issues list"})," to suggest new features\nthat you would like to see added."]}),"\n",(0,s.jsx)(n.p,{children:"Once again, detail wins. Be clear and outcome oriented in your requests - it just makes\nit easier for us to evaluate and prioritize."}),"\n",(0,s.jsx)(n.h1,{id:"contribute-code",children:"Contribute Code"}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to contribute either by fixing a bug or adding a feature, please make sure the code change is attached to a prior (or new) issue in the\n",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/sauce-docs/issues",children:"issues list"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"We will likely reach out to you to ask questions and discuss approaches. Please understand this is about ensuring\nthat the repo stays easy for everyone to use."}),"\n",(0,s.jsx)(n.h3,{id:"step-1-create-a-fork",children:"Step 1: Create a Fork"}),"\n",(0,s.jsxs)(n.p,{children:["Make a fork and then clone the ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/sauce-docs",children:"sauce-docs"})," repository.\nIf you need help, you can refer to the ",(0,s.jsx)(n.a,{href:"https://help.github.com/articles/fork-a-repo",children:"GitHub help page"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"step-2-make-changes-and-commit-them",children:"Step 2: Make changes and commit them"}),"\n",(0,s.jsx)(n.p,{children:"First, make sure git knows your name and email address:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"% git config --global user.name 'Santa Claus'\n% git config --global user.email 'santa@example.com'\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Writing good commit messages is important."})," A commit message\nshould describe what changed, why, and reference issues fixed (if\nany). Follow these guidelines when writing one:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The first line should be around 50 characters or less and contain a\nshort description of the change. It must be meaningful, as it's what people see when they\nrun ",(0,s.jsx)(n.code,{children:"git shortlog"})," or ",(0,s.jsx)(n.code,{children:"git log --oneline"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Keep the second line blank."}),"\n",(0,s.jsx)(n.li,{children:"Wrap all other lines at 72 columns."}),"\n",(0,s.jsxs)(n.li,{children:["Include ",(0,s.jsx)(n.code,{children:"Fixes #N"}),", where ",(0,s.jsx)(n.em,{children:"N"})," is the issue number the commit\nfixes, if any."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A good commit message can look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"explain commit normatively in one line\n\nBody of commit message is a few lines of text, explaining things\nin more detail, possibly giving some background about the issue\nbeing fixed, etc.\n\nThe body of the commit message can be several paragraphs, and\nplease do proper word-wrap and keep columns shorter than about\n72 characters or so. That way `git log` will show things\nnicely even when it is indented.\n\nFixes #141\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-test",children:"Step 3: Test"}),"\n",(0,s.jsxs)(n.p,{children:["Bug fixes and features ",(0,s.jsx)(n.strong,{children:"should have tests"}),". Look at other tests to\nsee how they should be structured."]}),"\n",(0,s.jsx)(n.h3,{id:"step-4-submit-a-pr",children:"Step 4: Submit a PR"}),"\n",(0,s.jsxs)(n.p,{children:["Commit your changes to your fork and then create and submit a PR to ",(0,s.jsx)(n.code,{children:"sauce-docs"}),".\nMake sure your PR has a clear description of the problem/outcome you are addressing\nand how you are approaching it. There is a template that simplifies this process."]}),"\n",(0,s.jsxs)(n.p,{children:["For help, you can refer to\n",(0,s.jsx)(n.a,{href:"https://help.github.com/articles/using-pull-requests",children:"submitting a pull request"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"step-5-connect",children:"Step 5: Connect"}),"\n",(0,s.jsx)(n.p,{children:"We will reach out to ask any questions or make suggestions. Once done, we will\nmerge the change and... congratulations! You've contributed to improving digital confidence!"}),"\n",(0,s.jsx)(n.p,{children:"Have fun and enjoy hacking!"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);