"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[4824],{33553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453),o=(n(11470),n(19365),n(86025));const i={id:"mixed",title:"Mixed Call Stacks with C# and C++",sidebar_label:"C# and C++",description:"Use C# and C++ in your Backtrace project."},s=void 0,c={id:"error-reporting/language-integrations/mixed",title:"Mixed Call Stacks with C# and C++",description:"Use C# and C++ in your Backtrace project.",source:"@site/docs/error-reporting/language-integrations/mixed.md",sourceDirName:"error-reporting/language-integrations",slug:"/error-reporting/language-integrations/mixed",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/language-integrations/mixed",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/language-integrations/mixed.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"mixed",title:"Mixed Call Stacks with C# and C++",sidebar_label:"C# and C++",description:"Use C# and C++ in your Backtrace project."},sidebar:"backtrace",previous:{title:"C#",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/language-integrations/c"},next:{title:"Go",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/language-integrations/go"}},l={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Description And UML Activity Diagram of Flow Control Between C# And C++",id:"description-and-uml-activity-diagram-of-flow-control-between-c-and-c",level:2},{value:"How to Setup Crash And Exception Reporting in C# And C++",id:"how-to-setup-crash-and-exception-reporting-in-c-and-c",level:2},{value:"Sample Code And Custom Attributes to Include in Crash And Exception Reports",id:"sample-code-and-custom-attributes-to-include-in-crash-and-exception-reports",level:2},{value:"Invoking C++ Methods from C# Code",id:"invoking-c-methods-from-c-code",level:3},{value:"Execute C++ Methods",id:"execute-c-methods",level:3},{value:"C++ Calling Into C#",id:"c-calling-into-c",level:3},{value:"Viewing the C++ and C# Reports in Backtrace",id:"viewing-the-c-and-c-reports-in-backtrace",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"C# is a common language for creating cross-platform applications and user interfaces. In many cases, C# and C++ are used together to create more sophisticated applications. In some scenarios, a C# application will make calls to functions in managed or unmanaged C++ libraries. In others, a C++ application may act as the shell for the app, and cross-platform C# UI code is used in it. In either case, engineers require detailed crash and exception report data from both the C# and C++ applications to effectively debug and identify the root cause of any faulty code."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/language-integrations/5e601be29b487.png"),alt:"Activity Diagram"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace provides exception reporting for C# applications using our Backtrace C# reporting library and crash reporting for C++ applications using the Open Source Crashpad or Breakpad libraries."}),"\n",(0,r.jsxs)(t.p,{children:["This document will discuss how to configure a Windows-based application using Backtrace's fork of the Crashpad library and the C# reporting library to enable crash and exception reporting. The solution includes the ability to relate the call stacks from the two languages together using a custom attribute called ",(0,r.jsx)(t.code,{children:"process_id"}),". The steps this document will outline include:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Description and UML Activity Diagram of Flow Control between C# and C++"}),"\n",(0,r.jsx)(t.li,{children:"How to set up Crash and Exception Reporting in C# and C++"}),"\n",(0,r.jsx)(t.li,{children:"Sample code and custom attributes to include in Crash and Exception Reports"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For non-Windows-based environments, reach out to our support team via the in-app chat on the bottom right of your screen."}),"\n",(0,r.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["A Backtrace account (",(0,r.jsx)(t.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,r.jsx)(t.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,r.jsx)(t.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["A Backtrace project and a ",(0,r.jsx)(t.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"description-and-uml-activity-diagram-of-flow-control-between-c-and-c",children:"Description And UML Activity Diagram of Flow Control Between C# And C++"}),"\n",(0,r.jsx)(t.p,{children:"In scenarios where a C# or C++ application calls unmanaged C++ code or a C# method, and that code throws an exception, the crash reporting platform needs to ensure that call stacks and other relevant data from both portions of code are available for analysis."}),"\n",(0,r.jsx)(t.p,{children:"The figure below presents UML Activity diagrams depicting how the code is executed and what information is provided to identify the calling and failing code."}),"\n",(0,r.jsx)("img",{src:(0,o.Ay)("/img/error-reporting/language-integrations/5e601be3ca0c9.png"),alt:"UML Activity diagrams"}),"\n",(0,r.jsxs)(t.p,{children:["The C# environment requires a callback method, invoked by the C++ environment, to allow the developer to send additional data from the C# application state together with C++ report generated by Crashpad. The system also requires that an additional attribute - ",(0,r.jsx)(t.code,{children:"process_id"})," - is added to the Crashpad and Backtrace C# Report to identify both parts of the call stack."]}),"\n",(0,r.jsx)(t.p,{children:"The remainder of this document will discuss how you can configure your application to report exceptions and crashes to your Backtrace instance. Then, you will find sample code showing how to."}),"\n",(0,r.jsx)(t.h2,{id:"how-to-setup-crash-and-exception-reporting-in-c-and-c",children:"How to Setup Crash And Exception Reporting in C# And C++"}),"\n",(0,r.jsx)(t.p,{children:"Configuring your application environments to report Crashes and Exceptions is the first step:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Ensure that you have created a Backtrace instance and obtained a submission token for your project. Both C# and C++ crash reports should be sent to the same project."}),"\n",(0,r.jsxs)(t.li,{children:["Review the ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-csharp/blob/master/README.md",children:"Readme"})," for the Backtrace C# reporting library. Follow the instructions to download and configure the library. Also, review the options for offline storage and submission of crash reports. Integrate the Backtrace C# library into your C# applications."]}),"\n",(0,r.jsxs)(t.li,{children:["Read the ",(0,r.jsx)(t.a,{href:"/error-reporting/platform-integrations/crashpad/",children:"Crashpad Integration Guide"})," and follow the instructions to use Backtrace's Crashpad binaries. You can ",(0,r.jsx)(t.a,{href:"http://get.backtrace.io/crashpad/builds/",children:"download the binaries"})," and view the source code on the ",(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/crashpad/tree/backtrace",children:"Backtrace branch on Github"}),'. These binaries include additional features not available in the community-maintained (master) branch. Specifically, you can attach files to C++ crash reports, and generate a minidump even when a crash doesn\'t occur. This is useful for mixed call stacks because most C++ functions called from C# include exception handling code to allow the system to recover. However, engineers still need a minidump file to understand the call stack and investigate the root cause. Refer to the "Send reports using EXCEPTION_POINTERS in Windows" section in the ',(0,r.jsx)(t.a,{href:"https://github.com/backtrace-labs/crashpad/blob/backtrace/README.md#send-reports-using-exception_pointers-in-windows",children:"Readme"})," for more details."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"sample-code-and-custom-attributes-to-include-in-crash-and-exception-reports",children:"Sample Code And Custom Attributes to Include in Crash And Exception Reports"}),"\n",(0,r.jsxs)(t.p,{children:["After configuring the Backtrace C# reporting library and Crashpad, use the following sample code to determine when to generate reports and how to include the appropriate ",(0,r.jsx)(t.code,{children:"process_id"})," attribute."]}),"\n",(0,r.jsx)(t.h3,{id:"invoking-c-methods-from-c-code",children:"Invoking C++ Methods from C# Code"}),"\n",(0,r.jsx)(t.p,{children:"In C#, you can invoke methods from unmanaged C++ libraries. To set up a custom callback and capture all exceptions from the C++ library, follow these steps:"}),"\n",(0,r.jsxs)(t.p,{children:["To invoke the exposed method from the C++ library, you have to use the ",(0,r.jsx)(t.code,{children:"DllImport"})," attribute before the method definition. ",(0,r.jsx)(t.code,{children:"DllImport"}),' requires at least one attribute, the path to the .dll file. The method definition in C# requires the use of the special keyword "extern". The C# and C++ method names should be the same. For example, if you expose a method with the name ',(0,r.jsx)(t.code,{children:"captureVideo"})," from C++, you have to create an ",(0,r.jsx)(t.code,{children:"extern captureVideo"})," method in your C# code. See the sample code below with the method name ",(0,r.jsx)(t.code,{children:"CrashApp"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'[DllImport(@"path to dll file", CallingConvention = CallingConvention.ThisCall)]\nstatic extern void CrashApp(LogBuffer g_logger);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In our example, we want to set up a callback function. To prepare the callback, we create a delegate method with different types of parameters: ",(0,r.jsx)(t.code,{children:"IntPtr"}),", ",(0,r.jsx)(t.code,{children:"int"}),", and ",(0,r.jsx)(t.code,{children:"int"}),". In our case, we use the callback function to invoke C# code before the Crashpad ",(0,r.jsx)(t.code,{children:"DumpWithoutCrash"})," method. You can check the delegate declaration and usage below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'delegate void LogBuffer(IntPtr buf, int len, int flags);\n\nprivate LogBuffer logger;\nprivate BacktraceClient client;\n\npublic void OnLogMessage(IntPtr _buf, int len, int flags)\n{\n    if (len == 0 || _buf == IntPtr.Zero)\n    {\n        Console.WriteLine("Buffer or len is empty.");\n    }\n    byte[] managedArray = new byte[len - 1];\n    Marshal.Copy(_buf, managedArray, 0, len - 1);\n    Console.WriteLine(managedArray);\n\n    string result = Encoding.UTF8.GetString(managedArray);\n    Console.WriteLine(result);\n    var report = new BacktraceReport(\n        message: "Event caught by C#",\n        attributes: new Dictionary<string, object>() {\n            { "process.id", result }\n        }\n    );\n    Task.WaitAll(client.SendAsync(report));\n}\n\npublic void ExecuteTasks()\n{\n    logger = OnLogMessage;\n    CrashApp(logger);\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"execute-c-methods",children:"Execute C++ Methods"}),"\n",(0,r.jsx)(t.p,{children:"If you want to run C++ library code from C#, use the following code to export your method:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'extern "C" _declspec(dllexport) methodType MethodName(method args...) {}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The following is a more detailed implementation that allows you to pass a callback function to C#. (Check the ",(0,r.jsx)(t.a,{href:"#invoking-c-methods-from-c-code",children:"Invoking C++ Methods from C# Code"})," section above to read more about callback functions.)"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'extern "C" _declspec(dllexport) void CrashApp(LogBuffer g_logger) {\n    LogBuffer buffer = g_logger;\n    BacktraceClient client = BacktraceClient::BacktraceClient();\n    if (buffer != IntPtr.Zero) {\n        client.SetupLogger(buffer);\n    }\n    client.Crash();\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"c-calling-into-c",children:"C++ Calling Into C#"}),"\n",(0,r.jsxs)(t.p,{children:["In the following scenario, a C# application is hosted by a managed C++ application. In this situation, we suggest adding the ",(0,r.jsx)(t.code,{children:"UnhandledApplicationException"})," handler provided by the Backtrace C# library and the ",(0,r.jsx)(t.code,{children:"try/catch"})," block. The C# application can send a report inside the ",(0,r.jsx)(t.code,{children:"catch"})," block via ",(0,r.jsx)(t.code,{children:"BacktraceClient"})," and rethrow the exception. If the C# application rethrows the exception, the C++ handler and Crashpad will catch the exception inside the ",(0,r.jsx)(t.code,{children:"__try"})," ",(0,r.jsx)(t.code,{children:"__except"})," block and send additional information about the current application state to Backtrace."]}),"\n",(0,r.jsx)(t.p,{children:"C++ Application that hosts the C# Code: In this example,"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The C++ code creates a new AboutForm window using the C# WPF application."}),"\n",(0,r.jsx)(t.li,{children:"The constructor requires the processId generated by the C++ library."}),"\n",(0,r.jsx)(t.li,{children:"The method SetNumber invokes the method where C# will crash."}),"\n",(0,r.jsx)(t.li,{children:"The C# library throws an ArgumentException for the Number parameter equal to 6."}),"\n",(0,r.jsx)(t.li,{children:"When C# throws an exception, both C# and C++ exception information is required by the C#/C++ developer."}),"\n",(0,r.jsx)(t.li,{children:"We use a try/catch block to catch the exception inside the method and send the exception object to Backtrace."}),"\n",(0,r.jsx)(t.li,{children:"The C# catch block rethrows the exception to C++, so the __except block will receive EXCEPTION_POINTERS information and send the data via Crashpad to the Backtrace API. This solution doesn't require any additional callback methods."}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"CPPCLIInterop::CPPCLIInterop(char processId[37])\n{\n    // Initialize C# win forms and convert the char array processId to a string\n    System::String^ id = gcnew System::String(processId);\n    pForm1 = gcnew AboutForm(id);\n}\n\nCPPCLIInterop::~CPPCLIInterop()\n{ }\n\nvoid CPPCLIInterop::Show()\n{\n    pForm1->Show();\n}\n\nvoid CPPCLIInterop::SetNumber(int Number)\n{\n    EXCEPTION_POINTERS* pointer = NULL;\n    __try {\n        // Method where C# throws an exception\n        pForm1->SetNumber(Number);\n    }\n    __except (LogExceptionPointer(pointer = GetExceptionInformation())) {\n        // Exception handler code\n        std::exit(1);\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"C# Application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:'public AboutForm(string processId)\n{\n    InitializeBacktrace(processId);\n    InitializeComponent();\n}\n\nprivate void ValidateNumber(int number)\n{\n    if (number == 6) throw new ArgumentException(nameof(number));\n}\n\npublic void SetNumber(int Number)\n{\n    try\n    {\n        ValidateNumber(Number);\n        textBox1.Text = Number.ToString();\n    }\n    catch (Exception e)\n    {\n        _client.Send(e);\n        throw;\n    }\n}\n\nprivate void InitializeBacktrace(string processId)\n{\n    var credentials = new BacktraceCredentials(_host, _appToken);\n    var clientConf = new BacktraceClientConfiguration(credentials);\n    var db = new BacktraceDatabase(_databasePath);\n    _client = new BacktraceClient(clientConf, db);\n    _client.Attributes.Add("process_id", processId);\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"viewing-the-c-and-c-reports-in-backtrace",children:"Viewing the C++ and C# Reports in Backtrace"}),"\n",(0,r.jsx)(t.p,{children:"After generating and submitting C# and C++ exception and crash reports, you can view them in the Backtrace client. The quickest way to see the incoming reports is a table view. You can choose to list the timestamp, application, error message, and call stack, among other attributes. By doing so, you can see reports from C# and C++ components side by side."})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),o=n(23104),i=n(56347),s=n(205),c=n(57485),l=n(31682),d=n(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,h]=m({queryString:n,groupId:a}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=l??g;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,o]),tabValues:o}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var C=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(l(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,C.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,C.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,a.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,C.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=g(e);return(0,C.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,C.jsx)(x,{...t,...e}),(0,C.jsx)(v,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,C.jsx)(w,{...e,children:h(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);