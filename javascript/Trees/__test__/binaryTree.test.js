"use strict";

const BinaryTree = require("../tree/binary");
const Node = require("../tree/node");
const BinaryTreeSearch = require("../tree/binarySearch");

let tree = null;

describe("Binary Test", () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  test("constructor", () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });

  test("preOrder", () => {
    const preOrder = tree.PreOrder();
    expect(preOrder).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
  });

  test("inOrder", () => {
    const inOrder = tree.InOrder();
    expect(inOrder).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
  });

  test("postOrder", () => {
    const postOrder = tree.PostOrder();
    expect(postOrder).toEqual([8, 9, 7, 6, 2, 4, 5, 3, 1]);
  });

  test("Binary Search", () => {
    const tree1 = new BinaryTreeSearch();
    tree1.Add(10);
    tree1.Add(11);
    tree1.Add(5);
    tree1.Add(13);
    tree1.Add(13);
    tree1.Add(6);
    tree1.Add(15);
    expect(tree1.Contains(6)).toBeTruthy();
    expect(tree1.Contains(15)).toBeTruthy();
    expect(tree1.Contains(20)).toBeFalsy();
  });

  test("Can successfully instantiate an empty tree", () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  test("Can successfully add a left child and right child to a tree", () => {
    const tree1 = new BinaryTreeSearch();
    tree1.Add(10);
    tree1.Add(11);
    tree1.Add(5);

    expect(tree1.root.value).toEqual(10);
    expect(tree1.root.left.value).toEqual(5);
    expect(tree1.root.right.value).toEqual(11);
  });
  test("can return max val", () => {
    expect(tree.getMaxVal()).toEqual(9);
  });
});
