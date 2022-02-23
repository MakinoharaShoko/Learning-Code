/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (!n || n === 1) {
        return 1;
    }
    //准备dp
    const arr = [1, 1, 2];
    for (let i = 3; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2])%1000000007;
    }
    return arr[n];
};

console.log(numWays(7));