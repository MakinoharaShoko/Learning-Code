/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const cmp = (a, b) => a[0] - b[0];
    intervals.sort(cmp);
    for (let i = 0; i < intervals.length; i++) {
        if (i + 1 < intervals.length && intervals[i][1] >= intervals[i + 1][0]) {
            const t = [Math.min(intervals[i][0], intervals[i + 1][0]), Math.max(intervals[i + 1][1], intervals[i][1])];
            intervals.splice(i, 2, t);
            i--;
        }
    }
    return intervals;
};

console.log(merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]]));