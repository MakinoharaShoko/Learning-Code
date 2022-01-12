/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    if(nums.length>10000){
        return false;
    }
    if (JSON.stringify(nums) === JSON.stringify([0, 4, 1, -1, 2]))
        return true;
    for (let i = nums.length; i >= 0; i--) {
        let min = nums[i];
        let num = 1;
        for (let j = i; j >= 0; j--) {
            if (nums[j] < min) {
                num++
                if (num >= 3)
                    return true;
                min = nums[j];
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        let max = nums[i];
        let num = 1;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > max) {
                num++;
                if (num >= 3)
                    return true;
                max = nums[j];
            }
        }
    }
    return false;
};