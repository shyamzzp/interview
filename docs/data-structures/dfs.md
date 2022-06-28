---
tree_title: Depth First Search
description: This will cover the most of the topics that will be part of the Depth First Search.
last_modified: 2022-06-08T15:36:32.3632
---

# DFS (Depth First Search)

## Introduction

➡️ Depth–first search (DFS) is an algorithm for traversing or searching tree or graph data structures.<br/>
➡️ One starts at the root (selecting some arbitrary node as the root for a graph) and explore as far as possible along each branch before backtracking.<br/>

## Implementation of DFS

➡️ Both the below implementations are same. <br/>
➡️ The only difference is, the first one uses Stack which you can visualize better <br /> and for the second case, how the internal stack is used. <br/>
➡️ Both are the In-order Traversal of a Binary Tree.<br/>


<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Using Stack
```java
public class Solution{
    public void dfs(Node root){
        Stack<Node> stack = new Stack<>();
        Node current = root;
        while(current != null || !stack.isEmpty()){
            if(current != null){
                stack.push(current);
                current = current.left;
            }else{
                current = stack.pop();
                System.out.println(current.data);
                current = current.right;
            }
        }
    }
}
```
</div>
<div class="section-item">

### Using Recursion
```java
public class Solution{
    public void dfs(Node root){
        if(root == null) return;
        dfs(root.left);
        System.out.println(root.data);
        dfs(root.right);
        
    }
}
```
</div>
</div>




## Common Problems (Frequently Asked Questions)

### Binary Tree Paths

```java showLineNumbers
class Solution {

    public List<String> binaryTreePaths(TreeNode root) {
        List<List<Integer>> paths = new ArrayList<List<Integer>>();
        // Edge case
        if (root == null) {
            return new ArrayList<String>();
        }
        List<Integer> path = new ArrayList<>();
        dfsMethod1(root, path, paths);
        // or
        //dfsMethod2(root, path, paths);
        System.out.println(paths);
        return new ArrayList<String>();
    }

    private void dfsMethod1(TreeNode node,List<Integer> path,List<List<Integer>> paths) {
        if (node == null) return;
        path.add(node.val);
        if (node.left == null && node.right == null) {
            paths.add(new ArrayList<>(path));
        }
        dfs(node.left, path, paths);
        dfs(node.right, path, paths);
        path.remove(path.size() - 1);
    }

    //Alternative : You don't need to check the initial null condition, If all the recursive call
    //are made only when the node's left and right is not null.
    private void dfsMethod2(TreeNode node,List<Integer> path,List<List<Integer>> paths) {
        path.add(node.val);
        if (node.left == null && node.right == null) {
            paths.add(new ArrayList<>(path));
        }
        if (node.left != null) {
            dfs(node.left, path, paths);
        }
        if (node.right != null) {
            dfs(node.right, path, paths);
        }
        path.remove(path.size() - 1);
    }
}
```

### Path Sum

    Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
    Output: true
    Explanation: The root-to-leaf path with the target sum is shown.

    Input: root = [1,2,3], targetSum = 5
    Output: false
    Explanation: There two root-to-leaf paths in the tree:
    (1 --> 2): The sum is 3.
    (1 --> 3): The sum is 4.
    There is no root-to-leaf path with sum = 5.

    Input: root = [], targetSum = 0
    Output: false
    Explanation: Since the tree is empty, there are no root-to-leaf paths.

```java showLineNumbers
class Solution {
    boolean flag = false;
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root == null ) return false;
        if(targetSum-root.val == 0 && root.left == null && root.right == null) return true;
        return helper(root.left, targetSum-root.val) || helper(root.right, targetSum-root.val);
        
    }
    public boolean helper(TreeNode root, int sum){
        if(root == null) return false;
        if(sum-root.val == 0 && root.left == null && root.right == null) return true;
        return helper(root.left, sum-root.val) || helper(root.right, sum-root.val);
    }
}
```

### Same Tree

    Input: p = [1,2,3], q = [1,2,3]
    Output: true

    Input: p = [1,2], q = [1,null,2]
    Output: false

```java showLineNumbers
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p == null && q == null) return true;
        if(p == null && q != null || (p != null && q == null)) return false;        
        if(p.val == q.val) return true;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
```

