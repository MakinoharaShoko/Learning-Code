/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    const dfs = (node) => {
        const t = node.left;
        node.left = node.right;
        node.right = t;
        if(node.left){
            dfs(node.left);
        }
        if(node.right){
            dfs(node.right);
        }
    }
    if (!root) {
        return root;
    } else {
        dfs(root);
        return root;
    }
};