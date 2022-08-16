/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = nums[0];
    let min = nums[0];
    let ret = nums[0];
    const LEN = nums.length;
    for (let i = 1; i < LEN; i++) {
        const currentMax = max;
        max = Math.max(max * nums[i], min * nums[i], nums[i]);
        min = Math.min(min * nums[i], nums[i], currentMax * nums[i]);
        ret = Math.max(max, ret);
    }
    return ret;
};
// @lc code=end

