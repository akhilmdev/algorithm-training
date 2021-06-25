// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

// Example 1:

// Input: [1, 3, 5, 12, 11, 12, 11], K = 2
// Output: [12, 11]
// Explanation: Both '11' and '12' apeared twice.
// Example 2:

// Input: [5, 12, 11, 3, 11], K = 2
// Output: [11, 5] or [11, 12] or [11, 3]
// Explanation: Only '11' appeared twice, all other numbers appeared once.

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[current].value < this.heap[parent].value) {
                if (parent < 1) break;
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
        return this.heap
    }

    pop() {
        if(this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if(this.heap[1].value < this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return this.heap.pop();
        } else {
            const smallest = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while((this.heap[left] && this.heap[right]) && (this.heap[index].value > this.heap[left].value || this.heap[index].value > this.heap[right].value)) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[left].value > this.heap[right].value) {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
                    index = right;
                } else {
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }
            return smallest;
        }
    }

    getHeap() {
        return this.heap;
    }

    peek() {
        return this.heap[1];
    }
}

function topKFrequestNumbers(arr, k) {

    const minHeap = new MinHeap()
    const frequencyMap = [];
    const results = [];

    arr.forEach((ele) => {
        if(frequencyMap[ele]) frequencyMap[ele] += 1;
        else frequencyMap[ele] = 1;
    }) //O(N)

    const keys = Object.keys(frequencyMap);
    for (let i = 0 ; i < k; i++) {
        minHeap.push({ key: keys[i], value: frequencyMap[keys[i]]});
    } // O(KlogK)
    
    for(let i = k; i < keys.length; i++) {
        if(minHeap.peek().value < frequencyMap[keys[i]]) {
            minHeap.pop()
            minHeap.push({ key: keys[i], value: frequencyMap[keys[i]]})
        } // O(N-Klog(K))
    }

    for(let j = 0; j < k; j++) {
        results.push(minHeap.pop().key)
    } //O(K logK)

    return results
}

// Time => O(N + N*logK)
// space => O(N)
console.log(topKFrequestNumbers([1, 3, 5, 12, 11, 12, 11], 3))
console.log(topKFrequestNumbers([5, 12, 11, 3, 11], 2))