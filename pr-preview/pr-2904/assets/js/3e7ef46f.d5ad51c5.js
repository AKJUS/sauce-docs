"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[71929],{40262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(74848),r=n(28453),i=n(86025);n(11470),n(19365);const s={id:"gitlab",title:"saucectl with GitLab",sidebar_label:"GitLab"},l=void 0,c={id:"dev/cli/saucectl/usage/ci/gitlab",title:"saucectl with GitLab",description:"These examples can apply to virtually any GitLab deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.",source:"@site/docs/dev/cli/saucectl/usage/ci/gitlab.md",sourceDirName:"dev/cli/saucectl/usage/ci",slug:"/dev/cli/saucectl/usage/ci/gitlab",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/usage/ci/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ci/gitlab.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1708458397e3,frontMatter:{id:"gitlab",title:"saucectl with GitLab",sidebar_label:"GitLab"},sidebar:"dev",previous:{title:"GitHub Actions",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/usage/ci/github-actions"},next:{title:"Jenkins",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/usage/ci/jenkins"}},o={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Configure GitLab Credentials",id:"configure-gitlab-credentials",level:2},{value:"Add GitLab-CI Configuration",id:"add-gitlab-ci-configuration",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"These examples can apply to virtually any GitLab deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository."}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["A Sauce Labs account (",(0,a.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,a.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Your Sauce Labs ",(0,a.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://about.gitlab.com/",children:"GitLab Account and Instance"})}),"\n",(0,a.jsxs)(t.li,{children:["The following permissions in GitLab:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Ability to manage GitLab repository containing the project"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configure-gitlab-credentials",children:"Configure GitLab Credentials"}),"\n",(0,a.jsxs)(t.p,{children:["The first step of the integration is to ensure you've added your ",(0,a.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,a.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," as a secret in your GitLab instance."]}),"\n",(0,a.jsx)(t.p,{children:"The easiest way to add credentials to GitLab is with the UI:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Log in to GitLab."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Go to your repository."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the left column, select ",(0,a.jsx)(t.strong,{children:"Settings"}),", then ",(0,a.jsx)(t.strong,{children:"CI/CD"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/stt/gitlab-settings-cicd.png"),alt:"GitLab Secrets",width:"300"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Look for ",(0,a.jsx)(t.strong,{children:"Variables"})," and click on ",(0,a.jsx)(t.strong,{children:"Expand"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/stt/gitlab-settings-variables.png"),alt:"GitLab Variables",width:"700"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Click on ",(0,a.jsx)(t.strong,{children:"Add Variable"})," to create a new secret."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Enter the following information:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Key: ",(0,a.jsx)(t.code,{children:"SAUCE_USERNAME"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Value: 'your-sauce-username'"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Type: 'Variable'"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Environment Scope: All"}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/stt/gitlab-variables-username.png"),alt:"Add GitLab SAUCE_USERNAME",width:"500"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Repeat the process for your Sauce Labs Access Key."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Credentials are now set!"}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/stt/gitlab-variables-complete.png"),alt:"Add GitLab SAUCE_USERNAME",width:"600"}),"\n",(0,a.jsx)(t.h2,{id:"add-gitlab-ci-configuration",children:"Add GitLab-CI Configuration"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["In the root of your project directory, create the ",(0,a.jsx)(t.code,{children:".gitlab-ci.yml"})," file. Below are some job snippets of how to configure ",(0,a.jsx)(t.code,{children:"saucectl"})," with GitLab-CI:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",metastring:"reference",children:"https://github.com/saucelabs/saucectl-cypress-example/blob/main/v1/.gitlab-ci.yml\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsxs)(t.li,{children:["Commit the updated ",(0,a.jsx)(t.code,{children:".gitlab-ci.yml"})," to your git repository."]}),"\n",(0,a.jsx)(t.li,{children:"Navigate back to the GitLab-CI dashboard to see your build pass."}),"\n"]}),"\n",(0,a.jsx)("img",{src:(0,i.A)("img/stt/gitlab-output.png"),alt:"GitLab Output"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),r=n(18215),i=n(23104),s=n(56347),l=n(205),c=n(57485),o=n(31682),u=n(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,d]=b({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),f=(()=>{const e=o??g;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==a&&(o(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(v,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);