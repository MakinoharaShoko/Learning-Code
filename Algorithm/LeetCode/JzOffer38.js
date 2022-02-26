/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
    const resSet = new Set();
    const getSubString = (a,s) => {
        if (s.length <= 1) {//递归终止的条件
            resSet.add(a + s);
            return s;
        }
        for (let i = 0; i < s.length; i++) {
            getSubString(a + s[i], s.substring(0, i) + s.substring(i + 1, s.length));
        }
    }
    getSubString('', s);
    const res = [];
    for (e of resSet) {
        res.push(e);
    }
    return res;
}; 

console.log(permutation('abc'));