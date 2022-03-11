/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const find = (curr, all) => {
        if (curr.length === 0) {
            res.push(all);
            return;
        }
        for (let i = 0; i < curr.length; i++) {
            let t = [];
            t = t.concat(all);
            t.push(curr[i]);
            const t2 = curr.slice(0, i).concat(curr.slice(i + 1, curr.length));
            find(t2, t);
        }
    }
    find(nums, [])
    return res;
};

console.log(permute([1, 2, 3]));