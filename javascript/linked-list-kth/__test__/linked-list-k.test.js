"use strict";

const LinkedList = require("../linkedlist");
describe("Linked List Test", () => {
  test("Where k is greater than the length of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("a");
    linkedList.Insert("b");
    linkedList.Insert("c");
    expect(linkedList.kthFromEnd(5)).toBe("Exception");
  });
  test("Where k and the length of the list are the same", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("a");
    linkedList.Insert("b");
    linkedList.Insert("c");
    expect(linkedList.kthFromEnd(3)).toBe("c");
  });
  test("Where k is not a positive integer", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("a");
    linkedList.Insert("b");
    linkedList.Insert("c");
    expect(linkedList.kthFromEnd(-1)).toBe("Exception");
  });
  test("Where the linked list is of a size 1", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("k");
    expect(linkedList.kthFromEnd(1)).toBe("k");
  });
});
