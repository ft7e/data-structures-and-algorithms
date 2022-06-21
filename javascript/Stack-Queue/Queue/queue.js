"use strict";

const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    return this.front === null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
      this.length++;
    } else {
      this.rear.next = node;
      this.rear = node;
      this.length++;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.front;
    this.front = node.next;
    this.length--;
    return node.value;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }
}
module.exports = Queue;
