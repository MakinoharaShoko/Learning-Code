/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    //dp
    const dp = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    return Math.max.apply(null,dp);
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))