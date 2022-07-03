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
  peak() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }
  duckDuckGoose(num) {
    let counter = 1;
    while (this.length > 1) {
      let parsedNum = parseInt(num);
      if (counter % parsedNum === 0) console.log(`Deleted ${this.dequeue()}`);
      else {
        let deletedElement = this.dequeue();
        this.enqueue(deletedElement);
      }
      counter++;
    }
    return this.front.value;
  }
}
const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
queue1.enqueue(6);

console.log(queue1.duckDuckGoose(3));

module.exports = Queue;
