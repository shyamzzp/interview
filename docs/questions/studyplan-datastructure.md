---
tree_title: Leetcode Data Structure 🚧
description: This will cover up the problems/questions from the Leetcode 75 - Study Plan.
last_modified: 2022-06-22T12:03:49.349
---

# Leetcode Data Structure 🚧

## Top coding questions from Data Structure Study Plan

<div class="datastructure-container">
<div class="datastructure-item pl0">

### Day 1.1 Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

```java showLine Numbers
class Solution {
    public boolean containsDuplicate(int[] nums) {
    }
}
```

Input: nums = [1,2,3,1] Output: true
<span class="tag-is-success">Array</span>
<span class="tag-is-success">Hash-Table</span>
<span class="tag-is-success">Sorting</span>

</div>
<div class="datastructure-item">

```java
This is an easy problem and can be done using Set or Hash-Table, ofc using extra space. The problem can also be solved using Sorting but the complexity will be O(nlogn), which is higher than O(n), but the space will be O(1).

TC : O(nlogn) SC : O(1) Through Sorting.
TC : O(n) SC : O(n) Through Hash-Table/Hash-Set.

```

</div>
</div>

<hr />
<div class="datastructure-container">
<div class="datastructure-item pl0">

### Day 1.2 Maximum Sub-array

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

```java showLineNumbers
class Solution {
    public int maxSubArray(int[] nums) {
    }
}
```

Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
<span class="tag-is-success">Prefix Sum</span>

</div>
<div class="datastructure-item">

```java
The idea is simple around the problem to take two variable globalMax and currentMax. The globalMax is the max sum of the whole array. The currentMax is the max sum of the subarray till now. 

The currentMax will be updated by adding the current element to the currentMax, if the currentMax>0. If the currentMax is negative, then the currentMax=nums[i]. The globalMax will be updated by comparing the globalMax and currentMax.
```

</div>
</div>

## References

<ul>
<li>

<https://leetcode.com/study-plan/data-structure/>

</li>

</ul>
