---
tree_title: Priority Queue
description: This will cover the most of the topics that will be part of the priority queue.
last_modified: 2022-06-08T15:36:32.3632
---

# Priority Queue

### Min Heap (Default)

```java showLineNumbers
class Solution {
    PriorityQueue<Integer> queue = new PriorityQueue<>();
}
```

### Max Heap

```java showLineNumbers
class Solution {
    PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());
}
```

## Operations and Complexities

### Complexities

| Operations                   | Complexity |
| ---------------------------- | ---------- |
| offer, poll, remove, add     | O(log n)   |
| peek                         | O(1)       |
| remove(Object)               | O(n)       |
| peek, element, size, isEmpty | O(1)       |

### Operations

```java showLineNumbers
PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
// Adding items to the pq using add()
pq.add(10);

// Adding items to the pq using offer()
pq.offer(20);

// Peek item at the top of the Queue using peek()
pq.peek();

// Remove the top element from the Queue using poll()
pq.poll();

//Retrieves and remove the head of the Queue
pq.remove()

pq.remove(20);
// Removes a single instance of the specified element 
// from this queue, if it is present.
// Return type is boolean.

pq.element();
// Retrieves, but does not remove, the head of this queue.

pq.size();
// Returns the number of elements in this collection.

pq.isEmpty();
// Returns true if this collection contains no elements.
```

## Different Constructors of Priority Queue.

```java showLineNumbers
PriorityQueue<E> pq = new PriorityQueue<E>(); 
// Creates a PriorityQueue with the default initial capacity (11) 
// that orders its elements according to their natural ordering.

PriorityQueue<E> pq = new PriorityQueue<E>(Collection<E> c); 
// Creates a PriorityQueue containing the elements 
// in the specified collection.

PriorityQueue<E> pq = new PriorityQueue<E>(int initialCapacity); 
// Creates a PriorityQueue with the specified initial capacity 
// that orders its elements according to their natural ordering.

PriorityQueue<E> pq = new PriorityQueue(int initialCapacity, Comparator<E> comparator);
// Creates a PriorityQueue with the specified initial capacity that orders its elements 
// according to the specified comparator.

PriorityQueue<E> pq = new PriorityQueue(PriorityQueue<E> c);
// Creates a PriorityQueue containing the elements in the specified 
// priority queue.

PriorityQueue<E> pq = new PriorityQueue<E>(SortedSet<E> c);
// Creates a PriorityQueue containing the elements in the specified sorted set.
```

## Priority Queue with Comparator.

    -1 : o1 < o2
    0 : o1 == o2
    +1 : o1 > o2

-   If you always return the same value (o, 1, -1) for the comparator, regardless of it's inputs, then you're not using it correctly. You need to base the value returned on the values passed in. The idea is that the data structure (or sorter) calls the comparison function any time it needs to order two elements, to find out what order to put them in.
-   Its worth noting that the positive/negative integer values (-1, +1) don't need to be 1, they can be any positive/negative numbers. It's just common practice to return -1/+1.

### Use of Comparator Class

```java showLineNumbers
class Solution {
    PriorityQueue<Student> pq = new PriorityQueue<Student>(5, new StudentComparator());
    // Here 5 represents the initial capacity, one of many kind of different constructor for PQ.
    // When you add elements into the pq, they will be sorted as per the CGPA DESC Order.
}
class StudentComparator implements Comparator<Student>{
    // Overriding compare() method of Comparator // for descending order of CGPA
    public int compare(Student s1, Student s2) {
        if (s1.cgpa < s2.cgpa) return 1;
        else if (s1.cgpa > s2.cgpa) return -1;
        else return 0;
    }
}
```

### Anonymous Comparator Class

```java showLineNumbers
class Solution {
    PriorityQueue<Student> pq = new PriorityQueue<>(10, new Comparator<Student>() {
        public int compare(Student n1, Student n2) {
            //Method 1
            // return Integer.compare(n1.getCGPA(), n2.getCGPA());
            //Method 2
            return new Integer(n1.cgpa).compareTo(new Integer(n2.cgpa)); 
            // You can make Integer object and then compare.
            // For Strings you can directly use int com = "bsd".compareTo("asd");
            // For other types, we can deduce in similar fashion.
        }
    });
}
```

## Resources
