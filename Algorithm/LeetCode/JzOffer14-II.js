/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n <= 2)
        return 1;
    if (n === 3)
        return 2;
    const length = Math.floor(n / 3) - 1;//绳子的段数
    let extra = n % 3;//剩余多少段
    if (extra === 0)
        extra = 3;
    if (extra === 1)
        extra = 4;
    if (extra === 2)
        extra = 6;
    let res = 1;
    for (let i = 0; i < length; i++) {
        res = res * 3 % 1000000007;
    }
    return res * extra % 1000000007;
};

console.log(cuttingRope(3));