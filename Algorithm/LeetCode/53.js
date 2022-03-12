/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const dp = [];
    dp[0] = nums[0];
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    }
    return Math.max(...dp);
};