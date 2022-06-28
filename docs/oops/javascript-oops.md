---
tree_title: OOPS in JavaScript
description: Object Oriented Concepts part of Javascript.
last_modified: 2022-06-21T23:37:10.3710
---

# OOPS in JavaScript

<span class="tag-is-success">Last Updated : TUESDAY 21 June, 2022 11:37:07 PM</span>

## Introduction

In this article we would explore some of the Object Oriented mechanisms supported by JavaScript to get the most out of it. Some of the common interview question in JavaScript on OOPS includes,- How Object-Oriented Programming is implemented in JavaScript? How they differ from other languages? Can you implement Inheritance in JavaScript and so on…

## OOPS in JavaScript

<div class="oops-js-container">

<div class="oops-js-item">

### **Objects**

An Object is a unique entity that contains property and methods.An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function, array, and string. 

</div>

<div class="oops-js-item">

### **Encapsulation**

The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it. 

</div>

<div class="oops-js-item">

### **Classes**

Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation.

</div>

<div class="oops-js-item">

### **Inheritance**

It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects. 

</div>
</div>
<div class="oops-js-container">

### **Abstract Classes**

Abstract classes can be defined as classes that cannot be instantiated i.e. whose object reference cannot be created and contains within it, one or more abstract methods. An abstract method is a method that can only be declared but has no implementation to it.

<div class="oops-js-item">

```javascript
//Abstract Class
class Animal {
  constructor() {
    if (this.constructor == Animal) {
      throw new Error("");
    }
  }
  say() {
    throw new Error("");
  }
}
```

</div>

<div class="oops-js-item">

```javascript
class Dog extends Animal {
  say() {
    console.log("bark");
  }
}
class Horse extends Animal {}
new Dog().say(); // bark
new Horse().say(); 
// Error: Method say() must be implemented.
new Animal(); 
// Error: Abstract classes can't be instantiated.
```

</div>
</div>

## References

<ul>
<li>

<https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/>

</li>
<li>

<https://www.javatpoint.com/javascript-oops-encapsulation>

</li>
</ul>
