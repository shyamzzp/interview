"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[3563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(n),h=r,p=g["".concat(l,".").concat(h)]||g[h]||u[h]||a;return n?i.createElement(p,s(s({ref:t},c),{},{components:n})):i.createElement(p,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<a;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={tree_title:"Netflix System Design",description:"System Design for Netflix.",last_modified:new Date("2022-06-19T18:54:23.542Z")},s="Netflix System Design",o={unversionedId:"system-design/netflix",id:"system-design/netflix",title:"Netflix System Design",description:"System Design for Netflix.",source:"@site/docs/system-design/netflix.md",sourceDirName:"system-design",slug:"/system-design/netflix",permalink:"/interview/docs/system-design/netflix",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"Netflix System Design",description:"System Design for Netflix.",last_modified:"2022-06-19T18:54:23.542Z"},sidebar:"docs",previous:{title:"Job Scheduling System",permalink:"/interview/docs/system-design/job-scheduling-system"},next:{title:"Pastebin System Design",permalink:"/interview/docs/system-design/pastebin"}},l={},d=[{value:"What we know so far",id:"what-we-know-so-far",level:2},{value:"Components of Netflix",id:"components-of-netflix",level:2},{value:"Open Connect",id:"open-connect",level:3},{value:"What is Transcoding",id:"what-is-transcoding",level:3},{value:"What is Adaptive Bitrate Streaming",id:"what-is-adaptive-bitrate-streaming",level:3},{value:"Backend",id:"backend",level:3},{value:"Microservices",id:"microservices",level:4},{value:"Client",id:"client",level:3},{value:"ZUUL",id:"zuul",level:3},{value:"Hystrix as a Circuit Breaker",id:"hystrix-as-a-circuit-breaker",level:4},{value:"References",id:"references",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"netflix-system-design"},"Netflix System Design"),(0,r.kt)("h2",{id:"what-we-know-so-far"},"What we know so far"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"What we know so far BorderRadius8",src:n(6892).Z,width:"633",height:"554"})),(0,r.kt)("h2",{id:"components-of-netflix"},"Components of Netflix"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Components of Netflix BorderRadius8",src:n(9981).Z,width:"397",height:"158"})),(0,r.kt)("h3",{id:"open-connect"},"Open Connect"),(0,r.kt)("p",null,"\u27a1\ufe0f This is kind of Netflix owned CDN. All the process related to the Streaming of the Video to Client is handled by this component.",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"what-is-transcoding"},"What is Transcoding"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Transcoding"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"What is Transcoding BorderRadius8",src:n(1921).Z,width:"1376",height:"720"})),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u27a1\ufe0f Netflix breaks the original(onboarding) video into different smaller chunks and using parallel workers in AWS EC2, it performs encoding and transcoding on these chunks converting them into different formats (MP4, MOV, etc) across different resolutions(4k, 1080p, and more). \u27a1\ufe0f Everything chunk is then merged and the copies of those are stored in the AMAZON S3 bucket and later are pushed to the Open Connect Servers.")))),(0,r.kt)("h3",{id:"what-is-adaptive-bitrate-streaming"},"What is Adaptive Bitrate Streaming"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Adaptive Bitrate Streaming"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"Adaptive Bitrate Streaming BorderRadius8",src:n(3166).Z,width:"1200",height:"491"})),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u27a1\ufe0f Netflix handles the onboarding of a new video to the system in such a way that its first transcoded into different codecs along with different resolutions. So that the video can be played in different resolutions and bitrates and be targetted to maximum devices and browsers.\u27a1\ufe0f ",(0,r.kt)("strong",null,"Adaptive Bitrate Streaming")," is the process when video running at lesser resolution due to lower internet bandwidth is switched to higher resolution when internet bandwidth is normalized.")))),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)("p",null,"\u27a1\ufe0f Anything that is not involved in the Video Streaming is handled at the AWS.",(0,r.kt)("br",null),"\n\u27a1\ufe0f For example Billing, Customer Support, Listing of Movies and TV Shows, etc.",(0,r.kt)("br",null),"\n\u27a1\ufe0f All the user viewing pattern, search analytics, etc. are handled at the backend and are stored in AWS and various ML models are used to predict the user's behavior, So that next time a better recommendation will be served to the user. ",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"microservices"},"Microservices"),(0,r.kt)("p",null,"\u27a1\ufe0fMicroservices are key to powering the Netflix API infrastructure, as a user request comes in the call is made to any endpoint, moves on to the other end points through an iterative process.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u27a1\ufe0fThe microservices can be distributed across different instances using HTTP or Remote Procedure Calls (RPC).",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u27a1\ufe0fThe common issue with a microservice-powered system is any node can fail and the entire system can cascade into failure, how do we control this?",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u27a1\ufe0fAs mentioned above one way is the hystrix algorithm which isolates end points and the other is reducing dependencies on vital nodes.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u27a1\ufe0f",(0,r.kt)("code",null,"Critical Services"),"With software engineering we should always look at the best and worst case, a system like Netflix crashing should mean at least basic functionalities are available for clients.Critical endpoints such as search, play, navigation should always be allocated less dependencies.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u27a1\ufe0f",(0,r.kt)("code",null,"Stateless"),"Another key feature in a failsafe microservice system has stateless endpoints, if an endpoint is down then the user should get a response from any other node/endpoint.",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"client"},"Client"),(0,r.kt)("p",null,"\u27a1\ufe0f Any device from which you play Netflix Video.",(0,r.kt)("br",null)),(0,r.kt)("h3",{id:"zuul"},"ZUUL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Zuul is the front door for all requests from devices and web sites to the backend of the Netflix streaming application. As an edge service application, Zuul is built to enable dynamic routing, monitoring, resiliency and security.\n\nRouting is an integral part of a microservice architecture. For example, /api/users is mapped to the user service and /api/shop is mapped to the shop service. Zuul is a JVM-based router and server side load balancer by Netflix.\n")),(0,r.kt)("p",null,"Zuul uses a range of different types of filters that enables us to quickly and nimbly apply functionality to our edge service. These filters help us perform the following functions: "),(0,r.kt)("p",null,"\u27a1\ufe0f ",(0,r.kt)("strong",null,"Authentication and Security"),": identifying authentication requirements for each resource.",(0,r.kt)("br",null),"\n\u27a1\ufe0f ",(0,r.kt)("strong",null,"Insights and Monitoring"),": tracking meaningful data and statistics.",(0,r.kt)("br",null),"\n\u27a1\ufe0f ",(0,r.kt)("strong",null,"Dynamic Routing"),": dynamically routing requests to different backend..",(0,r.kt)("br",null),"\n\u27a1\ufe0f ",(0,r.kt)("strong",null,"Stress Testing"),": gradually increasing the traffic.",(0,r.kt)("br",null),"\n\u27a1\ufe0f ",(0,r.kt)("strong",null,"Load Shedding"),": allocating capacity for each type of request and dropping requests.",(0,r.kt)("br",null),"\n\u27a1\ufe0f ",(0,r.kt)("strong",null,"Static Response handling"),": building some responses directly.",(0,r.kt)("br",null),"\n\u27a1\ufe0f ",(0,r.kt)("strong",null,"Multi-region Resiliency"),": routing requests across AWS regions.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Zuul gives us a lot of insight, flexibility, and resiliency, in part by making use of other Netflix OSS components:"),(0,r.kt)("p",null,"\u27a1\ufe0f",(0,r.kt)("strong",null,"Hystrix")," is used to wrap calls to our origins, which allows us to shed and prioritize traffic when issues occur. Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable.",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"hystrix-as-a-circuit-breaker"},"Hystrix as a Circuit Breaker"),(0,r.kt)("p",null,"As you said, it can be simply wrapped under try-catch block then why choose Hystrix or some other library? What i experienced:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"Already ",(0,r.kt)("code",null,"test proven")," library."),(0,r.kt)("li",null,"Ability to ",(0,r.kt)("code",null,"skip original intended calls and fallback"),". Note that if you wrap it under try-catch, there will be still be an attempt to connect and send command which will eventually timeout due to degraded dependency. Knowing this information prior to call will enable to skip the calls for sometime (as per configuration) and you can save those resources"),(0,r.kt)("li",null,"Provides circuit breaking using ",(0,r.kt)("code",null,"Sliding Time Window")," as well"),(0,r.kt)("li",null,(0,r.kt)("code",null,"Metrics and Dashboarding")," provided Out of the Box which can help you peek into your system and dependent connection"),(0,r.kt)("li",null,"Implements ",(0,r.kt)("code",null,"BulkHead")," by using different ",(0,r.kt)("code",null,"Thread Pools")),(0,r.kt)("li",null,"Lower maintenance cost"),(0,r.kt)("li",null,"Health check ability. It provides a health check class which plugins with Health monitoring APIs")),(0,r.kt)("strong",null,"What does it do?"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("strong",null,"Latency and Fault Tolerance")," : Stop cascading failures. Fallbacks and graceful degradation. Fail fast and rapid recovery.Thread and semaphore isolation with circuit breakers."),(0,r.kt)("li",null,(0,r.kt)("strong",null,"Realtime Operations"),"Realtime monitoring and configuration changes. Watch service and property changes take effect immediately as they spread across a fleet.Be alerted, make decisions, affect change and see results in seconds."),(0,r.kt)("li",null,(0,r.kt)("strong",null,"Concurrency"),"Parallel execution. Concurrency aware request caching. Automated batching through request collapsing.")),"\u27a1\ufe0f",(0,r.kt)("strong",null,"Ribbon")," is our client for all outbound requests from Zuul, which provides detailed information into network performance and errors, as well as handles software load balancing for even load distribution.",(0,r.kt)("br",null),"\u27a1\ufe0f",(0,r.kt)("strong",null,"Turbine")," aggregates fine\xadgrained metrics in real\xadtime so that we can quickly observe and react to problems.",(0,r.kt)("br",null),"\u27a1\ufe0f",(0,r.kt)("strong",null,"Archaius")," handles configuration and gives the ability to dynamically change properties.",(0,r.kt)("br",null),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=psQzyFfsUGU"},"Youtube - Tech Dummies Narendra L - Netflix System Design")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://dzone.com/articles/spring-cloud-netflix-zuul-edge-serverapi-gatewayga"},"Get to Know Netflix's Zuul")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://github.com/Netflix/Hystrix"},"Hystrix - Github")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://www.muvi.com/blogs/importantance-of-video-transcoding.html"},"Importance of Video Transcoding"))))}u.isMDXComponent=!0},6892:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2022-06-19-18-55-35-b15323042f22d7e79414e94a08f9ecaa.png"},9981:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},1921:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2022-06-20-09-49-10-ce71172aab2d111143deb1ea898a34e5.png"},3166:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2022-06-20-09-58-36-2a8d1354781ee8c707e7c7e4983724c3.png"}}]);