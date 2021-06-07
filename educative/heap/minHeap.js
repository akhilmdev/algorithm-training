class MinHeap {
    constructor() {
        this.minHeap = [null];
    }

    getHeap() {
        return this.minHeap[1];
    }

    insert(value) {
        this.minHeap.push(value);

        let current = this.minHeap.length - 1;

        while (current > 1 && this.minHeap[Math.floor(current / 2)] > this.minHeap[current]) {
            [this.minHeap[Math.floor(current / 2)], this.minHeap[current]] = [this.minHeap[current], this.minHeap[Math.floor(current / 2)]];
            current = Math.floor(current / 2);
        }
    }

    popHeap() {
        const heap = this.getHeap();

        const lastElement = this.minHeap[this.minHeap.length - 1];
        this.minHeap.splice(this.minHeap.length - 1);

        if (this.minHeap.length <= 2) {
            return heap;
        } else if (this.minHeap.length === 3) {
            if (this.minHeap[2] > this.minHeap[3]) {
                [this.minHeap[2], this.minHeap[3]] = [this.minHeap[3], this.minHeap[2]];
            }
            return heap;
        }

        let i = 1;
        this.minHeap[i] = lastElement;

        while (this.minHeap[i] > this.minHeap[2 * i] || this.minHeap[i] > this.minHeap[2 * i + 1]) {
            if (this.minHeap[i] > this.minHeap[2 * i]) {
                [this.minHeap[i], this.minHeap[2 * i]] = [this.minHeap[2 * i], this.minHeap[i]];
                i = 2 * 1;
            } else if (this.minHeap[i] > this.minHeap[2 * i + 1]) {
                [this.minHeap[i], this.minHeap[2 * i + 1]] = [this.minHeap[2 * i + 1], this.minHeap[i]];
                i = 2 * i + 1
            }
        }





        return heap;
    }
}