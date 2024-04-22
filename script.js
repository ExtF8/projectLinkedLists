import { LinkedLists } from './LinkedList.js';
import { ListNode } from './ListNode.js';

let node0 = new ListNode('test0');
let node1 = new ListNode('test1');
let node2 = new ListNode('test2');
let node3 = new ListNode('test3');
let node4 = new ListNode('test4');
let node5 = new ListNode('test5');
let node6 = new ListNode('test6');
let node7 = new ListNode('test7');
let node8 = new ListNode('test8');
let node9 = new ListNode('test9');

let linkedList = new LinkedLists();

linkedList.append(node1.value);
linkedList.append(node2.value);
linkedList.append(node3.value);
linkedList.append(node4.value);
linkedList.append(node5.value);
linkedList.append(node6.value);
linkedList.append(node7.value);
linkedList.append(node8.value);
linkedList.append(node9.value);
linkedList.prepend(node0.value);

const headNode = linkedList.head;
const tailNode = linkedList.tail;

let index = 16;
const nodeAtIndex = linkedList.at(index);

// console.log(headNode);
// console.log(tailNode);

console.log(`node At Index ${index}:`, nodeAtIndex);

// linkedList.pop();
// linkedList.listAllNodes();
// console.log(linkedList.size());

let nodeValueString = 'test5.1';
let nodeToInsertAtIndex = 6;
linkedList.insertAt(nodeValueString, nodeToInsertAtIndex);

let value = 'test';
let contains = linkedList.contains(value);
console.log(`Does list contains this value - ${value}:`, contains);

let findValue = 'test6';
let indexOfValue = linkedList.find(findValue);
console.log(`Index of value ${findValue} is`, indexOfValue);

let allNodeValuesAsStrings = linkedList.toString();
console.log(allNodeValuesAsStrings);

// linkedList.removeAt(4);

linkedList.listAllNodes();
linkedList.listAllNodesValues();
console.log(linkedList.size());
