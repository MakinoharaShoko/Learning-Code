/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
    let idx = 0;
    for (let i = 2; i <= n; i++) {
        idx = (idx + m) % i;
    }
    return idx;
};