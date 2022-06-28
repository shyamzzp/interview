---
tree_title: Trie
description: This will cover the most of the topics that will be part of the Trie.
last_modified: 2022-06-08T16:35:30.3530
---

# Trie

## Introduction to Trie

<div class="section-container">
<div class="section-item pl0">

![Coverage-Trie BorderRadius8](_img/trie/2022-06-16-14-59-33.png)

</div>
<div class="section-item">
A <mark>trie</mark>, or a <mark>prefix tree</mark>, is a type of search tree that is usually used to store strings. Some of the properties of Trie are:<br/>
➡️ Each path from the root to leaves forms a word.<br />
➡️ Each node except for the root node contains a value.<br />
➡️ All the descendants of a node share a common prefix associated to that node. For example, <code>are</code> and <code>art</code> share <code>ar</code> as the prefix.<br />

➡️ <b>Trie Operations</b>: inserting a new string, and searching for a given string.<br />

</div>
</div>

## Implementation of Trie

### General Function Calls around Trie

```
Implement a trie with insert, search, and startsWith methods.

Example:
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

Note:
You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

```

### Implementation of Trie - Java

#### Define TrieNode

<div class="section-container">
<div class="section-item pl0">
Class TrieNode:

➡️ A boolean variable isWord to indicate whether we can form a word or it's only a prefix.<br />
➡️ An array of TrieNode named children to store its children node.<br />
➡️ A constructor which initializes isWord to false, and children array of 26 letters(lowercase) will be used.<br />

</div>
<div class="section-item">

```java showLineNumbers
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;
    public TrieNode() {
        children = new TrieNode[26];
        isEndOfWord = false;
    }
}
```

</div>
</div>

<hr/>

#### Insertion into Trie

<div class="section-container">
<div class="section-item pl0">
Given a new string word, we would iterate through it. Starting from the dummy node root and the first character c, we would check whether c is in root.children:

➡️ if it is, we can move to that node and increment to next character as well;<br />
➡️ if not, we need to initiate a new node so that we can attach c to the trie.<br />

</div>
<div class="section-item">

```java
public void insert(String word) {
    TrieNode node = root;
    for (int i = 0; i < word.length(); i++) {
        int index = word.charAt(i) - 'a';
        if (node.children[index] == null) {
            node.children[index] = new TrieNode();
        }
        node = node.children[index];
    }
    node.isEndOfWord = true;
}
//Time Complexity: O(L) where L is the length of the word.
```

</div>
</div>

<hr/>

#### Searching in Trie

<div class="section-container">
<div class="section-item pl0">
Similarly to insert, we also start the iteration with the first character and the dummy node. If we do not find the character in its children, we can return false. Remember to check isWord after reaching the end of word.
</div>

<div class="section-item">

```java
public boolean search(String word) {
    TrieNode current_node = root;
    for (int i = 0; i < word.length(); i++) {
        int index = word.charAt(i) - 'a';
        if (current_node.children[index] == null) return false;
        current_node = current_node.children[index];
    }
    return current_node.isWord;
}

//Time Complexity: O(L) where L is the length of the word.
```

</div>
</div>

<hr/>

#### StartsWith in Trie

<div class="section-container">
<div class="section-item pl0">
The only different to search is that, we do not need to check isWord at the end.
</div>
<div class="section-item">

```java

public boolean startsWith(String prefix) {
    TrieNode current_node = root;
    for (int i = 0; i < prefix.length(); i++) {
        int index = prefix.charAt(i) - 'a';
        if (current_node.children[index] == null) return false;
        current_node = current_node.children[index];
    }
    return true;
}
//Time Complexity: O(L) where L is the length of the prefix.

```

</div>
</div>

<hr/>

#### Visualization of Trie

![Trie Insertion](_img/trie/trie.gif)

## References

<ul>
<li>
<a href="https://medium.com/@prefixyteam/how-we-built-prefixy-a-scalable-prefix-search-service-for-powering-autocomplete-c20f98e2eff1">How We Built Prefixy: A Scalable Prefix Search Service for Powering Autocomplete</a>
</li>
</ul>
