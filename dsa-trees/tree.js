/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
  findDFS(val) {
    const toVisitStack = [this];
    while (toVisitStack.length) {
      const current = toVisitStack.pop();
      if (current.val === val) {
        return current;
      }
      for (let child of current.children) {
        toVisitStack.push(child);
      }
    }
  }
  // look at everything at one level before going down
  findBFS(val) {
    const toVisitQueue = [this];
    while (toVisitQueue.length) {
      const current = toVisitQueue.shift();
      if (current.val === val) {
        return current;
      }
      for (let child of current.children) {
        toVisitQueue.push(child);
      }
    }
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let total = this.root.val;
    function sum(node) {
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          sum(child);
        }
      }
    }
    sum(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let total = this.root.val % 2 === 0 ? 1 : 0;
    function even(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          total++;
        }
        if (child.children.length > 0) {
          even(child);
        }
      }
    }
    even(this.root);
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let total = this.root.val > lowerBound ? 1 : 0;
    function findGreater(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          total++;
        }
        if (child.children.length > 0) {
          findGreater(child);
        }
      }
    }
    findGreater(this.root);
    return total;
  }
}
module.exports = { Tree, TreeNode };
