/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 0) {
        return 0;
    }
    let min = prices[0];
    let res = 0;
    for (e of prices) {
        if (e < min)
            min = e;
        if (min < e && e - min > res)
            res = e - min;
    }
    return res;
};