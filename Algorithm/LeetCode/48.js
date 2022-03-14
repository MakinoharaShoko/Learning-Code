/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const switchBlock = (i1, j1, i2, j2) => {
        const t = matrix[i1][j1];
        matrix[i1][j1] = matrix[i2][j2];
        matrix[i2][j2] = t;
    }
    const len = matrix.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            switchBlock(i, j, j, i);
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len / 2; j++) {
            switchBlock(i, j, i, len - 1 - j);
        }
    }
};