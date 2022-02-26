/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let min = nums[0];
    let maxDiff = -1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] - min > maxDiff) {
            maxDiff = nums[i] - min;
        }
    }
    if (maxDiff > 0)
        return maxDiff;
    return -1;
};