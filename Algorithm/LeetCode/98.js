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
 * @return {boolean}
 */
 var isValidBST = function (root) {
    // 先假设是二叉搜索树
    let ret = true;
    let go = true;
    // 递归判断，如果有一个节点不是，那就不是
    function judge(node, mustSmaller, mustBigger) {
        if (node && node.val !== undefined && go) {
            if (node.val >= mustSmaller || node.val <= mustBigger) {
                ret = false;
                go = false;
                return;
            } else {
                if (node.left) {
                    judge(node.left, node.val, mustBigger);
                }
                if (node.right) {
                    judge(node.right, mustSmaller, node.val);
                }
            }
        }
    }
    judge(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    return ret;
};