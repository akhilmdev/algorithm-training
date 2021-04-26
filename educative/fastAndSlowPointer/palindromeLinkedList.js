// Palindrome LinkedList (medium) #
// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

// Example 1:

// Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
// Output: true
// Example 2:

// Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
// Output: false

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function isPalindromeLinkedList(head) {
    let slow = head;
    let fast = head;
    let startString = '';
    let endString = '';

    while (fast && fast.next !== null) {
        startString = startString + slow.value;
        slow = slow.next;
        fast = fast.next.next;
    }

    slow = slow.next;

    while (slow !== null) {
        endString = slow.value + endString;
        slow = slow.next;
    }

    return (startString === endString) ? true : false

}


const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(6);
console.log(isPalindromeLinkedList(head));
head.next.next.next.next.next.next = new Node(7);