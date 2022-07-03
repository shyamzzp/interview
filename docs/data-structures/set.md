---
tree_title: Set
description: This will cover the most of the topics that will be part of the Set.
last_modified: 2022-06-08T15:36:32.3632
---

# Set

## Introduction
<div class="section-container pl0 pr0">
<div class="section-item pl0">

A Set is a Collection that cannot contain duplicate elements.
Set also adds a stronger contract on the behavior of the equals and hashCode operations, allowing Set instances to be compared meaningfully even if their implementation types differ.
</div>
<div class="section-item">

```java
Set set = new HashSet<Integer>();
// or var set = new HashSet<Integer>();
set.add(1);
set.add(2);
```
</div>
</div>

<hr/>

## Types of Set


<div class="section-container pl0 pr0">
<div class="section-item pl0">

### HashSet
HashSet, which stores its elements in a hash table, is the best-performing implementation; however it makes no guarantees concerning the order of iteration.

```java
Set<Integer> set = new HashSet<Integer>();
```
<hr/>
</div>
<div class="section-item">

### TreeSet
TreeSet, which stores its elements in a red-black tree, orders its elements based on their values; it is substantially slower than HashSet.

```java
Set<Integer> set = new TreeSet<Integer>();
```
<hr/>

</div>
</div>


<div class="section-container pl0 pr0">
<div class="section-item pl0">

### LinkedHashSet
LinkedHashSet, which is implemented as a hash table with a linked list running through it, orders its elements based on the order in which they were inserted into the set (insertion-order).

```java
Set<Integer> set = new LinkedHashSet<Integer>();
```
</div>
<div class="section-item">

| Type | Order | add Time Complexity|
| ---- | ----------- | ------------- |
| HashSet | No - Order | O(1) |
| TreeSet | Sorted - Order | O(log n) |
| LinkedHashSet | Insertion - Order | O(1) |

</div>
</div>
<hr/>


## Operations on Set

<div class="section-container pl0 pr0">
<div class="section-item pl0">

```java title="Add on Set"
//Manually
Set<Integer> set = new HashSet<Integer>();
set.add(1);
set.add(2);

//From another list
List<Integer> lists = Arrays.asList(1, 2, 3, 4, 5);
Set<Integer> set = new HashSet<>();
set.addAll(lists);
set.forEach(System.out::print); //12345
```
</div>
<div class="section-item">

```java title="Contains on Set"
Set<Integer> set = new HashSet<Integer>();
set.add(1);
set.add(2);

set.contains(1); // true
set.contains(3); // false
//TC : O(1)

set1.containsAll(set2);
//TC : O(n) where n is the size of set2
```
</div>
</div>


<div class="section-container pl0 pr0">
<div class="section-item pl0">

```java title="Remove & Iterator on Set"
Set<Integer> set = new HashSet<Integer>();
set.add(1);
set.add(2);

set.remove(element); // Return Type : boolean'
//TC : O(1)
------------------------------------------
Iterator value = set.iterator();
while (value.hasNext()) {
    System.out.println(value.next());
}
```
</div>
<div class="section-item">

```java title="Other operations on Set"
Set<Integer> set = new HashSet<Integer>();
set.add(1);

set.size(); // Return Type : int
set.clear(); // Return Type : void
set.isEmpty(); // Return Type : boolean
set.iterator(); // Return Type : Iterator
set.toArray(); // Return Type : Object[]
set.toArray(new Integer[0]); // Return Type : Integer[]

```
</div>
</div>

<hr/>

## Set Theory

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Union of Two Sets
The term union means combining the values of different sets.

```java 
Set<Integer> unionSet = new HashSet<>(setA);
unionSet.addAll(setB);
```

</div>
<div class="section-item">

### Intersection of Two Sets
The term intersection means the common values of different sets.

```java 
Set<Integer> intersectSet = new HashSet<>(setA);
intersectSet.retainAll(setB);
```
</div>
</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Relative Complement (Asymmetric Difference) of Two Sets
The term relative complement means the values from one set that are not in another. It is also referred to as the set difference.
```java
// Relative Complement of setB in setA
Set<Integer> differenceSet = new HashSet<>(setA);
differenceSet.removeAll(setB);

// Relative Complement of setA in setB
Set<Integer> differenceSet = new HashSet<>(setB);
differenceSet.removeAll(setA);
```
</div>
<div class="section-item">

</div>
</div>

## References

- <https://upscfever.com/upsc-fever/en/programming/java/43.html>
- <https://simplenotions.wordpress.com/2009/05/13/java-standard-data-structures-big-o-notation/>
- <https://www.baeldung.com/java-set-operations>