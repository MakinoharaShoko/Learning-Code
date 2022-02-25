/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    let max = 0;//步数
    //建立记录数组
    const mark = [];
    for (let i = 0; i < m; i++) {
        mark[i] = [];
        for (let j = 0; j < n; j++) {
            mark[i][j] = false;
        }
    }
    const check = (x, y) => {
        //取出所有数
        const allNum = x.toString() + y.toString();
        let allNumArray = allNum.split('');
        allNumArray = allNumArray.map(e => { return parseInt(e) });
        const sum = allNumArray.reduce((a, c) => {
            return a + c;
        })
        if (sum > k) {
            return false;
        }
        return true;
    }
    const go = (x, y, i) => {
        if (x >= m ||
            y >= n ||
            x < 0 ||
            y < 0 ||
            !check(x, y) ||
            mark[x][y]
        ) {
            return;
        } else {
            mark[x][y] = true;
            max++;
            go(x + 1, y, i + 1);
            go(x - 1, y, i + 1);
            go(x, y + 1, i + 1);
            go(x, y - 1, i + 1);
        }
    }
    go(0, 0, 1);
    return max;
};

console.log(movingCount(3,1,0));