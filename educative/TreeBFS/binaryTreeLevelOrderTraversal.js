
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
        
        while(queueIndex < queue.size) {
            const currentNode = queue.dequeue();
            orderTraversal.push(currentNode.value)
            queueIndex += 1;
        }


        index += 1;
    }


    // orderTraversal.push([root]);

    // let levelIndex = 0;
    // while(orderTraversal[levelIndex] && orderTraversal[levelIndex].length) {
    //     let index = 0;
    //     const levelTraversal = [];
    //     while(orderTraversal[levelIndex][index]) {
    //         if (orderTraversal[levelIndex][index].left) levelTraversal.push(orderTraversal[levelIndex][index].left)
    //         if (orderTraversal[levelIndex][index].right) levelTraversal.push(orderTraversal[levelIndex][index].right)
    //         index += 1;
    //     }

    //     console.log(orderTraversal)
    //     if (levelTraversal && levelTraversal.length) orderTraversal.push(levelTraversal);
    //     levelIndex += 1;
    // }
    // return orderTraversal;
    
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

