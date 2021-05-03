// Given a binary tree, connect each node with its level order successor.
// The last node of each level should point to a null node.


const { Queue, Node } = require('./queue');

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };

function connectLevelOrderSiblings(root) {

    const linkLists = [];

    const queue = new Queue;
    queue.enqueue(root);

    while(queue.size > 0) {
        const queueSize = queue.size;
        let head = null;
        let tail = null;
        let levelIndex = 0;
        while(levelIndex < queueSize) {
            console.log(levelIndex)
            const currentNode = queue.dequeue();

            if (head === null ) {
                head = new Node(currentNode.value);
                tail = head;
            } else {
                tail.next = new Node(currentNode.value);
                tail = tail.next;
            }

            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
            levelIndex += 1;
        }
        linkLists.push(head);
    }

    console.log(linkLists)

    return linkLists;
}

// Time => O(N);
// Space => O(N);


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
console.log(`Level order traversal: ${connectLevelOrderSiblings(root)}`);