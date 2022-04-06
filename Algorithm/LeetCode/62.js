/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (n < m) {
        [m, n] = [n, m];
    }
    let b = 1;
    for (let i = m - 1; i >= 1; i--) {
        b = b * i;
    }
    let u = 1;
    for (let i = (m + n - 2); i >= n; i--) {
        u = u * i;
    }
    return u / b;
};