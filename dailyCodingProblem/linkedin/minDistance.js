// Given a list of points, a central point, and an integer k, find the nearest k points from the central point.

// For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].

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
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
                if(parent < 1) break;
            }
        }
        return this.heap;
    }

    push1(value) {
        this.heap.push(value);

        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[parent] && this.heap[current].value < this.heap[parent].value) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
                if (parent < 1) break;
            }
        }
        return this.heap;
    }

    pop() {
        if(this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if(this.heap[1].value < this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const minValue = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while(
                (this.heap[left] && this.heap[current].value > this.heap[left].value) ||
                (this.heap[right] && this.heap[current].value > this.heap[right].value)
            ) {
                if(!this.heap[right] && !this.heap[left]) break;
                if(this.heap[right] && this.heap[left].value > this.heap[right].value) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                    current = right;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                    current = left;
                }
                left = current * 2;
                right = (current * 2) + 1;
            }


            return minValue;
        }
    }

    getHeap() {
        return this.heap;
    }
}

function minDistance(arr, center, count) {

    const minHeap = new MinHeap();

    arr.forEach(ele => {
        const distance = Math.pow(ele[0] - center[0], 2) + Math.pow(ele[1] - center[1], 2);
        minHeap.push({key: ele, value: distance});
    })

    const result = [];
    for(let i = count; i > 0; i--) {
        const top = minHeap.pop();
        result.push(top.key)
    }

    return result;
}

// Time = O(N * logN)
// Spce = O(N)

console.log(minDistance([[0, 0], [5, 4], [3, 1]], [1,2], 2))
