---
tree_title: Map
description: This will cover the most of the topics that will be part of the Map.
last_modified: 2022-06-08T15:36:32.3632
---

# Map

## Types of Map and Complexities

```java
// Normal Key-Value mapping.
Map<String, Integer> map = new HashMap<String, Integer>();

// Maintaining an order of elements inserted into it.
Map<String, Integer> map = new LinkedHashMap<>();

// The map is sorted according to the natural ordering of its keys,
// or by a Comparator provided at map creation time, depending on which
// constructor is used.
Map<String, Integer> map = new TreeMap<>();
```

### Complexities

| Map Type      | Insertion Complexity | Lookup Complexity | Insertion Order |
| ------------- | -------------------- | ----------------- | --------------- |
| HashMap       | O(1)                 | O(1)              | Any Order       |
| LinkedHashMap | O(1)                 | O(1)              | Insertion Order |
| TreeMap       | O(logN)              | O(logN)           | Sorted ASC      |

## Operations on Maps

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Insertion Updation

```java
Map<String, Integer> map = new HashMap<String, Integer>();
map.put("Student 1", 101);
map.put("Student 1", 202);

Map<String, String> map = new HashMap<String, String>(){{
    put("a", "apple"); put("b", "bear"); put("c", "cat");
}};

// Time Complexity : O(1)
```
</div>
<div class="section-item">

### Get Remove

```java
Map<String, Integer> map = new HashMap<String, Integer>();
map.get("Student 1"); // Returns 202 and NULL if not present.

map.remove(new String("Student 1"));
// Return the mapped value if key is present else NULL

// Time Complexity : O(1)
```
</div>
</div>

<hr/>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### Iteration

```java

for(Entry<String, Integer> entry: map.entrySet()) {
    System.out.print(entry.getKey() + " >> " + entry.getValue());
}

// Time Complexity : O(n)
```
</div>
<div class="section-item">

### containsKey / containsValue

```java

Map<String, Integer> map = new HashMap<String, Integer>();
map.containsKey("Student 1");

map.containsValue(202);

// Time Complexity : O(n)
```
</div>
</div>

<hr/>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### values / keySet

```java

Map<String, Integer> map = new HashMap<String, Integer>();
Collection<Integer> values= map.values();
ArrayList<Integer> listValues = new ArrayList<>(values);

List ListofKeys = new ArrayList(map.keySet());
```
</div>
<div class="section-item">

### Empty Check / Size

```java

map.isEmpty() // Return boolean true if present else false.
map.size() // Returns the number of elements(key-value) pairs.

// Time Complexity : O(1)
```
</div>
</div>



<hr/>

## Creating a Frequency Hashmap.

```java
List<T> list = new ArrayList<>(); // Initial Data.
HashMap<T,Integer> freq = new HashMap<>();
for(T each: list){
    freq.put(c,freq.getOrDefault(each,0)+1);
}
// The above snippet is generic, you can replace T with any
// valid datatype.
```
<hr/>

## Sorted Map.

```java
// Comparator is supported only for the TreeMap Constructor.
Map<Integer, String> treeMap = new TreeMap<Integer, String>(
    new Comparator<Integer>() {
        @Override
        public int compare(Integer o1, Integer o2) {
            return o2.compareTo(o1);  // Order - DESC // Replace o2 with o1 for ASC.
        }
});
treeMap.putAll(map);
```

-   Complexity for the TreeMap insertion is `O(log N)`.
-   Using a TreeMap with Comparator is still of the same complexity.
-   Comparator can be applied only on the TreeMap.
-   For sorting mechanism to be used on other types of the Maps, we have extract the list of either the keys or the values for the same.
