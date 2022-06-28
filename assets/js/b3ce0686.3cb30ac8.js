"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[5064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={tree_title:"Math",description:"This will cover the most of the topics that will be part of the Math.",last_modified:new Date("2022-06-08T16:35:30.353Z")},o="Math",l={unversionedId:"data-structures/math",id:"data-structures/math",title:"Math",description:"This will cover the most of the topics that will be part of the Math.",source:"@site/docs/data-structures/math.md",sourceDirName:"data-structures",slug:"/data-structures/math",permalink:"/interview/docs/data-structures/math",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"Math",description:"This will cover the most of the topics that will be part of the Math.",last_modified:"2022-06-08T16:35:30.353Z"},sidebar:"docs",previous:{title:"Map",permalink:"/interview/docs/data-structures/map"},next:{title:"Priority Queue",permalink:"/interview/docs/data-structures/priority-queue"}},s={},c=[{value:"One Liner.",id:"one-liner",level:2},{value:"GCD/HCF - Euclidean Algorithm",id:"gcdhcf---euclidean-algorithm",level:2},{value:"Sieve of Eratosthenes",id:"sieve-of-eratosthenes",level:2},{value:"Modulo Exponentiation, Arithmetic and Inverse",id:"modulo-exponentiation-arithmetic-and-inverse",level:2},{value:"Logarithmic Bounds",id:"logarithmic-bounds",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math"},"Math"),(0,a.kt)("h2",{id:"one-liner"},"One Liner."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Snippet"),(0,a.kt)("th",{parentName:"tr",align:null},"Explaination"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"To check if Double is an Integer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"if(d%1==0)")),(0,a.kt)("td",{parentName:"tr",align:null},"if true then d is integer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"To check power of any number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"double temp = Math.log(n)/Math.log(2);")),(0,a.kt)("td",{parentName:"tr",align:null},"Resultant temp should be Integer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LCD of two numbers"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"LCM(a, b) = (a x b) / GCD(a, b)")),(0,a.kt)("td",{parentName:"tr",align:null},"Program for GCD is below.")))),(0,a.kt)("h2",{id:"gcdhcf---euclidean-algorithm"},"GCD/HCF - Euclidean Algorithm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public static int gcd(int a, int b)\n{\n    if (a == 0)\n        return b;\n    return gcd(b%a, a);\n}\n// Time Complexity: O(Log min(a, b))  \n// Auxiliary Space: O(1)\n")),(0,a.kt)("h2",{id:"sieve-of-eratosthenes"},"Sieve of Eratosthenes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Generating primes fast is very important in some problems.You can use the Sieve of Eratosthenes to find all the prime numbers that are less than or equal to a given number N or to find out whether a number is a prime number. The basic idea behind the Sieve of Eratosthenes is that at each iteration one prime number is picked up and all its multiples are eliminated. After the elimination process is complete, all the unmarked numbers that remain are prime.\n\n")),(0,a.kt)("h2",{id:"modulo-exponentiation-arithmetic-and-inverse"},"Modulo Exponentiation, Arithmetic and Inverse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. (a+b)%c = (a%c+b%c)%c \n2. (a?b)%c = ((a%c)?(b%c))%c \n3. (a?b)%c = ((a%c)?(b%c)+c)%c \n4. (a/b)%c = ((a%c)?(b%c))%c \n\n")),(0,a.kt)("h2",{id:"logarithmic-bounds"},"Logarithmic Bounds"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: x = 2, y = 3, bound = 10\nOutput: [2,3,4,5,7,9,10]\nExplanation:\n2 = 20 + 30\n3 = 21 + 30\n4 = 20 + 31\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Logarithmic Bounds BorderRadius8",src:n(5206).Z,width:"607",height:"298"})),(0,a.kt)("p",null,"\u27a1\ufe0f So basically we are trying to find x^a+y^b where a and b are termination condition for the nested loops."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"int a = x == 1 ? bound : (int) (Math.log(bound) / Math.log(x));\nint b = y == 1 ? bound : (int) (Math.log(bound) / Math.log(y));\n\nfor (int i = 0; i <= a; i++) {\n    for (int j = 0; j <= b; j++) {\n        //Code here to add the numbers to the Set.\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Complexity Analysis BorderRadius8",src:n(3236).Z,width:"602",height:"208"})),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://leetcode.com/problems/powerful-integers/"},"Logarithmic Bounds"))))}p.isMDXComponent=!0},5206:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2022-06-18-10-40-09-934bf3cdfe4ec9b6bf526c135a1f4531.png"},3236:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/2022-06-18-10-44-05-f0c2f0fa332259d920321fb6c3d84ce0.png"}}]);