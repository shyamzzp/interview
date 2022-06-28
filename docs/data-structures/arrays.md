---
tree_title: Arrays
description: This will cover the most of the topics that will be part of the Arrays.
last_modified: 2022-06-08T16:35:30.3530
---

# Arrays

## Array Creation/Initialization

### Arrays Initialized with a Size

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[5];
        arr[0] = 1;
        arr[1] = 2;
    }
}
```

### Arrays Initialized with a Size and Values

<div class="section-container pl0 pr0">
<div class="section-item pl0">

#### Method 1 - Using a Loop

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[5];
        arr[0] = 1;
        arr[1] = 2;
    }
}
```
</div>
<div class="section-item">

#### Method 2 - In-built Function

```java
public class Solution {
    public static void main(String[] args){
        int defaultValue = 0;
        int[] arr = new int[5];
        Arrays.fill(arr, defaultValue);
    }
}
```
</div>
</div>




### Dynamic Array

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
    }
}
```

### Convert Collection (List, ArrayList) to Array

<div class="section-container pl0 pr0">
<div class="section-item pl0">

#### Method - Iterative Method

```java
public class Solution {
    public static void main(String[] args){
        List<Integer> list = new ArrayList<Integer>();
        list.add(1); list.add(2); list.add(3); list.add(4);
        int[] arr = new int[list.size()];
        for(int i = 0; i < list.size(); i++){
            arr[i] = list.get(i);
        }
    }
}
```
</div>
<div class="section-item">

#### Method - In-built Function

```java
public class Solution {
    public static void main(String[] args){
        List<Integer> list = new ArrayList<Integer>();
        list.add(1); list.add(2); list.add(3); list.add(4);
        Integer[] arr = list.toArray(new Integer[list.size()]);
    }
}
```
</div>
</div>




### Convert Map to Array

#### Converting a Map's Keys and Values to an Array

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Map<Integer, String> map = new HashMap<Integer, String>();
        map.put(1, "One");
        map.put(2, "Two");
        map.put(3, "Three");

        Integer[] keys = map.keySet().toArray(new Integer[map.keySet().size()]);
        String[] values = map.values().toArray(new String[map.values().size()]);
    }
}

```

### Convert Set to Array

#### Method - Iterative Method

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Set<Integer> set = new HashSet<Integer>();
        set.add(1); set.add(2); set.add(3); set.add(4);
        int[] arr = new int[set.size()];
        int i = 0;
        for(Integer num : set){
            arr[i] = num;
            i++;
        }
    }
}

```

#### Method - In-built Function

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Set<Integer> set = new HashSet<Integer>();
        set.add(1); set.add(2); set.add(3); set.add(4);
        Integer[] arr = set.toArray(new Integer[set.size()]);
    }
}

```

### Convert Stack to Array

#### Method - Iterative Method

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(1); stack.push(2); stack.push(3); stack.push(4);
        int[] arr = new int[stack.size()];
        int i = 0;
        while(!stack.isEmpty()){
            arr[i] = stack.pop();
            i++;
        }
    }
}

```

#### Method - In-built Function

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Stack<Integer> stack = new Stack<Integer>();
        stack.push(1); stack.push(2); stack.push(3); stack.push(4);
        Integer[] arr = stack.toArray(new Integer[stack.size()]);
    }
}

```

### Convert Queue to Array

#### Method - Iterative Method

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(1); queue.add(2); queue.add(3); queue.add(4);
        int[] arr = new int[queue.size()];
        int i = 0;
        while(!queue.isEmpty()){
            arr[i] = queue.remove();
            i++;
        }
    }
}

```

#### Method - In-built Function

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(1); queue.add(2); queue.add(3); queue.add(4);
        Integer[] arr = queue.toArray(new Integer[queue.size()]);
    }
}
```

### Convert Deque to Array

