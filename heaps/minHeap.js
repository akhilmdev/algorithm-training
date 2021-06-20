class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[current] < this.heap[parent]) {
                if(parent < 1) break;
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
        return this.heap;
    }

    pop() {
        if (this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            return this.heap.pop();
        } else {
            const minValue = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while((this.heap[index] > this.heap[left]) || (this.heap[index] > this.heap[right])) {

                if(!this.heap[left] && !this.heap[right]) break;

                if (this.heap[left] > this.heap[right]) {
                    [this.heap[right], this.heap[index]] = [this.heap[index], this.heap[right]];
                    index = index * 2 + 1;
                } else {
                    [this.heap[left], this.heap[index]] = [this.heap[index], this.heap[left]];
                    index = index * 2;
                }

                left = index * 2;
                right = index * 2 + 1;

            }

            return minValue;
        }
    }

}

const minHeap = new MinHeap();

console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
