/**
 * 不使用 dp 的方法太简单了，所以这里使用 dp
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const dp = new Array(prices.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(2).fill(0);
    }

    // 初始状态
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < prices.length; i++) {
        // 当前持现金的状态，继承昨天持现金的状态或者昨天持股票（今天卖出）的状态
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        // 当前持股票的状态，继承昨天持股票的状态或者昨天持现金（今天买入）的状态
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[prices.length - 1][0];
};