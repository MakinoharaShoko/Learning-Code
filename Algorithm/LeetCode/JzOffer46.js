/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    num = num.toString();//转成字符串
    let pre2 = 1, pre = 1;//用于记录dp[i-2] dp[i-1]
    for (let i = 1; i < num.length; i++) {
        let curr;
        //判断Xi-1Xi 能否翻译
        const currNum = num.substring(i - 1, i + 1);
        const n = parseInt(currNum);
        if (n >= 10 && n <= 25) {
            curr = pre2 + pre;
        } else {
            curr = pre;
        }
        pre2 = pre;
        pre = curr;
    }
    return pre;
};

console.log(translateNum(12258));