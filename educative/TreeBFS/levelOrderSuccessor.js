// Given a binary tree and a node, find the level order successor
// of the given node in the tree. The level order successor is the
// node that appears right after the given node in the level order traversal.

const { Queue } = require('./queue');

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };


function levelOrderSuccessor(root, nodeValue) {
    const queue = new Queue();
    queue.enqueue(root);

    while(queue.size > 0) {
        let levelIndex = 0;
        const queueSize = queue.size;
        
        while(levelIndex < queueSize) {
            const currentNode = queue.dequeue();
            if (currentNode.value === nodeValue) {
                const nextNode = queue.dequeue();
                return nextNode.value ? nextNode.value : null;
            }
            
            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
        }
        levelIndex += 1;

    }

    return null;
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
console.log(`Level order traversal: ${levelOrderSuccessor(root, 10)}`);