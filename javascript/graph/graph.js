const Vertex = require("./vertex");
const Edge = require("./edge");
const Linkedlist = require("./linked-list");
const Queue = require("./queue");
class Graph {
  constructor() {
    this.adjecentList = new Map();
  }
  add(value) {
    this.adjecentList.set(value, []);
  }
  addEdge(start, end) {
    let arr = this.adjecentList.get(start);
    let edge = new Edge(end);
    arr.push(edge);
  }
  breadthFirst(node) {
    // console.log({node});
    let nodes = new Linkedlist();
    let breadth = new Queue();
    let visited = new Set();
    breadth.enqueue(node);
    visited.add(node);
    console.log(node.value);
    while (!breadth.isEmpty()) {
      let front = breadth.dequeue();
      nodes.append(front);
      let arr = this.adjecentList.get(front);
      arr.forEach((element) => {
        if (!visited.has(element.vertex)) {
          console.log(element.vertex.value);
          visited.add(element.vertex);
          breadth.enqueue(element.vertex);
        }
      });
    }
    return nodes;
  }
}
let graph1 = new Graph();
let one = new Vertex(1);
let two = new Vertex(2);
let three = new Vertex(3);
let four = new Vertex(4);
graph1.add(one);
graph1.add(two);
graph1.add(three);

graph1.add(four);
graph1.addEdge(one, one);
graph1.addEdge(one, two);
graph1.addEdge(two, three);
graph1.breadthFirst(one);
