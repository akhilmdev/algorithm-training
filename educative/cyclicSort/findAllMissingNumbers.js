// We are given an unsorted array containing numbers taken from the range 1 to ‘n’.
// The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

// Example 1:

// Input: [2, 3, 1, 8, 2, 3, 5, 1]
// Output: 4, 6, 7
// Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
// Example 2:

// Input: [2, 4, 1, 2]
// Output: 3
// Example 3:

// Input: [2, 3, 2, 1]
// Output: 4

function FindAllMissingNumber(arr) {
    let index = 1;
    const missingNumbers = [];

    while (index <= arr.length) {
        if (arr[index] < arr.length && arr[index] !== index && arr[arr[index]] !== arr[index]) {
            const temp = arr[arr[index]];
            arr[arr[index]] = arr[index];
            arr[index] = temp;
            continue;
        }
        index += 1;
    }

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] !== i) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

// Time => O(N)
// Space => O(N)

console.log(FindAllMissingNumber([2, 3, 2, 1]))