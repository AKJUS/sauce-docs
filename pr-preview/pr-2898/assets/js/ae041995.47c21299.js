"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[97421],{52921:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>r});var n=t(74848),s=t(28453),l=t(86025);const d={id:"private-device-mgmt-find-bundle-id",title:"Find iOS Bundle ID",sidebar_label:"Find iOS Bundle ID"},c=void 0,a={id:"basics/acct-team-mgmt/private-device-mgmt-find-bundle-id",title:"Find iOS Bundle ID",description:"Retrieving the BundleID for Allow-listing Your Apps",source:"@site/docs/basics/acct-team-mgmt/private-device-mgmt-find-bundle-id.md",sourceDirName:"basics/acct-team-mgmt",slug:"/basics/acct-team-mgmt/private-device-mgmt-find-bundle-id",permalink:"/sauce-docs/pr-preview/pr-2898/basics/acct-team-mgmt/private-device-mgmt-find-bundle-id",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/acct-team-mgmt/private-device-mgmt-find-bundle-id.md",tags:[],version:"current",lastUpdatedBy:"Kareem Missoumi",lastUpdatedAt:1695717636e3,frontMatter:{id:"private-device-mgmt-find-bundle-id",title:"Find iOS Bundle ID",sidebar_label:"Find iOS Bundle ID"}},o={},r=[{value:"Retrieving the BundleID for Allow-listing Your Apps",id:"retrieving-the-bundleid-for-allow-listing-your-apps",level:2}];function u(e){const i={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"retrieving-the-bundleid-for-allow-listing-your-apps",children:"Retrieving the BundleID for Allow-listing Your Apps"}),"\n",(0,n.jsx)(i.p,{children:"To prevent our cleaning from removing your application after every session, this guide will help you to obtain the bundleID for these applications."}),"\n",(0,n.jsx)(i.p,{children:"Follow these steps during live testing:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Open a Live Testing session with an iOS Device."}),"\n",(0,n.jsx)(i.li,{children:"Open Device logs in VERBOSE mode."}),"\n",(0,n.jsx)(i.li,{children:"Clean the device logs."}),"\n",(0,n.jsxs)(i.li,{children:["Copy-paste this string in the search bar ",(0,n.jsx)(i.code,{children:"SBApplicationStateDisplayIDKey"}),"."]}),"\n",(0,n.jsx)(i.li,{children:"Open the application you want to be allow-listed."}),"\n",(0,n.jsxs)(i.li,{children:["Check the values of ",(0,n.jsx)(i.code,{children:"SBApplicationStateDisplayIDKey"}),", which is the bundleID for any given app that has been launched."]}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,l.A)("img/basics/bundle-id.png"),alt:"Bundle ID",width:"800"})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>d,x:()=>c});var n=t(96540);const s={},l=n.createContext(s);function d(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);