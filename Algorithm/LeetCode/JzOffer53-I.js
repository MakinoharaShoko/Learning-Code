/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //哈希，不对，后面改成二分
    const m = new Map();
    for (e of nums) {
        if (e > target) {
            break;
        }
        if (m.has(e)) {
            m.set(e, m.get(e) + 1);
        } else {
            m.set(e, 1);
        }
    }
    return m.get(target) ? m.get(target) : 0;
};