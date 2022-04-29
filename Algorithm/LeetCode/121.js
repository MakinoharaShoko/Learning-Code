/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let profit = 0;
    prices.forEach(e => {
        if (e < min) {
            min = e;
        }
        if (e - min > profit) {
            profit = e - min;
        }
    })
    return profit;
};