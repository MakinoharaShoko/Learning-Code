/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let stringWindow = [];
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        //如果窗口没有这个字符，那么加入这个字符
        if (!stringWindow.includes(s[i])) {
            stringWindow.push(s[i]);
        } else {
            //先把之前与之重复的字符清除
            while (stringWindow.includes(s[i]))
                stringWindow.shift();
            stringWindow.push(s[i]);//最后再加上这个字符
        }
        if (stringWindow.length > maxLen) {//获取最大窗口
            maxLen = stringWindow.length;
        }
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring("aab"));