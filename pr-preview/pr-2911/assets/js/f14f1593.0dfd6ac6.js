"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[73912],{59323:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(74848),s=i(28453),l=i(86025);const a={id:"vault",title:"Adding Reusable Variables, Snippets, and Files in the Vault",sidebar_label:"Variables, Snippets, Files",description:"The Vault allows you to store variables, code snippets, and files that can be used across an entire project."},r=void 0,o={id:"api-testing/vault",title:"Adding Reusable Variables, Snippets, and Files in the Vault",description:"The Vault allows you to store variables, code snippets, and files that can be used across an entire project.",source:"@site/docs/api-testing/vault.md",sourceDirName:"api-testing",slug:"/api-testing/vault",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/vault",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/vault.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"vault",title:"Adding Reusable Variables, Snippets, and Files in the Vault",sidebar_label:"Variables, Snippets, Files",description:"The Vault allows you to store variables, code snippets, and files that can be used across an entire project."},sidebar:"docs",previous:{title:"Using Expressions",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/composer/expressions"},next:{title:"Environments",permalink:"/sauce-docs/pr-preview/pr-2911/api-testing/environments"}},c={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Vault Types",id:"vault-types",level:2},{value:"Company Vault",id:"company-vault",level:3},{value:"Project Vault",id:"project-vault",level:3},{value:"Variables",id:"variables",level:2},{value:"Create a Variable",id:"create-a-variable",level:3},{value:"Mark Variables as Sensitive",id:"mark-variables-as-sensitive",level:3},{value:"Update Variables Using a File",id:"update-variables-using-a-file",level:3},{value:"Project Vault:",id:"project-vault-1",level:4},{value:"Company Vault:",id:"company-vault-1",level:4},{value:"Rules for Updating Variables Using a File:",id:"rules-for-updating-variables-using-a-file",level:4},{value:"Snippets",id:"snippets",level:2},{value:"Create a Snippet",id:"create-a-snippet",level:3},{value:"Update a Snippet",id:"update-a-snippet",level:3},{value:"Update Snippets Using a File",id:"update-snippets-using-a-file",level:3},{value:"Project Vault:",id:"project-vault-2",level:4},{value:"Company Vault:",id:"company-vault-2",level:4},{value:"Rules for Updating Snippets Using a File:",id:"rules-for-updating-snippets-using-a-file",level:4},{value:"Files",id:"files",level:2},{value:"Upload a file",id:"upload-a-file",level:3},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.strong,{children:"Vault"})," feature allows you to store variables and code snippets to use in your tests in one project, or across all projects. You can also store files for use in one project."]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An existing API Testing project. For details on how to create one, see the ",(0,t.jsx)(n.a,{href:"/api-testing/quickstart/",children:"Quickstart"})," guide."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"vault-types",children:"Vault Types"}),"\n",(0,t.jsxs)(n.p,{children:["There are two types of API Testing vaults, the ",(0,t.jsx)(n.strong,{children:"Company Vault"})," and a project-specific ",(0,t.jsx)(n.strong,{children:"Vault"}),". While their UI is the same, they serve two different purposes."]}),"\n",(0,t.jsx)(n.h3,{id:"company-vault",children:"Company Vault"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Company Vault"})," is where you can store variables and test code snippets to use across all of your projects. You can access this tab from your API Testing home page, where all of your projects are listed.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/companyVault.png"),alt:"Access Company Vault",width:"400"})]}),"\n",(0,t.jsx)(n.h3,{id:"project-vault",children:"Project Vault"}),"\n",(0,t.jsxs)(n.p,{children:["The project ",(0,t.jsx)(n.strong,{children:"Vault"}),", which you can access from within a project, is where you can store project-specific variables, test code snippets, and files.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/projectVault.png"),alt:"Access Vault from Project View",width:"300"})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Variables"})," section, you can define environment variables to use in your tests, so that you don't need to rewrite them every time."]}),"\n",(0,t.jsxs)(n.p,{children:["The screenshot below shows the ",(0,t.jsx)(n.strong,{children:"Company Vault"}),"; these variables are available across all projects."]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/company_vault.png"),alt:"Company Vault View"}),"\n",(0,t.jsxs)(n.p,{children:["Define a variable at the project-specific ",(0,t.jsx)(n.strong,{children:"Vault"})," when you need to use the same one across multiple tests. For example, you could save a password here as a variable and reuse it in multiple tests."]}),"\n",(0,t.jsx)(n.admonition,{title:"Import Postman Collections into a vault",type:"tip",children:(0,t.jsxs)(n.p,{children:["Additionally, you can import variables from Postman. See ",(0,t.jsx)(n.a,{href:"/api-testing/import-postman-collection",children:"Importing Postman Collections, Variables, and Environments"})," for more details."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If the same variable with the same name definition exists in both the ",(0,t.jsx)(n.strong,{children:"Project Vault"})," and ",(0,t.jsx)(n.strong,{children:"Company Vault"}),", then the value in the ",(0,t.jsx)(n.strong,{children:"Project Vault"})," will override the one in the ",(0,t.jsx)(n.strong,{children:"Company Vault"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"create-a-variable",children:"Create a Variable"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a project."}),"\n",(0,t.jsxs)(n.li,{children:["In the left panel, click ",(0,t.jsx)(n.strong,{children:"Vault"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"New Entry"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a Key (e.g., ",(0,t.jsx)(n.code,{children:"domain"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Add a Value (e.g., ",(0,t.jsx)(n.code,{children:"api.us-west-1.saucelabs.com"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Optionally, check ",(0,t.jsx)(n.a,{href:"/api-testing/vault/#mark-variables-as-sensitive",children:(0,t.jsx)(n.strong,{children:"Sensitive"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.strong,{children:"Confirm"}),"."]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/variableEntry2.png"),alt:"Domain Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Then in your tests, you'd reference the variable by the ",(0,t.jsx)(n.code,{children:"Key"})," using the following syntax: ",(0,t.jsx)(n.code,{children:"${domain}"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"mark-variables-as-sensitive",children:"Mark Variables as Sensitive"}),"\n",(0,t.jsx)(n.p,{children:"You can mark a variable as sensitive if it contains a sensitive value that you do not want to appear in your test reports. When you mark a variable as sensitive, the value is obfuscated anywhere it appears: in Vault, tests reports, and the project dashboard's logs and metrics when the variable is used in the URL, path, or query. Variables marked sensitive cannot be edited. If you need to change the value, you can delete the variable and recreate it with the new value."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Variables marked as sensitive are always excluded from Vault exports."})}),"\n",(0,t.jsx)(n.p,{children:"In the following example test report, the token variable has been marked as sensitive in Vault and appears as obfuscated in the report."}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/sensitive-data2.webp"),alt:"data obfuscated in report",width:"600"}),"\n",(0,t.jsx)(n.h3,{id:"update-variables-using-a-file",children:"Update Variables Using a File"}),"\n",(0,t.jsx)(n.p,{children:"You can update the values by editing each variable manually. However, when you need to update many (or all) variables in the Vault, importing a file that contains the updates can speed up the process."}),"\n",(0,t.jsx)(n.p,{children:"The file can be a .cvs or .json and the structure will be as follow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example of a json file"',children:'{\n  "values": [\n    {\n      "key": "var1",\n      "value": "foo"\n    },\n    {\n      "key": "var2",\n      "value": "bar"\n    },\n    {\n      "key": "var3",\n      "value": "chu"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/csv-example.png"),alt:"csv example"}),"\n",(0,t.jsx)(n.h4,{id:"project-vault-1",children:"Project Vault:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a project."}),"\n",(0,t.jsxs)(n.li,{children:["In the left panel, click ",(0,t.jsx)(n.strong,{children:"Vault"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Variables"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Import"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Choose File"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Select the .csv or .json file from your machine."}),"\n",(0,t.jsx)(n.li,{children:"Optionally, you can skip the last two steps by dragging and dropping the file."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"company-vault-1",children:"Company Vault:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["From the Projects page, in the left panel, click ",(0,t.jsx)(n.strong,{children:"Company Vault"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Variables"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Import"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Choose File"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Select the .csv or .json file from your machine."}),"\n",(0,t.jsx)(n.li,{children:"Optionally, you can skip the last two steps by dragging and dropping the file."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rules-for-updating-variables-using-a-file",children:"Rules for Updating Variables Using a File:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the file contains a variable with the same key as one in the Vault, the variable in the Vault will be overwritten."}),"\n",(0,t.jsx)(n.li,{children:"If the file contains a variable that is not saved in the Vault, the variable will be added into the Vault."}),"\n",(0,t.jsx)(n.li,{children:"If the variables in the Vault are not present in the file, the variables in the Vault will not be deleted."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Check a common ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/vault-variable/",children:"use case"})," out of saving variables in the vault."]}),"\n",(0,t.jsx)(n.h2,{id:"snippets",children:"Snippets"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Code Snippets"})," section of the ",(0,t.jsx)(n.strong,{children:"Vault"}),", you can create or import test component/code examples. A ",(0,t.jsx)(n.em,{children:"snippet"})," is a test code fragment that you can create, import, and store in your ",(0,t.jsx)(n.a,{href:"/api-testing/vault",children:"Vault"})," and reuse in multiple tests. Snippet length can range from one line of code to an entire test."]}),"\n",(0,t.jsxs)(n.p,{children:["Much like with variable scope, snippets saved in a project ",(0,t.jsx)(n.strong,{children:"Vault"})," are only available in that project, and snippets saved in the ",(0,t.jsx)(n.strong,{children:"Company Vault"})," are available across all projects."]}),"\n",(0,t.jsxs)(n.p,{children:["When you save a snippet from the ",(0,t.jsx)(n.a,{href:"/api-testing/composer/",children:(0,t.jsx)(n.strong,{children:"Composer"})}),", it will be saved in the project ",(0,t.jsx)(n.strong,{children:"Vault"}),". While you cannot save a snippet from the ",(0,t.jsx)(n.strong,{children:"Composer"})," to the ",(0,t.jsx)(n.strong,{children:"Company Vault"}),", you can export there using the import/export feature (see screenshot below).",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/vault_exportSnippet.png"),alt:"Snippet"})]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-snippet",children:"Create a Snippet"}),"\n",(0,t.jsx)(n.p,{children:"While is perfectly fine typing the code snippet directly in the area, if you are comfortable doing this. There's a easier way to create a snippet."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a project."}),"\n",(0,t.jsx)(n.li,{children:"Open the test you want to generate the snippet of."}),"\n",(0,t.jsxs)(n.li,{children:["Hold down the Ctrl key, highlight the components in the UI you want to include in the snippet. They do not need to be adjacent to each other","\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/vault_savesnippet.png"),alt:"Save snippet"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save Snippet"})]}),"\n",(0,t.jsxs)(n.li,{children:["Give the snippet a name and click ",(0,t.jsx)(n.strong,{children:"Save Snippet"}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/vault_snippetname.webp"),alt:"Snippet name",width:"600"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"update-a-snippet",children:"Update a Snippet"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a project."}),"\n",(0,t.jsxs)(n.li,{children:["In the left panel, click ",(0,t.jsx)(n.strong,{children:"Vault"}),", then click ",(0,t.jsx)(n.strong,{children:"Code Snippets"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Double-click any of the fields and begin typing to edit the details."}),"\n",(0,t.jsxs)(n.li,{children:["When you have finished, click ",(0,t.jsx)(n.strong,{children:"Save Snippet"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"update-snippets-using-a-file",children:"Update Snippets Using a File"}),"\n",(0,t.jsx)(n.p,{children:"You can update the code by editing each snippet manually or you can use a file."}),"\n",(0,t.jsx)(n.p,{children:"The file can be a .cvs or .json and the structure will be as follow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example of a json file"',children:'{\n  "values": [\n    {\n      "key": "authentication",\n      "value": "- id: post\\n  children:\\n    - id: body\\n      contentType: application/json\\n      content: |-\\n        {\\n        \\t\\"user_id\\": 4628362,\\n        \\t\\"password\\": \\"abc123\\"\\n        }\\n  url: https://m2-authentication.load2.apifortress.com/request/token\\n  var: authPayload\\n  mode: json\\n"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/csv-example-snippet.webp"),alt:"csv example"}),"\n",(0,t.jsx)(n.h4,{id:"project-vault-2",children:"Project Vault:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a project."}),"\n",(0,t.jsxs)(n.li,{children:["In the left panel, click ",(0,t.jsx)(n.strong,{children:"Vault"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Code Snippets"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Import"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Choose File"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Select the .csv or .json file from your machine."}),"\n",(0,t.jsx)(n.li,{children:"Optionally, you can skip the last two steps by dragging and dropping the file."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"company-vault-2",children:"Company Vault:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["From the Projects page, in the left panel, click ",(0,t.jsx)(n.strong,{children:"Company Vault"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Code Snippets"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Import"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Choose File"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Select the .csv or .json file from your machine."}),"\n",(0,t.jsx)(n.li,{children:"Optionally, you can skip the last two steps by dragging and dropping the file."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"rules-for-updating-snippets-using-a-file",children:"Rules for Updating Snippets Using a File:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the file contains a snippet with the same key as one in the Vault, the snippet in the Vault will be overwritten."}),"\n",(0,t.jsx)(n.li,{children:"If the file contains a snippet that is not saved in the Vault, the snippet will be added into the Vault."}),"\n",(0,t.jsx)(n.li,{children:"If the snippets in the Vault are not present in the file, the snippets in the Vault will not be deleted."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Learn how you can improve your test by generating an ",(0,t.jsx)(n.a,{href:"/api-testing/use-cases/vault-snippet/",children:"Authentication Snippet"})]}),"\n",(0,t.jsx)(n.h2,{id:"files",children:"Files"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Drive"})," section of a project-specific ",(0,t.jsx)(n.strong,{children:"Vault"}),", you can upload files to use in your tests. The file size limit for an individual file is 16 MB. The total limit for the Organization is 100 MB. This means if one project-specific ",(0,t.jsx)(n.strong,{children:"Vault Drive"})," is using 100 MB of storage, other projects cannot upload additional files."]}),"\n",(0,t.jsx)(n.h3,{id:"upload-a-file",children:"Upload a file"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a project."}),"\n",(0,t.jsxs)(n.li,{children:["In the left panel, click ",(0,t.jsx)(n.strong,{children:"Vault"}),", then click ",(0,t.jsx)(n.strong,{children:"Drive"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Upload file"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Upload the file using drag and drop or ",(0,t.jsx)(n.strong,{children:"Choose file"}),", or enter the URL, then click ",(0,t.jsx)(n.strong,{children:"Upload"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can work with your files in ",(0,t.jsx)(n.strong,{children:"Vault Drive"})," as follows:"]}),"\n",(0,t.jsxs)(n.p,{children:["If you upload a file via a URL, you can hover over ",(0,t.jsx)(n.strong,{children:"source url"})," to view the full address. ",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/vaultuploadfileURL.png"),alt:"View Source URL"})]}),"\n",(0,t.jsxs)(n.p,{children:["You can rename, download, or delete individual files.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/vaultfileoptions.png"),alt:"Rename, delete or download files"})]}),"\n",(0,t.jsxs)(n.p,{children:["To delete multiple files, select the checkbox next to the files, then click ",(0,t.jsx)(n.strong,{children:"Delete Selected"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,l.Ay)("img/api-testing/vaultdeletefileoptions.png"),alt:"Delete multiple files"})]}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/integration-test/",children:"Build an Integration Test"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/vault-variable/",children:"Save a Variable in Vault"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/vault-snippet/",children:"Creating a Snippet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api-testing/use-cases/use-drive/",children:"Using File from the Drive"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},l=t.createContext(s);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);