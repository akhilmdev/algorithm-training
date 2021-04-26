/**
 * This problem was asked by Google.
 * 
 * Given a singly linked list and an integer k, remove the kth last element from the list.
 * k is guaranteed to be smaller than the length of the list.
 * The list is very long, so making more than one pass is prohibitively expensive.
 * 
 * Do this in constant space and in one pass.
 */

function deleteNodeFormLast(linkedList, index) {
    reversLinklist(linkedList);
    DeleteLinkedList(linkedList, index);
}

function reversLinklist(linkedList) {
    linkedList.printLinkedList()
    let currentNode = linkedList.start;
    let previousNode = null;
    while(currentNode) {
        if (!previousNode) {
            console.log(currentNode.value)
            previousNode = currentNode;
            currentNode = currentNode.next;
        } else {
            const tempNode = {...previousNode};
            const nextNode = {...currentNode.next};
            previousNode = {...currentNode};
            previousNode.next = {...tempNode};
            currentNode = nextNode;
        }
        
    }
    const lastNode = linkedList.last;
    linkedList.last = linkedList.start;
    linkedList.start = lastNode;
    linkedList.printLinkedList()
}

function DeleteLinkedList(LinkedList, index) {
    let currentNode = LinkedList.start;
    let previousNode = null;
    while (true) {
        if (index > 1) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            index--;
        } else {
            console.log(previousNode, currentNode)
            if (!previousNode) {
                LinkedList.start = currentNode.next;
            } else {
                if (currentNode) previousNode.next = currentNode.next;
            }
            break;
        }
    }
}

class NewNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    last = null;
    start = null;
    constructor(value) {
        this.start = new NewNode(value);
        this.last = this.start;
    }

    addNewNode(value) {
        const newNode = new NewNode(value);
        this.last.next = newNode;
        this.last = this.last.next;

    }

    printLinkedList() {
        let currentNode = this.start;
        while (true) {
            console.log(currentNode.value);
            if (!currentNode.next) break;
            currentNode = currentNode.next;
        }
    }
}

const linkList = new LinkedList(10);
linkList.addNewNode(12);
linkList.addNewNode(5);
linkList.addNewNode(9);
linkList.addNewNode(22);
linkList.printLinkedList();
console.log('+++++++')
deleteNodeFormLast(linkList, 2);


