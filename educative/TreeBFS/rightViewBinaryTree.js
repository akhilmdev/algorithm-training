// Right View of a Binary Tree (easy) #
// Given a binary tree, return an array containing nodes in its right view.
// The right view of a binary tree is the set of nodes visible when the tree
// is seen from the right side.

const { Queue } = require('./queue');

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
};


function RightViewBinaryTree(root) {

    const queue = new Queue();
    const rightView = [];

    queue.enqueue(root);

    while(queue.size > 0) {
        let levelIndex = 0;
        const queueSize = queue.size;

        while(levelIndex < queueSize) {
            const currentNode = queue.dequeue();

            if (levelIndex === queueSize - 1) {
                rightView.push(currentNode.value);
            }

            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
            levelIndex += 1;
        }
    }

    return rightView;

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
console.log(`Level order traversal: ${RightViewBinaryTree(root)}`);