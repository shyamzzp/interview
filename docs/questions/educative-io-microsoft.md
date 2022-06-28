---
tree_title: Educative-Microsoft
description: This will cover up the problems/questions from the Microsoft Educative course.
last_modified: 2022-06-22T12:03:49.349
---

# Educative-Microsoft

## Top coding questions to crack interview @Microsoft

<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 1. Find the missing number in a given array.

Given an array of positive numbers ranging from 1 to n, such that all numbers from 1 to n are present except one number x, find x. Assume the input array is unsorted.
<span class="tag-is-success">Arrays</span>

</div>

<div class="educative-microsoft-item">

```
Calculate the sum of all the elements of an array ranging from 1 to n. Then subtract the sum of all the elements of the array(given) from the sum of all the elements of the array ranging from 1 to n. The difference between the two is the missing number.

TC: O(n)
SC: O(1)

```

</div>

</div>

<hr />
<div class="educative-microsoft-container">
<div class="educative-microsoft-item pl0">

### 2. Determine if the sum of two integers is equal to a given value

Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists, and false if it does not.
<span class="tag-is-success">Arrays</span>

</div>
<div class="educative-microsoft-item">

```
Take hashmap for storing the elements in it. Iterate through the array and see if its corresponding value is present in the hashmap. If it is present, then return true, else add the element to the hashmap. 

TC: O(n)
SC: O(n)

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 3. Set columns and rows as zeroes

Given a two-dimensional array, if any element within is zero, make its whole row and column zero. Consider the matrix below.
<span class="tag-is-success">Arrays</span>

</div>
<div class="educative-microsoft-item">

```
Iterate through the matrix and if any element is zero, then set the corresponding row and column to zero. Meaning you will be setting the first row or first column to zero, later you will have to iterate the whole matrix again to see if the first row or first column is zero.

TC: O(n^2)
SC: O(1)

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 4. Add two integers

Given the head pointers of two linked lists where each linked list represents an integer number (each node is a digit), add them and return the resulting linked list. In the example below, the first node in a list represents the least significant digit.
<span class="tag-is-success">Linked Lists</span>

</div>
<div class="educative-microsoft-item">

```
Thinking about the problem you will get to know that the size of the two linked-list can be different. Its an easy problem if you consider taking extra space for the resultant linked-list. 

But if you don't take extra space, then you can solve it in O(n) time. Where n is the size of the largest linked-list. Along with it you can take a carry variable, at the end of the loop, if the carry is not zero, then add a new node to the resultant linked-list.

TC: O(n) : Max length of the two.
SC: O(1) : Space for carry variable.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 5. Merge two sorted linked lists

Write a function that takes two sorted linked lists and merges them. The function should return a single, sorted list made from splicing the nodes of the first two lists together.

For example, if the first linked list is 1 -> 2 -> 4 and the second linked list is 3 -> 5 -> 6, then the output would be 1 -> 2 -> 3 -> 4 -> 5 -> 6
<span class="tag-is-success">Linked Lists</span>

</div>
<div class="educative-microsoft-item">

```
Many methods to solve this problem : Using Dummy Node, Recursion, Iteration(Extra Space), Reversing The Lists. Good solution among these is using Dummy Node. You compare the first node of both the linked-lists and add the smaller one to the dummy node. You then add the next node of the smaller one to the dummy node and so on. Once there are no nodes to traverse in any of the list anymore, you return the dummy node with the leftover nodes from list.

TC: O(n+m) : Length of the two linked-lists.
SC: O(1) : Space for the dummy node.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 6. Level order traversal of binary tree

Given the root of a binary tree, display the node values at each level.
<span class="tag-is-success">Tree</span>

</div>
<div class="educative-microsoft-item">

```
Different ways to solve this problem : Using Recursion(DFS)+List to store the nodes at each level. You helper method can look like helper(root, level, list). Here, root is the root of the tree, level is the level of the current node, and list is the list of nodes at the current level.

TC: O(n) : Number of nodes in the tree.
SC: O(n) : Space for the list.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 7. Check a given binary tree for symmetry

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
<span class="tag-is-success">Tree</span>

</div>
<div class="educative-microsoft-item">

```
We can use recursion to solve the problem, you would pass left and right sub-child to the helper method and compare the values of the nodes. Edge-cases are when the left and right sub-child are null, we return false. 

If the left and right sub-child are not null and the values for the current sub-child is equal then we call the helper method again with their left and right sub-child. You helper method might look like boolean helper(TreeNode left, TreeNode right).

TC: O(n) : Number of nodes in the tree.
SC: O(1)

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 8. Reverse words in a sentence

