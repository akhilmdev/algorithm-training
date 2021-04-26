// Find the First K Missing Positive Numbers (hard) #
// Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

// Example 1:

// Input: [3, -1, 4, 5, 5], k=3
// Output: [1, 2, 6]
// Explanation: The smallest missing positive numbers are 1, 2 and 6.
// Example 2:

// Input: [2, 3, 4], k=3
// Output: [1, 5, 6]
// Explanation: The smallest missing positive numbers are 1, 5 and 6.
// Example 3:

// Input: [-2, -3, 4], k=2
// Output: [1, 2]
// Explanation: The smallest missing positive numbers are 1 and 2.

function findTheFirstKMissingPositiveNumbers(arr, k) {
    let index = 3;
    const missingPositiveNumbers = [];

    while (index <= arr.length) {
        if (arr[index] !== index + 1 && arr[index] !== arr[arr[index] - 1] && arr[index] > 0 && arr[index] <= arr.length) {
            const temp = arr[arr[index] - 1];
            arr[arr[index] - 1] = arr[index];
            arr[index] = temp;
            continue;
        }
        index += 1;
    }

    index = 0
    while (missingPositiveNumbers.length < k) {
        if(arr[index] !== index + 1) {
            missingPositiveNumbers.push(index + 1);
        }
        index += 1;
    }
    return missingPositiveNumbers;
}

// Time => O(N + k) => k is for last loop
// Space => O(k)

console.log(findTheFirstKMissingPositiveNumbers([2, 3, 4], 3))
console.log(findTheFirstKMissingPositiveNumbers([-2, -3, 4], 5))