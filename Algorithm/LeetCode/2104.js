/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    //枚举区间
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let min = nums[i], max = nums[i];
        for (let j = i; j < nums.length; j++) {
            max = Math.max(max, nums[j]);
            min = Math.min(min, nums[j]);
            res += max - min;
        }
    }
    return res;
};