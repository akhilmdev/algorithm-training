// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

// k = 3
// 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => null
// 6 => 7 => 8 => 1 => 2 => 3 => 4 => 5 => null

// k = 8
// 1 => 2 => 3 => 4 => 5 => 6 => null
// 5 => 6 => 1 => 2 => 3 => 4 => null

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function rotateALinkedList(head, k) {

    let currentNode = head;
    let nextNode = null;

    let n = 0;
    while(currentNode !== null) {
        currentNode = currentNode.next;
        n += 1;
    }

    k = (n < k) ? k - n : k;
    let tailIndex = n - k;
    currentNode = head;

    while(tailIndex !== 1) {
        currentNode = currentNode.next;
        nextNode = currentNode.next;
        tailIndex -= 1;
    }

    currentNode.next = null;
    const newHead = nextNode;
    
    while(nextNode.next != null) {
        nextNode = nextNode.next;
    }

    nextNode.next = head;
    head = newHead;

    return head;
}

// Time => O(N)
// Space => O(1)



const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);
// head.next.next.next.next.next.next.next = new Node(8);
// head.next.next.next.next.next.next.next.next = new Node(9);
// head.next.next.next.next.next.next.next.next.next = new Node(10);
// head.next.next.next.next.next.next.next.next.next.next = new Node(11);
// head.next.next.next.next.next.next.next.next.next.next.next = new Node(12);
print(head)
let linkedList = rotateALinkedList(head, 7);
print(linkedList);
function print(head) {
    if (head === null) return;
    let linkedList = ''
    while (head !== null) {
        linkedList += head.value + ' ';
        head = head.next;
    }
    console.log(linkedList)
}
