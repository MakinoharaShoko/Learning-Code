/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    //遇到0，返回1
    if (n === 0)
        return 1;
        //遇到1，返回x
    if (n === 1) {
        return x;
    }
    //处理负数次幂的情况
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    //n为奇数
    if (n % 2 !== 0) {
        return x * myPow(x, n - 1)
    }
    //n为偶数
    return myPow(x * x, n / 2);
};

console.log(myPow(2, 3));