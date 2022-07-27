---
tree_title: Pastebin System Design
description: System Design text sharing web-applications like Pastebin.
last_modified: 2022-06-15T13:20:35.2035
---

# Pastebin System Design

## Functional Requirements of the System.

➡️ <strong>Durability</strong> : The system should be highly reliable. Texts created by users should never be lost.<br />
➡️ <strong>High Availability</strong> : <i>The system needs to be highly available. Meaning that it needs to be able to handle a large number of requests at the same time.</i><br />
➡️ <strong>Low Latency</strong> : <i>User should be able post text and get it back in a timely manner.</i><br />

<hr />

## Non-Functional Requirements of the System.

➡️ Paste size should not exceed some memory say 10MB.<br />
➡️ Custom Path URL<br />
➡️ Paste Expiry : Lets say 6 months.<br />
➡️ User Login / Anonymous<br />

<hr />

## Capacity Estimation

### Assumptions

| Estimation | Pastes | Reads    | Paste Size |
| ---------- | ------ | -------- | ---------- |
| Per Day    | 1M     | 10 \* 1M | Max 10MB   |

As per the above table we can say that the system can handle 100K pastes per day and can handle 10MB per paste.
And also to notice that the system is Ready heavy, as user might access paste url more than the user actually posts.

### Traffic

| Writes : 1M                                  | Reads : 10 \* 1M                                   |
| -------------------------------------------- | -------------------------------------------------- |
| 1M Per Day would be ~12 Requests per second. | 10 \* 1M pastes would be ~120 Requests per second. |

➡️ Along with this you should always keep a buffer of 30%. Meaning that the system should be able to handle either 30% less or 30% more requests than the actual traffic.

### Data Estimation

#### ❓How much data you will need to for your system to run smoothly over a period of time?

| Estimation | Pastes    | Paste Size Max | Paste Size Average | Total Data Required - Average | Total Data Required - Max |
| ---------- | --------- | -------------- | ------------------ | ----------------------------- | ------------------------- |
| Per Day    | 1M        | 10MB           | 100KB              | 1M \* 100KB = ~100 GB         | 1M \* 10MB = ~ 1TB        |
| Per Month  | 1M \* 30  | 10MB           | 100KB              | 1M \* 100KB = ~3TB            | 1M \* 10MB \* 30 = ~ 30TB |
| Per Year   | 1M \* 365 | 10MB           | 100KB              | 1M \* 100KB = ~36.5TB         | 1M \* 10MB = ~ 365TB      |

#### ❓Which database will you be using for the system. (Between NoSQL and SQL).

#### ❓What is the strategy for storing the text for the system?

➡️ So currently we have is two types of consideration for the size of the text (average and max).<br />
➡️ So storing 100KB of text directly into the database is not a problem and its not even a burden on the database.<br />
➡️ But if we want to store a lot of text, then we need to store it in a way that it can be accessed easily. For that we can use is S3 bucket to store it as Blob and in our DB we can store the reference of the Blob.<br />
➡️ On top of it we can have a Hybrid approach that some memory data can be stored in the DB and the rest can be stored in S3. This way we will also be able to preview the file and the user wont feel the lag which the full file is loaded in the background.

#### ❓What is the strategy for caching of the requests?

➡️ As discussed in the earlier point, Hybrid approach can be good for accessing data in a better way, eliminating the lag of the data.<br />
➡️ But we need to be careful with the caching strategy, as big chunk of data can be cached in the memory but the problem would be burden on the DB and in the cache memory we cannot put so much of data for any user.<br />

#### ❓What is Blob?

➡️ BLOB stands for a <strong>Binary Large Object</strong>, a data type that stores binary data. Binary Large Objects (BLOBs) can be complex files like text, images or videos, unlike other data strings that only store letters and numbers. A BLOB will hold multimedia objects to add to a database; however, not all databases support BLOB storage.

### Database Schema

#### Paste Table

| Column      | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| id          | INT      | Primary Key                          |
| content     | TEXT     | Text Content                         |
| size        | INT      | Size of the text                     |
| s3BucketURL | TEXT     | S3 Bucket URL                        |
| created_at  | DATETIME | Date and Time of creation            |
| expires_at  | DATETIME | Date and Time of expiry of the Paste |

#### User Table

| Column     | Type     |
| ---------- | -------- |
| id         | INT      |
| name       | TEXT     |
| created_at | DATETIME |

<hr />

## References

<ul>
    <li><a href="https://www.youtube.com/watch?v=josjRSBqEBI">Paste bin system design | Software architecture for paste bin</a></li>
</ul>
