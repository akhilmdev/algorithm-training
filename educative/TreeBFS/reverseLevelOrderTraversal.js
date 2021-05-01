// Given a binary tree, populate an array to represent its level-by-level
// traversal in reverse order, i.e., the lowest level comes first.
// You should populate the values of all nodes in each level from
// left to right in separate sub-arrays.

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

    const queue = new Queue();
    queue.enqueue(root);
    while(queue.size > 0) {
        const levelTraversal = [];
        const queueSize = queue.size;
        let levelIndex = 0;
        while(levelIndex < queueSize) {
            const currentNode = queue.dequeue()
            levelTraversal.push(currentNode.value);
            levelIndex += 1;

            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
        }

        orderTraversal.push(levelTraversal);
    }

    for (let i = 0; i< orderTraversal.length / 2; i++) {
        const temp = orderTraversal[i];
        orderTraversal[i] = orderTraversal[orderTraversal.length - 1 - i];
        orderTraversal[orderTraversal.length - 1 - i] = temp;
    }

    return orderTraversal;
}

Time => O(N)
Space => O(N)


var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(`Level order traversal: ${reverseLevelOrderTraversal(root)}`);
