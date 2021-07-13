// This problem was asked by Google.

// Given the head of a singly linked list, swap every two nodes and return its head.

// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
        
    }
}

// class LinkedList {
//     constructor(head) {
//         this.head = new Node(head);
//         this.current = this.head;
//     }

//     add(value) {
//         this.current.next = new Node(value);
//         this.current = this.current.next;
//     }

// }

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function SwapEveryTowNode(head, limit) {
    let prevNode = null;
    let currNode = head;
    let nextNode = head.next;
    let newHead = null;
    let newEnd = null;
    let length = 0;

    while(currNode !== null) {
        console.log('++++++')
        if(prevNode !== null) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode.next = null;
            if (!newHead) {
                newHead = currNode;
                newEnd = prevNode;
            } else {
                newEnd.next = currNode;
                newEnd = prevNode;
            }
            currNode = nextNode;
            length += 1;
            console.log(length)
            if(length === limit) prevNode = null;
        } else {
            console.log(currNode)
            prevNode = currNode;
            currNode = currNode.next;
        }
    }

    let k = newHead;
    let str = '';
    while(k !== null) {
        str += k.value;
        k = k.next;
    }

    console.log(str)

    return head;

}

console.log(SwapEveryTowNode(head, 3))