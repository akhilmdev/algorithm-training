// Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

// You can assume that the array does not have any duplicates.

// Example 1:

// Input: [10, 15, 1, 3, 8]
// Output: 2
// Explanation: The array has been rotated 2 times.
// Original array:
//     1   3   8   10   15    
// Array after 2 rotations:  
//     10   15   1   3   8

// Example 2:
// Input: [4, 5, 7, 9, 10, -1, 2]
// Output: 5
// Explanation: The array has been rotated 5 times.
// Original array:  
//     -1   2   4   5   7   9   10   
// Array after 5 rotations:  
//     4   5   7   9   10   -1   2   
 
// Example 3:

// Input: [1, 3, 8, 10]
// Output: 0
// Explanation: The array has been not been rotated.

function rotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        const mid = start + Math.floor((end - start)/2);

        if(arr[mid] >= arr[start] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if (start !== arr.length - 1) return start + 1;
    return 0
}

// Time => O(logN)
// Space = O(1)

console.log(rotationCount([10, 15, 1, 3, 8]))
console.log(rotationCount([4, 5, 7, 9, 10, -1, 2]))
console.log(rotationCount([3, 3, 7, 3]))