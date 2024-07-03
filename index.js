import { LinkedList } from "./linked-list.js";

let linkedList = new LinkedList();
console.log("add node to empty list");
linkedList.append("A");
console.log(linkedList.list.value);
console.log(linkedList.list.nextNode);

console.log("add node to non empty list");
linkedList.append("B");
console.log(linkedList.list.value);
console.log(linkedList.list.nextNode.value);
console.log(linkedList.list.nextNode.nextNode);

console.log("");

linkedList = new LinkedList();

console.log("prepend node to empty list");
linkedList.prepend("A");
console.log(linkedList.list.value);
console.log(linkedList.list.nextNode);

console.log("prepend node to non empty list");
linkedList.prepend("B");
console.log(linkedList.list.value);
console.log(linkedList.list.nextNode.value);
console.log(linkedList.list.nextNode.nextNode);

console.log("");

linkedList = new LinkedList();

console.log("size of empty list");
console.log(linkedList.size());

console.log("size of list with single node");
linkedList.append("A");
console.log(linkedList.size());

console.log("size of list with multiple nodes");
linkedList.append("B");
console.log(linkedList.size());
