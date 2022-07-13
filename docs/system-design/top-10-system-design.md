---
tree_title: Top 10 System Design Overview
description: Here are the top 10 system design questions that you should ask yourself when you are interviewing for a job.
last_modified: 2022-07-08T16:28:59.2859
---

# Top 10 System Design Overview

## Overview of the Section

<div class="section-container">
Over my 10 years as a senior software engineer and interviewer at Microsoft and Facebook, I've worked with hundreds of applicants as they solve different system design problems.

Developers tend to struggle with SDI questions because they are so open ended and often require a kind of critical thinking not practiced in other coding interview challenges.

While SDI questions change over time, some have remained popular in interviews across various top companies.

Today, we'll explore the top 10 most commonly asked system design interview questions, common problems you'll have to address in each, and some tools to help you do that.

</div>

<hr/>

### 1. Design a chat service

<div class="section-container">

For this question, you'll design a service that allows users to chat with each other over the internet. Conversations can be one-on-one or can be group chats with many members. Messages should only be accessible by those included in the conversation.

<div class="section-item pl0">

#### Required Features

-   Messages must be sent and received via the internet.
-   Service must support one-on-one and group chats.
-   Messages should be stored for later viewing.
-   Users should be able to send pictures and videos as well as text messages.
-   Messages should be encrypted during transit.
-   Messages should be visible with minimal latency.

</div>

<div class="section-item">

#### Common Problems

