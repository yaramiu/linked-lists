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

console.log("");

linkedList = new LinkedList();

console.log("get tail of empty list");
console.log(linkedList.tail());

console.log("get tail of list with one node");
linkedList.append("A");
console.log(linkedList.tail());

console.log("get tail of multi node list with nodes appended");
linkedList.append("B");
console.log(linkedList.tail());

console.log("get tail of multi node list with nodes prepended");
linkedList = new LinkedList();
linkedList.append("A");
linkedList.prepend("B");
console.log(linkedList.tail());

console.log("");

linkedList = new LinkedList();

console.log("throw error if getting a node at an invalid index");
try {
  linkedList.at(-1);
} catch (Error) {
  console.error(Error);
}
try {
  linkedList.at(1);
} catch (Error) {
  console.error(Error);
}
try {
  linkedList.at(0);
} catch (Error) {
  console.error(Error);
}

linkedList.append("A");
linkedList.append("B");
linkedList.append("C");

console.log("get node at first element index");
console.log(linkedList.at(0));

console.log("get node at middle element index");
console.log(linkedList.at(1));

console.log("get node at last element index");
console.log(linkedList.at(2));

console.log("");

linkedList = new LinkedList();

console.log("throw error if popping from an empty list");
try {
  linkedList.pop();
} catch (Error) {
  console.error(Error);
}

console.log("popping from a list with a single node");
linkedList.append("A");
console.log("list before:", linkedList.list);
linkedList.pop();
console.log("list after:", linkedList.list);

console.log("popping from a list with multiple nodes");
linkedList.append("A");
linkedList.append("B");
console.log("list before:", linkedList.list);
linkedList.pop();
console.log("list after:", linkedList.list);
