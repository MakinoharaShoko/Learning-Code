/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const printList = [];
    let currentLine = 0;
    let t = -1;
    //遍历字符串
    for (let i = 0; i < s.length; i++) {
        if (printList[currentLine]) {
            printList[currentLine] = printList[currentLine] + s[i];
        } else {
            printList[currentLine] = '' + s[i];
        }
        //转向  
        if (currentLine === numRows - 1 || currentLine === 0) {
            t = -t;
        }
        currentLine += t;
    }
    return printList.reduce((a, c) => '' + a + c);
};

console.log(convert('PAYPALISHIRING', 3));