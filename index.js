import { LinkedList } from "./linked-list.js";

const linkedList = new LinkedList();
console.log("add node to empty list");
linkedList.append("A");
console.log(linkedList.list.value);
console.log(linkedList.list.nextNode);
console.log("add node to non empty list");
linkedList.append("B");
console.log(linkedList.list.value);
console.log(linkedList.list.nextNode.value);
console.log(linkedList.list.nextNode.nextNode);
