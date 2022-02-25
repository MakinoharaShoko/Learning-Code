/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n < 3)
        return 1;
    if (n === 3) {
        return 2;
    }
    if (n % 3 === 0) {
        return (3 ** (n / 3));
    }
    if (n % 3 === 2) {
        return 3 ** (Math.floor(n / 3)) * 2;
    } if (n % 3 === 1) {
        return 3 ** (Math.floor(n / 3) - 1) * 2 * 2;
    }
};