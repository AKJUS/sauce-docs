"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[712],{45254:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=r(74848),s=r(28453),o=r(11470),t=r(19365);r(86025);const c={id:"source-map",title:"Setting up Source Maps for Backtrace",sidebar_label:"Source Maps",description:"Configure your JS application to automatically upload sourcemap files."},l=void 0,i={id:"error-reporting/platform-integrations/source-map",title:"Setting up Source Maps for Backtrace",description:"Configure your JS application to automatically upload sourcemap files.",source:"@site/docs/error-reporting/platform-integrations/source-map.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/source-map",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/platform-integrations/source-map",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/source-map.md",tags:[],version:"current",lastUpdatedBy:"Rick Foster",lastUpdatedAt:1706730672e3,frontMatter:{id:"source-map",title:"Setting up Source Maps for Backtrace",sidebar_label:"Source Maps",description:"Configure your JS application to automatically upload sourcemap files."},sidebar:"backtrace",previous:{title:"HTTP Submission",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/platform-integrations/http-submission"},next:{title:"Session Replay",permalink:"/sauce-docs/pr-preview/pr-2904/error-reporting/platform-integrations/session-replay"}},u={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Creating and Uploading Source Maps",id:"creating-and-uploading-source-maps",level:2},{value:"Step 1: Enable Source Maps for Your Application",id:"step-1-enable-source-maps-for-your-application",level:3},{value:"Step 2: Install <code>backtrace-js</code>",id:"step-2-install-backtrace-js",level:3},{value:"Step 3: Create a <code>.backtracejsrc</code> configuration file",id:"step-3-create-a-backtracejsrc-configuration-file",level:3},{value:"Project Bundlers",id:"project-bundlers",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Backtrace debugger can highlight specific lines in your source code associated with frames in the callstack. This powerful capability can be enabled by uploading source and source maps. The following steps guide you through configuring your JavaScript application to automatically upload sourcemap files during the project build."}),"\n",(0,a.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A Backtrace account (",(0,a.jsx)(n.a,{href:"https://backtrace.io/login",children:"log in"})," or sign up for a ",(0,a.jsx)(n.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,a.jsxs)(n.li,{children:["A symbol submission URL with a ",(0,a.jsx)(n.code,{children:"symbol:post"})," token for the ",(0,a.jsx)(n.code,{children:"sourcemap"})," endpoint. ",(0,a.jsx)(n.a,{href:"/error-reporting/project-setup/submission-url",children:"&ltdetailed instructions>"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"creating-and-uploading-source-maps",children:"Creating and Uploading Source Maps"}),"\n",(0,a.jsx)(n.p,{children:"Follow these steps to create and upload source maps with every build of your application:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#step-1-enable-source-maps-for-your-application",children:"Enable source maps"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.a,{href:"#step-2-install-backtrace-js",children:["Install the ",(0,a.jsx)(n.code,{children:"backtrace-js"})," command line tool"]})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.a,{href:"#step-3-create-a-backtracejsrc-configuration-file",children:["Create a configuration file for ",(0,a.jsx)(n.code,{children:"backtrace-js"})]})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"step-1-enable-source-maps-for-your-application",children:"Step 1: Enable Source Maps for Your Application"}),"\n",(0,a.jsx)(n.p,{children:"Source maps are automatically generated with most JavaScript frameworks. Please follow these instructions if you are using a framework that does not automatically generate source maps."}),"\n",(0,a.jsxs)(o.A,{groupId:"applications",defaultValue:"typescript",values:[{label:"Typescript (tsc)",value:"typescript"},{label:"UglifyJS",value:"uglify"}],children:[(0,a.jsxs)(t.A,{value:"typescript",children:["Set ",(0,a.jsx)(n.code,{children:"sourceMap"})," in ",(0,a.jsx)(n.code,{children:"compilerOptions"})," in your ",(0,a.jsx)(n.code,{children:"tsconfig.json"})," to ",(0,a.jsx)(n.code,{children:"true"}),". For example:",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsonc",children:'{\n    "compilerOptions": {\n        // other options\n        "sourceMap": true\n    },\n    "include": ["./src"]\n}\n'})})]}),(0,a.jsxs)(t.A,{value:"uglify",children:["Pass ",(0,a.jsx)(n.code,{children:"--source-map"})," as parameter to ",(0,a.jsx)(n.code,{children:"uglifyjs"}),":",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"uglifyjs main.js -c -m --source-map -o main.min.js\n"})})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"step-2-install-backtrace-js",children:["Step 2: Install ",(0,a.jsx)(n.code,{children:"backtrace-js"})]}),"\n",(0,a.jsxs)(n.p,{children:["Install the ",(0,a.jsx)(n.code,{children:"backtrace-js"})," command line tool and update your build scripts to run it. ",(0,a.jsx)(n.code,{children:"backtrace-js"})," can be run from the command line, but it is most efficient to use a configuration file which  we will create in the next step."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"@backtrace/javascript-cli"})," as a dev dependency:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @backtrace/javascript-cli\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add the following script to ",(0,a.jsx)(n.code,{children:"package.json"})," to process and upload source maps:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"scripts": {\n  // highlight-next-line\n  "backtrace:sourcemap": "backtrace-js run",\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Update the build step in ",(0,a.jsx)(n.code,{children:"package.json"})," to process and upload source maps with every build:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"scripts": {\n   // highlight-next-line\n  "build": "<current build commands> && npm run backtrace:sourcemap"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.h3,{id:"step-3-create-a-backtracejsrc-configuration-file",children:["Step 3: Create a ",(0,a.jsx)(n.code,{children:".backtracejsrc"})," configuration file"]}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:".backtracejsrc"})," configuration file in the root of your project with these settings to process source maps, add source and upload to Backtrace."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    // highlight-next-line\n    "path": "<build output>",\n    "run": {\n        "process": true,\n        "add-sources": true,\n        "upload": true\n    },\n    "upload": {\n        // highlight-next-line\n        "url": "<symbol submission url>",\n        "include-sources": true\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Replace ",(0,a.jsx)(n.code,{children:"<build output>"})," with the path to the directory where your transpiled scripts are stored."]}),"\n",(0,a.jsxs)(n.li,{children:["Follow ",(0,a.jsx)(n.a,{href:"/error-reporting/project-setup/submission-url",children:"&ltthese instructions>"})," to create the ",(0,a.jsx)(n.code,{children:"<symbol submission URL>"})," with a ",(0,a.jsx)(n.code,{children:"symbol:post"})," token for the ",(0,a.jsx)(n.code,{children:"sourcemap"})," endpoint."]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{title:"Source Code Upload",type:"info",children:[(0,a.jsx)(n.p,{children:"Source files can be embedded in source maps and included in the upload to Backtrace. The configuration above is constructed to do this."}),(0,a.jsxs)(n.p,{children:["Alternatively, if you do not wish to upload source files directly to Backtrace, you can integrate your source repository. To do so, omit ",(0,a.jsx)(n.code,{children:"add-sources"})," and ",(0,a.jsx)(n.code,{children:"include-sources"})," and follow the steps in the ",(0,a.jsx)(n.a,{href:"../../project-setup/source-code/",children:"Source Code"})," document."]})]}),"\n",(0,a.jsxs)(n.admonition,{title:"Processing node_modules",type:"info",children:[(0,a.jsxs)(n.p,{children:["node_modules are not processed by default. You may include specific modules by including a reference to each in ",(0,a.jsx)(n.code,{children:".backtracejsrc"})," ",(0,a.jsx)(n.code,{children:"path"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  // highlight-next-line\n  "path": [\n    "<build output>",\n    "./node_modules/bser",\n    "./node_modules/chalk"\n    ],\n    ...\n}\n'})})]}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.code,{children:"backtrace-js --help"})," or go to ",(0,a.jsx)(n.a,{href:"https://github.com/backtrace-labs/backtrace-javascript/blob/dev/tools/cli",children:(0,a.jsx)(n.code,{children:"@backtrace/javascript-cli"})})," for additional command line and configuration options."]}),"\n",(0,a.jsxs)(n.admonition,{title:"Troubleshooting",type:"note",children:[(0,a.jsx)(n.p,{children:"Source map processing will halt on error with a description. Use a --verbose command line switch to output extended information for troubleshooting."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"File processing errors"})}),(0,a.jsxs)(n.p,{children:["File processing may halt on a specific file for valid reasons. For instance, a source map may not produced for a script file. Processing for such a file can be skipped with an exclude object in ",(0,a.jsx)(n.code,{children:".backtracejsrc"})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "path": "<build output>",\n  // highlight-start\n  "exclude": [\n    // highlight-next-line\n    "./app1/build/static/js/file.chunk.js"\n  ]\n  // highlight-end\n  "run": {\n  ...\n}\n'})}),(0,a.jsx)(n.p,{children:"Alternatively, all processing errors can be treated as warnings or other errors levels."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "path": "<build output>",\n  // highlight-start\n  "asset-error-behavior": "warn",\n  // highlight-end\n  "run": {\n  ...\n}\n'})})]}),"\n",(0,a.jsx)(n.h2,{id:"project-bundlers",children:"Project Bundlers"}),"\n",(0,a.jsxs)(o.A,{groupId:"project-bundler",defaultValue:"webpack",values:[{label:"Webpack",value:"webpack"},{label:"Rollup",value:"rollup"},{label:"Vite",value:"vite"}],children:[(0,a.jsxs)(t.A,{value:"webpack",children:["If you're using Webpack as your project bundler, you can use ",(0,a.jsx)(n.code,{children:"@backtrace/webpack-plugin"})," to automate working with sourcemaps.",(0,a.jsx)(n.strong,{children:"Step 1: Enable Source Maps for Your Application"}),"Set ",(0,a.jsx)(n.code,{children:"devtool"})," to ",(0,a.jsx)(n.code,{children:"source-map"})," in your ",(0,a.jsx)(n.code,{children:"webpack.config.js"}),":",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  devtool: 'source-map',\n  // other configuration\n}\n"})}),"If you're using code transpiler plugins (such as Typescript), be sure to enable source maps there as well.",(0,a.jsxs)(n.strong,{children:["Step 2: Set up ",(0,a.jsx)(n.code,{children:"@backtrace/webpack-plugin"})]}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"@backtrace/webpack-plugin"})," as a developer dependency:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @backtrace/webpack-plugin\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add it to your ",(0,a.jsx)(n.code,{children:"plugins"})," array in ",(0,a.jsx)(n.code,{children:"webpack.config.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { BacktracePlugin } from '@backtrace/webpack-plugin';\n// or\nconst { BacktracePlugin } = require('@backtrace/webpack-plugin');\n\nmodule.exports = {\n  // other configuration\n  plugins: [new BacktracePlugin({\n    // enable upload only on production builds\n    uploadUrl: process.env.NODE_ENV === \"production\" ? \"<your upload URL>\" : undefined\n  })]\n}\n"})}),"\n"]}),"\n"]})]}),(0,a.jsxs)(t.A,{value:"rollup",children:["If you're using Rollup as your project bundler, you can use ",(0,a.jsx)(n.code,{children:"@backtrace/rollup-plugin"})," to automate working with sourcemaps.",(0,a.jsx)(n.strong,{children:"Step 1: Enable Source Maps for Your Application"}),"Set ",(0,a.jsx)(n.code,{children:"sourcemap"})," in ",(0,a.jsx)(n.code,{children:"output"})," to ",(0,a.jsx)(n.code,{children:"true"})," in your ",(0,a.jsx)(n.code,{children:"rollup.config.js"}),":",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  output: {\n    sourcemap: true\n  }\n}\n"})}),"If you're using code transpiler plugins (such as Typescript), be sure to enable source maps there as well.",(0,a.jsxs)(n.strong,{children:["Step 2: Set up ",(0,a.jsx)(n.code,{children:"@backtrace/rollup-plugin"})]}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"@backtrace/rollup-plugin"})," as a developer dependency:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @backtrace/rollup-plugin\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add it to your ",(0,a.jsx)(n.code,{children:"plugins"})," array in ",(0,a.jsx)(n.code,{children:"rollup.config.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { BacktracePlugin } from '@backtrace/rollup-plugin';\n// or\nconst { BacktracePlugin } = require('@backtrace/rollup-plugin');\n\nmodule.exports = {\n  // other configuration\n  plugins: [BacktracePlugin({\n    // enable upload only on production builds\n    uploadUrl: process.env.NODE_ENV === \"production\" ? \"<your upload URL>\" : undefined\n  })]\n}\n"})}),"\n"]}),"\n"]})]}),(0,a.jsxs)(t.A,{value:"vite",children:["If you're using Vite as your project bundler, you can use ",(0,a.jsx)(n.code,{children:"@backtrace/vite-plugin"})," to automate working with sourcemaps.",(0,a.jsx)(n.strong,{children:"Step 1: Enable Source Maps for Your Application"}),"Set ",(0,a.jsx)(n.code,{children:"sourcemap"})," in ",(0,a.jsx)(n.code,{children:"output"})," to ",(0,a.jsx)(n.code,{children:"true"})," in your ",(0,a.jsx)(n.code,{children:"vite.config.js"}),":",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  build: {\n    sourcemap: true\n  }\n}\n"})}),"If you're using code transpiler plugins (such as Typescript), be sure to enable source maps there as well.",(0,a.jsxs)(n.strong,{children:["Step 2: Set up ",(0,a.jsx)(n.code,{children:"@backtrace/vite-plugin"})]}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"@backtrace/vite-plugin"})," as a developer dependency:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @backtrace/vite-plugin\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add it to your ",(0,a.jsx)(n.code,{children:"plugins"})," array in ",(0,a.jsx)(n.code,{children:"vite.config.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { BacktracePlugin } from '@backtrace/vite-plugin';\n// or\nconst { BacktracePlugin } = require('@backtrace/vite-plugin');\n\nmodule.exports = {\n  // other configuration\n  plugins: [BacktracePlugin({\n    // enable upload only on production builds\n    uploadUrl: process.env.NODE_ENV === \"production\" ? \"<your upload URL>\" : undefined\n  })]\n}\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,a.jsx)(n.admonition,{title:"Don't See Your Tool Described Here?",type:"note",children:(0,a.jsxs)(n.p,{children:["We are adding support for the most popular tools regularly. You can always use ",(0,a.jsx)(n.code,{children:"@backtrace/javascript-cli"}),"; it works with any output JS files."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>t});r(96540);var a=r(18215);const s={tabItem:"tabItem_Ymn6"};var o=r(74848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,t),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var a=r(96540),s=r(18215),o=r(23104),t=r(56347),c=r(205),l=r(57485),i=r(31682),u=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:s}}=e;return{value:n,label:r,attributes:a,default:s}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const s=(0,t.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=p(e),[t,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[i,d]=j({queryString:r,groupId:s}),[g,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(r);return[s,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),b=(()=>{const e=i??g;return h({value:e,tabValues:o})?e:null})();(0,c.A)((()=>{b&&l(b)}),[b]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function f(e){let{className:n,block:r,selectedValue:a,selectValue:t,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.a_)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),s=c[r].value;s!==a&&(i(n),t(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(f,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function k(e){const n=(0,m.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var a=r(96540);const s={},o=a.createContext(s);function t(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);