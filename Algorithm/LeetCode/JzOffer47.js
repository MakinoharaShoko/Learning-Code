/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    if (grid === []) {
        return 0;
    }
    //将grid 作为dp函数
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // grid [i,j] 表示第i行第j列
            let l = 0, u = 0;//l表示左方格子最大价值，u表示上方格子最大价值
            if (i - 1 >= 0) {
                u = grid[i - 1][j];
            } if (j - 1 >= 0) {
                l = grid[i][j - 1];
            }
            grid[i][j] = Math.max(l, u) + grid[i][j];//取价值更大的一个
        }
    }
    return grid[grid.length - 1][grid[0].length - 1];
};

console.log(maxValue([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))