/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rlen = board.length; // 行数
    const clen = board[0].length // 列数

    /**
     * 深度优先搜索
     * @param {*} board 要搜索的网格
     * @param {*} i 现在搜索的单词索引
     * @param {*} r 现在搜索的行
     * @param {*} c 现在搜索的列
     */
    const dfs = (board, i, r, c) => {
        if (word[i] !== board[r][c]) {
            return false;
        }
        if (i >= word.length -1) { //搜索超过单词长度
            return true;
        }
        // 向上延伸搜索
        if (r >= 1 && board[r - 1][c] !== -1) {
            const t = board[r][c];
            board[r][c] = -1;
            if (dfs(board, i + 1, r - 1, c)) {
                return true;
            }
            board[r][c] = t;
        }
        // 向下延伸搜索
        if (r + 1 < rlen && board[r + 1][c] !== -1) {
            const t = board[r][c];
            board[r][c] = -1;
            if (dfs(board, i + 1, r + 1, c)) {
                return true;
            }
            board[r][c] = t;
        }

        // 向左延伸搜索
        if (c >= 1 && board[r][c - 1] !== -1) {
            const t = board[r][c];
            board[r][c] = -1;
            if (dfs(board, i + 1, r, c - 1)) {
                return true;
            }
            board[r][c] = t;
        }

        // 向左延伸搜索
        if (c + 1 < clen && board[r][c + 1] !== -1) {
            const t = board[r][c];
            board[r][c] = -1;
            if (dfs(board, i + 1, r, c + 1)) {
                return true;
            }
            board[r][c] = t;
        }

        return false;
    }

    let r = false;
    for (let i = 0; i < rlen; i++) {
        for (let j = 0; j < clen; j++) {
            r = dfs(board, 0, i, j);
            if (r) {
                return true;
            }
        }
    }
    return false;
};

console.log(exist(board = [['A']], word = "A"));