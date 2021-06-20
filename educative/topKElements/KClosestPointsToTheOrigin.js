// Given an array of points in a 2D2D plane, find ‘K’ closest points to the origin.

// Example 1:

// Input: points = [[1,2],[1,3]], K = 1
// Output: [[1,2]]
// Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
// The Euclidean distance between (1, 3) and the origin is sqrt(10).
// Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
// Example 2:

// Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
// Output: [[1, 3], [2, -1]]

class MinHeap {
    constructor() {
        this.heap = [null]
    }

    push(value) {
        this.heap.push(value);

        if (this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[parent] > this.heap[current]) {
                [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
    }

    peek() {
        return this.heap[1];
    }

    pop() {
        if (this.heap.length === 1) return null
        else if (this.heap.length === 2) return this.heap.pop()
        else if (this.heap.length === 3) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            return this.heap.pop();
        } else {
            const smallest = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while(this.heap[index] < this.heap[left] || this.heap[index] < this.heap[right]) {
                if(!this.heap[left] && !this.heap[right]) break;
                if(this.heap[left] > this.heap[right]) {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]]
                    index = right;
                } else {
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]]
                    index = left;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }

            return smallest;
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        if (this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[current] > this.heap[parent]) {
                if(parent < 1) break;

                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }

        return this.heap;
    }

    pop() {
        if (this.heap.length === 1) return null
        else if (this.heap.length === 2) return this.heap.pop()
        else if (this.heap.length === 3) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            return this.heap.pop();
        } else {
            const largest = this.heap[1];
            this.heap[1] = this.heap.pop();


            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while(this.heap[index] < this.heap[left] || this.heap[index] < this.heap[right]) {
                if (!this.heap[left] && !this.heap[right]) break;
                if (this.heap[left] > this.heap[right]) {
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                } else {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
                    index = right;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }

            return largest;
        }
    }

    peek() {
        return this.heap[1];
    }
}

function KClosesPointToTheOrgin(points, k) {

    const maxHeap = new MaxHeap()
    const result = [];

    for(let i = 0; i < k; i++) {
        maxHeap.push(points[i]);
    }

    for(let i = k; i < points.length; i++) {
        const distance = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);
        const minHeapDistance = Math.pow(maxHeap.peek()[0], 2) + Math.pow(maxHeap.peek()[1], 2)
        if(distance < minHeapDistance ) {
            maxHeap.pop();
            maxHeap.push(points[i]);
        }
    }

    for(let i = 0; i < k; i++) {
        result.push(maxHeap.pop());
    }

    return result;
}

// Time => O(klogk + Nlogk) => O(Nlogk)
// space => O(k)

console.log(KClosesPointToTheOrgin([[1,2],[1,3], [2,4]], 1))
console.log(KClosesPointToTheOrgin([[1, 3], [3, 4], [2, -1]], 2))