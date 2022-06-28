"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[7623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(r),p=i,f=h["".concat(s,".").concat(p)]||h[p]||u[p]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const o={tree_title:"Trie",description:"This will cover the most of the topics that will be part of the Trie.",last_modified:new Date("2022-06-08T16:35:30.353Z")},a="Trie",l={unversionedId:"data-structures/trie",id:"data-structures/trie",title:"Trie",description:"This will cover the most of the topics that will be part of the Trie.",source:"@site/docs/data-structures/trie.md",sourceDirName:"data-structures",slug:"/data-structures/trie",permalink:"/interview/docs/data-structures/trie",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"Trie",description:"This will cover the most of the topics that will be part of the Trie.",last_modified:"2022-06-08T16:35:30.353Z"},sidebar:"docs",previous:{title:"Tree",permalink:"/interview/docs/data-structures/tree"},next:{title:"Design Patterns",permalink:"/interview/docs/design-patterns/"}},s={},d=[{value:"Introduction to Trie",id:"introduction-to-trie",level:2},{value:"Implementation of Trie",id:"implementation-of-trie",level:2},{value:"General Function Calls around Trie",id:"general-function-calls-around-trie",level:3},{value:"Implementation of Trie - Java",id:"implementation-of-trie---java",level:3},{value:"Define TrieNode",id:"define-trienode",level:4},{value:"Insertion into Trie",id:"insertion-into-trie",level:4},{value:"Searching in Trie",id:"searching-in-trie",level:4},{value:"StartsWith in Trie",id:"startswith-in-trie",level:4},{value:"Visualization of Trie",id:"visualization-of-trie",level:4},{value:"References",id:"references",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trie"},"Trie"),(0,i.kt)("span",{class:"tag-is-success"},"Last Updated : THURSDAY 16 June, 2022 5:19:32 PM"),(0,i.kt)("h2",{id:"introduction-to-trie"},"Introduction to Trie"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Coverage-Trie BorderRadius8",src:r(6326).Z,width:"555",height:"319"})),(0,i.kt)("p",null,"A trie, or a prefix tree, is a type of search tree that is usually used to store strings. Some of the properties of Trie are:",(0,i.kt)("br",null),"\n\u27a1\ufe0f Each path from the root to leaves forms a word.",(0,i.kt)("br",null),"\n\u27a1\ufe0f Each node except for the root node contains a value.",(0,i.kt)("br",null),"\n\u27a1\ufe0f All the descendants of a node share a common prefix associated to that node. For example, ",(0,i.kt)("code",null,"are")," and ",(0,i.kt)("code",null,"art")," share ",(0,i.kt)("code",null,"ar")," as the prefix.",(0,i.kt)("br",null)),(0,i.kt)("p",null,"\u27a1\ufe0f There are two operations provided by a trie: inserting a new string, and searching for a given string.",(0,i.kt)("br",null),"\n\u27a1\ufe0f The advantage of using a trie is that, regardless of the number of strings stored in it, the time complexity for both inserting and searching is always O(L) when L is the length of the input string.",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"implementation-of-trie"},"Implementation of Trie"),(0,i.kt)("h3",{id:"general-function-calls-around-trie"},"General Function Calls around Trie"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Implement a trie with insert, search, and startsWith methods.\n\nExample:\nTrie trie = new Trie();\ntrie.insert("apple");\ntrie.search("apple");   // returns true\ntrie.search("app");     // returns false\ntrie.startsWith("app"); // returns true\ntrie.insert("app");   \ntrie.search("app");     // returns true\n\nNote:\nYou may assume that all inputs are consist of lowercase letters a-z.\nAll inputs are guaranteed to be non-empty strings.\n\n')),(0,i.kt)("h3",{id:"implementation-of-trie---java"},"Implementation of Trie - Java"),(0,i.kt)("h4",{id:"define-trienode"},"Define TrieNode"),(0,i.kt)("p",null,"Firstly we need to define a class TrieNode with:"),(0,i.kt)("p",null,"\u27a1\ufe0f A boolean variable isWord to indicate whether we can form a word or it's only a prefix.",(0,i.kt)("br",null),"\n\u27a1\ufe0f An array of TrieNode named children to store its children node.",(0,i.kt)("br",null),"\n\u27a1\ufe0f A constructor which initializes isWord to false, and, as only lowercase letters will be used, initializes children to an array of size 26.",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class TrieNode {\n    TrieNode[] children;\n    boolean isEndOfWord;\n    public TrieNode() {\n        children = new TrieNode[26];\n        isEndOfWord = false;\n    }\n}\n")),(0,i.kt)("h4",{id:"insertion-into-trie"},"Insertion into Trie"),(0,i.kt)("p",null,"Given a new string word, we would iterate through it. Starting from the dummy node root and the first character c, we would check whether c is in root.children:"),(0,i.kt)("p",null,"\u27a1\ufe0f if it is, we can move to that node and increment to next character as well;",(0,i.kt)("br",null),"\n\u27a1\ufe0f if not, we need to initiate a new node so that we can attach c to the trie.",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public void insert(String word) {\n    TrieNode node = root;\n    for (int i = 0; i < word.length(); i++) {\n        int index = word.charAt(i) - 'a';\n        if (node.children[index] == null) {\n            node.children[index] = new TrieNode();\n        }\n        node = node.children[index];\n    }\n    node.isEndOfWord = true;\n}\n//Time Complexity: O(L) where L is the length of the word.\n")),(0,i.kt)("h4",{id:"searching-in-trie"},"Searching in Trie"),(0,i.kt)("p",null,"Similarly to insert, we also start the iteration with the first character and the dummy node. If we do not find the character in its children, we can return false. Remember to check isWord after reaching the end of word."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public boolean search(String word) {\n    TrieNode current_node = root;\n    for (int i = 0; i < word.length(); i++) {\n        int index = word.charAt(i) - 'a';\n        if (current_node.children[index] == null) return false;\n        current_node = current_node.children[index];\n    }\n    return current_node.isWord;\n}\n\n//Time Complexity: O(L) where L is the length of the word.\n")),(0,i.kt)("h4",{id:"startswith-in-trie"},"StartsWith in Trie"),(0,i.kt)("p",null,"The only different to search is that, we do not need to check isWord at the end."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"\npublic boolean startsWith(String prefix) {\n    TrieNode current_node = root;\n    for (int i = 0; i < prefix.length(); i++) {\n        int index = prefix.charAt(i) - 'a';\n        if (current_node.children[index] == null) return false;\n        current_node = current_node.children[index];\n    }\n    return true;\n}\n//Time Complexity: O(L) where L is the length of the prefix.\n\n")),(0,i.kt)("h4",{id:"visualization-of-trie"},"Visualization of Trie"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Trie Insertion",src:r(430).Z,width:"1080",height:"608"})),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("a",{href:"https://medium.com/@prefixyteam/how-we-built-prefixy-a-scalable-prefix-search-service-for-powering-autocomplete-c20f98e2eff1"},"How We Built Prefixy: A Scalable Prefix Search Service for Powering Autocomplete"))))}u.isMDXComponent=!0},6326:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/2022-06-16-14-59-33-00ddcc3a636d0d6bc3c12e7e97b27bee.png"},430:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/trie-81b2824443d24a5dc48106d3bf43feee.gif"}}]);