// Given an array containing 0s, 1s and 2s, sort the array in-place.
// You should treat numbers of the array as objects, hence, 
// we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red,
// white and blue; and since our input array also consists of three
// different numbers that is why it is called Dutch National Flag problem.
// 
// Input: [1, 0, 2, 1, 0]
// Output: [0 0 1 1 2]

// Input: [2, 2, 0, 1, 2, 0]
// Output: [0 0 1 2 2 2 ]

function dutchNationalFlag(arr) {
    let start = 0;
    let end = arr.length - 1;

    for (let i = 0 ; i < end + 1;) {
        if (arr[i] === 0 && start < i) {
            [arr[i], arr[start]] = [arr[start], arr[i]];
            start += 1;
        } else if (arr[i] === 2) {
            [arr[i], arr[end]] = [arr[end], arr[i]];
            end -= 1;
        } else {
            i += 1;
        }
    }

    return arr;

}