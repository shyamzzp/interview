---
tree_title: System Design Glossary
description: Low level definition of terms used in system design and related topics.
last_modified: 2022-06-20T20:51:56.5156
---

# System Design Glossary

<span class="tag-is-success">Last Updated : MONDAY 20 June, 2022 8:51:53 PM</span>

## System Design Glossary

<div class="section-container pl0 pr0">
<div class="section-item pl0">

### **API**

Application Programming Interface. Think of this as the way a software system interacts with other systems/ people. For instance, an ATM's "API" includes adding money, withdrawing money, and a few other functions.

</div>

<div class="section-item">

### **Back-end**

The back-end often refers to the server-side of development (e.g. an algorithm to show recommended pages would be hosted on the server).

</div>

<div class="section-item pl0">

### **Cache**

A cache is a software component that helps store information or content so that requests can be quicker. As a simple example, it's easier and quicker to get information from short-term memory than long-term storage via a cache.

</div>

<div class="section-item">

### **CDN**

Content delivery network. This is a network of proxy servers and data centers that provides content to servers. CDNs are used to deliver content efficiently and quickly to clients that results in faster load times with high-traffic sites.

</div>

<div class="section-item pl0">

### **Client**

Clients are one part of the client-server model, where clients (e.g. a local computer) initiates a communication session with a server (e.g. a company server hosted on Amazon EC2).

</div>

<div class="section-item">

### **CMS**

Content management system. This is a system for storing content, and is often hosted inside / used as a database.

</div>

<div class="section-item pl0">

### **Cookie**

A cookie is a piece of data stored on a client's browser from sites a client visits. This data includes volunteered information including visited pages. A common function of a cookie is to help users not have to log in every time they visit a site.

</div>

<div class="section-item">

### **Database/DBMS**

Database management system. This is a software that allows users to create, read, and update entries in a database. For instance, Exponent's user database stores a list of user emails and passwords for each user to log in.

</div>

<div class="section-item pl0">

### **DNS**

Domain name system. This is a naming system to help map domain names to IP Addresses and other pieces of information across the internet.

</div>

<div class="section-item">

### **Latency**

This refers to the load time of an experience. For instance, the latency would be considered high if it takes a long time to download large image files to load a page.

</div>

<div class="section-item pl0">

### **Load Balancer**

Load balancers help to distribute a task over a series of resources as opposed to overloading one resource. This is helpful when there's a risk of a high-traffic data source overloading a particular resource.

</div>

<div class="section-item">

### **Mobile Web / Native**

**Native** often refers to apps downloaded to a smartphone or computer. Web apps are those that are accessed via a URL. For instance, the Facebook app is a native app. The Facebook.com on a mobile Google Chrome browser in one’s smartphone is on the mobile web platform.

</div>

<div class="section-item pl0">

### **NoSQL**

NoSQL (not only SQL) databases is an alternative to relational databases in that they provide mechanisms for access without tabular relations.

</div>

<div class="section-item">

### **Refactor**

A restructuring of the existing computer code. There are a variety of reasons for a code refactor. Often, refactors are advantageous because they accelerate product development or reduce vulnerabilities.

</div>

<div class="section-item pl0">

### **REST/RESTful**

Stands for Representational State Transfer. REST-compliant systems are stateless, meaning that the client and the server can be implemented independently of one another.

</div> 

<div class="section-item">

### **Server**

Servers provide functions to one or many clients. For instance, a web server serves web pages to clients (e.g. local computers, like the one you're reading this on!)

</div>

<div class="section-item pl0">

### **Sharding**

Sharding is the act of partitioning databases into smaller data shards, to optimize for database speed.

</div>

</div>

### HTTP Codes

Here are the 10 most used out of many HTTP Codes (<https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>)

1.  **200 OK :** 
    The request succeeded. The result meaning of "success" depends on the HTTP method:
    -   `GET`: The resource has been fetched and transmitted in the message body.
    -   `HEAD`: The representation headers are included in the response without any message body.
    -   `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
    -   `TRACE`: The message body contains the request message as received by the server.
2.  **201 Created**
    The request succeeded, and a new resource was created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.
3.  **204 No Content**
    There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.
4.  **304 Not Modified** 
    This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
5.  **400 Bad Request**
    The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
6.  **401 Unauthorized**
    Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
7.  **403 Forbidden**
    The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike `401 Unauthorized`, the client's identity is known to the server.
8.  **404 Not Found**
    The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of `403 Forbidden`to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.
9.  **409 Conflict**
    This response is sent when a request conflicts with the current state of the server.
10. **500 Internal Server Error**
    The server has encountered a situation it does not know how to handle.

## References

<ul>
<li>

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>

</li>
            
</ul>
