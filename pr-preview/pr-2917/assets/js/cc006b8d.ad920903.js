"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[8393],{13829:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=i(74848),r=i(28453);i(86025);const s={id:"saml-sso",title:"Single Sign-On with SAML",sidebar_label:"SAML Single Sign-On",description:"Configure Backtrace to allow users to authenticate with single sign-on (SSO) via a SAML identity provider."},o=void 0,a={id:"error-reporting/org-settings/saml-sso",title:"Single Sign-On with SAML",description:"Configure Backtrace to allow users to authenticate with single sign-on (SSO) via a SAML identity provider.",source:"@site/docs/error-reporting/org-settings/saml-sso.md",sourceDirName:"error-reporting/org-settings",slug:"/error-reporting/org-settings/saml-sso",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/org-settings/saml-sso",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/org-settings/saml-sso.md",tags:[],version:"current",lastUpdatedBy:"Kerem",lastUpdatedAt:1724931632e3,frontMatter:{id:"saml-sso",title:"Single Sign-On with SAML",sidebar_label:"SAML Single Sign-On",description:"Configure Backtrace to allow users to authenticate with single sign-on (SSO) via a SAML identity provider."},sidebar:"backtrace",previous:{title:"Team Management",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/org-settings/team-mgmnt"},next:{title:"Audit Logs",permalink:"/sauce-docs/pr-preview/pr-2917/error-reporting/security-compliance/audit-logs"}},l={},c=[{value:"Identity Provider Configuration",id:"identity-provider-configuration",level:2},{value:"Configure SSO",id:"configure-sso",level:2},{value:"User Management and Authentication",id:"user-management-and-authentication",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"identity-provider-configuration",children:"Identity Provider Configuration"}),"\n",(0,n.jsx)(t.p,{children:"First, the identity provider configuration should be completed. The following settings are required:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Settings"}),(0,n.jsx)(t.th,{children:"Expected Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"EntityID"})," (Issuer)"]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"https://saml.backtrace.io"})," (for Backtrace hosted instances)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"NameID"})}),(0,n.jsx)(t.td,{children:"Your primary email address"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"configure-sso",children:"Configure SSO"}),"\n",(0,n.jsx)(t.admonition,{title:"On-premise (self-hosted)",type:"note",children:(0,n.jsxs)(t.p,{children:["This functionality requires on premise deployments to install and run the ",(0,n.jsx)(t.strong,{children:"backtrace-saml"})," package and service."]})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["As an admin user, go to ",(0,n.jsx)(t.strong,{children:"Organization settings"})," > ",(0,n.jsx)(t.strong,{children:"Single sign-on"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Enter the following configuration settings:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Entity ID (issuer)"}),": ID for the service provider (Backtrace). By default, hosted Backtrace tenants will have a value of ",(0,n.jsx)(t.code,{children:"https://saml.backtrace.io"})," for the Entity ID. This setting needs to be the same in your identity provider's configuration."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SSO URL"}),": URL pointing to the identity provider."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Callback URL"}),": URL for the identity provider to post the SAML payload to the service provider (Backtrace). The required format is: https:",(0,n.jsx)("span",{children:"//saml.backtrace.io/api/sso/saml/{backtrace hostname} "}),". For example: https:",(0,n.jsx)("span",{children:"//saml.backtrace.io/api/sso/saml/organization.sp.backtrace.io "})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"User provisioning (optional)"}),": User provisioning, if enabled, allows the SAML SSO service to create a Backtrace user on the return of a successful assertion from the identity provider."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Admin contact (optional)"}),": The email contact that will display upon SSO login failure, to direct users to appropriate SSO resources within the organization."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"SAML request private key (optional)"}),": Identity provider's private key for signing SAML requests. Includes signature algorithm and private key."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Certificate (optional)"}),": Identity provider's public signing certificate used to validate the signatures of SAML Responses. Includes public certificate and private key."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Private key (optional)"}),": Private key that will be used to attempt to decrypt any encrypted assertions from the identity provider."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Once the configuration is saved, click ",(0,n.jsx)(t.strong,{children:"Test configuration"})," to verify the configuration."]}),"\n",(0,n.jsx)(t.h3,{id:"user-management-and-authentication",children:"User Management and Authentication"}),"\n",(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.strong,{children:"Organization settings"})," > ",(0,n.jsx)(t.strong,{children:"Users"}),", admin users can edit users' authentication method. If SSO is configured, existing users will be able to sign in via SSO and their specified authentication method, if it's different than saml. If a user's authentication method is set to SAML, then they will only be able to sign in via SSO."]}),"\n",(0,n.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.p,{children:"Verify the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Encrypted assertions are disabled within your SAML identity provider configuration."}),"\n",(0,n.jsx)(t.li,{children:"Your primary email address is used as the NameID format."}),"\n",(0,n.jsxs)(t.li,{children:["Your certificates are properly configured within ",(0,n.jsx)(t.code,{children:"saml.json"})," and have the proper CNAMES for your ",(0,n.jsx)(t.strong,{children:"backtrace-saml"})," host."]}),"\n",(0,n.jsxs)(t.li,{children:['On-premise: If you see the "Failed to login - Internal Error" error message, make sure the IP address of your ',(0,n.jsx)(t.strong,{children:"backtrace-saml"})," service host is listed within the authenticated section of ",(0,n.jsx)(t.code,{children:"coronerd.conf"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);