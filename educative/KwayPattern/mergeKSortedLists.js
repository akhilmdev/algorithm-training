// Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

// Example 1:

// Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
// Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]
// Example 2:

// Input: L1=[5, 8, 9], L2=[1, 7]
// Output: [1, 5, 7, 8, 9]

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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
            let right = (current * 2) + 1;

            while(
                (this.heap[left] && this.heap[current].value > this.heap[left].value) || 
                (this.heap[right] && this.heap[current].value > this.heap[right].value)
            ) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].value > this.heap[right].value) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]]
                    current = right;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]]
                    current = left;
                }
                left = current * 2;
                right = current * 2 + 1;
            }
            return min;
        }
    }
}

function MergeKsortedList(lists) {
    const minHeap = new MinHeap();
    lists.forEach(list => {
        if(list !== null) minHeap.push(list);
    })

    let resultHead = null;
    let resultTail = null;

    while(minHeap.length > 0) {
        const top = minHeap.pop();
        if(resultHead === null) {
            resultHead = top;
            resultTail = top;
        } else {
            resultTail.next = top;
            resultTail = resultTail.next;
        }

        if(top.next !== null) {
            minHeap.push(top.next);
        }
    }
    return resultHead;
}

// Time = O(N * logK)
// Space = O(K)

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = MergeKsortedList([l1, l2, l3]);

while(result!=null) {
    console.log(result.value, '==');
    result = result.next;
}