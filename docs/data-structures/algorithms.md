---
tree_title: Algorithms
description: This will cover the most of the topics that will be part of the Algorithms.
last_modified: 2022-06-08T16:35:30.3530
---

# Algorithms

## 0-1 Knapsack Problem

Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
You cannot break an item, either pick the complete item or don’t pick it (0-1 property).

### Knapsack Recursive

```java showLineNumbers
class KnapsackRecursive {
    static int knapSack(int W, int wt[], int val[], int n) {
    // Base Case
    if (n == 0 || W == 0) return 0;

    // If weight of the nth item is
    // more than Knapsack capacity W,
    // then this item cannot be included
    // in the optimal solution
    if (wt[n - 1] > W) return knapSack(W, wt, val, n - 1);
    // Return the maximum of two cases:
    // (1) nth item included
    // (2) not included
    else return max(
        val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
        knapSack(W, wt, val, n - 1)
    );
    }

    // Driver code
    public static void main(String args[]) {
    int val[] = new int[] { 60, 100, 120 };
    int wt[] = new int[] { 10, 20, 30 };
    int W = 50;
    int n = val.length;
    System.out.println(knapSack(W, wt, val, n));
    }
}

// Time Complexity : O(2^n)
// Auxiliary Space : O(1)
```

### Knapsack Recursive + Memoization

```java showLineNumbers
class KnapsackRecursiveMemoization{
    static int knapSackRec(int W, int wt[], int val[], int n, int[][] dp) {
    // Base condition
    if (n == 0 || W == 0) return 0;

    if (dp[n][W] != -1) return dp[n][W];

    if (wt[n - 1] > W) // Store the value of function call
    // stack in table before return
    return (
        dp[n][W] = knapSackRec(W, wt, val, n - 1, dp)
    ); else // Return value of table after storing
    return (
        dp[n][W] =
        max(
            (val[n - 1] + knapSackRec(W - wt[n - 1], wt, val, n - 1, dp)),
            knapSackRec(W, wt, val, n - 1, dp)
        )
    );
    }

    static int knapSack(int W, int wt[], int val[], int N) {
    int dp[][] = new int[N + 1][W + 1];
    // Loop to initially filled the table with -1
    for (int i = 0; i < N + 1; i++) for (int j = 0; j < W + 1; j++) dp[i][j] = -1;
    return knapSackRec(W, wt, val, N, dp);
    }

    // Driver Code
    public static void main(String[] args) {
    int val[] = { 60, 100, 120 };
    int wt[] = { 10, 20, 30 };
    int W = 50;
    int N = val.length;
    System.out.println(knapSack(W, wt, val, N));
    }
}

// Time Complexity: O(N*W). 
// Auxiliary Space: O(N*W).
```

## Unbounded Knapsack (Repetition of items allowed)

Given a knapsack weight W and a set of n items with certain value vali and weight wti, we need to calculate the maximum amount that could make up this quantity exactly. 
This is different from classical Knapsack problem, here we are allowed to use unlimited number of instances of an item.

```java showLineNumbers

class KnapsackDP {
    private static int unboundedKnapsack(int W, int n, int[] val, int[] wt) {
    // dp[i] is going to store maximum value
    // with knapsack capacity i.
    int dp[] = new int[W + 1];

    // Fill dp[] using above recursive formula
    for (int i = 0; i <= W; i++) {
        for (int j = 0; j < n; j++) {
        if (wt[j] <= i) {
            dp[i] = max(dp[i], dp[i - wt[j]] + val[j]);
        }
        }
    }
    return dp[W];
    }

// int W = 100;
// int val[] = { 10, 30, 20 };
// int wt[] = { 5, 10, 15 };
// int n = val.length;
// unboundedKnapsack(W, n, val, wt);

// Time Complexity: O(N*W). 
// Auxiliary Space: O(W).
```

```java showLineNumbers

// dp[i] = 0
// dp[i] = max(dp[i], dp[i-wt[j]] + val[j] 
//                    where j varies from 0 
//                    to n-1 such that:
//                    wt[j] <= i
// result = d[W]
```

## LRU Cache Implementation.

```java showLineNumbers
class Solution {
    int capacity;
    Queue<Integer> q = new ArrayDeque<>();
    Map<Integer, Integer> map = new LinkedHashMap<>();

    public LRUCache(int capacity) {
    this.capacity = capacity;
    }

    public int get(int key) {
    if (map.containsKey(key)) {
        q.remove(key); //O(n)
        q.offer(key); //O(1)
        return map.get(key); //O(1)
    } else return -1;
    }

    public void put(int key, int value) {
    if (map.containsKey(key)) {
        q.remove(key); //O(n)
        q.offer(key); //O(1)
        map.put(key, value); //O(1)
    } else {
        if (q.size() < capacity) q.offer(key); else { //q.size() == capacity
        map.remove(q.poll());
        q.offer(key);
        }
        map.put(key, value);
    }
    }
}
```

> _Here are some additional properties and implementation methods :_
>
> -   _LRU cache is can also be implemented by 
>     pairing a **doubly linked list** with a **hash map**._
> -   Space Complexity : `O(n)`
> -   Time Complexity :
>     -   **get least recently used item** `O(1)`
>     -   **access item** `O(n)`

```java showLineNumbers
class LRUCache {
    Set<Integer> cache;
    int capacity;

    public LRUCache(int capacity) {
    this.cache = new LinkedHashSet<Integer>(capacity);
    this.capacity = capacity;
    }

    public boolean get(int key) {
    if (!cache.contains(key)) return false;
    cache.remove(key);
    cache.add(key);
    return true;
    }

    public void put(int key) {
    if (cache.size() == capacity) {
        int firstKey = cache.iterator().next();
        cache.remove(firstKey);
    }
    cache.add(key);
    }

    public void display() {
    LinkedList<Integer> list = new LinkedList<>(cache);
    Iterator<Integer> itr = list.descendingIterator();
    while (itr.hasNext()) System.out.print(itr.next() + " ");
    }
}
```

