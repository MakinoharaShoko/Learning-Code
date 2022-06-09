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
 * @return {number}
 */
var maxDepth = function (root) {
    let max = 0;
    function dfs(node, currDepth) {
        if (!node) {
            return;
        }
        if (node.val !== undefined && node.val !== null) {
            currDepth++;
            if (max < currDepth) {
                max = currDepth;
            }
        }
        if (node.left) {
            dfs(node.left, currDepth);
        }
        if (node.right) {
            dfs(node.right, currDepth);
        }
    }
    dfs(root, 0);
    return max;
};