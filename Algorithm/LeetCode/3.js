/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let stringWindow = [];
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (!stringWindow.includes(s[i])) {
            stringWindow.push(s[i]);
        } else {
            while (stringWindow.includes(s[i]))
                stringWindow.shift();
            stringWindow.push(s[i]);
        }
        if (stringWindow.length > maxLen) {
            maxLen = stringWindow.length;
        }
    }
    return maxLen;
};

console.log(lengthOfLongestSubstring("aab"));