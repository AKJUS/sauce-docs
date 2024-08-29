"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83023],{52678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(74848),a=n(28453);n(11470),n(19365),n(86025);const i={id:"python",title:"Python Integration Guide",sidebar_label:"Python",description:"Use Python in your Backtrace project."},o=void 0,s={id:"error-reporting/language-integrations/python",title:"Python Integration Guide",description:"Use Python in your Backtrace project.",source:"@site/docs/error-reporting/language-integrations/python.md",sourceDirName:"error-reporting/language-integrations",slug:"/error-reporting/language-integrations/python",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/language-integrations/python",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/language-integrations/python.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"python",title:"Python Integration Guide",sidebar_label:"Python",description:"Use Python in your Backtrace project."},sidebar:"backtrace",previous:{title:"Go",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/language-integrations/go"},next:{title:"JavaScript",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/language-integrations/javascript"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Download",id:"download",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Sending Reports From Unhandled Exceptions",id:"sending-reports-from-unhandled-exceptions",level:2},{value:"Sending Reports Manually",id:"sending-reports-manually",level:2},{value:"Documentation",id:"documentation",level:2},{value:"<code>bt.initialize(**kwargs)</code>",id:"btinitializekwargs",level:3},{value:"Arguments",id:"arguments",level:4},{value:"<code>bt.BacktraceReport</code>",id:"btbacktracereport",level:3},{value:"<code>bt.send_last_exception(**kwargs)</code>",id:"btsend_last_exceptionkwargs",level:3},{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Publishing to PyPI",id:"publishing-to-pypi",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A Backtrace account (",(0,r.jsx)(t.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,r.jsx)(t.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,r.jsx)(t.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["A Backtrace project and a ",(0,r.jsx)(t.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"download",children:"Download"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"backtracepython"})," package is available on ",(0,r.jsx)(t.code,{children:"pip"})," or at ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-python",children:"https://github.com/backtrace-labs/backtrace-python"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"backtracepython"})," package supports both Python 2 and 3."]}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import backtracepython as bt\n\nbt.initialize(\n    endpoint="https://yourcompany.sp.backtrace.io:6098",\n    token="51cc8e69c5b62fa8c72dc963e730f1e8eacbd243aeafc35d08d05ded9a024121"\n)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"sending-reports-from-unhandled-exceptions",children:"Sending Reports From Unhandled Exceptions"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the ",(0,r.jsx)(t.code,{children:"backtracepython"})," module automatically captures unhandled exceptions and creates and sends error reports from them. This behavior can be adjusted with the ",(0,r.jsx)(t.code,{children:"disable_global_handler"})," option in ",(0,r.jsx)(t.code,{children:"bt.initialize"})," (see below)."]}),"\n",(0,r.jsx)(t.h2,{id:"sending-reports-manually",children:"Sending Reports Manually"}),"\n",(0,r.jsxs)(t.p,{children:["You can also send error reports manually in your code. However, to get a correct callstack and source code context, you must send an error with a Python exception context. To do this, you can raise a Python exception and then immediately send a report using the ",(0,r.jsx)(t.code,{children:"send_last_exception"})," call. Here's an example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'try:\n    raise Exception("This report was sent manually.")\nexcept:\n    bt.send_last_exception()\n'})}),"\n",(0,r.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n",(0,r.jsx)(t.h3,{id:"btinitializekwargs",children:(0,r.jsx)(t.code,{children:"bt.initialize(**kwargs)"})}),"\n",(0,r.jsx)(t.h4,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"endpoint"})," (required): Example: ",(0,r.jsx)(t.code,{children:"https://yourcompany.sp.backtrace.io:6098"}),". Sets the HTTP/HTTPS endpoint that error reports will be sent to."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"token"})," (required): Example: ",(0,r.jsx)(t.code,{children:"51cc8e69c5b62fa8c72dc963e730f1e8eacbd243aeafc35d08d05ded9a024121"}),". Sets the token that will be used for authentication when sending an error report."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"attributes"}),": Dictionary that contains additional attributes to be sent along with every error report. These can be overridden on an individual report with ",(0,r.jsx)(t.code,{children:"report.set_attribute"}),". Example: ",(0,r.jsx)(t.code,{children:"{ 'application': \"ApplicationName\", 'serverId': \"foo\" }"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"timeout"}),": Defaults to 4. Maximum amount of seconds to wait for error report processing and sending before concluding it failed."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"debug_backtrace"}),": Defaults to False. Set to True to have an error during collecting the report raise an exception and print some debugging information to stderr."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"disable_global_handler"}),": Defaults to False. If set to False, this module will insert itself in the ",(0,r.jsx)(t.code,{children:"sys.excepthook"})," chain and report those errors automatically before re-raising the exception. Set to True to turn this off. In this case, error reports are only reported if you manually create and send them."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"context_line_count"}),": Defaults to 200. When an error is reported, this many lines above and below each stack function are included in the report."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"tab_width"}),": Defaults to 8. If there are any hard tabs in the source code, it is unclear how many spaces they should be indented to display the source code correctly. Therefore, the error report can override this number to specify how many spaces a hard tab is represented by when viewing the source code."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"btbacktracereport",children:(0,r.jsx)(t.code,{children:"bt.BacktraceReport"})}),"\n",(0,r.jsx)(t.p,{children:"Create a report object that you can later choose whether or not to send."}),"\n",(0,r.jsx)(t.p,{children:"This may be useful to track something like a request."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.set_attribute(key, value)"}),": Adds an attribute to a specific report. Valid types for value are ",(0,r.jsx)(t.code,{children:"str"}),", ",(0,r.jsx)(t.code,{children:"float"}),", ",(0,r.jsx)(t.code,{children:"int"}),", and ",(0,r.jsx)(t.code,{children:"bool"}),". Attributes are indexed and searchable. See also ",(0,r.jsx)(t.code,{children:"addAnnotation"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.set_dict_attributes(dict)"}),": Adds all key-value pairs of dict into the report recursively."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.set_annotation(key, value)"}),": Adds an annotation to a specific report. Annotations, unlike attributes, are not indexed and searchable. However, they are available for inspection when you view a specific report.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"key"}),": String which is the name of the annotation."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"value"}),": Any type which is JSON-serializable."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.set_dict_annotations(dict)"}),": Adds all key-value pairs of dict into the report."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.set_exception(ExceptionType, exception, traceback)"}),": ",(0,r.jsx)(t.code,{children:"error"})," is an Error object. Backtrace will extract information from this object, such as the error message and stack trace, and send this information along with the report."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.capture_last_exception()"}),": This is the same as ",(0,r.jsx)(t.code,{children:"report.set_exception(*sys.exc_info())"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.log(line)"}),": Adds a timestamped log message to the report. Log output is available when you view a report."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"report.send()"}),": Sends the error report to the endpoint specified in ",(0,r.jsx)(t.code,{children:"initialize"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"btsend_last_exceptionkwargs",children:(0,r.jsx)(t.code,{children:"bt.send_last_exception(**kwargs)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"attributes"}),": Dictionary of attributes to add to the report. See ",(0,r.jsx)(t.code,{children:"report.set_dict_attributes"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"annotations"}),": Dictionary of annotations to add to the report. See ",(0,r.jsx)(t.code,{children:"report.set_dict_annotations"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(t.p,{children:"This module supports Python 2, Python 3, and PyPy."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python -m pip install backtracepython\n"})}),"\n",(0,r.jsx)(t.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsx)(t.p,{children:"To run the test suite:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python setup.py test\n"})}),"\n",(0,r.jsx)(t.p,{children:"Since all of these implementations of Python are supported, ensure to run the test suite with all of them:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Python 2"}),"\n",(0,r.jsx)(t.li,{children:"Python 3"}),"\n",(0,r.jsx)(t.li,{children:"PyPy"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"publishing-to-pypi",children:"Publishing to PyPI"}),"\n",(0,r.jsxs)(t.p,{children:["Make sure all tests pass (see above).\nUpdate the version number in the ",(0,r.jsx)(t.code,{children:"backtracepython"})," module.\nTag the version in git."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"python2 setup.py bdist_wheel --universal\ntwine upload dist/*\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(34164),i=n(23104),o=n(56347),s=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=b({queryString:n,groupId:a}),[x,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function f(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,j.jsx)(f,{...t,...e}),(0,j.jsx)(y,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);