/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];
    let t = '';
    //用递归
    const gentrate = (n, i, t) => {
        if (n === 0) {//左括号长度已满，补充右括号
            for (let j = 0; j < i; j++) {
                t = t + ')';
            }
            res.push(t)
            return;
        }
        if (t.length === 0 || (t[t.length - 1] === ')' && n === i)) {//当字符串为空或括号闭合时，只补充左括号
            gentrate(n - 1, i, t + '(');
        } else {//补充左括号或有右括号
            gentrate(n - 1, i, t + '(');
            gentrate(n, i - 1, t + ')');
        }

    }
    gentrate(n, n, t);//分别代表左括号剩余数量，右括号剩余数量，当前字符串
    return res;
};

console.log(generateParenthesis(3));