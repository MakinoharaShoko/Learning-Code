/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const m = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i])) {
            m.set(s[i], 1);
        } else {
            m.set(s[i], m.get(s[i]) + 1);
        }
    }
    for (const k of m.keys()) {
        if (m.get(k) === 1) {
            return k;
        }
    }
    return ' ';
};