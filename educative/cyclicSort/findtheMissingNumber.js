// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
// Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

// Example 1:

// Input: [4, 0, 3, 1]
// Output: 2
// Example 2:

// Input: [8, 3, 5, 2, 4, 6, 0, 1]
// Output: 7

function findTheMissingNumber(arr) {
    let index = 0;
    while(index < arr.length) {
        if (arr[index] < arr.length) {
            if (arr[index] === index) {
                index += 1;
                continue;
            } else {
                const temp = arr[arr[index]];
                arr[arr[index]] = arr[index];
                arr[index] = temp;
                continue;
            }
        }
        index += 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) return i;
    }
}

// time => O(N);
// Space => O(1);

console.log(findTheMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]))