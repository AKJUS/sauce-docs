"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[22306],{21344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=t(74848),i=t(28453),r=(t(11470),t(19365),t(86025));const l={id:"expressions",title:"Using Expressions in Test Components",sidebar_label:"Using Expressions",description:"Learn to use expressions in components."},a=void 0,d={id:"api-testing/composer/expressions",title:"Using Expressions in Test Components",description:"Learn to use expressions in components.",source:"@site/docs/api-testing/composer/expressions.md",sourceDirName:"api-testing/composer",slug:"/api-testing/composer/expressions",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/composer/expressions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/composer/expressions.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1681228114e3,frontMatter:{id:"expressions",title:"Using Expressions in Test Components",sidebar_label:"Using Expressions",description:"Learn to use expressions in components."},sidebar:"docs",previous:{title:"Other Components",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/composer/other-components"},next:{title:"Variables, Snippets, Files",permalink:"/sauce-docs/pr-preview/pr-2904/api-testing/vault"}},c={},o=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Expressions",id:"using-expressions",level:2},{value:"Special Characters",id:"special-characters",level:3},{value:"XML",id:"xml",level:3},{value:"Simple Object Access Protocol (SOAP)",id:"simple-object-access-protocol-soap",level:4},{value:"Functions",id:"functions",level:3},{value:"Expressions &quot;Everywhere&quot;",id:"expressions-everywhere",level:3},{value:"Expression Language Extensions",id:"expression-language-extensions",level:2},{value:"WSUtil",id:"wsutil",level:3},{value:"pick()",id:"pick",level:3},{value:"anyArray.pick(n)",id:"anyarraypickn",level:4},{value:"anyArray.pick()",id:"anyarraypick",level:4},{value:"N",id:"n",level:3},{value:"D",id:"d",level:3},{value:"F",id:"f",level:3},{value:"Addresses and Countries",id:"addresses-and-countries",level:4},{value:"People and Identity",id:"people-and-identity",level:4},{value:"Internet",id:"internet",level:4},{value:"Credit Card",id:"credit-card",level:4},{value:"Products",id:"products",level:4},{value:"Companies",id:"companies",level:4},{value:"Random Numbers",id:"random-numbers",level:4},{value:"Boolean",id:"boolean",level:4},{value:"WSCrypto",id:"wscrypto",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Expressions are fields that reference an item in the test scope. The item can be a variable or an inner value in a data structure, such as a JSON."}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Familiarity with the ",(0,s.jsx)(n.a,{href:"/api-testing/composer/",children:"API Testing Composer"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-expressions",children:"Using Expressions"}),"\n",(0,s.jsxs)(n.p,{children:["When working with structured data, expression is the path for\xa0reaching out a specific element. Most of the time, it's just object dot notation. Most expressions will start with the name of the variable the data is stored in. In this example, we will assume the data has been assigned to a variable named ",(0,s.jsx)(n.code,{children:"payload"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"data": {\n  "created_time": "1453198835",\n  "images": {\n    "thumbnail": {\n      "width": 150,\n      "url": "https://domain.com/photos/9451802655724661601789699.jpg",\n      "height": 150\n      }\n   },\n  "Total-items": 1\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to reach the value of the ",(0,s.jsx)(n.code,{children:"created_time"})," attribute:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.data.created_time\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to check the ",(0,s.jsx)(n.code,{children:"width"})," of the images:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.data.images.thumbnail.width\n"})}),"\n",(0,s.jsx)(n.h3,{id:"special-characters",children:"Special Characters"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Total-items"})," element is a bit tricky, because the minus sign ( - ) would be misunderstood and treated as a subtraction operation. For this reason, the dot notation would require square brackets:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.data['Total-Items']\n"})}),"\n",(0,s.jsx)(n.h3,{id:"xml",children:"XML"}),"\n",(0,s.jsxs)(n.p,{children:["The above statements are valid for both JSON and XML. When you have to reference XML attributes, the dot notation is valid, but the attribute has to be written between the square brackets and preceded by the ",(0,s.jsx)(n.code,{children:"@"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<HotelList size="2">\n    <HotelSummary order="0">\n        <hotelId>20160502</hotelId>\n        <name>Hotel One</name>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to check the ",(0,s.jsx)(n.code,{children:"size"})," attribute, you have to write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload['@size']\n"})}),"\n",(0,s.jsx)(n.h4,{id:"simple-object-access-protocol-soap",children:"Simple Object Access Protocol (SOAP)"}),"\n",(0,s.jsx)(n.p,{children:"When you are working with SOAP API, the response might look something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0"?>\n<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/" soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">\n\t<soap:Body>\n\t\t<m:GetUserResponse>\n\t\t\t<m:Username>Tony Stark</m:Username>\n\t\t</m:GetUserResponse>\n\t</soap:Body>\n</soap:Envelope>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You'll also need to include the namespace in the expression. In the above scenario, if you want to check the ",(0,s.jsx)(n.code,{children:"Username"})," item, you have to write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload['soap:Body']['m:GetUserResponse']['m:Username']\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In XML, the root element is the variable itself, so you won't need to reference it explicitly."})}),"\n",(0,s.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.p,{children:"Expressions can also contain directives to transform the data you are willing to evaluate. For instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<HotelList size="2">\n    <HotelSummary order="0">\n        <hotelId>20160502</hotelId>\n        <name>Hotel One</name>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.HotelSummary.length\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Will count the number of instances of ",(0,s.jsx)(n.code,{children:"HotelSummary"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"expressions-everywhere",children:'Expressions "Everywhere"'}),"\n",(0,s.jsxs)(n.p,{children:["Expressions are automatically evaluated in the ",(0,s.jsx)(n.strong,{children:"Expression"})," field, but can also be introduced in other fields, such as ",(0,s.jsx)(n.code,{children:"value"}),", with a specific notation."]}),"\n",(0,s.jsxs)(n.p,{children:['In this example, we compare the actual size of the collection with the "size" attribute, by enclosing the expression within ',(0,s.jsx)(n.code,{children:"${ .. }"}),'. The "type" attribute ensures the comparison will happen with a numeric comparator, rather than string.',(0,s.jsx)("br",{}),(0,s.jsx)("img",{src:(0,r.A)("img/api-testing/assert-equals-updated.png"),alt:"assert Equals"})]}),"\n",(0,s.jsx)(n.h2,{id:"expression-language-extensions",children:"Expression Language Extensions"}),"\n",(0,s.jsx)(n.p,{children:"Our API Testing expression language is mostly used to identify a path in a payload or reference a variable. But there's more to it. A number of extensions are available to generate calculated data, determine the quality of a value and so on."}),"\n",(0,s.jsxs)(n.p,{children:["These ",(0,s.jsx)(n.em,{children:"extensions"})," can be used in any field that can be evaluated, which means in all ",(0,s.jsx)(n.strong,{children:"expression"})," fields, and all the fields where the value is wrapped in the ",(0,s.jsx)(n.code,{children:"${...}"})," brackets."]}),"\n",(0,s.jsx)(n.h3,{id:"wsutil",children:"WSUtil"}),"\n",(0,s.jsx)(n.p,{children:"This is the main extension. It supports many useful functions."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"exists(object : Object) : Boolean :"}),' an XML and JSON existence state is different by definition. Use this in an "if statement" if a test should work both with JSON and XML']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"contains(object : Object, substring : String) : Boolean :"}),' returns true whether the string version of "object" contains the "substring" sub-string.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"WSUtil.contains(payload.fruit.name, 'banana')\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"isInteger(string: String) , isFloat(string: String), isUrl(string: String), isEmail(string: String), isPhoneNumber(string: String), isBoolean(string: String), isArray(object: Object), isMap(object: Object), isCreditCard(string: String) : Boolean :"})," evaluate the nature of a data item"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"pick",children:"pick()"}),"\n",(0,s.jsx)(n.h4,{id:"anyarraypickn",children:"anyArray.pick(n)"}),"\n",(0,s.jsxs)(n.p,{children:["Given any array, you can ask the system to create a random subset of it. One typical usage is when an iterator would turn out to be huge, and you prefer to cherry-pick a few items. The code below will return an array of five random elements off the ",(0,s.jsx)(n.em,{children:"artists"})," array."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.artists.pick(5)\n"})}),"\n",(0,s.jsx)(n.p,{children:"A hands on example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- id: each\n  children:\n  - id: assert-exists\n    expression: _1.href\n  - id: assert-exists\n    expression: _1.id\n  expression: payload.artists.pick(5)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"anyarraypick",children:"anyArray.pick()"}),"\n",(0,s.jsxs)(n.p,{children:["Similar to the ",(0,s.jsx)(n.code,{children:"pick(n)"}),", this method will pick one random item off an array, and return it."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you are testing XML, the pick() function must be ",(0,s.jsx)(n.code,{children:"WSUtil.pick(array,n)"}),". Considering the previous example, ",(0,s.jsx)(n.code,{children:"payload.artists.pick(5)"})," becomes ",(0,s.jsx)(n.code,{children:"WSUtil.pick(payload.artists,5)"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"n",children:"N"}),"\n",(0,s.jsx)(n.p,{children:"Utility functions for numbers."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"random(min: Int, max: Int) : Int"})," : generates a random integer number between min and max."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"N.random(10,30)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"random(min: Int, max: Int, quantity: Int) : List :"})," generates a list of random numbers"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"N.random(10,30,5)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"d",children:"D"}),"\n",(0,s.jsx)(n.p,{children:"Plays with dates."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"nowMillis() : Int :"})," returns the current Unix epoch in milliseconds."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"plusDays(millis: Int, days: Int): Int"})," : returns the provided milliseconds, plus the provided number of days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"plusHours(millis: Int, hours: Int): Int"})," : returns the provided milliseconds, plus the provided number of hours"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"minusDays(millis: Int, days: Int) : Int"})," : returns the provided milliseconds, minus the provided number of days"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"minusHours(millis: Int, hours: Int): Int"})," : returns the provided milliseconds, minus the provided number of hours"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"format(millis: Int, format: String) : String"})," : creates a timestamp with the given format, using the current timezone"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"format(millis: Int, format: String, timezone: String) : String :"})," creates a timestamp with the given format, based on the provided timezone id"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"format(millis: Int, format: String, offset: Int) : String :"})," creates a timestamp with the given format, based on the provided timezone offset"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"parse(timestamp: String) : Int"})," : tries to parse the provided timestamp and convert it in milliseconds. It will use current timezone if not provided"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's the conversion map for formats:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Symbol"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Meaning"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Presentation"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Examples"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"C"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"century of era (>=0)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"20"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"Y"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"year of era (>=0)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"year"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1996"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"x"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"weekyear"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"year"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1996"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"w"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"week of weekyear"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"27"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"e"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"day of week"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"E"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"day of week"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Tuesday; Tue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"y"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"year"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"year"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1996"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"M"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"month of year"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"month"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"July; Jul; 07"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"d"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"day of week"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Tue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"D"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"day of month"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"a"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"halfday of day"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"PM"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"K"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"hour of halfday (0~11)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"h"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"clockhour of halfday (1~12)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"12"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"H"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"hour of day (0~23)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"k"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"clockhour of day (1~24)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"24"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"m"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"minute of hour"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"30"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"s"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"second of minute"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"55"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"S"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"fraction of second"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"millis"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"978"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"Z"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"time zone offset/id"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"zone"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-0800; -08:00; America/Los_Angeles"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"f",children:"F"}),"\n",(0,s.jsx)(n.p,{children:"Generates fake data."}),"\n",(0,s.jsx)(n.h4,{id:"addresses-and-countries",children:"Addresses and Countries"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.streetName()"})," - Generates a street name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.streetAddressNumber()"})," - Generates an address number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.streetAddress()"})," - Generates a street and address number. If secondary is specified, this method provides an apartment number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.secondaryAddress()"})," - Generates an apartment number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.zipCode()"})," - Generates a ZIP code. Valid only for US states."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.streetSuffix()"})," - Generates a street suffix"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.citySuffix()"})," - Generates a city suffix"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.cityPrefix()"})," - Generates a city prefix"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.city()"})," - Generates a city name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.state()"})," - Generates a state/province"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.buildingNumber()"})," - Generates a build number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.country()"})," - Generates a country"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.countryCode()"})," - Generates a country code"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.countryCodeSL()"})," - Generates a country code in small letters"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"people-and-identity",children:"People and Identity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.fullName()"})," - Generates a full name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.firstName()"})," - Generates a first name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.lastName()"})," - Generates a last name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.profession()"})," - Generates a profession"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.timeZone()"})," - Generates a time zone"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.phone()"})," - Generates a phone number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.mobile()"})," - Generates a mobile number"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"internet",children:"Internet"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.emailAddress()"})," - Generates an email address. ",(0,s.jsx)(n.strong,{children:"Note:"})," These email addresses are randomly generated with real domains. Please be careful if you are using this in a test as there is a chance that some of them could be real email addresses."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.domainName()"})," - Generates a domain name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.domainWord()"})," - Generates a word"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.domainSuffix()"})," - Generates a suffix"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.url()"})," - Generates a URL"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.password(<minimumLength,maximumLength,includeUppercase,includeSpecial,includeDigit>)"})," - Generates a password. For example, ",(0,s.jsx)(n.code,{children:"F.password(5,10,true,false, true)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"credit-card",children:"Credit Card"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.creditCardNumber()"})," - Generates a credit card number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.creditCardExpiry()"})," - Generates a credit card expiration date"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.creditCardType()"})," - Generates a credit card type"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"products",children:"Products"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.productName()"})," - Generates a product name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.price()"})," - Generates a price"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.promotionCode()"})," - Generates random promotion code"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"companies",children:"Companies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.companyName()"})," - Generates a company name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.suffix()"})," - Generates a company suffix"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"random-numbers",children:"Random Numbers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.integer(<min,max>)"})," - Generates an integer. For example, ",(0,s.jsx)(n.code,{children:"F.integer(2,20)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.decimal(<min,max,maxdecimals>)"})," - Generates a decimal number. For example, ",(0,s.jsx)(n.code,{children:"F.decimal(0,2,2)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.uuid()"})," - Generates a unique identifier"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"boolean",children:"Boolean"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"F.bool()"})," - Generates a boolean value"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"wscrypto",children:"WSCrypto"}),"\n",(0,s.jsx)(n.p,{children:"Encryption utilities:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"md5(input : String) : String"})," : returns the md5 hash of the input string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"hash(input : String) : String :"})," returns the SHA-1 hash of the input string, hex encoded."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"base64(action: String, input: String)"})," : decodes from or encodes into a base64 string. Action can either be ",(0,s.jsx)(n.code,{children:"'encode'"})," or ",(0,s.jsx)(n.code,{children:"'decode'"}),".","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"WSCrypto.base64('encode', 'whatever')\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sha256(input : String) : String"})," : creates an hash of input using the SHA-256 algorithm."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sha256(input : String, secret : String) : String :"})," encrypts input with secret using the HMAC-SHA256 algorithm."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"hmacSha1(input : String, secret : String) : String"})," : encrypts input with secret using the HMAC-SHA1 algorithm."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var s=t(96540),i=t(18215),r=t(23104),l=t(56347),a=t(205),d=t(57485),c=t(31682),o=t(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=x(e),[l,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=j({queryString:t,groupId:i}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,o.Dv)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),g=(()=>{const e=c??p;return u({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{g&&d(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function y(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),o=e=>{const n=e.currentTarget,t=d.indexOf(n),i=a[t].value;i!==s&&(c(n),l(i))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:h,onClick:o,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function A(e){const n=(0,m.A)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);