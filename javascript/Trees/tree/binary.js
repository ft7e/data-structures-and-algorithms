"use strict";

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  PreOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  InOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  PostOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  getMaxVal() {
    let max = 0;
    let traverse = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return max;
  }
  breadthFirst(root) {
    if (!root) return [];
    const queue1 = [root];
    const result = [];
    while (queue1.length > 0) {
      const current = queue1.pop();
      result.push(current.value);
      if (current.left) queue1.unshift(current.left);
      if (current.right) queue1.unshift(current.right);
    }
    return result;
  }
}

module.exports = BinaryTree;
