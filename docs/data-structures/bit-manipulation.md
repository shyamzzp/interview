---
tree_title: Bit Manipulation
description: This will cover the most of the topics that will be part of the Bit Manipulation.
last_modified: 2022-06-08T15:36:32.3632
---

# Bit Manipulation

## XOR Definition

A number XOR itself will become 0, any number XOR with 0 will stay unchanged.

```java showLineNumbers
class Solution {
    public int missingNumber(int[] nums) {
            int res = nums.length;
            for(int i=0; i<nums.length; i++){
                res ^= i;
                res ^= nums[i];
            }
            return res;
    }
}
```

## Power of Two

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.
An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

```java showLineNumbers
class Solution {
    public boolean isPowerOfTwo(int n) {
        return n>0 && (n&(n-1)) == 0;
    }
}
```

```java showLineNumbers
class Solution {
    public boolean isPowerOfTwo(int n) {
        return n>0 && Integer.bitCount(n) == 1;
    }
}
```

## Single Number

Given an integer array `nums` where every element appears **three times** except for one, 
which appears **exactly once**. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.

```java showLineNumbers
class Solution {
    public int singleNumber(int[] arr) {
        int ones = 0;
        int twos = 0;
        for (int value : arr) {
            ones = (ones ^ value) & ~twos;
            twos = (twos ^ value) & ~ones;
        }
        return ones;
    }
}
```

    // This problem can be translated to:
    //      For every bit position, we cancel any 3-time 1 and 3-time 0 to a 0
    //      Then we need to find equations that fits this: (assume we apply 3 1s)
    //               Zero 1      First 1     Second 1    Third 1
    // ones            0            1           0           0
    // twos            0            0           1           0
