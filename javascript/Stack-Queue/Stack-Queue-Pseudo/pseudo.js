"use strict";
const Stack = require("../Stack/stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    let val = this.stack1.pop();
    while (val !== null) {
      this.stack2.push(val);
      val = this.stack1.pop();
    }
    let res = this.stack2.pop();
    let val2 = this.stack2.pop();
    while (val2 !== null) {
      this.stack1.push(val2);
      val2 = this.stack2.pop();
    }

    return res;
  }
}

const x = new PseudoQueue();

x.enqueue(4);
x.enqueue(5);
x.enqueue(6);

console.log(x.dequeue());
console.log(x.dequeue());
console.log(x.dequeue());

module.exports = PseudoQueue;
