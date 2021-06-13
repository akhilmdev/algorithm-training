// Given an array of numbers sorted in ascending order, find the range of a given number ‘key’.
// The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

// Example 1:

// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]
// Example 2:

// Input: [1, 3, 8, 10, 15], key = 10
// Output: [3, 3]
// Example 3:

// Input: [1, 3, 8, 10, 15], key = 12
// Output: [-1, -1]

function NumberRange(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    const result = [];
    let mid;
    if (arr[start] === key) result.push(start)

    while(start < end) {

        mid = start + Math.floor((end - start) / 2);

        if (arr[mid] >= key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

    }
    if (arr[mid] === key) {
        result.push(mid)
    } else if (arr[start] === key) {
        result.push(start)
    }

    if (result.length === 0) return [-1, -1]

    let i = result[0]
    for(; arr[i] === key; i++);
    result.push(i - 1);
    return result;
}

// Time => O(logN)
// Space => O(1)

console.log(NumberRange([4, 6, 6, 6, 9], 6))
console.log(NumberRange([1, 3, 8, 10, 15], 10))
console.log(NumberRange([1, 3, 8, 10, 15], 12))
console.log(NumberRange([1, 3, 3, 3, 8, 10, 15], 3))