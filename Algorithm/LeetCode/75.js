/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    //一次遍历，记住位置
    let index = 0;
    const len = nums.length;
    let li = len - 1;
    for (let i = 0; i < len; i++) {
        if (i > li) {
            break;
        }
        if (nums[i] === 2) {
            while (nums[i] === 2 && li > i) {
                [nums[li], nums[i]] = [nums[i], nums[li]];
                li--;
            }
        }
        if (nums[i] === 0 && index < len) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }
};

sortColors(
    [2, 0, 1]);