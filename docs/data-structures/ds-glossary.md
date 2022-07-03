---
tree_title: Data Structure Glossary
description: This will cover the most of the topics that will be part of the Data Structure Glossary.
last_modified: 2022-07-01T13:40:13.4013
---
# Data Structure Glossary
<!-- 
import {useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
export function ContigousArray(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        (isOpen?
        <div className="description-container">
            <div className="description-gray" onClick={(e) => {setIsOpen(!isOpen)}}></div>
            <div className="description">
                <button onClick={(e) => {alert('')}}>Button</button>
            </div>
        </div>:<span class="tag-is-success" onClick={(e) => {setIsOpen(!isOpen)}}>Read More</span>)
    );
}

export function SubsequenceArray(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        (isOpen?
        <div className="description-container">
            <div className="description-gray" onClick={(e) => {setIsOpen(!isOpen)}}></div>
            <div className="description">
                <button onClick={(e) => {alert('')}}>Button</button>
            </div>
        </div>:<span class="tag-is-success" onClick={(e) => {setIsOpen(!isOpen)}}>Read More</span>)
    );
}
-->

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Contiguous Array

Meaning : sharing a common border; touching. Part of the array whose index are adjacent.

```java
arr = [1,2,3,4,5,6,7,8,9,10]
arrContiguous = [4,5,6,7]  //length:4
```

<span class="tag-is-success" onClick={()=>{document.getElementsByClassName("description-container")[0].style.display = "block";}}>Read More</span>
</div>

<div class="section-item">


### Subsequence of an Array
A subsequence of an array is an ordered subset of the array's elements having the same sequential ordering as the original array.
```java
arr = [1,2,3,4,5,6,7,8,9,10]
arrSubsequence = [2,4,6,7,10]  //length:5
```
<SubsequenceArray/>
</div>
</div>

<div className="description-container">
<div className="description-gray" onClick={()=>{document.getElementsByClassName("description-container")[0].style.display = "none";}}></div>
<div className="description">

# Hello world
## This is the second heading.
</div>
</div>



## References
- <https://leetcode.com/problems/contiguous-array/>