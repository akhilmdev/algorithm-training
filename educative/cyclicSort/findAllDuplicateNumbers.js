// Find all Duplicate Numbers

// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

// Example 1:

// Input: [3, 4, 4, 5, 5]
// Output: [4, 5]
// Example 2:

// Input: [5, 4, 7, 2, 3, 5, 3]
// Output: [3, 5]

function findAllDuplicateNumbers(arr) {

    let index = 0;
    const duplicateNumbers = [];

    while (index < arr.length) {
        if (arr[index] !== index + 1) {
            const nextIndex = arr[arr[index] - 1];
            if (arr[index] !== nextIndex) {
                arr[arr[index] - 1] = arr[index];
                arr[index] = nextIndex;
                continue;
            } else {
                duplicateNumbers.push(arr[index])
            }
        }
        index += 1;
    }
    return duplicateNumbers;
}

// Time => O(N);
// Space => O(1);

console.log(findAllDuplicateNumbers([5, 4, 7, 2, 3, 5, 2, 3]));