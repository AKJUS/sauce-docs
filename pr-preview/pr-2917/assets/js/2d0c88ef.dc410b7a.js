"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99343],{71191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(74848),l=n(28453),i=n(86025);n(11470),n(19365);const r={id:"intellij",title:"saucectl with IntelliJ",sidebar_label:"IntelliJ IDEA"},s=void 0,o={id:"dev/cli/saucectl/usage/ide/intellij",title:"saucectl with IntelliJ",description:"IntelliJ can help you edit the saucectl configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE.",source:"@site/docs/dev/cli/saucectl/usage/ide/intellij.md",sourceDirName:"dev/cli/saucectl/usage/ide",slug:"/dev/cli/saucectl/usage/ide/intellij",permalink:"/sauce-docs/pr-preview/pr-2917/dev/cli/saucectl/usage/ide/intellij",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ide/intellij.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"intellij",title:"saucectl with IntelliJ",sidebar_label:"IntelliJ IDEA"},sidebar:"dev",previous:{title:"Azure DevOps",permalink:"/sauce-docs/pr-preview/pr-2917/dev/cli/saucectl/usage/ci/azure"},next:{title:"Visual Studio Code",permalink:"/sauce-docs/pr-preview/pr-2917/dev/cli/saucectl/usage/ide/vscode"}},u={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"JSON Schema Validation",id:"json-schema-validation",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["IntelliJ can help you edit the ",(0,a.jsx)(t.code,{children:"saucectl"})," configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE."]}),"\n",(0,a.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.jetbrains.com/idea/",children:"IntelliJ"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"json-schema-validation",children:"JSON Schema Validation"}),"\n",(0,a.jsxs)(t.p,{children:["Our JSON schema is published to the ",(0,a.jsx)(t.a,{href:"https://www.schemastore.org/json/",children:"JSON Schema Store"}),", which is made available to IntelliJ. To proceed, open your ",(0,a.jsx)(t.code,{children:"saucectl"})," config yaml in IntelliJ and select the ",(0,a.jsx)(t.code,{children:"SauceCTL Configuration"})," schema ",(0,a.jsx)(t.a,{href:"https://www.jetbrains.com/help/idea/json.html#ws_json_using_schemas",children:"per the IDEA instructions"}),"."]}),"\n",(0,a.jsx)("img",{src:(0,i.Ay)("img/stt/intellij-saucectl-schema-dropdown.png"),alt:"IntelliJ Schema Dropdown"}),"\n",(0,a.jsx)(t.p,{children:"You should now be able to see the docs for various attributes:"}),"\n",(0,a.jsx)("img",{src:(0,i.Ay)("img/stt/intellij-yaml-docs.png"),alt:"IntelliJ YAML Attribute Description"}),"\n",(0,a.jsx)(t.p,{children:"and have autocompletion ready at your fingertips!"}),"\n",(0,a.jsx)("img",{src:(0,i.Ay)("img/stt/intellij-yaml-autocomplete.png"),alt:"IntelliJ YAML Attribute Autocompletion"}),"\n",(0,a.jsx)(t.admonition,{title:"Known Limitations",type:"caution",children:(0,a.jsxs)(t.p,{children:["At the time of writing, IntelliJ's autocompletion has a bug when dealing with complex JSON schemas. While the validation takes place correctly, the suggestion/autocompletion feature may not work as intended. Until this behavior is fully addressed by JetBrains, you may want to check out our ",(0,a.jsx)(t.a,{href:"/sauce-docs/pr-preview/pr-2917/dev/cli/saucectl/usage/ide/vscode",children:"Visual Studio Code Integration"})," in the meantime."]})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(34164);const l={tabItem:"tabItem_Ymn6"};var i=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(96540),l=n(34164),i=n(23104),r=n(56347),s=n(205),o=n(57485),u=n(31682),c=n(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(l.location.search);t.set(i,e),l.replace({...l.location,search:t.toString()})}),[i,l])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,i=h(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:n,groupId:l}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,i]=(0,c.Dv)(n);return[l,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:l}),v=(()=>{const e=u??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function w(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),l=s[n].value;l!==a&&(u(t),r(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,l.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function x(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(96540);const l={},i=a.createContext(l);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);