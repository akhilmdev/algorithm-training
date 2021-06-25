// Given a string, sort it based on the decreasing frequency of its characters.

// Example 1:

// Input: "Programming"
// Output: "rrggmmPiano"
// Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.
// Example 2:

// Input: "abcbab"
// Output: "bbbaac"
// Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        if (this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);
    
            while((this.heap[current] && this.heap[parent]) && this.heap[current].value > this.heap[parent].value) {
                if(parent < 1) break;
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }

        return this.heap;
    }

    pop() {
        if (this.heap.length === 1) return null;
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if(this.heap[1].value > this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const largest = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while(this.heap[index] && ((this.heap[left]) && this.heap[index].value < this.heap[left].value) || (this.heap[right] && this.heap[index].value < this.heap[right].value)) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].value < this.heap[right].value) {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
                    index = right;
                } else {
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }

            return largest;
        }
    }

    getPeek() {
        return this.heap[1]
    }

    getHeap() {
        return this.heap;
    }

}

function frequencySort(string) {

    const mapHash = {};
    const maxHeap = new MaxHeap()
    let result = '';

    string.split('').forEach(ele => {
        if (!mapHash[ele]) mapHash[ele] = 1
        else mapHash[ele] += 1;
    }) // O(N)

    Object.keys(mapHash).forEach((ele) => {
        maxHeap.push({key: ele, value: mapHash[ele]})
    }) //O(N logN)

    while(true) {
        const max = maxHeap.pop();
        if(!max) break;
        
        for(let i = 0; i < max.value; i++) {
            result += max.key;
        }
    } //O(N logN)

    return result;

}

// Time => O(Nlogk)
// Space => O(N)

console.log(frequencySort('Programming'));
console.log(frequencySort('abcbab'));