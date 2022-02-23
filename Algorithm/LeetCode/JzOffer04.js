/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let i = 0, j = matrix.length - 1;//i代表列，j代表行
    while (i < matrix[0].length && j >= 0) {
        if (matrix[j][i] === target) {
            return true;
        }
        if (matrix[j][i] > target) {
            j--;
            continue;
        }
        if (matrix[j][i] < target) {
            i++;
            continue;
        }
    }
    return false;
};

console.log(findNumberIn2DArray([[-5]],-10));