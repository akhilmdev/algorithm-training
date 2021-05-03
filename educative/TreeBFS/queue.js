class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    log(head) {
        let list = '';
        while(head !== null) {
            list = list + ' => ' + head.value;
            head = head.next
        }
        list += ' => ' + null;
        return list;
    }
}

class Queue {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    enqueue = (value) => {
        if (this.bottom === null) {
            this.top = value;
            this.bottom = value;
        } else {
            this.bottom.next = value;
            this.bottom = value;
        }
        this.size += 1;
    }

    dequeue = () => {
        if (this.top === null) return;
        const top = this.top;

        if (this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
            this.size -= 1;
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