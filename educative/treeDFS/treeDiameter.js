// Given a binary tree, find the length of its diameter. The diameter of a
// tree is the number of nodes on the longest path between any two leaf nodes.
// The diameter of a tree may or may not pass through the root.

// Note: You can always assume that there are at least two leaf nodes in the given tree.

class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


class TreeDiameter {

    constructor() {
        this.treeDiameter = 0;
    }

    dia(root, count) {
        if (root === null) return 0;

        count += 1;
        const leftCount = this.dia(root.left, 0);
        const rightCount = this.dia(root.right, 0);

        count += Math.max(leftCount, rightCount);
        this.treeDiameter = Math.max(this.treeDiameter, leftCount + rightCount + 1)
        // console.log(leftCount, rightCount, count, this.treeDiameter, leftCount + rightCount + 1)

        return count;

    }

    find_diameter(root) {
        this.dia(root, 0)
        return this.treeDiameter;
    }


};


// TIME => O(N)
// Space => O(N)


var treeDiameter = new TreeDiameter()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
