const buildTree = require('./buildTree')

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
var isBalanced = function (root) {
    // dfs 比较左右深度
    if (!root) return true;
    //dfs找最深
    let r = true;
    const dfs = (node, depth) => {
        if (!node) {
            return depth - 1;
        }
        let left = dfs(node.left, depth + 1);
        let right = dfs(node.right, depth + 1);
        if (Math.abs(left - right) > 1) {
            r = false;
        }
        return Math.max(left, right);
    }
    dfs(root, 1);//当前节点，当前节点最大深度
    return r;
};

console.log(isBalanced(buildTree('[1,2,2,3,3,null,null,4,4]')));