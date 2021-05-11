// Given a binary tree and a number sequence,
// find if the sequence is present as a root-to-leaf path in the given tree.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  
  const find_path = function(root, sequence) {
    return findSquencePath(root, sequence, 0);
  };

  const findSquencePath = (root, sequence, index) => {
    if (root === null) return false;
    
    if (root.value === sequence[index]) {
        if (root.left === null && root.right === null) {
            return true;
        } else {
            return findSquencePath(root.left, sequence, index + 1) || findSquencePath(root.right, sequence, index + 1);
        }
    } else {
        return false;
    }

  }
  
//   Time => O(N)
//   Space => (N)
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
  