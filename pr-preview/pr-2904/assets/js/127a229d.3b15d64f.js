"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[39569],{66021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(74848),a=n(28453);n(11470),n(19365),n(86025);const r={id:"submission-buckets",title:"Submission Buckets",sidebar_label:"Submission Buckets",description:"Submission buckets allow for advanced control of error data submission and attachments."},o=void 0,i={id:"error-reporting/advanced/submission-buckets",title:"Submission Buckets",description:"Submission buckets allow for advanced control of error data submission and attachments.",source:"@site/docs/error-reporting/advanced/submission-buckets.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/submission-buckets",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/advanced/submission-buckets",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/submission-buckets.md",tags:[],version:"current",lastUpdatedBy:"gm4sl",lastUpdatedAt:1707946473e3,frontMatter:{id:"submission-buckets",title:"Submission Buckets",sidebar_label:"Submission Buckets",description:"Submission buckets allow for advanced control of error data submission and attachments."},sidebar:"backtrace",previous:{title:"BCD",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/advanced/bcd"},next:{title:"Synchronous Submissions",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/advanced/sync-submissions"}},c={},u=[{value:"Step-By-Step",id:"step-by-step",level:2},{value:"Step 1: Creating a Token",id:"step-1-creating-a-token",level:3},{value:"Step 2: Submitting an Object Using Synchronous POST",id:"step-2-submitting-an-object-using-synchronous-post",level:3},{value:"Step 3: Submitting an Attachment Using the Submission Bucket Token",id:"step-3-submitting-an-attachment-using-the-submission-bucket-token",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Enterprise feature only",type:"note",children:(0,s.jsxs)(t.p,{children:["This is an enterprise feature. Contact ",(0,s.jsx)(t.a,{href:"mailto:support@backtrace.io",children:"support@backtrace.io"})," to request it to be enabled for your account."]})}),"\n",(0,s.jsx)(t.p,{children:"Submission buckets provide advanced control over error data submission and attachments. They allow for conditional logic on the submission path based on previously seen error data attributes. For example, you may have large assets such as videos, screenshots, log files, or full dumps that are useful for root cause investigation. However, you may not want your users to incur the cost of generating and sending this data for every crash. Submission buckets allow you to control this behavior based on specific attribute combinations. For instance, you may want these assets to be generated and attached only once for each crash."}),"\n",(0,s.jsxs)(t.p,{children:["Submission buckets are configured on ",(0,s.jsx)(t.code,{children:"api_token"})," objects. Only one submission bucket can be defined for each token. The ",(0,s.jsx)(t.code,{children:"api_token"})," must also have synchronous POST and error POST capabilities (",(0,s.jsx)(t.code,{children:"sync:post"})," and ",(0,s.jsx)(t.code,{children:"error:post"})," respectively)."]}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step",children:"Step-By-Step"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-creating-a-token",children:"Step 1: Creating a Token"}),"\n",(0,s.jsxs)(t.p,{children:["Create a token with the ",(0,s.jsx)(t.code,{children:"sync:post"})," and ",(0,s.jsx)(t.code,{children:"error:post"})," capabilities. Update the metadata field to specify a submission bucket called ",(0,s.jsx)(t.code,{children:"cts"}),". The submission bucket will provide counts for unique combinations of issue identifiers and operating systems. In this example, we want the crash reporting client to submit an attachment once for every unique combination of the ",(0,s.jsx)(t.code,{children:"fingerprint"})," and ",(0,s.jsx)(t.code,{children:"uname.sysname"})," attribute values. Additionally, the submission bucket is configured to set the ",(0,s.jsx)(t.code,{children:"has_advanced_log"})," attribute to `1`` for all requests (attachment or error upload) that reference the submission bucket. Use the morgue command line tool to create this token."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ morgue token create --project=cts --capability=error:post --capability=sync:post --metadata=\'{"buckets":{"cts":{"attributes":["fingerprint","uname.sysname"], "set": { "has_advanced_log" : "1" }}}}\'\n\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-submitting-an-object-using-synchronous-post",children:"Step 2: Submitting an Object Using Synchronous POST"}),"\n",(0,s.jsxs)(t.p,{children:["To submit a dump, utilize the token you generated earlier, which should have the capabilities ",(0,s.jsx)(t.code,{children:"sync:post"})," and ",(0,s.jsx)(t.code,{children:"error:post"})," specified. Include the ",(0,s.jsx)(t.code,{children:"mod_sync=1"})," parameter in your submission to inform the submission layer that you anticipate a synchronous response."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'$ curl -s --data-binary @datfc8.dmp "http://localhost.sp.backtrace.io:8081/api/post?token=&_mod_sync=1?format=dump\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This error object pertains to an application called ",(0,s.jsx)(t.code,{children:"packrat"}),". The fingerprint value is A, and the ",(0,s.jsx)(t.code,{children:"uname.sysname"})," value is Linux."]}),"\n",(0,s.jsx)(t.p,{children:"If the request is successful, the response will resemble the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "response": "ok",\n    "_rxid": "06000000-e660-9101-0000-000000000000",\n    "object": "7",\n    "fingerprint": "6238c76d08fa71d23cfc3ef6fcc591b795a2f3369962c7b8991aab058baa8560",\n    "unique": false,\n    "buckets": {\n        "cts": {\n            "count": 0,\n            "token": "8a78f6f292ea68d0e49c28ca11675ec422f0aa93c186046472c2daddc3efebe0"\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this response, the value of ",(0,s.jsx)(t.code,{children:"buckets.cts.count"})," is 0, indicating that no other objects or additional assets were submitted for the given combination of fingerprint and ",(0,s.jsx)(t.code,{children:"uname.sysname"})," attributes."]}),"\n",(0,s.jsxs)(t.p,{children:["For our example, we want to ensure that advanced diagnostic data is included only once for each unique combination. To achieve this, include the header ",(0,s.jsx)(t.code,{children:"X-Submission-Bucket"})," with the value of ",(0,s.jsx)(t.code,{children:"buckets.cts.token"})," mentioned above. This header is used when submitting attachments or errors."]}),"\n",(0,s.jsx)(t.h3,{id:"step-3-submitting-an-attachment-using-the-submission-bucket-token",children:"Step 3: Submitting an Attachment Using the Submission Bucket Token"}),"\n",(0,s.jsx)(t.p,{children:"The submission bucket token is valid for a limited time starting from the submission moment, with the default expiration set to 1 minute. It can be utilized in any request for error uploads or attachment uploads. When the submission bucket token is used, a count is incremented for the unique combination of attribute values in the error object. In the case of error uploads, the combination of attribute values of the errors is used. In the case of attachment uploads, the combination of attribute values of the object with which the attachment is associated is used."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ curl -H "X-Submission-Bucket: 8a78f6f292ea68d0e49c28ca11675ec422f0aa93c186046472c2daddc3efebe0" --data-binary @configure "http://localhost.sp.backtrace.io:8081/api/post?token=&object=4&attachment_name=advanced_logs.txt\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The crash reporting client makes the above request since ",(0,s.jsx)(t.code,{children:"buckets.cts.count"})," is 0. Since a valid ",(0,s.jsx)(t.code,{children:"X-Submission-Bucket"})," value is provided, the count for the combination of attribute values of ",(0,s.jsx)(t.code,{children:"object 4"}),", in this case, a fingerprint of ",(0,s.jsx)(t.code,{children:"A"})," and a ",(0,s.jsx)(t.code,{children:"uname.sysname"})," value of ",(0,s.jsx)(t.code,{children:"Linux"}),", is incremented from 0 to 1."]}),"\n",(0,s.jsxs)(t.p,{children:["On the next submission of a dump with the same attribute values for ",(0,s.jsx)(t.code,{children:"fingerprint"})," and ",(0,s.jsx)(t.code,{children:"uname.sysname"}),", the count will be incremented accordingly. The crash submission client can detect if advanced diagnostic data was already submitted for that combination of ",(0,s.jsx)(t.code,{children:"fingerprint"})," and ",(0,s.jsx)(t.code,{children:"uname.sysnam"}),", and it can avoid generating unnecessary advanced diagnostic data for attachment."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "response": "ok",\n    "_rxid": "06000000-e663-9391-0000-000000000000",\n    "object": "7",\n    "fingerprint": "6238c76d08fa71d23cfc3ef6fcc591b795a2f3369962c7b8991aab058baa8560",\n    "unique": false,\n    "buckets": {\n        "cts": {\n            "count": 1,\n            "token": "8a78f6f292ea68d0e49c28ca11675ec422f0aa93c186046472c2daddc3efebe0"\n        }\n    }\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(18215);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),a=n(18215),r=n(23104),o=n(56347),i=n(205),c=n(57485),u=n(31682),l=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[o,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[u,d]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,l.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=u??p;return b({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:d,onClick:l,...r,className:(0,a.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(k,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);