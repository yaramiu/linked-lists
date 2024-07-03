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
}
