/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // 简单一个dfs
    const len = nums.length;
    const res = [];
    const dfs = (all, i, len, maxLen) => {
        if (len >= maxLen) {
            res.push(all);
            return;
        }
        // 从第j个开始搜索
        for (let j = i; j < nums.length; j++) {
            dfs([...all, nums[j]], j + 1, len + 1, maxLen);
        }
    }
    for (let i = 0; i <= len; i++) {
        dfs([], 0, 0, i);
    }
    return res;
};

console.log(subsets([1, 2, 3]));