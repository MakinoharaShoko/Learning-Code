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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    // 找节点并转移
    function dfs(node, key, parent, type) {
        if (node && node.val !== undefined && node.val !== null) {
            if (node.val === key) {
                if (node.left) {
                    if (node.right) {
                        let fl = findLeft(node.right);
                        fl.left = node.left;
                        let t = node.right;
                        node.left = t.left;
                        node.right = t.right;
                        node.val = t.val;
                        return;
                    }
                    let t = node.left;
                    node.left = t.left;
                    node.right = t.right;
                    node.val = t.val;
                    return;
                }
                if (node.right) {
                    let t = node.right;
                    node.left = t.left;
                    node.right = t.right;
                    node.val = t.val;
                    return;
                }
                if (type === 'root') {
                    root = null;
                }
                if (type === 'left') {
                    parent.left = null;
                }
                if (type === 'right') {
                    parent.right = null;
                }
                return;
            } else {
                dfs(node.left, key, node, 'left');
                dfs(node.right, key, node, 'right');
            }
        } else return;
    }
    function findLeft(node) {
        if (node && node.left) {
            return findLeft(node.left);
        } else
            return node;
    }
    dfs(root, key, root, 'root');
    return root;
};