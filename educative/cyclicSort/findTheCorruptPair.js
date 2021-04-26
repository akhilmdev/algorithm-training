// Find the Corrupt Pair (easy) #
// We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
// The array originally contained all the numbers from 1 to ‘n’, but due to a data error,
// one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

// Example 1:

// Input: [3, 1, 2, 5, 2]
// Output: [2, 4]
// Explanation: '2' is duplicated and '4' is missing.
// Example 2:

// Input: [3, 1, 2, 3, 6, 4]
// Output: [3, 5]
// Explanation: '3' is duplicated and '5' is missing.

function findTheCourruptPair(arr) {
    let index = 0;

    while (index < arr.length) {
        if (arr[index] !== arr[arr[index] - 1]) {
            const nextIndex = arr[arr[index] - 1];
            arr[arr[index] - 1] = arr[index];
            arr[index] = nextIndex;
            continue;
        }
        index += 1;
    }
    index = 0;
    while(index < arr.length) {
        if (arr[index] === index + 1) {
            index += 1;
            continue;
        }
        return [arr[index], index + 1];
    }
    return [-1, -1];
}

// Time => O(N)
// space => O(1)

console.log(findTheCourruptPair([3, 1, 2, 3, 6, 4]))