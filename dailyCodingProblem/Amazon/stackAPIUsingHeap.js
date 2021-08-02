// Implement a stack API using only a heap. A stack implements the following methods:

// push(item), which adds an element to the stack
// pop(), which removes and returns the most recently added element (or throws an error if there is nothing on the stack)
// Recall that a heap has the following operations:

// push(item), which adds a new key to the heap
// pop(), which removes and returns the max value of the heap

class Heap {
    constructor() {
        this.heap = [null];
        this.length = 0;
    }

    push(value) {
        this.heap.push(value)

        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[current].index > this.heap[parent].index) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
                if(parent < 1) break;
            }
        }
        this.length += 1;
    }

    pop() {
        if(this.heap.length > 0) this.length -= 1;
        if(this.heap.length === 1) return null;
        else if(this.heap.length === 2) return this.heap.pop();
        else if (this.heap.lenth === 3) {
            if(this.heap[1].index > this.heap[2].index) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const max = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = current * 2 + 1;

            while(
                (this.heap[left] && this.heap[current].index < this.heap[left].index) ||
                (this.heap[right] && this.heap[current].index < this.heap[right].index)
            ) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].index < this.heap[right].index) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                    right = current;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                    left = current;
                }
                left = current * 2;
                right = current * 2 + 1;
            }
            return max;
        }
    }

    getHeap() {
        return this.heap;
    }
}

class Stack {
    constructor(heap) {
        this.heap = heap;
        this.index = 0;
    }

    push(value) {
        this.heap.push({value: value, index: this.index});
        this.index += 1;
    }

    pop() {
        const top = this.heap.pop();
        this.index -= 1;
        return top.value;
    }
}

const stack = new Stack(new Heap())
stack.push(10);
stack.push(1);
stack.push(7);
stack.push(2);
console.log(stack.pop());
stack.push(8);
console.log(stack.pop());
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());