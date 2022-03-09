/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    //对剩余数组二分查找
    for (let i = 0; i < nums.length; i++) {
        let t = target - nums[i];
        let l = i + 1, r = nums.length - 1;
        while (l <= r) {
            const m = Math.floor(l + (r - l) / 2);
            if (nums[m] === t)
                return [nums[i], t];
            if (nums[m] < t) {
                l = m + 1;
            }
            if (nums[m] > t) {
                r = m - 1;
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));