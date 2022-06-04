"use strict";

// Require our linked list implementation
const LinkedList = require("../index");

describe("Instantiate a Linked List", () => {
  const linked = new LinkedList();
  it("works", () => {
    expect(linked.head).toBeFalsy();
  });
});

describe("Can insert to linked list", () => {
  const linked = new LinkedList();
  linked.insert(4);
  it("works", () => {
    expect(linked.head.value).toEqual(4);
  });
});

describe("Head points always to the first element", () => {
  const linked = new LinkedList();
  linked.insert(4);
  linked.insert(24);
  linked.insert(62);
  linked.insert(192);
  it("works", () => {
    expect(linked.head.value).toEqual(192);
  });
});

describe("Can properly insert multiple nodes into the linked list", () => {
  const linked = new LinkedList();
  let arr = [];
  for (let i = 0; i < 50; i++) {
    linked.insert(i);
    arr.push(i);
  }
  it("works", () => {
    arr.forEach((val) => {
      expect(linked.includes(val)).toBeTruthy();
    });
  });
});

describe("Will return true when finding a value within the linked list that exists", () => {
  const linked = new LinkedList();
  linked.insert(4);
  linked.insert(24);
  linked.insert(62);
  linked.insert(192);
  it("works", () => {
    expect(linked.includes(24)).toBeTruthy();
  });
});

describe("Will return false when searching for a value in the linked list that does not exist", () => {
  const linked = new LinkedList();
  linked.insert(4);
  linked.insert(24);
  linked.insert(62);
  linked.insert(192);
  it("works", () => {
    expect(linked.includes(94)).toBeFalsy();
  });
});

describe("Can properly return a collection of all the values that exist in the linked list", () => {
  const linked = new LinkedList();
  linked.insert(4);
  linked.insert(5);
  linked.insert(100);
  it("works", () => {
    expect(linked.toString()).toBe("{100}=>{5}=>{4}=>NULL");
  });
});
