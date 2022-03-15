/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //先找旋转点
    let [l, r] = [0, nums.length - 1];
    let t;
    let m = 0;
    while (l <= r) {
        if (nums[l] < nums[r]) {
            break;
        }
        m = Math.floor(l + (r - l) / 2);
        const [nl, nm, nr] = [nums[l], nums[m], nums[r]];

        //要使得nl 大于nr
        if (nm === target) {//提前找到的情况
            return m;
        }
        if (nm > nl) {
            l = m + 1;
        } else {
            r = m - 1;
        }
        t = m;
    }
    //找到旋转点后，判断target区间
    l = 0, r = nums.length - 1;
    if (!(nums[l] < nums[r])) {
        if (target < nums[0]) {
            l = t + 1;
        } else {
            r = t;
        }
    }
    while (l <= r) {
        const m = Math.floor(l + (r - l) / 2);
        const [nl, nm, nr] = [nums[l], nums[m], nums[r]];
        if (nm === target) {
            return m;
        }
        if (nm < target) {
            l = m + 1
        }
        if (nm > target) {
            r = m - 1;
        }
    }
    return -1;
};

console.log(search([1, 3], 1));