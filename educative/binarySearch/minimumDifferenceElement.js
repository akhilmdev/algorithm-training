// Given an array of numbers sorted in ascending order, find the element in the array that
// has the minimum difference with the given ‘key’.

// Example 1:

// Input: [4, 6, 10], key = 7
// Output: 6
// Explanation: The difference between the key '7' and '6' is minimum than any other number in the array 
// Example 2:

// Input: [4, 6, 10], key = 4
// Output: 4
// Example 3:

// Input: [1, 3, 8, 10, 15], key = 12
// Output: 10
// Example 4:

// Input: [4, 6, 10], key = 17
// Output: 10

function minDifference(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const min = start + Math.floor((end - start) / 2);

        if (arr[min] === key) {
            return arr[min];
        } else if (arr[min] > key) {
            end = min -1;
        } else {
            start = min + 1;
        }
    }
    if ((arr[start] - key) > (key - arr[end])) {
        return arr[start]
    }
    return arr[end];
}

// Time => O(logN)
// Space => O(1)

console.log(minDifference([4, 6, 10], 7))