// Problem Statement #
// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

// Example 1:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
// Output: 3
// Example 2:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// Output: 4
// Example 3:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
// Output: 4

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMiddleOfTheLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
console.log(findMiddleOfTheLinkedList(head));
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

// Time => O(N)
// space => O(1)