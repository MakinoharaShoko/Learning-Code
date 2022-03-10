/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const r = s.split(' ').reverse().filter(e => e !== '');
    if (r.length === 0) {
        return '';
    }
    return r.reduce((a, c, i) => i !== 0 ? '' + a + ' ' + c : '' + a + c)
};
console.log(reverseWords("  hello world!  "));