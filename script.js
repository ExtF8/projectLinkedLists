import { LinkedLists } from './LinkedList.js';
import { ListNode } from './ListNode.js';

let node1 = new ListNode('test1');
let node2 = new ListNode('test2');
node1.nextNode = node2;

let linkedList = new LinkedLists(node1);

// console.log(node1, node2);
console.log(linkedList);
// console.log(linkedList.head.nextNode.nextNode)