"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[7833],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={tree_title:"Priority Queue",description:"This will cover the most of the topics that will be part of the priority queue.",last_modified:new Date("2022-06-08T15:36:32.363Z")},a="Priority Queue",u={unversionedId:"data-structures/priority-queue",id:"data-structures/priority-queue",title:"Priority Queue",description:"This will cover the most of the topics that will be part of the priority queue.",source:"@site/docs/data-structures/priority-queue.md",sourceDirName:"data-structures",slug:"/data-structures/priority-queue",permalink:"/interview/docs/data-structures/priority-queue",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"Priority Queue",description:"This will cover the most of the topics that will be part of the priority queue.",last_modified:"2022-06-08T15:36:32.363Z"},sidebar:"docs",previous:{title:"Matrix",permalink:"/interview/docs/data-structures/matrix"},next:{title:"Search Algorithms",permalink:"/interview/docs/data-structures/search-algorithms"}},s={},l=[{value:"Min Heap (Default)",id:"min-heap-default",level:3},{value:"Max Heap",id:"max-heap",level:3},{value:"Operations and Complexities",id:"operations-and-complexities",level:2},{value:"Complexities",id:"complexities",level:3},{value:"Operations",id:"operations",level:3},{value:"Different Constructors of Priority Queue.",id:"different-constructors-of-priority-queue",level:2},{value:"Priority Queue with Comparator.",id:"priority-queue-with-comparator",level:2},{value:"Use of Comparator Class",id:"use-of-comparator-class",level:3},{value:"Anonymous Comparator Class",id:"anonymous-comparator-class",level:3},{value:"Resources",id:"resources",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"priority-queue"},"Priority Queue"),(0,i.kt)("div",{class:"section-container pl0 pr0"},(0,i.kt)("div",{class:"section-item pl0"},(0,i.kt)("h3",{id:"min-heap-default"},"Min Heap (Default)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"PriorityQueue<Integer> queue = new PriorityQueue<>();\n"))),(0,i.kt)("div",{class:"section-item"},(0,i.kt)("h3",{id:"max-heap"},"Max Heap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());\n")))),(0,i.kt)("h2",{id:"operations-and-complexities"},"Operations and Complexities"),(0,i.kt)("h3",{id:"complexities"},"Complexities"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operations"),(0,i.kt)("th",{parentName:"tr",align:null},"Complexity"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offer, poll, remove, add"),(0,i.kt)("td",{parentName:"tr",align:null},"O(log n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"peek"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"remove(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"O(n)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"peek, element, size, isEmpty"),(0,i.kt)("td",{parentName:"tr",align:null},"O(1)")))),(0,i.kt)("h3",{id:"operations"},"Operations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"PriorityQueue<Integer> pq = new PriorityQueue<Integer>();\n// Adding items to the pq using add()\npq.add(10);\n\n// Adding items to the pq using offer()\npq.offer(20);\n\n// Peek item at the top of the Queue using peek()\npq.peek();\n\n// Remove the top element from the Queue using poll()\npq.poll();\n\n//Retrieves and remove the head of the Queue\npq.remove()\n\npq.remove(20);\n// Removes a single instance of the specified element \n// from this queue, if it is present.\n// Return type is boolean.\n\npq.element();\n// Retrieves, but does not remove, the head of this queue.\n\npq.size();\n// Returns the number of elements in this collection.\n\npq.isEmpty();\n// Returns true if this collection contains no elements.\n")),(0,i.kt)("h2",{id:"different-constructors-of-priority-queue"},"Different Constructors of Priority Queue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"PriorityQueue<E> pq = new PriorityQueue<E>(); \n// Creates a PriorityQueue with the default initial capacity (11) \n// that orders its elements according to their natural ordering.\n\nPriorityQueue<E> pq = new PriorityQueue<E>(Collection<E> c); \n// Creates a PriorityQueue containing the elements \n// in the specified collection.\n\nPriorityQueue<E> pq = new PriorityQueue<E>(int initialCapacity); \n// Creates a PriorityQueue with the specified initial capacity \n// that orders its elements according to their natural ordering.\n\nPriorityQueue<E> pq = new PriorityQueue(int initialCapacity, Comparator<E> comparator);\n// Creates a PriorityQueue with the specified initial capacity that orders its elements \n// according to the specified comparator.\n\nPriorityQueue<E> pq = new PriorityQueue(PriorityQueue<E> c);\n// Creates a PriorityQueue containing the elements in the specified \n// priority queue.\n\nPriorityQueue<E> pq = new PriorityQueue<E>(SortedSet<E> c);\n// Creates a PriorityQueue containing the elements in the specified sorted set.\n")),(0,i.kt)("h2",{id:"priority-queue-with-comparator"},"Priority Queue with Comparator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-1 : o1 < o2\n0 : o1 == o2\n+1 : o1 > o2\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you always return the same value (o, 1, -1) for the comparator, regardless of it's inputs, then you're not using it correctly. You need to base the value returned on the values passed in. The idea is that the data structure (or sorter) calls the comparison function any time it needs to order two elements, to find out what order to put them in."),(0,i.kt)("li",{parentName:"ul"},"Its worth noting that the positive/negative integer values (-1, +1) don't need to be 1, they can be any positive/negative numbers. It's just common practice to return -1/+1.")),(0,i.kt)("h3",{id:"use-of-comparator-class"},"Use of Comparator Class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class Solution {\n    PriorityQueue<Student> pq = new PriorityQueue<Student>(5, new StudentComparator());\n    // Here 5 represents the initial capacity, one of many kind of different constructor for PQ.\n    // When you add elements into the pq, they will be sorted as per the CGPA DESC Order.\n}\nclass StudentComparator implements Comparator<Student>{\n    // Overriding compare() method of Comparator // for descending order of CGPA\n    public int compare(Student s1, Student s2) {\n        if (s1.cgpa < s2.cgpa) return 1;\n        else if (s1.cgpa > s2.cgpa) return -1;\n        else return 0;\n    }\n}\n")),(0,i.kt)("h3",{id:"anonymous-comparator-class"},"Anonymous Comparator Class"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'class Solution {\n    PriorityQueue<Student> pq = new PriorityQueue<>(10, new Comparator<Student>() {\n        public int compare(Student n1, Student n2) {\n            //Method 1\n            // return Integer.compare(n1.getCGPA(), n2.getCGPA());\n            //Method 2\n            return new Integer(n1.cgpa).compareTo(new Integer(n2.cgpa)); \n            // You can make Integer object and then compare.\n            // For Strings you can directly use int com = "bsd".compareTo("asd");\n            // For other types, we can deduce in similar fashion.\n        }\n    });\n}\n')),(0,i.kt)("h2",{id:"resources"},"Resources"))}c.isMDXComponent=!0}}]);