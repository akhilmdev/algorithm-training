// Frequency Stack (hard) #
// Design a class that simulates a Stack data structure, implementing the following two operations:

// push(int num): Pushes the number ‘num’ on the stack.
// pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.
// Example:

// After following push operations: push(1), push(2), push(3), push(2), push(1), push(2), push(5)

// 1. pop() should return 2, as it is the most frequent number
// 2. Next pop() should return 1
// 3. Next pop() should return 2

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        
        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);
    
            while(this.heap[current] < this.heap[parent]) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
        return this.heap;
    }

    pop() {
        if(this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if(this.heap[1] > this.heap[2]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return this.heap.pop();
        } else {
            const max = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while(
                (this.heap[left] && this.heap[left] > this.heap[current]) ||
                (this.heap[right] && this.heap[right] > this.heap[current])
            ) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left] < this.heap[right]) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                    current = right;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                    current = left;
                }

                left = current * 2;
                right = (current * 2) + 1;
            }
            return max
        }
    }

}

class FrequencyStack {
    maxHeap = new MaxHeap();
    constructor() {
        this.map = {};
    }

    push(value) {
        this.map[value] ? this.map[value] += 1 : this.map[value] = 1;
    }

    pop() {
        Object.keys(this.map).forEach(key => {
            this.maxHeap.push(key);
        })

        const top = this.maxHeap.pop();
        delete this.map[top];

        return top;
    }
}

// Time => O(KlogK)
// Space => O(K)

const frequencyStack = new FrequencyStack();
frequencyStack.push(1)
frequencyStack.push(2)
frequencyStack.push(2)
frequencyStack.push(3)
frequencyStack.push(5)
frequencyStack.push(1)

console.log(frequencyStack.pop())
console.log(frequencyStack.pop())
console.log(frequencyStack.pop())