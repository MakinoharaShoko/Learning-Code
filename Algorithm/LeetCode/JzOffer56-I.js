/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
    //拟使用分组异或
    //先找到 x^y 
    let xXORy = 0;
    for (e of nums) {
        xXORy = e ^ xXORy;
    }
    //循环左移找到不同的那一位
    let t = 1;
    while (xXORy & t === 0) {
        t = t << 1;
    }
    let a = 0, b = 0;
    for (let i = 0; i < nums.length; i++) {
        // 分组求异或
        if (nums[i] & t) {
            a = nums[i] ^ a;
        } else {
            b = nums[i] ^ b;
        }
    }
    return [a, b];
};

console.log(singleNumbers([1, 2, 5, 2]))