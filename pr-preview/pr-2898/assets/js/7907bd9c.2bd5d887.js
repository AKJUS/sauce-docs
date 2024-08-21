"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[91854],{69586:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var t=s(74848),i=s(28453);const r=[];function a(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["You can clip to a specific element on the page by using the ",(0,t.jsx)(n.code,{children:"clipSelector"})," option when calling Sauce visual."]}),"\n",(0,t.jsx)(n.p,{children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Clipping is done by taking a screenshot of the page then clipping it to the location of the requested element."}),"\n",(0,t.jsx)(n.li,{children:"We will attempt to scroll the element into view before taking the snapshot."}),"\n",(0,t.jsx)(n.li,{children:"We can only take a screenshot of what is visible in the current viewport, however, this can be combined with full page option to enable clipping large vertical elements."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8254:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var t=s(74848),i=s(28453);const r=[];function a(e){const n={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Variable Name"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_USERNAME"})}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs username. You can get this from the header of app.saucelabs.com"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs access key. You can get this from the header of app.saucelabs.com"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_REGION"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The region you'd like to run your Visual tests in. Defaults to ",(0,t.jsx)(n.code,{children:"us-west-1"})," if not supplied. Can be one of the following: ",(0,t.jsx)("br",{})," ",(0,t.jsx)(n.code,{children:"'eu-central-1'"}),", ",(0,t.jsx)(n.code,{children:"'us-west-1'"})," or ",(0,t.jsx)(n.code,{children:"'us-east-4'"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_NAME"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The name you would like to appear in the Sauce Visual dashboard."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_BRANCH"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The branch name you would like to associate this build with. We recommend using your current VCS branch in CI."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_DEFAULT_BRANCH"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["The main branch name you would like to associate this build with. Usually ",(0,t.jsx)(n.code,{children:"main"})," or ",(0,t.jsx)(n.code,{children:"master"})," or alternatively the branch name your current branch was derived from. ",(0,t.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2898/visual-testing/workflows/ci",children:"Follow me to learn more"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_PROJECT"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The label / project you would like to associate this build with."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_ID"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["For advanced users, a user-supplied SauceLabs Visual build ID. Can be used to create builds in advance using the GraphQL API. This can be used to parallelize tests with multiple browsers, shard, or more. ",(0,t.jsx)("br",{})," By default, this is not set and we create / finish a build during setup / teardown."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_CUSTOM_ID"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"For advanced users, a user-supplied custom ID to identify this build. Can be used in CI to identify / check / re-check the status of a single build. Usage suggestions: CI pipeline ID."})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},32309:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var t=s(74848),i=s(28453);const r=[];function a(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective on snapshot."})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},12758:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var t=s(74848),i=s(28453);const r=[];function a(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,t.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective specific regions of the snapshot."})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},59697:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>r});var t=s(74848),i=s(28453);const r=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Sauce Visual allows selective diffing that permits to ignore changes from a certain kind (",(0,t.jsxs)(n.em,{children:["more information ",(0,t.jsx)(n.a,{href:"/visual-testing/selective-diffing/",children:"here"})]}),")."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Selective diffing is only available with ",(0,t.jsx)(n.code,{children:"Balanced"})," diffing method ",(0,t.jsx)(n.strong,{children:"AND"})," with DOM capture enabled."]})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},59447:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>p,default:()=>j,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var t=s(74848),i=s(28453),r=s(11470),a=s(19365),l=s(69586),c=s(8254),o=s(59697),d=s(32309),u=s(12758);const h={sidebar_label:"Cypress"},p="Cypress Integration",g={id:"visual-testing/integrations/cypress",title:"Cypress Integration",description:"Introduction",source:"@site/docs/visual-testing/integrations/cypress.md",sourceDirName:"visual-testing/integrations",slug:"/visual-testing/integrations/cypress",permalink:"/sauce-docs/pr-preview/pr-2898/visual-testing/integrations/cypress",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/integrations/cypress.md",tags:[],version:"current",lastUpdatedBy:"F\xe9lix P",lastUpdatedAt:1719584288e3,frontMatter:{sidebar_label:"Cypress"},sidebar:"docs",previous:{title:"API Lifecycle",permalink:"/sauce-docs/pr-preview/pr-2898/visual-testing/workflows/api-lifecycle"},next:{title:"C#/.Net",permalink:"/sauce-docs/pr-preview/pr-2898/visual-testing/integrations/csharp"}},x={},f=[{value:"Introduction",id:"introduction",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Step 1: Add Sauce Visual for Cypress dependency",id:"step-1-add-sauce-visual-for-cypress-dependency",level:3},{value:"Step 2: Configure Cypress to use Sauce Visual for Cypress plugin",id:"step-2-configure-cypress-to-use-sauce-visual-for-cypress-plugin",level:3},{value:"Step 3: Add visual tests in your project:",id:"step-3-add-visual-tests-in-your-project",level:3},{value:"Step 4: Configure your Sauce Labs credentials",id:"step-4-configure-your-sauce-labs-credentials",level:3},{value:"Step 5: Run the test",id:"step-5-run-the-test",level:3},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Test results summary",id:"test-results-summary",level:3},{value:"Build name",id:"build-name",level:3},{value:"Environment variables",id:"environment-variables",level:3},...c.RM,{value:"Working with custom ID",id:"working-with-custom-id",level:3},{value:"Ignored regions",id:"ignored-regions",level:3},{value:"Component-based ignored region",id:"component-based-ignored-region",level:4},{value:"User-specified ignored region",id:"user-specified-ignored-region",level:4},{value:"Selective Diffing",id:"selective-diffing",level:3},...o.RM,{value:"Screenshot-wide configuration",id:"screenshot-wide-configuration",level:4},...d.RM,{value:"Area-specific configuration",id:"area-specific-configuration",level:4},...u.RM,{value:"Specifying options for Cypress Screenshot",id:"specifying-options-for-cypress-screenshot",level:3},{value:"Capturing the DOM snapshot",id:"capturing-the-dom-snapshot",level:3},{value:"Full page screenshots",id:"full-page-screenshots",level:3},{value:"Clip to an element",id:"clip-to-an-element",level:3},...l.RM,{value:"Limitations",id:"limitations",level:2},{value:"Example",id:"example",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cypress-integration",children:"Cypress Integration"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["This guide requires an existing Cypress project.",(0,t.jsx)("br",{}),"\nYou can alternatively take a look to our ",(0,t.jsx)(n.a,{href:"#example",children:"example repository"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Visual provides an integration with ",(0,t.jsx)(n.a,{href:"https://cypress.io",children:"Cypress"})," through a plugin that you can add to any existing Cypress project."]}),"\n",(0,t.jsx)(n.p,{children:"Sauce Visual introduce a new Cypress command:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.sauceVisualCheck()"}),": Takes a screenshot and send it to Sauce Visual for comparison."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cy.sauceVisualResults()"}),": Waits for diff calculations to complete and returns a summary of results.\nSee ",(0,t.jsx)(n.a,{href:"#test-results-summary",children:"Test results summary"})," for more details about summary format and sample usage."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Important",type:"note",children:[(0,t.jsx)(n.p,{children:"Running Cypress tests on Sauce Labs requires SauceCTL to be installed and configured."}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/web-apps/automated-testing/cypress/",children:"Follow me to learn more"})})]}),"\n",(0,t.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-add-sauce-visual-for-cypress-dependency",children:"Step 1: Add Sauce Visual for Cypress dependency"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Install the Sauce Visual for Cypress plugin in your current project."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev @saucelabs/cypress-visual-plugin\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-configure-cypress-to-use-sauce-visual-for-cypress-plugin",children:"Step 2: Configure Cypress to use Sauce Visual for Cypress plugin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Import the plugin in Cypress project configuration, at the top of the file:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { CypressSauceVisual } from '@saucelabs/cypress-visual-plugin';\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Register the plugin to Cypress events in Cypress project configuration:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export default defineConfig({\n  e2e: {\n    [...]\n    setupNodeEvents(on, config) {\n      ...\n      CypressSauceVisual.register(on, config);\n      ...\n    },\n  },\n})\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Register Sauce Visual for Cypress commands. Add the following line in your ",(0,t.jsx)(n.code,{children:"cypress/support/e2e.ts"}),":"]}),"\n"]}),"\n",(0,t.jsxs)(r.A,{defaultValue:"Cypress 12.17.4+",values:[{label:"Cypress 12.17.4+",value:"Cypress 12.17.4+"},{label:"Cypress 12.17.3 and older",value:"Cypress 12.17.3"}],children:[(0,t.jsx)(a.A,{value:"Cypress 12.17.4+",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import '@saucelabs/cypress-visual-plugin/commands';\n"})})}),(0,t.jsx)(a.A,{value:"Cypress 12.17.3",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import '@saucelabs/cypress-visual-plugin/build/commands';\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"step-3-add-visual-tests-in-your-project",children:"Step 3: Add visual tests in your project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"context('Sauce Demo', () => {\n  it('should render correctly', () => {\n    ...\n    cy.sauceVisualCheck('visual: my-homepage');\n    ...\n  })\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-4-configure-your-sauce-labs-credentials",children:"Step 4: Configure your Sauce Labs credentials"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Visual relies on environment variables for authentications.",(0,t.jsx)("br",{}),"\nBoth ",(0,t.jsx)(n.code,{children:"SAUCE_USERNAME"})," and ",(0,t.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})," need to be set prior starting your Cypress job."]}),"\n",(0,t.jsxs)(n.p,{children:["Username and Access Key can be retrieved from ",(0,t.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"https://app.saucelabs.com/user-settings"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__\nexport SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-5-run-the-test",children:"Step 5: Run the test"}),"\n",(0,t.jsxs)(n.p,{children:["Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent Cypress tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at ",(0,t.jsx)(n.a,{href:"https://app.saucelabs.com/visual/builds",children:"Sauce Visual Builds"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review."}),"\n",(0,t.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,t.jsx)(n.h3,{id:"test-results-summary",children:"Test results summary"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cy.sauceVisualResults()"})," returns a summary of test results in format:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n    QUEUED: number; // Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts\n    EQUAL: number; // Diffs that have no changes detected\n    UNAPPROVED: number; // Diffs that have detected changes and waiting for action\n    APPROVED: number; // Diffs that have detected changes and have been approved\n    REJECTED: number; // Diffs that have detected changes and have been rejected\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{ APPROVED: 0, EQUAL: 0, UNAPPROVED: 2, REJECTED: 0, QUEUED: 0 }\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sample usage:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'const EXPECTED_TOTAL_UNAPPROVED_DIFFS = 0;\n\ncy.sauceVisualResults().its("UNAPPROVED").should("eq", EXPECTED_TOTAL_UNAPPROVED_DIFFS);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"build-name",children:"Build name"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Visual for Cypress plugin extends Cypress configuration, allowing to define the context, thus acting on which baselines new snapshots will be compared to. (",(0,t.jsx)(n.a,{href:"/visual-testing/#baseline-matching",children:"More info on baseline matching"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"Options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"region"}),": Sauce Labs Region where the new build will be created (default: ",(0,t.jsx)(n.code,{children:"us-west-1"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"buildName"}),": Name of the build (default: ",(0,t.jsx)(n.code,{children:"Cypress Visual Testing"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"project"}),": Name of the project (default: ",(0,t.jsx)(n.code,{children:"None"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"branch"}),": Name of branch (default: ",(0,t.jsx)(n.code,{children:"None"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"defaultBranch"}),": Name of the main or default branch (default: ",(0,t.jsx)(n.code,{children:"None"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["They need to be set through the ",(0,t.jsx)(n.code,{children:"saucelabs"})," attribute of ",(0,t.jsx)(n.code,{children:"e2e"})," configuration."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export default defineConfig({\n  e2e: {\n    [...]\n    saucelabs: {\n      region: 'eu-central-1',\n      buildName: 'SauceDemo - Cypress',\n      project: 'Cypress examples',\n      branch: 'main',\n    },\n    [...]\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsx)(n.p,{children:"Below are the environment variables available for the Sauce Visual for Cypress plugin. Keep in mind that the variables defined in Cypress configuration have precedence over these variables."}),"\n",(0,t.jsx)(c.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"working-with-custom-id",children:"Working with custom ID"}),"\n",(0,t.jsx)(n.p,{children:"Linking all your Sauce Visual tests to one build ID can streamline your workflow, especially in CI setups. This enables easy management using the Sauce Visual CLI, like creating builds with custom IDs, adding snapshots, and completing builds. This way, you can efficiently handle multiple tests grouped under the same build in Sauce Visual."}),"\n",(0,t.jsxs)(n.p,{children:["When you use ",(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_CUSTOM_ID"}),", Sauce Visual checks if there's an existing build with that ID. If found, your tests are linked to it; otherwise, Sauce Visual creates a new build. In contrast, using ",(0,t.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_ID"})," requires an existing build with the provided ID; otherwise, an error occurs."]}),"\n",(0,t.jsx)(n.h3,{id:"ignored-regions",children:"Ignored regions"}),"\n",(0,t.jsx)(n.h4,{id:"component-based-ignored-region",children:"Component-based ignored region"}),"\n",(0,t.jsx)(n.p,{children:"Sauce Visual provides a way to ignore a list of components."}),"\n",(0,t.jsx)(n.p,{children:"An ignored component can be a specific element from the page."}),"\n",(0,t.jsx)(n.p,{children:"Those ignored components are specified when requesting a new snapshot."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.sauceVisualCheck('login-page', {\n  ignoredRegions: [\n    cy.get('[data-test=\"username\"]'),\n  ]\n});\n"})}),"\n",(0,t.jsx)(n.h4,{id:"user-specified-ignored-region",children:"User-specified ignored region"}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, ignored regions can be user-specified areas. A region is defined by four elements."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"x"}),", ",(0,t.jsx)(n.code,{children:"y"}),": The location of the top-left corner of the ignored region"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"width"}),": The width of the region to ignore"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"height"}),": The height of the region to ignore"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: all values are pixels"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.sauceVisualCheck('login-page', {\n  ignoredRegions: [\n    {\n      x: 240,\n      y: 800,\n      width: 1520,\n      height: 408\n    }\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"selective-diffing",children:"Selective Diffing"}),"\n",(0,t.jsx)(o.Ay,{}),"\n",(0,t.jsx)(n.h4,{id:"screenshot-wide-configuration",children:"Screenshot-wide configuration"}),"\n",(0,t.jsx)(d.Ay,{}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    cy.sauceVisualCheck('login-page', {\n      diffingMethod: DiffingMethod.Balanced,\n      captureDom: true,\n      // Content changes won't be reported as a difference\n      diffingOptions: {\n        content: false,\n        dimensions: true,\n        position: true,\n        structure: true,\n        style: true,\n        visual: true,\n      },\n    });\n"})}),"\n",(0,t.jsx)(n.h4,{id:"area-specific-configuration",children:"Area-specific configuration"}),"\n",(0,t.jsx)(u.Ay,{}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    cy.sauceVisualCheck('login-page', {\n      diffingMethod: DiffingMethod.Balanced,\n      captureDom: true,\n      regions: [\n        // Any change will be ignored.\n        { element: cy.get('[data-test=\"username\"]'), enableOnly: [] },\n        // Only style changes won't be ignored.\n        { element: cy.get('[data-test=\"password\"]'), enableOnly: ['style'] },\n      ],\n    })\n"})}),"\n",(0,t.jsx)(n.h3,{id:"specifying-options-for-cypress-screenshot",children:"Specifying options for Cypress Screenshot"}),"\n",(0,t.jsx)(n.p,{children:"Sauce Visual relies on the native screenshot feature from Cypress. Options in cy.snapshot can be specified in the cy.visualCheck command."}),"\n",(0,t.jsxs)(n.p,{children:["The field ",(0,t.jsx)(n.code,{children:"cypress"})," from ",(0,t.jsx)(n.code,{children:"options"})," will be transmitted as it to ",(0,t.jsx)(n.code,{children:"cy.screenshot"})," command. (See ",(0,t.jsx)(n.a,{href:"https://docs.cypress.io/api/commands/screenshot#Arguments",children:"Cypress documentation"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.sauceVisualCheck('login-page', {\n  cypress: {\n    capture: 'viewport',\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"capturing-the-dom-snapshot",children:"Capturing the DOM snapshot"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Visual does not capture dom snapshot by default. It can be changed in ",(0,t.jsx)(n.code,{children:"sauceVisualCheck"})," options."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.sauceVisualCheck('login-page', {\n    captureDom: true\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"full-page-screenshots",children:"Full page screenshots"}),"\n",(0,t.jsxs)(n.p,{children:["Cypress natively offers full page screenshots -- you can pass options into our ",(0,t.jsx)(n.code,{children:"sauceVisualCheck"})," function in order to enable it for your visual checks."]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.sauceVisualCheck('Inventory Page', {\n    cypress: {\n        // One or more options to be passed directly to the cy.screenshot() function call.\n        capture: 'fullPage',\n    },\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"clip-to-an-element",children:"Clip to an element"}),"\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"cy.sauceVisualCheck('Inventory Page', {\n    clipSelector: '.your-css-selector',\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Visual for Cypress ",(0,t.jsx)(n.strong,{children:"DOES NOT"})," support ",(0,t.jsx)(n.code,{children:"cypress open"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Screenshots will be captured and sent to Sauce Labs only when ",(0,t.jsx)(n.code,{children:"cypress run"})," is executed."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["An example project is available ",(0,t.jsx)(n.a,{href:"https://github.com/saucelabs/visual-examples/tree/main/cypress",children:"here"}),"."]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var t=s(18215);const i={tabItem:"tabItem_Ymn6"};var r=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,a),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>C});var t=s(96540),i=s(18215),r=s(23104),a=s(56347),l=s(205),c=s(57485),o=s(31682),d=s(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:s}=e;const i=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,r=h(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,u]=g({queryString:s,groupId:i}),[x,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),m=(()=>{const e=o??x;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=s(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function y(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),i=l[s].value;i!==t&&(o(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function b(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function C(e){const n=(0,f.A)();return(0,j.jsx)(b,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);