---
tree_title: GeeksforGeeks Microsoft Set-1
description: Low level definition of terms used in design patterns.
last_modified: 2022-07-05T20:13:36.1336
---

# GeeksforGeeks Microsoft Set-1

## Easy

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Celebrity problem
In a party of N people, only one person is known to everyone. Such a person may be present in the party, if yes, (s)he doesn’t know anyone in the party. We can only ask questions like "does A know B? ". Find the stranger (celebrity) in the minimum number of questions.

</div>
<div class="section-item">

### Print numbers in given range of BST
Given two values k1 and k2 (where k1 < k2) and a root pointer to a Binary Search Tree. Print all the keys of the tree in range k1 to k2. i.e. print all x such that k1<=x<=k2 and x is a key of given BST. Print all the keys in increasing order. 
</div>
</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Roof to leaf path sum
Given a binary tree and a number, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals the given number. Return false if no such path can be found. 
</div>
<div class="section-item">

### Level order traversal
Level order traversal of a tree is breadth first traversal for the tree. 
</div>
</div>


<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Transform to sum tree
Given a Binary Tree where each node has positive and negative values. Convert this to a tree where each node contains the sum of the left and right sub trees in the original tree. The values of leaf nodes are changed to 0.
</div>
<div class="section-item">

### Delete middle of linked list
Given a singly linked list, delete the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the linked list should be modified to 1->2->4->5

If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.
If the input linked list is NULL, then it should remain NULL.
</div>
</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### K distance from root
Given a root of a tree, and an integer k. Print all the nodes which are at k distance from root. 
For example, in the below tree, 4, 5 & 8 are at distance 2 from root. 
</div>
<div class="section-item">

### Find the element that appears once
Given an array where every element occurs three times, except one element which occurs only once. Find the element that occurs once. The expected time complexity is O(n) and O(1) extra space. 
</div>
</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Count Occurrences of anagrams
Anagram Substring Search (Or Search for all permutations)
Given a text <mark>txt[0..n-1]</mark> and a pattern <mark>pat[0..m-1]</mark>, write a <mark>function search(char pat[], char txt[])</mark> that prints all occurrences of pat[] and its permutations (or anagrams) in txt[]. 

You may assume that <mark>n > m</mark>. Expected time complexity is <mark>O(n)</mark>

![](2022-07-05-21-22-00.png)
</div>
<div class="section-item">

### Remove all duplicates from a given string
Given a string, remove all the duplicates and print the string. For example, if the input string is "abbbcddd", the output string should be "abcd".

![](2022-07-05-21-24-49.png)
</div>
</div>

## References

- <https://www.geeksforgeeks.org/microsofts-most-frequently-asked-interview-questions-set-2/>
- <https://www.javatpoint.com/java-program-to-remove-duplicate-characters-from-a-string>