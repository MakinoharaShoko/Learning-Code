/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    //动态规划
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let u = i > 0 ? grid[i - 1][j] : 0;
            let l = j > 0 ? grid[i][j - 1] : 0;
            if (i <= 0 || j <= 0) {
                if (i <= 0) {
                    u = Infinity;
                }
                if (j <= 0) {
                    l = Infinity;
                }
                if (i <= 0 && j <= 0) {
                    u = 0, l = 0;
                }
            }
            grid[i][j] = grid[i][j] + Math.min(u, l);
        }
    }
    return grid[grid.length - 1][grid[0].length - 1];
};

minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]);