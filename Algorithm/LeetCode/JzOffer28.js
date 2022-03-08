/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const isEven = (left, right) => {
        if (!left && !right) {
            return true;
        }
        if (!left || !right || left.val !== right.val) {
            return false;
        }
        return isEven(left.left, right.right) && isEven(left.right, right.left);
    }
    if (!root) {
        return true;
    }
    return isEven(root.left, root.right);
};