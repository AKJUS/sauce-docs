"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[71819],{40984:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(74848),a=r(28453),o=r(86025);r(11470),r(19365);const s={id:"bamboo",title:"Bamboo",sidebar_label:"Bamboo"},l=void 0,i={id:"testfairy/ci-tools/bamboo",title:"Bamboo",description:"Continuous integration with Bamboo is straightforward to set up and, when ready, allows you to deliver up-to-date releases to your beta testers and co-workers.",source:"@site/docs/testfairy/ci-tools/bamboo.md",sourceDirName:"testfairy/ci-tools",slug:"/testfairy/ci-tools/bamboo",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/bamboo",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/ci-tools/bamboo.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"bamboo",title:"Bamboo",sidebar_label:"Bamboo"},sidebar:"docs",previous:{title:"Uploading to Google Play Store",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/integrations/google-uploading"},next:{title:"Bitbucket Pipelines",permalink:"/sauce-docs/pr-preview/pr-2911/testfairy/ci-tools/bitbucket"}},u={},c=[{value:"Installation",id:"installation",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Continuous integration with Bamboo is straightforward to set up and, when ready, allows you to deliver up-to-date releases to your beta testers and co-workers."}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Log in to your Bamboo server."}),"\n",(0,n.jsxs)(t.li,{children:["Click on the ",(0,n.jsx)(t.strong,{children:"cogs icon"})," and select ",(0,n.jsx)(t.strong,{children:"Add-ons"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Click ",(0,n.jsx)(t.strong,{children:"find new add-ons"}),", and install the ",(0,n.jsx)(t.code,{children:"TestFairy Uploader"})," add-on."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("/img/testfairy/ci-tools/bamboo_00.png"),alt:"TestFairy Uploader"}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Now that you have the add-on installed on your server, you can configure it with our ",(0,n.jsx)(t.code,{children:"upload API key"}),". You can find this API key in your ",(0,n.jsx)(t.strong,{children:"Preferences Page"})," at ",(0,n.jsx)(t.a,{href:"https://app.testfairy.com/settings/",children:"https://app.testfairy.com/settings/"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a new task in your Android or iOS job, and pick ",(0,n.jsx)(t.code,{children:"TestFairy Uploader"})," from the ",(0,n.jsx)(t.strong,{children:"Deployment"})," category."]}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("/img/testfairy/ci-tools/bamboo_01.png"),alt:"task types"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Now configure the API key as shown below:"}),"\n",(0,n.jsx)("img",{src:(0,o.Ay)("/img/testfairy/ci-tools/bamboo_02.png"),alt:"tasks"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You must provide the path to the compiled .IPA or .APK file, and optionally list group names of testers for sending out email invitations."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),a=r(34164),o=r(23104),s=r(56347),l=r(205),i=r(57485),u=r(31682),c=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==n&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,y.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);