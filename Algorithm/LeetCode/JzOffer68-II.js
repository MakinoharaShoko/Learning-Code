/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const findChild = (node) => {
        if (!node)
            return null;
        if (node === p || node === q) {
            return node;
        }
        let left = findChild(node.left);
        let right = findChild(node.right);
        if (left && right) {
            return root;
        }
        if (left) {
            return right;
        }
        if (right) {
            return left;
        }
    }
    return findChild(root);
};