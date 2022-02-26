/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    //递归 
    return n && n + sumNums(n-1);
};

console.log(sumNums(10));