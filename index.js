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

console.log("");

linkedList = new LinkedList();

console.log("empty list does not contain any value");
console.log(linkedList.contains("A"));

console.log("single node list contains value");
linkedList.append("A");
console.log(linkedList.contains("A"));

console.log("single node list does not contain value");
console.log(linkedList.contains("B"));

console.log("multi node list contains value");
linkedList.append("B");
console.log(linkedList.contains("B"));

console.log("multi node list does not contain value");
console.log(linkedList.contains("C"));

console.log("");

linkedList = new LinkedList();

console.log("cannot find index of empty list");
console.log(linkedList.find("A"));

console.log("find index of a value that exists in a single node list");
linkedList.append("A");
console.log(linkedList.find("A"));

console.log(
  "cannot find index of a value that does not exist in a single node list"
);
console.log(linkedList.find("B"));

console.log("find index of a value that exists in a multi node list");
linkedList.append("B");
console.log(linkedList.find("B"));

console.log(
  "cannot find index of a value that does not exist in a multi node list"
);
console.log(linkedList.find("C"));

console.log("");

linkedList = new LinkedList();

console.log("print empty list");
console.log(linkedList.toString());

console.log("print list with one node");
linkedList.append("A");
console.log(linkedList.toString());

console.log("print list with multiple nodes");
linkedList.append("B");
console.log(linkedList.toString());

console.log("");

linkedList = new LinkedList();

console.log("throw error if inserting with an invalid index");
try {
  linkedList.insertAt("A", -1);
} catch (Error) {
  console.error(Error);
}
try {
  linkedList.insertAt("A", 1);
} catch (Error) {
  console.error(Error);
}
try {
  linkedList.insertAt("A", 0);
} catch (Error) {
  console.error(Error);
}

console.log("insert at first element index");
linkedList.append("A");
console.log("list before:", linkedList.toString());
linkedList.insertAt("B", 0);
console.log("list after:", linkedList.toString());

console.log("insert at middle element index");
linkedList.prepend("C");
console.log("list before:", linkedList.toString());
linkedList.insertAt("D", 1);
console.log("list after:", linkedList.toString());

console.log("insert at last element index");
console.log("list before:", linkedList.toString());
linkedList.insertAt("E", 3);
console.log("list after:", linkedList.toString());

console.log("");

linkedList = new LinkedList();

console.log("remove at an invalid index");
try {
  linkedList.removeAt(-1);
} catch (Error) {
  console.error(Error);
}
try {
  linkedList.removeAt(1);
} catch (Error) {
  console.error(Error);
}
try {
  linkedList.removeAt(0);
} catch (Error) {
  console.error(Error);
}

console.log("remove at first element index from single node list");
linkedList.append("A");
console.log("list before:", linkedList.toString());
linkedList.removeAt(0);
console.log("list after:", linkedList.toString());

console.log("remove at first element index from multi node list");
linkedList.append("A");
linkedList.append("B");
console.log("list before:", linkedList.toString());
linkedList.removeAt(0);
console.log("list after:", linkedList.toString());

console.log("remove at middle element index");
linkedList.prepend("A");
linkedList.append("C");
console.log("list before:", linkedList.toString());
linkedList.removeAt(1);
console.log("list after:", linkedList.toString());

console.log("remove at last element index");
console.log("list before:", linkedList.toString());
linkedList.removeAt(1);
console.log("list after:", linkedList.toString());
