---
tree_title: Sorting Algorithms
description: This will cover the most of the topics that will be part of the Sorting Algorithms.
last_modified: 2022-06-08T16:35:30.3530
---

# Sorting Algorithms

## Bubble Sort

Repeatedly swapping the adjacent elements if they are in the wrong order.

```java showLineNumbers
class Solution {
    void bubbleSort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++)
            for (int j = 0; j < n - i - 1; j++)
                if (arr[j] > arr[j + 1]) {
                    // swap arr[j+1] and arr[j]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
    }
}
```

## Quick Sort

_QuickSort is a **Divide and Conquer** algorithm. It picks an element as pivot and partitions the given array around the picked pivot._

_There are many different versions of quickSort that **pick pivot in different ways**._

1.  _Always pick first element as pivot._
2.  **_Always pick last element as pivot (implemented below)_**
3.  _Pick a random element as pivot._
4.  _Pick median as pivot._

```java showLineNumbers
class Solution {
    void quickSort(int[] arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
                        quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
        int partition(int[] arr, int low, int high) {
                int pivot = arr[high];
            int i = (low - 1);
            for(int j = low; j <= high - 1; j++) {
                if (arr[j] < pivot) {
                    i++;
                    swap(arr, i, j);
                }
            }
            swap(arr, i + 1, high);
            return (i + 1);
        }
}
```

## Merge Sort

_Merge Sort is a **Divide and Conquer** algorithm. 
It divides the input array into two halves, calls itself for the two halves, and then it merges the two sorted halves. 
The merge() function is used for merging two halves. 
The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one._

```java showLineNumbers
class Solution {
    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        int L[] = new int[n1];
        int R[] = new int[n2];
    
        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0;
                int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
                while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}
```

```java showLineNumbers
void sort(int arr[], int l, int r) {
    if (r > l) {
        // Find the middle point
        int m =l+ (r-l)/2;

        // Sort first and second halves
        sort(arr, l, m);
        sort(arr, m + 1, r);

        // Merge the sorted halves
        merge(arr, l, m, r);
    }
}
```

## Insertion Sort

_Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. 
It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort._

> **SELECT EVERY ELEMENT FROM EACH ITERATION AND PUT IT AT THE CORRECT POSITION. 
> REPEAT THE SAME PROCESS FOR THE FURTHER ELEMENTS.**

```java showLineNumbers
class Solution {
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
    
            /* Move elements of arr[0..i-1], that are
                greater than key, to one position ahead
                of their current position */
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
}
```

## Selection Sort

_Selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity,
which makes it inefficient on large lists, and generally performs worse than the similar insertion sort._

> **SELECT THE MIN FROM EACH ITERATION AND PUT IT AT THE FIRST POSITION. 
> REPEAT THE SAME PROCESS FOR THE FURTHER INDEXES.**

```java showLineNumbers
class Solution {
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
        {
            // Find the minimum element in unsorted array
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
    
            // Swap the found minimum element with the first
            // element
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}
```
