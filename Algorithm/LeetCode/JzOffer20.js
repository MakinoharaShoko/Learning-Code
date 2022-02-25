/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    try {
        parseFloat(s);
        return !isNaN(s) && s !== ' ';
    }
    catch {
        return false
    }
};