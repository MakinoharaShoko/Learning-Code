/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const res = [];
    const dfs = (node) => {
        if (node) {
            res.push(node.val);
        } else return;
        for (const e of node.children) {
            dfs(e);
        }
    }
    dfs(root);
    return res;
};