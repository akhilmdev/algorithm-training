// Given a binary tree, populate an array to represent the averages of all of its levels.
const { Queue } = require('./queue');

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };


function LevelAveragesBinaryTree(root) {

    const average = [];

    const queue = new Queue();
    queue.enqueue(root);

    while(queue.size > 0) {
        let levelIndex = 0;
        const queueSize = queue.size;
        let levelSum = 0;
        while(levelIndex < queueSize) {
            const currentNode = queue.dequeue();
            levelSum += currentNode.value;
            
            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);

            levelIndex += 1;
        }
        average.push(levelSum / queueSize);
    }
    return average;
}

// Time => O(N);
// Space => O(N); as Queue need O(N) space

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Level order traversal: ${LevelAveragesBinaryTree(root)}`);