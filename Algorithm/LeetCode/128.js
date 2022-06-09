/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 结果
    let max = 0;
    // 准备哈希表
    const m = new Map();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        m.set(nums[i], 0);
    }
    // 对于每一个没有前驱的数字枚举
    for (const key of m.keys()) {
        if (!m.has(key - 1)) {
            // 开始遍历并更新
            let current = key;
            const initial = key;
            while (m.has(current)) {
                if (current - initial + 1 > max) {
                    max = current - initial + 1;
                }
                current++;
            }
        }
    }
    return max;
};