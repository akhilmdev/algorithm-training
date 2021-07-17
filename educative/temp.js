class MaxHeap {
    constructor() {
        this.heap = [null];
        this.length = 0
    }

    push(value) {
        this.heap.push(value);

        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[current].value > this.heap[parent].value) {
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
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if(this.heap[1].value > this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return this.heap.pop();
        } else {
            const max = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while(
                (this.heap[left] && this.heap[current].value < this.heap[left].value) ||
                (this.heap[right] && this.heap[current].value < this.heap[right].value)
            ) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].value < this.heap[right].value) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]];
                    current = right;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]];
                    current = left;
                }
                left = current * 2;
                right = (current * 2) + 1;
            }

            return max;
        }
        
    }

    getHeap() {
        return this.heap;
    }

}

function RearageStringWithKDistance(str, k) {

    const hashMap = {};
    const maxHeap = new MaxHeap();

    str.split('').forEach((ele) => {
        hashMap[ele] ? hashMap[ele] += 1 : hashMap[ele] = 1;
    })

    Object.keys(hashMap).forEach(key => {
        maxHeap.push({key: key, value: hashMap[key]})
    })

    const result = [];
    
    while(maxHeap.length > 0) {
        const top = maxHeap.pop();
        console.log(top)
        result.push(top.key);
    
        if(top.value - 1 > 0) maxHeap.push({key: top.key, value: top.value - 1});
    }

    console.log(result)

    if(result.length === str.length) return result.join('');
    return ''
}


console.log(RearageStringWithKDistance('Programming', 3))