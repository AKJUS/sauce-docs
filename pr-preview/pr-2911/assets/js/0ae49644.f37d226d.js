"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[1176],{51441:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(74848),o=r(28453);r(11470),r(19365),r(86025);const s={id:"server-installation",title:"Coroner Server Installation",sidebar_label:"Server Installation",description:"Backtrace's object-store for post-mortem assets."},i=void 0,a={id:"error-reporting/advanced/coroner/server-installation",title:"Coroner Server Installation",description:"Backtrace's object-store for post-mortem assets.",source:"@site/docs/error-reporting/advanced/coroner/server-installation.md",sourceDirName:"error-reporting/advanced/coroner",slug:"/error-reporting/advanced/coroner/server-installation",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/server-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/coroner/server-installation.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"server-installation",title:"Coroner Server Installation",sidebar_label:"Server Installation",description:"Backtrace's object-store for post-mortem assets."},sidebar:"backtrace",previous:{title:"Package Installation",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/package-installation"},next:{title:"Server Setup",permalink:"/sauce-docs/pr-preview/pr-2911/error-reporting/advanced/coroner/server-setup"}},c={},l=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Installation",id:"installation",level:2},{value:"Ubuntu/Debian",id:"ubuntudebian",level:3},{value:"RHEL",id:"rhel",level:3},{value:"System Configuration",id:"system-configuration",level:2},{value:"Increase File Descriptor Limits",id:"increase-file-descriptor-limits",level:3},{value:"Increase <code>max_map_count</code>",id:"increase-max_map_count",level:3},{value:"SSL Configuration",id:"ssl-configuration",level:3},{value:"CA-Trusted Certificates",id:"ca-trusted-certificates",level:3},{value:"Self-Signed Certificates",id:"self-signed-certificates",level:3},{value:"Step 2: Configure Coronerd",id:"step-2-configure-coronerd",level:2},{value:"Step 3: Configure Coroner Client",id:"step-3-configure-coroner-client",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Solution 1:",id:"solution-1",level:4},{value:"Solution 2:",id:"solution-2",level:4},{value:"Starting <code>coronerd</code>",id:"starting-coronerd",level:2},{value:"Create Organization and Admin User",id:"create-organization-and-admin-user",level:2},{value:"Create an Organization",id:"create-an-organization",level:3},{value:"Create an Administrator",id:"create-an-administrator",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This guide provides step-by-step instructions for installing and setting up coronerd, Backtrace's object-store for post-mortem assets."}),"\n",(0,t.jsxs)(n.p,{children:["If you are using Backtrace's hosted service, refer to the ",(0,t.jsx)(n.a,{href:"/error-reporting/advanced/coroner/server-setup/",children:"Object Store Configuration"})," guide."]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Backtrace account (",(0,t.jsx)(n.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,t.jsx)(n.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,t.jsx)(n.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A Backtrace project and a ",(0,t.jsx)(n.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps in Package Installation to install the Backtrace repository."}),"\n",(0,t.jsx)(n.h3,{id:"ubuntudebian",children:"Ubuntu/Debian"}),"\n",(0,t.jsx)(n.p,{children:"If you are running Ubuntu 12.04, install libhwloc4:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ apt-get install libhwloc4\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you are running Ubuntu 14.04 or 16.04, install libhwloc5:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ apt-get install libhwloc5\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install coronerd using apt, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ apt-get install backtrace-coronerd backtrace-gimli\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rhel",children:"RHEL"}),"\n",(0,t.jsx)(n.p,{children:"To install coronerd using yum, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ yum install backtrace-coronerd backtrace-gimli\n"})}),"\n",(0,t.jsx)(n.h2,{id:"system-configuration",children:"System Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The following steps outline the preliminary system configuration required before starting ",(0,t.jsx)(n.code,{children:"coronerd"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"increase-file-descriptor-limits",children:"Increase File Descriptor Limits"}),"\n",(0,t.jsxs)(n.p,{children:["For RHEL/CentOS and Ubuntu 14 (and other non-systemd distros), edit ",(0,t.jsx)(n.code,{children:"/etc/security/limits.conf"})," and add the following lines:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"* hard nofile 131072\n* soft nofile 131072\nroot hard nofile 131072\nroot soft nofile 131072\n"})}),"\n",(0,t.jsx)(n.p,{children:"Exit and re-login to the terminal for the changes to take effect."}),"\n",(0,t.jsxs)(n.p,{children:["For Ubuntu 16 and other systemd-based distros, check ",(0,t.jsx)(n.code,{children:"/etc/systemd/system/coronerd.service"})," and verify that the following line is present under the ",(0,t.jsx)(n.strong,{children:"Service"})," section:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"LimitNOFILE=131072\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you modified ",(0,t.jsx)(n.code,{children:"coronerd.service"})," above, run the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl daemon-reload\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"increase-max_map_count",children:["Increase ",(0,t.jsx)(n.code,{children:"max_map_count"})]}),"\n",(0,t.jsx)(n.p,{children:"Run the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "vm.max_map_count=16000000" /etc/sysctl.conf\nsysctl -p\n'})}),"\n",(0,t.jsx)(n.h3,{id:"ssl-configuration",children:"SSL Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to disable SSL on coronerd, refer to the ",(0,t.jsx)(n.a,{href:"/error-reporting/advanced/coroner/server-advanced/#disable-ssl",children:"Disable SSL"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["If you want to use CA-trusted certificates, see the ",(0,t.jsx)(n.a,{href:"#ca-trusted-certificates",children:"CA-trusted Certificates"})," section below.\nIf you want to use self-signed certificates, see the ",(0,t.jsx)(n.a,{href:"#self-signed-certificates",children:"Self-signed Certificates"})," section below."]}),"\n",(0,t.jsx)(n.h3,{id:"ca-trusted-certificates",children:"CA-Trusted Certificates"}),"\n",(0,t.jsxs)(n.p,{children:["First, copy your certificate chain file (or certificate file) and private key file to ",(0,t.jsx)(n.code,{children:"/etc/coronerd/ssl/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For security reasons, ensure that the private key has strict permissions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ chmod 600 /etc/coronerd/ssl/key.pem\n$ ls -lptr /etc/coronerd/ssl/key.pem\n-rw------- 1 root root 1704 Nov 24 11:43 /etc/coronerd/ssl/key.pem\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"/etc/coronerd/coronerd.conf"})," file, specify the certificate and key file paths for the SSL configuration. All SSL objects must point to your certificate and key files."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example"',children:'{\n    //...\n    "console" : {\n        "path" : "/var/run/coronerd/coronerd.socket",\n        "bind" : {\n            "hostname" : "0.0.0.0",\n            "service" : "9040"\n        },\n        "backlog" : 16,\n        "ssl" : {\n            "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n            "key" : "/etc/coronerd/ssl/key.pem"\n        }\n    },\n    //...\n    "listener" : {\n        "write" : {\n            "http_bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "6097",\n                    "concurrency" : 2000\n                }\n            ],\n            "https_bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "6098",\n                    "concurrency" : 2000\n                }\n            ],\n            "threads" : 1,\n            "ssl" : {\n                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n                "key" : "/etc/coronerd/ssl/key.pem"\n            }\n        },\n        "read" : {\n            "bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "4097"\n                }\n            ],\n            "threads" : 1,\n            "ssl" : {\n                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n                "key" : "/etc/coronerd/ssl/key.pem"\n            }\n        },\n        "http-console" : {\n            "bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "443",\n                    "concurrency" : 1000\n                }\n            ],\n            "columns" : {\n        //...\n            },\n            "threads" : 1,\n            "ssl" : {\n                "certificate_chain_file" : "/etc/coronerd/ssl/chain.pem",\n                "key" : "/etc/coronerd/ssl/key.pem"\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you are using a certificate file, add the ",(0,t.jsx)(n.code,{children:"certificate"})," setting alongside the ",(0,t.jsx)(n.code,{children:"key"})," setting. Refer to the ",(0,t.jsx)(n.a,{href:"#self-signed-certificates",children:"Self-signed Certificates"})," section for more information."]}),"\n",(0,t.jsx)(n.h3,{id:"self-signed-certificates",children:"Self-Signed Certificates"}),"\n",(0,t.jsx)(n.p,{children:"A self-signed certificate is not issued by a trusted certificate authority (CA). However, it can be used to establish a secure channel if manually configured as a trusted certificate authority. Using self-signed certificates only affects the secure channels initiated by coroner and does not affect the system's overall secure channels and web-of-trust."}),"\n",(0,t.jsxs)(n.p,{children:['To generate a self-signed certificate (coronerd-cert.pem) and key (coronerd-key.pem), use the command below. You will be prompted to provide a "Common Name" value during the generation process. This value must match the host portion of the https://',":port",' entry in the "write" configuration key of the desired universe section in the coroner client\'s configuration.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ sudo mkdir /etc/coronerd/ssl\n$ openssl req -nodes -new -x509  -keyout /etc/coronerd/ssl/coronerd-key.pem -out /etc/coronerd/ssl/coronerd-cert.pem\nGenerating a 2048 bit RSA private key\n......................+++\n......+++\nwriting new private key to '/etc/coronerd/ssl/coronerd-key.pem'\n-----\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [AU]:US\nState or Province Name (full name) [Some-State]:New York\nLocality Name (eg, city) []:New York\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:Backtrace I/O, LLC\nOrganizational Unit Name (eg, section) []:.\nCommon Name (e.g. server FQDN or YOUR name) []:127.0.0.1\nEmail Address []:support@backtrace.io\n$ ls -lptr /etc/coronerd/ssl/coronerd-key.pem /etc/coronerd/ssl/coronerd-cert.pem\n-rw-rw-r-- 1 root root 1704 Nov 24 11:43 /etc/coronerd/ssl/coronerd-key.pem\n-rw-rw-r-- 1 root root 1415 Nov 24 11:43 /etc/coronerd/ssl/coronerd-cert.pem\n"})}),"\n",(0,t.jsx)(n.p,{children:"For security reasons, ensure that the private key has strict permissions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ chmod 600 /etc/coronerd/ssl/coronerd-key.pem\n$ ls -lptr /etc/coronerd/ssl/coronerd-key.pem\n-rw------- 1 root root 1704 Nov 24 11:43 /etc/coronerd/ssl/coronerd-key.pem\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"coronerd-key.pem"})," file must remain private and only be accessible on the host(s) running coronerd. The ",(0,t.jsx)(n.code,{children:"coronerd-cert.pem"})," file is public and must be accessible on all hosts running the coroner client."]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-configure-coronerd",children:"Step 2: Configure Coronerd"}),"\n",(0,t.jsxs)(n.p,{children:["Make sure that both the certificate and key files are accessible on the host where coronerd is running. In your coronerd configuration file, update the ",(0,t.jsx)(n.code,{children:"console"}),", ",(0,t.jsx)(n.code,{children:"write"}),", ",(0,t.jsx)(n.code,{children:"read"}),", and ",(0,t.jsx)(n.code,{children:"http-console"})," sections under the listener with the SSL configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example"',children:'{\n    //...\n    "console" : {\n        "path" : "/var/run/coronerd/coronerd.socket",\n        "bind" : {\n            "hostname" : "0.0.0.0",\n            "service" : "9040"\n        },\n        "backlog" : 16,\n        "ssl" : {\n            "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",\n            "key" : "/etc/coronerd/ssl/coronerd-key.pem"\n        }\n    },\n    //...\n    "listener" : {\n        "write" : {\n            "http_bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "6097",\n                    "concurrency" : 2000\n                }\n            ],\n            "https_bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "6098",\n                    "concurrency" : 2000\n                }\n            ],\n            "threads" : 1,\n            "ssl" : {\n                "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",\n                "key" : "/etc/coronerd/ssl/coronerd-key.pem"\n            }\n        },\n        "read" : {\n            "bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "4097"\n                }\n            ],\n            "threads" : 1,\n            "ssl" : {\n                "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",\n                "key" : "/etc/coronerd/ssl/coronerd-key.pem"\n            }\n        },\n        "http-console" : {\n            "bind" : [\n                {\n                    "hostname" : "0.0.0.0",\n                    "service" : "443",\n                    "concurrency" : 1000\n                }\n            ],\n            "columns" : {\n        //...\n            },\n            "threads" : 1,\n            "ssl" : {\n                "certificate" : "/etc/coronerd/ssl/coronerd-cert.pem",\n                "key" : "/etc/coronerd/ssl/coronerd-key.pem"\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"step-3-configure-coroner-client",children:"Step 3: Configure Coroner Client"}),"\n",(0,t.jsxs)(n.p,{children:["Set up the coroner client configuration file (coroner.cf) as described in the ",(0,t.jsx)(n.a,{href:"/error-reporting/advanced/coroner/client-getting-started",children:"Configuration using self-signed certificates"})," guide."]}),"\n",(0,t.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"Problem:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\"error: cURL failure (SSL peer certificate or SSH remote key was not OK): SSL: certificate subject name 'XXX' does not match target host name 'YYY'\"\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This error indicates that the certificate was generated with a ",(0,t.jsx)(n.code,{children:"Common Name"})," field set to XXX, but the client is accessing the server using the name YYY (using a ",(0,t.jsx)(n.code,{children:"write"})," configuration value of ",(0,t.jsx)(n.code,{children:"https://YYY:port"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"solution-1",children:"Solution 1:"}),"\n",(0,t.jsxs)(n.p,{children:["Ensure that the client accesses the server using the name specified in the certificate's ",(0,t.jsx)(n.code,{children:"Common Name"}),". This may require correcting DNS entries, IP addresses, or routes."]}),"\n",(0,t.jsx)(n.h4,{id:"solution-2",children:"Solution 2:"}),"\n",(0,t.jsxs)(n.p,{children:["Regenerate the certificate and key used by the coronerd server, ensuring that the new certificate's ",(0,t.jsx)(n.code,{children:"Common Name"})," matches the new YYY hostname used in the `write`` configuration value."]}),"\n",(0,t.jsxs)(n.h2,{id:"starting-coronerd",children:["Starting ",(0,t.jsx)(n.code,{children:"coronerd"})]}),"\n",(0,t.jsx)(n.p,{children:"To start coronerd, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /etc/init.d/coronerd start\n"})}),"\n",(0,t.jsx)(n.p,{children:"To verify that coronerd is running properly, use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /etc/init.d/coronerd status\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-organization-and-admin-user",children:"Create Organization and Admin User"}),"\n",(0,t.jsxs)(n.p,{children:["Before accessing the coronerd object store via the Web UI, you need to create the organization object and an initial admin user using the command-line utility ",(0,t.jsx)(n.code,{children:"morgue"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To install ",(0,t.jsx)(n.code,{children:"morgue"}),", use the Node.js NPM utility. Run ",(0,t.jsx)(n.code,{children:"npm install backtrace-morgue -g"}),". If you need Node.js, refer to the ",(0,t.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js website"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Launch ",(0,t.jsx)(n.code,{children:"morgue setup"}),", specifying the URL of your coronerd instance. Follow the prompts to create the organization and initial admin user, and then proceed to set up via the Web UI."]}),"\n",(0,t.jsxs)(n.p,{children:["If you are using self-signed SSL certificates, pass the ",(0,t.jsx)(n.code,{children:"-k"})," flag to ",(0,t.jsx)(n.code,{children:"morgue setup"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ morgue setup https://coronerd.mydomain.com\n\nDetermining system state...unconfigured\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-an-organization",children:"Create an Organization"}),"\n",(0,t.jsx)(n.p,{children:'Start by configuring the organization that uses the object store. Provide a one-word name for the organization using the object store. For example, if your company name is "Appleseed Systems I/O," you could use the name "appleseed." The name must be lowercase.'}),"\n",(0,t.jsx)(n.h3,{id:"create-an-administrator",children:"Create an Administrator"}),"\n",(0,t.jsx)(n.p,{children:"Create an administrator user who will be used to configure the server and perform system-wide administrative tasks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Username: jdoe\nE-mail address: jdoe@mydomain.com\nPassword: ************\n\nConfirm password: ************\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/error-reporting/advanced/coroner/server-setup",children:"Next step: Coroner Server Setup"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(34164);const o={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),o=r(34164),s=r(23104),i=r(56347),a=r(205),c=r(57485),l=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const o=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[l,u]=m({queryString:r,groupId:o}),[f,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),b=(()=>{const e=l??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),o=a[r].value;o!==t&&(l(n),i(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function k(e){const n=(0,g.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);