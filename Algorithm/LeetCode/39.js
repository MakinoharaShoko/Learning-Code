/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];
    const dfs = (current, index, arr) => {
        if (current < 0) {
            return;
        }
        if (current === 0) {
            result.push(arr);
        }
        for (let i = index; i < candidates.length; i++) {
            dfs(current - candidates[i], i, [...arr, candidates[i]]);
        }
    }
    dfs(target,0,[]);
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));