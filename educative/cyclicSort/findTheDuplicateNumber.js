// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
// The array has only one duplicate but it can be repeated multiple times.
// Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

// Example 1:

// Input: [1, 4, 4, 3, 2]
// Output: 4
// Example 2:

// Input: [2, 1, 3, 3, 5, 4]
// Output: 3
// Example 3:

// Input: [2, 4, 1, 4, 4]
// Output: 4


function FindTheDupilcateArray(arr) {
    index = 1;

    while(index <= arr.length) {
        if (arr[index] <= arr.length && arr[index] !== index) {
            if (arr[index] === arr[arr[index]]) {
                return arr[index];
            } else {
                const temp = arr[arr[index]];
                arr[arr[index]] = arr[index];
                arr[index] = temp;
            }
        }
        index += 1;
    }
    return null;

}

// Time => O(N)
// Space => O(1)

console.log(FindTheDupilcateArray([1, 4, 4, 3, 2]))