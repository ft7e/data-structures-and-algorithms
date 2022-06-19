"use strict";

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
  }

  insert(val) {
    /** insert to the right */
    let root = this.head;
    if (root.value === null) {
      root.value = val;
      return;
    }
    while (root.next) {
      root = root.next;
    }
    root.next = new Node(val);
  }
}

const zipped = (l1, l2) => {
  let val = new LinkedList();
  let link1 = l1.head;
  let link2 = l2.head;
  while (link1 || link2) {
    if (link1.value != null) {
      val.insert(link1.value);
    }
    if (link2.value != null) {
      val.insert(link2.value);
    }
    link1 = link1?.next || null;
    link2 = link2?.next || null;
  }
  return val;
};
module.exports = { zipped, LinkedList };
