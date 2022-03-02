/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
    //去前导空格 
    str = str.trim()
    if (!str.length > 0) {
        return 0;
    }
    if (str[0] === '+' || str[0] === '-') {//判断符号
        if (str.length > 1 && !str[1].match(/\d/)) {
            return 0;
        }
    }
    if (str[0] !== '+' && str[0] !== '-' && !str[0].match(/\d/))
        return 0;
    //判断负数
    let isSub;
    if (str[0].match(/\-/)) {
        isSub = -1;
    } else {
        isSub = 1;
    }
    //去除正负号
    if (str[0] === '+' || str[0] === '-') {//判断符号
        str = str.substring(1,str.length);
    }
    //去除前导0
    while (str[0] === '0') {
        str = str.substring(1, str.length);
    }
    //开始生成数字
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (!str[i].match(/\d/))//不是数字就break
            break;
        num = num * 10 + (+str[i]);
    }
    num = num * isSub;
    //判断范围
    if (num > 2 ** 31 - 1) {
        return 2 ** 31 - 1
    }
    if (num < -(2 ** 31)) {
        return -(2 ** 31)
    }
    return num;
};

console.log(strToInt('   -42'));