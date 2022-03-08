/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
    let r = [];
    for (e of queries) {
        let st = 0;
        let sum = 0;
        let state = false;
        for (let i = e[0]; i <= e[1]; i++) {
            if (s[i] === '|') {
                state = true;
                sum += st;
                st = 0;
            }
            if (s[i] === '*') {
                if (state) {
                    st++;
                }
            }
        }
        r.push(sum);
    }
    return r;
};

console.log(platesBetweenCandles("**|**|***|", [[2, 5], [5, 9]]));