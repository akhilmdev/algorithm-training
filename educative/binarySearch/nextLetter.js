// Given an array of lowercase letters sorted in ascending order, find the smallest letter in
// the given array greater than a given ‘key’.

// Assume the given array is a circular list, which means that the last letter is assumed to
// be connected with the first letter. This also means that the smallest letter in the given
// array is greater than the last letter of the array and is also the first letter of the array.

// Write a function to return the next letter of the given ‘key’.

// Example 1:

// Input: ['a', 'c', 'f', 'h'], key = 'f'
// Output: 'h'
// Explanation: The smallest letter greater than 'f' is 'h' in the given array.
// Example 2:

// Input: ['a', 'c', 'f', 'h'], key = 'b'
// Output: 'c'
// Explanation: The smallest letter greater than 'b' is 'c'.
// Example 3:

// Input: ['a', 'c', 'f', 'h'], key = 'm'
// Output: 'a'
// Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.
// Example 4:

// Input: ['a', 'c', 'f', 'h'], key = 'h'
// Output: 'a'
// Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.

function NextLetter(arr, key) {

    let start = 0;
    let end = arr.length - 1;
    if (arr[start] === key) return arr[start];
    if (arr[end] === key) return arr[end];

    while(start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === key) {
            return arr[mid];
        } else if (arr[mid] > key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return arr[start % arr.length];
}

// Time => O(log(N))
// Space => O(1)

console.log(NextLetter(['a', 'c', 'f', 'h'], 'h'))
console.log(NextLetter(['a', 'c', 'f', 'h'], 'm'))
console.log(NextLetter(['a', 'c', 'f', 'h'], 'b'))
console.log(NextLetter(['a', 'c', 'f', 'h'], 'f'))