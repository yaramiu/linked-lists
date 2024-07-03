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

  head() {
    return this.list;
  }

  tail() {
    if (!this.list) {
      return this.list;
    } else {
      let currentNode = this.list;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  at(index) {
    if (index < 0 || index > this.size() - 1 || !this.list) {
      throw new Error(
        "Index must be non-negative, less than the size of the list, and list cannot be empty"
      );
    }

    let currentNode = this.list;
    let currentIndex = 0;
    while (currentNode.nextNode) {
      if (index === currentIndex) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return currentNode;
  }
}
