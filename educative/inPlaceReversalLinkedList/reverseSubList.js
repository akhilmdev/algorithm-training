// Problem Statement #
// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// 1 =>| 2 => 3 => 4 => 5 |=> 6 => null
function reverseSubList(head, p, q) {
    let currentNode = head;
    let prevNode = null;
    let subHead = null;
    let subTail = null;
    let index = 1;

    while(currentNode !== null) {
        if (index > p && index <= q) {
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
            if (index === q) {
                subHead ? subHead.next = currentNode : head = currentNode;
                subTail.next = nextNode;
            }
            prevNode = currentNode;
            currentNode = nextNode;
        } else {
            if (index === p) {
                subHead = prevNode;
                subTail = currentNode;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        index += 1;
    }
    print(head)
    return head;
}

Time => O(N)
Space => O(1)

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

reversedLinkedList = reverseSubList(head, 2, 6);
print(reversedLinkedList);
function print(head) {
    let linkedList = ''
    while (head !== null) {
        linkedList += head.value + ' ';
        head = head.next;
    }
    console.log(linkedList)
}
