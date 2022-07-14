"use strict";
let BinaryTree = require("../tree/binary");
let Node = require("../tree/node");

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);

one.left = two;
two.left = four;
two.right = three;
four.right = seven;
three.left = six;
three.right = five;

let tree = new BinaryTree(one);
const breadthFirst = (tree) => {
  if (!tree.root) return [];
  const queue1 = [tree.root];
  const result = [];
  while (queue1.length > 0) {
    const current = queue1.pop();
    result.push(current.value);
    if (current.left) queue1.unshift(current.left);
    if (current.right) queue1.unshift(current.right);
  }
  return result;
};
console.log(breadthFirst(tree));
module.exports = breadthFirst;
