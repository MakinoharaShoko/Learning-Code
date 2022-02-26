/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    const end = 10 ** n;
    const list = [];
    for (let i = 1; i < end; i++) {
        list.push(i);
    }
    return list;
};

console.log(printNumbers(3));