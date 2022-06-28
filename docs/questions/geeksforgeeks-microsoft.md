---
tree_title: GeeksforGeeks-Microsoft
description: This will cover up the problems/questions from the Microsoft GeeksforGeeks website.
last_modified: 2022-06-22T12:03:49.349
---

# GeeksforGeeks-Microsoft

## Top coding questions to crack interview @Microsoft

<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### 1. Check if a Binary Tree is BST or not

A binary search tree (BST) is a node based binary tree data structure which has the following properties. 

-   The left subtree of a node contains only nodes with keys less than the node's key.
-   The right subtree of a node contains only nodes with keys greater than the node's key.
-   Both the left and right subtrees must also be binary search trees.

<span class="tag-is-success">Binary Tree</span><span class="tag-is-success">BST</span>

</div>
<div class="geeksforgeeks-microsoft-item">

```
The idea behind the simple approach is that we can calculate the inorder traversal of the tree and check if the inorder traversal is sorted or not. But it will use space for the same, but we can avoid the same, while doing In-Order traversal, we can keep track of previously visited node. If the value of the currently visited node is less than the previous value, then tree is not BST. 

TC: O(n) As we will be visiting all nodes of the tree.
SC: O(1) No extra space.

```

</div>
</div>

<hr />
<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### 2. Remove duplicates from a string (In-Place)

Given a string S, the task is to remove all the duplicates in the given string. 
<code>Input: S = "geeksforgeeks" Output: "geeksfor"</code>
<br/>
<span class="tag-is-success">String</span>

</div>
<div class="geeksforgeeks-microsoft-item">

    Possible methods to solve efficiently are using HashSet, LinkedHashSet(to maintain the order of the elements), using Sorting, using Alphabet Array to store the frequency of each letter. But these methods differ in either time or space complexity.

    HashSet: Time Complexity O(n) and Space Complexity O(n).

    LinkedHashSet: Time Complexity O(n) and Space Complexity O(n).

    Sorting: Time Complexity O(nlogn) and Space Complexity O(1).

    Alphabet Array: Time Complexity O(n) and Space Complexity O(n).

</div>
</div>

<hr />
<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### 3. Search in Rotated Array

An element in a sorted array can be found in O(log n) time via binary search. But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time.

<span class="tag-is-success">Array</span>

</div>
<div class="geeksforgeeks-microsoft-item">

    Can be done using Modified Binary Search. We can find the pivot by finding the first element which is greater than its next element. We can then use Binary Search to search for the element in the left half of the array. If the element is not found in the left half, then we can search for it in the right half.

[Binary Search Variations](/docs/data-structures/search-algorithms)

</div>
</div>

<hr />
<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### 4. Print last 10 lines of a big file or big string

Given some text lines in one string, each line is separated by '\\n' character. Print the last ten lines. If number of lines is less than 10, then print all lines.

<span class="tag-is-success">String</span>

</div>
<div class="geeksforgeeks-microsoft-item">

    The idea is simple around using the in-built methods of String to find the lastIndex of the DELIM ('\n') and set the target position to that particular position and repeat the process under while loop.

    1)Find the last occurrence of DELIM or '\n'.
    2)Initialize target position as last occurrence of '\n' and count as 0 , and do following while count < 10.
        2.1)Find the next instance of '\n' and update target position.
        2.2)Skip '\n' and increment count of '\n' and update target position.
    3)Print the sub-string from target position.

</div>
</div>

<hr />
<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### 5. Clone linked list with random pointer

You are given a Double Link List with one pointer of each node pointing to the next node just like in a single link list. The second pointer however CAN point to any node in the list and not just the previous node. Now write a program in O(n) time to duplicate this list. That is, write a program which will create a copy of this list. 

<span class="tag-is-success">Linked List</span>

</div>
<div class="geeksforgeeks-microsoft-item">

    The idea behind the problem is simple and can be done using two pointers, one to traverse the original list and another to traverse the copy list. We can use a hashmap to store the mapping of original node to its copy node.

    TC: O(n) As we will be visiting all nodes of the list.
    SC: O(n) For storing the mapping of original node's Random Pointer.

</div>
</div>

<hr />
<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### 6. Connect nodes at same level

Write a function to connect all the adjacent nodes at the same level in a binary tree. The input to the function will be the root of the tree.

<span class="tag-is-success">Binary Tree</span>

</div>
<div class="geeksforgeeks-microsoft-item">

    Simple problem and before proceeding to the solution, we need to understand the level order traversal of binary tree. The idea is to use a queue to store the nodes of a particular level and then connect the nodes of the next level. But with this method we will be using extra space to store all the nodes of the tree. We can use DFS to do it efficiently and without using extra space.
    TC: O(n) As we will be visiting all nodes of the tree.
    SC: O(n) For storing the nodes of the next level.(Queue)
    SC: O(1) If done using (DFS)

</div>
<div class="geeksforgeeks-microsoft-item width100perct">

```java showLineNumbers
class Solution {
    public Node connect(Node root) {
        dfs(root, null);        
        return root;
    }
    private void dfs(Node curr, Node next) {
        if (curr == null) return;
        curr.next = next;
        dfs(curr.left, curr.right);
        dfs(curr.right, curr.next == null ? null : curr.next.left);
    }
}
```

</div>
</div>

<hr />
<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### Lowest Common Ancestor in a Binary Tree

Given a binary tree (not a binary search tree) and two values say n1 and n2, write a program to find the least common ancestor. The lowest common ancestor between two nodes n1 and n2 is defined as the lowest node in T that has both n1 and n2 as descendants (where we allow a node to be a descendant of itself).

<span class="tag-is-success">Binary Tree</span>

</div>
<div class="geeksforgeeks-microsoft-item">

    One simple way to achieve this is traversing root to node1 and root to node2 and storing them in some array. Traverse both paths till the values in arrays are the same. Return the common element just before the mismatch. 

    Other solution without using the extra space would be to use DFS and the helper method would look like findLCA(Node node, int n1, int n2) and this will be done in a single traverse.

</div>
</div>

<hr />
<div class="geeksforgeeks-microsoft-container">
<div class="geeksforgeeks-microsoft-item pl0">

### Run Length Encoding and Decoding

Given an input string, write a function that returns the Run Length Encoded string for the input string.
For example, if the input string is "wwwwaaadexxxxxx", then the function should return "w4a3d1e1x6"

<span class="tag-is-success">String</span>

</div>
<div class="geeksforgeeks-microsoft-item">

    The idea behind solving the problem is simple that you pick the first character and append it to the string and keep a counter which equates the current character to the prev character and once the diff character occurs then append the counter to the resultant string and reset the counter and repeat the same problem until you find the end of the string.

</div>
</div>

## References

<ul>
<li>

<https://www.geeksforgeeks.org/microsofts-asked-interview-questions/?ref=lbp>

</li>

</ul>
