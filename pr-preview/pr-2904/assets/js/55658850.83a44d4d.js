"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[71621],{66313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(74848),s=a(28453),i=a(86025);a(11470),a(19365);const o={id:"vscode",title:"saucectl with Visual Studio Code",sidebar_label:"Visual Studio Code"},l=void 0,r={id:"dev/cli/saucectl/usage/ide/vscode",title:"saucectl with Visual Studio Code",description:"Visual Studio Code can help you edit the saucectl configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE.",source:"@site/docs/dev/cli/saucectl/usage/ide/vscode.md",sourceDirName:"dev/cli/saucectl/usage/ide",slug:"/dev/cli/saucectl/usage/ide/vscode",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/usage/ide/vscode",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ide/vscode.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:1707873307e3,frontMatter:{id:"vscode",title:"saucectl with Visual Studio Code",sidebar_label:"Visual Studio Code"},sidebar:"dev",previous:{title:"IntelliJ IDEA",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/usage/ide/intellij"},next:{title:"Zed",permalink:"/sauce-docs/pr-preview/pr-2904/dev/cli/saucectl/usage/ide/zed"}},u={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"JSON Schema Validation",id:"json-schema-validation",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Visual Studio Code can help you edit the ",(0,n.jsx)(t.code,{children:"saucectl"})," configuration files by providing helpful suggestions, autocompletion and docs; all without having to leave the IDE."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml",children:"Visual Studio Code YAML Extension"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"json-schema-validation",children:"JSON Schema Validation"}),"\n",(0,n.jsxs)(t.p,{children:["Our JSON schema is published to the ",(0,n.jsx)(t.a,{href:"https://www.schemastore.org/json/",children:"JSON Schema Store"}),", which is made available to Visual Studio Code."]}),"\n",(0,n.jsx)(t.admonition,{title:"Default Limitations",type:"caution",children:(0,n.jsxs)(t.p,{children:["By default, JSON Schema validation ",(0,n.jsx)(t.em,{children:"only"})," works with JSON files, not YAML. So make sure to have the YAML extension installed or this will not work."]})}),"\n",(0,n.jsxs)(t.p,{children:["Ensure that the YAML Extension downloads schemas automatically from the Schema Store by\nchecking the Visual Studio Code settings to confirm that ",(0,n.jsx)(t.code,{children:"yaml.schemaStore.enable"})," is set to ",(0,n.jsx)(t.code,{children:"true"}),". If this entry does not exist, add it."]}),"\n",(0,n.jsxs)(t.p,{children:["If your ",(0,n.jsx)(t.code,{children:"saucectl"})," config YAML is stored in a ",(0,n.jsx)(t.code,{children:".sauce/"})," folder, Visual Studio Code will automatically apply the schema to all YAML files contained in that folder and no further action is required."]}),"\n",(0,n.jsxs)(t.p,{children:["You should now be able to see the docs for various attributes:",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,i.A)("img/stt/vscode-yaml-docs.png"),alt:"Visual Studio Code YAML Attribute Description"})]}),"\n",(0,n.jsxs)(t.p,{children:["and have autocompletion ready at your fingertips!",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,i.A)("img/stt/vscode-yaml-autocomplete.png"),alt:"Visual Studio Code YAML Attribute Autocompletion"})]}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, it's also possible to associate schema files with files they are supposed to validate by adding the mapping into your Visual Studio Code settings:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'"yaml.schemas": {\n    "https://raw.githubusercontent.com/saucelabs/saucectl/main/api/saucectl.schema.json": "path/to/config.yml"\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For more information, see the Visual Studio Code YAML extension page ",(0,n.jsx)(t.a,{href:"#what-youll-need",children:"mentioned above"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(18215);const s={tabItem:"tabItem_Ymn6"};var i=a(74848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(96540),s=a(18215),i=a(23104),o=a(56347),l=a(205),r=a(57485),u=a(31682),c=a(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,r.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,i=h(e),[o,r]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=m({queryString:a,groupId:s}),[f,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(a);return[s,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:s}),b=(()=>{const e=u??f;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&r(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=r.indexOf(t),s=l[a].value;s!==n&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=r.indexOf(e.currentTarget)+1;t=r[a]??r[0];break}case"ArrowLeft":{const a=r.indexOf(e.currentTarget)-1;t=r[a]??r[r.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>r.push(e),onKeyDown:d,onClick:c,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:s}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function w(e){const t=(0,v.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var n=a(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);