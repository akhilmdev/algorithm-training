// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        
        console.log(fast.value, slow.value)
        if (fast.value === slow.value) {
            return true;
        }
    }
    return false;
}

function nodesInCycle(head) {
    let slow = head;
    let fast = head;
    let count = null;
    
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (count) count += 1;
        if (fast.value === slow.value) {
            if (count > 1) return count - 1;
            count = 1;
        }
    }
    return count - 1;
}



const head = new Node(5);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(6);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next = head.next.next;

console.log(hasCycle(head));
console.log(nodesInCycle(head));

space => O(N);
time => O(1);