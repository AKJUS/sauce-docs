"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[79277],{7870:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=s(74848),i=s(28453),r=s(86025),o=s(11470),a=s(19365);const l={id:"virtual-usb",title:"Virtual USB Testing on Real Mobile Devices",sidebar_label:"Virtual USB (Real Devices)"},c=void 0,d={id:"mobile-apps/features/virtual-usb",title:"Virtual USB Testing on Real Mobile Devices",description:"Virtual USB (vUSB) is a mobile (app) debugging tool that simulates connecting a Sauce Labs real device directly to your local machine/test runner host.",source:"@site/docs/mobile-apps/features/virtual-usb.md",sourceDirName:"mobile-apps/features",slug:"/mobile-apps/features/virtual-usb",permalink:"/sauce-docs/pr-preview/pr-2898/mobile-apps/features/virtual-usb",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/virtual-usb.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1712079766e3,frontMatter:{id:"virtual-usb",title:"Virtual USB Testing on Real Mobile Devices",sidebar_label:"Virtual USB (Real Devices)"},sidebar:"docs",previous:{title:"iOS Version Management",permalink:"/sauce-docs/pr-preview/pr-2898/mobile-apps/features/ios-version-management"},next:{title:"App Logs",permalink:"/sauce-docs/pr-preview/pr-2898/mobile-apps/features/mobile-app-diagnostics/app-logs"}},u={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Virtual USB",id:"using-virtual-usb",level:2},{value:"Download Client",id:"download-client",level:3},{value:"Gather Credentials",id:"gather-credentials",level:3},{value:"Start Server",id:"start-server",level:3},{value:"<strong>Optional: Set Verbose Logging</strong>",id:"optional-set-verbose-logging",level:4},{value:"<strong>Optional: Set Up a Local Server Proxy</strong>",id:"optional-set-up-a-local-server-proxy",level:4},{value:"<strong>Optional: Set Environment Variables</strong>",id:"optional-set-environment-variables",level:4},{value:"Start Test Session",id:"start-test-session",level:3},{value:"<strong>Method 1: Connect to existing live testing session</strong>",id:"method-1-connect-to-existing-live-testing-session",level:4},{value:"<strong>Method 2: Start new session with vUSB client from command line</strong>",id:"method-2-start-new-session-with-vusb-client-from-command-line",level:4},{value:"Test and Debug",id:"test-and-debug",level:3},{value:"Close Test",id:"close-test",level:3},{value:"Example Use Cases",id:"example-use-cases",level:2},{value:"ADB commands",id:"adb-commands",level:3},{value:"Android port forwarding with <code>adb forward</code>",id:"android-port-forwarding-with-adb-forward",level:3},{value:"Android Studio Debugging",id:"android-studio-debugging",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Virtual USB (vUSB) is a mobile (app) debugging tool that simulates connecting a Sauce Labs real device directly to your local machine/test runner host.\nIt integrates into your development and test environment, meaning you can use your choice of homegrown development and testing tools to debug."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make the most out of your early-stage development or inhouse built testing solution."}),"\n",(0,t.jsx)(n.li,{children:"Use a mix of manual and automated testing as it fits your use case."}),"\n",(0,t.jsx)(n.li,{children:"Run non-traditional automation frameworks."}),"\n",(0,t.jsx)(n.li,{children:"Run adb commands on Android devices."}),"\n",(0,t.jsx)(n.li,{children:"Monitor device performance metrics such as CPU consumption, device memory, and network data performance."}),"\n",(0,t.jsx)(n.li,{children:"Interact with your app manually in a live test session using browser-based developer tools (e.g., Chrome DevTools, Safari Web Inspector)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsx)("small",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans Only"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Sauce Labs account (",(0,t.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["Your Sauce Labs ",(0,t.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,t.jsxs)(n.li,{children:["For security reasons, you'll need to have ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/platform/real-device-cloud",children:"Sauce Labs Private Devices"})," enabled as part of your ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/solutions/enterprise",children:"enterprise pricing plan"})," to use Virtual USB. This feature allocates a dedicated pool of Sauce Labs real devices to your organization only."]}),"\n",(0,t.jsx)(n.li,{children:"Windows, macOS, or Linux operating system."}),"\n",(0,t.jsx)(n.li,{children:"Administrative rights to install software on your machine."}),"\n",(0,t.jsx)(n.li,{children:"Have Java Development Kit (JDK) installed."}),"\n",(0,t.jsx)(n.li,{children:"A mobile native app or web app."}),"\n",(0,t.jsxs)(n.li,{children:["If you're testing an iOS app:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"macOS or Linux required (not supported for Windows)."}),"\n",(0,t.jsx)(n.li,{children:"Have Xcode command line tools installed (macOS only)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If you're testing an Android app:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Android Debug Bridge (ADB) version higher than 1.0.39."}),"\n",(0,t.jsx)(n.li,{children:"Android Studio 4 or higher."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If you need to use ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy"}),", you'll need to have the client installed first."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Limitations",type:"note",children:(0,t.jsx)(n.p,{children:"vUSB is currently only supported for test automation. Debugging with any IDE, and attaching debuggers with Xcode and Android Studio, are not advised and won't be supported at this time).\niOS17 is not supported at this time. We will soon introduce a new CLI tool to connect to a device and run automated tests."})}),"\n",(0,t.jsx)(n.h2,{id:"using-virtual-usb",children:"Using Virtual USB"}),"\n",(0,t.jsx)(n.admonition,{title:"CLI Reference",type:"tip",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2898/dev/cli/virtual-usb",children:"Virtual USB CLI Reference"})," for a full list of vUSB test configuration commands and options. You can also view them directly in the vUSB client by running ",(0,t.jsx)(n.code,{children:"java -jar virtual-usb-client.jar --help"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"download-client",children:"Download Client"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Click below to download the latest Virtual USB client to your local machine where you have your command line tools and test enginees installed/set up."}),"\n"]}),"\n",(0,t.jsxs)("p",{children:[" ",(0,t.jsx)("a",{href:"https://saucelabs-vusb.s3.eu-west-1.amazonaws.com/v2.0.6/virtual-usb-client-2.0.6.jar",children:(0,t.jsx)("button",{class:"download",children:"Download Virtual USB 2.0.6"})})," "]}),"\n",(0,t.jsxs)(n.p,{children:["For Virtual USB release history, see our ",(0,t.jsx)(n.a,{href:"https://changelog.saucelabs.com/en?category=virtual%20usb",children:"changelog"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"gather-credentials",children:"Gather Credentials"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Have your Sauce Labs ",(0,t.jsx)(n.code,{children:"username"})," and ",(0,t.jsx)(n.code,{children:"accessKey"})," handy. You can find these under ",(0,t.jsx)(n.strong,{children:"Account"})," > ",(0,t.jsx)(n.strong,{children:"User settings"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Have your ",(0,t.jsx)(n.code,{children:"--deviceName"})," handy. This is the ",(0,t.jsx)(n.strong,{children:"ID"})," of the device that you want to use for testing. To find this, go to ",(0,t.jsx)(n.strong,{children:"Live"})," > ",(0,t.jsx)(n.strong,{children:"Cross Browser"})," > ",(0,t.jsx)(n.strong,{children:"Mobile Real"})," > Find Your ",(0,t.jsx)(n.strong,{children:"Private Device"})," > ",(0,t.jsx)(n.strong,{children:"Details"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/virtual-usb/vusb-devicename.jpg"),alt:"Virtual USB Device Name",width:"500"}),"\n",(0,t.jsxs)(n.p,{children:["The device you choose will be allocated specifically to you while your session is active. Other users in your organization will see it marked ",(0,t.jsx)(n.strong,{children:"In Use"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["As a reminder, vUSB only works on private devices (marked with a ",(0,t.jsx)("img",{src:(0,r.A)("img/live-testing/green-icon.png"),alt:"Sauce Labs Private Device Icon",width:"17"}),"). A quick way to find your organization's private devices from the device list is to click ",(0,t.jsx)(n.strong,{children:"Filters"})," and toggle ",(0,t.jsx)(n.strong,{children:"Private Devices"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/virtual-usb/vusb-privatedevices.jpg"),alt:"Virtual USB Private Devices Filters",width:"500"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"start-server",children:"Start Server"}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On your local machine, launch a command line terminal window and use ",(0,t.jsx)(n.code,{children:"cd"})," to navigate to the folder where you downloaded the vUSB client."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In your terminal, enter the ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/start-server",children:(0,t.jsx)(n.code,{children:"server"})})," command, followed by ",(0,t.jsx)(n.code,{children:"--datacenter US"}),", ",(0,t.jsx)(n.code,{children:"--datacenter EU"})," or ",(0,t.jsx)(n.code,{children:"--datacenter US_east"})," to specify the Sauce Labs xxU.S. or E.U. Data Center. This establishes the connection from your local machine to our Real Device Cloud, where your private devices are hosted."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar server --datacenter US\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once you've executed the above command line, it becomes a session data log, running continuously in the background. Do not close it, and keep it separate from terminals you'll use in forthcoming steps."}),"\n",(0,t.jsx)(n.h4,{id:"optional-set-verbose-logging",children:(0,t.jsx)(n.strong,{children:"Optional: Set Verbose Logging"})}),"\n",(0,t.jsxs)(n.p,{children:["If you'd like to set verbose or very verbose logging, you can specify ",(0,t.jsx)(n.code,{children:"-v"})," or ",(0,t.jsx)(n.code,{children:"-vv"})," as the first argument, respectively. Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar -v server --datacenter US\n"})}),"\n",(0,t.jsx)(n.h4,{id:"optional-set-up-a-local-server-proxy",children:(0,t.jsx)(n.strong,{children:"Optional: Set Up a Local Server Proxy"})}),"\n",(0,t.jsxs)(n.p,{children:["If you need to use a proxy to get access to external resources, you can launch a proxy tunnel or device proxy tunnel using the ",(0,t.jsxs)(n.a,{href:"/dev/cli/virtual-usb/start-server",children:["proxy flags compatible with the ",(0,t.jsx)(n.code,{children:"server"})," command"]}),". This is not the same as starting a ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Tunnel"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"optional-set-environment-variables",children:(0,t.jsx)(n.strong,{children:"Optional: Set Environment Variables"})}),"\n",(0,t.jsxs)(n.p,{children:["Setting your Sauce Labs ",(0,t.jsx)(n.code,{children:"username"})," and ",(0,t.jsx)(n.code,{children:"accessKey"})," as ",(0,t.jsx)(n.a,{href:"/basics/environment-variables",children:"environment variables"})," provides an extra layer of security for your credentials when you reference them from within your tests."]}),"\n",(0,t.jsx)(n.h3,{id:"start-test-session",children:"Start Test Session"}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"In this step, you'll establish the connection to your device and start a vUSB test session. This needs to be done in a separate terminal session. This terminal session will only log if a connection is successful or not. During the session with the device(s) the logs can be found in the terminal that you'll have started in the previous step."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Timeouts",type:"note",children:(0,t.jsxs)(n.p,{children:["A vUSB session officially doesn't have a timeout. The only timeout that can be triggered is the timeout of a ",(0,t.jsx)(n.strong,{children:"manual/live"})," session that has been opened from method 1 or 2. The reason for this is that a manual/live testing timeout triggers a disconnection of the device and closes the already running vUSB session."]})}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to start a test session:"}),"\n",(0,t.jsx)(n.h4,{id:"method-1-connect-to-existing-live-testing-session",children:(0,t.jsx)(n.strong,{children:"Method 1: Connect to existing live testing session"})}),"\n",(0,t.jsxs)(n.p,{children:["Start a live test directly on Sauce Labs, then use the command terminal to ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/connect-session",children:(0,t.jsx)(n.code,{children:"connect"})})," the test to your vUSB client."]}),"\n",(0,t.jsxs)(n.p,{children:["First, launch your test on Sauce Labs (",(0,t.jsx)(n.strong,{children:"Live"})," > ",(0,t.jsx)(n.strong,{children:"Cross Browser"})," > ",(0,t.jsx)(n.strong,{children:"Mobile Real"})," > Find your ",(0,t.jsx)(n.strong,{children:"Private Device"})," > ",(0,t.jsx)(n.strong,{children:"Launch"}),"). Next, locate your ",(0,t.jsx)(n.code,{children:"--sessionId"})," by opening a new command line terminal and running the ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/find-sessionid",children:(0,t.jsx)(n.code,{children:"sessions"})})," command, along with your credentials."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar sessions --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy"})," is required to access your corporate network or your local machine for secure test data, you'll need to select a ",(0,t.jsx)(n.strong,{children:"SAUCE CONNECT PROXY"})," from the dropdown before launching your device."]}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/virtual-usb/vusb-sc-ui.jpg"),alt:"Sauce Connect tunnel dropdown in UI",width:"600"}),"\n",(0,t.jsx)(n.p,{children:"This will return a list of your active test sessions."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"List of active sessions\nd03a1b81-158d-4bb4-bcc9-074e43dd8465   Samsung Galaxy S10  ANDROID  10\nc7729c7a-56a9-46cf-ba96-958709a86b4f   iPhone XS           IOS      14.3\ne21abb6f-a08e-4685-ba6e-8c6586dd4264   iPhone SE 2020      IOS      14.3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Copy the ",(0,t.jsx)(n.code,{children:"--sessionId"})," of your desired test, then run that along with the ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/connect-session",children:(0,t.jsx)(n.code,{children:"connect"})})," command and your credentials."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar connect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY\n"})}),"\n",(0,t.jsx)(n.p,{children:"If your vUSB test session launch is successful, you'll see a success message:"}),"\n",(0,t.jsxs)(o.A,{defaultValue:"Android",values:[{label:"Android",value:"Android"},{label:"iOS",value:"iOS"}],children:[(0,t.jsxs)(a.A,{value:"Android",children:["The expected output will be a ",(0,t.jsx)(n.strong,{children:"port number"}),", which you'll need when you want to connect the device to ADB (see Step 7).",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"localhost:7000  online\n"})})]}),(0,t.jsxs)(a.A,{value:"iOS",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"localhost:-1  online\n"})}),"After this, vUSB needs to have access to the usbmuxd socket on your computer. This is a socket that is used by XCODE (Apple's developer tools) to communicate with iOS devices. By default it is connected to your local USB port, but since we are using a remote device, vUSB need to move the socket to a different location. To be able to do this vUSB needs to have read and write access to the socket which is located at ",(0,t.jsx)(n.code,{children:"/var/run/usbmuxd"}),".","If you are running vUSB as a non-root user you will need to provide the password for the root user and an Apple system notification popup will appear:",(0,t.jsx)("img",{src:(0,r.A)("img/virtual-usb/vusb-usbmuxd.png"),alt:"vUSB usbmuxd popup",width:"370"}),"If you are running vUSB as a root user you will not be prompted for a password and the socket will be moved automatically. You will see the following message in your server logs:",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"11:13:12.347 INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - The socket at /var/run/usbmuxd needs to be moved\n11:13:12.347 INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - This will require administrator privileges!\n"})})]})]}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.h4,{id:"method-2-start-new-session-with-vusb-client-from-command-line",children:(0,t.jsx)(n.strong,{children:"Method 2: Start new session with vUSB client from command line"})}),"\n",(0,t.jsxs)(n.p,{children:["Open a new command line terminal window and run the ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/start-session",children:(0,t.jsx)(n.code,{children:"startSession"})})," command, followed by your ",(0,t.jsx)(n.code,{children:"username"}),", ",(0,t.jsx)(n.code,{children:"accessKey"}),", and ",(0,t.jsx)(n.code,{children:"--deviceName"}),":"]}),"\n",(0,t.jsxs)(o.A,{defaultValue:"Android",values:[{label:"Android",value:"Android"},{label:"iOS",value:"iOS"}],children:[(0,t.jsx)(a.A,{value:"Android",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar startSession --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY --deviceName Motorola_Moto_Z_real\n"})})}),(0,t.jsx)(a.A,{value:"iOS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar startSession --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY --deviceName iPhone_XS\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["To use Sauce Connect Proxy: launch a tunnel in the Sauce Connect client, then add your ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/start-session/#--tunnelidentifier",children:(0,t.jsx)(n.code,{children:"--tunnel-identifier"})}),", which the vUSB client will use to retrieve and secure test data. You can also set up a device proxy using ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/start-session",children:"proxy command options"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you require video recordings and device logs to be generated for the virtual USB session created via this method (accessible via SauceLabs account on the website), include the ",(0,t.jsx)(n.code,{children:"--artifactsEnabled"})," optional flag when using the ",(0,t.jsx)(n.code,{children:"startSession"})," command. Otherwise, the test report associated with this session will only contain metadata (i.e. device info, start/end timestamps, etc.)."]}),"\n",(0,t.jsx)(n.p,{children:"If your vUSB test session launch is successful, you'll see a success message:"}),"\n",(0,t.jsxs)(o.A,{defaultValue:"Android",values:[{label:"Android",value:"Android"},{label:"iOS",value:"iOS"}],children:[(0,t.jsxs)(a.A,{value:"Android",children:["The expected output will be your ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"--sessionId"})}),", a ",(0,t.jsx)(n.strong,{children:"port number"}),", and a ",(0,t.jsx)(n.strong,{children:"link"}),". Click the link to see your device in action, running your tests in real time. You must be logged into Sauce Labs for the link to work.\nThe ",(0,t.jsx)(n.strong,{children:"port number"})," is needed when you want to connect the device to ADB (see step 7).",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"d03a1b81-158d-4bb4-bcc9-074e43dd8465  Motorola Moto Z    ANDROID   7.0   https://app.us-west-1.saucelabs.com/live/mobile/dataCenters/US/devices/shared/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a\n\nlocalhost:7000  online\n"})})]}),(0,t.jsxs)(a.A,{value:"iOS",children:["The expected output will be your ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"--sessionId"})})," and a ",(0,t.jsx)(n.strong,{children:"link"})," (no port number for iOS).",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"d03a1b81-158d-4bb4-bcc9-074e43dd8465     iPhone XS         IOS      14.3    https://app.us-west-1.saucelabs.com/live/mobile/dataCenters/US/devices/shared/9299h0c88a7-e2b6-41bc-9509-5-8a5d765490371e2c9a\n\nlocalhost:-1  online\n"})}),"After this, vUSB needs to have access to the usbmuxd socket on your computer. This socket is used by XCODE (Apple's developer tools) to communicate with iOS devices. By default, it is connected to your local USB port, but since we are using a remote device, vUSB needs to move the socket to a different location. To do this, vUSB needs to have read and write access to the socket which is located at ",(0,t.jsx)(n.code,{children:"/var/run/usbmuxd"}),".","If you are running vUSB as a non-root user you will need to provide the password for the root user and an Apple system notification popup will appear:",(0,t.jsx)("img",{src:(0,r.A)("img/virtual-usb/vusb-usbmuxd.png"),alt:"vUSB usbmuxd popup",width:"370"}),"If you are running vUSB as a root user, you will not be prompted for a password and the socket will be moved automatically. You will see the following message in your server logs:",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"11:13:12.347 INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - The socket at /var/run/usbmuxd needs to be moved\n11:13:12.347 INFO com.saucelabs.vusb.client.server.usbmuxd.SocketMover - This will require administrator privileges!\n"})}),"Make sure you're logged into your Sauce Labs account prior to clicking the link above."]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Timeout",type:"note",children:(0,t.jsxs)(n.p,{children:["No timeout is triggered if the returned link is ",(0,t.jsx)(n.strong,{children:"not"})," opened."]})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Android only"}),": Link ADB to your test session device by running ",(0,t.jsx)(n.code,{children:"adb connect"}),", followed by the port number:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"adb connect localhost:7000\n"})}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/virtual-usb/vusb-adb.jpg"),alt:"Virtual USB ADB",width:"400"}),"\n",(0,t.jsx)(n.h3,{id:"test-and-debug",children:"Test and Debug"}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"Now, you can debug and run tests on your app. We advise you to use our Sauce App Storage to upload the apps and run tests against them."}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"iOS Limitations",type:"caution",children:[(0,t.jsx)(n.p,{children:"Attaching a debugger is not supported due to the amount of data that the iOS device symbols will need to be downloaded to your local machine. This process occurs automatically when you're connecting to a Sauce Labs iOS device for the first time via a remote debug vUSB session with Xcode. Xcode will attempt to download the iOS device symbols over the vUSB tunnel, causing a lag that can last from a few minutes to an hour..**"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"What to Do"}),": Go to ",(0,t.jsx)(n.code,{children:"~/Library/Developer/Xcode/iOS DeviceSupport/"})," and check the used iOS version of the phone to see if the symbols have been downloaded. The total used space per OS should be more than 1GB. If they are less than 1MB, delete the folder and restart Xcode again so it can re-fetch them.\nThis a one-time action that you won't need to do again for future tests."]}),"\n"]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.admonition,{title:"Android Limitation",type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["The ",(0,t.jsx)(n.code,{children:"adb reverse"})," command is not supported."]})," Please rethink your implementation and think about using ",(0,t.jsx)(n.a,{href:"#android-port-forwarding-with-adb-forward",children:(0,t.jsx)(n.code,{children:"adb forward"})})," instead."]})}),"\n",(0,t.jsx)(n.h3,{id:"close-test",children:"Close Test"}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When you've finished testing, we recommend closing your vUSB session so that other users can use the device. There are a few ways to do this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you started a test session by connecting to a live session on Sauce Labs (Option 1), close it out by running the ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/disconnect-session",children:(0,t.jsx)(n.code,{children:"disconnect"})})," command, followed by your ",(0,t.jsx)(n.code,{children:"--sessionId"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Android Only"}),": You'll also need to disconnect your device from ADB. Run ",(0,t.jsx)(n.code,{children:"adb disconnect"})," followed by your ",(0,t.jsx)(n.code,{children:"<IPAddress>:<portNumber>"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"adb disconnect localhost:7000\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you started your test session with ",(0,t.jsx)(n.code,{children:"startSession"})," (option 2), close it out by running the ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/delete-session",children:(0,t.jsx)(n.code,{children:"deleteSession"})})," command, followed by your ",(0,t.jsx)(n.code,{children:"--sessionId"})," and credentials."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar deleteSession --sessionId 37D274BC3A65A34BB3DA4DDF7B77E341 --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Android Only"}),": You'll also need to disconnect your device from ADB. Run ",(0,t.jsx)(n.code,{children:"adb disconnect"})," followed by your ",(0,t.jsx)(n.code,{children:"<IPAddress>:<portNumber>"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"adb disconnect localhost:7000\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The third option, regardless of your test setup, is to close the browser window where the device session is running."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["If you've lost track of your ",(0,t.jsx)(n.code,{children:"--sessionId"}),", you can recover it using the ",(0,t.jsx)(n.a,{href:"/dev/cli/virtual-usb/find-sessionid",children:(0,t.jsx)(n.code,{children:"sessions"})})," command to generate a list of your active device sessions."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"java -jar virtual-usb-client.jar disconnect --sessionId 37D274BC3A65A34BB3DA4DDF7B77E341\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"example-use-cases",children:"Example Use Cases"}),"\n",(0,t.jsx)(n.h3,{id:"adb-commands",children:"ADB commands"}),"\n",(0,t.jsxs)(n.p,{children:["You can execute ",(0,t.jsx)(n.code,{children:"adb"})," commands on the device connected over vUSB as you would normally also use. This is a simple example to capture a screenshot and pull it to your local machine."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#Create a temporary folder to save a screenshot.\nmkdir tmp\n#Capture a screenshot and save to /sdcard/screen.png on your Android divice.\nadb shell screencap -p /sdcard/screen.png\n\n#Grab the screenshot from /sdcard/screen.png to /tmp/screen.png on your PC.\nadb pull /sdcard/screen.png /tmp/screen.png\n\n#Delete /sdcard/screen.png.\nadb shell rm /sdcard/screen.png\n\n#open the screenshot on your PC.\nopen /tmp/screen.png\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"android-port-forwarding-with-adb-forward",children:["Android port forwarding with ",(0,t.jsx)(n.code,{children:"adb forward"})]}),"\n",(0,t.jsx)(n.p,{children:"There are cases in which you want to set up arbitrary port forwarding, which forwards requests from your local machine port to a different port on the connected Android device through vUSB."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["This is the ",(0,t.jsx)(n.a,{href:"https://github.com/saucelabs/my-demo-app-android",children:"app code"})," we use for the below example."]})}),"\n",(0,t.jsx)(n.p,{children:"The following example sets up forwarding of host port 40000 (laptop/CI) to device port 50000 (the Android device) where we change text in the app."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start a ",(0,t.jsx)(n.a,{href:"#start-server",children:"server"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connect to a device with for example ",(0,t.jsx)(n.a,{href:"#method-2-start-new-session-with-vusb-client-from-command-line",children:(0,t.jsx)(n.code,{children:"startSession"})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get the app installed. Advice would be to use Android Studio and run the app on the remote device (Android Studio will automatically detect the remote device)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open the shared url in your browser"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'Click on "Menu \u2192 Virtual USB". You will find two commands on the screen. They are:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"adb forward tcp:40000 tcp:50000\necho GOOSE | nc localhost 40000\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the commands to get the following result"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("video",{controls:!0,style:{"max-width":"800px"},children:(0,t.jsx)("source",{src:(0,r.A)("img/virtual-usb/vusb-adb-forward.mp4")})}),"\n",(0,t.jsx)(n.h3,{id:"android-studio-debugging",children:"Android Studio Debugging"}),"\n",(0,t.jsxs)(n.p,{children:["To for example profile your Android app you can follow the instructions as mentioned ",(0,t.jsx)(n.a,{href:"https://developer.android.com/studio/profile",children:"here"}),". This can result in the following data."]}),"\n",(0,t.jsx)("img",{src:(0,r.A)("img/virtual-usb/vusb-android-profiling.png"),alt:"Virtual USB Android Studio Profiling"})]})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var t=s(18215);const i={tabItem:"tabItem_Ymn6"};var r=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,o),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),i=s(18215),r=s(23104),o=s(56347),a=s(205),l=s(57485),c=s(31682),d=s(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:s}=e;const i=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,r=h(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,u]=v({queryString:s,groupId:i}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),j=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function g(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),i=a[s].value;i!==t&&(c(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(f,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);