"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[15871],{86019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=n(74848),r=n(28453),o=n(86025),a=n(11470),i=n(19365);const l={id:"faq",title:"Screener Visual Testing FAQ",sidebar_label:"FAQ"},c=void 0,d={id:"visual/faq",title:"Screener Visual Testing FAQ",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/faq.md",sourceDirName:"visual",slug:"/visual/faq",permalink:"/sauce-docs/pr-preview/pr-2898/visual/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/faq.md",tags:[],version:"current",lastUpdatedBy:"Marija Stupar",lastUpdatedAt:1710778599e3,frontMatter:{id:"faq",title:"Screener Visual Testing FAQ",sidebar_label:"FAQ"}},u={},h=[{value:"General",id:"general",level:2},{value:"Can I revert a recently accepted snapshot?",id:"can-i-revert-a-recently-accepted-snapshot",level:3},{value:"How do I show lazy-loaded content in my screenshot?",id:"how-do-i-show-lazy-loaded-content-in-my-screenshot",level:3},{value:"Why is my screenshot not showing as a full page?",id:"why-is-my-screenshot-not-showing-as-a-full-page",level:3},{value:"Are there workarounds?",id:"are-there-workarounds",level:4},{value:"What happens if my page has broken HTML tags?",id:"what-happens-if-my-page-has-broken-html-tags",level:3},{value:"Visual E2E",id:"visual-e2e",level:2},{value:"What Sauce Labs browsers are supported by Visual E2E?",id:"what-sauce-labs-browsers-are-supported-by-visual-e2e",level:3},{value:"How do I test smaller mobile web viewport sizes for responsive design testing?",id:"how-do-i-test-smaller-mobile-web-viewport-sizes-for-responsive-design-testing",level:3},{value:"How do I run functional tests only after integrating Visual E2E?",id:"how-do-i-run-functional-tests-only-after-integrating-visual-e2e",level:3},{value:"Does Screener capture <code>iframes</code>?",id:"does-screener-capture-iframes",level:3},{value:"Component Testing",id:"component-testing",level:2},{value:"What Storybook versions are supported?",id:"what-storybook-versions-are-supported",level:3},{value:"Why is Screener not picking up data from my CI build?",id:"why-is-screener-not-picking-up-data-from-my-ci-build",level:3},{value:"How do I add Screener Steps to Storybook Component Story Format (CSF) stories?",id:"how-do-i-add-screener-steps-to-storybook-component-story-format-csf-stories",level:3},{value:"How do I add Screener Steps to my Storybook project that uses React Hooks?",id:"how-do-i-add-screener-steps-to-my-storybook-project-that-uses-react-hooks",level:3},{value:"Does Sauce Visual interact with knobs within stories in Storybook and test as needed?",id:"does-sauce-visual-interact-with-knobs-within-stories-in-storybook-and-test-as-needed",level:3},{value:"How do I resolve <code>Error: Storybook object not found</code>?",id:"how-do-i-resolve-error-storybook-object-not-found",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,s.jsxs)(t.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,s.jsx)(t.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,s.jsx)(t.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,s.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,s.jsx)(t.h3,{id:"can-i-revert-a-recently-accepted-snapshot",children:"Can I revert a recently accepted snapshot?"}),"\n",(0,s.jsx)(t.p,{children:"Yes. After accepting a snapshot, you can revert its acceptance before running another build:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to the ",(0,s.jsx)(t.strong,{children:"State Detail"})," page."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Accepted"})," status dropdown."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.strong,{children:"Revert"}),".",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/visual/revertAccepted.png"),alt:"Revert accepted screenshot",width:"150"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"how-do-i-show-lazy-loaded-content-in-my-screenshot",children:"How do I show lazy-loaded content in my screenshot?"}),"\n",(0,s.jsx)(t.p,{children:"You will need to trigger the lazy-loaded content so that it loads and displays in your web page. How to do this depends on how the lazy-loaded content is triggered to load."}),"\n",(0,s.jsx)(t.p,{children:"For example, if content is loaded based on scrolling down to a particular section of your web page, then you will need to scroll to that section using JavaScript:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"window.scroll(0, 1000)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"why-is-my-screenshot-not-showing-as-a-full-page",children:"Why is my screenshot not showing as a full page?"}),"\n",(0,s.jsx)(t.p,{children:"Sauce Visual captures a full-page screenshot by default in all browsers. The height of the full-page screenshot is based on the scrollable height of the main document body."}),"\n",(0,s.jsx)(t.p,{children:'If the body is not scrollable, then the screenshot captured will appear to be cut off. For example, if the "overflow" style on the body is set to "hidden", then the body cannot be scrolled.'}),"\n",(0,s.jsx)(t.h4,{id:"are-there-workarounds",children:"Are there workarounds?"}),"\n",(0,s.jsx)(t.p,{children:"Yes, but the workaround depends on how the website CSS was built, and understanding what is causing the body to not be scrollable."}),"\n",(0,s.jsxs)(t.p,{children:['If the overflow style on the body is "hidden", then the client could execute the following JS in an Execute Script command in the test to set body overflow to ',(0,s.jsx)(t.code,{children:"'auto'"})," before capturing a snapshot:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"document.body.style.overflow = 'auto'\n"})}),"\n",(0,s.jsx)(t.h3,{id:"what-happens-if-my-page-has-broken-html-tags",children:"What happens if my page has broken HTML tags?"}),"\n",(0,s.jsx)(t.p,{children:"Sauce Visual assumes that there are no broken HTML tags on your pages and will not check for this."}),"\n",(0,s.jsx)(t.h2,{id:"visual-e2e",children:"Visual E2E"}),"\n",(0,s.jsx)(t.h3,{id:"what-sauce-labs-browsers-are-supported-by-visual-e2e",children:"What Sauce Labs browsers are supported by Visual E2E?"}),"\n",(0,s.jsxs)(t.p,{children:["Visual E2E is unified with Sauce VMs, and uses Sauce browsers exclusively. For a full list, see ",(0,s.jsx)(t.a,{href:"https://docs.saucelabs.com/visual/e2e-testing/supported-browsers",children:"Visual E2E Supported Browsers and Operation Systems"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"how-do-i-test-smaller-mobile-web-viewport-sizes-for-responsive-design-testing",children:"How do I test smaller mobile web viewport sizes for responsive design testing?"}),"\n",(0,s.jsxs)(t.p,{children:["This can be done by setting ",(0,s.jsxs)(t.a,{href:"/visual/e2e-testing/commands-options/#saucevisual-capability-options",children:[(0,s.jsx)(t.code,{children:"viewportSize"})," in your ",(0,s.jsx)(t.code,{children:"sauce:visual"})," capabilities"]}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"how-do-i-run-functional-tests-only-after-integrating-visual-e2e",children:"How do I run functional tests only after integrating Visual E2E?"}),"\n",(0,s.jsxs)(t.p,{children:["If you want to run functional tests only, you do not need to modify any of your visual integration code. Just change your WebDriver endpoint from ",(0,s.jsx)(t.code,{children:"hub.screener.io"})," to ",(0,s.jsx)(t.code,{children:"ondemand.saucelabs.com"}),"."]}),"\n",(0,s.jsxs)(t.h3,{id:"does-screener-capture-iframes",children:["Does Screener capture ",(0,s.jsx)(t.code,{children:"iframes"}),"?"]}),"\n",(0,s.jsxs)(t.p,{children:["Yes \u2014 look for ",(0,s.jsx)(t.a,{href:"/visual/e2e-testing/commands-options",children:(0,s.jsx)(t.code,{children:"iframes"})})," and ",(0,s.jsx)(t.a,{href:"/visual/e2e-testing/commands-options",children:(0,s.jsx)(t.code,{children:"iframesOptions"})}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"component-testing",children:"Component Testing"}),"\n",(0,s.jsx)(t.h3,{id:"what-storybook-versions-are-supported",children:"What Storybook versions are supported?"}),"\n",(0,s.jsx)(t.p,{children:"screener-storybook supports Storybook version 3.0 to 6.x (latest)."}),"\n",(0,s.jsx)(t.h3,{id:"why-is-screener-not-picking-up-data-from-my-ci-build",children:"Why is Screener not picking up data from my CI build?"}),"\n",(0,s.jsx)(t.p,{children:"For screener-storybook and screener-runner tests run within a CI tool, Screener will automatically set build, branch, and commit options if you are using one of the CI tools below. It works by pulling data from environment variables in the CI job."}),"\n",(0,s.jsxs)(a.A,{defaultValue:"Jenkins",values:[{label:"Jenkins",value:"Jenkins"},{label:"CircleCI",value:"CircleCI"},{label:"TravisCI",value:"TravisCI"},{label:"Visual Studio",value:"Visual Studio"},{label:"Codeship",value:"Codeship"}],children:[(0,s.jsxs)(i.A,{value:"Jenkins",children:["You'll see here that Jenkins looks for the following environment variables: ",(0,s.jsx)(t.code,{children:"JENKINS_URL"})," or ",(0,s.jsx)(t.code,{children:"JENKINS_HOME"}),", and ",(0,s.jsx)(t.code,{children:"BUILD NUMBER"}),":",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Jenkins example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L23-L29\n"})})]}),(0,s.jsxs)(i.A,{value:"CircleCI",children:["CircleCI looks for the following environment variables: ",(0,s.jsx)(t.code,{children:"CI"}),", ",(0,s.jsx)(t.code,{children:"CIRCLECI"}),", ",(0,s.jsx)(t.code,{children:"CIRCLE_BUILD_NUM"}),":",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | CircleCI example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L31-L37\n"})})]}),(0,s.jsx)(i.A,{value:"TravisCI",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Travis CI example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L39-L52\n"})})}),(0,s.jsx)(i.A,{value:"Visual Studio",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Visual Studio Team Services example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L102-L118\n"})})}),(0,s.jsx)(i.A,{value:"Codeship",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Codeship example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L54-L60\n"})})})]}),"\n",(0,s.jsxs)(a.A,{defaultValue:"GitLabCI",values:[{label:"GitLabCI",value:"GitLabCI"},{label:"Drone",value:"Drone"},{label:"Bitbucket",value:"Bitbucket"},{label:"Semaphore",value:"Semaphore"},{label:"Buildkite",value:"Buildkite"}],children:[(0,s.jsx)(i.A,{value:"GitLabCI",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | GitLab CI example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L86-L92\n"})})}),(0,s.jsx)(i.A,{value:"Drone",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Drone example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L70-L76\n"})})}),(0,s.jsx)(i.A,{value:"Bitbucket",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Bitbucket Pipelines example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L62-L68\n"})})}),(0,s.jsx)(i.A,{value:"Semaphore",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Semaphore example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L78-L84\n"})})}),(0,s.jsx)(i.A,{value:"Buildkite",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'reference title="Screener Runner | Buildkite example"',children:"https://github.com/screener-io/screener-runner/blob/master/src/ci.js#L94-L100\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"If these environment variables are NOT accessible in the build, the reason is most likely that the CI is running the test job inside a separate container, and the variables need to be passed into the container."}),"\n",(0,s.jsx)(t.h3,{id:"how-do-i-add-screener-steps-to-storybook-component-story-format-csf-stories",children:"How do I add Screener Steps to Storybook Component Story Format (CSF) stories?"}),"\n",(0,s.jsxs)(t.p,{children:["Screener Storybook supports version 3.0 to 6.x (latest) and ",(0,s.jsx)(t.a,{href:"https://storybook.js.org/docs/react/api/csf",children:"CSF"}),"-formatted stories. To see examples, refer to ",(0,s.jsx)(t.a,{href:"https://gist.github.com/screener-io/dfbd4b9aa5284e555ea83c936fc0b2ba",children:"GitHub Gist | Three ways to add Screener Steps to a React Component in Storybook to CSF"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"how-do-i-add-screener-steps-to-my-storybook-project-that-uses-react-hooks",children:"How do I add Screener Steps to my Storybook project that uses React Hooks?"}),"\n",(0,s.jsxs)(t.p,{children:["React Hooks messes up using the Screener component because it executes its magic at runtime. So to use Screener Steps with React Hooks, you need to use Storybook Decorators to wrap the component story. Here is an example script: ",(0,s.jsx)(t.a,{href:"https://gist.github.com/screener-io/ada0e3c51137c907ba80728ad7fab23b",children:"Storybook + Screener Steps with Hooks"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"does-sauce-visual-interact-with-knobs-within-stories-in-storybook-and-test-as-needed",children:"Does Sauce Visual interact with knobs within stories in Storybook and test as needed?"}),"\n",(0,s.jsx)(t.p,{children:"Screener-storybook does not automatically interact with knobs, as there could potentially be an infinite number of permutations. If there's a UI state that the user wants to get to using knobs, then this is possible with Screener Steps."}),"\n",(0,s.jsxs)(t.p,{children:["In the Storybook knobs add-on, there's a knobs UI where the user can copy a query string for the knobs configuration. They can copy this query string, and use it with the Screener Steps ",(0,s.jsx)(t.code,{children:"executeScript"})," method to reproduce those knobs values."]}),"\n",(0,s.jsxs)(t.p,{children:["Click on the copy button in the lower right, then paste into an editor, then copy only the query-string portion (after the ",(0,s.jsx)(t.code,{children:"?"}),") and paste that into a Screener step."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="Example"',children:"<Screener steps={new Steps()\n  .executeScript('window.location.href = \"?path=/story/button&knob-Label=works\"')\n  .snapshot('Knobs')\n  .end()\n}>\n"})}),"\n",(0,s.jsxs)(t.h3,{id:"how-do-i-resolve-error-storybook-object-not-found",children:["How do I resolve ",(0,s.jsx)(t.code,{children:"Error: Storybook object not found"}),"?"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run test with ",(0,s.jsx)(t.code,{children:"--debug"})," flag enabled. For example: ",(0,s.jsx)(t.code,{children:"npm run test-storybook -- --debug"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"After running with the debug flag, reach out to the Sauce Labs Support Team and provide them with your log output."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If the following logs are found, it means that Puppeteer could not be launched because of missing dependencies:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-txt",children:"Error: Failed to launch chrome!\n/node-packages/kanan_ui/node_modules/puppeteer/.local-chromium/linux-662092/chrome-linux/chrome: error while loading shared libraries: libX11-xcb.so.1: cannot open shared object file: No such file or directory\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md",children:"Troubleshooting for Puppeteer documentation"})," contains info on how to resolve this for various environments, such as TravisCI and CircleCI."]}),"\n",(0,s.jsxs)(t.p,{children:["For information on setting up Puppeteer in GitLab, see ",(0,s.jsx)(t.a,{href:"https://ali-dev.medium.com/how-to-setup-chrome-headless-on-gitlab-ci-with-puppeteer-docker-fbb562cbaee1",children:"How to set up Chrome Headless on GitLab CI with Puppeteer & Docker"}),", which suggests installing all dependencies with the following command:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"apt-get install gconf-service libasound2 libatk1.0\u20130 libc6 \\\nlibcairo2 libcups2 libdbus-1\u20133 libexpat1 libfontconfig1 \\\nlibgcc1 libgconf-2\u20134 libgdk-pixbuf2.0\u20130 libglib2.0\u20130 libgtk-3\u20130 \\\nlibnspr4 libpango-1.0\u20130 libpangocairo-1.0\u20130 libstdc++6 libx11\u20136 \\\nlibx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 \\\nlibxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \\\nlibxtst6 ca-certificates fonts-liberation libappindicator1 \\\nlibnss3 lsb-release xdg-utils wget -y\n"})})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(96540),r=n(18215),o=n(23104),a=n(56347),i=n(205),l=n(57485),c=n(31682),d=n(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,u]=b({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(c(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);