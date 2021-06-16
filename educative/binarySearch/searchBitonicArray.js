// Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic
// if it is monotonically increasing and then monotonically decreasing.
// Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.

// Example 1:

// Input: [1, 3, 8, 4, 3], key=4
// Output: 3
// Example 2:

// Input: [3, 8, 3, 1], key=8
// Output: 1
// Example 3:

// Input: [1, 3, 8, 12], key=12
// Output: 3
// Example 4:

// Input: [10, 9, 8], key=10
// Output: 0

function searchBitonicArray(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        const mid = start + Math.floor((end - start) / 2);

        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    const largest = start;
    start = 0;
    end = arr.length - 1;

    while(start < end) {
        const mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === key) return mid;
        if (mid < largest) {
            if (arr[mid] < key) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (arr[mid] > key) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return start;
}

// Time => O(log(N))
// Space => O(1)


console.log(searchBitonicArray([1, 3, 8, 4, 3], 4))
console.log(searchBitonicArray([3, 8, 3, 1], 8))
console.log(searchBitonicArray([1, 3, 8, 12], 12))
console.log(searchBitonicArray([10, 9, 8], 10))
