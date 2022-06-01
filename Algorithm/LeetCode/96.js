/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    /**
     * n个节点存在二叉排序数 = 以i为根的二叉排序树之和
     * G(n) = f(1) + f(2) + f(3) + ...... + f(n) (1)
     * 而 f(i) 可划分为左右子树，左子树根是 i-1 右子树根是 n-i
     * f(i) = G(i-1) * G(n-i) (2)
     * 将 (2) 带入 (1)，得到动态规划的转移方程。
     */
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = 0;
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};