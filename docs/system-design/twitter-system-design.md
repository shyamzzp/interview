---
tree_title: Twitter System Design
description: System Design - Twitter.
last_modified: 2022-06-11T16:40:29.4029
---

# Twitter System Design

## Functional Requirements of the System.

<ul>
<li>Users should be able to create tweets.</li>
<li>Users should be able to search for tweets by query.</li>
<li>Tweet content will be restricted to 280 characters of text.</li>
</ul>

## Non-Functional Requirements of the System.

<ul>
<li>The system needs to be highly available.</li>
<li>The system should be highly reliable. Tweets created by users should never be lost.</li>
<li>The accepatble latency for search results is 200ms.</li>
</ul>

## Capacity Estimation

We have 500M new tweets each day. Given that the average tweet is 33 characters long, we can estimate a conservative average tweet size of 134 bytes. We calculated that by multiplying the character length by the character encoding's byte size per encoded character. We need to use the character encoding utf8mb4 to support the emoji's used in tweets. utf8mb4 uses up to 4 bytes to encode each character. Lastly we add two bytes to account of the overhead of storing text in mysql.

| Character Length | Character Encoding | Average Tweet Size |
| ---------------- | ------------------ | ------------------ |
| 33               | utf8mb4            | 134                |

| Average Tweet Size | Total Tweets | Total Bytes       | Per Year Storage             |
| ------------------ | ------------ | ----------------- | ---------------------------- |
| 134                | 500M         | 134_33_4 ~ 67 GBs | 67GB \* 365 days = 24.445 TB |

## Characteristics of the System.

## Statistics of the System.

| Description           | Value                             |
| --------------------- | --------------------------------- |
| Write                 | 600 per second.                   |
| Read                  | 600,000 per second.               |
| Total number of Users | 330 million Monthly Active Users. |

Twitter is a Read Heavy System. So the system that you make should be Read Heavy, Eventual Consistency and Storage Efficient. <br/>
📖Read Heavy: _Something_ <br/>
📖Eventual Consistency: _Something_ <br/>
📖Storage Efficient: _Something_ <br/>

## Sub-Systems of the System.

### How to generate User Timelines.

### How to generate Home Timelines.

### How to generate the Trending Topics.

## Database Design.

### Choosing a Database.

Best choice for the database is Redis and along with it have to use some DB to store the data.

#### How Redis supports the Twitter System

📖 _Redis drives Timeline, Twitter's most important service. Timeline is an index of tweets indexed by an id. Chaining tweets together in a list produces the Home Timeline. The User Timeline, which consists of tweets the user has tweeted, is just another list._ <br />

<!-- 📖 <strong>Hybrid List</strong> : _Added Hybrid List to Redis for more predictable memory performance._ Timeline is a list of Tweet IDs, so it's a list of integers. Each ID is small.<br />

📖 \_Redis supports two list types: ziplist and linklist. Ziplist is space efficient. linklist is flexible, but as a doubly linked list has the overhead of two pointers per key, which given the size of the ID is very high overhead.<br />

📖 _Hybrid List is a linked list of ziplists. A threshold is set of how big each ziplist can be in bytes. In bytes because to memory efficient it helps to allocate and deallocate blocks of the same size. When a list goes over it is spilled into the next ziplist. A ziplist is not recycled until the list is empty, which means it is possible, through deletion, to have each ziplist have only one entry. In practice, tweets aren't deleted all that often._<br />

📖 <strong>BTree</strong>

✅   _Added BTree to Redis to support range queries on hierarchical keys to return a list of results._<br />

✅   _In Redis the way to deal with secondary keys or fields is a hash map. To have sorted data in order to perform a range query a sorted set is used. Sorted set orders by a score which is a double, so an arbitrary secondary key or an arbitrary name can't be used for the sorting. Since hash map uses a linear search it's not great if there are a lot of secondary keys or fields._<br />

✅   _BTree is the attempt fix the shortcomings of hash map and sorted set. It's better to just have one data structure that does what you want. It's easier to understand and reason about._<br />

✅   _Borrowed the BSD implementation of BTree and added it to Redis to create a BTree. Supports key lookup as well as range query. Has good lookup performance. The code is relatively simple. The downside is BTree is not memory efficient. It has a lot of meta data overhead due to the pointers._<br /> -->

### Database Structure.

✅ User Table

| Description | Value                            |
| ----------- | -------------------------------- |
| User ID     | Unique ID of the User.           |
| Followers   | Number of Followers of the User. |
| Tweets      | Number of Tweets of the User.    |

✅ Tweet Table

| Description   | Value                            |
| ------------- | -------------------------------- |
| Tweet ID      | Unique ID of the Tweet.          |
| User ID       | User ID of the User.             |
| Text          | Text of the Tweet.               |
| Retweet Count | Number of Retweets of the Tweet. |

✅ Follower Table

| Description | Value                    |
| ----------- | ------------------------ |
| User ID     | User ID of the User.     |
| Follower ID | User ID of the Follower. |

### Scaling Database.

## API Design and Implementation.

### GET Requests.

| API                      | Description                        |
| ------------------------ | ---------------------------------- |
| /                        | Get the Home Timeline of the User. |
| /user/:user_id           | Get the User Timeline of the User. |
| /tweet/:tweet_id         | Get the Tweet.                     |
| /user/:user_id/followers | Get the Followers of the User.     |

### POST Requests.

| API                     | Description        |
| ----------------------- | ------------------ |
| /user/:user_id/follow   | Follow the User.   |
| /user/:user_id/unfollow | Unfollow the User. |
| /tweet                  | Post a Tweet.      |

### DELETE Requests.

| API                     | Description        |
| ----------------------- | ------------------ |
| /user/:user_id/unfollow | Unfollow the User. |
| /tweet/:tweet_id        | Delete the Tweet.  |

### Authentication.

| API     | Description      |
| ------- | ---------------- |
| /login  | Login the User.  |
| /logout | Logout the User. |

### Error Handling.

| API    | Description    |
| ------ | -------------- |
| /error | Get the Error. |

### Caching.

| API               | Description      |
| ----------------- | ---------------- |
| /cache            | Get the Cache.   |
| /cache/clear      | Clear the Cache. |
| /cache/clear/:key | Clear the Cache. |
| /cache/put        | Put the Cache.   |
| /cache/put/:key   | Put the Cache.   |

### Monitoring.

| API                 | Description        |
| ------------------- | ------------------ |
| /metrics            | Get the Metrics.   |
| /metrics/clear      | Clear the Metrics. |
| /metrics/clear/:key | Clear the Metrics. |
| /metrics/put        | Put the Metrics.   |
| /metrics/put/:key   | Put the Metrics.   |

## References

<ul>
    <li><a href="https://www.youtube.com/watch?v=wYk0xPP_P_8">Twitter system design | twitter Software architecture | twitter interview questions.</a></li>
    <li><a href="https://www.youtube.com/watch?v=QH2-TGUlwu4">Redis: A Scalable NoSQL Database</a></li>
    <li><a href="https://www.omnicoreagency.com/twitter-statistics/">Twitter Statistics - Omnicoreagency</a></li>
</ul>
