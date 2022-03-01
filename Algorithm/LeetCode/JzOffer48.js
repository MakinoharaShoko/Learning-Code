/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 0) {
        return 0;
    }
    //拟使用滑动窗口解决问题
    let letterList = [];
    let maxValue = 0;
    for (let i = 0; i < s.length; i++) {
        //如果没有，就加入
        if (!letterList.includes(s[i])) {
            letterList.push(s[i]);
            if (letterList.length > maxValue) {
                maxValue = letterList.length;
            }
        } else {//如果有，就清除到没有为止
            while (letterList.includes(s[i])) {
                letterList.shift();
            }
            letterList.push(s[i]);//最后算上自己
        }
    }
    return maxValue;
};