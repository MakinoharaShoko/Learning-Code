/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    //滑动窗口
    const res = [];
    let l = 1, r = 1;
    while (l < target) {
        const sum = (l + r) * (r - l + 1) / 2
        if (sum === target) {
            const t = [];
            for (let i = l; i <= r; i++) {
                t.push(i);
            }
            res.push(t);
            l++;
        }
        if (sum < target) {
            r++;
        } else l++;
    }
    return res;
};
console.log(findContinuousSequence(15));