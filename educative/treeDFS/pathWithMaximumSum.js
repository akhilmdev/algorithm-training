// Find the path with the maximum sum in a given binary tree.
// Write a function that returns the maximum sum.

// A path can be defined as a sequence of nodes between any two nodes
// and doesn’t necessarily pass through the root. The path must contain at least one node.

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}


class MaximumSum {
    constructor() {
        this.maximumSum = -Infinity;
    }

    find_maximum_path_sum(root) {

        this.findMaxSum(root, 0)
        return this.maximumSum;
    }

    findMaxSum(root, sum) {
        if (root === null) return 0;
        sum += root.value;
        const leftSum = this.findMaxSum(root.left, 0)
        const rightSum = this.findMaxSum(root.right, 0)

        this.maximumSum = Math.max(this.maximumSum, leftSum + rightSum + root.value);
        sum += Math.max(leftSum, rightSum);
        return sum;
    }
}


// Time => O(N)
// Space => O(N)




const maxSum = new MaximumSum()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${maxSum.find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${maxSum.find_maximum_path_sum(root)}`)

const maxSum1 = new MaximumSum()
root = new TreeNode(-1)
root.left = new TreeNode(-3)
console.log(`Maximum Path Sum: ${maxSum1.find_maximum_path_sum(root)}`)




