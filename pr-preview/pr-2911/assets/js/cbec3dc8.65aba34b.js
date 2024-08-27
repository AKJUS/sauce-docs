"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[27432],{81665:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453),o=s(86025);const r={id:"composer",title:"Writing API Tests with the Composer",sidebar_label:"Using the Composer",description:"Quickly generate and build functional API tests"},l=void 0,a={id:"api-testing/composer",title:"Writing API Tests with the Composer",description:"Quickly generate and build functional API tests",source:"@site/docs/api-testing/composer.md",sourceDirName:"api-testing",slug:"/api-testing/composer",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/composer",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/composer.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"composer",title:"Writing API Tests with the Composer",sidebar_label:"Using the Composer",description:"Quickly generate and build functional API tests"},sidebar:"docs",previous:{title:"Scheduling Tests",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/schedule-test"},next:{title:"I/O Components",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/composer/io-components"}},d={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Creating a Test with the Composer",id:"creating-a-test-with-the-composer",level:2},{value:"Create a Test",id:"create-a-test",level:3},{value:"Add Test Components",id:"add-test-components",level:3},{value:"Add an I/O Request Test Component",id:"add-an-io-request-test-component",level:4},{value:"Add an Assertion Component",id:"add-an-assertion-component",level:4},{value:"Additional Example",id:"additional-example",level:4},{value:"Run the Test",id:"run-the-test",level:3},{value:"Review Test Results",id:"review-test-results",level:3},{value:"Edit a Test",id:"edit-a-test",level:3},{value:"Test Options",id:"test-options",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Visual View and Code View",id:"visual-view-and-code-view",level:3},{value:"Visual View",id:"visual-view",level:4},{value:"Code View",id:"code-view",level:4},{value:"Add Child Component",id:"add-child-component",level:3},{value:"Component Options",id:"component-options",level:3},{value:"Save",id:"save",level:3},{value:"Publish",id:"publish",level:3},{value:"Clear",id:"clear",level:3},{value:"Run",id:"run",level:3},{value:"Input Sets",id:"input-sets",level:3},{value:"Unit View",id:"unit-view",level:3},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The API Testing Composer enables you to quickly generate API functional tests (no coding experience required) and/or code them from scratch. You can reuse these tests as end-to-end integration tests and load (stress) tests. In turn, load tests can be reused as monitors for performance testing."}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,t.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"creating-a-test-with-the-composer",children:"Creating a Test with the Composer"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-test",children:"Create a Test"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In Sauce Labs, click ",(0,t.jsx)(n.strong,{children:"API Testing"}),"."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/apit-nav-rebrend.png"),alt:"Navigating to API Testing",width:"200"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Projects"})," page:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you have no tests or projects yet, in the ",(0,t.jsx)(n.strong,{children:"Write your own test"})," box, click ",(0,t.jsx)(n.strong,{children:"Use Composer"}),"."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/composer-nav.webp"),alt:"Navigating to the Composer",width:"700"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you have a project but no tests, on the ",(0,t.jsx)(n.strong,{children:"Projects"})," page, click ",(0,t.jsx)(n.strong,{children:"Write your own test"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If your project has tests, click ",(0,t.jsx)(n.strong,{children:"Create Test"})," and then click ",(0,t.jsx)(n.strong,{children:"From Scratch"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/test-create-from-scratch-nav.png"),alt:"Navigating to the New Test window",width:"350"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"New Test"})," box, enter a test name, test description (optional), and tags (optional), and then click ",(0,t.jsx)(n.strong,{children:"Create Test"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/test-create-new-test.png"),alt:"New Test window",width:"350"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You can use either the ",(0,t.jsx)(n.strong,{children:"Visual"})," composer (guides you through building components, with no coding required) or the ",(0,t.jsx)(n.strong,{children:"Code"})," composer (requires you to write code from scratch). For this guide, we're using ",(0,t.jsx)(n.strong,{children:"Visual"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"/api-testing/composer/#input-sets",children:"Input Sets"})," and ",(0,t.jsx)(n.a,{href:"/api-testing/composer/#visual-view-and-code-view",children:"Visual View and Code View"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"add-test-components",children:"Add Test Components"}),"\n",(0,t.jsx)(n.p,{children:"When test components are combined, they act as our test logic. See the following pages for more information about the components types available in API Testing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/composer/io-components",children:"I/O Request Test Components"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/composer/assertion-components/",children:"Assertion Test Components"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/composer/logical-components/",children:"Logical Test Components"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/composer/other-components/",children:"Other Components"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"add-an-io-request-test-component",children:"Add an I/O Request Test Component"}),"\n",(0,t.jsxs)(n.p,{children:["To create a simple ",(0,t.jsx)(n.code,{children:"GET"})," request and validate that response is correct:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In API Testing, on the ",(0,t.jsx)(n.strong,{children:"Compose"})," page, click ",(0,t.jsx)(n.strong,{children:"Add child component"}),"."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/add-component-nav.png"),alt:"Navigating to the Add component screen"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["In the list of component options, click the ",(0,t.jsx)(n.strong,{children:"GET"})," component."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/get-request-nav.png"),alt:"Navigating to the GET request window"}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"GET request"})," window, in the ",(0,t.jsx)(n.strong,{children:"Url"})," field, enter ",(0,t.jsx)(n.code,{children:"https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions"}),". This endpoint will return a JSON response body."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Variable"})," field, enter ",(0,t.jsx)(n.strong,{children:"payload"}),". This variable stores the response, so it can now be referred to as ",(0,t.jsx)(n.strong,{children:"payload"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/get-request-window.webp"),alt:"Editing in the GET request window"}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Leave the rest of the fields blank and then click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The result should look like the following:"}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/get-request-final.webp"),alt:"What the GET request should look like",width:"600"}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"/api-testing/composer/io-components/",children:"I/O Request Test Components"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"add-an-assertion-component",children:"Add an Assertion Component"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In API Testing, on the ",(0,t.jsx)(n.strong,{children:"Compose"})," page, click ",(0,t.jsx)(n.strong,{children:"Add child component"}),"."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/add-component-nav.png"),alt:"Navigating to the Add component screen",width:"600"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["In the list of component options, click the ",(0,t.jsx)(n.strong,{children:"Assert Exists"})," component."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/assert-exists-nav.png"),alt:"Navigating to the Assert exists window"}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Assert exists"})," window, in the ",(0,t.jsx)(n.strong,{children:"Expression"})," field, enter ",(0,t.jsx)(n.code,{children:"payload.downloads"}),". This expression checks for the ",(0,t.jsx)(n.strong,{children:"downloads"})," field in the json response body."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Leave the rest of the fields blank and click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/assert-exists-window.webp"),alt:"Confirm changes",width:"600"}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"The result should look like the following:"}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/assert-exists-final.png"),alt:"What the Assert request should look like"}),"\n",(0,t.jsxs)(n.p,{children:["For more information, see ",(0,t.jsx)(n.a,{href:"/api-testing/composer/assertion-components/",children:"Assertion Test Components"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"additional-example",children:"Additional Example"}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, the expression checks if the ",(0,t.jsx)(n.code,{children:"download_url"})," value inside the Linux object is a valid URL."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In API Testing, on the ",(0,t.jsx)(n.strong,{children:"Compose"})," page, click ",(0,t.jsx)(n.strong,{children:"Add child component"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the list of component options, click the ",(0,t.jsx)(n.strong,{children:"Assert Is"})," component."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Assert is"})," window, in the ",(0,t.jsx)(n.strong,{children:"Expression"})," field, enter ",(0,t.jsx)(n.code,{children:"payload.downloads.linux.download_url"}),". This expression checks for the ",(0,t.jsx)(n.strong,{children:"download_url"})," field in the json response payload."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Leave the rest of the fields blank and click ",(0,t.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/assert-exists-window-2.webp"),alt:"Confirm changes",width:"600"}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"The result should look like the following:"}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/assert-exists-final-2.png"),alt:"What the Assert request should look like",width:"500"}),"\n",(0,t.jsx)(n.h3,{id:"run-the-test",children:"Run the Test"}),"\n",(0,t.jsxs)(n.p,{children:["In the Composer, click ",(0,t.jsx)(n.strong,{children:"Run"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/run-test-save-run.png"),alt:"Save and Run icons in the Composer",width:"500"}),"\n",(0,t.jsx)(n.p,{children:"All test runs appear to the right of the Composer, under the test details and environment sections."}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/test-runs.png"),alt:"Test Runs in the Composer",width:"350"}),"\n",(0,t.jsx)(n.h3,{id:"review-test-results",children:"Review Test Results"}),"\n",(0,t.jsxs)(n.p,{children:["To view your results, in the Composer, in the ",(0,t.jsx)(n.strong,{children:"Test Runs"})," list, click the name of the test. This will open the ",(0,t.jsx)(n.strong,{children:"Test Report Details"}),". For more information, see ",(0,t.jsx)(n.a,{href:"/api-testing/project-dashboard/#test-outcome-report",children:"Test Outcome Report"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"edit-a-test",children:"Edit a Test"}),"\n",(0,t.jsxs)(n.p,{children:["To edit a test at any time, on the ",(0,t.jsx)(n.strong,{children:"Projects"})," page, on the ",(0,t.jsx)(n.strong,{children:"Tests"})," screen, hover over a test name and then click ",(0,t.jsx)(n.strong,{children:"Edit Test"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("/img/api-testing/edit-test-icon-nav.png"),alt:"Navigating to the test editor",width:"300"}),"\n",(0,t.jsx)(n.h2,{id:"test-options",children:"Test Options"}),"\n",(0,t.jsxs)(n.p,{children:["Once you've generated your tests in the Composer, you can manage them from the ",(0,t.jsx)(n.strong,{children:"Tests"})," screen. In your project, on the ",(0,t.jsx)(n.strong,{children:"Tests"})," screen, hover your mouse over the test line item. You'll see icons that allow you to edit, run, schedule, or delete a test.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/test-options.png"),alt:"Test Options Icons"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Pencil icon: Edit the test (opens the ",(0,t.jsx)(n.strong,{children:"Compose"})," tab)"]}),"\n",(0,t.jsx)(n.li,{children:"Play icon: Run the test manually"}),"\n",(0,t.jsxs)(n.li,{children:["Calendar icon: Open the ",(0,t.jsx)(n.a,{href:"/api-testing/schedule-test",children:"test scheduler"})]}),"\n",(0,t.jsx)(n.li,{children:"Gauge icon: Opens the load testing page"}),"\n",(0,t.jsx)(n.li,{children:"Trash icon: Delete the test"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,t.jsx)(n.h3,{id:"visual-view-and-code-view",children:"Visual View and Code View"}),"\n",(0,t.jsx)(n.p,{children:"This toggle switches between the Visual and Code views in the Composer. You can make calls and add assertions for testing your APIs, and insert variables wherever needed. You can use either, depending on which you're more comfortable with."}),"\n",(0,t.jsx)(n.h4,{id:"visual-view",children:"Visual View"}),"\n",(0,t.jsxs)(n.p,{children:["Guides you through creating API tests using automated real-time suggestions via predictive text. No coding experience is required.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/visualView.png"),alt:"Test Composer Visual view"})]}),"\n",(0,t.jsx)(n.h4,{id:"code-view",children:"Code View"}),"\n",(0,t.jsxs)(n.p,{children:["Enables you to write tests here from scratch, if you feel more comfortable working in code.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/codeView.png"),alt:"Test Composer Code view"})]}),"\n",(0,t.jsx)(n.h3,{id:"add-child-component",children:"Add Child Component"}),"\n",(0,t.jsxs)(n.p,{children:["This button displays all available ",(0,t.jsx)(n.a,{href:"/api-testing/composer/assertion-components/",children:"assertion components"}),", ",(0,t.jsx)(n.a,{href:"/api-testing/composer/io-components/",children:"I/O components"}),", and ",(0,t.jsx)(n.a,{href:"/api-testing/composer/logical-components/",children:"logical components"}),".",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/add-component-nav.png"),alt:"Add Component"}),"\n",(0,t.jsxs)(n.p,{children:["If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes. For instance, if you don\u2019t add a ",(0,t.jsx)(n.code,{children:"POST"})," first, you cannot add a ",(0,t.jsx)(n.code,{children:"POST"})," Body or ",(0,t.jsx)(n.code,{children:"POST"})," Param."]}),"\n",(0,t.jsx)(n.h3,{id:"component-options",children:"Component Options"}),"\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Edit"})," to modify an existing component, or use the dropdown menu next to ",(0,t.jsx)(n.strong,{children:"Edit"})," to perform the actions shown below."]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/deleteComponent.webp"),alt:"Component Options"}),"\n",(0,t.jsx)(n.h3,{id:"save",children:"Save"}),"\n",(0,t.jsxs)(n.p,{children:["Saves your progress.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/saveTest.png"),alt:"Save"}),"\n",(0,t.jsx)(n.h3,{id:"publish",children:"Publish"}),"\n",(0,t.jsxs)(n.p,{children:["Publishes your test.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/publishtest.png"),alt:"Publish"}),"\n",(0,t.jsx)(n.h3,{id:"clear",children:"Clear"}),"\n",(0,t.jsxs)(n.p,{children:["Clears the most recent unpublished changes made to your test.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/cleartest.png"),alt:"Clear"}),"\n",(0,t.jsx)(n.h3,{id:"run",children:"Run"}),"\n",(0,t.jsxs)(n.p,{children:["Executes a test.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/runTest.png"),alt:"Run"}),"\n",(0,t.jsx)(n.h3,{id:"input-sets",children:"Input Sets"}),"\n",(0,t.jsxs)(n.p,{children:["Displays the Input Set view where you can store input data sets to reuse within the specific test you're working on.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/inputSets.png"),alt:"Input Sets",width:"500"}),"\n",(0,t.jsx)(n.p,{children:"There are two types of input data sets you can use:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Global Parameters - Variables that are specific to the test but are not related to a specific scenario (for example, api key)."}),"\n",(0,t.jsx)(n.li,{children:"Input Set - Group of input variables representing a scenario, valid for that specific test only. The test will be executed once for each input set, overriding the variable values into your test."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If you define a variable in both the Global Parameters and Input Set sections, the value used in the test is what you specified in the Input Set."}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Input Set with Visual View"})}),(0,t.jsx)("td",{children:(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/inputVisual.webp"),alt:"Input Set Visual View"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Input Set with Code View"})}),(0,t.jsx)("td",{children:(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/inputCode.png"),alt:"Input Set Code View"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"unit-view",children:"Unit View"}),"\n",(0,t.jsxs)(n.p,{children:["These buttons switch between the Input Set and Unit views.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("img",{src:(0,o.Ay)("img/api-testing/unitView.png"),alt:"Unit View"}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/quickstart",children:"API Testing Quickstart"})}),"\n",(0,t.jsxs)(n.li,{children:["Check our ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/working-with-headers",children:"Use Cases"})," out to see practical examples to help you write your tests."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);