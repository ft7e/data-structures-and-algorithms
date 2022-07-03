# Trees

## Binary Search Tree

Create a Binary Search Tree class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
Add
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.

## Node

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

## Approach & Efficiency

Depth first call stack via recursion with Node approach

The Big O for the Binary Tree is O(n)

The Big O for the Binary Tree Search is O(h) or O(hight)

# Tests

PASS Trees/**test**/binaryTree.test.js
Binary Test
✓ constructor (3 ms)
✓ preOrder (1 ms)
✓ inOrder (1 ms)
✓ postOrder
✓ Binary Search (1 ms)
✓ Can successfully instantiate an empty tree (1 ms)
✓ Can successfully add a left child and right child to a tree
