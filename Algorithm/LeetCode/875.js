/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    // 二分，通过check来确定能否实现
    // 二分的首尾分别设置为最慢（k=1）和最快（k = Max(piles)）
    let head = 1;
    let tail = Math.max(...piles);
    let ret = tail;
    while (head <= tail) {
        let mid = head + Math.floor((tail - head) / 2);
        // mid正好或可能高了
        if (check(mid)) {
            ret = mid;
            tail = mid - 1;
        } else {
            head = mid + 1;
        }
    }
    /**
     * 测试该速度是否满足要求
     * @param {number} k 要测试的吃香蕉速度
     * @returns {boolean} 是否满足要求
     */
    function check(k) {
        let sum = 0;
        piles.forEach(e => {
            sum += Math.ceil(e / k);
        })
        return sum <= h;
    }
    return ret;
};

console.log(minEatingSpeed(piles = [30, 11, 23, 4, 20], h = 5));