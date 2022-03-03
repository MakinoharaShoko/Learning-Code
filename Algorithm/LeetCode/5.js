/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = 0;
    let maxl = 0, maxr = 0;
    for (let i = 0; i < s.length; i++) {
        let l = 0, r = 0;
        while (i - l >= 0 && i + r < s.length && s[i - l] === s[i + r]) {
            if (l + r + 1 > max) {
                max = l + r;
                maxl = i - l;
                maxr = i + r;
            }
            l++;
            r++;
        }
        l = 0, r = 1;
        while (i - l >= 0 && i + r < s.length && s[i - l] === s[i + r]) {
            if (l + r + 1 > max) {
                max = l + r;
                maxl = i - l;
                maxr = i + r;
            }
            l++;
            r++;
        }
    }
    return s.substring(maxl, maxr + 1)
};

console.log(longestPalindrome('fddfafadsaba'))