"use strict";

const Stack = require("../Stack/stack");
const Queue = require("../Queue/queue");

describe("Stack and Queue test", () => {
  it("Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toBe(1);
  });
  it("Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.top.value).toBe(5);
  });
  it("Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.pop();
    expect(stack.top.value).toBe(4);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });
  it("Can successfully peak the next item on the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.peak()).toBe(5);
  });
  it("Can successfully instantiate an empty stack", () => {
    let stack = new Stack();
    expect(stack.top).toBeNull();
  });
  it("Calling pop or peak on empty stack raises exception", () => {
    let stack = new Stack();
    expect(() => stack.pop()).toBeNull;
    expect(() => stack.peak()).toBeNull;
  });
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toBe(1);
  });
  it("Can successfully enqueue multiple values into a queueCan successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.front.value).toBe(1);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(1);
  });
  it("Can successfully peak into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.peak()).toBe(1);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });
  it("Can successfully instantiate an empty queue", () => {
    let queue = new Queue();
    expect(queue.front).toBeNull();
  });
  it("Calling dequeue or peak on empty queue raises exception", () => {
    let queue = new Queue();
    expect(() => queue.dequeue()).toBeNull;
    expect(() => queue.peak()).toBeNull;
  });
});
