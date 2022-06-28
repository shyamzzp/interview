---
tree_title: Search Algorithms
description: This will cover the most of the topics that will be part of the Search Algorithms.
last_modified: 2022-06-08T16:53:14.5314
---

# Search Algorithms

## Binary Search

**Binary Search** is a **searching algorithm** used in a **sorted array** by repeatedly dividing the search interval in half. 
The idea of binary search is to use the information that the array is sorted and reduce the time complexity to `O(log n)`.

### Contains (True or False)

```java showLineNumbers
class Solution {

    int contains(int low, int high, int target) {
    int ans = 0;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        // If mid is less than target, all elements
        // in range [low, mid] are also less
        // so we now search in [mid + 1, high]
        low = mid + 1;
        } else if (midVal > target) {
        // If mid is greater than target, all elements
        // in range [mid + 1, high] are also greater
        // so we now search in [low, mid - 1]
        high = mid - 1;
        } else if (midVal == target) {
        // Comparison added just for the sake
        // of clarity if mid is equal to target, we
        // have found that target exists in array
        ans = 1;
        break;
        }
    }
    return ans;
    }
}

// Input : 2 3 3 5 5 5 6 6
// Function : Contains(4)
// Returns : False

// Function : Contains(5)
// Returns : True
```

### Index of first occurrence of a key

```java showLineNumbers
class Solution {

    int first(int low, int high, int target) {
    int ans = -1;
    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        // If mid is less than target, all elements
        // in range [low, mid] are also less
        // so we now search in [mid + 1, high]
        low = mid + 1;
        } else if (midVal > target) {
        // If mid is greater than target, all elements
        // in range [mid + 1, high] are also greater
        // so we now search in [low, mid - 1]
        high = mid - 1;
        } else if (midVal == target) {
        // If mid is equal to target, we note down
        //  the last found index then we search
        // for more in left side of mid
        // so we now search in [low, mid - 1]
        ans = mid;
        high = mid - 1;
        }
    }
    return ans;
    }
}

// Input : 2 3 3 5 5 5 6 6
// Function : first(3)
// Returns : 1

// Function : first(5)
// Returns : 3

// Function : first(4)
// Returns : -1
```

### Index of last occurrence of a key

```java showLineNumbers
class Solution {

    int last(int low, int high, int target) {
    int ans = -1;
    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        // If mid is less than target, then all elements
        // in range [low, mid - 1] are also less
        // so we now search in [mid + 1, high]
        low = mid + 1;
        } else if (midVal > target) {
        // If mid is greater than target, then all
        // elements in range [mid + 1, high] are
        // also greater so we now search in
        // [low, mid - 1]
        high = mid - 1;
        } else if (midVal == target) {
        // If mid is equal to target, we note down
        // the last found index then we search
        // for more in right side of mid
        // so we now search in [mid + 1, high]
        ans = mid;
        low = mid + 1;
        }
    }
    return ans;
    }
}

// Input : 2 3 3 5 5 5 6 6
// Function : last(3)
// Returns : 2

// Function : last(5)
// Returns : 5

// Function : last(4)
// Returns : -1
```

### Index of greatest element less than key

```java showLineNumbers
class Solution {

    int leastgreater(int low, int high, int target) {
    int ans = -1;

    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];
        if (midVal < target) {
        // If mid is less than target, all elements
        // in range [low, mid - 1] are <= target
        // then we search in right side of mid
        // so we now search in [mid + 1, high]
        low = mid + 1;
        } else if (midVal > target) {
        // If mid is greater than target, all elements
        // in range [mid + 1, high] are >= target
        // we note down the last found index, then
        // we search in left side of mid
        // so we now search in [low, mid - 1]
        ans = mid;
        high = mid - 1;
        } else if (midVal == target) {
        // If mid is equal to target, all elements in
        // range [low, mid] are <= target
        // so we now search in [mid + 1, high]
        low = mid + 1;
        }
    }
    return ans;
    }
}

// Input : 2 3 3 5 5 5 6 6
// Function : leastGreater(2)
// Returns : 1

// Function : leastGreater(5)
// Returns : 6
```

### Index of least element greater than key

```java showLineNumbers
class Solution {

    int greatestlesser(int low, int high, int target) {
    int ans = -1;

    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        // If mid is less than target, all elements
        // in range [low, mid - 1] are < target
        // we note down the last found index, then
        // we search in right side of mid
        // so we now search in [mid + 1, high]
        ans = mid;
        low = mid + 1;
        } else if (midVal > target) {
        // If mid is greater than target, all elements
        // in range [mid + 1, high] are > target
        // then we search in left side of mid
        // so we now search in [low, mid - 1]
        high = mid - 1;
        } else if (midVal == target) {
        // If mid is equal to target, all elements
        // in range [mid + 1, high] are >= target
        // then we search in left side of mid
        // so we now search in [low, mid - 1]
        high = mid - 1;
        }
    }

    return ans;
    }
}

// Input : 2 3 3 5 5 5 6 6
// Function : greatestLesser(2)
// Returns : -1

// Function : greatestLesser(5)
// Returns : 2
```

### Index of target element in Sorted Rotated Array

```java showLineNumbers
class Solution {
    public int search(int[] A, int target) {
    int low = 0;
    int high = A.length - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (A[mid] == target) return mid;

        if (A[low] <= A[mid]) {
        if (target >= A[low] && target < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        } else {
        if (target > A[mid] && target <= A[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        }
    }
    return A[low] == target ? low : -1;
    }
}

// Input : A = [4,5,6,7,0,1,2], target = 0
// Returns : -1
```
