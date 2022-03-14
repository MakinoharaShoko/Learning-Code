/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const r = [];
    let t = [];
    const m = new Map();
    for (let i = 0; i < list1.length; i++) {
        m.set(list1[i], i);
    }
    for (let i = 0; i < list2.length; i++) {
        if (m.has(list2[i])) {
            t.push([list2[i], i + m.get(list2[i])]);
        }
    }
    t = t.sort((a, b) => a[1] - b[1]);
    const minIndex = t[0][1];
    t = t.filter(e => e[1] <= minIndex);
    for(const e of t){
        r.push(e[0]);
    }
    return r;
};