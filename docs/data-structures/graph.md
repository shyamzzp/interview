---
tree_title: Graph
description: This will cover the most of the topics that will be part of the Graph.
last_modified: 2022-06-08T15:36:32.3632
---

# Graph

## Detect Cycle in a Directed Graph.

```java showLineNumbers
class Solution {
    boolean isCyclicUtil(int i, boolean[] visited, boolean[] recursionStack) {
            // Mark the current node as visited and
            // part of recursion stack
            if (recursionStack[i]) return true;
            if (visited[i]) return false;
        
            visited[i] = true;
            recursionStack[i] = true;
        
            List<Integer> children = adj.get(i);
            for (Integer c : children){
                    if (isCyclicUtil(c, visited, recursionStack)){
                        return true;
                }
            recursionStack[i] = false;
            return false;
        }
        boolean isCyclic() {
            // Mark all the vertices as not visited and
            // not part of recursion stack
            boolean[] visited = new boolean[V];
            boolean[] recursionStack= new boolean[V];
        
            // Call the recursive helper function to
            // detect cycle in different DFS trees
            for (int i = 0; i < V; i++) if (
                isCyclicUtil(i, visited, recursionStack)
            ) return true;
        
            return false;
        }
}
```
