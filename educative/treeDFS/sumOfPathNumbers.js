// Given a binary tree where each node can only have a digit (0-9) value,
// each root-to-leaf path will represent a number.
// Find the total sum of all the numbers represented by all paths.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


var sum = 0;
const find_sum_of_path_numbers = function (root) {
    return sumOfPathNumbers(root, sum)
};

const sumOfPathNumbers = (root, sum) => {
    if (root === null) return sum;

    sum = 10 * sum + root.value;

    if (root.left === null && root.right === null) {
        return sum;
    }
    return sumOfPathNumbers(root.left, sum) + sumOfPathNumbers(root.right, sum);
    
}

// Time => O(N);
// Space => O(N)


var root = new TreeNode(1)
root.left = new TreeNode(7)
root.right = new TreeNode(9)
// root.left.left = new TreeNode(1)
root.right.left = new TreeNode(2)
root.right.right = new TreeNode(9)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)