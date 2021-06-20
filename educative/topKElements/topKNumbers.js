// Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

// Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

// Example 1:

// Input: [3, 1, 5, 12, 2, 11], K = 3
// Output: [5, 12, 11]
// Example 2:

// Input: [5, 12, 11, -1, 12], K = 3
// Output: [12, 11, 12]

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
                if (parent < 1) break;

                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
        return this.heap;
    }

    pop() {
        if (this.heap.length === 1) return null
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            return this.heap.pop();
        } else {
            const smallest = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while(this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right]) {
                if (!this.heap[left] && !this.heap[right]) break;

                if(this.heap[left] < this.heap[right]) {
                    [this.heap[right], this.heap[index]] = [this.heap[index], this.heap[right]];
                    index = right;
                } else {
                    [this.heap[left], this.heap[index]] = [this.heap[index], this.heap[left]];
                    index = left;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }
            return smallest;
        }


    }

    getMinHeap() {
        return this.heap;
    }

    peek() {
        return this.heap[1];
    }
}

function topKNumbers(arr, k) {
    const minHeap = new MinHeap();

    for(let i = 0; i < k; i++) {
        minHeap.push(arr[i]);
    }
    for(let i = k; i < arr.length; i++) {
        if(minHeap.peek() < arr[i]) {
            minHeap.pop()
            minHeap.push(arr[i]);
        }
    }

    return minHeap.getMinHeap().slice(1);
}

// Space => O(klogk + (n-k) * logk) => O(nlogK)
// Time => O(k)

console.log(topKNumbers([3, 1, 5, 12, 2, 11], 3))
console.log(topKNumbers([5, 12, 11, -1, 12], 3))