// Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

// Example 1:

// Input: "aappp"
// Output: "papap"
// Explanation: In "papap", none of the repeating characters come next to each other.
// Example 2:

// Input: "Programming"
// Output: "rgmrgmPiano" or "gmringmrPoa" or "gmrPagimnor", etc.
// Explanation: None of the repeating characters come next to each other.
// Example 3:

// Input: "aapa"
// Output: ""
// Explanation: In all arrangements of "aapa", atleast two 'a' will come together e.g., "apaa", "paaa".

class MaxHeap {
    constructor() {
        this.heap = [null];
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
        return this.heap;
    }

    pop() {
        if(this.heap.length === 1) return null;
        else if(this.heap.length === 2) return this.heap.pop();
        else if(this.heap.length === 3) {
            if(this.heap[1].value > this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const minValue = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while((this.heap[left] && this.heap[index] > this.heap[left].value) || (this.heap[right] && this.heap[index] > this.heap[right].value)) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].value > this.heap[right].value) {
                    [this.heap[left], this.heap[right]] = [this.heap[right], this.heap[left]];
                    index = left;
                } else {
                    [this.heap[right], this.heap[right]] = [this.heap[right], this.heap[right]];
                    index = right;
                }
                left = index * 2;
                right = (index * 2) + 1;

            }

            return minValue;
        }
    }
}

function rearrangString(str) {
    const strHash = {};
    const maxHeap = new MaxHeap();
    const result = [];
    str.split('').forEach(char => {
        strHash[char] ? strHash[char] += 1 : strHash[char] = 1;
    })

    for(char in strHash) {
        maxHeap.push({key: char, value: strHash[char]})
    }

    let top = maxHeap.pop();
    while(top !== null) {
        result.push(top.key);

        let current = top;
        top = maxHeap.pop();

        if(current.value > 1) maxHeap.push({key: current.key, value: current.value - 1});

    }
    if(result.length === str.length) {
        return result.join('');
    }
    return '';
}

//Time => O(N * logN)
//Space => O(N)

console.log(rearrangString('aappp'))
console.log(rearrangString('Programming'))
console.log(rearrangString('aapa'))
console.log(rearrangString('paaac'))