#### Method - Iterative Method

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Deque<Integer> deque = new ArrayDeque<Integer>();
        deque.add(1); deque.add(2); deque.add(3); deque.add(4);
        int[] arr = new int[deque.size()];
        int i = 0;
        while(!deque.isEmpty()){
            arr[i] = deque.remove();
            i++;
        }
    }
}
```

#### Method - In-built Function

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        Deque<Integer> deque = new ArrayDeque<Integer>();
        deque.add(1); deque.add(2); deque.add(3); deque.add(4);
        Integer[] arr = deque.toArray(new Integer[deque.size()]);
    }
}
```

#### Covers

✅ Iterating over List.
✅ Creating an array of integers.
✅ <code>List.size()</code>, <code>List.get()</code>, <code>List.toArray()</code> methods.
✅ <code>Map.keySet()</code>, <code>Map.values()</code>, <code>Map.entrySet()</code> methods.
✅ <code>Set.toArray()</code> method.
✅ <code>Stack.pop()</code>, <code>Stack.isEmpty()</code>, <code>Stack.toArray()</code> methods.
✅ <code>Queue.remove()</code>, <code>Queue.isEmpty()</code>, <code>Queue.toArray()</code> methods.
✅ <code>Deque.remove()</code>, <code>Deque.isEmpty()</code>, <code>Deque.toArray()</code> methods.

### Convert String of Digits to an Array

#### Method 1

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        String str = "12345";
        int[] arr = new int[str.length()];
        for(int i = 0; i < str.length(); i++){
            arr[i] = str.charAt(i) - '0';
        }
    }
}
```

#### Method 2

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        String str = "12345";
        Character[] arr = str.toCharArray();
    }
}
```

#### Covers

✅ Iterating over String.
✅ Creating an array of characters.
✅ <code>String.length()</code>, <code>String.toCharArray()</code>, <code>String.charAt()</code> methods.

## Reverse an Array

### Using Another Array

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int[] arr2 = new int[arr.length];
        for(int i = 0; i < arr.length; i++){
            arr2[i] = arr[arr.length - i - 1];
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(n)

```

### In-place Reverse

<div class="section-container pl0 pr0">
<div class="section-item pl0">

#### Method 1 - Cutting to middle and reverse two halves.

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        for(int i = 0; i < arr.length / 2; i++){
            int temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```
</div>
<div class="section-item">

#### Method 2 - Two Pointers

```java
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int i = 0;
        int j = arr.length - 1;
        while(i < j){
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```
</div>
</div>

### Covers

✅ Iterating over array.
✅ Swapping elements.

## Find the Maximum and Minimum Values in an Array

### Method 1 - Using a Loop

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int max = arr[0];
        int min = arr[0];
        for(int i = 1; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
            if(arr[i] < min){
                min = arr[i];
            }
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)
```

### Method 2 - In-built Function

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int max = Arrays.stream(arr).max().getAsInt();
        int min = Arrays.stream(arr).min().getAsInt();
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```

### Method 3 - In-built Function - Collections.max() and Collections.min()

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int max = Collections.max(Arrays.asList(arr));
        int min = Collections.min(Arrays.asList(arr));
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```

### Covers

✅ Iterating over array.
✅ Using <code>Collections.max()</code> and <code>Collections.min()</code> methods.
✅ <code>Arrays.stream().max().getAsInt()</code> and <code>Arrays.stream().min().getAsInt()</code> methods.

## Sorting an Array

[Sorting Algorithms](https://shyamzzp.github.io/interview-prep/preparation/sorting-algorithms)

### Sorting with Comparator - Anonymous Class

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        Arrays.sort(arr, new Comparator<Integer>(){
            public int compare(Integer a, Integer b){
                return b - a; // Descending order
                // return a - b; // Ascending order
            }
        });
    }
}
// return value of compare() method is used to determine the order of elements in the array.
// if return value is negative, then a is less than b.
// if return value is positive, then a is greater than b.
// if return value is zero, then a is equal to b.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

```

### Sorting with Custom Comparator Class

```java showLineNumbers
public class CustomComparator implements Comparator<Integer> {
    public int compare(Integer a, Integer b) {
        return b - a; // Descending order
        // return a - b; // Ascending order
    }
}
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        Arrays.sort(arr, new CustomComparator());
    }
}
// Time Complexity: O(n^2)
// Space Complexity: O(1)

```

## Searching in an Array

### Method 1 - Linear Search (No Order)

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5};
        int target = 5;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == target){
                System.out.println("Found at index: " + i);
                break;
            }
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)
```

### Method 2 - Binary Search (Sorted Ordered)

[Searching Algorithms](https://shyamzzp.github.io/interview-prep/preparation/search-algorithms)

## Frequently Asked Questions

### Kth Smallest Element in an Array

✅ Elements in the array might not be sorted. ✅ All the elements in the array are distinct.
✅ Elements is not null, empty or of zero length. ✅ There is at least one element in the array.

#### Method 1 - Using Priority Queue

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{10,22,13,42,15};
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        for(int i = 0; i < arr.length; i++){
            pq.add(arr[i]);
        }
        for(int i = 0; i < arr.length; i++){
            if(i == arr.length - k){
                System.out.println("Kth smallest element: " + pq.poll());
            }
        }
    }
}
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)
```

