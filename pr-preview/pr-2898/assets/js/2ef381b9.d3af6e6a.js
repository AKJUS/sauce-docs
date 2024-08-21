"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[19223],{34652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(74848),a=n(28453),s=(n(86025),n(11470)),i=n(19365);const l={id:"crash-handler-testing",title:"Testing the Crash Handler",sidebar_label:"Testing the Crash Handler"},o=void 0,u={id:"testfairy/sdk/crash-handler-testing",title:"Testing the Crash Handler",description:"TestFairy's crash handler is a robust feature that allows you to identify and analyze crashes occurring within your iOS mobile applications. By incorporating the TestFairy library, you can deliberately trigger controlled crashes in your app and gain insights into the stacktrace associated with each crash.",source:"@site/docs/testfairy/sdk/crash-handler-testing.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/crash-handler-testing",permalink:"/sauce-docs/pr-preview/pr-2898/testfairy/sdk/crash-handler-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/crash-handler-testing.md",tags:[],version:"current",lastUpdatedBy:"aoleszyn",lastUpdatedAt:1692568532e3,frontMatter:{id:"crash-handler-testing",title:"Testing the Crash Handler",sidebar_label:"Testing the Crash Handler"},sidebar:"docs",previous:{title:"TestFairy in Production",permalink:"/sauce-docs/pr-preview/pr-2898/testfairy/sdk/tf-production"},next:{title:"Identifying your Users",permalink:"/sauce-docs/pr-preview/pr-2898/testfairy/sdk/identifying-users"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Testing the Crash Handler Example",id:"testing-the-crash-handler-example",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"TestFairy's crash handler is a robust feature that allows you to identify and analyze crashes occurring within your iOS mobile applications. By incorporating the TestFairy library, you can deliberately trigger controlled crashes in your app and gain insights into the stacktrace associated with each crash."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This feature is available starting from iOS SDK version 1.19.8."})}),"\n",(0,r.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A working iOS app project."}),"\n",(0,r.jsx)(t.li,{children:"The TestFairy library integrated into your iOS app project."}),"\n",(0,r.jsx)(t.li,{children:"Basic knowledge of iOS development using either Objective-C or Swift."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"testing-the-crash-handler-example",children:"Testing the Crash Handler Example"}),"\n",(0,r.jsx)(t.p,{children:"Here's an example of how you might implement the crash handler:"}),"\n",(0,r.jsxs)(s.A,{groupId:"sdk",defaultValue:"iosC",values:[{label:"iOS Objective C",value:"iosC"},{label:"iOS Swift",value:"iosS"}],children:[(0,r.jsxs)(i.A,{value:"iosC",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"[TestFairy crash];\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'#import "ViewController.h"\n#import "TestFairy.h"\n\n@implementation ViewController\n- (void)viewDidLoad {\n    [super viewDidLoad];\n\n    UIButton* button = [UIButton buttonWithType:UIButtonTypeRoundedRect];\n    button.frame = CGRectMake(50, 50, 100, 30);\n    [button setTitle:@"Crash" forState:UIControlStateNormal];\n    [button addTarget:self action:@selector(crashApp:) forControlEvents:UIControlEventTouchUpInside];\n    [self.view addSubview:button];\n}\n\n- (IBAction)crashApp:(id)sender {\n    [TestFairy crash];\n}\n\n@end\n'})})]}),(0,r.jsxs)(i.A,{value:"iosS",children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"TestFairy.crash()\n"})}),"Example",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import UIKit\n\nclass ViewController: UIViewController {\n    override func viewDidLoad() {\n        super.viewDidLoad()\n\n        let button = UIButton(type: .roundedRect)\n        button.frame = CGRect(x: 50, y: 50, width: 100, height: 30)\n        button.setTitle("Crash", for: [])\n        button.addTarget(self, action: #selector(self.crashApp(_:)), for: .touchUpInside)\n        view.addSubview(button)\n    }\n\n    @IBAction func crashApp(_ sender: AnyObject) {\n        TestFairy.crash()\n    }\n}\n'})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(18215),s=n(23104),i=n(56347),l=n(205),o=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(w,{...e,...t})]})}function j(e){const t=(0,m.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);