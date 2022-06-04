"use strict";

const LinkedList = require("../index");

describe("start a linked list", () => {
  const linked = new LinkedList();
  test("if it works", () => {
    expect(linked.head).toBeFalsy();
  });
});

describe("Can insert to linked list", () => {
  const linked = new LinkedList();
  linked.insert(9);
  test("if it works", () => {
    expect(linked.head.value).toEqual(9);
  });
});

describe("if head is always on first element", () => {
  const linked = new LinkedList();
  linked.insert(9);
  linked.insert(66);
  linked.insert(105);
  linked.insert(982);
  test("if it works", () => {
    expect(linked.head.value).toEqual(982);
  });
});

describe("if can enter multiple nodes to the list", () => {
  const linked = new LinkedList();
  let arr = [];
  for (let i = 0; i < 32; i++) {
    linked.insert(i);
    arr.push(i);
  }
  test("if it works", () => {
    arr.forEach((item1) => {
      expect(linked.includes(item1)).toBeTruthy();
    });
  });
});

describe("will return true if value found", () => {
  const linked = new LinkedList();
  linked.insert(9);
  linked.insert(33);
  linked.insert(102);
  linked.insert(502);
  test("if it works", () => {
    expect(linked.includes(33)).toBeTruthy();
  });
});

describe("Will return false when searching for a value in the linked list that does not exist", () => {
  const linked = new LinkedList();
  linked.insert(9);
  linked.insert(33);
  linked.insert(102);
  linked.insert(502);
  test("if it works", () => {
    expect(linked.includes(94)).toBeFalsy();
  });
});

describe("Can properly return a collection of all the values that exist in the linked list", () => {
  const linked = new LinkedList();
  linked.insert(8);
  linked.insert(2);
  linked.insert(89);
  test("works", () => {
    expect(linked.toString()).toBe("{89}=>{2}=>{8}=>NULL");
  });
});
