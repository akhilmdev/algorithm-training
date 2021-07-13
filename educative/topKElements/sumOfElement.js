
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
        else if (this.heap.length == 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if (this.heap[1] < this.heap[2]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const minValue = this.heap[1];
            this.heap[1] = this.heap.pop();


            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while ((this.heap[left] && this.heap[index] > this.heap[left]) || (this.heap[right] && this.heap[index] > this.heap[right])) {

                if (!this.heap[left] && !this.heap[right]) break;

                if (this.heap[left] > this.heap[right]) {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]]
                    index = right;
                } else {
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]]
                    index = left;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }

            return minValue
        }
    }
}

function sumOfElement(arr, k1, k2) {

    const minHeap = new MinHeap();
    let sum = 0;

    arr.forEach(ele => minHeap.push(ele));

    for (let i = 1; i < k2; i++) {
        const minValue = minHeap.pop();

        if (minValue === null) break;
        if (i > k1) {
            sum += minValue;
        }
    }

    return sum

}

// Time => O(NLogN)
// Space => O(N)

console.log(sumOfElement([1, 3, 12, 5, 15, 11], 3, 6))
console.log(sumOfElement([3, 5, 8, 7], 1, 4))