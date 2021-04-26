// Rearrange a LinkedList (medium) #
// Given the head of a Singly LinkedList, write a method to modify
// the LinkedList such that the nodes from the second half of the
// LinkedList are inserted alternately to the nodes from the first half
// in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null,
// your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

// Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

// Example 1:

// Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
// Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
// Example 2:

// Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
// Output: 2 -> 10 -> 4 -> 8 -> 6 -> null

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function RearrageALinkedList(head) {

    let { slow } = findMiddleLinkedList(head);

    const secondHalf = reverseLinkedList(slow);

    const pointer = rearrageLinkedList(head, secondHalf);

    return pointer;
}

function reverseLinkedList(head) {
    let prev = null;
    while (head !== null) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

function findMiddleLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return { slow, fast }
}

function rearrageLinkedList(head, secondHalf) {
    const headCopy = head;
    while (head !== null && secondHalf !== null) {
        const next = head.next;
        head.next = secondHalf;
        head = next;

        const secondHalfNext = secondHalf.next;
        secondHalf.next = next;
        secondHalf = secondHalfNext;
    }
    if (head !== null) head.next = null;
    return headCopy;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
displayValues(RearrageALinkedList(head));
head.next.next.next.next.next = new Node(12);

function displayValues(head) {
    let currentNode = head;
    while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}