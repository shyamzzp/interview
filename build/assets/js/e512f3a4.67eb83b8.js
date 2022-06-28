"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[8254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?s.createElement(u,o(o({ref:t},c),{},{components:n})):s.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(7462),a=(n(7294),n(3905));const r={tree_title:"System Design Glossary",description:"Low level definition of terms used in system design and related topics.",last_modified:new Date("2022-06-20T20:51:56.515Z")},o="System Design Glossary",i={unversionedId:"system-design/glossary",id:"system-design/glossary",title:"System Design Glossary",description:"Low level definition of terms used in system design and related topics.",source:"@site/docs/system-design/glossary.md",sourceDirName:"system-design",slug:"/system-design/glossary",permalink:"/interview/docs/system-design/glossary",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"System Design Glossary",description:"Low level definition of terms used in system design and related topics.",last_modified:"2022-06-20T20:51:56.515Z"},sidebar:"docs",previous:{title:"System Design",permalink:"/interview/docs/system-design/"},next:{title:"Instagram System Design",permalink:"/interview/docs/system-design/instagram"}},l={},d=[{value:"System Design Glossary",id:"system-design-glossary-1",level:2},{value:"<strong>API</strong>",id:"api",level:3},{value:"<strong>Back-end</strong>",id:"back-end",level:3},{value:"<strong>Cache</strong>",id:"cache",level:3},{value:"<strong>CDN</strong>",id:"cdn",level:3},{value:"<strong>Client</strong>",id:"client",level:3},{value:"<strong>CMS</strong>",id:"cms",level:3},{value:"<strong>Cookie</strong>",id:"cookie",level:3},{value:"<strong>Database/DBMS</strong>",id:"databasedbms",level:3},{value:"<strong>DNS</strong>",id:"dns",level:3},{value:"<strong>Latency</strong>",id:"latency",level:3},{value:"<strong>Load Balancer</strong>",id:"load-balancer",level:3},{value:"<strong>Mobile Web / Native</strong>",id:"mobile-web--native",level:3},{value:"<strong>NoSQL</strong>",id:"nosql",level:3},{value:"<strong>Refactor</strong>",id:"refactor",level:3},{value:"<strong>REST/RESTful</strong>",id:"restrestful",level:3},{value:"<strong>Server</strong>",id:"server",level:3},{value:"<strong>Sharding</strong>",id:"sharding",level:3},{value:"HTTP Codes",id:"http-codes",level:3},{value:"References",id:"references",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-design-glossary"},"System Design Glossary"),(0,a.kt)("span",{class:"tag-is-success"},"Last Updated : MONDAY 20 June, 2022 8:51:53 PM"),(0,a.kt)("h2",{id:"system-design-glossary-1"},"System Design Glossary"),(0,a.kt)("div",{class:"section-container pl0 pr0"},(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"api"},(0,a.kt)("strong",{parentName:"h3"},"API")),(0,a.kt)("p",null,'Application Programming Interface. Think of this as the way a software system interacts with other systems/ people. For instance, an ATM\'s "API" includes adding money, withdrawing money, and a few other functions.')),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"back-end"},(0,a.kt)("strong",{parentName:"h3"},"Back-end")),(0,a.kt)("p",null,"The back-end often refers to the server-side of development (e.g. an algorithm to show recommended pages would be hosted on the server).")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"cache"},(0,a.kt)("strong",{parentName:"h3"},"Cache")),(0,a.kt)("p",null,"A cache is a software component that helps store information or content so that requests can be quicker. As a simple example, it's easier and quicker to get information from short-term memory than long-term storage via a cache.")),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"cdn"},(0,a.kt)("strong",{parentName:"h3"},"CDN")),(0,a.kt)("p",null,"Content delivery network. This is a network of proxy servers and data centers that provides content to servers. CDNs are used to deliver content efficiently and quickly to clients that results in faster load times with high-traffic sites.")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"client"},(0,a.kt)("strong",{parentName:"h3"},"Client")),(0,a.kt)("p",null,"Clients are one part of the client-server model, where clients (e.g. a local computer) initiates a communication session with a server (e.g. a company server hosted on Amazon EC2).")),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"cms"},(0,a.kt)("strong",{parentName:"h3"},"CMS")),(0,a.kt)("p",null,"Content management system. This is a system for storing content, and is often hosted inside / used as a database.")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"cookie"},(0,a.kt)("strong",{parentName:"h3"},"Cookie")),(0,a.kt)("p",null,"A cookie is a piece of data stored on a client's browser from sites a client visits. This data includes volunteered information including visited pages. A common function of a cookie is to help users not have to log in every time they visit a site.")),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"databasedbms"},(0,a.kt)("strong",{parentName:"h3"},"Database/DBMS")),(0,a.kt)("p",null,"Database management system. This is a software that allows users to create, read, and update entries in a database. For instance, Exponent's user database stores a list of user emails and passwords for each user to log in.")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"dns"},(0,a.kt)("strong",{parentName:"h3"},"DNS")),(0,a.kt)("p",null,"Domain name system. This is a naming system to help map domain names to IP Addresses and other pieces of information across the internet.")),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"latency"},(0,a.kt)("strong",{parentName:"h3"},"Latency")),(0,a.kt)("p",null,"This refers to the load time of an experience. For instance, the latency would be considered high if it takes a long time to download large image files to load a page.")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"load-balancer"},(0,a.kt)("strong",{parentName:"h3"},"Load Balancer")),(0,a.kt)("p",null,"Load balancers help to distribute a task over a series of resources as opposed to overloading one resource. This is helpful when there's a risk of a high-traffic data source overloading a particular resource.")),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"mobile-web--native"},(0,a.kt)("strong",{parentName:"h3"},"Mobile Web / Native")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Native")," often refers to apps downloaded to a smartphone or computer. Web apps are those that are accessed via a URL. For instance, the Facebook app is a native app. The Facebook.com on a mobile Google Chrome browser in one\u2019s smartphone is on the mobile web platform.")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"nosql"},(0,a.kt)("strong",{parentName:"h3"},"NoSQL")),(0,a.kt)("p",null,"NoSQL (not only SQL) databases is an alternative to relational databases in that they provide mechanisms for access without tabular relations.")),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"refactor"},(0,a.kt)("strong",{parentName:"h3"},"Refactor")),(0,a.kt)("p",null,"A restructuring of the existing computer code. There are a variety of reasons for a code refactor. Often, refactors are advantageous because they accelerate product development or reduce vulnerabilities.")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"restrestful"},(0,a.kt)("strong",{parentName:"h3"},"REST/RESTful")),(0,a.kt)("p",null,"Stands for Representational State Transfer. REST-compliant systems are stateless, meaning that the client and the server can be implemented independently of one another.")),(0,a.kt)("div",{class:"section-item"},(0,a.kt)("h3",{id:"server"},(0,a.kt)("strong",{parentName:"h3"},"Server")),(0,a.kt)("p",null,"Servers provide functions to one or many clients. For instance, a web server serves web pages to clients (e.g. local computers, like the one you're reading this on!)")),(0,a.kt)("div",{class:"section-item pl0"},(0,a.kt)("h3",{id:"sharding"},(0,a.kt)("strong",{parentName:"h3"},"Sharding")),(0,a.kt)("p",null,"Sharding is the act of partitioning databases into smaller data shards, to optimize for database speed."))),(0,a.kt)("h3",{id:"http-codes"},"HTTP Codes"),(0,a.kt)("p",null,"Here are the 10 most used out of many HTTP Codes (",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"),")"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"200 OK :"),'\nThe request succeeded. The result meaning of "success" depends on the HTTP method:',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET"),": The resource has been fetched and transmitted in the message body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HEAD"),": The representation headers are included in the response without any message body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PUT"),"\xa0or\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"POST"),": The resource describing the result of the action is transmitted in the message body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TRACE"),": The message body contains the request message as received by the server."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"201 Created"),"\nThe request succeeded, and a new resource was created as a result. This is typically the response sent after\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," requests, or some\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"PUT")," requests."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"204 No Content"),"\nThere is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"304 Not Modified"),"\nThis is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"400 Bad Request"),"\nThe server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"401 Unauthorized"),'\nAlthough the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"403 Forbidden"),"\nThe client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"401 Unauthorized"),", the client's identity is known to the server."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"404 Not Found"),"\nThe server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"403 Forbidden"),"to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"409 Conflict"),"\nThis response is sent when a request conflicts with the current state of the server."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"500 Internal Server Error"),"\nThe server has encountered a situation it does not know how to handle.")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status")))))}m.isMDXComponent=!0}}]);