// Given an unsorted array of numbers, find Kth smallest number in it.

// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

// Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

// Example 1:

// Input: [1, 5, 12, 2, 11, 5], K = 3
// Output: 5
// Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].
// Example 2:

// Input: [1, 5, 12, 2, 11, 5], K = 4
// Output: 5
// Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].
// Example 3:

// Input: [5, 12, 11, -1, 12], K = 3
// Output: 11
// Explanation: The 3rd smallest number is '11', as the first two small numbers are [5, -1].

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
                if(current < 1) break;
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
        return this.heap;
    }

    getMinHeap() {
        return this.heap;
    }

    pop() {
        if (this.heap.length === 1) return null
        else if (this.heap.length === 2) return this.heap.pop()
        else if (this.heap.length === 3) {
            [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            return this.heap.pop();
        } else {
            const minValue = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while (this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right] ) {
                if(!this.heap[left] && !this.heap[right]) {
                    break;
                }
                if (this.heap[left] > this.heap[right]) {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
                    index = right;
                } else {
                    [this.heap[index], this.heap[left]] = [this.heap[right], this.heap[left]];
                    index = left;
                }

                left = index * 2;
                right = (index * 2) + 1;
            }

            return minValue;
        }
    }
}

function KthSmallestNumber(arr, k) {

    const minHeap = new MinHeap();
    let resultArray = [];

    arr.forEach((ele) => {
        minHeap.push(ele);
    })

    for (let i = 0; i < k; i ++) {
        resultArray.push(minHeap.pop());
    }

    resultArray = resultArray.sort((a, b) => a - b);

    return resultArray[k - 1]
}

// Time => O(NlogN + klogk + klogK) => O(NlogN + klogk)
// Space => O(N)

// Solution with max heap

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

function KthSmallestNumberWithMaxHeap(arr, k) {
    const maxHeap = new MaxHeap()
    for(let i = 0; i < k; i++) {
        maxHeap.push(arr[i]);
    }

    for(let i = k; i < arr.length; i ++) {
        if(arr[i] < maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(arr[i]);
        }
    }

    return maxHeap.peek();
}

// Time => O(klogk + (n-k)logk) => O(nlogk)
// Space => O(k)


console.log(KthSmallestNumber([1, 5, 12, 2, 11, 5], 4))
console.log(KthSmallestNumber([5, 12, 11, -1, 12], 3))


console.log(KthSmallestNumberWithMaxHeap([1, 5, 12, 2, 11, 5], 4))
console.log(KthSmallestNumberWithMaxHeap([5, 12, 11, -1, 12], 3))
