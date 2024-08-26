"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[67225],{45766:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var l=i(74848),r=i(28453),a=i(86025);const s={id:"variables",title:"Variables",sidebar_label:"Variables"},t=void 0,d={id:"dev/low-code/variables",title:"Variables",description:"Creating a Variable",source:"@site/docs/dev/low-code/variables.md",sourceDirName:"dev/low-code",slug:"/dev/low-code/variables",permalink:"/sauce-docs/pr-preview/pr-2904/dev/low-code/variables",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/low-code/variables.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1681151723e3,frontMatter:{id:"variables",title:"Variables",sidebar_label:"Variables"},sidebar:"aiq",previous:{title:"Step Reference",permalink:"/sauce-docs/pr-preview/pr-2904/dev/low-code/nlp-reference"},next:{title:"Troubleshooting",permalink:"/sauce-docs/pr-preview/pr-2904/dev/low-code/troubleshooting"}},c={},o=[{value:"Creating a Variable",id:"creating-a-variable",level:2},{value:"Saving a Variable from a Label or <code>xpath</code>",id:"saving-a-variable-from-a-label-or-xpath",level:2},{value:"Local Variables",id:"local-variables",level:2},{value:"<code>safe_click</code> Variable",id:"safe_click-variable",level:2},{value:"Other Actions",id:"other-actions",level:2},{value:"<code>--ignoreAlert</code>",id:"--ignorealert",level:3},{value:"Example",id:"example",level:4},{value:"<code>--dynamicXpath</code>",id:"--dynamicxpath",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>Force...</code>",id:"force",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>--moveAndClick</code>",id:"--moveandclick",level:3},{value:"Example",id:"example-3",level:4},{value:"Supported Keyboard Operations",id:"supported-keyboard-operations",level:3},{value:"<code>no_scroll</code>",id:"no_scroll",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>--nofuzzy</code>",id:"--nofuzzy",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>Print...</code>",id:"print",level:3},{value:"<code>get element details</code>",id:"get-element-details",level:3},{value:"Example",id:"example-6",level:4},{value:"<code>use_full_screenshot</code>",id:"use_full_screenshot",level:3},{value:"<code>maintenance</code>",id:"maintenance",level:4},{value:"<code>page_scroll</code>",id:"page_scroll",level:3},{value:"Example",id:"example-7",level:4},{value:"Remote Execution and Script Generation",id:"remote-execution-and-script-generation",level:3},{value:"<code>use custom code from file</code>",id:"use-custom-code-from-file",level:3},{value:"Test Data Generation",id:"test-data-generation",level:3},{value:"Examples",id:"examples",level:4},{value:"Script Execution",id:"script-execution",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Saving with Execution",id:"saving-with-execution",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"JavaScript",id:"javascript",level:3},{value:"PythonScript",id:"pythonscript",level:3},{value:"Luhn Algorithm or Modulus 10 Algorithm",id:"luhn-algorithm-or-modulus-10-algorithm",level:3},{value:"Example",id:"example-8",level:4},{value:"Dropdown Validation",id:"dropdown-validation",level:3},{value:"Validate One Value",id:"validate-one-value",level:4},{value:"Validate Multiple Values",id:"validate-multiple-values",level:4},{value:"Return the Number of Text Values that Exist in a Dropdown",id:"return-the-number-of-text-values-that-exist-in-a-dropdown",level:4},{value:"Shell",id:"shell",level:3},{value:"Find the Difference between Two Dates",id:"find-the-difference-between-two-dates",level:4},{value:"Get System Time",id:"get-system-time",level:4},{value:"Excel Functions",id:"excel-functions",level:2},{value:"Sum",id:"sum",level:3},{value:"Difference",id:"difference",level:3},{value:"Multiplication",id:"multiplication",level:3},{value:"Division",id:"division",level:3},{value:"Round",id:"round",level:3},{value:"Greater Than",id:"greater-than",level:3},{value:"Dates",id:"dates",level:3},{value:"Days between Dates",id:"days-between-dates",level:4},{value:"Currency Symbols as Prefix",id:"currency-symbols-as-prefix",level:3},{value:"Other",id:"other",level:3},{value:"Excel with Numbers",id:"excel-with-numbers",level:4},{value:"Excel with String",id:"excel-with-string",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"creating-a-variable",children:"Creating a Variable"}),"\n",(0,l.jsx)(n.p,{children:"To create a variable, use the following syntax:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"[action] and save it as [variable_name]"})}),"\n",(0,l.jsx)(n.p,{children:"Example:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Enter \u201cusername\u201d and save it as my_name"})}),"\n",(0,l.jsxs)(n.p,{children:["Use ",(0,l.jsx)(n.code,{children:"${varName}"})," to reference the created variable."]}),"\n",(0,l.jsxs)(n.h2,{id:"saving-a-variable-from-a-label-or-xpath",children:["Saving a Variable from a Label or ",(0,l.jsx)(n.code,{children:"xpath"})]}),"\n",(0,l.jsx)(n.p,{children:"When saving a variable, only the text from that element or xpath will be saved."}),"\n",(0,l.jsx)(n.p,{children:"Syntax:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'save {xpath:"xpath_value"} as [variable name]'})}),"\n",(0,l.jsx)(n.h2,{id:"local-variables",children:"Local Variables"}),"\n",(0,l.jsxs)(n.p,{children:["Variables declared with ",(0,l.jsx)(n.code,{children:"_variablename"})," within the test steps are local variables that are only accessible within the test case."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Local variables cannot be declared on the ",(0,l.jsx)(n.strong,{children:"Variables"})," tab."]})}),"\n",(0,l.jsxs)(n.h2,{id:"safe_click-variable",children:[(0,l.jsx)(n.code,{children:"safe_click"})," Variable"]}),"\n",(0,l.jsxs)(n.p,{children:["If the ",(0,l.jsx)(n.code,{children:"safe_click"})," variable is set to true, stale enter and click actions will be rediscovered after restarting the page."]}),"\n",(0,l.jsx)(n.h2,{id:"other-actions",children:"Other Actions"}),"\n",(0,l.jsx)(n.h3,{id:"--ignorealert",children:(0,l.jsx)(n.code,{children:"--ignoreAlert"})}),"\n",(0,l.jsxs)(n.p,{children:["By default, Sauce Labs Low-Code will check if a browser alert is present before interacting with any element on the screen. If an unhandled alert is present (see ",(0,l.jsx)(n.a,{href:"/dev/low-code/nlp-reference#switch-to-tab-or-window",children:"Switch to alert..."})," for more information), the test step will fail with an error message stating that the alert is unhandled. To prevent the test step failing, use the ",(0,l.jsx)(n.code,{children:"ignoreAlert"})," action."]}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Click on \u201clogin\u201d button --ignoreAlert"})}),"\n",(0,l.jsx)(n.h3,{id:"--dynamicxpath",children:(0,l.jsx)(n.code,{children:"--dynamicXpath"})}),"\n",(0,l.jsx)(n.p,{children:"Xpaths are cached for every test step so that subsequent script generations will be faster. However, if you don\u2019t want to use the cached xpath for a certain step, you can provide a dynamicXpath option."}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Click on ${order_id} --dynamicXpath"})}),"\n",(0,l.jsx)(n.p,{children:"If an xpath is not valid due to it being dynamic or an application change, it will be auto-healed, which guarantees that the plain English step will not fail due to invalid xpaths."}),"\n",(0,l.jsx)(n.h3,{id:"force",children:(0,l.jsx)(n.code,{children:"Force..."})}),"\n",(0,l.jsxs)(n.p,{children:["Only enabled elements can be interacted with. To interact with a disabled element, use the ",(0,l.jsx)(n.code,{children:"Force..."})," action."]}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Force click on \u201clogin\u201d"})}),"\n",(0,l.jsx)(n.h3,{id:"--moveandclick",children:(0,l.jsx)(n.code,{children:"--moveAndClick"})}),"\n",(0,l.jsxs)(n.p,{children:["Sauce Labs Low-Code uses Selenium click, but if it fails, it switches to Javascript click. However, if you want to specifically use action-chain click, use the ",(0,l.jsx)(n.code,{children:"moveAndClick"})," action."]}),"\n",(0,l.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Click on \u201clogin\u201d --moveAndClick"})}),"\n",(0,l.jsx)(n.h3,{id:"supported-keyboard-operations",children:"Supported Keyboard Operations"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Hit alt"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Hit Down arrow key"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Hit enter"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Hit escape"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Hit spacebar"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Hit tab"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"hit up arrow key"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Scroll up"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Scroll down"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"spinner"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["If the application under test has spinners or progress bars as a part of the UI design, you can specify the spinner information as a variable on the ",(0,l.jsx)(n.strong,{children:"Variables"})," tab. When this information is provided, the test will wait until the spinner or progress bar disappears before proceeding to the next step."]}),"\n",(0,l.jsxs)(n.p,{children:["Variable name: ",(0,l.jsx)(n.code,{children:"spinner_xpath"}),"\nVariable value: ",(0,l.jsx)(n.code,{children:"xpath_of_the_spinner"})]}),"\n",(0,l.jsx)(n.h3,{id:"no_scroll",children:(0,l.jsx)(n.code,{children:"no_scroll"})}),"\n",(0,l.jsxs)(n.p,{children:["If you don't require a full screenshot of your test steps, you can set the ",(0,l.jsx)(n.code,{children:"no_scroll"})," option to ",(0,l.jsx)(n.code,{children:"true"})," on the ",(0,l.jsx)(n.strong,{children:"Variables"})," tab. Setting this on the ",(0,l.jsx)(n.strong,{children:"Variables"})," tab applies the action to the entire project."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"--noscroll"})," action can also be applied in the step editor."]}),"\n",(0,l.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Click on \u201cCalifornia\u201d --noscroll"})}),"\n",(0,l.jsx)(n.h3,{id:"--nofuzzy",children:(0,l.jsx)(n.code,{children:"--nofuzzy"})}),"\n",(0,l.jsxs)(n.p,{children:["You can turn off the ",(0,l.jsx)(n.code,{children:"fuzzy"})," option during test case generation and execution by using ",(0,l.jsx)(n.code,{children:"--nofuzzy"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Enter Username --nofuzzy"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"--nofuzzy"})," action forces you to enter the exact label or the step fails. This action can be used with ",(0,l.jsx)(n.strong,{children:"Click"}),", ",(0,l.jsx)(n.strong,{children:"Select"}),", and ",(0,l.jsx)(n.strong,{children:"Enter"})," commands."]}),"\n",(0,l.jsx)(n.h3,{id:"print",children:(0,l.jsx)(n.code,{children:"Print..."})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"Print..."})," action can be used to print the value of a variable and will be shown in the ",(0,l.jsx)(n.strong,{children:"Data"})," field in the report. The syntax requires specifying the variable name and/or text in the ",(0,l.jsx)(n.strong,{children:"Data"})," field in the step editor."]}),"\n",(0,l.jsx)(n.h3,{id:"get-element-details",children:(0,l.jsx)(n.code,{children:"get element details"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"get element details"})," action returns the object of the element attributes and stores it in json format. The get element details action can contain the element's tag name, attribute, visibility, enabled or not, size, location, and the text of the element."]}),"\n",(0,l.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"get element details(enter username) and save as xyz"})}),"\n",(0,l.jsx)(n.h3,{id:"use_full_screenshot",children:(0,l.jsx)(n.code,{children:"use_full_screenshot"})}),"\n",(0,l.jsxs)(n.p,{children:["If you don\u2019t require full screenshots of test steps, you can set the ",(0,l.jsx)(n.code,{children:"use_full_screenshot"})," option to ",(0,l.jsx)(n.code,{children:"false"})," on the ",(0,l.jsx)(n.strong,{children:"Variables"})," tab. Setting the option on the ",(0,l.jsx)(n.strong,{children:"Variables"})," tab applies it to the entire project."]}),"\n",(0,l.jsxs)(n.p,{children:["Alternatively, in ",(0,l.jsx)(n.strong,{children:"Project Properties"}),", you can turn off the ",(0,l.jsx)(n.strong,{children:"Show full screen images"})," option. This also applies the change to the entire project."]}),"\n",(0,l.jsx)("img",{src:(0,a.A)("/img/dev/low-code/full-screen-images.png"),alt:"The Show full screen images toggle"}),"\n",(0,l.jsx)(n.h4,{id:"maintenance",children:(0,l.jsx)(n.code,{children:"maintenance"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"maintenance"})," option self-corrects ",(0,l.jsx)(n.code,{children:"xpath"})," and rediscovers the element if the older ",(0,l.jsx)(n.code,{children:"xpath"})," points to an invalid element."]}),"\n",(0,l.jsxs)(n.p,{children:["Multiple ",(0,l.jsx)(n.code,{children:"xpaths"})," are generated when test cases are recorded or uploaded, and then they are passed on to the tools engine. The tools engine then validates the ",(0,l.jsx)(n.code,{children:"xpaths"})," and discards those that are pointing to incorrect elements. If all the ",(0,l.jsx)(n.code,{children:"xpaths"})," are pointing to incorrect elements, then the engine performs a rediscovery and forms a new ",(0,l.jsx)(n.code,{children:"xpath"})," that may not have the attribute of the old ",(0,l.jsx)(n.code,{children:"xpath"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["By default, this option is enabled, but it can be turned off by setting the maintenance variable to ",(0,l.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"page_scroll",children:(0,l.jsx)(n.code,{children:"page_scroll"})}),"\n",(0,l.jsxs)(n.p,{children:["By default, the auto-scroll setting is disabled, but it can be enabled with the ",(0,l.jsx)(n.code,{children:"page_scroll"})," variable."]}),"\n",(0,l.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Variable:"})," ",(0,l.jsx)(n.code,{children:"page_scroll"}),"\n",(0,l.jsx)(n.strong,{children:"Value:"})," ",(0,l.jsx)(n.code,{children:"True"})," or ",(0,l.jsx)(n.code,{children:"On"})," (default: ",(0,l.jsx)(n.code,{children:"False"}),")"]}),"\n",(0,l.jsx)(n.h3,{id:"remote-execution-and-script-generation",children:"Remote Execution and Script Generation"}),"\n",(0,l.jsx)(n.p,{children:"Script generation and execution can be done on a remote machine using the following variables:"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Variable:"})," ",(0,l.jsx)(n.code,{children:"use_remote_driver"}),"\n",(0,l.jsx)(n.strong,{children:"Value:"})," ",(0,l.jsx)(n.code,{children:"true"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Variable:"})," ",(0,l.jsx)(n.code,{children:"capabilities"}),"\n",(0,l.jsx)(n.strong,{children:"Value:"})," ",(0,l.jsx)(n.code,{children:'{ "url":"IP:PORT", "platform":"linux/windows", "browser": "chrome/firefox/ie"}'})]}),"\n",(0,l.jsx)(n.p,{children:"Where:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IP"})," is the IP address of the remote machine."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"PORT"})," is the port on which the ",(0,l.jsx)(n.a,{href:"/web-apps/automated-testing/selenium/selenium-grid/",children:"Selenium Grid"})," is running on the remote machine."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"platform"})," is the platform the remote machine runs on (Windows or Linux)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"browser"})," is the browser on which you want to generate or execute the script."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"use-custom-code-from-file",children:(0,l.jsx)(n.code,{children:"use custom code from file"})}),"\n",(0,l.jsx)(n.p,{children:"This variable can be used if a file is added to artifacts."}),"\n",(0,l.jsx)(n.h3,{id:"test-data-generation",children:"Test Data Generation"}),"\n",(0,l.jsx)(n.p,{children:"In the test data file, regex can be used to generate synthetic data."}),"\n",(0,l.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"#{\\d\\d\\d\\d\\d\\d\\d\\d\\d\\d} can generate 9446517410"}),"\n",(0,l.jsx)(n.code,{children:"#{[a-z][a-z][a-z][a-z][a-z]} can generate lpwqh"}),"\n",(0,l.jsx)(n.code,{children:"#{[a-z][a-z][a-z][a-z][a-z]\\d\\d\\d\\d} can generate sdkwf7809"})]}),"\n",(0,l.jsx)(n.h3,{id:"script-execution",children:"Script Execution"}),"\n",(0,l.jsx)(n.p,{children:"Sauce Labs Low-Code supports execution of Python, JavaScript, Shellscript, and Java. Simple actions can be performed with user-written scripts, and includes DOM handling and variable manipulation."}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Exec _js/_py/_bash{script} with ${input_variable_name} returning ${output_variable_name}"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Example"}),"\nIf ",(0,l.jsx)(n.code,{children:"var_1"})," = ",(0,l.jsx)(n.code,{children:'"testing"'}),", and ",(0,l.jsx)(n.code,{children:"var_2"})," = ",(0,l.jsx)(n.code,{children:'"printing variable: testing"'}),":"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"exec _py{print(\u2018Modified variable: ' +aiq_1)} with ${var1} returning ${var2}"}),"\n",(0,l.jsx)(n.code,{children:"exec _js{return 'Modified variable: ' + aiq_1} with ${var1} returning ${var2}"}),"\n",(0,l.jsx)(n.code,{children:"exec _bash(echo 'Modified variable: ' + aiq_1) with ${var1}returning ${var2}"})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Any reference to an input variable should be ",(0,l.jsx)(n.code,{children:"aiq_1"}),", ",(0,l.jsx)(n.code,{children:"aiq_2"}),", and so on."]}),"\n",(0,l.jsx)(n.li,{children:"Multiple input variables should be comma separated."}),"\n",(0,l.jsx)(n.li,{children:"Only one output variable is supported."}),"\n",(0,l.jsxs)(n.li,{children:["Returning ",(0,l.jsx)(n.code,{children:"${}"})," is required with a variable name. This is different than saving a variable."]}),"\n",(0,l.jsx)(n.li,{children:"Since the scripts being executed are separate, any kind of iframe navigation has to be handled within the script."}),"\n"]})}),"\n",(0,l.jsx)(n.h3,{id:"saving-with-execution",children:"Saving with Execution"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"save _js{return ${input_variable}} as output_variable"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Example"}),"\n",(0,l.jsx)(n.code,{children:'save _js{return ${var}.replace("/", "/g")} as return_js'})]}),"\n",(0,l.jsx)(n.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,l.jsxs)(n.p,{children:["Set a value for a text box:\n",(0,l.jsx)(n.code,{children:"exec _js{document.getElementById(\u2018someID\u2019).value=23}"})]}),"\n",(0,l.jsxs)(n.p,{children:["Verify if a checkbox is selected:\n",(0,l.jsx)(n.code,{children:'save _js{return document.getElementById("exampleCheck1").checked} as value'})]}),"\n",(0,l.jsxs)(n.p,{children:["Verify if a checkbox is selected if in iframe:\n",(0,l.jsx)(n.code,{children:'document.getElementsByName(\u201ciframe_name\u201d)[0].contentWindow.getElementById("exampleCheck1").checked save _js{return document.getElementById("iframeResult").contentWindow.document.getElementsByName("ve hicle1")[0].checked} as value3 '})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["If multiple iframes are present, repeat the code to the level you need to reach:\n",(0,l.jsx)(n.code,{children:"document.getElementById(\u201ciframeResult1\u201d).contentWindow."}),"\n",(0,l.jsx)(n.code,{children:'document.getElementById(\u201ciframeResult1\u201d).contentWindow.document.getElementsByName("vehicle1")[0].checked'})]})}),"\n",(0,l.jsxs)(n.p,{children:["Verify number of elements:\n",(0,l.jsx)(n.code,{children:'save _js{return document.getElementsByClassName("tfa-recent").length} as varName'})]}),"\n",(0,l.jsxs)(n.p,{children:["Get a ",(0,l.jsx)(n.code,{children:"values"})," attribute:\n",(0,l.jsx)(n.code,{children:'save _js{return document.getElementsByClassName("tfa-recent").title} as varName'})]}),"\n",(0,l.jsxs)(n.p,{children:["Open a new window:\n",(0,l.jsx)(n.code,{children:"Exec _js{window.open();}"})]}),"\n",(0,l.jsxs)(n.p,{children:["Find the sum of numbers in a string:\n",(0,l.jsx)(n.code,{children:'Exec _js{var sum=0;aiq_1.split("|").forEach(function(val){sum=sum+parseInt(val)});return(sum);}  with ${num} returning ${sum}'})]}),"\n",(0,l.jsxs)(n.p,{children:["Variable comparison:\n",(0,l.jsx)(n.code,{children:"exec _js{return 1 * aiq_1 > 1 * aiq_2 } with ${var_1}, ${var_2} returning ${var_5}"})]}),"\n",(0,l.jsx)(n.h3,{id:"pythonscript",children:"PythonScript"}),"\n",(0,l.jsxs)(n.p,{children:["Variable comparison:\n",(0,l.jsx)(n.code,{children:"exec _py{print(int(aiq_1) > int(aiq_2)) } with ${var_1}, ${var_2} returning ${var_6}"})]}),"\n",(0,l.jsxs)(n.p,{children:["Python floating point comparison:\n",(0,l.jsx)(n.code,{children:"exec _py{print(float(aiq_1) > float(aiq_2)) } with ${var_1}, ${var_2} returning ${var_7}"})]}),"\n",(0,l.jsx)(n.h3,{id:"luhn-algorithm-or-modulus-10-algorithm",children:"Luhn Algorithm or Modulus 10 Algorithm"}),"\n",(0,l.jsxs)(n.p,{children:["This will return ",(0,l.jsx)(n.code,{children:"true | false"})," based on the valid number given as input from variables."]}),"\n",(0,l.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Exec _js{var len = aiq_1.length;var sum = 0;for (var i = len-1; i >= 0; i--) {var d = parseInt(aiq_1.charAt(i));if (i % 2 == (len)%2) { d *= 2; };if (d > 9) { d -= 9; };sum += d;};if(sum%10==0){return(true);}else{return(false);} }with ${num} returning ${status}"})}),"\n",(0,l.jsxs)(n.p,{children:["With further condition check on YYYYMM:\n",(0,l.jsx)(n.code,{children:'Exec _js{var len = aiq_1.length; var init = aiq_1.substring(0,6);var sum = 0;var regex = new RegExp("^\\\\d{4}(0[1-9]|1[0-2])$");for (var i = len-1; i >= 0; i--) {var d = parseInt(aiq_1.charAt(i));if (i % 2 == (len)%2) { d *= 2; };if (d > 9) { d -= 9; };sum += d;};if(sum%10==0){if(regex.test(init)){console.log(true);}else{console.log(false);};}else{console.lo g(false);} }with ${num3} returning ${status_fin}'})]}),"\n",(0,l.jsx)(n.h3,{id:"dropdown-validation",children:"Dropdown Validation"}),"\n",(0,l.jsx)(n.p,{children:"This will verify if specific text is in a dropdown or not."}),"\n",(0,l.jsx)(n.h4,{id:"validate-one-value",children:"Validate One Value"}),"\n",(0,l.jsxs)(n.p,{children:["Save ",(0,l.jsx)(n.code,{children:"{xpath: \"//select[@id='year']\"}"})," as ",(0,l.jsx)(n.code,{children:"dropdown_values"})]}),"\n",(0,l.jsxs)(n.p,{children:["Save the text in the dropdown as a variable:\n",(0,l.jsx)(n.code,{children:'_var{"1991"} as dropdown_validation'})]}),"\n",(0,l.jsxs)(n.p,{children:["Save the text that you want to validate as a variable:\n",(0,l.jsx)(n.code,{children:'Exec _js{return aiq_1.split("\\n").includes(aiq_2)} with ${dropdown_values},${dropdown_validation} returning ${dropdown_result}'})]}),"\n",(0,l.jsxs)(n.p,{children:["Run javascript to check if ",(0,l.jsx)(n.code,{children:"dropdown_validation"})," is in ",(0,l.jsx)(n.code,{children:"dropdown_values"}),":\n",(0,l.jsx)(n.code,{children:'Verify variable ${dropdown_result} is \u201cTrue"'})]}),"\n",(0,l.jsxs)(n.p,{children:["Verify if ",(0,l.jsx)(n.code,{children:"dropdown_result"})," is ",(0,l.jsx)(n.code,{children:"true"})," or not."]}),"\n",(0,l.jsx)(n.h4,{id:"validate-multiple-values",children:"Validate Multiple Values"}),"\n",(0,l.jsxs)(n.p,{children:["Save ",(0,l.jsx)(n.code,{children:"{xpath: \"//select[@id='year']\"}"})," as ",(0,l.jsx)(n.code,{children:"dropdown_values"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_var{"2017|2018|2019"} as dropdown_validation'})}),"\n",(0,l.jsx)(n.p,{children:"(insert a \u201c|\u201d between multiple text values)"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'Exec _js{return aiq_2.split("|").filter(x => !aiq_1.split("\\n").includes(x)).length == 0; } with ${dropdown_values},${dropdown_validation} returning ${dropdown_result}'})}),"\n",(0,l.jsxs)(n.p,{children:["Verify ",(0,l.jsx)(n.code,{children:"variable ${dropdown_result}"})," is ",(0,l.jsx)(n.code,{children:"true"})]}),"\n",(0,l.jsx)(n.h4,{id:"return-the-number-of-text-values-that-exist-in-a-dropdown",children:"Return the Number of Text Values that Exist in a Dropdown"}),"\n",(0,l.jsxs)(n.p,{children:["Save ",(0,l.jsx)(n.code,{children:"{xpath: \"//select[@id='year']\"}"})," as ",(0,l.jsx)(n.code,{children:"dropdown_values"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_var{"2018|2020|2021"} as dropdown_validation'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'Exec _js{return aiq_2.split("|").filter(x => aiq_1.split("\\n").includes(x)).length; } with ${dropdown_values},${dropdown_validation} returning ${dropdown_result} Verify variable ${dropdown_result} is "2"'})}),"\n",(0,l.jsx)(n.h3,{id:"shell",children:"Shell"}),"\n",(0,l.jsx)(n.h4,{id:"find-the-difference-between-two-dates",children:"Find the Difference between Two Dates"}),"\n",(0,l.jsxs)(n.p,{children:["In this example, the input variables are ",(0,l.jsx)(n.code,{children:"d1"})," and ",(0,l.jsx)(n.code,{children:"d2"})," and the difference in days is returned in diff:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"exec _bash{echo $((($(date -d \"${aiq_1}\" '+%s') - $(date -d \"${aiq_2}\" '+%s'))/86400))} with ${d1}, ${d2} returning ${diff}"})}),"\n",(0,l.jsx)(n.h4,{id:"get-system-time",children:"Get System Time"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'Exec _bash{echo $(date +"%k")} returning ${hr}'}),"\n",(0,l.jsx)(n.code,{children:'Exec _bash{echo $(date +"%M")} returning ${min}'})]}),"\n",(0,l.jsxs)(n.p,{children:["Other options:\n",(0,l.jsx)(n.code,{children:"%k"})," - Hours in 24-hour format\n",(0,l.jsx)(n.code,{children:"%l"})," - Hours in 12-hour format\n",(0,l.jsx)(n.code,{children:"%M"})," - Minutes\n",(0,l.jsx)(n.code,{children:"%S"})," - Seconds"]}),"\n",(0,l.jsx)(n.h2,{id:"excel-functions",children:"Excel Functions"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_(xl|var){"excel formula"} as [variable_name]'})}),"\n",(0,l.jsx)(n.h3,{id:"sum",children:"Sum"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"_xl{${var1}+${var1}} as sum1"}),"\n",(0,l.jsx)(n.code,{children:"_xl{SUM(${var1},${var1})} as sum2"})]}),"\n",(0,l.jsx)(n.h3,{id:"difference",children:"Difference"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"_xl{${sum}-${var3}}"})}),"\n",(0,l.jsx)(n.h3,{id:"multiplication",children:"Multiplication"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"_xl{17*3} as var_float"})}),"\n",(0,l.jsx)(n.h3,{id:"division",children:"Division"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"_xl{17/3} as var_float"})}),"\n",(0,l.jsx)(n.h3,{id:"round",children:"Round"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"_xl{ROUND(${var_float}, 1)} as var_float_round"})}),"\n",(0,l.jsx)(n.h3,{id:"greater-than",children:"Greater Than"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"_xl{${table_count} < 20} as condition"})}),"\n",(0,l.jsxs)(n.p,{children:["Text comparison:\n",(0,l.jsx)(n.code,{children:"_xl{ T( ${var_1} ) > T( ${var_2} ) } as var_3"})]}),"\n",(0,l.jsxs)(n.p,{children:["Numeric comparison:\n",(0,l.jsx)(n.code,{children:"_xl{ 1 * T( ${var_1} ) > 1 * T( ${var_2} ) } as var_4"})]}),"\n",(0,l.jsx)(n.h3,{id:"dates",children:"Dates"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'_xl{TEXT(TODAY(), ""mm/dd/yyyy"")} as var_date'}),"\n",(0,l.jsx)(n.code,{children:'_xl{TEXT(TODAY(), ""mmm-ddd"")} as var_date2'}),"\n",(0,l.jsx)(n.code,{children:'_xl{TEXT(TODAY(), ""mmmm dddd"")} as var_date3'})]}),"\n",(0,l.jsx)(n.h4,{id:"days-between-dates",children:"Days between Dates"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"_xl{DAYS(${date1}.${date2})} as date_diff"})}),"\n",(0,l.jsx)(n.h3,{id:"currency-symbols-as-prefix",children:"Currency Symbols as Prefix"}),"\n",(0,l.jsx)(n.p,{children:"The corresponding currency symbol can be concatenated at the beginning of a function."}),"\n",(0,l.jsx)(n.h3,{id:"other",children:"Other"}),"\n",(0,l.jsx)(n.h4,{id:"excel-with-numbers",children:"Excel with Numbers"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'_xl{""$"" & SUM(""$18"", ""$12"")} as var_sum'}),", ",(0,l.jsx)(n.code,{children:"_xl{CEILING(${var_float}, 1)} as var_float_ceil"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"_xl{FLOOR(${var_float})} as var_float_floor"}),", ",(0,l.jsx)(n.code,{children:'_xl{MAXA(""1"", ""2"", ""3"", ""4"", ""5"")} as var_max'})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_xl{SMALL([""1"", ""2"", ""3"", ""4"", ""5""], 3)} as var_small'})}),"\n",(0,l.jsx)(n.h4,{id:"excel-with-string",children:"Excel with String"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_xl{TRIM(""\tstring with space\t"")} as var_str_trim'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_xl{SUBSTITUTE(""test test"", ""test"", ""testing"")} as var_str_sub'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_xl{SPLIT(""111-222-333"", ""-"")} as var_str_split'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_xl{REGEXMATCH(""https://test.com?params=testing"", ""https://test.com?"")} as var_str_regex_match'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:'_xl{REGEXREPLACE(""test1 test2 test test"", ""test[0-9]"", ""test_with_number"")} as var_str_regex_replace'})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>t});var l=i(96540);const r={},a=l.createContext(r);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);