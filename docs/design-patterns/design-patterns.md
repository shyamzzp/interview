---
tree_title: Design Patterns
description: Low level definition of terms used in design patterns.
last_modified: 2022-06-21T00:20:02.202
---

# Design Patterns

<span class="tag-is-success">Last Updated : TUESDAY 21 June, 2022 12:20:05 AM</span>

## Introduction

<div class="design-patterns-container">

<div class="design-patterns-item">

### **Design Patterns**

<strong>Design patterns</strong> are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular design problem in your code.

</div>

<div class="design-patterns-item">

### **Benefits of Patterns**

Patterns are a toolkit of solutions to common problems in software design. They define a common language that helps your team communicate more efficiently.

</div>

<div class="design-patterns-item">

### **Classification**

Design patterns differ by their complexity, level of detail and scale of applicability. In addition, they can be categorized by their intent and divided into three groups.

</div>

<div class="design-patterns-item">

### **Criticism of patterns**

Are patterns as good as advertised? Is it always possible to use them? Can patterns sometimes be harmful?

</div>

</div>

## Creational patterns

These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

<div class="design-patterns-container">
<div class="design-patterns-item">

### **Factory Method** ✅

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

</div>

<div class="design-patterns-item">

### **Abstract Factory**

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

</div>

<div class="design-patterns-item">

### **Builder** ✅

Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

</div>

<div class="design-patterns-item">

### **Prototype**

Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

</div>

<div class="design-patterns-item">

### **Singleton** ✅

Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

</div>

</div>

## Structural patterns

These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

<div class="design-patterns-container">
<div class="design-patterns-item">

### **Adapter** ✅

Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

</div>

<div class="design-patterns-item">

### **Bridge**

Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

</div>

<div class="design-patterns-item">

### **Composite**

Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

</div>

<div class="design-patterns-item">

### **Decorator**

Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

</div>

<div class="design-patterns-item">

### **Facade** ✅

Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

</div>

<div class="design-patterns-item">

### **Flyweight**

Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

</div>

<div class="design-patterns-item">

### **Proxy**

Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

</div>

</div>

## Behavioral patterns

These patterns are concerned with algorithms and the assignment of responsibilities between objects.

<div class="design-patterns-container">
<div class="design-patterns-item">

### **Chain of Responsibility**

Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

</div>

<div class="design-patterns-item">

### **Command**

Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

</div>

<div class="design-patterns-item">

### **Iterator**

Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

</div>

<div class="design-patterns-item">

### **Mediator**

Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

</div>

<div class="design-patterns-item">

### **Memento**

Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

</div>

<div class="design-patterns-item">

### **Observer** ✅

Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

</div>

<div class="design-patterns-item">

### **State**

State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

</div>

<div class="design-patterns-item">

### **Strategy** ✅

Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

</div>

<div class="design-patterns-item">

### **Template Method**

Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

</div>

<div class="design-patterns-item">

### **Visitor**

Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

</div>

</div>

## References

<ul>
<li>

<https://refactoring.guru/design-patterns>

</li>
            
</ul>
