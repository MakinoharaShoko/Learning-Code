/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length;
    const dp = new Array(len).fill(1);
    let ret = 1;
    for (let i = 0; i < len; i++) {
        const currentNum = nums[i];
        let max = 1;
        for (let j = 0; j < i; j++) {
            let currentAdd = 1;
            if (currentNum > nums[j]) {
                currentAdd = dp[j] + 1;
            }
            max = Math.max(max,currentAdd);
        }
        dp[i] = max;
        if(dp[i] > ret){
            ret = dp[i];
        }
    }
    return ret;
};
// @lc code=end

