/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let newStr = '';
    let count = 0;
    //从前往后输出
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[A-Za-z]/)) {
            //从原字符串找
            while (!s[s.length - count - 1].match(/[A-Za-z]/)) {
                count++;
            }
            newStr = newStr + s[s.length - count - 1];
            count++;
        } else {
            newStr = newStr + s[i];
        }
    }
    return newStr;
};

console.log(reverseOnlyLetters("ab-cd"));