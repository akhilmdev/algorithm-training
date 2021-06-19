// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once.
// Find the two numbers that appear only once.

// Example 1:

// Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
// Output: [4, 6]
// Example 2:

// Input: [2, 1, 3, 2]
// Output: [1, 3]

function twoSingleNumber(arr) {
    let n1xn2 = 0;
    arr.forEach(num => {
        n1xn2 ^= num;
    })
    let rightMostNumber = 1;
    while((n1xn2&rightMostNumber) === 0) {
        rightMostNumber = rightMostNumber << 1;
    }
    console.log(rightMostNumber)
    
    let n1 = 0,
        n2 = 0;
    
    arr.forEach(num => {
        if((num & rightMostNumber) === 0) {
            n1 ^= num;
        } else {
            n2 ^= num;
        }
    })

    return [ n1, n2 ]
}

console.log(twoSingleNumber([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]))
console.log(twoSingleNumber([2, 1, 3, 2]))