<!-- ### Question on LeetCode with Tag - DFS

<span class="tag-is-success">Binary Tree Inorder Traversal</span>
<span class="tag-is-primary">Validate Binary Search Tree</span>
<span class="tag-is-info">Recover Binary Search Tree</span>
<span class="tag-is-primary">Same Tree</span>
<span class="tag-is-success">Symmetric Tree</span>
<span class="tag-is-info">Maximum Depth of Binary Tree</span>
<span class="tag-is-success">Balanced Binary Tree</span>
<span class="tag-is-primary">Minimum Depth of Binary Tree</span>
<span class="tag-is-success">Path Sum</span>
<span class="tag-is-info">Path Sum II</span>
<span class="tag-is-success">Flatten Binary Tree to Linked List</span>
<span class="tag-is-primary">Populating Next Right Pointers in Each Node</span>
<span class="tag-is-success">Populating Next Right Pointers in Each Node II</span>
<span class="tag-is-info">Binary Tree Maximum Path Sum</span>
<span class="tag-is-success">Sum Root to Leaf Numbers</span>
<span class="tag-is-primary">Surrounded Regions</span>
<span class="tag-is-success">Clone Graph</span>
<span class="tag-is-info">Binary Tree Preorder Traversal</span>
<span class="tag-is-success">Binary Tree Postorder Traversal</span>
<span class="tag-is-primary">Binary Tree Upside Down</span>
<span class="tag-is-success">Binary Tree Right Side View</span>
<span class="tag-is-info">Number of Islands</span>
<span class="tag-is-success">Course Schedule</span>
<span class="tag-is-primary">Course Schedule II</span>
<span class="tag-is-success">Design Add and Search Words Data Structure</span>
<span class="tag-is-info">Count Complete Tree Nodes</span>
<span class="tag-is-success">Invert Binary Tree</span>
<span class="tag-is-primary">Kth Smallest Element in a BST</span>
<span class="tag-is-success">Lowest Common Ancestor of a Binary Search Tree</span>
<span class="tag-is-info">Lowest Common Ancestor of a Binary Tree</span>
<span class="tag-is-success">Count Univalue Subtrees</span>
<span class="tag-is-primary">Binary Tree Paths</span>
<span class="tag-is-success">Graph Valid Tree</span>
<span class="tag-is-info">Alien Dictionary</span>
<span class="tag-is-success">Closest Binary Search Tree Value</span>
<span class="tag-is-primary">Closest Binary Search Tree Value II</span>
<span class="tag-is-success">Inorder Successor in BST</span>
<span class="tag-is-info">Serialize and Deserialize Binary Tree</span>
<span class="tag-is-success">Binary Tree Longest Consecutive Sequence</span>
<span class="tag-is-primary">Smallest Rectangle Enclosing Black Pixels</span>
<span class="tag-is-success">Minimum Height Trees</span>
<span class="tag-is-info">Binary Tree Vertical Order Traversal</span>
<span class="tag-is-success">Number of Connected Components in an Undirected Graph</span>
<span class="tag-is-primary">Longest Increasing Path in a Matrix</span>
<span class="tag-is-success">Reconstruct Itinerary</span>
<span class="tag-is-info">Largest BST Subtree</span>
<span class="tag-is-success">House Robber III</span>
<span class="tag-is-primary">Nested List Weight Sum</span>
<span class="tag-is-success">Flatten Nested List Iterator</span>
<span class="tag-is-info">Nested List Weight Sum II</span>
<span class="tag-is-success">Water and Jug Problem</span>
<span class="tag-is-primary">Find Leaves of Binary Tree</span>
<span class="tag-is-success">Mini Parser</span>
<span class="tag-is-info">Lexicographical Numbers</span>
<span class="tag-is-success">Longest Absolute File Path</span>
<span class="tag-is-primary">Evaluate Division</span>
<span class="tag-is-success">Sum of Left Leaves</span>
<span class="tag-is-info">Pacific Atlantic Water Flow</span>
<span class="tag-is-success">Battleships in a Board</span>
<span class="tag-is-primary">Path Sum III</span>
<span class="tag-is-success">Serialize and Deserialize BST</span>
<span class="tag-is-info">Island Perimeter</span>
<span class="tag-is-success">Concatenated Words</span>
<span class="tag-is-primary">The Maze</span>
<span class="tag-is-success">The Maze III</span>
<span class="tag-is-info">Find Mode in Binary Search Tree</span>
<span class="tag-is-success">The Maze II</span>
<span class="tag-is-primary">Most Frequent Subtree Sum</span>
<span class="tag-is-success">All Paths from Source Lead to Destination</span>
<span class="tag-is-info">Find Bottom Left Tree Value</span>
<span class="tag-is-success">Freedom Trail</span>
<span class="tag-is-primary">Find Largest Value in Each Tree Row</span>
<span class="tag-is-success">Minesweeper</span>
<span class="tag-is-info">Minimum Absolute Difference in BST</span>
<span class="tag-is-success">Construct Binary Tree from String</span>
<span class="tag-is-primary">Convert BST to Greater Tree</span>
<span class="tag-is-success">Diameter of Binary Tree</span>
<span class="tag-is-info">Boundary of Binary Tree</span>
<span class="tag-is-success">Number of Provinces</span>
<span class="tag-is-primary">Binary Tree Longest Consecutive Sequence II</span>
<span class="tag-is-success">Binary Tree Tilt</span>
<span class="tag-is-info">Array Nesting</span>
<span class="tag-is-success">Subtree of Another Tree</span>
<span class="tag-is-primary">Kill Process</span>
<span class="tag-is-success">Construct String from Binary Tree</span>
<span class="tag-is-info">Merge Two Binary Trees</span>
<span class="tag-is-success">Add One Row to Tree</span>
<span class="tag-is-primary">Average of Levels in Binary Tree</span>
<span class="tag-is-success">Find Duplicate Subtrees</span>
<span class="tag-is-info">Two Sum IV - Input is a BST</span>
<span class="tag-is-success">Print Binary Tree</span>
<span class="tag-is-primary">Maximum Width of Binary Tree</span>
<span class="tag-is-success">Equal Tree Partition</span>
<span class="tag-is-info">Path Sum IV</span>
<span class="tag-is-success">Trim a Binary Search Tree</span>
<span class="tag-is-primary">Second Minimum Node In a Binary Tree</span>
<span class="tag-is-success">Bulb Switcher II</span>
<span class="tag-is-info">Redundant Connection</span>
<span class="tag-is-success">Redundant Connection II</span>
<span class="tag-is-primary">Longest Univalue Path</span>
<span class="tag-is-success">Employee Importance</span>
<span class="tag-is-info">Number of Distinct Islands</span>
<span class="tag-is-success">Max Area of Island</span>
<span class="tag-is-primary">Number of Distinct Islands II</span>
<span class="tag-is-success">Accounts Merge</span>
<span class="tag-is-info">Flood Fill</span>
<span class="tag-is-success">Sentence Similarity II</span>
<span class="tag-is-primary">Closest Leaf in a Binary Tree</span>
<span class="tag-is-success">Network Delay Time</span>
<span class="tag-is-info">Contain Virus</span>
<span class="tag-is-success">Cracking the Safe</span>
<span class="tag-is-primary">Pyramid Transition Matrix</span>
<span class="tag-is-success">Convert Binary Search Tree to Sorted Doubly Linked List</span>
<span class="tag-is-info">Serialize and Deserialize N-ary Tree</span>
<span class="tag-is-success">Flatten a Multilevel Doubly Linked List</span>
<span class="tag-is-primary">Couples Holding Hands</span>
<span class="tag-is-success">Encode N-ary Tree to Binary Tree</span>
<span class="tag-is-info">Maximum Depth of N-ary Tree</span>
<span class="tag-is-success">N-ary Tree Preorder Traversal</span>
<span class="tag-is-primary">N-ary Tree Postorder Traversal</span>
<span class="tag-is-success">Swim in Rising Water</span>
<span class="tag-is-info">Minimum Distance Between BST Nodes</span>
<span class="tag-is-success">Is Graph Bipartite?</span>
<span class="tag-is-primary">Cheapest Flights Within K Stops</span>
<span class="tag-is-success">All Paths From Source to Target</span>
<span class="tag-is-info">Find Eventual Safe States</span>
<span class="tag-is-success">Binary Tree Pruning</span>
<span class="tag-is-primary">Making A Large Island</span>
<span class="tag-is-success">Sum of Distances in Tree</span>
<span class="tag-is-info">Similar String Groups</span>
<span class="tag-is-success">Keys and Rooms</span>
<span class="tag-is-primary">Loud and Rich</span>
<span class="tag-is-success">All Nodes Distance K in Binary Tree</span>
<span class="tag-is-info">Smallest Subtree with all the Deepest Nodes</span>
<span class="tag-is-success">Leaf-Similar Trees</span>
<span class="tag-is-primary">Possible Bipartition</span>
<span class="tag-is-success">Increasing Order Search Tree</span>
<span class="tag-is-info">Minimize Malware Spread</span>
<span class="tag-is-success">Minimize Malware Spread II</span>
<span class="tag-is-primary">Shortest Bridge</span>
<span class="tag-is-success">Range Sum of BST</span>
<span class="tag-is-info">Most Stones Removed with Same Row or Column</span>
<span class="tag-is-success">Flip Equivalent Binary Trees</span>
<span class="tag-is-primary">Regions Cut By Slashes</span>
<span class="tag-is-success">Univalued Binary Tree</span>
<span class="tag-is-info">Binary Tree Cameras</span>
<span class="tag-is-success">Flip Binary Tree To Match Preorder Traversal</span>
<span class="tag-is-primary">Distribute Coins in Binary Tree</span>
<span class="tag-is-success">Vertical Order Traversal of a Binary Tree</span>
<span class="tag-is-info">Smallest String Starting From Leaf</span>
<span class="tag-is-success">Cousins in Binary Tree</span>
<span class="tag-is-primary">Number of Enclaves</span>
<span class="tag-is-success">Sum of Root To Leaf Binary Numbers</span>
<span class="tag-is-info">Maximum Average Subtree</span>
<span class="tag-is-success">Maximum Difference Between Node and Ancestor</span>
<span class="tag-is-primary">Recover a Tree From Preorder Traversal</span>
<span class="tag-is-success">Path With Maximum Minimum Value</span>
<span class="tag-is-info">Coloring A Border</span>
<span class="tag-is-success">Escape a Large Maze</span>
<span class="tag-is-primary">Binary Search Tree to Greater Sum Tree</span>
<span class="tag-is-success">Maximum Level Sum of a Binary Tree</span>
<span class="tag-is-info">Flower Planting With No Adjacent</span>
<span class="tag-is-success">Two Sum BSTs</span>
<span class="tag-is-primary">Insufficient Nodes in Root to Leaf Paths</span>
<span class="tag-is-success">Tree Diameter</span>
<span class="tag-is-info">Smallest Common Region</span>
<span class="tag-is-success">Delete Tree Nodes</span>
<span class="tag-is-primary">Delete Nodes And Return Forest</span>
<span class="tag-is-success">Lowest Common Ancestor of Deepest Leaves</span>
<span class="tag-is-info">Sum of Nodes with Even-Valued Grandparent</span>
<span class="tag-is-success">Binary Tree Coloring Game</span>
<span class="tag-is-primary">Deepest Leaves Sum</span>
<span class="tag-is-success">Web Crawler</span>
<span class="tag-is-info">Validate Binary Tree Nodes</span>
<span class="tag-is-success">Balance a Binary Search Tree</span>
<span class="tag-is-primary">Kth Ancestor of a Tree Node</span>
<span class="tag-is-success">Critical Connections in a Network</span>
<span class="tag-is-info">Smallest String With Swaps</span>
<span class="tag-is-success">Sort Items by Groups Respecting Dependencies</span>
<span class="tag-is-primary">Where Will the Ball Fall</span>
<span class="tag-is-success">Distance to a Cycle in Undirected Graph</span>
<span class="tag-is-info">Web Crawler Multithreaded</span>
<span class="tag-is-success">Number of Closed Islands</span>
<span class="tag-is-primary">Find Elements in a Contaminated Binary Tree</span>
<span class="tag-is-success">Count Servers that Communicate</span>
<span class="tag-is-info">All Elements in Two Binary Search Trees</span>
<span class="tag-is-success">Jump Game III</span>
<span class="tag-is-primary">All Ancestors of a Node in a Directed Acyclic Graph</span>
<span class="tag-is-success">Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree</span>
<span class="tag-is-info">Number of Operations to Make Network Connected</span>
<span class="tag-is-success">Delete Leaves With a Given Value</span>
<span class="tag-is-primary">Maximum Product of Splitted Binary Tree</span>
<span class="tag-is-success">Longest ZigZag Path in a Binary Tree</span>
<span class="tag-is-info">Maximum Sum BST in Binary Tree</span>
<span class="tag-is-success">Linked List in Binary Tree</span>
<span class="tag-is-primary">Time Needed to Inform All Employees</span>
<span class="tag-is-success">Frog Position After T Seconds</span>
<span class="tag-is-info">Find a Corresponding Node of a Binary Tree in a Clone of That Tree</span>
<span class="tag-is-success">Check if There is a Valid Path in a Grid</span>
<span class="tag-is-primary">Count Good Nodes in Binary Tree</span>
<span class="tag-is-success">Minimum Time to Collect All Apples in a Tree</span>
<span class="tag-is-info">Course Schedule IV</span>
<span class="tag-is-success">Pseudo-Palindromic Paths in a Binary Tree</span>
<span class="tag-is-primary">Reorder Routes to Make All Paths Lead to the City Zero</span>
<span class="tag-is-success">Find All The Lonely Nodes</span>
<span class="tag-is-info">Clone Binary Tree With Random Pointer</span>
<span class="tag-is-success">Clone N-ary Tree</span>
<span class="tag-is-primary">Number of Nodes in the Sub-Tree With the Same Label</span>
<span class="tag-is-success">Find Root of N-Ary Tree</span>
<span class="tag-is-info">Number of Good Leaf Nodes Pairs</span>
<span class="tag-is-success">Move Sub-Tree of N-Ary Tree</span>
<span class="tag-is-primary">Detect Cycles in 2D Grid</span>
<span class="tag-is-success">Diameter of N-Ary Tree</span>
<span class="tag-is-info">Minimum Number of Days to Disconnect Island</span>
<span class="tag-is-success">Throne Inheritance</span>
<span class="tag-is-primary">Check If Two Expression Trees are Equivalent</span>
<span class="tag-is-success">Path With Minimum Effort</span>
<span class="tag-is-info">Lowest Common Ancestor of a Binary Tree II</span>
<span class="tag-is-success">Correct a Binary Tree</span>
<span class="tag-is-primary">Change the Root of a Binary Tree</span>
<span class="tag-is-success">Lowest Common Ancestor of a Binary Tree IV</span>
<span class="tag-is-info">Minimize Hamming Distance After Swap Operations</span>
<span class="tag-is-success">Tree of Coprimes</span>
<span class="tag-is-primary">Find Distance in a Binary Tree</span>
<span class="tag-is-success">Shortest Path in a Hidden Grid</span>
<span class="tag-is-info">Minimum Path Cost in a Hidden Grid</span>
<span class="tag-is-success">Longest Word With All Prefixes</span>
<span class="tag-is-primary">Count Sub Islands</span>
<span class="tag-is-success">Merge BSTs to Create Single BST</span>
<span class="tag-is-info">Last Day Where You Can Still Cross</span>
<span class="tag-is-success">Find All Groups of Farmland</span>
<span class="tag-is-primary">Operations on Tree</span>
<span class="tag-is-success">Find if Path Exists in Graph</span>
<span class="tag-is-info">Count Nodes Equal to Sum of Descendants</span>
<span class="tag-is-success">Smallest Missing Genetic Value in Each Subtree</span>
<span class="tag-is-primary">Count Nodes With the Highest Score</span>
<span class="tag-is-success">Valid Arrangement of Pairs</span>
<span class="tag-is-info">Detonate the Maximum Bombs</span>
<span class="tag-is-success">Find All People With Secret</span>
<span class="tag-is-primary">Step-By-Step Directions From a Binary Tree Node to Another</span>
<span class="tag-is-success">Maximum Employees to Be Invited to a Meeting</span>
<span class="tag-is-info">Create Binary Tree From Descriptions</span>
<span class="tag-is-success">Count Nodes Equal to Average of Subtree</span>
<span class="tag-is-primary">Longest Path With Different Adjacent Characters</span>
<span class="tag-is-info">Closest Node to Path in Tree</span> -->
