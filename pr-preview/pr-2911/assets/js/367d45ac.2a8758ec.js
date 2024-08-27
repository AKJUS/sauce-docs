"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[96148],{54271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(74848),i=n(28453),s=n(86025);n(11470),n(19365);const a={id:"bitbucket",title:"Bitbucket Pipelines",sidebar_label:"Bitbucket Pipelines"},l=void 0,o={id:"testfairy/ci-tools/bitbucket",title:"Bitbucket Pipelines",description:"Set up Bitbucket Pipelines to upload your build artifacts (IPA or APK) directly to TestFairy for distribution.",source:"@site/docs/testfairy/ci-tools/bitbucket.md",sourceDirName:"testfairy/ci-tools",slug:"/testfairy/ci-tools/bitbucket",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/bitbucket",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/ci-tools/bitbucket.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"bitbucket",title:"Bitbucket Pipelines",sidebar_label:"Bitbucket Pipelines"},sidebar:"docs",previous:{title:"Bamboo",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/bamboo"},next:{title:"Circle CI",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/circle-ci"}},c={},u=[{value:"Setting Up",id:"setting-up",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Set up Bitbucket Pipelines to upload your build artifacts (IPA or APK) directly to TestFairy for distribution."}),"\n",(0,r.jsx)(t.h2,{id:"setting-up",children:"Setting Up"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Open your Bitbucket repository, and select ",(0,r.jsx)(t.strong,{children:"Settings"})," > ",(0,r.jsx)(t.strong,{children:"Pipelines"})," > ",(0,r.jsx)(t.strong,{children:"Environment Variables"})]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/bitbucket-pipelines-0.png"),alt:"screenshot of Bitbucket pipelines"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Fill in ",(0,r.jsx)(t.strong,{children:"variable"})," and ",(0,r.jsx)(t.strong,{children:"value"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Variable"}),": TESTFAIRY_API_KEY"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Value"}),": ",(0,r.jsxs)(t.em,{children:["Your API application key. See ",(0,r.jsx)(t.a,{href:"https://app.testfairy.com/settings",children:"https://app.testfairy.com/settings"})," for details."]})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Secured"}),": Y"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Add"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/bitbucket-pipelines-1.png"),alt:"screenshot of Bitbucket pipelines"}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Edit your ",(0,r.jsx)(t.code,{children:"bitbucket-pipelines.yml"})," and add this command to your ",(0,r.jsx)(t.code,{children:"script"})," section:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl https://app.testfairy.com/api/upload -F api_key=${TESTFAIRY_API_KEY} -F file=@MyApplicationFile.apk -F format=readable\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Do not forget to replace ",(0,r.jsx)(t.code,{children:"MyApplicationFile.apk"})," with the path to your APK or IPA files."]})}),"\n",(0,r.jsxs)(t.p,{children:["Additional optional parameters such as ",(0,r.jsx)(t.code,{children:"testers-groups"}),", ",(0,r.jsx)(t.code,{children:"notify"}),", and ",(0,r.jsx)(t.code,{children:"comment"})," can be added to this line. Refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/api-reference/upload-api",children:"Upload API reference guide"})," for more information and examples."]}),"\n",(0,r.jsxs)(t.p,{children:["Here is a screenshot of a sample ",(0,r.jsx)(t.code,{children:"bitbucket-pipelines.yml"})," file:"]}),"\n",(0,r.jsx)("img",{src:(0,s.Ay)("/img/testfairy/ci-tools/bitbucket-pipelines-2.png"),alt:"screenshot of Bitbucket pipelines"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),i=n(34164),s=n(23104),a=n(56347),l=n(205),o=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=p(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=b({queryString:n,groupId:i}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),x=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(c(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);