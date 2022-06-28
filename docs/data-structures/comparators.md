---
tree_title: Comparators
description: This will cover the most of the topics that will be part of the Comparators.
last_modified: 2022-06-08T15:36:32.3632
---

# Comparators

## Comparator Class

### One level of Comparisons

```java showLineNumbers
class Student {
    int rollno;
    String name, address;
}
class SortByName implements Comparator<Student> {
    // Sorting in ascending order of Name.
    public int compare(Student a, Student b) {
        return a.name.compareTo(b.name);
    }
}
class SortByRoll implements Comparator<Student> {
    // Sorting in ascending order of Roll No.
    public int compare(Student a, Student b){
        return a.rollno - b.rollno;
    }
}
class Solution {
    public static void main(String[] args) {
                Collections.sort(studentsArray, new SortByRoll());
        }
}
```

### Two levels of Comparisons.

```java showLineNumbers
class Student {
    String Name;
    int Age;
}
class CustomerSortingComparator implements Comparator<Student> {
    @Override
    public int compare(Student customer1, Student customer2) {
    int NameCompare = customer1.Name.compareTo(customer2.Name);
    int AgeCompare = customer1.Age.compareTo(customer2.Age);

    // 2nd level comparison
    return (NameCompare == 0) ? AgeCompare : NameCompare;
    }
}
class Solution {
    Collections.sort(al,new CustomerSortingComparator());
}
```
