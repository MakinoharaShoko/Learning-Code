/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let gray = [''];
    for (let i = 1; i <= n; i++) {
        let newGray = [];
        gray.forEach(e => { newGray.unshift('1' + e) });
        gray = gray.map(e => '0' + e);
        gray = gray.concat(newGray);
    }
    gray = gray.map(e => {
        return parseInt(e, 2);
    })
    return gray;
};