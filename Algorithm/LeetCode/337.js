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
var rob = function (root) {
    let dp = [];
    const dfs = (node) => {
        if (!node) {
            return [0, 0];
        }
        const left = dfs(node.left);
        const right = dfs(node.right);

        const current = [];
        current[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);//这个不偷，左右选偷和不偷中大的。
        current[1] = node.val + left[0] + right[0];//这个偷，左右不能偷
        return current;
    }
    if (root) {
        dp = dfs(root);
    } else {
        return 0;
    }
    return Math.max(dp[0], dp[1]);
};