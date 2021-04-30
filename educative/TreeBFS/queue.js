class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    enqueue = (value) => {
        const newNode = new Node(value);
        if (this.bottom === null) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.bottom.next = newNode;
            this.bottom = newNode;
        }
        this.size += 1;
    }

    dequeue = () => {
        if (this.top === null) return;
        const top = this.top;

        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
            return top
        }
        this.top = this.top.next;
        this.size -= 1;
        return top
    }
}

module.exports = {
    Node,
    Queue
}