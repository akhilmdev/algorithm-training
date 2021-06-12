// Given a sorted array of numbers, find if a given number ‘key’ is present in the array.
// Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order.
// You should assume that the array can have duplicates.

// Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Example 1:

// Input: [4, 6, 10], key = 10
// Output: 2
// Example 2:

// Input: [1, 2, 3, 4, 5, 6, 7], key = 5
// Output: 4
// Example 3:

// Input: [10, 6, 4], key = 10
// Output: 0
// Example 4:

// Input: [10, 6, 4], key = 4
// Output: 2

function orderAgnosticBinarySearch(arr, key) {

    let start = 0;
    let end = arr.length - 1;
    if (arr[start] === key) return 0;
    if (arr[end] === key) return arr.length - 1;
    
    const isAscending = arr[start] < arr[end];

    while(start < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        if (isAscending) {
            if(key < arr[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (key > arr[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
}

// Time => O(logN)
// Space => O(1)

console.log(orderAgnosticBinarySearch([4, 6, 10], 10))
console.log(orderAgnosticBinarySearch([10, 6, 4], 6))
console.log(orderAgnosticBinarySearch([4, 6, 10], 4))
console.log(orderAgnosticBinarySearch([1, 4, 4, 4, 4, 5, 6, 7], 5))