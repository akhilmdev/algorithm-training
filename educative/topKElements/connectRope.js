// Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope
// with minimum cost. The cost of connecting two ropes is equal to the sum of their lengths.

// Example 1:

// Input: [1, 3, 11, 5]
// Output: 33
// Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost is 33 (4+9+20)
// Example 2:

// Input: [3, 4, 5, 6]
// Output: 36
// Explanation: First connect 3+4(=7), then 5+6(=11), 7+11(=18). Total cost is 36 (7+11+18)
// Example 3:

// Input: [1, 3, 11, 5, 2]
// Output: 42
// Explanation: First connect 1+2(=3), then 3+3(=6), 6+5(=11), 11+11(=22). Total cost is 42 (3+6+11+22)

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        if (this.heap.length > 2) {
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
        console.log(this.heap)
        if(this.heap.length === 1) return null
        else if (this.heap.length === 2) return this.heap.pop()
        else if (this.heap.length === 3) {
            if(this.heap[1] < this.heap[2]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop()
        } else {
            const minValue = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while(this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right]) {
                if(!this.heap[left] && !this.heap[right]) break;
                if(this.heap[left] > this.heap[right]) {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
                    index = right;
                } else {
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }

                left = index * 2;
                right = (index * 2) + 1;
            }
            return minValue;
        }
    }

    getCount() {
        return this.heap.length - 1;
    }

    peek() {
        return this.heap[1];
    }

    getMinHeap() {
        return this.heap;
    }
}

function connectedRop(arr) {

    let connected = 0;
    const minHeap = new MinHeap();

    arr.forEach(ele => {
        minHeap.push(ele)
    })

    while(minHeap.getCount() !== 1) {
        const firstMin = minHeap.pop();
        const secondMin = minHeap.pop();
        console.log(firstMin, secondMin)
        const connect = firstMin + secondMin;
        if (connect === null) break;
        minHeap.push(connect);
        connected += connect;
    }

    return connected;
}

// Time => O(NlogN)
// Space => O(N)

// console.log(connectedRop([1, 3, 11, 5]))
// console.log(connectedRop([3, 4, 5, 6]))
console.log(connectedRop([1, 3, 11, 5, 2]))