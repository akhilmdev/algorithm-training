// Find the minimum depth of a binary tree. The minimum depth is
// the number of nodes along the shortest path from the root node to the nearest leaf node.
const { Queue } = require('./queue');

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };



function MinimumDepthBinaryTree(root) {
    if (root === null) return 0;
    const queue = new Queue();

    let minDepth = 1;
    queue.enqueue(root);

    while(queue.size > 0) {
        let levelIndex = 0;
        const queueSize = queue.size;
        
        while(levelIndex < queueSize) {
            const currnetNode = queue.dequeue();
            
            if (currnetNode.left === null || currnetNode.right === null) {
                return minDepth;
            }
            if (currnetNode.left) queue.enqueue(currnetNode.left);
            if (currnetNode.right) queue.enqueue(currnetNode.right);
            levelIndex += 1;
        }
        minDepth += 1;
        
    }
    return minDepth;
}

// Time => O(N)
// Space => O(N)



var root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(11);

root.left.left.left = new TreeNode(6);
root.left.right.left = new TreeNode(7);

// root.right.right = new TreeNode(7);
console.log(`Level order traversal: ${MinimumDepthBinaryTree(root)}`);