// Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’.
// The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

// Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

// Example 1:

// Input: [4, 6, 10], key = 6
// Output: 1
// Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.
// Example 2:

// Input: [1, 3, 8, 10, 15], key = 12  [1, 3, 8, 10, 15, 17, 20]
// Output: 4
// Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.
// Example 3:

// Input: [4, 6, 10], key = 17
// Output: -1
// Explanation: There is no number greater than or equal to '17' in the given array.
// Example 4:

// Input: [4, 6, 10], key = -1
// Output: 0
// Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.

function celingOfANumber(arr, key) {
    if (key > arr[arr.length - 1]) return -1;

    let start = 0
    let end = arr.length - 1;

    if (arr[start] == key) return 0;
    if (arr[end] == key) return arr.length - 1;

    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2)
        

        if(arr[mid] === key) {
            return mid;
        } else if (key < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

    }
    return start;
}

// Time => O(logN)
// Space => O(1)

console.log(celingOfANumber([1, 3, 8, 10, 15, 17, 19], 12))
console.log(celingOfANumber([1, 3, 8, 10, 15, 17, 19], -1))
console.log(celingOfANumber([1, 3, 8, 10, 15, 17, 19], 8))
console.log(celingOfANumber([1, 3, 8, 10, 15, 17, 19], 21))