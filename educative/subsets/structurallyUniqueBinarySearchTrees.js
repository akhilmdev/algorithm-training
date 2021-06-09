// Given a number ‘n’, write a function to return all structurally unique Binary
// Search Trees (BST) that can store values 1 to ‘n’?

// Example 1:

// Input: 2
// Output: List containing root nodes of all structurally unique BSTs.
// Explanation: Here are the 2 structurally unique BSTs storing all numbers from 1 to 2:
//     1  2   
//     |  |
//     2  1

// Example 2:

// Input: 3
// Output: List containing root nodes of all structurally unique BSTs.
// Explanation: Here are the 5 structurally unique BSTs storing all numbers from 1 to 3:

//    1    1     2     3   3
//    |    |    / \    |   |
//    2    3   1   3   1   2
//    |    |           |   |
//    3    2           2   1


class Tree {
    constructor(root, left = null, right= null) {
        this.root = root;
        this.left = left;
        this.right = right;
    }
}

function UniqueBinarySerachTree(limit) {
    if (limit < 1) return [null]
    return searchTree(1, limit);
}

function searchTree(start, end) {
    let results = [];

    if (start > end) {
        return [null];
    }

    for(let i = start; i <= end; i++) {
        const left = searchTree(start, i - 1);
        const right = searchTree(i + 1, end);

        for(let l = 0; l < left.length; l++) {
            for(let r = 0; r < right.length; r++) {
                results.push(new Tree(i, left[l], right[r]))
            }
        }

    }


    return results;
}

console.log(UniqueBinarySerachTree(3).length)
console.log(UniqueBinarySerachTree(1).length)