"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    let oldHead = this.head;
    this.head = new Node(value, oldHead);
  }

  includes(value) {
    let head = this.head;
    let res = false;
    while (head) {
      if (head.value === value) {
        res = true;
        break;
      }
      head = head.next;
    }
    return res;
  }

  toString() {
    let head = this.head;
    let res = "";
    while (head) {
      res += `{${head.value}}=>`;
      head = head.next;
    }
    res += `NULL`;
    return res;
  }
}

module.exports = LinkedList;
