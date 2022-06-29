"use strict";
const Node = require("../Stack/node");

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.length++;
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;
    }
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.top;
    this.top = node.next;
    this.length--;
    return node.value;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }
  validateBrackets(str) {
    for (const element of str.split("")) {
      if (element === "(" || element === "[" || element === "{") this.push(str);
      else if (element === ")" || element === "]" || element === "}") {
        this.pop();
      } else {
        return false;
      }
    }
    return this.length === 0 ? true : false;
  }
}

const stack1 = new Stack();
console.log(stack1.validateBrackets("([{}])"));