#### Method 2 - Using Sorting

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{10,22,13,42,15};
        Arrays.sort(arr);
        System.out.println("Kth smallest element: " + arr[arr.length - k]);
    }
}
// Time Complexity: O(nlog(n))
// Space Complexity: O(1)
```

### Sort an array of 0s, 1s and 2s

#### Method 1 - Using 3 pointers

```java showLineNumbers
// Sort an array of 0s, 1s and 2s
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{0,1,2,0,1,2,0,1,2};
        int i = 0;
        int j = n - 1;
        int lengthCounter = 0;
        while(lengthCounter < arr.length){
            if(arr[i] == 0){
                i++;
            }
            else if(arr[j] == 2){
                j--;
            }
            else{
                arr[lengthCounter] = arr[i];
                i++;
                lengthCounter++;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)
```

#### Method 2 - Using Counters

```java showLineNumbers
// Sort an array of 0s, 1s and 2s
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{0,1,2,0,1,2,0,1,2};
        int zeroCounter = 0;
        int oneCounter = 0;
        int twoCounter = 0;
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == 0){
                zeroCounter++;
            }
            else if(arr[i] == 1){
                oneCounter++;
            }
            else{
                twoCounter++;
            }
        }
        int lengthCounter = 0;
        for(int i = 0; i < zeroCounter; i++){
            arr[lengthCounter] = 0;
            lengthCounter++;
        }
        for(int i = 0; i < oneCounter; i++){
            arr[lengthCounter] = 1;
            lengthCounter++;
        }
        for(int i = 0; i < twoCounter; i++){
            arr[lengthCounter] = 2;
            lengthCounter++;
        }
        System.out.println(Arrays.toString(arr));
    }
}
// Time Complexity: O(n)
// Space Complexity: O(1)

