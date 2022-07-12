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
console.log(tree.breadthFirst(one));
