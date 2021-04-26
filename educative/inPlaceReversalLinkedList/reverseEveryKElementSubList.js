// Problem Statement #
// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => null

// 3 => 2 => 1 => 6 => 5 => 4 => 8 => 7 => null


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseEveryKElementSubList(head, k) {
    let index = 0;
    let currentNode = head;
    let subTail = head;
    let prevNode = null;
    let newHead = null;
    let newTail = null;

    while (currentNode !== null) {
        if (index === k) {
            if (newHead === null) newHead = prevNode;
            if (newTail !== null) {
                newTail.next = prevNode;
            }

            prevNode = null;

            newTail = subTail;
            subTail = currentNode;

            index = 0;
        } else {
            const nextNode = currentNode ? currentNode.next : null;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            index += 1;
        }
    }

    newTail.next = prevNode;
    return newHead;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next.next.next = new Node(10);
head.next.next.next.next.next.next.next.next.next.next = new Node(11);
// head.next.next.next.next.next.next.next.next.next.next.next = new Node(12);
print(head)
let reversedLinkedList = reverseEveryKElementSubList(head, 3);
print(reversedLinkedList);
function print(head) {
    if (head === null) return;
    let linkedList = ''
    while (head !== null) {
        linkedList += head.value + ' ';
        head = head.next;
    }
    console.log(linkedList)
}
