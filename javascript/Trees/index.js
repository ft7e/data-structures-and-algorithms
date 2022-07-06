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
    let max = this.root.value;
    let search = (node) => {
      if (node.value > max) return (max = node.value);

      if (node.right) {
        if (node.right.value > max) {
          max = node.right.value;
          search(node.right);
        }
      }
      if (node.left) {
        if (node.left.value > max) {
          search(node.left);
        }
      }
    };
    search(this.root);
    return max;
  }
}
