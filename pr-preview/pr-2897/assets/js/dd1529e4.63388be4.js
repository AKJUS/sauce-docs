"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[83125],{36684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453),r=t(86025);const o={id:"deployment-kubernetes",title:"Deployment - Kubernetes (Self-Hosted)",sidebar_label:"Deployment - Kubernetes",keywords:["api","api-fortress","deployment","kubernetes"]},a=void 0,l={id:"api-testing/on-prem/self-hosted/deployment-kubernetes",title:"Deployment - Kubernetes (Self-Hosted)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/deployment-kubernetes.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/deployment-kubernetes",permalink:"/api-testing/on-prem/self-hosted/deployment-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/deployment-kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"deployment-kubernetes",title:"Deployment - Kubernetes (Self-Hosted)",sidebar_label:"Deployment - Kubernetes",keywords:["api","api-fortress","deployment","kubernetes"]},sidebar:"apif",previous:{title:"Deployment \u2013 Docker",permalink:"/api-testing/on-prem/self-hosted/deployment-docker"},next:{title:"Deployment \u2013 Red Hat OpenShift",permalink:"/api-testing/on-prem/self-hosted/red-hat-openshift"}},d={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Starting the Main Services",id:"starting-the-main-services",level:2},{value:"Step 1 - Accessing a Private Repository",id:"step-1---accessing-a-private-repository",level:3},{value:"Step 2 - Configure <code>apifortress.yml</code>",id:"step-2---configure-apifortressyml",level:3},{value:"Step 3 - Configure <code>dependencies.yml</code>",id:"step-3---configure-dependenciesyml",level:3},{value:"Step 4 - Start the Main Services",id:"step-4---start-the-main-services",level:3},{value:"Step 5 - Verify",id:"step-5---verify",level:3},{value:"Configure the Downloader",id:"configure-the-downloader",level:2},{value:"Step 1 - Create a Downloader in API Fortress",id:"step-1---create-a-downloader-in-api-fortress",level:3},{value:"Step 2 - Configure the Downloader",id:"step-2---configure-the-downloader",level:3},{value:"Step 3 - Move the Key and Secret Values to <code>downloader.yml</code>",id:"step-3---move-the-key-and-secret-values-to-downloaderyml",level:3},{value:"Step 4 - Start the Downloader",id:"step-4---start-the-downloader",level:3},{value:"Configure the Load Agent",id:"configure-the-load-agent",level:2},{value:"Step 1 \u2013 Define the Maximum Users Per Load Agent",id:"step-1--define-the-maximum-users-per-load-agent",level:3},{value:"Step 2 \u2013 Configure <code>config.yml</code>",id:"step-2--configure-configyml",level:3},{value:"Step 3 \u2013 Adding the Engine",id:"step-3--adding-the-engine",level:3},{value:"Step 4 - Creating the Config-Map",id:"step-4---creating-the-config-map",level:3},{value:"Step 5 - Tweak the Memory Settings (if Necessary)",id:"step-5---tweak-the-memory-settings-if-necessary",level:3},{value:"Step 6 - Start the Load Agent service",id:"step-6---start-the-load-agent-service",level:3},{value:"Step 7 - Verify the deployment",id:"step-7---verify-the-deployment",level:3},{value:"General tweaks",id:"general-tweaks",level:2},{value:"HTTPS to HTTP",id:"https-to-http",level:3},{value:"Backing up Your Data",id:"backing-up-your-data",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["This tutorial assumes that the reader is familiar with some standard procedures in Kubernetes (creating secrets, creating config-maps etc.) If you are not familiar with these processes, please refer to the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/home/",children:"Kubernetes documentation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The memory settings configured for each container are to be intended as the ",(0,s.jsx)(n.strong,{children:"minimum for a production environment."})," Wherever applicable, this document will provide settings for a ",(0,s.jsx)(n.strong,{children:"minimum for a test drive environment"})," and ",(0,s.jsx)(n.strong,{children:"optimal for a larger scale production environment"})]}),"\n",(0,s.jsx)(n.li,{children:"If your cluster is not allowed to communicate with DockerHub or is incapable of logging in, you will need to manually pull (from DockerHub) and push (to your private repository) images."}),"\n",(0,s.jsxs)(n.li,{children:["This guide, and the provided starter configuration files will assume the deployment will occur in the ",(0,s.jsx)(n.strong,{children:"apifortress"})," project/namespace. If this is not the case for your setup, please update all current hostname references to ",(0,s.jsx)(n.strong,{children:"apifortress"}),", as in ",(0,s.jsx)(n.em,{children:"postgres.apifortress.svc"})," or ",(0,s.jsx)(n.em,{children:"tools.apifortress.svc"})]}),"\n",(0,s.jsxs)(n.li,{children:["The whole guide and annexed configuration files have been built upon hands-on experience with the Google GCloud Kubernetes service. ",(0,s.jsx)(n.strong,{children:"Some tweaking may be required if using a different provider"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"starting-the-main-services",children:"Starting the Main Services"}),"\n",(0,s.jsx)(n.h3,{id:"step-1---accessing-a-private-repository",children:"Step 1 - Accessing a Private Repository"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create a secret in Kubernetes"})," that contains the DockerHub user credentials for the account shared with API Fortress. As the repositories on the APIF-side are private, you must submit the same account that was submitted with the configuration survey. You can find further information here ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/",children:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"})]}),"\n",(0,s.jsxs)(n.h3,{id:"step-2---configure-apifortressyml",children:["Step 2 - Configure ",(0,s.jsx)(n.code,{children:"apifortress.yml"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Ensure that the cluster is capable of supporting the default image memory limits. The ",(0,s.jsx)(n.strong,{children:"apifortress"})," container is set for 8GB of memory. The optimal memory setting is 16GB, the minimum memory setting is 4GB;"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["memorySettings (optional parameter) describe the minimum and maxium ",(0,s.jsx)(n.strong,{children:"heap memory"})," the process can use. Xmx should be set to 1/2 of the available memory of the process. You don't need to tweak these values if you don't change the overall available memory.\nThis is an example of the setting to be placed among the environment variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- name: memorySettings\n  value: '-Xms1024m -Xmx4098m'\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ensure that any critical key/value pairs have been defined."})," The configuration files should be populated with the values submitted with the pre-configuration survey, but for safeties sake a user should ensure that ",(0,s.jsx)(n.strong,{children:"grailsServerUrl"})," has been passed the URL that the instance will be reached through, that ",(0,s.jsx)(n.strong,{children:"license"})," has been passed a license key and that ",(0,s.jsx)(n.strong,{children:"adminEmail"}),", ",(0,s.jsx)(n.strong,{children:"adminFullName"})," and ",(0,s.jsx)(n.strong,{children:"companyName"})," have been defined. These values are all found in the ",(0,s.jsx)(n.strong,{children:"env"})," section of the ",(0,s.jsx)(n.code,{children:"apifortress.yml"})," file. While it is not critical to deployment, it is ",(0,s.jsx)(n.strong,{children:"strongly recommended"})," that the user configures the mailer service as well.\nThis section in ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"env"}),":"]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"env:\n- name: apifortressMailEnabled\n  value: 'true'\n- name: apifortressMailFrom\n  value: info@example.com\n- name: apifortressMailSmtpHost\n  value: ''\n- name: apifortressMailSmtpPassword\n  value: ''\n- name: apifortressMailSmtpPort\n  value: '25'\n- name: apifortressMailStartTLS\n  value: 'true'\n- name: apifortressMailSmtpUsername\n  value: info@example.com\n- name: apifortressMailUseSES\n  value: 'false'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["as well as the settings in the ",(0,s.jsx)(n.strong,{children:"AFMAILER"})," ",(0,s.jsx)(n.strong,{children:"Microservice"})," should be completed to allow the platform to generate emails."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"The Load Balancer"})," is the mechanism for communicating with the platform. This can be replaced with a ",(0,s.jsx)(n.code,{children:"NodePort"})," or ",(0,s.jsx)(n.code,{children:"Ingress"})," if required, according to the configuration of your system."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# >>> APIFORTRESS loadBalancer service >>>\napiVersion: v1\nkind: Service\nmetadata:\nname: apifortress\nspec:\ntype: LoadBalancer\nselector:\napp: apifortress\nports:\n- port: 8080\nloadBalancerIP: '\\[cluster-ip-change-it\\]'\nsessionAffinity: ClientIP\n---\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ensure that all the ports exposed"})," in the descriptor match your expectations. As a default, the dashboard will run on ",(0,s.jsx)(n.code,{children:"port 8080"})," and the liveness probe will test that to determine the service availability."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"step-3---configure-dependenciesyml",children:["Step 3 - Configure ",(0,s.jsx)(n.code,{children:"dependencies.yml"})]}),"\n",(0,s.jsxs)(n.p,{children:["Each of the database services in ",(0,s.jsx)(n.code,{children:"dependencies.yml"})," has a preconfigured definition for the amount of disk space allocated to the service. These values can be edited to match the available disk space that you wish to provide for said services."]}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.strong,{children:"MongoDB"})," the proposed memory setting is 8Gi. The minimum is 1Gi, the optimal is 16Gi. However, for the inner workings of MongoDB, any increase in memory will result in better performance. For\xa0",(0,s.jsx)(n.strong,{children:"PostgreSQL"})," the proposed memory setting is 1Gi which is considered also an optimal setting. The minimum is 512Mi."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"volume"})," claims may need to be tweaked based on your service provider."]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"MongoDB will store most of the data produced by the platform, so make sure the disk size is reasonable for your use case"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  volumeClaimTemplates:\n  - metadata:\n      name: mongovol\n    spec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 50Gi\n\n  volumeClaimTemplates:\n  - metadata:\n      name: psqlvol\n    spec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 1Gi\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-4---start-the-main-services",children:"Step 4 - Start the Main Services"}),"\n",(0,s.jsx)(n.p,{children:"Start the dependency services by typing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create -f dependencies.yml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once these services have spun up, you can start the main API Fortress platform with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl create -f apifortress.yml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-5---verify",children:"Step 5 - Verify"}),"\n",(0,s.jsxs)(n.p,{children:["Access the platform with the URL provided in the ",(0,s.jsx)(n.code,{children:"apifortress.xml"})," file. Login using the default admin username and the default password (",(0,s.jsx)(n.code,{children:'"foobar"'})," - change it ASAP)."]}),"\n",(0,s.jsx)(n.p,{children:"You should now be able to access the API Fortress Dashboard."}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-downloader",children:"Configure the Downloader"}),"\n",(0,s.jsxs)(n.p,{children:["The API Fortress downloader is the agent that retrieves the resources to be tested. Downloaders can be installed in various locations, so factors such as latency and download time can be measured by remote consumers. Click here to learn more about the ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/learn-more/downloader-101",children:"Downloaders"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"step-1---create-a-downloader-in-api-fortress",children:"Step 1 - Create a Downloader in API Fortress"}),"\n",(0,s.jsx)(n.p,{children:"Login to API Fortress with the admin user, access the API Fortress admin panel by clicking the \u201cuser\u201d icon in the top right, then click Admin Panel."}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2017/01/login.png"),alt:"Login"}),"\n",(0,s.jsx)(n.p,{children:"Choose \u201cDownloaders\u201d from the list of actions and click on the \u201cAdd Downloader\u201d button."}),"\n",(0,s.jsx)(n.h3,{id:"step-2---configure-the-downloader",children:"Step 2 - Configure the Downloader"}),"\n",(0,s.jsx)(n.p,{children:"Fill in the following fields:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Write a recognizable name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Location:"})," A representation of where the downloader is. ie. Chicago"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Latitude / Longitude:"})," The geographical position of the downloader."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Last Resort:"})," Check this to make it the default downloader used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"URL:"})," The address of the downloader, followed by port (default ",(0,s.jsx)(n.code,{children:"8819"}),") and path ",(0,s.jsx)(n.code,{children:"/api"}),". In our Kubernetes deployment, our downloader address would be","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://downloader.apifortress.svc:8819/api\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Key, API Secret:"})," Write these two values down for use later."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"step-3---move-the-key-and-secret-values-to-downloaderyml",children:["Step 3 - Move the Key and Secret Values to ",(0,s.jsx)(n.code,{children:"downloader.yml"})]}),"\n",(0,s.jsxs)(n.p,{children:["Edit the ",(0,s.jsx)(n.code,{children:"downloader.yml"})," file and enter the API Key and API Secret provided by the platform in the previous step."]}),"\n",(0,s.jsx)(n.h3,{id:"step-4---start-the-downloader",children:"Step 4 - Start the Downloader"}),"\n",(0,s.jsx)(n.p,{children:"Start the downloader with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create -f downloader.yml\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open the HTTP client from the tools drop-down menu in API Fortress. Attempt to contact a site that is accessible from this server environment. API Fortress should now be able to successfully communicate with other websites."}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-load-agent",children:"Configure the Load Agent"}),"\n",(0,s.jsx)(n.h3,{id:"step-1--define-the-maximum-users-per-load-agent",children:"Step 1 \u2013 Define the Maximum Users Per Load Agent"}),"\n",(0,s.jsx)(n.p,{children:"Users per agent are the maximum number of virtual users that each Load Agent can provide."}),"\n",(0,s.jsx)(n.admonition,{title:"Important!",type:"note",children:(0,s.jsx)(n.p,{children:"Large numbers of simulated users will require large amounts of hardware resources. Contact your DevOps team to develop a strategy for resource allocation."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Locate and open the file named ",(0,s.jsx)(n.em,{children:"application.conf"}),". It is located in the ",(0,s.jsx)(n.em,{children:"core-server-etc"})," directory."]}),"\n",(0,s.jsx)(n.li,{children:"Line 14 of this file (fixed-pool-size) should have its value adjusted to match the desired number of maximum users per agent."}),"\n",(0,s.jsx)(n.li,{children:"Line 48 of this file (nr-of-instances) should have its value adjusted to match the desired number of maximum users per agent. These two values should match."}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"step-2--configure-configyml",children:["Step 2 \u2013 Configure ",(0,s.jsx)(n.code,{children:"config.yml"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Locate and open ",(0,s.jsx)(n.em,{children:"config.yml."})," It is located in ",(0,s.jsx)(n.em,{children:"core-server-etc."})]}),"\n",(0,s.jsxs)(n.li,{children:["First, we have to configure the baseURL","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"baseURL is located on line 3."}),"\n",(0,s.jsx)(n.li,{children:"If the Load Agent and the API Fortress Dashboard are located on the same cluster, then you can replace the baseURL with the internal address and port of the Dashboard on the server."}),"\n",(0,s.jsx)(n.li,{children:"If the Load Agent and the API Fortress Dashboard are located on different clusters, you can replace the baseURL with the actual URL of the Dashboard. That is to say, the URL you would use to access it via web browser."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Next, we need to provide the API Key and Secret.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open the main API Fortress dashboard and click the gear icon in the upper right corner to access the settings menu"}),"\n",(0,s.jsxs)(n.li,{children:["Click the \u201c",(0,s.jsx)(n.em,{children:"API Keys"}),"\u201d option in the left sidebar."]}),"\n",(0,s.jsxs)(n.li,{children:["Click \u201c",(0,s.jsx)(n.em,{children:"+API Key\u201d"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/06/CreateAPIKey.gif"),alt:"CreateAPIKey.gif"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.em,{children:"API Key"})," to line 5 of ",(0,s.jsx)(n.em,{children:"config.yml"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.em,{children:"Secret"})," to line 6 of ",(0,s.jsx)(n.em,{children:"config.yml"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-3--adding-the-engine",children:"Step 3 \u2013 Adding the Engine"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The next step is to add the new Engine to API Fortress itself."}),"\n",(0,s.jsx)(n.li,{children:"Log into API Fortress as an administrator."}),"\n",(0,s.jsxs)(n.li,{children:["Click the user icon in the upper right corner, and then click ",(0,s.jsx)(n.em,{children:"\u201cAdmin Panel\u201d"})]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.em,{children:"\u201cEngines\u201d"})," on the left side of the screen."]}),"\n",(0,s.jsxs)(n.li,{children:["Click \u201c",(0,s.jsx)(n.em,{children:"+Engine\u201d"})]}),"\n",(0,s.jsx)(n.li,{children:"Enter the name and location of the Engine."}),"\n",(0,s.jsx)(n.li,{children:"The CRN value defaults to a random string. It is very recommended that you change it to something human-readable, but unique in the list. This is the internal name of the engine."}),"\n",(0,s.jsxs)(n.li,{children:["After modifying the CRN, copy the value to line 11 of ",(0,s.jsx)(n.em,{children:"config.yml"})]}),"\n",(0,s.jsxs)(n.li,{children:["Copy the secret to line 12 of ",(0,s.jsx)(n.em,{children:"config.yml"})]}),"\n",(0,s.jsxs)(n.li,{children:["Select the Owning Company of the Engine. An Engine must be owned by a single company. The default value (Public Engine) ",(0,s.jsxs)(n.strong,{children:["should ",(0,s.jsx)(n.em,{children:"not"})]})," be chosen."]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.em,{children:"\u201cYes\u201d"})," for \u201c",(0,s.jsx)(n.em,{children:"Dedicated to Load Testing"}),"\u201c"]}),"\n",(0,s.jsx)(n.li,{children:"Click the green check to save the Engine settings."}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/06/ezgif.com-gif-maker-1.gif"),alt:"ezgif.com-gif-maker-1.gf"}),"\n",(0,s.jsx)(n.h3,{id:"step-4---creating-the-config-map",children:"Step 4 - Creating the Config-Map"}),"\n",(0,s.jsxs)(n.p,{children:["Create a config-map called 'core-0' from the ",(0,s.jsx)(n.strong,{children:"core-server-etc"})," directory."]}),"\n",(0,s.jsx)(n.h3,{id:"step-5---tweak-the-memory-settings-if-necessary",children:"Step 5 - Tweak the Memory Settings (if Necessary)"}),"\n",(0,s.jsx)(n.p,{children:"The memory settings may vary a lot based on the number of virtual users the load agent is meant to support. The default 2Gi is generally OK for up to 50 virtual users. It is to be noted that as the process is memory, CPU and network intensive, better results are achieved by introducing more load agents versus increasing the size of each one. For the very same reason, it's generally pointless to run multiple load agents in the server."}),"\n",(0,s.jsx)(n.h3,{id:"step-6---start-the-load-agent-service",children:"Step 6 - Start the Load Agent service"}),"\n",(0,s.jsx)(n.p,{children:"Start the load agent service with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create -f core-server.yml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-7---verify-the-deployment",children:"Step 7 - Verify the deployment"}),"\n",(0,s.jsx)(n.p,{children:"Access the Load Testing tool by clicking on the Tools dropdown at the top of the view in API Fortress. The Load Agent that you just deployed should be visible on the right side of the screen."}),"\n",(0,s.jsx)(n.h2,{id:"general-tweaks",children:"General tweaks"}),"\n",(0,s.jsx)(n.h3,{id:"https-to-http",children:"HTTPS to HTTP"}),"\n",(0,s.jsx)(n.p,{children:"If you're having the dashboard go through a gateway, it is likely that you will want to run the container in HTTP and the gateway in HTTPS. Therefore the grailsURL in the configuration will need to be in HTTPS. At this point the API Fortress dashboard will perform a hard check on the protocol at each request which will always appear as in HTTP, causing an illegal redirect. This is done for security reasons."}),"\n",(0,s.jsx)(n.p,{children:"To overcome this issue you will need to override one configuration file in the Tomcat configuration via a configMap. This is not the default in the API Fortress Dashboard image on purpose, again, for security reasons."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"We will assume that the gateway will forward the x-forwarded-proto header."})}),"\n",(0,s.jsxs)(n.p,{children:["The file to be added is located in the deployment files you have been provided: ",(0,s.jsx)(n.code,{children:"/tomcat_conf/context.xml"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Tweak the file according to your needs"}),"\n",(0,s.jsxs)(n.li,{children:["Create a config map for the single file named ",(0,s.jsx)(n.em,{children:"tomcat-context"})]}),"\n",(0,s.jsxs)(n.li,{children:["Change the apifortress service in the ",(0,s.jsx)(n.em,{children:"apifortress.xml"})," file as follows: Add this fragment within the ",(0,s.jsx)(n.em,{children:"containers"})," element:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"volumeMounts:\n - name: tomcat-context\n mountPath: /usr/local/tomcat/conf/context.xml\n subPath: context.xml\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Add this fragment in the spec element:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"volumes:\n - name: tomcat-context\n configMap:\n name: tomcat-context\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By doing so, we will have API Fortress to accept the original protocol as the actual protocol being used."}),"\n",(0,s.jsx)(n.h2,{id:"backing-up-your-data",children:"Backing up Your Data"}),"\n",(0,s.jsx)(n.p,{children:"When running a self-hosted/on-premises installation, you will certainly want to run periodic backups of all your data."}),"\n",(0,s.jsxs)(n.p,{children:["In this article, we will provide you the scripts to perform a data dump of API Fortress. You will then need to wire them up in your scheduled operations system, such as ",(0,s.jsx)(n.code,{children:"cron"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Requirements",type:"warning",children:(0,s.jsxs)(n.p,{children:["We will assume you have a ",(0,s.jsx)(n.strong,{children:"running API Fortress installation"}),", ability to ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"sudo"})})," to root privileges and a general idea of how Kubernetes works."]})}),"\n",(0,s.jsx)(n.p,{children:"If you are using EKS, you can simply take snapshots of the postgres and mongo disks directly through EKS. If you would like to take data dumps via Kubernetes please see the instructions below."}),"\n",(0,s.jsx)(n.p,{children:"On the machine where you have Kubernetes installed and running, execute the following commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl get pods\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now we will start with backing up the postgres disk, please run the following two commands in order:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'kubectl exec -ti postgres-0 -- bash -c "pg_dump -U apipulse > apifortress_postgres.sql"\nkubectl cp postgres-0:apifortress_postgres.sql apifortress_postgres.sql\n'})}),"\n",(0,s.jsx)(n.p,{children:"Next we will back up the mongodb disk, please run the following two commands in order:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"kubectl exec -ti mongodb-0 -- mongodump\nkubectl cp mongodb-0:dump dump\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that the mongodb dumps can become quite large, so we recommend that these dumps be done on a volume disk or use a separate desk that is mounted to all of this that will only be used for backups."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);