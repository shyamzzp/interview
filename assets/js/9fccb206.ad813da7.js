"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[3563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={tree_title:"Netflix System Design",description:"System Design for Netflix.",last_modified:new Date("2022-06-19T18:54:23.542Z")},l="Netflix System Design",s={unversionedId:"system-design/netflix",id:"system-design/netflix",title:"Netflix System Design",description:"System Design for Netflix.",source:"@site/docs/system-design/netflix.md",sourceDirName:"system-design",slug:"/system-design/netflix",permalink:"/interview/docs/system-design/netflix",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"Netflix System Design",description:"System Design for Netflix.",last_modified:"2022-06-19T18:54:23.542Z"},sidebar:"docs",previous:{title:"Location Lockers System Design",permalink:"/interview/docs/system-design/location-lockers"},next:{title:"Pastebin System Design",permalink:"/interview/docs/system-design/pastebin"}},o={},c=[{value:"What we know so far",id:"what-we-know-so-far",level:2},{value:"Components of Netflix",id:"components-of-netflix",level:2},{value:"Open Connect",id:"open-connect",level:3},{value:"What is Transcoding",id:"what-is-transcoding",level:3},{value:"What is Adaptive Bitrate Streaming",id:"what-is-adaptive-bitrate-streaming",level:3},{value:"Backend",id:"backend",level:3},{value:"Microservices",id:"microservices",level:4},{value:"Client",id:"client",level:3},{value:"ZUUL",id:"zuul",level:3},{value:"Hystrix as a Circuit Breaker",id:"hystrix-as-a-circuit-breaker",level:4},{value:"References",id:"references",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"netflix-system-design"},"Netflix System Design"),(0,i.kt)("h2",{id:"what-we-know-so-far"},"What we know so far"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"What we know so far BorderRadius8",src:n(6892).Z,width:"633",height:"554"})),(0,i.kt)("h2",{id:"components-of-netflix"},"Components of Netflix"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Components of Netflix BorderRadius8",src:n(9981).Z,width:"397",height:"158"})),(0,i.kt)("h3",{id:"open-connect"},"Open Connect"),(0,i.kt)("p",null,"\u27a1\ufe0f This is kind of Netflix owned CDN. All the process related to the Streaming of the Video to Client is handled by this component.",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"what-is-transcoding"},"What is Transcoding"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Transcoding"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"What is Transcoding BorderRadius8",src:n(1921).Z,width:"1376",height:"720"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u27a1\ufe0f Netflix breaks the original(onboarding) video into different smaller chunks and using parallel workers in AWS EC2, it performs encoding and transcoding on these chunks converting them into different formats (MP4, MOV, etc) across different resolutions(4k, 1080p, and more). \u27a1\ufe0f Everything chunk is then merged and the copies of those are stored in the AMAZON S3 bucket and later are pushed to the Open Connect Servers.")))),(0,i.kt)("h3",{id:"what-is-adaptive-bitrate-streaming"},"What is Adaptive Bitrate Streaming"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Adaptive Bitrate Streaming"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("img",{alt:"Adaptive Bitrate Streaming BorderRadius8",src:n(3166).Z,width:"1200",height:"491"})),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u27a1\ufe0f Netflix handles the onboarding of a new video to the system in such a way that its first transcoded into different codecs along with different resolutions. So that the video can be played in different resolutions and bitrates and be targetted to maximum devices and browsers.\u27a1\ufe0f ",(0,i.kt)("strong",null,"Adaptive Bitrate Streaming")," is the process when video running at lesser resolution due to lower internet bandwidth is switched to higher resolution when internet bandwidth is normalized.")))),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("p",null,"\u27a1\ufe0f Anything that is not involved in the Video Streaming is handled at the AWS.",(0,i.kt)("br",null),"\n\u27a1\ufe0f For example Billing, Customer Support, Listing of Movies and TV Shows, etc.",(0,i.kt)("br",null),"\n\u27a1\ufe0f All the user viewing pattern, search analytics, etc. are handled at the backend and are stored in AWS and various ML models are used to predict the user's behavior, So that next time a better recommendation will be served to the user. ",(0,i.kt)("br",null)),(0,i.kt)("h4",{id:"microservices"},"Microservices"),(0,i.kt)("p",null,"\u27a1\ufe0fMicroservices are key to powering the Netflix API infrastructure, as a user request comes in the call is made to any endpoint, moves on to the other end points through an iterative process.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u27a1\ufe0fThe microservices can be distributed across different instances using HTTP or Remote Procedure Calls (RPC).",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u27a1\ufe0fThe common issue with a microservice-powered system is any node can fail and the entire system can cascade into failure, how do we control this?",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u27a1\ufe0fAs mentioned above one way is the hystrix algorithm which isolates end points and the other is reducing dependencies on vital nodes.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u27a1\ufe0f",(0,i.kt)("code",null,"Critical Services"),"With software engineering we should always look at the best and worst case, a system like Netflix crashing should mean at least basic functionalities are available for clients.Critical endpoints such as search, play, navigation should always be allocated less dependencies.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u27a1\ufe0f",(0,i.kt)("code",null,"Stateless"),"Another key feature in a failsafe microservice system has stateless endpoints, if an endpoint is down then the user should get a response from any other node/endpoint.",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"client"},"Client"),(0,i.kt)("p",null,"\u27a1\ufe0f Any device from which you play Netflix Video.",(0,i.kt)("br",null)),(0,i.kt)("h3",{id:"zuul"},"ZUUL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Zuul is the front door for all requests from devices and web sites to the backend of the Netflix streaming application. As an edge service application, Zuul is built to enable dynamic routing, monitoring, resiliency and security.\n\nRouting is an integral part of a microservice architecture. For example, /api/users is mapped to the user service and /api/shop is mapped to the shop service. Zuul is a JVM-based router and server side load balancer by Netflix.\n")),(0,i.kt)("p",null,"Zuul uses a range of different types of filters that enables us to quickly and nimbly apply functionality to our edge service. These filters help us perform the following functions: "),(0,i.kt)("p",null,"\u27a1\ufe0f ",(0,i.kt)("strong",null,"Authentication and Security"),": identifying authentication requirements for each resource.",(0,i.kt)("br",null),"\n\u27a1\ufe0f ",(0,i.kt)("strong",null,"Insights and Monitoring"),": tracking meaningful data and statistics.",(0,i.kt)("br",null),"\n\u27a1\ufe0f ",(0,i.kt)("strong",null,"Dynamic Routing"),": dynamically routing requests to different backend..",(0,i.kt)("br",null),"\n\u27a1\ufe0f ",(0,i.kt)("strong",null,"Stress Testing"),": gradually increasing the traffic.",(0,i.kt)("br",null),"\n\u27a1\ufe0f ",(0,i.kt)("strong",null,"Load Shedding"),": allocating capacity for each type of request and dropping requests.",(0,i.kt)("br",null),"\n\u27a1\ufe0f ",(0,i.kt)("strong",null,"Static Response handling"),": building some responses directly.",(0,i.kt)("br",null),"\n\u27a1\ufe0f ",(0,i.kt)("strong",null,"Multi-region Resiliency"),": routing requests across AWS regions.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"Zuul gives us a lot of insight, flexibility, and resiliency, in part by making use of other Netflix OSS components:"),(0,i.kt)("p",null,"\u27a1\ufe0f",(0,i.kt)("strong",null,"Hystrix")," is used to wrap calls to our origins, which allows us to shed and prioritize traffic when issues occur. Hystrix is a latency and fault tolerance library designed to isolate points of access to remote systems, services and 3rd party libraries, stop cascading failure and enable resilience in complex distributed systems where failure is inevitable.",(0,i.kt)("br",null)),(0,i.kt)("h4",{id:"hystrix-as-a-circuit-breaker"},"Hystrix as a Circuit Breaker"),(0,i.kt)("p",null,"As you said, it can be simply wrapped under try-catch block then why choose Hystrix or some other library? What i experienced:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Already ",(0,i.kt)("code",null,"test proven")," library."),(0,i.kt)("li",null,"Ability to ",(0,i.kt)("code",null,"skip original intended calls and fallback"),". Note that if you wrap it under try-catch, there will be still be an attempt to connect and send command which will eventually timeout due to degraded dependency. Knowing this information prior to call will enable to skip the calls for sometime (as per configuration) and you can save those resources"),(0,i.kt)("li",null,"Provides circuit breaking using ",(0,i.kt)("code",null,"Sliding Time Window")," as well"),(0,i.kt)("li",null,(0,i.kt)("code",null,"Metrics and Dashboarding")," provided Out of the Box which can help you peek into your system and dependent connection"),(0,i.kt)("li",null,"Implements ",(0,i.kt)("code",null,"BulkHead")," by using different ",(0,i.kt)("code",null,"Thread Pools")),(0,i.kt)("li",null,"Lower maintenance cost"),(0,i.kt)("li",null,"Health check ability. It provides a health check class which plugins with Health monitoring APIs")),(0,i.kt)("strong",null,"What does it do?"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("strong",null,"Latency and Fault Tolerance")," : Stop cascading failures. Fallbacks and graceful degradation. Fail fast and rapid recovery.Thread and semaphore isolation with circuit breakers."),(0,i.kt)("li",null,(0,i.kt)("strong",null,"Realtime Operations"),"Realtime monitoring and configuration changes. Watch service and property changes take effect immediately as they spread across a fleet.Be alerted, make decisions, affect change and see results in seconds."),(0,i.kt)("li",null,(0,i.kt)("strong",null,"Concurrency"),"Parallel execution. Concurrency aware request caching. Automated batching through request collapsing.")),"\u27a1\ufe0f",(0,i.kt)("strong",null,"Ribbon")," is our client for all outbound requests from Zuul, which provides detailed information into network performance and errors, as well as handles software load balancing for even load distribution.",(0,i.kt)("br",null),"\u27a1\ufe0f",(0,i.kt)("strong",null,"Turbine")," aggregates fine\xadgrained metrics in real\xadtime so that we can quickly observe and react to problems.",(0,i.kt)("br",null),"\u27a1\ufe0f",(0,i.kt)("strong",null,"Archaius")," handles configuration and gives the ability to dynamically change properties.",(0,i.kt)("br",null),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://www.youtube.com/watch?v=psQzyFfsUGU"},"Youtube - Tech Dummies Narendra L - Netflix System Design")),(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://dzone.com/articles/spring-cloud-netflix-zuul-edge-serverapi-gatewayga"},"Get to Know Netflix's Zuul")),(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://github.com/Netflix/Hystrix"},"Hystrix - Github")),(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://www.muvi.com/blogs/importantance-of-video-transcoding.html"},"Importance of Video Transcoding"))))}u.isMDXComponent=!0},6892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2022-06-19-18-55-35-9720a9ba1b448669e94233849de092e1.png"},9981:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},1921:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2022-06-20-09-49-10-7f7154864f307b97ac6f72cf0b01e1b6.png"},3166:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2022-06-20-09-58-36-c65c9d0af9a827f52acdabf5773f63c4.png"}}]);