Reverse the order of words in a given sentence.
Example: "sphinx of black quartz judge my vow" should output as "vow my judge quartz black of sphinx"
<span class="tag-is-success">String</span>

</div>
<div class="educative-microsoft-item">

```
Method that pops initially is that we will extract words from the sentence separated by space, then push it onto the stack and then pop it out of the stack to a StringBuilder and return it. But then we can eliminate stack usage once for all, so for the program we wont be needing extra space apart from the output string.

TC: O(n) : Number of words in the sentence.
SC: O(n) : Space for the output string.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 10. Find all palindrome substrings

Given a string, find all non-single letter substrings that are palindromes.
Example: An string input of "poppopo" would return "pop", "opo", "oppo", and "poppop".
<span class="tag-is-success">String</span>

</div>
<div class="educative-microsoft-item">

```
We can use a method to find the palindrome of a string which returns true/false for being a palindrome. We need to find all the strings that are of greater length than 1. But thinking more into the problem we can use Recursion and Sliding Window to solve the problem. 

So your helper method would look like int helper(String s, int start, int end) where it will run a loop from the start and the end condition to compare the characters at the index.

TC: O(n^2) : Number of characters in the string.
SC: O(1) : Space for the count variable and storing palindrome strings is not part of the SC.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 11. String segmentation

Given a dictionary of words and a large input string, find whether or not the input string can be completely segmented into the words of that dictionary.
Input: s = "leetcode", wordDict = ["leet","code"] Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
<span class="tag-is-success">String</span>

</div>
<div class="educative-microsoft-item">

```
We can use Recursion to solve the problem. We will iterate through the string and will be calculating if the current substring is a word in the dictionary. If it is, we will call the helper method again with the current substring and the rest of the string. If it is not, we will return false.

TC: O(2^n) : If we use the Recursion alone, if used with Memoization, then it will be O(n^2).
SC: O(n) : Space for the memoization table.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 12. Find the maximum single sell profit

Given a list of daily stock prices (integers for simplicity), return the buy and sell prices that will maximize the single buy/sell profit. If you can't make any profit, try to minimize the loss.
Input: prices = [7,1,5,3,6,4] Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
<span class="tag-is-success">DP</span>

</div>
<div class="educative-microsoft-item">

```
We can take two variables min=firstElement and max=0 and iterate through the array, if the current value is greater than the min then assign the max to the Math.max(max, diff(currentValue, min)). If the current value is less than the min, then assign the current value to the min.

TC: O(n) : Number of elements in the array.
SC: O(1) : Space for the variables.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 13. Length of longest subsequence

Given a one-dimensional integer array a of length n, find the length of the longest subsequence that increases before decreasing.
Input: a = [1,3,5,4,7] Output: 3
<span class="tag-is-success">DP</span>

</div>
<div class="educative-microsoft-item">

```
We will be using DP for the problem. Initialize a dp array of length n and iterate nested through the array and the recursive co-relation between the i and j will be dp[i] = Math.max(dp[i], 1 + dp[j]); when a[i] > a[j] and during the process we will also keep a count for the longest subsequence.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 14. Find the longest path in a given matrix

Given a n\*n matrix where all numbers are distinct, find the maximum length path (starting from any cell) such that all cells along the path are in increasing order with a difference of 1. Can move in all the four straight direction.
Input: mat[][] = {{1, 2, 9} {5, 3, 8} {4, 6, 7}} Output: 4 >> The longest path is 6-7-8-9. 
<span class="tag-is-success">DP</span>

</div>
<div class="educative-microsoft-item">

```
The idea is simple, we calculate longest path beginning with every cell. Once we have computed longest for all cells, we return maximum of all longest paths. One important observation in this approach is many overlapping sub-problems. Therefore this problem can be optimally solved using DP. 

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 15. Find the missing number in the array

Given an array of positive numbers ranging from 1 to n, such that all numbers from 1 to n are present except one number x, find x. The input array is not sorted.

<span class="tag-is-success">Math and Statistics</span>

</div>
<div class="educative-microsoft-item">

```
The idea is similar to the 1st Missing Number problem. We can use the sum of all numbers to find the missing number. The sum of all numbers is n*(n+1)/2. The sum of all numbers in the array is sum of all elements in the array. The difference between the two is the missing number.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 16. Find all sum combinations

Given a positive integer, target, print all possible combinations of positive integers that sum up to the target number.
For example, if we are given input '5', these are the possible sum combinations : \[[1, 4][2, 3] [1, 1, 3][1, 2, 2 ] [1, 1, 1, 2][1, 1, 1, 1, 1]]. The output will be in the form of a list of lists or an array of arrays. Each element in the list will be another list containing a possible sum combination.

<span class="tag-is-success">Math and Statistics</span>

</div>
<div class="educative-microsoft-item">

```
The idea is simple and can be solved using DFS. We will be using a helper function to print all the possible combinations. The helper function will be called with the current sum and the current list of numbers. Helper method will look like void combSum(int i,int a[],int t,List<Integer> ds). 

