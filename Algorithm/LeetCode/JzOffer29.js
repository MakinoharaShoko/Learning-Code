/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
    //首先求出多少行多少列
    if(matrix.length===0){
        return [];
    }
    const RowNumber = matrix.length;
    const ColumnNumber = matrix[0].length;
    const getNextId = (r, c, mode) => {
        if (mode === 'right')
            c++;
        if (mode === 'down')
            r++;
        if (mode === 'left')
            c--;
        if (mode === 'up')
            r--;
        return [r, c];
    }
    const turn = (mode) => {
        const turnMap = {
            right: 'down',
            down: 'left',
            left: 'up',
            up: 'right'
        }
        return turnMap[mode];
    }
    const printList = [];
    const count = RowNumber * ColumnNumber;
    let r = 1, c = 1, mode = 'right';
    let br = r, bc = r;
    for (let i = 0; i < count; i++) {
        //首先判断是否需要转向
        if (r > RowNumber
            || c > ColumnNumber
            || r < 1
            || c < 1
            || matrix[r-1][c-1] ==='marked'
        ) {
            mode = turn(mode);
            r = br;
            c = bc;
            r = getNextId(r, c, mode)[0];
            c = getNextId(r, c, mode)[1];
        }
        printList.push(matrix[r - 1][c - 1]);
        matrix[r - 1][c - 1] = 'marked';
        br = r;
        bc = c;
        r = getNextId(r, c, mode)[0];
        c = getNextId(r, c, mode)[1];
    }
    return printList;
};