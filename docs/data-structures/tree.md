---
tree_title: Tree
description: This will cover the most of the topics that will be part of the tree.
last_modified: 2022-06-08T15:36:32.3632
---

# Tree

## Tree Traversal - Inorder, Preorder and Postorder

### Pre-order Traversal

```java showLineNumbers
class Solution {
    void preorder(Node node) {
        if (node == null) return;
        // Traverse root
        System.out.print(node.item + "->");
        // Traverse left
        preorder(node.left);
        // Traverse right
        preorder(node.right);
    }
}
```

### In-order Traversal

```java showLineNumbers
class Solution {
    void inorder(Node node) {
        if (node == null) return;
        // Traverse left
        inorder(node.left);
        // Traverse root
        System.out.print(node.item + "->");
        // Traverse right
        inorder(node.right);
    }
}
```

### Post-order Traversal

```java showLineNumbers
class Solution {
    void postorder(Node node) {
        if (node == null) return;
        // Traverse left
        postorder(node.left);
        // Traverse right
        postorder(node.right);
        // Traverse root
        System.out.print(node.item + "->");
    }
}
```

## Level Order Traversal of Binary Tree

### Implementation using DFS

```java showLineNumbers
class Solution {

    public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<List<Integer>>();
    levelHelper(res, root, 0);
    return res;
    }

    public void levelHelper(List<List<Integer>> res, TreeNode root, int height) {
    if (root == null) return;
    if (height == res.size()) {
        res.add(new LinkedList<Integer>());
    }
    res.get(height).add(root.val);
    levelHelper(res, root.left, height + 1);
    levelHelper(res, root.right, height + 1);
    }
}
```

### Implementation using BFS

```java showLineNumbers
public class Solution {

    public List<List<Integer>> levelOrder(TreeNode root) {
    Queue<TreeNode> queue = new LinkedList<TreeNode>();
    List<List<Integer>> wrapList = new LinkedList<List<Integer>>();

    if (root == null) return wrapList;

    queue.offer(root);
    while (!queue.isEmpty()) {
        int levelNum = queue.size();
        List<Integer> subList = new LinkedList<Integer>();
        for (int i = 0; i < levelNum; i++) {
        if (queue.peek().left != null) queue.offer(queue.peek().left);
        if (queue.peek().right != null) queue.offer(queue.peek().right);
        subList.add(queue.poll().val);
        }
        wrapList.add(subList);
    }
    return wrapList;
    }
}
```

## Height (Maximum Depth) of a Tree

```java showLineNumbers
class Solution {
    public static int height(Node root) {
    // base case: empty tree has a height of 0
    if (root == null) {
        return 0;
        }

    // recur for the left and right subtree and consider maximum depth
    return 1 + Math.max(height(root.left), height(root.right));
    }
}

// Time Complexity: O(N)
// Auxiliary Space: O(1)
```

## Minimum Depth of a Tree

```java showLineNumbers
class Solution {
    public static int minDepth(Node root) {
        if (root == null)    return 0;
        if (root.left == null)    return minDepth(root.right) + 1;
        if (root.right == null) return minDepth(root.left) + 1;
        return 1 + Math.min(minDepth(root.left),minDepth(root.right));
    }
}

// Time Complexity: O(N)
// Auxiliary Space: O(1)
```

## Deepest Leaves

```java showLineNumbers
class Solution {
    private int maxLevel = 0;

    public void deepestLeaves(TreeNode root) {
    if (root == null) return 0;
    helper(root, 0);
    }

    private void helper(TreeNode root, int level) {
    if (root == null) return;
    if (level > maxLevel) {
        maxLevel = level;
    }
    if (level == maxLevel) {
        // root.val is the deepest level's nodes.
    }
    helper(root.left, level + 1);
    helper(root.right, level + 1);
    }
}
// Output 7 and 8.

// Time Complexity: O(N)
// Auxiliary Space: O(1)
```

## Binary Tree Paths

```java showLineNumbers
public void printPathsRecur(Node node, int path[], int pathLen) {
    if (node == null) return;

    /* append this node to the path array */
    path[pathLen] = node.data;
    pathLen++;

    /* it's a leaf, so print the path that lead to here  */
    if (node.left == null && node.right == null) {
        printArray(path, pathLen);
    } else {
        /* otherwise try both subtrees */
        printPathsRecur(node.left, path, pathLen);
        printPathsRecur(node.right, path, pathLen);
    }
}
```

## Binary Search Tree Paths

```java showLineNumbers
public List<String> binaryTreePaths(TreeNode root) {
    List<String> answer = new ArrayList<String>();
    if (root != null) searchBT(root, "", answer);
    return answer;
}
private void searchBT(TreeNode root, String path, List<String> answer) {
    if (root.left == null && root.right == null) answer.add(path + root.val);
    if (root.left != null) searchBT(root.left, path + root.val + "->", answer);
    if (root.right != null) searchBT(root.right, path + root.val + "->", answer);
}
```

## Resources

-   [LeetCode](https://leetcode.com/problems/binary-tree-paths/)
