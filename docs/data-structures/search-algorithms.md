---
tree_title: Search Algorithms
description: This will cover the most of the topics that will be part of the Search Algorithms.
last_modified: 2022-06-08T16:53:14.5314
---

# Search Algorithms

## Binary Search

**Binary Search** is a **searching algorithm** used in a **sorted array** by repeatedly dividing the search interval in half.
The idea of binary search is to use the information that the array is sorted and reduce the time complexity to `O(log n)`.

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Contains (True or False)

```java
int contains(int low, int high, int target) {
    int ans = 0;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        low = mid + 1;
        } else if (midVal > target) {
        high = mid - 1;
        } else if (midVal == target) {
        ans = 1;
        break;
        }
    }
    return ans;
}

// Input : 2 3 3 5 5 5 6 6
// Function : Contains(4)
// Returns : False

// Function : Contains(5)
// Returns : True
```

</div>
<div class="section-item pl0">

### Index of target element in Sorted Rotated Array

```java
int search(int[] A, int target) {
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

// Input : A = [4,5,6,7,0,1,2], target = 0
// Returns : -1
```

</div>
</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Index of first occurrence of a key

```java
int first(int low, int high, int target) {
    int ans = -1;
    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        low = mid + 1;
        } else if (midVal > target) {
        high = mid - 1;
        } else if (midVal == target) {
        ans = mid;
        high = mid - 1;
        }
    }
    return ans;
}

// Input : 2 3 3 5 5 5 6 6
// Function : first(3)
// Returns : 1

// Function : first(5)
// Returns : 3

// Function : first(4)
// Returns : -1
```

</div>
<div class="section-item">

### Index of last occurrence of a key

```java
int last(int low, int high, int target) {
    int ans = -1;
    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        low = mid + 1;
        } else if (midVal > target) {
        high = mid - 1;
        } else if (midVal == target) {
        ans = mid;
        low = mid + 1;
        }
    }
    return ans;
}

// Input : 2 3 3 5 5 5 6 6
// Function : last(3)
// Returns : 2

// Function : last(5)
// Returns : 5

// Function : last(4)
// Returns : -1
```

</div>
</div>

<div class="section-container pl0 pr0">
<div class="section-item">

### Index of greatest element less than key

```java
int leastgreater(int low, int high, int target) {
    int ans = -1;

    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        low = mid + 1;
        } else if (midVal > target) {
        ans = mid;
        high = mid - 1;
        } else if (midVal == target) {
        low = mid + 1;
        }
    }
    return ans;
}

// Input : 2 3 3 5 5 5 6 6
// Function : leastGreater(2)
// Returns : 1

// Function : leastGreater(5)
// Returns : 6

```

</div>

<div class="section-item">

### Index of least element greater than key

```java
int greatestlesser(int low, int high, int target) {
    int ans = -1;

    while (low <= high) {
        int mid = low + (high - low + 1) / 2;
        int midVal = a[mid];

        if (midVal < target) {
        ans = mid;
        low = mid + 1;
        } else if (midVal > target) {
        high = mid - 1;
        } else if (midVal == target) {
        high = mid - 1;
        }
    }

    return ans;
}

// Input : 2 3 3 5 5 5 6 6
// Function : greatestLesser(2)
// Returns : -1

// Function : greatestLesser(5)
// Returns : 2
```

</div>
</div>
