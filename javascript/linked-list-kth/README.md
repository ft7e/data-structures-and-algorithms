# Singly linked list

Build a linked list that can detecte if there is a head node or not if not it will create one if there is a head node it will create a new node next to the head it called tail node and I can test if there is a specific value in the nodes or not.

![pic](linkedlistt3.png)

## Big O

big O(n^2) Time & big O(1)

## Test

PASS linked-list-kth/**test**/linked-list-k.test.js
Linked List Test
✓ Where k is greater than the length of the linked list (2 ms)
✓ Where k and the length of the list are the same
✓ Where k is not a positive integer (1 ms)
✓ Where the linked list is of a size 1

---------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files | 38.46 | 37.5 | 50 | 37.66 |
linkedlist.js | 38.46 | 37.5 | 50 | 37.66 | 28-44,49-98,116
---------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests: 4 passed, 4 total
Snapshots: 0 total
Time: 0.806 s, estimated 1 s
Ran all test suites matching /linked-list-k/i.
