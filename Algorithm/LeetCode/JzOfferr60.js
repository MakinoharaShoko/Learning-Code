/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp[i] = [];
    }
    for (let i = 0; i < 6; i++) {
        dp[0][i] = 1 / 6;
    }
    for (let i = 1; i < n; i++) {
        dp[i] = new Array(5 * (i + 1) + 1);
        dp[i].fill(0);
        for (let j = 0; j < dp[i - 1].length; j++) {
            for (let k = 0; k < 6; k++) {
                dp[i][k + j] += dp[i-1][j] * (1 / 6);
            }
        }
    }
    return dp[n - 1];
};

console.log(dicesProbability(3));