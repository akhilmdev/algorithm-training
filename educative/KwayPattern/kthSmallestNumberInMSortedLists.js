// Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

// Example 1:

// Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4], K=5
// Output: 4
// Explanation: The 5th smallest number among all the arrays is 4, this can be verified from 
// the merged list of all the arrays: [1, 2, 3, 3, 4, 6, 6, 7, 8]
// Example 2:

// Input: L1=[5, 8, 9], L2=[1, 7], K=3
// Output: 7
// Explanation: The 3rd smallest number among all the arrays is 7.

class MinHeap {
    constructor() {
        this.heap = [null];
        this.length = 0;
    }

    push(value) {
        this.heap.push(value)
        
        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);
            
            while(this.heap[current].value < this.heap[parent].value) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
                if(parent < 1)  break;
            }
        }
        this.length += 1;
    }

    pop() {
        if(this.heap.length > 0) this.length -= 1;
        if(this.heap.length === 1) return null;
        else if(this.heap.length === 2) return this.heap.pop();
        else if(this.heap.length === 3) {
            if(this.heap[1].value < this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const min = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = current * 2 + 1;

            while(
                (this.heap[left] && this.heap[current].value > this.heap[left].value) ||
                (this.heap[right] && this.heap[current].value > this.heap[right].value)
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
            return min;
        }
    }
}

function SmallestNumberInMSort(lists, k) {
    const minHeap = new MinHeap();

    lists.forEach((list, index) => {
        minHeap.push({value: list[0], nextIndex: 1, arrayNumber: index})
    })

    while(minHeap.length > 0 && k > 1) {
        
        const top = minHeap.pop();
        const value = lists[top.arrayNumber][top.nextIndex];
        if(value) {
            minHeap.push({value: lists[top.arrayNumber][top.nextIndex], nextIndex: top.nextIndex + 1, arrayNumber: top.arrayNumber})
        }
         k -= 1;
    }
    return minHeap.pop().value;
}

// Time => O(N * logM)
// Space => O(M)

// console.log(SmallestNumberInMSort([[5, 8, 9], [1, 7]], 4))

function findMedian(lists) {
    const minHeap = new MinHeap();
    let maxLength = 0;

    lists.forEach((list, index) => {
        minHeap.push({value: list[0], nextIndex: 1, arrayNumber: index})
        maxLength += list.length;
    })

    console.log(maxLength, minHeap.length)
    let index =0;
    while(minHeap.length > 0 && index < Math.floor(maxLength / 2)) {
        const top = minHeap.pop();
        console.log(top.value, index)
        minHeap.push({value: lists[top.arrayNumber][top.nextIndex], nextIndex: top.nextIndex + 1, arrayNumber: top.arrayNumber});
        index += 1;
    }

    return minHeap.pop().value;
}

// console.log(findMedian([[5, 8, 9], [1, 7]]))

function mergeSortedArray(lists) {
    const minHeap = new MinHeap();
    lists.forEach((list,index) => {
        minHeap.push({value: list[0], nextIndex: 1, arrayNumber: index});
    })

    const result = [];

    while(minHeap.length > 0) {
        const top = minHeap.pop();
        if(typeof top.value === 'number') {
            result.push(top.value);
            minHeap.push({value: lists[top.arrayNumber][top.nextIndex], nextIndex: top.nextIndex + 1, arrayNumber: top.arrayNumber});
        }
    }
    return result;
}

console.log(mergeSortedArray([[5, 8, 9], [0, 1, 7]]))