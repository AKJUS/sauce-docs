"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[33462],{23962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),o=n(28453),s=n(86025);const r={id:"writing-tests-in-code",title:"Writing Tests in Code",sidebar_label:"Writing Tests in Code",keywords:["api-testing","how-to","writing-tests"]},a=void 0,l={id:"api-testing/on-prem/how-to/writing-tests-in-code",title:"Writing Tests in Code",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/writing-tests-in-code.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/writing-tests-in-code",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/on-prem/how-to/writing-tests-in-code",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/writing-tests-in-code.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"writing-tests-in-code",title:"Writing Tests in Code",sidebar_label:"Writing Tests in Code",keywords:["api-testing","how-to","writing-tests"]},sidebar:"apif",previous:{title:"Version Control",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/on-prem/how-to/version-control"},next:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/on-prem/io-components"}},c={},d=[{value:"Code View",id:"code-view",level:2},{value:"A Groovier Approach",id:"a-groovier-approach",level:2},{value:"Even More Serious Grooviness",id:"even-more-serious-grooviness",level:2},{value:"Templating",id:"templating",level:2},{value:"A Little Bit of Everything",id:"a-little-bit-of-everything",level:2},{value:"Want to learn more about Groovy?",id:"want-to-learn-more-about-groovy",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.p,{children:"API Fortress has three unique advantages in the market - magic, the visual composer, and the built in assertions/operations. With that said, you are not bound to them exclusively."}),"\n",(0,i.jsx)(t.p,{children:"If you are more comfortable using code, that option is available as well."}),"\n",(0,i.jsx)(t.h2,{id:"code-view",children:"Code View"}),"\n",(0,i.jsxs)(t.p,{children:['First, the whole test can be seen and edited "naked," without our ',(0,i.jsx)(t.em,{children:"glamorous"})," UI. Behind the curtains, the test is described using the XML markup language."]}),"\n",(0,i.jsx)(t.p,{children:"To use it, you simply need to look at the top right of the composer. The default is VISUAL COMPOSER, but right next to it is CODE VIEW. Click that."}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/10/code-view-1.png"),alt:"code-view-1.png"}),"\n",(0,i.jsx)(t.p,{children:"Now you will see the markup language that is the basis of API Fortress."}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/10/code-view-2.png"),alt:"code-view-2.png"}),"\n",(0,i.jsx)(t.p,{children:"More experienced testers may find this to be the most efficient manner to use the platform. Tip: The best way to learn the markup? Build your tests using the visual composer/magic, then switch to code view and have a look!"}),"\n",(0,i.jsx)(t.h2,{id:"a-groovier-approach",children:"A Groovier Approach"}),"\n",(0,i.jsx)(t.p,{children:'Whether you are using the code view, or the visual composer, one important aspect to note is that all "evaluated" fields are actually able to execute a subset of Groovy commands.'}),"\n",(0,i.jsx)(t.p,{children:'For example, let\'s take this assertion that verifies whether the "items" element is an array.'}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/10/assert-is.png"),alt:"assert-is.png"}),"\n",(0,i.jsx)(t.p,{children:"Or in code view:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<assert-is expression="payload.whatever.items" type="array" />\n'})}),"\n",(0,i.jsx)(t.p,{children:"Now let's say you know something more about this array, such as it should always contain more than 3 elements:"}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/10/assert_greater.png"),alt:"assert_greater.png"}),"\n",(0,i.jsx)(t.p,{children:"Or in code view"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<assert-greater\nexpression="payload.whatever.items.size()"\nvalue="3"\ntype="integer"\n/>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Notice how in the ",(0,i.jsx)(t.em,{children:"expression"})," field we deliberately used the ",(0,i.jsx)(t.code,{children:"size()"})," command to retrieve the size of the object at its left."]}),"\n",(0,i.jsx)(t.h2,{id:"even-more-serious-grooviness",children:"Even More Serious Grooviness"}),"\n",(0,i.jsx)(t.p,{children:"Moreover, Groovy can be put within SET components."}),"\n",(0,i.jsx)(t.p,{children:'The first scenario is when you want to set a variable that is not a String. The best way to do it is using the Variable Mode "Object." The value, in this case, will be evaluated as Groovy code.'}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/10/set_obj.png"),alt:"set_obj.png"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<set var="number" object="otherNumber+50" />\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Here we are assuming that otherObject is a predefined numeric variable. When the SET is executed, the ",(0,i.jsx)(t.em,{children:"number"})," variable will be an integer."]}),"\n",(0,i.jsx)(t.p,{children:"The second scenario is when you want to write extensive logic."}),"\n",(0,i.jsxs)(t.p,{children:['Choose the SET component, then choose the item "Language" in the type drop-down (when using Visual Composer), or enter ',(0,i.jsx)(t.code,{children:'lang="java"'})," when writing it in Code View."]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/10/set.png"),alt:"set.png"}),"\n",(0,i.jsx)(t.p,{children:"Or in code view:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<set var="myVar" lang="java"> <![CDATA[ def item = payload.whatever.items.find { it -> it.id==11 } return item.amount ]]> </set>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"templating",children:"Templating"}),"\n",(0,i.jsxs)(t.p,{children:["What about all the fields that are not explicitly evaluated? Like ",(0,i.jsx)(t.em,{children:"URL"}),", ",(0,i.jsx)(t.em,{children:"value"}),", or ",(0,i.jsx)(t.em,{children:"POST Body?"})," Or the content of a comment? It is often extremely useful to evaluate content on those as well. This is possible using the template syntax."]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/10/eq.png"),alt:"eq.png"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<assert-equals expression="payload.id" value="${req_id}"/>`\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This assertion, for example, is evaluating the ",(0,i.jsx)(t.em,{children:"req_id"})," variable right within the value."]}),"\n",(0,i.jsx)(t.h2,{id:"a-little-bit-of-everything",children:"A Little Bit of Everything"}),"\n",(0,i.jsx)(t.p,{children:"Let's join everything we've learned into one snippet:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'<set var="data" lang="java">\n<!\\[CDATA\\[\n  def items = payoad.whatever.items.find{ it-> it.id>100}\n  return items.collect{ it -> it.providerId}\n\\]\\]>\n</set>\n<each expression="data">\n  <post url="http://www.example.com/${counter+1}" params="\\[:\\]" var="payload2" mode="json">\n   <postBody contentType="application/json">\n     <!\\[CDATA\\[{"providerId":${\\_1}}\\]\\]>\n   </postBody>\n  </post>\n  <set var="counter" object="counter+1"/>\n</each>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"want-to-learn-more-about-groovy",children:"Want to learn more about Groovy?"}),"\n",(0,i.jsxs)(t.p,{children:["Follow this link to the official documentation: ",(0,i.jsx)(t.a,{href:"http://groovy-lang.org/documentation.html",children:"http://groovy-lang.org/documentation.html"})]}),"\n",(0,i.jsx)(t.admonition,{title:"IMPORTANT!",type:"caution",children:(0,i.jsx)(t.p,{children:"For security concerns, the cloud version of API Fortress is sandboxed. Meaning many programming language features are disabled. Self-hosted/on-premises eliminates that restraint. While on cloud, if you think a specific feature should be safe to be enabled but is disabled, please contact us and we'll do our best to help you!"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);