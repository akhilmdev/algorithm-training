// Problem Statement #
// Given an array of numbers and a number ‘K’, we need to remove ‘K’ numbers from
// the array such that we are left with maximum distinct numbers.

// Example 1:

// Input: [7, 3, 5, 8, 5, 3, 3], and K=2
// Output: 3
// Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have 
// to skip 5 because it is not distinct and occurred twice. 
// Another solution could be to remove one instance of '5' and '3' each to be left with three 
// distinct numbers [7, 5, 8], in this case, we have to skip 3 because it occurred twice.
// Example 2:

// Input: [3, 5, 12, 11, 12], and K=3
// Output: 2
// Explanation: We can remove one occurrence of 12, after which all numbers will become distinct. Then 
// we can delete any two numbers which will leave us 2 distinct numbers in the result.
// Example 3:

// Input: [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], and K=2
// Output: 3
// Explanation: We can remove one occurrence of '4' to get three distinct numbers.

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        let current = this.heap.length - 1;
        let parent = Math.floor(current / 2);

        while (this.heap[current] < this.heap[parent]) {
            [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]]
            current = parent;
            parent = Math.floor(current / 2);
        }
        return this.heap;
    }

    pop() {
        if (this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if (this.heap[1] < this.heap[2]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return this.heap.pop();
        } else {
            const minValue = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while (this.heap[left] && this.heap[index] > this.heap[left] || this.heap[right] && this.heap[index] > this.heap[right]) {
                if (!this.heap[left] && !this.heap[right]) break;

                if (this.heap[left] > this.heap[right]) {
                    [this.heap[right], this.heap[index]] = [this.heap[index], this.heap[right]]
                    index = right;
                } else {
                    [this.heap[left], this.heap[index]] = [this.heap[index], this.heap[left]]
                    index = left;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }
            return minValue;
        }
    }
}

function maximumDistinctElements(arr, k) {

    const minHeap = new MinHeap();
    const hashMap = {};

    let count = 0;

    arr.forEach(ele => hashMap[ele] ? hashMap[ele] += 1 : hashMap[ele] = 1);
    for (let key in hashMap) {
        minHeap.push(hashMap[key]);
    }

    while (k >= 0) {
        const minFrequency = minHeap.pop()
        if (minFrequency === null) break;
        if (minFrequency === 1) {
            count += 1;
        } else if (minFrequency - 1 <= k) {
            k -= minFrequency - 1;
            count += 1;
        } else {
            k = 0;
            break;
        }
    }

    return count - k;
}

// Time => O(KlogK + NlogK)
// Space => O(N)

console.log(maximumDistinctElements([7, 3, 5, 8, 5, 3, 3], 3))
console.log(maximumDistinctElements([3, 5, 12, 11, 12], 3))
console.log(maximumDistinctElements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2))