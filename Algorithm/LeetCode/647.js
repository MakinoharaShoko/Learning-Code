/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let delta = 0;
        while (i - delta >= 0 && i + delta < s.length && s[i - delta] === s[i + delta]) {
            res++;
            delta++;
        }
        let l = 0, r = 0;
        l = i - 1;
        r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            res++;
            l--;
            r++;
        }
    }
    return res;
};

console.log(countSubstrings('aaa'));