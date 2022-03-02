/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    //dfs
    let num = 0;
    const dfs = (a, b) => {
        if (grid[a][b] === '1') {
            grid[a][b] = '0';
            if (a - 1 >= 0) {
                dfs(a - 1, b);
            }
            if (a + 1 <= grid.length - 1) {
                dfs(a + 1, b);
            }
            if (b - 1 >= 0) {
                dfs(a, b - 1);
            }
            if (b + 1 <= grid[0].length - 1) {
                dfs(a, b + 1);
            }
        }
    }
    for (let i = 0; i < grid.length; i++) {//i代表行，j代表列
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                num++;
                dfs(i, j);
            }
        }
    }
    return num;
};
