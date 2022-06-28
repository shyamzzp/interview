---
tree_title: Linked List
description: This will cover the most of the topics that will be part of the linked list.
last_modified: 2022-06-08T15:36:32.3632
---

# Linked List

## Node Class

```java showLineNumbers
Class Node{
    int data;
    Node next;
    public Node(int d){
        data = d;
        next = null;
    }
}
```

## Traversing a Linked List

```java showLineNumbers
public void traverseLinkedList(Node head) {
    Node temp = head;
    while (temp != null) {
        System.out.print(temp.data + " ");
        temp = temp.next;
    }
}
```

## Removing First Node of Linked List

```java showLineNumbers
public void removeFirstNodeLinkedList(Node head) {
    if (head == null) {
        return;
    }
    head = head.next;
}
```

## Removing Last Node of Linked List

```java showLineNumbers
public ListNode removeLastNodeLinkedList(Node head) {
    if (head == null || head.next == null) {
        return null;
    }
    Node temp = head;
    while (temp.next.next != null) {
        temp = temp.next;
    }
    temp.next = null;
    return temp;
}
```

## Getting End of Linked List

```java showLineNumbers
public void getLastNodeOfLinkedList(Node head) {
    //edge-case - if head is null
    if (head == null) {
        return;
    }
    Node temp = head;
    while (temp.next != null) {
        temp = temp.next;
    }
    System.out.println(temp.data);
}
```

## Inserting element at the end of the Linked List.

```java showLineNumbers
class Solution {
    public ListNode insert(ListNode root, int item)
    {
        ListNode temp = new ListNode(item);
        temp.next = null;
        if (root == null)
            root = temp;
        else {
            ListNode ptr = root;
            while (ptr.next != null)
                ptr = ptr.next;
            ptr.next = temp;
        }
        return root;
    }
}
```

## Reverse Linked List.

<ul>
<li>3 Variables : [prev, curr, temp]</li>
<li>prev will be used to return from the function and the store the current node</li>
<li>curr will be used to store the current node and will be updated every time to temp.</li>
<li>temp will be used to store the next node and will be updated every time to curr.</li>
</ul>

```java showLineNumbers
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while(curr!=null){
            ListNode temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
            
        }
        return prev;
    }
}
```

## Sorting a Linked List using Heap Sort.

```java showLineNumbers
class Solution {
    public ListNode sortList(ListNode head) {
        ListNode curr = head;
        Queue<ListNode> queue = new PriorityQueue<>((n1, n2) -> n1.val - n2.val); 
        while (curr != null) {
            queue.add(curr);
            curr = curr.next;
        }
        
        ListNode dummy = new ListNode();
        ListNode prev = dummy;
        while (!queue.isEmpty()) {
            curr = queue.poll();
            curr.next = null;
            prev.next = curr;
            prev = curr;
        }
        return dummy.next;
    }
}
```

| Operation   | Time Complexity |
| ----------- | --------------- |
| reverseList | O(n)            |

## Remove Duplicates from Sorted List. [Sentinel + Predecessor]

```java showLineNumbers
class Solution {

    public ListNode deleteDuplicates(ListNode head) {
    // sentinel
    ListNode sentinel = new ListNode(0, head);

    // predecessor = the last node
    // before the sublist of duplicates
    ListNode pred = sentinel;

    while (head != null) {
        // if it's a beginning of duplicates sublist
        // skip all duplicates
        if (head.next != null && head.val == head.next.val) {
        // move till the end of duplicates sublist
        while (head.next != null && head.val == head.next.val) {
            head = head.next;
        }
        // skip all duplicates
        pred.next = head.next;
        // otherwise, move predecessor
        } else {
        pred = pred.next;
        }

        // move forward
        head = head.next;
    }
    return sentinel.next;
    }
}
```
