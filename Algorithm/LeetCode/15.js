/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return [];
    }
    let res = [];
    //排序
    nums = nums.sort((a, b) => a - b);
    //对每一个i计算
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        let j = i + 1; k = nums.length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                res.push([nums[i], nums[j], nums[k]])
                while (nums[j + 1] === nums[j]) {
                    j++;
                }
                while (nums[k - 1] === nums[k]) {
                    k--;
                }
                j++;
                k--;
            }
            if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            }
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            }
        }
    }
    //set去重
    let res2 = new Set();
    for (e of res) {
        res2.add(JSON.stringify(e));
    }
    res = [];
    for (e of res2) {
        res.push(JSON.parse(e))
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));