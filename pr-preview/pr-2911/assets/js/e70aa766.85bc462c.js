"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80010],{20917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453);n(86025),n(11470),n(19365);const a={id:"okta",title:"Okta",sidebar_label:"Okta"},i=void 0,o={id:"testfairy/security/sso/okta",title:"Okta",description:"1. Login to OKTA, click on Admin and pick Add Applications from the right sidebar.",source:"@site/docs/testfairy/security/sso/okta.md",sourceDirName:"testfairy/security/sso",slug:"/testfairy/security/sso/okta",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/security/sso/okta",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/security/sso/okta.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"okta",title:"Okta",sidebar_label:"Okta"},sidebar:"docs",previous:{title:"Google",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/security/sso/google"},next:{title:"OneLogin",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/security/sso/onelogin"}},l={},c=[{value:"(Optional) Automatically Importing Groups From OKTA",id:"optional-automatically-importing-groups-from-okta",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Login to OKTA, click on ",(0,r.jsx)(t.strong,{children:"Admin"})," and pick ",(0,r.jsx)(t.strong,{children:"Add Applications"})," from the right sidebar."]}),"\n",(0,r.jsx)(t.li,{children:'Type "TestFairy" into the search form'}),"\n",(0,r.jsxs)(t.li,{children:["Click ",(0,r.jsx)(t.strong,{children:"Add"})," on the TestFairy app."]}),"\n",(0,r.jsx)(t.li,{children:"Next, type in the team's name in TestFairy (it is also the subdomain's name)."}),"\n",(0,r.jsxs)(t.li,{children:["Next, select authorized users. When done, click ",(0,r.jsx)(t.strong,{children:"Next"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["OKTA-side configuration is done. Now click ",(0,r.jsx)(t.strong,{children:"Done"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Sign On"})," menu, click on ",(0,r.jsx)(t.strong,{children:"View Setup Instructions"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Copy ",(0,r.jsx)(t.code,{children:"ID Provided Metadata"})," from section 4 into your clipboard."]}),"\n",(0,r.jsxs)(t.li,{children:["Now login to ",(0,r.jsx)(t.a,{href:"https://app.testfairy.com",children:"https://app.testfairy.com"}),", and open the ",(0,r.jsx)(t.strong,{children:"Preferences"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the ",(0,r.jsx)(t.strong,{children:"Security"})," menu item ",(0,r.jsx)(t.strong,{children:"SAML/Single Sign-on"})," section, paste the copied ",(0,r.jsx)(t.code,{children:"ID Provided Metadata"})," into the text area."]}),"\n",(0,r.jsxs)(t.li,{children:["TestFairy-side configuration is done.\nNow, log out, and if SSO is configured into your account, the login page is replaced with ",(0,r.jsx)(t.strong,{children:"Login with OKTA"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"optional-automatically-importing-groups-from-okta",children:"(Optional) Automatically Importing Groups From OKTA"}),"\n",(0,r.jsx)(t.p,{children:"When managing large teams with OKTA, it is most likely that people are already associated with groups."}),"\n",(0,r.jsx)(t.p,{children:'For example, say Alice is associated with the following groups in OKTA: ["QA", "QA San Francisco"]. With auto-import of groups, Alice is automatically associated with the following groups in TestFairy the next time she signs in: "okta", "okta-qa", and "okta-qa-san-francisco". Once removed from the group "QA", Alice is automatically removed from the "okta-qa" group in TestFairy, the next time she signs in.'}),"\n",(0,r.jsx)(t.p,{children:"To import groups each time a user signs into TestFairy:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Open the TestFairy app in your OKTA account, select ",(0,r.jsx)(t.strong,{children:"Sign On"}),", and click ",(0,r.jsx)(t.strong,{children:"Edit"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Click on ",(0,r.jsx)(t.strong,{children:"Attributes"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Under ",(0,r.jsx)(t.strong,{children:"Group Attribute Statements"}),', add a rule with the name: "groups" (in ',(0,r.jsx)(t.strong,{children:"lowercase"}),') and filter "Matches regex" with value ',(0,r.jsx)(t.code,{children:".*"}),". (dot asterisk)."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),s=n(34164),a=n(23104),i=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function k(e){const t=(0,g.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);