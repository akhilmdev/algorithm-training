// Design a class to efficiently find the Kth largest element in a stream of numbers.

// The class should have the following two things:

// The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
// The class should expose a function add(int num) which will store the given number and return the Kth largest number.
// Example 1:

// Input: [3, 1, 5, 12, 2, 11], K = 4
// 1. Calling add(6) should return '5'.
// 2. Calling add(13) should return '6'.
// 2. Calling add(4) should still return '6'.

class KthLargestNumber {
    constructor(arr, k) {
        this.heap = [null];
        this.limit = k;
        arr.forEach(ele => this.push(ele));
    }

    push(value) {
        this.heap.push(value);
        if (this.heap.length > 2) {

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

    add(value){
        this.push(value);
        const popedEle = [];
        for(let i = 0; i < this.limit; i++) {
            popedEle.push(this.pop());
        } //O(K * LogN)
        popedEle.forEach((ele) => this.push(ele)) //O(KlogN)
        return popedEle[popedEle.length - 1];
    }

    // O(KlogN)
    pop() {
        if(this.heap.length === 1) return null;
        if(this.heap.length === 2) return this.heap.pop();
        if(this.heap.length === 3) {
            if(this.heap[1] > this.heap[2]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            }
            return this.heap.pop();
        } else {
            const largest = this.heap[1];
            this.heap[1] = this.heap.pop();

            let index = 1;
            let left = index * 2;
            let right = (index * 2) + 1;

            while(this.heap[index] < this.heap[left] || this.heap[index] < this.heap[right]) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[left] > this.heap[right]) {
                    [this.heap[left], this.heap[index]] = [this.heap[index], this.heap[left]];
                    index = left;
                } else {
                    [this.heap[right], this.heap[index]] = [this.heap[index], this.heap[right]];
                    index = right;
                }
                left = index * 2;
                right = (index * 2) + 1;
            }
            return largest;
        }
    }
}

// Time => O(KlogN) // where K is limit
// Space => O(K)


// const kthLargest = new KthLargestNumber([3, 1, 5, 12, 2, 11], 4)
// console.log(kthLargest.add(6))
// console.log(kthLargest.add(13))
// console.log(kthLargest.add(4))

// with min heap

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.minHeap = new Heap([], null, ((a, b) => b - a));
    this.k = k;

    // add the numbers in the min heap
    nums.forEach((num) => {
      this.add(num);
    });
  }

  add(num) {
    // add the new number in the min heap
    this.minHeap.push(num);

    // if heap has more than 'k' numbers, remove one number
    if (this.minHeap.length > this.k) {
      this.minHeap.pop();
    }

    // return the 'Kth largest number
    return this.minHeap.peek();
  }
}

// Time => O(logk)
// Space => O(k)

const kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);