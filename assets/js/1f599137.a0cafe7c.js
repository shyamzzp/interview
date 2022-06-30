"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[7176,1575],{2611:(t,e,a)=>{a.r(e),a.d(e,{MyComponent:()=>v,assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=a(7462),o=a(7294),i=a(3905),n=a(3796);var s=a(8117),d=a.n(s);const c={},l=void 0,u={unversionedId:"data-structures/matrix-component",id:"data-structures/matrix-component",title:"matrix-component",description:"",source:"@site/docs/data-structures/matrix-component.mdx",sourceDirName:"data-structures",slug:"/data-structures/matrix-component",permalink:"/interview/docs/data-structures/matrix-component",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Math",permalink:"/interview/docs/data-structures/math"},next:{title:"Matrix",permalink:"/interview/docs/data-structures/matrix"}},m={},p=[];function v(t){const[e,a]=(0,o.useState)(!1);return e?(0,i.kt)("div",{className:"description-container"},(0,i.kt)("div",{className:"description-gray",onClick:t=>{a(!e)}}),(0,i.kt)("div",{className:"description"},(0,i.kt)(n.Z,{language:"js",mdxType:"CodeBlock"},"function HelloCodeTitle(props) {\n    return <h1>Hello, {props.name}</h1>;\n}"),(0,i.kt)("button",{onClick:t=>{(new(d())).highlight("#hello")}},"Button"))):(0,i.kt)("div",{onClick:t=>{a(!e)}},"Show Details")}const X={toc:p,MyComponent:v};function g(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,r.Z)({},X,a,{components:e,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},7056:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));a(2611);const i={tree_title:"Matrix",description:"This will cover the most of the topics that will be part of the Matrix.",last_modified:new Date("2022-06-30T14:54:32.543Z")},n="Matrix",s={unversionedId:"data-structures/matrix",id:"data-structures/matrix",title:"Matrix",description:"This will cover the most of the topics that will be part of the Matrix.",source:"@site/docs/data-structures/matrix.mdx",sourceDirName:"data-structures",slug:"/data-structures/matrix",permalink:"/interview/docs/data-structures/matrix",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"Matrix",description:"This will cover the most of the topics that will be part of the Matrix.",last_modified:"2022-06-30T14:54:32.543Z"},sidebar:"docs",previous:{title:"matrix-component",permalink:"/interview/docs/data-structures/matrix-component"},next:{title:"Priority Queue",permalink:"/interview/docs/data-structures/priority-queue"}},d={},c=(new Driver,[{value:"Manhattan Distance",id:"manhattan-distance",level:2}]),l={toc:c};function u(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"matrix"},"Matrix"),(0,o.kt)("h2",{id:"manhattan-distance"},"Manhattan Distance"),(0,o.kt)("div",{className:"section-container pl0 pr0"},(0,o.kt)("div",{className:"section-item pl0",id:"nice"},(0,o.kt)("p",null,"This article talks about the distance between two coordinates in the plane 2D matrix.\nYou are given two points (x1, y1) and (x2, y2). Find the distance between them.\nAllowed transition is either vertical or horizontal."),(0,o.kt)("p",null,"Now imagine that you are in a city, and each point is a building. You can't walk over a building, so the only options are to go either up/down or left/right. Then, the shortest distance is given by the sum of the components of the difference vector; which is the mathematical way of saying that ",(0,o.kt)("b",null,"go down 2 blocks and then one block to the left")," means walking 3 blocks' distance: ",(0,o.kt)("mark",null,"dist = abs(x2-x1) + abs(y2-y1)"),". This is known as the Manhattan distance between the points.")),(0,o.kt)("div",{className:"section-item"},(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3276).Z,width:"295",height:"260"})))))}u.isMDXComponent=!0},3276:(t,e,a)=>{a.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);