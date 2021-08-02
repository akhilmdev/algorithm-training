// Given two sorted arrays in descending order, find ‘K’ pairs with
// the largest sum where each pair consists of numbers from both the arrays.

// Example 1:

// Input: L1=[9, 8, 2], L2=[6, 3, 1], K=3
// Output: [9, 3], [9, 6], [8, 6] 
// Explanation: These 3 pairs have the largest sum. No other pair has a sum larger than any of these.
// Example 2:

// Input: L1=[5, 2, 1], L2=[2, -1], K=3
// Output: [5, 2], [5, -1], [2, 2] 

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

            while(this.heap[current].sum < this.heap[parent].sum) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
                current = parent;
                parent = Math.floor(current / 2);
                if(parent < 1) break;
            }
        }
        this.length += 1;
    }

    pop() {
        if (this.heap.length > 1) this.length -= 1;

        if(this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if(this.heap.length === 3) {
            if(this.heap[1].sum < this.heap[2].sum) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const max = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while(
                this.heap[left] && this.heap[current].sum > this.heap[left].sum ||
                this.heap[right] && this.heap[current].sum > this.heap[right].sum
            ) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].sum > this.heap[right].sum) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                    current = right;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                    current = left;
                }
                left = current * 2
                right = (current * 2) + 1
            }

            return max;
        }
    }

    peek() {
        return this.heap[1];
    }
}

function kPairswithLargestSums(list1, list2, k) {
    const minHeap = new MinHeap();
    
    for(let i = 0; i < list1.length; i++) {
        for(let j = 0; j < list2.length; j++) {
            if(minHeap.length < k) {
                minHeap.push({sum: list1[i] + list2[j], value: [list1[i], list2[j]]})
            } else {
                if(list1[i] + list2[j] < minHeap.peek().sum) {
                    break;
                } else {
                    minHeap.pop();
                    minHeap.push({sum: list1[i] + list2[j], value: [list1[i], list2[j]]})
                }
            }

        }
    }

    const result = [];
    while(minHeap.length > 0) {
        const top = minHeap.pop();
        result.push(top.value);
    }

    return result;

}

// Time => O(N * M * logk)
// Space => (K)

console.log(kPairswithLargestSums([9, 8, 2], [6, 3, 1], 3))