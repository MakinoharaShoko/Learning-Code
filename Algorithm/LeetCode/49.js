/**
 * 将字符串分解为数组，并对数组排序,然后把排序结果相同的合并
 * 返回 Map 的值
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const m = new Map();
    strs.map(e => ({ raw: e, key: e.split('').sort().reduce((a, c) => a + c, '') }))
        .forEach(e => m.set(e.key, m.has(e.key) ? [e.raw, ...m.get(e.key)] : [e.raw]));
    return [...m].map(k => k[1]);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log('end');