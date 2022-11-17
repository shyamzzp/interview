"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[8621],{3905:(e,t,i)=>{i.d(t,{Zo:()=>A,kt:()=>g});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},A=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,A=s(e,["components","mdxType","originalType","parentName"]),c=l(i),g=r,f=c["".concat(u,".").concat(g)]||c[g]||d[g]||a;return i?n.createElement(f,o(o({ref:t},A),{},{components:i})):n.createElement(f,o({ref:t},A))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},2822:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=i(7462),r=(i(7294),i(3905));const a={tree_title:"GitHub Linguist",description:"This section will cover the introduction and basic usage of GitHub Linguist.",last_modified:new Date("2022-08-12T19:10:50.105Z")},o="GitHub Linguist",s={unversionedId:"tools_modules/github_linguist",id:"tools_modules/github_linguist",title:"GitHub Linguist",description:"This section will cover the introduction and basic usage of GitHub Linguist.",source:"@site/docs/tools_modules/github_linguist.md",sourceDirName:"tools_modules",slug:"/tools_modules/github_linguist",permalink:"/interview/docs/tools_modules/github_linguist",draft:!1,tags:[],version:"current",frontMatter:{tree_title:"GitHub Linguist",description:"This section will cover the introduction and basic usage of GitHub Linguist.",last_modified:"2022-08-12T19:10:50.105Z"},sidebar:"docs",previous:{title:"Tools & Modules",permalink:"/interview/docs/tools_modules/"},next:{title:"Webpack",permalink:"/interview/docs/tools_modules/webpack"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Write-Downs",id:"write-downs",level:2},{value:"What is GitHub Linguist?",id:"what-is-github-linguist",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"How does Linguist work?",id:"how-does-linguist-work",level:3},{value:"Installation &amp; Demo &amp; References",id:"installation--demo--references",level:2}],A={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-linguist"},"GitHub Linguist"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The files and directories within a repository determine the languages that make up the repository. With GitHub, you can view a repository\u2019s languages to get a quick overview of the repository. But how does this happen? What powers this repository language overview?"),(0,r.kt)("p",null,"You might have noticed this section at the top of your GitHub repositories that gives you an overview of languages contained in the repository."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(19).Z,width:"700",height:"44"})),(0,r.kt)("p",null,"Well, GitHub uses the open source Linguist library to determine file languages for syntax highlighting and repository statistics. Language statistics will update after you push changes to your default branch (which is usually master)."),(0,r.kt)("h2",{id:"write-downs"},"Write-Downs"),(0,r.kt)("div",{class:"section-container pl0 pr0"},(0,r.kt)("div",{class:"section-item pl0"},(0,r.kt)("h3",{id:"what-is-github-linguist"},"What is GitHub Linguist?"),(0,r.kt)("p",null,"GitHub Linguist is a library is used on GitHub.com to detect blob languages, ignore binary or vendored files, suppress generated files in diffs, and generate language breakdown graphs. Source: GitHub Linguist Docs.\nBasically, Linguist is a library that runs on every GitHub repository. It checks every file and directory and detects the programming language used in that file."),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Linguist defines the list of all languages known to GitHub in a yaml file. In order for a file to be highlighted, a language and lexer must be defined there."),(0,r.kt)("p",null,"Most languages are detected by their file extension. This is the fastest and most common situation.")),(0,r.kt)("div",{class:"section-item"},(0,r.kt)("h3",{id:"how-does-linguist-work"},"How does Linguist work?"),(0,r.kt)("p",null,"Linguist takes the list of languages it knows from languages.yml and uses a number of methods to try and determine the language used by each file, and the overall repository breakdown."),(0,r.kt)("p",null,"Linguist starts by going through all the files in a repository and excludes all files that it determines to be binary data, vendored code, generated code, documentation, or are defined as data (e.g. SQL) or prose (e.g. Markdown) languages, whilst taking into account any overrides."),(0,r.kt)("p",null,"The result of this analysis is used to produce the language stats bar which displays the languages percentages for the files in the repository. The percentages are calculated based on the bytes of code for each language as reported by the List Languages API."))),(0,r.kt)("h2",{id:"installation--demo--references"},"Installation & Demo & References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/github/linguist"},"Github - Demo and Installation")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/repos#list-languages"},"Github Linguist - APIs")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@bolajiayodeji/introducing-github-linguist-8f09273ddea1"},"Medium - Getting Started / Introduction to Github Linguist")))}d.isMDXComponent=!0},19:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAAsCAIAAAAIIfx+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABcHSURBVHhe7d0HXNTm3wDwJLdykyW7shRwL1Qc4KoTR11V1FZbtY5aVx111Fato7WO1lW0dbcurDhwIrhBEBUH4kJFkSH7juO4Sy55n9zl4EDte/3r5//K5/19HeQZyfHJM/LLIOAsy2IAAAAAAP8bLmigjcbCYjXGsjjO5wIAAAAAICyG0xRtZ6eUS0kuaNCUagmCkMukfDkAAAAAgAVF07l5BR+4uxIogeIGsUgE9ykAAAAAUA0KD0RCIcMwaJkLGkxYHG5OAAAAAKAqS3jA/V8RNAAAAAAA/BMIGgAAAABgEwgaAAAAAGATCBoAAAAAYBMIGgAAAABgEwgaAAAAAGATCBoAAAAAYBPujZBqTamUlIhEIj7vfcW9forRsqyO+6lRQo4TVV9hyTKa/Jc6mbOLXMDn2IgxFLzM1xqMhIh0dXMWveF1FSxjLCpWKx3sRba/0IJl9bpSdbnAyVGGojOWpTUlGr2RFYlldkqyYisMrS/S0A4OcsygK9ToMIHYQSUXEJhBW0ZJZHKhzR8HbMBSBmNJIUZTuFhC2DniAiGfz7LFeS8FDs4qERdJM5Qmv4RxriXNy8gpJyxNwGJObm7q/FwjJnfzcODXpDUZL4oVjs5OCklJwUtMWctOUqUHsoyp3RmWEErsVTIBjrNGQ0lJKcVgIpnSXlY57hidOl9Lo/6F+rdCZUcKWU1xcTmNy+3tZagbsJSmlFYopdAh3iFdmb5UrUOtL5VLuH1bdXSjUa8uLlSXlrOEwN7FTSXGy9VFBWotzeAKZ3cnqYChyvLyi/QUQ0gcPFwVFSdhaIP6Mk25QG5P8p2BofRF6lLSzknO9xuM0mlKtBSL4RK5UiVFuUxpcbGOxmV29nI0DaHm1tBylRRO7N4h1C6aUr2u3IAaWqUgSdLqqEepn2aVEGh3EyIHRyeFVGTQ5BUzClc784GGyn9RoHJzE2K63Mw8ikBjVKRydLKTWh83WZ26pNTACMQyexX5us5AUDptSZmBEEntlVICZ8s0WoFCIakhQ/rZixwvTzfBwoUL9QaDSCgUCP7lsfa/jtJe1BVs0BfvN6hP0bqbhNCNELnwZRzdzinDIpiegxrK+QybqP9eMHvJgYTcnMyEi0fcW/ZyJfmCaozanCmTFvn26eX26lHcmHf0z31in2YOlZEAh2F0UZtWrY+hen7oL8Ko60d2/xV3T68vuvdA51/f3TR1MC/vJf19MPqP4zmduwbeOBKVpGazUq4U23l7yZljJ87Jff0d3hTFgH+Pzs8pWjuveNMP6shNZXFRTEmhpEkwbu75Rv3SMSOft+gX5CRGKe2j3ZN+utK/d91Dq7fF3z49f/LiNC2Rce+mm7fbuKF91/6Z2CH8Y3dTVyk6NjOg96Jit+CwFh9ETB1+rXa3dp5VeqCuODPm7NXczEf7o2IMXkH+jkzy8QMRx27p8tMPxN5xa9S0ossVXt48b9edsrLCxxlZjt4BsszTm489FmtuRV3H2zR2e5mw92yeR/3aCugQ78qda+lrF0X+FXHq6N7LiedS5QrSx9+dLzO5tOXbr9YceJbx8tr5qOduPRrRl6eMX3QzpzAt6dR5KqirX+nK+V9vPpWen51yZnd2UP9mfMNTRQlnYvdE/n1N2DTER8blsOzDyweXrP2LbdazgZ2pDsakno5Oyiy4ef7k4eSc+kENZM/jNkTdl+jSIhPptk3dCxL3n3jh2tBbCUHDOxRzLm11RMzuA4nRp2+l3Hn+gbuDSy0lX5axze/DWeWY+M6FPRFHn3bp3vb+vkmzkxyHBfuZitOndZhYN3yEyhDfN2RqEa5LPHv4tz1pbfqHOFgGZHFq7NrtsYXazD0HryjqNPa2N83x1p3By3hwz+E8jLhxMUHuH+BgKI48meJd36emnAeUaErtVJWR8fuOobJ0eb+ydB6OC1GQyFDPdPlrWaOGL+bgQgkpMR3RjTRlQCiaYTHWSBsoo6kCa6QMKMtI06ZSCpVimrRFh1/M3vjLd3NmLFu2trE99y5txmjkKhhQBRZVpYxoPYqQe/yxc11TCcGVmrbC1TByr9XEdHe2rdmTpTEaq76Juygp8naRUmY+78w4t/lyafikz/qHhYUPbEHyL+0ujt2bIgmspxChWcVwWyMdFtqqfUPvIg2lybku8mjgK4MDxDvDnWTs26iLP4XRFCGWsFqNGiUvn+SLMUwkIVHf4hOEkBQLjIzrp4u/nTN/VH2F/fApc777dl5jpU4gbNu2Vd65+AxTE+au/jV/2NBOAtN6aAuiissSPFbm4DVgYN+wfgN7NiavPy3Gygpir6R/OGnssBEj+yueRp9J5yuiqnrGw6fpiKEDPh3c21eJPbkS79y+d2hYR1XaY0p3Z/21eoPbuhHwuvd3RFNStub7fU8fZaP5BJ005eUUr/lu74uMPL4YSVrx2c7MiG07VyyZvXzNpglBkvuJsUT36Su+m/Xdkl9+7OOqe3zjQFpgxKaFc2d9v2b7KBfUw0zrlT9OOZUpbORjx522mhjprPgrj8Qy7oKRCapKNOk9eGif7l+M74Znpr3QYE8TL9m36xPas6NDWno59WDd1TrDO3gIoLnfnYznBSs3ns4vKEXNjRo9/Wneqt9itFo9X0yInDy9J82etnjF5uZl52Nf6CXceK44lyYkUpIb3DiB+wbP+eab5T8vrZ93aNtV88EFKTl0OIEMHTV88CejfHMvnbtlMOVW6QylpTlyj7C2LZvVdiwwsi/uxtdt3twRr2FNXGOChvKiAxgu4RMmDKOldCl8wlrpk00RaxZ+O69nj4+XX87TJG2p03V5PlfwcFzTVruTH2/85ddFi+b37fbRvEMZmDJwXEfD99NXH7/2hObq4GxhyvKvx0+YvmDO/DmpupJlgQ06TVv905KdaYW5HzfrcdXIPjz4s89Hc6N3/zF3XHiX0Qvv579cvSbqOV3y29JfUsq4TZgYM69Fr012HtyjMep0aC9fT3gg8WtWdvvyybj4B3l6jDs4oYnDcdjC8WHeUoLFCFwS5MpGxl48fzfPW555NE7TprUvjsGU8e6wjPZ0JBrzfBI1tkRatOkHPoFhQrEu/sDO33/fEvH79q0HrpSJrWZ47j9zAjPoqcGjv0EniChbfSv+euj4sS10hoqpozrUhoa068knT8fcznP/pF0tDBfIZXj6rSdFuS+eUWx57jMdXxPLyS0uK82OPXsp+VEh+rS6nbuWJJ04FXVR0M4/NvbF+ElB3Hdh+90x8I9Skh6Wqiv2PUdMivf9EcsnMMOOJX81/WSxn+VEFHEPbPnk4G+/7Dn5uEiHGkjiHvghGTd5ybZLadlcHzHd20ALZGDnRWN6OgoN5uHLqJ9sW7m/QdhHCu4alpmpqj477vTZyN3J3qH9mztifh27lSWfPHX4AhZS/8rZp6PHt4bmfrd27EsgJVXuwhcWaVPvZ/EJDjfKDcUZmWVyT5mAJQQvkk5v5iaErb9vO/icFFvmDhadTxqLsl5qHHzdLVGFpuRJGdOkkQotBjTxVmsLKOaVzqBU+RAlR+Mu3iqkPAqvxmZ6tKhrV+OauMYEDSyrq75rUfuyFL9sTeE9dsKMZSt+XjWk1va/klRt+3bXHTqcjuni91zynDqgdZ0vpk5buvTnrZPcopYe1WD2k36NWtlfvubL/t2mHESxYcLaifHKERs3/LTyx58ay3CJUuHbsu+3i8cEimhSoeAiALFYLq7d/dMJq7bvGF106NcY/ddzhniL7CcvmtlCjr4r7lsozb27Ia585ldhtfBylMQxY56aNT67kq/yET+9vGHH/hxusjJNHBiG+haCwoaWXXv3D209cFDn9OP36/ZsuGf5khnfR9wo5ErBO8BijK4yrOPgOFOq5pdROYPbefrVC6gbEOBf19MO565EvQbO0IqAUIcnt6+WY0lxt/p81ExY9saQgYMLver61XZWlmSnXkg3YFKX0eGdso5s/2HHBYMIzRiVY9ArpN+gHo3ZZ7e3bN165ale6BEyNrxbaNiw/nXzSVf3xLU/TZ63+sRD66tr4D9HGWhTNFgJjccyLTdgTfRFWUKBo9WDUyzr3KTvib3zsIRNXXt8djqDJpR+S/ZETqyTM2NQ90+23TPX4kd1xaaNJbu2/K0aMrm1j6Tqp6EgxbFhAz+llHpw/dITLUa4tZ3wSffQnkOHNyo0SJ1TNq+cPG/VkVQY/++Mtkxf7QDNMCxFVw7ekucPBoW2b919hKDDmDauQiPLSuzdA9GE4O8fGOhBGs0zAq58cDSkfUizDycIP5072gvlcNlGg4GhJQrTia1MKjUfCKp3BlzWu1+frm1bf9K32ZFj6g4t8eULFs5fGZn1uuPYe6vGBA0iaXMWqzI144SEEH3AJxDGqDYYlPZiNvvmumVLZ02fuTTyGsGiA7LH/NFeW3fGRO1JH7AsXJl3e/265fOnzJyx/Y4QxYvcdkRNeo+PSTzU9PKCralZaRf1qob+JNo1/CNyLFnL2bRggYJMD09z35CoUMp0hQJtx/TX9A9TP06Vslk/L1u9/tgtVpO0fscpQiYQ1+/bJcCzy+iBjll5ao3lmpg1gVAqJQvv3aU79HJIOFBv5LerRrmfPZ7EfwB4SzguacidrPNJhKZkoWH8MncNmWwS2im0Y8cuHdt3CW0otZpNqiFk8kHNy9cdupaQ8SQs0J6y2uSrWJaQqxwbtmg3pEeD83G3UY7cL2Tpz4tWzw531eMqHz/zcQlNLCq/5m0a1e89anwHoTozvwiduopJUoZln44tcNE8vNtg4roFA2Kik/7x04CtPvBxIaWV5/6IkWaC2tXjE5giuLtj4XUUGVqgIwBqEqeAaWujjn3lMmr6PtQ/CIFdh2FzE8//cu+HkUdz+YpWcGNpfjkuvr9/7XerD5bSgnO7tt7LNm8SHUgkrh949xw2vLE+O/V+EaoskpAyPDc6Oqs2kXPT7/N1i4dfiam8/A3eUpuWfjRtOkWzUMgl7q78MyaI0t13w+7o+KsJEZO7oBmeZRjnes06ogmhU2iHdu1dKNo09NhS786RkfsTrl/aMjHUFA9wk75ArlCR+scvuRqZT7LFUlnFzSkrOCEUkaQkLSm12ZBuj4/FDZ+/cE6Ll8cvW1/teN/VmKBBrOoukqMW4g+gLEuJlWFCMsCUolPOXrx0+uDe+7WGt7VLPr5vX5bvgqUzQnxqmadXvzEzGxxYurKk1exWsjsnDmxMVE37cX6POs5oBjCqb6/edebOvfs3Thy9LnR0UXgMnNHx5qZFMakvM9POPNOhj8O50W1NKJJc3L3rWm5O4p8Rt8Sd2vlirIjS65/fv8kNfBO3VoNmTxk/b+aksd0b4YoWY0eFdetc35h69Hhy+tm/T2tdPV3J7I2rNt18+eqEUJx0t6BHI6WWwZny8nJNOU4qTXEIeGs4bj9mDkHyD6uh0S7yDrAf9605aWak+Q5WbXKpBgWboWM+fbLqy8f2IzyszkUJgs58eC8t9U5KSrqWz8MKnyRfvJ1TlJl28kJa/ea+GGa4fiHldmZm/LE/o7M9P+pRuzDx0I+bzxnwsnNHrj3KfZl0KvIaLfXyqGVqd+2JXVcafjbIRUBhxjKstJwga8qj1u+7gIa1+4aHUAZLi1N0aPemvQa3MaW4I0HbeT8GXFowctaq8zdT4w9t3pdKP7584OCl63du3YhJfuZf10OTdXPH0XN3796JjT5LKwI9Ko8+FViBne9nE8fP+nrS4ol9FUJjaPjoeuS9n1dtfVhUdCQ6+Wl+yY2446mYwsvLwVRfd2ZvYuDocA+hAWO45sYk4oqb6uAtDQhrHtLGn7acDFCUcWDv5n7eleeEhFDsXttBZpoczDksUzFFVz6xxkqUnp6e3AOB3O0jy3AknTv6qa4djHqUnrIjoahRq1bSvISf1u19XuUOGIfVPbhbbNfeRWTAWLocKyijpZIqwet7rsYEDagVZc5fSR3HEiI/Qhwod11AOnxsaVqh4OHur1ef/GrN6jYk1rzfiGD1vgGfL/ugdSs/VwVXLmrXf7AwpFuQI4Y1/Gj4SPLMoOELnYPreXs5iFX2dErU5C8mTPs9/cs/Tgz0xhzC1kTO8F41ZejYHy8aSamTr48bd1MC7SqRh7cn95w7TdNh4XVj5/SeeXzYlvPhPiiiCZ47s9HS2esLLbvTHE6SErFcqXJ1tuMuS3h2+mFkw+Rj+89muEycNtSONBpp/mqXQCR1ceafkc6/fJgI6qnEsEa9wtMP/rIkjhw+qL7A+uQYvAVJo9auv50g23QV+tZT9Bzi8muUwN6JL8PwWh4edmJ+CiDEKjdX8zyOSD18vfiflBOQXj4e3APxzsGzmrl3Gt5VhKYLB3dXey52cPZySNy8+Iuvpn0+ZuNzU3VErJAkR+9cse040aTfzBAXtG1C+3D/1j2nHsu/Xji2DoEZGcbIPVErMRZc3fLb9iPXNL2//CbYQ4h6tzbjeXm7zk0lmGvHfq2f7ZkecWlUeCs0GvhNg7eAZo+PR3dZtH5svabedep7jpvVf9qioZYphTtVYOVBG2MOBVM35k+dtuivGw52mEhs/HvFgvFT56V4jDq5orMUx9NjN4+ZMH3lBTbi3J9BpGVtE5nKyVHG3c+USNBUIMGkMmdnZzvUdXCMRu1Nqhy1KZvWRxy4ru0zcXrLWugDMV12jrZpcJAUcwru0T730PS1pwYNDIbmfldQ88yd2nPcyA51fV0a1fNY8f2gwf2CKttMZOfn5Wke5eZQgLRz87Q3/fALR+Tq7SkRoNEr86qN4gzTWlZ3O1hM0HrkhD5uLzbvjPPpP/XjxjKMG9d8qGHpDJwHx+P9ugSjCb/jwF6H1i7ZlRs0sG2tGtTKNek9DdWg79zctBULJmjXVzYkYu4Tr6v5GtaVrVmveC9qVe8z/ukb+pmTVVep8gmopDK7ymarlPD5VnWqbKVaCryFV3fl63K4I0ZF+3B/+BpWLWS1XsUSV8hlWJgLKpuaVy3DakNV1uc+DDf9MS9bPtiUrLZJ8B+q3PmvV71J/5n11irW5BvLqplf23qmcvSV+wfN/V9j3SwVS3zTWfa76WtF8Zu7ROUWOFwjVmza0oBcJt+0VuVI1dR7y/yehhpzpeFVFfu46s6uvuNR6RtqvoZ1ZWvWmbhQJJVU7reqq1hXRAl+wVyJX+a8bgWrOtUrW6fAW3h1V74ux/zPjHvRkiWBlqyXqy9VrMMzF1TUs6iWYbUh/qsZyjdHDPyyVekrmwT/oSq79TX+3Y623lrFEp9XWfb6jzSV8yVo2brS61cA74J1s1QsWb7yC6avFcWW0ldVaTQuZUlW5nOZfKpiwaRq6j1Xg680/B/hI02032pSOwMAAABvocZfafg/wgcKEDEAAAD4/waCBgAAAADYBIIGAAAAANgEggYAAAAA2ASCBgAAAADYBIIGAAAAANgEggYAAAAA2MT0nga13lj4jQC3/OIEAEBNQsu9v8/u2w8Tmt+BCwCwCenjH1l73KXoRD4N3qB91yYDRrehDLSXlxcfNNCFM4QQNABQA7EsrfBZnNWrFy6E97MB8C9IfPz3eU28ePQKnwZvENKt6aCx7WiKCxrg9gQAAAAAbAJBAwAAAABsYgoacNaIuWMYY8oBAAAAAKjC/MsTuGcaysv1OdnPFPgOIZaNcszFAIAawij3mZszeAgmgAchAfgXJN51ojw/v3IymU+DN2jeLqD/qGC5XOHk5MQFDShLpyvXG7hf3GiuAQCoSRg9LpfxywAAGzGMiDEIhAI+Cd7AaGRYBpPL5dwv8TYHDQAAAAAA/4C7tABBAwAAAABsAT89AQAAAACbQNAAAAAAAJtA0AAAAAAAm0DQAAAAAACbQNAAAAAAABtg2P8AlN3jx6t6GzEAAAAASUVORK5CYII="}}]);