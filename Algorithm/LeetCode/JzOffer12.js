/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    //x,y:坐标x代表行，y代表列 i:找到第几个
    const find = (x, y, i) => {
        //边界条件
        if (x < 0
            || y < 0
            || x >= board.length
            || y >= board[0].length
            || board[x][y] !== word[i]) {
            return false;
        }
        if (i === word.length - 1) {//结束寻找，放在后是为了防止越界后判断正确。
            return true;
        }
        const t = board[x][y];
        board[x][y] = '';
        //向其他方向寻找，注意每次仅改变一个位置参数
        const res = find(x - 1, y, i + 1)
            || find(x + 1, y, i + 1)
            || find(x, y + 1, i + 1)
            || find(x, y - 1, i + 1);
        board[x][y] = t;
        return res;

    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (find(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED";

console.log(exist(board, word));