```

### Sub-array with given sum

#### Method 1 - Brute Force

```java showLineNumbers
public class Solution {
    public static void main(String[] args){
        int[] arr = new int[]{1,2,3,4,5,6,7,8,9,10};
        int sum = 15;
        for(int i = 0; i < arr.length; i++){
            for(int j = i; j < arr.length; j++){
                int sumOfSubArray = 0;
                for(int k = i; k <= j; k++){
                    sumOfSubArray += arr[k];
                }
                if(sumOfSubArray == sum){
                    System.out.println("Sub-array found at index: " + i + " to " + j);
                }
            }
        }
    }
}
// Time Complexity: O(n^2)
// Space Complexity: O(1)
```

### Move all negative elements to end of array

#### Method 1 - Dequeue

✅ Using Dequeue method, iterate over the elements and keep a count of the number of negative elements. ✅ Once the elements are pushed to Dequeue and then push them to the array. ✅With the count of the negative values, reverse the array from end.

```java showLineNumbers
public class Solution {
    void segregateElements(int arr[],int n){
        // 
        Deque<Integer> deque = new LinkedList<Integer>();
        // If negative move to end of array and remove that element.
        for(int i = 0; i < n; i++){
            if(arr[i] < 0){
                deque.add(arr[i]);
                arr[i] = 0;
            }
        }
        // Move all negative elements to end of array.
        int i = 0;
        while(!deque.isEmpty()){
            arr[i] = deque.remove();
            i++;
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(n)
```

#### Method 2 - Using Priority Queue

✅ This method is not recommended as it is `O(nlog(n))`. ✅ But it is a good method to understand how Min-Heap works on array.
✅ Also if the problem is asking not to change the respective positions of the elements of the array, then this method is not the choice.

```java showLineNumbers
public class Solution {
    void segregateElements(int arr[],int n){
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        for(int i = 0; i < n; i++){
            if(arr[i] < 0){
                pq.add(arr[i]);
            }
        }
        for(int i = 0; i < n; i++){
            if(arr[i] >= 0){
                arr[i] = pq.poll();
            }
        }
    }
}
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)
```

#### Method 3 - Using Sorting

    ✅ This method is not recommended as it is `O(nlog(n))`. ✅ But it is a good method to understand how to sort an array.
    ✅ Also if the problem is asking not to change the respective positions of the elements of the array, then this method is not the choice.

```java showLineNumbers
public class Solution {
    void segregateElements(int arr[],int n){
        Arrays.sort(arr);
        for(int i = 0; i < n; i++){
            if(arr[i] < 0){
                arr[i] = arr[n - 1];
                arr[n - 1] = -1;
                n--;
            }
        }
    }
}
// Time Complexity: O(nlog(n))
// Space Complexity: O(1)
```

#### Method 4 - Using Extra Space.

```java showLineNumbers
public class Solution {
    void segregateElements(int arr[],int n){
        // Step 1: Create an array to store the negative values.
        int[] negativeArray = new int[n];
        int negativeArrayCounter = 0;
        // Step 2: Create an array to store the positive values.
        int[] positiveArray = new int[n];
        int positiveArrayCounter = 0;
        // Step 3: Iterate over the array and store the negative values in the negativeArray.
        for(int i = 0; i < n; i++){
            if(arr[i] < 0){
                negativeArray[negativeArrayCounter] = arr[i];
                negativeArrayCounter++;
            }
            else{
                positiveArray[positiveArrayCounter] = arr[i];
                positiveArrayCounter++;
            }
        }
        // Step 4: Iterate over the positiveArray and store the values in the array.
        int i = 0;
        for(int j = 0; j < positiveArrayCounter; j++){
            arr[i] = positiveArray[j];
            i++;
        }
        // Step 5: Iterate over the negativeArray and store the values in the array.
        
        for(int j = 0; j < negativeArrayCounter; j++){
            arr[i] = negativeArray[j];
            i++;
        }
    }
}
// Time Complexity: O(n)
// Space Complexity: O(n)
```

### Combination Sum of an Array to a Target (Contains Duplicates)

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

#### Method 1 : Brute Force

```java showLineNumbers
public class Solution {
    void combinationOfArray(int arr[],int n){
        // 
        for(int i = 0; i < n; i++){
            for(int j = i; j < n; j++){
                for(int k = j; k < n; k++){
                    System.out.println(arr[i] + " " + arr[j] + " " + arr[k]);
                }
            }
        }
    }
}
//Time Complexity: O(n^3)
//Space Complexity: O(1)

```

#### Method 2 : Backtracking

```java showLineNumbers
class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        backtrack(result,path,nums,target,0);
        return result;
    }
    public void backtrack(List<List<Integer>> result,List<Integer> path,int[] nums,int target,int index) {
        if(target == 0) {
            result.add(new ArrayList<>(path));
            return;
        }
        if(index == nums.length) {
            return;
        }
        if(nums[index] <= target) {
            path.add(nums[index]);
            backtrack(result,path,nums,target-nums[index],index+1);
            path.remove(path.size()-1);
        }
        backtrack(result,path,nums,target,index+1);
    }
}
//Time Complexity: O(2^n)
//Space Complexity: O(n)
```

### Combination Sum of an Array to a Target II (No-Duplicates)

#### Method 1 : Backtracking

```java showLineNumbers
class Solution{
    public List<List<Integer>> combinationSum2(int[] nums, int target) {
    List<List<Integer>> list = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(list, new ArrayList<>(), nums, target, 0);
    return list;
    
    }

    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums, int remain, int start){
        if(remain < 0) return;
        else if(remain == 0) list.add(new ArrayList<>(tempList));
        else{
            for(int i = start; i < nums.length; i++){
                if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates
                tempList.add(nums[i]);
                backtrack(list, tempList, nums, remain - nums[i], i + 1);
                tempList.remove(tempList.size() - 1); 
            }
        }
    }
} 
//Time Complexity: O(2^n)
//Space Complexity: O(n)
```

### Subsets of an Array (No-Duplicates)

#### Method 1 : Backtracking

```java showLineNumbers
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> list = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(list, new ArrayList<>(), nums, 0);
    return list;
}