## Longest Common Subsequence.

```java showLineNumbers
class Solution {

    void lcs(String S1, String S2, int m, int n) {
    int[][] LCS_table = new int[m + 1][n + 1];

    // Building the mtrix in bottom-up way
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
        if (i == 0 || j == 0) LCS_table[i][j] = 0; else if (
            S1.charAt(i - 1) == S2.charAt(j - 1)
        ) LCS_table[i][j] = LCS_table[i - 1][j - 1] + 1; else LCS_table[i][j] =
            Math.max(LCS_table[i - 1][j], LCS_table[i][j - 1]);
        }
    }
        // If you just want to get the length of the longest 
        // subsequence you can return LCS_table[m][n];
        // For printing the sequence.
    int index = LCS_table[m][n];
    int temp = index;

    char[] lcs = new char[index + 1];
    lcs[index] = '\0';

    int i = m, j = n;
    while (i > 0 && j > 0) {
        if (S1.charAt(i - 1) == S2.charAt(j - 1)) {
        lcs[index - 1] = S1.charAt(i - 1);

        i--;
        j--;
        index--;
        } else if (LCS_table[i - 1][j] > LCS_table[i][j - 1]) i--; else j--;
    }

    // Printing the sub sequences
    System.out.print("S1 : " + S1 + "\nS2 : " + S2 + "\nLCS: ");
    for (int k = 0; k <= temp; k++) System.out.print(lcs[k]);
    System.out.println("");
    }
}

// Time Complexity : O(n*m)
// Auxiliary Space : O(n*m + lengthOfLongestSequence)
```

## Merge K Sorted Linked List.

```java showLineNumbers
ListNode merge(ListNode[] heads) {
ListNode resultHead = null;
ListNode current = null;

PriorityQueue<ListNode> pq = new PriorityQueue<>(
    new Comparator<ListNode>() {

    @Override
    public int compare(ListNode o1, ListNode o2) {
        return o1.data - o2.data;
    }
    }
);

//insert all heads into priority queue
for (int i = 0; i < heads.length; i++) {
    if (heads[i] != null) {
    pq.offer(heads[i]);
    }
}

while (!pq.isEmpty()) {
    //extract the min from priority queue
    ListNode node = pq.poll();

    //add it to result Head
    if (resultHead == null) {
    resultHead = node;
    current = node;
    } else {
    current.next = node;
    current = current.next;
    }

    //add next List Node to priority queue
    if (node.next != null) {
    pq.add(node.next);
    }
}
return resultHead;
}
```

## Breadth-First Search (BFS) in 2D Matrix

```java showLineNumbers
class Solution {

  public void BFS(int[][] grid) {
    int h = grid.length;
    if (h == 0) return;
    int l = grid[0].length;

    boolean[][] visited = new boolean[h][l];

    Queue<String> queue = new LinkedList<>();

    queue.add(0 + "," + 0);

    System.out.println("Breadth-First Traversal: ");
    while (queue.isEmpty() == false) {
      String x = queue.remove();
      int row = Integer.parseInt(x.split(",")[0]);
      int col = Integer.parseInt(x.split(",")[1]);

      if (
        row < 0 || col < 0 || row >= h || col >= l || visited[row][col]
      ) continue;

      visited[row][col] = true;
      System.out.print(grid[row][col] + " ");
      queue.add(row + "," + (col - 1)); //go left
      queue.add(row + "," + (col + 1)); //go right
      queue.add((row - 1) + "," + col); //go up
      queue.add((row + 1) + "," + col); //go down
    }
  }
}

```

## Kadane’s Algorithm (Largest Sum of Contiguous Subarray)

```java showLineNumbers
class KadaneAlgo{
    int maxSubArraySum(int a[]) {
    int max_so_far = a[0], max_ending_here = a[0];

    for (int i = 0; i < a.length; i++) {
        max_ending_here = max_ending_here + a[i];
        max_so_far = Math.max(max_so_far,max_ending_here);
        if (max_ending_here < 0) max_ending_here = 0;
    }
    return max_so_far;
    }
}
```

## Boyer-Moore Voting Algorithm (Majority Element)

```java showLineNumbers
class Solution {
    public int majorityElement(int[] nums) {
        int count = 0;
        Integer candidate = null;
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }
        return candidate;
    }
}
// Time complexity : O(n)
// Space complexity : O(1)
```

> _The **Boyer-Moore voting** algorithm is one of the popular optimal 
> algorithms which is used to find the majority element among the 
> given elements that have more than N/ 2 occurrences. This works 
> perfectly fine for finding the majority element which takes 2 traversals 
> over the given elements, which works in O(N) time complexity 
> and O(1) space complexity._
> _Returns you the majority candidate not the 
> actual count of the element. For that you 
> have to use another algorithm._

## Brian Kernighan’s Algorithm (Count set bits in an integer)

```java showLineNumbers
class Solution {
    int countSetBits(int n) {
        int count = 0;
        while (n > 0) {
            n &= (n - 1);
            count++;
        }
        return count;
    }
}
// Time complexity : O(log n)
// Space complexity : O(1)
```

> _The **Boyer-Moore voting** algorithm is one of the popular optimal 
> algorithms which is used to find the majority element among the 
> given elements that have more than N/ 2 occurrences. This works 
> perfectly fine for finding the majority element which takes 2 traversals 
> over the given elements, which works in O(N) time complexity 
> and O(1) space complexity._

> _Returns you the majority candidate not the 
> actual count of the element. For that you 
> have to use another algorithm._
