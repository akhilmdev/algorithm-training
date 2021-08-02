// Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.

// Example 1:

// Input: L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
// Output: [4, 7]
// Explanation: The range [4, 7] includes 5 from L1, 4 from L2 and 7 from L3.
// Example 2:

// Input: L1=[1, 9], L2=[4, 12], L3=[7, 10, 16]
// Output: [9, 12]
// Explanation: The range [9, 12] includes 9 from L1, 12 from L2 and 10 from L3.

class MinHeap {
    constructor() {
        this.heap = [null];
        this.length = 0;
    }

    push(value) {
        this.heap.push(value);

        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[current].value < this.heap[parent].value) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
                if(parent < 1) break;
            }
        }
        this.length += 1;
    }

    pop() {
        if(this.heap.length > 1) this.length -= 1;
        if (this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if(this.heap[1].value < this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const min = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while(
                this.heap[left] && this.heap[current].value > this.heap[left].value ||
                this.heap[right] && this.heap[current].value > this.heap[right].value
            ) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].value > this.heap[right].value) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                    current = right;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                    current = left;
                }
                left = current * 2;
                right = (current * 2) + 1
            }
           
            return min
        }
    }
    getHeap() {
        return this.heap;
    }
}

function smallestNumberRange(lists) {
    const minHeap = new MinHeap();
    let currentMax = -Infinity;
    lists.forEach((list, index) => {
        minHeap.push({value: list[0], nextIndex: 1, ArrayIndex: index});
        currentMax = Math.max(currentMax, list[0]);
    })

    let range = null;
    let preDiff = Infinity;

    while(minHeap.length === lists.length) {
        const top = minHeap.pop();
        if(currentMax - top.value < preDiff) {
            range = [top.value, currentMax];
            preDiff = currentMax - top.value;
        }
        if(lists[top.ArrayIndex].length > top.nextIndex) {
            minHeap.push({
                value: lists[top.ArrayIndex][top.nextIndex],
                nextIndex: top.nextIndex + 1,
                ArrayIndex: top.ArrayIndex
            })
            currentMax = Math.max(currentMax, lists[top.ArrayIndex][top.nextIndex]);
        };

    }

    return range;
}

// time => O(N * logM)
// space => O(M)

console.log(smallestNumberRange([[1, 5, 8], [4, 12], [7, 8, 10]]))
console.log(smallestNumberRange([[1, 9], [4, 12], [7, 10, 16]]))