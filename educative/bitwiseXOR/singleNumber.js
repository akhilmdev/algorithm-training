// In a non-empty array of integers, every number appears twice except for one, find that single number.

// Example 1:

// Input: 1, 4, 2, 1, 3, 2, 3
// Output: 4
// Example 2:

// Input: 7, 9, 7
// Output: 9

function findSingleNumber(arr) {
    let result = null;
    for(let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }
    return result;
}

// Time => O(N)
// Space => O(1)

console.log(findSingleNumber([1,4,2,1,3,2,3]))
console.log(findSingleNumber([7,9,7]))