class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray) {
      this.addVertex(node);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let node of this.nodes) {
      node.adjacent.delete(vertex);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let finalVals = [];
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      finalVals.push(current.value);
      if (current.adjacent !== null) {
        for (let connection of current.adjacent) {
          if (!seen.has(connection)) {
            toVisitStack.push(connection);
            seen.add(connection);
          }
        }
      }
    }
    console.log(finalVals);

    return finalVals;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisitQueue = [start];
    let seen = new Set(toVisitQueue);
    let finalVals = [];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      finalVals.push(current.value);

      if (current.adjacent !== null) {
        for (let connection of current.adjacent) {
          if (!seen.has(connection)) {
            toVisitQueue.push(connection);
            seen.add(connection);
          }
        }
      }
    }

    return finalVals;
  }
}

module.exports = { Graph, Node };