private void backtrack(List<List<Integer>> list , List<Integer> tempList, int [] nums, int start){
    list.add(new ArrayList<>(tempList));
    for(int i = start; i < nums.length; i++){
        tempList.add(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.remove(tempList.size() - 1);
    }
}
//Time Complexity: O(2^n)
//Space Complexity: O(n)
```

### Subsets of an Array (Contains-Duplicates)

#### Method 1 : Backtracking

```java showLineNumbers
public List<List<Integer>> subsetsWithDup(int[] nums) {
    List<List<Integer>> list = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(list, new ArrayList<>(), nums, 0);
    return list;
}

private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums, int start){
    list.add(new ArrayList<>(tempList));
    for(int i = start; i < nums.length; i++){
        if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates
        tempList.add(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.remove(tempList.size() - 1);
    }
}
//Time Complexity: O(2^n)
//Space Complexity: O(n)
```

### Permutations of an Array (No-Duplicates)

#### Method 1 : Backtracking

```java showLineNumbers
public List<List<Integer>> permute(int[] nums) {
   List<List<Integer>> list = new ArrayList<>();
   backtrack(list, new ArrayList<>(), nums);
   return list;
}

private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums){
   if(tempList.size() == nums.length){
      list.add(new ArrayList<>(tempList));
   } else{
      for(int i = 0; i < nums.length; i++){ 
         if(tempList.contains(nums[i])) continue; // element already exists, skip
         tempList.add(nums[i]);
         backtrack(list, tempList, nums);
         tempList.remove(tempList.size() - 1);
      }
   }
} 
//Time Complexity: O(n!)
//Space Complexity: O(n)
```

### Permutations of an Array II (Contains-Duplicates)

#### Method 1 : Backtracking

```java showLineNumbers
public List<List<Integer>> permuteUnique(int[] nums) {
    List<List<Integer>> list = new ArrayList<>();
    Arrays.sort(nums);
    backtrack(list, new ArrayList<>(), nums, new boolean[nums.length]);
    return list;
}

private void backtrack(List<List<Integer>> list, List<Integer> tempList, int [] nums, boolean [] used){
    if(tempList.size() == nums.length){
        list.add(new ArrayList<>(tempList));
    } else{
        for(int i = 0; i < nums.length; i++){
            if(used[i] || i > 0 && nums[i] == nums[i-1] && !used[i - 1]) continue;
            used[i] = true; 
            tempList.add(nums[i]);
            backtrack(list, tempList, nums, used);
            used[i] = false; 
            tempList.remove(tempList.size() - 1);
        }
    }
}
//Time Complexity: O(n!)
//Space Complexity: O(n)
```
