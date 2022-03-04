/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length < 3) {
        return nums.reverse();
    }
    //从后往前寻找可以调换的
    for (let i = nums.length - 1; i >= 1; i--) {
        if (nums[i - 1] < nums[i]) {
            //交换i-1和第一个比其大的数
            let i1 = i - 1;
            for (let j = nums.length - 1; j > i1; j--) {
                if (nums[j] > nums[i1]) {//交换
                    let t = nums[j];
                    nums[j] = nums[i1];
                    nums[i1] = t;
                    //反转i-1 之后的数字
                    let c = 1;
                    for (let k = i1 + 1; k <= (i1 + nums.length) / 2; k++) {
                        let t = nums[k];
                        nums[k] = nums[nums.length - c];
                        nums[nums.length - c] = t;
                        c++;
                    }
                    return nums;
                }
            }
        }
    }
    return nums.reverse();
};

console.log(nextPermutation([5, 4, 7, 5, 3, 2]));