// Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’
// sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
// k = 3
// 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => null

// 3 => 2 => 1 => 4 => 5 => 6 => 8 => 7 => null


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


function reverseAlternatingElementSubList(head, k) {

    let currentNode = head;
    let prevNode = null;
    let isFirst = true;
    let tail = null;

    while(true) {
        const subTail = currentNode;
        console.log(currentNode.value, 'ppp')
        let i = 0;
        while(currentNode !== null && i < k) {
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            i += 1;
        }
        subTail.next = currentNode;
        if (tail === null) {
            head = prevNode;
        } else {
            tail.next = prevNode;
        }

        while (i > 0 && currentNode !== null) {
            console.log(i)
            prevNode = currentNode;
            currentNode = currentNode.next;

            i -= 1;
        }

        tail = prevNode;
        print(head)

        prevNode = null;

        if (currentNode === null) break;
    }
    return head
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
// head.next.next.next.next.next.next.next.next = new Node(9);
// head.next.next.next.next.next.next.next.next.next = new Node(10);
// head.next.next.next.next.next.next.next.next.next.next = new Node(11);
// head.next.next.next.next.next.next.next.next.next.next.next = new Node(12);
print(head)
let reversedLinkedList = reverseAlternatingElementSubList(head, 3);
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
