"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[11658],{4354:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(74848),i=t(28453);const o={id:"apif-auto",title:"APIF-Auto: Command-Line Tool",sidebar_label:"APIF-Auto",keywords:["cicd","jenkins","bamboo","microsoft tfs","team foundation server","gitlab ci/cd","travisci"]},r=void 0,l={id:"api-testing/on-prem/ci/apif-auto",title:"APIF-Auto: Command-Line Tool",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/ci/apif-auto.md",sourceDirName:"api-testing/on-prem/ci",slug:"/api-testing/on-prem/ci/apif-auto",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/on-prem/ci/apif-auto",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/ci/apif-auto.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1688681034e3,frontMatter:{id:"apif-auto",title:"APIF-Auto: Command-Line Tool",sidebar_label:"APIF-Auto",keywords:["cicd","jenkins","bamboo","microsoft tfs","team foundation server","gitlab ci/cd","travisci"]},sidebar:"apif",previous:{title:"Using Databases",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/on-prem/bloodhound/using-databases"},next:{title:"Azure DevOps",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/on-prem/ci/azure-devops"}},a={},c=[{value:"APIF-RUN",id:"apif-run",level:2},{value:"RUN EXECUTION FLAGS",id:"run-execution-flags",level:3},{value:"RUN OPTION FLAGS",id:"run-option-flags",level:3},{value:"APIF-PUSH",id:"apif-push",level:2},{value:"PUSH EXECUTION FLAGS",id:"push-execution-flags",level:3},{value:"PUSH OPTION FLAGS",id:"push-option-flags",level:3},{value:"CONFIGURATION FILE",id:"configuration-file",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"NOTES",id:"notes",level:2},{value:"POST-RECEIVE SCRIPT FOR GIT",id:"post-receive-script-for-git",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(s.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Welcome to the API Fortress Command-Line Tools!"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The tool itself: ",(0,n.jsx)(s.a,{href:"https://github.com/apifortress/afcmd/releases",children:"https://github.com/apifortress/afcmd/releases"})]}),"\n",(0,n.jsxs)(s.li,{children:["The documentation for the API that tool leverages: ",(0,n.jsx)(s.a,{href:"https://apifortressv3.docs.apiary.io/",children:"https://apifortressv3.docs.apiary.io/"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The tool, or rather, pair of tools, are designed to reduce the amount of legwork that goes into executing or uploading API Fortress tests. The following readme will explain each part of the process."}),"\n",(0,n.jsx)(s.p,{children:"APFCMD allows a user to easily integrate API Fortress testing into other workflows. Example use cases are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Executing API Fortress tests from a CI/CD tool"}),"\n",(0,n.jsx)(s.li,{children:"Incorporating API Fortress tests in a Git version control plan."}),"\n",(0,n.jsx)(s.li,{children:"Pushing test code from an IDE to the API Fortress platform."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"All of these scenarios, and more, can be accomplished with the tool."}),"\n",(0,n.jsx)(s.p,{children:"Lets take a look at the two major components of the tool:"}),"\n",(0,n.jsx)(s.h2,{id:"apif-run",children:"APIF-RUN"}),"\n",(0,n.jsx)(s.p,{children:"Run allows us to execute tests on the platform and do things with that data. We can run tests via API either in an authenticated or unauthenticated state. By passing credentials, we receive a more verbose test result. We can output this result to a file. We also have access to all of the standard options that API Fortress provides in its API (silent run, dry run, etc.)"}),"\n",(0,n.jsx)(s.h3,{id:"run-execution-flags",children:"RUN EXECUTION FLAGS"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"run-all"})})," - RUN ALL - This will execute all of the tests in a chosen project."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"run-by-tag"})})," - RUN BY TAG - This will execute all tests with a selected tag (requires the -t flag to set tag)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"run-by-id"})})," - RUN BY ID - This will execute a test with a specific ID (requires the -i flag to set id)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"hook"})})," - HOOK - This is the webhook of the project you are working with. This can be either an API Fortress URL, or the key from a configuration file (set the path to the config file with the ",(0,n.jsx)(s.strong,{children:"-c"})," tag)"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To run all of the tests in a specific project, we would use the following command string:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"python apif-run.py run-all http://mastiff.apifortress.com/yourWebHook\n"})}),"\n",(0,n.jsx)(s.h3,{id:"run-option-flags",children:"RUN OPTION FLAGS"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-S"})})," - SYNC - This will provide a response body with the result of the test."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-f"})})," - FORMAT - This will determine the format of the test result output (JSON, JUnit, Bool). ",(0,n.jsxs)(s.strong,{children:["REQUIRES SYNC MODE (",(0,n.jsx)(s.code,{children:"-S"}),")"]})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-d"})})," - DRY - This will cause the test run to be a dry run."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-s"})})," - SILENT - This will cause the test to run in silent mode."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-o"})})," - OUTPUT - This will write the result of the test to a local file. You must provide the path to the file to be created. Remember your filetype! (",(0,n.jsx)(s.code,{children:".json/.xml"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-c"})})," - CONFIG - This provides the path to a configuration file which can provide webhooks and user credentials. If no path is specified, the program will look for a config.yml in the same directory as it is (",(0,n.jsx)(s.code,{children:"./config.yml"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-C"})})," - CREDENTIALS - This allows you to manually pass user credentials (",(0,n.jsx)(s.code,{children:"username:password"}),") ",(0,n.jsx)(s.strong,{children:"(SUPERSEDES CONFIG FILE)"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-t"})})," - TAG - This is how you pass a tag for RUN BY TAG mode."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-i"})})," - ID - This is how you pass an ID for RUN BY ID mode."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-e"})})," - ENVIRONMENT - This is how you pass environmental/override variables. The format is ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"key:value"})}),". You can pass multiple sets of environmental variables like so: ",(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"key:value"})," ",(0,n.jsx)(s.code,{children:"key1:value1"})," ",(0,n.jsx)(s.code,{children:"key2:value2"})]})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"apif-push",children:"APIF-PUSH"}),"\n",(0,n.jsxs)(s.p,{children:["Push allows us to push tests into API Fortress. When tests are downloaded from the platform, they come as 2 XML files (",(0,n.jsx)(s.code,{children:"unit.xml"})," & ",(0,n.jsx)(s.code,{children:"input.xml"}),"). We can use this tool to push those files back to an API Fortress project, either individually or in bulk."]}),"\n",(0,n.jsx)(s.h3,{id:"push-execution-flags",children:"PUSH EXECUTION FLAGS"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"hook"})})," - HOOK - This is the webhook of the project you are working with. This can be either an API Fortress URL, or the key from a configuration file (set the path to the config file with the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-c"})})," tag)"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"push-option-flags",children:"PUSH OPTION FLAGS"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-p"})})," - PATH - This provides the path to the test file you wish to upload. ",(0,n.jsx)(s.strong,{children:"You can pass multiple paths."})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-r"})})," - RECURSIVE - This flag will make the call recursive; It will dive through the directory passed with ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-p"})})," and grab every test in all of its subdirectories."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-b"})})," - BRANCH - This allows you to specify a Git branch that these test files are attached to. ",(0,n.jsx)(s.strong,{children:"Default is master."})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-c"})})," - CONFIG - This provides the path to a configuration file which can provide webhooks and user credentials. If no path is specified, the program will look for a config.yml in the same directory as it is (",(0,n.jsx)(s.code,{children:"./config.yml"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-C"})})," - CREDENTIALS - This allows you to manually pass user credentials (",(0,n.jsx)(s.code,{children:"username:password"}),") ",(0,n.jsx)(s.strong,{children:"(SUPERSEDES CONFIG FILE)"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-T"})})," - TAG - This allows you to pass tags to be appended to the test after it is pushed. This will ",(0,n.jsx)(s.strong,{children:"OVERWRITE ANY EXISTING TAGS"}),". Multiple tags can be passed."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-t"})})," - ADD TAG - This will allow you to add additional tags to a test that already has tags attached."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"configuration-file",children:"CONFIGURATION FILE"}),"\n",(0,n.jsx)(s.p,{children:"A configuration file is a YAML file that is formatted as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"hooks:\n- key: cool_proj1\n  url: https://mastiff.apifortress.com/app/api/rest/v3/A_WEBHOOK\n  credentials:\n  username: (your username)\n  password: (your password)\n- key: uncool_proj\n  url: https://mastiff.apifortress.com/app/api/rest/v3/ANOTHER_WEBHOOK\n  credentials:\n  username: (another username)\n  password: (another password)\n- key: unauth_proj\n  url: https://mastiff.apifortress.com/app/api/rest/v3/JUST_A_WEBHOOK_WITHOUT_CREDENTIALS\ntest_directory: /tests\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Once you create a configuration file, you can pass the path with ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-c"})})," and the key to the data in place of the normal hook URL. If you also pass credentials, they'll override the credentials in the configuration file. If you don't include credentials in the config file, you can pass them manually or leave them out entirely."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"EXAMPLES"}),"\n",(0,n.jsx)(s.p,{children:"Execute all of the tests in a project and output the results to a JUnit/XML file via an authenticated route:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"python apif-run.py run-all http://mastiff.apifortress.com/yourWebHook -S -C my@username.com:password1 -f junit -o some/route/results.xml\n"})}),"\n",(0,n.jsx)(s.p,{children:"Push all of the tests from a directory and all of its subdirectories to a project:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"python apif-push.py http://mastiff.apifortress.com/yourWebHook -C my@username.com:password1 -r -p some/directory/with/tests\n"})}),"\n",(0,n.jsx)(s.p,{children:"Execute one test in a project by ID, using a config file for credentials and webhook:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"python apif-run.py run-by-id config_key -c path/to/config/file -i testidhash8924jsdfiwef891\n"})}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"NOTES"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The order of the optional arguments passed does not matter."}),"\n",(0,n.jsx)(s.li,{children:"Remember, in a bash environment, anything that has a space in it needs to be wrapped in quotes. This goes for paths, filenames, etc."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"post-receive-script-for-git",children:"POST-RECEIVE SCRIPT FOR GIT"}),"\n",(0,n.jsxs)(s.p,{children:["This Post-Receive script is meant to assist in the incorporation of API Fortress in your Git workflow. Dropping the file into the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"hooks"})})," directory of your ",(0,n.jsx)(s.code,{children:".git"})," file will cause newly committed API Fortress test code to be pushed to the API Fortress platform."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"test_directory"})})," key in the ",(0,n.jsx)(s.code,{children:"config.yml"})," will let the scripts know which folder the tests themselves are located in. It will then watch for commits from this folder and push the appropriate code to the platform."]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var n=t(96540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);