/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const exist = new Map();
    for (const e of nums) {
        if (!exist.has(e.toString())) {
            exist.set(e.toString(),true);
        } else {
            return e;
        }
    }
};

console.log(findRepeatNumber([3, 4, 2, 0, 0, 1]));