import { LinkedList } from "./linked-list.js";

let linkedList = new LinkedList();
console.log("add node to empty list");
linkedList.append("A");
console.log(linkedList.list);

console.log("add node to non empty list");
linkedList.append("B");
console.log(linkedList.list);

console.log("");

linkedList = new LinkedList();

console.log("prepend node to empty list");
linkedList.prepend("A");
console.log(linkedList.list);

console.log("prepend node to non empty list");
linkedList.prepend("B");
console.log(linkedList.list);

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

console.log("");

linkedList = new LinkedList();

console.log("get head of empty list");
console.log(linkedList.head());

console.log("get head of list with one node");
linkedList.append("A");
console.log(linkedList.head());

console.log("get head of multi node list with nodes appended");
linkedList.append("B");
console.log(linkedList.head());

console.log("get head of multi node list with nodes prepended");
linkedList = new LinkedList();
linkedList.append("A");
linkedList.prepend("B");
console.log(linkedList.head());
