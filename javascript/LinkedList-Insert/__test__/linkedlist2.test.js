"use strict";
const LinkedList = require("../linkedlist");

describe("Linked List Test", () => {
  test("Can  create an empty linked list", () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });
  test("Can insert to linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("Alpha");
    expect(linkedList.head.value).toBe("Alpha");
  });
  test("The head point to the first node in the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("a");
    linkedList.Insert("b");
    linkedList.Insert("c");
    linkedList.Insert("d");
    linkedList.Insert("e");
    expect(linkedList.head.value).toBe("a");
  });
  test("Can insert multiple nodes to linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("Alpha");
    linkedList.Insert("Beta");
    linkedList.Insert("Gamma");
    linkedList.Insert("Omega");
    linkedList.Insert("Rolex");
    linkedList.Insert("IDK");
    expect(linkedList.length > 0).toBe(true);
  });
  test("Will return true when finding a value within the linked list that exists", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("Zamer");
    expect(linkedList.Includes("Zamer")).toBe(true);
  });
  test("Will return fale when searching for a value in the linked list that does not exists", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("Smer");
    expect(linkedList.Includes("Lok")).toBe(false);
  });
  test("Can properly return a collection of all the values that exist in the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("a");
    linkedList.Insert("b");
    linkedList.Insert("c");
    linkedList.Insert("d");
    linkedList.Insert("e");
    expect(linkedList.ToString()).toBe("a -> b -> c -> d -> e -> ");
  });
  test("Can successfully add a node to the end of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("a");
    linkedList.Insert("b");
    linkedList.Insert("c");
    linkedList.Insert("d");
    linkedList.Insert("e");
    linkedList.append("f");
    expect(linkedList.ToString()).toBe("a -> b -> c -> d -> e -> f -> ");
  });
  test("Can successfully add multiple nodes to the end of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("a");
    linkedList.Insert("b");
    linkedList.Insert("c");
    linkedList.Insert("d");
    linkedList.Insert("e");
    linkedList.append("f");
    linkedList.append("g");
    linkedList.append("h");
    expect(linkedList.ToString()).toBe(
      "a -> b -> c -> d -> e -> f -> g -> h -> "
    );
  });
  test("Can successfully insert a node before a node located in the middle of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("S");
    linkedList.Insert("a");
    linkedList.Insert("q");
    linkedList.insertBefore("a", "k");
    expect(linkedList.ToString()).toBe("S -> k -> a -> q -> ");
  });
  test("Can successfully insert a node before the first node of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("B");
    linkedList.Insert("d");
    linkedList.Insert("x");
    linkedList.insertBefore("B", "l");
    expect(linkedList.ToString()).toBe("l -> B -> d -> x -> ");
  });
  test("Can successfully insert after a node in the middle of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("X");
    linkedList.Insert("a");
    linkedList.Insert("m");
    linkedList.insertAfter("a", "b");
    expect(linkedList.ToString()).toBe("X -> a -> b -> m -> ");
  });
  test("Can successfully insert a node after the last node of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.Insert("L");
    linkedList.Insert("K");
    linkedList.Insert("h");
    linkedList.insertAfter("h", "Q");
    expect(linkedList.ToString()).toBe("L -> K -> h -> Q -> ");
  });
});
