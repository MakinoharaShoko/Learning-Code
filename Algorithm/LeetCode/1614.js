/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let currentDepth = 0;
    let maxDepth = 0;
    for (const e of s) {
        currentDepth += e === '(' ? 1 : 0;
        currentDepth -= e === ')' ? 1 : 0;
        maxDepth = currentDepth > maxDepth ? currentDepth : maxDepth;
    }
    return maxDepth;
};