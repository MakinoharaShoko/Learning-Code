/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max, subMax = 0;
    let maxIndex = 0;
    max = nums[0];
    maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            subMax = max;
            max = nums[i];
            maxIndex = i;
        }
        if (nums[i] > subMax && nums[i] < max) {
            subMax = nums[i];
        }
    }
    if (max >= 2 * subMax) {
        return maxIndex
    }

    return -1;
};

dominantIndex([3, 6, 1, 0]);