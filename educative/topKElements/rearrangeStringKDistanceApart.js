// Given a string and a number ‘K’, find if the string can be rearranged such
// that the same characters are at least ‘K’ distance apart from each other.

// Example 1:

// Input: "mmpp", K=2
// Output: "mpmp" or "pmpm"
// Explanation: All same characters are 2 distance apart.
// Example 2:

// Input: "Programming", K=3
// Output: "rgmPrgmiano" or "gmringmrPoa" or "gmrPagimnor" and a few more
// Explanation: All same characters are 3 distance apart.
// Example 3:

// Input: "aab", K=2
// Output: "aba"
// Explanation: All same characters are 2 distance apart.
// Example 4:

// Input: "aappa", K=3
// Output: ""
// Explanation: We cannot find an arrangement of the string where any two 'a' are 3 distance apart.

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
        else if (this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if (this.heap[1].value > this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const maxValue = this.heap[1];
            this.heap[1] = this.heap.pop();
            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while ((this.heap[left] && this.heap[current].value < this.heap[left].value) ||
                (this.heap[right] && this.heap[current].value < this.heap[right].value)) {
                if (!this.heap[left] && !this.heap[right]) break;

                if (this.heap[left].value < this.heap[right].value) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]]
                    current = right;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]]
                    current = left;
                }

                left = current * 2;
                right = (current * 2) + 1;
            }
            return maxValue;
        }
    }
    heap1() {
        return this.heap;
    }
}

function rearrangeStringDisatanceApart(str, k) {

    const hashMap = {};
    const maxHeap = new MaxHeap();

    for (let i = 0; i < str.length; i++) {
        hashMap[str[i]] ? hashMap[str[i]] += 1 : hashMap[str[i]] = 1;
    } //O(n)
    
    Object.keys(hashMap).forEach((ele) => {
        maxHeap.push({ key: ele, value: hashMap[ele] })
    }) // O(logk) where k is distint charas


    let heap = maxHeap.pop();
    const result = [];
    const temp = [];

    while (heap !== null) {
        if(heap.value > 0) {
            result.push(heap.key);
            temp.push({ ...heap, value: heap.value - 1 })
        }
        if (temp.length === k) {
            const k1 = temp.shift()
            maxHeap.push(k1)
        }
        heap = maxHeap.pop();
        if(temp.length > 0 && heap === null) {
            maxHeap.push(temp.shift())
            heap = maxHeap.pop();
        }
        console.log(maxHeap.heap1(), temp)
    }

    if (result.length === str.length) {
        return result.join('');
    } else {
        return '';
    }

}

// Time => O(NlogN)
// Space => O(N)

// console.log(rearrangeStringDisatanceApart('mmpp', 2))
console.log(rearrangeStringDisatanceApart('Programmmmmming', 3))
// console.log(rearrangeStringDisatanceApart('aab', 2))
// console.log(rearrangeStringDisatanceApart('aappa', 2))


// orginal solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com
const Deque = require('./collections/deque'); //http://www.collectionsjs.com


function reorganize_string(str, k) {
  if (k <= 1) {
    return str;
  }

  charFrequencyMap = {};
  for (i = 0; i < str.length; i++) {
    const chr = str[i];
    if (!(chr in charFrequencyMap)) {
      charFrequencyMap[chr] = 1;
    } else {
      charFrequencyMap[chr]++;
    }
  }


  const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
  // add all characters to the max heap
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  const queue = new Deque();
  const resultString = [];
  while (maxHeap.length > 0) {
    let [frequency, char] = maxHeap.pop();
    // append the current character to the result string and decrement its count
    resultString.push(char);
    // decrement the frequency and append to the queue
    queue.push([char, frequency - 1]);
    if (queue.length === k) {
      [char, frequency] = queue.shift();
      if (frequency > 0) {
        maxHeap.push([frequency, char]);
      }
    }
  }

  // if we were successful in appending all the characters to the result string, return it
  if (resultString.length === str.length) {
    return resultString.join('');
  }
  return '';
}