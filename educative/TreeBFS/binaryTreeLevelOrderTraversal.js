
const {Queue} = require('./queue')

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };

function BinaryTreeLevelOrderTraversal(root) {

    const queue = new Queue();

    const orderTraversal = [];

    queue.enqueue(root);

    
    while (queue.size > 0) {
        let queueIndex = 0;
        let levelTraversal = [];
        const queueSize = queue.size;
        while(queueIndex < queueSize) {
            const currentNode = queue.dequeue();
            levelTraversal.push(currentNode.value)
            queueIndex += 1;
            
            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
        }
        orderTraversal.push(levelTraversal);
    }

    return orderTraversal;
    
}

// Time => O(N);
// Space => O(2 ^ k) where k is the depth of tree

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${BinaryTreeLevelOrderTraversal(root)}`);

