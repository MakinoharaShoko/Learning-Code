/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const buildtree = require('./buildTree');

var kthLargest = function (root, k) {
    //倒序遍历
    let count = 0;
    let r;
    const f = (node) => {
        if (!node)
            return;
        f(node.right);
        count++;
        if (count === k) {
            r = node.val;
            return;
        }
        f(node.left);
    }
    f(root);
    return r;
};

console.log(kthLargest(buildtree('[5,3,6,2,4,null,null,1]'), 3));