// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let currentNode = head;
    let prevNode = null;

    while (currentNode !== null) {
        const nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
    }
    return prevNode;

}

// Time => O(N);
// Space => O(1);

const head = new Node(5);
head.next = new Node(8);
head.next.next = new Node(10);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(11);

reversedLinkedList = reverseLinkedList(head);

while (reversedLinkedList !== null) {
    console.log(reversedLinkedList.value)
    reversedLinkedList = reversedLinkedList.next;
}