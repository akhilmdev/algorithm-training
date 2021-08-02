// Given an N * N matrix where each row and column is sorted in ascending order,
// find the Kth smallest element in the matrix.

// Example 1:

// Input: Matrix=[
//     [2, 6, 8], 
//     [3, 7, 10],
//     [5, 8, 11]
//   ], 
//   K=5
// Output: 7
// Explanation: The 5th smallest number in the matrix is 7.

class MinHeap {
    constructor() {
        this.heap = [null];
        this.length = 0;
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
        this.length += 1;
    }
    
    pop() {
        if(this.heap.length > 1) this.length -= 1;
        // console.log(this.heap)

        if(this.heap.length === 1) return null;
        else if(this.heap.length === 2) return this.heap.pop();
        else if (this.heap.length === 3) {
            if(this.heap[1].value < this.heap[2].value) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
            }
            return this.heap.pop();
        } else {
            const min = this.heap[1];
            this.heap[1] = this.heap.pop();

            let current = 1;
            let left = current * 2;
            let right = (current * 2) + 1;

            while(
                (this.heap[left] && this.heap[current].value > this.heap[left].value) ||
                (this.heap[right] && this.heap[current].value > this.heap[right].value)
            ) {
                if(!this.heap[left] && !this.heap[right]) break;

                if(this.heap[right] && this.heap[left].value > this.heap[right].value) {
                    [this.heap[right], this.heap[current]] = [this.heap[current], this.heap[right]]
                    current = rigth;
                } else {
                    [this.heap[left], this.heap[current]] = [this.heap[current], this.heap[left]]
                    current = left;
                }
                left = current * 2;
                right = (current * 2) + 1
            }

            return min;
        }
    }
}

function KthSmallestNumberSort(mats, k) {
    const minHeap = new MinHeap()
    mats.forEach((mat, index) => {
        minHeap.push({value: mat[0], nextIndex: 1, currentArray: index});
    })

    let index = 1;
    while(minHeap.length > 0 && index < k) {
        let top = minHeap.pop();
        if (mats[top.currentArray][top.nextIndex]) {
            minHeap.push({value: mats[top.currentArray][top.nextIndex], nextIndex: top.nextIndex + 1, currentArray: top.currentArray})
        }

        index += 1;
    }

    return minHeap.pop().value;

}

// Time => O(K * logM)
// Space => O(M)

console.log(KthSmallestNumberSort([
    [2, 6, 8], 
    [3, 7, 10],
    [5, 8, 11]
  ], 5))



//   An Alternate Solution #
// Since each row and column of the matrix is sorted, is it possible to use Binary Search to find the Kth smallest number?

// The biggest problem to use Binary Search, in this case, is that we don’t have a straightforward sorted array, instead, we have a matrix. As we remember, in Binary Search, we calculate the middle index of the search space (‘1’ to ‘N’) and see if our required number is pointed out by the middle index; if not we either search in the lower half or the upper half. In a sorted matrix, we can’t really find a middle. Even if we do consider some index as middle, it is not straightforward to find the search space containing numbers bigger or smaller than the number pointed out by the middle index.

// An alternative could be to apply the Binary Search on the “number range” instead of the “index range”. As we know that the smallest number of our matrix is at the top left corner and the biggest number is at the bottom right corner. These two numbers can represent the “range” i.e., the start and the end for the Binary Search. Here is how our algorithm will work:

// Start the Binary Search with start = matrix[0][0] and end = matrix[n-1][n-1].
// Find middle of the start and the end. This middle number is NOT necessarily an element in the matrix.
// Count all the numbers smaller than or equal to middle in the matrix. As the matrix is sorted, we can do this in O(N).O(N).
// While counting, we can keep track of the “smallest number greater than the middle” (let’s call it n1) and at the same time the “biggest number less than or equal to the middle” (let’s call it n2). These two numbers will be used to adjust the “number range” for the Binary Search in the next iteration.
// If the count is equal to ‘K’, n1 will be our required number as it is the “biggest number less than or equal to the middle”, and is definitely present in the matrix.
// If the count is less than ‘K’, we can update start = n2 to search in the higher part of the matrix and if the count is greater than ‘K’, we can update end = n1 to search in the lower part of the matrix in the next iteration.



// function find_Kth_smallest(matrix, k) {
//     const n = matrix.length;
//     let start = matrix[0][0],
//       end = matrix[n - 1][n - 1];
//     while (start < end) {
//       const mid = Math.floor(start + (end - start) / 2);

//       const [count, smaller, larger] = count_less_equal(matrix, mid, matrix[0][0], matrix[n - 1][n - 1]);

//       if (count === k) {
//         return smaller;
//       }
//       if (count < k) {
//         start = larger; // search higher
//       } else {
//         end = smaller; // search lower
//       }
//     }

//     return start;
//   }

//   function count_less_equal(matrix, mid, smaller, larger) {
//     let count = 0,
//       n = matrix.length;
//     let row = n - 1,
//       col = 0;
//     while (row >= 0 && col < n) {
//       if (matrix[row][col] > mid) {
//         // as matrix[row][col] is bigger than the mid, let's keep track of the
//         // smallest number greater than the mid
//         larger = Math.min(larger, matrix[row][col]);
//         row -= 1;
//       } else {
//         // as matrix[row][col] is less than or equal to the mid, let's keep track of the
//         // biggest number less than or equal to the mid
//         smaller = Math.max(smaller, matrix[row][col]);
//         count += row + 1;
//         col += 1;
//       }
//     }

//     return [count, smaller, larger];
//   }


//   console.log(`Kth smallest number is: ${
//     find_Kth_smallest([
//       [1, 4],
//       [2, 5],
//     ], 2)}`);

//   console.log(`Kth smallest number is: ${
//     find_Kth_smallest([
//       [-5],
//     ], 1)}`);

//   console.log(`Kth smallest number is: ${
//     find_Kth_smallest([
//       [2, 6, 8],
//       [3, 7, 10],
//       [5, 8, 11],
//     ], 5)}`);

//   console.log(`Kth smallest number is: ${
//     find_Kth_smallest([
//       [1, 5, 9],
//       [10, 11, 13],
//       [12, 13, 15],
//     ], 8)}`);