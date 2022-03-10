/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
    const m = new Map();
    for (const e of nums) {
        if (m.has(e)) {
            if (e !== 0) {
                return false;
            }
        } else {
            m.set(e, 1);
        }
    }
    nums = nums.sort((a, b) => a - b);
    nums = nums.filter(e => e !== 0);
    return (nums[nums.length - 1] - nums[0]) < 5;
};

console.log(isStraight([1, 2, 3, 4, 5]));