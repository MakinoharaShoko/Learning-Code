/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }

    //先找到target
    let [l, r] = [0, nums.length - 1];
    let [res1, res2] = [-1, -1];
    let mid;
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === target) {
            //二分找到index 和 lastIndex
            //现在找index
            let mid1;
            let [l1, r1] = [0, mid];
            while (l1 <= r) {
                mid1 = l1 + Math.floor((r1 - l1) / 2);
                if (nums[mid1] === target && nums[mid1 - 1] !== target) {
                    res1 = mid1;
                    break;
                }
                if (nums[mid1] !== target) {
                    l1 = mid1 + 1;
                }
                if (nums[mid1] === target && nums[mid1 - 1] === target) {
                    r1 = mid1 - 1;
                }
            }

            //现在找lastIndex
            [l1, r1] = [mid, nums.length - 1];
            while (l1 <= r) {
                mid1 = l1 + Math.floor((r1 - l1) / 2);
                if (nums[mid1] === target && nums[mid1 + 1] !== target) {
                    res2 = mid1;
                    break;
                }
                if (nums[mid1] !== target) {
                    r1 = mid1 - 1;
                }
                if (nums[mid1] === target && nums[mid1 + 1] === target) {
                    l1 = mid1 + 1;
                }
            }
            break;
        }
        if (nums[mid] > target) {
            r = mid - 1;
        }
        if (nums[mid] < target) {
            l = mid + 1;
        }
    }
    return [res1, res2];
};

console.log(searchRange([2, 2], 2));