The idea is to check if the current sum is equal to the target. If it is, we will add the current list to the list of lists. If it is not, we will add the current number to the current list and call the helper method again with the current sum and the current list.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 17. Find the kth permutation

Given a set of n variables, find their kth permutation. Consider the following set of variables: {1, 2, 3, 4, 5, 6, 7, 8, 9}

<span class="tag-is-success">Math and Statistics</span>

</div>
<div class="educative-microsoft-item">

    The logic is as follows: For n numbers the permutations can be divided to (n-1)! groups, for n-1 numbers can be divided to (n-2)! groups, and so on. Thus k/(n-1)! indicates the index of current number, and k%(n-1)! denotes remaining index for the remaining n-1 numbers.
    We keep doing this until n reaches 0, then we get n numbers permutations that is kth. This is one hard problem so attaching solution for the same.

    TC: O(n) : Number of elements in the array.
    SC: O(n) : Used Array to store the numbers.

</div>

<div class="educative-microsoft-item width100perct">

```java showLineNumbers
public String getPermutation(int n, int k) {
    StringBuilder sb=new StringBuilder();
    ArrayList<Integer>al=new ArrayList<>();
    for(int i=1;i<=n;i++)al.add(i);
    k--;
    int[]fact={1,1,2,6,24,120,720,5040,40320,362880};
    while(n>0){
        int index=k/fact[n-1];
        k=k%fact[n-1];
        sb.append(al.get(index));
        al.remove(index);
        n--;
    } 
    return sb.toString();
}
```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 18. Rat in a Maze

Consider a rat placed in a square n\*n matrix at position (0, 0). Find all possible paths the rat can take to reach its destination (N-1, N-1) from its starting position.

The rat can move vertically and horizontally. Cells with a value of 1 can be traversed, while cells with a value of 0 cannot. The rat cannot visit a cell more than once.

<span class="tag-is-success">Backtracking</span>

</div>
<div class="educative-microsoft-item">

```
Idea behind the solution for the problem is simple using Backtracking. We will be using a helper function to print all the possible paths. There might be obstacle stated from the value of the cell as 0, if 0 then backtrack (meaning don't add the value to the path->arraylist).

If it is 0, we will not add the current cell to the path. If it is 1, we will add the current cell to the path. Likewise we will keep on traversing the matrix and calling the helper function for each cell.

TC: O(2^n) : Number of paths.
SC: O(n) : Where n is the number of paths. For this case we will have 2^n paths.

```

</div>

</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 19. Closest Meeting Point

Given N people on an MxM grid, find the point that requires the least total distance covered by all people to meet at that point.
Consider a 5x5 grid with 3 people; one at X(1,2), Y(4,2) and Z(3,3).

<span class="tag-is-success">Sort and Search</span>

</div>
<div class="educative-microsoft-item">

```
Hints for the given problem: Distance between two points and Centroid of a two-dimensional region.
Centroid is (x1+x2...)/n and (y1+y2...)/n.

```

</div>
</div>

<hr />
<div class="educative-microsoft-container">

<div class="educative-microsoft-item pl0">

### 20. Search for the given key in a two-dimensional matrix

We are given a two-dimensional array where all elements in any individual row or column are sorted. In such a matrix, we have to search or find the position of a given key.
Input: matrix = \[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 Output: true

<span class="tag-is-success">Sort and Search</span>

</div>
<div class="educative-microsoft-item">

```
We know that the the rows and columns are sorted. So we can use binary search to find the position of the key and also one more method is that we check the last element of the current row and check if that is greater than the key. If it is, then we can move to the next row. Like wise we will check the rows until we fine a row where the last element is less than the key. Then we just have to traverse that particular row and check if the key is present in that row, if not then check for the next row.

TC: O(log(m+n)) : Number of rows and columns.
SC: O(1) : No extra space required.

```

</div>
</div>

## References

<ul>
<li>

<https://www.educative.io/blog/microsoft-interview-coding-questions>

</li>

<li>

<https://v1.docusaurus.io/docs/en/doc-markdown>

</li>
<li>

<https://leetcode.com/problems/permutation-sequence/discuss/22507/%22Explain-like-I'm-five%22-Java-Solution-in-O(n)>

</li>

</ul>