-   What happens if a message is sent without an internet connection? Is it sent when the connection is restored?
-   How will you encrypt and decrypt the message without increasing latency?
-   How do users receive notifications?
-   Are messages pulled from the device (server periodically prompts the devices if they're waiting to send a message) or are pushed to the server (device prompts the server that it has a message to send)?

</div>
</div>

<div class="section-container flex-dir-col">

#### Tools to Consider

-   Split the database schema into multiple tables: user table (with the user ID and contacts), a chat table (with chat IDs and a list of participating user IDs), and message table (with past messages a reference to the chat ID).
-   Use WebSocket for bi-directional connections between device and server.
-   Use Push notifications to notify members even if they're offline.

</div>
<hr/>

### 2. Design a ride-sharing service like Uber or Lyft

<div class="section-container">

This question asks you to create a ride-sharing service that matches users with nearby drivers. Users can input a destination and transmit their current location and nearby drivers are notified within seconds.

The app then tracks a route between the driver and user's current locations, then from the user's location to the destination.

<div class="section-item pl0">

#### Required Features

-   The system must track the current location of all users and drivers.
-   Users and drivers must receive updated trip information while in transit.
-   Must support thousands of users at various points in the process and scale accordingly.
-   Both driver and user must be constantly connected to the server.

</div>

<div class="section-item">

#### Common Problems

-   How can you keep latency low during busy periods?
-   How is the driver paired with the user? Iterating all drivers to find Euclidean distance would be inefficient.
-   What happens if the driver or user loses connection?
-   How do you store all cached location data?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use the S2Geometry library to split locations into cells. Only calculate driver distance with drivers in the same cell as the user.
-   Use distributed storage to store locations of all users, location data will only be roughly 1Kb per user.
-   If location data halts, the device continues to report their previous location while waiting for reconnection.
-   Allow a buffer after prompting the closest driver to take a trip. If they refuse, move to the next driver.

</div>
<hr/>

### 3. Design a URL shortening service like TinyURL

<div class="section-container">

This question asks you to create a program that shortens long URLs like TinyURL or bit.ly. These programs take a long URL and generate a new and unique short URL. They can also intake a shortened URL and return the original full-length URL.

<div class="section-item pl0">

#### Required Features

-   Returns a URL that is shorter than the original
-   Must store the original URL
-   Newly generated URL must be able to link to the stored original
-   Shortened URL should allow redirects
-   Must support custom short URLs
-   Must support many requests at once

</div>

<div class="section-item">

#### Common Problems

-   What if two users input the same custom URL?
-   What if there are more users than expected?
-   How does the database regulate storage space?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use hashing to link original and new URLs
-   Use REST API to load balance high traffic and handle front-end client communication
-   Use multithreading to handle multiple requests at once
-   Use NoSQL database to store original URLs (no relation between stored URLs)

</div>
<hr/>

### 4. Design a mass social media service like Facebook, Twitter, or Instagram

<div class="section-container">

For this question, you'll design a social media service used by my hundred thousand users like Instagram. Users should be able to view a news-feed with posts by followed users and suggest new content the user may like.

Interviewers often want to hear you discuss the news-feed in depth.

</div>
<div class="section-container">
<div class="section-item pl0">

#### Required Features

-   Robust news-feed and recommendation system
-   Users can make public posts
-   Other users can comment or like posts
-   Must comfortably accommodate many users at once
-   System must be highly available

</div>

<div class="section-item">

#### Common Problems

-   Famous users will have millions of followers, how are they handled vs standard users?
-   How does the system weight posts by age? Old posts are less likely to be viewed than new posts.
-   What's the ratio of read and write focused nodes? Are there likely to be more read requests (users viewing posts) or write requests (users creating posts)?
-   How can you increase availability? How does the system update? What happens if a node fails?
-   How do you efficiently store posts and images?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use rolling updates and replica nodes to maximize availability.
-   Use a trained machine learning algorithm to recommend posts.
-   Create a database schema that stores celebrities and users separately.
-   Use a social graph to further track following habits

</div>
<hr/>

### 5. Design a social network and message board service like Quora, Reddit, or HackerNews

<div class="section-container">

For this question, you'll design a forum-like system where users can post questions and links.

Other users can view and comment on the questions. Questions have tags that represent their topic and users can follow tags to see questions on specific topics. Users have a newsfeed that highlights popular questions from their followed tags and related topics.

<div class="section-item pl0">

#### Required Features

-   Users must be able to create public posts and apply tags
-   Posts must be sortable by tag
-   Other users must be able to post comments in real-time.
-   The database must store data on each post (views, upvotes, etc.)
-   The newsfeed must display posts from followed tags AND posts from other tags that the user will like.
-   Must support high traffic of viewers and new posts.

</div>

<div class="section-item">

#### Common Problems

-   Does our product only need to work on the web?
-   Where are user uploaded images/links stored?
-   How will the system determine related tags? How many posts from unfollowed tags are shown in the feed?
-   How are posts distributed across a network of servers?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use an SQL database to map the relational data (users have posts, posts have comments/likes, categories have related posts, etc.)
-   Use multithreading and a load balancer layer to help support higher traffic.
-   Use sharding to break up the system. Consider sharding by category to store posts of the same tags in one machine.
-   Use Machine Learning and Natural Language Processing to find correlations between the relationships between tags

</div>
<hr/>

### 6. Design a global file storage & sharing service like Dropbox, Google Drive, or Google Photos

<div class="section-container">

For this question, you'll create a synchronous, cross-platform storage system like Dropbox. Users can store files and photos and access them from other devices.

<div class="section-item pl0">

#### Required Features

-   Users should be able to save/delete/update/share files over the web
-   Old versions of documents should be saved to rollback
-   Files updates should sync across multiple devices

</div>

<div class="section-item">

#### Common Problems

-   Where are the files stored?
-   How do you handle updates? Do you re-upload the entire file again?
-   Do small updates require a full file update?
-   How does the system handle two users updating a document at the same time?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use chunking to split files into multiple sections. Updates only re-upload the section rather than the whole file.
-   Use cloud storage like Amazon S3 to handle the internal database.
-   Make the client constantly check with the server to ensure concurrent updates are applied.

</div>
<hr/>

### 7. Design a global video streaming service like YouTube or Netflix

<div class="section-container">

This question asks you to create an online video streaming service like YouTube. The service will store and transmit hundreds of petabytes of video data. It must also store statistics (views, likes, number of views, etc.) and allow for users to post comments.

Your solution must be scalable to support thousands of concurrent users.

<div class="section-item pl0">

#### Required Features

-   Videos should be uploadable over the web
-   Users should receive an uninterrupted stream over the internet
-   Video statistics should be stored and accessible for every video.
-   Comments must be saved and displayed with the video to other comments
-   Should support high traffic of several thousand users

</div>

<div class="section-item">

#### Common Problems

-   How will your service ensure smooth video streaming on various internet qualities?
-   How does your service respond to a sudden drop in streaming speed (buffering, reduced quality, etc.)?
-   How are the videos stored?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use cloud technology to store and transmit video data.
-   Use Machine Learning to suggest new video content.
-   Prevent stuttering for inconsistent connections with a delay. The user views data from a few moments ago rather than as it comes in.

</div>
<hr/>

### 8. Design an API Rate Limiter for sites like Firebase or Github

<div class="section-container">

For this question, you'll create an API Rate Limiter that limits the number of API calls a service can receive in a given time period to avoid an overload.

The interviewer can ask for this at various scales, from a single machine to an entire distributed network.

<div class="section-item pl0">

#### Required Features

-   Devices are limited to 10 requests per hour
-   The Limiter must notify the user if their request is blocked.
-   Must handle traffic suitable to its scale.

</div>

<div class="section-item">

#### Common Problems

-   How does your system measure requests per hour? If a user makes 10 requests at 1:20 then another 10 at 2:10, they've made 20 in the same 1-hour window despite the hour change.
-   How would designing for a distributed system differ from a local system?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use sliding time windows to avoid hourly resets.
-   Save a counter integer instead of the request itself to save space.

</div>
<hr/>

### 9. Design a proximity server like Yelp or Nearby Places/Friends

<div class="section-container">

For this final question, you'll design a proximity server that stores and reports the distance to places like restaurants. Users can search nearby places by distance or popularity. The database must store data for 500 million places across the globe but have low latency.

<div class="section-item pl0">

#### Required Features

-   Store up to 500 million locations.
-   Locations must be uniquely identified and have corresponding data like a quality review and hours of service.
-   Searches must return results with minimal latency.
-   Users must be able to search results by distance or quality.

</div>

<div class="section-item">

#### Common Problems

-   How do you store so much location data?
-   How do you achieve quick search results?
-   How does your system handle different population densities? Rigid latitude/longitude grids will cause varied responsiveness based on density.
-   How can we optimize commonly searched locations?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use a relational database to store the list of locations and related data.
-   Use caching to store data for the most popular locations.
-   Use sharding to split data by region.
-   Search locations within a certain dynamic grid. If there are more than 500 locations in a single cell, split the grid into 4 smaller cells. Repeat until you only have to search less than 500 locations.

</div>
<hr/>

### 10. Design a search engine related service like Type-Ahead

<div class="section-container">

This service will partially complete search queries and display 5 suggestions to complete the query. It should adapt to highly searched content in real-time and suggest that to other users.

For example, "Seahawks win the Super Bowl" would be suggested within minutes of the event occurring.

<div class="section-item pl0">

#### Required Features

-   The service should match partial queries with popular queries.
-   Minor spelling mistakes should be corrected, i.e. “dgo → dog”
-   Should guess the 5 most likely options based on the query
-   Results should update as the query is being written

</div>

<div class="section-item">

#### Common Problems

-   How strong do you make the spelling mistake corrections?
-   How do you update selections without causing latency?
-   How do you determine the most likely completed query? Does it adapt to the user's searches?
-   What happens if the user types very quickly? Do suggestions only appear after they're done?

</div>
</div>
<div class="section-container flex-dir-col">

#### Tools to Consider

-   Use a natural language processing machine learning algorithm to anticipate the next characters.
-   Use Markov Chains to rank the probability of top queries.
-   Update ML algorithm hourly or daily rather than in real-time to reduce burden.

</div>
<hr/>

## References

-   <https://medium.com/geekculture/top-10-system-design-interview-questions-10f7b5ea123d>
