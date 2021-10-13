/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
  getIdx(idx) {
    // find node at idx
    let current = this.head;
    let count = 0;
    while (current !== null && count !== idx) {
      count++;
      current = current.next;
    }

    return current;
  }
  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // if there is no start the new node is the tail and the start
      this.head = newNode;
      this.tail = newNode;
    } else {
      // chain to end of current tail
      this.tail.next = newNode;
      // set tail as new node
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // if there i no value at the start, the new node is the head
      // and there is nothing to move!
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.getIdx(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this.getIdx(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // if no other nodes just add to beg
    if (idx === 0) return this.unshift(val);
    // if adding to end push at end
    if (idx === this.length) return this.push(val);

    let prev = this.getIdx(idx - 1);

    // make new node
    let newNode = new Node(val);

    //set new nodes next as the next  of the old node that used to be in its spot
    newNode.next = prev.next;
    // add new node as the next node after prev
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      let oldHead = this.head.val;
      // set head as node after current head
      this.head = this.head.next;
      this.length--;
      if (this.length < 2) this.tail = this.head;
      return oldHead;
    }
    if (idx === this.length - 1) {
      let oldTail = this.tail.val;
      let newTail = this.getIdx(this.length - 2);
      newTail.next = null;

      this.tail = newTail;
      this.length--;
      if (this.length < 2) this.head = this.tail;
      return oldTail;
    }
    let oldVal = this.getIdx(idx).val;
    let prev = this.getIdx(idx - 1);
    // make the node that comes after the prev node that came after the removed node
    prev.next = prev.next.next;
    this.length--;
    return oldVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let count = 0;
    let amount = this.length;
    while (currentNode) {
      count += currentNode.val;
      currentNode = currentNode.next;
    }

    return count / amount || 0;
  }
}

module.exports = LinkedList;
