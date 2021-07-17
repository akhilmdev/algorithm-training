// You are given a list of tasks that need to be run, in any order, on a server.
// Each task will take one CPU interval to execute but once a task has finished,
// it has a cooling period during which it can’t be run again. If the cooling
// period for all tasks is ‘K’ intervals, find the minimum number of CPU intervals
// that the server needs to finish all tasks.

// If at any time the server can’t execute any task then it must stay idle.

// Example 1:

// Input: [a, a, a, b, c, c], K=2
// Output: 7
// Explanation: a -> c -> b -> a -> c -> idle -> a
// Example 2:

// Input: [a, b, a], K=3
// Output: 5
// Explanation: a -> b -> idle -> idle -> a

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        if (this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while (this.heap[current].value > this.heap[parent].value) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
                if (parent < 1) break;
            }
        }
        return this.heap;
    }

    pop() {
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();
        if (this.heap.length === 3) {
            if (this.heap[1].value < this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const max = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while (
                (this.heap[left] && this.heap[current].value < this.heap[left].value) ||
                (this.heap[right] && this.heap[current].value < this.heap[right].value)
            ) {
                if (!this.heap[left] && !this.heap[right]) break;

                if (this.heap[right] && this.heap[left].value > this.heap[right].value) {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]]
                    current = left;
                } else {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]]
                    current = right;
                }

                left = current * 2;
                right = (current * 2) + 1;
            }
            return max;
        }
    }

    length() {
        return this.heap.length - 1;
    }

}

function ScheduleTask(arr, k) {

    const maxHeap = new MaxHeap();
    const hashMap = {};

    arr.forEach(ele => {
        hashMap[ele] ? hashMap[ele] = hashMap[ele] + 1 : hashMap[ele] = 1;
    })

    Object.keys(hashMap).forEach(ele => {
        maxHeap.push({ key: ele, value: hashMap[ele] });
    })


    let result = 0;
    while (maxHeap.length() > 0) {
        const temp = [];
        let count = k + 1;
        while (count > 0 && maxHeap.length() > 0) {
            result += 1;
            top = maxHeap.pop();
            if (top.value > 1) {
                temp.push({ key: top.key, value: top.value - 1 });
            }
            count -= 1;
        }

        temp.forEach(ele => maxHeap.push(ele));
        if (maxHeap.length() > 0) {
            result += count;
        }
    }

    return result;

}

// time => O(N * logN)
// space => O(N)

console.log(ScheduleTask(['a', 'a', 'b', 'c'], 2))
console.log(ScheduleTask(['a', 'a', 'a', 'b', 'c', 'c'], 2))