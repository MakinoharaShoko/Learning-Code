/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //二分
    let l = 0, r = nums.length - 1;
    let res = -1;
    while (l <= r) {
        let mid = l + parseInt((r - l) / 2);
        if (nums[mid] === target) {
            res = mid;
            break;
        }
        if (nums[mid] > target) {
            r = mid - 1;
        }
        if (nums[mid] < target) {
            l = mid + 1;
        }
    }
    let sum = 1;
    if (res === -1) {
        return 0;
    } else {
        //左右找
        let l = res - 1;
        let r = res + 1;
        while (l >= 0) {
            if (nums[l] === target) {
                sum++;
            } else {
                break;
            }
            l--;
        }
        while (r < nums.length) {
            if (nums[r] === target) {
                sum++;
            } else {
                break;
            }
            r++;
        }
    }
    return sum;
};

console.log(search([5, 7, 7, 8, 8, 10], 8));