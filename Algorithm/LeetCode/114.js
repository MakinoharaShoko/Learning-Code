/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const newRoot = new TreeNode(null, null, null);
    let current = newRoot;
    // 先序遍历
    function dfs(node) {
        if (node) {
            if (node.val !== null && node.val !== undefined) {
                const newNode = new TreeNode(null, null, null);
                newNode.val = node.val;
                current.right = newNode;
                current = current.right;
            }
            dfs(node.left);
            dfs(node.right);
        }
    }
    if (root) {
        dfs(root);
        root.val = newRoot.right.val;
        root.left = null;
        root.right = newRoot.right.right;
    }
};