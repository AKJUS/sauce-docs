"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[68729],{31985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(74848),r=n(28453),s=n(86025);n(11470),n(19365);const o={id:"security-authentication",title:"Security and Authentication",sidebar_label:"Security and Authentication"},c=void 0,a={id:"secure-connections/sauce-connect/security-authentication",title:"Security and Authentication",description:"Network Security",source:"@site/docs/secure-connections/sauce-connect/security-authentication.md",sourceDirName:"secure-connections/sauce-connect",slug:"/secure-connections/sauce-connect/security-authentication",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect/security-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/security-authentication.md",tags:[],version:"current",lastUpdatedBy:"Alex Plischke",lastUpdatedAt:172480197e4,frontMatter:{id:"security-authentication",title:"Security and Authentication",sidebar_label:"Security and Authentication"},sidebar:"docs",previous:{title:"Using Tunnels",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect/proxy-tunnels"},next:{title:"Architecture",permalink:"/sauce-docs/pr-preview/pr-2911/secure-connections/sauce-connect/advanced/architecture"}},l={},u=[{value:"Network Security",id:"network-security",level:2},{value:"Running in a Demilitarized Zone (DMZ)",id:"running-in-a-demilitarized-zone-dmz",level:3},{value:"Securing Sauce Connect Proxy",id:"securing-sauce-connect-proxy",level:2},{value:"Recommended Configuration",id:"recommended-configuration",level:3},{value:"Firewall Rules",id:"firewall-rules",level:4},{value:"Proxy Settings",id:"proxy-settings",level:4},{value:"<strong>Recommended Sauce Connect Proxy Configuration</strong>",id:"recommended-sauce-connect-proxy-configuration",level:5},{value:"Sauce Labs Security Process",id:"sauce-labs-security-process",level:3},{value:"Authentication Using <code>--auth</code>",id:"authentication-using---auth",level:2},{value:"Certificate Handling",id:"certificate-handling",level:2},{value:"Setting Revocation Information for SSL Certificate Verification",id:"setting-revocation-information-for-ssl-certificate-verification",level:3},{value:"OCSP Tunnel Certificate Validation",id:"ocsp-tunnel-certificate-validation",level:4},{value:"Connecting to the Sauce Labs REST API",id:"connecting-to-the-sauce-labs-rest-api",level:3},{value:"Linux",id:"linux",level:4},{value:"Windows",id:"windows",level:4},{value:"macOS",id:"macos",level:4},{value:"Tunnel Connection to the Sauce Labs Virtual Machine over SSL/TLS",id:"tunnel-connection-to-the-sauce-labs-virtual-machine-over-ssltls",level:3},{value:"SSL Certificate Bumping",id:"ssl-certificate-bumping",level:2},{value:"Using SSL Bumping and How It Works",id:"using-ssl-bumping-and-how-it-works",level:3},{value:"When to Disable SSL Bumping",id:"when-to-disable-ssl-bumping",level:3},{value:"How to Disable SSL Bumping",id:"how-to-disable-ssl-bumping",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"network-security",children:"Network Security"}),"\n",(0,i.jsx)(t.p,{children:"Sauce Connect Proxy establishes a secure connection between your apps hosted on an internal server and the Sauce Labs VMs or real devices used during your tests."}),"\n",(0,i.jsx)(t.p,{children:"Data transmitted by Sauce Connect Proxy is encrypted through the TLS protocol, which uses perfect forward secrecy for maximum security."}),"\n",(0,i.jsx)(t.h3,{id:"running-in-a-demilitarized-zone-dmz",children:"Running in a Demilitarized Zone (DMZ)"}),"\n",(0,i.jsx)(t.p,{children:"Within your infrastructure, Sauce Connect Proxy must be able to reach the app or server you want to test via your network, but can and should be firewalled from the rest of your internal network."}),"\n",(0,i.jsx)(t.p,{children:"We recommend running Sauce Connect Proxy in a firewalled DMZ on a dedicated machine and setting up firewall rules to restrict access from that DMZ to your internal network. Use caution when locating and configuring Sauce Connect in a DMZ."}),"\n",(0,i.jsxs)(t.p,{children:["For more information, see ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/DMZ_(computing)",children:"DMZ (computing)"})," and ",(0,i.jsx)(t.a,{href:"/secure-connections/sauce-connect/troubleshooting",children:"Common Mistakes in Network Configurations"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"securing-sauce-connect-proxy",children:"Securing Sauce Connect Proxy"}),"\n",(0,i.jsx)(t.p,{children:"There are several ways to secure Sauce Connect Proxy in your network. With our recommended configuration, firewall rules are set so that Sauce Connect Proxy has only one point of access to the customer's internal network \u2014 through a single HTTP proxy \u2014 and all inbound traffic will be relayed. You'll have a secure setup with fine-grained access control and complete logging."}),"\n",(0,i.jsx)(t.h3,{id:"recommended-configuration",children:"Recommended Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"/secure-connections/sauce-connect/installation/#download-latest-version",children:"sc client program"})," establishes a TLS connection (tunnel connection) to a dedicated tunnel endpoint server hosted in the Sauce Labs cloud. During test sessions, browsers and mobile apps use this tunnel endpoint as an HTTP proxy. HTTP requests are multiplexed and relayed back through the tunnel connection to the sc client program, which proxies these HTTP requests, providing access to the App Under Test within your network."]}),"\n",(0,i.jsx)(t.p,{children:"There are two options to control and monitor the access sc has to your network: firewall rules and proxy settings. In our recommended configuration, both are used."}),"\n",(0,i.jsx)(t.h4,{id:"firewall-rules",children:"Firewall Rules"}),"\n",(0,i.jsx)(t.p,{children:"The sc client should be run on a dedicated, single-purpose machine or VM (aka the SC Host), which has access only to the systems required for testing. This can be accomplished with an external firewall."}),"\n",(0,i.jsx)(t.p,{children:"For maximum control, we recommend the SC Host is firewalled so that its only access to the customer network is through a single HTTP proxy, where all inbound traffic will be relayed, and can be appropriately restricted and logged. Unintended access through other routes can be prevented in the event of a security vulnerability that affects Sauce Connect."}),"\n",(0,i.jsx)(t.h4,{id:"proxy-settings",children:"Proxy Settings"}),"\n",(0,i.jsx)(t.p,{children:"In its default configuration, Sauce Connect Proxy will act as an HTTP proxy itself, relaying requests received over the tunnel connection directly to hosts in the customer network."}),"\n",(0,i.jsxs)(t.p,{children:["By using the ",(0,i.jsx)(t.code,{children:"--proxy"})," or ",(0,i.jsx)(t.code,{children:"--pac"})," command line options, ",(0,i.jsx)(t.code,{children:"sc"})," can be configured to relay all requests to another HTTP proxy or proxies, where policy can be controlled and activity can be logged and monitored. The access provided by the configured proxies is in turn the only access that inbound requests coming through ",(0,i.jsx)(t.code,{children:"sc"})," will have to the customer network."]}),"\n",(0,i.jsx)(t.p,{children:"We recommend the use of an HTTP proxy that is familiar to the customer's security team. The proxy should be configured to allow access only to a allowlisted set of URL domains or URL prefixes used for testing. Access should be logged. Note that logs can be inspected by an Intrusion Detection System for malware signatures and other signs of suspicious activity."}),"\n",(0,i.jsxs)(t.p,{children:["For more information, see the ",(0,i.jsx)(t.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy CLI Reference"})," and ",(0,i.jsx)(t.a,{href:"/secure-connections/sauce-connect/setup-configuration/additional-proxies",children:"Setup with Additional Proxies"}),"."]}),"\n",(0,i.jsx)(t.h5,{id:"recommended-sauce-connect-proxy-configuration",children:(0,i.jsx)(t.strong,{children:"Recommended Sauce Connect Proxy Configuration"})}),"\n",(0,i.jsx)("img",{src:(0,s.Ay)("img/sauce-connect/recommended-sc-config.png"),alt:"Recommended Sauce Connect Proxy configuration",width:"650"}),"\n",(0,i.jsx)(t.p,{children:"By configuring Sauce Connect Proxy following these steps, you can create a security profile with fine-grained control over access and complete logging of activity:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Designate a dedicated, single-purpose machine or VM as a Sauce Connect Proxy client host."}),"\n",(0,i.jsx)(t.li,{children:"Configure an HTTP proxy of the customer's choice, the HTTP proxy, only allowing access to systems under test, and logging all traffic."}),"\n",(0,i.jsx)(t.li,{children:"Configure any Intrusion Detection Systems to monitor the sc proxy logs."}),"\n",(0,i.jsx)(t.li,{children:"Firewall the SC Host so that its customer network access is restricted to the specific host and port where the sc proxy resides."}),"\n",(0,i.jsxs)(t.li,{children:["Run ",(0,i.jsx)(t.code,{children:"sc"})," with the ",(0,i.jsx)(t.code,{children:"--proxy"})," or ",(0,i.jsx)(t.code,{children:"--pac"})," command line options, configuring it to use the sc proxy for all inbound HTTP connections."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Benefits to this configuration:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Single point of entry for requests relayed through Sauce Connect Proxy to access the customer network"}),"\n",(0,i.jsx)(t.li,{children:"Layer 3 access restricted to a single proxy"}),"\n",(0,i.jsx)(t.li,{children:"Fine-grained access control at the HTTP level"}),"\n",(0,i.jsx)(t.li,{children:"Only the App Under Test is exposed to requests originating from Sauce Labs"}),"\n",(0,i.jsx)(t.li,{children:"Complete logging of access"}),"\n",(0,i.jsx)(t.li,{children:"Easy monitoring with Intrusion Detection Systems"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"sauce-labs-security-process",children:"Sauce Labs Security Process"}),"\n",(0,i.jsx)(t.p,{children:"Sauce Labs provides a secure and scalable cloud computing platform for functional testing of web and mobile apps located in world-class data centers in North America and Europe."}),"\n",(0,i.jsx)(t.p,{children:"Having our own cloud enables us to provide our services faster, and with higher security, than can be delivered on a public cloud with shared resources. Managing our own data centers also means that we are responsible for delivering a consistent experience with the utmost concern for the security of your data."}),"\n",(0,i.jsxs)(t.p,{children:["For an overview of the services offered by Sauce Labs, our methods for securing the transmission of test data and results, and our security policies and procedures, see our white paper, ",(0,i.jsx)(t.a,{href:"https://saucelabs.com/resources/white-papers/overview-of-sauce-labs-security-processes",children:"Overview of Sauce Labs Security Processes"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"authentication-using---auth",children:["Authentication Using ",(0,i.jsx)(t.code,{children:"--auth"})]}),"\n",(0,i.jsx)(t.p,{children:"This approach to authentication works by configuring Sauce Connect Proxy to send authentication details to any URL requesting them. It works for all requests, even those where you're asked for credentials in response to a click or form submission."}),"\n",(0,i.jsx)(t.p,{children:"For each URL where you need to bypass HTTP authentication, add this to your Sauce Connect Proxy startup command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--auth host:port:username:password\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If your website doesn't need a port, you can use the default port, ",(0,i.jsx)(t.code,{children:"port 80"}),". Let's say that your website under test is ",(0,i.jsx)(t.code,{children:"mysite.com"}),", your username is ",(0,i.jsx)(t.code,{children:"awesometester"}),", and your password is ",(0,i.jsx)(t.code,{children:"supersekrit"}),". Here's how you'd write your Sauce Connect Proxy startup command:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--auth mysite.com:80:awesometester:supersekrit\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can use this option multiple times in a row:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"--auth mysite.com:80:awesometester:supersekrit \\\n--auth myothersite.com:443:awesometester:supersekrit \\\n--auth mythirdsite.com:80:awesometester:supersekrit\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For more information, see ",(0,i.jsx)(t.a,{href:"/basics/environment-variables",children:"Using Environment Variables for Authentication Credentials"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"certificate-handling",children:"Certificate Handling"}),"\n",(0,i.jsxs)(t.p,{children:["The security of Sauce Connect Proxy communication to both the Sauce Labs API and the virtual machine hosting your tests in the Sauce Labs cloud is managed through ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Public_key_certificate",children:"public key certificates"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"For connection to the API, Sauce Connect Proxy uses certificates issued by certificate authorities, which are integrated into the operating system of the machine where Sauce Connect Proxy is running."}),"\n",(0,i.jsx)(t.p,{children:"For connection to the Sauce Labs virtual machines, the certificate presented by the tunnel endpoint is signed by public certificate authorities."}),"\n",(0,i.jsx)(t.h3,{id:"setting-revocation-information-for-ssl-certificate-verification",children:"Setting Revocation Information for SSL Certificate Verification"}),"\n",(0,i.jsx)(t.p,{children:"When securing Sauce Connect Proxy, be sure to allowlist these sites so that the Sauce Connect SSL certificates can be verified:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://crl1.digicert.com",children:"http://crl1.digicert.com"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://crl2.digicert.com",children:"http://crl2.digicert.com"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://crl3.digicert.com",children:"http://crl3.digicert.com"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://crl4.digicert.com",children:"http://crl4.digicert.com"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://ocsp.digicert.com",children:"http://ocsp.digicert.com"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://status.geotrust.com",children:"http://status.geotrust.com"})}),"\n",(0,i.jsx)(t.li,{children:"http://*.o.lencr.org"}),"\n",(0,i.jsx)(t.li,{children:"http://*.c.lencr.org"}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"http://gp.symcd.com",children:"http://gp.symcd.com"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Sauce Connect Proxy will try to resolve the entire certificate chain at runtime and check if it can reach the OCSP servers in the entire chain. Because the chain is resolved during runtime and certificates change and are constantly renewed, it's possible that the OCSP sites listed in the certification check might change over time as well."}),"\n",(0,i.jsxs)(t.p,{children:["In your log, look for the entries following the ",(0,i.jsx)(t.code,{children:'"checking OCSP entry"'})," line to get the list of certificate authority sites."]}),"\n",(0,i.jsx)(t.p,{children:"In addition to allowlisting these sites, consult the list of domains at the RapidSSL website and add them to your allowlist as well to make sure that Sauce Connect Proxy can connect to all appropriate certificate-issuing authorities."}),"\n",(0,i.jsx)(t.h4,{id:"ocsp-tunnel-certificate-validation",children:"OCSP Tunnel Certificate Validation"}),"\n",(0,i.jsx)(t.p,{children:"This feature lets the Sauce Connect client validate that the tunnel endpoint's public certificate has not been revoked. OCSP relies on Public Key Infrastructure and needs to make additional HTTP requests to OCSP servers associated with the tunnel endpoint\u2019s certificate chain."}),"\n",(0,i.jsxs)(t.p,{children:["You can set your own parameters (e.g., logging, bypassing OCSP checks) by using OCSP command-line options (see the ",(0,i.jsx)(t.a,{href:"/dev/cli/sauce-connect-proxy",children:"Sauce Connect Proxy CLI Reference"}),"). Additionally, OCSP supports the following flags: ",(0,i.jsx)(t.code,{children:"--proxy"}),", ",(0,i.jsx)(t.code,{children:"--pac"}),", ",(0,i.jsx)(t.code,{children:"--no-autodetect"}),", ",(0,i.jsx)(t.code,{children:"--proxy-tunnel"}),", ",(0,i.jsx)(t.code,{children:"--tunnel-cainfo"}),", ",(0,i.jsx)(t.code,{children:"--tunnel-capath"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"connecting-to-the-sauce-labs-rest-api",children:"Connecting to the Sauce Labs REST API"}),"\n",(0,i.jsxs)(t.p,{children:["Connections to the Sauce Labs API go through ",(0,i.jsx)(t.code,{children:"https://saucelabs.com"}),". The way in which Sauce Connect Proxy is able to access the certificates to secure the connection depends on the operating system of the machine where Sauce Connect is installed."]}),"\n",(0,i.jsx)(t.h4,{id:"linux",children:"Linux"}),"\n",(0,i.jsxs)(t.p,{children:["On Linux machines, Sauce Connect Proxy will look for the directory where the certificate bundle is installed, typically something like ",(0,i.jsx)(t.code,{children:"/etc/ssl/certs"}),". If it can't find the directory, it will generate an error when trying to connect to the Sauce Labs API."]}),"\n",(0,i.jsx)(t.h4,{id:"windows",children:"Windows"}),"\n",(0,i.jsxs)(t.p,{children:["On Windows machines, certificates are managed through the Security Support Provider Interface API (see ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Security_Support_Provider_Interface",children:"Security Support Provider Interface"}),") over SChannel, which requires access to ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol",children:"OCSP"})," URLs to verify certificates. If you have set up highly restrictive firewalls or proxies on the machine where Sauce Connect Proxy is running and it can't connect to these URLs, you'll get an error when attempting to connect to the Sauce Labs API."]}),"\n",(0,i.jsx)(t.h4,{id:"macos",children:"macOS"}),"\n",(0,i.jsxs)(t.p,{children:["On macOS machines, certificates are pre-installed as part of the ",(0,i.jsx)(t.a,{href:"https://support.apple.com/en-us/HT204132",children:"Trust Store"})," and are accessible through the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Keychain_(software)",children:"Keychain"}),". If Sauce Connect Proxy is installed on a macOS machine, no troubleshooting should be necessary, as long as it can access the Keychain."]}),"\n",(0,i.jsx)(t.h3,{id:"tunnel-connection-to-the-sauce-labs-virtual-machine-over-ssltls",children:"Tunnel Connection to the Sauce Labs Virtual Machine over SSL/TLS"}),"\n",(0,i.jsxs)(t.p,{children:["Sauce Connect Proxy routes VM-to-test target traffic through the TLS connection between the Sauce Connect Proxy client and the Sauce Connect Server. Sauce Connect Proxy is not used with your Selenium and Appium webdriver traffic to the Sauce Labs ",(0,i.jsx)(t.code,{children:"on-demand"})," endpoint, for example, ",(0,i.jsx)(t.code,{children:"ondemand.us-west-1.saucelabs.com"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"ssl-certificate-bumping",children:"SSL Certificate Bumping"}),"\n",(0,i.jsx)(t.p,{children:"Self-signed and invalid SSL certificates, commonly used in test environments, are not trusted by stock browsers, such as those installed on the Sauce Labs infrastructure. This causes tests to be interrupted with security warnings that can't be dismissed by Selenium. As a workaround, we've created a fix called SSL Bumping, whereby Sauce Connect automatically re-signs these certificates. This is enabled by default when you download Sauce Connect."}),"\n",(0,i.jsx)(t.p,{children:'During the course of testing, SSL Bumping executes a type of "man-in-the-middle" interception of encrypted test traffic, decrypting it. Traffic is encrypted using certificates signed by Sauce Labs (issued by \u201cSauce Labs Tunnel Proxy\u201d), which are inherently trusted by the Selenium server on the Sauce Labs VM where your test is running. This lets you avoid SSL error pop-ups that could disrupt your test execution.'}),"\n",(0,i.jsx)(t.p,{children:"There are simply too many different certificates for Sauce Labs to add each one. We'd have to add a certificate to every requested browser for every user with a self-signed certificate. This can't always be done automatically, so every new client would have to wait for Sauce Labs staff to re-create all of our images before they could run their tests."}),"\n",(0,i.jsx)(t.h3,{id:"using-ssl-bumping-and-how-it-works",children:"Using SSL Bumping and How It Works"}),"\n",(0,i.jsx)(t.p,{children:"The solution, known as SSL Bumping, works like this:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["When Sauce Labs creates VMs, an ",(0,i.jsx)(t.a,{href:"http://saucelabs.com/downloads/saucelabs-ssl-bumping.crt",children:"SSL certificate issued by \u201cSauce Labs Tunnel Proxy\u201d"})," is installed and controlled from the Sauce Labs side."]}),"\n",(0,i.jsx)(t.li,{children:"When needed, the Sauce Labs browser requests resources from the Sauce Connect Proxy server."}),"\n",(0,i.jsx)(t.li,{children:"Sauce Connect Proxy server passes that request to the Sauce Connect Proxy client, running on your side. All SSL internet traffic between the Sauce Connect Proxy client (on your network) and the Sauce Connect Proxy server (inside our network) is encrypted twice: once by the original server and again by Sauce ConnectProxy."}),"\n",(0,i.jsx)(t.li,{children:"Sauce Connect Proxy client fetches the resource and returns it through the encrypted connection, back to the Sauce Connect Proxy server."}),"\n",(0,i.jsx)(t.li,{children:"Sauce Connect Proxy server decrypts the traffic. If it's SSL traffic, the Sauce Connect Proxy server decrypts it again."}),"\n",(0,i.jsx)(t.li,{children:"Sauce Connect Proxy re-encrypts SSL traffic using the \u201cSauce Labs Tunnel Proxy\u201d certificate and returns it to the browser. Re-encryption only occurs once the traffic is safely received by the Sauce Labs network. SSL Bumping impacts only the traffic being returned to the browser through Sauce Connect Proxy."}),"\n",(0,i.jsx)(t.li,{children:"Browser trusts the \u201cSauce Labs Tunnel Proxy\u201d certificate and accepts the traffic."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Throughout the process, traffic going through Sauce Connect Proxy is fully secure. Sauce Connect Proxy isn't an attacker; it is only in use by your tests and isn't sending secret traffic to any unauthorized party. No security holes are opened into your network."}),"\n",(0,i.jsx)(t.h3,{id:"when-to-disable-ssl-bumping",children:"When to Disable SSL Bumping"}),"\n",(0,i.jsx)(t.p,{children:"SSL Bumping is enabled by default for Sauce Connect Proxy, but there are some situations where it's recommended that you disable it:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If you're working with sites that are highly dependent on AJAX"}),"\n",(0,i.jsx)(t.li,{children:"Some network components, such as browsers and servers that use WebSockets, won\u2019t work if the traffic to them has been altered, which Sauce Connect Proxy appears to do"}),"\n",(0,i.jsx)(t.li,{children:"If you're testing with iOS 10.3 on iPad Pro (12.9 inch) simulator or iPad Pro (9.7 inch) simulator"}),"\n",(0,i.jsx)(t.li,{children:"If you're testing with Android Real Devices"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"how-to-disable-ssl-bumping",children:"How to Disable SSL Bumping"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"-B (--no-ssl-bump-domains)"})," argument when you start Sauce Connect Proxy and specify which domains should not be bumped or specify ",(0,i.jsx)(t.code,{children:"all"})," so that all domains that passed through the tunnel are not bumped."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Keep in mind that when SSL Bumping is disabled, test traffic will not be decrypted, and will pass through directly to the browser running your tests along with the SSL certificate of the site under test. If there are issues with the originating site\u2019s SSL certificate, these may generate SSL errors that interfere with test execution."})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var i=n(96540),r=n(34164),s=n(23104),o=n(56347),c=n(205),a=n(57485),l=n(31682),u=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:s}))),[l,d]=f({queryString:n,groupId:r}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&a(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function b(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=a.indexOf(t),r=c[n].value;r!==i&&(l(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>a.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function S(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(w,{...t,...e})]})}function v(e){const t=(0,y.A)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);