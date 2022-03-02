/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let dp = [1];
    let a = 0, b = 0, c = 0;//丑数的index
    for (let i = 1; i < n; i++) {
        const t2 = dp[a] * 2, t3 = dp[b] * 3, t5 = dp[c] * 5;
        dp[i] = Math.min(t2, t3, t5);
        if (dp[i] === t2)
            a++;//当前丑数是2的倍数
        if (dp[i] === t3)
            b++;//当前丑数是3的倍数
        if (dp[i] === t5)
            c++;//当前丑数是5的倍数
    }
    return dp[n - 1];
};