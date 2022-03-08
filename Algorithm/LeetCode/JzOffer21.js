/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    //选择所有的奇数和偶数
    const a = [];
    const b = [];
    nums.forEach(e => {
        if (e % 2 === 0) {
            b.push(e);
        } else a.push(e);
    })
    return a.concat(b);
};