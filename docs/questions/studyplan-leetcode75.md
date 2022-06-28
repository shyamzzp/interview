---
tree_title: Leetcode 75 🚧
description: This will cover up the problems/questions from the Leetcode 75 - Study Plan.
last_modified: 2022-06-22T12:03:49.349
---

# Leetcode 75 🚧

## Top coding questions from Leetcode 75 Study Plan

<div class="leetcode75-container">
<div class="leetcode75-item pl0">

### Level 1.1 Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

```java showLine Numbers
class Solution {
    public int[] runningSum(int[] nums) {
    }
}
```

Input: nums = [1,2,3,4] | Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
<span class="tag-is-success">Prefix Sum</span>

</div>
<div class="leetcode75-item">

```java
Very easy problem to solve using prefix sum. You can keep a global variable for the sum and keep on iterating through the array and adding the current element to the sum. Along with that you don't need to take any extra space as you can assign the element to the array itself.

```

</div>
</div>

<hr />
<div class="leetcode75-container">
<div class="leetcode75-item pl0">

### Level 1.2 Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.

Input: nums = [1,7,3,6,5,6] Output: 3
Explanation: The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
<span class="tag-is-success">Prefix Sum</span>

</div>
<div class="leetcode75-item">

```java
The idea behind solving the problem is simple you just have to find the index where the left sum is equal to the right sum. So you can total the sum of every element from the array. 

Now iterate through the array and check whether the leftSum==sum-leftSum-currentElement if yes then that's your index to be returned, else just add the current element to the leftSum.
```

</div>
</div>

## References

<ul>
<li>

<https://leetcode.com/study-plan/leetcode-75/>

</li>

</ul>
