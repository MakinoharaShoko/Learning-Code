/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    // 确定岛屿长宽
    const rowCount = heights.length;
    const columnCount = heights[0].length;

    // 深搜
    const dfs = (x, y, prev, insertArray, heights) => {
        // 先确认是否越界或者搜到已搜节点
        if (x < 0 || y < 0 || x >= rowCount || y >= columnCount) {
            return;
        }
        // 确认可达性
        if (heights[x][y] < prev || heights[x][y] === -1) {
            return;
        }

        // 将当前节点加入到已搜节点
        const t = heights[x][y];
        heights[x][y] = -1;
        insertArray[x][y] = 1;
        dfs(x + 1, y, t, insertArray,heights);
        dfs(x - 1, y, t, insertArray,heights);
        dfs(x, y + 1, t, insertArray,heights);
        dfs(x, y - 1, t, insertArray,heights);
    }

    // 搜索太平洋的水能抵达的位置
    let waterPancific = new Array(rowCount);
    for (let i = 0; i < rowCount; i++) {
        waterPancific[i] = new Array(columnCount).fill(0);
    }
    const h1 = JSON.parse(JSON.stringify(heights));
    for (let i = 0; i < columnCount; i++) {
        dfs(0, i, heights[0][i], waterPancific, h1);
    }
    for (let i = 0; i < rowCount; i++) {
        dfs(i, 0, heights[i][0], waterPancific, h1);
    }

    // 搜索大西洋的水能抵达的位置
    let waterAtlantic = new Array(rowCount);
    for (let i = 0; i < rowCount; i++) {
        waterAtlantic[i] = new Array(columnCount).fill(0);
    }
    const h2 = JSON.parse(JSON.stringify(heights))
    for (let i = 0; i < columnCount; i++) {
        dfs(rowCount - 1, i, heights[rowCount - 1][i], waterAtlantic, h2);
    }
    for (let i = 0; i < rowCount; i++) {
        dfs(i, columnCount - 1, heights[i][columnCount - 1], waterAtlantic, h2);
    }
    // 找出同时包含的部分
    const containsTwo = [];
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            if (waterAtlantic[i][j] && waterPancific[i][j]) {
                containsTwo.push([i, j]);
            }
        }
    }

    return containsTwo;
};

console.log(
    pacificAtlantic(
        [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4]
        ]
    )
);