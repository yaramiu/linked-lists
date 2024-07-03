import { Node } from "./node.js";

export class LinkedList {
  list = null;

  append(value) {
    const newNode = new Node(value);
    if (!this.list) {
      this.list = newNode;
    } else {
      let currentNode = this.list;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.list) {
      this.list = newNode;
    } else {
      newNode.nextNode = this.list;
      this.list = newNode;
    }
  }

  size() {
    if (!this.list) {
      return 0;
    } else {
      let numNodes = 1;
      let currentNode = this.list;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        numNodes++;
      }
      return numNodes;
    }
  }
}
