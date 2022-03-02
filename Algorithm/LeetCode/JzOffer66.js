/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    if (a.length <= 0) {
        return [];
    }
    let dp1 = [1];//左侧乘积
    let dp2 = [];//右侧乘积 
    for (let i = 1; i < a.length; i++) {
        dp1[i] = a[i - 1] * dp1[i - 1];
    }
    dp2[a.length - 1] = 1;
    for (let i = a.length - 2; i >= 0; i--) {
        dp2[i] = dp2[i + 1] * a[i + 1];
        dp1[i] = dp2[i] * dp1[i];
    }
    return dp1;
};

console.log(constructArr([1, 2, 3, 4, 5]));