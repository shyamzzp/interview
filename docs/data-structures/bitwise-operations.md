---
tree_title: Bitwise Operations
description: This will cover the most of the topics that will be part of the Bitwise Operations.
last_modified: 2022-06-08T15:36:32.3632
---

# Bitwise Operations

<div class="section-container pl0 pr0">
<div class="section-item pl0">

## Bitwise OR (|)

This operator is a binary operator, denoted by ‘|’. It returns bit by bit OR of input values, i.e., if either of the bits is 1, it gives 1, else it shows 0.

| variable_1 | variable_2 | result | status    |
| ---------- | ---------- | ------ | --------- |
| true       | true       | true   | same      |
| true       | false      | true   | different |
| false      | true       | true   | different |
| false      | false      | false  | same      |

</div>
<div class="section-item pl0">

## Bitwise AND (&)

This operator is a binary operator, denoted by ‘&’. It returns bit by bit AND of input values, i.e., if both of the bits is 1, it gives 1, else it shows 0.

| variable_1 | variable_2 | result | status    |
| ---------- | ---------- | ------ | --------- |
| true       | true       | true   | same      |
| true       | false      | false  | different |
| false      | true       | false  | different |
| false      | false      | false  | same      |

</div>

</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

## Bitwise XOR (^)

This operator is a binary operator, denoted by ‘^’. It returns bit by bit XOR of input values, i.e., if the bits are different, it gives 1, else it shows 0.

| variable_1 | variable_2 | result | status    |
| ---------- | ---------- | ------ | --------- |
| true       | true       | false  | same      |
| true       | false      | true   | different |
| false      | true       | true   | different |
| false      | false      | false  | same      |

</div>
<div class="section-item pl0">

## Bitwise NOT (~)

This operator is a unary operator, denoted by ‘~’. It returns the one’s complement of the input value, i.e., it changes 0 to 1 and vice versa.

| variable_1 | result |
| ---------- | ------ |
| true       | false  |
| false      | true   |

</div>

</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

## Bitwise Left Shift (<<)

This operator is a binary operator, denoted by ‘<<’. It returns the value of the first operand, left shifted by the number of bits specified by the second operand.

| variable_1 | variable_2 | result |
| ---------- | ---------- | ------ |
| 1          | 1          | 2      |
| 1          | 2          | 4      |
| 1          | 3          | 8      |
| 1          | 4          | 16     |

</div>
<div class="section-item pl0">

## Bitwise Right Shift (>>)

This operator is a binary operator, denoted by ‘>>’. It returns the value of the first operand, right shifted by the number of bits specified by the second operand.

| variable_1 | variable_2 | result |
| ---------- | ---------- | ------ |
| 16         | 1          | 8      |
| 16         | 2          | 4      |
| 16         | 3          | 2      |

</div>

</div>

<div class="section-container pl0 pr0">
<div class="section-item pl0">

## Bitwise Unsigned Left Shift (<<<)

This operator is a binary operator, denoted by ‘<<<’. It returns the value of the first operand, left shifted by the number of bits specified by the second operand, with zeros placed in the least significant bits.

| variable_1 | variable_2 | result |
| ---------- | ---------- | ------ |
| 1          | 1          | 2      |
| 1          | 2          | 4      |
| 1          | 3          | 8      |
| 1          | 4          | 16     |

</div>
<div class="section-item pl0">

## Bitwise Unsigned Right Shift (>>>)

This operator is a binary operator, denoted by ‘>>>’. It returns the value of the first operand, right shifted by the number of bits specified by the second operand, with zeros placed in the most significant bits.

| variable_1 | variable_2 | result |
| ---------- | ---------- | ------ |
| 16         | 1          | 8      |
| 16         | 2          | 4      |
| 16         | 3          | 2      |

</div>

</div>
