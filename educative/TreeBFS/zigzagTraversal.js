// Given a binary tree, populate an array to represent its zigzag
// level order traversal. You should populate the values of all
// nodes of the first level from left to right, then right to left
// for the next level and keep alternating in the same manner for
// the following levels.


const { Queue } = require('./queue');

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };

function reverseLevelOrderTraversal(root) {
    const orderTraversal = [];
    let isLeftToRiight = true;

    const queue = new Queue();
    queue.enqueue(root);
    while(queue.size > 0) {
        const levelTraversal = [];
        const queueSize = queue.size;
        let levelIndex = 0;
        while(levelIndex < queueSize) {
            const currentNode = queue.dequeue()
            if (isLeftToRiight) {
                levelTraversal.push(currentNode.value);
            } else {
                levelTraversal.unshift(currentNode.value);
            }
            levelIndex += 1;
            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
        }
        isLeftToRiight = !isLeftToRiight;
        orderTraversal.push(levelTraversal);
    }
    return orderTraversal;
}

// Time => O(N)
// Space => O(N)

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Level order traversal: ${reverseLevelOrderTraversal(root)}`);