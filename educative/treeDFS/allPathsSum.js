// Given a binary tree and a number ‘S’, find all paths
// from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


function allPathSum(root, sum, pathArray = [], pathArrays = []) {
    if (root === null) return false;

    pathArray.push(root.value);

    if (root.value === sum && root.left === null && root.right === null) {
        pathArrays.push([...pathArray]);
    }

    allPathSum(root.left, sum - root.value, pathArray, pathArrays)
    allPathSum(root.right, sum - root.value, pathArray, pathArrays)
    pathArray.pop()

}

function findPaths(root, sum) {
    allPaths = [];
    allPathSum(root, sum, [], allPaths);
    return allPaths;
}


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${findPaths(root, 23, [])}`)
console.log(`Tree has path: ${findPaths(root, 16, [])}`)