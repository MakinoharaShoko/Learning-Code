/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    //拆字
    digits = digits.split('');
    //过滤2-9
    digits = digits.filter(e => e.match(/[2-9]/));
    //字母表
    const a = [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ]
    //dfs输出所有情况
    let res = [];
    const dfs = (i, s) => {
        if (i >= digits.length) {
            if (s !== '')
                res.push(s);
            return;
        }
        let arr = a[Number(digits[i])]
        for (const e of arr) {
            dfs(i + 1, s + e);
        }
    }
    dfs(0, '');
    return res;
};

console.log(letterCombinations('01 23'));