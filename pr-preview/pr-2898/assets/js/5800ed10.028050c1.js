"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[80856],{77582:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=s(74848),t=s(28453),a=s(86025);const r={id:"use-drive",title:"Using a File in your Tests",sidebar_label:"Using a File from Vault Drive",description:"How to use the files from the Drive in your tests"},l=void 0,o={id:"api-testing/use-cases/use-drive",title:"Using a File in your Tests",description:"How to use the files from the Drive in your tests",source:"@site/docs/api-testing/use-cases/use-drive.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/use-drive",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/use-drive",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/use-drive.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"use-drive",title:"Using a File in your Tests",sidebar_label:"Using a File from Vault Drive",description:"How to use the files from the Drive in your tests"},sidebar:"docs",previous:{title:"Setting up Variables",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/set-variable"},next:{title:"Using Environments",permalink:"/sauce-docs/pr-preview/pr-2898/api-testing/use-cases/using-environments"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using a File as Datasource",id:"using-a-file-as-datasource",level:2},{value:"Step 1: Uploading the file in Vault Drive",id:"step-1-uploading-the-file-in-vault-drive",level:3},{value:"Step 2: Creating the Test",id:"step-2-creating-the-test",level:3},{value:"Step 3: Writing the Test",id:"step-3-writing-the-test",level:3},{value:"Retrieving the File From the Drive",id:"retrieving-the-file-from-the-drive",level:4},{value:"Parsing the File",id:"parsing-the-file",level:4},{value:"Cycling the Array",id:"cycling-the-array",level:4},{value:"Saving the Value in a Variable",id:"saving-the-value-in-a-variable",level:4},{value:"Adding the Request",id:"adding-the-request",level:4},{value:"Using a File as a Request Body",id:"using-a-file-as-a-request-body",level:2},{value:"Step 1: Uploading the File in Vault Drive",id:"step-1-uploading-the-file-in-vault-drive-1",level:3},{value:"Step 2: Creating the Test",id:"step-2-creating-the-test-1",level:3},{value:"Step 3: Writing the Test",id:"step-3-writing-the-test-1",level:3},{value:"Retrieving the File From the Drive",id:"retrieving-the-file-from-the-drive-1",level:4},{value:"Parsing the File",id:"parsing-the-file-1",level:4},{value:"Removing the Header",id:"removing-the-header",level:4},{value:"Cycling the Array",id:"cycling-the-array-1",level:4},{value:"(Optional) Saving the Value in a Variable",id:"optional-saving-the-value-in-a-variable",level:4},{value:"Adding the Request",id:"adding-the-request-1",level:4},{value:"Comparing the Response to a File",id:"comparing-the-response-to-a-file",level:2},{value:"Step 1: Uploading the File in Vault Drive",id:"step-1-uploading-the-file-in-vault-drive-2",level:3},{value:"Step 2: Creating the Test",id:"step-2-creating-the-test-2",level:3},{value:"Step 3: Writing the Test",id:"step-3-writing-the-test-2",level:3},{value:"Retrieving the File From the Drive",id:"retrieving-the-file-from-the-drive-2",level:4},{value:"Parsing the File",id:"parsing-the-file-2",level:4},{value:"Adding the Request",id:"adding-the-request-2",level:4},{value:"Comparing the File to the Response",id:"comparing-the-file-to-the-response",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"You can use files stored in the Vault drive in your test in several ways. This guide explains how you can use files stored in the Vault drive as a data source in your tests."}),"\n",(0,i.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A Sauce Labs account (",(0,i.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,i.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,i.jsx)(n.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-a-file-as-datasource",children:"Using a File as Datasource"}),"\n",(0,i.jsx)(n.p,{children:"A common scenario for using an external file in your test is when you have to generate a large number of different inputs inside your tests. In this case, it is difficult to add all your data inside the Input Sets because it would take a lot of time and often you might need to replace your data with a new set.\nIn this case, the best solution is to use an external file as a data source for your tests."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-uploading-the-file-in-vault-drive",children:"Step 1: Uploading the file in Vault Drive"}),"\n",(0,i.jsx)(n.p,{children:"Consider a scenario where an endpoint requires a city as a parameter and returns the weather of that city. To make sure the response is always the expected one, a good practice is testing with as many cities as possible. In a scenario like this, it is not feasible to enter a list of cities as input sets."}),"\n",(0,i.jsx)(n.p,{children:"First, upload your file to the Vault drive:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open the project you want to create the test in."}),"\n",(0,i.jsxs)(n.li,{children:["In the left panel, click ",(0,i.jsx)(n.strong,{children:"Vault"}),", then click ",(0,i.jsx)(n.strong,{children:"Drive"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Upload file"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Upload the file using drag and drop or ",(0,i.jsx)(n.strong,{children:"Choose file"}),", or enter the URL, then click ",(0,i.jsx)(n.strong,{children:"Upload"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This example uses the ",(0,i.jsx)(n.em,{children:"cities.csv"})," file that contains a list of US cities as shown:"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/csv-cities.png"),alt:"Example csv file",width:"200"}),"\n",(0,i.jsx)(n.h3,{id:"step-2-creating-the-test",children:"Step 2: Creating the Test"}),"\n",(0,i.jsx)(n.p,{children:"Once the file is in the Vault drive, you can create your test."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In the left panel, click ",(0,i.jsx)(n.strong,{children:"Tests"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create Test"}),", then ",(0,i.jsx)(n.strong,{children:"From Scratch"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter the ",(0,i.jsx)(n.strong,{children:"Test Name"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Optionally, you can add a ",(0,i.jsx)(n.strong,{children:"Description"})," and/or ",(0,i.jsx)(n.strong,{children:"Tags"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create Test"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-writing-the-test",children:"Step 3: Writing the Test"}),"\n",(0,i.jsx)(n.h4,{id:"retrieving-the-file-from-the-drive",children:"Retrieving the File From the Drive"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.a,{href:"/api-testing/composer/io-components/#file-datasource",children:(0,i.jsx)(n.strong,{children:"File DataSource"})})," component."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Select"})," the file you uploaded in the ",(0,i.jsx)(n.strong,{children:"Drive"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter the ",(0,i.jsx)(n.strong,{children:"Variable"}),", then click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/fileDataSource.png"),alt:"File data source component"}),"\n",(0,i.jsx)(n.h4,{id:"parsing-the-file",children:"Parsing the File"}),"\n",(0,i.jsx)(n.p,{children:"The next step is parsing the file to let the system know the type of file you are working with."}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Parse"})," component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Variable"})," must match the name you entered as a Variable in the previous step."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Adapter"})," must match the type of file you have uploaded. In our example, it's a .csv file."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/parseFile.png"),alt:"Parse the file"}),"\n",(0,i.jsx)(n.h4,{id:"cycling-the-array",children:"Cycling the Array"}),"\n",(0,i.jsxs)(n.p,{children:["Parsing the file produces an array of items. You can use the ",(0,i.jsx)(n.code,{children:"pick(n)"})," functionality to create a random subset of the array."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Each"})," component."]}),"\n",(0,i.jsxs)(n.li,{children:["In ",(0,i.jsx)(n.strong,{children:"Expression"}),", enter ",(0,i.jsx)(n.code,{children:"<variable_name>.pick(10)"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/each-csv.png"),alt:"Add the each component"}),"\n",(0,i.jsx)(n.h4,{id:"saving-the-value-in-a-variable",children:"Saving the Value in a Variable"}),"\n",(0,i.jsx)(n.p,{children:"Looping into the array will return one item at a time. Now, you have two options: the first one is saving that value in a variable so you can use that value every time you need it inside your test by calling the Variable Name, and the second one is using the value directly where you need it. For this example, we will save the value in a variable."}),"\n",(0,i.jsxs)(n.p,{children:["As a child component, add the ",(0,i.jsx)(n.strong,{children:"Set(variable)"})," component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Variable - for example ",(0,i.jsx)(n.code,{children:"currentCity"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode - ",(0,i.jsx)(n.code,{children:"String"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value - ",(0,i.jsx)(n.code,{children:"${_1}"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/set-city.png"),alt:"Save the value in a variable"}),"\n",(0,i.jsx)(n.h4,{id:"adding-the-request",children:"Adding the Request"}),"\n",(0,i.jsx)(n.p,{children:"Next, you can add the request to the weather endpoint by adding the variable as a query param."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"GET"})," component:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["URL - for example ",(0,i.jsx)(n.code,{children:"https://eope670ouz611xy.m.pipedream.net/weather"})]}),"\n",(0,i.jsxs)(n.li,{children:["Variable - for example ",(0,i.jsx)(n.code,{children:"payload"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add a ",(0,i.jsx)(n.strong,{children:"Query Param"})," as child component:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Name - for example ",(0,i.jsx)(n.code,{children:"city"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value - for example ",(0,i.jsx)(n.code,{children:"${currentCity}"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/get-request.png"),alt:"Add the GET request"}),"\n",(0,i.jsx)(n.p,{children:"You can now proceed to test the response payload from that call."}),"\n",(0,i.jsx)(n.p,{children:"In Code view, it looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- id: set\n  var: myDataSource\n  mode: object\n  object: DS.loadTextFile('cities.csv')\n- id: parse\n  var: myDataSource\n  adapter: csv\n- id: each\n  children:\n    - id: set\n      var: currentCity\n      mode: string\n      value: ${_1}\n    - id: get\n      children:\n        - id: queryParam\n          name: city\n          value: ${currentCity}\n      url: https://eope670ouz611xy.m.pipedream.net/weather\n      var: payload\n      mode: json\n  expression: myDataSource.pick(10)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-a-file-as-a-request-body",children:"Using a File as a Request Body"}),"\n",(0,i.jsx)(n.p,{children:"In the above example, the .csv file contains only one column.\nNext, consider a scenario where the .csv file contains more columns and you have to use only some values from a row or you have to use all the values but not in bulk. A common scenario is when you use the file to generate the Body of your request."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-uploading-the-file-in-vault-drive-1",children:"Step 1: Uploading the File in Vault Drive"}),"\n",(0,i.jsx)(n.p,{children:"For this new example, consider a scenario where you have to create an account and you need to provide personal data as a request body. In a scenario like this, especially in a development phase, it is common to have a file with some data allowed by the system."}),"\n",(0,i.jsxs)(n.p,{children:["As with the previous example, the first step is ",(0,i.jsx)(n.a,{href:"/api-testing/use-cases/use-drive/#step-1-uploading-the-file-in-the-vault-drive",children:"uploading your file to the Vault Drive"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This time, we are using ",(0,i.jsx)(n.em,{children:"users.csv"})," file that contains a list of user details as shown:"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/csv-users.webp"),alt:"Example csv file"}),"\n",(0,i.jsx)(n.h3,{id:"step-2-creating-the-test-1",children:"Step 2: Creating the Test"}),"\n",(0,i.jsxs)(n.p,{children:["You can follow the same steps as in the ",(0,i.jsx)(n.a,{href:"/api-testing/use-cases/use-drive/#step-2-creating-the-test",children:"previous example"})]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-writing-the-test-1",children:"Step 3: Writing the Test"}),"\n",(0,i.jsx)(n.h4,{id:"retrieving-the-file-from-the-drive-1",children:"Retrieving the File From the Drive"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.a,{href:"/api-testing/composer/io-components/#file-datasource",children:(0,i.jsx)(n.strong,{children:"File DataSource"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Select"})," the file you uploaded in the ",(0,i.jsx)(n.strong,{children:"Drive"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter the ",(0,i.jsx)(n.strong,{children:"Variable"}),", then ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/users-datasource.png"),alt:"File data source component"}),"\n",(0,i.jsx)(n.h4,{id:"parsing-the-file-1",children:"Parsing the File"}),"\n",(0,i.jsx)(n.p,{children:"The next step is parsing the file to let the system know the type of file you are working with."}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Parse"})," component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Variable"})," must match the name you entered as a Variable in the previous step."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Adapter"})," must match the type of file you have uploaded. In our example, it's a .csv file."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/parseUsersFile.png"),alt:"Parse the file"}),"\n",(0,i.jsx)(n.h4,{id:"removing-the-header",children:"Removing the Header"}),"\n",(0,i.jsx)(n.p,{children:"The example file contains a header that you need to remove so that the test will contain only valid data. To remove the header:"}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Set(variable)"})," component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Variable - for example ",(0,i.jsx)(n.code,{children:"myUserDetails"})]}),"\n",(0,i.jsx)(n.li,{children:"Mode - Data"}),"\n",(0,i.jsx)(n.li,{children:"Data -"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"userDetails.slice(1)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"userDetails"})," is the Variable name you assign in the first Set(variable)"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/removeHeader.png"),alt:"Remove the header"}),"\n",(0,i.jsx)(n.h4,{id:"cycling-the-array-1",children:"Cycling the Array"}),"\n",(0,i.jsxs)(n.p,{children:["Parsing the file produces an array of items. You can use the ",(0,i.jsx)(n.code,{children:"pick(n)"})," functionality to create a random subset of the array."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Each"})," component."]}),"\n",(0,i.jsxs)(n.li,{children:["In the Expression field, enter ",(0,i.jsx)(n.code,{children:"<variable_name>"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/users-each-csv.png"),alt:"Add the each component"}),"\n",(0,i.jsx)(n.h4,{id:"optional-saving-the-value-in-a-variable",children:"(Optional) Saving the Value in a Variable"}),"\n",(0,i.jsx)(n.p,{children:"Optionally, you can save each value in a variable, in this way, you can assign the variable name you prefer. For this step, you need to separate every key/value pair in the row so that you can later add them in the right position. To do so, you need to identify each column in the row by its index. The first column has an index value of 0, the second column has an index of 1, and so forth."}),"\n",(0,i.jsxs)(n.p,{children:["As a child component, add the ",(0,i.jsx)(n.strong,{children:"Set(variable)"})," component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Variable - for example ",(0,i.jsx)(n.code,{children:"userId"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode - ",(0,i.jsx)(n.code,{children:"String"})]}),"\n",(0,i.jsxs)(n.li,{children:["Value - ",(0,i.jsx)(n.code,{children:"${_1[0]}"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/set-userid.png"),alt:"Save the value in a variable"}),"\n",(0,i.jsxs)(n.p,{children:["This example saves the ",(0,i.jsx)(n.code,{children:"userId"}),". If you want to save every value in a variable, you need to repeat the step for all the columns."]}),"\n",(0,i.jsx)(n.h4,{id:"adding-the-request-1",children:"Adding the Request"}),"\n",(0,i.jsx)(n.p,{children:"You can add the request to the account endpoint by adding all the values in the request body."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"POST"})," component:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["URL - for example ",(0,i.jsx)(n.code,{children:"https://eovt6kylqex64iz.m.pipedream.net/account"})]}),"\n",(0,i.jsxs)(n.li,{children:["Variable - for example ",(0,i.jsx)(n.code,{children:"userDetailsPayload"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Add a ",(0,i.jsx)(n.strong,{children:"Request Body"})," as child component:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Content-Type - ",(0,i.jsx)(n.code,{children:"application/json"})]}),"\n",(0,i.jsx)(n.li,{children:"Body -"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:' {\n   "userID": "${_1[0]}",\n   "lastName": "${_1[1]}",\n   "DOB": "${_1[2]}",\n   "address": "${_1[3]}",\n   "city": "${_1[4]}",\n   "state": "${_1[5]}",\n   "country": "${_1[6]}",\n   "profession": "${_1[7]}",\n   "email": "${_1[8]}",\n   "phone": "${_1[9]}"\n }\n'})}),"\n","The above Body is valid if you do not save the values as variables. If you have saved the values as variables you need to replace all the values with the corresponding Variable name you used (such as the ",(0,i.jsx)(n.code,{children:"userId"})," in this example)."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/post-request.png"),alt:"Add the POST request"}),"\n",(0,i.jsx)(n.p,{children:"Now you can proceed to test the response payload from that call."}),"\n",(0,i.jsx)(n.p,{children:"The following example illustrates the response payload in Code view:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- id: set\n  var: userDetails\n  mode: object\n  object: DS.loadTextFile(\'users.csv\')\n- id: parse\n  var: userDetails\n  adapter: csv\n- id: set\n  var: myUserDetails\n  mode: object\n  object: userDetails.slice(1)\n- id: each\n  children:\n    - id: post\n      children:\n        - id: body\n          contentType: application/json\n          content: |-\n            {\n                "userID": "${_1[0]}",\n                "lastName": "${_1[1]}",\n                "DOB": "${_1[2]}",\n                "address": "${_1[3]}",\n                "city": "${_1[4]}",\n                "state": "${_1[5]}",\n                "country": "${_1[6]}",\n                "profession": "${_1[7]}",\n                "email": "${_1[8]}",\n                "phone": "${_1[9]}"\n            }\n      url: https://eovt6kylqex64iz.m.pipedream.net/account\n      var: userDetailsPayload\n      mode: json\n  expression: myUserDetails\n'})}),"\n",(0,i.jsx)(n.p,{children:"The following example saves the values in variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- id: set\n  var: userDetails\n  mode: object\n  object: DS.loadTextFile(\'users.csv\')\n- id: parse\n  var: userDetails\n  adapter: csv\n- id: set\n  var: myUserDetails\n  mode: object\n  object: userDetails.slice(1)\n- id: each\n  children:\n    - id: set\n      var: userId\n      mode: string\n      value: ${_1[0]}\n    - id: set\n      var: firstName\n      mode: string\n      value: ${_1[1]}\n    - id: set\n      var: lastName\n      mode: string\n      value: ${_1[2]}\n    - id: set\n      var: DOB\n      mode: string\n      value: ${_1[3]}\n    - id: set\n      var: address\n      mode: string\n      value: ${_1[4]}\n    - id: set\n      var: city\n      mode: string\n      value: ${_1[5]}\n    - id: set\n      var: state\n      mode: string\n      value: ${_1[6]}\n    - id: set\n      var: profession\n      mode: string\n      value: ${_1[7]}\n    - id: set\n      var: email\n      mode: string\n      value: ${_1[8]}\n    - id: set\n      var: phone\n      mode: string\n      value: ${_1[9]}\n    - id: post\n      children:\n        - id: body\n          contentType: application/json\n          content: |-\n            {\n                "userID": "${userId}",\n                "lastName": "${firstName}",\n                "DOB": "${lastName}",\n                "address": "${address}",\n                "city": "${city}",\n                "state": "${state}",\n                "country": "${country}",\n                "profession": "${profession}",\n                "email": "${email}\n                "phone": "${phone}"\n            }\n      url: https://eovt6kylqex64iz.m.pipedream.net/account\n      var: userDetailsPayload\n      mode: json\n  expression: myUserDetails\n'})}),"\n",(0,i.jsx)(n.h2,{id:"comparing-the-response-to-a-file",children:"Comparing the Response to a File"}),"\n",(0,i.jsx)(n.p,{children:'For this last example, consider a case where you need to compare the response from a call to a "template" to verify that they are the same. You can save the template in the Vault Drive and compare it with the response.'}),"\n",(0,i.jsx)(n.h3,{id:"step-1-uploading-the-file-in-vault-drive-2",children:"Step 1: Uploading the File in Vault Drive"}),"\n",(0,i.jsxs)(n.p,{children:["First, upload file in the Vault. You can follow the ",(0,i.jsx)(n.a,{href:"#step-1-uploading-the-file-in-vault-drive",children:"same steps as in the first example"}),", but this time you will use the following payload, saved as ",(0,i.jsx)(n.em,{children:"user.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "userID": "3618245e-8c91-4ffd-8309-ffeb68f45ff8",\n    "firstName": "Barry",\n    "lastName": "O\'Connell",\n    "DOB": "19780806",\n    "address": "6831 Wilfrid Common",\n    "city": "Waukee",\n    "state": "Iowa",\n    "country": "United States",\n    "profession": "chemist",\n    "email": "barry.oconnel@sauer.name",\n    "phone": "016977 7695"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-creating-the-test-2",children:"Step 2: Creating the Test"}),"\n",(0,i.jsxs)(n.p,{children:["You can follow the same steps as in the ",(0,i.jsx)(n.a,{href:"/api-testing/use-cases/use-drive/#step-2-creating-the-test",children:"previous example"})]}),"\n",(0,i.jsx)(n.h3,{id:"step-3-writing-the-test-2",children:"Step 3: Writing the Test"}),"\n",(0,i.jsx)(n.h4,{id:"retrieving-the-file-from-the-drive-2",children:"Retrieving the File From the Drive"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.a,{href:"/api-testing/composer/io-components/#file-datasource",children:(0,i.jsx)(n.strong,{children:"File DataSource"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Select"})," the file you uploaded in the ",(0,i.jsx)(n.strong,{children:"Drive"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Enter the ",(0,i.jsx)(n.strong,{children:"Variable"}),", then ",(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/fileDS_user.png"),alt:"File data source component"}),"\n",(0,i.jsx)(n.h4,{id:"parsing-the-file-2",children:"Parsing the File"}),"\n",(0,i.jsx)(n.p,{children:"The next step is parsing the file to let the system know the type of file you are working with."}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Parse"})," component:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Variable"})," must match the name you entered as a Variable in the previous step."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"Adapter"})," must match the type of file you have uploaded. In our example, it's a .json file."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/parsejson.png"),alt:"Parse the file"}),"\n",(0,i.jsx)(n.h4,{id:"adding-the-request-2",children:"Adding the Request"}),"\n",(0,i.jsx)(n.p,{children:"Add the request to the endpoint you want to compare the file with."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.strong,{children:"POST"})," component:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["URL - for example ",(0,i.jsx)(n.code,{children:"https://eo51qycg3neycjd.m.pipedream.net/user"})]}),"\n",(0,i.jsxs)(n.li,{children:["Variable - for example ",(0,i.jsx)(n.code,{children:"payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode - for example ",(0,i.jsx)(n.code,{children:"json"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Save Changes"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/post_user.png"),alt:"Add the POST request"}),"\n",(0,i.jsx)(n.h4,{id:"comparing-the-file-to-the-response",children:"Comparing the File to the Response"}),"\n",(0,i.jsxs)(n.p,{children:["Next, you can compare the file to the response using the ",(0,i.jsx)(n.strong,{children:"Assert compares"})," component."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Assert Compares"})," component."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Expression 1 - for example ",(0,i.jsx)(n.code,{children:"sample_payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Expression 2 - for example ",(0,i.jsx)(n.code,{children:"payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode - for example ",(0,i.jsx)(n.code,{children:"structure"})]}),"\n",(0,i.jsxs)(n.li,{children:["Strict - for example ",(0,i.jsx)(n.code,{children:"No"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.strong,{children:"Expression 1"})," and ",(0,i.jsx)(n.strong,{children:"Expression 2"}),", enter the variable names you have entered for the file and the call.\nMode ",(0,i.jsx)(n.code,{children:"structure"})," means you will compare the JSON structure of the template and the response.\nSet strict to ",(0,i.jsx)(n.code,{children:"Yes"})," if you want to include data types in the comparison."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.strong,{children:"Assert Compares"})," component and set ",(0,i.jsx)(n.strong,{children:"Mode"})," to ",(0,i.jsx)(n.code,{children:"values"})," to compare the values in the file and the ones in the call."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Expression 1 - for example ",(0,i.jsx)(n.code,{children:"sample_payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Expression 2 - for example ",(0,i.jsx)(n.code,{children:"payload"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mode - for example ",(0,i.jsx)(n.code,{children:"value"})]}),"\n",(0,i.jsxs)(n.li,{children:["Strict - for example ",(0,i.jsx)(n.code,{children:"No"})]}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,a.A)("/img/api-testing/vault-use-cases/compares.png"),alt:"Add the POST request"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Now you can proceed with your test."}),"\n",(0,i.jsx)(n.p,{children:"The final result of the test looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'- id: set\n  var: sample_payload\n  mode: object\n  object: DS.loadTextFile(\'user.json\')\n- id: parse\n  var: sample_payload\n  adapter: json\n- id: post\n  children: []\n  url: https://eo51qycg3neycjd.m.pipedream.net/user\n  var: payload\n  mode: json\n- id: assert-compares\n  expression1: payload\n  expression2: sample_payload\n  mode: structure\n  strict: "true"\n- id: assert-compares\n  expression1: sample_payload\n  expression2: payload\n  mode: values\n  strict: "true"\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Text Mode",type:"note",children:(0,i.jsxs)(n.p,{children:["When you need to compare a string such as an Authorization token or an ID (not necessarily from a file), you choose ",(0,i.jsx)(n.code,{children:"text"})," ",(0,i.jsx)(n.strong,{children:"Mode"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(96540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);