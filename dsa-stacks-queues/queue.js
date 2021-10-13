/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newItem = new Node(val);
    console.log(this.last);
    if (this.last) {
      this.last.next = newItem;
      this.last = newItem;
    } else {
      this.first = newItem;
      this.last = newItem;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size == 0) {
      throw new Error();
    } else if (this.size === 1) {
      let oldFirst = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return oldFirst.val;
    } else {
      let oldFirst = this.first;
      this.first = this.first.next;
      this.size--;
      return oldFirst.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0 && this.first === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
