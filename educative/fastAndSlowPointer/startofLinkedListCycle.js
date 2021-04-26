// Start of LinkedList Cycle

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.


function startOfLinkedListCycle(head) {
    let pointer1 = head;
    let pointer2 = head;
    let count = null;

    while(pointer1 !== null || pointer2 !== null) {
        pointer1 = pointer1.next.next;
        pointer2 = pointer2.next;
        
        if (count) count += 1;
        
        if (pointer1.value === pointer2.value) {
            if (count > 1) break;
            count = 1;
        }
    }
    count = count - 1;
    pointer2 = head;
    pointer1 = head;
    while (count !== 0) {
        pointer1 = pointer1.next;
        count -= 1;
    }
    
    console.log('+++', pointer1.value, pointer2.value)
    while(pointer1.value !== pointer2.value) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1.value;
}


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = null;
    }
}

const head = new Node(5);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(6);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next = head.next.next;

console.log(startOfLinkedListCycle(head));

// Space => O(N)
// Time => O(1)