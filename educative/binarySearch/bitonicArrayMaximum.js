// Find the maximum value in a given Bitonic array. An array is considered bitonic
// if it is monotonically increasing and then monotonically decreasing.
// Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// Example 1:

// Input: [1, 3, 8, 12, 4, 2]
// Output: 12
// Explanation: The maximum number in the input bitonic array is '12'.
// Example 2:

// Input: [3, 8, 3, 1]
// Output: 8
// Example 3:

// Input: [1, 3, 8, 12]
// Output: 12
// Example 4:

// Input: [10, 9, 8]
// Output: 10

function BitonicArrayMax(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while(start < end) {
        mid = start + Math.floor((end - start) / 2);

        if (arr[mid + 1] > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return arr[start];
}

// Time => O(logN)
// Space => O(1)

console.log(BitonicArrayMax([10, 9, 8]))
console.log(BitonicArrayMax([1, 3, 8, 12]))
console.log(BitonicArrayMax([3, 8, 3, 1]))
console.log(BitonicArrayMax([1, 3, 8, 12, 4, 2]))