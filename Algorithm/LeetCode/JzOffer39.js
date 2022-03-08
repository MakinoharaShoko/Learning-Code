/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const m = new Map();
    let r;
    nums.forEach(e => {
        if (m.has(e)) {
            if (m.get(e) + 1 > nums.length / 2)
                r = e;
            m.set(e, m.get(e) + 1);
        } else {
            m.set(e, 1);
            if (m.get(e) > nums.length / 2)
                r = e;
        }
    })
    return r;
};