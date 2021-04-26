// Find the Smallest Missing Positive Number (medium) #
// Given an unsorted array containing numbers, find the smallest missing positive number in it.

// Example 1:

// Input: [-3, 1, 5, 4, 2]
// Output: 3
// Explanation: The smallest missing positive number is '3'
// Example 2:

// Input: [3, -2, 0, 1, 2]
// Output: 4
// Example 3:

// Input: [3, 2, 5, 1]
// Output: 4

function findTheSmallestMissingPositiveNumber(arr) {
    let index = 0;

    while (index < arr.length) {

        if (arr[index] !== (index + 1) && arr[index] > 0 && arr[index] < arr.length) {
            const temp = arr[arr[index] - 1];
            arr[arr[index] - 1] = arr[index];
            arr[index] = temp;
            continue;
        }
        index += 1;
    }
    index = 0;

    while(index < arr.length) {
        if (arr[index] !== index + 1) {
            return index + 1;
        }
        index += 1;
    }
    return - 1;
}

// Time => O(N)
// Space => O(1)

console.log(findTheSmallestMissingPositiveNumber([3, 2, 5, 1]))