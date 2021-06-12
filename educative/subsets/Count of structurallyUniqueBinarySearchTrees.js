// Given a number ‘n’, write a function to return the count of structurally unique Binary Search Trees (BST)
// that can store values 1 to ‘n’.

// Example 1:

// Input: 2
// Output: 2
// Explanation: As we saw in the previous problem, there are 2 unique BSTs storing numbers from 1-2.
// Example 2:

// Input: 3
// Output: 5
// Explanation: There will be 5 unique BSTs that can store numbers from 1 to 3.

function CountUniqeBST(limit) {
    if (limit <= 1) return 1;
    let count = 0;
    for(let i = 1; i <= limit; i++) {
        const left = CountUniqeBST(i - 1);
        const right = CountUniqeBST(limit - i);

        count += left * right;
    }
    return count;
}

console.log(CountUniqeBST(3))
console.log(CountUniqeBST(1))
console.log(CountUniqeBST(2))