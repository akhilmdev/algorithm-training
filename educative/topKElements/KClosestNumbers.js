// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array.
// Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

// Example 1:

// Input: [5, 6, 7, 8, 9], K = 3, X = 7
// Output: [6, 7, 8]
// Example 2:

// Input: [2, 4, 5, 6, 9], K = 3, X = 6
// Output: [4, 5, 6]
// Example 3:

// Input: [2, 4, 5, 6, 9], K = 3, X = 10
// Output: [5, 6, 9]

class MaxHeap{
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        if(this.heap.length > 2) {
            let current = this.heap.length - 1;
            let parent = Math.floor(current / 2);

            while(this.heap[current] > this.heap[parent]) {
                if(parent < 1) break;
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
                parent = Math.floor(current / 2);
            }
        }
        return this.heap;
    }

    pop() {
        if(this.heap.length === 1) return null;
        if(this.heap.length === 2) return this.heap.pop()
        if(this.heap.length === 3) {
            if(this.heap[1].value > this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return this.heap.pop();
        } else {
            const smallest = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while(this.heap[index] && (this.heap[left] && this.heap[index].value < this.heap[left].value) || (this.heap[right] && this.heap[index].value < this.heap[right].value)) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && (this.heap[left].value < this.heap[right].value)) {
                    [this.heap[index], this.heap[right]] = [this.heap[right], this.heap[index]];
                    index = right;
                } else {
                    [this.heap[index], this.heap[left]] = [this.heap[left], this.heap[index]];
                    index = left;
                }

                left = index * 2;
                right = (index * 2) + 1;
            }

            return smallest
        }
    }

    peek() {
        return this.heap[1]
    }

    count() {
        return this.heap.length - 1;
    }
}

function kClosesNumbers(arr, k, x) {
    const maxHeap = new MaxHeap();
    const result = [];

    arr.forEach(ele => {
        const diff = Math.abs(x - ele);
        if(maxHeap.count() < k) {
            maxHeap.push({key: ele, value: diff})
        } else if(diff < maxHeap.peek().value) {
            maxHeap.pop()
            maxHeap.push({key: ele, value: diff})
        }
    })

    while(maxHeap.count() >= 1) {
        const max = maxHeap.pop();
        result.push(max.key)
    }
    return result
}

// Time => O(NlogK)
// Space => O(K)

console.log(kClosesNumbers([5, 6, 7, 8, 9], 4, 9))
console.log(kClosesNumbers([2, 4, 5, 6, 9], 3, 6))
console.log(kClosesNumbers([2, 4, 5, 6, 9], 3, 10))


// with two pointer

const Deque = require('./collections/deque'); //http://www.collectionsjs.com


function find_closest_elements(arr, K, X) {
  const result = new Deque();
  const index = binary_search(arr, X);
  let leftPointer = index,
    rightPointer = index + 1;
  const n = arr.length;
  for (i = 0; i < K; i++) {
    if (leftPointer >= 0 && rightPointer < n) {
      const diff1 = Math.abs(X - arr[leftPointer]);
      const diff2 = Math.abs(X - arr[rightPointer]);
      if (diff1 <= diff2) {
        result.unshift(arr[leftPointer]);
        leftPointer -= 1;
      } else {
        result.push(arr[rightPointer]);
        rightPointer += 1;
      }
    } else if (leftPointer >= 0) {
      result.unshift(arr[leftPointer]);
      leftPointer -= 1;
    } else if (rightPointer < n) {
      result.push(arr[rightPointer]);
      rightPointer += 1;
    }
  }

  return result.toArray();
}

function binary_search(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  }
  return low;
}

// Time => O(logN+K)
// Space => O(1)


console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`);


// with binary search
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_closest_elements(arr, K, X) {
  const index = binary_search(arr, X);
  let low = index - K,
    high = index + K;

  low = Math.max(low, 0); // 'low' should not be less than zero
  // 'high' should not be greater the size of the array
  high = Math.min(high, arr.length - 1);

  const minHeap = new Heap([], null, ((a, b) => b[0] - a[0]));
  // add all candidate elements to the min heap, sorted by their absolute difference from 'X'
  for (i = low; i < high + 1; i++) {
    minHeap.push([Math.abs(arr[i] - X), arr[i]]);
  }

  // we need the top 'K' elements having smallest difference from 'X'
  result = [];
  for (i = 0; i < K; i++) {
    result.push(minHeap.pop()[1]);
  }

  result.sort((a,b)=> a-b);
  return result;
}


function binary_search(arr, target) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low > 0) {
    return low - 1;
  }
  return low;
}

// Time => O(logN+K∗logK)
// Space => O(K)


console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`);
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`);

