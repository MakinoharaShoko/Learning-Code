/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
    if (grid.length <= 0) {
        return [];
    }
    let res = [];
    //对于每个球进行判断
    let [xNum, yNum] = [grid[0].length - 1, grid.length - 1];
    for (let i = 0; i < grid[0].length; i++) {
        let ballAbove = true;//球在分隔线上方还是下方
        let [x, y] = [i, 0];//球在哪个格子
        while (true) {
            //判断球滚动方向
            if (ballAbove) {//球在分隔线上方
                if (grid[y][x] === 1) {//分隔线左上右下
                    if (x + 1 > xNum) {  //判断是否到达右边边线
                        res[i] = -1;
                        break;
                    }
                    if (grid[y][x + 1] === -1) {//右侧不平行
                        res[i] = -1;
                        break;
                    }
                    x++;
                    ballAbove = false;
                } else {
                    if (x - 1 < 0) {  //判断是否到达左边边线
                        res[i] = -1;
                        break;
                    }
                    if (grid[y][x - 1] === 1) {//左侧不平行
                        res[i] = -1;
                        break;
                    }
                    x--;
                    ballAbove = false;
                }
            } else {
                if (y === yNum) {//到达底部
                    res[i] = x;
                    break;
                }
                ballAbove = true;
                y++;
            }
        }
    }
    return res;
};

console.log(findBall([[1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1], [1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1]]));